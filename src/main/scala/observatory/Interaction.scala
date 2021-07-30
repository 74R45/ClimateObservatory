package observatory

import com.sksamuel.scrimage.{Image, Pixel}
import observatory.Visualization.{findTemperature, interpolateColor, predictTemperature}

import scala.math.{Pi, atan, pow, sinh}

/**
  * 3rd milestone: interactive visualization
  */
object Interaction extends InteractionInterface {
  val TILE_SIZE = 256 //pixels
  val MIN_ZOOM = 0
  val MAX_ZOOM = 3

  /**
    * @param tile Tile coordinates
    * @return The latitude and longitude of the top-left corner of the tile, as per http://wiki.openstreetmap.org/wiki/Slippy_map_tilenames
    */
  def tileLocation(tile: Tile): Location =
    Location(atan(sinh(Pi - tile.y / pow(2, tile.zoom) * 2*Pi))*180/Pi, tile.x / pow(2, tile.zoom) * 360 - 180)

  /**
    * @param temperatures Known temperatures
    * @param colors Color scale
    * @param tile Tile coordinates
    * @return A 256×256 image showing the contents of the given tile
    */
  def tile(temperatures: Iterable[(Location, Temperature)], colors: Iterable[(Temperature, Color)], tile: Tile): Image = {
    val pixels = new Array[Pixel](TILE_SIZE*TILE_SIZE)

    for (y <- 0 until TILE_SIZE; x <- 0 until TILE_SIZE) {
      val subTile = Tile(tile.x*TILE_SIZE + x, tile.y*TILE_SIZE + y, tile.zoom + 8)
      val color = interpolateColor(colors, predictTemperature(temperatures, tileLocation(subTile)))
      pixels(y * TILE_SIZE + x) = Pixel(color.red, color.green, color.blue, 127)
    }
    Image(TILE_SIZE, TILE_SIZE, pixels)
  }

  // Without interpolation, gives a better visual representation of stations data
  def tileNoInterpolation(temperatures: Iterable[(Location, Temperature)], colors: Iterable[(Temperature, Color)], tile: Tile): Image = {
    val pixels = new Array[Pixel](TILE_SIZE*TILE_SIZE)

    for (y <- 0 until TILE_SIZE; x <- 0 until TILE_SIZE) {
      val subTile = Tile(tile.x*TILE_SIZE + x, tile.y*TILE_SIZE + y, tile.zoom + 8)
      val color = interpolateColor(colors, findTemperature(temperatures, tileLocation(subTile)))
      pixels(y * TILE_SIZE + x) = Pixel(color.red, color.green, color.blue, 127)
    }
    Image(TILE_SIZE, TILE_SIZE, pixels)
  }

  /**
    * Generates all the tiles for zoom levels 0 to 3 (included), for all the given years.
    * @param yearlyData Sequence of (year, data), where `data` is some data associated with
    *                   `year`. The type of `data` can be anything.
    * @param generateImage Function that generates an image given a year, a zoom level, the x and
    *                      y coordinates of the tile and the data to build the image from
    */
  def generateTiles[Data](
    yearlyData: Iterable[(Year, Data)],
    generateImage: (Year, Tile, Data) => Unit
  ): Unit = for {
    (year, data) <- yearlyData.par
    zoom <- MIN_ZOOM to MAX_ZOOM
    y <- 0 until pow(2, zoom).toInt
    x <- 0 until pow(2, zoom).toInt
  } generateImage(year, Tile(x, y, zoom), data)
}
