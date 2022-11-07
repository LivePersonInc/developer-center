---
pagename: Dismiss Agent Survey
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Agent Survey For Messaging Runtime API
subfoldername: Methods
permalink: agent-survey-for-messaging-runtime-api-methods-dismiss-agent-survey.html
indicator: messaging
---

Dismiss the agent survey and produce FormDismissEvent. Dismiss is allowed if the agent survey
doesn't have required questions and it was not submitted before.

### Request

| Method | URL |
| :-------- | :------ |
| DELETE  | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/forms/agent_survey/state |

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
| x-lp-state-rev | state revision, use the value last received from the server |

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
|x-lp-state-rev|  state revision — used in POST/PUT/DELETE requests to avoid data discrepancy |

**Response example**

```json
{
    "agentSurveyStatus": "dismissed",
    "lastActionTimeInMillis": 1564378978227,
    "autoCloseTimestamp": 0,
    "stateRevision": 1564378978225684480
}
```

**Entity structure**

For details on the entity structure, please see the [appendix](/agent-survey-for-messaging-configuration-api-appendix.html)