---
title: Agent Status Reason by ID
level1: Documents
level2: Account Configuration
level3:
level4: Methods
permalink: account-configuration-agent-status-reason-agentstatusreasonid.html
order: 20
indicator: both
---


### Description

Get one Status reason by ID.

### URI
| Method | URL |
| :-------- | :------ |
| GET | /api/account/{accountId}/configuration/le-agents/status-reasons/{statusReasonId} |

### Parameters

|Parameter | Description | Notes|
|--- | --- | ---|
|accountId | LP site id | <ul><li>Validation fail error code: 400</li><li>Type: String ^[a-zA-Z0-9_]{1,20}$</li></ul>|
|statusReasonId | Account Config object’s unique id. | <ul><li>Type: Positive long number greater than zero</li></ul>|

### Query Parameters
|Parameter | Description | Notes|
|--- | --- | ---|
|include_deleted | Whether the API should include deleted items in the response or not | <ul><li>Default: false</li></ul>|

### Request

**Request Headers**

| Header | Description |
| --- | --- |
|Authorization |Contains token string to allow request authentication and authorization. See the [Authentication document](https://developers.liveperson.com/guides-authentication-introduction.html) for more details. |

**Request Body**

No body required.

### Response

**Response Headers**

|Header | Description|
|--- | ---|
|ac-revision | Account config object type collection revision|

**Response Body**
```json
{
  "text":"some text",
  "state":"Away",
  "enabled":true,
  "id":725989512,
  "deleted":false
}
```

**Response Codes**

|Code | Description |
|:----|:----|
|200 |OK|
|400 |Bad Request|
|401 |Not Authenticated|
|403 |Not Authorized|
|404 |Data not found|
|500 |Internal server error|
