---
pagename: Create certificate for account
redirect_from:
  - xxx.html
keywords:
sitesection: Documents
categoryname: "Security & Authenication"
documentname: MTLS API
subfoldername: Methods
---

This API creates certificate for specific account Id.

### Request

 |Method|      URL|  
 |:--------  |:---  |
 |POST|  https://[{domain}]/mtls/account/{accountId}/certificates |


**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|    Contains token string to allow request authentication and authorization.  |

**Request Body**


**Path Parameters**

 |Parameter|  Description|  Type/Value |
 |:------    |:--------    |:--------|
 |accountId|  LP site ID |   String |

### Response

**Response Codes** 

| Code | Description           |
|------|-----------------------|
| 201  | Created               |
| 401  | Not Authenticated     |
| 403  | Not Authorized        |
| 500  | Internal Server Error |


**Response Headers**

**Response Body**

for example:
{
    
    "id": 3515906310,
    
    "deleted": false,
    
    "name": "Cert1",
    
    "displayName": "Cert1",
    
    "siteId": "le1606809",
    
    "status": "UnAvailable",
    
    "expirationDate": null
}


please click Appendix for entity structure.

