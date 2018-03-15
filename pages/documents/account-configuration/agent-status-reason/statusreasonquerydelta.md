---
title: Status Reason Query Delta
level1: Documents
level2: Account Configuration
level3:
level4: Methods
permalink: account-configuration-agent-status-reason-statusreasonquerydelta.html
order: 50
indicator: both
---

### Description

Query changes in Status reason data

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
	            "site": "1236744443",
	            "revision": 17890
	        },
	        {
	            "site": "243256785",
	            "revision": 2456
	        }
	    ]
}
```

### Response

**Response Headers**

N/A

**Response Body**

```json
{
  "appDataList": [
    {
      "appName": "status-reasons",
      "appApiVersion": 1,
      "accountList": {
        "accountList": [
          {
            "siteId": "1236744443",
            "itemsCollection": {
              "items": [
                {
                  "text": "some update text",
                  "state": "Online",
                  "enabled": true,
                  "id": 728675212,
                  "deleted": false
                },
                {
                  "text": "some text289",
                  "state": "Away",
                  "enabled": true,
                  "id": 728675312,
                  "deleted": false
                }
              ],
              "revision": 17890,
	            "context": {
	              "contextType": "ACCOUNT",
	              "contextId": "1236744443"
	            }
            }
          }
        ]
      }
    }
  ]
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
