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

The following documentation outlines the configuration for the connector and how to implement functions specifically for **IBM Watson**.

### Bot Configuration

{: .important}
See the [Getting Started](bot-connectors-getting-started.html) guide first to complete pre-requisite steps.

With watson there are two ways of authentication that currently our system support, these are UserPass and IAM (token based) authentication. You can choose one of them for your bot configuration.

#### UserPass authentication

You will be presented with following screen to complete the Vendor Settings in order to add bot connector using UserPass authentication.

<img class="fancyimage" style="width:600px" src="img/watsonassistant/userpass-based-auth.png">

Figure 1.1 Showing the configuration that needed to be filled using UserPass authentication

Following information needs to be completed for LivePerson:

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
    <td>Workspace URL</td>
    <td>Watson Assistant Workspace URL</td>
    <td>https://gateway.watsonplatform.net/conversation/api</td>
  </tr>
  <tr>
    <td>Workspace ID</td>
    <td>Watson Assistant Workspace ID</td>
    <td>8671e9a1-xxxx-xxxx-xxxx-xxxxf9dfcb74</td>
  </tr>
  <tr>
    <td>Conversation Username</td>
    <td>Username of the Watson Assistant conversation</td>
    <td>de0a48a5-9f4f-xxxx-xxxx-xxxxx9856751</td>
  </tr>
  <tr>
    <td>Conversation Password</td>
    <td>password for the Watson Assistant conversation which should be used for the bot</td>
    <td>Dxxxxxxxxxx1</td>
  </tr>
  <tr>
    <td>Version Date</td>
    <td>Version Date of the Watson API</td>
    <td>201X-xx-xx<br><br><br></td>
  </tr>
  </tbody>
</table>

#### IAM authentication

You will be presented with following screen to complete the Vendor Settings in order to add bot connector using IAM authentication.

<img class="fancyimage" style="width:600px" src="img/watsonassistant/token-based-auth.png">

Figure 1.2 Showing the configuration that needed to be filled using IAM authentication authentication

Following information needs to be completed for LivePerson:

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
    <td>Workspace URL</td>
    <td>Watson Assistant Workspace URL</td>
    <td>https://gateway.watsonplatform.net/conversation/api</td>
  </tr>
  <tr>
    <td>Workspace ID</td>
    <td>Watson Assistant Workspace ID</td>
    <td>8671e9a1-xxxx-xxxx-xxxx-xxxxf9dfcb74</td>
  </tr>
  <tr>
    <td>API key</td>
    <td>API key which will be used for the Bot's authentication in Watson</td>
    <td>xxxxxxxxxxxxxxxxxxxxx_xxxxxxxxxxxxxxxxxxxxZG</td>
  </tr>
  <tr>
    <td>Token endpoint url</td>
    <td>URL for creating/refreshing Watson Assistant tokens</td>
    <td>Dxxxxxxxxxx1</td>
  </tr>
  <tr>
    <td>Version Date</td>
    <td>Version Date of the Watson API</td>
    <td>201X-xx-xx<br><br><br></td>
  </tr>
  </tbody>
</table>

#### Test Connection

{: .important}
You have to agree to Data Disclaimer from now onward in order to use the services of bot connector. For that you can click on the checkbox "I agree to the Data Disclaimer

For validation of the credentials provided, you can now perform a test connection request to see if everything that you have provided is working and reachable. You can click on the button "Test Connection" to see if connection succeed or fail. For UserPass authentication see in Figure 1.3 and 1.4. For IAM authentication see in Figure 1.5 and 1.6.

<img class="fancyimage" style="width:600px" src="img/watsonassistant/userpass-connection-success.png">

Figure 1.3 Showing the success case of the valid credentials for UserPass authentication

<img class="fancyimage" style="width:600px" src="img/watsonassistant/userpass-connection-failed.png">

Figure 1.4 Showing the fail case of the invalid credentials for UserPass authentication
<img class="fancyimage" style="width:600px" src="img/watsonassistant/token-connection-success.png">

Figure 1.5 Showing the success case of the valid credentials for IAM authentication

<img class="fancyimage" style="width:600px" src="img/watsonassistant/token-connection-failed.png">

Figure 1.6 Showing the fail case of the invalid credentials for IAM authentication

Once you are done with providing configuration you can save it by pressing on "Done". **_Congratulations!_** You have completed the configuration of the Watson Assistant bot.

{: .important}
Following guide is going to present customization for the Watson Assistant on how to implement functions specifically for **IBM Watson**. It is intended for users who are familiar with IBM Watson cloud dashboard. Continue if you are familiar and have access to IBM Watson cloud dashboard.

### Sending Rich Content (Structured Content)

The core LiveEngage platform supports the use of rich/structured content. For more information on the format and functionality available, please refer to the documentation found [here](getting-started-with-rich-messaging-introduction.html). As a result, the Bot Connector also supports this.

To send structured content via Watson Assistant you will need send custom JSON. To do this, you will need to select the dialog node that will hold the structured content (Figure 2.1).

<img class="fancyimage" style="width:850px" src="img/watsonassistant/dialognode.png">

Figure 2.1 Watson Dialog Node

From there, under the section Then respond with: Click the three vertical dots and select Open JSON Editor (Figure 2.2)

<img class="fancyimage" style="width:500px" src="img/watsonassistant/dialogjsoneditor.png">

Figure 2.2 Watson Assistant Dialog JSON Editor

In the JSON Editor you will need to add your custom JSON response (Figure 2.3).

<img class="fancyimage" style="width:500px" src="img/watsonassistant/jsoneditor.png">

Figure 2.3 Watson Assistant JSON Editor

There is a strict JSON structure for the response that must be used. The JSON structure can be found below in **Figure 2.4** with a sample JSON example that uses a standard Structured Content card with a button option in **Figure 2.5**.

```json
{
  "output": {
    "text": {
      "values": [
        {
          "metadata": [
            {
              "id": "1234",
              "type": "ExternalId"
            }
          ],
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
          "metadata": [
            {
              "id": "1234",
              "type": "ExternalId"
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

For new IAM workspaces that have a new Watson response, _Then respond with_ text:

<img class="fancyimage" style="width:400px" src="img/watsonassistant/image_5.png">

Put the structured content objects with the metadata in the text field for the response.

```json
{
  "output": {
    "generic": [
      {
        "values": [
          {
            "output": {
              "text": {
                "values": [
                  {
                    "metadata": [
                      {
                        "id": "1234",
                        "type": "ExternalId"
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
                ],
                "selection_policy": "sequential"
              }
            }
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
  "output": {
    "text": {
      "values": ["Sure thing! Change the TTR to 50 minutes."],
      "selection_policy": "sequential"
    }
  },
  "actions": [
    {
      "name": "CHANGE_TTR",
      "type": "CLIENT",
      "parameters": {
        "ttrType": "CUSTOM",
        "value": 3000
      },
      "result_variable": "none"
    }
  ]
}
```

Figure 2.6 Watson JSON response for changing TTR

### Transfer/Escalations

<div class="notice">
<strong>Naming Conventions:</strong> Before going into <strong>actions</strong> and <strong>skills</strong> is the naming convention between each.

All non-escalation actions are defined by using underscores. For example, in the case of closing a conversation, the action name returned by <strong>Watson</strong> needs to be <strong>CLOSE_CONVERSATION</strong>. Further down the line, if any additional functionality is added that can be called by an action from the AI, it will follow the same naming convention.

For escalations, the naming convention for these skills should use a "-" instead of "\_". Furthermore, if transferring to a skill, specifically assigned to bots, it’s best practice to prefix the skill name with "BOT-" within LiveEngage.

</div>

Transfers and escalations are straightforward in both chat and messaging. At the beginning of a chat session or when a messaging bot logs in, all the list of enabled skills on the account are retrieved, keyed by name and stored. When a transfer is requested by the bot, the skill name is matched to one already on the account and the id is retrieved and escalated to. In regards to **Watson Assistant**, this should be configured in the following way:

<img class="fancyimage" style="width:850px" src="img/watsonassistant/image_6.png">

In the _Then respond with:_ JSON editor block, we see the following:

```json
{
  "output": {
    "text": {
      "values": ["Escalating to a human"]
    }
  },
  "actions": [
    {
      "name": "TRANSFER",
      "type": "client",
      "parameters": {
        "skill": "human_skill"
      },
      "result_variable": "none"
    }
  ]
}
```

Figure 2.7 Watson JSON response for escalation

Above is the _actions_ array. Here, we have a escalation skill name in the _skill_ parameter. This is the name of our skill for escalation. This will be sent in the BOSO object to the chat/messaging connector, which will grab the skillId from an array based on the name, and escalate.

### Close Chat/Conversation

To close a chat or messaging conversation, we utilize the action object as we did for a transfer (see **Figure 2.6**). In **Figure 2.7** below, the **Watson Assistant** JSON response should be mirrored as follows:

```json
{
  "output": {
    "text": {
      "values": ["Thanks for chatting with us today!"],
      "selection_policy": "sequential"
    }
  },
  "actions": [
    {
      "name": "CLOSE_CONVERSATION",
      "type": "client",
      "result_variable": "none"
    }
  ]
}
```

Figure 2.8 Watson Assistant JSON response for closing chat/conversation
