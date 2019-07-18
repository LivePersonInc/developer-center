---
pagename: Check MTLS Configuration
redirect_from:
  - guides-authentication-detailedapi.html
  - authentication-detailed-api.html
sitesection: Documents
categoryname: "Security & Authentication"
documentname: Mutual TLS Authentication
permalink: mutual-tls-authentication-check-mtls-configuration.html
indicator: both
---

This API checks that a configuration exists using specific parameters (account number, URL) providede in the request headers.

### Request

 |Method|      URL|  
 |:--------  |:---  |
 |POST|  https://[{domain}]/mtls/mapping  |

**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|    Contains token string to allow request authentication and authorization.  |

**Request Body**

 ```json
[
{"accountId":"test1","serviceName":"test1","url":"https://test.com"},
{"accountId":"test2","serviceName":"test1","url":"https://test.com"},
{"accountId":"test3","serviceName":"test1","url":"https://test.com"},
{"accountId":"test4","serviceName":"test1","url":"https://test.com"}
]
```

**Path Parameters**

 |Parameter|  Description|  Type/Value |
 |:------    |:--------    |:--------|

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

 ```json
{
    "CertificateMappingParamters{serviceName='test1', accountId='test515', url='https://test.com'}": false,
    "CertificateMappingParamters{serviceName='test1', accountId='test7', url='https://test.com'}": false,
    "CertificateMappingParamters{serviceName='test1', accountId='test527', url='https://test.com'}": false,
    "CertificateMappingParamters{serviceName='test1', accountId='test511', url='https://test.com'}": true
}
```
