---
title: Getting Started
Keywords:

level2: Agent Interactions
level3: Messaging Agent API


order: 2
permalink: agent-int-getting-started.html

---
**Note**: This document is subject to change without notice.

### Prerequisites
* [Docker](https://docs.docker.com/engine/installation)
* LP Account provisioned for messaging according to [these instructions](consumer-int-account-provision.html).

### Step 1 - Launch Your Shell

We will use a docker image called ``lp-shell`` to run the shell for this tutorial. It is a linux image equipped with ``curl``,[``wscat``](https://www.npmjs.com/package/wscat2),[``jq``](https://stedolan.github.io/jq/) and several scripts.

After replacing the ``__YOUR_ACCOUNT_ID__`` with your account ID, type the following into your terminal:

```sh
docker run --env LP_ACCOUNT=__YOUR_ACCOUNT_ID__ -it lpinc/shell
```

You should receive a shell line.

### Step 2 - Create an Agent Token

```sh
LP_USER=__AGENT_USERNAME__
LP_PASS=__AGENT_PASSWORD__
LP_BEARER=`curl -c cookies -X POST -H "Content-Type: application/json" -H "Accept: application/json" -H "Cache-Control: no-cache" -d '{"username": "'$LP_USER'","password":"'$LP_PASS'"}' "https://$LP_AGENTVEP/api/account/$LP_ACCOUNT/login?v=1.2"  jq -r .bearer`
```


### Step 3 - Connect to the Messaging Service

Using the JWT we have created, we can open the connection to the UMS:

```sh
wscat -k 60 -c "wss://$LP_ASYNCMESSAGINGENT/ws_api/account/$LP_ACCOUNT/messaging/brand/$LP_BEARER?v=2"
```

In the following steps we will send JSON requests and receive responses and notifications through this connection.
If the connection is closed, you can reconnect using the same ``wscat`` command.

### Step 4 - Set agent as online

Before the agents get any tasks they should set their state to ``online``.

First, query the user profile in order to find the agent ID. Paste the following request into the WebSocket connection:

```javascript
{"kind":"req","id":"2","type":".ams.userprofile.GetUserProfile","body":{}}
```

In response you will get the profile of the agent:

```json
{
	"kind": "resp",
	"reqId": "2",
	"code": 200,
	"body": {
		"userId": "qa20971604.3836897210"
	},
	"type": ".ams.userprofile.GetUserProfile$Response"
}
```

Copy the value of the ``userId`` for further usage. Now, put this userId in the following message and paste it into the WebSocket:

```json
{"kind":"req","id":"3","type":".ams.routing.SetAgentState","body":{"channels":["MESSAGING"],"agentUserId":"__USER_ID__","availability":"ONLINE"}}
```

You should get the following response:

```json
{"kind":"resp","reqId":"3","code":202,"body":"Agent state updated successfully","type":".ReqBody$StringResp"}
```

### Step 5 - Subscribe to get routing tasks notifications

In order to get notifications when there is a new routing task, you should use the following request:

```json
{"kind":"req","id":"4","type":".ams.routing.SubscribeRoutingTasks","body":{"brandId":"__ACCOUNT__","agentId":"__USER_ID__","channelType":"MESSAGING"}}
```

You should get the following response:

```json
{"kind":"resp","reqId":"4","code":200,"body":{"subscriptionId":"36267a8d-adf9-4dd9-994c-e1fd73fc3735"},"type":".ams.GenericSubscribe$Response"}
{"kind":"notification","body":{"subscriptionId":"36267a8d-adf9-4dd9-994c-e1fd73fc3735","changes":[]},"type":".ams.routing.RoutingTaskNotification"}
```

### Step 6 - Create a conversation by a consumer

Open another shell window and follow steps 1-4 of the [consumer API getting started flow](consumer-int-getting-started.html) in order to create a new conversation. Skip the instructions about the agent-console UI.

*Note: You can use the messaging window instead of the consumer API using [these instructions](setting-consumer-window.html)*

Switch back to the shell window of the agent. Since we subscribed to routing tasks notifications, you should see such a notification in your connection: change test

``` json
{
   "kind": "notification",
   "body": {
      "subscriptionId": "36267a8d-adf9-4dd9-994c-e1fd73fc3735",
      "changes": [
         {
            "type": "UPSERT",
            "result": {
               "ringsDetails": [
                  {
                     "ringId": "57bc39d9-cad3-46c6-94a9-abd10be5b7c8_qa20971604_1475397157834",
                     "ringExpiration": 72000,
                     "ringState": "WAITING",
                     "convId": "57bc39d9-cad3-46c6-94a9-abd10be5b7c8",
                     "consumerId": "1f537b4e-6a74-441a-96b6-873109558499",
                     "skillId": "-1"
                  }
               ]
            }
         }
      ]
   },
   "type": ".ams.routing.RoutingTaskNotification"
}
```

In order to accept this task, copy the ``ringId`` from the previous message and send the following request:

```json
{"kind":"req","id":4,"body":{"ringId":"__RING_ID__","ringState":"ACCEPTED"},"type":".ams.routing.UpdateRingState"}
```

You should get the following response:

```json
{"kind":"resp","reqId":"4","code":202,"body":"Ring state updated successfully","type":".ReqBody$StringResp"}
```

### Step 7 - Recieve consumer text messages

Switch to the shell window of the consumer and follow the instruction in step 5 of the [consumer API getting started flow](consumer-int-getting-started.html#step-5---publish-a-text-message) in order to publish a text message by the consumer.

Switch back to the agent window. You should see the following in your connection message:

```json
{
	"kind": "notification",
	"type": "ms.OnlineEventDistribution",
	"body": {
		"sequence": 2,
		"originatorPId": "3b5b7ec6-2b0f-53af-9afd-11d4072c85a7",
		"serverTimestamp": 1470732437925,
		"event": {
			"type": "ContentEvent",
			"message": "From consumer",
			"contentType": "text/plain"
		},
		"dialogId": "__YOUR_CONVERSATION_ID__"
	}
}
```

### Step 8 - Publish text message by the agent

In order to publish content to a conversation, substitute the ``__YOUR_CONVERSATION_ID__`` with the the ``consersationId`` you got in the routing task notification, and paste it into the opened WebSocket. 

```json
{"kind":"req","id":2,"type":"ms.PublishEvent","body":{"dialogId":"__YOUR_CONVERSATION_ID__","event":{"type":"ContentEvent","contentType":"text/plain","message":"Response from agent"}}}
```

Switch back to the consumer window. You should see the following in your connection message:

```json
{
	"kind": "notification",
	"type": "ms.OnlineEventDistribution",
	"body": {
		"sequence": 2,
		"originatorPId": "3b5b7ec6-2b0f-53af-9afd-11d4072c85a7",
		"serverTimestamp": 1470732437925,
		"event": {
			"type": "ContentEvent",
			"message": "Response from agent",
			"contentType": "text/plain"
		},
		"dialogId": "__YOUR_CONVERSATION_ID__"
	}
}
```


### Step 9 - Close the conversation

In order to close the current conversation, paste the following into the the agent connection:

```json
{"kind":"req","id":1,"body":{"conversationId":"__CONVERSATION_ID__","conversationField":{"field":"ConversationStateField","conversationState":"CLOSE"}},"type":"cm.UpdateConversationField"}
```

### Next Steps

###  back to queue

```json
{"kind":"req","id":"18d7a824-5c07-4aa8-82ef-d795b43b8ccbc-68371","type":"cm.UpdateConversationField","body":{"conversationId":"71d97c07-e8f5-4b1b-80e0-4cb6b8cf4381","conversationField":{"field":"ParticipantsChange","type":"REMOVE","userId":"qa20971604.3838309010","role":"ASSIGNED_AGENT"}}}
```

###  Transfer to skill

```json
{"kind":"req","id":"c8201891-b4dc-448a-919e-f7eb42adf5ce4-6860","type":"cm.UpdateConversationField","body":{"conversationId":"71d97c07-e8f5-4b1b-80e0-4cb6b8cf4381","conversationField":[{"field":"ParticipantsChange","type":"REMOVE","userId":"qa20971604.3838309010","role":"ASSIGNED_AGENT"},{"field":"Skill","type":"UPDATE","skill":"3848332110"}]}}
```

###  Get skill list:

```json
 { "https://$LP_ACCOUNTCONFIGREADONLY/api/account/$LP_ACCOUNT/configuration/le-users/skills?v=2.0" -H "Authorization: Bearer $LP_BEARER" }
```

###  Get consumer profile

```json
{"kind":"req","id":"2","type":".ams.userprofile.GetUserProfile","body":{"userId": "__CONSUMER_PID__"}}
```

{% include links.html %}
