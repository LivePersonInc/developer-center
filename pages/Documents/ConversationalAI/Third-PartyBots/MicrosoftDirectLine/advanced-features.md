---
pagename: Advanced Features
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: Microsoft Direct Line
permalink: third-party-bots-microsoft-direct-line-advanced-features.html
indicator:
---

### Sending Pause/Delay Messages

It is possible to add a delay before regular messages and actions.
This delay will be added before a message or action provided in this activity will be sent.

```json-doc
{
  // ...
  "type": "message",
  "text": "",
  "channelData": {
    "delay": {
      "delay": 1,
      "typing": true
    }
  }
}
```
Figure 3.1 Activity resulting in a delay with typing indicator
<br>
<br>

- `delay` This is the number of seconds the bot will wait. Only whole numbers can be provided.
- `typing` This property controls if a typing indicator is shown during the delay. The property is optional and defaults to `true`.

{: .important}
A pure delay activity without any text or other structured content can e.g. be used if the bot should not respond with any 
content but an error escalation should be prevented (the connector would assume an issue with the bot if no response at all can 
be found).
A pure delay activity can also be used if [multiple activities](third-party-bots-microsoft-direct-line-introduction.html#configuration) are being sent.


### Sending Private Text Messages

It is possible to send a private text message from the Conversational Cloud via the agent workspace. 
This feature can now be used via the Third-Party bots as well. This will allow brands to define private message text 
within the conversational flow of the bot. These messages are published into the conversation for other Agents or 
Managers. This enables brands to customize messages giving more insight, summarizing actions taken by the bot, or 
also advising on next actions the handover agent should take.

{: .important}
If you have not migrated to the new Agent Workspace you will not be able to see the `Private` message indicator in the 
conversation window. Nevertheless, private text messages will not be shown to the consumer and only remain visible to 
Agents and Managers.

Private text message will never be shown to the consumer and will be visible only inside the conversation window of the
agent workspace. There are two properties, `text` and `messageAudience`, which need to be added within the response 
body of the function.

| key             | value                                 | notes                     |
| --------------- | ------------------------------------- | ------------------------- |
| text            | any string value                      | mandatory                 |
| messageAudience | value should be `AGENTS_AND_MANAGERS` | case sensitive, mandatory |
<br>
<br>

A single private text message with an action can be sent by adding `text` and `messageAudience` properties with 
relevant action (e.g. [Transfer](third-party-bots-microsoft-direct-line-basic-content.html#transfer)) 
properties. An example of such case is below:

```json-doc
{
  // ...
  "type": "message",
  "text": "This is a private text",
  "channelData": {
    "messageAudience": "AGENTS_AND_MANAGERS",
    "action": {
      "name": "TRANSFER",
      "type": "client",
      "parameters": {
        "skill": "human_skill"
      },
      "result_variable": "none"
    }
  }
}
```
Figure 3.2 Transfer activity with a private message visible to agents and managers
<br>
<br>

### Engagement attributes as context

Third-Party bots allows the collection of engagement attributes (more information can be found 
[here](engagement-attributes-types-of-engagement-attributes.html)) if the `Engagement Attributes` option is checked in 
the `Conversation Type` step as shown in Figure 3.3.

<img class="fancyimage" style="width:750px" src="img/engagement_attr_select.png">
Figure 3.3 Conversation Type step in creation/modification of bot configuration.

These attributes are **only** collected at the start of a conversation. Third-Party bots leverage the LivePerson 
Visit Information API to collect the engagement attributes. Further information on the Visit Information API 
can be found [here](visit-information-api-visit-information.html). Moreover, engagement attributes are not updated 
throughout the life cycle of a conversation and only passed along with each message request. 
In Microsoft Bot these engagement attributes are added to the property `lpSdes` which is part of another custom 
property of `context`. This context information within a conversation is preserved/passed in the `channelData` 
property (further information about `channelData` can be found 
[here](https://docs.microsoft.com/en-us/azure/bot-service/rest-api/bot-framework-rest-connector-api-reference?view=azure-bot-service-4.0#activity-object)
). An example of the activity can be seen below:

```json-doc
{
  // ...
  "type": "message",
  "text": "Some Conversation Text",
  "channelData": {
    "context": {
      "lpEvent": {}, // Holds LP Events
      "lpSdes": {}
    }
  }
}
```
Figure 3.4 Customer activity excerpt on a new chat
<br>
<br>

### Sending Multiple Responses

As stated under Limitations the default behaviour of our connector is to process the first responses we find on the channel. In case `Multiple Activities`
is not enabled or the waiting period is set to low, the connector might not retrieve every activity your bot is sending.

In that case, we also provide a way to define multiple bot responses in a single Direct Line activity. As with all channel-specific content, this is defined in the channelData property.
The array in the multiMessage property can contain the objects identified by the following types:

- `text` A plain message
- `delay` A delay between messages. **Important**: This format is different from the one described further above for a single message. You can only define the delay. There is no flag for the typing indicator.</li>
- `private-message` A private message as described in [Sending Private Text Messages](#sending-private-text-messages)
- `structured-content` A structured content as described in [Rich Content (Structured Content)](#rich-content--structured--content)

```json-doc
{
  // ...
  "type": "message",
  "text": "",
  "channelData": {
    "multiMessage": [
      {
        "type": "text",
        "value": "this is a text"
      },
      {
        "type": "private-message",
         "value": {
              "text": "This is a private text",
              "messageAudience": "AGENTS_AND_MANAGERS",
          }
      },
      {
        "type": "delay",
        "value": 1 // value is considered as seconds
      },
      {
        "type": "structured-content",
        "value": {
          "metadata": [],
          "structuredContent": {}
        }
      }
    ]
  }
}
```
Figure 3.5 Activity with a multiMessage array containing messages of different types
<br>
<br>

### Sending Encoded Metadata

Conversational Cloud Messaging platform provides a new metadata input type (“encodedMetadata”) for passing a base64 
encoded metadata on a conversation. The new metadata input type is in addition to the existing 
[conversation metadata](messaging-agent-sdk-conversation-metadata-guide.html) input field.
Third-party Bots also supports this property and this section will cover the information needed for you to send encoded 
metadata within your conversations. Before sending encoded metadata you must ensure the following conditions in order 
to successfully send the data.


* `Common.EncodedMetadata` AC feature is ON
* Content is base64 encoded
* Metadata size is limited to 5k

{: .important}
Failing to comply with the above criteria will cause the message to be dropped. This feature is only available for the 
messaging conversations, not for chat conversations.

Encoded Metadata can be sent with simple Text, Rich Content (structured content) and multiple responses.

#### Sending a Text Message with Encoded Metadata

For sending `encodedMetadata` with a text message you need to provide this property in `channelData` object. Make sure 
that `encodedMetadata` is written in camel case. An example of the simple text message response is below:

```json-doc
{
  // ...
  "type": "message",
  "text": "Hi i am sending a text with encoded metadata!!",
  "channelData": {
    "encodedMetadata": "ewoic29tZUluZm8iOiAiSSB3YXMgZW5jb2RlZCIKfQ=="
  }
}
```
Figure 3.6 Activity containing encodedMetadata for plain text
<br>
<br>

#### Sending Rich Content (structured content) with Encoded Metadata

For sending [structured content](getting-started-with-rich-messaging-introduction.html). You need to add additional property of `encodedMetadata` with your rich content object that you have defined within `channelData` property. An example of the simple Rich Content `JSON` can be seen below:

```json-doc
{
  // ...
  "type": "message",
  "text": "Hi i am sending a structured content with encoded metadata!!",
  "channelData": {
    "metadata": [
      {
        "id": "1234",
        "type": "ExternalId"
      }
    ],
    "encodedMetadata": "ewoic29tZUluZm8iOiAiSSB3YXMgZW5jb2RlZCIKfQ==",
    "structuredContent": {
      "type": "vertical",
      "elements": [
        {
          "type": "button",
          "click": {
            "actions": [
              {
                "text": "Recommend a movie",
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
```
Figure 3.7 Activity containing encodedMetadata for Rich Content
<br>
<br>

#### Sending Multiple Responses with Encoded Metadata

For sending Encoded Metadata with multiple responses one must provide an additional property of `encodedMetadata` with the already existing `type` and `value` properties under `multiMessage` array object. Sending encoded metadata is supported for the `text` and `structure-content` types only. An example of sending encoded metadata with both types can be found below.

{: .important}
**Please note** if you will send `encodedMetadata` within the `value` property of type `structure-content`, then it will not be passed. This kind of format is only acceptable if you are sending a single Rich Content as a response. Furthermore, for each message, you can see different `encodedMetadata` are defined so both of the messages will be sent with different encoded metadata.

```json-doc
{
  "type": "message",
  "text": "",
  "channelData": {
    "multiMessage": [
      {
        "type": "text",
        "value": "this is a text",
        "encodedMetadata": "ewoic29tZUluZm8iOiAiSSB3YXMgZW5jb2RlZCIKfQ=="
      },
      {
        "type": "structured-content",
        "encodedMetadata": "ZGlmZmVyZW50IGVuY29kZWQgbWV0YWRhdGE=",
        "value": {
          "metadata": [
            // ... Some structured content metadata
          ],
          "structuredContent": {
            // ... Some structured content object
          }
        }
      }
    ]
  }
}
```
Figure 3.8 MultiMessage Activity containing encodedMetadata
<br>
<br>

### Invoke LivePerson Function Activity

During a conversation, it is possible to trigger a LivePerson Function that is deployed to the [LivePerson Functions](liveperson-functions-overview.html) (Function as a Service) platform. This provides a way to run custom logic with a bot.

To invoke a LivePerson Function, we utilize the `channelData` `action-parameter` as we did for the above examples and add the `lambdaUid` of the LivePerson Function.

To retrieve the ***lambdaUuid*** of your LivePerson Function follow [this guide](liveperson-functions-external-invocations-client-credentials.html#step-4-get-the-lambda-uuid-from-functions)

In addition, it is possible to send your own payload to the function. Set your content inside the **payload** parameter

The bot does not escalate on a failed invocation by default. To enable this, set the additional parameter **failOnError** to **true**

An example of an invocation can be seen below:


```json
{
  "type": "message",
  "text": "Trigger LivePerson Function",
  "channelData": {
    "messageAudience": "AGENTS_AND_MANAGERS",
    "action": {
      "name": "INVOCATION",
      "type": "client",
      "parameters": {
        "lambdaUuid": "4ec49ffc-080b-4e59-b302-18d6b826191b",
        "payload": { "some": "stuff"},
        "failOnError": true
      },
      "result_variable": "none"
    }
  }
}
```
Figure 3.9 LivePerson Function Invocation with payload
