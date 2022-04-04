---
pagename: Get Agent Segments Breakdown Files List
sitesection: Documents
categoryname: Reporting
documentname: Actual Handle Time API
subfoldername: Methods
permalink: actual-handle-time-api-methods-get-agent-segments-breakdown-files-list.html
indicator: both
---

This method provides a list of files names that contain a breakdown of the Actual handle time calculation. The file contains all the handling time units (HTUs) that contribute to the total handling time.
Using the file list you should be able to pull the content of the files using the [Get Agent Segments Breakdown File](actual-handle-time-api-methods-get-agent-segments-breakdown-file.html) 

{: .notice}
**Note:**
This API is not available by default. To enable it please contact your account manager.

### Request

| Method | URL                                                                                                                                                  |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| GET    | https://[{domain}](/agent-domain-domain-api.html)/api/account/<accountId>/agent-segments/breakdown?from=<timestamp>&to<timestamp>&source=<sourceName |

#### Request Query Parameters

| Name                 | Description                                                                                                                     | Type              | Required? | Default | Notes                                                                                                          |
|----------------------|---------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------|---------|----------------------------------------------------------------------------------------------------------------|
| source               | Used to describe the originator of the call. The source name should be unique for every project/process within the organization | string            | Required  |         | Source name should be up to 20 characters. Must match the following regex: ^[a-zA-Z0-9_]+$ Example: LP_AgentUI |
| timeframe (from, to) | The timeframe for pulling records (based on the segment’s end date)                                                             | long - Epoch time | Optional  | 1 day   | The maximum time frame interval is 1-day                                                                       |

### Response

| Property Name | Description                           | Type              | Notes |
|---------------|---------------------------------------|-------------------|-------|
| timeframe     |                                       | object            |       |
| startTime     | The start of the requested time frame | long - Epoch time |       |
| endTime       | The end of the requested time frame   | long - Epoch time |       |
| files         | Container of the breakdown file names | container         |       |

#### Response Example

```json
{
  "timeframe": {
    "startTime": "2021-12-28T14:00:00Z",
    "endTime": "2021-12-28T18:00:00Z"
  },
  "files": [
    "/year=2021/month=12/day=28/hour=14/accountId=le79344075/sequences.1642602416000.20220117180636.00053.json.gz",
    "/year=2021/month=12/day=28/hour=14/accountId=le79344075/sequences.1642602416000.20220117180636.00054.json.gz",
    "/year=2021/month=12/day=28/hour=15/accountId=le79344075/sequences.1642602416000.20220117180636.00055.json.gz",
    "/year=2021/month=12/day=28/hour=16/accountId=le79344075/sequences.1642602416000.20220117180636.00056.json.gz",
    "/year=2021/month=12/day=28/hour=17/accountId=le79344075/sequences.1642602416000.20220117180636.00057.json.gz"

  ]
}
```

### Error Codes

See [Error Codes](actual-handle-time-api-error-codes.html)
