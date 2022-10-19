---
pagename: Appendix
redirect_from:
  - account-configuration-workdays-appendix.html
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Workdays API
permalink: workdays-api-appendix.html
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
 |accountId|  LP site ID | string | Validation fail error code: 400

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
    <td>Workday Object's name</td>
    <td>Yes</td>
    <td>String</td>
    <td>This must be a unique nameMax length: 50</td>
  </tr>
  <tr>
    <td>description</td>
    <td>Workday Object's description</td>
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
<ul><li>Valid formats are either without hours (yyyy-MM-dd) or with hours (yyyy-MM-dd'T'HH:mm:ss). If no hour specific, 24/7 is assumed.</li></ul>
<ul><li>Start date must be up to 7 days from today.</li></ul>
<ul><li>The start date must be at the same day defined in the recurrence value, e.g. if the start date is May 1st and the recurrence is Wednesday, then you must make sure that May 1st is actually a Wednesday as well.
If this is not followed, the reccurence day will be set according to the day of the start date (the reccurence value will be ignored), e.g. if you set the start date to May 1st which is a Wendesady but set the recurrence value to Thursday, Wednesday will be used instead.</li></ul>
<ul><li>The timezone field for both the start and end array must match.</li></ul>
<ul><li>Only Conversational Cloud supported timezones may be used.</li></ul>
</td>
  </tr>
  <tr>
    <td>end</td>
    <td>A set of attributes defining the end time and date of the object</td>
    <td>Yes</td>
    <td>Object</td>
    <td>
<ul><li>This array receives two possible fields: <br>-dateTime<br>-timezone</li></ul>
<ul><li>Valid formats are either without hours (yyyy-MM-dd) or with hours (yyyy-MM-dd'T'HH:mm:ss). If no hour is specified, 24/7 is assumed. </li></ul>
<ul><li>The maximum length of a workday must be 24 hours. You can define 24 hour shifts in one of the following ways: start: "2018-03-27" end: "2018-03-28", or: start: "2018-03-27T00:00" end: "2018-03-27T23:59" </li></ul>
<ul><li> The timezone field for both the start and end array must match. </li></ul>
<ul><li> Only Conversational Cloud supported timezones may be used. </li></ul>
    </td>
  </tr>
  <tr>
    <td>recurrence</td>
    <td>This is mandatory for the workdays object but only one value is supported. A special occasion object will have an empty field, since it does not reoccur.</td>
    <td>Yes</td>
    <td>Array</td>
    <td>The recurrence must comply with the following pattern: "^(RRULE:FREQ=WEEKLY;BYDAY=)(SU|MO|TU|WE|TH|FR|SA)$"</td>
  </tr>
</tbody>
</table>

### Workday object description

```json
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
