---
pagename: Carousel Template
redirect_from:
Keywords: structured content rich messaging
sitesection: Documents
categoryname: "Rich Messaging"
documentname: LINE Templates
permalink: line-templates-carousel-template.html
indicator: messaging
---

### Overview

The LINE carousel is a horizontally scrollable carousel of up to 10 rich cards. Each card can include the following elements:

* Title text
* Subtitle text
* Image (which will be placed above the title, subtitle and buttons) - image is not required to be placed in a LINE card
* Up to 3 buttons (LINE limitation) with the following actions:
  * Link
  * Publish text

Note that each carousel card must contain the same number of elements.

Carousel example image:

<img  style="width:350px" src="img/line_sc_carousel.jpg" alt="">

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
 <tbody>
 <tr>
 <td>type</td>
 <td>Types of basic elements supported by Structured Content framework.

If using LINE Cards — type of header element should always be set to "vertical".

If using LINE Carousels — type of header element will always be “carousel”</td>
 <td>Enum</td>
 <td>Y</td>
 </tr>
 <tr>
 <td>alt</td>
 <td>Alternative text. Will be shown when the rich message is viewed in a push message.
Max: 400 characters</td>
 <td>String</td>
 <td>Y</td>
 </tr>
 <tr>
 <td>tag</td>
 <td>Tag of layout view, must be “generic” for LINE rich content templates.

Within basic element objects, will be “title”/”subtitle”, which will indicate what text should be rendered in each of those elements (the title and subtitle have a default style in LINE). </td>
 <td>Enum</td>
 <td>Y</td>
 </tr>
 <tr>
 <td>elements
</td>
 <td>Array of elements/layouts. By using elements in your structured content template, you can send basic elements, such as simple text, images or buttons </td>
 <td>Elements/Layouts</td>
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
 <td>Basic structured content elements style object (for RCS this element will be ignored since style configuration is not supported)</td>
 <td>Style elements </td>
 <td>N</td>
 </tr>
 <tr>
 <td>bold</td>
 <td>Defines if text will be bold or not. The texts have a default style in LINE and will not be affected by this field.</td>
 <td>Boolean</td>
 <td>N</td>
 </tr>
 <tr>
 <td>size</td>
 <td>Defines the size of the  texts of the title and subtitles. In LINE, the texts have a default style and will not be affected by this field.</td>
 <td>Enum — small/medium/large</td>
 <td>N</td>
 </tr>
 <tr>
 <td>button</td>
 <td>Buttons contain click and action fields that define the type of action set on user click operation </td>
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
 <td>Actions are a list of applicative user actions on buttons, which will run on the consumer side and will help them to achieve their operation. Button actions for LINE cards and carousels can be set to Publish text or Link</td>
 <td>Enum - “publishText”, “link”</td>
 <td>N</td>
 </tr>
 </tbody>
</table>

### Code Example

```json
{
  "type": "carousel",
  "padding": 10,
  "alt": "Check these out!",
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
              "url": "https://i.pinimg.com/736x/27/9a/d7/279ad7bfd3fe7ee87638a5ce064d25a5---year-old-girl-cut-flowers.jpg",
              "tooltip": "Flowers"
            },
            {
              "type": "text",
              "tag": "title",
              "text": "Birthday Bouquet",
              "tooltip": "Birthday Bouquet"
            },
            {
              "type": "text",
              "tag": "subtitle",
              "text": "An eye-catching birthday flower delivery, hand-delivered by?",
              "tooltip": "An eye-catching birthday flower delivery, hand-delivered by?"
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
              "text": "Birthday Bouquet",
              "tooltip": "Birthday Bouquet"
            },
            {
              "type": "text",
              "tag": "subtitle",
              "text": "An eye-catching birthday flower delivery, hand-delivered by?",
              "tooltip": "An eye-catching birthday flower delivery, hand-delivered by?"
            },
            {
              "type": "button",
              "tooltip": "Postback",
              "title": "Postback",
              "click": {
                "metadata": [
                  {
                    "type": "ExternalId",
                    "id": "456"
                  }
                ],
                "actions": [
                  {
                    "type": "publishText",
                    "text": "postback button tapped"
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
              "text": "Birthday Bouquet",
              "tooltip": "Birthday Bouquet"
            },
            {
              "type": "text",
              "tag": "subtitle",
              "text": "An eye-catching birthday flower delivery, hand-delivered by?",
              "tooltip": "An eye-catching birthday flower delivery, hand-delivered by?"
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
              "text": "Birthday Bouquet",
              "tooltip": "Birthday Bouquet"
            },
            {
              "type": "text",
              "tag": "subtitle",
              "text": "An eye-catching birthday flower delivery, hand-delivered by?",
              "tooltip": "An eye-catching birthday flower delivery, hand-delivered by?"
            },
            {
              "type": "button",
              "tooltip": "Postback",
              "title": "Postback",
              "click": {
                "metadata": [
                  {
                    "type": "ExternalId",
                    "id": "890"
                  }
                ],
                "actions": [
                  {
                    "type": "publishText",
                    "text": "postback button tapped"
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
              "text": "Birthday Bouquet",
              "tooltip": "Birthday Bouquet"
            },
            {
              "type": "text",
              "tag": "subtitle",
              "text": "An eye-catching birthday flower delivery, hand-delivered by?",
              "tooltip": "An eye-catching birthday flower delivery, hand-delivered by?"
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
