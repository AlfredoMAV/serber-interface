name := "serber-interface"

version := "0.1-SNAPSHOT"

libraryDependencies ++= Seq(
  jdbc,
  //anorm,
  cache
)

play.Project.playScalaSettings
