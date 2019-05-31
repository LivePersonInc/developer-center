---
pagename: Retrieve Chat Sessions
redirect_from:
  - agent-retrieve-chat-sessions.html
Keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Chat Agent API
subfoldername: Methods

order: 90
permalink: chat-agent-api-methods-retrieve-chat-sessions.html

indicator: chat
---

This method returns a list of the chat-session URIs that this agent managed in the previous session.

### Request

 |Method|  URL |
 |:---  |:--- |
 |GET|  https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/agentSession/{agentSessionId}/chatSessions?v=1&NC=true |

**Request Headers**

 |Header|  Description|
 |:---  |:--- |
 |Authorization| Bearer {bearer-from-login} |
 |Content-Type|  application/json |
 |Accept|  application/json |

**Formats**

The body media type must have one of the following formats:

- XML
- JSON

### Response

**Elements in the response**

 | Name           | Description                                       | Type/Value        |
|----------------|---------------------------------------------------|-------------------|
| chat-session   | URI to retrieve the chat session events and info. | link relationship |
| chatSessionKey | The chat session key.                             | alphanumeric      |
| startTime      | The chat session start time.                      | numeric           |

**Response Codes**

 |Code|  Response|
 |:---|  :---|
 |200|  OK|

Response example for JSON:

```json
{
  "chatSessions": {
    "chatSession": [
      {
        "link": {
          "href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}",
          "rel": "chat-session"
        },
        "chatSessionKey": "H31879676690579736-632532233958645150K8414055",
        "startTime": 1440934609097
      }
    ]
  }
}   
```

**Note**: This resource is intended to provide a "continuity" ability to the agent while moving between one device to another. This means that the secondary agent session login action must take place while there is a current agent session active for that specific agent. In case the agent logs out of the system and then logs in again, any active chat session from the previous session will be returned back to the queue or disconnected in case there is no suitable agent to take the chat. Recommended polling interval should not be less that 2 seconds (2000 ms).
