---
title: Agent Status List
level1: Documents
level2: Account Configuration
level3:
level4: Methods
permalink: account-configuration-agent-status-reason-agentstatuslist.html
order: 10
indicator: both
---

### Description

Get list of all status reasons of an account, for all statuses.

### URI

| Method | URL |
| :-------- | :------ |
| GET | /api/account/{accountId}/configuration/le-agents/status-reasons |

### Path Parameters

|Parameter | Description | Notes|
|--- | --- | ---|
|accountId | LP account ID | Type: String |

### Query Parameters

|Parameter | Description | Notes|
|--- | --- | ---|
|include_deleted | Whether the API should include deleted items in the response or not | Default: false|

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
[
  {
    "text":"some reason text",
    "state":"Away",
    "enabled":true,
    "id":725987312,
    "deleted":false
  },
  {
    "text":"another reason text",
    "state":"Away",
    "enabled":true,
    "id":725987412,
    "deleted":false
  }
]

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
