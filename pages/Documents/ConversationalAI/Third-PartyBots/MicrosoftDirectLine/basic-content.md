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
the `channelData` property of the activity. Improving support for native content is planned but as of now most of the
content needs to be provided in the described custom format.

### Structured Content

Structured content generally needs to be provided in the format that LivePerson supports.
Documentation on this format can be found [here](getting-started-with-rich-messaging-introduction.html).

This should contain a valid structured content body, along with an optional property containing metadata required for
the structured content. Always validate your structured content using
[this tool](https://livepersoninc.github.io/json-pollock/editor/) before using it in a bot.

Direct Line bots need to send this payload in the `channelData` property of the message activity.

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
<br>
<br>

### Sending Quick Replies

{: .important}
Quick Replies are only supported in Messaging Conversations.

Quick Replies are a special kind of the Structured Content.
The content needs to be provided as a quickReplies object in the structuredContent.
It is also required to provide a message property in the structuredContent,
This message will be sent to the customer along with the Quick Replies.
For detailed information on Quick Replies check out the documentation for the specific channel
([Mobile SDK and Web](mobile-sdk-and-web-templates-quick-replies-template.html),
[Facebook Messenger](facebook-messenger-templates-quick-replies-template.html), [Google RCS Business Messaging](google-rcs-business-messaging-templates-quick-replies-template.html)).

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

Figure 2.2 Activity with Quick Replies
<br>
<br>

### The Welcome Event

The behavior of the welcome event is different depending on whether the bot is configured for chat or messaging.
This divergence comes down to the way that each individual LivePerson product works.

A messaging conversation qualifies as "initiated" from a Conversational Cloud perspective only after the consumer sends
their first message. The consumer is prompted for their initial message in the channel they have chosen to initiate the
conversation. As a result, the consumer’s first message is something that can be parsed by the bot and an intent
determined. It is possible however to enable in the bot's
[settings for messaging](third-party-bots-microsoft-direct-line-introduction#settings-for-messaging) that a welcome event will also
be sent if an existing conversation is transferred to the bot.

A chat conversation is considered started when the chat is routed to an agent. Best practice is for the agent to
provide the first response. In this scenario, there is no text from the consumer to parse, thus the default ‘WELCOME’
event is utilized as a start point for the bot to prompt the user to provide input and progress the conversation.

Ensure you have an ‘entry point’ in your bot that responds to the default ‘WELCOME’ action send by a new chat customer.

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

Figure 2.3 Welcome activity on chat
<br>
<br>

### Bot Actions

#### Transfer

This action allows the bot to request a transfer of the conversation to another skill or a specific agent.

<div class="notice">
<strong>Naming Conventions:</strong> 
When naming skills the bot can escalate to, you should use the Kebab Case <italic>(e.g. human-expert)</italic> for the 
skill matching to work.
</div>

#### Transfer To Skill

This option transfers the conversation to the next available agent using the provided skill.

At the beginning of a chat session or when a messaging bot logs in, the whole list of enabled skills on the account is
retrieved, keyed by name and stored.

When the bot requests a transfer, the provided skill name is matched to the skill existing on the account and the
conversation is transfered based on this skill.

The payload for a transfer request sent in the `channelData` is shown in Figure 2.4.
The action must be named `TRANSFER` and a skill name must be provided.

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

Figure 2.4 Custom transfer to skill action
<br>
<br>

It is also possible to use a native handoff event to transfer the conversation to another skill. You can use the
official Microsoft BotBuilder SDK method called
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

Figure 2.5 Microsoft BotBuilder example code
<br>
<br>

#### Transfer To Agent

{: .important}
This feature is depending on [permissions](https://knowledge.liveperson.com/contact-center-management-messaging-operations-transfer-to-agent.html#permissions)

This option transfers the conversation to the particular agent matching the provided agentId and skill. If the agent is not available, the conversation will be transfered to an available agent with the same skill

The payload for a transfer request sent in the `channelData` is shown in Figure 2.6.
The action must be named `TRANSFER` and a skill name alongside agentId must be provided.

```json-doc
{
  // ...
  "type": "message",
  "text": "I'll transfer you to a certain agent", // an optional message to the customer (can be left empty)
  "channelData": {
    "action": {
      "name": "TRANSFER",
      "parameters": {
        "skill": "human-expert",
        "agentId": "4129463410"
      }
    }
  }
}
```

Figure 2.6 Custom transfer to agent action
<br>
<br>

#### Close Conversation

A conversation can be closed by sending an action in the `channelData` similarly to the transfer action.
The action must be named `CLOSE_CONVERSATION` in this case.

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

Figure 2.7 Activity for a close conversation request
<br>
<br>

To close a conversation without triggering a post conversation survey, you need to provide the `withoutPcs` flag with the value `true` (as shown in Figure 2.8)

```json
{
  "type": "message",
  "text": "",
  "channelData": {
    "action": {
      "name": "CLOSE_CONVERSATION",
      "parameters": {
        "withoutPcs": true
      }
    }
  }
}
```

Figure 2.8 Activity to close a conversation without a post conversation survey
<br>
<br>

#### Change Time To Response of a Conversation

The bot can change the TTR of a conversation by sending an action with the name `CHANGE_TTR`.

LivePerson Messaging uses 3 different types of priorities:

- `URGENT`
- `NORMAL`
- `PRIORITIZED`

The time values of these are defined in the Agent Workspace.

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
        "ttrType": "URGENT"
      }
    }
  }
}
```

Figure 2.9 Activity to change the TTR
