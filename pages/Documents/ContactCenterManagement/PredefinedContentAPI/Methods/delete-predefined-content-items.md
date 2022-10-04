---
pagename: Delete Predefined Content Items
redirect_from:
  - account-configuration-predefined-content-delete-content-items.html
Keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Predefined Content API
subfoldername: Methods

order: 80
permalink: predefined-content-api-methods-delete-predefined-content-items.html

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

`['12345','67890']`

**Path Parameters**

 |Parameter  |Description |  Type / Value |
 |:----------- | :------------ | :--------------- |
 |accountId | LP site ID | String  |

### Request Headers

 |Header | Description| Notes |
 |:------- | :-------------- | :--- |
 |Authorization | Contains token string to allow request authentication and authorization. |
 |If-Match | This parameter allows you to specify a version of the data object to retrieve. If this parameter is not specified, the latest version of the data object is retrieved.. | Allows optimization of backend, networking and client resource utilization. |
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
 |ac-revision|  This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specifc version using this parameter's value..| 