---
pagename: RCS Business Messaging Template
Keywords: quick replies rich messaging
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Quick Replies
permalink: quick-replies-rcs-business-messaging-template.html
root-link: true
indicator: messaging
---

### Overview

Quick Replies for RCS Business Messaging include the question/statement text and a set of up to 11 chips and that each contain:

* Title text (including emojis)
* Publish text click action

Quick Replies example image:
![image alt text](img/google_rcs_structuredcontent_image_5.png)

### JSON Template Properties

<table>
  <thead><tr>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </tr></thead>
  <tr>
    <td>type</td>
    <td>Types of basic elements supported by Structured Content framework. Will always be set to "quickReplies"</td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>itemsPerRow</td>
    <td>The number of items that will be set on each row. For RCS quick replies this property is ignored, since RCS has a fixed set of one row.</td>
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
    <td>Buttons contain click and action properties that define the type of action set on user click operation </td>
    <td>Object </td>
    <td>Y</td>
  </tr>
  <tr>
    <td>click</td>
    <td>Click objects contain the action type set on the click operation for each button</td>
    <td>Object</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>action</td>
    <td>Actions are a list of applicative user actions on buttons, which will run on the consumer side and will help them to achieve their operation. Button actions for RCS quick replies can be set to “publishText” only</td>
    <td>Enum - “publishText””</td>
    <td>N</td>
  </tr>
</table>

### Quick Replies template code example

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

### Limitations

* Quick replies have a maximum of 11 chips for each message
  * Each quick reply can contain up to 25 characters 
* Colors of quick reply bubble frames is taken by default from the profile branding color that the brand has configured
* Agent or bot will receive an error when trying to send a Quick Replies if the text exceeds 25 characters