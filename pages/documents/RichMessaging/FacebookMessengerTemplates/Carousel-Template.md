---
pagename: Carousel Template
redirect_from: 
  - structured-content-facebook-messenger-templates-carousel-template.html
Keywords: structured content rich messaging
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Facebook Messenger Templates
permalink: facebook-messenger-templates-carousel-template.html
indicator: messaging
---

### Overview

The [Carousel template](https://developers.facebook.com/docs/messenger-platform/send-messages/template/generic#carousel) is a horizontally scrollable carousel of generic or button templates.

The carousel includes a list of up to 10 generic or button cards that each can include:

* text title
* text subtitle
* image
* Up to 3 buttons (Facebook limitation) with either link, publish text or navigation button actions

*Carousel example with all button actions, including a link button and navigation button tap view:*

![image alt text](img/fb_structuredcontent_image_6.png)

### Template Properties

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
    <td>Types of basic elements supported by Structured Content framework. Can be "text", “image” or “button”.
If using Carousel, type of header element will always be “carousel”</td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>tag</td>
    <td>Tag of template view, must be “generic”, “button” or “list” for Facebook templates. Within basic elements objects, will be “title”/”subtitle”, which will indicate what text should rendered in each of those elements (the title and subtitle have default style in Facebook)</td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>elements
</td>
    <td>Array of elements/templates. By using elements in your structured content template, you can send basic elements, such as simple text, images or buttons	</td>
    <td>Elements/Templates</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>text</td>
    <td>The message text in a “text” type element</td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>tooltip</td>
    <td>Element tooltip. Used also for aira</td>
    <td>String</td>
    <td>N</td>
  </tr>
  <tr>
    <td>url</td>
    <td>Image URL in a “image” type element</td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>style</td>
    <td>Basic structured content elements style object</td>
    <td>Style elements </td>
    <td>N</td>
  </tr>
  <tr>
    <td>bold</td>
    <td>Defines if text will be bold or not. Will always be set to ‘true’ in Facebook generic, button or list templates </td>
    <td>Boolean</td>
    <td>N</td>
  </tr>
  <tr>
    <td>size</td>
    <td>Defines the element size. Will always be set to ‘large’ in Facebook generic, button or list templates</td>
    <td>Enum - small/medium/large</td>
    <td>N</td>
  </tr>
  <tr>
    <td>button</td>
    <td>Buttons contains click and actions properties that define the type of action set on user click operation </td>
    <td>Object </td>
    <td>Y</td>
  </tr>
  <tr>
    <td>click</td>
    <td>Click object contains the action type set on the click operation for each button</td>
    <td>Object</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>action</td>
    <td>Actions are a list of applicative user actions on buttons, that will run on the consumer side and will help them to achieve their operation. Button action for Facebook generic, button or list template can be set to Publish text, Link or Navigate</td>
    <td>Enum - “publishText”, “link”, “navigate”</td>
    <td>Y</td>
  </tr>
</table>

### Example Template

```json
{
    "type": "carousel",
    "padding": 10,
    "elements": [{
            "type": "vertical",
            "tag": "generic",
            "elements": [{
                "type": "vertical",
                "elements": [{
                    "type": "image",
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_w8UO-QDbk2S2ZLuiuePHB7j6Qb86DLsjwddhp_yq4WaL_LL",
                    "tooltip": "Flowers"
                }, {
                    "type": "text",
                    "tag": "title",
                    "text": "Title",
                    "tooltip": "Title"
                }, {
                    "type": "text",
                    "tag": "subtitle",
                    "text": "subtitle",
                    "tooltip": "subtitle"
                }, {
                    "type": "button",
                    "tooltip": "Add to cart",
                    "title": "Add to cart",
                    "click": {
                        "actions": [{
                            "type": "publishText",
                            "text": "Add to cart pressed"
                        }]
                    }
                }, {
                    "type": "button",
                    "tooltip": "Add to cart",
                    "title": "Add to cart",
                    "click": {
                        "actions": [{
                            "type": "link",
                            "name": "Flowers",
                            "uri": "https://www.pinterest.com/lyndawhite/beautiful-flowers/"
                        }]
                    }
                }]
            }]
        },
        {
            "type": "vertical",
            "tag": "generic",
            "elements": [{
                "type": "vertical",
                "elements": [{
                    "type": "image",
                    "url": "https://i.pinimg.com/736x/cf/05/dc/cf05dc6becf9d387707597a788250a1c--blue-bridal-bouquets-bridal-flowers.jpg",
                    "tooltip": "Flowers"
                }, {
                    "type": "text",
                    "tag": "title",
                    "text": "Title",
                    "tooltip": "Title"
                }, {
                    "type": "text",
                    "tag": "subtitle",
                    "text": "subtitle",
                    "tooltip": "subtitle"
                }, {
                    "type": "button",
                    "tooltip": "Add to cart",
                    "title": "Add to cart",
                    "click": {
                        "actions": [{
                            "type": "publishText",
                            "text": "Add to cart pressed"
                        }]
                    }
                }, {
                    "type": "button",
                    "tooltip": "Add to cart",
                    "title": "Add to cart",
                    "click": {
                        "actions": [{
                            "type": "link",
                            "name": "Flowers",
                            "uri": "https://www.pinterest.com/lyndawhite/beautiful-flowers/"
                        }]
                    }
                }]
            }]
        },
        {
            "type": "vertical",
            "tag": "generic",
            "elements": [{
                "type": "vertical",
                "elements": [{
                    "type": "image",
                    "url": "https://i.pinimg.com/736x/27/9a/d7/279ad7bfd3fe7ee87638a5ce064d25a5---year-old-girl-cut-flowers.jpg",
                    "tooltip": "Flowers"
                }, {
                    "type": "text",
                    "tag": "title",
                    "text": "Title",
                    "tooltip": "Title"
                }, {
                    "type": "text",
                    "tag": "subtitle",
                    "text": "subtitle",
                    "tooltip": "subtitle"
                }, {
                    "type": "button",
                    "tooltip": "Add to cart",
                    "title": "Add to cart",
                    "click": {
                        "actions": [{
                            "type": "publishText",
                            "text": "Add to cart pressed"
                        }]
                    }
                }, {
                    "type": "button",
                    "tooltip": "Add to cart",
                    "title": "Add to cart",
                    "click": {
                        "actions": [{
                            "type": "link",
                            "name": "Flowers",
                            "uri": "https://www.pinterest.com/lyndawhite/beautiful-flowers/"
                        }]
                    }
                }]
            }]
        },
        {
            "type": "vertical",
            "tag": "generic",
            "elements": [{
                "type": "vertical",
                "elements": [{
                    "type": "image",
                    "url": "https://i.pinimg.com/736x/06/dc/b3/06dcb32c02c30a035b189ad267674f1c--pink-bouquet-floral-bouquets.jpg",
                    "tooltip": "Flowers"
                }, {
                    "type": "text",
                    "tag": "title",
                    "text": "Title",
                    "tooltip": "Title"
                }, {
                    "type": "text",
                    "tag": "subtitle",
                    "text": "subtitle",
                    "tooltip": "subtitle"
                }, {
                    "type": "button",
                    "tooltip": "Add to cart",
                    "title": "Add to cart",
                    "click": {
                        "actions": [{
                            "type": "publishText",
                            "text": "Add to cart pressed"
                        }]
                    }
                }, {
                    "type": "button",
                    "tooltip": "Add to cart",
                    "title": "Add to cart",
                    "click": {
                        "actions": [{
                            "type": "link",
                            "name": "Flowers",
                            "uri": "https://www.pinterest.com/lyndawhite/beautiful-flowers/"
                        }]
                    }
                }]
            }]
        },
        {
            "type": "vertical",
            "tag": "generic",
            "elements": [{
                "type": "vertical",
                "elements": [{
                    "type": "image",
                    "url": "https://i.pinimg.com/736x/a8/28/26/a8282621d4fe30717de5fab28975b7a3--pink-peonies-pink-flowers.jpg",
                    "tooltip": "Flowers"
                }, {
                    "type": "text",
                    "tag": "title",
                    "text": "Title",
                    "tooltip": "Title"
                }, {
                    "type": "text",
                    "tag": "subtitle",
                    "text": "subtitle",
                    "tooltip": "subtitle"
                }, {
                    "type": "button",
                    "tooltip": "Add to cart",
                    "title": "Add to cart",
                    "click": {
                        "actions": [{
                            "type": "publishText",
                            "text": "Add to cart pressed"
                        }]
                    }
                }, {
                    "type": "button",
                    "tooltip": "Add to cart",
                    "title": "Add to cart",
                    "click": {
                        "actions": [{
                            "type": "link",
                            "name": "Flowers",
                            "uri": "https://www.pinterest.com/lyndawhite/beautiful-flowers/"
                        }]
                    }
                }]
            }]
        }
    ]
}
```
