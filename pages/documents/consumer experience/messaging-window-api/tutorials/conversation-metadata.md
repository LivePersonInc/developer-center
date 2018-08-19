---
title: Conversation Metadata
redirect_from:
  - consumer-int-conversation-md.html
sitesection: Documents
level2: Consumer Experience
level3: Messaging Window API
level4: Tutorials

order: 20

permalink: messaging-window-api-tutorials-conversation-metadata.html
indicator: messaging
---

This API exposes another mechanism to enable the client to get conversation metadata. The metadata includes the following:

* Status - Whether the conversation is open or closed.
* Participants - Whether there are any other participants in the conversation (agents, managers).

In order to get the metadata for the existing conversations, the client should subscribe itself to the conversation metadata stream. Upon any change, the client will get a notification about the updated conversation. Using this mechanism, the client is aware of changes done by the agent (close, join, transfer, and more). For clients that do not keep state such as browsers, this mechanism can be helpful for retrieving the current state after connection resstablishment.

### Prerequisites
See [Prerequisites](consumer-int-get-msg.html#prerequisites){:target="_blank"}.

### Step 1 - Subscribe

Open the WebSocket connection using:

```sh
wscat -k 60 -H "Authorization:jwt $LP_JWT" -c "wss://$LP_ASYNCMESSAGINGENT/ws_api/account/$LP_ACCOUNT/messaging/consumer?v=3"
```

Send a request on the connection to subscribe yourself to the conversation list:

```json
{"kind":"req","id":"33","body":{"minLastUpdatedTime":0,"convState":["OPEN","CLOSE"]},"type":"cqm.SubscribeExConversations"    }
```

You will firstly get a response with the new subscription ID:

```json
{
	"kind": "resp",
	"reqId": "1",
	"code": 200,
	"body": {
		"subscriptionId": "6a06020c-ef69-4bb4-ab72-934d032d106a"
	},
	"type": "cqm.SubscribeExConversationsResponse"
}
```

You will also get some other messages. Ignore these for now.

### Step 2 - Create a new Conversation

In order to test the subscription, we will create a new conversation using:


```json
{"kind":"req","id":1,"type":"cm.ConsumerRequestConversation"}
```

In addition to the response for the request, you will get a notification with the details of the conversation:

```json
{
	"kind": "notification",
	"body": {
		"subscriptionId": "c879a0e8-73fd-405c-9363-8ad6e0218fa9",
		"changes": [
			{
				"type": "UPSERT",
				"result": {
					"convId": "6b2622de-26b7-4e05-a7f2-5c2d50b3502f",
					"conversationDetails": {
						"participantsPId": {
							"CONSUMER": [ "72fca421-d1a2-459c-a420-6c5b1f3e75b0" ]
						},
						"state": "OPEN",
						"startTs": 1477840809953,
						"ttr": {
							"ttrType": "PRIORITIZED",
							"value": 600
						}
					},
					"lastUpdateTime": 1477840967209
				}
			}
		]
	},
	"type": "cqm.ExConversationChangeNotification"
}
```

### Step 3 - Agent accepts the Conversation

Now switch to the Agent Workspace and click ``Accept`` to take the conversation. Switch again to the consumer shell. You should see that another notification is displayed. Notice that the ``participantsPId`` property also contains the ID of the ``assigned agent``. This notifies the consumer that an agent has joined the conversation:

```json
{
	"kind": "notification",
	"body": {
		"subscriptionId": "c879a0e8-73fd-405c-9363-8ad6e0218fa9",
		"changes": [
			{
				"type": "UPSERT",
				"result": {
					"convId": "6b2622de-26b7-4e05-a7f2-5c2d50b3502f",
					"conversationDetails": {
						"participantsPId": {
							"CONSUMER": [ "72fca421-d1a2-459c-a420-6c5b1f3e75b0" ],
							"ASSIGNED_AGENT": [	"734d9867-40e3-52b9-a401-07e877676d64" ]
						},
						"state": "OPEN",
						"startTs": 1477840809953,
						"ttr": {
							"ttrType": "PRIORITIZED",
							"value": 600
						}
					},
					"lastUpdateTime": 1477840967209
				}
			}
		]
	},
	"type": "cqm.ExConversationChangeNotification"
}
```

Now close the conversation in the Agent Workspace and switch again to the consumer shell. You will see a notification with the ``state`` property set to ``CLOSE``.

Any change in the conversation fields will cause the service to send a notification containing the updated conversation state. The stream will cover all the conversations of the consumer, both opened and closed. Closed conversations will be removed from the stream after a reasonable period of time.

{% include links.html %}
