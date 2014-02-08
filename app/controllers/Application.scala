package controllers

import play.api.mvc.{Action, Controller}

import views._

/** Application Controller */
object Application extends Controller {

  def index = Action {
    Ok(html.index("Welcome to SERBER|pilot - Home", "index"))
  }

  def dataModel = Action {
    Ok(html.datamodel("SERBER - Data Model", "serber/DataModel"))
  }

  def webServices = Action {
    Ok(html.webservices("SERBER - Web Services", "serber/WebServices"))
  }

  def webInterface = Action {
    Ok(html.webinterface("SERBER - Web Interface", "serber/WebInterface"))
  }

  def metadata = Action {
    Ok(html.metadata("SERBER - Metadata", "serber/Metadata"))
  }

  def linkedData = Action {
    Ok(html.linkeddata("SERBER - Linked Data", "serber/LinkedData"))
  }

  def foss = Action {
    Ok(html.foss("SERBER - FOSS", "serber/FOSS"))
  }

  def notes = Action {
    Ok(html.notes("pilot - Notes", "pilot/Notes"))
  }

  def registryData = Action {
    Ok(html.registry("pilot - Registry Data", "pilot/RegistryData", None))
  }

  def registryObject(key: Long) = Action {
    Ok(html.registry("pilot - Registry Object", "pilot/RegistryObject", Some(key)))
  }
}
