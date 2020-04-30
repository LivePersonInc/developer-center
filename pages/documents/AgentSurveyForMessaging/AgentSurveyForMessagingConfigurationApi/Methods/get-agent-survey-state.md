---
pagename: Get Agent Survey State
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Agent Survey For Messaging Runtime API 
subfoldername: Methods
permalink: agentsurvey-runtime-api-methods-get-agentsurvey-state.html
indicator: messaging
---

Get the survey state that has been saved in previous requests.

### Request

| Method | URL |
| :-------- | :------ |
| GET  | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/forms/agent_survey/state|

**Path Parameters**

 |Parameter  |Description |  Type / Value |
 |:----------- | :------------ | :--------------- |
 |accountId | LP site ID | String  |

 **Query Parameters**

| Parameter | Description | Type / Value | Required | Notes
|:----------- |  :------------ | :--------------- | :--- | :--- | 
| conv | conversation id | String | Required | ^[a-zA-Z0-9_]{1,20}$ |
| skill | skill id | long | Required |
| seq | when seq=true and survey state is null the first sequence will be returned | Boolean | Optional | Default value is true |
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
    "root": 11,
    "actualTimeoutInMinutes": 127,
    "questions": [
        {
            "id": 1565,
            "orderId": 1,
            "text": "questionText",
            "next": 3,
            "nextInOrder": false,
            "required": true,
            "category": "date",
            "questionDefinition": "regular_question",
            "containsLogic": false,
            "questionState": {
                "id": 1565,
                "questionStatus": "show"
            }
        },
        {
            "id": 4456,
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
            },
            "questionState": {
                "id": 4456,
                "questionStatus": "answer",
                "engAttribute": {
                    "type": "service_activity",
                    "service": {
                        "topic": "my topic",
                        "status": 3
                    }
                }
            }
        },
        {
            "id": 6334,
            "orderId": 6,
            "text": "question_text",
            "next": 7,
            "nextInOrder": false,
            "required": true,
            "category": "free_text",
            "questionDefinition": "regular_question",
            "maxCharacters": 1024,
            "containsLogic": false,
            "questionState": {
                "id": 6334,
                "questionStatus": "answer",
                "freeTextReply": "my free text answer"
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
                    "id": 11,
                    "text": "questionText"
                },
                {
                    "id": 12,
                    "text": "questionText"
                }
            ],
            "containsLogic": false,
            "questionState": {
                "id": 8454,
                "questionStatus": "answer",
                "replyIds": [
                    11
                ]
            }
        }
    ],
    "agentSurveyContext": {
        "agentSurveyStatus": "open",
        "lastActionTimeInMillis": 0,
        "autoCloseTimestamp": 0,
        "stateRevision": 1564319724453625856
    }
}
```

**Entity structure**

For details on the entity structure, please see the [appendix](https://lpgithub.dev.lprnd.net/product-marketing/developers-community/blob/agent%7B_survey_documentation/pages/documents/ContactCenterManagement/AgentSurveyForMessaging/AgentSurveyForMessagingRuntimeApi/Appendix/appendix.md)