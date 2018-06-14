---
title: Button Template
Keywords:
level1: Documents
level2: Rich Messaging
level3: Messaging Connectors Alignment
level4: Facebook
order: 30
permalink: rich-messaging-connectors-fb-button.html
indicator: messaging
---

The [button template](https://developers.facebook.com/docs/messenger-platform/send-messages/template/button) is a simple structured card message that includes:

* Text title
* Text subtitle
* Up to three buttons with URL, publish text or navigation button actions.

Below is a button template example image with all type of button actions, including publish text button tap view:

![](images/fb-btn.PNG)

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
