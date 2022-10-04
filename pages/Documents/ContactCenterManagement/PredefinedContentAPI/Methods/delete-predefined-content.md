---
pagename: Delete Predefined Content
redirect_from:
  - account-configuration-predefined-content-delete-content.html
Keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Predefined Content API
subfoldername: Methods

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
 |If-Match|  This parameter allows you to specify a version of the data object to retrieve. If this parameter is not specified, the latest version of the data object is retrieved..|  Allows optimization of backend, networking and client resource utilization. |

### Response

### Response Headers

 |Header|  Description|
 |:-------   |:-----  |
 |ac-revision|  This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specifc version using this parameter's value..|

**Response Codes**

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 401  | Not Authenticated     |
| 403  | Not Authorized        |
| 404  | Data Not Found        |
| 500  | Internal Server Error |