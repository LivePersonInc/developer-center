---
pagename: Events
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Messaging Agent SDK
permalink: messaging-agent-sdk-events.html
indicator: messaging
---

These are events emitted by the SDK which you can listen and react to.

### connected

This event occurs when you establish a websocket connection to the server. This is where you should [set your agent's initial state](messaging-agent-sdk-methods.html#setagentstate), [subscribe to conversation changes](messaging-agent-sdk-methods.html#subscribeexconversations), [subscribe to routing notifications](messaging-agent-sdk-methods.html#subscriberoutingtasks), and perform general initialization tasks.

Sample code:
```javascript
agent.on('connected', message => {
    // socket connected
});
```

Example payload:

```json
{"connected":true,"ts":1516999337528}
```

### routing.RoutingTaskNotification

This event occurs when new conversations are presented to the bot by LivePerson's routing mechanism. This is equivalent to a new conversation "ringing" in a human agent's workspace. In response to this event you should have your bot [updateRingState](messaging-agent-sdk-methods.html#updateringstate) for each ring.

Sample code:
```javascript
agent.on('routing.RoutingTaskNotification', body => {
    body.changes.forEach(change => {
        if (change.type === 'UPSERT') {
            change.result.ringsDetails.forEach(ring => {
                if (ring.ringState === 'WAITING') {
                    this.updateRingState({
                        'ringId': ring.ringId,
                        'ringState': 'ACCEPTED'
                    }, (e, resp) => {
                        if (e) { log.error(`[bot.js] acceptWaitingConversations ${JSON.stringify(e)}`) }
                        else { log.info(`[bot.js] acceptWaitingConversations: Joined conversation ${JSON.stringify(change.result.conversationId)}, ${JSON.stringify(resp)}`) }
                    });
                }
            });
        }
    });
});
```

Example payload:
```json
{
  "subscriptionId": "be13bab4-ec92-472f-b840-798b4cb476a4",
  "changes": [
    {
      "type": "UPSERT",
      "result": {
        "taskCompleted": true,
        "conversationId": "41d33e78-9701-4edd-a569-01dfb6c0f40a",
        "consumerId": "d51ce914-97ad-4544-a686-8335b61dcdf3",
        "skillId": "-1",
        "ringsDetails": [
          {
            "ringId": "41d33e78-9701-4edd-a569-01dfb6c0f40a_89476943_1517000827442",
            "ringExpirationTs": 1517000899442,
            "ringState": "ACCEPTED",
            "weight": 1517004427244,
            "ringExpiration": 72000
          }
        ]
      }
    }
  ]
}
```

### routing.AgentStateNotification

This event occurs when your agent's state changes (usually as a result of using [setAgentState()](messaging-agent-sdk-methods.html#setagentstate))

Sample code:
```javascript
agent.on('routing.AgentStateNotification', body => {
    // TODO: stuff here
})
```

Example payload:
```json
{
  "subscriptionId": "5ebe7fcd-c59e-4fd2-a622-ec412a01a549",
  "changes": [
    {
      "type": "UPSERT",
      "result": {
        "channels": [
          "MESSAGING"
        ],
        "availability": "ONLINE",
        "description": ""
      }
    }
  ]
}
```

### cqm.ExConversationChangeNotification

This event occurs when a conversation that your subscription qualifies for* is updated in any way. If you passed no agentIds array when calling [subscribExConversations()](#subscribeexconversations), and you have the necessary permissions to see all agents' conversations, you will receive these events for all conversations. If you passed in your own agentId with `subscribeExConversations` you will only receive updates for conversations that you are a participant in (such as conversations that you have just accepted via a [routing.routingTaskNotification](messaging-agent-sdk-methods.html#routingroutingtasknotification), 
this won't include converastions that you are not the assigned agent).

**Important** Due to a race condition in the service that serves these notifications they may not always contain the lastContentEventNotification attribute. For this reason you cannot rely on them to consume all of the messages in the conversation, and you should use this event to call [subscribeMessagingEvents()](messaging-agent-sdk-methods.html#subscribemessagingevents) for conversations you want to follow.  You should keep a list of conversations you are handling in order to prevent attempting to subscribe to the same conversation repeatedly.

#### Subscribing to Change Notifications with Transfer to Agent

After the transfer-to-agent API call,  the UMS will check the validity of the request and after doing internals it will notify agents with connection version 2.1  of the change. This change will be communicated via the `ExConversationChangeNotification` whose format has been changed to accomodate this new feature. 

The change in the format is in the participants of the dialog, which is where we added the suggested agent, as follows:

* A new ‘state’ field has been added to the items in ‘participantsDetails’ array.

* The state can be either ‘ACTIVE’ or ‘SUGGESTED’.

* When the ‘role’ is set to ‘ASSIGNED_AGENT’, this value differentiates between agents which have been ‘SUGGESTED’ (that is, a conversation was transferred directly to them but might not yet have been accepted) and ‘ACTIVE’ agents, which have actually accepted the incoming conversation (that is, the conversation has been transferred to them and they have accepted it).

**Note**: If your existing code uses the existing property ‘role’ to check if the agent has been assigned to the conversation ('role': 'ASSIGNED_AGENT') and doesn’t check the new ‘state’ property, you might get a false positive. That is, a conversation was transferred to an agent (so the ‘role’ of that agent is now ‘ASSIGNED_AGENT’) but the agent has not yet accepted this conversation (so their ‘type’ is now ‘SUGGESTED’ instead of ‘ACTIVE’).

In this case, you will need to add some function into your code which checks both the ‘role’ and ‘state’ properties.

For other role types, the state field will always be populated with ‘ACTIVE’. 

The API should be used on the new version published (2.1). In case the transfer-to-agent call is triggered from version 2.0 with the described format, the transfer will occur but the one who triggered won't get the notification,  since notification is available only from the new version!


Sample code:
```javascript
agent.on('cqm.ExConversationChangeNotification', body => {
    body.changes.forEach(change => {
        if (change.type === 'UPSERT' && !inMyConversationList(change.result.convId)) {
            addToMyConversationList(change.result.convId);
            agent.subscribeMessagingEvents({dialogId: change.result.convId}, e => {if (e) console.error(e)})
        } else if (change.type === 'DELETE') {
            removeFromMyConversationList(change.result.convId);
        }
    })
})
```

Example payload:
```json
{
  "subscriptionId": "e7f5ee81-4556-406c-8c72-94c69dd68fad",
  "changes": [
    {
      "type": "UPSERT",
      "result": {
        "convId": "220d3639-ae23-4c90-83e8-455e3bb2cf13",
        "conversationDetails": {
          "skillId": "-1",
          "participants": [
            {
              "id": "d51ce914-97ad-4544-a686-8335b61dcdf3",
              "role": "CONSUMER"
            },
            {
              "id": "1a41233d-1d2c-5158-bacc-ee0f2d384888",
              "role": "MANAGER"
            },
            {
              "id": "393c6873-756d-54af-86e1-8795d57eba14",
              "role": "ASSIGNED_AGENT"
            }
          ],
          "state": "OPEN",
          "startTs": 1516999063585,
          "metaDataLastUpdateTs": 1516999196220,
          "firstConversation": false,
          "ttr": {
            "ttrType": "NORMAL",
            "value": 3600
          },
          "context": {
            "type": "MobileAppContext",
            "lang": "en-US",
            "clientProperties": {
              "type": ".ClientProperties",
              "appId": "com.liveperson.mmanguno.upgradetest23_30",
              "ipAddress": "172.26.138.125",
              "deviceFamily": "MOBILE",
              "os": "ANDROID",
              "osVersion": "27",
              "integration": "MOBILE_SDK",
              "integrationVersion": "3.0.0.0",
              "timeZone": "America/New_York",
              "features": [
                "PHOTO_SHARING",
                "CO_APP",
                "AUTO_MESSAGES",
                "RICH_CONTENT",
                "SECURE_FORMS"
              ]
            }
          },
          "__myRole": "ASSIGNED_AGENT"
        },
        "lastContentEventNotification": {
          "sequence": 29,
          "originatorClientProperties": {
            "type": ".ClientProperties",
            "ipAddress": "172.26.138.214"
          },
          "originatorId": "89476943.282467514",
          "originatorPId": "393c6873-756d-54af-86e1-8795d57eba14",
          "originatorMetadata": {
            "id": "393c6873-756d-54af-86e1-8795d57eba14",
            "role": "ASSIGNED_AGENT",
            "clientProperties": {
              "type": ".ClientProperties",
              "ipAddress": "172.26.138.214"
            }
          },
          "serverTimestamp": 1516999340978,
          "event": {
            "type": "RichContentEvent",
            "content": {
              "type": "vertical",
              "elements": [
                {
                  "type": "text",
                  "text": "Product Name",
                  "tooltip": "text tooltip",
                  "style": {
                    "bold": true,
                    "size": "large"
                  }
                },
                {
                  "type": "text",
                  "text": "Product description",
                  "tooltip": "text tooltip"
                },
                {
                  "type": "button",
                  "tooltip": "button tooltip",
                  "title": "Add to cart",
                  "click": {
                    "actions": [
                      {
                        "type": "link",
                        "name": "Add to cart",
                        "uri": "http://www.google.com"
                      }
                    ]
                  }
                }
              ]
            }
          },
          "dialogId": "220d3639-ae23-4c90-83e8-455e3bb2cf13"
        }
      }
    }
  ]
}
```

### ms.MessagingEventNotification

This event occurs whenever there is a new message in a conversation, a message is marked as read, a participant starts typing or stops typing, or the consumer opens/closes their websocket connection (such as when they enter or leave the messaging window in a LivePerson Mobile SDK implementation).  Use this to consume messages, mark them as read, and react to them as you see fit.

Sample code:
```javascript
agent.on('ms.MessagingEventNotification', body => { // specific notification type
    // TODO: stuff here
});
```

##### Example payloads

New message (sent by the agent in this case)
```json
{
  "dialogId": "41d33e78-9701-4edd-a569-01dfb6c0f40a",
  "changes": [
    {
      "sequence": 10,
      "originatorClientProperties": {
        "type": ".ClientProperties",
        "ipAddress": "172.26.138.213"
      },
      "originatorId": "393c6873-756d-54af-86e1-8795d57eba14",
      "originatorMetadata": {
        "id": "393c6873-756d-54af-86e1-8795d57eba14",
        "role": "ASSIGNED_AGENT",
        "clientProperties": {
          "type": ".ClientProperties",
          "ipAddress": "172.26.138.213"
        }
      },
      "serverTimestamp": 1517002351775,
      "event": {
        "type": "ContentEvent",
        "message": "16:32:31 GMT-0500 (EST)",
        "contentType": "text/plain"
      },
      "dialogId": "41d33e78-9701-4edd-a569-01dfb6c0f40a",
      "__isMe": true
    }
  ]
}
```

Message(s) read
```json
{
  "sequence": 9,
  "originatorClientProperties": {
    "type": ".ClientProperties",
    "ipAddress": "172.26.138.213"
  },
  "originatorId": "393c6873-756d-54af-86e1-8795d57eba14",
  "originatorMetadata": {
    "id": "393c6873-756d-54af-86e1-8795d57eba14",
    "role": "ASSIGNED_AGENT",
    "clientProperties": {
      "type": ".ClientProperties",
      "ipAddress": "172.26.138.213"
    }
  },
  "serverTimestamp": 1517002351770,
  "event": {
    "type": "AcceptStatusEvent",
    "status": "READ",
    "sequenceList": [
      8
    ]
  },
  "dialogId": "41d33e78-9701-4edd-a569-01dfb6c0f40a",
  "__isMe": true
}
```

Consumer is typing
```json
{
  "originatorClientProperties": {
    "type": ".ClientProperties",
    "appId": "com.liveperson.mmanguno.upgradetest23_30",
    "ipAddress": "172.26.138.214",
    "deviceFamily": "MOBILE",
    "os": "ANDROID",
    "osVersion": "27",
    "integration": "MOBILE_SDK",
    "integrationVersion": "3.0.0.0",
    "timeZone": "America/New_York",
    "features": [
      "PHOTO_SHARING",
      "CO_APP",
      "AUTO_MESSAGES",
      "RICH_CONTENT",
      "SECURE_FORMS"
    ]
  },
  "originatorId": "d51ce914-97ad-4544-a686-8335b61dcdf3",
  "originatorMetadata": {
    "id": "d51ce914-97ad-4544-a686-8335b61dcdf3",
    "role": "CONSUMER",
    "clientProperties": {
      "type": ".ClientProperties",
      "appId": "com.liveperson.mmanguno.upgradetest23_30",
      "ipAddress": "172.26.138.214",
      "deviceFamily": "MOBILE",
      "os": "ANDROID",
      "osVersion": "27",
      "integration": "MOBILE_SDK",
      "integrationVersion": "3.0.0.0",
      "timeZone": "America/New_York",
      "features": [
        "PHOTO_SHARING",
        "CO_APP",
        "AUTO_MESSAGES",
        "RICH_CONTENT",
        "SECURE_FORMS"
      ]
    }
  },
  "event": {
    "type": "ChatStateEvent",
    "chatState": "COMPOSING"
  },
  "dialogId": "41d33e78-9701-4edd-a569-01dfb6c0f40a",
  "__isMe": false
}
```

Consumer websocket closed
```json
{
  "originatorClientProperties": {
    "type": ".ClientProperties",
    "appId": "com.liveperson.mmanguno.upgradetest23_30",
    "ipAddress": "172.26.138.214",
    "deviceFamily": "MOBILE",
    "os": "ANDROID",
    "osVersion": "27",
    "integration": "MOBILE_SDK",
    "integrationVersion": "3.0.0.0",
    "timeZone": "America/New_York",
    "features": [
      "PHOTO_SHARING",
      "CO_APP",
      "AUTO_MESSAGES",
      "RICH_CONTENT",
      "SECURE_FORMS"
    ]
  },
  "originatorId": "d51ce914-97ad-4544-a686-8335b61dcdf3",
  "originatorMetadata": {
    "id": "d51ce914-97ad-4544-a686-8335b61dcdf3",
    "role": "CONSUMER",
    "clientProperties": {
      "type": ".ClientProperties",
      "appId": "com.liveperson.mmanguno.upgradetest23_30",
      "ipAddress": "172.26.138.214",
      "deviceFamily": "MOBILE",
      "os": "ANDROID",
      "osVersion": "27",
      "integration": "MOBILE_SDK",
      "integrationVersion": "3.0.0.0",
      "timeZone": "America/New_York",
      "features": [
        "PHOTO_SHARING",
        "CO_APP",
        "AUTO_MESSAGES",
        "RICH_CONTENT",
        "SECURE_FORMS"
      ]
    }
  },
  "event": {
    "type": "ChatStateEvent",
    "chatState": "BACKGROUND"
  },
  "dialogId": "41d33e78-9701-4edd-a569-01dfb6c0f40a",
  "__isMe": false
}
```

Consumer websocket resumed
```json
{
  "dialogId": "41d33e78-9701-4edd-a569-01dfb6c0f40a",
  "changes": [
    {
      "originatorClientProperties": {
        "type": ".ClientProperties",
        "appId": "com.liveperson.mmanguno.upgradetest23_30",
        "ipAddress": "172.26.138.214",
        "deviceFamily": "MOBILE",
        "os": "ANDROID",
        "osVersion": "27",
        "integration": "MOBILE_SDK",
        "integrationVersion": "3.0.0.0",
        "timeZone": "America/New_York",
        "features": [
          "PHOTO_SHARING",
          "CO_APP",
          "AUTO_MESSAGES",
          "RICH_CONTENT",
          "SECURE_FORMS"
        ]
      },
      "originatorId": "d51ce914-97ad-4544-a686-8335b61dcdf3",
      "originatorMetadata": {
        "id": "d51ce914-97ad-4544-a686-8335b61dcdf3",
        "role": "CONSUMER",
        "clientProperties": {
          "type": ".ClientProperties",
          "appId": "com.liveperson.mmanguno.upgradetest23_30",
          "ipAddress": "172.26.138.214",
          "deviceFamily": "MOBILE",
          "os": "ANDROID",
          "osVersion": "27",
          "integration": "MOBILE_SDK",
          "integrationVersion": "3.0.0.0",
          "timeZone": "America/New_York",
          "features": [
            "PHOTO_SHARING",
            "CO_APP",
            "AUTO_MESSAGES",
            "RICH_CONTENT",
            "SECURE_FORMS"
          ]
        }
      },
      "event": {
        "type": "ChatStateEvent",
        "chatState": "ACTIVE"
      },
      "dialogId": "41d33e78-9701-4edd-a569-01dfb6c0f40a",
      "__isMe": false
    }
  ]
}
```

### notification

This event fires on all notifications. We recommend that instead of using this listener you instead listen to the specific notification categories detailed above.

Sample code:
```javascript
agent.on('notification', body => {});
```

### closed

This event fires when the socket is closed.  If the reason is code 4401 or 4407 this indicates an authentication issue, so when you call [reconnect()](messaging-agent-sdk-methods.html#reconnect-skiptokengeneration) you should make sure not to pass the `skipTokenGeneration` argument.

This event will only occur once, so if you want to attempt to reconnect repeatedly you should initiate a periodic reconnect attempt here. **LivePerson recommends that you make periodic reconnect attempts at increasing intervals up to a finite number of attempts in order to prevent flooding our service and being blocked as a potentially abusive client**. See [LivePerson's retry policy guidelines](common-resources-retry-policy-recommendations.html) for more information.

In the sample below we attempt to reconnect 35 times, waiting 5 seconds the first time and increasing the interval by a factor of 1.25 between each attempt.

Sample code:
```javascript
const reconnectInterval = 5;        // in seconds
const reconnectAttempts = 35;
const reconnectRatio    = 1.25;     // ratio in the geometric series used to determine reconnect exponential back-off

// on connected cancel any retry interval remaining from reconnect attempt
agent.on('connected', () => {
    clearTimeout(agent._retryConnection);   
    // etc etc
});

agent.on('closed', () => {
    agent._reconnect();             // call our reconnect looper
});

agent._reconnect = (delay = reconnectInterval, attempt = 1) => {
    agent._retryConnection = setTimeout(()=>{
        agent.reconnect();
        if (++attempt <= reconnectAttempts) { agent._reconnect(reconnectInterval * reconnectRatio, attempt) }
    }, delay * 1000)
 }
```

Example payload:
```json
1006
```

### error

This event fires when the SDK receives an error from the messaging service. If you receive a `401` error you should [reconnect()](messaging-agent-sdk-methods.html#reconnect) according to the [retry policy guidelines](common-resources-retry-policy-recommendations.html) mentioned above, in the [closed](messaging-agent-sdk-methods.html#closed) section. 

Sample code:
```javascript
agent.on('error', err => {
    if (err && err.code === 401) {
        agent._reconnect();  // agent._reconnect() defined in the on('closed',() => {}) example above.
    }
});
```

Example payload:
```json
{"code":"ENOTFOUND","errno":"ENOTFOUND","syscall":"getaddrinfo","hostname":"va.agentvep.liveperson.net","host":"va.agentvep.liveperson.net","port":443}
```
