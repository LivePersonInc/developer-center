---
title: Protocol Overview
level1: Documents
level2: Consumer Experience
level3: Messaging Window API

order: 1
permalink: consumer-int-protocol-overview.html

---

### API Endpoints
The API consists of two types of calls:

* Peripheral APIs - Domains Discovery, Token creation, Agent Profile, etc. In most cases these calls are done using REST.
* Messaging API - In this API, the WebSocket connection should be established. 

### Messaging API WebSocket Connection

###  Establishment
Refer to the [Getting Started](consumer-int-getting-started.html){:target="_blank"} section to see an example of how to establish this connection.

###  Keep Alive
The server will close any idle connection. In order to keep the connection open, the client should send a message every 60 seconds. For this purpose, the client can use one of the following:

* Websocket Ping/Pong Mechanism
* For clients that cannot send Ping messages (such as browsers): Utilize the applicative ``.GetClock`` request: ```{"kind":"req","id":"1","type":".GetClock"}```.

###  Error Handling
Upon disconnection, the client will receive a standard status code as defined by [rfc6455](https://tools.ietf.org/html/rfc6455#section-7.4){:target="_blank"}. Two custom status codes are used by the API:

* **4401** - A fresh token is required from the customer. When an authenticated connection is used, this code states that the request does not contain the required autorization token, or contains an expired token. This response asks the client to supply a new token from the customer.
* **4407** - For unauthenticated identities, this status code states that the client should ask the LivePerson IDP service to extend the validity of the current identity.

For any other status code, the client should wait a short period of time and then try to reconnect.

### Message Format
Every message sent by the client or by the server should be serialized to JSON format.

###  Requests, Responses and Notifications

Each API message can be one of the following kinds:

* **Request** - A message sent from the client. The server will reply with a response message.
* **Response** - A message sent by the server in response to a client request message.
* **Notification** - A message sent from the server to the client, triggered by a server decision. The trigger can be based on a prior ``Subscription`` request made by the client, or on an implicit subscription made by the server.

The kind of message is denoted by the ``kind`` property in the top level of the JSON object, and can be any of the following: ``req``, ``resp``, ``notification``. Below is an example of a request message:

```json
{
    "kind" : "req",
    "type" : "cm.AgentRequestConversation",
    "id" : "hsjshka8162s",
    "body" : { "ttrDefName" : "NORMAL" }
}
```

###  Message Types

Every message has a type. The structure of the body of the message can be changed for different types. The type of message is denoted by the ``type`` property in the top level of the JSON object. Below is an example of a message with the type of``cm.MyRequest``:

```json
{
	"kind" : "req",
	"type" : "cm.MyRequest",
	"id" : "hsjshka8162s",
	"body" : { "ttrDefName" : "NORMAL" }
}
``` 

###  Responses
Responses should be sent with some kind of correlation to the request that they are answering. For this purpose, every request message must state the ``id`` string for the request. The server will reply with the same ``id`` in the response message as the value of the ``reqId`` field in the top level JSON object of the response message. Below is an example of a response message to the request from the above section:

```json
{
	"kind" : "resp",
	"reqId" : "hsjshka8162s",
	"type" : "cm.MyRequestResponse",
	"code" : 200,
	"body" : { "conversationId" : "hdjsdhksh2" }
}
```

The response message will also contain a ``code`` field. This field will be populated with the status code of the request. The values of this field will be taken from the [HTTP Semantics](https://tools.ietf.org/html/rfc7231){:target="_blank"}.
 
###  Subscriptions

In this pattern the client has to send some kind of request message to the server. In response, it will receive a response message with a success indication and a subscription ID. Following this, the server will start sending notifications with the subscription ID. 

### API Client Requirements

###  Client Future Compatibility

In order for the client to be compatible with future API changes, it should:

* Ignore any field that is not documented in the [API reference](consumer-int-api-reference.html){:target="_blank"}. This includes existing fields that are not documented (for deprecation reasons), as well as new fields that will be added to the messages in newer versions.
* Ignore any enum fields that contain undocumented values.

###  Single Element Arrays

An array containing a single element may be sent using the element itself instead of the array.

### Typical Frontend API Session

In this section we will provide an example API session.

###  Initiation

The consumer initiates the messaging application on their device. At this point, the client should do the following:

1. Use the Authentication API to pass the external token and get an API token (JWT).
2. Open a WebSocket connection to the Interaction API.
3. Subscribe itself to the conversations metadata (in order to get the conversations list). This list may contain previously closed conversations along with existing active conversations. The list may be presented to the consumer.

The user may now want to [continue an existing conversation](#continue-an-existing-conversation){:target="_blank"} or [start a new conversation](#start-a-new-conversation){:target="_blank"}.

###  Continue an existing conversation

In the initation process, the client got the conversation list, including the existing conversation (with ``OPEN`` state). To enable the consumer to continue this conversation, the client should do the following:

1. Subscribe to the conversation messaging events. If the client already has some of the messages of this conversation in its memory, it may want to subscribe only to the last messages sequence. This is to avoid sending over the network all the messages it already has.
2. Receive notifications about the events of this conversation from the server. 
	1. Text messages should be added to the presentation, ordered by their sequence.
	2. Read/Accept events should add a graphical indication next to the text message they are referring to.
3. Keep receiving notifications from the server about new events currently being published by the other side.
4. Publish an ``accept`` event when a new text message is received to let other agents know that the message has been successfully delivered to the consumer device. When the message is presented to the consumer, the client should publish a ``read`` receipt.
5. Publish text messages when the consumer wants to send their own text.
6. Publish a ``chat state`` event when the consumer is typing, watching, or stops watching the conversation.

###  Start a new conversation

In order to create a new conversation, the client should do the following:

1. Send a request to create a new conversation.
2. Get a notification about the new conversation.

The client should continue as described above for an [existing conversation](#continue-an-existing-conversation){:target="_blank"}.

###  Finish a conversation

The conversation can be closed either by the agent or by the consumer. 

If the consumer wants to close the conversation by themselves, the client must send a request to update the conversation metadata and set the ``state`` to ``close``. This can also be done by the agent.

The client will get a notification about this conversation with a ``state`` property set to ``close``.

The client can present a CSAT survey to the consumer and send an ``update conversation metadata`` request with the CSAT information.

###  Handle disconnection

When the API token expires, the WebSocket connection will be closed with ``4401/4407`` closereason. The client should return to the [initation](#initiation) step, issue a fresh token, and reestablish the connection.

For any other ``closeReason``, the client should wait a few seconds and then try reconnecting.

{% include links.html %}
