---
pagename: Basic Content
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: Google Dialogflow CX
permalink: third-party-bots-google-dialogflow-cx-basic-content.html
indicator:
---

### The Welcome Event

The behavior of the welcome event is different depending on whether the bot is for chat and messaging. This divergence comes down to the way that each individual Liveperson product works..

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

Figure 2.1

### Sending Rich Content (Structured Content)

Structured Content/Rich Content is supported by the core LivePerson platform. Documentation for the feature can be found [here](getting-started-with-rich-messaging-introduction.html).

To send Structured Content via Dialogflow CX, send a _custom payload_ option via an intent.

<img class="fancyimage" style="width:800px" src="img/dialogflowcx/image_11.png">

Figure 2.2

{: .important}
If Images are sent in Rich content, then their URLs must be added to a whitelist via internal LivePerson configuration (Houston: `messaging.rich.content.valid.urls`). Please note that you must add all possible domains to this list manually as wildcards are not supported. Moreover, All domains must be HTTPS secure.

This should contain valid structured content, along with any optional metadata required for the structured content (as seen in Figure 2.2). Always validate your structured content using [this tool](https://livepersoninc.github.io/json-pollock/editor/) before entering into the Dialogflow console.

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

Figure 2.3 Dialogflow Example Custom Payload

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

Figure 2.4 QuickReplies Structured Content example

### Bot Actions

#### Transfer

If the bot needs to transfer the conversation to a human agent, or the conversation flow indicates that another bot is better suited for the identified intent, you will need to tell the connector to transfer the conversation to a given skill.

This is achieved creating a Custom Payload in your page with the and action object, having TRANSFER as name and anther parameter named parameters that must contain the skill property and the skill name.

Multiple scenarios for transfer/escalations exist triggered by the transfer action object.

1. Explicit request from visitor to transfer to an agent (Eg, action : transfer)

2. If the Bot does not have an appropriate answer, it should recognise this as a scenario for a transfer.
   Depending on the connector configuration or the decision making capacity of the bot, the bot will transfer to a particular skill or default skill.

3. If there is a internal error or the bot service cannot be reached the connector will transfer to a default skill set up during configuration.

Transfers and escalations rely on the _action_ item in the response object.

Action: **TRANSFER (Case sensitive)**

Parameters: `skill` **(Case sensitive)** with value of skill name (case sensitive) in Conversational Cloud.

<img class="fancyimage" style="width:600px" src="img/dialogflowcx/image_10.png">

Figure 2.5

#### Transfer to Agent

{: .important}
This feature is depending on [permissions](https://knowledge.liveperson.com/contact-center-management-messaging-operations-transfer-to-agent.html#permissions)

This option transfers the conversation to the particular agent matching the provided agentId and skill. If the agent is not available, the conversation will be transferred to an available agent with the same skill

Parameters: `skill` **(Case sensitive)** with value of skill name (case sensitive) in Conversational Cloud.
`agentId` **(Case sensitive)** with value of agent id in Conversational Cloud. Both parameters are required (can be taken from the URL).

<img class="fancyimage" style="width:600px" src="img/dialogflowcx/dialogflow-cx-action-transfer-agent.png">
Figure 2.6 Configuration of fulfillment for transfer to agent in Dialogflow CX console

#### Close Conversation

In the bot’s flow, there will be times when it is appropriate to end the conversation without escalating to a live agent.
If a query has been answered, or the brand has determined that no escalation is required for a given query, then it is best practice to have the bot end the conversation.

The method for closing a conversation is similar to the transfer action in that you must use the Custom Payload with the action parameter and a name property set to `CLOSE_CONVERSATION`.

The action field needs to be set to **CLOSE_CONVERSATION** to instruct the connector to close the conversation.

<img class="fancyimage" style="width:800px" src="img/dialogflowcx/image_12.png">
Figure 2.7 Fulfillment with custom payload for close conversation action

To close a conversation without triggering a post conversation survey, please add the parameter with the name `withoutPcs` and the value `true` to the action parameters.

#### Change Time To Response of Conversation

Change the TTR of a conversation based on the **action** value in the response object.

LivePerson Messaging uses 3 different types of priorities:
"URGENT",
“NORMAL”
“PRIORITIZED”

<img class="fancyimage" style="width:600px" src="img/dialogflowcx/image_9.png">

Figure 2.8 Fulfillment with custom payload for change time to response of a conversation
