---
title: Getting Started
level1: Documents
level2: Consumer Experience
level3: Messaging Window API

order: 2
permalink: consumer-int-getting-started.html

---

In this tutorial you will create a new conversation with your contact center, publish text messages, and receive agent responses.
  
### Prerequisites
* [Docker](https://docs.docker.com/engine/installation){:target="_blank"}
* LivePerson account enabled with two features: ``Async_Messaging`` and ``Authenticated_Chat``. If you are not sure that your account is enabled with these two features, please contact [LivePerson Support](consumer-int-account-provision.html){:target="_blank"}. 

### Step 1 - Launch your Shell

We will use a docker image called ``lp-shell`` to run the shell for this tutorial. It is a Linux image equipped with ``curl``,[``wscat``](https://www.npmjs.com/package/wscat2),[``jq``](https://stedolan.github.io/jq/) and several scripts.

After replacing the ``__YOUR_ACCOUNT_ID__`` with your account ID, type the following into your terminal:

```sh
docker run --env LP_ACCOUNT=__YOUR_ACCOUNT_ID__ -it lpinc/shell
```

You should receive a shell line.

### Step 2 - Create a Token
In this demonstration we will create a new unauthenticated consumer identity. Run the following command:

```sh
LP_JWT=`curl -X POST https://$LP_IDP/api/account/$LP_ACCOUNT/signup | jq -r .jwt`
```

This will request the creation of a new identity. Extract the ``JWT`` from the response, and set it as a variable called ``LP_JWT`` in your shell. This new identity will be used in the next step.

To check the value inside the ``LP_JWT``, type:

```sh
> echo $LP_JWT
eyJraWQiOiIwMDAwMSIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1OTI2MzFhMC01ZmFlLTQ2YTMtODk2NC0xYzRjM2U3MjBhNGEiLCJhdWQiOiJhY2M6cWE1NzIyMTY3NiIsImlzcyI6Imh0dHBzOlwvXC9pZHAubGl2ZXBlcnNvbi5uZXQiLCJleHAiOjE4ODIzNTg5NDMsImlhdCI6MTQ3MjExODkwM30.iJFlQuMyO8BVRH4ybgNfZxiTTQbAIWHDa4e24TohZGdqyZSv0Vlc4zgVP9wf0Svxbye_yyTx-Q_f8BB7Vy1ZdUYy0t_NK57bAxFTV8x4lx9fxAj_PJ0VvJncJjhn7JFu3s46WeKScFv28D78wJMgoHOKAKD-CacGzGtvFU9NuUQ
```

### Step 3 - Connect to the Messaging Service
Using the JWT we have created, we can open the connection to the UMS:

```sh
wscat -k 60 -H "Authorization:jwt $LP_JWT" -c "wss://$LP_ASYNCMESSAGINGENT/ws_api/account/$LP_ACCOUNT/messaging/consumer?v=3"
```

In the following steps we will send JSON requests and receive responses and notifications through this connection.
If the connection is closed, you can reconnect using the same ``wscat`` command.

### Step 4 - Create a New Conversation

Before creating the conversation, log into LiveEngage as an agent. In order for the agent to receive the messages, ensure that no other agent is logged into your account.

To request a new conversation, paste the following message into the connection from the previous step.


```json
{"kind":"req","id":1,"type":"cm.ConsumerRequestConversation"}
```

In response, you will receive the ID of the new conversation.

```json
{
	"kind": "resp",
	"reqId": "1",
	"code": 200,
	"body": {
		"conversationId": "7507be78-60ef-4468-b3b1-baa47fbeea21"
	},
	"type": "cm.RequestConversationResponse"
}
```

Open the Agent Workspace (from Step 1), and accept the incoming request by clicking the ``Accept`` button.

![agent-ring](img/ring.png)

### Step 5 - Publish a Text Message

In order to publish content to a conversation, substitute the ``__YOUR_CONVERSATION_ID__`` with the the ``consersationId`` you got in the response of Step 4, and paste it into the opened WebSocket. 

```json
{"kind":"req","id":2,"type":"ms.PublishEvent","body":{"dialogId":"__YOUR_CONVERSATION_ID__","event":{"type":"ContentEvent","contentType":"text/plain","message":"hi there"}}}
```
**Note**: you can use the message builder (<a href="consumer-int-msg-text-cont.html" target="_blank"><i class="fa fa-magic" aria-hidden="true"></i></a>) to build the above message. 


The published message will be displayed on the agent side:
![consumer-msg](img/consumer_msg.png)

Now close the conversation from the Agent Workspace using the ``Close conversation`` menu item:
![close](img/close.png)

### Step 6 - Record LP_JWT to Next Tutorials

In order to use the consumer token (LP_JWT) in the following tutorials, we will put a file on your machine. Create a new file outside of the ``lp-shell`` and paste the following content into it:

`
LP_ACCOUNT=qa57221676					put your account id here

* Put here the jwt you have created in this tutorial
* You can use echo $LP_JWT from your lp-shell to view it
LP_JWT=eyJraWQiOiIwMDAwMSIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmMDY4ZTllZi1lMzkzLTQxYTEtYmMyYy1hOTZhOWZmMGY2ZmIiLCJhdWQiOiJhY2M6cWE1NzIyMTY3NiIsImlzcyI6Imh0dHBzOlwvXC9pZHAubGl2ZXBlcnNvbi5uZXQiLCJleHAiOjE4ODIwMjM2MzIsImlhdCI6MTQ3MTc4MzU5Mn0.HUJe1CZzqzRoJJxoTll_vDvRalKIeJJRt2MEhY-aFq__V6lrN-ebrRxydozm-gjbpMecKiZDZZiJPw3hf560iKbW-gK1AzsfHxiPrxMdg_TRZqsNhXui_7k579IpfAvKSdgQHZ5uLfGq2XtQNfBdvKWPCIAfW8mJ7oZT-aNMhjE
`

### What's next

You can now close the ``lp-shell`` and move on to the [next tutorial](consumer-int-get-msg.html){:target="_blank"}.

Explore API messages in the [API Reference](consumer-int-api-reference.html){:target="_blank"} page. In order to build your own messages, you can use the [``message builder`` <i class="fa fa-magic" aria-hidden="true"></i>](consumer-int-msg-reqs.html){:target="_blank"}



{% include links.html %}
