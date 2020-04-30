---
pagename: Create Agent Survey Object
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Agent Survey For Messaging Configuration API
subfoldername: Methods
permalink: agentsurvey-config-api-methods-create-agentsurvey-object.html
indicator: messaging
---

Create new agent survey object(s) for an account. It is possible to create several items at a time.

### Request

| Method | URL |
| :-------- | :------ |
| POST  | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/ac-common/agent_surveys|

**Path Parameters**

|Parameter  |Description |  Type / Value |
|:----------- | :------------ | :--------------- |
|accountId | LP site ID | String  |

**Request Headers**

| Header | Description |
 |:-------- | :------------ |
| Authentication | Contains token string to allow request authentication and authorization |



**Request Body**

```json
{
    "name": "survey_name",
    "root": 11,
    "isDefault": true,
    "defaultTimeoutInMinutes": 123,
    "enabled": true,
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

For details on the entity structure, please see the [appendix](https://lpgithub.dev.lprnd.net/morana/developers-community/blob/agent%7B_survey_documentation/pages/documents/ContactCenterManagement/AgentSurveyForMessaging/AgentSurveyForMessagingConfigurationApi/Appendix/appendix.md)

**'isDefault' entity state**

The `isDefault` field determines whether an agent survey object is the default for the entire account. Only one object can be set as the default for each account. 

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
|ac-revision|  This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specific version using this parameter's value..|  

**Response example**

```json
[
{
    "name": "survey_name",
    "id":1212,
    "root": 11,
    "isDefault": true,
    "defaultTimeoutInMinutes": 123,
    "enabled": true,
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
]
```