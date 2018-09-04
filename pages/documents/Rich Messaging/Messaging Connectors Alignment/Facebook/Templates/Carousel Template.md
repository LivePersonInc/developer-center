---
title: Carousel Template
Keywords:
level1: Documents
level2: Rich Messaging
level3: Facebook Messenger Templates
level4: Templates
order: 50
permalink: rich-messaging-connectors-fb-carousel.html
indicator: messaging
---

The [Carousel template](https://developers.facebook.com/docs/messenger-platform/send-messages/template/generic#carousel)  is a horizontally scrollable carousel of [generic](rich-messaging-connectors-fb-generic.html) or [button](rich-messaging-connectors-fb-button.html) templates.

Brands are able to share the carousel template through [Rich Messaging Basic Elements](rich-messaging-getting-started.html), while using the [Rich Messaging Carousel](rich-messaging-structured-content-carousel.html) JSON properties.

Below is a list template example image:

![Facebook Carousel Template](images/fb-carousel.PNG)

### Example

```json
{
  "type": "carousel",
  "padding": 10,
  "elements": [
    {
      "type": "vertical",
      "tag": "generic",
      "elements": [
        {
          "type": "vertical",
          "elements": [
            {
              "type": "image",
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_w8UO-QDbk2S2ZLuiuePHB7j6Qb86DLsjwddhp_yq4WaL_LL",
              "tooltip": "Flowers"
            },
            {
              "type": "text",
              "tag": "title",
              "text": "Title",
              "tooltip": "Title"
            },
            {
              "type": "text",
              "tag": "subtitle",
              "text": "subtitle",
              "tooltip": "subtitle"
            },
            {
              "type": "button",
              "tooltip": "Add to cart",
              "title": "Add to cart",
              "click": {
                "actions": [
                  {
                    "type": "publishText",
                    "text": "Add to cart pressed"
                  }
                ]
              }
            },
            {
              "type": "button",
              "tooltip": "Add to cart",
              "title": "Add to cart",
              "click": {
                "actions": [
                  {
                    "type": "link",
                    "name": "Flowers",
                    "uri": "https://www.pinterest.com/lyndawhite/beautiful-flowers/"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "type": "vertical",
      "tag": "generic",
      "elements": [
        {
          "type": "vertical",
          "elements": [
            {
              "type": "image",
              "url": "https://i.pinimg.com/736x/cf/05/dc/cf05dc6becf9d387707597a788250a1c--blue-bridal-bouquets-bridal-flowers.jpg",
              "tooltip": "Flowers"
            },
            {
              "type": "text",
              "tag": "title",
              "text": "Title",
              "tooltip": "Title"
            },
            {
              "type": "text",
              "tag": "subtitle",
              "text": "subtitle",
              "tooltip": "subtitle"
            },
            {
              "type": "button",
              "tooltip": "Add to cart",
              "title": "Add to cart",
              "click": {
                "actions": [
                  {
                    "type": "publishText",
                    "text": "Add to cart pressed"
                  }
                ]
              }
            },
            {
              "type": "button",
              "tooltip": "Add to cart",
              "title": "Add to cart",
              "click": {
                "actions": [
                  {
                    "type": "link",
                    "name": "Flowers",
                    "uri": "https://www.pinterest.com/lyndawhite/beautiful-flowers/"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "type": "vertical",
      "tag": "generic",
      "elements": [
        {
          "type": "vertical",
          "elements": [
            {
              "type": "image",
              "url": "https://i.pinimg.com/736x/27/9a/d7/279ad7bfd3fe7ee87638a5ce064d25a5---year-old-girl-cut-flowers.jpg",
              "tooltip": "Flowers"
            },
            {
              "type": "text",
              "tag": "title",
              "text": "Title",
              "tooltip": "Title"
            },
            {
              "type": "text",
              "tag": "subtitle",
              "text": "subtitle",
              "tooltip": "subtitle"
            },
            {
              "type": "button",
              "tooltip": "Add to cart",
              "title": "Add to cart",
              "click": {
                "actions": [
                  {
                    "type": "publishText",
                    "text": "Add to cart pressed"
                  }
                ]
              }
            },
            {
              "type": "button",
              "tooltip": "Add to cart",
              "title": "Add to cart",
              "click": {
                "actions": [
                  {
                    "type": "link",
                    "name": "Flowers",
                    "uri": "https://www.pinterest.com/lyndawhite/beautiful-flowers/"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "type": "vertical",
      "tag": "generic",
      "elements": [
        {
          "type": "vertical",
          "elements": [
            {
              "type": "image",
              "url": "https://i.pinimg.com/736x/06/dc/b3/06dcb32c02c30a035b189ad267674f1c--pink-bouquet-floral-bouquets.jpg",
              "tooltip": "Flowers"
            },
            {
              "type": "text",
              "tag": "title",
              "text": "Title",
              "tooltip": "Title"
            },
            {
              "type": "text",
              "tag": "subtitle",
              "text": "subtitle",
              "tooltip": "subtitle"
            },
            {
              "type": "button",
              "tooltip": "Add to cart",
              "title": "Add to cart",
              "click": {
                "actions": [
                  {
                    "type": "publishText",
                    "text": "Add to cart pressed"
                  }
                ]
              }
            },
            {
              "type": "button",
              "tooltip": "Add to cart",
              "title": "Add to cart",
              "click": {
                "actions": [
                  {
                    "type": "link",
                    "name": "Flowers",
                    "uri": "https://www.pinterest.com/lyndawhite/beautiful-flowers/"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "type": "vertical",
      "tag": "generic",
      "elements": [
        {
          "type": "vertical",
          "elements": [
            {
              "type": "image",
              "url": "https://i.pinimg.com/736x/a8/28/26/a8282621d4fe30717de5fab28975b7a3--pink-peonies-pink-flowers.jpg",
              "tooltip": "Flowers"
            },
            {
              "type": "text",
              "tag": "title",
              "text": "Title",
              "tooltip": "Title"
            },
            {
              "type": "text",
              "tag": "subtitle",
              "text": "subtitle",
              "tooltip": "subtitle"
            },
            {
              "type": "button",
              "tooltip": "Add to cart",
              "title": "Add to cart",
              "click": {
                "actions": [
                  {
                    "type": "publishText",
                    "text": "Add to cart pressed"
                  }
                ]
              }
            },
            {
              "type": "button",
              "tooltip": "Add to cart",
              "title": "Add to cart",
              "click": {
                "actions": [
                  {
                    "type": "link",
                    "name": "Flowers",
                    "uri": "https://www.pinterest.com/lyndawhite/beautiful-flowers/"
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
```
