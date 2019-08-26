---
pagename: MTLS forawrd get request
redirect_from:
  - xxx.html
keywords:
sitesection: Documents
categoryname: "Security & Authenication"
documentname: MTLS API
subfoldername: Methods
---

This API forward GET requests with required certificate if the certificate exists (if not - it forwards the non-mtls request to the required endpont).


### Request

 |Method|      URL|  
 |:--------  |:---  |
 |GET|  https://[{domain}]/mtls/account/{accountId} |


**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|    Contains token string to allow request authentication and authorization.|
 |LP-service-name|    Contains the service name which has the certificate in Hashicorp-Vault. Not Required.  |
 |LP-forward-url|    Contains the desired endpoint url of the client.  |
 |LP-authorization-override|    Contains the authorizaion for the desired endpoint url of the client. Not Required. |

**Request Body**

same body as the client sends to the original endpoint.

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

same body as the server responses.


