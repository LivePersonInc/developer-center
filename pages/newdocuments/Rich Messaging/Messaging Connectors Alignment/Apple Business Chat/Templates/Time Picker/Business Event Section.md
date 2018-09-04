---
pagename: Business Event Section
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Apple Business Chat Templates
subfoldername: Time Picker
order: 100
permalink: rich-messaging-connectors-abc-timepicker-businessevent.html
indicator: messaging
---

Part of the Time Picker LiveEngage Structured Content metadata JSON. Defines the object as a time picker object for Apple Business Chat. This section includes timing and location properties.

### Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of metadata. <br/> Must be 'BusinessEvent' | Enum | Y |  |
| Timing | Defines the GMT time offset configuration | Object  | N |  |
| location | Enables the brand to add a descriptor to the appointment location, allowing the consumer to immediately see the location once appointment is saved in the calendar | Object | N |  |
| title | Title of the calendar meeting | String | Y |  |


#### Timing Object Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| presentedTimezoneOffset | Time zone offset configuration. Represents the number of minutes from GMT, while specifying the timezone of the event’s location. <br/>If not set, times are shown according to the customer’s current time zone. If set, the times are shown according to the event’s time zone, regardless of the customer’s location | Enum | N |  |


#### Location Object Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| title | Location name | String | N |  |
| la | A double representing the latitude of the location | double | N |  |
| lo | A double representing the longitude of the location | double | N |  |
| radios | A double representing the location radius, in meters. <br/>Business Chat ignores this field when latitude and longitude are missing or empty. | double | N |  |

### Example

```json
{
  "type": "BusinessEvent",
  "timing": {
    "presentedTimezoneOffset": 120
  },
  "location": {
    "title": "LivePerson ATC Mannheim",
    "la": 49.4872955,
    "lo": 8.4682869,
    "radius": 10
  },
  "title": "Technician Visit"
}
```
