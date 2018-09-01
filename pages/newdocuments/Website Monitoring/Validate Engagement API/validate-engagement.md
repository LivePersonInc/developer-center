---
pagename: Validate Engagement
redirect_from:
  - rt-interactions-validate-engagement-validate-engagement.html
sitesection: Documents
categoryname: "Website Monitoring"
documentname: Validate Engagement API

order: 2
permalink: validate-engagement-api-validate-engagement.html

indicator: both
---

### Request

| Method     | URL |
| :--- | :--- |
| GET | https://{LivePerson domain}/api/account/{account}/monitoring/visitors/{visitor}/visits/current/campaigns/{campaign}/engagements/{engagement}/contexts/{context}?v=1&sid={sessionid} |

**OAuth** 

This API supports OAuth 1.0.

**Headers**

| Parameter     | Description |
| :--- | :--- |
| Authorization | Contains token string to allow request authorization. |

**Path Parameters**

| Name     | Mandatory | Description | Type/Value |
| :------: | :-------: | :-------- | :--------:|
| v | Yes |  API version    | string |
| aid | Yes   |  LivePerson account ID | string|
| vid     | Yes    |  LivePerson visitor ID | long|
| sid | Yes |  LivePerson session ID | long |
| cid | Yes   |  Engagement context ID | long|

*Note: The above parameters are passed by LivePerson to a page owned and hosted by the brand. See External conversion trigger API section.*

**Query Parameters**

| Name     | Mandatory | Description | Type/Value |
| :------: | :-------: | :-------- | :--------:|
| v | Yes |  API version  | double |
| sid | Yes |  LivePerson session ID | string |

**Request Example**

`http status 200 OK`
    
### Response
  
  **Response Codes**

| Code     | Description | 
| :------ | :------- | 
| 200 | OK; Engagement is valid |
| 401 | Unauthorized (no permissions) |  
| 404 | Engagement is not valid or resource not found |
| 422 | Invalid Account ID |      
| 500 | Internal Server Error |
| 503 | Service Unavailable | 

**Retry Policy Recommendation**

| Name     | Description | Recommendation |
| :------: | :------- | :-------- | 
| 4xx | Client side error |  Do not retry, fix problem in code or appKey    | 
| 5xx | Server side error |  Retry 3 times with a 5 second pause between retries | 
