---
pagename: Basic Content
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: Custom Endpoint
permalink: third-party-bots-custom-endpoint-basic-content.html
indicator:
---

### API Service Specification

The Custom Endpoint vendor of Third Party Bots allows brands to build their own API that generates
Bot responses for incoming consumer messages, and connect this to conversations taking place in the
Conversational Cloud. The basic flow of how a consumer message is sent and bot response is received
on abstract level can be defined as follows

<ol>
<li>Consumer Message (CM) is sent to LivePerson Universal Messaging Service (UMS)</li>
<li>CM that was sent to UMS reaches to the Third-Party Bot connector</li>
<li>Third-Party Bot connector sends CM to the Custom Endpoint service (i.e "www.mybotapi.com/api" in the Figure 2.1) </li>
<li>Custom Endpoint service sends Bot Response (BR) back to the Third-Party Bot connector which parse and validate it</li>
<li>Third-Party Bot connector send the bot response to the UMS</li>
<li>UMS send the bot response to the consumer</li>
</ol>

Figure 2.1 depicts how a consumer message is sent to Custom Endpoint and
response is sent back.

<img class="fancyimage" style="width:800px" src="img/customendpoint/message-flow.png">
Figure 2.1 Shows how a consumer message travels and a response to the consumer message is sent back

#### Custom Endpoint (CE) Service Methods

The Custom Endpoint vendor has a public Github [Repository](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)
(a.k.a Third-Party Bots Custom Endpoint Reference Service) which contains endpoints and their
contracts/interface in the format of swagger file that needs to be implemented by brands.
Following are the methods defined by the specification:

- **Get Bot Environments**: This API fetch the list of enviorments defined for the passed `botId`
- **Get Bot State**: This API sends the bot state if the bot is `online` or not.
- **Get Conversation Events**: This API sends bot responses on the passed consumer messages.
- **Create Conversation**: This API creates a conversation instance for the given conversationd
  (`convId`) for a given `botId`

Please refer to the [API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)
for detailed information on Request and Response bodies created or expected by Third-Party Bot connector.

#### Authorization and Authentication

Third-Party Bot connector uses official Conversational Cloud [OAuth 2.0](accessing-liveperson-apis.html#oauth-20-app-jwt) (App-JWT)
Authorization mechanism for server to server interaction. Third-party bot connector uses the provided
`Client ID` and `Client Seceret` of App Installation in vendor configuration to generate breare token.
More information on the sentinal API can be found [here](connector-api-send-api-authorization-and-authentication.html#get-appjwt).

Third-Party Bot connector sends `Authorization` header with the bearar token to all of the requests
to Custom Endpoint service. The brands needs to ensure authentication and authorization for their
Custom Endpoint service endpoints.

### Custom Endpoint (CE) Service Flows

This section will describe some of the common interaction flows. We will highlight which endpoints
that are described in [service methods](third-party-bots-custom-endpoint-basic-content.html#custom-endpoint-ce-service-methods)
section will be called by Third-Party Bot connector.

{: .important}
Please note brands needs to store information of Conversation and Bot on their Custom Endpoint
service so that information can be reterived.

- Test Connection
- Consumer Message

#### Test Connection

Test connection flow is exectuted on two diffrent places.

- When a user while creating a Custom Endpoint Bot uses the featue of Test Connection
- When a user starts a bot and Third-Party Bot connector verifies the connection to the Custom Endpoint service

In both scenarios Figure 2.2 shows the sequence diagram which endpoint in the Custom Endpoint
service is called

{: .important}
For more information on Request body and Responses expected by or recveid from Custom Endpoint service are avalible
in [API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)

<img class="fancyimage" src="img/customendpoint/test-connection-flow.png">
Figure 2.2 showing the happy test connection flow

1. Test Connection Caller call the Thrid-party Bots Connector/API
2. Third-Party Bots Connector/API get Sentinel Bearer by using the credentials provided
   in vendor configuration
3. Response from Sentinel API is sent back with the access token that can be used as bearer
4. Get Bot State endpoint of Custom Endpoint service is called with the bearer token received
   from Sentinel API
5. Response from the Get Bot State endpoint is recived by Third-Party Bots Connector/API
6. Response of Success or Failure is sent back based on the response of the Get Bot State endpoint

#### Consumer Message

Consumer message flow is executed once Third-Party Bot connector receives a consumer message
notification from Universal Message Service (UMS) of Conversational Cloud. Figure 2.3 shows
the sequence diagram which endpoints in Custom Endpoint service is called

{: .important}
For more information on Request body and Responses expected by or recveid from Custom Endpoint service are avalible
in [API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)

<img class="fancyimage" src="img/customendpoint/consumer-message-flow.png">
Figure 2.3 showing the happy consumer message flow

1. Consumer Message notification is received by the Thrid-party Bots Connector from UMS
2. If Sentinal bearer does not exsists Third-Party Bots Connector/API get Sentinel Bearer from
   Sentinel API by using the credentials provided in vendor configuration
3. If received Consumer Message context does not contain conversation id or a new conversation
   received then call Create Conversation method of Custom Endpoint service. This call will include
   SDES information and LivePerson context
4. After creation of conversation, Third-Party Bot Connector sends consumer message with the
   Conversation Context to the Get Converstaion Event method of Custom Endpoint service
5. After receving bot response, Third-Party Bot Connector parse and validate it and send back
   parsed bot response

**Please Note**: In Consumer Message flow if Thrid-Party bot connector receive HTTP 404 response
on Get Conversation Events method call, Retry mechanism from Step 3 onward will be tried one time
more to send the consumer message to Custom Endpoint service.

### Sending Rich Content (Structured Content)

Structured Content/Rich Content is supported by the core LivePerson platform. Documentation
for the feature can be found [here](getting-started-with-rich-messaging-introduction.html).

{: .important}
If Images are sent in Rich content, then their URLs must be added to a whitelist via internal
LivePerson configuration (Houston: `messaging.rich.content.valid.urls`). Please note that you
must add all possible domains to this list manually as wildcards are not supported. Moreover,
All domains must be HTTPS secure.

An example of Rich Content Message response along with any optional metadata and analytical
information (intents) can be seen in Figure 2.4 below. More information on responses expected
by Third-Party Bot Connector can be found at [API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)

{: .important}
The response is expected to be sent by Get Conversation Events method of Custom Endpoint service
please ensure valid structured content is sent by using our [Conversation Tester feature](third-party-bots-conversation-tester.html)
or using [this tool](https://livepersoninc.github.io/json-pollock/editor/).

```json
{
  "response": [
    {
      "type": "STRUCTURED_CONTENT",
      "data": {
        "metadata": [{ "type": "ExternalId", "id": "ABCD1234" }],
        "structuredContent": {
          "type": "vertical",
          "elements": [
            {
              "type": "button",
              "click": {
                "actions": [
                  { "text": "Recommend me a movie", "type": "publishText" }
                ]
              },
              "title": "Recommend a movie"
            }
          ]
        }
      }
    }
  ],
  "analytics": {
    "intents": [
      {
        "id": "base-structured-content",
        "description": "Structured Content Message",
        "confidenceScore": 1
      }
    ]
  }
}
```

Figure 2.4 Showing an example response of Structure Content Message

### Sending Quick Replies (Structured Content)

{: .important}
**Please note** Quick Replies are only supported in Messaging Conversations.

Quick Replies is a special type of Structured Content. It is a message sent along with predefined answers.
For detailed information on Quick Replies check out the documentation for the specific channel ([Mobile SDK and Web](mobile-sdk-and-web-templates-quick-replies-template.html), [Facebook Messenger](facebook-messenger-templates-quick-replies-template.html),
[Google RCS Business Messaging](google-rcs-business-messaging-templates-quick-replies-template.html)).

An example of Rich Content Message response along with any optional metadata and analytical
information (intents) can be seen below in Figure 2.5. More information on responses expected
by Third-Party Bot Connector can be found at [API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)

{: .important}
The response is expected to be sent by Get Conversation Events method of Custom Endpoint service
please ensure valid quick replies is sent by using our [Conversation Tester feature](third-party-bots-conversation-tester.html)

```json
{
  "response": [
    {
      "type": "STRUCTURED_CONTENT",
      "data": {
        "structuredContent": {
          "quickReplies": {
            "type": "quickReplies",
            "itemsPerRow": 8,
            "replies": [
              {
                "type": "button",
                "tooltip": "yes i do",
                "title": "yes",
                "click": {
                  "actions": [{ "type": "publishText", "text": "yep" }],
                  "metadata": [{ "type": "ExternalId", "id": "Yes-1234" }]
                }
              },
              {
                "type": "button",
                "tooltip": "No!",
                "title": "No!",
                "click": {
                  "actions": [{ "type": "publishText", "text": "No!" }],
                  "metadata": [{ "type": "ExternalId", "id": "No-4321" }]
                }
              }
            ]
          },
          "message": "Do you like Bots?"
        },
        "metadata": [{ "id": "1234", "type": "ExternalId" }]
      }
    }
  ],
  "analytics": {
    "intents": [
      {
        "id": "base-quick-replies",
        "description": "Quick Replies Messages",
        "confidenceScore": 1
      }
    ]
  }
}
```

### Bot Actions

{: .notice}
Please note we only support **ONE ACTION** per Custom Endpoint service response

#### Transfer

If the bot needs to transfer the conversation to a human agent, or the conversation flow
indicates that another bot is better suited for the identified intent, you will need to
tell the connector to transfer the conversation to a given skill.

Multiple scenarios for transfer/escalations exist and are as follows:

1. If the Bot does not have an appropriate answer, it should recognise this as a scenario
   for a transfer. Depending on the connector configuration or the decision making capacity
   of the bot, the bot will transfer to a particular skill or default skill.

2. Explicit request from visitor to transfer to an agent

3. If there is a internal error in Third-Party connetor or the Custom Endpoint service
   cannot be reached then Third-Party Bot connector will transfer to a default skill
   set up during configuration.

Transfer action has two sets of responses that are as below:

{: .important}
The response is expected to be sent by Get Conversation Events method of Custom Endpoint service
to ensure validity of response brands can use our [Conversation Tester feature](third-party-bots-conversation-tester.html)

##### Transfer to Skill

In this case transfer action will happen to the given skill name (case sensative) that is passed.
An example of such response can be seen below in Figure 2.5. More information on responses expected
by Third-Party Bot Connector can be found at [API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)

```json
{
  "response": [
    {
      "type": "TEXT",
      "data": {
        "message": "I am sorry i couldn't help you. I will transfer you"
      }
    },
    {
      "type": "ACTION",
      "data": {
        "name": "TRANSFER",
        "parameters": { "skillName": "transfer_skill" }
      }
    }
  ],
  "analytics": {
    "intents": [
      {
        "id": "base-transfer",
        "description": "Custom Transfer",
        "confidenceScore": 1
      }
    ]
  }
}
```

Figure 2.5 Example of a Transfer action to a skill with a message

##### Transfer to Agent

{: .important}
This feature is depending on [permissions](https://knowledge.liveperson.com/contact-center-management-messaging-operations-transfer-to-agent.html#permissions)

This option transfers the conversation to the particular agent matching the provided agentId
and skill. If the agent is not available, the conversation will be transferred to an available
agent with the same skill.

An example response can be seen below in Figure 2.6. More information on responses expected
by Third-Party Bot Connector can be found at [API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)

```json
{
  "response": [
    {
      "type": "TEXT",
      "data": {
        "message": "I am sorry i couldn't help you. I will try to transfer you to our Agent X"
      }
    },
    {
      "type": "ACTION",
      "data": {
        "name": "TRANSFER",
        "parameters": {
          "skillName": "transfer_agent_skill",
          "agentId": "1234567"
        }
      }
    }
  ],
  "analytics": {
    "intents": [
      {
        "id": "agent-transfer",
        "description": "Custom Agent Transfer",
        "confidenceScore": 1
      },
      {
        "id": "base-transfer",
        "description": "Transfer",
        "confidenceScore": 0.9
      }
    ]
  }
}
```

Figure 2.6 Example response of a transfer action to a agent with a message

#### Close Conversation

In the bot’s flow, there will be times when it is appropriate to end the conversation
without escalating to a live agent. If a query has been answered, or the brand has
determined that no escalation is required for a given query, then it is best practice
to have the bot end the conversation. An example response can be seen below in Figure 2.7.
More information on responses expected by Third-Party Bot Connector can be found at
[API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)

```json
{
  "response": [
    { "type": "TEXT", "data": { "message": "Alright! See you later. " } },
    {
      "type": "ACTION",
      "data": { "name": "CLOSE_CONVERSATION", "parameters": {} }
    }
  ],
  "analytics": {
    "intents": [
      {
        "id": "base-bye",
        "description": "Generic Bye Intent",
        "confidenceScore": 0.95
      }
    ]
  }
}
```

Figure 2.7 Example response of a close action with a message

We also allow closing of a conversation without triggering a post conversation survey,
This can be done by adding the parameter `withoutPcs` as `true` to the parameters
property of action payload. Example response of such close action can be seen in the Figure 2.8

```json
{
  "response": [
    { "type": "TEXT", "data": { "message": "Alright! See you later. " } },
    {
      "type": "ACTION",
      "data": {
        "name": "CLOSE_CONVERSATION",
        "parameters": { "withoutPcs": true }
      }
    }
  ],
  "analytics": {
    "intents": [
      {
        "id": "base-bye",
        "description": "Generic Bye Intent",
        "confidenceScore": 0.95
      }
    ]
  }
}
```

Figure 2.8 Example response of a close action with `withoutPcs` property

#### Change Time To Response of Conversation (TTR)

Change the TTR of a conversation based on the **action** value in the response object.

LivePerson Messaging uses 3 different types of priorities:

- URGENT
- NORMAL
- PRIORITIZED

An example response with `URGENT` priority can be seen below in Figure 2.9.
More information on responses expected by Third-Party Bot Connector can be found at
[API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)

```json
{
  "response": [
    {
      "type": "ACTION",
      "data": { "name": "CHANGE_TTR", "parameters": { "ttrType": "URGENT" } }
    }
  ],
  "analytics": {
    "intents": [
      {
        "id": "change-ttr",
        "description": "Wants to change the ttr",
        "confidenceScore": 0.9
      }
    ]
  }
}
```

Figure 2.9 Example response of a Change TTR action with `URGENT` priority
