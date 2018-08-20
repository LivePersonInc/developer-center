---
pagename: Retrieve Available Agents
redirect_from:
  - agent-retrieve-available-agents.html
Keywords:
sitesection: Documents
categoryname: Agent Interactions
documentname: Chat Agent API
subfoldername: Methods

order: 40
permalink: chat-agent-api-methods-retrieve-available-agents.html

indicator: chat
---

This resource returns all agents which are not disabled in the system for the account provided in the request. The agents returned include both online and offline agents, but not agents that were disabled (for any reason).  For each agent, this resource returns details such as ID, username, nickname, and more. The resource also returns, for each agent, the agent's skills and the agent's availability to accept chats (the number of chats this agent is configured to take and the number of chats in which this agent is already involved).

This resource can be used to know to which other agents you can transfer chats. You may also want to use this method if you want to present all agents in a table (possibly indicating for each agent if they can take chats or not). In these cases you should call this resource periodically in order to be updated with other agents’ statuses.

### Request

| Method | URL                                                                                                |
|--------|----------------------------------------------------------------------------------------------------|
| GET    | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/agentSession/{agentSessionId}/availableAgents?v=1&NC=true |

**Request Headers**

| Header                                   | Description      |
|------------------------------------------|------------------|
| Authorization Bearer {bearer-from-login} |                  |
| Content-Type                             | application/json |
| Accept                                   | application/json |

**Formats**

The body media type must have one of the following formats:

- XML
- JSON

**Parameters**

| Name       | Description                                                             | Type/Value   | Notes                                                 |
|------------|-------------------------------------------------------------------------|--------------|-------------------------------------------------------|
| skill      | Skill name. Filter the returned agents list by the requested skill.     | alphanumeric | Example: {available-agents}?skill=Default&v=1.        |
| chatState  | State name. Filter the returned agents list by the agent's chat state.  | string       | Valid values: "Online", "Offline", "Occupied", "Away" |
| chatReasonId           | chat state reason id (represents a reason as configured in the account) voice.                                                                                        | alphanumeric           | Optional - reasonID is currently not retrievable, contact your Account Team if necessary |
| voiceState | State name. Filter the returned agents list by the agent's voice state. | string       | Valid values: "Online", "Offline", "Occupied", "Away" |

### Response

**Elements in the response**

 | Name                 | Description                                                                                                              | Type / Value      | Notes                                                                                                                                                                                                             |
|----------------------|--------------------------------------------------------------------------------------------------------------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| availableAgents      | The main element which contains the list of available agents and the link to the next call.                              | element           |                                                                                                                                                                                                                   |
| agents               | Contains the list of available agents.                                                                                   | element           |                                                                                                                                                                                                                   |
| agent                | Contains the agent's details (as attributes its ID, chatState, voiceState, maxChats) and more details as child elements. | element           |                                                                                                                                                                                                                   |
| id                   | The ID associated with this agent.                                                                                       | numeric           |                                                                                                                                                                                                                   |
| chatState            | The state of the agent for chat.                                                                                         | numeric           | 1 - Offline - Agent is logged off. 2 - Online - Agent can accept chat requests. 3 - Occupied - Agent can receive chats that were transferred to him/her. 4 - Away - Agent cannot accept chat requests.            |
| voiceState           | The state of the agent for voice.                                                                                        | numeric           | 1 - Offline - Agent is logged off. 2 - Online - Agent can accept voice requests. 3 - Occupied - Agent can receive voice requests that were transferred to him/her. 4 - Away - Agent cannot accept voice requests. |
| maxChats             | The maximum number of chats this agent can take, according to his/her current availability.                              | numeric           |                                                                                                                                                                                                                   |
| userName             | The username of this agent.                                                                                              | alphanumeric      |                                                                                                                                                                                                                   |
| nickname             | The nickname of this agent.                                                                                              | alphanumeric      |                                                                                                                                                                                                                   |
| skills               | The list of skills for this agent.                                                                                       | element           |                                                                                                                                                                                                                   |
| skill                | A skill ID for this agent.                                                                                               | numeric           |                                                                                                                                                                                                                   |
| chats                | The current number of chats for the agent.                                                                               | numeric           |                                                                                                                                                                                                                   |
| link with rel="next" | Use this link to call the next available agents request.                                                                 | link relationship |                                                                                                                                                                                                                   |

**Response Codes**

| Code|  Response|
 |:---|  :---|
 |200  |OK |

Response example for JSON:

```json
{
  "availableAgents": {
    "agents": {
      "agent": [{
        "@chatState": "4",
        "@id": "2",
        "@maxChats": "-1",
        "@voiceState": "1",
        "email": "test@test.com",
        "nickname": "Agent1-Nickname",
        "privilegeGroup": "administrators",
        "skills": {
          "skill": ["2", "4"]
        },
        "userName": "Agent1"
      }]
    },
    "link": {
      "@href": "https://webserver/api/account/20026006/agentSession/982759926/availableAgents?timeStamp=1331544926464",
      "@rel": "next"
    }
  }
}
```
