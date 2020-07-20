---
pagename: Retrieve Workdays Object by ID
redirect_from:
  - account-configuration-workdays-get-by-id.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Workdays API
subfoldername: Methods
permalink: workdays-api-methods-retrieve-workdays-object-by-id.html
indicator: messaging
---

Get a single workday object by ID.

### Request

| Method | URL |
| :-------- | :------ |
| GET  | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/ac-common/workinghours/{workdayId} |

**Path Parameters**

 |Parameter  |Description |  Type / Value |
 |:----------- | :------------ | :--------------- |
 |accountId | LP site ID | String  |
 |workdayId|workday object’s unique id.| String|


**Request Headers**

|Header | Description| Notes |
|:------- | :-------------- | :--- |
|Authorization | Contains token string to allow request authentication and authorization.|

## Response

**Response Codes**

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 304  | Not Modified          |
| 400  | Bad Request           |
| 401  | Not Authorized        |
| 403  | Forbidden             |
| 404  | Data Not Found        |
| 409  | Conflict              |
| 500  | Internal Server Error |

**Response Headers**

|Header|  Description|
|:-------|   :-----  |
|ac-revision|  This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specifc version using this parameter's value..|  

**Response example**

```json
{
    "id": 2852537612,
    "deleted": false,
    "name": "Workdays 11112",
    "description": "Description for workdays 1",
    "isDefault": false,
    "events": [
        {
            "start": {
                "dateTime": "2018-03-27T06:00:00",
                "timeZone": "Europe/Zurich"
            },
            "end": {
                "dateTime": "2018-03-27T13:00:00",
                "timeZone": "Europe/Zurich"
            },
            "recurrence": [
                "RRULE:FREQ=WEEKLY;BYDAY=SU"
            ]
        },
        {
            "start": {
                "dateTime": "2018-03-27T15:00:00",
                "timeZone": "Europe/Zurich"
            },
            "end": {
                "dateTime": "2018-03-27T18:00:00",
                "timeZone": "Europe/Zurich"
            },
            "recurrence": [
                "RRULE:FREQ=WEEKLY;BYDAY=SU"
            ]
        }
    ]
}
```

**Entity structure**

For details on the entity structure, please see the [appendix](workdays-api-appendix.html)
