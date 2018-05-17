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
Attribute | Description | Notes
--- | --- | --- 
name | workday name | <ul><li>Type: string</li> <li>Required</li><li>Unique</li><li>max length: 50</li></ul>
description | workday description | <ul><li>Type: string</li><li>max length: 200</li><li>Required</li></ul>
deleted | Whether the item is deleted or not  | <ul><li>Type: boolean</li></ul>
is default | Whether the entity is set as default entity | <ul><li>Type: boolean</li><li> required</li></ul>
events | a list of events defining the working day| <ul><li>Type: Array</li><li>required</li></ul>
start/end date |<ul><li> define the date for event to start/end. </li><li>Both start and end dates must be with the same format. </li><li>Valid formats are either without hours (yyyy-MM-dd) or with hours (yyyy-MM-dd'T'HH:mm:ss)</li></li> | <ul><li>Type: string</li><li>format: full date</li></ul>
start/end timezone | defines the timezone for start/end date. Start/End date must be both on the same timezone. | <ul><li>Type: string</li><li>possible values: within list of known timezones</li><li>required</li></ul>
recurrence | <ul><li>define a list of recurrences for each workday. </li><li>workdays must contain a single recurrence. </li><li>Special occasion will have an empty list. </li></ul> | <ul><li>Type: array</li> <li>pattern: "^(RRULE:FREQ=WEEKLY;BYDAY=)(SU|MO|TU|WE|TH|FR|SA)$"</li></ul>
meta | <ul><li>contains meta data (???).</li> <li>mandatory for special occasions. </li><li>workdays should not contain this node</li></ul> | <ul><li>Type: array</li> </ul>



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
