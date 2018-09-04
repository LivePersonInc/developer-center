---
title: Quick Replies Template
Keywords:
level1: Documents
level2: Rich Messaging
level3: Facebook Messenger Templates
level4: Templates
order: 60
permalink: rich-messaging-connectors-fb-quickreplies.html
indicator: messaging
---

The [Quick Reply template](https://developers.facebook.com/docs/messenger-platform/send-messages/quick-replies) provides a way to receive a consumer input to a question/statement by a set of buttons that each contain a title text and/or emojis. The buttons always appear above the message composition in the Facebook Messenger window, and will be published in the conversation thread upon consumer button tap.


Quick Reply for Facebook Messenger includes a set of up to 11 buttons that can each contain a text title and a publish text click action.

Brands will be able to share the Quick Reply template while using the [LiveEngage Quick Replies](rich-messaging-quick-replies-overview.html) JSON properties.
Please note that should you want to share a question/statement before sending the quick reply buttons, the text message should be shared with the JSON.


Below is an image of a Quick Reply with four buttons:

![Facebook Quick Replies Template](images/fb-quickreplies.PNG)

### Example

```json
{
  "type": "quickReplies",
  "itemsPerRow": 8,
  "replies": [
    {
      "type": "button",
      "tooltip": "Not likely at all",
      "title": "Not likely at all",
      "click": {
        "actions": [
          {
            "type": "publishText",
            "text": "yep"
          }
        ]
      }
    },
    {
      "type": "button",
      "tooltip": "Not likely",
      "title": "Not likely",
      "click": {
        "actions": [
          {
            "type": "publishText",
            "text": "nope"
          }
        ]
      }
    },
    {
      "type": "button",
      "tooltip": "likely",
      "title": "likely",
      "click": {
        "actions": [
          {
            "type": "publishText",
            "text": "nope"
          }
        ]
      }
    },
    {
      "type": "button",
      "tooltip": "Very likely",
      "title": "Very likely",
      "click": {
        "actions": [
          {
            "type": "publishText",
            "text": "nope"
          }
        ]
      }
    }
  ]
}
```
