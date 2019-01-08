---
pagename: Dialog Flow Version 2
redirect_from:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Bot Connectors
permalink: bot-connectors-dialog-flow-version-2.html
indicator:
---

### Overview

The following documentation outlines the specific bot related config needed to meet the standards used in the Bot Platform specifically for Google Dialogflow v2.

### LiveEngage Requirements

#### Bot User Account Configuration

Outlined below is the steps required to create an appropriate Bot Type agent in LiveEngage.
The result of which is fed into the "Bot Configuration" Below.

Create User type “bot” with a role of Agent

1. Add a new user in LiveEngage, choose "Bot" for “User type”. If “User type” is not available, relevant AC feature needs to be turned on.	

  <img style="width:600px" src="img/dialogflowversion2/image_0.png">

1. Add login method as "API key" and generate new API key for the new user

<img style="width:600px" src="img/dialogflowversion2/image_1.png">

1. Make sure the user has chat and/or messaging slot > 0 based on the target channel of the bot.

2. Set Max No of Live Chats 

    1. If Chat in the drop down select  - Value > 1.

    2. If Messaging Max No of Live Chats -> **No Chats **and Max No of Messaging Converversations to **Custom Setting **and enter a value greater than **0** 

3. Add other required APIs to the bot api key:

    3. Find api key name in bot user profile
    
      <img style="width:600px" src="img/dialogflowversion2/image_2.png">

    4. **Below is Messaging ONLY!!!
**Go to API management page (campaign list > data source) and add following APIs to the bot’s API key:

        1. Engagement History API

        2. Operational API

<img style="width:600px" src="img/dialogflowversion2/image_3.png">

        3. Administration (Skills) - **Read ONLY**
<img style="width:600px" src="img/dialogflowversion2/image_4.png">


#### Bot Configuration

Outlined below is a sample bot config object that is used to log the bot into **LiveEngage** as well as pass through any info required for each bot vendor.

The following information should be provided to LivePerson.

 

<table>
  <thead>
  <tr>
    <th>Item</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
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
    <td>Name of the AI engine. “DialogFlowV2”</td>
  </tr>
  <tr>
    <td>BotAuth</td>
    <td>Authentication info for Dialogflow V2:
1. private_key
2. client_email
3. project_id</td>
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
  </tbody>
</table>


**
**

**NOTE**: Dialogflow V2 adheres to Google’s oAuth2 unlike the V1 implementation.
Some degree of familiarity with Google IAM policies and IAM console is necessary for setting up a valid Dialogflow V2 client with *Read Only API access*.
A *service account* is a **prerequisite** for setting up the above config. Documentation available [here](https://dialogflow.com/docs/reference/v2-auth-setup).

The expected output of a service account setup is a JSON file, example below:

**Format of JSON file containing credentials **

```json
{
    "type": "service_account",
    "project_id": "[PROJECT-ID]",
    "private_key_id": "[KEY-ID]"
    "private_key": "-----BEGIN PRIVATE KEY-----\n[PRIVATE-KEY]\n-----END PRIVATE KEY-----\n",
    "client_email": "[SERVICE-ACCOUNT-EMAIL]",
    "client_id": "[CLIENT-ID]",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://accounts.google.com/o/oauth2/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "Client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/[SERVICE-ACCOUNT-EMAIL]"
}
```
Figure 1.1


The Bot-platform connector uses the below fields from the JSON content above.

* Client Email

* Private Key

* Project ID

**NOTE**: The config wizard expects each of the pieces of auth data to be copied from the JSON file, without quotes. For the private_key especially, do not modify the string, do not remove any of the newline characters. Just copy and paste directly.

<img style="width:600px" src="img/dialogflowversion2/image_5.png">

### Google Dialogflow V2

#### Functions of the Bot Connector 

The Bot Platform provides the basic functionality to send/receive messages between LiveEngage and Google Dialogflow V2.
The integration between the Bot Platform and Dialogflow V2 also supports the sending of [structured content](https://developers.liveperson.com/structured-content-templates.html###overview). Additionally, it also provides the ability to transfer the conversation to a specific skill, using the actions functionality.

#### Welcome Event

The behaviour of the welcome event is different depending on whether the bot is for chat and messaging. This divergence comes down to the way that each individual Liveperson product works..

A Messaging conversation qualifies as "initiated" from a LiveEngage perspective only after the consumer sends their first message. The consumer is prompted for their initial message in the channel they have chosen to initiate the conversation. As a result, the consumer’s first message is something that can be parsed by Dialogflow V2 and an intent determined. 

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
  </tbody>
</table>


A Chat conversation is considered started when the chat is routed to an agent. Best practice is for the agent to provide the first response.
In this scenario, there is no text from the consumer to parse, thus the default ‘WELCOME’ event is utilised as a start point for the bot to prompt the user to provide input and progress the conversation.

Ensure you have an ‘entry point’ intent that utilises the default ‘WELCOME’ event.

<img style="width:600px" src="img/dialogflowversion2/image_6.png">

Fig 1.1

#### Dialogflow Query length Limit 

The Dialogflow V2 service has a [limitation](https://dialogflow.com/docs/reference/agent/query) on the length of the ‘query’ object. Any query longer than 255 characters will invoke a custom event in DialogFlow.
To handle this gracefully, we recommend building a simple intent that handles a ‘DIALOGFLOW_CHAR_LIMIT’ *event*.

1. Create an intent with an event using the string:  DIALOGFLOW_CHAR_LIMIT 

<img style="width:600px" src="img/dialogflowversion2/image_7.png">

fig.2.1

2. Do not forget to add a custom response in the **Text response **section. 

<img style="width:600px" src="img/dialogflowversion2/image_8.png">

fig.2.2

#### Change Time To Response of Conversation

Change the TTR of a conversation based on the **_action_** value in the response object.

LivePerson Messaging uses 4 different types of priorities:
"URGENT",
“NORMAL”
 “PRIORITIZED”
“CUSTOM”

Only the “CUSTOM” can set a value. The unit of the value is second. And the value of the others are defined in the Agent Workspace. 

<img style="width:600px" src="img/dialogflowversion2/image_9.png">

Fig 3.1

#### Transfer / Escalations

If the bot needs to transfer the conversation to a human agent, or the conversation flow indicates that another bot is better suited for the identified intent, you will need to tell the connector to transfer the conversation to a given skill.

This is achieved using the built in "Actions and Parameters" section of the Dialogflow console.

**NOTE****: **This implementation branches from the V1 implementation and contains substantial changes.

Multiple scenarios for transfer/escalations exist triggered by the transfer action object. 

1. Explicit request from visitor to transfer to an agent  (Eg, action : transfer)

2. If the Bot does not have an appropriate answer, it should recognise this as a scenario for a transfer.
Depending on the connector configuration or the decision making capacity of the bot, the bot will transfer to a particular skill or default skill.

3. If there is a internal error or the bot service cannot be reached the connector will transfer to a default skill set up during configuration.

Transfers and escalations rely on the *action* item in the response object.

Action: **TRANSFER (**Case sensitive**)**

Parameters: ‘skill’ **(**Case sensitive**) **with ‘value’ of skill name (case sensitive) in LiveEngage.

<img style="width:600px" src="img/dialogflowversion2/image_10.png">

fig.4.1

#### Send Rich Content (Structured Content)

Structured content/Rich Content is supported by the core LivePerson platform. Documentation for the feature can be found [here](https://developers.liveperson.com/structured-content-introduction-to-structured-content.html).

To send structured content via Dialogflow V2, send a *custom payload* option via an intent.

<img style="width:600px" src="img/dialogflowversion2/image_11.png">

This should contain valid structured content, along with any optional metadata required for the structured content (as seen in Figure 5.1). Always validate your structured content using [this tool](https://livepersoninc.github.io/json-pollock/editor/) before entering into the Dialogflow console.

**
****NOTE****:** Caution when creating a custom payload. Delete the existing text response before saving the intent. If not LiveEngage will receive a blank text response followed by rich content payload. 

fig.5.1

Example Metadata

```json
{
   "metadata": {                                                                              //Mandatory
      "type": "ExternalId",                                                                //Mandatory
      "id": "ABCD1234"                                                                    //Mandatory
   },
   "structuredContent": {                                                             //Mandatory
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


#### Close Chat/Conversation

In the bot’s flow, there will be times when it is appropriate to end the conversation without escalating to a live agent.
If a query has been answered, or the brand has determined that no escalation is required for a given query, then it is best practice to have the bot end the conversation.

The method for closing a conversation is similar to the transfer action in that the same "Actions and Parameters" field is utilised in the Dialogflow console.

The action field needs to be set to **CLOSE_CONVERSATION **to instruct the connector to to close the conversation.

<img style="width:600px" src="img/dialogflowversion2/image_12.png">

fig.6.1

