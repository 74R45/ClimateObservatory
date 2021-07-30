package observatory

import com.sksamuel.scrimage.{Image, Pixel}
import observatory.Interaction.{TILE_SIZE, tileLocation}
import observatory.Visualization.interpolateColor

/**
  * 5th milestone: value-added information visualization
  */
object Visualization2 extends Visualization2Interface {

  /**
    * @param point (x, y) coordinates of a point in the grid cell
    * @param d00 Top-left value
    * @param d01 Bottom-left value
    * @param d10 Top-right value
    * @param d11 Bottom-right value
    * @return A guess of the value at (x, y) based on the four known values, using bilinear interpolation
    *         See https://en.wikipedia.org/wiki/Bilinear_interpolation#Unit_Square
    */
  def bilinearInterpolation(
    point: CellPoint,
    d00: Temperature,
    d01: Temperature,
    d10: Temperature,
    d11: Temperature
  ): Temperature = d00*(1-point.x)*(1-point.y) + d10*point.x*(1-point.y) +
                   d01*(1-point.x)*point.y + d11*point.x*point.y

  /**
    * @param grid Grid to visualize
    * @param colors Color scale to use
    * @param tile Tile coordinates to visualize
    * @return The image of the tile at (x, y, zoom) showing the grid using the given color scale
    */
  def visualizeGrid(
    grid: GridLocation => Temperature,
    colors: Iterable[(Temperature, Color)],
    tile: Tile
  ): Image = {
    val pixels = new Array[Pixel](TILE_SIZE*TILE_SIZE)
    for (y <- 0 until TILE_SIZE; x <- 0 until TILE_SIZE) {
      // Location of the pixel
      // -- Technically, it's the location of the top left corner of the pixel, but
      //    it's such a small error that it doesn't actually matter that much (could fix later though).
      val subTileLocation = tileLocation(Tile(tile.x*TILE_SIZE + x, tile.y*TILE_SIZE + y, tile.zoom + 8))
      // Top left, bottom left, top right and bottom right GridLocations closest to the pixel
      val g00 = GridLocation(subTileLocation.lat.ceil.toInt, subTileLocation.lon.floor.toInt)
      val g01 = GridLocation(g00.lat-1, g00.lon)
      val g10 = GridLocation(g00.lat,  (g00.lon+1 + 180) % 360 - 180) // lon == 180 => lon == -180
      val g11 = GridLocation(g00.lat-1,(g00.lon+1 + 180) % 360 - 180)
      // CellPoint(x,y) inside the {g00, g01, g10, g11} square, x and y being the distance from g00
      val point = CellPoint(subTileLocation.lon - g00.lon, g00.lat - subTileLocation.lat)
      // Bilinear interpolation + interpolating color
      val pointTemp = bilinearInterpolation(point, grid(g00), grid(g01), grid(g10), grid(g11))
      val color = interpolateColor(colors, pointTemp)

      pixels(y * TILE_SIZE + x) = Pixel(color.red, color.green, color.blue, 127)
    }
    Image(TILE_SIZE, TILE_SIZE, pixels)
  }
}
