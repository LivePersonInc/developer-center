---
pagename: SDE Util
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Toolbelt Documentation
permalink: liveperson-functions-toolbelt-documentation-sde-util.html
indicator: both
---

# Interface: ISDEUtil

## Table of contents

### Methods

- [addSDEs](#addsdes)
- [getSDEsFromConv](#getsdesfromconv)

## Methods

### addSDEs

{: .attn-alert}
Please be aware that the underlying Messaging Interactions API is not meant for real-time decisions, as the API has a delay of up to 1 minute.

▸ **addSDEs**(`sdes`, `visitorId`, `sessionId`): `Promise`<`void`\>

Will set or update SDEs to/of an Engagement via the Engagement Attributes API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sdes` | [`ISDE`](#interface-isde)[] | Array with the SDEs that should be set/ updated. See Engagement Attributes API-Documentation for more Information on how to structure it. |
| `visitorId` | `string` | The ID of the visitor. |
| `sessionId` | `string` | The ID of the session. |

#### Returns

`Promise`<`void`\>

___

### getSDEsFromConv

▸ **getSDEsFromConv**(`conversation`): `Object`

Will extract all SDEs (authenticated and unauthenticated if existing) from a provided conversation and order
its events by the server-timestamp. The last event is the most recent one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conversation` | [`IConversation`](liveperson-functions-toolbelt-documentation-conversation-util.html#interface-iconversation) | the conversation of which the SDEs should be extracted. |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `sdes` | [`ISDEsResponse`](#interface-isdesresponse) |
| `unAuthSdes` | [`ISDEsResponse`](#interface-isdesresponse) |

___

## Related Interfaces / Enums

### Interface: ISDEsResponse

- **events**: `any`[]

### Interface: ISDE

- **type**: `string`
- \[key: `string`\]: `any`
