---
pagename: Get Agent Segments
sitesection: Documents
categoryname: Reporting
documentname: Actual Handle Time API
subfoldername: Methods
permalink: actual-handle-time-api-methods-get-agent-segments.html
indicator: both
---

This method tracks human agent time spent on each segment (from the moment of assignment to the moment the conversation was closed or transferred).

### Request

| Method | URL                                                                                                      |
|--------|----------------------------------------------------------------------------------------------------------|
| GET    | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountID}/agent-segments?source={source} |

#### Request Query Parameters

| Name           | Description                                                                                                              | Type                                                              | Required? | Default             | Notes                                                                                    |
|----------------|--------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|-----------|---------------------|------------------------------------------------------------------------------------------|
| source         | Used to describe the originator of the call. The source name should be unique for every project/process                  | string                                                            | Required  |                     | Source name should not exceed 20 characters. regex: ^[a-zA-Z0-9_]+$  Example: LP_AgentUI |
| limit          | The maximum amount of agent segments that can be retrieved                                                               | long                                                              | Optional  | 100                 | Max value: 500                                                                           |
| offset         | The offset specifies from which records to retrieve the data                                                             | long                                                              | Optional  | 0                   |                                                                                          |
| sort           | The order of the results                                                                                                 | string                                                            | Optional  | Segment date (desc) | Valid values : Date,Conversation,Agent,Employee,Skill,Group                              |
| from           | Query start date. This parameter indicates what is the earliest time to pull records from (earliest segment close time). | [[RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string | Optional  | 24h                 | No more than 1 month in the past                                                         |
| fromMillis     | Query start date (same as above) in Epoch time format                                                                    | long - Epoch time in milliseconds                                 | Optional  |                     | If provided, “from” element should not be provided                                       |
| to             | Query end date. This parameter indicates what is the latest time to pull records (latest segment close time).            | [[RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string | Optional  |                     | Maximum 1 week timeframe in a single request                                             |
| toMillis       | Query end date (same as above) in Epoch time format                                                                      | long - Epoch time in milliseconds                                 | Optional  |                     | If provided, “to” element should not be provided                                         |
| ConversationId | Retrieves only segments for the specific conv id                                                                         | string                                                            | Optional  | 50                  |                                                                                          |
| AgentId        | Retrieves only segments for the specific Agent id                                                                        | string                                                            | Optional  |                     |                                                                                          |
| EmployeeId     | Retrieves only segments for the specific employee id                                                                     | string                                                            | Optional  | 0                   | Value must be configured in the system by the brand                                      |
| SkillId        | Retrieves only segments for the specific skill id                                                                        | string                                                            | Optional  |                     |                                                                                          |
| GroupId        | Retrieves only segments for the specific group id                                                                        | string                                                            | Optional  |                     |                                                                                          |

### Response

| Property Name         | Description                                                              | Type                                                             | Notes                                                                                                                                                                                                                                                        |
|-----------------------|--------------------------------------------------------------------------|------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| timeframe             |                                                                          | object                                                           |                                                                                                                                                                                                                                                              |
| startTime             | The start of the requested time frame                                    | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string |                                                                                                                                                                                                                                                              |
| startTimeL            | Same as above in epoch time                                              | long - Epoch time in milliseconds                                |                                                                                                                                                                                                                                                              |
| endTime               | The end of the requested time frame                                      | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string |                                                                                                                                                                                                                                                              |
| endTimeL              | Same as above in epoch time                                              | long - Epoch time in milliseconds                                |                                                                                                                                                                                                                                                              |
| segment               |                                                                          | container                                                        |                                                                                                                                                                                                                                                              |
| segmentId             | Segment’s unique identifier                                              | string                                                           |                                                                                                                                                                                                                                                              |
| startTime             | The start of the segment                                                 | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string |                                                                                                                                                                                                                                                              |
| startTimeL            | Same as above in epoch time                                              | long - Epoch time in milliseconds                                |                                                                                                                                                                                                                                                              |
| endTime               | The end of the segment                                                   | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string |                                                                                                                                                                                                                                                              |
| endTimeL              | Same as above in epoch time                                              | long - Epoch time in milliseconds                                |                                                                                                                                                                                                                                                              |
| conversationId        | Conversation's unique identifier                                         | string                                                           |                                                                                                                                                                                                                                                              |
| agentId               | Agent’s unique identifier                                                | long                                                             |                                                                                                                                                                                                                                                              |
| employeeId            | Employee’s unique identifier                                             | string                                                           | This is the brand id and should be configured in the system                                                                                                                                                                                                  |
| skillId               | Skill’s unique identifier                                                | long                                                             |                                                                                                                                                                                                                                                              |
| groupId               | Agent group unique identifier                                            | long                                                             |                                                                                                                                                                                                                                                              |
| EndReason             | Segment’s close reason                                                   | string                                                           | Possible values:closedByConsumer, closedByAgent, closedBySystem,agentTransfer, skillTransfer, backToQueue, other                                                                                                                                             |
| totalHandleTimeMillis | Total handle time of the segment                                         | long                                                             |                                                                                                                                                                                                                                                              |
| pagination            | Contains pagination data for the API results                             | object                                                           |                                                                                                                                                                                                                                                              |
| count                 | The total number of results for the query                                | number                                                           |                                                                                                                                                                                                                                                              |
| references            | An array of links to the pages in the response                           | Array                                                            |                                                                                                                                                                                                                                                              |
| rel                   | The name of the link. This is based on the “offset” and “limit” elements | numeric                                                          | Possible values: self - the link to the same page in the query,next - link to the next page of results,previous - link to the previous page of results,first - link to the first page of the query results,last - link to the last page of the query results |
| href                  | The specific link for each one of the above values                       | string                                                           | The values: self, first, and last will always be returned whereas the others will be returned if there is more than 1 page in the response                                                                                                                   |

#### Response Example

```json
  {
  "timeframe": {
    "startTime": "2022-05-13T00:00:00+03:00",
    "endTime": "2022-05-13T02:00:00+03:00",
    "startTimeL": 1652389200000,
    "endTimeL": 1652396400000
  },
  "segments": [
    {
      "segmentId": "111111:1224046030:f468270d-1230-4bac-9a83-aa206c1004bb:Skq5195qSmesd4ZBANzBaA",
      "startTimeL": 1652371219517,
      "endTimeL": 1652391099022,
      "conversationId": "fdcc34c7-50f6-4e08-2867-c4713953edd2",
      "agentId": 123456,
      "employeeId": "abcd123",
      "skillId": 146473456,
      "groupId": 23567815,
      "endReason": "backToQueue",
      "totalHandleTimeMillis": 7248915,
      "endTime": "2022-05-12T21:31:39.022Z",
      "startTime": "2022-05-12T16:00:19.517Z"
    },
    {
      "segmentId": "11111:2549453330:3c54b06d-38a4-4bc5-ac94-2845f32a4ce4:6ybyfqo5TqCgXp8NLDYHCQ",
      "startTimeL": 1652372832522,
      "endTimeL": 1652393622225,
      "conversationId": "112xe465-frfd-4da2-b2a1-9ad35f79e193",
      "agentId": 987654,
      "employeeId": "gfbr124",
      "skillId": 146473456,
      "groupId": 23567815,
      "endReason": "backToQueue",
      "totalHandleTimeMillis": 8821365,
      "endTime": "2022-05-12T22:13:42.225Z",
      "startTime": "2022-05-12T16:27:12.522Z"
    }
  ],
  "pagination": {
    "count": 10569,
    "references": [
      {
        "rel": "self",
        "href": "http://[domain].liveperson.net/api/account/11111/agent-segments?from=2022-05-13T00:00+03:00&to=2022-05-13T02:00+03:00&offset=0&limit=2&source=postman&sortType=DATE"
      },
      {
        "rel": "next",
        "href": "http://[domain].liveperson.net/api/account/11111/agent-segments?from=2022-05-13T00:00+03:00&to=2022-05-13T02:00+03:00&offset=2&limit=2&source=postman&sortType=DATE"
      },
      {
        "rel": "last",
        "href": "http://[domain].liveperson.net/api/account/11111/agent-segments?from=2022-05-13T00:00+03:00&to=2022-05-13T02:00+03:00&offset=10568&limit=1&source=postman&sortType=DATE"
      },
      {
        "rel": "first",
        "href": "http://[domain].liveperson.net/api/account/11111/agent-segments?from=2022-05-13T00:00+03:00&to=2022-05-13T02:00+03:00&offset=0&limit=2&source=postman&sortType=DATE"
      }
    ]
  }
}

```

### Error Codes

See [Error Codes](actual-handle-time-api-error-codes.html)
