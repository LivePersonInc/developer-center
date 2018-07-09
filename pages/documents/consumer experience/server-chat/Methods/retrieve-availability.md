---
title: Retrieve Availability
Keywords:
level1: Documents
level2: Consumer Experience
level3: Server Chat API
level4: Methods

order: 10
permalink: server-chat-api-methods-retrieve-availability.html

indicator: chat
---

This method checks whether there are agents on this account that are available for chat.

### Request

| Method | URL  |
| :--- | :--- |
| GET | https://{domain}/api/account/{accountId}/chat/availability?v=1&NC=true |

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

| Name	| Description | Type/Value | Notes |
| :--- | :--- | :--- | :--- |
| skill | Checks for the availability of a specific skill. | alphanumeric | |
| serviceQueue | Checks for availability in a specific service queue. | alphanumeric | Must be used together with the maxWaitTime parameter. | 
| maxWaitTime | The maximum time in seconds that a visitor can wait before a chat starts. | numeric | Must be between 0 and 86,400 seconds (24 hours). Use 0 for immediate availability. |
 
Availability for a specific agent can be requested using the following parameter:

| Name	| Description | Type/Value | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| agent | Agent login name, checks for availability of a specific agent. | alphanumeric | Optional| Cannot be used with other parameters. |
  
**Notes**:

- *The calculation of wait time is based on a statistical estimate and might change constantly.*
- *A maxWaitTime of 0 will return true if there are agents with capacity to immediately accept chats. When maxWaitTime is omitted, the system will return true so long as there are online agents, regardless of the size of the wait queue.*
 
### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 200 | Successful |

JSON Example:

    {
      "availability": true
    }

**Elements in the Response**

| Name	| Description | Type/Value | 
| :--- | :--- | :--- | 
| availability | Returns true if agents are available, false if agents are not available.	| Boolean |
 
