---
pagename: Update certificate for account
keywords:
sitesection: Documents
categoryname: "Security & Authenication"
documentname: MTLS API
subfoldername: Methods
permalink: mtls-methods-update-certificate-from-file.html
redirect_from:
  - mtls-methods-update-certificate-for-account.html
---

This API updates a certificate for a specific account id.

### Request

 |Method|      URL|  
 |:--------  |:---  |
 |PUT|  https://[{domain}]/mtls/account/{accountId}/certificates |


**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|    Contains token string to allow request authentication and authorization.  |

**Request Body**

```JSON
[
  {
  	"name":"myCert1",
  	"p12":[98,121,116,101,115],
  	"password":"paw1",
          "id":2628739923
  }
]
```

* The body is a byte array input of the p12 file.

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



**Response Body**

for example:

```
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
