---
pagename: Card
redirect_from:
  - rich-messaging-structured-content-card.html
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Structured Content
subfoldername: Templates
order: 30
permalink: structured-content-templates-card.html
indicator: both
---

The very basic structured content elements that can contain either/or elements, layout, styling and actions.

![Card](img/card.png)

### Examples

#### Simple Card (Image + Text)

```json
 {
    	"type": "vertical",
    	"elements": [{
    		"type": "image",
    		"url": "https://cdn.bgr.com/2016/08/iphone-8-concept.jpg",
    		"tooltip": "image tooltip"
    	}, {
    		"type": "text",
    		"text": "product name (Title)",
    		"tooltip": "product name (Title)"
    	}, {
    		"type": "text",
    		"text": "product category (type)",
    		"tooltip": "product category (type)"
    	}, {
    		"type": "text",
    		"text": "$155.99",
    		"tooltip": "$155.99"
    	}]
    }
```

#### Multiple Actions Card

```json
{
  "type": "vertical",
  "elements": [
    {
      "type": "image",
      "url": "https://cdn.bgr.com/2016/08/iphone-8-concept.jpgl",
      "tooltip": "image tooltip"
    },
    {
      "type": "text",
      "text": "product name (Title)",
      "tooltip": "text tooltip"
    },
    {
      "type": "text",
      "text": "product category (type)",
      "tooltip": "text tooltip"
    },
    {
      "type": "text",
      "text": "$155.99",
      "tooltip": "text tooltip"
    },
    {
      "type": "button",
      "title": "Add to cart",
      "click": {
        "metadata": [
          {
            "type": "ExternalId",
            "id": "12345678"
          }
        ],
        "actions": [
          {
            "type": "publishText",
            "text": "consumer text"
          },
          {
            "type": "link",
            "uri" : "https://www.google.com"
          }
        ]
      }
    },
    {
      "type": "button",
      "title": "Navigate to store",
      "click": {
        "metadata": [
          {
            "type": "ExternalId",
            "id": "12345678"
          }
        ],
        "actions": [
          {
            "type": "navigate",
            "la": 40.75620,
            "lo": -73.99861
          },
          {
            "type": "publishText",
            "text": "consumer text"
          }
        ]
      }
    },
    {
      "type": "button",
      "title": "Navigate",
      "click": {
        "metadata": [
          {
            "type": "ExternalId",
            "id": "12345678"
          }
        ],
        "actions": [
          {
            "type": "navigate",
            "lo": 40.75620,
            "la": -73.99861
          },
          {
            "type": "publishText",
            "text": "consumer text"
          }
        ]
      }
    }
  ]
}
```
