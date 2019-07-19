---
pagename: Microsoft Bot Framework
redirect_from:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Bot Connectors
permalink: bot-connectors-microsoft-bot-framework.html
indicator:
---

### Overview

The following documentation outlines the configuration for the connector and how to implement functions specifically for **Microsoft Bot Framework**.

{: .important}
We support the Direct Line API version 3.0.

### Bot Configuration

{: .important}
See the Getting Started guide first to complete pre-requisite steps.

During the configure you will be presented with the following screen to fill in the vendor data if you've selected **Microsoft Bot Framework**.

<img class="fancyimage" style="width:600px" src="img/msbotframework/vendor.png">

Figure 1.1 Showing the configuration that needed to be filled

The following Microsoft information should be provided to LivePerson:

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
    <td>Direct Line Secret</td>
    <td>The first key provided in the direct line channel configuration </td>
    <td>x3XkXXoadX0.xknotlXk8VbU6vXXXX4kwdsGW-N3m-4XjTHPTde4XXX</td>
  </tr>
  <tr>
    <td>Direct Line Endpoint</td>
    <td>The endpoint the connector should use to reach the bot. Apart from the default you can also choose an endpoint that is close to the region that your account is configured for or use a custom endoint (experimental)</td>
    <td>https://directline.botframework.com/v3/directline</td>
  </tr>
  </tbody>
</table>

The Direct Line Secret can be found in the Azure Portal if you select the corresponding Web App Bot and edit the Configuration of the Direct Line Channel.

<img class="fancyimage" style="width:600px" src="img/msbotframework/secret.png">
Figure 1.2 The Direct Line Secret

For validation of the credentials provided, you can perform a connection test to see if the messages can be send to the channel with the provided secret by clicking on the button "Test Connection".
For this test it is not necessary for the bot to respond with a message. 

### Limitations

Currently advanced features of the direct line protocol like actions and attachments are not supported.
The Bot Connector utilizes the channelData property for anything besides plain text.

It is expected that a bot responds to every message send by the customer.
If no response is detected in a certain time frame, Bot Connector assumes something is wrong and tries to transfer the conversation to an agent.

### Sending Rich Content (Structured Content)

Structured content/Rich Content is supported by the core LivePerson platform. Documentation for the feature can be found [here](getting-started-with-rich-messaging-introduction.html).

To send structured content from a bot implemented with the Microsoft Bot Framework, send the richContent in the channelData of the message activity.

This should contain valid structured content, along with any optional metadata required for the structured content. Always validate your structured content using [this tool](https://livepersoninc.github.io/json-pollock/editor/) before using it in a bot.


```json
{
  "type": "message",
  "text": "", 
 "channelData": {
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
```

Figure 4.1 Activity with Structured Content

### Change Time To Response of Conversation

By providing a specific **action** in the channelData, the bot can change the TTR of a conversation.

LivePerson Messaging uses 4 different types of priorities:
"URGENT",
“NORMAL”
“PRIORITIZED”
“CUSTOM”

Only the “CUSTOM” can set a value. The unit of the value is second. The values of the other types are defined in the Agent Workspace.

An text message can also be provided simultaneously in the activity json.

```json
{
  "type": "message",
  "text": "", 
  "channelData": {
    "action": {
        "name": "CHANGE_TTR",
        "parameters": {
          "ttrType": "CUSTOM",
          "value": "300"
        }
    }
  }
}
```
Figure 5.1 Activity with TTR Change

### Transfer / Escalations

Transfers and escalations are straightforward in both chat and messaging.
At the beginning of a chat session or when a messaging bot logs in, all the list of enabled skills on the account are retrieved, keyed by name and stored.
When a transfer is requested by the bot, the skill name is matched to one already on the account and the id is retrieved and escalated to.

For **Microsoft Bot Framework**, the bot should provide the specific action in the channelData of the message activity.
An additional text message can also be provided.

```json
{
  "type": "message",
  "text": "", 
  "channelData": {
    "action": {
        "name": "TRANSFER",
        "parameters": {
          "skill": "CUSTOM"
        }
    }
  }
}
```
Figure 6.1 Activity excerpt for a transfer Request

### Close Chat/Conversation
To close a chat or messaging conversation, we provide the action object as we did for a transfer. The activity should contain the following action.
An additional text message can also be provided.

```json
{
  "type": "message",
  "text": "", 
  "channelData": {
    "action": {
        "name": "CLOSE_CONVERSATION"
    }
  }
}
```
Figure 7.1 Activity excerpt for a close conversation request

### Welcome Event

The behaviour of the welcome event is different depending on whether the bot is for chat and messaging. This divergence comes down to the way that each individual Liveperson product works..

A Messaging conversation qualifies as "initiated" from a LiveEngage perspective only after the consumer sends their first message. The consumer is prompted for their initial message in the channel they have chosen to initiate the conversation. As a result, the consumer’s first message is something that can be parsed by the bot and an intent determined.

A Chat conversation is considered started when the chat is routed to an agent. Best practice is for the agent to provide the first response. In this scenario, there is no text from the consumer to parse, thus the default ‘WELCOME’ event is utilised as a start point for the bot to prompt the user to provide input and progress the conversation.

Ensure you have an ‘entry point’ in your bot that responds to the default ‘WELCOME’ action send by a new chat customer.

```json
{
  "type": "message",
  "text": "", 
  "channelData": {
    "action": {
        "name": "WELCOME"
    }
  }
}
```
Figure 8.1 Customer activity excerpt on a new chat
