---
pagename: Button Template
redirect_from:
  - structured-content-facebook-messenger-templates-button-template.html
Keywords: structured content rich messaging
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Facebook Messenger Templates
permalink: facebook-messenger-templates-button-template.html
indicator: messaging
---

### Overview

The [Button template](https://developers.facebook.com/docs/messenger-platform/send-messages/template/button) is a simple structured card message that includes:

* Text title
* Text subtitle
* Up to 3 buttons (Facebook limitation) with either link or publish text button actions

*Button example image with all button actions, including publish text button tap view:*

![Button Example](img/fb_structuredcontent_image_4.jpg)

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
    <td>Defines if text will be bold or not. Will always be set to ‘true’ in Facebook generic and button. </td>
    <td>Boolean</td>
    <td>N</td>
  </tr>
  <tr>
    <td>size</td>
    <td>Defines the element size. Will always be set to ‘large’ in Facebook generic and button</td>
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
    <td>Actions are a list of applicative user actions on buttons, that will run on the consumer side and will help them to achieve their operation. Button action for Facebook generic or button can be set to Publish text or Link</td>
    <td>Enum - “publishText”, “link”</td>
    <td>Y</td>
  </tr>
</table>

### Example Template

```json
{
  "type": "vertical",
  "tag": "button",
  "elements": [
    {
      "type": "vertical",
      "elements": [
        {
          "type": "text",
          "tag": "title",
          "text": "Button example template",
          "tooltip": "Button example template"
        },
        {
          "type": "button",
          "tooltip": "Publish text example",
          "title": "Publish text example",
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
                "uri": "https://www.apple.com/iphone-8/specs/"
              }
            ]
          }
        }
      ]
    }]}
```
*Note: When using “link” as a button action, note that Facebook Messenger desktop clients use an iframe to display the web links. Your brands website will need to support iframes in order for the consumer to be able to view it from FB desktop. If the website that you are adding does not support iframes, the content will not display either (eg. Google Maps)*
