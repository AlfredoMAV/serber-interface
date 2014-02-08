/**
 * @fileoverview 'data pane' view model for Knockout.
 *
 * @(key: Long)
 *
 * <div id="data-pane">
 *   ...
 * </div>
 *
 * <script type="text/javascript">
 *   var keyVm = "@key";
 * </script>
 *
 */

window.serber.viewmodel.datapane = (function (ko, datacontext) {

  var registryObjects = ko.observableArray(),
  search = ko.observable(''),
  page = ko.observable(1),
  _key = ko.observable(null)
  registryObject = ko.observable(null),
  error = ko.observable(),

/*----------------------------------------------------------------------------*/

  isSearchButtonVisible = ko.computed(
      function () {
        return _key() === null;
      }),

  isBackToSearchButtonVisible = ko.computed(
      function () {
        return registryObjects() !== null && _key() !== null;
      }),

/*----------------------------------------------------------------------------*/

  isRegistryObjectVisible = ko.computed(
      function () {
        return  _key() !== null && registryObject() !== null;
      }),

  isIdentifiersVisible = ko.computed(
      function () {
        return registryObject() !== null && registryObject().identifiers !== null;
      }),

  isDescriptionsVisible = ko.computed(
      function () {
        return registryObject() !== null && registryObject().descriptions !== null;
      }),

  isSubjectsVisible = ko.computed(
      function () {
        return registryObject() !== null && registryObject().subjects !== null;
      }),

  isRelatedInfosVisible = ko.computed(
      function () {
        return registryObject() !== null && registryObject().relatedInfos !== null;
      }),

  isAccessPoliciesVisible = ko.computed(
      function () {
        return registryObject() !== null && registryObject().accessPolicies !== null;
      }),

  isComplexNamesVisible = ko.computed(
      function () {
        return registryObject() !== null && registryObject().complexNames !== null;
      }),

  isLocationsVisible = ko.computed(
      function () {
        return registryObject() !== null && registryObject().locations !== null;
      }),

  isRelationsVisible = ko.computed(
      function () {
        return registryObject() !== null && registryObject().relations !== null;
      }),

  // Methods

/*----------------------------------------------------------------------------*/

  searchButton = function () {
    if (search() !== '') {
      if (search() == '*') {
        search('');
      }
      datacontext.listRegistryObjects(registryObjects, search(), page(), error)
    }
  },

  backToSearchButton = function () {
    _key(null);
  },

/*----------------------------------------------------------------------------*/

  _loadRegistryObject = function () {
    if (_key() !== null) {
      datacontext.readRegistryObject(registryObject, _key(), error)
    }
  },

  showRegistryObject = function (data) {
    _key(data.registry_object_key);
    _loadRegistryObject();
  },

  showRelatedRegistryObject = function (data) {
    _key(data.related_registry_object_key);
    _loadRegistryObject();
  },

/*----------------------------------------------------------------------------*/

  // Load this view model properties.
  _load = function () {
    if (typeof keyVm !== 'undefined' && _key() !== null && _key() !== '') {
      _key(keyVm);
    }
    _loadRegistryObject();
  },

  init = function () {
    if (document.getElementById("data-pane")) {
      registryObject(new datacontext.RegistryObject(null));
      ko.applyBindings(this, document.getElementById("data-pane"));
      _load()
    }
  };

  return {
    init: init,
    registryObjects: registryObjects,
    registryObject: registryObject,
    search: search,
    page: page,
    error: error,
    isSearchButtonVisible: isSearchButtonVisible,
    isBackToSearchButtonVisible: isBackToSearchButtonVisible,
    isRegistryObjectVisible: isRegistryObjectVisible,
    isIdentifiersVisible: isIdentifiersVisible,
    isDescriptionsVisible: isDescriptionsVisible,
    isSubjectsVisible:isSubjectsVisible,
    isRelatedInfosVisible: isRelatedInfosVisible,
    isAccessPoliciesVisible: isAccessPoliciesVisible,
    isComplexNamesVisible: isComplexNamesVisible,
    isLocationsVisible: isLocationsVisible,
    isRelationsVisible: isRelationsVisible,
    searchButton: searchButton,
    backToSearchButton: backToSearchButton,
    showRegistryObject: showRegistryObject,
    showRelatedRegistryObject: showRelatedRegistryObject
  };

})(ko, serber.datacontext);

/*----------------------------------------------------------------------------*/

// Initiate the Knockout bindings.
$(document).ready(function () {
  window.serber.viewmodel.datapane.init();
});
