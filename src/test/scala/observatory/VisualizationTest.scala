package observatory

import java.io.File

import com.sksamuel.scrimage.writer
import org.junit.Assert._
import org.junit.Test

trait VisualizationTest extends MilestoneSuite {
  private val milestoneTest = namedMilestoneTest("raw data display", 2) _

  // Implement tests for the methods of the `Visualization` object

  @Test def test1(): Unit = {
    val temps = Extraction.locationYearlyAverageRecords(
      Extraction.locateTemperatures(2015, "/stations_sample.csv", "/2015_sample.csv"))

    val colors = Seq(
      (60d, Color(255,255,255)),
      (32d, Color(255,0,0)),
      (12d, Color(255,255,0)),
      (0d, Color(0,255,255)),
      (-15d, Color(0,0,255)),
      (-27d, Color(255,0,255)),
      (-50d, Color(33,0,107)),
      (-60d, Color(0,0,0)))

    val img = Visualization.visualize(temps, colors)
    img.output(new File("test-image2.png"))
  }
}
