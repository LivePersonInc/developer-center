---
pagename: Get Agent Segments
sitesection: Documents
categoryname: Reporting
documentname: Actual Handle Time API
subfoldername: Methods
permalink: actual-handle-time-api-methods-get-agent-segments.html
indicator: both
---

This method provides raw data about agent states changes.

{: .important}
If you have not done so yet, see the [overview](actual-handle-time-api-overview.html) of this product.

### Request

| Method | URL |
| --- | --- |
| GET | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountID}/agent-segments?source={source} |

#### Request Query Parameters

| Name                | Description                                                         | Type                                                              | Required? | Default             | Notes                                                                                                                                      |
|---------------------|---------------------------------------------------------------------|-------------------------------------------------------------------|-----------|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| source              | This describes the originator of the call                           | string                                                            | Required  |                     | Source name should not exceed 20 characters                                                                                                |
| limit               | The maximum amount of agent segments that can be retrieved          | Numeric                                                           | Optional  | 100                 | Max value: 500                                                                                                                             |
| offset              | The offset specifies from which records to retrieve the data        | Numeric                                                           | Optional  | 0                   |                                                                                                                                            |
| sort                | The order of the results                                            | string                                                            | Optional  | Segment date (desc) | Valid values : {::nomarkdown}<ul> <li>Date</li> <li>Conversation</li><li>Agent</li><li>Employee</li><li>Skill</li><li>Group</li> </ul>{:/} |
| timeframe (from,to) | The timeframe for pulling records (based on the segment’s end date) | [[RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string | Optional  | 1 day               | The maximum time frame interval is 1 week                                                                                                  |
| Conversation Id     | Retrieves only segments for the specific conv id                    | Alphanumeric                                                      | Optional  | 50                  |                                                                                                                                            |
| Agent Id            | Retrieves only segments for the specific Agent id                   | Alphanumeric                                                      | Optional  |                     |                                                                                                                                            |
| Employee Id         | Retrieves only segments for the specific employee id                | Alphanumeric                                                      | Optional  | 0                   |                                                                                                                                            |
| Skill Id            | Retrieves only segments for the specific skill id                   | Alphanumeric                                                      | Optional  |                     |                                                                                                                                            |
| Group Id            | Retrieves only segments for the specific group id                   | Alphanumeric                                                      | Optional  |                     |                                                                                                                                            |

### Response

| Property Name         | Description                                   | Type                                                             | Notes                                                                                                                                |
|-----------------------|-----------------------------------------------|------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| timeframe             | The requested time frame                      | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string | Should be the time from the request                                                                                                  |
| segments              | Contains all segments information             | Container                                                        |                                                                                                                                      |
| segmentId             | Segment Id                                    | Alphanumeric                                                     |                                                                                                                                      |
| segmentStartTime      | Segment start time                            | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string |                                                                                                                                      |
| segmentEndTime        | Segment end time                              | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string |                                                                                                                                      |
| conversationId        | Conversation id                               | Alphanumeric                                                     |                                                                                                                                      |
| agentId               | Agent unique identifier                       | Alphanumeric                                                     |                                                                                                                                      |
| employeeId            | Brand Employee Id                             | Alphanumeric                                                     | Value should be in the system                                                                                                        |
| skillId               | Skill Id                                      | Alphanumeric                                                     |                                                                                                                                      |
| groupId               | Agent group Id                                | Alphanumeric                                                     |                                                                                                                                      |
| agentsegmentEndReason | The end reason for the segment                | string                                                           | Valid values: </br> other, </br> agentTransfer, <br>skillTransfer, </br>backToQueue, closedByAgent, closedByConsumer, closedBySystem |
| totalHandleTime       | The total time of the segment in milliseconds | Numeric                                                          |                                                                                                                                      |
| segmentDeatils        | Description of the events in the segment      | Container                                                        |                                                                                                                                      |
| eventSequence         | Event sequence number                         | string                                                           |                                                                                                                                      |
| eventStartReason      | Event measurement trigger                     |                                                                  |                                                                                                                                      |
| EventEndReason        | Event end measurement trigger                 |                                                                  |                                                                                                                                      |
| eventStartTime        | Event start timestamp                         | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string |                                                                                                                                      |
| eventEndTime          | Event end timestamp                           | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string |                                                                                                                                      |
| eventHandleTime       | Toal time in milliseconds from start to end   | Numeric                                                          |                                                                                                                                      |

#### Response Example

```json
{
  "timeFrame": {
    "startTime": 131346546,
    "endTime": 132165465
  },

  "segments": [{
    "segmentId": 1234,
    "segmentStartTime": 1000,
    "segmentEndTime": 2300,
    "conversationId": 12345,
    "agentid": 324234,
    "empId": 34534,
    "skillId": 4535,
    "groupId": 435345,
    "agentsegmentEndReason": "transfer",
    "totalHandleTime": 300,
    "HandleTimeUnits": [{

      "Sequence": 1,
      "StartReason": "conversationEntered",
      "EndReason": "conversationClosed",
      "StartTime": 1000,
      "EndTime": 1100,
      "HandleTime": 100
    },
      {

        "eventSequence": 2,
        "StartReason": "agentReponse",
        "EndReason": "conversationClosed",
        "StartTime": 2000,
        "EndTime": 2200,
        "HandleTime": 200
      }

    ]
  },
    {
      "segmentId": 2222,
      "segmentStartTime": 1000,
      "segmentEndTime": 2400,
      "conversationId": 67890,
      "agentid": 324234,
      "empId": 34534,
      "skillId": 4535,
      "groupId": 435345,
      "agentsegmentEndReason": "transfer",
      "totalHandleTime": 300,
      "HandleTimeUnits": [{

        "Sequence": 1,
        "StartReason": "conversationEntered",
        "EndReason": "",
        "tartTime": 1000,
        "EndTime": 1100,
        "HandleTime": 100
      },
        {

          "Sequence": 2,
          "StartReason": "agentReponse",
          "EndReason": "conversationClosed",
          "StartTime": 2000,
          "EndTime": 2200,
          "HandleTime": 200
        }

      ]
    }
  ]
}
```

### Error Codes

See [Error Codes](actual-handle-time-api-error-codes.html.html)
