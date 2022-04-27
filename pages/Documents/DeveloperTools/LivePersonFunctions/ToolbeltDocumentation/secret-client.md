---
pagename: Secret Client
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Toolbelt Documentation
permalink: liveperson-functions-toolbelt-documentation-secret-client.html 
indicator: both
---

# Interface: ISecretClient

Client that will handle the communication with the Secret Storage.

## Table of contents

### Methods

- [getUsedSecrets](#getusedsecrets)
- [readSecret](#readsecret)
- [updateSecret](#updatesecret)

## Methods

### getUsedSecrets

▸ **getUsedSecrets**(): [`ISecretEntry`](#interface-isecretentry)[]

Returns all secrets that the user has used with readSecret or updateSecret in a function.
Used for internal purpose.

#### Returns

[`ISecretEntry`](#interface-isecretentry)[]

Secrets in Key-Value Format in an array

___

### readSecret

▸ **readSecret**(`key`): `Promise`<[`ISecretEntry`](#interface-isecretentry)\>

Searches the Secret that belong to the provided key.
Will raise a SecretError if there is no secret for the provided key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Name of the Secret |

#### Returns

`Promise`<[`ISecretEntry`](#interface-isecretentry)\>

Secret in Key-Value Format

___

### updateSecret

▸ **updateSecret**(`updatedSecret`): `Promise`<[`ISecretEntry`](#interface-isecretentry)\>

Updates the Secret with the provided update-entry.
Will raise a SecretError if there is no secret with the specified key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updatedSecret` | [`ISecretEntry`](#interface-isecretentry) | Secret in Key-Value Format |

#### Returns

`Promise`<[`ISecretEntry`](#interface-isecretentry)\>

Updated Version of the Secret in Key-Value Format

___

## Related Interfaces

### Interface: ISecretEntry

**Properties:**

• **key**: `string`

Key of the secret made of chars that match [A-z0-9-_] and limited to 100 chars

• **value**: `any`

Value of the secret which is limited to 10000 chars.
