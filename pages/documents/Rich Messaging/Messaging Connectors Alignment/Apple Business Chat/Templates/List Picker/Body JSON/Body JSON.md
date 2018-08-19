---
title: Basic Layout Body
Keywords:
sitesection: Documents
level2: Rich Messaging
level3: Apple Business Chat Templates
level4: List Picker
level5: Basic Layout Body
order: 50
permalink: rich-messaging-connectors-abc-listpicker-body.html
indicator: messaging
---

The List Picker Body JSON is based on [this JSON template](rich-messaging-connectors-abc-listpicker-layout.html#body-json-template).

### List Picker Body JSON Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of the element. <br/> Must be “vertical” | string | Y |  |
| tag | Must be “list” | String | Y |  |
| elements | List of Time Picker elements  | Elements | Y |  |

View the [List Picker Header](rich-messaging-connectors-abc-listpicker-body-header.html) and [List Picker Item](rich-messaging-connectors-abc-listpicker-body-item.html) sections for details on how to construct the List Picker Body JSON.

### List Picker Body JSON Example

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
              "url": "https://i.pinimg.com/736x/60/38/93/603893c655392b2c623a516f0a8c014c--wildflower-bouquet-dahlia-bouquet.jpg",
              "tooltip": "Spring flowers"
            },
            {
              "type": "vertical",
              "elements": [
                {
                  "type": "text",
                  "tag": "title",
                  "text": "Spring bouquet",
                  "tooltip": "Spring bouquet",
                  "style": {
                    "bold": true,
                    "size": "large"
                  }
                },
                {
                  "type": "text",
                  "tag": "subtitle",
                  "text": "Wild flowers",
                  "tooltip": "Wild flowers"
                },
                {
                  "type": "button",
                  "tooltip": "Add to cart",
                  "title": "Add to cart",
                  "click": {
                    "actions": [
                      {
                        "type": "publishText",
                        "text": "Spring bouquet"
                      }
                    ],
                    "metadata": [
                      {
                        "type": "ExternalId",
                        "id": "Spring bouquet"
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
              "url": "http://www.gamttep.com/wp-content/uploads/2017/03/wedding-bouquets-flowers-pleasant-design-ideas-13-1000-ideas-about-on-pinterest.jpg",
              "tooltip": "Spring flowers"
            },
            {
              "type": "vertical",
              "elements": [
                {
                  "type": "text",
                  "tag": "title",
                  "text": "Bday flowers",
                  "tooltip": "Bday flowers",
                  "style": {
                    "bold": true,
                    "size": "large"
                  }
                },
                {
                  "type": "text",
                  "tag": "subtitle",
                  "text": "Mix flowers",
                  "tooltip": "Mix flowers"
                },
                {
                  "type": "button",
                  "tooltip": "Add to cart",
                  "title": "Add to cart",
                  "click": {
                    "actions": [
                      {
                        "type": "publishText",
                        "text": "published text button tap"
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
