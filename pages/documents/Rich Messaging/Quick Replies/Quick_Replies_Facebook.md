---
pagename: Facebook Messenger Template
Keywords: quick replies rich messaging
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Quick Replies
permalink: quick-replies-facebook-messenger-template.html
root-link: true
indicator: messaging
---

### Overview

The [Quick Reply template](https://developers.facebook.com/docs/messenger-platform/send-messages/quick-replies) provides a way to receive consumer input to a question/statement by a set of buttons that each contain a title text and/or emojis. The quick reply options always appear above the message composition in the Facebook Messenger window, and will be published in the conversation thread upon consumer button tap. 

Quick Reply for Facebook Messenger includes a set of up to 11 buttons that can each contain a text title and a publish text click action.

Brands will be able to share the Quick Reply template through LiveEngage structured content basic elements, while using the structured content JSON properties.  Please note that should you want to share a question/statement before sending the quick reply buttons, the text message should be shared with the JSON. 

Below is an image of a Quick Reply with four buttons:

![image alt text](img/fb_structuredcontent_image_7.png)![image alt text](img/fb_structuredcontent_image_8.png)

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
    <td>Types of basic elements supported by Structured Content framework. Will always be set to "quickReplies"</td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>itemsPerRow</td>
    <td>The number of items that will be set on each row. For Facebook Quick Reply this property is ignored, since Facebook has a fix set of one row.</td>
    <td>Integer </td>
    <td>Y</td>
  </tr>
  <tr>
    <td>replies</td>
    <td>Array of quick replies sent to the consumer </td>
    <td></td>
    <td>Y</td>
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
    <td>Actions are a list of applicative user actions on buttons, that will run on the consumer side and will help them to achieve their operation. Button action for Facebook Quick Reply can be set to “publishText” only</td>
    <td>Enum - “publishText”</td>
    <td>N</td>
  </tr>
</table>

### Example Template

```json
{
  "type": "quickReplies",
  "itemsPerRow": 8,
  "replies": [
    {
      "type": "button",
      "tooltip": "Not likely at all",
      "title": "Not likely at all",
      "click": {
        "actions": [
          {
            "type": "publishText",
            "text": "yep"
          }
        ]
      }
    },
    {
      "type": "button",
      "tooltip": "Not likely",
      "title": "Not likely",
      "click": {
        "actions": [
          {
            "type": "publishText",
            "text": "nope"
          }
        ]
      }
    },
    {
      "type": "button",
      "tooltip": "likely",
      "title": "likely",
      "click": {
        "actions": [
          {
            "type": "publishText",
            "text": "nope"
          }
        ]
      }
    },
    {
      "type": "button",
      "tooltip": "Very likely",
      "title": "Very likely",
      "click": {
        "actions": [
          {
            "type": "publishText",
            "text": "nope"
          }
        ]
      }
    }
  ]
}
```

### Best Practices

To create unified layouts when looking to use the **Quick Replies** Messenger templates, please use these limitations guidelines to create layouts with common denominator: 

* Facebook has a maximum of 11 buttons in each quick reply template. LiveEngage does no have a limit on the number of buttons. 
* Facebook does not allow more than 20 characters on button text title.  LiveEngage will allow up to 128 characters.

### Limitations

* Facebook allows to share images within quick replies buttons - this is not supported with the template.