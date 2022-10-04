---
pagename: Forward get request
keywords:
sitesection: Documents
categoryname: "Security & Authentication"
documentname: MTLS
subfoldername: Methods
permalink: mtls-methods-forward-get-request.html
---

The Forward API methods proxies incoming requests to the `LP-forward-url` supplied parameter. Proxied requests are wrapped with the certificate provided according to the configuration parameters (accountId/servicName/Url which act as a unique key). If no configuration exists, the request will be proxied using regular TLS (rather than mTLS). The proxied http method in this method is `GET` (this corresponds to the method you'd like to use with the endpoint configured with `LP-forward-url`).

When submitting the forward request, the certificate will be fetched according to service name + url, wrapped and forwarded to the desired endponit and the response will be returned as if contacted the remote endpoint directly.

### Request

 |Method|      URL|
 |:--------  |:---  |
 |GET|  https://[{domain}]/mtls/account/{accountId} |

**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|    Contains token string to allow request authentication and authorization, **AppKey only API**, **Required**. |
 |LP-service-name|    Contains the service name which has the certificate in HashiCorp Vault. **Not Required**, Possible options: TEST_SERVICE/IDP/WEBHOOKS |
 |LP-forward-url|    Contains the desired endpoint url of the client, **Required**  |
 |LP-authorization-override|    Contains the authorizaion for the desired endpoint url of the client. **Not Required**. |
 |LP-stop-if-certificate-not-found| If the service was unable to match the certificate to the supplied parameters, this parameter controls the behavior. If true, the service will not forward the request (instead will return INTERNAL_SERVER_ERROR with the reason). **Default value is false (proxy request even if certificate not found). Not Required**. |

**Request Body**

Body will be proxied as is to the remote  endpoint (`LP-forward-url`), so the body submitted will be as if contacting the `LP-forward-url` value directly.

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

Response will be returned from the `LP-forward-url` as if contacted directly.