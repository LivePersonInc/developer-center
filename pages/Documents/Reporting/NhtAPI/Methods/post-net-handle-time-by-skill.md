---
pagename: Post Net Handle Time by Skill
sitesection: Documents
categoryname: Reporting
documentname: NHT API
subfoldername: Methods
permalink: nht-api-methods-post-net-handle-time-by-skill.html
indicator: both
---

This method provides the Net Handle Time (NHT) at a skill level. The API  retrieves up to 9 weeks of information.

{: .important}
If you have not done so yet, see the [overview](nht-api-overview.html) of this product.

{:.notice}
<br>Some metrics are calculated only in 60-minute intervals. These metrics when calling the API in a 15-minutes interval will be replicated for each timeframe. <br>Timeframe type can be either ISO time format or Epoch time, not both. <br>In case there is no data available, the response element will contain -1.

### Request

v2 is the version to use. This  version contains pagination and epoch time support. V2 will be maintained whereas v1 will be under low maintenance until it is no longer used.

| Method | URL |
| --- | --- |
| POST | https://[{domain}](/agent-domain-domain-api.html)/operations/api/account/{accountId}/nht

#### Request Body Parameters

| Name | Description | Type | Required? | Notes |
| --- | --- | --- | --- | --- |
| v | The version of the API | Numeric | No | Two versions are supported: v1 & v2 (If not provided, will be set to v1 for backward compatibility). <br> **v1**: default version (basic maintenance). <br> **v2**: pagination support (maintained version) |
| source | Used to describe the originator of the call. The source name should be unique for every project/process within the organization | String | Yes | Source name should be up to 20 characters. <br> Example: LP_AgentUI |
| fromDate | Query period: Query start date | ISO format. UTC timezone | Yes - conditional | **fromMillis must not be provided**. <br> The query period will be limited to 1 week. <br> example format: 2021-07-05T05:00:00 |
| fromMillis | Query period: Query start date | long - Epoch time | Yes - conditional | **fromDate must not be provided**. <br> The query period will be limited to 1 week. <br> example format: 2021-07-05T05:00:00 |
| toDate | Query period: Query end date | ISO format. UTC timezone | Yes - conditional | **toMillis must not be provided**. <br> The query period will be limited to 1 week. <br> example format: 2021-07-05T05:00:00 |
| toMillis | Query period: Query end date | long - Epoch time | Yes - conditional | **toDate must not be provided**. <br> The query period will be limited to 1 week. <br> example format: 2021-07-05T05:00:00 |
| interval | Interval size in minutes. When provided, the returned data will be aggregated by intervals of the requested size. <br> The buckets will be rounded to the closest rounded time (e.g. 11:00, 11:15, 11:30) | Numeric | No | Available intervals: 15/30/60. <br> Default: 60 |
| skillIds | When provided, will return the information for the specific skills. Can be more than 1 skill | String | No | If not provided all skills will be returned. |
| limit | limits the number of skills per page | Numeric | Optional | 10 |
| offset | staring skill offset | Numeric | Optional | 0 |

#### Request Body Example

```json
{
  "skillIds": "111,222",
  "fromDate": "2021-07-05T05:00:00",
  "toDate": "2021-07-06T05:00:00",
  "interval": 60,
  "source": "dev",
  "v": 2
}
```

### Response

| Property Name | Description | Type | Notes |
| --- | --- | --- | --- |
| fromDate | The requested start date | ISO format. UTC timezone | |
| fromMillis | Query start date (same as above) in Epoch time format | Long - Epoch time | |
| toDate | The requested end date | ISO format. UTC timezone | |
| toMillis | Query end date (same as above) in Epoch time format | Long - Epoch time | |
| Interval | The requested interval | Integer | |
| skillInfo | Skill information container | Array of objects | |
| skillId | The skill Id | Long | |
| metricsByIntervals | Contains a summary of the requested metrics by intervals | Container only | |
| timestamp | Interval start time (human-readable format)  | ISO format. UTC timezone | |
| epochTimestamp | Interval start time (epoch format) | Long - Epoch time | |
| arrivals | Segments arrived to the queue/skill of all types (new conversation, back2Q, transfer to skill) in the interval | Integer | |
| AvgTimeInQueue | The average time a segment waits in the queue before assignment to an agent | Double | |
| totalAgentSegmentDuration | Total time of all closed segments ending by any means within the interval | Long | |
| AvgAgentSegmentDuration | Average duration of all closed segments ending by any means within the interval | Double | |
| avgAvailableLoad | Weighted average load of logged in agents within the interval, this is represented in percentage value for agents that have the skill | Double | Used for the NHT calculation. <br>60 minutes metric |
| messagesSent | Total individual messages sent to consumers within time step by human agents | Integer | Used for the NHT calculation. <br>60 minutes metric |
| handledSegments | Number of individual segments within current interval that have sent at least 1 human agent message (assigned agent) | Integer | Used for the NHT calculation. <br>60 minutes metric |
| avgSegmentWorkTime | The average time it takes for all agents in the skill to work on a message response per skill | Double | Used for the NHT calculation. <br>60 minutes metric |
| netHandleTime | Effort time heuristic LP calculation (NHT) | Double | Used for the NHT calculation. <br>60 minutes metric |
| metadata | Container for additional data | Container | |
| count | The total number of results for the query (skills) | Numeric | |
| references | An array of links to the pages in the response | Array | |
| rel | Pagination: The name of the link. This is based on the “offset” and “limit” elements | String | Possible values: <ul><li>self - the link to the same page in the query</li><li>previous - link to the previous page of results</li><li>previous - link to the previous page of results</li><li>first - link to the first page of the query results</li><li>last - link to the last page of the query results</li></ul> |
| href | Pagination: The specific link for each one of the above values | String | The values: self, first, and last will always be returned whereas the others will be returned if there is more than 1 page in the response |

#### Response Example (V2)

```json
      {
  "_metadata": {
    "count": 458,
    "references": [{
      "rel": "self",
      "href": "https://[domain].liveperson.net/operations/api/account/[account]/nht?fromDate=2022-05-19T09:00:00&toDate=2022-05-20T10:00:00&offset=0&limit=10&source=sanity&interval=60&v=2"
    },
      {
        "rel": "next",
        "href": "https://[domain].liveperson.net/operations/api/account/[account]/nht?fromDate=2022-05-19T09:00:00&toDate=2022-05-20T10:00:00&offset=10&limit=10&source=sanity&interval=60&v=2"
      },
      {
        "rel": "last",
        "href": "https://[domain].liveperson.net/operations/api/account/[account]/nht?fromDate=2022-05-19T09:00:00&toDate=2022-05-20T10:00:00&offset=450&limit=8&source=sanity&interval=60&v=2"
      },
      {
        "rel": "first",
        "href": "https://[domain].liveperson.net/operations/api/account/[account]/nht?fromDate=2022-05-19T09:00:00&toDate=2022-05-20T10:00:00&offset=0&limit=10&source=sanity&interval=60&v=2"
      }
    ]
  },
  "timeframe": {
    "fromDate": "2022-05-19T09:00:00",
    "toDate": "2022-05-19T10:00:00",
    "fromMillis": 1652950800000,
    "toMillis": 1652954400000
  },
  "interval": 60,
  "skillInfo": [{
    "skillId": 773431,
    "metricsByIntervals": [{
      "timestamp": "2022-05-19T09:00",
      "epochTimestamp": 1652950800000,
      "arrivals": -1,
      "avgAgentSegmentDuration": 3127.00,
      "totalAgentSegmentDuration": 3127,
      "avgTimeInQueue": 3.00,
      "netHandleTime": 699.72,
      "handledSegments": 1,
      "avgAvailableLoad": 0.70,
      "avgSegmentWorkTime": 99.96,
      "messagesSent": 7
    },
      {
        "timestamp": "2022-05-19T10:00",
        "epochTimestamp": 1652954400000,
        "arrivals": -1,
        "avgAgentSegmentDuration": 31.15,
        "totalAgentSegmentDuration": -1,
        "avgTimeInQueue": 31.15,
        "netHandleTime": 1421.36,
        "handledSegments": 1,
        "avgAvailableLoad": 0.71,
        "avgSegmentWorkTime": 236.89,
        "messagesSent": 6
      }

    ]
  }]
}
```
