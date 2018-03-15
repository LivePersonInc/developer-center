---
title: Get All Changes Query
level1: Documents
level2: Account Configuration
level3:
level4: Methods
permalink: account-configuration-agent-status-reason-getallchangesquery.html
order: 60
indicator: both
---


### Description

Query changes in Status Reason data for a range of revisions.

### URI

| Method | URL |
| :-------- | :------ |
| POST | /api/account/configuration/le-agents/status-reasons/query |

### Path Parameters

N/A

### Request

**Request Headers**

| Header | Description |
| --- | --- |
|Authorization |Contains token string to allow request authentication and authorization. See the [Authentication document](https://developers.liveperson.com/guides-authentication-introduction.html) for more details. |

**Request Body**

```json
{
    " type": 1,
    "parameters":
    [
        {
            "site": "187648512",
            "from": 18,
            "to": 20
        }
    ]
}
```

### Response

**Response Headers**

N/A

**Response Body**

```json
[
  {
    "siteId": "le34165338",
    "revisionsCollection": [
      {
        "revision": 4,
        "revisionDate": "2017-05-24 10:38:25",
        "items": [
          {
            "text": "some text697",
            "state": "Away",
            "enabled": true,
            "id": 730069512,
            "deleted": false
          }
        ]
      },
      {
        "revision": 2,
        "revisionDate": "2017-05-24 10:38:25",
        "items": [
          {
            "text": "some update text",
            "state": "Away",
            "enabled": true,
            "id": 730069412,
            "deleted": false
          }
        ]
      },
      {
        "revision": 3,
        "revisionDate": "2017-05-24 10:38:25",
        "items": [
          {
            "text": "some update text",
            "state": "Away",
            "enabled": true,
            "id": 730069412,
            "deleted": true
          }
        ]
      }
    ]
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
