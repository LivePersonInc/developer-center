---
pagename: MTLS check mappings
redirect_from:
  - xxx.html
keywords:
sitesection: Documents
categoryname: "Security & Authenication"
documentname: MTLS API
subfoldername: Methods
---

This API checks for mapping configuration existence for specific tupple: serviceName, accountId and url.


### Request

 |Method|      URL|  
 |:--------  |:---  |
 |POST|  https://[{domain}]/mtls/mapping |


**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|    Contains token string to allow request authentication and authorization.|

**Request Body**

Contains list of CertificateMappingParamters objects:
```
[ 
	{"serviceName":"IDP","accountId":"52653865","url":"https://lp-idp-qa.dev.lprnd.net/mock/auth/token?v=2.0"}, 
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


**Response Headers**

**Response Body**
```
{
 "CertificateMappingParamters{serviceName='TEST_SERVICE', accountId='52653865', url='https://lp-mtls-qa.dev.lprnd.net/test'}": true,
"CertificateMappingParamters{serviceName='IDP', accountId='52653865', url='https://lp-idp-qa.dev.lprnd.net/mock/auth/token'}": false
}
```

**Entity Structure:**

CertificateMappingParameters object which contains:

| Attribute | Description  | Type/Value | Required | Notes |
| :------   | :--------    | :-------- | :--- | :--- |
| serviceName | Contains the service name which has corresponding certificate in Hashicorp-Vault. | string |  | |
| accountId | Account ID which has corresponding certificate in Hashicorp-Vault. | string |  | |
| url | Contains the URL which has corresponding certificate in Hashicorp-Vault. | string |  | |


