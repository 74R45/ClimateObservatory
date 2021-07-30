package observatory.utils

import observatory.Tile
import observatory.Extraction.locationYearlyAverageRecords
import observatory.Interaction.tile
import observatory.Interaction2.TEMP_COLORS
import observatory.Manipulation.makeGrid
import observatory.Visualization2.visualizeGrid
import org.scalameter.{Key, Quantity, config}

/**
  * An object for testing tile generation speed.
  */
object Benchmark {

  def main(args: Array[String]): Unit = {
    val avg = locationYearlyAverageRecords("/2015_sample_avg.csv")

    def time(func: => Unit): Quantity[Double] = config(
      Key.exec.benchRuns -> 50,
      Key.verbose -> true
    ) measure func

    println(s"tile() time: ${time(tile(avg, TEMP_COLORS, Tile(0, 0, 2)))}")
    println(s"visualizeGrid() time: ${time(visualizeGrid(makeGrid(avg), TEMP_COLORS, Tile(0, 0, 2)))}")
  }
}
