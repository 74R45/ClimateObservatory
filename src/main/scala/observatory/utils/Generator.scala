package observatory.utils

import java.io.{File, FileNotFoundException, PrintWriter}
import com.sksamuel.scrimage.{Image, writer}
import observatory.Extraction.{locateTemperatures, locationYearlyAverageRecords}
import observatory.Interaction.{generateTiles, tile}
import observatory.Interaction2.{DEVI_COLORS, TEMP_COLORS}
import observatory.Manipulation.{average, deviation, loadGrid, makeGrid}
import observatory.Visualization2.visualizeGrid
import observatory._

import java.text.{NumberFormat, SimpleDateFormat}
import java.util.{Date, Locale}

object Generator {
  type Data = Iterable[(Location, Temperature)]
  type Grid = GridLocation => Temperature
  val LOGGING = true
  val NORMALS_START = 1975
  val NORMALS_END = 1990
  val YEAR_START_T = 1975
  val YEAR_END_T = 2015
  val YEAR_START_D = 1991
  val YEAR_END_D = 2015

  def main(args: Array[String]): Unit = {
    generateFolders()
    parseAvgData()
    parseNormalsData()
    generateTemperaturesViaGrids()
    generateDeviationsViaGrids()
  }

  // Generates temperature images by predicting each pixel based on already available station data
  def generateTemperatures(): Unit = {
    log(s"Initialization finished.")
    val yearlyData = (YEAR_START_T to YEAR_END_T).map(year =>
      (year, locationYearlyAverageRecords(s"/${year}_avg.csv")))

    def generateImage(year: Year, t: Tile, data: Data): Unit = {
      val res = tile(data, TEMP_COLORS, t)
      outputImage(res, year, t, LayerName.Temperatures.id)
    }

    generateTiles(yearlyData, generateImage)
  }

  // Generates temperature images by predicting each pixel based on previously generated Grids
  def generateTemperaturesViaGrids(): Unit = {
    log(s"Initialization finished.")
    val yearlyData = (YEAR_START_T to YEAR_END_T).map(year =>
      (year, makeGrid(locationYearlyAverageRecords(s"/${year}_avg.csv"))))

    def generateImage(year: Year, t: Tile, grid: Grid): Unit = {
      val res = visualizeGrid(grid, TEMP_COLORS, t)
      outputImage(res, year, t, LayerName.Temperatures.id)
    }

    generateTiles(yearlyData, generateImage)
  }

  // Generates deviation images by predicting each pixel based on previously generated Grids
  def generateDeviationsViaGrids(): Unit = {
    log(s"Initialization finished.")
    val normals = loadGrid(s"/normals.csv")
    log(s"Parsed normals data.")

    val deviationsData = (YEAR_START_D to YEAR_END_D).map(year =>
      (year, deviation(locationYearlyAverageRecords(s"/${year}_avg.csv"), normals)))
    log(s"Parsed deviations data.")

    def generateImage(year: Year, t: Tile, grid: Grid): Unit = {
      val res = visualizeGrid(grid, DEVI_COLORS, t)
      outputImage(res, year, t, LayerName.Deviations.id)
    }

    generateTiles(deviationsData, generateImage)
  }

  // Generates required folders in target/temperatures/ and target/deviations/
  def generateFolders(): Unit = {
    def generateFoldersForLayer(layerName: String, yearStart: Int, yearEnd: Int): Unit =
      for {
        year <- yearStart to yearEnd
        zoom <- 0 to 3
      } new File(s"target/$layerName/$year/$zoom").mkdirs()

    generateFoldersForLayer(LayerName.Temperatures.id, YEAR_START_T, YEAR_END_T)
    generateFoldersForLayer(LayerName.Deviations.id, YEAR_START_D, YEAR_END_D)
  }

  // Parses data of each year and saves it in a corresponding "${year}_avg.csv" file
  def parseAvgData(): Unit = {
    log("Started!")
    for (year <- (YEAR_START_T to YEAR_END_T).par) {
      if (!new File(s"src/main/resources/${year}_avg.csv").exists()) {
        // Parsing and processing the data
        val records = locateTemperatures(year, "/stations.csv", s"/$year.csv")
        val avg = locationYearlyAverageRecords(records)

        // Saving it in a .csv file
        val pw = new PrintWriter(new File(s"src/main/resources/${year}_avg.csv"))

        avg.map { case (Location(lat, lon), temp) =>
          s"${formatDouble(lat)},${formatDouble(lon)},${formatDouble(temp)}"
        }.foreach(pw.println)
        log(s"Year $year finished.")

        pw.flush()
        pw.close()
      } else log(s"Year $year has already been calculated.")
    }
    log("Done!")
  }

  // Generates AvgGrid, computes all of its GridLocations, and saves it in normals.csv
  def parseNormalsData(): Unit = {
    log("Started!")
    // Parsing and processing the data
    val normalsData = (NORMALS_START to NORMALS_END).map(year =>
      locationYearlyAverageRecords(s"/${year}_avg.csv"))
    val normals = average(normalsData)
    log(s"Parsed normals data.")

    // Saving it in a .csv file
    val pw = new PrintWriter(new File(s"src/main/resources/normals.csv"))
    var progress = 0d
    for (lat <- (-89 to 90).par; lon <- -180 to 179) {
      pw.println(s"$lat,$lon,${formatDouble(normals(GridLocation(lat, lon)))}")
      if (lon == 179) {
        progress += 1
        log(s"latitude $lat finished. (${formatDouble(progress/180*100)}%)")
      }
    }
    pw.flush()
    pw.close()
  }

  def outputImage(img: Image, year: Year, t: Tile, layerName: String): Unit = {
    try {
      img.output(new File(s"target/$layerName/$year/${t.zoom}/${t.x}-${t.y}.png"))
    } catch {
      case _: FileNotFoundException => img.output(
        new File(s"target/$layerName/$year-${t.zoom}-${t.x}-${t.y}.png"))
    }
    log(s"Generated image for year=$year, zoom=${t.zoom}, tile=${t.x}x${t.y}.")
  }

  val formatDouble: Double => String = {
    // To save floats as "1.03" rather than "1,03", which would break csv format
    val formatter = NumberFormat.getNumberInstance(Locale.UK)
    formatter.setMaximumFractionDigits(3)
    formatter.format
  }

  def log(text: String): Unit = if (LOGGING) println(
    s"${new SimpleDateFormat("H:m:s.S").format(new Date())}  $text")
}
