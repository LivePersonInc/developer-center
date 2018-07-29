---
title: Retrieve Estimated Wait Time
redirect_from:
  - consumer-experience-server-chat-retrieve-estimated-wait-time.html
level1: Documents
level2: Consumer Experience
level3: Server Chat API
level4: Methods

order: 30
permalink: server-chat-api-methods-retrieve-estimated-wait-time.html

indicator: chat
---

Returns the estimated wait time in seconds before a chat starts. 

The following wait times are explained below:

| Wait Times | Description |
| :--- | :--- |
| 0 | At least one agent is available for chat immediately (the agent is online and has not exceeded his/her maximum number of chats). |
| -1 | No agents are online and/or chat service is unavailable. |
| -2 | Chat service is available, however there is not enough data to predict the estimated wait time. |

*Note: This method cannot be called for a particular agent.*

### Request

| Method | URL  |
| :--- | :--- |
| GET | https://{domain}/api/account/{accountId}/chat/estimatedWaitTime?v=1&NC=true |

**Formats**

- XML
- JSON

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | LivePerson appKey=721c180b09eb463d9f3191c41762bb68 |
| Content-Type | application/json |
| Accept | application/json |

**Query Parameters**

| Name	| Description | Type/Value |
| :--- | :--- | :--- |
| skill | Checks for the wait time for a specific skill. | alphanumeric |
| serviceQueue | Service queue name. Checks for the wait time in a specific Service Queue. | alphanumeric |
 
### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 200 | Successful |

JSON Example

    {
      "estimatedWaitTime": 0
    }

