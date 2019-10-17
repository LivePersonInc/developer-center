---
pagename: Quick Replies Template
redirect_from: 
Keywords: quick replies rich messaging
sitesection: Documents
categoryname: "Rich Messaging"
documentname: LINE Templates
permalink: line-templates-quick-replies-template.html
root-link: true
indicator: messaging
---

### Overview

When a user receives a message that contains quick reply buttons from a brand, those buttons appear at the bottom of the chat screen on LINE messenger. The user can simply tap one of the buttons to reply to the brand, the response will be captured and shared back to the agent. 

A LINE quick reply button consists of the question/statement text and a set of up to 13 buttons and that each contain:

* Title text (including emojis)
* Publish text click action

Quick reply example image:

<img  style="width:350px" src="img/line_sc_quickreplies.png">

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
 <td>Types of basic elements supported by Structured Content framework. Will always be set to "quickReplies"</td>
 <td>Enum</td>
 <td>Y</td>
 </tr>
 <tr>
 <td>itemsPerRow</td>
 <td>The number of items that will be set on each row. For LINE quick replies this property is ignored, since LINE has a fixed set of one row.</td>
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
 <td>Buttons contain click and action fields that define the type of action set on user click operation </td>
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
 <td>Actions are a list of applicative user actions on buttons, which will run on the consumer side and will help them to achieve their operation. Button actions for LINE quick replies can be set to “publishText” only</td>
 <td>Enum - “publishText””</td>
 <td>N</td>
 </tr>
 </tbody>
</table>

### Code Example

```json
{
  "type": "quickReplies",
  "itemsPerRow": 4,
  "replies": [
    {
      "type": "button",
      "tooltip": "yes I do",
      "title": "yes",
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
      "tooltip": "hmmm maybe?",
      "title": "hmmm maybe?",
      "click": {
        "actions": [
          {
            "type": "publishText",
            "text": "hmmm maybe?"
          }
        ]
      }
    },
    {
      "type": "button",
      "tooltip": "what is that?",
      "title": "what is that?",
      "click": {
        "actions": [
          {
            "type": "publishText",
            "text": "what is that?"
          }
        ]
      }
    },
    {
      "type": "button",
      "tooltip": "whattttttt",
      "title": "whatttttt",
      "click": {
        "actions": [
          {
            "type": "publishText",
            "text": "whatttttt"
          }
        ]
      }
    },
    {
      "type": "button",
      "tooltip": "no",
      "title": "nope",
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
      "tooltip": "no way!",
      "title": "no way!",
      "click": {
        "actions": [
          {
            "type": "publishText",
            "text": "no way!"
          }
        ]
      }
    }
  ]
}
```
