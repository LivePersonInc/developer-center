---
title: Basic Layout Metadata
Keywords:
level1: Documents
level2: Rich Messaging
level3: Apple Business Chat Templates
level4: List Picker
order: 40
permalink: rich-messaging-connectors-abc-listpicker-metadata.html
indicator: messaging
---

The List Picker Metadata JSON is based on [this JSON template](rich-messaging-connectors-abc-listpicker-layout.html#metadata-json-template).

### List Picker Metadata JSON Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of metadata. </br> Must be BusinessChatMessage | Enum | Y |  |
| multipleSelection | Value that indicates if the customer can make multiple selections. </br> Defaults to false. | Boolean | N |  |
| receivedMessage | Defines how the bubble layout will be displayed when a message is received. | Object | Y |  |
| replyMessage | Defines how the bubble will be displayed when a message is sent back by the consumer. | Object | Y |  |


### Received and Reply Message

The Received Message is the first card presented to the consumer, from which they access the list of items to choose from. It consists of an image and actions.

The Reply Message is the reply card presented to the consumer after selecting items from the list.

The configuration of the Received and Reply Messages is done via a metadata JSON file.


#### Received and Reply Message Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| Style | Defines the size of the message. Can be set to icon, small or large. <br/> Defaults to icon. | String | N |  |
| title | The title of the message | String | Y | 85 characters (30 is recommended by Apple) |
| Subtitle | Subtitle to be displayed under title of the message | String | N | 400 characters (85 is recommended by Apple) |
| imageURL | Image to be placed in the List Picker received and reply message layout | String | N | JPG and PNG Only <br/> The total image size in the list picker is limited to 0.5MB |
| secondarySubtitle | Title that is aligned right of the message | String | Y |  |
| tertiarySubtitle | Subtitle that is aligned right of the message  | String | Y |  |


### Metadata JSON Example

```json
[
  {
    "type": "BusinessChatMessage",
    "multipleSelection": true,
    "receivedMessage": {
      "style": "icon",
      "subtitle": "Select your favorite",
      "title": "Beautiful flowers",
      "secondarySubtitle": "secondary subtitle",
      "tertiarySubtitle": "tertiarySubtitle",
      "imageURL": "https://i.pinimg.com/736x/a0/67/5e/a0675e5161d7ae5be2550987f397a641--flower-shops-paper-flowers.jpg"
    },
    "replyMessage": {
      "style": "large",
      "subtitle": "",
      "title": "Your selection",
      "secondarySubtitle": "secondarySubtitle",
      "tertiarySubtitle": "tertiarySubtitle",
      "imageURL": "https://i.pinimg.com/736x/a0/67/5e/a0675e5161d7ae5be2550987f397a641--flower-shops-paper-flowers.jpg"
    }
  }
]
```
