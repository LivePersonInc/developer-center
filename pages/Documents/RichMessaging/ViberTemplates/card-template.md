---
pagename: Card Template
redirect_from:
Keywords: structured content rich messaging
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Viber Templates
permalink: viber-templates-card-template.html
indicator: messaging
---

### Overview

The Viber card has 1 template orientation options:

1. Vertical card

The vertical card contains the following elements:

* Title text
* Subtitle text
* Image: image in a vertical card is displayed as a horizontal image at the top of the card with aspect ratio of 2:1, 16:9, or 7:3.
* Buttons with the following actions:
  * Link
  * Publish text
    
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
    <td>Basic structured content elements style object. (Only applies to text and button elements)</td>
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
    <td>Enum - “publishText”, “link”</td>
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
          "tooltip": "Title",
          "style": {
            "color": "#FFFFFF"
          }
        },
        {
          "type": "text",
          "tag": "subtitle",
          "text": "Wild flowers",
          "tooltip": "subtitle",
          "style": {
            "color": "#000000"
          }
        },
        {
          "type": "button",
          "tooltip": "Publish text example",
          "title": "Publish text example",
          "style": {
            "color": "#FFFFFF",
            "background-color": "#000000"
          },
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
        }
      ]
    }]}
```
