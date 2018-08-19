---
title: Business Chat Message Section
Keywords:
sitesection: Documents
level2: Rich Messaging
level3: Apple Business Chat Templates
level4: Time Picker
order: 110
permalink: rich-messaging-connectors-abc-timepicker-businesschatmsg.html
indicator: messaging
---

Part of the Time Picker LiveEngage Structured Content metadata JSON.

### Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of metadata. <br/> Must be 'BusinessChatMessage' | Enum | Y |  |
| receivedMessage | Defines how the bubble layout will be displayed when a message is received. | Object  | Y |  |
| replyMessage | Defines how the bubble will be displayed when a message is sent back by the consumer. | Object | N |  |


### Received and Reply messages

The Received Message is the first card presented to the consumer, from which they access the available timeslots to choose from. It consists of an image, title, subtitle and style.

The Reply Message is the reply card presented to the consumer after selecting the time from the picker. It consists of an image, title, subtitle and style.

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| Style | Defines the size of the message. <br/>Can be set to icon, small or large. <br/>Defaults to icon. | String | N |  |
| title | The title of the message | String | Y | 85 characters (30 is recommended by Apple) |
| Subtitle | Subtitle to be displayed under title of the message | String | N | 400 characters (85 is recommended by Apple) |
| imageURL | Image to be placed in the Time Picker received and reply message layout | String | N | JPG and PNG Only <br/>The image size in the Time Picker is limited to 0.5MB |
| secondarySubtitle | Title that is aligned to the right of the message | String | N |  |
| tertiarySubtitle | Subtitle that is aligned to the right of the message | String | N |  |


### Example

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
