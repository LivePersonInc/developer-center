---
pagename: P12 Key Tester
keywords:
sitesection: Documents
categoryname: "Security & Authenication"
documentname: MTLS API
subfoldername: Methods
permalink: mtls-methods-p12-key-tester.html
redirect_from:
  - p12-key-tester.html
---

This method will allow you to test your P12 Key before uploading a certificate and test that it is valid.

### Request

 |Method|      URL|  
 |:--------  |:---  |
 |POST|  https://[{domain}]/mtls/account/{accountId}/p12-test/multipart |


**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|    Contains token string to allow request authentication and authorization.  |
 |Content-Type|     Since endpoint is multipart than should be a variation of multipart request (for example: **multipart/form-data**).  |
 

**Request Body**

form-data body (content-type : multipart/form-data)

File: The p12 file we want to test.

Password: the password that matches the supllied file.

```
{
  "file":"....."
  "password":"45697"
}
```

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

The API will return 200 (OK) if p12 corresponds to password and is useable and 500 (Internal Server Error) otherwise.
