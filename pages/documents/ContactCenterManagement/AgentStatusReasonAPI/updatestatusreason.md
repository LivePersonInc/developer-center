---
pagename: Update Status Reason
redirect_from:
  - account-configuration-agent-status-reason-updatestatusreason.html
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Agent Status Reason API
subfoldername: Methods
permalink: agent-status-reason-api-methods-update-status-reason.html
order: 40
indicator: both
---


### Description

Update an existing status reason.

### URI

| Method | URL |
| :-------- | :------ |
| PUT | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-agents/status-reasons/{statusReasonId} |


### Path Parameters

|Parameter | Description | Notes|
|--- | --- | ---|
|accountId | LP site id | Type: String|
|statusReasonId | Account Config object’s unique id. | Type: Positive long number greater than zero|

### Request

**Request Headers**

| Header | Description |
| --- | --- |
|Authorization |Contains token string to allow request authentication and authorization. See the [Authentication document](guides-authentication-introduction.html) for more details. |
|X-HTTP-Method-Override=PUT | Tells to the backend this POST request is actually PUT |
| If-Match | Contains widgets’ current revision number |

**Request Body**

```json
{
  "text":"some reason text",
  "state":"Away",
  "enabled":true,
  "id":725987312,
  "deleted":false
}
```

### Response

**Response Headers**

|Header | Description|
|--- | ---|
|ac-revision | Account config object type collection revision|

**Response Body**

Updated widget data.

**Response Codes**

|Code | Description |
|:----|:----|
|200 |OK|
|400 |Bad Request|
|401 |Not Authenticated|
|403 |Not Authorized|
|404 |Data not found|
|500 |Internal server error|
