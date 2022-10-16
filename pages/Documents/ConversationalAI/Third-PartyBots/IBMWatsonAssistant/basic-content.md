---
pagename: Basic Content
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: IBM Watson Assistant
permalink: third-party-bots-ibm-watson-assistant-basic-content.html
indicator:
---

{: .attn-alert}
**Please note** that the new IBM Watson Assistant experience is not fully supported yet. So please switch to the
classic experience using this [guide](https://cloud.ibm.com/docs/watson-assistant?topic=watson-assistant-welcome-new-assistant)

{: .attn-note}
Following guide is going to present customization for the Watson Assistant on how to implement functions specifically for **IBM Watson**.
It is intended for users who are familiar with IBM Watson cloud dashboard. Continue if you are familiar and have access to IBM Watson cloud dashboard.

### Sending Native Content

Watson Assistant allows the user to define native response types to the dialog nodes. The supported Watson Assistant native types
include Image, List, Pause, and Text. Users can define single or multiple native content per dialog. The native content types can
be defined with Watson wizard or using the JSON editor (Figure 2.1 shows how to access both ways in IBM Watson website).

<img class="fancyimage" style="width:100%" src="img/watsonassistant/watson-json-editor.png" alt="">

Figure 2.1 IBM Watson Native Rich Content Wizard and JSON Editor

{: .attn-note}
**Please note** that Watson assistant API version of `2018-09-20` is used to support the native content response in Third-Party Bots.

If you use **JSON Editor** then the usual body of the native content is as follows:

```json-doc
{
  "output": {
    "generic": [
      // Here comes array of objects of different Watson native contents that you can define.
    ]
  }
}
```

#### Image

User can define Image type using the IBM watson assistant dashboard. To do this, dialog node will need to selected that will hold
image response. Click on the "Add response type" and select Image from the select box as shown in Figure 2.2.

<img class="fancyimage" style="width:850px" src="img/watsonassistant/Image-Select-Response.png" alt="">

Figure 2.2 Response type of Image is highlighted

Once image is selected you will be asked to fill the information. "Image Source" url must be provided. You can also describe the
image title and description (example filled form is shown in the Figure 2.3).

{: .attn-alert}
Image URLs must be added to a whitelist via internal LivePerson configuration (Houston: `messaging.rich.content.valid.urls`).
Please note that you must add all possible domains to this list manually as wildcards are not supported. Moreover, All domains
must be HTTPS secure.

<img class="fancyimage" style="width:850px" src="img/watsonassistant/Image-Fields-Response.png" alt="">

Figure 2.3 Image fields filled example

If you are using **JSON editor** you can add a Image type by posting following JSON. Please make sure to change **"source"**,
**"title"** and **"description"** property with your data.

```json
{
  "output": {
    "generic": [
      {
        "source": "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg",
        "title": "iPhone 8 Concept",
        "description": "iPhone 8 concept image showing initial details about phone",
        "response_type": "image"
      }
    ]
  }
}
```

#### List

User can define List type using the IBM watson assistant dashboard. To do this, dialog node will need to selected that
will hold list response. Click on the "Add response type" and select Option from the select box as shown in Figure 2.4.

<img class="fancyimage" style="width:850px" src="img/watsonassistant/Option-Select-Response.png" alt="">

Figure 2.4 Response type of List is highlighted

Once the "Option" is selected the form need to be filled will be shown. You must provide "Title" and also "Description".
Furthermore, different choices of options can be added via clicking "Add option" button. Once the button is clicked you
will be asked to put a label of option and value. Make sure you fill both of them (example filled form shown in Figure 2.5).

<img class="fancyimage" style="width:850px" src="img/watsonassistant/Option-Fields-Response.png" alt="">

Figure 2.5 List fields filled example

If you are using **JSON Editor** then you have following structure of List. Note that **"options"** property is array of objects
which holds the items for choosing are presented to user.

```json-doc
{
  "output": {
    "generic": [
      {
        "title": "",
        "description": "",
        "options": [
          // Here comes the list of options you want to present to user
        ],
        "response_type": "option"
      }
    ]
  }
}
```

An example list filled with two options can be seen below. Please note that within options object, "text" **(value->input->text)**
is the value that you set for an option.

```json
{
  "output": {
    "generic": [
      {
        "title": "Choose your Phone",
        "description": "Select the phone you like",
        "options": [
          {
            "label": "iOS",
            "value": {
              "input": {
                "text": "1"
              }
            }
          },
          {
            "label": "Android",
            "value": {
              "input": {
                "text": "2"
              }
            }
          }
        ],
        "response_type": "option"
      }
    ]
  }
}
```

#### Pause/Delay

{: .attn-note}
**Note:** Using the delay as a single/sole response from the bot to the consumer, is effectively a ‘no response’ action. Using this allows the bot to receive a consumer message without responding to the consumer.

Users can define Pause type if they want to send some delay in responding. For adding this content type, the dialog node
will need to select that will hold pause response. Click on the "Add response type" and select Pause option as shown in Figure 2.6

<img class="fancyimage" style="width:850px" src="img/watsonassistant/Pause-Select-Response.png" alt="">

Figure 2.6 Response type of Pause is highlighted

Once the "Pause" is selected the form will ask you to provide the duration (unit is in milliseconds). This allows the
conversation to be paused for the amount of time defined in "Duration" field. Moreover, If you want to show user a
indication of typing you can select choose that with Typing Indicator radio box. (example filled form is shown in Figure 2.7).
This will show a indication like "Agent is typing…" for the amount of time of delay that is set in "Duration".

<img class="fancyimage" style="width:850px" src="img/watsonassistant/Pause-Fields-Response.png" alt="">

Figure 2.7 Pause fields filled example

If you are using **JSON Editor** you can use the following JSON structure to define a Pause content type. This example
will pause for 5 milliseconds with typing indication on.

```json
{
  "output": {
    "generic": [
      {
        "time": 5,
        "typing": true,
        "response_type": "pause"
      }
    ]
  }
}
```

#### Text

Users can define a Text type to send some textual response. For adding this type dialog node will need to select
that will hold text response. Click on the "Add response type" and select "Text" option as shown in Figure 2.8

<img class="fancyimage" style="width:850px" src="img/watsonassistant/Text-Select-Response.png" alt="">

Figure 2.8 Response type of Text is highlighted

Once the "Text" is selected the form will allow you to add the response texts. You can add multiple responses variation
(example filled form is shown in Figure 2.9).

<img class="fancyimage" style="width:850px" src="img/watsonassistant/Text-Fields-Response.png" alt="">

Figure 2.9 Text fields filled example

If you are using **JSON Editor** you can use following JSON structure to create text responses. The example below shows
two text responses defined that will come sequentially.

```json
{
  "output": {
    "generic": [
      {
        "response_type": "text",
        "values": [
          {
            "text": "Hi Good Morning!"
          },
          {
            "text": "Hi Good Evening!"
          }
        ],
        "selection_policy": "sequential"
      }
    ]
  }
}
```

#### Defining multiple responses with Watson Native content

Users can define a response with various content types. The following example shows a similar case using **JSON Editor**. The response will first send the text. Afterwards, it will make a pause for 5 seconds and then finally sends an image.

```json
{
  "output": {
    "generic": [
      {
        "values": [
          {
            "text": "Hi Good Morning!"
          },
          {
            "text": "Hi Good Evening!"
          }
        ],
        "response_type": "text",
        "selection_policy": "sequential"
      },
      {
        "time": 5000,
        "typing": true,
        "response_type": "pause"
      },
      {
        "title": "iPhone 8",
        "source": "https://cdn.bgr.com/2016/08/iphone-8-concept.jpg",
        "description": "iPhone 8 concept",
        "response_type": "image"
      }
    ]
  }
}
```

### Sending Rich Content (Structured Content)

{: .attn-alert}
If Images are sent in Rich Content, then their URLs must be added to a whitelist via internal LivePerson
configuration (Houston: `messaging.rich.content.valid.urls`). Please note that you must add all possible
domains to this list manually as wildcards are not supported. Moreover, All domains must be HTTPS secure.

{: .attn-note}
**Please note** that Watson assistant API version of `2018-09-20` is used to support the rich content response
in Third-Party Bots.

The core Conversational Cloud platform supports the use of rich/structured content. For more information on the
format and functionality available, please refer to the documentation found [here](getting-started-with-rich-messaging-introduction.html).
As a result, the Bot Connector also supports this.

To send structured content via Watson Assistant you will need send custom JSON. To do this, you will need to
select the dialog node that will hold the structured content (Figure 2.10).

<img class="fancyimage" style="width:850px" src="img/watsonassistant/dialognode.png" alt="">

Figure 2.10 Watson Dialog Node

From there, under the section Then respond with: Click the three vertical dots and select Open JSON Editor (Figure 2.11)

<img class="fancyimage" style="width:500px" src="img/watsonassistant/dialogjsoneditor.png" alt="">

Figure 2.11 Watson Assistant Dialog JSON Editor

In the JSON Editor you will need to add your custom JSON response (Figure 2.12).

<img class="fancyimage" style="width:500px" src="img/watsonassistant/jsoneditor.png" alt="">

Figure 2.12 Watson Assistant JSON Editor

There is a strict JSON structure for the response that must be used. The JSON structure can be found below in **Figure 2.13**.
An example with a sample JSON that uses a standard Structured Content card with a button option in can be seen in **Figure 2.14**.

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

Figure 2.13 Structured Content Watson JSON Structure (JSON Editor should contain this object structure for Rich Content)

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

Figure 2.14 Structured Content Watson JSON Example (JSON Editor should contain this object structure for Rich Content)

#### Structured Content Watson JSON Example (IAM)

For new IAM workspaces that have a new Watson response, `Then respond with` "text" should be used:

<img class="fancyimage" style="width:400px" src="img/watsonassistant/image_5.png" alt="">

Put the structured content objects that is shown in Figure 2.15 with the metadata in the text field.

```json
{
  "metadata": [{ "id": "1234", "type": "ExternalId" }],
  "structuredContent": {
    "type": "vertical",
    "elements": [
      {
        "type": "button",
        "click": {
          "actions": [
            { "text": "Recommend me a movie, please", "type": "publishText" }
          ]
        },
        "title": "Recommend a movie"
      }
    ]
  }
}
```

Figure 2.15 Structured Content Watson JSON Example (IAM)

### Sending Quick Replies (Structured Content)

{: .attn-note}
**Please note** Quick Replies are only supported in Messaging Conversations.

Quick Replies are a special kind of the Structured Content.
The content should be added to the quickReplies property of the structuredContent object and there also
a message be included in the structuredContent object.
This message will be sent to the customer along with the Quick Replies.
For detailed information on Quick Replies check out the documentation for the specific channel
([Mobile SDK and Web](mobile-sdk-and-web-templates-quick-replies-template.html),
[Facebook Messenger](facebook-messenger-templates-quick-replies-template.html), [Google RCS Business Messaging](google-rcs-business-messaging-templates-quick-replies-template.html)).

```json
{
  "structuredContent": {
    "quickReplies": {
      "type": "quickReplies",
      "itemsPerRow": 8,
      "replies": [
        {
          "type": "button",
          "tooltip": "yes I do",
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

Figure 2.16 Quick Replies StructuredContent example.

### Bot Actions

{: .attn-alert}
Please note we only support **ONE ACTION** per response

#### Transfer / Escalations

{: .attn-alert}
**Naming conventions:** Before going into **actions** and **skills** is the naming convention between each. All non-escalation actions are defined by using underscores. For example, in the case of closing a conversation, the action name returned by **Watson** needs to be **CLOSE\_CONVERSATION**.

Further down the line, if any additional functionality is added that can be called by an action from the AI, it will follow the same naming convention. For escalations, the naming convention for these skills should use a "-" instead of whitespace. Furthermore, if transferring to a skill, specifically assigned to bots, it’s best practice to prefix the skill name with "BOT-" within Conversational Cloud.

#### Transfer To Skill

This option transfers the conversation to the next available agent using the provided skill.

At the beginning of a chat session or when a messaging bot logs in, all the list of enabled skills on
the account are retrieved, keyed by name and stored. When a transfer is requested by the bot, the target
skill's name is searched in the stored list and its ID is retrieved and escalated to. In regards to **Watson Assistant**,
this should be configured in the following way:

Parameters: ‘skill’ **(Case sensitive)** with ‘value’ of skill name (case sensitive) in Conversational Cloud.

<img class="fancyimage" style="width:850px" src="img/watsonassistant/image_6.png" alt="">

Figure 2.17

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

In the example above, you can see the `actions` array. Inside the array, we define an escalation skill name
in the `skill` parameter. This will be sent in an object to the chat/messaging connector, which will grab the
`skillId` from a previously stored array based on the name, and escalate.

#### Transfer to Agent

{: .attn-note}
This feature is depending on [permissions](https://knowledge.liveperson.com/contact-center-management-messaging-operations-transfer-to-agent.html#permissions)

This option transfers the conversation to the particular agent matching the provided agentId and skill.
If the agent is not available, the conversation will be transferred to an available agent with the same skill

Parameters: ‘skill’ **(Case sensitive)** with ‘value’ of skill name (case sensitive) in Conversational Cloud.
‘agentId **(Case sensitive)** with ‘value’ of agentId in Conversational Cloud.

<img class="fancyimage" style="width:850px" src="img/watsonassistant/image_7.png" alt="">

Figure 2.18

In the `Then respond with:` JSON editor block, use the following:

```json
{
  "output": {
    "text": {
      "values": ["Escalating to an agent"]
    }
  },
  "actions": [
    {
      "name": "TRANSFER",
      "type": "client",
      "parameters": {
        "skill": "human_skill",
        "agentId": "4129463410"
      },
      "result_variable": "none"
    }
  ]
}
```

#### Close Conversation

To close a chat or messaging conversation, we utilize the action object as we did for a transfer (see **Figure 2.18**).
In **Figure 2.19** below, the **Watson Assistant** JSON response should be mirrored as follows:

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

Figure 2.19 Watson Assistant JSON response for closing chat/conversation

To close a conversation without triggering a post conversation survey, see the example below in Figure 2.20:

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
      "parameters": {
        "withoutPcs": true
      },
      "result_variable": "none"
    }
  ]
}
```

Figure 2.20 Watson Assistant JSON response for closing conversations without pcs

#### Change Time To Response of Conversation

Change the TTR of a conversation based on the action response of Watson. There have 3 different types.
"URGENT", "NORMAL", "PRIORITIZED". The time values of these are defined in the Agent Workspace.

```json
{
  "output": {
    "text": {
      "values": ["Sure thing! Change the TTR to Urgent."],
      "selection_policy": "sequential"
    }
  },
  "actions": [
    {
      "name": "CHANGE_TTR",
      "type": "client",
      "parameters": {
        "ttrType": "URGENT"
      },
      "result_variable": "none"
    }
  ]
}
```

Figure 2.21 Watson JSON response for changing TTR
