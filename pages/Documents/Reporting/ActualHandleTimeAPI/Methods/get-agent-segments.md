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

{: .important}
If you have not done so yet, see the [overview](actual-handle-time-api-overview.html) of this product.

### Request

| Method | URL |
| --- | --- |
| GET | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountID}/agent-segments?source={source} |

#### Request Query Parameters

| Name                | Description                                                                                             | Type                                                              | Required? | Default             | Notes                                                                                                                                      |
|---------------------|---------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|-----------|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| source              | Used to describe the originator of the call. The source name should be unique for every project/process | string                                                            | Required  |                     | Source name should not exceed 20 characters                                                                                                |
| limit               | The maximum amount of agent segments that can be retrieved                                              | long                                                              | Optional  | 100                 | Max value: 500                                                                                                                             |
| offset              | The offset specifies from which records to retrieve the data                                            | long                                                              | Optional  | 0                   |                                                                                                                                            |
| sort                | The order of the results                                                                                | string                                                            | Optional  | Segment date (desc) | Valid values : {::nomarkdown}<ul> <li>Date</li> <li>Conversation</li><li>Agent</li><li>Employee</li><li>Skill</li><li>Group</li> </ul>{:/} |
| timeframe (from,to) | The timeframe for pulling records (based on the segment’s end date)                                     | [[RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string | Optional  | 1 day               | The maximum time frame interval is 1 week                                                                                                  |
| Conversation Id     | Retrieves only segments for the specific conv id                                                        | string                                                            | Optional  | 50                  |                                                                                                                                            |
| Agent Id            | Retrieves only segments for the specific Agent id                                                       | string                                                            | Optional  |                     |                                                                                                                                            |
| Employee Id         | Retrieves only segments for the specific employee id                                                    | string                                                            | Optional  | 0                   |                                                                                                                                            |
| Skill Id            | Retrieves only segments for the specific skill id                                                       | string                                                            | Optional  |                     |                                                                                                                                            |
| Group Id            | Retrieves only segments for the specific group id                                                       | string                                                            | Optional  |                     |                                                                                                                                            |

### Response

| Property Name         | Description                           | Type                                                             | Notes                                                       |
|-----------------------|---------------------------------------|------------------------------------------------------------------|-------------------------------------------------------------|
| timeframe             |                                       | object                                                           |                                                             |
| startTime             | The start of the requested time frame | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string |                                                             |
| startTimeL            | Same as above in epoch time           | long - Epoch time                                                |                                                             |
| endTime               | The end of the requested time frame   | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string |                                                             |
| endTimeL              | Same as above in epoch time           | long - Epoch time                                                |                                                             |
| segment               |                                       | container                                                        |                                                             |
| segmentId             | Segment’s unique identifier           | string                                                           |                                                             |
| startTime             | The start of the segment              | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string |                                                             |
| startTimeL            | Same as above in epoch time           | long - Epoch time                                                |                                                             |
| endTime               | The end of the segment                | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string |                                                             |
| endTimeL              | Same as above in epoch time           | long - Epoch time                                                |                                                             |
| conversationId        | Conversation's unique identifier      | string                                                           |                                                             |
| agentId               | Agent’s unique identifier             | long                                                             |                                                             |
| employeeId            | Employee’s unique identifier          | string                                                           | This is the brand id and should be configured in the system |
| skillId               | Skill’s unique identifier             | long                                                             |                                                             |
| groupId               | Agent group unique identifier         | long                                                             |                                                             |
| EndReason             | Segment’s close reason                | string                                                           |                                                             |
| totalHandleTimeMillis | Total handle time of the segment      | long                                                             |                                                             |

#### Response Example

```json
  { "timeframe": {
        "startTime": "2021-11-21T12:09:40.84Z",
        "startTimeL": 1637453376,
        "endTime": "2021-11-22T12:09:40.84Z",
        "endTimeL": 1637539776
      },
    "segments": [
        {
        "segmentId": "111111:1224046030:f468270d-1230-4bac-9a83-aa206c1004bb:Skq5195qSmesd4ZBANzBaA",
        "startTime": "2021-11-20T18:45:49.082Z", 
        "startTimeL": 1637453376, 
        "endTime": "2021-11-21T12:32:01.326Z", 
        "endTimeL": 1637539776,
        "conversationId": "f468223d-1680-4bac-9a83-aa206c1004bb",
        "agentId": 1974446030,
        "employeeId": "720395",
        "skillId": 24837230,
        "groupId": 1622030,
        "endReason": "closedBySystem",
        "totalHandleTimeMillis": 62708047
        },
        {
        "segmentId": "11111:2549453330:3c54b06d-38a4-4bc5-ac94-2845f32a4ce4:6ybyfqo5TqCgXp8NLDYHCQ",
        "startTime": "2021-11-21T08:24:28.836Z", 
        "startTimeL": 1637453376, 
        "endTime": "2021-11-21T13:52:41.902Z",
        "endTimeL": 1637539776,
        "conversationId": "3c54236d-38a4-4bc5-ac94-2845f32a4ce4",
        "agentId": 25423330,
        "employeeId": "824968",
        "skillId": 1463714,
        "groupId": 162130,
        "endReason": "backToQueue",
        "totalHandleTimeMillis": 7563862
        }
      ]
}

```

### Error Codes

See [Error Codes](actual-handle-time-api-error-codes.html.html)
