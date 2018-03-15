---
title: Delete Status Reason
level1: Documents
level2: Account Configuration
level3:
level4: Methods
permalink: account-configuration-agent-status-reason-deletestatusreason.html
order: 50
indicator: both
---

### Description

Delete an existing status reason.

### URI

| Method | URL |
| :-------- | :------ |
| DELETE | /api/account/{accountId}/configuration/le-agents/status-reasons/{statusReasonId} |

### Path Parameters

|Parameter | Description | Notes|
|--- | --- | ---|
|accountId | LP site id | Type: String |
|statusReasonId | Account Config object’s unique id. | Type: Positive long number greater than zero|

### Request

**Request Headers**

| Header | Description |
| --- | --- |
|Authorization |Contains token string to allow request authentication and authorization. See the [Authentication document](https://developers.liveperson.com/guides-authentication-introduction.html) for more details. |
|X-HTTP-Method-Override=PUT | Tells to the backend this POST request is actually PUT |
| If-Match | Contains widgets’ current revision number |

**Response Headers**

|Header | Description|
|--- | ---|
|ac-revision | Account config object type collection revision|

**Response Body**

N/A

**Response Codes**

|200 OK|
|304 Not Modified|
|400 Bad Request|
|401 Not Authorized|
|403 Forbidden|
|404 Data not found|
|409 Conflict|
|500 Internal server error|
