---
pagename: Get Agent Segments Breakdown Files List
sitesection: Documents
categoryname: Reporting
documentname: Actual Handle Time API
subfoldername: Methods
permalink: actual-handle-time-api-methods-get-agent-segments-breakdown-files-list.html
indicator: both
---

This method provides raw data about agent states changes.

{: .important}
If you have not done so yet, see the [overview](actual-handle-time-api-overview.html) of this product.

### Request

| Method | URL                                                                                                                                                       |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| GET    | https://[{domain}](/agent-domain-domain-api.html)/api/account/<accountId>/agent-segments/breakdown?from=<timestamp>&toDate<timestamp>&source=<sourceName> |

#### Request Query Parameters

| Name   | Description                                                                                                                     | Type   | Required? | Default | Notes                                                                                                                  |
|--------|---------------------------------------------------------------------------------------------------------------------------------|--------|-----------|---------|------------------------------------------------------------------------------------------------------------------------|
| from   | Query period: Query start date                                                                                                  | long   | Required  |         | The query period will be limited to 1 day , Epoch time                                                                 |
| to     | Query period: Query end date                                                                                                    | long   | Required  |         | The query period will be limited to 1 day ,Epoch time                                                                  |
| source | Used to describe the originator of the call. The source name should be unique for every project/process within the organization | string | Required  |         | Source name should be up to 20 characters </br>Must match the following regex: ^[a-zA-Z0-9_]+$</br>Example: LP_AgentUI |

### Response

| Property Name | Description                         | Type    | Notes      |
|---------------|-------------------------------------|---------|------------|
| timeframe     | The requested start date & end time | Numeric | Epoch time |
| files         | List of matching files              | string  |            |

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

See [Error Codes](actual-handle-time-api-error-codes.html.html)
