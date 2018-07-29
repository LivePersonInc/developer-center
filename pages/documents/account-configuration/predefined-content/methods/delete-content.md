---
title: Delete Predefined Content
redirect_from:
  - account-configuration-predefined-content-delete-content.html
Keywords:
level1: Documents
level2: Account Configuration
level3: Predefined Content API
level4: Methods

order: 70
permalink: predefined-content-api-methods-delete-predefined-content.html

indicator: both
---

Deletes a Predefined Content item from a specific account.

### Request

 |Method|  URL| 
 |:-------  |:-----| 
 |DELETE|  /api/account/{accountId}/configuration/engagement-window/canned-responses/{pre-defined-content-id} |

**Path Parameters**

 |Parameter|  Description|  Type / Value| Notes|
 |:-----------|  :-------------|  :-------------|:----------| 
 |accountId|  LP site ID|  string |  Validation fail error code: 400 |
 |predefined-content-id|  Account Config object's unique ID|  Positive long number greater than zero  |

### Request Headers

 |Header|  Description|  Notes| 
 |:-------  |:--------------  |:---| 
 |Authorization|  Contains token string to allow request authentication and authorization.  |
 |If-Match|  Contains data revision, as known by the client.|  Allows optimization of backend, networking and client resource utilization. |

### Response

### Response Headers

 |Header|  Description| 
 |:-------   |:-----  |
 |ac-revision|  Account config object type collection revision.|

**Response Codes**

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 401  | Not Authenticated     |
| 403  | Not Authorized        |
| 404  | Data Not Found        |
| 500  | Internal Server Error |
