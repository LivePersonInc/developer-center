---
pagename: Get Agent Segments Breakdown Files List
sitesection: Documents
categoryname: Reporting
documentname: Actual Handle Time API
subfoldername: Methods
permalink: actual-handle-time-api-methods-get-agent-segments-breakdown-files-list.html
indicator: both
---

This method provides a list of file names that contain a breakdown of the Actual handle time calculation. The file contains all the handling time units (HTUs) that contribute to the total handling time.
Using the file list you should be able to pull the content of the files using the [Get Agent Segments Breakdown File](actual-handle-time-api-methods-get-agent-segments-breakdown-file.html) 

{: .notice}
**Note:** This API is not available by default. To enable it please contact your account manager.

### Request

| Method | URL                                                                                                                                                  |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| GET    | https://[{domain}](/agent-domain-domain-api.html)/api/account/<accountId>/agent-segments/breakdown?from=<timestamp>&to<timestamp>&source=<sourceName |

#### Request Query Parameters

| Name       | Description                                                                                                                     | Type                                                              | Required? | Default | Notes                                                                                                          |
|------------|---------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|-----------|---------|----------------------------------------------------------------------------------------------------------------|
| source     | Used to describe the originator of the call. The source name should be unique for every project/process within the organization | string                                                            | Required  |         | Source name should be up to 20 characters. Must match the following regex: ^[a-zA-Z0-9_]+$ Example: LP_AgentUI |
| from       | Query start date. This parameter indicates what is the earliest time to pull records from (earliest segment close time).        | [[RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string | Optional  | 24h     | No more than 1 month in the past                                                                               |
| fromMillis | Query start date (same as above) in Epoch time format                                                                           | long - Epoch time in milliseconds                                 | Optional  |         | If provided, “from” element should not be provided                                                             |
| to         | Query end date. This parameter indicates what is the latest time to pull records (latest segment close time).                   | [[RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string | Optional  |         | Maximum 1 week timeframe in a single request                                                                   |
| toMillis   | Query end date (same as above) in Epoch time format                                                                             | long - Epoch time in milliseconds                                 | Optional  |         | If provided, “to” element should not be provided                                                               |

### Response

| Property Name | Description                           | Type                     | Notes |
|---------------|---------------------------------------|--------------------------|-------|
| timeframe     |                                       | object                   |       |
| startTime     | The start of the requested time frame | ISO format. UTC timezone |       |
| endTime       | The end of the requested time frame   | ISO format. UTC timezone |       |
| startTimeL    | The start of the requested time frame | long - Epoch time        |       |
| endTimeL      | The end of the requested time frame   | long - Epoch time        |       |
| files         | Container of the breakdown file names | container                |       |

#### Response Example

```json
{
  "timeframe": {
    "startTime": "2021-12-28T14:00:00Z",
    "endTime": "2021-12-28T20:00:00Z",
    "endTimeL": "1640721600000",
    "startTimeL": "1640700000000"
  },
  "files": [
    "/year=2021/month=12/day=28/hour=14/accountId=le79344075/sequences.1642602416000.20220117180636.00053.json.gz",
    "/year=2021/month=12/day=28/hour=14/accountId=le79344075/sequences.1642602416000.20220117180636.00054.json.gz",
    "/year=2021/month=12/day=28/hour=15/accountId=le79344075/sequences.1642602416000.20220117180636.00055.json.gz",
    "/year=2021/month=12/day=28/hour=16/accountId=le79344075/sequences.1642602416000.20220117180636.00056.json.gz",
    "/year=2021/month=12/day=28/hour=17/accountId=le79344075/sequences.1642602416000.20220117180636.00057.json.gz",
    "/year=2021/month=12/day=28/hour=18/accountId=le79344075/sequences.1642351557575.20220116114557.00004.json.gz"
  ]
}
```

### Error Codes

| Code | name            | Description                                                      |
|------|-----------------|------------------------------------------------------------------|
| 404  | Not Found       | no paths were found in hdfs for the given timeframe              |
| 206  | Partial Content | one or more paths were not found in hdfs for the given timeframe |
