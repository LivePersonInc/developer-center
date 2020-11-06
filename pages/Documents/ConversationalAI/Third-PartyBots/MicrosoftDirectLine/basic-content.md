---
pagename: Basic Content
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: Microsoft Direct Line
permalink: third-party-bots-microsoft-direct-line-basic-content.html
indicator:
---

### Introduction
Most of the basic content must be send either via the text property of an activity or via the json object provided on
the **channelData** property of the activity. Improving support for native content is planned but as of now most of the
content needs to be provided in the described custom format. 

### Structured Content
Structured content generally needs to be provided in the format that LivePerson supports.
Documentation on this format can be found [here](getting-started-with-rich-messaging-introduction.html).

This should contain a valid structured content body, along with an optional property containing metadata required for 
the structured content. Always validate your structured content using 
[this tool](https://livepersoninc.github.io/json-pollock/editor/) before using it in a bot.

Direct Line bots need to send this payload in the **channelData** property of the message activity.

{: .important}
If Images should be sent in rich content, their URLs must be added to a whitelist via internal LivePerson configuration 
(Houston: `messaging.rich.content.valid.urls`).
Please note that you must add all possible domains to this list manually. Wildcards are not supported.
Moreover, all domains must be HTTPS secure. 

```json-doc
{
  // ...
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

Figure 2.1 Activity with Structured Content


### Sending Quick Replies

{: .important}
Quick Replies are only supported in Messaging Conversations.

Quick Replies are a special type of Structured Content. It is a message sent along with predefined answers. The 
documentation can be found [here](quick-replies-introduction-to-quick-replies.html).
For detailed information on Quick Replies check out the documentation for the respective channel 
([Mobile SDK and Web](mobile-sdk-and-web-templates-quick-replies-template.html), 
[Facebook Messenger](facebook-messenger-templates-quick-replies-template.html), 
[Google RCS Business Messaging](google-rcs-business-messaging-templates-quick-replies-template.html))

```json-doc
{
  // ...
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
      "message": "Do you like Bots?" //mandatory!
    }
  }
}
```

Figure 3.1 Activity with Quick Replies

### The Welcome Event

The behavior of the welcome event is different depending on whether the bot is for chat or messaging. This divergence 
comes down to the way that each individual LivePerson product works.

A Messaging conversation qualifies as "initiated" from a Conversational Cloud perspective only after the consumer sends 
their first message. The consumer is prompted for their initial message in the channel they have chosen to initiate the 
conversation. As a result, the consumer’s first message is something that can be parsed by the bot and an intent 
determined.

A Chat conversation is considered started when the chat is routed to an agent. Best practice is for the agent to 
provide the first response. In this scenario, there is no text from the consumer to parse, thus the default ‘WELCOME’ 
event is utilized as a start point for the bot to prompt the user to provide input and progress the conversation.

Ensure you have an ‘entry point’ in your bot that responds to the default ‘WELCOME’ action send by a new chat customer.

TODO: add messaging event info

```json-doc
{
  // ...
  "type": "message",
  "text": "",
  "channelData": {
    "action": {
      "name": "WELCOME"
    }
  }
}
```

Figure 4.1 Welcome activity on chat

### Bot Actions
#### Transfer 

This action allows the bot to request a transfer of the conversation to another skill.

At the beginning of a chat session or when a messaging bot logs in, the whole list of enabled skills on the account is 
retrieved, keyed by name and stored.

When the bot requests a transfer, the provided skill name is matched to the skill existing on the account and the 
conversation is transfered based on this skill.

<div class="notice">
<strong>Naming Conventions:</strong> 
When naming skills the bot can escalate to, you should use the Kebab Case <italic>(e.g. human-expert)</italic> for the 
skill matching to work.
</div>

The payload for a transfer request sent in the **channelData** is shown in Figure 5.1.
The action must be named **"TRANSFER"** and a skill must be provided.


```json-doc
{
  // ...
  "type": "message",
  "text": "I'll transfer you to a human agent", // an optional message to the customer (can be left empty)
  "channelData": {
    "action": {
      "name": "TRANSFER",
      "parameters": {
        "skill": "human-expert"
      }
    }
  }
}
```
Figure 5.1 Custom `transfer` action



It is also possible to create a native handoff event. You can use the official Microsoft BotBuilder SDK method called 
[EventFactory.createHandoffInitiation](https://docs.microsoft.com/en-us/javascript/api/botbuilder/eventfactory?view=botbuilder-ts-latest).

An additional text message can also be provided.

```javascript
import { EventFactory, TurnContext } from "botbuilder";

// context should be of type TurnContext
const handoffContext = { skill: "human-expert" };

const payload = {
    text: "I'll transfer you to a human agent",
    ...EventFactory.createHandoffInitiation(context, handoffContext),
};
```
Figure 5.2 Microsoft BotBuilder example code



#### Close Conversation

A conversation can be closed by sending an action in the **channelData** similarly to the transfer action. 
The action must be named **"CLOSE_CONVERSATION"** in this case.

```json-doc
{
  // ...
  "type": "message",
  "text": "", // an optional message to the customer
  "channelData": {
    "action": {
      "name": "CLOSE_CONVERSATION"
    }
  }
}
```
Figure 5.3 Activity for a transfer request



#### Change Time To Response of a Conversation

The bot can change the TTR of a conversation by sending an action with the name **"CHANGE_TTR"**.

LivePerson Messaging uses 4 different types of priorities:

- "URGENT"
- “NORMAL”
- “PRIORITIZED”
- “CUSTOM”

Only “CUSTOM” can set a value. The unit of the value is in seconds. The values of the other types can be set in the 
Agent Workspace.

A text message can also be provided simultaneously in the activity json.

```json-doc
{
  // ...
  "type": "message",
  "text": "",
  "channelData": {
    "action": {
      "name": "CHANGE_TTR",
      "parameters": {
        "ttrType": "CUSTOM",
        "value": "300" // this property should only exist for "CUSTOM"
      }
    }
  }
}
```
Figure 5.4 Activity to change the TTR
