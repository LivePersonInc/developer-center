---
pagename: Service Implementation
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: Custom Endpoint
permalink: third-party-bots-custom-endpoint-service-implementation.html
indicator:
---

### Overview

The Custom Endpoint vendor of Third Party Bots allows brands to build their API that generates
Bot responses for incoming consumer messages, and connect this to conversations taking place in the
Conversational Cloud. This section will describe the general information on what a Custom Endpoint service
should be implementing to successfully integrate with the Third-Party Bots. The basic flow of how
a consumer message is sent and bot response is received on an abstract level can be seen in Figure 2.1

<img class="fancyimage" style="width:800px" src="img/customendpoint/message-flow.png">
Figure 2.1 Depicts how a consumer message is sent to Custom Endpoint and a
response is sent back.

<ol>
<li>Consumer Message (CM) is sent to LivePerson Universal Messaging Service (UMS)</li>
<li>CM that was sent to UMS reaches the Third-Party Bot connector</li>
<li>Third-Party Bot connector sends CM to the Custom Endpoint service (i.e `www.mybotapi.com/api` in Figure 2.1) </li>
<li>Custom Endpoint service sends Bot Response (BR) back to the Third-Party Bot connector 
    which parses and validates it</li>
<li>Third-Party Bot connector sends the bot response to the UMS</li>
<li>UMS sends the bot response to the consumer</li>
</ol>

### Service Endpoints

To connect to Third-Party Bots via the Custom Endpoint vendor few service endpoints
methods must be implemented by brands that we will explain below. We also have provided
a public [GitHub Repository](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)
that contains the [OpenAPI Specification](https://swagger.io/specification). It includes
detailed information on Request and Response bodies sent or expected by the Third-Party Bots.

#### Get Bot Environments

Every bot can have multiple versions with different conversational flows and intents.
To address this the Custom Endpoint service needs to provide at least one standard
environment named `draft` in [Vendor Configuration](third-party-bots-custom-endpoint-introduction.html#vendor-configuration).
This endpoint is expected to fetch the list of environments defined for a bot.

**Endpoint**

| HTTP Method | URI                           |
| :---------- | :---------------------------- |
| GET         | /v1/bots/{botId}/environments |

**Path Parameters**

| Parameter | Description                                                                                                                  |
| :-------- | :--------------------------------------------------------------------------------------------------------------------------- |
| botId     | Bot identifier as defined in [Vendor Configuration](third-party-bots-custom-endpoint-introduction.html#vendor-configuration) |

Example of the response body that is expected by Third-Party Bots can be seen
in Figure 2.2. Please refer to [GitHub Repository](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)
for the latest endpoint contracts/interfaces.

```json
["draft", "alpha"]
```

Figure 2.2 Example response of Get Bot Environments endpoint

#### Get Bot State

A bot on a Custom Endpoint service should have one of the following states:

- `online`
- `offline`
- `error`
- `maintenance`

This endpoint is called on test connection and while starting a bot. It should
respond with the bot state and the bot version. Every state besides `online`
is interpreted as a nonhealthy and unreachable bot.

**Endpoint**

| HTTP Method | URI                                               |
| :---------- | :------------------------------------------------ |
| GET         | /v1/bots/{botId}/environments/{environment}/state |

**Path Parameters**

| Parameter   | Description                                                                                                                   |
| :---------- | :---------------------------------------------------------------------------------------------------------------------------- |
| botId       | Bot identifier as defined in [Vendor Configuration](third-party-bots-custom-endpoint-introduction.html#vendor-configuration)  |
| environment | Bot environment as defined in [Vendor Configuration](third-party-bots-custom-endpoint-introduction.html#vendor-configuration) |

Example of the response body that is expected by Third-Party Bots can be seen
in Figure 2.3. Please refer to [GitHub Repository](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)
for the latest endpoint contracts/interfaces.

```json
{
  "state": "online",
  "version": "0.0.1"
}
```

Figure 2.3 Example response of Get Bot Bot State endpoint

#### Create Conversation

The conversation will be created for a specific bot in an environment and is addressed
by the LP Conversation ID. Additional context like [SDES](engagement-attributes-types-of-engagement-attributes.html)
and conversation details are provided during the creation of the conversation.
Please note, [SDES](engagement-attributes-types-of-engagement-attributes.html)
attributes are **only** collected at the start of a conversation, and [SDES](engagement-attributes-types-of-engagement-attributes.html)
are **only** collected if the Engagement Attributes configuration is enabled.
This API endpoint is expected to create a conversation resource that can be
addressed on the following [Send Conversation Events](third-party-bots-custom-endpoint-service-implementation.html#send-conversation-events)
call.

{: .important}
**Please Note** It is the responsibility of the Custom Endpoint service owner to
store or update [SDES](engagement-attributes-types-of-engagement-attributes.html) information.

**Endpoint**

| HTTP Method | URI                                                                |
| :---------- | :----------------------------------------------------------------- |
| PUT         | /v1/bots/{botId}/environments/{environment}/conversations/{convId} |

**Path Parameters**

| Parameter   | Description                                                                                                                   |
| :---------- | :---------------------------------------------------------------------------------------------------------------------------- |
| botId       | Bot identifier as defined in [Vendor Configuration](third-party-bots-custom-endpoint-introduction.html#vendor-configuration)  |
| environment | Bot environment as defined in [Vendor Configuration](third-party-bots-custom-endpoint-introduction.html#vendor-configuration) |
| convId      | LP conversation identifier                                                                                                    |

Example of the request body that is sent by Third-Party Bots can be seen
in Figure 2.4. Please refer to [GitHub Repository](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)
for the latest endpoint contracts/interfaces.

```javascript
{
  "sdes": {
    "authenticatedSdes": {
      // ...... All SDES from Visitor Information API comes here More Info @ https://developers.liveperson.com/visit-information-api-visit-information.html

    },
    "unauthenticatedSdes": {
      // ...... Unauthenticated SDES
    }
  },
  "context": {
    "skillId": "1234567",
    "campaignId": 0987665546,
    "engagementId": 123498765,
    "type": "MESSAGING",
    "visitor": {
      "sharkVisitorId": "ABCDEFGHIJKLMNOPQRST",
      "sharkSessionId": "ABcdEFGH12JKLM0iuSTU",
      "ipAddress": "127.0.0.1",
      "browser": "",
      "os": "",
      "osVersion": "",
      "language": "en-US",
      "consumerId": "abcdefghijklmnopqrstuvwx123456789101112131415mnopqrstuvwxyz0987654321"
    },
    "assignedAgentId": "abc123456-a1b2-34bc-127m-ce1a86c8602a"
   // .... Conversation Context
  }
}
```

Figure 2.4 Example request body of Create Conversation endpoint

#### Send Conversation Events

This endpoint is expected to respond with the actions and messages a bot wants to
send as a direct response to the received consumer event. The expected responses
are described in the [Basic Content](third-party-bots-custom-endpoint-basic-content.html)
and [Advance features](third-party-bots-custom-endpoint-advanced-features.html) sections.

**Endpoint**

| HTTP Method | URI                                                                       |
| :---------- | :------------------------------------------------------------------------ |
| POST        | /v1/bots/{botId}/environments/{environment}/conversations/{convId}/events |

**Path Parameters**

| Parameter   | Description                                                                                                                   |
| :---------- | :---------------------------------------------------------------------------------------------------------------------------- |
| botId       | Bot Identifier as defined in [Vendor Configuration](third-party-bots-custom-endpoint-introduction.html#vendor-configuration)  |
| environment | Bot Environment as defined in [Vendor Configuration](third-party-bots-custom-endpoint-introduction.html#vendor-configuration) |
| convId      | LivePerson Conversation Identifier                                                                                            |

Example of the request body of a Text event that is sent by Third-Party
Bots can be seen in Figure 2.5

```javascript
{
  "type": "TEXT",
  "source": "CONSUMER",
  "data": {
    "message": "Hi"
  },
  "context": {
    "lpEvent": {
      "sequence": 0,
      "serverTimestamp": 1649331017991,
      "event": {
        "type": "ContentEvent",
        "message": "Hi",
        "contentType": "text/plain"
      },
      "conversationId": "608b2868-f686-4b89-891f-497816958cfc",
      "dialogId": "608b2868-f686-4b89-891f-497816958cfc",
      "metadata": [],
      "messageAudience": "ALL"
      // .... RAW LP Content Event properties
    }
  }
}
```

Figure 2.5 Example request body of Text event sent to Send Content Events endpoint

Example of the request body of a Rich Content event that is sent by Third-Party
Bots can be seen in Figure 2.6

```javascript
{
  "type": "RICH_CONTENT",
  "source": "CONSUMER",
  "data": {
    "content": {
      "type": "vertical",
      "elements": [
        {
          "type": "map",
          "la": 49.000000000000,
          "lo": 7.111111111111,
          "alt": "49.000000000000, 7.111111111111"
        }
      ]
    }
  },
  "context": {
    "lpEvent": {
      "sequence": 12,
      "serverTimestamp": 1649332721115,
      "event": {
        "type": "RichContentEvent",
        "content": {
          "type": "vertical",
          "elements": [
            {
              "type": "map",
              "la": 49.000000000000,
              "lo": 7.111111111111,
              "alt": "49.000000000000, 7.111111111111"
            }
          ]
        }
      },
      "conversationId": "608b2868-f686-4b89-891f-497816958cfc",
      "dialogId": "608b2868-f686-4b89-891f-497816958cfc",
      "metadata": [],
      "messageAudience": "ALL"
      // .... RAW LP Content Event properties
    }
  }
}
```

Figure 2.6 Example request body of Rich Content event sent to Send Content Events endpoint

### Authorization and Authentication

{: .notice}
Please note we expect brands to use [OAuth 2.0](oauth-2-0-client-credentials.html) for
authentication and authorization

Third-Party Bots uses [App-JWT OAuth 2.0](oauth-2-0-client-credentials.html) authentication
mechanism for a server to server interaction. Third-Party Bots uses the provided
`Client ID` and `Client Secret` of an App Installation in the vendor configuration to generate a JWT.
More information on the Sentinel API can be found [here](connector-api-send-api-authorization-and-authentication.html#get-appjwt).

Third-Party Bots sends the JWT inside the `Authorization` header on all requests
to the Custom Endpoint service. The brands need to ensure the request is authorized, e.g.
if the account the token has been generated on is allowed to access the addressed bot
resources.

### Error Retry Strategies and Endpoint Timeout

If the service of a Custom Endpoint is temporarily unavailable due to maintenance or if there are changes in the network that cause temporary errors, the Third-Party Bots use strategies to respond to such eventualities. These are described in the [Retry Policy Recommendations](retry-policy-recommendations.html). After three attempts, no further request will be made. Furthermore, the time until a timeout for a single request occurs is 60 seconds.

### Service Flows

This section will describe some of the common interaction flows. We will highlight which API request
that are described in the [service endpoints](third-party-bots-custom-endpoint-service-implementation.html#service-endpoints)
will be made by the Third-Party Bots.

{: .important}
Please note brands needs to store information/session about the Conversation and Bot on their Custom Endpoint
service so that information can be used in subsequent calls.

- Test Connection
- Consumer Message

#### Test Connection

Test connection flow is executed in two different scenarios:

- When a user while creating a Custom Endpoint Bot uses the feature of Test Connection
- When a user starts a bot and Third-Party Bots verifies the connection to the Custom Endpoint service

In both scenarios Figure 2.7 shows the sequence of interactions with the involved services
service is called

{: .important}
More information on the Request body and Responses expected by or received from the Custom Endpoint service are available
in [API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)

<img class="fancyimage" src="img/customendpoint/test-connection-flow.png">
Figure 2.7 showing the happy test connection flow

1. Test Connection Caller calls the Third-party Bots
2. Third-Party Bots gets Sentinel bearer token by using the credentials provided
   in vendor configuration
3. Response from Sentinel API is sent back with the access token that can be used as a bearer
4. [Get Bot State](third-party-bots-custom-endpoint-service-implementation.html#get-bot-state)
   endpoint of Custom Endpoint service is called with the bearer token received
   from Sentinel API
5. Response from the [Get Bot State](third-party-bots-custom-endpoint-service-implementation.html#get-bot-state)
   endpoint is received by Third-Party Bots
6. Response of success or failure is sent back based on the response of the Get Bot State endpoint

#### Consumer Message

The consumer message flow is executed once the Third-Party Bots receives a consumer message
notification from Universal Message Service (UMS) of Conversational Cloud. Figure 2.8 shows
the sequence diagram of which endpoints in the Custom Endpoint service are called

{: .important}
More information on the Request body and Responses expected by or received from the Custom Endpoint service are available
in [API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)

<img class="fancyimage" src="img/customendpoint/consumer-message-flow.png">
Figure 2.8 showing the happy consumer message flow

1. Consumer Message notification is received by the Third-party Bots from UMS
2. If Sentinel bearer does not exist Third-Party Bots get Sentinel Bearer from
   Sentinel API by using the credentials provided in vendor configuration
3. If the received context does not contain a conversation id or a new conversation
   received then call [Create Conversation](third-party-bots-custom-endpoint-service-implementation.html#create-conversation)
   method of the Custom Endpoint service. This call will include [SDES](third-party-bots-custom-endpoint-advanced-features.html#engagement-attributes-sdes-as-context)
   information and LivePerson context
4. After the creation of the conversation, Third-Party Bots sends a consumer message with the
   Conversation Context to the [Send Conversation Events](third-party-bots-custom-endpoint-service-implementation.html#send-conversation-events)
   method of the Custom Endpoint service
5. After receiving the bot response, Third-Party Bots parse and validate it and send back
   parsed bot response

**Please Note**: In the Consumer Message flow if the Third-Party Bots receives HTTP 404
response on getting the [Send Conversation Events](third-party-bots-custom-endpoint-service-implementation.html#send-conversation-events)
method call, the Retry mechanism from Step 3 onward will be tried one time more to send the
consumer message to the Custom Endpoint service.
