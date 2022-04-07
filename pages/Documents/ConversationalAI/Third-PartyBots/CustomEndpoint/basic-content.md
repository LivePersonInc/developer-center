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
on an abstract level can be seen in Figure 2.1

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

### Engagement attributes (SDES)

Third-Party bots allow the collection of engagement attributes (more information can be found
[here](engagement-attributes-types-of-engagement-attributes.html)) if `Engagement Attributes`
option is checked in the `Conversation Type` step as shown in Figure 2.4.

<img class="fancyimage" style="width:750px" src="img/ThirdPartyBots/common-engagement-attr-select.png">
Figure 2.4 `Conversation Type step` in creation/modification of bot configuration.

These attributes are **only** collected at the start of a conversation. we send those engagement attributes
when the Third-Party Bot connector calls the [Create Conversation](third-party-bots-custom-endpoint-basic-content.html#custom-endpoint-ce-service-methods)
method defined in the Custom Endpoint service.

{: .important}
**Please Note** It is the responsibility of the Custom Endpoint service owner to ensure
storing/updating of SDES on their end.

Third-Party bots leverage the LivePerson Visit Information API to collect the engagement attributes,
Further information on Visit Information API can be found [here](visit-information-api-visit-information.html).
Moreover, Engagement attributes are not updated throughout the life cycle of a conversation and are
only passed along with each message request.

### Sending Rich Content (Structured Content)

Structured Content/Rich Content is supported by the core LivePerson platform. Documentation
for the feature can be found [here](getting-started-with-rich-messaging-introduction.html).

{: .important}
If Images are sent in Rich content, then their URLs must be added to a whitelist via internal
LivePerson configuration (Houston: `messaging.rich.content.valid.urls`). Please note that you
must add all possible domains to this list manually as wildcards are not supported. Moreover,
All domains must be HTTPS secure.

An example of a Rich Content message response along with any optional metadata and analytical
information (intents) can be seen in Figure 2.5 below. More information on responses expected
by Third-Party Bot Connector can be found at [API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)

{: .important}
The response is expected to be sent by the [Get Conversation Events](third-party-bots-custom-endpoint-basic-content.html#custom-endpoint-ce-service-methods)
method of the Custom Endpoint service please ensure valid structured content is sent by using our
[Conversation Tester feature](third-party-bots-conversation-tester.html) or using
[this tool](https://livepersoninc.github.io/json-pollock/editor/).

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

Figure 2.5 Showing an example response of Structure Content Message

### Sending Quick Replies (Structured Content)

{: .important}
**Please note** Quick Replies are only supported in Messaging Conversations.

Quick Replies is a special type of Structured Content. It is a message sent along with predefined answers.
For detailed information on Quick Replies check out the documentation for the specific channel ([Mobile SDK and Web](mobile-sdk-and-web-templates-quick-replies-template.html), [Facebook Messenger](facebook-messenger-templates-quick-replies-template.html),
[Google RCS Business Messaging](google-rcs-business-messaging-templates-quick-replies-template.html)).

An example of a Quick Replies message response along with any optional metadata and analytical
information (intents) can be seen below in Figure 2.6. More information on responses expected
by Third-Party Bot Connector can be found at [API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)

{: .important}
The response is expected to be sent by the [Get Conversation Events](third-party-bots-custom-endpoint-basic-content.html#custom-endpoint-ce-service-methods)
method of the Custom Endpoint service please ensure valid structured content is sent by using our
[Conversation Tester feature](third-party-bots-conversation-tester.html) or using
[this tool](https://livepersoninc.github.io/json-pollock/editor/).

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

Figure 2.6 Showing an example of a Quick Replies response

### Bot Actions

{: .notice}
Please note we only support **ONE ACTION** per Custom Endpoint service response

#### Transfer

If the bot needs to transfer the conversation to a human agent, or the conversation flow
indicates that another bot is better suited for the identified intent, you will need to
tell the connector to transfer the conversation to a given skill.

Multiple scenarios for transfer/escalations exist and are as follows:

1. If the Bot does not have an appropriate answer, it should recognize this as a scenario
   for a transfer. Depending on the connector configuration or the decision-making capacity
   of the bot, the bot will transfer to a particular skill or default skill.

2. Explicit request from a visitor to transfer to an agent

3. If there is an internal error in the Third-Party connector or the Custom Endpoint service
   cannot be reached then the Third-Party Bot connector will transfer to a default skill setup
   during configuration.

Transfer action has two sets of responses that are as below:

{: .important}
The response is expected to be sent by the [Get Conversation Events](third-party-bots-custom-endpoint-basic-content.html#custom-endpoint-ce-service-methods)
method of Custom Endpoint service. To ensure validity of response, brands can use our
[Conversation Tester feature](third-party-bots-conversation-tester.html)

##### Transfer to Skill

In this case, transfer action will happen to the given skill name (case sensitive) that is passed.
An example of such a response can be seen below in Figure 2.7. More information on responses expected
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

Figure 2.7 Example of a Transfer action to a skill with a message

##### Transfer to Agent

{: .important}
This feature is depending on [permissions](https://knowledge.liveperson.com/contact-center-management-messaging-operations-transfer-to-agent.html#permissions)

This option transfers the conversation to the particular agent matching the provided agentId
and skill. If the agent is not available, the conversation will be transferred to an available
agent with the same skill.

An example response can be seen below in Figure 2.8. More information on responses expected
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

Figure 2.8 Example response of a transfer action to a agent with a message

#### Close Conversation

In the bot’s flow, there will be times when it is appropriate to end the conversation
without escalating to a live agent. If a query has been answered, or the brand has
determined that no escalation is required for a given query, then it is best practice
to have the bot end the conversation. An example response can be seen below in Figure 2.9.
More information on responses expected by Third-Party Bot Connector can be found at
[API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)

{: .important}
The response is expected to be sent by the [Get Conversation Events](third-party-bots-custom-endpoint-basic-content.html#custom-endpoint-ce-service-methods)
method of Custom Endpoint service. To ensure validity of response, brands can use our
[Conversation Tester feature](third-party-bots-conversation-tester.html)

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

Figure 2.9 Example response of a close action with a message

We also allow closing of a conversation without triggering a post conversation survey,
This can be done by adding the parameter `withoutPcs` as `true` to the parameters
property of action payload. Example response of such close action can be seen in the Figure 2.10

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

Figure 2.10 Example response of a close action with `withoutPcs` property

#### Change Time To Response of Conversation (TTR)

Change the TTR of a conversation based on the **action** value in the response object.

LivePerson Messaging uses 3 different types of priorities:

- URGENT
- NORMAL
- PRIORITIZED

Example response with `URGENT` priority can be seen below in Figure 2.11.
More information on responses expected by Third-Party Bot Connector can be found at
[API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)

{: .important}
The response is expected to be sent by the [Get Conversation Events](third-party-bots-custom-endpoint-basic-content.html#custom-endpoint-ce-service-methods)
method of Custom Endpoint service. To ensure validity of response, brands can use our
[Conversation Tester feature](third-party-bots-conversation-tester.html)

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

Figure 2.11 Example response of a Change TTR action with `URGENT` priority
