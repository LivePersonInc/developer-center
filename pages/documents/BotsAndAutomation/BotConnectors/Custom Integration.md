---
pagename: Custom Integration
redirect_from:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Bot Connectors
permalink: bot-connectors-custom-integration.html
indicator: both
---

The following documentation outlines the configuration for a bot connector using LivePerson Functions. Instead of a vendor, like IBM Watson for example, LivePerson Functions allows you to write your own custom bot and connect it to LiveEngage. In order to achieve this, we will implement a LivePerson Functions **Custom Integration**.

### Set Permissions

As the Custom Integration feature uses [LivePerson Functions](https://developers.liveperson.com/liveperson-functions-overview.html), it's required to enable `FaaS Admin` permissions. To be able to implement your own LivePerson Functions, you will also need to enable `FaaS Developer` permissions. Take a look at this [Getting Started Guide](function-as-a-service-getting-started.html) for more information on setting uo LivePerson Functions and its permissions.

### Bot Configuration

{: .important}
See the [Getting Started](bot-connectors-getting-started.html) guide first to complete pre-requisite steps. This guide assumes you have completed this guide. 

Once you have completed the guide above, you will be presented with following screen to complete the Vendor Settings in order to add a bot.

<img class="fancyimage" style="width:600px" src="img/faas/vendor.png">

Click on the "Create LivePerson Function" button. This will allow you to implement a LivePerson Function. Once you click on the button, you will be redirected to the LivePerson Functions main page. From here, you will need to develop and then deploy a LivePerson Function which will act as the bot connector.

### Step-by-Step function creation and deployment guide

#### Step 1 - Create a function

Create a new function using the ***Bot Connectors Custom Integration*** event.

#### Step 2 - Edit the Function

Adjust the default code from the function template according to your needs by modifying the function (see below for more information on relevant considerations and code examples). On the right side you can see an example of the payload (in the sidebar, which you might need to open). Please see this document for more information on [developing functions](liveperson-functions-development-overview.html).

#### Step 3 - Deploy the function

Just like any other function, this function must be deployed before it can be used. [Please see this document](function-as-a-service-deploying-functions.html) for more information on how to deploy your function. At this point, you can also test your function.

<div class="important">Try to deploy functions with a runtime of less than one second. If the runtime is longer, you may get a bad user experience because of race conditions within the server. For example, if you create a function based on the <b> Participants Change</b> event and an agent joins the conversation, the consumer may see the resulting `systemMessage` <b>after the agent already responded to the consumer themselves</b>.</div>


### Payload Information

The following payload content will be recieved from the Function during a conversation with the assigned bot.

<table>
  <thead>
  <tr>
    <th>Property </th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>message</td>
    <td>string</td>
    <td>message sent by the customer</td>
  </tr>
  <tr>
    <td>event</td>
    <td>Object</td>
    <td>event triggered by the customer (welcome event)</td>
  </tr>
  </tbody>
</table>


#### Welcome Event

The behaviour of the welcome event is different depending on whether the bot is for chat or for messaging. This divergence comes down to the way that each individual LivePerson product works and the conversation with the consumer is framed.

A Messaging interaction qualifies as "initiated" from a LiveEngage perspective only after the consumer sends their first message. The consumer is prompted for their initial message in the channel they have chosen to initiate the conversation. As a result, the consumer’s first message is something that can be recognized.

The following documents cover where to configure the initial message on a given platform:

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

A Chat interaction, on the other hand, is considered "started" when the chat is routed to an agent and best practice is for the agent to provide the first response. In this scenario, there is no text from the consumer to parse, thus the default ‘WELCOME’ event is utilised as a start point for the bot to prompt the user to provide input and progress the conversation.

### Implementation Guide

The response payload needs to have certain formated properties in order to make use of various additional features, like structured content and intents.

#### Sending messages

To define messages the bot should send, you need to place the messages property into the callback. This property should include an array of strings, in which every string will be sent as a single messsage to the conversation.

```json
{
  "messages": ["messageOne", "MessageTwo", "MessageThree"]
}
```

#### Change Time To Response of Conversation

Change the TTR of a conversation based on the **action** value in the response object. LivePerson uses 4 different types of priorities: "URGENT", “NORMAL”, “PRIORITIZED”, “CUSTOM”. Only the “CUSTOM” can set a value progrmatically. The unit of the value is seconds. The other three values ("URGENT" for example) are defined in LiveEngage's Agent Workspace. These values determine how much time, in seconds, a conversation can wait in queue before it is deemed "overdue". For example, if the `ttrtype` is set to "CUSTOM" and the `value` is set to "120", the conversation will be considred "overdue" if it has waited in the queue for an agent response for more than 120 seconds. 

Below is an example of an payload, which changes the TTR:

|key|value|notes|
|---|-----|-----|
|action| CHANGE_TTR| Mandatory|
|ttrtype|"URGENT", “NORMAL”, “PRIORITIZED”, “CUSTOM”|Mandatory|
|value|Seconds, string|Mandatory if "CUSTOM" is set|

```json
{
  "messages": ["This conversation has been marked urgent"],
  "context": {
    "action": "CHANGE_TTR",
    "actionParameters": {
      "ttrType": "CUSTOM",
      "value": "120"
    }
  }
}
```

#### Transfer / Escalations

If the bot needs to transfer the conversation to a human agent, or the conversation flow indicates that another bot is better suited for the identified intent, you will need to instruct the connector to transfer the conversation to a given skill.

Transfers and escalations rely on the `action` key in the response object and its value.

|key|value|notes|
|---|-----|-----|
|action| TRANSFER| case sensitive, mandatory|
|skill|a skill name which exists in your account account|case sensitive|

Below is an example of what the response JSON from the LivePerson Function should look like to complete a transfer action.

```json
{
   "messages": ["Please wait will I check if we have any live agents online that can attend to you"], 
   "context": {
    "action": "TRANSFER",
    "actionParameters": {
      "skill": "bot-escalation"
    },
  }
```

#### Sending Rich Content (Structured content)

{: .important}
Structured Content will be added into messages property after LivePerson Functions version 2.9 to support multiple structured content messages

Structured Content/Rich Content is supported by the core LivePerson platform. Documentation for the feature can be found [here](getting-started-with-rich-messaging-introduction.html). To send structured content via LivePerson Functions, use the _structuredContent_ property containing valid structured content, along with metadata required for the structured content. Always validate your structured content using [this tool](https://livepersoninc.github.io/json-pollock/editor/) to check your formatting.

```json
{ "messages": ["Just some structured Content"], //Mandatory
  "context": {
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
}
```

#### Sending Quick Replies (Structured Content)

Quick Replies is a special type of Structured Content. It is a message sent alongside with predefined answers.
For detailed information on Quick Replies check out the documentation for the specific channel: ([Mobile SDK and Web](mobile-sdk-and-web-templates-quick-replies-template.html), [Facebook Messenger](facebook-messenger-templates-quick-replies-template.html), or [Google RCS Business Messaging](google-rcs-business-messaging-templates-quick-replies-template.html)).

```json
{ "messages": [ "Do you like Bots?"], //Mandatory
  "context": {
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
  },
  "metadata": [
    {
      "id": "1234",
      "type": "ExternalId"
    }
  ]
}}
```


#### Close Chat/Conversation

In the bot’s flow, there will be times when it is appropriate to end the conversation with the consumer without escalating to a live agent. If a query has been answered, or the brand has determined that no escalation is available for a given query, then you will need to have the bot end the conversation.

The method for closing a conversation is similar to the transfer action in that the same "Actions and Parameters" field is utilised in the Dialogflow console.

The `action` key needs to be set to **CLOSE_CONVERSATION** to instruct the connector to close the conversation.

Below is an example of what the response JSON from the LivePerson Function should look like in order to complete a closeConversation action.

```json
{
  "messages":["Unfortunately I am unable to help you with this query. Have a nice day."], 
  "context": {
    "action": "CLOSE_CONVERSATION", // Close action
    }
```

#### Use Intents

You also have to possibility to add intent information to your messages. They will appear inside the Agent Workspace and have to be added inside the context property.

```json
{
  "messages":["This message also includes the intent information"], 
  "context": {
    "intenId": "some-intent-id",
    "intentName": "some-intent-name",
    "confidenceScore": 7
    }
```

### Last Steps

After you successfully implemented and deployed a LivePerson Function, press the refresh button next to the function selection menu and select your function. 

{: .important}
You have to agree to Data Disclaimer in order to use the services of the bot connector. To do that, click on the checkbox "I agree to the Data Disclaimer" checkbox.

For validation of the credentials provided, you can now perform a test connection request to see if everything that you have provided is working and reachable. You can click on the button "Test Connection" to see if connection succeed or fail. If it has suceeded, you're done!

