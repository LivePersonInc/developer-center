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

{: .important}
If you have not done so yet, see the [overview](agent-activity-api-overview.html) of this product.

### Request

| Method | URL |
| --- | --- |
| GET | https://[{domain}](/agent-domain-domain-api.html)/api/v2/account/{accountID}/status-changes?source={source} |

#### Request Query Parameters

| Name | Description | Type | Required? | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| source | This describes the originator of the call | string | Required | | |
| from | This filters the results to status changes occurred within the timeframe between `from` and `to` | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string | Optional | 24 hours prior to request time |{::nomarkdown}<ul> <li>If provided, `to` must also be provided</li> <li>Minimum value: 13 months prior to request time</li> <li>Maximum timeframe between `from` and `to`: 1 month</li> </ul> {:/}|
| to | This filters the results to status changes occurred within the timeframe between `from` and `to`  | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string | Optional | request time |{::nomarkdown}<ul> <li>If provided, `from` must also be provided</li> <li>Maximum timeframe between `from` and `to`: 1 month</li> </ul>{:/}|
| agentId | This filters the results to status changes of the agent with the specified LivePerson ID | number | Optional | |{::nomarkdown}<ul> <li>If provided, `empId` must not be provided</li> <li>If neither `agentId` nor `empId` are provided, all agents will be returned</li> </ul>{:/}|
| empId | This filters the results to status changes of the employee with the specified employee ID | string | Optional | |{::nomarkdown}<ul> <li>If provided, `agentId` must not be provided</li> <li>If neither `agentId` nor `empId` are provided, all agents will be returned</li> </ul>{:/}|
| limit | This limits the number of agents, for which status changes will be included in the results | number | Optional | 50 | Maximum value: 100 |
| offset | This allows to get more results in case you have more agents than `limit` | number | Optional | 0 |  |

### Response

{: .notice}
Each page in the API response is limited to 20 state changes * limit parameter * query days.
(With v2 - all state changes are returned in a flat response, not grouped by agent. Limit and offset parameters refer to records.)
For example, if the limit is set to 10 (agents), 1 day query then limitation per page = 200 state changes.<br/> In case of an excessive state changes, some of the states/agents may be truncated based on the maximum states limitation.<br/>This will be updated on v2 where all states will be returned in a flat response (not grouped by agent).


| Property Name | Description | Type | Notes |
| --- | --- | --- | --- |
| timeframe | | object | |
| startTime | The start of the requested time frame | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string | |
| endTime | The end of the requested time frame | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string | |
| agentsInfo | | array | |
| agentId | Agent's LivePerson ID | number | |
| employeeId | Agent's employee ID | string | |
| agentLoginName | | string | |
| agentUserName | | string | |
| agentGroupId | The ID of the group the agent is assigned to | number | |
| statusChangeHistory |  | array | |
| time | Time of this status change | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string | |
| sessionId | Identifier of the session during which this status change took place | number | |
| sequenceNumber | Sequential number of this status change within the session | number | |
| statusType | Type of status change | number |{::nomarkdown}<ul> <li>1 - status changed, see `statusSubType`</li> <li>3 - login</li> <li>4 - logout</li> </ul>{:/}|
| statusSubType | Subtype of status change with `statusType`=1 | number |{::nomarkdown}<ul> <li>1 - offline</li> <li>2 - online</li> <li>3 - occupied</li> <li>4 - away</li> </ul>{:/}|
| statusReasonId | Identifier of optional custom reason for the status change | number | -1 if no custom reason was provided by the agent |
| statusReasonText | Optional custom reason for the status change | string | null if no custom reason was provided by the agent |
| prevStatusChangeTime | Time of this agent’s previous status change | [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string | null if value is missing |

#### Response Example

```json
{
    "timeframe": {
        "startTime": "2021-08-25T15:00:00Z",
        "endTime": "2021-08-25T23:59:00Z"
    },
  "stateChanges": [
        {
          "agentId": 123,
          "employeeId": "",
          "agentLoginName": "",
          "agentUserName": "",
          "agentGroupId": -1,
          "time": "2022-03-15T15:07:03.981Z",
          "sessionId": 123,
          "sequenceNumber": 2,
          "statusType": 1,
          "statusSubType": 1,
          "statusReasonId": 0,
          "statusReasonText": "",
          "prevStatusChangeTime": "2022-03-15T11:59:10.898Z"
        },
        {
          "agentId": 123,
          "employeeId": "",
          "agentLoginName": "",
          "agentUserName": "",
          "agentGroupId": -1,
          "time": "2022-03-15T15:07:03.981Z",
          "sessionId": 123,
          "sequenceNumber": 3,
          "statusType": 4,
          "statusSubType": 0,
          "statusReasonId": 0,
          "statusReasonText": "",
          "prevStatusChangeTime": null
        },
        ...
    ]
}
```

### Error Codes

See [Error Codes](agent-activity-api-error-codes.html)
