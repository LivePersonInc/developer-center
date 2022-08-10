---
pagename: Appendix
redirect_from:
  - account-configuration-special-occasions-appendix.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Special Occasions API
permalink: special-occasions-api-appendix.html
indicator: messaging
---

This section contains API details that are common to every API’s resource, method and action.

### Request Headers

 |Header | Description | Notes|
 |:------- | :-------------- | :--- |
 |Authorization | Contains token string to allow request authentication and authorization.  |
| If-Match | This parameter allows you to specify a version of the data object to retrieve. If this parameter is not specified, the latest version of the data object is retrieved.. | Allows optimization of backend, networking and client resource utilization. |

### Response Headers

|Header | Description | Notes|
|:-------  | :----- | :--- |
|ac-revision | This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specifc version using this parameter's value..

### Query Parameters

| Name   | Description   | Type   | Required |Notes    |
|--------|---------------|--------|----------|---------|
| v   | API version        | Double  | Required | Validation fail error code: 400  |
| select  | Dynamic selection of the response fields. | YOGA 'gdata' dialect.  | Optional | Validation error: 400 Non-existing field: no error, blank in response. Supported fields: any in response body       |

**Path Parameters**

 |Parameter | Description|  Type  |Notes |
 |:----------|  :-------------- | :-------------- | :--- |
 |accountId|  LP site ID | string  | Validation fail error code: 400

### Entity Structure

<table>
<thead>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
    <th>Required</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>name</td>
    <td>Workday/special occasion Object's name</td>
    <td>Yes</td>
    <td>String</td>
    <td>This must be a unique nameMax length: 50</td>
  </tr>
  <tr>
    <td>description</td>
    <td>Workday/special occasion Object's description</td>
    <td>Yes</td>
    <td>String</td>
    <td>Max length: 200</td>
  </tr>
  <tr>
    <td>deleted</td>
    <td>whether the items is deleted or not</td>
    <td>No</td>
    <td>Boolean</td>
    <td></td>
  </tr>
  <tr>
    <td>isDefault</td>
    <td>Whether the object is set as the default object for the account</td>
    <td>Yes</td>
    <td>Boolean</td>
    <td></td>
  </tr>
  <tr>
    <td>events</td>
    <td>A list of events listing the object's attributes/options</td>
    <td>Yes</td>
    <td>Array</td>
    <td></td>
  </tr>
  <tr>
    <td>start</td>
    <td>A set of attributes defining the start time and date of the object</td>
    <td>Yes</td>
    <td>Object</td>
    <td>
<ul><li>This array receives two possible fields: <br>-dateTime<br>-timezone</li></ul>
<ul><li>Valid formats are either without hours (yyyy-MM-dd) or with hours (yyyy-MM-dd'T'HH:mm:ss). If no hour specified, 24/7 is assumed.</li></ul>
<ul><li>The timezone field for both the start and end array must match. Only Conversational Cloud supported timezones may be used.</li></ul>
</td>
  </tr>
  <tr>
    <td>end</td>
    <td>A set of attributes defining the end time and date of the object</td>
    <td>Yes</td>
    <td>Object</td>
    <td>
<ul><li>This array receives two possible fields: <br>-dateTime<br>-timezone</li></ul>
<ul><li>Valid formats are either without hours (yyyy-MM-dd) or with hours (yyyy-MM-dd'T'HH:mm:ss). If no hour specified, 24/7 is assumed.</li></ul>
<ul><li>The timezone field for both the start and end array must match. Only Conversational Cloud supported timezones may be used.</li></ul>
</td>
  </tr>
  <tr>
    <td>recurrence</td>
    <td>This is mandatory both for workdays and special occasion. Workdays must include single recurrence. Special occasion can include either a single recurrence or an empty list.</td>
    <td>Yes</td>
    <td>Array</td>
    <td>The recurrence must comply with the following pattern: "^RRULE:FREQ=DAILY;COUNT=[1-9][0-9]*;INTERVAL=1$"<br>
    In case meta.working is set to false, recurrence must be lower or equal to 30 </td>
  </tr>
  <tr>
    <td>meta</td>
    <td>Contains meta data important for the special occasions object</td>
    <td>Yes</td>
    <td>Object</td>
    <td>This array contains two fields:<ul><li>working. This field indicates whether agents are working during this event (and thus the special occasion is just a change of working hours) or whether agents aren't working (a day off). This field is boolean and required</li><li>name. The name of the special occasion's event. This field is a string and is required.</li></ul></td>
  </tr>
</tbody>
</table>

### Special Occasion Object Description

```json
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
                "timeZone": "Europe/Warsaq"
            },
            "end": {
                "dateTime": "2018-03-27T13:00:00",
                "timeZone": "Europe/Warsaw"
            },
            "recurrence": []
        }
    ]
}
```
