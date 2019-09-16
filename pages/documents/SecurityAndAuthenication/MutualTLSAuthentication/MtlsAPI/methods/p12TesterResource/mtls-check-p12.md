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

This method will allow you to test your P12 Key before uploading a certificate and test whether the corresponding endpoint is correct and working.

### Request

 |Method|      URL|  
 |:--------  |:---  |
 |POST|  https://[{domain}]/mtls/account/{accountId}/p12-test/multipart |


**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|    Contains token string to allow request authentication and authorization.  |
 |LP-forward-url|   Contains the desired endpoint url of the client.  |
 |LP-authorization-override|  Contains the authorization for the desired endpoint url of the client. Not required. |
 |LP-content-type-override|  Contains the content type for the desired endpoint url of the client. Not required. |
 |LP-method-override|  Contains the method for the desired endpoint url of the client. Not required. |

**Request Body**

form-data body

Key: file (File field)

Value: The file containing the p12

Key: password (Text field)

Value: The password matching this specific p12

Key: body (Text field)|

Value: Contains the same body as the client sends for the original endpoint. Not required.

**Path Parameters**

 |Parameter|  Description|  Type/Value |
 |:------    |:--------    |:--------|
 |accountId|  LP site ID |   String |

### Response

**Response Codes**

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 201  | Created               |
| 401  | Not Authenticated     |
| 403  | Not Authorized        |
| 500  | Internal Server Error |



**Response Body**

The API will return the body as is (as if contacted the forward URL directly).
