---
title: List Template
Keywords:
level1:
level2: Rich Messaging
level3: Messaging Connectors Alignment
level4: Facebook
order: 60
permalink: rich-messaging-connectors-fb-list.html
indicator: both
---

Facebook Messenger has full support for list template messages.
List template messages are a vertically scrollable set of items that may each contain text (title and subtitle), an image, and a message button with URL, navigation and publish text actions.

This is a list template example image:

![image alt text](image_5.jpg)

### Example

```JSON
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
