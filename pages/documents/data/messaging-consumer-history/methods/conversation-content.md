---
title: Conversations
level1: Documents
level2: 
level3: Consumer Messaging history API (BETA)
level4: Methods
order: 10
permalink: consumer-experience-messaging-history-conversation-content.html
indicator: messaging
---

This method retrieves the content of specific conversations as a message events list.

### Request

Method | URL
------ | ---------------------------------------------------------------------------------------------------
GET   | `https://<domain>/messaging_history/api/account/{accountID}/conversations/conversation/content/search?conversationId=4a6ce154-a086-4bfb-8ab2-2658fd88157

**URL Parameters**

Name   | Description                                                          | Type/Value | Required | Notes
:----- | :------------------------------------------------------------------- | :--------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------
conversationId | The id of the conversation to be retrieved. | String    | Required | 

### Response

**Elements in the Response**

_messageEvent record_

Name                 | Description                                               | Type/Value | Notes
:------------------- | :-------------------------------------------------------- | :--------- | --------------
sequence             | The event sequence within the conversation.               | Int        | Currently available only for message of type 'ContentEvent'
originatorId         | The id of the participant who wrote/accepted the message. | String     |
serverTimestamp      | Event time stamp.                                         | long       |
event                | Contains message event data.                              | container  | Valid types: ContentEvent, AcceptStatusEvent  

_event - ContentEvent_ 

Name                 | Description                | Type/Value | Notes
:------------------- | :--------------------------| :--------- |---------------------------------------------
type                 | The type of the message.   | string     | Valid values: "ContentEvent"
contentType          | The type of the contnet.   | string     | Valid values: "text/plain"
message              | The message text.          | string     | 



_event - AcceptStatusEvent_

Name                 | Description                                      | Type/Value   | Notes
:------------------- | :------------------------------------------------| :----------- | ---------------------------------
type                 | The type of the message.                         | string       | Valid values: "AcceptStatusEvent"
status               | The status of the message event.                 | string       | Valid values: "ACCEPT","READ" 
sequenceList         | The sequence of the message the status refers to | Array[int]   |

**JSON Example**

```json
{
    "messageEventRecords": [
        {
            "sequence": 0,
            "originatorId": "45b7a957369a46b5bb9fa4dc7c556a54e4d8c0b00f9a7ebc9d8d67a35580c77e",
            "serverTimestamp": 1501399092573,
            "event": {
                "type": "ContentEvent",
                "contentType": "text/plain",
                "message": "hello"
            }
        },
        {
            "sequence": 3,
            "originatorId": "de4fa420-52d6-538a-bb94-9f0fef829840",
            "serverTimestamp": 1501399110926,
            "event": {
                "type": "ContentEvent",
                "contentType": "text/plain",
                "message": "How can I help you?"
            }
        },
        {
            "originatorId": "de4fa420-52d6-538a-bb94-9f0fef829840",
            "serverTimestamp": 1501399101110,
            "event": {
                "type": "AcceptStatusEvent",
                "status": "ACCEPT",
                "sequenceList": [
                    0
                ]
            }
        },
        {
            "originatorId": "de4fa420-52d6-538a-bb94-9f0fef829840",
            "serverTimestamp": 1501399101249,
            "event": {
                "type": "AcceptStatusEvent",
                "status": "READ",
                "sequenceList": [
                    0
                ]
            }
        },
        {
            "originatorId": "45b7a957369a46b5bb9fa4dc7c556a54e4d8c0b00f9a7ebc9d8d67a35580c77e",
            "serverTimestamp": 1501399111006,
            "event": {
                "type": "AcceptStatusEvent",
                "status": "ACCEPT",
                "sequenceList": [
                    3
                ]
            }
        },
        {
            "originatorId": "45b7a957369a46b5bb9fa4dc7c556a54e4d8c0b00f9a7ebc9d8d67a35580c77e",
            "serverTimestamp": 1501399113240,
            "event": {
                "type": "AcceptStatusEvent",
                "status": "READ",
                "sequenceList": [
                    3
                ]
            }
        }
    ]
}

```
