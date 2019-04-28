---
pagename: MTLS Check Mapping API
redirect_from:
  - guides-authentication-detailedapi.html
  - authentication-detailed-api.html
sitesection: Documents
categoryname: "Security & Authentication"
documentname: Mutual TLS Authentication
permalink: mutual-tls-authentication-detailed-api.html
indicator: both
---

This API checks for configuration existence for the specified parameters in the request headers.
This API have a GET method for a single entity and a POST method for multiple entities.

### Request

 |Method|      URL|  
 |:--------  |:---  |
 |GET|  https://[{domain}]/mtls/mapping/account/{accountId}  |
 |POST|  https://[{domain}]/mtls/mapping/account/{accountId}  |

**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|    Contains token string to allow request authentication and authorization.  |
 |LP-service-name|  Contains the service name which has the certificate in Hashicorp-Vault.  |
 |LP-forward-url|   Contains the desired endpoint url of the client.  |

**Request Body**

[
{"accountId":"test1","serviceName":"test1","url":"https://test.com"},
{"accountId":"test2","serviceName":"test1","url":"https://test.com"},
{"accountId":"test3","serviceName":"test1","url":"https://test.com"},
{"accountId":"test4","serviceName":"test1","url":"https://test.com"}
]

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

**Response Headers**

**Response Body**

{
    "CertificateMappingParamters{serviceName='test1', accountId='test515', url='https://test.com'}": false,
    "CertificateMappingParamters{serviceName='test1', accountId='test7', url='https://test.com'}": false,
    "CertificateMappingParamters{serviceName='test1', accountId='test527', url='https://test.com'}": false,
    "CertificateMappingParamters{serviceName='test1', accountId='test511', url='https://test.com'}": true
}
