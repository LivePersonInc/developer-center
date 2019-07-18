---
pagename: Certificate Management
redirect_from:
  - guides-authentication-detailedapi.html
  - authentication-detailed-api.html
sitesection: Documents
categoryname: "Security & Authentication"
documentname: Mutual TLS Authentication
permalink: mutual-tls-authentication-certificate-management.html
indicator: both
---

This method allows you manage certificates according to specified parameters (accountId, name, p12 and password).

### Request

 |Method|      URL|  
 |:--------  |:---  |
 |GET|  https://[{domain}]/mtls/account/{accountId}/certificates/{certificateId}  |
 |GET|  https://[{domain}]/mtls/account/{accountId}/certificates |
 |POST|  https://[{domain}]/mtls/account/{accountId}/certificates |
 |POST|  https://[{domain}]/mtls/account/{accountId}/certificates/byFile |
 |DELETE|  https://[{domain}]/mtls/account/{accountId}/certificates/{certificateId}  |
 |PUT|  https://[{domain}]/mtls/account/{accountId}/certificates/{certificateId}  |
 |PUT|  https://[{domain}]/mtls/account/{accountId}/certificates/byFile |


**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|    Contains token string to allow request authentication and authorization.  |

**Request Body**


**Path Parameters**

 |Parameter|  Description|  Type/Value |
 |:------    |:--------    |:--------|
 |accountId|  LP site ID |   String |
 |certificateId|  generated certificate ID |   String |

### Response

**Response Codes**

| Code | Description           |
|------|-----------------------|
| 201  | Created               |
| 401  | Not Authenticated     |
| 403  | Not Authorized        |
| 500  | Internal Server Error |

(In this resource we can return every status code the remote endpoint returns).

**Response Headers**

**Response Body**

 ```json
{
    "id": 3515906310,
    "deleted": false,
    "name": "Cert1",
    "displayName": "Cert1",
    "siteId": "le1606809",
    "status": "UnAvailable",
    "expirationDate": null
}
```
