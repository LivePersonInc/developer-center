---
pagename: Retrieve Available Slots
redirect_from:
  - agent-retrieve-available-slots.html
Keywords:
sitesection: Documents
categoryname: Agent Interactions
documentname: Chat Agent API
subfoldername: Methods

order: 50
permalink: chat-agent-api-methods-retrieve-available-slots.html

indicator: chat
---

The capacity (or number of slots) in the chat system is the total number of chats that can be handled simultaneously by all online agents. Since some agents can handle multiple chats, the number of slots is usually larger than the number of agents. Available Slots refers to the number of slots that are free at the current time.

### Request

 |Method|  URL |
  |:---|  :--- |
 |GET| https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/agentSession/{agentSessionId}/chat/availableSlots?v=1&NC=true |

**Request Headers**

 |Header | Description| 
 |:---|  :--- |
 |Authorization| Bearer {bearer-from-login} |
 |Content-Type|  application/json |
 |Accept|  application/json |

**Formats**

The body media type must have one of the following formats:

- XML
- JSON

**Parameters**

For requesting available slots:

 | Name        | Description                                                         | Type/Value      | Notes                                                                                      |
|-------------|---------------------------------------------------------------------|-----------------|--------------------------------------------------------------------------------------------|
| skill       | Skill name. Calculates the number of available slots in queue for a | specific skill. | alphanumeric Example: {chat-available-slots}?skill=Default&maxWaitTime=200&v=1.            |
| maxWaitTime | The maximum time in seconds that a visitor can wait before a chat   | starts.         | numeric Must be between 0 and 86,400 seconds (24 hours). Use 0 for immediate availability. |

For requesting available slots for a specific agent:

| Name  | Description | Type/Value|Notes|
|-------|-------------|--------------|-------|
| agent | Agent login name, calculates the number of available slots of a specific agent. | alphanumeric | Cannot be used with other parameters. Example: {chat-available-slots}?agent=John&v=1. |

### Response

**Response Codes**

 |Code  |Response| 
 |:---|  :---| 
 |200  |OK |

Response example:

    {
     "availableSlots": 1
    }

**Notes**:

- *The calculation of wait time is based on a statistical estimate and may change constantly.*
- *When the number of available slots is unlimited, the response is -1.*