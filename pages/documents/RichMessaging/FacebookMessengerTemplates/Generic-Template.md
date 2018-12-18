---
pagename: Generic Template
redirect_from: 
  - structured-content-facebook-messenger-templates-generic-template.html
Keywords: structured content rich messaging
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Facebook Messenger Templates
permalink: facebook-messenger-templates-generic-template.html
indicator: messaging
---

### Overview

The [Generic template](https://developers.facebook.com/docs/messenger-platform/send-messages/template/generic) is a simple structured card message that includes:

* text title
* text subtitle
* image
* Up to 3 buttons (Facebook limitation) with either link, publish text or navigation button actions

*Generic example images with all button actions, including a link button and navigation button tap view:*

![image alt text](img/fb_structuredcontent_image_0.jpg)
![image alt text](img/fb_structuredcontent_image_1.jpg)
![image alt text](img/fb_structuredcontent_image_2.jpg)

*Agent side experience:*

![image alt text](img/fb_structuredcontent_image_3.png)

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
  "type": "vertical",
  "tag": "generic",
  "elements": [
    {
      "type": "vertical",
      "elements": [
        {
          "type": "image",
          "url": "https://i.pinimg.com/736x/a0/67/5e/a0675e5161d7ae5be2550987f397a641--flower-shops-paper-flowers.jpg",
          "tooltip": "Flowers"
        },
        {
          "type": "text",
          "tag": "title",
          "text": "Birthday Bouquet",
          "tooltip": "Title"
        },
        {
          "type": "text",
          "tag": "subtitle",
          "text": "Wild flowers",
          "tooltip": "subtitle"
        },
        {
          "type": "button",
          "tooltip": "publish text example",
          "title": "publish text example",
          "click": {
            "actions": [
              {
                "type": "publishText",
                "text": "published text button tap"
              }
            ]
          }
        },
        {
          "type": "button",
          "tooltip": "URL button example",
          "title": "URL button example",
          "click": {
            "actions": [
              {
                "type": "link",
                "name": "URL button tap",
                "uri": "https://www.pinterest.com/lyndawhite/beautiful-flowers/"
              }
            ]
          }
        },
        {
          "type": "button",
          "title": "Navigate",
          "click": {
               "actions": [
              {
                "type": "navigate",
                "lo": 40.7562,
                "la": -73.99861
              }
            ]
          }
        }
      ]
    }]}
```
