# Climate Observatory

This is a project that turns a bunch of temperature data into an awesome climate observatory!

Also, this project was a capstone project for [this course](https://www.coursera.org/specializations/scala), so project structure, front-end and development steps were already laid down for me, I did everything else.

## *What can it do?*

The observatory shows a temperature overlay over a world map, and lets you see what the yearly average temperature was in any part of the map in years 1975-2015.
Additionally, there's a ***deviations*** overlay, which shows how the yearly average temperature compares to the average temperature between 1975 and 1990.

## *How does it work?*

-   It all begins with the [starting data](src/main/resources), which is represented by a list of daily temperatures in one of 29444 weather stations around the world.
-   [**Step 1**](src/main/scala/observatory/Extraction.scala): turning data into yearly average temperatures in each station. 
-   [**Step 2**](src/main/scala/observatory/Visualization.scala): using interpolation ([Inverse Distance Weighting](https://en.wikipedia.org/wiki/Inverse_distance_weighting)) to predict temperatures at every pair of integer values of latitude and longitude, or a [***Grid***](src/main/scala/observatory/Manipulation.scala) of temperatures.
-   [**Step 3**](src/main/scala/observatory/Visualization2.scala): now that we have ***Grids***, any point on the map can be [billinearly interpolated](https://en.wikipedia.org/wiki/Bilinear_interpolation) from 4 closest points on the Grid. Such use of Grids speeds up prediction process greatly.
-   [**Step 4**](src/main/scala/observatory/Interaction.scala): temperature at each location is mapped to a color value, which are then saved in 256x256 ***Tiles***, which are basically png images.
-   [**Step 5**](src/main/scala/observatory/Interaction2.scala): generated ***Tiles*** are then used in a [Scala.js](https://www.scala-js.org/) front-end subproject using [Leaflet](https://leafletjs.com/) library.

## *How do I use it?*

1. Go to https://74r45.github.io/ClimateObservatory/. The project is hosted on GitHub Pages so it's available anytime!
2. Try it yourself locally! To do this:
   -   Clone the repository
   -   [Download the dataset](src/main/resources)
   -   Make sure you have [scala-sbt](https://www.scala-sbt.org/) installed
   -   Run [Generator.scala](src/main/scala/observatory/utils/Generator.scala) to generate all Tiles
   -   In sbt terminal run `capstoneUI/fastOptJS` to parse Scala.js code to JavaScript
   -   Open [index.html](index.html) in your browser

## *What's next?*

There are some flaws in this project, but as of right now I don't see a reason to fix them, so I'll just write them down here:
-   Some stations haven't recorded data every single day of the year, which resulted in some data being obviously incorrect.
    For instance, some stations at Antarctica only recorded temperatures during summer, which resulted in average temperatures being way higher than they needed to be.
-   Code is not covered with Unit Tests.
