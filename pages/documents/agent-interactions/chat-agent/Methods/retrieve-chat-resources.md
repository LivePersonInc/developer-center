---
title: Retrieve Chat Resources, Events and Information
Keywords:
level1: Documents
level2: Agent Interactions
level3: Chat Agent API
level4: Methods

order: 100
permalink: agent-retrieve-chat-resources.html

indicator: chat
---

This method retrieves the chat events, information and resources.

### Request

 |Method|  URL|
 |:---  |:--- |
 |GET|  https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}?v=1&NC=true |

**Request Headers**

 |Header  |Description |
 |:---|  :---|
 |Authorization| Bearer {bearer-from-login} |
 |Content-Type|  application/json |
 |Accept|  application/json |

**Formats**

The body media type must have one of the following formats:

- XML
- JSON

### Response

**Elements in the response**

 | Name         | Description                                                                                                                           | Type/Value        |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| visit-id     | URI for aggregated data and links for information on the visit, pages visited and surveys related to the visit.                       | link relationship |
| transfer     | Transfer a chat from an agent to a specific skill.                                                                                    | link relationship |
| events       | Retrieves the chat events such as: state, resource and line. Use this method to periodically poll for new events in the chat session. | link relationship |
| agent-survey | URI for retrieving the Agent survey structure and submitting the survey data. link relationship                                       |                   |
| info         | Retrieves information regarding the current status of the chat.                                                                       | link relationship |
| next         | The method for polling additional events. This will retrieve events added after your last poll.                                       | link relationship |
| ``           | The chat events. See [Chat events](agent-retrieve-chat-events.html){:target="_blank"}.                                                                  | -                 |
| ``           | The actual information about the chat. See [Chat information](agent-retrieve-chat-info.html){:target="_blank"}.                                           |                   |

**Response Codes**

| Code|  Response |
 |:---|  :---|
 |200  |OK |

Response example:

```json
{
  "info": {
   "link": {
     "@href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/info",
     "@rel": "self"
   },
   "agentName": "John Smith",
   "displayName": "John Smith",
   "loginName": "john@company.com",
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
  {
  "availability": {
   "chat": "Online",
   "voice": "Offline"
  }
  }
  {"availability": {"chat": "Online"}}
  {
  "availableAgents": {
   "agents": {
     "agent": [
       {
         "@id": "25025413",
         "@chatState": "2",
         "@voiceState": "1",
         "@maxChats": "-1",
         "userName": "Reem Diab",
         "nickname": "Reem Diab",
         "email": "reemd@liveperson.com",
         "privilegeGroup": "administrators",
         "skills": {
           "skill": [
             "25975313",
             "26060413",
             "26077613"
           ]
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
         },
         "agentGroupName": "Admin",
         "agentGroupId": "-1",
         "elapsedTimeInState": "908445"
       },
       {
         "@id": "26559413",
         "@chatState": "1",
         "@voiceState": "1",
         "@maxChats": "4",
         "userName": "sales",
         "nickname": "sales",
         "email": "sales@sales.com",
         "privilegeGroup": "administrators",
         "skills": {
           "skill": "25975313"
         },
         "skillsInfo": {
           "skillInfo": {
             "id": "25975313",
             "name": "Sales"
           }
         },
         "agentGroupName": "Sales",
         "agentGroupId": "26432513",
         "elapsedTimeInState": "0"
       },
       {
         "@id": "26621513",
         "@chatState": "1",
         "@voiceState": "1",
         "@maxChats": "4",
         "userName": "salesmanager",
         "nickname": "salesmanager",
         "email": "sales@salesmanager.com",
         "privilegeGroup": "administrators",
         "skills": {
           "skill": "25975313"
         },
         "skillsInfo": {
           "skillInfo": {
             "id": "25975313",
             "name": "Sales"
           }
         },
         "agentGroupName": "Sales",
         "agentGroupId": "26432513",
         "elapsedTimeInState": "0"
       },
       {
         "@id": "26663513",
         "@chatState": "1",
         "@voiceState": "1",
         "@maxChats": "0",
         "userName": "BigManager",
         "nickname": "BigManager",
         "email": "BigManager@BigManager.com",
         "privilegeGroup": "administrators",
         "skills": null,
         "skillsInfo": null,
         "agentGroupName": "Admin",
         "agentGroupId": "-1",
         "elapsedTimeInState": "0"
       },
       {
         "@id": "26699013",
         "@chatState": "1",
         "@voiceState": "1",
         "@maxChats": "4",
         "userName": "HandelOrders1",
         "nickname": "HandelOrders1",
         "email": "HandelOrders1@HandelOrders1.com",
         "privilegeGroup": "administrators",
         "skills": {
           "skill": "26077613"
         },
         "skillsInfo": {
           "skillInfo": {
             "id": "26077613",
             "name": "OrdersHandlers"
           }
         },
         "agentGroupName": "OrderHandlers",
         "agentGroupId": "26475813",
         "elapsedTimeInState": "0"
       },
       {
         "@id": "26729413",
         "@chatState": "1",
         "@voiceState": "1",
       }
  {
  "availableSlots": 1
  }
  {
  "chat": {
   "link": [
     {
       "@href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}",
       "@rel": "self"
     },
     {
       "@href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/events",
       "@rel": "events"
     },
     {
       "@href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/info",
       "@rel": "info"
     },
     {
       "@href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}?from=4",
       "@rel": "next"
     },
     {
       "@href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/collaborationChannels",
       "@rel": "collaboration-channels"
     },
     {
       "@href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/visits/visit/{visitId}",
       "@rel": "visit-id"
     },
     {
       "@href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/transfer",
       "@rel": "transfer"
     },
     {
       "@href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/transferAccount",
       "@rel": "transfer-account"
     },
     {
       "@href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/survey",
       "@rel": "agent-survey"
     }
   ],
   "events": {
     "link": [
       {
         "@href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/events",
         "@rel": "self"
       },
     ]}
}
```
