---
pagename: Time Picker
redirect_from:
  - rich-messaging-connectors-abc-timepicker.html
  - structured-content-apple-business-chat-templates-time-picker-template.html
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Apple Business Chat Templates
permalink: apple-business-chat-templates-time-picker-template.html
indicator: messaging
---

### Overview

[Business Chat Time Picker](https://developer.apple.com/documentation/businesschat/enhancing_the_customer_s_user_experience/sending_a_time_picker) enables human or automated agents to send available time slots when consumers are looking to schedule an appointment with the brand’s various services. Time picker allows the consumer to select the relevant time slot, and reply back with the time selected.

The following capabilities are supported:

1. **receivedMessage and replyMessage** bubbles style structures (which are the templates for the bubbles that are received by the consumer and then sent back by the consumer). This allows the brand to create a Time Picker with bubbles containing title, subtitle, style size and image.

2. **Timeslots** - Enables the agent to generate an array of time slots for the consumer’s options.

3. **Time zone offset** - Represents the number of minutes from GMT, while specifying the timezone of the event’s location. If not set, times are shown according to the customer’s current time zone. If set, the times are shown according to the event’s time zone, regardless of the customer’s location.

4. **Location** - Enables the brand to add a describer to the appointment location, allowing the consumer to immediately see the location once an appointment is saved in the calendar.

By Using the using metadata properties, the brand can also define the received and reply bubble structures.

Below is an example image of a Business Chat time picker:

![Apple Business Chat Time Picker Main](images/abc-timepicker-1.jpg)   ![Apple Business Chat Time Picker list](images/abc-timepicker-2.PNG)

### Basic Template Overview

In order to comply with the Apple Business Chat JSON structure, the below LiveEngage structured content JSON structure must be applied to any Time Picker template.

Each Time Picker template has the following mandatory sections:

1. [Business Event](#metadata---business-event) (part of the metadata JSON): defines the object as a time picker object for Apple Business Chat. This section includes timing and location properties.

2. [Business Chat Message](#metadata---business-chat-message) (part of the metadata JSON): defines the received and reply messages.

3. [Time Picker Items](#body---time-picker-items) (part of the JSON body): defines the dates available and the time slots for selection as part of the Time Picker.

The following JSON metadata and body structures are templates for any Time Picker object:

#### Metadata JSON template

```json
[
  {
    "type": "BusinessEvent",
    "timing": {
      "presentedTimezoneOffset": GMT TIME OFFSET IN MINUTES
    },
    "location": {
      "title": "title",
      "la": LATITUDE,
      "lo": LONGITUDE,
      "radius": RADIUS
    },
    "title": "TITLE OF THE CALENDAR MEETING"
  },
  {
    "type": "BusinessChatMessage",
    "receivedMessage": {
      "title": "THIS IS THE TITLE",
      "imageURL": "HTTPS URL OF THE IMAGE",
      "style": "small",
      "subtitle": "THIS IS THE SUBTITLE"
    },
    "replyMessage": {
      "title": "THIS IS THE TITLE",
      "style": "large",
      "imageURL": "HTTPS URL OF THE IMAGE",
      "subtitle": "THIS IS THE SUBTITLE"
    }
  }
]
```

#### Body JSON Template

```json
{
  "type": "vertical",
  "tag": "datePicker",
  "elements": [
    {
      ///TITLE OF THE TIME PICKER
      "type": "text",
      "text": "THIS IS THE TITLE",
      "tag": "Title",
      "style": {
        "bold": true,
        "size": "large"
      }
    },
    {
      ///SUBTITLE OF THE TIME PICKER
      "type": "text",
      "text": "THIS IS THE SUBTITLE",
      "tag": "subtitle"
    },
    ///START TIME PICKER ITEM ###1
    {
      "type": "text",
      "text": "ITEM TITLE AS A DATE"
    },
    {
      "type": "horizontal",
      "elements": [
        ///LIST OF AVAILABLE TIME SLOTS FOR ITEM ###1
        {
          ///TIME SLOT ###1
          "type": "button",
          "title": "THIS IS THE TIME SLOT HOUR",
          "click": {
            "metadata": [
              {
                "type": "ExternalId",
                "id": "ON-CLICK EXTERNAL ID"
              },
              {
                "type": "BusinessEvent",
                "timing": {
                  "startTime": "DATE OBJECT",
                  "duration": DURATION OF THE TIME SLOT IN SECONDS
                }
              }
            ],
            "actions": [
              {
                "type": "publishText",
                "text": "ON-CLICK CONFIRMATION TEXT"
              }
            ]
          }
        }///END OF TIME SLOT ###1,
        {
          ///TIME SLOT ###2
        },
        {
          ///TIME SLOT ###3
        },
          ///ETC
      ]
    }///END OF TIME PICKER ITEM ###1,
    {
      ///TIME PICKER ITEM ###2
    },
    {
      ///TIME PICKER ITEM ###3
    },
    ///ETC
  ]
}
```

### Metadata - Business Chat Message

Part of the Time Picker LiveEngage Structured Content metadata JSON.

#### Properties

| Property Name   | Description                                                                           | Type   | Required | Size Limit |
| :-------------- | :------------------------------------------------------------------------------------ | :----- | :------- | :--------- |
| type            | Type of metadata. <br/> Must be 'BusinessChatMessage'                                 | Enum   | Y        |            |
| receivedMessage | Defines how the bubble template will be displayed when a message is received.           | Object | Y        |            |
| replyMessage    | Defines how the bubble will be displayed when a message is sent back by the consumer. | Object | N        |            |


#### Received and Reply messages

The Received Message is the first card presented to the consumer, from which they access the available timeslots to choose from. It consists of an image, title, subtitle and style.

The Reply Message is the reply card presented to the consumer after selecting the time from the picker. It consists of an image, title, subtitle and style.

| Property Name     | Description                                                                                      | Type   | Required | Size Limit                                                                  |
| :---------------- | :----------------------------------------------------------------------------------------------- | :----- | :------- | :-------------------------------------------------------------------------- |
| Style             | Defines the size of the message. <br/>Can be set to icon, small or large. <br/>Defaults to icon. | String | N        |                                                                             |
| title             | The title of the message                                                                         | String | Y        | 85 characters (30 is recommended by Apple)                                  |
| Subtitle          | Subtitle to be displayed under title of the message                                              | String | N        | 400 characters (85 is recommended by Apple)                                 |
| imageURL          | Image to be placed in the Time Picker received and reply message template                          | String | N        | JPG and PNG Only <br/>The image size in the Time Picker is limited to 0.5MB |
| secondarySubtitle | Title that is aligned to the right of the message                                                | String | N        |                                                                             |
| tertiarySubtitle  | Subtitle that is aligned to the right of the message                                             | String | N        |                                                                             |

#### Example

```json
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
```

### Metadata - Business Event

Part of the Time Picker LiveEngage Structured Content metadata JSON. Defines the object as a time picker object for Apple Business Chat. This section includes timing and location properties.

#### Properties

| Property Name | Description                                                                                                                                                        | Type   | Required | Size Limit |
| :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----- | :------- | :--------- |
| type          | Type of metadata. <br/> Must be 'BusinessEvent'                                                                                                                    | Enum   | Y        |            |
| Timing        | Defines the GMT time offset configuration                                                                                                                          | Object | N        |            |
| location      | Enables the brand to add a descriptor to the appointment location, allowing the consumer to immediately see the location once appointment is saved in the calendar | Object | N        |            |
| title         | Title of the calendar meeting                                                                                                                                      | String | Y        |            |


#### Timing Object Properties

| Property Name           | Description                                                                                                                                                                                                                                                                                                                 | Type | Required | Size Limit |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--- | :------- | :--------- |
| presentedTimezoneOffset | Time zone offset configuration. Represents the number of minutes from GMT, while specifying the timezone of the event’s location. <br/>If not set, times are shown according to the customer’s current time zone. If set, the times are shown according to the event’s time zone, regardless of the customer’s location | Enum | N        |            |


#### Location Object Properties

| Property Name | Description                                                                                                                                   | Type   | Required | Size Limit |
| :------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- | :----- | :------- | :--------- |
| title         | Location name                                                                                                                                 | String | N        |            |
| la            | A double representing the latitude of the location                                                                                            | double | N        |            |
| lo            | A double representing the longitude of the location                                                                                           | double | N        |            |
| radios        | A double representing the location radius, in meters. <br/>Business Chat ignores this property when latitude and longitude are missing or empty. | double | N        |            |

#### Example

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

### Body - Time Picker Items

Part of the Time Picker LiveEngage Structured Content body JSON, enabling an agent to generate an array of time slots for the consumer’s options.

The Time Picker item elements consists of a title element and a row of available time slots per specific date to choose from.

They are based on the Structured Content [basic elements](structured-content-introduction-to-structured-content.html#basic-elements) with some limitations.

The following section describes those elements and their specific configuration properties.  

#### Template Properties

| Property Name | Description                                      | Type     | Required | Size Limit |
| :------------ | :----------------------------------------------- | :------- | :------- | :--------- |
| type          | template of the element. <br/>Must be “vertical” | string   | Y        |            |
| tag           | Must be “datePicker”                           | String   | Y        |            |
| elements      | List of time picker elements                     | Elements | Y        |            |

#### Text Element Properties

Based on [Structured Content Basic Element Text](structured-content-introduction-to-structured-content.html#text) with the following restrictions:

| Property Name | Description                                | Type   | Required | Size Limit |
| :------------ | :----------------------------------------- | :----- | :------- | :--------- |
| type          | Type of the element. <br/>Must be “text” | string | Y        |            |
| text          | Must be “datePicker”                     | String | Y        |            |

**Note: The text section should not use style element**


#### Time slot Element Properties

Based on [Structured Content Basic Element Button](structured-content-introduction-to-structured-content.html#button) with the following restrictions:

| Property Name | Description                                                                             | Type   | Required | Size Limit |
| :------------ | :-------------------------------------------------------------------------------------- | :----- | :------- | :--------- |
| type          | Type of the element. <br/>Must be “button”                                            | string | Y        |            |
| title         | The hour of the time slot. <br/>Only affects non-Apple Business Chat rendering clients. | String | Y        |            |

**Note: The button section should not use style element**

<br/>
Time Picker button has additional [Click Metadata](structured-content-introduction-to-structured-content.html#element-click-operations) parameters that are specific to Apple Business Chat:

| Property Name | Description                                                           | Type   | Required | Size Limit |
| :------------ | :-------------------------------------------------------------------- | :----- | :------- | :--------- |
| type          | Type of the element. <br/>Must be “BusinessEvent”                   | string | Y        |            |
| timing        | An object describing the start time and the duration of the time slot | Object | Y        |            |


**Timing Object Properties**

| Property Name | Description                                                                                                                                                                                           | Type    | Required | Size Limit |
| :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :------- | :--------- |
| startTime     | A UTC date string, represented by a valid date in ISO-8601 format and specified as absolute GMT +0000 date; for example, 2018-05-26T08:27:55+00:00, 2018-05-26T08:27:55+0000, or 2018-05-26T08:27:55Z | string  | Y        |            |
| Duration      | An integer representing the duration of the time slot, in seconds                                                                                                                                     | integer | Y        |            |


#### Example

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
  ]
}
```

### Example

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
                  "startTime": "2019-07-06T11:30:00Z",
                  "duration": 3600
                }
              }
            ],
            "actions": [
              {
                "type": "publishText",
                "text": "Technician visit: 7/6/2019 11:30 IST"
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
              },
              {
                "type": "BusinessEvent",
                "timing": {
                  "startTime": "2019-07-06T12:00:00Z",
                  "duration": 3600
                }
              }
            ],
            "actions": [
              {
                "type": "publishText",
                "text": "Technician visit: 7/6/2019 12:00 IST"
              }
            ]
          }
        }
      ]
    }
  ]
}
```