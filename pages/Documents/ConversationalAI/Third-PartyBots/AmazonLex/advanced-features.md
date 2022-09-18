---
pagename: Advanced Features
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: Amazon Lex
permalink: third-party-bots-amazon-lex-advanced-features.html
indicator:
---

{: .note}
At this time, Lex response cards and audio messages are not supported.
The Connector uses Lex ApiVersion 2016-11-28. Currently, we only support Amazon Lex V1 and we don't support Amazon Lex V2.

### Sending Encoded Metadata

Conversational Cloud Messaging platform provides a new metadata input type (“encodedMetadata”) for passing a base64 encoded metadata on a conversation. The new metadata input type is in addition to the existing [conversation metadata](messaging-agent-sdk-conversation-metadata-guide.html) input field. Third-party Bot also supports this property and this section will cover the information needed for you to send encoded metadata within your conversations. Before sending encoded metadata you must ensure the following conditions in order to successfully send the data.

<ul>
  <li><b>Common.EncodedMetadata</b> AC feature is ON</li>
  <li>Content is base64 encoded</li>
  <li> Metadata size is limited to 5k</li>
</ul>

{: .note}
Failing to comply with the above validation points will cause the message to be dropped. This feature is only available for the messaging conversations not for chat conversations

Encoded Metadata can be sent with simple Text, Rich Content (structured content) and Multiple responses. For sending encoded metadata as a Text or Rich Content message you must use `Custom Markup` type for your relevant intent as shown in Figure 3.1 below:

<img class="fancyimage" style="width:800px" src="img/lex/lex_encoded_metadata_custom_markup.png" alt="">
Figure 3.1

#### Sending Text Message with Encoded Metadata

Please note that the default `Message` option in Lex will not work with encoded metadata feature. You have to use Custom Markup with the properties `textResponse` and `encodedMetadata`. Be careful with the camel-case characters you must provide it exactly the same.

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

<img class="fancyimage" style="width:800px" src="img/lex/lex_encoded_metadata_text.png" alt="">
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
  "encodedMetadata": "ewoic29tZUluZm8iOiAiSSB3YXMgZW5jb2RlZCIKfQ==",
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
  }
}
```

<br />

<img class="fancyimage" style="width:800px" src="img/lex/lex_encoded_metadata_structured_content.png" alt="">
Figure 3.3

### Sending Pause/Delay Message

It is possible to send an event of type "delay" before regular content events and actions. This specifies the time the bot will wait before displaying the next message. The delay message can be added via Custom Markup response in intent definition (as shown in Figure 3.4). There are two properties, `delay` and `typing`, which are a part of the Custom Payload response.

<ul>
  <li> <b>delay</b>: This is the number of seconds the bot will wait. These are expected to be only whole numbers for example for one second delay you will write 1 as a value</li>
  <li><b>typing</b>: This property will enable/disable the typing indicator while delay is happening. It is optional; if not provided then the value will be considered as true.</li>
</ul>

<br />

Setting a delay in between multiple messages is possible and an example of such a case (Message — Delay — Message) can be seen in Figure 3.4.

<img class="fancyimage"  src="img/lex/lex_message_delay_message.png" alt="">
Figure 3.4 An example of Message — Delay — Message configuration in the Amazon lex console's intent editor

it is also possible to send only a single delay response. The example payload of such response is below:

```json
{
  "delay": 8,
  "typing": false
}
```

<img class="fancyimage" src="img/lex/delay_response_custom_payload.png" alt="">
Figure 3.5 Showing the Custom Markup message for delay message

**Note:** Using the delay as a single/sole response from the bot to the consumer, is effectively a ‘no response’ action. Using this allows the bot to receive a consumer message without responding to the consumer.

### Sending Private Text Message

It is possible to send a private text message from the Live Engage (LE-UI) via agent workspace. This feature can now be used via the Third-Party bots as well. This will allow Brands to define private message text within the conversational flow of the bot. These messages are published into the conversation for other Agent/Manger participants. This enables Brands to customize messages giving more insight, summarizing actions taken by the bot, or also advising on next actions the handover agent should take.

{: .note}
Please note If you have not migrated to new Agent Workspace you will not be able to see the `Private` message indicator in the conversation window. Nevertheless, private text messages will not be shown to the consumer and only remain visible to Agents and Managers.

Please note private text message will never be shown to the consumer and will be visible only inside the conversation window of agent workspace. The private text message can be added via the Custom Markup response in intent definition (as shown in Figure 3.6). There are two properties, `text` and `messageAudience`.

| key             | value                                 | notes                     |
| --------------- | ------------------------------------- | ------------------------- |
| text            | any string value                      | mandatory                 |
| messageAudience | value should be "AGENTS_AND_MANAGERS" | case sensitive, mandatory |

<br />

Setting a private text message between multiple messages is also possible. Moreover, it is also possible to send a private text message with the combination of actions(e.g. Transfer / Escalations) as well. Example of such a case (Message — Private Text Message — Action) can be seen in Figure 3.6.

<img class="fancyimage" style="width:600px" src="img/lex/private_message_response_custom_payload.png" alt="">
Figure 3.6 An example of transfer action with a simple text message and private text message in the Amazon lex console's intent editor

It is possible to send only a private text message response. The example payload of such response is below:

```json
{
  "messageAudience": "AGENTS_AND_MANAGERS",
  "text": "This is a private message for agent from Lex"
}
```

### Invoke LivePerson Function

During a conversation, it is possible to trigger a LivePerson Function that is deployed to the [LivePerson Functions](liveperson-functions-overview.html) (Function as a Service) platform. This provides a way to run custom logic with a bot.

The action field needs to be set to **INVOCATION** to instruct the connector to invoke the specified LivePerson Function.

It is also required to provide the **lambdaUuid**, of the function that should be invoked, in `data`.
To retrieve the Lambda UUID of your LivePerson Function follow [this guide](liveperson-functions-foundations-external-invocation.html#function-uuid)

In addition, it is possible to send your own payload to the function. Set your content inside the **payload** key.

The bot does not escalate on a failed invocation by default. To enable this, just set an additional parameter **failOnError** to **true**

```json
{
  "type": "ACTION",
  "params": {
    "action": "INVOCATION",
    "data": {
     "lambdaUuid": "4ec49ffc-080b-4e59-b302-18d6b826191b",
      "payload": "{ "some": "stuff"}",
      "failOnError": true
    }
  }
}
```

### Engagement attributes as context

Third-Party bots allows the collection of engagement attributes (more information can be found [here](engagement-attributes-types-of-engagement-attributes.html)) if `Engagement Attributes` option is checked in the `Conversation Type` step as shown in Figure 3.7.

<img class="fancyimage" style="width:750px" src="img/ThirdPartyBots/common-engagement-attr-select.png" alt="">
Figure 3.7 Conversation Type step in creation/modification of bot configuration

These attributes are **only** collected at the start of a conversation. Third-Party bots leverage the LivePerson Visit Information API to collect the engagement attributes, Further information Visit Information API can be found [here](visit-information-api-visit-information.html). Engagement attributes are not updated throughout the life cycle of a conversation and only passed along with each message request. For Lex, engagement attributes are added to the property `lpSdes` inside another custom sub-property `BC-LP-CONTEXT`. For the preservation of the state of engagement attributes across conversation `requestAttributes` property is used (more information about `requestAttributes` can be found [here](https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html#API_runtime_PostText_RequestSyntax)). An example of the request body can be seen below:

```javascript
{
  "inputText": "",
  "userId": "",
  "sessionAttributes": "",
  "requestAttributes": {
    "BC-LP-CONTEXT": {
      "lpEvent": {}, // Holds LP Events
      "lpSdes": {} // Holds SDES
    }
  }
}
```

### Receiving Rich Content Response (Messaging Only)

{: .note}
Following guide is going to introduce how to implement Amazon Lambda functions specifically for **Amazon Lex** via Amazon Console. Continue if you are familiar and have access to Amazon Lambda and Amazon Lex.

Third-Party Bots allows LivePerson's Rich Messaging channel capabilities not only to be received as a response from the vendor but also, allow Rich Messages
(Structured Content) to be sent back to the vendor based on specific user interactions/responses (For example user sharing their location on WhatsApp).
Please note these capabilities are sometimes limited by the channels in which the conversation is happening. For the list of Rich Messaging capabilities for each channel,
browse or search the table on the [Knowledge Center](https://knowledge.liveperson.com/messaging-channels-messaging-channels-capabilities-comparison.html).

An example use case of the Rich Content Event (`RichContentEvent`) response sent by Third-Party Bots is described below. The example will show how to set up and access the `RichContentEvent` response in Amazon Lex. We will use Amazon Lex capability of providing fulfillment via Amazon Lambda.

#### Create Amazon Lambda Function

Information of Rich Content Event is part of context information sent by Third-Party Bots in the request. To access the `RichContentEvent` body
we will need to create an Amazon Lambda function using which we can get `RichContentEvent` from the request attributes and send back the response that is
relevant for business use-cases. Below is a minimal code example that will check for `RichContentEvent` information and respond
with the event raw data. Please note that response should follow the Lex response schema and for more information on how to create Lambda function for Amazon Lex
you can also follow [the official documentation](https://docs.aws.amazon.com/lex/latest/dg/gs2-prepare.html)

```javascript
"use strict";

function close(sessionAttributes, fulfillmentState, message) {
  return {
    sessionAttributes,
    dialogAction: {
      type: "Close",
      fulfillmentState,
      message,
    },
  };
}

// --------------- Events -----------------------

function dispatch(intentRequest, callback) {
  const sessionAttributes = intentRequest.sessionAttributes;
  const requestAttributes = intentRequest.requestAttributes;
  let response;

  if (requestAttributes && requestAttributes["BC-LP-CONTEXT"]) {
    const parsedLpContext = JSON.parse(requestAttributes["BC-LP-CONTEXT"]);

    if (
      parsedLpContext.lpEvent &&
      parsedLpContext.lpEvent.event &&
      parsedLpContext.lpEvent.event.type &&
      parsedLpContext.lpEvent.event.type === "RichContentEvent"
    ) {
      response = `I received RichContentEvent. Raw Data: ${JSON.stringify(
        parsedLpContext.lpEvent.event
      )}`;
    } else {
      response = "Unable to find any RichContentEvent data";
    }
  } else {
    response = "Unable to find any LP Context Information";
  }

  callback(
    close(sessionAttributes, "Fulfilled", {
      contentType: "PlainText",
      content: response,
    })
  );
}

// --------------- Main handler -----------------------

// Route the incoming request based on intent.
// The JSON body of the request is provided in the event slot.
exports.handler = (event, context, callback) => {
  try {
    dispatch(event, (response) => {
      callback(null, response);
    });
  } catch (err) {
    callback(err);
  }
};
```

An example of a `RichContentEvent` body that will be sent by Third-Party Bots on user sharing location in WhatsApp is as follows:

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

#### Create Intent for RichContentEvent and Link Amazon Lambda

After the Amazon Lambda function is deployed now we need to create an intent which should have Sample utterances `com.liveperson.bot-connectors.consumer.send-rich-content`. After the Sample utterances are added move to section of the fulfillment and choose AWS Lambda function. Our deployed lambda function should populate in the list of selections. Select the lambda function which in our example case is `botplRichContentEventLamda`. This can be seen in Figure 3.8 below:

<img class="fancyimage" style="width:800px" src="img/lex/lex_richcontentevent-intent-lamda.png" alt="">
Figure 3.8 Sample utterances and Lambda function configuration for `RichContentEvent`

Once all of above steps has been configured and updated bot has been published then the Amazon Lex bot will be able to respond to the requests via the Amazon Lambda function. A demo of our WhatsApp map example (defined above) can be seen below:

<img class="fancyimage" style="width:300px" src="img/lex/lex_richcontent_demo.gif">
