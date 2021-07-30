package observatory

import observatory.Visualization.predictTemperature

import scala.collection.mutable
import scala.io.Source

/**
  * 4th milestone: value-added information
  */
object Manipulation extends ManipulationInterface {

  /**
    * @param temperatures Known temperatures
    * @return A function that, given a latitude in [-89, 90] and a longitude in [-180, 179],
    *         returns the predicted temperature at this location
    */
  def makeGrid(temperatures: Iterable[(Location, Temperature)]): GridLocation => Temperature = Grid(temperatures)

  case class Grid(temperatures: Iterable[(Location, Temperature)]) extends (GridLocation => Temperature) {
    val storedTemps = new mutable.OpenHashMap[GridLocation, Temperature](180*360)

    def apply(loc: GridLocation): Temperature = {
      val temp = storedTemps.get(loc)
      temp match {
        case Some(t) => t
        case None =>
          val t = predictTemperature(temperatures, Location(loc.lat, loc.lon))
          storedTemps(loc) = t
          t
      }
    }
  }

  def loadGrid(recordsFile: String): GridLocation => Temperature = {
    val tempStream = Source.fromInputStream(getClass.getResourceAsStream(recordsFile), "utf-8")
    val storedTemps = new mutable.OpenHashMap[GridLocation, Temperature](180*360)
    tempStream.getLines.map(_.split(",")).filter(_.length == 3).foreach {
      case Array(lat, lon, temp) => storedTemps(GridLocation(lat.toInt, lon.toInt)) = temp.toDouble
    }
    storedTemps
  }

  /**
    * @param temperaturess Sequence of known temperatures over the years (each element of the collection
    *                      is a collection of pairs of location and temperature)
    * @return A function that, given a latitude and a longitude, returns the average temperature at this location
    */
  def average(temperaturess: Iterable[Iterable[(Location, Temperature)]]): GridLocation => Temperature =
    AvgGrid(temperaturess map makeGrid)

  case class AvgGrid(grids: Iterable[GridLocation => Temperature]) extends (GridLocation => Temperature) {
    def apply(loc: GridLocation): Temperature = {
      val temps = grids.map(_(loc))
      temps.sum / temps.size
    }
  }

  /**
    * @param temperatures Known temperatures
    * @param normals A grid containing the “normal” temperatures
    * @return A grid containing the deviations compared to the normal temperatures
    */
  def deviation(temperatures: Iterable[(Location, Temperature)], normals: GridLocation => Temperature): GridLocation => Temperature =
    DeviationGrid(temperatures, normals)

  case class DeviationGrid(temperatures: Iterable[(Location, Temperature)], normals: GridLocation => Temperature)
    extends (GridLocation => Temperature) {
    val storedDeviations = new mutable.OpenHashMap[GridLocation, Temperature](180*360)

    def apply(loc: GridLocation): Temperature = {
      val temp = storedDeviations.get(loc)
      temp match {
        case Some(d) => d
        case None =>
          val d = predictTemperature(temperatures, Location(loc.lat, loc.lon)) - normals(loc)
          storedDeviations(loc) = d
          d
      }
    }
  }
}
