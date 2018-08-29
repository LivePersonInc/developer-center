---
pagename: Webhooks Examples
redirect_from:
  - webhooks-examples.html
sitesection: Documents
categoryname: Consumer Experience
documentname: Connector API
subfoldername: Webhooks
order: 52
indicator: messaging
permalink: connector-api-webhooks-webhooks-examples.html
---

In this page you can refer to some examples of the events notifications received from the Webhooks service in regards to the conversation.


### Consumer created an new conversation

```json
{
 "kind": "notification",
 "body": {
  "changes": [
   {
    "type": "UPSERT",
    "result": {
     "convId": "5491244f-e462-4c63-bf4e-faf4b2d3e7b5",
     "conversationDetails": {
      "participants": [
       {
        "id": "ade26082b1185839d17e0794924c1a0005cf5663e7c35e38f80dd8552a1a96e5",
        "role": "CONSUMER"
       }
      ],
      "brandId": "64467156",
      "state": "OPEN",
      "startTs": 1528371161882,
      "metaDataLastUpdateTs": 1528371161882,
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


### Consumer sent a text message

```json
{
 "kind": "notification",
 "body": {
  "changes": [
   {
    "sequence": 0,
    "originatorId": "ade26082b1185839d17e0794924c1a0005cf5663e7c35e38f80dd8552a1a96e5",
    "originatorMetadata": {
     "id": "ade26082b1185839d17e0794924c1a0005cf5663e7c35e38f80dd8552a1a96e5",
     "role": "CONSUMER"
    },
    "serverTimestamp": 1528371161893,
    "event": {
     "type": "ContentEvent",
     "message": "Hello from Consumer",
     "contentType": "text/plain"
    },
    "dialogId": "5491244f-e462-4c63-bf4e-faf4b2d3e7b5"
   }
  ]
 },
 "type": "ms.MessagingEventNotification"
}
```


### Agent assigned to the conversation

```json
{
 "kind": "notification",
 "body": {
  "changes": [
   {
    "type": "UPSERT",
    "result": {
     "convId": "5491244f-e462-4c63-bf4e-faf4b2d3e7b5",
     "conversationDetails": {
      "participants": [
       {
        "id": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
        "role": "ASSIGNED_AGENT"
       },
       {
        "id": "ade26082b1185839d17e0794924c1a0005cf5663e7c35e38f80dd8552a1a96e5",
        "role": "CONSUMER"
       }
      ],
      "brandId": "64467156",
      "state": "OPEN",
      "startTs": 1528371161882,
      "metaDataLastUpdateTs": 1528371195521,
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


### Agent read the message

```json
{
 "kind": "notification",
 "body": {
  "changes": [
   {
    "sequence": 1,
    "originatorId": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
    "originatorMetadata": {
     "id": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
     "role": "ASSIGNED_AGENT"
    },
    "serverTimestamp": 1528371196009,
    "event": {
     "type": "AcceptStatusEvent",
     "status": "READ",
     "sequenceList": [
      0
     ]
    },
    "dialogId": "5491244f-e462-4c63-bf4e-faf4b2d3e7b5"
   }
  ]
 },
 "type": "ms.MessagingEventNotification"
}
```

### Agent is typing

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
    "dialogId": "5491244f-e462-4c63-bf4e-faf4b2d3e7b5"
   }
  ]
 },
 "type": "ms.MessagingEventNotification"
}
```

**Note**: In order to get also "Consumer is typing" events notifications the Connector must send LiceEngage using the SEND enpoint a message that contains the `COMPOSING` ChatStateEvent. See more information in [here](send-chat-state-example.html)


### Agent has stopped typing but still on the chat window - ACTIVE


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
    "dialogId": "5491244f-e462-4c63-bf4e-faf4b2d3e7b5"
   }
  ]
 },
 "type": "ms.MessagingEventNotification"
}
```


### Agent sent a text messages


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
    "serverTimestamp": 1528371199686,
    "event": {
     "type": "ContentEvent",
     "message": "Hello from the Agent\n",
     "contentType": "text/plain"
    },
    "dialogId": "5491244f-e462-4c63-bf4e-faf4b2d3e7b5"
   }
  ]
 },
 "type": "ms.MessagingEventNotification"
}
```

### Agent sent another message - Please notice the increased sequence counter

```json
{
 "kind": "notification",
 "body": {
  "changes": [
   {
    "sequence": 3,
    "originatorId": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
    "originatorMetadata": {
     "id": "29c3019d-fe0b-5200-afe8-737abfeae4b4",
     "role": "ASSIGNED_AGENT"
    },
    "serverTimestamp": 1528372178604,
    "event": {
     "type": "ContentEvent",
     "message": "Hello from Agent\n",
     "contentType": "text/plain"
    },
    "dialogId": "5491244f-e462-4c63-bf4e-faf4b2d3e7b5"
   }
  ]
 },
 "type": "ms.MessagingEventNotification"
}
```


#### ms.PublishEvent Properties

| Property | Description | Value/Example | Type | Mandatory | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| dialogId/convId | The `conversationId` created by CONVERSATION request | "8602832d-dce1-446b-8445-0d51f5926a42" | string | true | Can be found in the response of [CONVERSATION endpoint](sendapi-create.html#response) |
