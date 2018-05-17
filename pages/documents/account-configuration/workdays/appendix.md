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
| name                 | workday name                           | String            | Required |    unique, max length: 50                                                                                                                                          |
| description       | Indicates whether or not the item is deleted.                    | Boolean                | Required |                                                                                                                                             |
| deleted            | Whether the item is active or not                                | Boolean                | Required |                                                                                                                                             |
| is default  | The type of Predefined Content (text, video, etc.)               | number                 | Required | Valid values: 0 (text)                                                                                                                      |
| events             | Hotkey value combination for this object.                        | object                 | Optional |                                                                                                                                             |
| start/end date      | First key of the hotkey combination                              | string                 | Required |                                                                                                                                             |
| start/end timezone   | Flag to state whether the value of the msg attribute is default. | True/False             | Optional | If a templateId exists, all message entries that were not overridden will have the isDefault flag set to true. Otherwise the flag is false. |
| recurrence         | An identification of a template used to instantiate the object.  | string                 | Optional |                                                                                                                                             |
| meta              | Predefined Content title translation.                            | string                 | Required |                                                                                                                                 

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
