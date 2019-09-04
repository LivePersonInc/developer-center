---
pagename: Delete certificate by ID
keywords:
sitesection: Documents
categoryname: "Security & Authenication"
documentname: MTLS API
subfoldername: Methods
permalink: mtls-methods-delete-certificate-by-id.html
---

This API deletes a certificate by account ID and certificate ID.

### Request

|Method|      URL|  
|:--------  |:---  |
|DELETE|  https://[{domain}]/mtls/account/{accountId}/certificates/{certificateId} |


**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|    Contains token string to allow request authentication and authorization.  |


**Path Parameters**

 |Parameter|  Description|  Type/Value |
 |:------    |:--------    |:--------|
 |accountId|  LP site ID |   String |
 |certificateId|  generated certificate ID for the certificate to be deleted  |  String |

### Response

**Response Codes**

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 401  | Not Authenticated     |
| 403  | Not Authorized        |
| 500  | Internal Server Error |

