---
pagename: FaaS Context Service Client
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Toolbelt Documentation
permalink: liveperson-functions-toolbelt-documentation-faas-context-service-client.html
indicator: both
---

# Interface: IFaaSContextServiceClient

{: .attn-note}
Please be aware that `ContextServiceClient` **needs** to have the correct (zone-specific) domain added to the [allowlist](liveperson-functions-foundations-features.html#domain-allowlisting). As this is not done by default.

## Table of contents

### Methods

- [createNamespace](#createnamespace)
- [deleteNamespace](#deletenamespace)
- [deletePropertyInSession](#deletepropertyinsession)
- [deleteSession](#deletesession)
- [getAllPropertiesInSession](#getallpropertiesinsession)
- [getListOfNamespaces](#getlistofnamespaces)
- [getListOfSessions](#getlistofsessions)
- [getPropertyInSession](#getpropertyinsession)
- [getSelectedPropertiesInSession](#getselectedpropertiesinsession)
- [setPropertiesInNamespace](#setpropertiesinnamespace)
- [updatePropertiesInNamespace](#updatepropertiesinnamespace)

## Methods

### createNamespace

▸ **createNamespace**(`namespace`, `options?`): `Promise`<[`Namespace`](#interface-namespace)\>

Creates a custom namespace with the specified name for the provided account.
Given the namespace exists it will not recreate it or throw an error. However
there are built-in namespaces that will yield an error.

**`throws`** SDK Error when API returned non successful status code

**`throws`** SDK Error when provided namespace is built-in

**`throws`** SDK Error when provided namespace is null, undefined or empty string

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `options?` | [`NamespaceOptions`](#interface-namespaceoptions) |

#### Returns

`Promise`<[`Namespace`](#interface-namespace)\>

___

### deleteNamespace

▸ **deleteNamespace**(`namespace`): `Promise`<`void`\>

Deletes a custom namespace with the specified name.
Given the namespace was already deleted it will not throw an error.

**`throws`** SDK Error when API returned non successful status code

**`throws`** SDK Error when provided namespace is built-in

**`throws`** SDK Error when provided namespace is null, undefined or empty string

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |

#### Returns

`Promise`<`void`\>

___

### deletePropertyInSession

▸ **deletePropertyInSession**(`namespace`, `propertyName`, `sessionId?`): `Promise`<`void`\>

Deletes the specified property on the defined session. Given no
session was provided it will fallback to default session of the namespace.
Given the property was already deleted it will not throw an error.

**`throws`** SDK Error when API returned non successful status code

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `propertyName` | `string` |
| `sessionId?` | `string` |

#### Returns

`Promise`<`void`\>

___

### deleteSession

▸ **deleteSession**(`namespace`, `sessionId`): `Promise`<`void`\>

Deletes the specified session in the defined namespace. Given no
session was provided it will fallback to default session of the namespace.
Given the session was already deleted it will not throw an error.

**`throws`** SDK Error when API returned non successful status code

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `sessionId` | `string` |

#### Returns

`Promise`<`void`\>

___

### getAllPropertiesInSession

▸ **getAllPropertiesInSession**(`namespace`, `sessionId?`): `Promise`<[`Entity`](#interface-entity)\>

Returns the specified session containing all of its properties.
Given no session was provided it will fallback to the default session of the
namespace.

**`throws`** SDK Error when API returned non successful status code

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `sessionId?` | `string` |

#### Returns

`Promise`<[`Entity`](#interface-entity)\>

___

### getListOfNamespaces

▸ **getListOfNamespaces**(): `Promise`<[`Namespace`](#interface-namespace)[]\>

Returns a list containing all custom namespaces for the account the client was initialised for.
Please be aware that built-in namespaces will not show up with exception to
the default namespace.

**`throws`** SDK Error when API returned non successful status code

#### Returns

`Promise`<[`Namespace`](#interface-namespace)[]\>

___

### getListOfSessions

▸ **getListOfSessions**(`namespace`): `Promise`<`string`[]\>

Returns a list containing all sessions in the specified namespaces.

**`throws`** SDK Error when API returned non successful status code

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |

#### Returns

`Promise`<`string`[]\>

___

### getPropertyInSession

▸ **getPropertyInSession**(`namespace`, `propertyName`, `sessionId?`): `Promise`<`unknown`\>

Get the value of the specified property on the defined session. If no
session was provided it will fallback to default session of the namespace.

**`throws`** SDK Error when API returned non successful status code

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `propertyName` | `string` |
| `sessionId?` | `string` |

#### Returns

`Promise`<`unknown`\>

___

### getSelectedPropertiesInSession

▸ **getSelectedPropertiesInSession**(`namespace`, `propertyNames`, `sessionId?`): `Promise`<[`Entity`](#interface-entity)\>

Returns the specified session containing all of the defined properties. If
a property does not exist it will be ignored. If no session was provided it
will fallback to default session of the namespace.

**`throws`** SDK Error when API returned non successful status code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace` | `string` |  |
| `propertyNames` | `string`[] | that should be included |
| `sessionId?` | `string` | - |

#### Returns

`Promise`<[`Entity`](#interface-entity)\>

___

### setPropertiesInNamespace

▸ **setPropertiesInNamespace**(`namespace`, `properties`, `sessionId?`): `Promise`<[`Entity`](#interface-entity)\>

Will set properties on the specified session in the defined namespace.
If no session was provided it will fallback to the default session of the
namespace. All values will be stored in their JSON serialized version. Given
a property/properties already exist they will be updated.

**`throws`** SDK Error when API returned non successful status code

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `properties` | [`Entity`](#interface-entity) |
| `sessionId?` | `string` |

#### Returns

`Promise`<[`Entity`](#interface-entity)\>

___

### updatePropertiesInNamespace

▸ **updatePropertiesInNamespace**(`namespace`, `properties`, `sessionId?`): `Promise`<[`Entity`](#interface-entity)\>

Will update properties on the specified session in the defined namespace.
If no session was provided it will fallback to the default session of the
namespace. All values will be stored in their JSON serialized version. Given
a property/properties does not exist they will be created.

**`throws`** SDK Error when API returned non successful status code

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `properties` | [`Entity`](#interface-entity) |
| `sessionId?` | `string` |

#### Returns

`Promise`<[`Entity`](#interface-entity)\>

___

## Related Interfaces

### Interface: Namespace

**Properties:**

- **createdAt**: `Date`
- **name**: `string`
- `Optional` **ttlSecond**: `number`

### Interface: NamespaceOptions

**Properties:**

- `Optional` **ttl**: `number`
Time to Live in seconds. If not provided/defined it will be permanent.

### Interface: Entity

**Properties:**

- \[name: `string`\]: `unknown`

### Interface: IFaaSContextServiceClientConfig

**Properties:**

- **accountId**: `string`
- **apiKey**: `string`