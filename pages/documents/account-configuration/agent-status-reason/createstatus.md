---
title: Create Status Reason
level1: Documents
level2: Account Configuration
level3: Agent Status Reason API
level4: Methods
permalink: agent-status-reason-api-methods-create-status-reason.html
order: 30
indicator: both
---

### Description

Create new status reason for an account. It is possible to create several items at a time.

### URI

| Method | URL |
| :-------- | :------ |
| POST | /api/account/{accountId}/configuration/le-agents/status-reasons |


### Path Parameters

|Parameter | Description | Notes|
|--- | --- | ---|
|accountId | LP site id | Type: String|

### Request

**Request Headers**

| Header | Description |
| --- | --- |
|Authorization |Contains token string to allow request authentication and authorization. See the [doc](https://docs.google.com/a/liveperson.com/document/d/1FYrfYm9WAD8pMNillj07LZYQWH1KFn2tAYfp_G-wtbY/edit#heading=h.ctslxeskw6k1) for more details. |

**Request Body**

The request body is able to accept a single JSON object as shown below, or a JSON array [] of such objects.

**Note**: the order attribute is not mandatory, however you should note the following:

1.  If order is not passed and there are multiple items in the request, order assigned by the server is not guaranteed to be the sorting order in the request body.

2.  Created items where order was not defined will always precede existing one.

#### Single status reason creation

```json
{
  "text":"some new reason text",
  "state":"Away",
  "enabled":true,
  "deleted":false
}
```

#### Multiple status reasons creation

```json
[
  {
    "text":"some reason text",
    "state":"Away",
    "enabled":true,
    "deleted":false
  },
  {
    "text":"another reason text",
    "state":"Away",
    "enabled":true,
    "deleted":false
  }
]
```

|Attribute | Description | Notes|
|--- | --- | ---|
|id | Account Config object’s unique id. | <ul><li>Not used when creating items, the id will be auto generated and returned as part of the response items </li><li>Type: long number </li>|

### Response

**Response Headers**

|Header | Description|
|--- | ---|
|ac-revision | Account config object type collection revision|


**Response Body**

Newly created status reason JSON.

**Response Codes**

|Code | Description |
|:----|:----|
|200 |OK|
|400 |Bad Request|
|401 |Not Authenticated|
|403 |Not Authorized|
|404 |Data not found|
|500 |Internal server error|
