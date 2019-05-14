---
pagename: Amazon Lex
redirect_from:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Bot Connectors
permalink: bot-connectors-amazon-lex.html
indicator:
---

{: .important}
This bot connector is not yet available.

### Overview

The following documentation outlines the configuration for the connector and how to implement functions specifically for **Amazon Lex**.

{: .important}
At this time, Lex response cards & audio messages are not supported.


### Bot Configuration

{: .important}
See the [Getting Started](bot-connectors-getting-started.html) guide first.

The following Amazon Lex information should be provided to LivePerson.

**NOTE**: Lex APIs adhere to [Signature V4](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) Signing Process.
Some degree of familiarity with AWS  IAM policies and the AWS IAM console is necessary for setting up a valid Lex client with *Read Only API Key access*.
A *service account* is a **prerequisite** for setting up the above config. Documentation available [here](https://docs.aws.amazon.com/lex/index.html).


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
    <td>API Version</td>
    <td>Lex API version</td>
    <td>2016-11-28</td>
  </tr>
  <tr>
    <td>AWS Region</td>
    <td>AWS region of the lex bot</td>
    <td>us-east-1</td>
  </tr>
  <tr>
    <td>IAM Access Key</td>
    <td>Access Key ID of the IAM role</td>
    <td>AKIAXXXXXXXXXXXBWN3</td>
  </tr>
  <tr>
    <td>IAM Secret Key</td>
    <td>IAM secret key of the IAM role</td>
    <td>lwRQJUxxxxxxxxxxxxRQFpoxxxxxxxdE6JR</td>
  </tr>
  <tr>
    <td>Bot alias</td>
    <td>Bots alias of the IAM role</td>
    <td>botConnectors</td>
  </tr>
  <tr>
    <td>Bot name</td>
    <td>The bots name in the IAM role</td>
    <td>botConnectors</td>
  </tr>
 </tbody>
</table>


<img style="width:600px" src="img/lex/lex-settings.png">

### Welcome Event

The behaviour of the welcome event is different depending on whether the bot is for chat and messaging. This divergence comes down to the way that each individual Liveperson product works..

A Messaging conversation qualifies as "initiated" from a LiveEngage perspective only after the consumer sends their first message. The consumer is prompted for their initial message in the channel they have chosen to initiate the conversation. As a result, the consumer’s first message is something that can be parsed by Lex and an intent determined. 

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

Ensure you have an ‘entry point’ intent that utilises the default ‘WELCOME-INTENT’ event.

<img style="width:600px" src="img/lex/image_6.png">

Fig 1.1

### Change Time To Response of Conversation

Change the TTR of a conversation based on the **action** value in the response object.

LivePerson Messaging uses 4 different types of priorities:
"URGENT",
“NORMAL”
“PRIORITIZED”
“CUSTOM”

Only the “CUSTOM” can set a value. The unit of the value is second. And the value of the others are defined in the Agent Workspace. 

```json
{
    "type": "ACTION",
    "params": {
        "action": "CHANGE_TTR",
        "data": {
            "ttrType": "URGENT",
            "value": 500
        }
    }
}
```
Figure 3.1 Lex Example Change TTR Payload



<img style="width:500px" src="img/lex/image_7.png">

Fig 3.1 - Example in Lex console

### Transfer / Escalations

If the bot needs to transfer the conversation to a human agent, or the conversation flow indicates that another bot is better suited for the identified intent, you will need to tell the connector to transfer the conversation to a given skill.

This is achieved using  "Custom Markup" in the Response section of a Lex intent.

Multiple scenarios for transfer/escalations exist triggered by the transfer action object. 

1. Explicit request from visitor to transfer to an agent  (Eg, action : transfer)

2. If the Bot does not have an appropriate answer, it should recognise this as a scenario for a transfer.
Depending on the connector configuration or the decision making capacity of the bot, the bot will transfer to a particular skill or default skill.

3. If there is a internal error or the bot service cannot be reached the connector will transfer to a default skill set up during configuration.

Transfers and escalations rely on the *action* item in the response object.

```json
{
    "type": "ACTION",
    "params": {
        "action": "TRANSFER",
        "data": {
            "skill": "bot-transfer-out"
        }
    }
}
```
Figure 4.1 Lex Example Transfer Payload


<img style="width:500px" src="img/lex/image_8.png">

Fig.4.2 - Example in Lex console

**NOTE**: Additionally, if the Lex error handling "maximum number of retries" is reached the bot connector will also initiate a “default escalation” transfer action.

<img style="width:550px" src="img/lex/image_9.png">

fig.4.2

### Send Rich Content (Structured Content)

Structured content/Rich Content is supported by the core LivePerson platform. Documentation for the feature can be found [here](getting-started-with-rich-messaging-introduction.html).

To send structured content via Lex, send a *custom payload* option via an intent.

```json
{
  "metadata": {
    "type": "ExternalId",
    "id": "ABCD1234"
  },
  "structuredContent": {
  "type": "vertical",
     "elements": [
      {
        "type": "text",
        "text": "product name (Title)",
        "tooltip": "text tooltip",
        "style": {
          "bold": true,
          "size": "large"
        }
      },
      {
         "type": "map",
        "lo": 64.128597,
        "la": -21.89611,
        "tooltip": "map tooltip"
      },
       {
        "type": "button",
        "tooltip": "button tooltip",
        "title": "Navigate",
        "click": {
          "actions": [
            {
              "type": "publishText",
              "text": "my text"
            },
            {
              "type": "navigate",
              "name": "Navigate to store via image",
              "lo": 23423423,
              "la": 2423423423
            }
          ]
        }
      }
    ]
  }
}
```
Figure 5.1 Lex Example Rich Content Payload

<img style="width:500px" src="img/lex/image_10.png">

Fig.5.2 - Example in Lex console


This should contain valid structured content, along with any optional metadata required for the structured content (as seen in Figure 5.1). Always validate your structured content using [this tool](https://livepersoninc.github.io/json-pollock/editor/) before entering into the Lex console.


**NOTE:** Lex supports 1000 characters per custom payload. Structured content will need to be broken down into smaller individual responses smaller if the payload is large.

### Close Chat/Conversation

In the bot’s flow, there will be times when it is appropriate to end the conversation without escalating to a live agent.
If a query has been answered, or the brand has determined that no escalation is required for a given query, then it is best practice to have the bot end the conversation.

The method for closing a conversation is similar to the transfer action in that the same "Actions and Parameters" field is utilised in the Lex console.

The action field needs to be set to **CLOSE_CONVERSATION **to instruct the connector to to close the conversation.

```json
{
    "type": "ACTION",
    "params": {
        "action": "CLOSE_CONVERSATION"
    }
}
```
Figure 6.1 Lex Example Close Conversation Payload

<img style="width:500px" src="img/lex/image_11.png">

Fig.6.2 - Example in Lex console

