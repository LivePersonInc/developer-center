---
title: Conversations - Content
redirect_from:
  - consumer-experience-messaging-history-conversation-content.html
sitesection: Documents
level2: Data
level3: Consumer Messaging History API
level4: Methods
order: 10
permalink: consumer-messaging-history-api-methods-conversations---content.html
indicator: messaging
---

This method retrieves the content of specific conversations as a message events list.

### Request

|Method | URL |
|------|-----|
|GET   | `https://<domain>/messaging_history/api/account/{accountID}/conversations/conversation/content/search?conversationId=4a6ce154-a086-4bfb-8ab2-2658fd88157`|

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
event                | Contains message event data.                              | container  | Valid types: ContentEvent, RichContentEvent, AcceptStatusEvent  

_event - ContentEvent_

Name                 | Description                | Type/Value          | Notes
:------------------- | :--------------------------| :-------------------|---------------------------------------------
type                 | The type of the message.   | string              | Valid values: "ContentEvent"
contentType          | The type of the contnet.   | string              | Valid values: "text/plain", "hosted/file", "forms/secure-submission", "forms/secure-invitation"
message              | The message content.       | MessageContent      | The content structure is different per type 


_message - text/plain_

Name                 | Description                | Type/Value          | Notes
:------------------- | :--------------------------| :-------------------|---------------------------------------------
message              | The text of the message.   | string              | The message field holds the text value.

_message - hosted/file_

Name                 | Description                | Type/Value          | Notes
:------------------- | :--------------------------| :-------------------|---------------------------------------------
caption              | The caption of the file.   | string              | 
relativePath         | Relative path of the file. | string              | 
fileType             | Type of the file.          | string              | Valid values: "JPG", "PNG", "GIF", "TXT", "PDF"
preview              | A preview of the file.     | string              | File thumbnail in base64

_message - forms/secure-submission_

Name                 | Description                    | Type/Value          | Notes
:------------------- | :------------------------------| :-------------------|---------------------------------------------
invitationId         | The invitationId of the form   | string              | 

_message - forms/secure-invitation_

Name                 | Description                    | Type/Value          | Notes
:------------------- | :------------------------------| :-------------------|---------------------------------------------
invitationId         | The invitationId of the form   | string              | 
title                | The title of the form          | string              | 


_event - RichContentEvent_

Name                 | Description                | Type/Value          | Notes
:------------------- | :--------------------------| :-------------------|---------------------------------------------
type                 | The type of the message.   | string              | Valid values: "RichContentEvent"
content              | The content of the message.| string              | A JSON representation of the message's rich content


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
            "sequence": 6,
            "originatorId": "9a8392e5-33d1-4d34-a91e-a00bc9e111c0",
            "serverTimestamp": 1515321942786,
            "event": {
                "type": "ContentEvent",
                "contentType": "hosted/file",
                "message": {
                    "caption": "",
                    "relativePath": "/v1/AUTH_async-images/le79144597/9a8392e5-33d1-4d34-a91e-a00bc9e111c0_uuid_5fe9fa91-e022-4b74-94aa-76a7c6f662d5_07-01-2018_12-45-27-762.JPG",
                    "fileType": "JPG",
                    "preview": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAAqACAAQAAAABAAAAWqADAAQAAAABAAAAeAAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAeABaAwERAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmd..."
                }
            }
        },
        {
            "sequence": 4,
            "originatorId": "5fd32975-1874-5db2-a1eb-affbbe99cc98",
            "serverTimestamp": 1514985573710,
            "event": {
                "type": "RichContentEvent",
                "content": "{\"type\":\"vertical\",\"elements\":[{\"type\":\"text\",\"text\":\"product name (Title)\",\"tooltip\":\"text tooltip\",\"style\":{\"bold\":true,\"size\":\"large\"}},{\"type\":\"text\",\"text\":\"product name (Title)\",\"tooltip\":\"text tooltip\"}]}"
            }
        },
        {
            "sequence": 15,
            "originatorId": "5fd32975-1874-5db2-a1eb-affbbe99cc98",
            "serverTimestamp": 1514987081780,
            "event": {
                "type": "ContentEvent",
                "contentType": "forms/secure-invitation",
                "message": {
                    "invitationId": "a5571603699415cf60a94c34eb031159b144bb9ab2c4ef84064ec4848dbf0921-6550b969-b19e-417b-8b55-93d538cdf0d5-1514987081746-1",
                    "title": "Credit card form"
                }
            }
        },
        {
            "sequence": 19,
            "originatorId": "a5571603699415cf60a94c34eb031159b144bb9ab2c4ef84064ec4848dbf0921",
            "serverTimestamp": 1514987089576,
            "event": {
                "type": "ContentEvent",
                "contentType": "forms/secure-submission",
                "message": {
                    "invitationId": "a5571603699415cf60a94c34eb031159b144bb9ab2c4ef84064ec4848dbf0921-6550b969-b19e-417b-8b55-93d538cdf0d5-1514987081746-1"
                }
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
        }
    ]
}

```
