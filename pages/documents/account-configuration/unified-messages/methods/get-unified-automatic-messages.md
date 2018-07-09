---
title: Get Unified Automatic Messages
keywords:
level1: Documents
level2: Account Configuration
level3: Unified Automatic Messages API
level4: Methods

order: 10
permalink: unified-automatic-messages-api-methods-get-unified-automatic-messages.html

indicator: both
---

Retrieves a list of Unified Automatic Messages for a specific account.

### Request

| Method | URL |
| :-------- | :------ |
| GET | api/account/{accountId}/configuration/engagement-window/unified-auto-messages |

**Request Headers**

| Header | Description |
| :------- | :-------------- |
 |Authorization | Contains token string to allow request authentication and authorization. |
| If-Match | Contains data revision as known by the client. Allows optimization of the backend, networking, and client resources utilization. |


**Path Parameters**

 |Parameter|  Description|  Type|  Notes| 
 |:----------|  :--------------|  :--------------|  :---| 
 |accountId|  LP site ID|  string |  Validation fail error code: 400 |

**Query Parameters**

| Name            | Description                                                                  | Type    | Notes                                          |
|-----------------|------------------------------------------------------------------------------|---------|------------------------------------------------|
| v               | API version                                                                  | String  | 2.0 is the current version                     |
| include_deleted | Flag indicating whether deleted entities should be returned in the response. | Boolean | Valid values: True/False. Default value: False |
| sanitize_data   | Flag indicating whether the text should be sanitized (Antisamy).             | Boolean | Valid values: True/False. Default value: False |
| lang            | Languages (separated by commas) to filter the response by.                   | string  | Format: en-US, en-UK. Default value: null      |
| select          | Yoga selector expression.                                                    | string  | Example values: id, name. Default value: null  |
| context_id      | Context Id                                                                   | string  | Optional Context id (default is account id for ACCOUNT context)     |
| context_type    | Context Type                                                                 | string  | Optional request context type (default is ACCOUNT)     |
| view            | view                                                                         | string  | Optional flag to indicate that the response should include SKILL context data as well     |


### Response

**Response Headers**

| Header|  Description |
 |:-------  | :----- | 
 |ac-revision | Account config object type collection revision. | 

**Response Codes**

| Code | Description |
| :----- | :------------ |
| 304 | Not Modified |
| 401 | Not Authenticated |
| 403 | Not Authorized |
| 500 | Internal Server Error |

**Response Body**

    {
        {
            "messageEventId": "CHAT_STARTED",
            "deleted": false,
            "enabled": true,
            "data": [
                {
                    "msg": "You are chatting with {agent name}",
                    "lang": "en-us"
                },
                {
                    "msg": "Que está conversando {nombre del agente}",
                    "lang": "ca-ES" 
                }
            ]
        },
        {
            "messageEventId": "On-hold message #1",
            "deleted": false,
            "enabled": true,
            "data": [
                {
                    "msg": "I'll be right with you.",
                    "lang": "en-us" 
                },
                {
                    "msg": "Que está conversando {nombre del agente}",
                    "lang": "ca-ES" 
                }
            ],
            "attributes": [
                {
                    "timer" : "60"
                }
            ]
        }
    {
    
Contexted response:

    {
		[
		  {
		    "messageEventId": "CHAT_STARTED",
		    "enabled": true,
		    "deleted": false
		    "data": [
		      {
		        "lang": "en-US",
		        "msg": "I'll be right with you"
		      },
		      {
		        "lang": "cs-CZ",
		        "msg": "Estaré con ustedes"
		      }
		    ],    
		    "attributes": [
		          {
		              "timer": "60"
		          }
		    ]
		    "contexts": {
		      "SKILL": ["3"],
		      "ACCOUNT": ["111"]
		    },
		    "attributes": [
		      {
		        "att1": "val1"
		      }
		    ],
		  }
		  ...
		]
	}

