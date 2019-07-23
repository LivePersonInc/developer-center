---
pagename: Amazon Lex
redirect_from:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Bot Connectors
permalink: bot-connectors-amazon-lex.html
indicator:
---

### Overview

The following documentation outlines the configuration for the connector and how to implement functions specifically for **Amazon Lex**.

{: .important}
At this time, Lex response cards & audio messages are not supported.

### Bot Configuration

{: .important}
See the [Getting Started](bot-connectors-getting-started.html) guide before using this document to complete pre-requisite steps.

You will be presented with following screen to complete the Vendor Settings in order to add bot connector.

<img class="fancyimage" style="width:600px" src="img/lex/vendor.png">

Figure 1.1 Showing the configuration that needed to be filled

The following Amazon Lex information should be provided to LivePerson:

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

**NOTE**: Lex APIs adhere to [Signature V4](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) Signing Process.
Some degree of familiarity with AWS IAM policies and the AWS IAM console is necessary for setting up a valid Lex client with _Read Only API Key access_.
A _service account_ is a **prerequisite** for setting up the above config. Documentation available [here](https://docs.aws.amazon.com/lex/index.html).

{: .important}
You have to agree to Data Disclaimer from now onward in order to use the services of bot connector. For that you can click on the checkbox "I agree to the Data Disclaimer"

For validation of the credentials provided, you can now perform a test connection request to see if everything that you have provided is working and reachable. You can click on the button "Test Connection" to see if connection succeed or fail as shown in Figure 1.2 and 1.3 respectively.

<img class="fancyimage" style="width:600px" src="img/lex/connection-success.png">

Figure 1.2 Showing the success case of the valid credentials

<img class="fancyimage" style="width:600px" src="img/lex/connection-failed.png">

Figure 1.3 Showing the fail case of the invalid credentials

Once you are done with providing configuration you can save it by pressing on "Done". **_Congratulations!_** You have completed the configuration of the Amazon Lex bot.

{: .important}
Following guide is going to introduce how to implement functions specifically for **Amazon Lex** using Amazon Console. Continue if you are familiar and have access to Amazon Console.

### Welcome Event

The behavior of the welcome event is different depending on whether the bot is for chat and messaging. This divergence comes down to the way that each individual LivePerson product works.

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

<img class="fancyimage" style="width:600px" src="img/lex/image_6.png">

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

<img class="fancyimage" style="width:500px" src="img/lex/image_7.png">

Fig 3.1 - Example in Lex console

### Transfer / Escalations

If the bot needs to transfer the conversation to a human agent, or the conversation flow indicates that another bot is better suited for the identified intent, you will need to tell the connector to transfer the conversation to a given skill.

This is achieved using "Custom Markup" in the Response section of a Lex intent.

Multiple scenarios for transfer/escalations exist triggered by the transfer action object.

1. Explicit request from visitor to transfer to an agent (Eg, action : transfer)

2. If the Bot does not have an appropriate answer, it should recognise this as a scenario for a transfer.
   Depending on the connector configuration or the decision making capacity of the bot, the bot will transfer to a particular skill or default skill.

3. If there is a internal error or the bot service cannot be reached the connector will transfer to a default skill set up during configuration.

Transfers and escalations rely on the _action_ item in the response object.

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

<img class="fancyimage" style="width:500px" src="img/lex/image_8.png">

Fig.4.2 - Example in Lex console

**NOTE**: Additionally, if the Lex error handling "maximum number of retries" is reached the bot connector will also initiate a “default escalation” transfer action.

<img class="fancyimage" style="width:550px" src="img/lex/image_9.png">

fig.4.2

### Send Rich Content (Structured Content)

Structured content/Rich Content is supported by the core LivePerson platform. Documentation for the feature can be found [here](getting-started-with-rich-messaging-introduction.html).

To send structured content via Lex, send a _custom payload_ option via an intent.

```json
{
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

<img class="fancyimage" style="width:500px" src="img/lex/image_10.png">

Fig.5.2 - Example in Lex console

This should contain valid structured content, along with any optional metadata required for the structured content (as seen in Figure 5.1). Always validate your structured content using [this tool](https://livepersoninc.github.io/json-pollock/editor/) before entering into the Lex console.

**NOTE:** Lex supports 1000 characters per custom payload. Structured content will need to be broken down into smaller individual responses smaller if the payload is large.

### Send quickReplies (Structured Content)

 Quick Replies is a special type of Structured Content. Is is a message sent with along with predefined answers. The documentation can be found [here](quick-replies-introduction-to-quick-replies.html)

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

Figure 7.1 Lex Example Close Conversation Payload

<img class="fancyimage" style="width:500px" src="img/lex/image_11.png">

Figure 7.2 - Example in Lex console
