/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import {CloudErrorMapper, BaseResourceMapper } from "ms-rest-azure-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const ErrorModel = {
  required: false,
  serializedName: 'Error',
  type: {
    name: 'Composite',
    className: 'ErrorModel',
    modelProperties: {
      status: {
        required: false,
        serializedName: 'status',
        type: {
          name: 'Number'
        }
      },
      message: {
        required: false,
        serializedName: 'message',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const Resource = {
  required: false,
  serializedName: 'Resource',
  type: {
    name: 'Composite',
    className: 'Resource',
    modelProperties: {
      id: {
        required: false,
        readOnly: true,
        serializedName: 'id',
        type: {
          name: 'String'
        }
      },
      type: {
        required: false,
        readOnly: true,
        serializedName: 'type',
        type: {
          name: 'String'
        }
      },
      tags: {
        required: false,
        serializedName: 'tags',
        type: {
          name: 'Dictionary',
          value: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      },
      location: {
        required: false,
        serializedName: 'location',
        type: {
          name: 'String'
        }
      },
      name: {
        required: false,
        readOnly: true,
        serializedName: 'name',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const FlattenedProduct = {
  required: false,
  serializedName: 'FlattenedProduct',
  type: {
    name: 'Composite',
    className: 'FlattenedProduct',
    modelProperties: {
      id: {
        required: false,
        readOnly: true,
        serializedName: 'id',
        type: {
          name: 'String'
        }
      },
      type: {
        required: false,
        readOnly: true,
        serializedName: 'type',
        type: {
          name: 'String'
        }
      },
      tags: {
        required: false,
        serializedName: 'tags',
        type: {
          name: 'Dictionary',
          value: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      },
      location: {
        required: false,
        serializedName: 'location',
        type: {
          name: 'String'
        }
      },
      name: {
        required: false,
        readOnly: true,
        serializedName: 'name',
        type: {
          name: 'String'
        }
      },
      pname: {
        required: false,
        serializedName: 'properties.pname',
        type: {
          name: 'String'
        }
      },
      lsize: {
        required: false,
        serializedName: 'properties.lsize',
        type: {
          name: 'Number'
        }
      },
      provisioningState: {
        required: false,
        serializedName: 'properties.provisioningState',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const ResourceCollection = {
  required: false,
  serializedName: 'ResourceCollection',
  type: {
    name: 'Composite',
    className: 'ResourceCollection',
    modelProperties: {
      productresource: {
        required: false,
        serializedName: 'productresource',
        type: {
          name: 'Composite',
          className: 'FlattenedProduct'
        }
      },
      arrayofresources: {
        required: false,
        serializedName: 'arrayofresources',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'FlattenedProductElementType',
              type: {
                name: 'Composite',
                className: 'FlattenedProduct'
              }
          }
        }
      },
      dictionaryofresources: {
        required: false,
        serializedName: 'dictionaryofresources',
        type: {
          name: 'Dictionary',
          value: {
              required: false,
              serializedName: 'FlattenedProductElementType',
              type: {
                name: 'Composite',
                className: 'FlattenedProduct'
              }
          }
        }
      }
    }
  }
};

export const AutoRestResourceFlatteningTestServicePutArrayOptionalParams = {
  required: false,
  serializedName: 'PutArrayOptions',
  type: {
    name: 'Composite',
    className: 'AutoRestResourceFlatteningTestServicePutArrayOptionalParams',
    modelProperties: {
      resourceArray: {
        required: false,
        serializedName: 'ResourceArray',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'ResourceElementType',
              type: {
                name: 'Composite',
                className: 'Resource'
              }
          }
        }
      }
    }
  }
};

export const AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams = {
  required: false,
  serializedName: 'PutDictionaryOptions',
  type: {
    name: 'Composite',
    className: 'AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams',
    modelProperties: {
      resourceDictionary: {
        required: false,
        serializedName: 'ResourceDictionary',
        type: {
          name: 'Dictionary',
          value: {
              required: false,
              serializedName: 'FlattenedProductElementType',
              type: {
                name: 'Composite',
                className: 'FlattenedProduct'
              }
          }
        }
      }
    }
  }
};

export const AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams = {
  required: false,
  serializedName: 'PutResourceCollectionOptions',
  type: {
    name: 'Composite',
    className: 'AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams',
    modelProperties: {
      resourceComplexObject: {
        required: false,
        serializedName: 'ResourceComplexObject',
        type: {
          name: 'Composite',
          className: 'ResourceCollection'
        }
      }
    }
  }
};
