---
pagename: Request Forwarding
redirect_from:
  - guides-authentication-detailedapi.html
  - authentication-detailed-api.html
sitesection: Documents
categoryname: "Security & Authentication"
documentname: Mutual TLS Authentication
permalink: mutual-tls-authentication-request-forwarding.html
indicator: both
---

The Request Forwarding method wraps and forwards any request according to specified parameters in the request headers, after LivePerson's Gatekeeper validates these headers. This means that this method is useful for validating that the existing certificate is in Hasicorp's Vault. Once the required certificate exists and is vaild, the request is then forwarded to the required endpoint (if not - it forwards the non-mtls request to the required endpoint).

### Request

 |Method|      URL|  
 |:--------  |:---  |
 |GET|  https://[{domain}]/mtls/account/{accountId}  |
 |POST|  https://[{domain}]/mtls/account/{accountId}  |
 |DELETE|  https://[{domain}]/mtls/account/{accountId}  |
 |PUT|  https://[{domain}]/mtls/account/{accountId}  |

**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|    Contains token string to allow request authentication and authorization. it can be done via oAuth1 with     MTLS_READ_INTERNAL/MTLS_WRITE_INTERNAL or via Bearer of administrator user/LPA. |
 |LP-service-name|  Contains the service name which has the certificate in Hashicorp-Vault. Not required. |
 |LP-forward-url|   Contains the desired endpoint url of the client.  |
 |LP-authorization-override|  Contains the authorizaion for the desired endpoint url of the client. Not required. |

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

(In this resource we can return every status code the remote endpoint returns).

**Response Headers**

**Response Body**

same body as the server responses.
