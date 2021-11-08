---
pagename: Date Picker Template
redirect_from:
Keywords: 
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Mobile SDK and Web Templates
permalink: mobile-sdk-and-web-templates-date-picker-template.html
indicator: both
---

### Overview

Web Messaging and the Mobile SDK channels now allow for Date Picker functionality.

Conversational Cloud enables the agent to send a structured content button with a date picker action. This action will present a graphical user interface widget, which allows the consumer to efficiently select a date or date range.


{: .notice}
DatePicker JSON schema is only supported on accounts using UMS version 4.2, please contact your LivePerson representative to validate your account qualifies for this feature.


There are two date picker options:

* **Single:** Selects single date.

![Date Picker](images/DatePickerSingleSelection.gif)

* **Range:** Selects date range.

![Date Picker](images/DatePickerRangeSelection.gif)

### Template Properties

| Property Name | Description             | Type   | Required | Size Limit |
| :------------ | :---------------------- | :----- | :------- | :--------- |
| type          | Must be `datePicker`  | String | Y        |            |
| class   | Either `single` or `range` | String | Y        |     |
| title       | Title displayed on view         | String  | Y        |    |
| minDate          | Minimum date in range  | Int(Seconds) | N        |            |
| maxDate   | Maximum date in range | Int(Seconds) | N        |     |

### Example

```json
{
  "type": "vertical",
  "border": "dropShadow",
  "elements": [
    {
      "type": "horizontal",
      "borderLine": false,
      "percentages": [
        20,
        80
      ],
      "elements": [
        {
          "type": "image",
          "url": "https://agents-lp.github.io/structured-content-widget/img/date-picker-single.png",
          "tooltip": "image tooltip"
        },
        {
          "type": "vertical",
          "elements": [
            {
              "type": "text",
              "text": "Tax report",
              "tooltip": "text tooltip",
              "style": {
                "bold": true,
                "size": "large"
              }
            },
            {
              "type": "text",
              "text": "Select the datas for the tax report",
              "tooltip": "text tooltip"
            }
          ]
        }
      ]
    },
    {
      "type": "button",
      "tooltip": "button tooltip",
      "title": "Select dates",
      "class": "button",
      "style": {
        "background-color": "#3736A6",
        "color": "#ffffff",
        "size": "medium",
        "bold": true
      },
      "click": {
        "actions": [
          {
            "type": "datePicker",
            "class": "range",
            "title": "Select range of date for the report",
            "minDate": 1618613044,
            "maxDate": 1634424244,
            "dateFormat": "DD-MM-YYYY"
          }
        ]
      }
    }
  ]
}
```

### Best Practices

1. **Calendar Widget Best Use Cases**
    - They are helpful for getting to pick a not-yet-known date in context. When you're scheduling something, your choice of date will be influenced by which day of the week, or which week of the month, you're booking in. They aren't as helpful for when the date is known, such as birthdate.
    - Picking date ranges: from/to, start/end, depart/return dates.
    - Disabling certain dates on the calendar. 

2. **Indicate Current Date:** 
    - Don’t forget to indicate the current day, so that users won’t need to access OS calendar to see what the day is today. The default configurations have the current date outlined. 

3. **Show Distinction with Unavailable Dates:**
    - It’s better to restrict the date selection by making those inactive — by doing that you will help users avoid selecting unavailable dates and end up in zero-results dead ends. The default configurations have those dates in a disabled state.

4. **Date Format and Language**
    - If a date format is provided in the JSON schema, that one will be used. If one is NOT provided, the date format will default to MMM dd, yyyy.
    - Locale will be used for date format and language.

5. **Min and Max Dates**
    - If no min and max date selected:
        - min = current - 150yrs
        - max = current + 150yrs
    - If no min is selected: 
        - min = max - 150yrs
    - If no max is selected: 
        - max = min + 150yrs

6. **Provide correct JSON data.**
    - Verify correct data is being provided in structured content json. 

### Limitations

* **Error Message displayed when missing data in JSON**
    - The user is presented with an error message: "Content failed to display", when required data is missing and/or invalid json is provided. 
* **Calendar Selection**
    - Multiple date selection is not supported for single Date Picker. 
    - Unavailable dates will always be before or after the provided date range.
