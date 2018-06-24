---
title: Generic Template
Keywords:
level1: Documents
level2: Rich Messaging
level3: Messaging Connectors Alignment
level4: Facebook
order: 20
permalink: rich-messaging-connectors-fb-generic.html
indicator: messaging
---

The [generic template](https://developers.facebook.com/docs/messenger-platform/send-messages/template/generic) is a simple structured card message that includes:

* Text title
* Text subtitle
* Image
* Up to three buttons with either URL, publish text or navigation button actions.

Brands will be able to share the generic template through structured content basic elements, while using the structured content JSON properties.

Below is an example of a generic template with all type of button actions, including a link button and navigation button tap view:

![Facebook Generic Template 1](images/fb-generic-1.PNG)   ![Facebook Generic Template 2](images/fb-generic-2.jpg)   ![Facebook Generic Template 3](images/fb-generic-3.PNG)


Agent view on LiveEngage:
![Agent view on LiveEngage](images/fb-generic-agentview.png)

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
