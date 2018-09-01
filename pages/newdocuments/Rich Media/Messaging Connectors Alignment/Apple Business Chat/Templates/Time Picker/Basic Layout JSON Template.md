---
pagename: Basic Layout JSON Template
Keywords:
sitesection: Documents
categoryname: "Rich Media"
documentname: Apple Business Chat Templates
subfoldername: Time Picker
order: 90
permalink: rich-messaging-connectors-abc-timepicker-layout.html
indicator: messaging
---

In order to comply with the Apple Business Chat JSON structure, the below LiveEngage structured content JSON structure must be applied to any Time Picker template.

Each Time Picker template has the following mandatory sections:

1. [Business Event](rich-messaging-connectors-abc-timepicker-businessevent.html) (part of the metadata JSON): defines the object as a time picker object for Apple Business Chat. This section includes timing and location properties.

2. [Business Chat Message](rich-messaging-connectors-abc-timepicker-businesschatmsg.html) (part of the metadata JSON): defines the received and reply messages.

3. [Time Picker Items](rich-messaging-connectors-abc-timepicker-item.html) (part of the JSON body): defines the dates available and the time slots for selection as part of the Time Picker.

The following JSON metadata and body structures are templates for any Time Picker object:

### Metadata JSON template

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

### Body JSON Template

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
    ///START TIME PICKER ITEM #1
    {
      "type": "text",
      "text": "ITEM TITLE AS A DATE"
    },
    {
      "type": "horizontal",
      "elements": [
        ///LIST OF AVAILABLE TIME SLOTS FOR ITEM #1
        {
          ///TIME SLOT #1
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
        }///END OF TIME SLOT #1,
        {
          ///TIME SLOT #2
        },
        {
          ///TIME SLOT #3
        },
          ///ETC
      ]
    }///END OF TIME PICKER ITEM #1,
    {
      ///TIME PICKER ITEM #2
    },
    {
      ///TIME PICKER ITEM #3
    },
    ///ETC
  ]
}
```
