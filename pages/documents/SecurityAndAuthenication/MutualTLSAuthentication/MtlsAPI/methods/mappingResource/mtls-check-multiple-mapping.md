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

This API checks for mapping configuration existence for specific tupple: accountId, serviceName and url.


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

[

 {"accountId":"test1","serviceName":"test1","url":"https://test.com"},
 {"accountId":"test2","serviceName":"test1","url":"https://test.com"},
 {"accountId":"test3","serviceName":"test1","url":"https://test.com"},
 {"accountId":"test4","serviceName":"test1","url":"https://test.com"}

]


### Response

**Response Codes** 

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
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


**Entity Structure:**

CertificateMappingParameters object which contains:

| Attribute | Description  | Type/Value | Required | Notes |
| :------   | :--------    | :-------- | :--- | :--- |
| serviceName | Contains the service name which has corresponding certificate in Hashicorp-Vault. | string |  | |
| accountId | Account ID which has corresponding certificate in Hashicorp-Vault. | string |  | |
| url | Contains the URL which has corresponding certificate in Hashicorp-Vault. | string |  | |


