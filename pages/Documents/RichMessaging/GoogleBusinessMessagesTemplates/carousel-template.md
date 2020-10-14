---
pagename: Carousel Template
redirect_from:
  - structured-content-google-business-messages-templates-carousel-template.html
Keywords: structured content rich messaging gbm google business messages carousel template
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Google Business Messages Templates
permalink: google-business-messages-templates-carousel-template.html
indicator: messaging
---

### Overview

The Google Business Messages (GBM) carousel is a horizontally scrollable carousel of up to 10 rich cards.

_Examples Of GBM Carousels:_

![GBM Carousel Examples](img/connectors/gbm_carousels.png)

### Carousel Container

The carousel is the container that holds all cards that should be displayed by the connector.

#### Properties

<table>
  <thead>
  <tr>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  </thead>
  <tr>
    <td>type</td>
    <td>Type of the Container.</br>
For carousels, type should always be <b>carousel</b>.</td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>elements</td>
    <td>Array of GBM Rich Cards</br>
      Google allows up to 10 cards in a carousel, and requires at least two cards. All Cards in a carousel must use the same <a href="">display options</a>.
    </td>
    <td>Array(<a href="">RichCard</a>)</td>
    <td>Y</td>
  </tr>
</table>

#### JSON Representation Card

```json
{
  "type": "carousel",
  "elements": [
   RichCard,
   RichCard,
   ...
   Rich Card
  ]
}
```

### Full Template

```json
{
  "type": "carousel",
  "elements": [
    {
      "type": "vertical",
      "tag": "generic",
      "display": {
        "size": "tall"
      },
      "elements": [
        {
          "type": "image",
          "url": "https://d1hryyr5hiabsc.cloudfront.net/web2020/img/resources/rep-great-ai-divide@1x.jpg"
        },
        {
          "type": "text",
          "tag": "title",
          "text": "The great AI divide"
        },
        {
          "type": "text",
          "text": "Consumer attitudes on the gender gap in technology and perceptions of AI's future.\nView the whole article online, or request the content to be sent via text messages."
        },
        {
          "type": "button",
          "title": "View Here",
          "click": {
            "actions": [
              {
                "type": "publishText",
                "text": "view-here-1"
              }
            ]
          }
        },
        {
          "type": "button",
          "title": "View Online",
          "click": {
            "actions": [
              {
                "type": "publishText",
                "text": "viewed-online-1"
              },
              {
                "type": "link",
                "uri": "https://www.liveperson.com/resources/reports/great-ai-divide/"
              }
            ]
          }
        },
        {
          "type": "button",
          "title": "Not interested",
          "click": {
            "actions": [{
              "type": "publishText",
              "text": "stop-showing"
            }]
          }
        },
        {
          "type": "button",
          "title": "View More Reports",
          "click": {
            "actions": [{
              "type": "link",
              "uri": "https://www.liveperson.com/resources/#all"
            }]
          }
        }
      ]
    },
    {
      "type": "vertical",
      "tag": "generic",
      "display": {
        "size": "tall"
      },
      "elements": [
        {
          "type": "image",
          "url": "https://d1hryyr5hiabsc.cloudfront.net/web2020/img/resources/WEB%E2%80%93Simplify-customer-care-with-social%20media-email-messaging%20on%20one%20platform.jpg"
        },
        {
          "type": "text",
          "tag": "title",
          "text": "Introducing: Email and SocialConnect"
        },
        {
          "type": "text",
          "text": "Simplify customer care with social media, email and messaging on one platform.\nView the whole article online, or request the content to be sent via text messages."
        },
        {
          "type": "button",
          "title": "View Here",
          "click": {
            "actions": [
              {
                "type": "publishText",
                "text": "view-here-2"
              }
            ]
          }
        },
        {
          "type": "button",
          "title": "View Online",
          "click": {
            "actions": [
              {
                "type": "publishText",
                "text": "viewed-online-2"
              },
              {
                "type": "link",
                "uri": "https://info.liveperson.com/email-and-social-connect"
              }
            ]
          }
        },
        {
          "type": "button",
          "title": "Not interested",
          "click": {
            "actions": [{
              "type": "publishText",
              "text": "stop-showing"
            }]
          }
        },
        {
          "type": "button",
          "title": "View More Reports",
          "click": {
            "actions": [{
              "type": "link",
              "uri": "https://www.liveperson.com/resources/#all"
            }]
          }
        }
      ]
    }
  ]
}
```
