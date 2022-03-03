---
pagename: Get Agent Segments Breakdown File
sitesection: Documents
categoryname: Reporting
documentname: Actual Handle Time API
subfoldername: Methods
permalink: actual-handle-time-api-methods-get-agent-segments-breakdown-file.html
indicator: both
---

This method provides raw data about agent states changes.

{: .important}
If you have not done so yet, see the [overview](actual-handle-time-api-overview.html) of this product.

### Request

| Method | URL                                                                                                                                                          |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GET    | https://[{domain}](/agent-domain-domain-api.html)/api/account/<accountId>/agent-segments/files?path=<relativeFilePath>&toDate<timestamp>&source=<sourceName> |

#### Request Query Parameters

| Name   | Description                                                                                                                         | Type   | Required? | Default | Notes                                                                                                                                 |
|--------|-------------------------------------------------------------------------------------------------------------------------------------|--------|-----------|---------|---------------------------------------------------------------------------------------------------------------------------------------|
| path   | Relative file path as received from the Breakdown API                                                                               | string | Required  |         | Must match the following regex: ^/year=\d{4}/month=\d{1,2}/day=\d{1,2}/hour=\d{1,2}/accountId=[a-zA-Z0-9]+/[a-zA-Z0-9_.-]+\.json\.gz$ |
| source | Used to describe the originator of the call.</br>The source name should be unique for every project/process within the organization | string | Required  |         | Source name should be up to 20 characters </br>Must match the following regex: ^[a-zA-Z0-9_]+$</br>Example: LP_AgentUI                |
### Response

| Property Name         | Description                                   | Type                                                             | Notes                                                                                                                                |
|-----------------------|-----------------------------------------------|------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| timeframe             | The requested time frame                      | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string | Should be the time from the request                                                                                                  |

#### Response Example

```json
{ "segmentId":"23979466:2543430130:5c1b8f8b-f09d-4fbe-8baa-380e5831af57:IxRLk7ToTdmJL5BW2eACOA",
  "sequence":5,
  "startReason":"consumerMessage",
  "endReason":"agentResponse",
  "startTimestamp":1641892034742,
  "endTimestamp":1641892043835,
  "handleTimeMillis":9093,
  "insertTimestamp":1642351464697
}
```

### Error Codes

See [Error Codes](actual-handle-time-api-error-codes.html.html)
