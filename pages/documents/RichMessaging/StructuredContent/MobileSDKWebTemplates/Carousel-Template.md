---
pagename: Carousel Template
redirect_from:
  - rich-messaging-structured-content-carousel.html
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Structured Content
subfoldername: Mobile SDK and Web Templates
order: 40
permalink: structured-content-mobile-sdk-and-web-templates-carousel-template.html
indicator: messaging
---

A horizontal representation of 2-10 Structured Content cards of the same business logic and structure. The carousel format can support a variety of businesses and needs to showcase service offerings, events and more.

![Carousel](img/carousel.gif)

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
