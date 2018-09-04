---
title: Button Template
Keywords:
level1: Documents
level2: Rich Messaging
level3: Facebook Messenger Templates
level4: Templates
order: 30
permalink: rich-messaging-connectors-fb-button.html
indicator: messaging
---

The [button template](https://developers.facebook.com/docs/messenger-platform/send-messages/template/button) is a simple structured content card message that includes:

* Text Title
* Text Subtitle
* Up to three buttons with either Link, Publish Text or Navigation actions.

Brands are able to share the button template through [Rich Messaging Basic Elements](rich-messaging-getting-started.html), while using the Rich Messaging JSON properties.

Below is a button template example image with all type of button actions, including publish text button tap view:

![Facebook Button Template](images/fb-btn.PNG)

### JSON Template

```json
{
  "type": "vertical",
  "tag": "button",
  "elements": [
    {
      "type": "vertical",
      "elements": [
       {///START TITLE ELEMENT
         "type": "text",
         "tag": "title",
         "text": "THIS IS THE TITLE TEXT",
         "tooltip": "THIS IS THE TITLE TOOLTIP"
       },
       {///START SUBTITLE ELEMENT
         "type": "text",
         "tag": "subtitle",
         "text": "THIS IS THE SUBTITLE TEXT",
         "tooltip": "THIS IS THE SUBTITLE TOOLTIP"
       },
       ///START BUTTONS SECTION (UP TO 3)
       {///START BUTTON #1 ELEMENT
         "type": "button",
         "tooltip": "THIS IS THE BUTTON TOOLTIP",
         "title": "THIS IS THE BUTTON TITLE",
         "click": {
           "actions": [
             {
               "type": "publishText",
               "text": "THIS IS THE CLICK PUBLISH TEXT"
             }
           ]
         }
       },
       {///START BUTTON #2 ELEMENT
         "type": "button",
         "tooltip": "THIS IS THE BUTTON TOOLTIP",
         "title": "THIS IS THE BUTTON TITLE",
         "click": {
           "actions": [
             {
               "type": "link",
               "uri": "THIS IS THE LINK URI"
             }
           ]
         }
       },
       {///START BUTTON #3 ELEMENT
         "type": "button",
         "tooltip": "THIS IS THE BUTTON TOOLTIP",
         "title": "THIS IS THE BUTTON TITLE",
         "click": {
           "actions": [
             {
               "type": "navigate",
               "lo":  LONGITUDE VALUE,
               "la": LATITUDE VALUE
             }
           ]
         }
       }
      ]
    }]
  }

```

### Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Types of the template layout. <br/> Must be "vertical" | Enum | Y |  |
| tag | The tag of the layout view <br/>Must be “button” | Enum | Y |  |
| elements | Array of elements. <br/>The supported basic Rich Messaging elements for Facebook button template are “text” or “button”  | Elements | Y |  |

### Button Template Elements Configuration

The button template elements are based on the basic [Rich Messaging elements](rich-messaging-getting-started.html) with some limitations.

The following section describes those elements and their specific configuration fields.

#### Title Element Fields

Based on the [Rich Messaging Text](rich-messaging-basic-elements-text.html) element with the following restrictions:

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of element. <br/>Must be 'text' | Enum | Y |  |
| tag | Must be “title” | String | Y |  |
| text | The message text in a “text” type element | String | Y | 640 (UTF-8-encoded) characters limit in text element for Facebook templates. <br/><br/> 80 characters limitation for “title” or “subtitle” text elements |

_* Title section should not use style element_

#### Subtitle Element Fields

Based on the [Rich Messaging Text](rich-messaging-basic-elements-text.html) element with the following restrictions:

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of element. <br/>Must be 'text' | Enum | Y |  |
| tag | Must be “subtitle” | String | Y |  |
| text | The message text in a “text” type element | String | Y | 640 (UTF-8-encoded) characters limit in text element for Facebook templates. <br/><br/> 80 characters limitation for “title” or “subtitle” text elements |

_* Subtitle section should not use style element_

#### Button Element Fields

Based on the [Rich Messaging Button](rich-messaging-basic-elements-button.html) element with the following restrictions:

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of element. <br/>Must be 'button' | Enum | Y |  |
| title | title of the button | String | Y | 20 characters limit |
| click | Click operation <br/> Can use either “publishText”, "link" or "navigation" action types | Enum | Y |  |

_* Button section should not use style element_


### Example

```json
{
  "type": "vertical",
  "tag": "button",
  "elements": [
    {
      "type": "vertical",
      "elements": [
        {
          "type": "text",
          "tag": "title",
          "text": "Which location type will the flowers be sent to?",
          "tooltip": "Button example template"
        },
        {
          "type": "button",
          "tooltip": "Publish text example",
          "title": "Publish text example",
          "click": {
            "actions": [
              {
                "type": "publishText",
                "text": "published text button tap"
              }
            ]
          }
        },
        {
          "type": "button",
          "tooltip": "URL button example",
          "title": "URL button example",
          "click": {
            "actions": [
              {
                "type": "link",
                "name": "URL button tap",
                "uri": "https://www.pinterest.com/lyndawhite/beautiful-flowers/"
              }
            ]
          }
        },
        {
          "type": "button",
          "title": "Navigate",
          "click": {
            "actions": [
              {
                "type": "navigate",
                "lo": 40.7562,
                "la": -73.99861
              }
            ]
          }
        }
      ]
    }
  ]
}
```
