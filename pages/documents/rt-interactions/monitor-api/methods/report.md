### Report 
#### version 1.0

### Description
Use this API to report an engagement attributes (SDEs) for a consumer in an appInstallationId context.

### Use cases
* Report consumer SDEs from any entry point within the App

### Request

| Method | URL |
| :--- | :--- |
|PUT|`https://{Monitor-Domain}/api/account/{account-Id}/app/{app-Installation-Id}/report?v={version}&vid={visitor-id}&sid={session-id}` |

### Path Parameters
| Parameter | Description | Type | Notes |
| :--- | :--- | :--- | :--- |
| accountId | LP site ID | string | ^[a-zA-Z0-9_]{1,20}$ (Validation fail error code: 400) |
| appInstallationId | App installation id | string | String, Required (Validation fail error code: 400) |

### Query parameters
| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| v | API version number | double | Required | Supported Value: 1.0  |
| vid | Visitor Id | String | Optional on first request, otherwise required | If session doesn't exist, a new session will be generated and sent by the server |
| sid | Session Id | String | Optional on first request, otherwise required | If session doesn't exist, a new session will be generated and sent by the server |

### Body Parameters
| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| consumerId | Consumer Id | String | Optional <sup>[1]</sup> | (Validation fail error code: 400)  |
| lpConsumerId | LPConsumer Id | String | Optional <sup>[1]</sup> | (Validation fail error code: 400)  |
| engagementAttributes | Array of engagement attributes (SDEs) | string | Required | Supported all SDEs including the impression events (inherited from ImpressionEventBase), see [limitations](#limitations) item below |
| pageId | Page identification for sending events on the current engagement | String | Optional | If not provided a random  pageId will be generated
| entryPoints | List of entry points in the external system relevant for the engagement | Comma delimited list of strings | Optional | Example: ["http://one.url","tel://972672626"] |
<sup>[1]</sup> At list one form of identification is required (ConsumerID, LPConsumerID or VisitorID). Both ConsumerID and LPConsumerID cannot be used for the same request.

### PUT Request & body entity example
https://domainToLiveperson/api/account/{account-Id}/app/123/report?v=1.0&vid=myVisiorId&sid=mySessionId
(API version number will be in query params)
```json
{
 "consumerId":"myConsumerId",
 "pageId" : "4743822558",
 "entryPoints":[
   "tel://972737004000",
   "http://www.brand.com",
   "sec://Sport",
   "lang://English"
 ],
 "engagementAttributes": [
   {
       "type": "purchase",
       "total": 11.7,
       "orderId": "DRV1534XC"
	},
	{
       "type": "lead",
           "lead": {
           "topic": "luxury car test drive 2015",
           "value": 22.22,
           "leadId": "xyz123"
       }
   }
 ]
}
```
### Response 
#### Response Codes
* 200 OK
* 201 Created
* 400 Validation error
* 401 Unauthorized
* 404 Data not found
* 500 Internal server error
* 503 The server is temporarily unavailable

#### Retry Policy Recommendation
| Error code | Meaning | Recommendation |
| :--- | :--- | :--- |
| 4xx | Client side error | Do not retry, fix problems in code |
| 5xx | There was an error on server side | Retry 3 times with 10, 30, 90 Seconds pause between retries |

### Response Format
| Attribute | Description | Type | Required|
| :--- | :--- | :--- | :--- |
| sid | The visit session ID| string | Must be saved in order to reuse for future requests in the same visit  |
| vid | The visit visitor ID | string | Must be saved in order to reuse for future requests in the same visit |

### PUT Response entity examples
Status code: 200 OK - Operation performed successfully:
```json
{
  "sessionId": "abc",
  "visitorId": "xyz",
  "pageId": "4743822558"
}
```
Status code: 400 Bad request - Operation failed:
```json
{
  "time":1513095142268,
  "message":"consumerId",
  "internalCode":5
}
```
Status code: 500 Server Error - Loading account:
```json
{
    "time":1501074704502,
    "message":"Loading account: ta3hWd4IgG, vid: myVisitorId",
    "internalCode":20
}
```

### Limitations
| Area | Description |
| :--- | :--- |
| impression events | All impression events could be reported only within same session where engagement has been created. That is, session must have engagement-context-id for corresponding engagement. The impression events cannot be reported to newly created session without invocation of /engagement API |
