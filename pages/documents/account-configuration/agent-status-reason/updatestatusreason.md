---
title: Update Status Reason
redirect_from:
  - account-configuration-agent-status-reason-updatestatusreason.html
level1: Documents
level2: Account Configuration
level3: Agent Status Reason API
level4: Methods
permalink: agent-status-reason-api-methods-update-status-reason.html
order: 40
indicator: both
---


### Description

Update an existing status reason.

### URI

| Method | URL |
| :-------- | :------ |
| PUT | /api/account/{accountId}/configuration/le-agents/status-reasons/{statusReasonId} |


### Path Parameters

|Parameter | Description | Notes|
|--- | --- | ---|
|accountId | LP site id | Type: String|
|statusReasonId | Account Config object’s unique id. | Type: Positive long number greater than zero|

### Request

**Request Headers**

| Header | Description |
| --- | --- |
|Authorization |Contains token string to allow request authentication and authorization. See the [Authentication document](https://developers.liveperson.com/guides-authentication-introduction.html) for more details. |
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

|200 OK|
|304 Not Modified|
|400 Bad Request|
|401 Not Authorized|
|403 Forbidden|
|404 Data not found|
|409 Conflict|
|500 Internal server error|
