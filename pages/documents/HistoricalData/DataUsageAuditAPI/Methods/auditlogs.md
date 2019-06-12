---
pagename: Data Usage Audit API
redirect_from:
  - data-usage-audit-api-methods-auditlogs.html
sitesection: Documents
categoryname: "Historical Data"
documentname: Data Usage Audit API
subfoldername: Methods
order: 20
permalink: data-usage-audit-api-methods-auditlogs.html

indicator: auditlog
---

Retrieves data api usage audit logs aggregated per account, api type, user id and per hour.

### Request

| Method | URL |
| :------- | :------ |
| GET | `https://<domain>/auditlogs/{accountID}?from=<from time>&to=<to_time>&agentId=<agent id or appkey>&api=<API>` |

**URL Parameters**

| Name      |  Description | Type / Value | Required |
| :-----    | :--------------- | :-------------- | :--- |
| from | The from time (epoch time) low time limit in which the data can be filtered.| numeric | required |
| end| The end time (epoch time) high time limit in which the data can be filtered. Max time range supported is one month | numeric | required |
| agentId | agentId in a case of using History API from LE or AppKey in a case of external  History API usage<br> Example: agentId=4153. To retrieve all user 4153 audit logs, use agentId=all for all. | numeric | required |
| api | History API type. Use msg_search for messaging transcripts expose, chat_search for chat transcripts expose  and chat_export for chat export requests<br> Example: api=msg_search<br> | string | optional |

### Response

**JSON Example**

Request by skillIds=12,13 (no interval), timeframe=180

```json
    {
        "recordslist": [
            {
                "accountId": "le24257132",
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
| time | Low limit of hourly time interval<br> For example:  1560236400000  means time interval from Tuesday, June 11, 2019 7:00:00 AM  to Tuesday, June 11, 2019 7:59:59 AM| string |
| interactions | List of interaction ids that were exposed  by API consumer<br> | string array |
