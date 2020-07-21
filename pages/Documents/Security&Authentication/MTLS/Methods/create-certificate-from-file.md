---
pagename: Create certificate from file
keywords:
sitesection: Documents
categoryname: "Security & Authentication"
documentname: MTLS 
subfoldername: Methods
permalink: mtls-methods-create-certificate-from-file.html
---

{: .important}
Currently, these methods cannot be used to create certificates. To get started with a certificate, please contact LivePerson Support.

This API creates a certificate by uploading a file, for a specific account ID.

### Request

 |Method|      URL|  
 |:--------  |:---  |
 |POST|  https://[{domain}]/mtls/account/{accountId}/certificates/by-file |


**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|    Contains token string to allow request authentication and authorization.  |


**Request Body**

This end-point receives information formatted as `form-data`. The below is an example of the body in this format.

|Key         |Value  |
|:------|        :--------  |
|file  (File field type)|    p12 file   |
|certificate  (Text field type)|    {"name":"myCertificate", "password":"1234"}   |


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


**Response Body**

for example:

```JSON
{  
   "successfulySavedCertificates":[  
      {  
         "id":2628739923,
         "deleted":false,
         "name":"{certificateName}",
         "displayName":"{certificateName}",
         "siteId":"{accountId}",
         "status":"Available",
	 "expirationDate": null
      }
   ],
   "failedSaveToVaultCertificates":[  

   ]
}
```


**Entity Structure:**

| Attribute | Description  | Type/Value | Required | Notes |
| :------   | :--------    | :-------- | :--- | :--- |
| id | A certificate's unique object ID in the account config table. | long number | Read only | |
| deleted   | Indicates whether the certificate is deleted or not. | Boolean | Read only | |
| name | A certificate's unique name. | unique string | Required | |
| displayName    | A certificate's display name.  | string | Required | |
| siteId | The account ID the certificate is associated with. | string | Required | |
| status | Indicates if the certificate is available/not available/expired | string | Required | (the certificate is available if it exists at both Hashicorp Vault and LivePerson's Data Base and if isn't expired)|
| expirationDate | certificate's expiration date. | string | Not Required | |
