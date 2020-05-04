---
pagename: Update Agent Survey Object
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Agent Survey For Messaging Configuration API 
subfoldername: Methods
permalink: agent-survey-for-messaging-configuration-api-methods-update-agent-survey-object.html
indicator: messaging
---

Update existing agent survey object(s).

### Request

| Method | URL |
| :-------- | :------ |
| POST  | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/ac-common/agent_surveys |

**Path Parameters**

|Parameter  |Description |  Type / Value |
|:----------- | :------------ | :--------------- |
|accountId | LP site ID | String |

**Request Headers**

|Header | Description| Notes |
|:------- | :-------------- | :--- |
|Authorization | Contains token string to allow request authentication and authorization. |
|if-match|Contains special agent survey's current revision number|
|x-HTTP-Method-Override | PUT|

**Request Body**

```json
{
    "name": "survey_name",
    "root": 11,
    "id": 3576140710,
    "enabled": true,
    "isDefault": true,
    "defaultTimeoutInMinutes": 123,
    "questions": [
    {
      "id": 11,
      "orderId": 1,
      "text": "questionText",
      "required": true,
      "category": "date",
      "questionDefinition": "regular_question",
      "next": 12
    },
    {
      "id": 12,
      "orderId": 2,
      "text": "questionText",
      "required": true,
      "category": "dropdown",
      "questionDefinition": "regular_question",
      "replies": [
        {
          "id": 13,
          "text": "questionText"
        }
      ]
    }
  ]
}
```

**Entity structure**

For details on the entity structure, please see the [appendix](/agent-survey-for-messaging-configuration-api-appendix.html)

**'isDefault' entity state**

The `isDefault` field determines whether a agent survey object is the default for the entire account. Only one object can be set as the default for each account. 


### Response

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
|ac-revision|  This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specifc version using this parameter's value..|  

**Response example**

```json
{
    "name": "survey_name",
    "root": 1,
    "id": 454766,
    "isDefault": true,
    "enabled": true,
    "defaultTimeoutInMinutes": 123,
    "questions": [
    {
      "id": 11,
      "orderId": 1,
      "text": "questionText",
      "required": true,
      "category": "date",
      "questionDefinition": "regular_question",
      "next": 12
    },
    {
      "id": 12,
      "orderId": 2,
      "text": "questionText",
      "required": true,
      "category": "dropdown",
      "questionDefinition": "regular_question",
      "replies": [
        {
          "id": 13,
          "text": "questionText"
        }
      ]
    }
  ]
}
```