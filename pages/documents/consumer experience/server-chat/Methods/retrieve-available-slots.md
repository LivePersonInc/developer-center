---
title: Retrieve Available Slots
level1: Documents
level2: Consumer Experience
level3: Server Chat API
level4: Methods

order: 20
permalink: consumer-experience-server-chat-retrieve-available-slots.html

indicator: chat
---

The capacity (or number of slots) in the chat system, is the total  number of chats that can be handled simultaneously by all online agents. Since some agents can handle multiple chats, the number of slots is usually larger than the number of agents. Available Slots refers to the number of slots that are free at the current time.

### Request

| Method | URL  |
| :--- | :--- |
| GET | https://[{domain}](https://developers.liveperson.com/agent-domain-domain-api.html)/api/account/{accountId}/chat/availableSlots?v=1&NC=true |

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

| Name	| Description | Type | Notes |
| :--- | :--- | :--- | :--- |
| skill | Calculates the number of available slots in queue for a specific skill. | alphanumeric | |
| maxWaitTime | The maximum time in seconds that a visitor can wait before a chat starts. | numeric | Must be between 0 and 86,400 seconds (24 hours). Use 0 for immediate availability. |
 
Availability for a specific agent can be requested using the following parameter:

| Name	| Description | Type | Notes |
| :--- | :--- | :--- |  :--- |
| agent | Agent login name, calculates the number of available slots for a specific agent. | alphanumeric | Cannot be used with other parameters. |
  
**Notes**:

- *The calculation of wait time is based on a statistical estimate and might constantly change.*
- *When the number of available slots is unlimited the response is -1.*
 
### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 200 | Successful |

JSON Example

    {
      "availableSlots": 1
    }
