---
pagename: Submit Agent Survey
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Agent Survey For Messaging Runtime API 
subfoldername: Methods
permalink: /agent-survey-for-messaging-runtime-api-methods-submit-agent-survey.html
indicator: messaging
---

Submit the agent survey and produce FormSubmitEvent and Purchase/Lead/ServiceActivity events in case of engagement attribute question.
Submit is allowed if the agent survey was not dismissed before. 

### Request

| Method | URL |
| :-------- | :------ |
| POST  | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/forms/agent_survey/state |

**Path Parameters**

 |Parameter  |Description |  Type / Value |
 |:----------- | :------------ | :--------------- |
 |accountId | LP site ID | String  |

 **Query Parameters**

| Parameter | Description | Type / Value | Required | Notes
|:----------- |  :------------ | :--------------- | :--- | :--- | 
| conv | conversation id | String | Required | ^[a-zA-Z0-9_]{1,20}$ |
| skill | skill id | long | Required |
| v | API version number | String | Required |


**Request Headers**

|Header | Description| Notes |
|:------- | :-------------- | :--- |
| Authorization | Contains token string to allow request authentication and authorization.|
| x-lp-state-rev | state revision, use the value last received from the server (response header of the last request) | 

**Request Body**

```json
[{
    "id": 16566656,
    "questionStatus": "show"
},
{
    "id": 25646456,
    "questionStatus": "answer",
    "replyIds": [11]
},
{
    "id": 34565645,
    "questionStatus": "answer",
    "freeTextReply": "this is the agent's response"
},
{
    "id": 78997887,
    "questionStatus": "answer",
    "engAttribute": {
        "type": "service",
        "service" : {
            "topic": "loan",
            "status" : 3,
            "category": "business", 
            "serviceId": "544547"
        }
    }
},
{
    "id": 8786788,
    "questionStatus": "answer",
    "engAttribute": {
        "type": "lead",
        "service" : {
            "topic": "sales",
            "value" : 2.0,
            "leadId": "878979", 
            "currency": "USD"
        }      
    }
},
{
    "id": 11345354,
    "questionStatus": "answer",
    "engAttribute": {
        "type": "purchase",
        "service" : {
            "total": 100.5,
            "orderId" : "476847365",
            "currency": "USD"
        }  
    }
}
]
```

## Response

**Response Codes**

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 206  | Partial Content       |
| 400  | Bad Request           |
| 401  | Not Authorized        |
| 403  | Forbidden             |
| 404  | Data Not Found        |
| 409  | Conflict              |
| 410  | Gone                  |
| 500  | Internal Server Error |

**Response Headers**

|Header|  Description|
|:-------|   :-----  |
|x-lp-state-rev|  state revision - used in POST/PUT/DELETE requests to avoid data discrepancy |  

**Response example**

```json
{
    "agentSurveyStatus": "submitted",
    "lastActionTimeInMillis": 1564378978227,
    "autoCloseTimestamp": 0,
    "stateRevision": 1564378978225684480
}
```

**Entity structure**

For details on the entity structure, please see the [appendix](/agent-survey-for-messaging-configuration-api-appendix.html)