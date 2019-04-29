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

This API wraps and forwards any request according to specified parameters in the request headers with the requried certificate if the certificate exists (if not - it forwards the non-mtls request to the required endpont).

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
 |Authorization|    Contains token string to allow request authentication and authorization.  |
 |LP-service-name|  Contains the service name which has the certificate in Hashicorp-Vault.  |
 |LP-forward-url|   Contains the desired endpoint url of the client.  |

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
