---
pagename: Basic Content
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: LivePerson Functions
permalink: third-party-bots-liveperson-functions-basic-content.html
indicator:
---

{: .important}
As the LivePerson functions feature uses [LivePerson Functions](liveperson-functions-overview.html), it's required to enable `FaaS Admin` permissions. To be able to implement your own LivePerson Functions, you will also need to enable `FaaS Developer` permissions. Take a look at this [Getting Started Guide](liveperson-functions-getting-started-development-deep-dive-ui.html) for more information on setting uo LivePerson Functions and its permissions.

### The Welcome Event

The behavior of the welcome event is different depending on whether the bot is for chat and messaging. This divergence comes down to the way that each individual LivePerson product works.

A Messaging conversation qualifies as "initiated" from a Conversational Cloud perspective only after the consumer sends their first message. The consumer is prompted for their initial message in the channel they have chosen to initiate the conversation. As a result, the consumer’s first message is something that can be parsed by Lex and an intent determined.

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

Figure 2.1

### Sending messages

To define messages the bot should send, you need to place the messages property into the callback. This property should include an array of messages, every entry of array will be sent as a single message to the conversation.

```javascript
const payload = {
  messages: ["Message one", "Message two", "Message three"],
};
```

### Sending intent information

To provide some more information and context alongside the messages to the consumer, you can define intent information via the context property. The defined intent will then be displayed in the Agent Escalation Summary Widget.

| key             | value                  | notes    |
| --------------- | ---------------------- | -------- |
| intentId        | String, max len 256    | Required |
| intentName      | String, max len 256    | Optional |
| confidenceScore | Number between 0 and 1 | Required |

```javascript
const payload = {
  messages: ["Hi I am an intent information example"],
  context: {
    intentId: "intent-info-example",
    intentName: "Intent information example.",
    confidenceScore: 1,
  },
};
```

If you have alternate intents data that you want to pass into the bot metadata you can also add this
information in the response context via property `alternativeIntents` which is an array of objects
(containing same properties as the main intent). The example of passing alternative intents alongside
the main intent is as follow:

```javascript
const payload = {
  messages: ["Hi i am an intent information example"],
  context: {
    alternativeIntents: [
      {
        intentId: "alternative-intent-info-example-1",
        intentName: "alternative-Intent information example 1.",
        confidenceScore: 0.6,
      },
      {
        intentId: "alternative-intent-info-example-2",
        intentName: "alternative-Intent information example 2.",
        confidenceScore: 0.4,
      },
    ],
    intentId: "intent-info-example",
    intentName: "Intent information example.",
    confidenceScore: 1,
  },
};
```

### Sending Rich Content (Structured Content)

{: .important}
Structured Content will be added into messages property after LivePerson Functions version 2.9 to support multiple structured content messages

Structured Content/Rich Content is supported by the core LivePerson platform. Documentation for the feature can be found [here](getting-started-with-rich-messaging-introduction.html). To send structured content via LivePerson Functions, use the _structuredContent_ property containing valid structured content, along with metadata required for the structured content. Always validate your structured content using [this tool](https://livepersoninc.github.io/json-pollock/editor/) to check your formatting. There are two ways you can send structured content.

{: .important}
If Images are sent in Rich content, then their URLs must be added to a whitelist via internal LivePerson configuration (Houston: `messaging.rich.content.valid.urls`). Please note that you must add all possible domains to this list manually as wildcards are not supported. Moreover, All domains must be HTTPS secure.

#### Sending Structured content via 'messages' property

Structured content can be the part of the `messages` array property and can be sent with other messages (if defined). an example of string message and structure content can be seen below:

```javascript
const payload = {
  messages: [
    "Hi How are you doing?",
    {
      structuredContent: {
        type: "vertical",
        elements: [
          {
            type: "button",
            click: {
              actions: [
                {
                  text: "Recommend me a movie, please",
                  type: "publishText",
                },
              ],
            },
            title: "Recommend a movie",
          },
        ],
      },
      metadata: {
        type: "ExternalId",
        id: "12345",
      },
    },
  ],
};
```

#### Sending (single) Structured content via 'context' property (Legacy)

You can send a single structured content by adding it to `context` variable (Legacy support). Example can be seen below

```javascript
const payload = {
  messages: ["Just some structured Content"],
  context: {
    metadata: [
      {
        type: "ExternalId",
        id: "ABCD1234",
      },
    ],
    structuredContent: {
      type: "vertical",
      elements: [
        {
          type: "image",
          url: "https://i.ytimg.com/vi/zmeByDJ02mQ/hqdefault.jpg",
          tooltip: "image tooltip",
        },
        {
          type: "text",
          text: "product name (Title)",
          tooltip: "product name (Title)",
        },
        {
          type: "text",
          text: "product category (type)",
          tooltip: "product category (type)",
        },
        {
          type: "text",
          text: "$155.99",
          tooltip: "$155.99",
        },
      ],
    },
  },
};
```

{: .important}
**Please note** that `messages` defined in array (in above example) are sent first and structured content sent via `context` will be sent as a last message.

### Sending Quick Replies (Structured Content)

{: .important}
**Please note** Quick Replies are only supported in Messaging Conversations.

Quick Replies is a special type of Structured Content. It is a message sent alongside with predefined answers.
For detailed information on Quick Replies check out the documentation for the specific channel: ([Mobile SDK and Web](mobile-sdk-and-web-templates-quick-replies-template.html), [Facebook Messenger](facebook-messenger-templates-quick-replies-template.html), or [Google RCS Business Messaging](google-rcs-business-messaging-templates-quick-replies-template.html)).

```javascript
const payload = {
  messages: [
    {
      structuredContent: {
        // Mandatory, this will be send as text message together with quick replies
        message: "Do you like Bots?",
        quickReplies: {
          type: "quickReplies",
          itemsPerRow: 8,
          replies: [
            {
              type: "button",
              tooltip: "yes I do",
              title: "yes",
              click: {
                actions: [
                  {
                    type: "publishText",
                    text: "yep",
                  },
                ],
                metadata: [
                  {
                    type: "ExternalId",
                    id: "Yes-1234",
                  },
                ],
              },
            },
            {
              type: "button",
              tooltip: "No!",
              title: "No!",
              click: {
                actions: [
                  {
                    type: "publishText",
                    text: "No!",
                  },
                ],
                metadata: [
                  {
                    type: "ExternalId",
                    id: "No-4321",
                  },
                ],
              },
            },
          ],
        },
      },
      metadata: [
        {
          id: "1234",
          type: "ExternalId",
        },
      ],
    },
  ],
};
```

**Please note**: that quick replies can be sent in via `context` and `messages` both ways like any other structured content. for more information check [send rich content section](third-party-bots-custom-integration.html#sending-rich-content-structured-content)

### Bot Actions

{: .notice}
Please note we only support **ONE ACTION** per response

#### Transfer / Escalations

If the bot needs to transfer the conversation to a human agent, or the conversation flow indicates that another bot is better suited for the identified intent, you will need to instruct the connector to transfer the conversation to a given skill or specific agent.

Transfers and escalations rely on the `action` key in the response object and its value.

| key     | value                                             | notes                         |
| ------- | ------------------------------------------------- | ----------------------------- |
| action  | TRANSFER                                          | case sensitive, mandatory     |
| skill   | a skill name which exists in your account account | case sensitive                |
| agentId | id of agent which exists in your account          | optional, premission required |

#### Transfer To Skill

This option transfers the conversation to the next available agent using the provided skill.

Below is an example of what the response JSON from the LivePerson Function should look like to complete a transfer to skill action.

```javascript
const payload = {
  messages: [
    "Please wait will I check if we have any live agents online that can attend to you",
  ],
  context: {
    action: "TRANSFER",
    actionParameters: {
      skill: "bot-escalation",
    },
  },
};
```

#### Transfer to Agent

{: .important}
This feature is depending on [permissions](https://knowledge.liveperson.com/contact-center-management-messaging-operations-transfer-to-agent.html#permissions)

This option transfers the conversation to the particular agent matching the provided agentId and skill. If the agent is not available, the conversation will be transfered to an available agent with the same skill

Below is an example of what the response JSON from the LivePerson Function should look like to complete a transfer to agent action.

```javascript
const payload = {
  messages: ["Please wait will I transfer you to a specific agent"],
  context: {
    action: "TRANSFER",
    actionParameters: {
      skill: "bot-escalation",
      agentId: "4129463410",
    },
  },
};
```

#### Close Conversation

In the bot’s flow, there will be times when it is appropriate to end the conversation with the consumer without escalating to a live agent. If a query has been answered, or the brand has determined that no escalation is available for a given query, then you will need to have the bot end the conversation.

The method for closing a conversation is similar to the transfer action in that the same "Actions and Parameters" field is utilised in the Dialogflow console.

The `action` key needs to be set to **CLOSE_CONVERSATION** to instruct the connector to close the conversation.

Below is an example of what the response JSON from the LivePerson Function should look like in order to complete a `closeConversation` action.

```javascript
const payload = {
  messages: [
    "Unfortunately I am unable to help you with this query. Have a nice day.",
  ],
  context: {
    action: "CLOSE_CONVERSATION", // Close action
  },
};
```

Below is an example of what the response JSON from the LivePerson Function should look like in order to complete a `closeConversation` action without triggering the post conversation survey.

```javascript
const payload = {
  messages: [
    "Unfortunately I am unable to help you with this query. Have a nice day.",
  ],
  context: {
    action: "CLOSE_CONVERSATION",
    actionParameters: {
      withoutPcs: true, // tell the connector not to trigger post conversation survey, instead close entire conversation
    },
  },
};
```

#### Change Time To Response of Conversation

Change the TTR of a conversation based on the **action** value in the response object. LivePerson uses 4 different types of priorities: "URGENT", “NORMAL”, “PRIORITIZED”. The time values are defined in Conversational Cloud's Agent Workspace. These values determine how much time, in seconds, a conversation can wait in queue before it is deemed "overdue".

Below is an example of an payload, which changes the TTR:

| key     | value                             | notes     |
| ------- | --------------------------------- | --------- |
| action  | CHANGE_TTR                        | Mandatory |
| ttrtype | "URGENT", “NORMAL”, “PRIORITIZED” |

```javascript
const payload = {
  messages: ["This conversation has been marked urgent"],
  context: {
    action: "CHANGE_TTR",
    actionParameters: {
      ttrType: "URGENT",
    },
  },
};
```
