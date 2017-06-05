---
title: Retrieve Agent Information
Keywords:
level1: Documents
level2: Agent Interactions
level3: Chat Agent API
level4: Methods

order: 60
permalink: agent-retrieve-agent-information.html

---

This method returns the agent's information such as name, maximum number of chats allowed, and availability.

*Note: When maxChats is unlimited, -1 is returned.*

### Request

| Method | URL                                                                                                           |
|--------|---------------------------------------------------------------------------------------------------------------|
| GET    | https://{domain}/api/account/{accountId}/api/account/{accountId}/agentSession/{agentSession}/info?v=1&NC=true |

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

### Response

**Elements in the response**

| Name         | Description                                                                                                                  | Type/Value   | Notes                                      |
|--------------|------------------------------------------------------------------------------------------------------------------------------|--------------|--------------------------------------------|
| agentName    | The name the visitors will see when chatting with the agent. It is the nickname of the agent defined in the Agent Workspace. | alphanumeric |                                            |
| displayName  | The name displayed in the list of agents in the Agent Workspace.                                                             | alphanumeric |                                            |
| loginName    | The agent uses this name to login.                                                                                           | alphanumeric |                                            |
| id           | The agent's unique ID.                                                                                                       | numeric      |                                            |
| maxChats     | The maximum number of chats the agent can handle simultaneously.                                                             | numeric      |                                            |
| availability | The availability state of the agent.                                                                                         | string       | Valid values: "Online", "Away", "Occupied" |

**Response Codes**

| Code|  Response| 
 |:---  |:--- |
 |200|  OK| 

Response example:

    {
     "info": {
       "link": {
         "@href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/info",
         "@rel": "self"
       },
       "agentName": "John Smith",
       "displayName": "John Smith",
       "loginName": "John@company.com",
       "id": "25025413",
       "maxChats": "-1",
       "availability": {
         "chat": "Online",
         "voice": "Offline"
       },
       "skillsInfo": {
         "skillInfo": [
           {
             "id": "25975313",
             "name": "Sales"
           },
           {
             "id": "26060413",
             "name": "Billing"
           },
           {
             "id": "26077613",
             "name": "OrdersHandlers"
           }
         ]
       }
     }
    }