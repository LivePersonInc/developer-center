---
pagename: MTLS Client
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Toolbelt Documentation
permalink: liveperson-functions-toolbelt-documentation-mtls-client.html
indicator: both
---

# Interface: IMTLSClient

Interface definition for the mTLS Client.

## Table of contents

### Methods

- [delete](#delete)
- [get](#get)
- [head](#head)
- [options](#options)
- [patch](#patch)
- [post](#post)
- [put](#put)

## Methods

### delete

▸ **delete**(`url`, `headers?`, `body?`, `options?`): `Promise`<[`MTLSResponse`](#interface-mtlsresponse)\>

Performs a mTLS delete request using the configured client certificate + key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` |  |
| `headers?` | [`Header`](#interface-header) |  |
| `body?` | `any` |  |
| `options?` | [`MTLSOptions`](#interface-mtlsoptions) | Request specific options |

#### Returns

`Promise`<[`MTLSResponse`](#interface-mtlsresponse)\>

___

### get

▸ **get**(`url`, `headers?`, `body?`, `options?`): `Promise`<[`MTLSResponse`](#interface-mtlsresponse)\>

Performs a mTLS get request using the configured client certificate + key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` |  |
| `headers?` | [`Header`](#interface-header) |  |
| `body?` | `any` |  |
| `options?` | [`MTLSOptions`](#interface-mtlsoptions) | Request specific options |

#### Returns

`Promise`<[`MTLSResponse`](#interface-mtlsresponse)\>

___

### head

▸ **head**(`url`, `headers?`, `options?`): `Promise`<[`MTLSResponse`](#interface-mtlsresponse)\>

Performs a mTLS head request using the configured client certificate + key. Any body
returned by the endpoint will be ignored and forcefully overridden with undefined.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` |  |
| `headers?` | [`Header`](#interface-header) |  |
| `options?` | [`MTLSOptions`](#interface-mtlsoptions) | Request specific options |

#### Returns

`Promise`<[`MTLSResponse`](#interface-mtlsresponse)\>

___

### options

▸ **options**(`url`, `headers?`, `options?`): `Promise`<[`MTLSResponse`](#interface-mtlsresponse)\>

Performs a mTLS options request using the configured client certificate + key. Any body
returned by the endpoint will be ignored and forcefully overridden with undefined.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` |  |
| `headers?` | [`Header`](#interface-header) |  |
| `options?` | [`MTLSOptions`](#interface-mtlsoptions) | Request specific options |

#### Returns

`Promise`<[`MTLSResponse`](#interface-mtlsresponse)\>

___

### patch

▸ **patch**(`url`, `headers?`, `body?`, `options?`): `Promise`<[`MTLSResponse`](#interface-mtlsresponse)\>

Performs a mTLS put request using the configured client certificate + key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` |  |
| `headers?` | [`Header`](#interface-header) |  |
| `body?` | `any` |  |
| `options?` | [`MTLSOptions`](#interface-mtlsoptions) | Request specific options |

#### Returns

`Promise`<[`MTLSResponse`](#interface-mtlsresponse)\>

___

### post

▸ **post**(`url`, `headers?`, `body?`, `options?`): `Promise`<[`MTLSResponse`](#interface-mtlsresponse)\>

Performs a mTLS post request using the configured client certificate + key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` |  |
| `headers?` | [`Header`](#interface-header) |  |
| `body?` | `any` |  |
| `options?` | [`MTLSOptions`](#interface-mtlsoptions) | Request specific options |

#### Returns

`Promise`<[`MTLSResponse`](#interface-mtlsresponse)\>

___

### put

▸ **put**(`url`, `headers?`, `body?`, `options?`): `Promise`<[`MTLSResponse`](#interface-mtlsresponse)\>

Performs a mTLS put request using the configured client certificate + key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` |  |
| `headers?` | [`Header`](#interface-header) |  |
| `body?` | `any` |  |
| `options?` | [`MTLSOptions`](#interface-mtlsoptions) | Request specific options |

#### Returns

`Promise`<[`MTLSResponse`](#interface-mtlsresponse)\>

___

## Related Interfaces / Type

### Interface: MTLSResponse

**Properties:**

- **headers**: \[key: `string`\]: `string`
- **statusCode**: `number`
- `Optional` **body**: `any`

### Interface: MTLSOptions

**Properties:**

- `Optional` **allowSelfSigned**: `boolean`

To ignore errors raised by self-signed certificates on the called endpoint.
Alternatively you can provide the ca-cert as part of the clientTLS config.

- `Optional` **json**: `boolean`

Set this flag to true, to automatically stringify body + set correct content header and parse response to JSON.

- `Optional` **timeout**: `number`

Time in ms until request should timeout. Please be aware that mTLS calls take longer than regular HTTP calls.

### Interface: Header

**Properties:**

- \[name: `string`\]: `string`

### Interface: ClientTLS

**Properties:**

- `Optional` **ca**: `string` \| [`Buffer`](https://nodejs.org/api/buffer.html)

Certificate of the CA, this is relevant when endpoint that is called
has a self-signed certificate. The certificate needs to be in PEM format.

- **cert**: `string` \| [`Buffer`](https://nodejs.org/api/buffer.html)

CLient Certificate in PEM format.

- **key**: `string` \| [`Buffer`](https://nodejs.org/api/buffer.html)

Client Key in PEM format.
