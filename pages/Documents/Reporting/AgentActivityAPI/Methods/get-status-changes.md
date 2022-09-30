---
pagename: Get Status Changes
sitesection: Documents
categoryname: Reporting
documentname: Agent Activity API
subfoldername: Methods
permalink: agent-activity-api-methods-get-status-changes.html
indicator: both
---

This method provides raw data about agent states changes.

{: .attn-note}
If you have not done so yet, see the [overview](agent-activity-api-overview.html) of this product.

### Request

{: .attn-alert}
**v1**: Each page in the API response is limited to 20 state changes * limit parameter * query days. For example, if the limit is set to 10 (agents), 1-day query then limitation per page = 200 state changes. In case of excessive state changes, some of the states/agents may be truncated based on the maximum state's limitation. <br>**v2**: All states are returned in a flat response (not grouped by agent).

Note that this affects the limit and offset parameters (in v1 they refer to an agent while in v2 to records).

| Method | URL |
| --- | --- |
| GET | https://[{domain}](/agent-domain-domain-api.html)/api/v2/account/{accountID}/status-changes?source={source} |

#### Request Query Parameters

| Name | Description | Type | Required? | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| v | Version of the API (1 or 2) | String | No | The default is v1 |  **v1**: returns the records grouped by an agent with a limitation of the number of records in every page (see the note above). <br> **v2**: Returns the records in a flat structure and not grouped by an agent. No limitation on the number of records in every page |
| source | This describes the originator of the call | String | Required | | |
| from | This filters the results to status changes occurred within the timeframe between `from` and `to` | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string | Optional | 24 hours prior to request time |{::nomarkdown}<ul> <li>If provided, `to` must also be provided</li> <li>Minimum value: 6 months prior to request time</li> {:/}|
| to | This filters the results to status changes occurred within the timeframe between `from` and `to`  | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string | Optional | request time |{::nomarkdown}<ul> <li>If provided, `from` must also be provided</li> <li>Maximum timeframe between `from` and `to`: 1 month</li> </ul>{:/}|
| agentId | This filters the results to status changes of the agent with the specified LivePerson ID | number | Optional | |{::nomarkdown}<ul> <li>If provided, `empId` must not be provided</li> <li>If neither `agentId` nor `empId` are provided, all agents will be returned</li> </ul>{:/}|
| empId | This filters the results to status changes of the employee with the specified employee ID | string | Optional | |{::nomarkdown}<ul> <li>If provided, `agentId` must not be provided</li> <li>If neither `agentId` nor `empId` are provided, all agents will be returned</li> </ul>{:/}|
| limit | This limits the number of agents, for which status changes will be included in the results | number | Optional | 50 | **v1**: limit the number of agents <br> **v2**: limit the number of state changes records |
| offset | This allows to get more results in case you have more agents than `limit` | number | Optional | 0 | **v1**: refer to the number of agents <br> **v2**: refer to the number of state changes records |

### Response

| Property Name | Description | Type | Notes |
| --- | --- | --- | --- |
| timeframe | | object | |
| startTime | The start of the requested time frame | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string | |
| startTimeL | Query start date (same as above) in Epoch time format | long — Epoch time in milliseconds | |
| endTime | The end of the requested time frame | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string | |
| endTimeL | Query end date (same as above) in Epoch time format | long — Epoch time in milliseconds | |
| agentsInfo | | array | |
| agentId | Agent's LivePerson ID | number | |
| employeeId | Agent's employee ID | string | |
| agentLoginName | | string | |
| agentUserName | | string | |
| agentGroupId | The ID of the group the agent is assigned to | number | |
| statusChangeHistory |  | array | |
| time | Time of this status change | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string | |
| sessionId | Agent unique session | number | sessionId is currently missing from the first 2 events. To link these 2 events to a session, you will need to look for the following event, based on its timestamp and where is sequence =2 |
| sequenceNumber | Sequential number of this status change within the session | number | Login event will always have a sequnceNumber = -1. <br> The system default state after login will always have a sequenceNumber = 1. |
| statusType | Type of status change | number |{::nomarkdown}<ul> <li>1 — status changed, see `statusSubType`</li> <li>3 — login</li> <li>4 — logout</li> </ul>{:/}|
| statusSubType | Subtype of status change with `statusType`=1 | number |{::nomarkdown}<ul> <li>1 — offline</li> <li>2 — online</li> <li>3 — occupied</li> <li>4 — away</li> </ul>{:/}|
| statusReasonId | Identifier of optional custom reason for the status change | number | -1 if no custom reason was provided by the agent |
| statusReasonText | Optional custom reason for the status change | string | null if no custom reason was provided by the agent |
| prevStatusChangeTime | Time of this agent’s previous status change | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string | Currently missing from the logout event and from the default status that is set after login |
| metadata | Response-related metadata | Object |  |
| references | An array of links to the pages in the response | Array |  |
| rel | Pagination: The name of the link. This is based on the “offset” and “limit” elements | string | Possible values: <br> self — the link to the same page in the query <br> next — link to the next page of results <br> previous — link to the previous page of results <br>first — link to the first page of the query results <br>last — link to the last page of the query results |
| href | Pagination: The specific link for each one of the above values | string | The values: self and first will always be returned whereas the others will be returned if there is more than 1 page in the response |

#### Response Example (V2)

```json
{
  "_metadata": {
    "references": [{
      "rel": "self",
      "href": "http://[doamin].agent-activity.liveperson.net/api/v2/account/[account]/status-changes?from=2022-02-24T00:00Z&to=2022-03-16T10:00Z&offset=0&limit=50&source=postman"
    },
      {
        "rel": "first",
        "href": "http://[doamin].agent-activity.liveperson.net/api/v2/account/[account]/status-changes?from=2022-02-24T00:00Z&to=2022-03-16T10:00Z&offset=0&limit=50&source=postman"
      }
    ]
  },
  "timeframe": {
    "startTime": "2022-02-24T00:00:00Z",
    "endTime": "2022-03-16T10:00:00Z",
    "startTimeL": "1645660800000",
    "endTimeL": "1647424800000"
  },
  "stateChanges": [
    {
      "agentId": 3252247132,
      "employeeId": "543acbc",
      "agentLoginName": "test@liveperson.com",
      "agentUserName": "nirle",
      "agentGroupId": 12345,
      "time": "2022-03-13T10:18:51.625Z",
      "sessionId": -1,
      "sequenceNumber": -1,
      "statusType": 3,
      "statusSubType": 0,
      "statusReasonId": 0,
      "statusReasonText": "",
      "prevStatusChangeTime": null
    },
    {
      "agentId": 3252247132,
      "employeeId": "543acbc",
      "agentLoginName": "test@liveperson.com",
      "agentUserName": "nirle",
      "agentGroupId": 12345,
      "time": "2022-03-13T10:18:51.625Z",
      "sessionId": -1,
      "sequenceNumber": 1,
      "statusType": 1,
      "statusSubType": 2,
      "statusReasonId": 0,
      "statusReasonText": "",
      "prevStatusChangeTime": null
    },
    {
      "agentId": 3252247132,
      "employeeId": "543acbc",
      "agentLoginName": "test@liveperson.com",
      "agentUserName": "nirle",
      "agentGroupId": 12345,
      "time": "2022-03-13T10:12:59.118Z",
      "sessionId": 30376039,
      "sequenceNumber": 2,
      "statusType": 1,
      "statusSubType": 1,
      "statusReasonId": 0,
      "statusReasonText": "",
      "prevStatusChangeTime": "2022-03-13T10:10:27.983Z"
    }

  ]
}
```

### Error Codes

See [Error Codes](agent-activity-api-error-codes.html)
