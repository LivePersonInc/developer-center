---
pagename: Card Template
Keywords: structured content rich messaging
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Structured Content
subfoldername: RCS Business Messaging Templates
permalink: structured-content-rcs-business-messaging-templates-card-template.html
indicator: messaging
---

### Overview

The RCS Business Messaging card has 2 layout orientation options:

1. Vertical card
2. Horizontal card 

The vertical card contains the following elements: 

* Title text
* Subtitle text
* Image: image in a vertical card is displayed as a horizontal image at the top of the card with aspect ratio of 2:1, 16:9, or 7:3. 
* Up to 4 buttons (RCS limitation) with the following actions:
    * Link
    * Navigation 
    * Publish text 


The horizontal card contains the following elements: 

* Title text
* Subtitle text
* Image: in a horizontal card a vertical image is displayed at on the left side of the card with aspect ratio of 3:4.
* Up to 4 buttons (RCS limitation) with the following actions:

    * Link
    * Navigation 
    * Publish text 

Horizontal card example image: 

![image alt text](img/google_rcs_structuredcontent_image_2.png)

Vertical card example image: 

![image alt text](img/google_rcs_structuredcontent_image_3.png)

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

If using RCS Cards - type of header element should always be set to "vertical" or “horizontal,” per the wanted user experience.

If using RCS Carousels - type of header element will always be “carousel”</td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>tag</td>
    <td>Tag of layout view, must be “generic” for RCS rich content templates. 

Within basic element objects, will be “title”/”subtitle”, which will indicate what text should be rendered in each of those elements (the title and subtitle have a default style in RCS)</td>
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
    <td>Basic structured content elements style object (for RCS this element will be ignored since style configuration is not supported)</td>
    <td>Style elements </td>
    <td>N</td>
  </tr>
  <tr>
    <td>bold</td>
    <td>Defines if text will be bold or not. Will always be set to ‘true’ in RCS cards and carousels. </td>
    <td>Boolean</td>
    <td>N</td>
  </tr>
  <tr>
    <td>size</td>
    <td>Defines the element size. Will always be set to ‘large’ in RCS cards and carousels.</td>
    <td>Enum - small/medium/large</td>
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
    <td>Actions are a list of applicative user actions on buttons, which will run on the consumer side and will help them to achieve their operation. Button actions for RCS cards and carousels can be set to Publish text, Link or Navigate</td>
    <td>Enum - “publishText”, “link”, “navigate”</td>
    <td>N</td>
  </tr>
</table>

### Code Examples

#### Vertical Card

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
          "tooltip": "Publish text example",
          "title": "Publish text example",
          "click": {
            "actions": [
              {
                "type": "publishText",
                "text": "Published text button tap"
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

#### Horizontal Card

```json
{
  "type": "horizontal",
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
          "tooltip": "Publish text example",
          "title": "Publish text example",
          "click": {
            "actions": [
              {
                "type": "publishText",
                "text": "Published text button tap"
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