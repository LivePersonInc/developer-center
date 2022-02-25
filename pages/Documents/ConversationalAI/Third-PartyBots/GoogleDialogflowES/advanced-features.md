---
pagename: Advanced Features
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: Google Dialogflow ES
permalink: third-party-bots-google-dialogflow-es-advanced-features.html
indicator:
---

### Sending Pause/Delay Messages

It is possible to send a custom payload of type "delay" along regular content and actions.
This specifies the time the bot will wait before sending the next message.
The delay message can be added via the Custom Payload response in intent definition (as shown in Figure 3.2).

```json
{
  "delay": 8,
  "typing": false
}
```

Figure 3.1 Example payload for a delay

<ul>
  <li> <b>delay</b>: This is the number of seconds the bot will wait. These are expected to be only whole numbers. E.g. for a one second delay you will write 1 as a value</li>
  <li><b>typing</b>: This property will enable/disable the typing indicator while delay is happening. It is optional; if not provided then the value will be considered as true.</li>
</ul>

<br />

<img class="fancyimage" style="width:800px" src="img/ThirdPartyBots/dialogflow-es-delay-configuration.png">
Figure 3.2 An example of Message - Delay - Message  configuration in the Dialogflow console's intent editor

**Note:** using the delay as a single/sole response from the bot to the consumer, is effectively a ‘no response’ action.
Using this allows the bot to receive a consumer message without visibly responding to the consumer.

### Sending Private Text Message

It is possible to send a private text message in the Conversational Cloud via agent workspace.
This feature can now be used via the Third-Party bots as well.
This will allow brands to define private message texts within the conversational flow of the bot.
These messages are published into the conversation for other agent/manager participants.
This enables brands to customize messages giving more insight, summarizing actions taken by the bot, or also advising
on next actions the handover agent should take.

{: .important}
Please note If you have not migrated to new Agent Workspace you will not be able to see the `Private` message indicator
in the conversation window.
Nevertheless, private text messages will not be shown to the consumer and only remain visible to Agents and Managers.

Please note private text message will never be shown to the consumer and will be visible only inside the conversation
window of agent workspace. The private text message can be added via the Custom Payload response in intent definition
(as shown in Figure 3.4).

It is possible to send only a private text message response. An example payload is seen below:

```json
{
  "messageAudience": "AGENTS_AND_MANAGERS",
  "text": "This is a private message for agent from DialogFlow"
}
```

Figure 3.3 Example payload for a private text message

There are two properties, `text` and `messageAudience`, which are part of the Custom Payload response.

| key             | value                                 | notes                     |
| --------------- | ------------------------------------- | ------------------------- |
| text            | any string value                      | mandatory                 |
| messageAudience | value should be "AGENTS_AND_MANAGERS" | case sensitive, mandatory |

<br />

Setting a private text message between multiple messages is also possible. Moreover, it is also possible to send a private text message with the combination of actions(e.g. Transfer / Escalations) as well. Example of such a case (Message - Private Text Message - Action) can be seen in Figure 9.1.

<img class="fancyimage" style="width:800px" src="img/ThirdPartyBots/dialogflow-es-private_message.png">
Figure 3.4 An example of transfer action with a simple text message and private text message in the Dialogflow console's intent editor

### Message Context

Third-Party Bots provides additional message context to Dialogflow ES on the payload property.
In order to access the payload in Dialogflow ES you need to configure a
[Fulfillment](https://cloud.google.com/dialogflow/es/docs/fulfillment-overview) and ensure it is actived for the intent
in question.
Fulfillments can either be handled with Google Cloud Functions, or an external webhook can be configured. See Figure 3.5 for an
example using Google Cloud Function.

<img class="fancyimage" alt="fulfillment with metadata" style="width:800px" src="img/ThirdPartyBots/dialogflow-es-advanced-features-metadata-code.png">
Figure 3.5 Accessing the message context on a Fulfillment

<br/>

#### LP Event

One of the provided payload properties is the lpEvent. A use case would be to access the metadata that has been send
when the customer clicks a [quick reply](third-party-bots-google-dialogflow-es-basic-content.html#quick-replies).

```js
"use strict";

const functions = require("firebase-functions");
const { WebhookClient } = require("dialogflow-fulfillment");
const { Card, Suggestion } = require("dialogflow-fulfillment");

process.env.DEBUG = "dialogflow:debug"; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(
  (request, response) => {
    const agent = new WebhookClient({ request, response });
    console.log(
      "Dialogflow Request headers: " + JSON.stringify(request.headers)
    );
    console.log("Dialogflow Request body: " + JSON.stringify(request.body));

    function metadata(agent) {
      if (
        request.original_detect_intent_request.payload.lpEvent &&
        request.original_detect_intent_request.payload.lpEvent.metadata
      ) {
        agent.add("We have received some metadata from you:");
        agent.add(
          JSON.stringify(
            request.original_detect_intent_request.payload.lpEvent.metadata
          )
        );
      } else {
        agent.add("No metadata has been detected");
      }
    }

    let intentMap = new Map();
    intentMap.set("Button Action With Metadata", metadata);
    agent.handleRequest(intentMap);
  }
);
```

Figure 3.6 How to access the metadata of a customer message

<br/>

#### Engagement attributes

Third-Party bots allows the collection of engagement attributes (more information can be found [here](engagement-attributes-types-of-engagement-attributes.html)) if `Engagement Attributes` option is checked in the `Conversation Type` step as shown in Figure 12.1.

<img class="fancyimage" style="width:750px" src="img/ThirdPartyBots/common-engagement-attr-select.png">
Figure 3.7 Conversation Type step in creation/modification of bot configuration.

These attributes are **only** collected at the start of a conversation.
Third-Party bots leverage the LivePerson Visit Information API to collect the engagement attributes.
Further information Visit Information API can be found [here](visit-information-api-visit-information.html).
Moreover, Engagement attributes are not updated throughout the life cycle of a conversation and only passed along with each message request.
For DialogFlow ES, these engagement attributes are added to the property `lpSdes` that is sub-property of the `payload`
(more information about `payload` parameter can be found
[here](https://googleapis.dev/nodejs/dialogflow/latest/google.cloud.dialogflow.v2.html#.QueryParameters)).
An example of the request body can be seen below:

```javascript
{
  "session": "SomeSession",
  "queryParams": {
    "payload": {
      "lpEvent": {}, // Holds LP Events
      "lpSdes": {}
    }
  }
}
```

Figure 3.8

### Sending Encoded Metadata

Conversational Cloud Messaging platform provides a new metadata input type (“encodedMetadata”) for passing a base64 encoded metadata on a conversation. The new metadata input type is in addition to the existing [conversation metadata](messaging-agent-sdk-conversation-metadata-guide.html) input field. Third-party Bot also supports this property and this section will cover the information needed for you to send encoded metadata within your conversations. Before sending encoded metadata you must ensure the following conditions in order to successfully send the data.

<ul>
  <li><b>Common.EncodedMetadata</b> AC feature is ON</li>
  <li>Content is base64 encoded</li>
  <li> Metadata size is limited to 5k</li>
</ul>

{: .important}
Failing to comply with the above validation points will cause the message to be dropped. This feature is only available
for the messaging conversations not for chat conversations

Encoded Metadata can be sent with simple Text, Rich Content (structured content) and Multiple responses. For sending
encoded metadata as a Text or Rich Content message you must use `Custom Response` type for your relevant intent as
shown in Figure 3.9 below.

<img class="fancyimage" style="width:800px" src="img/ThirdPartyBots/dialogflow-es-encoded-metadata.png">
Figure 3.9 Use custom payload for Encoded Metadata

<br/>

#### Sending Text Message with Encoded Metadata

Please note that the default `Text Response` option in Dialogflow ES will not work with encoded metadata feature.
You have to use Custom Response with the properties `textResponse` and `encodedMetadata`.
Be careful with the camel-case characters. You must provide it exactly the same.

<ul>
  <li> <b>textResponse</b>: This is the text that will be sent to the user.</li>
  <li><b>encodedMetadata</b>: this is the property that will contain encoded metadata</li>
</ul>

```json
{
  "textResponse": "Hello I am a text response with encoded metadata!",
  "encodedMetadata": "ewoic29tZUluZm8iOiAiSSB3YXMgZW5jb2RlZCIKfQ=="
}
```

Figure 3.10 Custom payload of text message with encoded metadata

<br/>

<img class="fancyimage" style="width:800px" src="img/ThirdPartyBots/dialogflow-es-encoded-metadata-text.png">
Figure 3.11 Configuration in the Dialogflow ES Console
<br/>

#### Sending Rich Content (structured content) with Encoded Metadata

You need to add another property of `encodedMetadata` with your rich content object that you have created. An example of the simple Rich Content `JSON` can be seen below:

```json
{
  "metadata": [
    {
      "id": "1234",
      "type": "ExternalId"
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
              "text": "Recommend me a movie, please",
              "type": "publishText"
            }
          ]
        },
        "title": "Recommend a movie"
      }
    ]
  },
  "encodedMetadata": "ewoic29tZUluZm8iOiAiSSB3YXMgZW5jb2RlZCIKfQ=="
}
```

Figure 3.12 Custom payload for structured content with encoded metadata

<br />

<img class="fancyimage" style="width:800px" src="img/ThirdPartyBots/dialogflow-es-encoded-metadata-structured-content.png">
Figure 3.13 Configuration in the Dialogflow ES Console
<br />

### Invoke a LivePerson Function

During a conversation, it is possible to trigger a LivePerson Function that is deployed to the
[LivePerson Functions](liveperson-functions-overview.html) (Function as a Service) platform.
This provides a way to run custom logic with a bot.

The method for triggering an invocation is similar to other
[bot actions](third-party-bots-google-dialogflow-es-basic-content.html#bot-actions). Similar to a transfer action
`Actions and Parameters` need to be configured in the Dialogflow console.

The action field needs to be set to **INVOCATION** to instruct the connector to invoke the specified LivePerson Function

It is also required to provide the **lambdaUuid** of the function that should be invoked in parameters.
To retrieve the Lambda UUID of your LivePerson Function follow
[this guide](liveperson-functions-external-invocations-client-credentials.html#step-4-get-the-lambda-uuid-from-functions)

In addition, it is possible to send your own payload to the function. Set your content inside the **payload** key.

The bot does not escalate on a failed invocation by default. To enable this, set the additional parameter **failOnError** to **true**

<img class="fancyimage" style="width:800px" src="img/ThirdPartyBots/dialogflow-es-function-invocation.png">
Figure 3.14 Configure a LivePerson Function invocation

### Receiving Rich Content Response (Messaging Only)

Third-Party Bots allows LivePerson's Rich Messaging channel capabilities not only to be received as a response from the vendor but also, allow Rich Messages
(Structured Content) to be sent back to the vendor based on specific user interactions/responses (For example user sharing their location on WhatsApp).
Please note these capabilities are sometimes limited by the channels in which the conversation is happening. For the list of Rich Messaging capabilities for each channel,
browse or search the table on the [Knowledge Center](https://knowledge.liveperson.com/messaging-channels-messaging-channels-capabilities-comparison.html).

An example use case of the Rich Content event response sent by Third-Party Bots is described below. The example will show how to set up and access the `RichContentEvent` response with Google Dialogflow ES after a user shares his/her location.

#### Create Intent for RichContentEvent

Customer needs to create a intent which should have training phase `com.liveperson.bot-connectors.consumer.send-rich-content` as shown in the Figure 4.1 below.

<img class="fancyimage" style="width:800px" src="img/dialogflowes/dialogflow_es_richcontentevent-intent.png">
Figure 4.1 Intent creation in Dialogflow ES console

#### Create Google Cloud Function

For accessing the `RichContentEvent` body sent by Third-Party Bots you will need to create a Google cloud function that should be capable of receiving
the `RichContentEvent` sent by Third-Party Bots. The minimal code example below shows how to check if there is a `RichContentEvent` response present,
then send back raw `RichContentEvent` data. Please note, that response sent by The Google Cloud function should follow the Dialogflow ES response schemas.

```javascript
/**
 * Responds to any HTTP request.
 *
 * @param {Request} request HTTP request context.
 * @param {Response} response HTTP response context.
 */
exports.handleWebhook = (request, response) => {
  let jsonResponse = {};

  const {
    originalDetectIntentRequest: {
      payload: { lpEvent: { event = {} } = {} } = {},
    } = {},
  } = request.body;

  if (event && event.type && event.type === "RichContentEvent") {
    jsonResponse = {
      fulfillment_messages: [
        {
          text: {
            text: ["This is RichContentEvent"],
          },
        },
        {
          text: {
            text: [`Raw event data: ${JSON.stringify(event)} `],
          },
        },
      ],
    };
  } else {
    jsonResponse = {
      fulfillment_messages: [
        {
          text: {
            text: ["Unable to get any data for RichContentEvent"],
          },
        },
      ],
    };
  }

  response.send(jsonResponse);
};
```

Example `RichContentEvent` body of a map rich content that will be sent by Third-Party Bots on user sharing location in WhatsApp is as below:

```json
{
  "content": {
    "type": "vertical",
    "elements": [
      {
        "la": 49.82380908513249,
        "type": "map",
        "alt": "49.82380908513249, 2.021484375",
        "lo": 2.021484375
      }
    ]
  },
  "type": "RichContentEvent"
}
```

After adding cloud function make sure to deploy it and verify it is active.

#### Link Google/Third-Party Cloud Function to Fulfillment as Webhook

After the function has been deployed this needs to be added to the fulfillment section of the Bot Configuration.
This fulfillment can be found in the Google Dialogflow ES console as shown in the Figure 4.2 highlighted area.
Webhook needs to be enabled and filled with the relevant information of the cloud function.
(e.g. Auth Data and the Trigger URL)

<img class="fancyimage" style="width:800px" src="img/dialogflowes/dialogflow_es_richcontentevent-cloud-function-data.png">
Figure 4.2 Webhook configuration that need to be added for calling Cloud Function

Once Webhook configuration is added then the Google Dialogflow ES bot will be able to respond to the requests via the cloud function.
A demo of our WhatsApp map example with Google Cloud Function (defined above) can be seen below:

<img class="fancyimage" style="width:300px" src="img/dialogflowes/dialog_flow_2_richcontent_demo.gif">
