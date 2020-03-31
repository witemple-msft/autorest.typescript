/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const PetAPTrue: coreHttp.CompositeMapper = {
  serializedName: "PetAPTrue",
  type: {
    name: "Composite",
    className: "PetAPTrue",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      id: { type: { name: "Number" }, serializedName: "id", required: true },
      name: { type: { name: "String" }, serializedName: "name" },
      status: {
        type: { name: "Boolean" },
        serializedName: "status",
        readOnly: true
      }
    }
  }
};

export const ErrorModel: coreHttp.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      status: { type: { name: "Number" }, serializedName: "status" },
      message: { type: { name: "String" }, serializedName: "message" }
    }
  }
};

export const CatAPTrue: coreHttp.CompositeMapper = {
  serializedName: "CatAPTrue",
  type: {
    name: "Composite",
    className: "CatAPTrue",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...PetAPTrue.type.modelProperties,
      friendly: { type: { name: "Boolean" }, serializedName: "friendly" }
    }
  }
};

export const PetAPObject: coreHttp.CompositeMapper = {
  serializedName: "PetAPObject",
  type: {
    name: "Composite",
    className: "PetAPObject",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      id: { type: { name: "Number" }, serializedName: "id", required: true },
      name: { type: { name: "String" }, serializedName: "name" },
      status: {
        type: { name: "Boolean" },
        serializedName: "status",
        readOnly: true
      }
    }
  }
};

export const PetAPString: coreHttp.CompositeMapper = {
  serializedName: "PetAPString",
  type: {
    name: "Composite",
    className: "PetAPString",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      id: { type: { name: "Number" }, serializedName: "id", required: true },
      name: { type: { name: "String" }, serializedName: "name" },
      status: {
        type: { name: "Boolean" },
        serializedName: "status",
        readOnly: true
      }
    }
  }
};

export const PetAPInProperties: coreHttp.CompositeMapper = {
  serializedName: "PetAPInProperties",
  type: {
    name: "Composite",
    className: "PetAPInProperties",
    modelProperties: {
      id: { type: { name: "Number" }, serializedName: "id", required: true },
      name: { type: { name: "String" }, serializedName: "name" },
      status: {
        type: { name: "Boolean" },
        serializedName: "status",
        readOnly: true
      },
      additionalProperties: {
        type: {
          name: "Dictionary",
          value: { type: { name: "Number" }, serializedName: "Number" }
        },
        serializedName: "additionalProperties"
      }
    }
  }
};

export const PetAPInPropertiesWithAPString: coreHttp.CompositeMapper = {
  serializedName: "PetAPInPropertiesWithAPString",
  type: {
    name: "Composite",
    className: "PetAPInPropertiesWithAPString",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      id: { type: { name: "Number" }, serializedName: "id", required: true },
      name: { type: { name: "String" }, serializedName: "name" },
      status: {
        type: { name: "Boolean" },
        serializedName: "status",
        readOnly: true
      },
      odataLocation: {
        type: { name: "String" },
        serializedName: "@odata\\.location",
        required: true
      },
      additionalProperties: {
        type: {
          name: "Dictionary",
          value: { type: { name: "Number" }, serializedName: "Number" }
        },
        serializedName: "additionalProperties"
      }
    }
  }
};
