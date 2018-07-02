---
title: Button Template
Keywords:
level1: Documents
level2: Rich Messaging
level3: Messaging Connectors Alignment
level4: Facebook
order: 70
permalink: rich-messaging-connectors-fb-button.html
indicator: messaging
---

The [button template](https://developers.facebook.com/docs/messenger-platform/send-messages/template/button) is a simple structured card message that includes:

* Text title
* Text subtitle
* Up to three buttons with URL, publish text or navigation button actions.

Below is a button template example image with all type of button actions, including publish text button tap view:

![Facebook Button Template](images/fb-btn.PNG)

### Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Types of basic elements supported by Structured Content framework. <br/>Can be “text”, “image” or “button” | Enum | Y |  |
| tag | The tag of the layout view, must be “button” in order to use the Button Facebook template.  | Enum | Y |  |
| elements | Array of elements. <br/>The supported basic Rich Messaging elements for Facebook templates are “text”, “image”, or “button”  | Elements | Y |  |
| text | Simple plain text message. <br/>The “text” field contains the message text | String | Y | 640 (UTF-8-encoded) characters limit in text element for Facebook templates |
| Image | Images in your Facebook template. <br/>Supported by sharing a URL that represents the image |  | Y |  |
| url | Image URL in a “image” type element (can use JPG and PNG only) | String | Y |  |
| Button | Simple Button which triggers an action when tapped by a consumer on Facebook Messenger. | Elements | Y | 20 characters limit in button for Facebook templates <br/><br/>Facebook Button template only supports up to three buttons |
| tooltip | Element tooltip on Agent Workspace. <br/>Used also for aira | String | N | 256 characters |
| action | Actions are a list of applicative actions on buttons, that will run on the consumer side and will help them to achieve their operation. <br/>Button action for Facebook Generic template can be set to Publish text, Link or Navigate:<br/>**Link** - Open a URL in a Facebook Messenger webview.<br/>**Navigate**- Will open a webview to a Google map of location<br/>**Publish text** - Send a message on behalf of consumer as a response for a button tap <br/><br/>Review the full list of [Rich Messaging actions](rich-messaging-click-ops.html) | Enum - “publishText”, “link”, “navigate” | N |  |

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
