---
title: Time Picker
Keywords:
level1: Documents
level2: Rich Messaging
level3: Messaging Connectors Alignment
level4: Apple Business Chat
order: 30
permalink: rich-messaging-connectors-abc-timepicker.html
indicator: messaging
---

[Business Chat Time Picker](https://developer.apple.com/documentation/businesschat/enhancing_the_customer_s_user_experience/sending_a_time_picker) enables human or automated agents to available time slots when consumers are looking to schedule an appointment to the brand’s various services. Time picker allows the consumer to select the relevant time slot, and reply back with the time selected. The following capabilities are supported:

* **receivedMessage and replyMessage** bubbles style structures (which are the layouts for the bubbles that are received by the consumer and then sent back by the consumer). This allows the brand to create Time Picker with bubbles containing title, subtitle, style size and image.
* **Time Slots** - Enabling the agent to generate an array of time slots for the consumer’s options.
* **Time zone offset** - Representing the number of minutes from GMT, while specifying the timezone of the event’s location. If not set, times are shown according to the customer’s current time zone. If set, the times are shown according to the event’s time zone, regardless of the customer’s location.
* **Location** - Enabling the brand to to add a describer to the appointment location, allowing the consumer to immediately see the location once appointment is saved in the calendar.

Brands are able to share the Time Picker interactive message through Rich Messaging elements, while using Rich Messaging JSON properties to define the time picker structure, while using metadata fields in order to define the received and reply bubble structures.

Below is an example image of a Business Chat time picker:

![Apple Business Chat Time Picker Main](images/abc-timepicker-1.jpg)   ![Apple Business Chat Time Picker list](images/abc-timepicker-2.PNG)

### Fields

#### Metadata Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of metadata. Must be BusinessChatMessage or BusinessEvent | Enum | Y |  |
| BusinessChatMessage | Represents the Business Chat bubbles view objects   | Enum - BusinessChatMessage | Y |  |
| BusinessEvent | Represents the time picker elements configuration object  | Enum - “BusinessEvent” | Y |  |
| location | A dictionary describing a location. |  | N |  |
| la | A double representing the latitude of the location | double | N |  |
| lo | A double representing the longitude of the location | double | N |  |
| radios | A double representing the location radius, in meters. <br/>Business Chat ignores this field when latitude and longitude are missing or empty. | double | N |  |
| timing | An object containing the time zone offset | Object | N |  |
| presentedTimezoneOffset | Time zone offset configuration. <br/>Represent the number of minutes from GMT, while specifying the timezone of the event’s location | integer | N |  |
| receivedMessage | Defines how the bubble layout displayed when message is received. | Object | Y |  |
| replyMessage | Defines how the bubble displayed when message is sent back by the consumer. | Object | Y |  |
| Style | Defines the size of the bubble. <br/>Can be set to icon, small or large. <br/>Defaults to icon. | String | N |  |
| Title | The title of the bubble  | String | Y |  |
| Subtitle | Subtitle to be displayed under title of the bubble | String | N |  |
| imageURL | Image to be placed in the Time Picker received and reply message bubble layout (can be JPG and PNG only) | String | N | Up to 0.5Mb of total images size in the time picker |

### Body Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Types of basic elements supported by Structured Content framework. <br/>Can be “text”, “image”, “button”, or “BusinessEvent” | Enum | Y |  |
| tag | The tag of the layout view, must be “datePicker” in order to use the Business Chat Time Picker interactive message. <br/>Within basic elements objects, tag will be “title”/”subtitle”, which will indicate what text should rendered in each of those elements (the title and subtitle have default style in Business Chat Time Picker) | Enum | Y |  |
| elements | Array of elements. <br/>The supported basic Rich Messaging elements for Business Chat Date Picker are “text”, “image”, “button”, or  “BusinessEvent” | Elements | Y |  |
| text | The message text in a “text” type element | String | Y |  |
| Button | Simple button which triggers a publish text action when selected and tapped by a consumer on Business Chat.  | Elements | Y |  |
| tooltip | Element tooltip on Agent Workspace. <br/>Used also for aira | String | N |  |
| action | Actions are a list of applicative actions on buttons, that will run on the consumer side and will help them to achieve their operation. <br/>Button action for Business Chat Time Picker can be set only to “Publish text”. <br/>This will make sure that upcon consumer selection of time slot, the selection will be posted back as text to the agent.<br/><br/> Review the full list of [Rich Messaging actions](rich-messaging-click-ops.html) | Enum - “publishText” | Y |  |
| BusinessEvent | Represents the time picker element configuration object |Enum - “BusinessEvent” | Y |  |
| Timing | A dictionary describing the time slots for the consumer’s options | Y |  |  |
| Timing | A dictionary describing the time slots for the consumer’s options |  | Y |  |
| startTime | A UTC date string, represented by a valid date in ISO-8601 format and specified as absolute GMT +0000 date; for example, 2018-05-26T08:27:55+00:00, 2018-05-26T08:27:55+0000, or 2018-05-26T08:27:55Z | String | Y |  |
| Duration | An integer representing the duration of the time slot, in seconds | Integer | Y |  |

### Examples

#### Time Picker Metadata

```json
[
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
  },
  {
    "type": "BusinessChatMessage",
    "receivedMessage": {
      "title": "Available appointments",
      "imageURL": "https://cdn.dribbble.com/users/85668/screenshots/1352116/dribblble_mock_1x.jpg",
      "style": "small",
      "subtitle": "Please select your preferred time"
    },
    "replyMessage": {
      "title": "Selected time",
      "style": "large",
      "imageURL": "https://cdn.dribbble.com/users/85668/screenshots/1352116/dribblble_mock_1x.jpg",
      "subtitle": "Time selected!"
    }
  }
]
```

#### Time Picker Body

```json
{
  "type": "vertical",
  "tag": "datePicker",
  "elements": [
    {
      "type": "text",
      "text": "Select Date",
      "tag": "Title",
      "style": {
        "bold": true,
        "size": "large"
      }
    },
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
                  "startTime": "2018-07-06T11:30:00Z",
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
        },
        {
          "type": "button",
          "title": "12:00",
          "click": {
            "metadata": [
              {
                "type": "ExternalId",
                "id": "SlotIdentidier"
              },{
                "type": "BusinessEvent",
                "timing": {
                  "startTime": "2018-07-06T12:00:00Z",
                  "duration": 3600
                }
              }
            ],
            "actions": [
              {
                "type": "publishText",
                "text": "Technician visit: 7/6/2018 12:00 IST"
              }
            ]
          }
        }]}]}
```
