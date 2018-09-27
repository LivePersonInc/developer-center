---
pagename: Retrieve Workdays Objects by List
redirect_from:
  - account-configuration-workdays-get-by-list.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Workdays API
subfoldername: Methods
permalink: workdays-api-methods-retrieve-workdays-objects-by-list.html
indicator: messaging
---

Get a list of all workday objects of an account.

### Request

| Method | URL |
| :-------- | :------ |
| GET  |/api/account/{accountId}/configuration/ac-common/workinghours|

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
|ac-revision|  Account config object type collection revision.|  

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

For details on the entity structure, please see the [appendix](https://lpgithub.dev.lprnd.net/product-marketing/developers-community/blob/workdays-documentation/pages/documents/account-configuration/workdays/appendix.md)
