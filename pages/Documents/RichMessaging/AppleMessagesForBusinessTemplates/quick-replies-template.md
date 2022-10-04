---
pagename: Quick Replies Template
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Apple Messages for Business Templates
permalink: apple-messages-for-business-templates-quick-replies-template.html
indicator: messaging
---

### Overview

The [Quick Reply message](https://register.apple.com/resources/messages/msp-rest-api/type-interactive#quick-reply-message) provides a way to receive consumer input to a question/statement by a set of buttons that each contain a title text and/or emojis.

Quick Replies for Apple Messages for Business includes a set of up to 5 buttons that can each contain a text title and a publish text click action.

Below is an image of a Quick Reply template with two quick replies:

<img  style="width:350px" src="img/apple_sc_quickreplies.png">

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
 <td>The number of items that will be set on each row. This property is ignored, since Apple Messages for Business uses a fixed number of rows</td>
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
 <td>Buttons contain the title of each quick reply </td>
 <td>Object </td>
 <td>Y</td>
 </tr>
 </tbody>
</table>

### Code Example

```json
{
   "type":"quickReplies",
   "itemsPerRow":2,
   "replies":[
      {
         "type":"button",
         "title":"yes"
      },
      {
         "type":"button",
         "title":"no"
      }
   ]
}
```