---
title: List Template
Keywords:
level1: Documents
level2: Rich Messaging
level3: Messaging Connectors Alignment
level4: Facebook
order: 80
permalink: rich-messaging-connectors-fb-list.html
indicator: messaging
---

Facebook Messenger has full support for list template messages.
[List template](https://developers.facebook.com/docs/messenger-platform/send-messages/template/list) messages are a vertically Rich Messaging set of up to four items (Facebook limitation) that may each contain:

* Text title
* Text subtitle
* Image
* Each item can contain a button with link, navigation or publish text actions.

Below is a list template example image:

![Facebook List Template](images/fb-list.PNG)

### Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Types of basic elements supported by Structured Content framework. <br/>Can be “text”, “image” or “button” | Enum | Y |  |
| tag | The tag of the layout view, must be “list” in order to use the List Facebook template.  | Enum | Y |  |
| elements | Array of elements. <br/>The supported basic Rich Messaging elements for Facebook templates are “text”, “image”, or “button”  | Elements | Y |  |
| text | Simple plain text message. <br/>The “text” field contains the message text | String | Y | 640 (UTF-8-encoded) characters limit in text element for Facebook templates |
| Image | Images in your Facebook template. <br/>Supported by sharing a URL that represents the image |  | Y |  |
| url | Image URL in a “image” type element (can use JPG and PNG only) | String | Y | 2048 characters |
| Button | Simple Button which triggers an action when tapped by a consumer on Facebook Messenger. | Elements | Y | 20 characters limit in button for Facebook templates <br/><br/>Facebook List template only supports up to four buttons |
| tooltip | Element tooltip on Agent Workspace. <br/>Used also for aira | String | N | 256 characters |
| action | Actions are a list of applicative actions on buttons, that will run on the consumer side and will help them to achieve their operation. <br/>Button action for Facebook Generic template can be set to Publish text, Link or Navigate:<br/>**Link** - Open a URL in a Facebook Messenger webview.<br/>**Navigate**- Will open a webview to a Google map of location<br/>**Publish text** - Send a message on behalf of consumer as a response for a button tap <br/><br/>Review the full list of [Rich Messaging actions](rich-messaging-click-ops.html) | Enum - “publishText”, “link”, “navigate” | N |  |

### Example

```json
{
  "type": "vertical",
  "tag": "list",
  "elements": [
    {
      "type": "vertical",
      "elements": [
        {
          "type": "text",
          "text": "Flowers",
          "tooltip": "text tooltip",
          "style": {
            "bold": true,
            "size": "large"
          }
        },
        {
          "type": "horizontal",
          "elements": [
            {
              "type": "image",
              "url": "https://i.pinimg.com/736x/a0/67/5e/a0675e5161d7ae5be2550987f397a641--flower-shops-paper-flowers.jpg",
              "tooltip": "Flowers"
            },
            {
              "type": "vertical",
              "elements": [
                {
                  "type": "text",
                  "tag": "title",
                  "text": "Spring flowers",
                  "tooltip": "Title",
                  "style": {
                    "bold": true,
                    "size": "large"
                  }
                },
                {
                  "type": "text",
                  "tag": "subtitle",
                  "text": "Medium bouquet",
                  "tooltip": "Black"
                },
                {
                  "type": "button",
                  "tooltip": "Add to cart",
                  "title": "Add to cart",
                  "click": {
                    "actions": [
                      {
                        "type": "publishText",
                        "text": "Spring flowers added"
                      }
                    ],
                    "metadata": [
                      {
                        "type": "ExternalId",
                        "id": "SpringID"
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "horizontal",
          "elements": [
            {
              "type": "image",
              "url": "https://i.pinimg.com/736x/a0/67/5e/a0675e5161d7ae5be2550987f397a641--flower-shops-paper-flowers.jpg",
              "tooltip": "Flowers"
            },
            {
              "type": "vertical",
              "elements": [
                {
                  "type": "text",
                  "tag": "title",
                  "text": "Wild flowers",
                  "tooltip": "Wild flowers",
                  "style": {
                    "bold": true,
                    "size": "large"
                  }
                },
                {
                  "type": "text",
                  "tag": "subtitle",
                  "text": "Medium bouquet",
                  "tooltip": "Medium bouquet"
                },
                {
                  "type": "button",
                  "tooltip": "Add to cart",
                  "title": "Add to cart",
                  "click": {
                    "actions": [
                      {
                        "type": "link",
                        "name": "Wild flowers added",
                        "uri" : "https://www.pinterest.com/lyndawhite/beautiful-flowers/"
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```
