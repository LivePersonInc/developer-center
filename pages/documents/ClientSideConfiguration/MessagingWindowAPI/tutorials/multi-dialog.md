---
pagename: Post Conversation Survey (PCS)
redirect_from:
  - messaging-window-api-tutorials-post-conversation-survey.html
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Messaging Window API
subfoldername: Tutorials

order: 91
permalink: messaging-window-api-tutorials-post-conversation-survey-pcs.html

indicator: messaging
---

In this tutorial we will demonstrate how to enable the consumer getting Post Conversation Survey sent by the agent at the end of the conversation. This tutorial is referring to the (new) Post Conversation Survey (PCS) and not to the (older) [existing survey solution](messaging-window-api-tutorials-post-conversation-survey-csat.html) where a single CSAT question can be presented to the consumer when the conversation ends.

**Note**:

* Once the PCS is configured & working, it will be presented instead of the old one (CSAT) i.e. it there is no situation in which both are working together.

### Multi-Dialog Conversation

* Up until now the Conversation contained only one dialog type (``MAIN``) holding the main messaging conversation. In order to support the new Post Conversation Survey we developed a Multi-Dialog Conversation concept. This means that the Conversation is a container for dialogs. There can be multiple types of dialogs where each dialog has also channel type.

* The new dialog type is ``POST_SURVEY`` of channel type ``MESSAGING`` as well. This dialog holds the messaging conversation between a consumer and a survey bot. The purpose of the dialog is to provide the sub context of the conversation.

* The API was enhanced to support multi dialog by providing an ability to close a specific dialog, for Example:

```json
{
  "kind": "req",
  "id": "2",
  "type": "cm.UpdateConversationField",
  "body": {
    "conversationId": "Conversation ID",
    "conversationField": {
      "field": "DialogChange",
      "type": "UPDATE",
      "dialog": {
        "dialogId": "Dialog ID",
        "state": "CLOSE",
        "closedCause": "Closed by consumer"
      }
    }
  }
}
```

### Prerequisites

* Configure the Post Conversation Survey (PCS) and get familiar with it. Please refer [here](https://s3-eu-west-1.amazonaws.com/ce-sr/botstudio/Conversation+Survey+-+Configuration+Guide.pdf) for more information.

* At the end of the [Getting Started](consumer-int-getting-started.html) tutorial, we created the ``lp.env`` file. In order to launch ``lp-shell`` with your previous settings, type the following:

```sh
docker run --env-file lp.env -it lpinc/shell
```
You should get a shell line.

Make sure that you have closed any previous conversation sessions by clicking ``Close conversation`` in the Agent Workspace.

### Step 1 - Activate the MULTI_DIALOG feature for your conversation

In order to indicate to LivePerson that your custom window supports multi dialog you must provide the “MULTI_DIALOG” feature in the client properties, for example:

{
  "type": ".ClientProperties",
  "appId": "webAsync",
  "integrationVersion": "3.0.5",
  "integration": "WEB_SDK",
  "features": [
    "RICH_CONTENT",
    "QUICK_REPLIES",
    "MULTI_DIALOG"
  ]
}

Refer to [Client Side Configuration](messaging-window-api-tutorials-client-properties.html) to see how to set LP_PROPS with the desired Client Properties. The command should look as follows:

```sh
LP_PROPS='{"type":".ClientProperties","appId":"webAsync","integrationVersion":"3.0.5","integration":"WEB_SDK","features":["AUTO_MESSAGES","RICH_CONTENT","CO_BROWSE","PHOTO_SHARING","QUICK_REPLIES","MULTI_DIALOG"]}'
```

### Step 2 - Find Your Consumer ID

When you get messages from the server, you must identify which messages were published by you, and which were published by the agent. To do so, you must know your ``consumerId``. To find out your ``consumerId``, refer to the content of the LP_JWT by base64-decoding the middle part of the JWT (between the two periods):

```sh
echo $LP_JWT | sed -e 's/.*\.\(.*\)\..*/\1/' | base64 --decode
```

You will now be able to see the content of the JWT:

```json
{
	"sub": "19f98cd2-63b9-42e4-bc0d-9222b86574e1",
	"aud": "acc:qa57221676",
	"iss": "https://idp.liveperson.net",
	"exp": 1879957364,
	"iat": 1469717324
}
```

The ``sub`` property contains your ``consumerId``.

**Note**: If you encounter issues when using the shell ``base64`` command, you can use online tools such as [base64decode.org](https://www.base64decode.org/).


### Step 3 - Open the WebSocket connection

Remember to include the **Client Properties** set earlier using the following command:

```sh
wscat -k 60 -H "Authorization:jwt $LP_JWT" -H "Client-Properties:$LP_PROPS" -c "wss://$LP_ASYNCMESSAGINGENT/ws_api/account/$LP_ACCOUNT/messaging/consumer?v=3"
```

Replace the ``__LP_ACCOUNT__`` with your account ID.

### Step 4 - Consumer subscribes to its own Conversations - SubscribeExConversations

```json
{"kind":"req","id":"3","type":"cqm.SubscribeExConversations","body":{"stage":["OPEN","CLOSE"],"convState":["OPEN","CLOSE"]}}
```

**Expected 200 Response**

```json
{
  "kind": "resp",
  "reqId": "3",
  "code": 200,
  "body": {
    "subscriptionId": "1e25cbe8-de08-4bb2-a100-f72a172a6e04"
  },
  "type": "cqm.SubscribeExConversationsResponse"
}
```

**Expected Notification**

* ``changes`` array is still empty since there are still no conversations  

```json
{
  "kind": "notification",
  "body": {
    "subscriptionId": "1e25cbe8-de08-4bb2-a100-f72a172a6e04",
    "changes": [

    ]
  },
  "type": "cqm.ExConversationChangeNotification"
}
```

### Step 5 - Consumer request conversation

**Note**:

* Upon Survey creation (BOT STUDIO) it has to be assigned to a skill. If no skills are assigned then the survey will not be triggered.

* In order to trigger the survey, start a conversation on the account and skill on which you’ve defined the survey and bring the conversation to an end, either from the consumer or the agent side.

* Only conversations with assigned skill with assigned survey will be able to trigger the survey.
If a conversation is “unassigned” no survey will be triggered.

* A survey is triggered based on the last skill of the conversation.

Request Example:

```json
{"kind":"req","id":"0","type":"cm.ConsumerRequestConversation","body":{"channelType":"MESSAGING","ttrDefName":null,"campaignInfo":{"campaignId":418732213,"engagementId":425842913},"conversationContext":{"visitorId":"NmNDQ5OWU1MjM1NjBlZTAz","sessionId":"DHE_fICSTZ2gx5IsljFcwQ","interactionContextId":"1","type":"SharkContext","lang":"en-US"}}}
```

In the response you will get the new conversationId.

```json
{
  "kind": "resp",
  "reqId": "0",
  "code": 200,
  "body": {
    "conversationId": "__YOUR_CONVERSATION_ID__"
  },
  "type": "cm.RequestConversationResponse"
}
```

### Step 6 - Consumer subscribes to the messaging events of the conversation - SubscribeMessagingEvents

Use the ``conversationId`` value you got in the previous step to populate the ``dialogId`` as well.

```json
{"kind":"req","id":"2","type":"ms.SubscribeMessagingEvents","body":{"dialogId":"__YOUR_CONVERSATION_ID__","conversationId":"__YOUR_CONVERSATION_ID__","fromSeq":0}}
```

**Expected 200 Response**

```json
{
  "kind": "resp",
  "reqId": "2",
  "code": 200,
  "body": {

  },
  "type": "GenericSubscribeResponse"
}
```
**Expected Notification**

```json
{
  "kind": "notification",
  "body": {
    "changes": [ ]
  },
  "type": "ms.MessagingEventNotification"
}
```

### Step 7 - Agent sends Messages

In this stage, switch to the Agent-Workspace and accept the ring of the incoming request. Click the blinking ``Accept`` button.

![agent-ring](img/ring.png)

Type a few messages in the Agent Workspace.

### Step 8 - Subscribe to Conversation Content

In order to get existing or new messages from the agent side, the consumer should subscribe to the content of the conversation. Substitute the ``__YOUR_CONVERSATION_ID__`` with the the ``conversationId`` you got in the response in the previous step, and paste it into the opened WebSocket.

```json
{"kind":"req","id":"2","type":"ms.SubscribeMessagingEvents","body":{"dialogId":"__YOUR_CONVERSATION_ID__","conversationId":"__YOUR_CONVERSATION_ID__","fromSeq":0}}
```
**Note**: you can use the message builder (<a href="consumer-int-msg-sub-events.html" target="_blank"><i class="fa fa-magic" aria-hidden="true"></i></a>) to build the above message.

In response, you will get a subscription success message:

```json
{"kind":"resp","reqId":"22","code":200,"type":".ams.GenericSubscribeResponse"}
```

You will now get all the existing content of the conversation:

```json
{
  "kind": "notification",
  "body": {
    "changes": [
      {
        "sequence": 0,
        "originatorId": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
        "originatorMetadata": {
          "id": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
          "role": "ASSIGNED_AGENT"
        },
        "serverTimestamp": 1538490042014,
        "event": {
          "type": "ContentEvent",
          "message": "Hello from the Agent",
          "contentType": "text/plain"
        },
        "dialogId": "__YOUR_CONVERSATION_ID__"
      }
    ]
  },
  "type": "ms.MessagingEventNotification"
}
```

You will notice that you get all the messages that were published by you, or by the agent. In order to find which messages were published by you, refer to the ``originatorId`` field. Messages that were published by you will have a value equal to the ``consumerId`` you found in [Step 2](messaging-window-api-tutorials-post-conversation-survey-pcs.html#step-2---find-your-consumer-id) while messages from the agent will have a different ``originatorId``.

**Notification Examples**

Agent is Typing (COMPOSING):

```json
{
  "kind": "notification",
  "body": {
    "changes": [
      {
        "originatorId": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
        "originatorMetadata": {
          "id": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
          "role": "ASSIGNED_AGENT"
        },
        "event": {
          "type": "ChatStateEvent",
          "chatState": "COMPOSING"
        },
        "conversationId": "__YOUR_CONVERSATION_ID__",
        "dialogId": "__YOUR_CONVERSATION_ID__"
      }
    ]
  },
  "type": "ms.MessagingEventNotification"
}
```

Agent sent a message

```json
{
  "kind": "notification",
  "body": {
    "changes": [
      {
        "sequence": 2,
        "originatorId": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
        "originatorMetadata": {
          "id": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
          "role": "ASSIGNED_AGENT"
        },
        "serverTimestamp": 1538492183879,
        "event": {
          "type": "ContentEvent",
          "message": "Hello again",
          "contentType": "text/plain"
        },
        "conversationId": "__YOUR_CONVERSATION_ID__",
        "dialogId": "__YOUR_CONVERSATION_ID__"
      }
    ]
  },
  "type": "ms.MessagingEventNotification"
}
```

Agent has stopped Typing

```json
{
  "kind": "notification",
  "body": {
    "changes": [
      {
        "originatorId": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
        "originatorMetadata": {
          "id": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
          "role": "ASSIGNED_AGENT"
        },
        "event": {
          "type": "ChatStateEvent",
          "chatState": "ACTIVE"
        },
        "conversationId": "__YOUR_CONVERSATION_ID__",
        "dialogId": "__YOUR_CONVERSATION_ID__"
      }
    ]
  },
  "type": "ms.MessagingEventNotification"
}
```

### Step 9 - Consumer sends a message

Use the following request to send a message on behalf of the consumer:

```json
{"kind":"req","id":"4","type":"ms.PublishEvent","body":{"dialogId":"__YOUR_CONVERSATION_ID__","conversationId":"__YOUR_CONVERSATION_ID__","event":{"type":"ContentEvent","contentType":"text/plain","message":"Hello from the consumer"}}}
```

**Expected 200 Response**

```json
{"kind":"resp","reqId":"4","code":200,"body":{"sequence":4},"type":"ms.PublishEventResponse"}
```

**Expected Notifications**

Message received from the consumer

```json
{
  "kind": "notification",
  "body": {
    "changes": [
      {
        "sequence": 3,
        "originatorId": "5e9ee96c-226e-44b6-ac51-b1dfe494ba10",
        "originatorMetadata": {
          "id": "5e9ee96c-226e-44b6-ac51-b1dfe494ba10",
          "role": "CONSUMER"
        },
        "serverTimestamp": 1538493548533,
        "event": {
          "type": "ContentEvent",
          "message": "Hello from Consumer",
          "contentType": "text/plain"
        },
        "conversationId": "__YOUR_CONVERSATION_ID__",
        "dialogId": "__YOUR_CONVERSATION_ID__"
      }
    ]
  },
  "type": "ms.MessagingEventNotification"
}
```

Agent has accepted the message

```json
{
  "kind": "notification",
  "body": {
    "changes": [
      {
        "sequence": 4,
        "originatorId": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
        "originatorMetadata": {
          "id": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
          "role": "ASSIGNED_AGENT"
        },
        "serverTimestamp": 1538493548705,
        "event": {
          "type": "AcceptStatusEvent",
          "status": "ACCEPT",
          "sequenceList": [
            4
          ]
        },
        "conversationId": "__YOUR_CONVERSATION_ID__",
        "dialogId": "__YOUR_CONVERSATION_ID__"
      }
    ]
  },
  "type": "ms.MessagingEventNotification"
}
```

Agent has read the message

```json
{
  "kind": "notification",
  "body": {
    "changes": [
      {
        "sequence": 7,
        "originatorId": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
        "originatorMetadata": {
          "id": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
          "role": "ASSIGNED_AGENT"
        },
        "serverTimestamp": 1538494337103,
        "event": {
          "type": "AcceptStatusEvent",
          "status": "READ",
          "sequenceList": [
            4
          ]
        },
        "conversationId": "__YOUR_CONVERSATION_ID__",
        "dialogId": "__YOUR_CONVERSATION_ID__"
      }
    ]
  },
  "type": "ms.MessagingEventNotification"
}
```

### Step 10 - Close the Conversation (The MAIN DIALOG)

 Before closing the conversation it is recommended to send an indication that the Consumer has stopped typing

```json
{"kind":"req","id":"2","type":"ms.PublishEvent","body":{"dialogId":"__YOUR_CONVERSATION_ID__","conversationId":"__YOUR_CONVERSATION_ID__","event":{"type":"ChatStateEvent","chatState":"ACTIVE"}}}
```

Response

```json
{"kind":"resp","reqId":"2","code":200,"body":{"sequence":0},"type":"ms.PublishEventResponse"}
```

Notification

```json
{
  "kind": "notification",
  "body": {
    "changes": [
      {
        "originatorId": "5e9ee96c-226e-44b6-ac51-b1dfe494ba10",
        "originatorMetadata": {
          "id": "5e9ee96c-226e-44b6-ac51-b1dfe494ba10",
          "role": "CONSUMER"
        },
        "event": {
          "type": "ChatStateEvent",
          "chatState": "ACTIVE"
        },
        "conversationId": "__YOUR_CONVERSATION_ID__",
        "dialogId": "__YOUR_CONVERSATION_ID__"
      }
    ]
  },
  "type": "ms.MessagingEventNotification"
}
```

Next, we do not actually close the Conversation. We only close the Main Dialog by addressing the conversation manager (cm) component in LiveEngage and request a DialogChange. This is done by using ``cm.UpdateConversationField``

```json
{"kind":"req","id":"2","type":"cm.UpdateConversationField","body":{"conversationId":"__YOUR_CONVERSATION_ID__","conversationField":{"field":"DialogChange","type":"UPDATE","dialog":{"dialogId":"__YOUR_CONVERSATION_ID__","state":"CLOSE","closedCause":"Closed by consumer"}}}}
```

**Note** :

* In the above case, the dialogId (MAIN) is the same value of its conversationId but in general that mustn't be the case.
for example, the Post-Survey would get a different dialogId.

Relevant fields:

``dialog id``: The id of the dialog to close <br />
``state``: Should be ``CLOSE`` in order to close the dialog <br />
``closedCause``: Describe why dialog was closed, mainly uses by the LiveEngage and Bots. Use ``Close by consumer`` when closing the conversation from the consumer side.

* In case dialog will be not active more than a week to dialog will be closed by the system (autoclose)

Ok Response Example

```json
{
  "kind": "resp",
  "reqId": "2",
  "code": 200,
  "body": "OK Conversation resolved successfully",
  "type": "StringResponse"
}
```

Afterwards the Post-Survey Should already appear and you can see it in the Agent Workspace.

![post-survey](img/post-survey.png)

Thanks to [Step 4](messaging-window-api-tutorials-post-conversation-survey-pcs.html#step-4---consumer-subscribes-to-its-own-conversations---subscribeexconversations) we get the following notification:

```json
{
  "kind": "notification",
  "body": {
    "subscriptionId": "1e25cbe8-de08-4bb2-a100-f72a172a6e04",
    "changes": [
      {
        "type": "UPSERT",
        "result": {
          "convId": "__YOUR_CONVERSATION_ID__",
          "effectiveTTR": -1,
          "conversationDetails": {
            "participants": [
              {
                "id": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
                "role": "ASSIGNED_AGENT"
              },
              {
                "id": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
                "role": "READER"
              },
              {
                "id": "5e9ee96c-226e-44b6-ac51-b1dfe494ba10",
                "role": "CONSUMER"
              },
              {
                "id": "2fa9ac85-d8a9-5bd6-8384-8c32dabae97f",
                "role": "AGENT"
              },
              {
                "id": "22815dea-5b5c-5c8f-a4bf-2e52a0f6820a",
                "role": "CONTROLLER"
              }
            ],
            "dialogs": [
              {
                "dialogId": "__YOUR_CONVERSATION_ID__",
                "participantsDetails": [
                  {
                    "id": "5e9ee96c-226e-44b6-ac51-b1dfe494ba10",
                    "role": "CONSUMER"
                  },
                  {
                    "id": "22815dea-5b5c-5c8f-a4bf-2e52a0f6820a",
                    "role": "CONTROLLER"
                  },
                  {
                    "id": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
                    "role": "ASSIGNED_AGENT"
                  }
                ],
                "dialogType": "MAIN",
                "channelType": "MESSAGING",
                "state": "CLOSE",
                "creationTs": 1538486163083,
                "endTs": 1538499226753,
                "metaDataLastUpdateTs": 1538499226753,
                "closedBy": "CONSUMER"
              },
              {
                "dialogId": "__YOUR_POST_SURVEY_DIALOG_ID__",
                "participantsDetails": [
                  {
                    "id": "5e9ee96c-226e-44b6-ac51-b1dfe494ba10",
                    "role": "CONSUMER"
                  },
                  {
                    "id": "2fa9ac85-d8a9-5bd6-8384-8c32dabae97f",
                    "role": "AGENT"
                  },
                  {
                    "id": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
                    "role": "READER"
                  }
                ],
                "dialogType": "POST_SURVEY",
                "channelType": "MESSAGING",
                "metaData": {
                  "appInstallId": "756e7363-4472-4ae1-b1ae-b3b0b52107a0"
                },
                "state": "OPEN",
                "creationTs": 1538499226752,
                "metaDataLastUpdateTs": 1538499227108
              }
            ],
            "brandId": "64467156",
            "state": "CLOSE",
            "stage": "OPEN",
            "closeReason": "CONSUMER",
            "startTs": 1538486163083,
            "metaDataLastUpdateTs": 1538499227108,
            "ttr": {
              "ttrType": "PRIORITIZED",
              "value": 600
            }
          }
        }
      }
    ]
  },
  "type": "cqm.ExConversationChangeNotification"
}
```

* You can see from the above notification that the Conversation has now a new ``stage`` field.<br />
``stage`` is new field in the ExConv notification that indicates the real conversation status (open/closed).<br />
``state`` will be deprecated and its new meaning is **Main dialog** open or closed.

### Step 11 - Re-subscribe to Conversation Content

* After the dialog change (main dialog closed, post dialog open) the consumer does no longer get messaging events on the conversation. Therefore you need to subscribe the consumer once again to the (new) open dialog.

* Use the above last notification from [Step 10](messaging-window-api-tutorials-post-conversation-survey-pcs.html#step-10---close-the-conversation-the-main-dialog) to extract the dialogId of the dialog with ``dialogType``: ``POST_SURVEY``.

* In order to get the post survey content and messaging events on the client side the consumer needs to execute [Step 6](messaging-window-api-tutorials-post-conversation-survey-pcs.html#step-6---consumer-subscribes-to-the-messaging-events-of-the-conversation---subscribemessagingevents) from above while the dialogId is set to __YOUR_POST_SURVEY_DIALOG_ID__

```json
{"kind":"req","id":"2","type":"ms.SubscribeMessagingEvents","body":{"dialogId":"__YOUR_POST_SURVEY_DIALOG_ID__","conversationId":"__YOUR_CONVERSATION_ID__","fromSeq":0}}
```
Response

```json
{"kind":"resp","reqId":"2","code":200,"body":{},"type":"GenericSubscribeResponse"}
```

Notification - Should include the Post-Survey (Example)

```json
{
  "kind": "notification",
  "body": {
    "changes": [
      {
        "sequence": 0,
        "originatorId": "2fa9ac85-d8a9-5bd6-8384-8c32dabae97f",
        "originatorMetadata": {
          "id": "2fa9ac85-d8a9-5bd6-8384-8c32dabae97f",
          "role": "AGENT"
        },
        "serverTimestamp": 1538499227634,
        "event": {
          "type": "ContentEvent",
          "message": "Hello, I’m the survey bot and I would like to collect your feedback following your past interaction. If you’d like to skip the whole survey type ‘skip’ at any point",
          "contentType": "text/plain"
        },
        "dialogId": "PwT_YK91Sum3vu5H6T3YnA",
        "metadata": null
      },
      {
        "sequence": 1,
        "originatorId": "2fa9ac85-d8a9-5bd6-8384-8c32dabae97f",
        "originatorMetadata": {
          "id": "2fa9ac85-d8a9-5bd6-8384-8c32dabae97f",
          "role": "AGENT"
        },
        "serverTimestamp": 1538499229625,
        "event": {
          "type": "ContentEvent",
          "message": "How would you rate your overall experience?",
          "contentType": "text/plain",
          "quickReplies": {
            "type": "quickReplies",
            "itemsPerRow": 8,
            "replies": [
              {
                "type": "button",
                "tooltip": "1😒",
                "title": "1😒",
                "style": {
                  "bold": false,
                  "size": "medium",
                  "italic": false,
                  "color": "#4d4e4e",
                  "background-color": "#ffffff",
                  "border-color": "#d0d2d3",
                  "border-radius": 14
                },
                "click": {
                  "metadata": [
                    {
                      "type": "Answer",
                      "questionId": "3e70da9b-76de-4c2a-911e-a41aee698b82",
                      "id": "4f7c6a7b-033b-4171-a361-abf99e0ea493",
                      "provider": "AC"
                    }
                  ],
                  "actions": [
                    {
                      "type": "publishText",
                      "text": "1😒"
                    }
                  ]
                }
              },
              {
                "type": "button",
                "tooltip": "2",
                "title": "2",
                "style": {
                  "bold": false,
                  "size": "medium",
                  "italic": false,
                  "color": "#4d4e4e",
                  "background-color": "#ffffff",
                  "border-color": "#d0d2d3",
                  "border-radius": 14
                },
                "click": {
                  "metadata": [
                    {
                      "type": "Answer",
                      "questionId": "3e70da9b-76de-4c2a-911e-a41aee698b82",
                      "id": "1faabbda-05c3-47aa-90af-e6aea481caa4",
                      "provider": "AC"
                    }
                  ],
                  "actions": [
                    {
                      "type": "publishText",
                      "text": "2"
                    }
                  ]
                }
              },
              {
                "type": "button",
                "tooltip": "3",
                "title": "3",
                "style": {
                  "bold": false,
                  "size": "medium",
                  "italic": false,
                  "color": "#4d4e4e",
                  "background-color": "#ffffff",
                  "border-color": "#d0d2d3",
                  "border-radius": 14
                },
                "click": {
                  "metadata": [
                    {
                      "type": "Answer",
                      "questionId": "3e70da9b-76de-4c2a-911e-a41aee698b82",
                      "id": "6a565783-6d86-432f-bf90-2edd32bc0d6d",
                      "provider": "AC"
                    }
                  ],
                  "actions": [
                    {
                      "type": "publishText",
                      "text": "3"
                    }
                  ]
                }
              },
              {
                "type": "button",
                "tooltip": "4",
                "title": "4",
                "style": {
                  "bold": false,
                  "size": "medium",
                  "italic": false,
                  "color": "#4d4e4e",
                  "background-color": "#ffffff",
                  "border-color": "#d0d2d3",
                  "border-radius": 14
                },
                "click": {
                  "metadata": [
                    {
                      "type": "Answer",
                      "questionId": "3e70da9b-76de-4c2a-911e-a41aee698b82",
                      "id": "7aa0012a-1f69-4a98-9b9e-8b650759b57b",
                      "provider": "AC"
                    }
                  ],
                  "actions": [
                    {
                      "type": "publishText",
                      "text": "4"
                    }
                  ]
                }
              },
              {
                "type": "button",
                "tooltip": "5😃",
                "title": "5😃",
                "style": {
                  "bold": false,
                  "size": "medium",
                  "italic": false,
                  "color": "#4d4e4e",
                  "background-color": "#ffffff",
                  "border-color": "#d0d2d3",
                  "border-radius": 14
                },
                "click": {
                  "metadata": [
                    {
                      "type": "Answer",
                      "questionId": "3e70da9b-76de-4c2a-911e-a41aee698b82",
                      "id": "e271cef2-32b1-463d-8f4b-9c0f8d52b3b1",
                      "provider": "AC"
                    }
                  ],
                  "actions": [
                    {
                      "type": "publishText",
                      "text": "5😃"
                    }
                  ]
                }
              },
              {
                "type": "button",
                "tooltip": "Skip",
                "title": "Skip",
                "click": {
                  "metadata": [
                    {
                      "type": "Answer",
                      "questionId": "3e70da9b-76de-4c2a-911e-a41aee698b82",
                      "id": "e02365f0-4361-44e7-aafd-f75f33929373",
                      "provider": "AC",
                      "groupId": "d55ffc18-da33-4c40-a20a-2958ec3f4c88"
                    }
                  ],
                  "actions": [
                    {
                      "type": "publishText",
                      "text": "Skip"
                    }
                  ]
                },
                "style": {
                  "bold": false,
                  "size": "medium",
                  "italic": false,
                  "color": "#4d4e4e",
                  "background-color": "#ffffff",
                  "border-color": "#d0d2d3",
                  "border-radius": 14
                }
              }
            ]
          }
        },
        "dialogId": "PwT_YK91Sum3vu5H6T3YnA",
        "metadata": [
          {
            "type": "Question",
            "id": "3e70da9b-76de-4c2a-911e-a41aee698b82",
            "groupId": "d55ffc18-da33-4c40-a20a-2958ec3f4c88",
            "surveyId": "499706313",
            "provider": "AC",
            "replies": [
              "4f7c6a7b-033b-4171-a361-abf99e0ea493",
              "1faabbda-05c3-47aa-90af-e6aea481caa4",
              "6a565783-6d86-432f-bf90-2edd32bc0d6d",
              "7aa0012a-1f69-4a98-9b9e-8b650759b57b",
              "e271cef2-32b1-463d-8f4b-9c0f8d52b3b1",
              "e02365f0-4361-44e7-aafd-f75f33929373"
            ]
          }
        ]
      }
    ]
  },
  "type": "ms.MessagingEventNotification"
}
```
In LivePerson' unified window the above Post Survey will be rendered as such:

![post-survey](img/Post_Survey.png)

### Step 12 - Display the Survey on your custom window

* As you can see from the above notification, the Post Survey is essentially a rich message including text, structured content templates, i.e. quick replies array consists of eight clickable buttons that trigger actions, in one message.

* In order to get familiar with Rich Messaging please get familiar with its [documentation](getting-started-with-rich-messaging-introduction.html).

* In LivePerson we have a renderer that displays this content within our unified window. In order to simulate its work you can play with our [Json-Pollock](https://livepersoninc.github.io/json-pollock/editor/) tool that utilizes this renderer.

**Note** The renderer code is also an open source and can be forked and used in your code if needed. You can find the GitHub repository for this project [here](https://github.com/LivePersonInc/json-pollock). For more information about Json-Pollock please refer [here](structured-content-structured-content-rendering-tool.html).

* You can see that apart from the text there are several clickable buttons in a [quick replies](quick-replies-overview.html) array included. Each one of them is a [button](getting-started-with-rich-messaging-basic-elements-button.html).

![quick-replies-sc](img/quick_replies_sc.png)

You can copy and paste the button json object into the simulator to see how it is rendered using the [json-pollock](https://livepersoninc.github.io/json-pollock/editor/)

Example:

```json
{
  "type": "button",
  "tooltip": "1😒",
  "title": "1😒",
  "style": {
    "bold": false,
    "size": "medium",
    "italic": false,
    "color": "#4d4e4e",
    "background-color": "#ffffff",
    "border-color": "#d0d2d3",
    "border-radius": 14
  },
  "click": {
    "metadata": [
      {
        "type": "Answer",
        "questionId": "3e70da9b-76de-4c2a-911e-a41aee698b82",
        "id": "4f7c6a7b-033b-4171-a361-abf99e0ea493",
        "provider": "AC"
      }
    ],
    "actions": [
      {
        "type": "publishText",
        "text": "1😒"
      }
    ]
  }
}
```

* As you can see from the above you can have full control on the style of the button by editing its keys i.e bold, size, color etc. For more information about the style rules defined for basic elements, refer [here](rich-messaging-styling.html).

* The design of your post survey including its quick replies and buttons styles is fully adjustable via the Bot Studio. Please refer [here](https://s3-eu-west-1.amazonaws.com/ce-sr/botstudio/Conversation+Survey+-+Configuration+Guide.pdf) for more information.

![bot-studio-design-button](img/bot_studio_design_button.png)

### Step 13 - Consumer responds on the Post Survey

After the Post Conversation Survey appears on your custom window the consumer can choose as per the above example one of the quick replies which are actionable buttons.

Assuming the consumer just clicked the first button then two requests should be sent to LiveEngage:

(1) One request should contain the 'ACTION' (used in conjunction with metadata to reply on structured content sent by the Agent)

```json
{
  "kind": "req",
  "id": "22",
  "type": "ms.PublishEvent",
  "body": {
    "dialogId": "__YOUR_POST_SURVEY_DIALOG_ID__",
    "conversationId": "__YOUR_CONVERSATION_ID__",
    "event": {
      "type": "AcceptStatusEvent",
      "status": "ACTION",
      "sequenceList": [
        1
      ]
    }
  },
  "metadata": [
    {
      "type": "Answer",
      "questionId": "3e70da9b-76de-4c2a-911e-a41aee698b82",
      "id": "4f7c6a7b-033b-4171-a361-abf99e0ea493",
      "provider": "AC"
    }
  ]
}
```
**Note**:

* The `sequenceList` matters. Review the notification that includes the Survey, received on [step 11](messaging-window-api-tutorials-post-conversation-survey-pcs.html#step-11---re-subscribe-to-conversation-content) and check which sequence number include the rich content with the 'quickReplies' key.

![seq-quick-replies-sc](img/seq_quick_replies_sc.png)

* The `metadata` value is identical to the one received in the Post Conversation Survey for the specific button.

**Expected 200 Response**

```json
{"kind":"resp","reqId":"2","code":200,"body":{"sequence":2},"type":"ms.PublishEventResponse"}
```

**Expected Notification**

```json
{
  "kind": "notification",
  "body": {
    "changes": [
      {
        "sequence": 2,
        "originatorId": "29ec5222-e044-449b-a048-e51e847e9a4a",
        "originatorMetadata": {
          "id": "29ec5222-e044-449b-a048-e51e847e9a4a",
          "role": "CONSUMER"
        },
        "serverTimestamp": 1539675559804,
        "event": {
          "type": "AcceptStatusEvent",
          "status": "ACTION",
          "sequenceList": [
            1
          ]
        },
        "conversationId": "__YOUR_CONVERSATION_ID__",
        "dialogId": "__YOUR_POST_SURVEY_DIALOG_ID__",
        "metadata": [
          {
            "type": "Answer",
            "questionId": "3e70da9b-76de-4c2a-911e-a41aee698b82",
            "id": "4f7c6a7b-033b-4171-a361-abf99e0ea493",
            "provider": "AC"
          }
        ]
      }
    ]
  },
  "type": "ms.MessagingEventNotification"
}
```

(2) Second request is sent to Publish the selected text of the button, again in conjunction with its metadata:

```json
{
  "kind": "req",
  "id": "3",
  "type": "ms.PublishEvent",
  "body": {
    "dialogId": "__YOUR_POST_SURVEY_DIALOG_ID__",
    "conversationId": "__YOUR_CONVERSATION_ID__",
    "event": {
      "type": "ContentEvent",
      "contentType": "text/plain",
      "message": "1😒"
    }
  },
  "metadata": [
    {
      "type": "Answer",
      "questionId": "3e70da9b-76de-4c2a-911e-a41aee698b82",
      "id": "4f7c6a7b-033b-4171-a361-abf99e0ea493",
      "provider": "AC"
    }
  ]
}
```

**Expected 200 response**

```json
{"kind":"resp","reqId":"3","code":200,"body":{"sequence":3},"type":"ms.PublishEventResponse"}
```

**Expected Notifications**

Notification - message sent by the consumer

```json
{
  "kind": "notification",
  "body": {
    "changes": [
      {
        "sequence": 3,
        "originatorId": "29ec5222-e044-449b-a048-e51e847e9a4a",
        "originatorMetadata": {
          "id": "29ec5222-e044-449b-a048-e51e847e9a4a",
          "role": "CONSUMER"
        },
        "serverTimestamp": 1539675582460,
        "event": {
          "type": "ContentEvent",
          "message": "1😒",
          "contentType": "text/plain"
        },
        "conversationId": "__YOUR_CONVERSATION_ID__",
        "dialogId": "__YOUR_POST_SURVEY_DIALOG_ID__"
      }
    ]
  },
  "type": "ms.MessagingEventNotification"
}
```

Notification - Message accepted by the Agent

```json
{
  "kind": "notification",
  "body": {
    "changes": [
      {
        "sequence": 4,
        "originatorId": "2fa9ac85-d8a9-5bd6-8384-8c32dabae97f",
        "originatorMetadata": {
          "id": "2fa9ac85-d8a9-5bd6-8384-8c32dabae97f",
          "role": "AGENT"
        },
        "serverTimestamp": 1539675582475,
        "event": {
          "type": "AcceptStatusEvent",
          "status": "READ",
          "sequenceList": [
            3
          ]
        },
        "conversationId": "__YOUR_CONVERSATION_ID__",
        "dialogId": "__YOUR_POST_SURVEY_DIALOG_ID__"
      }
    ]
  },
  "type": "ms.MessagingEventNotification"
}
```

Notification - Agent (survey bot) is composing a message

```json
{
  "kind": "notification",
  "body": {
    "changes": [
      {
        "originatorId": "2fa9ac85-d8a9-5bd6-8384-8c32dabae97f",
        "originatorMetadata": {
          "id": "2fa9ac85-d8a9-5bd6-8384-8c32dabae97f",
          "role": "AGENT"
        },
        "event": {
          "type": "ChatStateEvent",
          "chatState": "COMPOSING"
        },
        "conversationId": "__YOUR_CONVERSATION_ID__",
        "dialogId": "__YOUR_POST_SURVEY_DIALOG_ID__"
      }
    ]
  },
  "type": "ms.MessagingEventNotification"
}
```

Notification - Agent (survey bot) has sent a message

```json
{
  "kind": "notification",
  "body": {
    "changes": [
      {
        "sequence": 5,
        "originatorId": "2fa9ac85-d8a9-5bd6-8384-8c32dabae97f",
        "originatorMetadata": {
          "id": "2fa9ac85-d8a9-5bd6-8384-8c32dabae97f",
          "role": "AGENT"
        },
        "serverTimestamp": 1539675582973,
        "event": {
          "type": "ContentEvent",
          "message": "Thank you for your time.",
          "contentType": "text/plain"
        },
        "conversationId": "__YOUR_CONVERSATION_ID__",
        "dialogId": "__YOUR_POST_SURVEY_DIALOG_ID__"
      }
    ]
  },
  "type": "ms.MessagingEventNotification"
}
```

Notification - Agent has stopped typing

```json
{
  "kind": "notification",
  "body": {
    "changes": [
      {
        "originatorId": "2fa9ac85-d8a9-5bd6-8384-8c32dabae97f",
        "originatorMetadata": {
          "id": "2fa9ac85-d8a9-5bd6-8384-8c32dabae97f",
          "role": "AGENT"
        },
        "event": {
          "type": "ChatStateEvent",
          "chatState": "ACTIVE"
        },
        "conversationId": "__YOUR_CONVERSATION_ID__",
        "dialogId": "__YOUR_POST_SURVEY_DIALOG_ID__"
      }
    ]
  },
  "type": "ms.MessagingEventNotification"
}
```

Notification - Post survey completed - survey dialog & conversation are closed

```json
{
  "kind": "notification",
  "body": {
    "subscriptionId": "b1363e81-5c7b-4c3d-800f-6d0ada5f3c24",
    "changes": [
      {
        "type": "UPSERT",
        "result": {
          "convId": "0179f2ed-2cae-4890-9971-c8fa2b6a31a0",
          "effectiveTTR": -1,
          "conversationDetails": {
            "skillId": "496645413",
            "participants": [
              {
                "id": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
                "role": "ASSIGNED_AGENT"
              },
              {
                "id": "29ec5222-e044-449b-a048-e51e847e9a4a",
                "role": "CONSUMER"
              },
              {
                "id": "22815dea-5b5c-5c8f-a4bf-2e52a0f6820a",
                "role": "CONTROLLER"
              },
              {
                "id": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
                "role": "READER"
              },
              {
                "id": "2fa9ac85-d8a9-5bd6-8384-8c32dabae97f",
                "role": "AGENT"
              }
            ],
            "dialogs": [
              {
                "dialogId": "__YOUR_CONVERSATION_ID__",
                "participantsDetails": [
                  {
                    "id": "29ec5222-e044-449b-a048-e51e847e9a4a",
                    "role": "CONSUMER"
                  },
                  {
                    "id": "22815dea-5b5c-5c8f-a4bf-2e52a0f6820a",
                    "role": "CONTROLLER"
                  },
                  {
                    "id": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
                    "role": "ASSIGNED_AGENT"
                  }
                ],
                "dialogType": "MAIN",
                "channelType": "MESSAGING",
                "state": "CLOSE",
                "creationTs": 1539674197833,
                "endTs": 1539674929086,
                "metaDataLastUpdateTs": 1539674929086,
                "closedBy": "CONSUMER",
                "closedCause": "Closed by consumer"
              },
              {
                "dialogId": "__YOUR_POST_SURVEY_DIALOG_ID__",
                "participantsDetails": [
                  {
                    "id": "29ec5222-e044-449b-a048-e51e847e9a4a",
                    "role": "CONSUMER"
                  },
                  {
                    "id": "2fa9ac85-d8a9-5bd6-8384-8c32dabae97f",
                    "role": "AGENT"
                  },
                  {
                    "id": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
                    "role": "READER"
                  }
                ],
                "dialogType": "POST_SURVEY",
                "channelType": "MESSAGING",
                "metaData": {
                  "appInstallId": "756e7363-4472-4ae1-b1ae-b3b0b52107a0"
                },
                "state": "CLOSE",
                "creationTs": 1539674929086,
                "endTs": 1539675583472,
                "metaDataLastUpdateTs": 1539675583472,
                "closedBy": "AGENT",
                "closedCause": "Completed"
              }
            ],
            "brandId": "64467156",
            "state": "CLOSE",
            "stage": "CLOSE",
            "closeReason": "CONSUMER",
            "startTs": 1539674197833,
            "endTs": 1539675583472,
            "metaDataLastUpdateTs": 1539675583472,
            "ttr": {
              "ttrType": "PRIORITIZED",
              "value": 600
            }
          }
        }
      }
    ]
  },
  "type": "cqm.ExConversationChangeNotification"
}
```

![survey_closed](img/survey_closed.png)

### More information

* In order to completely close the conversation, user should call the ``UpdateConversationField`` API with field: ``stage`` and ``conversationState`` ``CLOSE``. This will close the conversation and all dialogs beneath and will not allow another dialog to be open. This can be used for example if you configured the Post Survey but wish to simply close the conversation without sending the Post Conversation Survey.

```json
{"kind":"req","id":"11","body":{"conversationId":"__YOUR_CONVERSATION_ID__","conversationField":{"field":"Stage","conversationState":"CLOSE"}},"type":"cm.UpdateConversationField"}
```
