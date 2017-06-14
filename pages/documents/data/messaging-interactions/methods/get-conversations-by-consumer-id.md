---
title: Get Conversations by Consumer ID
level1: Documents
level2: Data
level3: Messaging Interactions API (Beta)
level4: Methods
order: 30  
permalink: data-messaging-interactions-get-conversations-by-consumer-id.html

indicator: messaging
---

This method retrieves a list of conversations that the consumer participated in.

### Request

Method     | URL
--------   | ---
POST       | `https://<domain>/messaging_history/api/account/{accountID}/conversations/consumer/search`

**BODY/POST Parameters**

Filter is sent in the POST data (body) with the following JSON structure.

Required:

| Name            | Description                        | Type/Value | Notes |
| :---------      | :---------------                   | :----------| :--- |
| consumer | ID of the consumer to search.             | string| |
| status | Latest status of the conversation. | `Array<status>` |  Valid values: "OPEN", " or "CLOSE" |

### Response

See Response in the [Conversations](data-messaging-interactions-conversations.html){:target="_blank"} method.
