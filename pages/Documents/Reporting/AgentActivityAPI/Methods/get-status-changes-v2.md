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
| limit | This limits the number of state changes | number | Optional | 1,000 | Maximum value: 5,000 |
| offset | This allows to get more results in case you have more state changes than `limit` | number | Optional | 0 |  |

### Response

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
            "agentId": #,
            "employeeId": "1234567",
            "agentLoginName": "testuser",
            "agentUserName": "test user",
            "agentGroupId": 118643451,
            "time": "2021-08-25T00:17:59.747Z",
            "sessionId": 95354544,
            "sequenceNumber": 1,
            "statusType": 1,
            "statusSubType": 4,
            "statusReasonId": 1,
            "statusReasonText": "Training",
            "prevStatusChangeTime": "2021-08-25T00:15:59.747Z",
        },
        ...
    ]
}
```

### Error Codes

See [Error Codes](agent-activity-api-error-codes.html)
