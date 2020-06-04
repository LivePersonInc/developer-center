---
pagename: Get Agent Survey 
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Agent Survey For Messaging Runtime API 
subfoldername: Methodsz
permalink: agent-survey-for-messaging-runtime-api-methods-get-agent-survey.html
indicator: messaging
---

Get the full agent survey configuration <br>
Get the next sequence of the survey - sequence is a series of question starting from the root question and ending with a question that contains logic 

### Request

| Method | URL |
| :-------- | :------ |
| GET  | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/forms/agent_survey/|

**Path Parameters**

 |Parameter  |Description |  Type / Value |
 |:----------- | :------------ | :--------------- |
 |accountId | LP site ID | String  |

 **Query Parameters**

| Parameter | Description | Type / Value | Required | Notes
|:----------- |  :------------ | :--------------- | :--- | :--- | 
| conv | conversation id | String | Required | ^[a-zA-Z0-9_]{1,20}$ |
| skill | skill id | long | Required |
| seq | boolean to determine if the full survey will be returned or next sequence | Boolean | Optional | Default value is true |
| seqRoot | questionId, describe the first question in the next sequence | Long | Optional | If seqRoot was not provided and seq=true, the first sequence of the survey will be returned |
| v | API version number | String | Required |


**Request Headers**

|Header | Description| Notes |
|:------- | :-------------- | :--- |
|Authorization | Contains token string to allow request authentication and authorization.|

## Response

**Response Codes**

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 206  | Partial Content                    |
| 400  | Bad Request           |
| 401  | Not Authorized        |
| 403  | Forbidden             |
| 404  | Data Not Found        |
| 410  | Gone              |
| 500  | Internal Server Error |

**Response Headers**

|Header|  Description|
|:-------|   :-----  |
|x-lp-state-rev|  state revision - used in POST/PUT/DELETE requests to avoid data discrepancy |  

**Response example**

```json
{
    "id": 3538577310,
    "name": "skillsurvey",
    "root": 1,
    "questions": [
        {
            "id": 1787,
            "orderId": 1,
            "text": "questionText",
            "next": 3,
            "nextInOrder": false,
            "required": true,
            "category": "date",
            "questionDefinition": "regular_question",
            "containsLogic": false
        },
 
        {
            "id": 4565,
            "orderId": 4,
            "text": "question_text",
            "next": 5,
            "nextInOrder": false,
            "required": true,
            "category": "free_text",
            "questionDefinition": "engagement_attributes",
            "maxCharacters": 1024,
            "containsLogic": false,
            "engagementAttribute": {
                "type": "service_activity",
                "attributes": [
                    "topic",
                    "status"
                ]
            }
        },
        {
            "id": 8454,
            "orderId": 8,
            "text": "question_text",
            "next": 9,
            "nextInOrder": false,
            "required": true,
            "category": "checkbox",
            "questionDefinition": "regular_question",
            "replies": [
                {
                    "id": 1134,
                    "text": "questionText"
                },
                {
                    "id": 1245,
                    "text": "questionText"
                }
            ],
            "containsLogic": false
        },
 {
            "id": 8454,
            "orderId": 8,
            "text": "question_text",
            "next": 9,
            "nextInOrder": false,
            "required": true,
            "category": "checkbox",
            "questionDefinition": "regular_question",
            "replies": [
                {
                    "id": 1399,
                    "text": "questionText",
                    "next": 7676
                },
                {
                    "id": 1478,
                    "text": "questionText"
                }
            ],
            "containsLogic": true
        }
    ],
    "agentSurveyContext": {
        "agentSurveyStatus": "open",
        "lastActionTimeInMillis": 0,
        "autoCloseTimestamp": 0,
        "stateRevision": 1564031641145901056
    }
}
```

**Entity structure**

For details on the entity structure, please see the [appendix](/agent-survey-for-messaging-configuration-api-appendix.html)