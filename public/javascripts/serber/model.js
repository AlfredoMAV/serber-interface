(function (ko, datacontext) {

datacontext.RegistryObject = RegistryObject;

function RegistryObject(data) {
  var self = this;
  data = data || {};

  // Persisted properties

  self.registry_object_key = data.registryObjectKey || null;
  self.registry_object_class = data.registryObjectClass || null;
  self.type = data.type || null;
  self.originating_source = data.originatingSource || null;
  self.originating_source_type = data.originatingSourceType || null;
  self.identifiers = createIdentifiers(data.identifiers);
  self.descriptions = createDescriptions(data.descriptions);
  self.subjects = createSubjects(data.subjects);
  self.relatedInfos = createRelatedInfos(data.relatedInfos);
  self.accessPolicies = createAccessPolicies(data.accessPolicies);
  self.complexNames = createComplexNames(data.complexNames);
  self.locations = createLocations(data.locations);
  self.relations = createRelations(data.relations);

  // Non-persisted properties

  // Methods

  function createIdentifiers(data) {
    if (data) {
      var mappedData = $.map(data, function (item) { return new Identifier(item); });
      return mappedData;
    }
    return null;
  }

  function createDescriptions(data) {
    if (data) {
      var mappedData = $.map(data, function (item) { return new Description(item); });
      return mappedData;
    }
    return null;
  }

  function createSubjects(data) {
    if (data) {
      var mappedData = $.map(data, function (item) { return new Subject(item); });
      return mappedData;
    }
    return null;
  }

  function createAccessPolicies(data) {
    if (data) {
      var mappedData = $.map(data, function (item) { return new AccessPolicy(item); });
      return mappedData;
    }
    return null;
  }

  function createRelatedInfos(data) {
    if (data) {
      var mappedData = $.map(data, function (item) { return new RelatedInfo(item); });
      return mappedData;
    }
    return null;
  }

  function createComplexNames(data) {
    if (data) {
      var mappedData = $.map(data, function (item) { return new ComplexName(item); });
      return mappedData;
    }
    return null;
  }

  function createLocations(data) {
    if (data) {
      var mappedData = $.map(data, function (item) { return new Location(item); });
      return mappedData;
    }
    return null;
  }

  function createRelations(data) {
    if (data) {
      var mappedData = $.map(data, function (item) { return new Relation(item); });
      return mappedData;
    }
    return null;
  }

  self.toJson = function () { return ko.toJSON(self) };
};

function Identifier(data) {
  var self = this;
  data = data || {};

  // Persisted properties

  self.identifier_id = data.identifierId;
  self.registry_object_key = data.registryObjectKey;
  self.value = data.value;
  self.type = data.type;

  // Non-persisted properties

  // Methods

  self.toJson = function () { return ko.toJSON(self) };
};

function Description(data) {
  var self = this;
  data = data || {};

  // Persisted properties

  self.description_id = data.descriptionId;
  self.registry_object_key = data.registryObjectKey;
  self.value = data.value;
  self.type = data.type;
  self.lang = data.lang;

  // Non-persisted properties

  // Methods

  self.toJson = function () { return ko.toJSON(self) };
};

function Subject(data) {
  var self = this;
  data = data || {};

  // Persisted properties

  self.subject_id = data.subjectId;
  self.registry_object_key = data.registryObjectKey;
  self.value = data.value;
  self.type = data.type;
  self.lang = data.lang;

  // Non-persisted properties

  // Methods

  self.toJson = function () { return ko.toJSON(self) };
};

function RelatedInfo(data) {
  var self = this;
  data = data || {};

  // Persisted properties

  self.related_info_id = data.relatedInfoId;
  self.registry_object_key = data.registryObjectKey;
  self.value = data.value;

  // Non-persisted properties

  // Methods

  self.toJson = function () { return ko.toJSON(self) };
};

function AccessPolicy(data) {
  var self = this;
  data = data || {};

  // Persisted properties

  self.access_policy_id = data.accessPolicyId;
  self.registry_object_key = data.registryObjectKey;
  self.value = data.value;

  // Non-persisted properties

  // Methods

  self.toJson = function () { return ko.toJSON(self) };
};

function ComplexName(data) {
  var self = this;
  data = data || {};

  // Persisted properties

  self.complex_name_id = data.complexNameId;
  self.registry_object_key = data.registryObjectKey;
  self.value = data.value;
  self.type = data.type;
  self.lang = data.lang;
  self.nameParts = createNameParts(data.nameParts);

  // Non-persisted properties

  // Methods

  function createNameParts(data) {
    if (data) {
      var mappedData = $.map(data, function (item) { return new NamePart(item); });
      return mappedData;
    }
    return null;
  }

  self.toJson = function () { return ko.toJSON(self) };
};

function NamePart(data) {
  var self = this;
  data = data || {};

  // Persisted properties

  self.name_part_id = data.namePartId;
  self.complex_name_id = data.complexNameId;
  self.value = data.value;
  self.type = data.type;

  // Non-persisted properties

  // Methods

  self.toJson = function () { return ko.toJSON(self) };
};

function Location(data) {
  var self = this;
  data = data || {};

  // Persisted properties

  self.location_id = data.locationId;
  self.registry_object_key = data.registryObjectKey;
  self.spatialLocations = createSpatialLocations(data.spatialLocations);
  self.addressLocations = createAddressLocations(data.addressLocations);

  // Non-persisted properties

  // Methods

  function createSpatialLocations(data) {
    if (data) {
      var mappedData = $.map(data, function (item) { return new SpatialLocation(item); });
      return mappedData;
    }
    return null;
  }

  function createAddressLocations(data) {
    if (data) {
      var mappedData = $.map(data, function (item) { return new AddressLocation(item); });
      return mappedData;
    }
    return null;
  }

  self.toJson = function () { return ko.toJSON(self) };
};

function SpatialLocation(data) {
  var self = this;
  data = data || {};

  // Persisted properties

  self.spatial_location_id = data.spatialLocationId;
  self.location_id = data.locationId;
  self.value = data.value;
  self.type = data.type;
  self.lang = data.lang;

  // Non-persisted properties

  // Methods

  self.toJson = function () { return ko.toJSON(self) };
};

function AddressLocation(data) {
  var self = this;
  data = data || {};

  // Persisted properties

  self.address_location_id = data.addressLocationId;
  self.location_id = data.locationId;
  self.physicalAddresses = createPhysicalAddresses(data.physicalAddresses);
  self.electronicAddresses = createElectronicAddresses(data.electronicAddresses);

  // Non-persisted properties

  // Methods

  function createPhysicalAddresses(data) {
    if (data) {
      var mappedData = $.map(data, function (item) { return new PhysicalAddress(item); });
      return mappedData;
    }
    return null;
  }

  function createElectronicAddresses(data) {
    if (data) {
      var mappedData = $.map(data, function (item) { return new ElectronicAddress(item); });
      return mappedData;
    }
    return null;
  }

  self.toJson = function () { return ko.toJSON(self) };
};

function PhysicalAddress(data) {
  var self = this;
  data = data || {};

  // Persisted properties

  self.physical_address_id = data.physicalAddressId;
  self.address_location_id = data.addressLocationId;
  self.value = data.value;
  self.lang = data.lang;
  self.addressParts = createAddressParts(data.addressParts);

  // Non-persisted properties

  // Methods

  function createAddressParts(data) {
    if (data) {
      var mappedData = $.map(data, function (item) { return new AddressPart(item); });
      return mappedData;
    }
    return null;
  }

  self.toJson = function () { return ko.toJSON(self) };
};

function AddressPart(data) {
  var self = this;
  data = data || {};

  // Persisted properties

  self.address_part_id = data.addressPartId;
  self.physical_address_id = data.physicalAddressId;
  self.value = data.value;
  self.lang = data.lang;
  self.type = data.type;

  // Non-persisted properties

  // Methods

  self.toJson = function () { return ko.toJSON(self) };
};

function ElectronicAddress(data) {
  var self = this;
  data = data || {};

  // Persisted properties

  self.electronic_address_id = data.electronicAddressId;
  self.address_location_id = data.addressLocationId;
  self.value = data.value;
  self.type = data.type;
  self.electronicAddressArgs = createElectronicAddressArgs(data.electronicAddressArgs);

  // Non-persisted properties

  // Methods

  function createElectronicAddressArgs(data) {
    if (data) {
      var mappedData = $.map(data, function (item) { return new ElectronicAddressArg(item); });
      return mappedData;
    }
    return null;
  }

  self.toJson = function () { return ko.toJSON(self) };
};

function ElectronicAddressArg(data) {
  var self = this;
  data = data || {};

  // Persisted properties

  self.electronic_address_arg_id = data.electronicAddressArgId;
  self.electronic_address_id = data.electronicAddressId;
  self.name = data.name;
  self.required = data.required;
  self.type = data.type;
  self.use = data.use;

  // Non-persisted properties

  // Methods

  self.toJson = function () { return ko.toJSON(self) };
};

function Relation(data) {
  var self = this;
  data = data || {};

  // Persisted properties

  self.relation_id = data.relationId;
  self.registry_object_key = data.registryObjectKey;
  self.related_registry_object_key = data.relatedRegistryObjectKey;
  self.relationDescriptions = createRelationDescriptions(data.relationDescriptions);

  // Non-persisted properties

  // Methods

  function createRelationDescriptions(data) {
    if (data) {
      var mappedData = $.map(data, function (item) { return new RelationDescription(item); });
      return mappedData;
    }
    return null;
  }

  self.toJson = function () { return ko.toJSON(self) };
};

function RelationDescription(data) {
  var self = this;
  data = data || {};

  // Persisted properties

  self.relation_description_id = data.relationDescriptionId;
  self.relation_id = data.relationId;
  self.description = data.description;
  self.type = data.type;
  self.lang = data.lang;
  self.url = data.url;

  // Non-persisted properties

  // Methods

  self.toJson = function () { return ko.toJSON(self) };
};

})(ko, serber.datacontext);
