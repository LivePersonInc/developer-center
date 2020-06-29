---
pagename: Check mapping configuration
keywords:
sitesection: Documents
categoryname: "Security & Authentication"
documentname: MTLS API
subfoldername: Methods
permalink: mtls-methods-check-mapping-configuration.html
---

This method checks if a mapping configuration exists for a specific triplet of parameters: serviceName, accountId and url. If it exists, am mTLS request can be used with the relevant certificate.

The aim of this method is to minimize sending TLS only requests through the service, since the mTLS service is throttle protected. This API allows the consuming service to know if mTLS is configured for the specified parameters.

### Request

 |Method|      URL|  
 |:--------  |:---  |
 |POST|  https://[{domain}]/mtls/mapping |

**Query Parameters**

| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| v | API version number | number| Not Required | Default Value: 1 | Options: 1, 2 |

* **Versions only differ by the response type (see below)**.

**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|    Contains token string to allow request authentication and authorization. **AppKey only API**|

**Request Body**

Contains list of `CertificateMappingParamters` objects:

```json
[
   {"serviceName":"IDP","accountId":"52653865","url":"https://lp-idp-qa.dev.lprnd.net/mock/auth/token"},
   {"serviceName":"TEST_SERVICE","accountId":"52653865","url":"https://lp-mtls-qa.dev.lprnd.net/test"}
]
```
**Note: you must enter a complete URL, including any URL parameters if they exist. For mapping purposes, the entire URL will be checked**

### Response

**Response Codes**

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 401  | Not Authenticated     |
| 403  | Not Authorized        |
| 500  | Internal Server Error |



**Response Body**

**V1 response (default)**

```json
{
 "CertificateMappingParamters{serviceName='TEST_SERVICE', accountId='52653865', url='https://lp-mtls-qa.dev.lprnd.net/test'}": true,
 "CertificateMappingParamters{serviceName='IDP', accountId='52653865', url='https://lp-idp-qa.dev.lprnd.net/mock/auth/token'}": false
}
```

**V2 response** 

* The "doExist" status is added to the submitted parameters.

```json
[
    {
        "serviceName": "IDP",
        "accountId": "52653865",
        "url": "https://lp-mtls-qa.dev.lprnd.net/test",
        "doExist": true
    },
    {
        "serviceName": "TEST_SERVICE",
        "accountId": "52653865",
        "url": "https://lp-mtls-qa.dev.lprnd.net/test",
        "doExist": false
    }
]
```

**Entity Structure:**

CertificateMappingParameters object which contains:

| Attribute | Description  | Type/Value | Required | Notes |
| :------   | :--------    | :-------- | :--- | :--- |
| serviceName | Contains the service name which has a corresponding certificate in Hashicorp-Vault. | string |  | |
| accountId | Account ID which has a corresponding certificate in Hashicorp-Vault. | string |  | |
| url | Contains the URL which has a corresponding certificate in Hashicorp-Vault. | string |  | |
