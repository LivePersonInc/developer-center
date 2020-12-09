---
pagename: Hook Configuration
redirect_from:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
permalink: third-party-bots-hook-configuration.html
indicator: both
---

The following documentation outlines the configuration for a bot connector using LivePerson Functions to modify vendor payloads, repsonses and read out errors.

{: .important}
As the Hook feature uses [LivePerson Functions](https://developers.liveperson.com/liveperson-functions-overview.html), it's required to enable `FaaS Admin` permissions. To be able to implement your own LivePerson Functions, you will also need to enable `FaaS Developer` permissions. Take a look at this [Getting Started Guide](function-as-a-service-getting-started.html) for more information on setting uo LivePerson Functions and its permissions.

### Bot Configuration

{: .important}
See the [Getting Started](bot-connectors-getting-started.html) guide first to complete pre-requisite steps. This guide assumes you have completed this guide.

#### Step-by-Step Hook creation and deployment guide

##### Step 1 - Create a function

Create a new function using the **_Third-Party Bots Error Hook_** **_Third-Party Bots Post Hook_** or **_Third-Party Bots Error Hook_** event.

##### Step 2 - Edit the Function

Adjust the default code from the function template according to your needs by modifying the function (see below for more information on relevant considerations and code examples). On the right side you can see an example of the payload (in the sidebar, which you might need to open). Please see this document for more information on [developing functions](liveperson-functions-development-overview.html).

Depending on the hook and vendor type the palyoad information differs in content and properties. Take a look at payload information below to align your coding on that properties.

##### Step 3 - Deploy the function

Just like any other function, this function must be deployed before it can be used. [Please see this document](function-as-a-service-deploying-functions.html) for more information on how to deploy your function. At this point, you can also test your function.

<div class="important">Try to deploy functions with a runtime of less than one second. If the runtime is longer, you may get a bad user experience because of race conditions within the server. For example, if you create a function based on the <b> Participants Change</b> event and an agent joins the conversation, the consumer may see the resulting `systemMessage` <b>after the agent already responded to the consumer themselves</b>.</div>

#### Last Steps in Third-Party Bots

After you successfully implemented and deployed a LivePerson Function, press the refresh button next to the function selection menu and select your function.

### Payload Information

#### Error Hook

The following payload content will be recieved from the Function when an error is thrown by the bot. You can set the Error Hook Fucntion at the error handling step, while creating a bot.

<table>
  <thead>
  <tr>
    <th>Property </th>
    <th>Type</th>
    <th>Vendor</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>error</td>
    <td>Object</td>
    <td>All Vendors</td>
    <td>contains the error details (errorId, name)</td>
  </tr>
  <tr>
    <td>vendor</td>
    <td>string</td>
    <td>All Vendors</td>
    <td>identifies the vendor type </td>
  </tr>
    <tr>
    <td>dfV2request</td>
    <td>Object</td>
    <td>DialogflowV2</td>
    <td>Defines the vendor payload </td>
  </tr>
    <tr>
    <td>dialogflowv2</td>
    <td>Object</td>
    <td>DialogflowV2</td>
    <td>Defines the vendor response </td>
  </tr>
      <tr>
    <td>faasPayload</td>
    <td>Object</td>
    <td>Custom Integration</td>
    <td>Defines the vendor payload </td>
  </tr>
      <tr>
    <td>faas</td>
    <td>Object</td>
    <td>Custom Integraiton</td>
    <td>Defines the vendor response </td>
  </tr>
      <tr>
    <td>lexQuery</td>
    <td>Object</td>
    <td>Lex</td>
    <td>Defines the vendor payload </td>
  </tr>
      <tr>
    <td>lex</td>
    <td>Object</td>
    <td>Lex</td>
    <td>Defines the vendor response </td>
  </tr>
        <tr>
    <td>msPayload</td>
    <td>Object</td>
    <td>MicrosoftBotFramework</td>
    <td>Defines the vendor payload </td>
  </tr>
      <tr>
    <td>microsoft</td>
    <td>Object</td>
    <td>MicrosoftBotFramework</td>
    <td>Defines the vendor response </td>
  </tr>
        <tr>
    <td>watsonV1Payload</td>
    <td>Object</td>
    <td>WatsonAssistant</td>
    <td>Defines the vendor payload </td>
  </tr>
      <tr>
    <td>watson</td>
    <td>Object</td>
    <td>WatsonAssistant</td>
    <td>Defines the vendor response </td>
  </tr>
    <tr>
    <td>watsonV2Payload</td>
    <td>Object</td>
    <td>WatsonAssistantV2</td>
    <td>Defines the vendor payload </td>
  </tr>
      <tr>
    <td>watsonv2</td>
    <td>Object</td>
    <td>>WatsonAssistantV2</td>
    <td>Defines the vendor response </td>
  </tr>
  </tbody>
</table>

#### Pre Hook

The Prehook Lambda gets invoked on every message the customer sends. It allows to modify or expand the payload, the vendor receives. Please also refer to the existing vendor documentation, to get additional information in terms of addtition context properties and more.

Example Payloads:

##### DialogflowV2

###### Example payload

```json
{
  "session": "projects/bot-platform-e2e-dialogflow-v2/agent/sessions/H33768522138087366-90a6a5e2abc3441f8143aa6e974917c0K8427027",
  "queryInput": {
    "text": { "text": "customer message", "languageCode": "en" }
  },
  "queryParams": {
    "payload": {
      "fields": {
        "lpEvent": {
          "kind": "structValue",
          "structValue": {
            "fields": {}
          }
        },
        "lpSdes": { "kind": "structValue", "structValue": { "fields": {} } }
      }
    }
  }
}
```

###### Minimal working Faas example as code

```js
const { payload } = input;
const { queryInput } = payload;

if(queryInput.text && queryInput.text.text){
  queryInput.text.text += 'preHook';
}

return callback(null, payload);
```



##### Custom Integration

###### Request payload

```json
{
  "convId": "H8423979229452698115-36ffcd957be440fc9237c47171915910K8427029",
  "context": {
    "lpEvent": {},
    "lpSdes": {}
  },
  "message": "customer message"
}
```

###### Minimal working Faas example as code

```js
const { payload } = input;

if (payload.message) {
  payload.message += 'preHook';
}

return callback(null, payload);
```


##### Lex

###### Request payload

```json
{
  "inputText": "customer message",
  "userId": "H5342745964768308410-9c1c3fe8504b4df19e8ff3b32ce06decK8427030",
  "requestAttributes": {
    "BC-LP-CONTEXT": ""
  },
  "sessionAttributes": {
    "convId": "H5342745964768308410-9c1c3fe8504b4df19e8ff3b32ce06decK8427030"
  }
}
```

###### Minimal working Faas example as code

```js
const { payload } = input;
if (payload.inputText) {
  payload.inputText += 'preHook';
}
return callback(null, payload);
```


##### Microsoft

###### Request payload

```json
{
  "text": "customer message",
  "channelData": {
    "context": {
      "convId": "H4575915164251208380-91a3e9dd55b748da836ee41d63764606K8427031",
      "msConversationId": "1qybmjJrDgL9Gx7GPDpY30-h",
      "lpEvent": {
        "conversationContext": {}
      },
      "lpSdes": {}
    }
  }
}
```

###### Minimal working Faas example as code

```js
const { payload } = input;
if (payload.text) {
  payload.text += 'preHook';
}
return callback(null, payload);
```

##### Watson

###### Request payload

```json
{
  "message": "customer message",
  "context": {
    "convId": "H6564608140903420356-3e6dfd3c3a2441edb38ca829da34e7a0K8427035",
    "lpEvent": {
      "conversationContext": {}
    },
    "lpSdes": {},
    "conversation_id": "083ef8c3-0b9e-4208-9bf4-ec8fa921edb8",
    "system": {
      "initialized": true,
      "dialog_stack": [{ "dialog_node": "root" }],
      "dialog_turn_counter": 1,
      "dialog_request_counter": 1,
      "_node_output_map": { "Welcome": [0] },
      "branch_exited": true,
      "branch_exited_reason": "completed"
    }
  }
}
```

###### Minimal working Faas example as code

```js
const { payload } = input;
if (payload.message) {
  payload.message += 'preHook';
}
return callback(null, payload);
```

#### Post Hook

The Posthook Lambda gets invoked on every message the customer sends. It allows to modify or expand the response of the payload. Please also refer to the existing vendor documentation, to get additional information in terms of addtition context properties and more.

##### DialogflowV2

###### Request payload 

```json
{
  "responseId": "c85d5898-917d-4a6e-a16a-184f29f89ab3-d5ae01f3",
  "queryResult": {
    "fulfillmentMessages": [
      {
        "platform": "PLATFORM_UNSPECIFIED",
        "text": { "text": ["This was a combined message!"] },
        "message": "text"
      }
    ],
    "outputContexts": [
      {
        "name": "projects/bot-platform-e2e-dialogflow-v2/agent/sessions/H4545798003469798002-306370c9dc8346de9d36758e97c65e1eK8427028/contexts/defaultwelcomeintent-followup",
        "lifespanCount": 1,
        "parameters": {
          "fields": {
            "testparam.original": { "stringValue": "", "kind": "stringValue" },
            "testparam": { "stringValue": "", "kind": "stringValue" }
          }
        }
      }
    ],
    "queryText": "customer message",
    "speechRecognitionConfidence": 0,
    "action": "",
    "parameters": { "fields": {} },
    "allRequiredParamsPresent": true,
    "fulfillmentText": "This was a combined message!",
    "webhookSource": "",
    "webhookPayload": null,
    "intent": {
      "inputContextNames": [],
      "events": [],
      "trainingPhrases": [],
      "outputContexts": [],
      "parameters": [],
      "messages": [],
      "defaultResponsePlatforms": [],
      "followupIntentInfo": [],
      "name": "projects/bot-platform-e2e-dialogflow-v2/agent/intents/0e151fa2-9554-4eca-be6e-d916d277e8cf",
      "displayName": "test combined messages intent",
      "priority": 0,
      "isFallback": false,
      "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
      "action": "",
      "resetContexts": false,
      "rootFollowupIntentName": "",
      "parentFollowupIntentName": "",
      "mlDisabled": false
    },
    "intentDetectionConfidence": 0.49996501207351685,
    "diagnosticInfo": null,
    "languageCode": "en",
    "sentimentAnalysisResult": null
  },
  "webhookStatus": null,
  "outputAudio": { "type": "Buffer", "data": [] },
  "outputAudioConfig": null
}
```

###### Minimal working Faas example as code 

```js
const { payload } = input;
const { payload: { queryResult } } = payload;
if (
  queryResult &&
  queryResult.fulfillmentMessages &&
  queryResult.fulfillmentMessages[0].text.text[0] === 'Hi there'
) {
  queryResult.fulfillmentMessages[0].text.text[0] +=
    'postHook';
}
return callback(null, payload);
```

##### Custom Integration via Faas

###### Request payload

```json
{ "context": {}, "messages": ["customer message"] }
```


###### Minimal working Faas example as code  

```js
const { payload } = input;
if (payload.messages && payload.messages[0]) {
  payload.messages[0] += ' edited by postHook';
}
return callback(null, payload);
```

##### Amazon Lex

###### Request payload

```json
{
  "intentName": null,
  "sessionAttributes": {
    "convId": "H5342745964768308410-9c1c3fe8504b4df19e8ff3b32ce06decK8427030"
  },
  "message": "Sorry, can you please repeat that?",
  "messageFormat": "PlainText",
  "dialogState": "ElicitIntent",
  "slotToElicit": null
}
```

###### Minimal working Faas example as code 

```js
const { payload } = input;
if (payload.message) {
  payload.message = 'Changed text by postHook';
}
return callback(null, payload);
```

##### Microsoft Bot Framework 

###### Request payload

```json
{
  "type": "message",
  "id": "1qybmjJrDgL9Gx7GPDpY30-h|0000003",
  "timestamp": "2019-10-25T07:26:03.7258774Z",
  "channelId": "directline",
  "from": { "id": "e2e-bot", "name": "e2e-bot" },
  "conversation": { "id": "1qybmjJrDgL9Gx7GPDpY30-h" },
  "text": "I don't understand your question. Can you phrase that differently?",
  "inputHint": "acceptingInput",
  "replyToId": "1qybmjJrDgL9Gx7GPDpY30-h|0000002"
}
```

###### Minimal working Faas example as code 

```js
const { payload } = input;
if (
  payload &&
  payload[0].text
) {
  payload[0].text += 'postHook changed this message';
}
return callback(null, payload);
```

##### Watson 

###### Request payload

```json
{
  "intents": [{ "intent": "goodbye", "confidence": 0.41433813571929934 }],
  "entities": [],
  "input": { "text": "customer message" },
  "output": {
    "generic": [
      { "response_type": "text", "text": "Thanks for chatting with us today!" }
    ],
    "text": ["Thanks for chatting with us today!"],
    "nodes_visited": ["node_2_1526535774449"],
    "log_messages": []
  },
  "context": {
    "convId": "H6564608140903420356-3e6dfd3c3a2441edb38ca829da34e7a0K8427035",
    "lpEvent": {},
    "lpSdes": {},
    "conversation_id": "083ef8c3-0b9e-4208-9bf4-ec8fa921edb8",
    "system": {
      "initialized": true,
      "dialog_stack": [{ "dialog_node": "node_2_1526535774449" }],
      "dialog_turn_counter": 2,
      "dialog_request_counter": 2,
      "_node_output_map": { "Welcome": [0], "node_2_1526535774449": [0] },
      "branch_exited": true,
      "branch_exited_reason": "completed"
    }
  },
  "actions": [
    {
      "name": "CLOSE_CONVERSATION",
      "type": "client",
      "parameters": {},
      "result_variable": "none"
    }
  ]
}
```

###### Minimal working Faas example as code 

```js
const { payload } = input;
if (payload.output && payload.output.generic[0].text === 'Hi there') {
  payload.output.generic[0].text += 'postHook';
}
return callback(null, payload);
```
