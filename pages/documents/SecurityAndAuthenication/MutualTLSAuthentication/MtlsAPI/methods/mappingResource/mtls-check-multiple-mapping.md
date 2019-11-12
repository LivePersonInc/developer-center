---
pagename: Check mapping configuration
keywords:
sitesection: Documents
categoryname: "Security & Authenication"
documentname: MTLS API
subfoldername: Methods
permalink: mtls-methods-check-mapping-configuration.html
---

This method checks for mapping configuration existence for a specific triplet: serviceName, accountId and url.

This resource helps you check if a certificate exists to some serviceName + accountId + url in order to send MTLS request (with certificate).

Since mTLS service is throttle protected the idea is not to send TLS only requests through the service, this API allows the consuming service to know if mTLS is configured for specific parameters.

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
```
{
 "CertificateMappingParamters{serviceName='TEST_SERVICE', accountId='52653865', url='https://lp-mtls-qa.dev.lprnd.net/test'}": true,
 "CertificateMappingParamters{serviceName='IDP', accountId='52653865', url='https://lp-idp-qa.dev.lprnd.net/mock/auth/token'}": false
}
```

**V2 response** 

* The "doExist" status is added to the submitted parameters.

```
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
