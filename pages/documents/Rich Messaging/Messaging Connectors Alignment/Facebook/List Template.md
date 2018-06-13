---
title: List Template
Keywords:
level1: Documents
level2: Rich Messaging
level3: Messaging Connectors Alignment
level4: Facebook
order: 40
permalink: rich-messaging-connectors-fb-list.html
indicator: both
---

Facebook Messenger has full support for list template messages.
[List template](https://developers.facebook.com/docs/messenger-platform/send-messages/template/list) messages are a vertically structured contentrollable set of up to four items (Facebook limitation) that may each contain:
* Text title
* Text subtitle
* Image
* Each item can contain a button with link, navigation or publish text actions.

Below is a list template example image:

![Facebook List](images/fb-list.PNG)

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
