---
pagename: Post Conversation Survey (PCS)
redirect_from:
  - messaging-window-api-tutorials-post-conversation-survey.html
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Messaging Window API
subfoldername: Tutorials
permalink: messaging-window-api-tutorials-post-conversation-survey-pcs.html
indicator: messaging
---

In this tutorial, we will demonstrate how to enable the Post Conversation Survey feature. This is a survey sent to the consumer by the agent at the end of the conversation . When we use the term "Post Conversation Survey" in this tutorial, we refer to the **(new) Post Conversation Survey (PCS)** and not to the (older) [existing survey solution](messaging-window-api-tutorials-post-conversation-survey-csat.html), where only a single CSAT question could be presented to the consumer when the conversation ends.

<div class="important">Once the PCS Survey is configured and working, it will be presented to the consumer instead of the old one (CSAT) i.e. there is no situation in which both will work together.</div>

### Multi-Dialog Conversation

Up until now, a conversation contained only one dialog type (``MAIN``), holding the main messaging conversation and its data (messages sent, received, etc.). In order to support the new Post Conversation Survey, we developed a Multi-Dialog Conversation concept. This means that the conversation is a container for dialogs and can contain several such dialogs. There can also be multiple types of dialogs, where each dialog has a different channel type for example. Each dialog represents a different kind of interaction, like the conversation between a consumer and an agent itself or an interaction with a survey.

The new Post Conversation Survey uses a new dialog type called the ``POST_SURVEY`` dialog. This dialog also has a channel type of ``MESSAGING``. This dialog holds the messaging conversation between a consumer and a survey bot. The dialog itself provides the context of the conversation, whether it is a conversation between an agent and a consumer or a conversation between a bot and a consumer, such as in the case of the new Survey.

The Messaging Window API was enhanced to support the multi-dialog concept by providing an ability to close a specific dialog instead of the entire conversation. Here is an example of such an action, closing a specific dialog when the consumer clicks to close it:

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

<div class="important">The below tutorial assumes that you have performed the initial steps required in order to work with this API, which can be found <a href="/messaging-window-api-getting-started.html">here</a>.</div>

* Configure the Post Conversation Survey (PCS) and get familiar with it. Please refer to [this guide](https://s3-eu-west-1.amazonaws.com/ce-sr/botstudio/Conversation+Survey+-+Configuration+Guide.pdf) for more information.

* At the end of the [Getting Started](consumer-int-getting-started.html) tutorial, we created the `lp.env` file. In order to launch `lp-shell` with your previous settings, input the following:

```sh
docker run --env-file lp.env -it lpinc/shell
```
You should get a shell line.

Make sure that you have closed any previous conversation sessions by clicking `Close conversation` in the Agent Workspace.

### Step 1 - Activate the MULTI_DIALOG feature for your conversation

In order to indicate to LiveEngage that your custom window supports multi-dialogs you must provide the “MULTI_DIALOG” feature in the client properties, for example:

```json
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
```

Refer to [Client Side Configuration](messaging-window-api-tutorials-client-properties.html) for more information on how to set `LP_PROPS` with the desired Client Properties. The command should look as follows:

```sh
LP_PROPS='{"type":".ClientProperties","appId":"webAsync","integrationVersion":"3.0.5","integration":"WEB_SDK","features":["AUTO_MESSAGES","RICH_CONTENT","CO_BROWSE","PHOTO_SHARING","QUICK_REPLIES","MULTI_DIALOG"]}'
```

### Step 2 - Retrieve Your Consumer ID

When you receive messages from the server, you must identify which messages were published by the consumer (in this case, you), and which were published by the agent. To do so, you must know the consumer's `consumerId`. To find out your `consumerId`, refer to the content of the LP_JWT by base64-decoding the middle part of the JWT (between the two periods):

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

The `sub` property contains your `consumerId`.

**Note**: If you encounter issues when using the shell ``base64`` command, you can use online tools such as [base64decode.org](https://www.base64decode.org/).

### Step 3 - Open the WebSocket Connection

Remember to include the **Client Properties** set earlier using the following command:

```sh
wscat -k 60 -H "Authorization:jwt $LP_JWT" -H "Client-Properties:$LP_PROPS" -c "wss://$LP_ASYNCMESSAGINGENT/ws_api/account/$LP_ACCOUNT/messaging/consumer?v=3"
```

Replace the `__LP_ACCOUNT__` with your account ID.

### Step 4 - Subscribe the Consumer to All Relevant Conversations - SubscribeExConversations

In order for the consumer to be notified when any changes occur in any of their relevant conversations (like a bot added to the conversation or a new agent for example) they must be subscribed to these conversations.

Input the following command:

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

* In this example, the `changes` array is still empty since there are still no conversations  

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

### Step 5 - Consumer Requests a Conversation

In this step, the consumer will request a new conversation.

**Note**:

* Upon Survey creation (in the Bot Studio), a skill must be assigned to the survey. If no skills are assigned then the survey will not be triggered.

* In order to trigger the survey, start a conversation on the account and skill on which you’ve defined the survey and bring the conversation to an end, either from the consumer or the agent side.

* If a conversation is “unassigned” no survey will be triggered.

* A survey is triggered based on the last skill of the conversation.

Input the following command. Note that this is simply a Conversation Request example, your own request will be populated with the relevant information:

```json
{"kind":"req","id":"0","type":"cm.ConsumerRequestConversation","body":{"channelType":"MESSAGING","ttrDefName":null,"campaignInfo":{"campaignId":418732213,"engagementId":425842913},"conversationContext":{"visitorId":"NmNDQ5OWU1MjM1NjBlZTAz","sessionId":"DHE_fICSTZ2gx5IsljFcwQ","interactionContextId":"1","type":"SharkContext","lang":"en-US"}}}
```

In the response you will receive the new conversationId.

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

### Step 6 - Agent Sends Messages

In this stage, switch to the Agent-Workspace and accept the ring of the incoming request. Click the blinking `Accept` button.

![agent-ring](img/ring.png)

Type a few messages in the Agent Workspace and send them to the consumer.

### Step 7 - Subscribe to Conversation Content

In order to get existing or new messages from the agent side, the consumer should subscribe to the content of the conversation. Substitute the `__YOUR_CONVERSATION_ID__` with the the `conversationId` you got in the response of the previous step, and paste it into the opened WebSocket.

```json
{"kind":"req","id":"2","type":"ms.SubscribeMessagingEvents","body":{"dialogId":"__YOUR_CONVERSATION_ID__","conversationId":"__YOUR_CONVERSATION_ID__","fromSeq":0}}
```
**Note**: you can use the message builder (<a href="consumer-int-msg-sub-events.html"><i class="fa fa-magic" aria-hidden="true"></i></a>) to build the above message.

In response, you will get a subscription success message:

```json
{"kind":"resp","reqId":"22","code":200,"type":".ams.GenericSubscribeResponse"}
```

You will now get all the existing content of the conversation in the following format:

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
          "message": "Hello from the agent",
          "contentType": "text/plain"
        },
        "dialogId": "__YOUR_CONVERSATION_ID__"
      }
    ]
  },
  "type": "ms.MessagingEventNotification"
}
```

You will notice that you got all the messages that were published by the consumer, or by the agent. In order to find which messages were published by the consumer, refer to the `originatorId` field. Messages that were published by the consumer will have a value equal to the `consumerId` you found in [Step 2](messaging-window-api-tutorials-post-conversation-survey-pcs.html#step-2---retrieve-your-consumer-id) while messages from the agent will have a different `originatorId`. From this point on, you will receive notifications for all messaging events in this conversation.

#### Notification Examples

The below are examples for notifications that the consumer might receive after being subscribed to a conversation when it changes.

**Agent is typing (COMPOSING)**:

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

**Agent sent a message**

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

**Agent has stopped typing - chatSate set to ACTIVE**

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

### Step 8 - Consumer Sends a Message

Use the following request to send a message on behalf of the consumer:

```json
{"kind":"req","id":"4","type":"ms.PublishEvent","body":{"dialogId":"__YOUR_CONVERSATION_ID__","conversationId":"__YOUR_CONVERSATION_ID__","event":{"type":"ContentEvent","contentType":"text/plain","message":"Hello from the consumer"}}}
```

**Expected 200 Response**

```json
{"kind":"resp","reqId":"4","code":200,"body":{"sequence":4},"type":"ms.PublishEventResponse"}
```

#### Expected Notifications

**Message received from the consumer**:

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
          "message": "Hello from the consumer",
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

**Agent has accepted the message**:

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

**Agent has read the message**:

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

### Step 9 - Close the Conversation (The MAIN DIALOG)

Use the below to close the conversation when necessary by closing the main dialog rather than the entire Conversation container.

Before closing this dialog it is recommended to send an indication that the Consumer has stopped typing (this is not mandatory):

```json
{"kind":"req","id":"2","type":"ms.PublishEvent","body":{"dialogId":"__YOUR_CONVERSATION_ID__","conversationId":"__YOUR_CONVERSATION_ID__","event":{"type":"ChatStateEvent","chatState":"ACTIVE"}}}
```

**Response**

```json
{"kind":"resp","reqId":"2","code":200,"body":{"sequence":0},"type":"ms.PublishEventResponse"}
```

**Notification**

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

As we said, we do not actually close the Conversation. We only close the Main Dialog by addressing the conversation manager (cm) component in LiveEngage and requesting a DialogChange. This is done by using `cm.UpdateConversationField` as below:

```json
{"kind":"req","id":"2","type":"cm.UpdateConversationField","body":{"conversationId":"__YOUR_CONVERSATION_ID__","conversationField":{"field":"DialogChange","type":"UPDATE","dialog":{"dialogId":"__YOUR_CONVERSATION_ID__","state":"CLOSE","closedCause":"Closed by consumer"}}}}
```


<div class="important">In the above case, the dialogId (MAIN) is the same value of its conversationId but in general that doesn't have to be the case. For example, the Post-Survey dialogue would get a different dialogId.</div>

Important fields:

* `dialog id`: The id of the dialog to close

* `state`: Should be `CLOSE` in order to close the dialog

* `closedCause`: Describe why the dialog was closed, mainly used by LiveEngage and Bots. Use `Closed by consumer` when closing the conversation from the consumer side.

**Note**

In case a dialog was not active for more than a week, the dialog will be closed by the system (autoclose).

**Ok Response Example**

```json
{
  "kind": "resp",
  "reqId": "2",
  "code": 200,
  "body": "OK Conversation resolved successfully",
  "type": "StringResponse"
}
```

After closing the main dialogue, the Post-Survey dialog should automatically appear and visible in the Agent Workspace.

![post-survey](img/post-survey.png)

Thanks to [Step 4](messaging-window-api-tutorials-post-conversation-survey-pcs.html#step-4---subscribe-the-consumer-to-all-relevant-conversations---subscribeexconversations), we will receive the following notification:

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

You can see from the above notification that the Conversation now has a new `stage` field. `stage` is a newly added field in the ExConv notification that indicates the Conversation container status (open/closed) (thus indicating whether the entire Conversation, both main dialog and post-survey dialog, has been closed). The old use of the `state` field (which is now being handled by the `stage` field as indicated above) was deprecated and it will now indicate whether the **Main Dialog** is open or closed.

### Step 10 - Re-subscribe to Conversation Content

After the dialog change (main dialog closed, post dialog open), the consumer should no longer receive messaging events on the conversation. Therefore, you'll need to subscribe the consumer once again to the new, open post-survey dialog.

* Use the last notification from [Step 9](messaging-window-api-tutorials-post-conversation-survey-pcs.html#step-9---close-the-conversation-the-main-dialog) to extract the dialogId of the dialog with `dialogType` set to `POST_SURVEY`.

* In order to get the post survey content and messaging events on the client side the consumer needs to execute [step 7](messaging-window-api-tutorials-post-conversation-survey-pcs.html#step-7---subscribe-to-conversation-content) from above while the dialogId is set to `__YOUR_POST_SURVEY_DIALOG_ID__`, as below:

```json
{"kind":"req","id":"2","type":"ms.SubscribeMessagingEvents","body":{"dialogId":"__YOUR_POST_SURVEY_DIALOG_ID__","conversationId":"__YOUR_CONVERSATION_ID__","fromSeq":0}}
```
**Response**

```json
{"kind":"resp","reqId":"2","code":200,"body":{},"type":"GenericSubscribeResponse"}
```

**Notification - Should include the Post-Survey (Example)**

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
                "tooltip": "1",
                "title": "1",
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
                      "text": "1"
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
                "tooltip": "5",
                "title": "5",
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
                      "text": "5"
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
In LivePerson's unified window the above Post Survey will be rendered as such:

![post-survey](img/Post_Survey.png)

### Step 11 - Display the Survey in Your Custom Window

As you can see from the above notification, the Post Survey is essentially a rich message including text, structured content templates (in this case a quick replies array which consists of eight clickable buttons that trigger actions) in one message.

These templates and the quick reply buttons are all part of our Rich Messaging features. In order to familiarize yourself with Rich Messaging please review its [documentation](getting-started-with-rich-messaging-introduction.html). You can see in the above example that apart from the text, there are several clickable buttons in a [quick replies](quick-replies-overview.html) array included. Each one of them is a [button](getting-started-with-rich-messaging-basic-elements-button.html).

![quick-replies-sc](img/quick_replies_sc.png)

**Note**

To make work with Structured Content easier, LivePerson has also built a renderer that displays this content within our unified window. In order to simulate this display you can use our [Json-Pollock](https://livepersoninc.github.io/json-pollock/editor/) tool that utilizes this renderer. This enables you to test your structured content and rich messages in a sandbox environment before using them.

The renderer code is also an open source project and can be forked and used in your code if needed. You can find the GitHub repository for this project [here](https://github.com/LivePersonInc/json-pollock). For more information about Json-Pollock please refer [to its documentation](structured-content-structured-content-rendering-tool.html).

You can copy and paste the button JSON object into the simulator to see how it is rendered using the [json-pollock](https://livepersoninc.github.io/json-pollock/editor/) tool.

Example:

```json
{
  "type": "button",
  "tooltip": "1",
  "title": "1",
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
        "text": "1"
      }
    ]
  }
}
```

As you can see from the above you have full control on the style of the button by editing the relevant keys, e.g bold, size, color etc. For more information about the style rules defined for basic elements, refer to [this document](rich-messaging-styling.html).

The design of your post survey, including its quick replies and button styles, is fully adjustable via the Bot Studio. Please refer to [this document](https://s3-eu-west-1.amazonaws.com/ce-sr/botstudio/Conversation+Survey+-+Configuration+Guide.pdf) for more information.

![bot-studio-design-button](img/bot_studio_design_button.png)

### Step 12 - Consumer Responds on the Post Survey

After the Post Conversation Survey appears on your custom window, the consumer can choose as per the above example one of the quick reply items which are actionable buttons.

Assuming the consumer just clicked the first button, two requests should be sent to LiveEngage:

One request should contain the 'ACTION' (used in conjunction with metadata to reply on structured content sent by the Agent):

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

* The `sequenceList` field matters. Review the notification that includes the Survey, received on [step 11](messaging-window-api-tutorials-post-conversation-survey-pcs.html#step-10---re-subscribe-to-conversation-content) and check the sequence number field for the object which includes the 'quickReplies' key. Then, use the same value when making this call under the `sequenceList` key (in this example, it is set to "1").

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

The Second request is sent to Publish the selected text of the button, again in conjunction with its metadata:

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
      "message": "1"
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

#### Expected Notifications

**Notification - message sent by the consumer**

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
          "message": "1",
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

**Notification - Message accepted by the Agent**

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

**Notification - Agent (survey bot) is composing a message**

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

**Notification - Agent (survey bot) has sent a message**

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

**Notification - Agent has stopped typing**

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

**Notification - Post survey completed - survey dialog & conversation are closed**

Because we have configured in the Bot Studio one survey question only in this example, the conversation will close immediately after it. When it closes, we'll receive the following and lasts messaging notification regarding survey completion and the closure of the conversation.

In case you have configured multiple sequential questions you'll need to repeat [step 11](messaging-window-api-tutorials-post-conversation-survey-pcs.html#step-11---display-the-survey-on-your-custom-window) and [step 12](messaging-window-api-tutorials-post-conversation-survey-pcs.html#step-12---consumer-responds-on-the-post-survey) per each survey question before you'll get this last notification.

+**Conversation closed - Survey completed**

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

### Additional Notes

Unlike the example in Step 10, which only closes the MAIN DIALOG, in order to completely close the Conversation and skip the survey, you can call the `UpdateConversationField` API with the field `stage` instead of `state` and the ``conversationState`` set to ``CLOSE``. This will close the conversation and all dialogs beneath and will not allow another dialog to open. This can be used for example if you configured the Post Survey but wish to simply close the conversation without sending the Post Conversation Survey to the consumer.

```json
{"kind":"req","id":"11","body":{"conversationId":"__YOUR_CONVERSATION_ID__","conversationField":{"field":"Stage","conversationState":"CLOSE"}},"type":"cm.UpdateConversationField"}
```
