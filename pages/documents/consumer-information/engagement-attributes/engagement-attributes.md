---
pagename: Engagement Attributes
redirect_from:
  - rt-interactions-engagement-attributes-engagement-attributes.html
sitesection: Documents
categoryname: Consumer Information
documentname: Engagement Attributes API

order: 2
permalink: engagement-attributes-api-engagement-attributes.html

indicator: both
---


### Request

| Method    | URL |
| :------ | :------- |
| POST | https://{LivePerson domain}/api/account/{account}/monitoring/visitors/{visitor}/visits/current/events |

**OAuth**

_Note_: This API supports OAuth 1.0 and all URLs must be SSL enabled (https).

**Headers**

| Parameter    | Description |
| :------ | :------- |
| Authorization | Contains token string to allow request authorization |
| Content-Type | Set to "application/json" (encoded in UTF-8) |
| x-http-method-override | Set to "PUT" |

**Path Parameters**

| Name     | Mandatory | Description | Type/Value |
| :------: | :-------: | :-------- | :--------:|
| account | Yes |  LivePerson account ID  | string |
| visitor | Yes |  LivePerson visitor ID | string |

*Note: The above parameters are passed by LivePerson to a page owned and hosted by the brand.*

**Query Parameters**

| Name     | Mandatory | Description | Type/Value |
| :------ | :------- | :-------- | :--------|
| v | Yes |  API version  | string |
| sid | Yes |  LivePerson session ID | string |

*Note: "sid" parameter is passed to by LivePerson to a page owned and hosted by the brand.*

**BODY/POST Parameters**

| Parameter    | Description |
| :------ | :------- |
| Engagement Attributes Array | Array of Engagement Attribute. For more information about the available Engagement Attributes, refer to [Engagement Attributes Overview document](engagement-attributes-overview.html){:target="_blank"}. |

**Request URL Example**

https://lo.v.liveperson.net/api/account/1234/monitoring/visitors/xyz/visits/current/events?v=1&sid=rty.uio

**Request BODY Example**


```javascript
    [{
           "type": "lead", //MANDATORY
               "lead": {
               "topic": "inquiry about upgrade and iPhone 6s pricing", //TOPIC OR NAME OF A SUBMITTED LEAD
               "value": 200, //EVALUATED VALUE OF THE LEAD
               "leadId": "xyz123" //LEAD IDENTIFIER OR TICKET ID
           }
    },
    {
           "type": "service", //MANDATORY
           "service": {
              "topic": "add authorized user to the account ", // SERVICE ACTIVITY TOPIC OR NAME
              "status": 0, // STATUS ENUM
              // 0-Complete, 1-In Progress, 2-Approved, 3-cancelled, 4-Not Approved,
              // 5-Reviewed, 6-Missing Details, 7-Closed, 8-Removed, 9-Assigned,
              // 10-Waiting for Customer Response, 11-Waiting for Response, 12-Pending, 13-Resolved
              "category": "account maintenance", // SERVICE CATEGORY NAME
              "serviceId": "service12" // SERVICE UNIQUE IDENTIFIER OR TICKET ID
           }
    }]
```    

### Response

**Response Example**

     http status 200 ok and empty json

**Response Codes**

| Code     | Description |
| :------ | :------- |
| 200 | OK; Operation performed successfully |
| 400 | Bad Request; Problem with body or query parameters |  
| 401 | Unauthorized (no permissions) |
| 404 | Not Found |      
| 422 | Invalid Account ID |
| 500 | Internal Server Error |
