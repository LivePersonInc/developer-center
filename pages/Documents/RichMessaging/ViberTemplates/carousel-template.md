---
pagename: Carousel Template
redirect_from:
Keywords: structured content rich messaging
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Viber Templates
permalink: viber-templates-carousel-template.html
indicator: messaging
---

### Overview

The Viber carousel is a horizontally scrollable carousel of up to 10 vertical rich cards. Each card can include the following elements:

* Title text
* Subtitle text
* Image (which will be placed above the title, subtitle and buttons) - image is not required to be placed in a card
* Buttons with the following actions:
    * Link
    * Publish text

Note:  When building a Viber carousel card you must keep in mind that each card consists of a total of 7 rows. Each row is an element
of any kind.  This includes the title, subtitle, image, and button elements. As long as you do not go over the 7 row
limitation (Viber limitation) then each card will properly render in the carousel.  Else the carousel will start rendering incorrectly
to the Viber user.

### JSON Template Properties

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
    <td>Types of basic elements supported by Structured Content framework.

If using Viber Cards - type of header element should always be set to "vertical".

If using Viber Carousels - type of header element will always be “carousel”</td>
<td>Enum</td>
<td>Y</td>
  </tr>
  <tr>
    <td>tag</td>
    <td>Tag of template view, must be “generic” for Viber rich content templates.

Within basic element objects, will be “title”/”subtitle”, which will indicate what text should be rendered in each of those elements (the title and subtitle have a default style in Viber)</td>
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
    <td>Basic structured content elements style object (Only applies to text and button elements)</td>
    <td>Style elements </td>
    <td>N</td>
  </tr>
  <tr>
    <td>color</td>
    <td>Defines what the text color of the element will be.</td>
    <td>String</td>
    <td>#000000</td>
  </tr>
  <tr>
    <td>background-color</td>
    <td>Defines what the background color of the element will be. (Only applies to buttons)</td>
    <td>String</td>
    <td>#000000</td>
  </tr>
  <tr>
    <td>button</td>
    <td>Buttons contain click and action properties that define the type of action set on user click operation </td>
    <td>Object </td>
    <td>N</td>
  </tr>
  <tr>
    <td>click</td>
    <td>Click objects contain the action type set on the click operation for each button</td>
    <td>Object</td>
    <td>N</td>
  </tr>
  <tr>
    <td>action</td>
    <td>Actions are a list of applicative user actions on buttons, which will run on the consumer side and will help them to achieve their operation. Button actions for Viber cards and carousels can be set to Publish text or Link</td>
    <td>Enum - “publishText”, “link”, “navigate”</td>
    <td>N</td>
  </tr>
</table>

### Carousel template code example

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
                    "tooltip": "Title",
                    "style": {
                      "color": "#FFFFFF"
                    }
                }, {
                    "type": "text",
                    "tag": "subtitle",
                    "text": "subtitle",
                    "tooltip": "subtitle"
                }, {
                    "type": "button",
                    "tooltip": "Add to cart",
                    "title": "Add to cart",
                    "style": {
                      "color": "#FFFFFF",
                      "background-color": "#000000"
                    },
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
