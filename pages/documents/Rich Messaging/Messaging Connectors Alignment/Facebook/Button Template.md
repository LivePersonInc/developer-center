---
title: Button Template
Keywords:
level1: Documents
level2: Rich Messaging
level3: Messaging Connectors Alignment
level4: Facebook
order: 30
permalink: rich-messaging-connectors-fb-button.html
indicator: both
---

The button template is a simple structured card message that includes a text title, text subtitle, and up to three buttons with URL, publish text or navigation actions.

This is button template example image with all type of button actions, including publish text button tap view:

![](fb-list.PNG)

### Example

```JSON
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
          "text": "Button example template",
          "tooltip": "Button example template"
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
                "uri": "https://www.apple.com/iphone-8/specs/"
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
