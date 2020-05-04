---
pagename: Get Agent Survey Object by ID
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Agent Survey For Messaging Configuration API 
subfoldername: Methods
permalink: agent-survey-for-messaging-configuration-api-methods-get-agent-survey-object-by-id.html
indicator: messaging
---

Get a single agent survey object by ID.

### Request

| Method | URL |
| :-------- | :------ |
| GET  | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/ac-common/agent_surveys/{agentSurveyId} |

**Path Parameters**

 |Parameter  |Description |  Type / Value |
 |:----------- | :------------ | :--------------- |
 | accountId | LP site ID | String  |
 | agentSurveyId | agent survey object’s unique id.| String|


**Request Headers**

|Header | Description| Notes |
|:------- | :-------------- | :--- |
|Authorization | Contains token string to allow request authentication and authorization.|
|Accept|application/json|

## Response

**Response Codes**

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 304  | Not Modified          |
| 400  | Bad Request           |
| 401  | Not Authorized        |
| 403  | Forbidden             |
| 404  | Data Not Found        |
| 409  | Conflict              |
| 500  | Internal Server Error |

**Response Headers**

|Header|  Description|
|:-------|   :-----  |
|ac-revision|  This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specific version using this parameter's value..|

**Response example**

```json
{
    "questions": [
        {
            "next": 1563366367249,
            "questionDefinition": "regular_question",
            "nextInOrder": true,
            "orderId": 1,
            "id": 1563366314738,
            "text": "date",
            "category": "date",
            "required": true
        },
        {
            "next": 1563366389132,
            "questionDefinition": "regular_question",
            "nextInOrder": true,
            "maxCharacters": 1024,
            "orderId": 2,
            "id": 1563366367249,
            "text": "$%&()",
            "category": "number",
            "required": true
        },
        {
            "questionDefinition": "regular_question",
            "replies": [
                {
                    "nextInOrder": true,
                    "id": 1563366389132,
                    "text": "Option 1"
                },
                {
                    "nextInOrder": true,
                    "id": 1563368439157,
                    "text": "Option 2"
                },
                {
                    "nextInOrder": true,
                    "id": 1563368440566,
                    "text": "Option 3"
                }
            ],
            "orderId": 3,
            "id": 1563366389132,
            "text": "question text",
            "category": "dropdown",
            "required": true
        }
    ],
    "objectRevision": 12,
    "enabled": true,
    "dateUpdated": "2019-07-17 09:00:44",
    "isDefault": false,
    "deleted": false,
    "dateCreated": "2019-07-17 08:25:35",
    "defaultTimeoutInMinutes": 1440,
    "root": 1563366314738,
    "name": "survey_name",
    "id": 3553373310
}
```

**Entity structure**

For details on the entity structure, please see the [appendix](/agent-survey-for-messaging-configuration-api-appendix.html)