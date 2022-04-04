---
pagename: Get Agent Segments Breakdown File
sitesection: Documents
categoryname: Reporting
documentname: Actual Handle Time API
subfoldername: Methods
permalink: actual-handle-time-api-methods-get-agent-segments-breakdown-file.html
indicator: both
---

This method is used to download the files from Get Agent Segment Breakdown API, using the returned path.

{: .notice}
**Note:**
This API is not available by default. To enable it please contact your account manager.

### Request

| Method | URL                                                                                                                                        |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------|
| GET    | https://[{domain}](/agent-domain-domain-api.html)/api/account/<accountId>/agent-segments/files?path=<relativeFilePath>&source=<sourceName> |

#### Request Query Parameters

| Name   | Description                                                                                                                     | Type   | Required? | Default | Notes                                                                                                                                  |
|--------|---------------------------------------------------------------------------------------------------------------------------------|--------|-----------|---------|----------------------------------------------------------------------------------------------------------------------------------------|
| path   | Relative file path as received from the Breakdown API                                                                           | string | Required  |         | Must match the following regex:  ^/year=\d{4}/month=\d{1,2}/day=\d{1,2}/hour=\d{1,2}/accountId=[a-zA-Z0-9]+/[a-zA-Z0-9_.-]+\.json\.gz$ |
| source | Used to describe the originator of the call. The source name should be unique for every project/process within the organization | string | Required  |         | Source name should be up to 20 characters , Must match the following regex: ^[a-zA-Z0-9_]+$  Example: LP_AgentUI                       |

### Response

| Property Name    | Description                                  | Type              | Notes |
|------------------|----------------------------------------------|-------------------|-------|
| segmentId        | Segment’s unique identifier                  | string            |       |
| sequence         | Event sequence number                        | string            |       |
| startReason      | HTU measurement trigger                      | string            |       |
| endReason        | HTU end reason                               | string            |       |
| startTimestamp   | HTU start timestamp                          | long - Epoch time |       |
| endTimestamp     | HTU end timestamp                            | long - Epoch time |       |
| handleTimeMillis | Total time in milliseconds from start to end | string            |       |
| insertTimestamp  | Record insertion time (internal)             | long - Epoch time |       |

#### sample file content

```json
{ "segmentId":"11111:2521430130:5c1b128b-f09d-4fbe-8baa-380e5831af57:IxRLk7ToTdmJL5BW2eACOA",
  "sequence":1,
  "startReason":"consumerMessage",
  "endReason":"agentResponse",
  "startTimestamp":1641892034742,
  "endTimestamp":1641892043835,
  "handleTimeMillis":9093,
  "insertTimestamp":1642351464697
}
```

### Error Codes

See [Error Codes](actual-handle-time-api-error-codes.html)
