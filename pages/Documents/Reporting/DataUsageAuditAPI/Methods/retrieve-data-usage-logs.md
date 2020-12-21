---
pagename: Retrieve Data Usage Logs
sitesection: Documents
categoryname: "Reporting"
documentname: Data Usage Audit API
subfoldername: Methods
order: 20
permalink: data-usage-audit-api-methods-retrieve-data-usage-logs.html

indicator: both
---

All auditing logs are returned in a JSON format, aggregated per account, API type, user id (which accessed the API) and hour.

### Request

| Method | URL |
| :------- | :------ |
| GET | https://[{domain}](/agent-domain-domain-api.html)/lp-auditlogapi/{accountID}?from=<from time>&to=<to_time>&agentId=<agent id or appkey>&api=<API> |
|Example URL | https://va-a.auditlog.liveperson.net/lp-auditlogapi/79316966?from=1560236532288&to=1560411234877&agentId=all&api=msg_search

**URL Parameters**

| Name      |  Description | Type / Value | Required |
| :-----    | :--------------- | :-------------- | :--- |
| from | The starting time (in epoch time) from which the data will be filtered.| numeric | required |
| to | The end time (in epoch time) until which the data will be filtered. Max time range supported is one month | numeric | required |
| agentId | If the data was accessed from Conversational Cloud's UI, this is the agentId of the user who did so. In case the data wa accessed using a historical data API, this is the AppKey used <br> Example: agentId=4153. To retrieve all user 4153 audit logs, use agentId=all for all. | numeric | required |
| api | History API type. Use msg_search for messaging transcripts expose, chat_search for chat transcripts expose  and chat_export for chat export requests<br> Example: api=msg_search<br> | string | required |

### Response

**JSON Example**

```json
{
  "recordslist": [
      {
        "accountId": "79316966",
        "apiConsumerid": "3447834010",
        "apiType": "MSG_SEARCH",
        "time": "1560236400000",
        "interactions": [
            "4ea1b927-4cdc-4b64-b811-dcc35baf9e7a",
            "5ae24644-af69-43db-b58c-4938c111edfe",
            "83005425-fa45-45c7-b627-bb1de818c57c"
        ]
      }
  ]
}
```


**Elements in the Response**


| Name |  Description | Type / Value |
| :------ | :------------- | :------------- |
| accountId | API user account id<br>|string|
| apiConsumerid | Agent id  or AppKey of History API consumer<br>|string|
| apiType | API type<br>|string|
| time | Start time of data accessed in an hourly time interval<br> For example:  1560236400000  means the data was accessed within an interval between Tuesday, June 11, 2019 7:00:00 AM and Tuesday, June 11, 2019 7:59:59 AM| string |
| interactions | List of interaction ids that were exposed to the API consumer<br> | Array`<String>` |
