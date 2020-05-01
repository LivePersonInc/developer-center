---
pagename: Card Template
redirect_from:
Keywords: structured content rich messaging
sitesection: Documents
categoryname: "Rich Messaging"
documentname: LINE Templates
permalink: line-templates-card-template.html
indicator: messaging
---

### Overview

Use LINE cards to send a message with an image, title, text and multiple buttons with actions. 

The card contains the following elements: 
* Title text
* Subtitle text
* Image
* Up to 3 buttons (LINE limitation) with the following actions:
    * Link
    * Publish text 

LINE card example: 

<img  style="width:350px" src="img/line_sc_card.jpg">

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

If using LINE Cards - type of header element should always be set to "vertical".

If using LINE Carousels - type of header element will always be “carousel”</td>
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
 <td>Defines if text will be bold or not. The texts have a default style in LINE and will not be affected by this field.</td>
 <td>Boolean</td>
 <td>N</td>
 </tr>
 <tr>
 <td>size</td>
 <td>Defines the size of the  texts of the title and subtitles. In LINE, the texts have a default style and will not be affected by this field.</td>
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
 <td>Actions are a list of applicative user actions on buttons, which will run on the consumer side and will help them to achieve their operation. Button actions for LINE cards and carousels can be set to Publish text or Link</td>
 <td>Enum - “publishText”, “link”</td>
 <td>N</td>
 </tr>
 </tbody>
</table>

### Code Example

```json
{
  "type": "vertical",
  "tag": "generic",
  "alt": "these are on sale!",
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
          "text": "An eye-catching birthday flower delivery, hand-delivered by?",
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
          "tooltip": "postback example",
          "title": "postback example",
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
        }
      ]
    }
  ]
}
```
