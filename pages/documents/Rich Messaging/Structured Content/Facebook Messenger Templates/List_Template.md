---
pagename: List Template
Keywords: structured content rich messaging
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Structured Content
subfoldername: Facebook Messenger Templates
permalink: structured-content-facebook-messenger-templates-list-template.html
indicator: messaging
---

### Overview

Facebook Messenger has full support for list template messages. 
[List template](https://developers.facebook.com/docs/messenger-platform/send-messages/template/list) messages are a vertically structured, controllable set of up to 4 items (Facebook limitation) that may each contain:

* Text title
* Text subtitle
* Image
* Each item can contain a button with link, navigation or publish text actions.

Below is a list template example image:

![image alt text](img/fb_structuredcontent_image_5.jpg)

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
    <td>Tag of layout view, must be “generic”, “button” or “list” for Facebook templates. Within basic elements objects, will be “title”/”subtitle”, which will indicate what text should rendered in each of those elements (the title and subtitle have default style in Facebook)</td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>elements
</td>
    <td>Array of elements/layouts. By using elements in your structured content template, you can send basic elements, such as simple text, images or buttons	</td>
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
    <td>Basic structured content elements style object</td>
    <td>Style elements </td>
    <td>N</td>
  </tr>
  <tr>
    <td>bold</td>
    <td>Defines if text will be bold or not. Will always be set to ‘true’ in Facebook generic, button or list layouts </td>
    <td>Boolean</td>
    <td>N</td>
  </tr>
  <tr>
    <td>size</td>
    <td>Defines the element size. Will always be set to ‘large’ in Facebook generic, button or list layouts</td>
    <td>Enum - small/medium/large</td>
    <td>N</td>
  </tr>
  <tr>
    <td>button</td>
    <td>Buttons contains click and actions fields that define the type of action set on user click operation </td>
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
    <td>Actions are a list of applicative user actions on buttons, that will run on the consumer side and will help them to achieve their operation. Button action for Facebook generic, button or list layout can be set to Publish text, Link or Navigate</td>
    <td>Enum - “publishText”, “link”, “navigate”</td>
    <td>Y</td>
  </tr>
</table>

### Example Template

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
                  "tooltip": "Review details",
                  "title": "Review details",
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