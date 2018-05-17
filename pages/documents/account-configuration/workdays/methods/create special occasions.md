---
title: Delete Predefined Content Items
Keywords:
level1: Documents
level2: Account Configuration
level3: Predefined Content API
level4: Methods

order: 80
permalink: account-configuration-predefined-content-delete-content-items.html

indicator: both
---

Deletes Predefined Content items from a specific account.

### Request

| Method | URL |
| :-------- | :------ |
| DELETE  |/api/account/{accountId}/configuration/engagement-window/canned-responses/ |

**Request Headers**

| Header | Description |
 |:-------- | :------------ |
| X-HTTP-Method-Override=DELETE | Overrides unsupported HTTP methods. To be used with the 'DELETE’ value. |

**Request Body**

`['12345’,’67890’]`

**Path Parameters**

 |Parameter  |Description |  Type / Value |
 |:----------- | :------------ | :--------------- |
 |accountId | LP site ID | String ^[a-zA-Z0-9_]{1,20}$ |

### Request Headers

 |Header | Description| Notes |
 |:------- | :-------------- | :--- |
 |Authorization | Contains token string to allow request authentication and authorization. | 
 |If-Match | Contains data revision, as known by the client. | Allows optimization of backend, networking and client resource utilization. |
| X-HTTP-Method-Override=DELETE  | Overrides unsupported HTTP methods.|  To be used with the DELETE value. |

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
