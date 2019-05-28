---
pagename: Google Dialogflow
redirect_from:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Bot Connectors
permalink: bot-connectors-google-dialogflow.html
indicator:
---

The following documentation outlines the configuration for the connector and how to implement functions specifically for **Google Dialogflow Version 1**.

{: .important}
Google has deprecated Dialogflow **Version 1** and customers should move to Version 2 if they have not already planned to do so by October 2019

### Bot Configuration

{: .important}
See the [Getting Started](bot-connectors-getting-started.html) guide first to complete pre-requisite steps.

You will be presented with following screen to complete the Vendor Settings in order to add bot.

<img style="width:600px" src="img/dialogflow/vendor.png">

Figure 1.1 Showing the configuration that needed to be filled

The following Dialogflow information should be provided to LivePerson:

<table>
  <thead>
  <tr>
    <th>Item</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Client access token</td>
    <td>Access token for the Dialogflow API</td>
  </tr>
  <tr>
    <td>Dialogflow query url</td>
    <td>Query url for sending Dialogflow queries</td>
  </tr>
  </tbody>
</table>


{: .important}
You have to agree to Data Disclaimer from now onward in order to use the services of bot connector. For that you can click on the checkbox "I agree to the Data Disclaimer"

For validation of the credentials provided, you can now perform a test connection request to see if everything that you have provided is working and reachable. You can click on the button "Test Connection" to see if connection succeed or fail as shown in Figure 1.2 and 1.3 respectively.

<img style="width:600px" src="img/dialogflow/connection-success.png">

Figure 1.2 Showing the success case of the valid credentials

<img style="width:600px" src="img/dialogflow/connection-failed.png">

Figure 1.3 Showing the fail case of the invalid credentials

Once you are done with providing configuration you can save it by pressing on "Done". ***Congratulations!*** You have completed the configuration of the Amazon Lex bot.

{: .important}
Following guide is going to introduce how to implement functions specifically for **Dialogflow V1**  using using [Dialogflow console](https://console.dialogflow.com/api-client/). Continue if you are familiar and have access to [Dialogflow console](https://console.dialogflow.com/api-client/)


### Limitations

#### Dialogflow Query length Limit

<div class="notice">
The Dialogflow service has a <a href="https://dialogflow.com/docs/reference/agent/query" target="_blank">limitation</a> on the length of the ‘query’ property of Dialogflow request Object. Any query longer than 255 characters invokes a standard response as below. To handle this gracefully, we recommend building a simple intent that handles a DIALOGFLOW_CHAR_LIMIT’ *event*.
</div>


**Sample Syntax : Dialogflow Request Object**

```json
{
    "contexts":[] ,
    "lang": "en",
    "query": "user-query-goes -here",
    "sessionId": "12355",
    "timezone": "America/New_York"   
}
```
Figure 2.1 Dialogflow Response JSON with action


**Sample Dialogflow Error Response**

```json
{
     "id": "df6573be-2c70-4f63-8fdd-93f56af0b4b4",
    "timestamp": "2018-09-06T05:20:56.224Z",
    "lang": "en",
    "status": {
        "code": 400,
        "errorType": "bad_request",
        "errorDetails": "All queries should be less than 255 symbols."
    }
}
```
Figure 2.2 Dialogflow Response JSON with action


1. Create an intent with an event using the string:  DIALOGFLOW_CHAR_LIMIT

    <img style="width:600px" src="img/dialogflow/image_6.png">

    Figure 2.3

2. Do not forget to add a custom response in the **Text response** section.

    <img style="width:600px" src="img/dialogflow/image_7.png">

    Figure 2.4

### Welcome Event

The behaviour of the welcome event is different depending on whether the bot is for chat or messaging. This divergence comes down to the way that each individual Liveperson product works and how it is framed with the consumer.

A Messaging interaction qualifies as "initiated" from a LiveEngage perspective only after the consumer sends their first message. The consumer is prompted for their initial message in the channel they have chosen to initiate the conversation. As a result, the consumer’s first message is something that can be parsed by Dialogflow and an intent determined .

These docs cover where to configure the initial message on a given platform

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
  </tbody>
</table>


A Chat interaction on the other hand is considered started when the chat is routed to an agent, and best practice is for the agent to provide the first response. In this scenario, there is no text from the consumer to parse, thus the default ‘WELCOME’ event is utilised as a start point for the bot to prompt the user to provide input and progress the conversation.

As such, ensure you have an ‘entry point’ intent that utilises the default ‘WELCOME’ event, so the event fired is utilised.

<img style="width:600px" src="img/dialogflow/image_5.png">

Figure 2.1

### Change Time To Response of Conversation

Change the TTR of a conversation based on the **action** value in the response object. LP uses 4 different types of priorities: "URGENT", “NORMAL”, “PRIORITIZED”, “CUSTOM”. Only the “CUSTOM” can set a value. The unit of the value is second. And the value of the others are defined in the Agent Workspace.

<img style="width:600px" src="img/dialogflow/image_8.png">

Figure 3.1

```json
{
  "id": "e599031e-cd19-4c77-a497-cfc6b1f9ec8c",
  "timestamp": "2018-10-16T08:48:35.821Z",
  "lang": "en",
  "result": {
    "source": "agent",
    "resolvedQuery": "set priority",
    "action": "CHANGE_TTR",   //Mandatory
    "actionIncomplete": false,
    "parameters": {
      "ttrType": "CUSTOM",    //Mandatory
      "value": "120"     //Mandatory for CUSTOM only          
    },
    "contexts": [],
    "metadata": {
      "intentId": "5b91ba87-2846-473f-abfd-130eea166953",
      "webhookUsed": "false",
      "webhookForSlotFillingUsed": "false",
      "isFallbackIntent": "false",
      "intentName": "Set urgent Priority"
    },
    "fulfillment": {
      "speech": "You move up the queue New line entered",
      "messages": [
        {
          "type": 0,
          "speech": "This conversation has been marked urgent"
        }
      ]
    },
    "score": 0.6399999856948853
  },
  "status": {
    "code": 200,
    "errorType": "success"
  },
  "sessionId": "afce013a-addd-63d6-aea0-d561bdf382db"
}
```
Figure 3.2 JSON response for changing TTR


### Transfer / Escalations

<div class="notice">
<strong>Naming Conventions:</strong> Before going into <strong>actions</strong> and <strong>skills</strong> is the naming convention between each.

<ul>
<li>For escalations, the naming convention for these skills should use a "-" instead of “_”. Furthermore, if transferring to a skill, specifically assigned to bots, it’s best practice to prefix the skill name with “BOT-” within LiveEngage.</li>
</ul>
</div>


If the bot needs to transfer the conversation to a human agent, or the conversation flow indicates that another bot is better suited for the identified intent, you will need to tell the connector to transfer the conversation to a given skill.

This is achieved using the built in "Actions and Parameters" section of the Dialogflow console.

Multiple scenarios for transfer/escalations exist triggered by the transfer action object.

1. Explicit request from visitor to transfer to an agent  (Eg, action : transfer)

2. If the Bot does not have an appropriate answer, it should recognise this as a scenario for a transfer.
Depending on the connector configuration or the decision making capacity of the bot, the bot will transfer to a particular skill or default skill.

3. If there is a internal error or the bot service cannot be reached the connector will transfer to a default skill set up during configuration.

Transfers and escalations rely on the *action* item in the response object.

Action: **TRANSFER (Case sensitive)**

Parameters: ‘skill’ **(Case sensitive)** with ‘value’ of a skill name (case sensitive) which exists in LiveEngage.

<img style="width:600px" src="img/dialogflowversion2/image_10.png">

Figure 4.1

Below is an example of what the response JSON from Dialogflow will look like, and what the connector expects in order to complete a transfer action.

```json
{
    "id": "745cca4d-64f2-4008-9bbb-ccd5b0f23bec",
    "timestamp": "2018-06-25T23:51:01.774Z",
    "lang": "en",
    "result": {
        "source": "agent",
        "resolvedQuery": "transfer",
        "action": "TRANSFER", // Mandatory
        "actionIncomplete": false,
        "parameters": {
          "skill": "bot-escalation",
         },
        "contexts": [],
        "metadata": {
            "intentId": "32f76a38-8ec3-4db5-8ab5-6d3bcba88540",
            "webhookUsed": "false",
            "webhookForSlotFillingUsed": "false",
            "intentName": "Transfer to live agent"
        },
        "fulfillment": {
            "speech": "Please wait will I check if we have any live agents online that can attend to you",
            "messages": [{
                "type": 0,
                "speech": "Please wait will I check if we have any live agents online that can attend to you"
            }]
        },
        "score": 1
    },
    "status": {
        "code": 200,
        "errorType": "success"
    },
    "sessionId": "424a204941d6849819ab4b8a6389K8390791"
}
```



### Send Rich Content (Structured content)

Structured content/Rich Content is supported by the core LivePerson platform. Documentation for the feature can be found [here](getting-started-with-rich-messaging-introduction.html). To send structured content via Dialogflow, use the Dialogflow option to send a *custom payload* via the intent, containing valid structured content, along with metadata required for the structured content (as seen in Figure 4.2). Always validate your structured content using [this tool](https://livepersoninc.github.io/json-pollock/editor/) before entering into the Dialogflow console.

<img style="width:600px" src="img/dialogflow/image_10.png">

Figure 5.1

```json
{
   "metadata": {   //Mandatory
      "type": "ExternalId",    //Mandatory
      "id": "ABCD1234"   //Mandatory
   },
   "structuredContent": {       //Mandatory
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


### Close Chat/Conversation

In the bot’s flow, there will be times when it is appropriate to end the conversation with the consumer without escalating to a live agent. If a query has been answered, or the brand has determined that no escalation is available for a given query, then you will need to have the bot end the conversation.

The method for closing a conversation is similar to the transfer action in that the same "Actions and Parameters" field is utilised in the Dialogflow console.

The field needs to be set to **CLOSE_CONVERSATION** to instruct the connector to close the conversation.

<img style="width:800px" src="img/dialogflowversion2/image_12.png">

Figure 6.1

Below is an example of what the response JSON from Dialogflow will look like, and what the connector expects in order to complete a closeConversation action.

```json
{
    "id": "c55c8b3f-70c7-4ab3-857f-881c6c7ece82",
    "timestamp": "2018-06-26T00:19:02.249Z",
    "lang": "en",
    "result": {
        "source": "agent",
        "resolvedQuery": "close conversation",
        "action": "CLOSE_CONVERSATION",  // Close action
        "actionIncomplete": false,
        "parameters": {},
        "contexts": [],
        "metadata": {
            "intentId": "32f76a38-8ec3-4db5-8ab5-6d3bcba88540",
            "webhookUsed": "false",
            "webhookForSlotFillingUsed": "false",
            "intentName": "Close the conversation"
        },
        "fulfillment": {
            "speech": "Unfortunately I am unable to help you with this query. Have a nice day.",
            "messages": [{
                "type": 0,
                "speech": "Unfortunately I am unable to help you with this query. Have a nice day."
            }]
        },
        "score": 1
    },
    "status": {
        "code": 200,
        "errorType": "success"
    },
    "sessionId": "38732e1449b1a34a50ec85dde16bK8390792"
}
```
Figure 6.2 Dialogflow JSON response for closing conversation
