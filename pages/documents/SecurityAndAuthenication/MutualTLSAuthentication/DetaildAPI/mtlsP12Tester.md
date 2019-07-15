---
pagename: Detailed API
redirect_from:
  - guides-authentication-detailedapi.html
  - authentication-detailed-api.html
sitesection: Documents
categoryname: "Security & Authentication"
documentname: Mutual TLS Authentication
permalink: mutual-tls-authentication-detailed-api.html
indicator: both
---

Before uploading a certificate, this resource will allow you to test that P12 and the corresponding endpoint is correct and working through our system.
The permission associated with this action is MTLS_READ_INTERNAL.


### Request

 |Method|      URL|  
 |:--------  |:---  |
 |POST|  https://[{domain}]/mtls/account/{accountId}/p12-test/multipart  |
 

**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|    Contains token string to allow request authentication and authorization. it can be done via oAuth1 with     
  MTLS_READ_INTERNAL or via Bearer of administrator user / LPA. |
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
 |accountId|  LP site ID|   String |

### Response

**Response Codes** 

| Code | Description           |
|------|-----------------------|
| 201  | Created               |
| 401  | Not Authenticated     |
| 403  | Not Authorized        |
| 500  | Internal Server Error |
| 200  | OK |

(In this resource we can return every status code the remote endpoint returns).

**Response Headers**

**Response Body**

The API will return the answer as is (as if contacted the forward URL directly).
