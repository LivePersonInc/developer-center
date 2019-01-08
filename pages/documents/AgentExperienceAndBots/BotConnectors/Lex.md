---
pagename: Lex
redirect_from:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Bot Connectors
permalink: bot-connectors-lex.html
indicator:
---

# Overview

The following documentation outlines the specific bot related config needed to meet the standards used in the Bot Platform specifically for Amazon Lex.

# LiveEngage Requirements

## Bot User Account Configuration

Outlined below is the steps required to create an appropriate Bot Type agent in LiveEngage.
The result of which is fed into the "Bot Configuration" Below.

Create User type “bot” with a role of Agent

1. Add a new user in LiveEngage, choose "Bot" for “User type”. If “User type” is not available, relevant AC feature needs to be turned on.	![image alt text](image_0.png)

1. Add login method as "API key" and generate new API key for the new user

![image alt text](image_1.png)

1. Make sure the user has chat and/or messaging slot > 0 based on the target channel of the bot.

2. Set Max No of Live Chats 

    1. If Chat in the drop down select  - Value > 1.

    2. If Messaging Max No of Live Chats -> **No Chats **and Max No of Messaging Converversations to **Custom Setting **and enter a value greater than **0** 

3. Add other required APIs to the bot api key:

    3. Find api key name in bot user profile![image alt text](image_2.png)

    4. **Below is Messaging ONLY!!!
**Go to API management page (campaign list > data source) and add following APIs to the bot’s API key:

        1. Engagement History API

        2. Operational API

![image alt text](image_3.png)

        3. Administration (Skills) - **Read ONLY**
![image alt text](image_4.png)


## Bot Configuration

Outlined below is a sample bot config object that is used to log the bot into **LiveEngage** as well as pass through any info required for each bot vendor.

The following information should be provided to LivePerson.

 

<table>
  <tr>
    <td>Item</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>AccountID</td>
    <td>LiveEngage Account ID</td>
  </tr>
  <tr>
    <td>Username</td>
    <td>LiveEngage BOT Username</td>
  </tr>
  <tr>
    <td>Type</td>
    <td>Using "Chat" or “Messaging”</td>
  </tr>
  <tr>
    <td>vendor</td>
    <td>Name of the AI engine. “Lex”</td>
  </tr>
  <tr>
    <td>BotAuth</td>
    <td>Authentication info for Lex:
API Version
AWS Region
Access Key ID
Secret Access Key
Bot Alias
Bot Name</td>
  </tr>
  <tr>
    <td>operatingHours
(messaging only)</td>
    <td>On/Off
Start time
End time</td>
  </tr>
  <tr>
    <td>offHoursMessage
(messaging only)</td>
    <td>message to display to customers when it is off hours</td>
  </tr>
  <tr>
    <td>transferSkill</td>
    <td>Default transfer skill name</td>
  </tr>
  <tr>
    <td>transferSkillId</td>
    <td>Default transfer skill ID</td>
  </tr>
  <tr>
    <td>transferMessage</td>
    <td>Default transfer message</td>
  </tr>
</table>


**
**

**NOTE**: Lex APIs adhere to [Signature V4](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) Signing Process.
Some degree of familiarity with AWS  IAM policies and the AWS IAM console is necessary for setting up a valid Lex client with *Read Only API Key access*.
A *service account* is a **prerequisite** for setting up the above config. Documentation available [here](https://docs.aws.amazon.com/lex/index.html).

The Bot-platform connector uses the below fields from the AWS Environment.

* API Version

* AWS Region

* Access Key ID

* Secret Access Key

* Bot Alias

* Bot Name

![image alt text](image_5.png)

# Amazon Lex

## Functions of the Bot Connector 

The Bot Platform provides the basic functionality to send/receive messages between LiveEngage and Amazon Lex.


The integration between the Bot Platform and Amazon Lex also supports the sending of [structured content](https://developers.liveperson.com/structured-content-templates.html#overview). Additionally, it also provides the ability to transfer the conversation to a specific skill, using the actions functionality.

**NOTE**: At this time Lex response cards & audio messages are not supported.

## Welcome Event

The behaviour of the welcome event is different depending on whether the bot is for chat and messaging. This divergence comes down to the way that each individual Liveperson product works..

A Messaging conversation qualifies as "initiated" from a LiveEngage perspective only after the consumer sends their first message. The consumer is prompted for their initial message in the channel they have chosen to initiate the conversation. As a result, the consumer’s first message is something that can be parsed by Lex and an intent determined. 

The below documents cover where to configure the initial message on a given platform.

<table>
  <tr>
    <td>Platform</td>
    <td>Docs</td>
    <td>Attribute</td>
  </tr>
  <tr>
    <td>iOS</td>
    <td>https://developers.liveperson...</td>
    <td>hiMessage</td>
  </tr>
  <tr>
    <td>Android</td>
    <td>https://developers.liveperson...</td>
    <td>lp_first_message</td>
  </tr>
  <tr>
    <td>Web</td>
    <td>N/A</td>
    <td><Default LP Message></td>
  </tr>
  <tr>
    <td>Other</td>
    <td>N/A</td>
    <td>N/A</td>
  </tr>
</table>


A Chat conversation is considered started when the chat is routed to an agent. Best practice is for the agent to provide the first response.
In this scenario, there is no text from the consumer to parse, thus the default ‘WELCOME’ event is utilised as a start point for the bot to prompt the user to provide input and progress the conversation.

Ensure you have an ‘entry point’ intent that utilises the default ‘WELCOME-INTENT’ event.

![image alt text](image_6.png)

Fig 1.1

## Change Time To Response of Conversation

Change the TTR of a conversation based on the **_action_** value in the response object.

LivePerson Messaging uses 4 different types of priorities:
"URGENT",
“NORMAL”
“PRIORITIZED”
“CUSTOM”

Only the “CUSTOM” can set a value. The unit of the value is second. And the value of the others are defined in the Agent Workspace. 

<table>
  <tr>
    <td>{
    "type": "ACTION",
    "params": {
        "action": "CHANGE_TTR",
        "data": {
            "ttrType": "URGENT"
            "value": 500,
        }
    }
}</td>
  </tr>
  <tr>
    <td>Figure 3.1 Lex Example Change TTR Payload</td>
  </tr>
</table>


![image alt text](image_7.png)

Fig 3.1 - Example in Lex console

## Transfer / Escalations

If the bot needs to transfer the conversation to a human agent, or the conversation flow indicates that another bot is better suited for the identified intent, you will need to tell the connector to transfer the conversation to a given skill.

This is achieved using  "Custom Markup" in the Response section of a Lex intent.

Multiple scenarios for transfer/escalations exist triggered by the transfer action object. 

1. Explicit request from visitor to transfer to an agent  (Eg, action : transfer)

2. If the Bot does not have an appropriate answer, it should recognise this as a scenario for a transfer.
Depending on the connector configuration or the decision making capacity of the bot, the bot will transfer to a particular skill or default skill.

3. If there is a internal error or the bot service cannot be reached the connector will transfer to a default skill set up during configuration.

Transfers and escalations rely on the *action* item in the response object.

<table>
  <tr>
    <td>{
    "type": "ACTION",
    "params": {
        "action": "TRANSFER",
        "data": {
            "skillName": "bot-transfer-out",
            "skillId": "775459351"
        }
    }
}</td>
  </tr>
  <tr>
    <td>Figure 4.1 Lex Example Transfer Payload</td>
  </tr>
</table>


![image alt text](image_8.png)

Fig.4.2 - Example in Lex console

**NOTE**: Additionally, if the Lex error handling "maximum number of retries" is reached the bot connector will also initiate a “default escalation” transfer action.

![image alt text](image_9.png)

fig.4.2

## Send Rich Content (Structured Content)

Structured content/Rich Content is supported by the core LivePerson platform. Documentation for the feature can be found [here](https://developers.liveperson.com/structured-content-introduction-to-structured-content.html).

To send structured content via Lex, send a *custom payload* option via an intent.

<table>
  <tr>
    <td>{
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
}</td>
  </tr>
  <tr>
    <td>Figure 5.1 Lex Example Rich Content Payload</td>
  </tr>
</table>


![image alt text](image_10.png)

Fig.5.2 - Example in Lex console


This should contain valid structured content, along with any optional metadata required for the structured content (as seen in Figure 5.1). Always validate your structured content using [this tool](https://livepersoninc.github.io/json-pollock/editor/) before entering into the Lex console.

**
****NOTE****:** Lex supports 1000 characters per custom payload. Structured content will need to be broken down into smaller individual responses smaller if the payload is large.

## Close Chat/Conversation

In the bot’s flow, there will be times when it is appropriate to end the conversation without escalating to a live agent.
If a query has been answered, or the brand has determined that no escalation is required for a given query, then it is best practice to have the bot end the conversation.

The method for closing a conversation is similar to the transfer action in that the same "Actions and Parameters" field is utilised in the Lex console.

The action field needs to be set to **CLOSE_CONVERSATION **to instruct the connector to to close the conversation.

<table>
  <tr>
    <td>{
    "type": "ACTION",
    "params": {
        "action": "CLOSE_CONVERSATION"
    }
}
</td>
  </tr>
  <tr>
    <td>Figure 6.1 Lex Example Close Conversation Payload</td>
  </tr>
</table>


![image alt text](image_11.png)

Fig.6.2 - Example in Lex console

