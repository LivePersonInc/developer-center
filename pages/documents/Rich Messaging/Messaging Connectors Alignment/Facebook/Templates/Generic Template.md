---
title: Generic Template
Keywords:
level1: Documents
level2: Rich Messaging
level3: Facebook Messenger Templates
level4: Templates
order: 20
permalink: rich-messaging-connectors-fb-generic.html
indicator: messaging
---

The [Facebook Messenger Generic Template](https://developers.facebook.com/docs/messenger-platform/send-messages/template/generic) is a simple structured content card message that includes:

* Image
* Text Title
* Text Subtitle
* Up to three buttons with either Link, Publish Text or Navigation actions.

Brands are able to share the generic template through [Rich Messaging Basic Elements](rich-messaging-getting-started.html), while using the Rich Messaging JSON properties.

Below is an example of a generic template with all type of button actions, including a link button and navigation button tap view:

![Facebook Generic Template 1](images/fb-generic-1.jpg)   ![Facebook Generic Template 2](images/fb-generic-2.jpg)   ![Facebook Generic Template 3](images/fb-generic-3.PNG)


Agent view on LiveEngage:
![Agent view on LiveEngage](images/fb-generic-agentview.png)

### JSON Template

```json
{
  "type": "vertical",
  "tag": "generic",
  "elements": [
    {
      "type": "vertical",
      "elements": [
        {///START IMAGE ELEMENT
         "type": "image",
         "url": "THIS IS THE IMAGE URL",
         "tooltip": "IMAGE TOOLTIP"
       },
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
| tag | The tag of the layout view <br/>Must be “generic” | Enum | Y |  |
| elements | Array of elements. <br/>The supported basic Rich Messaging elements for Facebook generic templates are “text”, “image”, or “button”  | Elements | Y |  |


### Generic Template Elements Configuration

The generic template elements are based on the basic [Rich Messaging elements](rich-messaging-getting-started.html) with some limitations.

The following section describes those elements and their specific configuration fields.

#### Image Element Fields

Based on the [Rich Messaging Image](rich-messaging-basic-elements-image.html) element with the following restrictions:

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of element. <br/>Must be 'image' | Enum | Y |  |
| url | Image URL. <br/>Must be whitelisted by a LivePerson representative | String | Y | JPG and PNG only |

_* Image section should not use style element_

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
  "tag": "generic",
  "elements": [
    {
      "type": "vertical",
      "elements": [
        {
          "type": "image",
          "url": "https://i.pinimg.com/736x/a0/67/5e/a0675e5161d7ae5be2550987f397a641--flower-shops-paper-flowers.jpg",
          "tooltip": "Flowers"
        },
        {
          "type": "text",
          "tag": "title",
          "text": "Birthday Bouquet",
          "tooltip": "Title"
        },
        {
          "type": "text",
          "tag": "subtitle",
          "text": "Wild flowers",
          "tooltip": "subtitle"
        },
        {
          "type": "button",
          "tooltip": "publish text example",
          "title": "publish text example",
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
    }]}
```
