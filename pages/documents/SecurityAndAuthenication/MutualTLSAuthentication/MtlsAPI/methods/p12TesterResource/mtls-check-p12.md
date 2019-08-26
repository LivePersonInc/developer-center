---
pagename: MTLS check p12 file
redirect_from:
  - xxx.html
keywords:
sitesection: Documents
categoryname: "Security & Authenication"
documentname: MTLS API
subfoldername: Methods
---

This API will allow you to test your p12 before uploading a certificate and test whether the corresponding endpoint is correct and working through our system or not.



### Request

 |Method|      URL|  
 |:--------  |:---  |
 |POST|  https://[{domain}]/mtls/account/{accountId}/p12-test/multipart |


**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|    Contains token string to allow request authentication and authorization.  |
 |LP-forward-url|   Contains the desired endpoint url of the client.  |
 |LP-authorization-override|  Contains the authorizaion for the desired endpoint url of the client. Not required. |
 |LP-content-type-override|  Contains the content type for the desired endpoint url of the client. Not required. |
 |LP-method-override|  Contains the method for the desired endpoint url of the client. Not required. |
 |file (multipart value)| The file containing the p12.  |
 |password (multipart value)| The password matching this specific p12  |
 |body (multipart value)|  Contains the body for the desired endpoint url of the client. Not required. |

**Request Body**

same body as the client sends to original endpoint.

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


**Response Headers**

**Response Body**

The API will return the body as is (as if contacted the forward URL directly).


