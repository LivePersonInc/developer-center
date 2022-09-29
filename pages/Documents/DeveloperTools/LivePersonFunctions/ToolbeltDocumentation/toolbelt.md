---
pagename: Toolbelt
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Toolbelt Documentation
permalink: liveperson-functions-toolbelt-documentation-toolbelt.html
indicator: both
---

## Table of contents

### Methods

- [ContextServiceClient](#contextserviceclient)
- [ConversationUtil](#conversationutil)
- [GDPRUtil](#gdprutil)
- [HTTPClient](#httpclient)
- [LpClient](#lpclient)
- [MTLSClient](#mtlsclient)
- [OrchestratorClient](#orchestratorclient)
- [SDEUtil](#sdeutil)
- [SFClient](#sfclient)
- [SecretClient](#secretclient)

{: .attn-note}
Please be aware that `ContextServiceClient` **needs** to have the correct (zone-specific) domain added to the [allowlist](liveperson-functions-foundations-features.html#domain-allowlisting). As this is not done by default.

## Methods

### ContextServiceClient

▸ `Static` **ContextServiceClient**(`config`): [`IFaaSContextServiceClient`](liveperson-functions-toolbelt-documentation-faas-context-service-client.html)

Returns a Context Service Client which can be used to interact with the
Context Session Store.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`IFaaSContextServiceClientConfig`](liveperson-functions-toolbelt-documentation-faas-context-service-client.html#interface-ifaascontextserviceclientconfig) | Config Object in which the account ID for which the Client will be used and a key for the Context Session Store API need to be provided |

#### Returns

[`IFaaSContextServiceClient`](liveperson-functions-toolbelt-documentation-faas-context-service-client.html)

___

### ConversationUtil

▸ `Static` **ConversationUtil**(): [`IConversationUtil`](liveperson-functions-toolbelt-documentation-conversation-util.html)

Returns a Conversation Util, which can be used to retrieve conversations and
execute operations upon them.

#### Returns

[`IConversationUtil`](liveperson-functions-toolbelt-documentation-conversation-util.html)

___

### GDPRUtil

▸ `Static` **GDPRUtil**(): [`IGDPRUtil`](liveperson-functions-toolbelt-documentation-gdpr-util.html)

Returns GDPR Util, which can be used for GDPR related functionality such as deleting files of a conversation.

#### Returns

[`IGDPRUtil`](liveperson-functions-toolbelt-documentation-gdpr-util.html)

___

### HTTPClient

▸ `Static` **HTTPClient**(): [`RequestAPI`](https://www.npmjs.com/package/request-promise)

Returns an HTTP CLient, that is configured to work with the proxy.
It is based on request-promise and shares the same interface.

#### Returns

[`RequestAPI`](https://www.npmjs.com/package/request-promise)
___

### LpClient

▸ `Static` **LpClient**(): [`ILpClient`](liveperson-functions-toolbelt-documentation-lp-client.html)

Returns a LivePerson (LP) Client which is a wrapper for the HTTP Client. It simplifies the usage of LivePerson APIs by
providing automatic service discovery as well as taking care of the authorization.

#### Returns

[`ILpClient`](liveperson-functions-toolbelt-documentation-lp-client.html)

___

### MTLSClient

▸ `Static` **MTLSClient**(`clientTLS`): [`IMTLSClient`](liveperson-functions-toolbelt-documentation-mtls-client.html)

Returns an mTLS Client which is configured with the provided config. Please make sure that you set _allowSelfSigned_
to true when calling an endpoint that relies on a self-signed cert. Another alternative would be to leverage the
ca cert, that needs to be passed via the clientTLS config.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clientTLS` | [`ClientTLS`](liveperson-functions-toolbelt-documentation-mtls-client.html#interface-clienttls) | Client Bundle consisting of cert + key and optionally the ca cert |

#### Returns

[`IMTLSClient`](liveperson-functions-toolbelt-documentation-mtls-client.html)

___

### OrchestratorClient

▸ `Static` **OrchestratorClient**(): [`IOrchestratorClient`](liveperson-functions-toolbelt-documentation-orchestrator-client.html)

Returns an OrchestratorClient which can be used to invoke other functions

#### Returns

[`IOrchestratorClient`](liveperson-functions-toolbelt-documentation-orchestrator-client.html)

___

### SDEUtil

▸ `Static` **SDEUtil**(): [`ISDEUtil`](liveperson-functions-toolbelt-documentation-sde-util.html)

Returns a SDE Util, which can be used to add SDEs and other SDE
related operations.

#### Returns

[`ISDEUtil`](liveperson-functions-toolbelt-sde-util.html)

___

### SFClient

▸ `Static` **SFClient**(): `Object`

Returns an Salesforce Client, that is configured to work with the proxy.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `connectToSalesforce` | (`params`: [`IConnectionOptions`](https://jsforce.github.io/jsforce/doc/Connection.html)) => [`Connection`](https://jsforce.github.io/jsforce/doc/Connection.html) |

___

### SecretClient

▸ `Static` **SecretClient**(): [`ISecretClient`](liveperson-functions-toolbelt-documentation-secret-client.html)

Returns a Secret Client, which is setup to allow read and update access
to the secret storage of the Site ID.

#### Returns

[`ISecretClient`](liveperson-functions-toolbelt-documentation-secret-client.html)
