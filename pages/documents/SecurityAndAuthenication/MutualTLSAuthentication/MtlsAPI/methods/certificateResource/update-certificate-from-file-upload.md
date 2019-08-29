---
pagename: Update certificate from file
keywords:
sitesection: Documents
categoryname: "Security & Authenication"
documentname: MTLS API
subfoldername: Methods
permalink: mtls-methods-update-certificate-from-file.html
---

This API updates a certificate by uploading a file for specific account ID.

### Request

 |Method|      URL|  
 |:--------  |:---  |
 |PUT|  https://[{domain}]/mtls/account/{accountId}/certificates/by-file |


**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|    Contains token string to allow request authentication and authorization.  |
 |file|    Contains p12 file in multipart/form-data key value field. |
 |certificate|    Contains the certificate DTO in multipart/form-data key value field.  |

**Request Body**

form-data body

KEY: file  (File field type)

VALUE: select p12 file

KEY: certificate  (Text field type)

VALUE: {"name":"myCertificate", "password":"1234", "id":937706832}

**Path Parameters**

 |Parameter|  Description|  Type/Value |
 |:------    |:--------    |:--------|
 |accountId|  LP site ID |   String |

### Response

**Response Codes**

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 401  | Not Authenticated     |
| 403  | Not Authorized        |
| 500  | Internal Server Error |


**Response Headers**

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
