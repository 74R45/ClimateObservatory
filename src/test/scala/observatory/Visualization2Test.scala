package observatory

import com.sksamuel.scrimage.writer
import observatory.Manipulation.makeGrid
import observatory.Visualization2.visualizeGrid
import org.junit.Test

import java.io.File

trait Visualization2Test extends MilestoneSuite {
  private val milestoneTest = namedMilestoneTest("value-added information visualization", 5) _

  @Test def visualizeGridTest(): Unit = {
    val temps = Extraction.locationYearlyAverageRecords(
      Extraction.locateTemperatures(2015, "/stations_sample.csv", "/2015_sample.csv"))

    val grid = makeGrid(temps)

    // Color scale for temperature deviations
    //val colors = Seq(
    //  (7d, Color(0,0,0)),
    //  (4d, Color(255,0,0)),
    //  (2d, Color(255,255,0)),
    //  (0d, Color(255,255,255)),
    //  (-2d, Color(0,255,255)),
    //  (-7d, Color(0,0,255)))

    val colors = Seq(
      (60d, Color(255,255,255)),
      (32d, Color(255,0,0)),
      (12d, Color(255,255,0)),
      (0d, Color(0,255,255)),
      (-15d, Color(0,0,255)),
      (-27d, Color(255,0,255)),
      (-50d, Color(33,0,107)),
      (-60d, Color(0,0,0)))

    val img = visualizeGrid(grid, colors, Tile(0, 0, 0))
    img.output(new File("test-image3.png"))
  }

}
