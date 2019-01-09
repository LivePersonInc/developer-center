---
pagename: IBM Watson Assistant
redirect_from:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Bot Connectors
permalink: bot-connectors-ibm-watson-assistant.html
indicator:
---

### Overview

The following documentation outlines the pre-requirements to use the Bot Connector specifically for **IBM Watson Assistant**.

### Bot Configuration

{: .important}
See the [Getting Started](bot-connectors-getting-started.html) guide first.

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
    <td>Password</td>
    <td>LiveEngage App Key
LiveEngage App Secret
LiveEngage Token
LiveEngage Token Secret</td>
  </tr>
  <tr>
    <td>Type</td>
    <td>Using "Chat" or "Messaging"</td>
  </tr>
  <tr>
    <td>vendor</td>
    <td>Name of the AI engine. "WatsonAssistant"</td>
  </tr>
  <tr>
    <td>BotAuth</td>
    <td>User/Pass
Authentication info for Watson, following is example:
WORKSPACE_URL: https://gateway.watsonplatform.net/conversation/api
WORKSPACE_ID: 8671e9a1-xxxx-xxxx-xxxx-xxxxf9dfcb74
CONVERSATION_USERNAME: de0a48a5-9f4f-xxxx-xxxx-xxxxx9856751
CONVERSATION_PASSWORD: Dxxxxxxxxxx1
VERSION_DATE: 201X-xx-xx

IAM
WORKSPACE_URL: https://gateway.watsonplatform.net/conversation/api
WORKSPACE_ID: 8671e9a1-xxxx-xxxx-xxxx-xxxxf9dfcb74
VERSION_DATE: 201X-xx-xx
API_KEY: xxxxxxxxxxxxxxxxxxxxx_xxxxxxxxxxxxxxxxxxxxZG
TOKEN_ENDPOINT_URL: https://iam.bluemix.net/identity/token
DEFAULT_REFRESH_TIME: 300000
MAX_RETRIES: 0
AUTH_HEADER: Basic Yng6Yng=</td>
  </tr>
  <tr>
    <td>operatingHours</td>
    <td>On/Off
Start time
End time</td>
  </tr>
  <tr>
    <td>offHoursMessage</td>
    <td>message to display to customers when it is off hours</td>
  </tr>
  <tr>
    <td>transferSkill</td>
    <td>Default transfer skill</td>
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


#### Naming Conventions

One thing to note before going into *actions* and *skills* is the naming convention between each. 

All non-escalation actions are defined by using underscores. For example, in the case of closing a conversation, the action name returned by **Watson** needs to be *CLOSE_CONVERSATION*. Further down the line, if any additional functionality is added that can be called by an action from the AI, it will follow the same naming convention.

For escalations, the naming convention for these skills should use a "-" instead of "_". Furthermore, if transferring to a skill, specifically assigned to bots, it’s best practice to prefix the skill name with "BOT-" within LiveEngage.

### Functions of the Bot Connector 

The Bot Connector provides the base functionality to send and receive text messages between LiveEngage and Watson Assistant. The integration between the Bot Connector and Watson Assistant also supports the sending [structured content](getting-started-with-rich-messaging-introduction.html). The Bot Connector also provides further functionality such as the ability to transfer the conversation to other skills, changing the TTR of a conversation as well as the ability close a conversation. These actions are sent in the action array of Watson Assistant’s JSON response.

The following provides a detailed look at how to implement the supported functionality.

### Sending Rich Content (Structured Content)

The core LiveEngage platform supports the use of rich/structured content. For more information on the format and functionality available, please refer to the documentation found [here](getting-started-with-rich-messaging-introduction.html). As a result, the Bot Connector also supports this.

To send structured content via Watson Assistant you will need send custom JSON. To do this, you will need to select the dialog node that will hold the structured content (Figure 2.1).

<table>
  <tr>
    <td></td>
  </tr>
  <tr>
    <td>Figure 2.1 Watson Dialog Node</td>
  </tr>
</table>


From there, under the section Then respond with: Click the three vertical dots and select Open JSON Editor (Figure 2.2)

<table>
  <tr>
    <td></td>
  </tr>
  <tr>
    <td>Figure 2.2 Watson Assistant Dialog JSON Editor</td>
  </tr>
</table>


In the JSON Editor you will need to add your custom JSON response (Figure 2.3).

<table>
  <tr>
    <td></td>
  </tr>
  <tr>
    <td>Figure 2.3 Watson Assistant JSON Editor</td>
  </tr>
</table>


There is a strict JSON structure for the response that must be used. The JSON structure can be found below in **Figure 2.4** with a sample JSON example that uses a standard Structured Content card with a button option in **Figure 2.5**.

```json
{
  "output": {
    "text": {
      "values": [
        {
          "metadata": {
            "id": "1234",
            "type": "ExternalId"
          },
          "structuredContent": {}
        }
      ],
      "selection_policy": "sequential"
    }
  }
}
```
Figure 2.4 Structured Content Watson JSON Structure


```json
{
  "output": {
    "text": {
      "values": [
        {
          "metadata": {
            "id": "1234",
            "type": "ExternalId"
          },
          "structuredContent": {
            "type": "vertical",
            "elements": [
              {
                "type": "button",
                "click": {
                  "actions": [
                    {
                      "text": "Recommend me a movie, please",
                      "type": "publishText"
                    }
                  ]
                },
                "title": "Recommend a movie"
              }
            ]
          }
        }
      ],
      "selection_policy": "sequential"
    }
  }
}
```
Figure 2.4 Structured Content Watson JSON Example


For new IAM workspaces that have a new Watson response, *Then respond with* text:

<img style="width:400px" src="img/watsonassistant/image_5.png">

Put the structured content objects with the metadata in the text field for the response.

```json
{
  "output": {
    "generic": [
      {
        "values": [
          {
            "text": "{\n          \"metadata\": {\n            \"id\": \"1234\",\n            \"type\": \"ExternalId\"\n          },\n          \"structuredContent\": {\n            \"type\": \"vertical\",\n            \"elements\": [\n              {\n                \"text\": \"What kind of credit card are you interested in?\",\n                \"type\": \"text\",\n                \"tooltip\": \"text tooltip\"\n              },\n              {\n                \"type\": \"button\",\n                \"click\": {\n                  \"actions\": [\n                    {\n                      \"text\": \"Personal\",\n                      \"type\": \"publishText\"\n                    }\n                  ]\n                },\n                \"title\": \"Personal\",\n                \"tooltip\": \"button tooltip\"\n              },\n              {\n                \"type\": \"button\",\n                \"click\": {\n                  \"actions\": [\n                    {\n                      \"text\": \"Business\",\n                      \"type\": \"publishText\"\n                    }\n                  ]\n                },\n                \"title\": \"Business\",\n                \"tooltip\": \"button tooltip\"\n              },\n              {\n                \"type\": \"button\",\n                \"click\": {\n                  \"actions\": [\n                    {\n                      \"text\": \"Other\",\n                      \"type\": \"publishText\"\n                    }\n                  ]\n                },\n                \"title\": \"Other\",\n                \"tooltip\": \"button tooltip\"\n              }\n            ]\n          }\n        }"
          }
        ],
        "response_type": "text",
        "selection_policy": "sequential"
      }
    ]
  }
}
```
Figure 2.5 Structured Content Watson JSON Example (IAM)

### Change Time To Response of Conversation

Change the TTR of a conversation based on the action response of Watson. There have 4 different types. "URGENT", "NORMAL", "PRIORITIZED", "CUSTOM". Only the "CUSTOM" can set a value. The unit of the value is second. And the value of the others are defined in the Agent Workspace. 

```json
{
    "output" : {
          "text" : {
                 "values" : [
                        "Sure thing! Change the TTR to 50 minutes."
                  ],
                  "selection_policy" : "sequential"
           },
          "actions" : [
                 {
                     "name" : "CHANGE_TTR",
                     "type" : "CLIENT",               
                     "parameters" : {
                        "ttrType" : "CUSTOM",
                        "value" : 3000  
                     },
                     "result_variable" : "none"
                 }   
           ]
     }
}
```
Figure 2.6 Watson JSON response for changing TTR

### Transfer/Escalations

Transfers and escalations are straightforward in both chat and messaging. At the beginning of a chat session or when a messaging bot logs in, all the list of enabled skills on the account are retrieved, keyed by name and stored. When a transfer is requested by the bot, the skill name is matched to one already on the account and the id is retrieved and escalated to. In regards to **Watson Assistant**, this should be configured in the following way:

<img style="width:850px" src="img/watsonassistant/image_6.png">

In the *Then respond with:* JSON editor block, we see the following:

```json
{
  "output" : {
    "text" : {
      "values" : [
            "Sure thing! Escalating you to a live agent now."
      ],
      "selection_policy" : "sequential"
    },
    "actions" : [
      {
        "name" : "TRANSFER",
        "type" : "CLIENT",               
        "parameters" : {
          "skill" : "BOT-TRANSFER-OUT"
        },
        "result_variable" : "none"
      }   
    ]
  }
}
```
Figure 2.7 Watson JSON response for escalation


Above is the *actions* array. Here, we have a escalation skill name in the *skill* parameter. This is the name of our skill for escalation. This will be sent in the BOSO object to the chat/messaging connector, which will grab the skillId from an array based on the name, and escalate.

### Close Chat/Conversation

To close a chat or messaging conversation, we utilize the action object as we did for a transfer (see **Figure 2.6**). In **Figure 2.7** below, the **Watson Assistant** JSON response should be mirrored as follows:

```json
{
    "output" : {
          "text" : {
                 "values" : [
                        "Thank you for speaking with us today!"
                  ],
                  "selection_policy" : "sequential"
           },
          "actions" : [
                 {
                        "name" : "CLOSE_CONVERSATION",
                        "type" : "client",
                        "result_variable" : "none"
                 }
           ],
     }
}
```
Figure 2.8 Watson Assistant JSON response for closing chat/conversation