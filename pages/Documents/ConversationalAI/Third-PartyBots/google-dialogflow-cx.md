---
pagename: Google Dialogflow CX
redirect_from:
  - bot-connectors-google-dialogflow-cx.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
permalink: third-party-bots-google-dialogflow-cx.html
indicator:
---

### Overview

The following documentation outlines the configuration for the connector and how to implement functions specifically for **Google Dialogflow CX**.

### Bot Configuration

{: .important}
See the [Getting Started](bot-connectors-getting-started.html) guide first to complete pre-requisite steps.

You will be presented with following screen to complete the Vendor Settings in order to add bot connector.

<img class="fancyimage" style="width:600px" src="img/ThirdPartyBots/dialogflow-cx-wizard.png">

Figure 1.1 Dialogflow CX Vendor Step

The following Dialogflow CX information should be provided to LivePerson:

<table>
  <thead>
  <tr>
    <th>Item</th>
    <th>Description</th>
    <th>Example</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Language code</td>
    <td>Language code for Dialogflow</td>
    <td>en-US</td>
  </tr>
  <tr>
    <td>Project ID</td>
    <td>Dialogflow project id</td>
    <td>bxx-xxxxxxx-xxx-dialogflow-cx</td>
  </tr>
    <tr>
    <td>Agent ID</td>
    <td>Dialogflow CX agent id</td>
    <td>abcderwe-dc8e-4a83-b2f2-369089753c42</td>
  </tr>
  </tr>
    <tr>
    <td>Environment ID</td>
    <td>Dialogflow CX environment id (optional)</td>
    <td>abc4fff1-380c-4c8a-afbb-0289bc4e1234</td>
  </tr>
  <tr>
    <td>User email address</td>
    <td>Email address of the Google Service account</td>
    <td>dialogflow-xxxxxx@bxx-xxxxxxx-xxx-dialogflow-cx.iam.gserviceaccount.com</td>
  </tr>
   <tr>
    <td>Service location</td>
    <td>Location of the Dialogflow API Backend</td>
    <td>us-dialogflow.googleapis.com</td>
  </tr>
  <tr>
    <td>User private key</td>
    <td>Private key of the IAM Account, please keep the formatting as provided by Google</td>
    <td>-----BEGIN PRIVATE KEY-----
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        BSioVh/nHPX2QX2MKSbue+k=<br /> 
        -----END PRIVATE KEY-----</td>
  </tr>
  </tbody>
</table>

{: .important}
`EnvironmentId` is an optional parameter. When it is not provided, the current Draft Flow will be used.

{: .important}
You have to agree to Data Disclaimer from now onward in order to use the services of bot connector. For that you can click on the checkbox "I agree to the Data Disclaimer"

<br />
#### Service Account

Dialogflow CX adheres to Google’s oAuth2. Some degree of familiarity with Google IAM policies and IAM console is necessary for setting up a valid Dialogflow CX client with _Read Only API access_. A _service account_ is a **prerequisite** for setting up the above config. Documentation available [here](https://dialogflow.com/docs/reference/v2-auth-setup).

The expected output of a service account setup is a JSON file, example below:

```json
{
  "type": "service_account",
  "project_id": "[PROJECT-ID]",
  "private_key_id": "[KEY-ID]",
  "private_key": "-----BEGIN PRIVATE KEY-----\n[PRIVATE-KEY]\n-----END PRIVATE KEY-----\n",
  "client_email": "[SERVICE-ACCOUNT-EMAIL]",
  "client_id": "[CLIENT-ID]",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://accounts.google.com/o/oauth2/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "Client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/[SERVICE-ACCOUNT-EMAIL]"
}
```

Figure 1.2 JSON containing Private key that is generated during the Service Account setup

{: .notice}
The config wizard expects each of the pieces of auth data to be copied from the JSON file, without quotes. For the private_key especially, do not modify the string, do not remove any of the newline characters. Just copy and paste directly.

<br />
#### Environments
The Connector supports [Dialogflow CX environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).

<img class="fancyimage" style="width:600px" src="img/ThirdPartyBots/dialogflow-cx-environments.png">

Figure 1.3 Environments in the Dialogflow CX Console

The necessary Environment ID is the last part of the environment URI you can copy in the Dialogflow CX console.

{: .important}
projects/test-project/locations/us-central1/agents/a11a1aa1-aa1a-1a11-a1a1-1111111111a11/environments/**_53ad121d-5196-41a3-4682-d9de6df94203_**

<br />
#### Test Connection

For validation of the credentials provided, you can now perform a test connection request to see if everything that you
have provided is working and reachable. You can click on the button "Test Connection" to see if the connection succeed
or fails.
You will be able to save the configuration even if the test fails, but your bot will not be able to start successfully.

<img class="fancyimage" style="width:600px" src="img/ThirdPartyBots/dialogflow-cx-wizard-failed.png">

Figure 1.4 Showing the failure case when testing the connection.

Once you are done with providing configuration you can save it by pressing on "Done". **_Congratulations!_** You have completed the configuration of the Google DialogFlow CX bot.

{: .important}
Following guide is going to introduce how to implement functions specifically for **Dialogflow CX** using [Dialogflow console](https://console.cloud.google.com/apis/api/dialogflow.googleapis.com/). Continue if you are familiar and have access to [Dialogflow console](https://console.cloud.google.com/apis/api/dialogflow.googleapis.com/).

### Limitations

#### Dialogflow CX Query length Limit

<div class="notice">
The Dialogflow CX service has a <a href="https://dialogflow.com/docs/reference/agent/query" target="_blank">limitation</a> on the length of the ‘query’ property. Any query longer than 255 characters will invoke a custom event in Dialogflow.
To handle this gracefully, we recommend building a simple intent that handles a ‘DIALOGFLOW_CHAR_LIMIT’ *event*.
</div>

1. Create an intent with an event using the string: DIALOGFLOW_CHAR_LIMIT

   <img style="width:600px" src="img/dialogflowcx/image_7.png">

   Figure 2.1

2. Do not forget to add a custom response in the **Text response** section.

   <img style="width:700px" src="img/dialogflowcx/image_8.png">

   Figure 2.2

### Welcome Event

The behaviour of the welcome event is different depending on whether the bot is for chat and messaging. This divergence comes down to the way that each individual Liveperson product works..

A Messaging conversation qualifies as "initiated" from a Conversational Cloud perspective only after the consumer sends their first message. The consumer is prompted for their initial message in the channel they have chosen to initiate the conversation. As a result, the consumer’s first message is something that can be parsed by Dialogflow CX and an intent determined.

The below documents cover where to configure the initial message on a given platform.

<table>
  <thead>
    <tr>
      <th>Platform</th>
      <th>Docs</th>
      <th>Attribute</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>iOS</td>
      <td>https://developers.liveperson.com/consumer-experience-ios-sdk-localizationkeys.html</td>
      <td>hiMessage</td>
    </tr>
    <tr>
      <td>Android</td>
      <td>https://developers.liveperson.com/android-modifying-string.html#resultOverlayRecordTemplate</td>
      <td>lp_first_message</td>
    </tr>
    <tr>
      <td>Web</td>
      <td>N/A</td>
      <td>Default LP Message</td>
    </tr>
    <tr>
      <td>Other</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

A Chat conversation is considered started when the chat is routed to an agent. Best practice is for the agent to provide the first response.
In this scenario, there is no text from the consumer to parse, thus the default ‘WELCOME’ event is utilised as a start point for the bot to prompt the user to provide input and progress the conversation.

Ensure you have an ‘entry point’ intent that utilises the default ‘WELCOME’ event.

<img class="fancyimage" style="width:550px" src="img/dialogflowcx/image_6.png">

Figure 3.1

### Change Time To Response of Conversation

Change the TTR of a conversation based on the **action** value in the response object.

LivePerson Messaging uses 3 different types of priorities:
"URGENT",
“NORMAL”
“PRIORITIZED”

<img class="fancyimage" style="width:600px" src="img/dialogflowcx/image_9.png">

Figure 3.2

### Transfer / Escalations

If the bot needs to transfer the conversation to a human agent, or the conversation flow indicates that another bot is better suited for the identified intent, you will need to tell the connector to transfer the conversation to a given skill.

This is achieved creating a Custom Payload in your page with the and action object, having TRANSFER as name and anther parameter named parameters that must contain the skill property and the skill name.

Multiple scenarios for transfer/escalations exist triggered by the transfer action object.

1. Explicit request from visitor to transfer to an agent (Eg, action : transfer)

2. If the Bot does not have an appropriate answer, it should recognise this as a scenario for a transfer.
   Depending on the connector configuration or the decision making capacity of the bot, the bot will transfer to a particular skill or default skill.

3. If there is a internal error or the bot service cannot be reached the connector will transfer to a default skill set up during configuration.

Transfers and escalations rely on the _action_ item in the response object.

Action: **TRANSFER (Case sensitive)**

Parameters: ‘skill’ **(Case sensitive)** with ‘value’ of skill name (case sensitive) in Conversational Cloud.

<img class="fancyimage" style="width:600px" src="img/dialogflowcx/image_10.png">

Figure 4.1

### Sending Rich Content (Structured Content)

Structured Content/Rich Content is supported by the core LivePerson platform. Documentation for the feature can be found [here](getting-started-with-rich-messaging-introduction.html).

To send Structured Content via Dialogflow CX, send a _custom payload_ option via an intent.

<img class="fancyimage" style="width:800px" src="img/dialogflowcx/image_11.png">

Figure 5.1

{: .important}
If Images are sent in Rich content, then their URLs must be added to a whitelist via internal LivePerson configuration (Houston: `messaging.rich.content.valid.urls`). Please note that you must add all possible domains to this list manually as wildcards are not supported. Moreover, All domains must be HTTPS secure.

This should contain valid structured content, along with any optional metadata required for the structured content (as seen in Figure 5.1). Always validate your structured content using [this tool](https://livepersoninc.github.io/json-pollock/editor/) before entering into the Dialogflow console.

Example Metadata

```json-doc
{
  "metadata": [
    {
      //Mandatory
      "type": "ExternalId", //Mandatory
      "id": "ABCD1234" //Mandatory
    }
  ],
  "structuredContent": {
    //Mandatory
    "type": "vertical",
    "elements": [
      {
        "type": "image",
        "url": "https://i.ytimg.com/vi/zmeByDJ02mQ/hqdefault.jpg",
        "tooltip": "image tooltip"
      },
      {
        "type": "text",
        "text": "product name (Title)",
        "tooltip": "product name (Title)"
      },
      {
        "type": "text",
        "text": "product category (type)",
        "tooltip": "product category (type)"
      },
      {
        "type": "text",
        "text": "$155.99",
        "tooltip": "$155.99"
      }
    ]
  }
}
```

Figure 5.2 Dialogflow Example Custom Payload

### Sending Quick Replies (Structured Content)

{: .important}
**Please note** Quick Replies are only supported in Messaging Conversations.

Quick Replies is a special type of Structured Content. It is a message sent along with predefined answers.
For detailed information on Quick Replies check out the documentation for the specific channel ([Mobile SDK and Web](mobile-sdk-and-web-templates-quick-replies-template.html), [Facebook Messenger](facebook-messenger-templates-quick-replies-template.html), [Google RCS Business Messaging](google-rcs-business-messaging-templates-quick-replies-template.html)).

```json
{
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
            "actions": [
              {
                "type": "publishText",
                "text": "yep"
              }
            ],
            "metadata": [
              {
                "type": "ExternalId",
                "id": "Yes-1234"
              }
            ]
          }
        },
        {
          "type": "button",
          "tooltip": "No!",
          "title": "No!",
          "click": {
            "actions": [
              {
                "type": "publishText",
                "text": "No!"
              }
            ],
            "metadata": [
              {
                "type": "ExternalId",
                "id": "No-4321"
              }
            ]
          }
        }
      ]
    },
    "message": "Do you like Bots?"
  },
  "metadata": [
    {
      "id": "1234",
      "type": "ExternalId"
    }
  ]
}
```

Figure 6.1 QuickReplies Structured Content example

### Sending Encoded Metadata

Conversational Cloud Messaging platform provides a new metadata input type (“encodedMetadata”) for passing a base64 encoded metadata on a conversation. The new metadata input type is in addition to the existing [conversation metadata](messaging-agent-sdk-conversation-metadata-guide.html) input field. Third-party Bot also supports this property and this section will cover the information needed for you to send encoded metadata within your conversations. Before sending encoded metadata you must ensure the following conditions in order to successfully send the data.

<ul>
  <li><b>Common.EncodedMetadata</b> AC feature is ON</li>
  <li>Content is base64 encoded</li>
  <li> Metadata size is limited to 5k</li>
</ul>

{: .important}
Failing to comply with the above validation points will cause the message to be dropped. This feature is only available for the messaging conversations not for chat conversations

Encoded Metadata can be sent with simple Text, Rich Content (structured content) and Multiple responses. For sending encoded metadata as a Text or Rich Content message you must use `Custom Response` type for your relevant intent as shown in Figure 7.1 below

<img class="fancyimage" style="width:800px" src="img/dialogflowcx/dialogflow_encoded_metadata.png">
Figure 7.1

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

<img class="fancyimage" style="width:800px" src="img/dialogflowcx/dialogflow_encodedmetadata_text.png">
Figure 7.2 
 
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

<img class="fancyimage" style="width:800px" src="img/dialogflowcx/dialogflow_encodedmetadata_structuredcontent.png">
Figure 7.3

### Sending Pause/Delay Message

It is possible to send an event of type "delay" before regular content events and actions. This specifies the time the bot will wait before displaying the next message. The delay message can be added via the Custom Payload response in intent definition (as shown in Figure 8.1). There are two properties, `delay` and `typing`, which are a part of the Custom Payload response.

<ul>
  <li> <b>delay</b>: This is the number of seconds the bot will wait. These are expected to be only whole numbers for example for one second delay you will write 1 as a value</li>
  <li><b>typing</b>: This property will enable/disable the typing indicator while delay is happening. It is optional; if not provided then the value will be considered as true.</li>
</ul>

<br />

Setting a delay in between multiple messages is possible and an example of such a case (Message - Delay - Message) can be seen in Figure 8.1.

<img class="fancyimage" style="width:800px" src="img/dialogflowcx/dialogflow_message_delay_message.png">
Figure 8.1 An example of Message - Delay - Message  configuration in the Dialogflow console's intent editor

It is possible to send only a single delay response. The example payload of such response is below:

```json
{
  "delay": 8,
  "typing": false
}
```

<img class="fancyimage" style="width:800px" src="img/dialogflowcx/delay_response_custom_payload.png">
Figure 8.2 showing the Custom Markup message for delay message

**Note:** using the delay as a single/sole response from the bot to the consumer, is effectively a ‘no response’ action. Using this allows the bot to receive a consumer message without responding to the consumer.

### Sending Private Text Message

It is possible to send a private text message from the Live Engage (LE-UI) via agent workspace. This feature can now be used via the Third-Party bots as well. This will allow Brands to define private message text within the conversational flow of the bot. These messages are published into the conversation for other Agent/Manger participants. This enables Brands to customize messages giving more insight, summarizing actions taken by the bot, or also advising on next actions the handover agent should take.

{: .important}
Please note If you have not migrated to new Agent Workspace you will not be able to see the `Private` message indicator in the conversation window. Nevertheless, private text messages will not be shown to the consumer and only remain visible to Agents and Managers.

Please note private text message will never be shown to the consumer and will be visible only inside the conversation window of agent workspace. The private text message can be added via the Custom Payload response in intent definition (as shown in Figure 9.1). There are two properties, `text` and `messageAudience`, which are part of the Custom Payload response.

| key             | value                                 | notes                     |
| --------------- | ------------------------------------- | ------------------------- |
| text            | any string value                      | mandatory                 |
| messageAudience | value should be "AGENTS_AND_MANAGERS" | case sensitive, mandatory |

<br />

Setting a private text message between multiple messages is also possible. Moreover, it is also possible to send a private text message with the combination of actions(e.g. Transfer / Escalations) as well. Example of such a case (Message - Private Text Message - Action) can be seen in Figure 9.1.

<img class="fancyimage" style="width:800px" src="img/dialogflowcx/private_message_response_custom_payload.png">
Figure 9.1 An example of transfer action with a simple text message and private text message in the Dialogflow console's intent editor

It is possible to send only a private text message response. The example payload of such response is below:

```json
{
  "messageAudience": "AGENTS_AND_MANAGERS",
  "text": "This is a private message for agent from DialogFlow CX"
}
```

### Close Chat/Conversation

In the bot’s flow, there will be times when it is appropriate to end the conversation without escalating to a live agent.
If a query has been answered, or the brand has determined that no escalation is required for a given query, then it is best practice to have the bot end the conversation.

The method for closing a conversation is similar to the transfer action in that you must use the Custom Payload with the action parameter and a name property set to CLOSE_CONVERSATION.

The action field needs to be set to **CLOSE_CONVERSATION** to instruct the connector to close the conversation.

<img class="fancyimage" style="width:800px" src="img/dialogflowcx/image_12.png">
Figure 10.1

To close a conversation without triggering a post conversation survey, please add the parameter with the name `withoutPcs` and the value `true` to the action parameters.

### Invoke LivePerson Function

During a conversation, it is possible to trigger a LivePerson Function that is deployed to the [LivePerson Functions](liveperson-functions-overview.html) (Function as a Service) platform. This provides a way to run custom logic with a bot.

The method for triggering an invocation is similar to the transfer action in that the Custom Payload feature must be use to set the action and the parameters.

The action field needs to be set to **INVOCATION** to instruct the connector to invoke the sepecified LivePerson Function

It is also required to provide the **lambdaUuid** of the function that should be invoked in parameters.
To retrieve the Lambda UUID of your LivePerson Function follow [this guide](liveperson-functions-external-invocations-client-credentials.html#step-4-get-the-lambda-uuid-from-functions)

In addition, it is possible to send your own payload to the function. Set your content inside the **payload** key.

The bot does not escalate on a failed invocation by default. To enable this, set the additional parameter **failOnError** to **true**

<img class="fancyimage" style="width:800px" src="img/dialogflowcx/image_13.png">
Figure 11.1

### Engagement attributes as context

Third-Party bots allows the collection of engagement attributes (more information can be found [here](engagement-attributes-types-of-engagement-attributes.html)) if `Engagement Attributes` option is checked in the `Conversation Type` step as shown in Figure 12.1.

<img class="fancyimage" style="width:750px" src="img/ThirdPartyBots/common-engagement-attr-select.png">
Figure 12.1 Conversation Type step in creation/modification of bot configuration.

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

We needs to create a intent which should have training phase `com.liveperson.bot-connectors.consumer.send-rich-content` as shown in the Figure 4.1 below.

<img class="fancyimage" style="width:800px" src="img/dialogflowcx/dialogflow_cx_richcontentevent-intent.png">
Figure 4.1 Intent creation in Dialogflow CX console

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
An example of enabling such a WebHook via Google Cloud function can be found in Figure 4.2 Highlighted area. If your function is deployed and active,
It should populate in the list. Moreover, The Dialogflow CX console allows us to attach Third-Party WebHook calls as well.
Please note, you need to ensure that, Third-Party Cloud WebHooks should be accessible and respond in the expected Dialogflow CX
response formate as we have shown in the example of Google Cloud Function above.

<img class="fancyimage" style="width:600px" src="img/dialogflowcx/dialogflow_cx_richcontentevent-enable-webhook.png">
Figure 4.2 Showing a Google Cloud Function named `googleRichContentEventCloudFunction` attached to the fulfillment Response

Once all of the above steps have been configured then the Dialogflow CX bot will be able to respond to the requests via the cloud function.
A demo of our WhatsApp map example with Google Cloud Function (defined above) can be seen below:

<img class="fancyimage" style="width:300px" src="img/dialogflowcx/dialogflow_cx_richcontent_demo.gif">
