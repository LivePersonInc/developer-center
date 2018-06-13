---
title: Carousel
Keywords:
level1: Documents
level2: Rich Messaging
level3: Structured Content
level4: Templates
order: 40
permalink: rich-messaging-structured-content-carousel.html
indicator: both
---

A horizontal representation of 2-10 Structured Content cards of the same business logic and structure.
The carousel format can support a variety of businesses and needs to showcase service offerings, events and more.

![carousel](images/carousel.jpg)

### Limitations

### Best Practices

Use a carousel when there's a priority order to your content, i.e., the first item is probably the most interesting.

Strive for consistency. If one card has an image, include an image in all of them.

Don't mix types of content. If you include an article next to a list of products, your experience could cause confusion.

Don't use a carousel when it's important that people see everything in the list. They may not scroll to the end. Consider a List Template instead.

### Example

```json
{
  "type": "carousel",
  "padding": 10,
  "elements": [
    {
      "type": "vertical",
      "elements": [
        {
          "type": "image",
          "url": "https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png",
          "tooltip": "SIM only plan",
          "click": {
            "metadata": [
              {
                "type": "ExternalId",
                "id": "11114444"
              }
            ]
          }
        },
        {
          "type": "text",
          "text": "Small plan 2 GB data ",
          "tooltip": "Small plan",
          "rtl": false,
          "style": {
            "bold": true,
            "italic": false,
            "color": "#000000"
          }
        },
        {
          "type": "text",
          "text": "500$ national talk",
          "tooltip": "500$",
          "rtl": false,
          "style": {
            "bold": true,
            "italic": false,
            "color": "#000000"
          }
        },
        {
          "type": "text",
          "text": "49$ per month",
          "tooltip": "49$",
          "rtl": false,
          "style": {
            "bold": true,
            "italic": true,
            "color": "#000000"
          }
        },
        {
          "type": "button",
          "tooltip": "Choose a plan",
          "title": "Choose a plan",
          "click": {
            "actions": [
              {
                "type": "link",
                "name": "Add to cart",
                "uri": "http://www.google.com"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "vertical",
      "elements": [
        {
          "type": "image",
          "url": "https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/CF63C36C-CF8E-4AA5-9376-BC89EDAE43B7.png",
          "tooltip": "Swap plan",
          "click": {
            "metadata": [
              {
                "type": "ExternalId",
                "id": "11114444"
              }
            ]
          }
        },
        {
          "type": "text",
          "text": "Medium plan 15GB data",
          "tooltip": "Medium plan",
          "rtl": false,
          "style": {
            "bold": true,
            "italic": false,
            "color": "#000000"
          }
        },
        {
          "type": "text",
          "text": "Unlimited national talk",
          "tooltip": "Unlimited",
          "rtl": false,
          "style": {
            "bold": true,
            "italic": false,
            "color": "#000000"
          }
        },
        {
          "type": "text",
          "text": "69$ per month",
          "tooltip": "Unlimited",
          "rtl": false,
          "style": {
            "bold": true,
            "italic": false,
            "color": "#000000"
          }
        },
        {
          "type": "button",
          "tooltip": "Buy now",
          "title": "Buy now",
          "click": {
            "actions": [
              {
                "type": "link",
                "name": "Add to cart",
                "uri": "http://www.google.com"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "vertical",
      "elements": [
        {
          "type": "image",
          "url": "https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/D767223B-CC51-431A-A26E-B54C39EA7846.png",
          "tooltip": "Large plan",
          "click": {
            "metadata": [
              {
                "type": "ExternalId",
                "id": "11114444"
              }
            ]
          }
        },
        {
          "type": "text",
          "text": "Large plan 20GB data",
          "tooltip": "Large plan",
          "rtl": false,
          "style": {
            "bold": true,
            "italic": false,
            "color": "#000000"
          }
        },
        {
          "type": "text",
          "text": "unlimited international talk",
          "tooltip": "unlimited international",
          "rtl": false,
          "style": {
            "bold": true,
            "italic": false,
            "color": "#000000"
          }
        },
        {
          "type": "button",
          "tooltip": "Choose a plan",
          "title": "Choose a plan",
          "click": {
            "actions": [
              {
                "type": "link",
                "name": "Add to cart",
                "uri": "http://www.google.com"
              }
            ]
          }
        }
      ]
    }
  ]
}
```
