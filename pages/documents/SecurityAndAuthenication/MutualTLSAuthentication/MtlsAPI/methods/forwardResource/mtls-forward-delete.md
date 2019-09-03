---
pagename: Forward delete request
keywords:
sitesection: Documents
categoryname: "Security & Authenication"
documentname: MTLS API
subfoldername: Methods
permalink: mtls-methods-forward-delete-request.html
---

This API forwards a DELETE request with the required certificate if the certificate exists (if not - it forwards the non-mtls request to the required endpoint).

When submitting the forward request, the certificate will be fetched according to service name + url, wrapped and forwarded to the desired endponit and the response will be returned as if contacted the remote endpoint directly.


### Request

 |Method|      URL|  
 |:--------  |:---  |
 |DELETE|  https://[{domain}]/mtls/account/{accountId} |


**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|    Contains token string to allow request authentication and authorization.|
 |LP-service-name|    Contains the service name which has the certificate in Hashicorp-Vault. Not Required.  |
 |LP-forward-url|    Contains the desired endpoint url of the client.  |
 |LP-authorization-override|    Contains the authorization for the desired endpoint url of the client. Not Required. |

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



**Response Body**

same body as the server responses.
