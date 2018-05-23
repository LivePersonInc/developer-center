---
title: Appendix
Keywords:
level1: Documents
level2: Account Configuration
level3: Special Occasions API
order: 60
permalink: account-configuration-special-occasions-appendix.html
indicator: messaging
---

This section contains API details that are common to every API’s resource, method and action.

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
    <td>Array</td>
    <td>This array receives two possible fields: <ul><li>dateTime</li><li>timezone</li></ul>. <br><br>Valid formats are either without hours (yyyy-MM-dd) or with hours (yyyy-MM-dd'T'HH:mm:ss). If no hour specific, 24/7 is assumed. The timezone field for both the start and end array must match. Only LiveEngage supported timezones may be used.</td>
  </tr>
  <tr>
    <td>end</td>
    <td>A set of attributes defining the end time and date of the object</td>
    <td>Yes</td>
    <td>Array</td>
    <td>This array receives two possible fields: <ul><li>dateTime</li><li>timezone</li></ul>. <br><br>Valid formats are either without hours (yyyy-MM-dd) or with hours (yyyy-MM-dd'T'HH:mm:ss). If no hour specific, 24/7 is assumed. The timezone field for both the start and end array must match. Only LiveEngage supported timezones may be used.</td>
  </tr>
  <tr>
    <td>recurrence</td>
    <td>This is mandatory for the workdays object but does not currently affect LiveEngage behavior. A special occasion object will have an empty field, since it does not reoccur.</td>
    <td>Yes</td>
    <td>Array</td>
    <td>The pattern for this field is: "^(RRULE:FREQ=WEEKLY;BYDAY=)(SU|MO|TU|WE|TH|FR|SA)$"</td>
  </tr>
  <tr>
    <td>meta</td>
    <td>Contains meta data important for the special occasions object</td>
    <td>Yes</td>
    <td>Aray</td>
    <td>Do not include this array in a workdays object</td>
  </tr>
  <tr>
   <td>meta/working</td>
    <td>Indicated if we actually work in this event</td>
    <td>Yes</td>
    <td>Boolean</td>
    <td></td>
    </tr>
    <tr>
    <td>meta/name</td>
    <td>The name of the event</td>
    <td>Yes</td>
    <td>String</td>    
    <td></td>
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
