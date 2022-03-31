---
pagename: Advanced Features
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: Custom Endpoint
permalink: third-party-bots-custom-endpoint-advanced-features.html
indicator:
---

### Sending Encoded Metadata

Conversational Cloud Messaging platform provides a new metadata input type (“encodedMetadata”)
for passing a base64 encoded metadata on a conversation. The new metadata input type is in
addition to the existing [conversation metadata](messaging-agent-sdk-conversation-metadata-guide.html)
input field. Third-party Bot also supports this property and this section will cover the
information needed for you to send encoded metadata within your conversations. Before sending
encoded metadata you must ensure the following conditions in order to successfully send the data.

<ul>
  <li><b>Common.EncodedMetadata</b> AC feature is ON</li>
  <li>Content is base64 encoded</li>
  <li> Metadata size is limited to 5k</li>
</ul>

{: .important}
Failing to comply with the above validation points will cause the message to be dropped.
This feature is only available for the messaging conversations not for chat conversations

#### Sending Text Message with Encoded Metadata

You can send encodedMetadata with a simple text message an example of such response can be seen in
Figure 3.1. More information on responses expected by Third-Party Bot Connector can be found at
[API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)

{: .important}
The response is expected to be sent by Get Conversation Events method of Custom Endpoint service.
To ensure validity of response, brands can use our [Conversation Tester feature](third-party-bots-conversation-tester.html)

```json
{
  "response": [
    {
      "type": "TEXT",
      "data": {
        "message": "This is a text with encoded metadata",
        "encodedMetadata": "ewoic29tZUluZm8iOiAiSSB3YXMgZW5jb2RlZCIKfQ==",
        "metadata": [{ "type": "ExternalId", "id": "ABCD1234" }]
      }
    }
  ],
  "analytics": {
    "intents": [
      {
        "id": "base-encoded-metadata-text",
        "description": "Encoded Metadata Text Messages",
        "confidenceScore": 1
      },
      {
        "id": "base-text",
        "description": "Text Messages",
        "confidenceScore": 0.99
      }
    ]
  }
}
```

Figure 3.1 Showing example response of a text with encoded metadata

#### Sending Rich Content (structured content) with Encoded Metadata

You can send encodedMetadata with a structured content message an example of such response can be seen in
Figure 3.2. More information on responses expected by Third-Party Bot Connector can be found at
[API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)

{: .important}
The response is expected to be sent by Get Conversation Events method of Custom Endpoint service.
To ensure validity of response, brands can use our [Conversation Tester feature](third-party-bots-conversation-tester.html)

```json
{
  "response": [
    {
      "type": "STRUCTURED_CONTENT",
      "data": {
        "metadata": [{ "type": "ExternalId", "id": "ABCD1234" }],
        "encodedMetadata": "ewoic29tZUluZm8iOiAiSSB3YXMgZW5jb2RlZCIKfQ==",
        "structuredContent": {
          "type": "vertical",
          "elements": [
            {
              "type": "button",
              "click": {
                "actions": [
                  { "text": "Recommend Me a movie!", "type": "publishText" }
                ]
              },
              "title": "Recommend Me a movie!"
            }
          ]
        }
      }
    }
  ],
  "analytics": {
    "intents": [
      {
        "id": "base-encoded-metadata-sc",
        "description": "Encoded Metadata SC Messages",
        "confidenceScore": 1
      },
      {
        "id": "base-sc",
        "description": "SC Messages",
        "confidenceScore": 0.99
      }
    ]
  }
}
```

Figure 3.2 Showing an example response of structured content with encoded metadata

### Sending Pause/Delay Message

It is possible to send an event of type "delay" before regular content events and actions.
This specifies the time the bot will wait before displaying the next message. An example
of such response can be seen in Figure 3.3 where one text message is displayed then 5 seconds
of delay and after that a structured content is presented. More information on responses expected by
Third-Party Bot Connector can be found at [API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)

{: .important}
The response is expected to be sent by Get Conversation Events method of Custom Endpoint service.
To ensure validity of response, brands can use our [Conversation Tester feature](third-party-bots-conversation-tester.html)

```json
{
  "response": [
    {
      "type": "TEXT",
      "data": {
        "message": "Please wait while i prepare to give you options!"
      }
    },
    {
      "type": "DELAY",
      "data": {
        "seconds": 4,
        "typing": true
      }
    },
    {
      "type": "STRUCTURED_CONTENT",
      "data": {
        "metadata": [
          {
            "type": "ExternalId",
            "id": "ABCD1234"
          }
        ],
        "structuredContent": {
          "type": "vertical",
          "elements": [
            {
              "type": "button",
              "click": {
                "actions": [
                  {
                    "text": "Recommend me a movie",
                    "type": "publishText"
                  }
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
        "id": "base-delay",
        "description": "Delay Message",
        "confidenceScore": 1
      },
      {
        "id": "base-all",
        "description": "Mix Messages",
        "confidenceScore": 0.99
      }
    ]
  }
}
```

Figure 3.3 Showing an example response of structured content with encoded metadata

### Sending Private Text Message

It is possible to send a private text message from the Live Engage (LE-UI) via
agent workspace. This feature can now be used via the Third-Party bots as well.
This will allow Brands to define private message text within the conversational
flow of the bot. These messages are published into the conversation for other
Agent/Manger participants. This enables Brands to customize messages giving more
insight, summarizing actions taken by the bot, or also advising on next actions
the handover agent should take. Please note private text message will never be
shown to the consumer and will be visible only inside the conversation window
of agent workspace.

{: .important}
Please note If you have not migrated to new Agent Workspace you will not be able
to see the `Private` message indicator in the conversation window. Nevertheless,
private text messages will not be shown to the consumer and only remain visible
to Agents and Managers.

An example of such response can be seen in Figure 3.4. More information on responses
expected by Third-Party Bot Connector can be found at [API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service)

{: .important}
The response is expected to be sent by Get Conversation Events method of Custom Endpoint service.
To ensure validity of response, brands can use our [Conversation Tester feature](third-party-bots-conversation-tester.html)

```json
{
  "response": [
    {
      "type": "TEXT",
      "data": {
        "message": "I am hidden from the customer",
        "messageAudience": "AGENTS_AND_MANAGERS"
      }
    },
    {
      "type": "TEXT",
      "data": {
        "message": "This is a normal text"
      }
    }
  ],
  "analytics": {
    "intents": [
      {
        "id": "base-all",
        "description": "Mix Messages",
        "confidenceScore": 1
      }
    ]
  }
}
```

Figure 3.4 Showing an example response of private text and a normal text

### Invoke LivePerson Function

During a conversation, it is possible to trigger a LivePerson Function that is deployed to
the [LivePerson Functions](liveperson-functions-overview.html) (Function as a Service) platform.
We provides a way to run custom logic with a bot. You need to ensure that the LivePerson Function
is deployed and running. Furthermore, user can provide a payload as well that will be sent to
the LivePerson function while invocation. The invoke response is considered as an action response.
An example of such response can be seen in Figure 3.5.

{: .notice}
Please note we only support **ONE ACTION** per Custom Endpoint service response

{: .important}
The response is expected to be sent by Get Conversation Events method of Custom Endpoint service.
To ensure validity of response, brands can use our [Conversation Tester feature](third-party-bots-conversation-tester.html)

```json
{
  "response": [
    {
      "type": "TEXT",
      "data": { "message": "I will invoke a function after this text" }
    },
    {
      "type": "ACTION",
      "data": {
        "name": "INVOKE_FUNCTION",
        "parameters": {
          "lambdaUuid": "4f9c233a-e7e6-4af3-b680-59ba20ab8962",
          "payload": { "message": "I am invocation function payload" }
        }
      }
    }
  ],
  "analytics": {
    "intents": [
      {
        "id": "base-invoke",
        "description": "Generic invocation Intent",
        "confidenceScore": 0.95
      }
    ]
  }
}
```

Figure 3.5 Showing an example response of invoke LivePerson function

The bot does not escalate on a failed invocation by default. To enable this, set the additional
parameter `failOnError` to `true`. An example of such response can be seen in Figure 3.6

```json
{
  "response": [
    {
      "type": "TEXT",
      "data": {
        "message": "I will invoke a function after this text that cause escalation on failure"
      }
    },
    {
      "type": "ACTION",
      "data": {
        "name": "INVOKE_FUNCTION",
        "parameters": {
          "lambdaUuid": "4f9c233a-e7e6-4af3-b680-59ba20ab8962",
          "payload": { "message": "I am invocation function payload" },
          "failOnError": true
        }
      }
    }
  ],
  "analytics": {
    "intents": [
      {
        "id": "base-invoke",
        "description": "Generic invocation Intent",
        "confidenceScore": 0.95
      }
    ]
  }
}
```

Figure 3.6 Showing an example response of invoke LivePerson function with `failOnError` property

### Receiving Rich Content Response (Messaging Only)

Third-Party Bots allows LivePerson's Rich Messaging channel capabilities not only to be
received as a response from the vendor but also, allow Rich Messages(Structured Content)
to be sent back to the vendor based on specific user interactions/responses (For example
user sharing their location on WhatsApp). Please note these capabilities are sometimes
limited by the channels in which the conversation is happening. For the list of Rich Messaging
capabilities for each channel,browse or search the table on the
[Knowledge Center](https://knowledge.liveperson.com/messaging-channels-messaging-channels-capabilities-comparison.html).

An example of request body of Rich Content Event (of type map) sent by Third-Party Bot
container to Custom Endpoint service can be seen in Figure 3.7. More information on request
expected by Third-Party Bot Connector can be found at [API Service Specification](https://github.com/LivePersonInc/third-party-bots-custom-endpoint-reference-service).

```json
{
  "type": "RICH_CONTENT",
  "source": "CONSUMER",
  "data": {
    "content": {
      "type": "vertical",
      "elements": [
        {
          "type": "map",
          "la": 49.43180847167969,
          "lo": 7.755561351776123,
          "alt": "49.43180847167969, 7.755561351776123"
        }
      ]
    }
  },
  "context": {
    // here comes context information
  }
}
```

Figure 3.7 An example of Rich Content Event request sent by Third-Party Bot connector to Custom Endpoint service

Some important things to notice here are

- The request body contains `type` which identifies that the content type is of `RICH_CONTENT`
- The actual body of the Rich Content Event can be accessed via `data.content` property

A demo of our WhatsApp map example with response from an example custom endpoint service
can be seen in Figure 3.8:

<img class="fancyimage" style="width:300px" src="img/customendpoint/customendpoint_richcontent_demo.gif">

Figure 3.8 A Demo of sending raw response back from Custom Endpoint Service on receiving Rich Content Event
