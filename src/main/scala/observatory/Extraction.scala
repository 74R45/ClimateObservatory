package observatory

import java.time.LocalDate

import scala.collection.mutable
import scala.io.Source

/**
  * 1st milestone: data extraction
  */
object Extraction extends ExtractionInterface {

  /**
    * @param year             Year number
    * @param stationsFile     Path of the stations resource file to use (e.g. "/stations.csv")
    * @param temperaturesFile Path of the temperatures resource file to use (e.g. "/1975.csv")
    * @return A sequence containing triplets (date, location, temperature)
    */
  def locateTemperatures(year: Year, stationsFile: String, temperaturesFile: String): Iterable[(LocalDate, Location, Temperature)] = {
    def toCelsius(temp: Temperature): Temperature = (temp - 32) / 1.8

    val stationsStream = Source.fromInputStream(getClass.getResourceAsStream(stationsFile), "utf-8")
    val tempStream = Source.fromInputStream(getClass.getResourceAsStream(temperaturesFile), "utf-8")

    // Iterator of tuples (ids, location)
    val stationsData = stationsStream.getLines.map(_.split(","))
      .filter(_.length == 4).map {
      case Array(stn, wban, lat, lon) => ((stn, wban), Location(lat.toDouble, lon.toDouble))
    }.toIterable

    // Iterator of tuples (ids, date, temperature)
    val tempData = tempStream.getLines.map(_.split(",")).map {
      case Array(stn, wban, month, day, temp) =>
        ((stn, wban), LocalDate.of(year, month.toInt, day.toInt), toCelsius(temp.toDouble))
    }

    def getLocation(ids: (String, String)): Location = stationsData.find(_._1 == ids) match {
      case None => null
      case Some(v) => v._2
    }
    tempData.map{ case (ids, date, temp) => (date, getLocation(ids), temp) }.filter(_._2 != null).toIterable
  }

  /**
    * @param records A sequence containing triplets (date, location, temperature)
    * @return A sequence containing, for each location, the average temperature over the year.
    */
  def locationYearlyAverageRecords(records: Iterable[(LocalDate, Location, Temperature)]): Iterable[(Location, Temperature)] = {
    val res = new mutable.HashMap[Location, (Temperature, Int)]()
    for ((_, loc, temp) <- records)
      if (res.contains(loc)) {
        val (sum, n) = res(loc)
        res(loc) = (sum + temp, n + 1)
      } else res(loc) = (temp, 1)
    res mapValues (v => v._1 / v._2)
  }

  def locationYearlyAverageRecords(recordsFile: String): Iterable[(Location, Temperature)] = {
    val tempStream = Source.fromInputStream(getClass.getResourceAsStream(recordsFile), "utf-8")
    tempStream.getLines.map(_.split(","))
      .filter(_.length == 3).map {
      case Array(lat, lon, temp) => (Location(lat.toDouble, lon.toDouble), temp.toDouble)
    }.toIterable
  }

//  def locationYearlyAverageRecords(records: Iterable[(LocalDate, Location, Temperature)]): Iterable[(Location, Temperature)] = {
//    def avgTemp(temps: Iterable[Temperature]): Temperature = temps.sum / temps.size
//
//    records.groupBy(_._2) map {
//      case (loc, locRecords) => (loc, avgTemp(locRecords.map(_._3)))
//    }
//  }
}
