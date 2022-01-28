---
pagename: Schedule Slot List Template
redirect_from:
Keywords: 
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Mobile SDK and Web Templates
permalink: mobile-sdk-and-web-templates-schedule-slot-list-template.html
indicator: both
---

### Overview

Web Messaging and the Mobile SDK channels now allow functionality to present Schedule Slot Lists.

Conversational Cloud enables the agent to send a structured content button with a Schedule Slot Lists action. This action will present a graphical user interface widget, which allows the consumer to efficiently select an appointment slot from a list.


{: .notice}
ScheduleSlotList JSON schema is only supported on accounts using UMS version 4.2, please contact your LivePerson representative to validate your account qualifies for this feature.

<div style="width: 100%; position: relative;">
    <img src="/img/AndroidAppointmentSlotGif1.gif" alt="Schedule Slot List Dark Mode" style="float: left; width: 30%;height: auto; margin-right: 6em">
    <img src="/img/AndroidAppointmentSlotGif2.gif" alt="Schedule Slot List Light Mode" style="width: 30%;height: auto;">
</div>

### Template Properties

| Property Name | Description             | Type   | Required | Size Limit |
| :------------ | :---------------------- | :----- | :------- | :--------- |
| type          | Must be `scheduleSlotList`  | String | Y        | 40 Characters           |
| title       | Title displayed on view         | String  | N        |    |
| firstDayOfTheWeek          | Either `sun` or `mon`  | String| N        |            |
| id       | Slot id         | String  | Y        |    |
| start   | Start date of a slot | Int(Seconds) | Y        |     |
| end   | End date of a slot | Int(Seconds) | N        |     |
| title          | Slot title  | String | N        | 40 Characters           |
| description          | Slot description  | String | N        | 40 Characters           |
| imageUrl          | Slot avatar to display  | String | N        |            |

### Example
```json
{
  "type": "vertical",
  "border": "dropShadow",
  "elements": [
    {
      "type": "horizontal",
      "borderLine": false,
      "elements": [
        {
          "type": "vertical",
          "elements": [
            {
              "type": "text",
              "text": "Schedule List",
              "tooltip": "text tooltip",
              "style": {
                "bold": true,
                "size": "large"
              }
            },
            {
              "type": "text",
              "text": "Select appointment for your repair",
              "tooltip": "text tooltip"
            }
          ]
        }
      ]
    },
    {
      "type": "button",
      "tooltip": "button tooltip",
      "title": "Select appointment",
      "class": "button",
      "style": {
        "background-color": "#3736A6",
        "color": "#ffffff",
        "border-radius": 10,
        "border-color": "#000000",
        "size": "medium",
        "bold": true
      },
      "click": {
        "actions": [
          {
            "type": "scheduleSlotList",
            "title": "Schedule your appointment",
            "firstDayOfTheWeek": "mon",
            "slots": [
              {
                "type": "scheduleSlot",
                "id": "1634911200000",
                "start": 1634911200,
                "end": 1634914800,
                "title": "Day_1_Slot_1",
                "description": "Slot 1 of 60M"
              },
              {
                "type": "scheduleSlot",
                "id": "1634914800000",
                "start": 1634914800,
                "end": 1634918400,
                "title": "Day_1_Slot_2",
                "description": "Slot 2 of 60M",
                "imageUrl": "https://robohash.org/1634914800000.png?size=35x35&set=set2"
              },
              {
                "type": "scheduleSlot",
                "id": "1634997600000",
                "start": 1634997600,
                "end": 1635001200,
                "title": "Day_2_Slot_1",
                "description": "Slot 1 of 60M",
                "imageUrl": "https://robohash.org/1634997600000.png?size=35x35&set=set2"
              },
              {
                "type": "scheduleSlot",
                "id": "1635001200000",
                "start": 1635001200,
                "end": 1635004800,
                "title": "Day_2_Slot_2",
                "description": "Slot 2 of 60M"
              }
            ]
          }
        ]
      }
    }
  ]
}
```