---
pagename: MTLS forawrd delete request
redirect_from:
  - xxx.html
keywords:
sitesection: Documents
categoryname: "Security & Authenication"
documentname: MTLS API
subfoldername: Methods
---

The Forward API proxies request to the **LP-forward-url** supplied parameter, The proxied http method is **DELETE** (corresponds with current endpoint method), Proxied request is mTLS wrapped according to configuration parameters (accountId/servicName/Url which act as a unique key), if no configuration exist request will be proxied with regular TLS (not mTLS).

### Request

 |Method|      URL|  
 |:--------  |:---  |
 |DELETE|  https://[{domain}]/mtls/account/{accountId} |


**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|    Contains token string to allow request authentication and authorization, **AppKey only API**, **Required**. |
 |LP-service-name|    Contains the service name which has the certificate in Hashicorp-Vault. **Not Required**, Possible options : TEST_SERVICE/IDP/WEBHOOKS |
 |LP-forward-url|    Contains the desired endpoint url of the client.  **Required** |
 |LP-authorization-override|    Contains the authorizaion for the desired endpoint url of the client. **Not Required**. |

**Request Body**

Body will be proxied as is to the remote  endpoint (LP-forward-url), so the body submitted will be as if contacting the LP-forward-url value directly.

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

Response will be returned from the LP-forward-url as if contacted directly.



