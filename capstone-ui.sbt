val capstoneUI =
  project.in(file("capstone-ui"))
    .enablePlugins(ScalaJSPlugin)
    .settings(
      scalaVersion := "2.12.8",
      // Add the sources of the main project
      unmanagedSources in Compile ++= {
        val rootSourceDirectory = baseDirectory.value / ".." / "src" / "main" / "scala" / "observatory"
        Seq(
          rootSourceDirectory / "Interaction2.scala",
          rootSourceDirectory / "Signal.scala",
          rootSourceDirectory / "models.scala",
          rootSourceDirectory / "package.scala"
        )
      },
      libraryDependencies ++= Seq(
        "org.scala-js" %%% "scalajs-dom" % "1.1.0",
        "com.lihaoyi" %%% "scalatags" % "0.9.4"
      ),
      scalaJSUseMainModuleInitializer := true
    )
