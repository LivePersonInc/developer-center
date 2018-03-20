---
title: Report
level2: Real Time Interactions
level3: Monitoring API
level4: Methods
order: 30
permalink: rt-interactions-monitoring-methods-report.html
indicator: messaging
---

**Note**: Please make sure the read the [overview](rt-interactions-monitor-api-overview.html) before getting started with this method.

### Description

Use this API to access the LivePerson monitoring system in order to report information regarding consumer activity within the brand's account. Such information can include engagement attributes, entry points.


### Use cases

* Report on consumer engagement-attributes from any entry point within the App.

### Request

| Method | URL |
| :--- | :--- |
|PUT|https://{liveperson-monitor-domain}/api/account/{account-id}/app/{app-installation-id}/report?v={api-version}&vid={visitor-id}&sid={session-id} |

### Path Parameters

| Parameter | Description | Type | Notes |
| :--- | :--- | :--- | :--- |
| account-id | LP site ID | string |  |
| app-installation-id | App installation id | string | String, Required |

### Query parameters

| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| v | API version number | double | Required | Supported Value: 1.0  |
| vid | Visitor Id | String | Optional on first request, otherwise required | If session doesn't exist, a new session will be generated and sent by the server |
| sid | Session Id | String | Optional on first request, otherwise required |  Will be provided by the server-side in a 201(CREATED) response for this specific consumer and device and should be set by the client-side on all the subsequent requests to the server |

### Body Parameters

| Parameter | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| consumerId | Consumer Id | String | Optional <sup>[1]</sup> | |
| engagementAttributes | Array of engagement attributes | string | Required | Supports all engagement-attributes including the impression events (inherited from ImpressionEventBase), see limitations item below |
| pageId | Page identification for sending events on the current engagement | String | Optional | If not provided a random  pageId will be generated
| entryPoints | List of entry points in the external system relevant for the engagement | Comma delimited list of strings | Optional | Example: ["http://one.url","tel://972672626"] | At least one form of identification is required (ConsumerID or VisitorID).

### POST Request & body entity example

**Example call URL**

https://{liveperson-monitor-domain}/api/account/{account-id}/app/123/report?v=1.0&vid=myVisiorId&sid=mySessionId

**Example Body Entity**

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

#### Examples for engagement attributes to report impression events:

ImpressionAcceptEvent:

```json
{
  "type": "impAccept",
  "campaign": 3115242510,
  "engId": 3115242810,
  "revision": 537,
  "eContext": [
    {
      "type": "engagementContext",
      "id": "1"
    }
  ]
}
```

ImpressionDisplayEvent:

```json
{
  "type": "impDisplay",
  "campaign": 3115242510,
  "engId": 3115242810,
  "revision": 537,
  "eContext": [
    {
      "type": "engagementContext",
      "id": "1"
    }
  ]
}
```  

ImpressionExpandedEvent:

```json
{
  "type": "impExpanded",
  "expanded": null,
  "userInit": null,
  "actionableItems": null,
  "campaign": 3115242510,
  "engId": 3115242810,
  "revision": 537
}
```

ImpressionTimeoutEvent:

```json
{
  "type": "impTimeout",
  "campaign": 3115242510,
  "engId": 3115242810,
  "revision": 537
}
```

ImpressionCloseEvent:

```json
{
  "type": "impClose",
  "campaign": 3115242510,
  "engId": 3115242810,
  "revision": 537
}
```

### Response

#### Response entity examples

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

#### Response Format

| Attribute | Description | Type | Required|
| :--- | :--- | :--- | :--- |
| sid | The visit session ID| string | Must be saved in order to reuse for future requests in the same visit  |
| vid | The visit visitor ID | string | Must be saved in order to reuse for future requests in the same visit |

#### Response Codes

|Code|Description|
|:----|:-----|
|200 | OK|
|201 |Created|
|400 |Validation error|
|404 |Data not found|
|500 |Internal server error|
|503 |The server is temporarily unavailable|

#### Retry Policy Recommendation

| Error code | Meaning | Recommendation |
| :--- | :--- | :--- |
| 4xx | Client side error | Do not retry, fix problems in code |
| 5xx | There was an error on server side | Retry 3 times with 10, 30, 90 Seconds pause between retries |

### Limitations

| Area | Description |
| :--- | :--- |
| Impression Events | All impression events could be reported only within same session where engagement has been created. That is, session must have engagement-context-id for corresponding engagement. The impression events cannot be reported to newly created session without invocation of /engagement API |
