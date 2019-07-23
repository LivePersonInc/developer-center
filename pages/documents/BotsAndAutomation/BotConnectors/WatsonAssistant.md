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

{: .important}
Please note, that Watson does not support processing newline, tab and carriage-return characters. These symbols will be removed from any query that is sent to Watson via the provided connector.

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

### Sending Native Content

Watson Assistant allows user to define some native response types to the dialog nodes. The core LiveEngage platform supports the use of Watson Assistant native types that includes Image, List, Pause and Text. User can define single or multiple native contents per dialog.

{: .important}
Please note that Watson assistant API version of `2018-09-20` is used to support the native content response in Bot Connectors.

#### Image

User can define Image type using the IBM watson assistant dashboard. To do this, dialog node will need to selected that will hold image response. Click on the "Add response type" and select Image from the select box as shown in Figure 2.1.

<img class="fancyimage" style="width:850px" src="img/watsonassistant/Image-Select-Response.png">

Figure 2.1 Response type of Image is highlighted

Once image is selected you will be asked to fill the information. "Image Source" url must be provided. You can also describe the image title and description (example filled form is shown in the Figure 2.2).

**Note**: Image domains must be added to a whitelist via internal LivePerson configuration (Houston). Please note that you must add all domains to this list manually as wildcards are not supported. All domains must be HTTPS secure.

<img class="fancyimage" style="width:850px" src="img/watsonassistant/Image-Fields-Response.png">

Figure 2.2 Image fields filled example

#### List

User can define List type using the IBM watson assistant dashboard. To do this, dialog node will need to selected that will hold list response. Click on the "Add response type" and select Option from the select box as shown in Figure 2.3.

<img class="fancyimage" style="width:850px" src="img/watsonassistant/Option-Select-Response.png">

Figure 2.3 Response type of List is highlighted

Once the "Option" is selected the form need to be filled will be shown. You must provide "Title" and also "Description". Furthermore, different choices of options can be added via clicking "Add option" button. Once the button is clicked you will be asked to put a label of option and value. Make sure you fill both of them (example filled form shown in Figure 2.4).

<img class="fancyimage" style="width:850px" src="img/watsonassistant/Option-Fields-Response.png">

Figure 2.4 List fields filled example

#### Pause

User can define Pause type if they want to send some delay in responding. For adding this content type, dialog node will need to selected that will hold pause response. Click on the "Add response type" and select Pause option as shown in Figure 2.5

<img class="fancyimage" style="width:850px" src="img/watsonassistant/Pause-Select-Response.png">

Figure 2.5 Response type of Pause is highlighted

Once the "Pause" is selected the form will ask you to provide the duration (unit is in milliseconds). This allows the conversation to be paused for the amount of time defined in "Duration" field. Moreover, If you want to show user a indication of typing you can select choose that with Typing Indicator radio box. (example filled form is shown in Figure 2.6). This will show a indication like "Agent is typing..." for the amount of time of delay that is set in "Duration".

<img class="fancyimage" style="width:850px" src="img/watsonassistant/Pause-Fields-Response.png">

Figure 2.6 Pause fields filled example

#### Text

User can define a Text type to send some textual response. For adding this type dialog node will need to selected that will hold text response. Click on the "Add response type" and select "Text" option as shown in Figure 2.7

<img class="fancyimage" style="width:850px" src="img/watsonassistant/Text-Select-Response.png">

Figure 2.7 Response type of Text is highlighted

Once the "Text" is selected the form will allow you to add the response texts. You can add multiple responses variation (example filled form is shown in Figure 2.8).

<img class="fancyimage" style="width:850px" src="img/watsonassistant/Text-Fields-Response.png">

Figure 2.8 Text fields filled example

### Sending Rich Content (Structured Content)

{: .important}
Please note that Watson assistant API version of `2018-09-20` is used to support the rich content response in Bot Connectors.

The core LiveEngage platform supports the use of rich/structured content. For more information on the format and functionality available, please refer to the documentation found [here](getting-started-with-rich-messaging-introduction.html). As a result, the Bot Connector also supports this.

To send structured content via Watson Assistant you will need send custom JSON. To do this, you will need to select the dialog node that will hold the structured content (Figure 3.1).

<img class="fancyimage" style="width:850px" src="img/watsonassistant/dialognode.png">

Figure 3.1 Watson Dialog Node

From there, under the section Then respond with: Click the three vertical dots and select Open JSON Editor (Figure 3.2)

<img class="fancyimage" style="width:500px" src="img/watsonassistant/dialogjsoneditor.png">

Figure 3.2 Watson Assistant Dialog JSON Editor

In the JSON Editor you will need to add your custom JSON response (Figure 3.3).

<img class="fancyimage" style="width:500px" src="img/watsonassistant/jsoneditor.png">

Figure 3.3 Watson Assistant JSON Editor

There is a strict JSON structure for the response that must be used. The JSON structure can be found below in **Figure 3.4** with a sample JSON example that uses a standard Structured Content card with a button option in **Figure 3.5**.

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

Figure 3.4 Structured Content Watson JSON Structure

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

Figure 3.5 Structured Content Watson JSON Example

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

Figure 3.6 Structured Content Watson JSON Example (IAM)

For using [quickReplies](quick-replies-introduction-to-quick-replies.html), we require a special formatting of the structured content.
The quick replies rich content should be added to the quickReplies property of the structuredContent object, and also a message should be included.
This message will be sent to the customer along with the quick replies. **Figure 3.7** **Figure 3.8**

```json
{
  "structuredContent": {
    "quickReplies": {
      // insert quickReplies rich content here as described here
      //https://developers.liveperson.com/quick-replies-introduction-to-quick-replies.html
      "type": "quickReplies",
      "replies": [...],
      "itemsPerRow": 8
    },
    "message": "Message to send before sending QuickReplies content"
  },
  "metadata": [
    {
      "id": "1234",
      "type": "ExternalId"
    }
  ]
}

```

Figure 3.7 Quick Replies StructuredContent structure.

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
          }
        }
      ],
      "selection_policy": "sequential"
    }
  }
}
```

Figure 3.8 Watson Quick Replies StructuredContent example.

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

Figure 4.1 Watson JSON response for changing TTR

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

Figure 5.1 Watson JSON response for escalation

Above is the _actions_ array. Here, we have a escalation skill name in the _skill_ parameter. This is the name of our skill for escalation. This will be sent in the BOSO object to the chat/messaging connector, which will grab the skillId from an array based on the name, and escalate.

### Close Chat/Conversation

To close a chat or messaging conversation, we utilize the action object as we did for a transfer (see **Figure 5.1**). In **Figure 6.1** below, the **Watson Assistant** JSON response should be mirrored as follows:

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

Figure 6.1 Watson Assistant JSON response for closing chat/conversation
