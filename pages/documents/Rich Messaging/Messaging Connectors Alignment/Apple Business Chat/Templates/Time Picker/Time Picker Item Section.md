---
title: Time Picker Item
Keywords:
level1: Documents
level2: Rich Messaging
level3: Apple Business Chat Templates
level4: Time Picker
order: 120
permalink: rich-messaging-connectors-abc-timepicker-item.html
indicator: messaging
---

Part of the Time Picker LiveEngage Structured Content body JSON, enabling an agent to generate an array of timeslots for the consumer’s options.

The Time Picker item elements consists of a title element and a row of available timeslots per specific date to choose from.

They are based in the basic [Rich Message elements](rich-messaging-getting-started.html) with some limitations.

The following section describes those elements and their specific configuration fields.  

### Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | layout of the element. <br/>Must be “vertical” | string | Y |  |
| tag | Must be “datePicker” | String | Y |  |
| elements | List of time picker elements | Elements | Y |  |


### Time Picker Item Elements Configurations

The Time Picker Item elements are based on the basic [Rich Messaging elements](rich-messaging-getting-started.html) with some limitations.

The following section describes those elements and their specific configuration fields.

#### Text Element Fields

Based on [Rich Messaging Text](rich-messaging-basic-elements-text.html) element with the following restrictions:

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of the element. <br/>Must be “text” | string | Y |  |
| text | Must be “datePicker” | String | Y |  |

_* Text section should no use style element_


#### Timeslot Element Fields

Based on [Rich Messaging Button](rich-messaging-basic-elements-button.html) element with the following restrictions:

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of the element. <br/>Must be “button” | string | Y |  |
| title | The hour of the timeslot. <br/>It only affects non-Apple Business Chat rendering clients. | String | Y |  |

_* Button section should no use style element_

<br/>
Time Picker button has additional [Click Metadata](rich-messaging-click-ops.html) parameters that are specific to Apple Business Chat:

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of the element. <br/>Must be “BusinessEvent” | string | Y |  |
| timing | An object describing the start time and the duration of the timeslot | Object | Y |  |


**Timing Object Fields**

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| startTime | A UTC date string, represented by a valid date in ISO-8601 format and specified as absolute GMT +0000 date; for example, 2018-05-26T08:27:55+00:00, 2018-05-26T08:27:55+0000, or 2018-05-26T08:27:55Z | string | Y |  |
| Duration | An integer representing the duration of the timeslot, in seconds | integer | Y |  |


### Example

```json
{
  "type": "text",
  "text": "Tuesday, July 6"
},
{
  "type": "horizontal",
  "elements": [
    {
      "type": "button",
      "title": "11:30",
      "click": {
        "metadata": [
          {
            "type": "ExternalId",
            "id": "SlotIdentidier"
          },
          {
            "type": "BusinessEvent",
            "timing": {
              "startTime": "2019-07-06T11:30:00Z",
              "duration": 3600
            }
          }
        ],
        "actions": [
          {
            "type": "publishText",
            "text": "Technician visit: 7/6/2018 11:30 IST"
          }
        ]
      }
    }
  }
```
