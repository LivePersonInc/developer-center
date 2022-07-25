---
pagename: Advanced Features
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: Google Dialogflow CX
permalink: third-party-bots-google-dialogflow-cx-advanced-features.html
indicator:
---

### Sending Encoded Metadata

Conversational Cloud Messaging platform provides a new metadata input type (“encodedMetadata”) for passing a base64 encoded metadata on a conversation. The new metadata input type is in addition to the existing [conversation metadata](messaging-agent-sdk-conversation-metadata-guide.html) input field. Third-party Bot also supports this property and this section will cover the information needed for you to send encoded metadata within your conversations. Before sending encoded metadata you must ensure the following conditions in order to successfully send the data.

<ul>
  <li><b>Common.EncodedMetadata</b> AC feature is ON</li>
  <li>Content is base64 encoded</li>
  <li> Metadata size is limited to 5k</li>
</ul>

{: .important}
Failing to comply with the above validation points will cause the message to be dropped. This feature is only available for the messaging conversations not for chat conversations

Encoded Metadata can be sent with simple Text, Rich Content (structured content) and Multiple responses. For sending encoded metadata as a Text or Rich Content message you must use `Custom Response` type for your relevant intent as shown in Figure 3.1 below

<img class="fancyimage" style="width:800px" src="img/dialogflowcx/dialogflow_encoded_metadata.png" alt="">
Figure 3.1

#### Sending Text Message with Encoded Metadata

Please note that the default `Text Response` option in Dialogflow will not work with encoded metadata feature. You have to use Custom Response with the properties `textResponse` and `encodedMetadata`. Be careful with the camel-case characters you must provide it exactly the same.

<ul>
  <li> <b>textResponse</b>: This is the text that will be sent to the user.</li>
  <li><b>encodedMetadata</b>: this is the property that will contain encoded metadata</li>
</ul>

An example of the custom payload text message response is below:

```json
{
  "textResponse": "Hello I am a text response with encoded metadata!",
  "encodedMetadata": "ewoic29tZUluZm8iOiAiSSB3YXMgZW5jb2RlZCIKfQ=="
}
```

<br />

<img class="fancyimage" style="width:800px" src="img/dialogflowcx/dialogflow_encodedmetadata_text.png" alt="">
Figure 3.2

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

<br />

<img class="fancyimage" style="width:600px" src="img/dialogflowcx/dialogflow_encodedmetadata_structuredcontent.png" alt="">
Figure 3.3

### Sending Pause/Delay Message

It is possible to send an event of type "delay" before regular content events and actions. This specifies the time the bot will wait before displaying the next message. The delay message can be added via the Custom Payload response in intent definition (as shown in Figure 3.4). There are two properties, `delay` and `typing`, which are a part of the Custom Payload response.

<ul>
  <li> <b>delay</b>: This is the number of seconds the bot will wait. These are expected to be only whole numbers for example for one second delay you will write 1 as a value</li>
  <li><b>typing</b>: This property will enable/disable the typing indicator while delay is happening. It is optional; if not provided then the value will be considered as true.</li>
</ul>

<br />

Setting a delay in between multiple messages is possible and an example of such a case (Message - Delay - Message) can be seen in Figure 3.4.

<img class="fancyimage" style="width:600px" src="img/dialogflowcx/dialogflow_message_delay_message.png" alt="">
Figure 3.4 An example of Message - Delay - Message  configuration in the Dialogflow console's intent editor

It is possible to send only a single delay response. The example payload of such response is below:

```json
{
  "delay": 8,
  "typing": false
}
```

<img class="fancyimage" style="width:800px" src="img/dialogflowcx/delay_response_custom_payload.png" alt="">
Figure 3.5 showing the Custom Markup message for delay message

**Note:** Using the delay as a single/sole response from the bot to the consumer, is effectively a ‘no response’ action. Using this allows the bot to receive a consumer message without responding to the consumer.

### Sending Private Text Message

It is possible to send a private text message from the Conversational Cloud to other agents on the conversation. This feature can now be used via the Third-Party Bots as well. This will allow Brands to define private message text within the conversational flow of the bot. These messages are published into the conversation for other Agent/Manger participants. This enables Brands to customize messages giving more insight, summarizing actions taken by the bot, or also advising on next actions the handover agent should take.

{: .important}
Please note If you have not migrated to new Agent Workspace you will not be able to see the `Private` message indicator in the conversation window. Nevertheless, private text messages will not be shown to the consumer and only remain visible to Agents and Managers.

Please note private text message will never be shown to the consumer and will be visible only inside the conversation window of agent workspace. The private text message can be added via the Custom Payload response in intent definition (as shown in Figure 3.6). There are two properties, `text` and `messageAudience`, which are part of the Custom Payload response.

| key             | value                                 | notes                     |
| --------------- | ------------------------------------- | ------------------------- |
| text            | any string value                      | mandatory                 |
| messageAudience | value should be "AGENTS_AND_MANAGERS" | case sensitive, mandatory |

<br />

Setting a private text message between multiple messages is also possible. Moreover, it is also possible to send a private text message with the combination of actions(e.g. Transfer / Escalations) as well. Example of such a case (Message - Private Text Message - Action) can be seen in Figure 3.6.

<img class="fancyimage" style="width:800px" src="img/dialogflowcx/private_message_response_custom_payload.png" alt="">
Figure 3.6 An example of transfer action with a simple text message and private text message in the Dialogflow console's intent editor

It is possible to send only a private text message response. The example payload of such response is below:

```json
{
  "messageAudience": "AGENTS_AND_MANAGERS",
  "text": "This is a private message for agent from DialogFlow CX"
}
```

### Invoke LivePerson Function

During a conversation, it is possible to trigger a LivePerson Function that is deployed to the [LivePerson Functions](liveperson-functions-overview.html) (Function as a Service) platform. This provides a way to run custom logic with a bot.

The method for triggering an invocation is similar to the transfer action in that the Custom Payload feature must be use to set the action and the parameters.

The action field needs to be set to **INVOCATION** to instruct the connector to invoke the sepecified LivePerson Function

It is also required to provide the **lambdaUuid** of the function that should be invoked in parameters.
To retrieve the Lambda UUID of your LivePerson Function follow [this guide](liveperson-functions-foundations-external-invocation.html#function-uuid)

In addition, it is possible to send your own payload to the function. Set your content inside the **payload** key.

The bot does not escalate on a failed invocation by default. To enable this, set the additional parameter **failOnError** to **true**

<img class="fancyimage" style="width:800px" src="img/dialogflowcx/image_13.png" alt="">
Figure 3.7

### Engagement attributes as context

Third-Party bots allows the collection of engagement attributes (more information can be found [here](engagement-attributes-types-of-engagement-attributes.html)) if `Engagement Attributes` option is checked in the `Conversation Type` step as shown in Figure 3.8.

<img class="fancyimage" style="width:750px" src="img/ThirdPartyBots/common-engagement-attr-select.png" alt="">
Figure 3.8 Conversation Type step in creation/modification of bot configuration.

These attributes are **only** collected at the start of a conversation. Third-Party bots leverage the LivePerson Visit Information API to collect the engagement attributes, Further information Visit Information API can be found [here](visit-information-api-visit-information.html). Moreover, Engagement attributes are not updated throughout the life cycle of a conversation and only passed along with each message request. For DialogFlow CX these engagement attributes are added to the property `lpSdes` that is sub-property of the `payload` (more information about `payload` parameter can be found [here](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/QueryParameters)). An example of the request body can be seen below:

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

### Receiving Rich Content Response (Messaging Only)

Third-Party Bots allows LivePerson's Rich Messaging channel capabilities not only to be received as a response from the vendor but also, allow Rich Messages
(Structured Content) to be sent back to the vendor based on specific user interactions/responses (For example user sharing their location on WhatsApp).
Please note these capabilities are sometimes limited by the channels in which the conversation is happening. For the list of Rich Messaging capabilities for each channel,
browse or search the table on the [Knowledge Center](https://knowledge.liveperson.com/messaging-channels-messaging-channels-capabilities-comparison.html).

An example use case of the Rich Content Event(`RichContentEvent`) response sent by Third-Party Bots is described below. The example will show how to set up and access the `RichContentEvent` response with Google Dialogflow CX after a user shares the location.

#### Create Intent for RichContentEvent

We needs to create a intent which should have training phase `com.liveperson.bot-connectors.consumer.send-rich-content` as shown in the Figure 3.9 below.

<img class="fancyimage" style="width:800px" src="img/dialogflowcx/dialogflow_cx_richcontentevent-intent.png" alt="">
Figure 3.9 Intent creation in Dialogflow CX console

#### Create Google Cloud Function

For accessing the `RichContentEvent` body sent by Third-Party Bots you will need to create a Google cloud function that should be capable of receiving
the response sent by Third-Party Bots. Below is a minimal code example that checks if there is `RichContentEvent` present in
the request sent by Third-Party Bots, then sends back raw `RichContentEvent` data. Please note that the response should follow the Dialogflow CX response schema.

```javascript
/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context of Dialogflow CX.
 * @param {!express:Response} res HTTP response context.
 */
exports.dialogflowCxCloudFunction = (req, res) => {
  const { body: { payload: { lpEvent: { event } = {} } = {} } = {} } = req;

  let fulfillmentResponse;

  if (event && event.type && event.type === "RichContentEvent") {
    fulfillmentResponse = {
      fulfillmentResponse: {
        messages: [
          {
            text: {
              text: [`RichContentEvent Received`],
            },
          },
          {
            text: {
              text: [`Raw Data: ${JSON.stringify(event)}`],
            },
          },
        ],
      },
    };
  } else {
    fulfillmentResponse = {
      fulfillmentResponse: {
        messages: [
          {
            text: {
              text: [`No RichContentEvent found`],
            },
          },
        ],
      },
    };
  }

  res.status(200).send(fulfillmentResponse);
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

#### Link Google/Third-Party Cloud Function to Fulfillment as Webhook

After the cloud function has been deployed, it can be added to the fulfillment of the page or your route by enabling WebHook.
An example of enabling such a WebHook via Google Cloud function can be found in Figure 3.10 Highlighted area. If your function is deployed and active,
It should populate in the list. Moreover, The Dialogflow CX console allows us to attach Third-Party WebHook calls as well.
Please note, you need to ensure that, Third-Party Cloud WebHooks should be accessible and respond in the expected Dialogflow CX
response formate as we have shown in the example of Google Cloud Function above.

<img class="fancyimage" style="width:600px" src="img/dialogflowcx/dialogflow_cx_richcontentevent-enable-webhook.png" alt="">
Figure 3.10 Showing a Google Cloud Function named `googleRichContentEventCloudFunction` attached to the fulfillment Response

Once all of the above steps have been configured then the Dialogflow CX bot will be able to respond to the requests via the cloud function.
A demo of our WhatsApp map example with Google Cloud Function (defined above) can be seen below:

<img class="fancyimage" style="width:300px" src="img/dialogflowcx/dialogflow_cx_richcontent_demo.gif">
