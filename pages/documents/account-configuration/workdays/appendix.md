---
title: Appendix
Keywords:
level1: Documents
level2: Account Configuration
level3: workdays API

order: 101
permalink: 

indicator: both
---

This section contains API details that are common to every API’s resource and action.

### Request Headers

 |Header | Description | Notes| 
 |:------- | :-------------- | :--- |
 |Authorization | Contains token string to allow request authentication and authorization.  |
| If-Match | Contains data revision, as known by the client. | Allows optimization of backend, networking and client resource utilization. |

### Response Headers

 |Header | Description | Notes| 
 |:-------  | :----- | :--- |
 |ac-revision | Account config object type collection revision. 
 
### Query Parameters

| Name            | Description                                               | Type                                           | Required | Notes                                                                                                                                         |                                                                                                |                                                                  |                                                                |
|-----------------|-----------------------------------------------------------|------------------------------------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|
| v               | API version                                               | Double                                         | Required | Validation fail error code: 400                                                                                                               |                                                                                                |                                                                  |                                                                |
| select          | Dynamic selection of the response fields.                 | YOGA 'gdata' dialect.                          | Optional | Validation error: 400 Non-existing field: no error, blank in response. Supported fields: any in response body                                 |                                                                                                |                                                                  |                                                                |
| 

**Path Parameters**

 |Parameter | Description|  Type  |Notes |
 |:----------|  :-------------- | :-------------- | :--- |
 |accountId|  LP site ID | string ^[a-zA-Z0-9_]{1,20}$ | Validation fail error code: 400 
 
### Entity Structure

| Attribute          | Description                                                      | Type                   | Required | Notes                                                                                                                                       |
|--------------------|------------------------------------------------------------------|------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------|
| name                 | workday name                           | String            | Required |    unique, max length: 50  |
| description       | workday description                    | String                | Required |  max length: 200 |
| deleted            | Whether the item is deleted or not | Boolean                | optional | |
| is default  | Whether the entity is set as default entity               | boolean                 | Required |  |
| events             | a list of events defining the working day                        | array                 | required ||
| start/end date      | define the date for event to start/end.
Both start and end dates must be with the same format.
Valid formats are either without hours (yyyy-MM-dd) or with hours (yyyy-MM-dd'T'HH:mm:ss)                              | string                 | Required |   format: full date|
| start/end timezone   | defines the timezone for start/end date. Start/End date must be both on the same timezone. | String             | required |  |
| recurrence         | define a list of recurrences for each workday.
workdays must contain a single recurrence.
Special occasion will have an empty list.  | Array                 | required |   pattern: "^(RRULE:FREQ=WEEKLY;BYDAY=)(SU|MO|TU|WE|TH|FR|SA)$"           |
| meta              | contains meta data (???).
mandatory for special occasions.
workdays should not contain this node                          | Array                 | Required |                                                                                                                                 

### Workday object description
```javascript
     {
  "name": "Workdays 1",
  "description": "Description for workdays 1",
  "deleted": false,
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
    }
  ]
}
```

### Special occasion object description
```javascript
{
    "deleted": false,
    "name": "special occasion 1",
    "description": "Description for workdays 1",
    "isDefault": false,
    "events": [
        {
            "meta": {
                "working": true,
                "name": "user1"
            },
            "start": {
                "dateTime": "2017-03-27T06:00:00",
                "timeZone": "Europe/Zurich"
            },
            "end": {
                "dateTime": "2018-03-27T13:00:00",
                "timeZone": "Europe/Zurich"
            },
            "recurrence": []
        }
    ]
}
```
