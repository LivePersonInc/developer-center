---
pagename: Get All Agent Survey Objects
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Agent Survey For Messaging Configuration API 
subfoldername: Methods
permalink: agentsurvey-config-api-methods-getall-agentsurvey-objects.html
indicator: messaging
---

Get a list of all agent survey objects of an account.

### Request

| Method | URL |
| :-------- | :------ |
| GET  | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/ac-common/workinghours|

### Path Parameters

 |Parameter  |Description |  Type / Value |
 |:----------- | :------------ | :--------------- |
 |accountId | LP site ID | String|


### Request Headers

|Header | Description| Notes |
|:------- | :-------------- | :--- |
|Authorization | Contains token string to allow request authentication and authorization.|

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

### Response Headers

|Header|  Description|
|:-------|   :-----  |
|ac-revision|  This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specifc version using this parameter's value..|  

### Response example

```json
[
    {
        "id": 2852537612,
        "name": "Workdays 11112",
        "deleted": false,
        "isDefault": false
    },
    {
        "id": 2852545912,
        "name": "Workdays 111122",
        "deleted": false,
        "isDefault": false
    },
    {
        "id": 2852546012,
        "name": "Workdays 1111222",
        "deleted": false,
        "isDefault": false
    }
]
```

**Entity structure**

For details on the entity structure, please see the [appendix](https://lpgithub.dev.lprnd.net/developers-community/blob/agent%7B_survey_documentation/pages/documents/ContactCenterManagement/AgentSurveyForMessaging/AgentSurveyForMessagingConfigurationApi/Appendix/appendix.md)