---
title: Time Picker Examples
Keywords:
sitesection: Documents
level2: Rich Messaging
level3: Apple Business Chat Templates
level4: Time Picker
order: 130
permalink: rich-messaging-connectors-abc-timepicker-examples.html
indicator: messaging
---

### Time Picker Metadata

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


### Time Picker Body

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
