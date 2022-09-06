---
pagename: Overview
redirect_from:
  - connector-api-reference-overview.html
  - connector-api-api-reference-overview.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connector API
subfoldername: Send API
order: 10
indicator: messaging
permalink: connector-api-send-api-overview.html
search: exclude
---

<div class="alert alert-warning" role="alert">
  <h2>New developer resources available</h2>
  <p>In addition to the following API reference, we have published a new how-to guide and a demo tool. The how-to guide provides step-by-step instructions for your first connector application. The demo tool enables you to experience the API on your developer account. You can open the resources in a new tab by clicking on the buttons below.</p>
  <hr>
  <a class="btn btn-primary btn-m active" href="https://livepersoninc.github.io/lp-devassist-connectors/" target="_blank" role="button">Go to How-to Guide</a>
  <a class="btn btn-primary btn-m active" href="https://connector-api.dev.liveperson.net/" target="_blank"  role="button">Go to Demo Tool</a>
</div>

### API Endpoints Test Change

The API consists of two types of calls:

* [CONVERSATION](sendapi-create.html) - Batch Payload. This API call creates/opens a new conversation and set the consumer profile.
* [SEND](sendapi-send.html) - One Payload. This API call can be used to send a message and close a conversation or set the consumer profile.

### Connector API Connection

#### Authentication and Authorization

Refer to the [Authorizaztion and Authentication](connector-api-send-api-authorization-and-authentication.html) section to see how you can authorize your connector ([AppJWT](connector-api-send-api-authorization-and-authentication.html#get-appjwt)) application and identify the consumer ([ConsumerJWS](connector-api-send-api-authorization-and-authentication.html#get-consumerjwt)) before you can use the API.

#### Authorization Tokens Expiration Times

* The ``AppJWT`` token expires after 60 minutes.

* The ``ConsumerJWS`` never expires.

#### Authorization and Authentication Error Handling

* **401 Unauthorized** - Expired/Missing/Invalid ``AppJWT`` Token or Missing/Invalid ``ConsumerJWS``. A fresh AppJWT token is required from the client/connector. This code states that the request does not contain the required authorization token, or contains an expired token. This response asks the client to supply a new token from the client/connector. In case the AppJWT Token is valid and not expired, one can get the same status code if the ConsumerJWS is missing or invalid (e.g, consumer A is trying to access a conversation ID of consumer B).

### Message Format

Every message sent by the client or by the server should be translated into JSON format.

#### Requests, Responses and Notifications

Each API message can be one of the following kinds:

* **Request** - A message sent from the client/connector. The server will reply with a response message.

* **Response** - A message sent by the server in response to a client/connector request message.

* **Notification** - A message sent from the server to the client/connector. A registration of an application to receive Webhooks notifications is achieved by enabling the “webhooks” capability of that application. Please refer to the [webhooks overview](webhooks-overview.html) for more information.  

The kind of message is denoted by the `kind` property in the top level of the JSON object, and can be any of the following: `req`, `resp`, `notification`. Below is an example of a request message:

```json
{
	"kind": "req",
	"id": "1",
	"type": "ms.PublishEvent",
	"body": {
		"dialogId": "{conversationId}",
		"event": {
			"type": "ContentEvent",
			"contentType": "text/plain",
			"message": "Text message from messaging connector"
		}
	}
}
```

#### Message Types

Every message has a type. The structure of the body of the message can be changed for different types. The type of message is denoted by the `type` property in the top level of the JSON object. Below is an example of a message with the type of `cm.UpdateConversationField`:

```json
{
	"kind": "req",
	"id": 5,
  "type": "cm.UpdateConversationField",
	"body": {
		"conversationId": "{conversationId}",
		"conversationField": {
			"field": "CSATRate",
			"csatRate": 5,
			"csatResolutionConfirmation": true,
			"status": "FILLED"
		}
	}
}
```

#### Responses

Responses should be sent with some kind of correlation to the request that they are answering. For this purpose, every request message must state the `id` string for the request. The server will reply with the same `id` in the response message as the value of the `reqId` field in the top level JSON object of the response message. The `sequence` field is an optional counter i.e. tracking the times that the same request has been sent to Conversational Cloud and doubles its value, starting with zero value for the first request, two for the second request, four for the third request, etc. Below is an example of a response message to the request from the above section:

```json
{
    "code": "OK",
    "body": {
        "sequence": 0
    },
    "reqId": "1"
}
```

The response message will also contain a `code` field. This field will be populated with the status code of the request. The values of this field will be taken from the [HTTP Semantics](https://tools.ietf.org/html/rfc7231).
