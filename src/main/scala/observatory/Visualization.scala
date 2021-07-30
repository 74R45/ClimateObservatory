package observatory

import com.sksamuel.scrimage.{Image, Pixel}

import scala.annotation.tailrec
import scala.math.{Pi, acos, cos, pow, sin, toRadians}

/**
  * 2nd milestone: basic visualization
  */
object Visualization extends VisualizationInterface {
  val EARTH_RADIUS = 6371d //km
  val P = 6d
  val CLOSE_ENOUGH = 1d //km

  /**
    * @param a Location of a point
    * @param b Location of another point
    * @return The distance (in km) between `a` and `b`
    */
  def distance(a: Location, b: Location): Double = {
    if (a == b) 0d
    else if (a.lat == -b.lat && a.lon == (b.lon + 360) % 360 - 180) EARTH_RADIUS * Pi
    else EARTH_RADIUS * acos(sin(toRadians(a.lat))*sin(toRadians(b.lat)) +
      cos(toRadians(a.lat))*cos(toRadians(b.lat))*cos(toRadians(b.lon - a.lon)))
  }

  /**
    * @param temperatures Known temperatures: pairs containing a location and the temperature at this location
    * @param location Location where to predict the temperature
    * @return The predicted temperature at `location`
    */
  def predictTemperature(temperatures: Iterable[(Location, Temperature)], location: Location): Temperature = {
    // Iterable[(distance between our point and ith point, temperature of ith point)]
    val distances = temperatures.map(x => (distance(location, x._1), x._2))

    def wFunc(ithDistance: Double): Double = 1d / pow(ithDistance, P)

    // Sum from 0 to N-1 of wi(x)*ui
    @tailrec
    def upper(dists: Iterable[(Double, Temperature)], temps: Iterable[(Location, Temperature)], acc: Double): Double =
      if (dists.isEmpty || temps.isEmpty) acc else upper(dists.tail, temps.tail, acc + wFunc(dists.head._1) * temps.head._2)

    // Sum from 0 to N-1 of wi(x)
    @tailrec
    def lower(dists: Iterable[(Double, Temperature)], acc: Double): Double =
      if (dists.isEmpty) acc else lower(dists.tail, acc + wFunc(dists.head._1))

    distances.find(_._1 < CLOSE_ENOUGH) match {
      case Some((_, temp)) => temp // if distance is less than 1km, take that point's temperature
      case None => upper(distances, temperatures, 0d) / lower(distances, 0d) // otherwise IDW
    }
  }

  // Without interpolation, gives a better visual representation of stations data
  def findTemperature(temperatures: Iterable[(Location, Temperature)], location: Location): Temperature = {
    val distances = temperatures.map(x => (distance(location, x._1), x._2))

    distances.find(_._1 < 500d) match {
      case Some((_, temp)) => temp
      case None => 60d
    }
  }

  /**
    * @param points Pairs containing a value and its associated color
    * @param value The value to interpolate
    * @return The color that corresponds to `value`, according to the color scale defined by `points`
    */
  def interpolateColor(points: Iterable[(Temperature, Color)], value: Temperature): Color = {
    def interpolate(v0: Int, v1: Int, t: Double): Int = math.round((1d - t) * v0 + t * v1).toInt

    val pointsSorted = points.toIndexedSeq.sortBy(_._1)

    val i = pointsSorted.indexWhere(_._1 >= value)
    if (i == 0) pointsSorted(0)._2
    else if (i == -1) pointsSorted.last._2
    else {
      val (p0, p1) = (pointsSorted(i-1), pointsSorted(i))
      val t = (value - p0._1) / (p1._1 - p0._1)
      Color(interpolate(p0._2.red, p1._2.red, t),
            interpolate(p0._2.green, p1._2.green, t),
            interpolate(p0._2.blue, p1._2.blue, t))
    }
  }

  /**
    * @param temperatures Known temperatures
    * @param colors Color scale
    * @return A 360×180 image where each pixel shows the predicted temperature at its location
    */
  def visualize(temperatures: Iterable[(Location, Temperature)], colors: Iterable[(Temperature, Color)]): Image = {
    val pixels = new Array[Pixel](360*180)

    for (y <- 0 until 180; x <- 0 until 360) {
      val color = interpolateColor(colors, predictTemperature(temperatures, Location(90-y, x-180)))
      pixels(y * 360 + x) = Pixel(color.red, color.green, color.blue, 255)
    }
    Image(360, 180, pixels)
  }
}
