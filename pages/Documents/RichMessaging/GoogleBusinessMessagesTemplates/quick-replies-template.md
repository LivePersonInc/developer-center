---
pagename: Quick Replies Template
redirect_from:
  - structured-content-google-business-messages-templates-quick-replies-template.html
Keywords: structured content rich messaging gbm google business messages quick replies quick-replies template
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Google Business Messages Templates
permalink: google-business-messages-templates-quick-replies-template.html
indicator: messaging
---

### Overview

The Google Business Messages (GBM) quick reply message consist of up to 13 Buttons that are attached to a regular text message.

_Example Of GBM Quick Reply Message:_

![GBM Quick Reply Example](img/connectors/gbm_quickreply.png)

### Quick Reply Container

The quick reply container holds all buttons that should be displayed with the message.

#### Properties

<table>
  <thead><tr>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </tr></thead>
  <tr>
    <td>type</td>
    <td>Must be "quickReplies". Identifies the element as an object of type quickreplies.</td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>itemsPerRow</td>
    <td>A value required by the system. Is not used in the GBM connector, but needs to be set. Can have a value of 1 to 8</td>
    <td>Integer</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>replies</td>
    <td>
    Array of quick replies sent to the consumer. </br>
    Maximum number of buttons is 13.
    </td>
    <td>Array(<a href="#button">Button</a>)</td>
    <td>Y</td>
  </tr>
</table>

#### JSON Representation Card

```json
{
  "type": "quickReplies",
  "itemsPerRow": 1,
  "replies": [Button, Button, ...Button]
}
```

### Button

A reply button that will be display beneath the message.

#### Properties

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
    <td>Must be "button". Identifies the element as an object of type <a href="getting-started-with-rich-messaging-introduction.html#button">button</a>.
    </td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>title</td>
    <td>
    The text of the button.</br>
    The text can not be longer than 25 characters.
    </td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>click</td>
    <td>
    The click operations that should be executed when the customer clicks the button.</br>
    These click operations must contain at least one action which can be any action of the following types:
    <li><a href="getting-started-with-rich-messaging-introduction.html#publish-text">publishText</a></li>
    <li><a href="getting-started-with-rich-messaging-introduction.html#navigate">navigate</a></li>
    <li><a href="getting-started-with-rich-messaging-introduction.html#link">link</a></li></br>
    If an action of type navigate or link is added, a publishText action can additionaly be included in the click operation.
    </td>
    <td><a href="getting-started-with-rich-messaging-introduction.html#element-click-operations">ClickOperations</a></td>
    <td>Y</td>
  </tr>
</table>

#### JSON Representation

```json
{
  "type": "button",
  "title": "View Online",
  "click": ClickOperations
}
```

### Full Template

```json
{
  "type": "quickReplies",
  "itemsPerRow": 1,
  "replies": [
    {
      "type": "button",
      "title": "View Here",
      "click": {
        "actions": [
          {
            "type": "publishText",
            "text": "view-here"
          }
        ]
      }
    },
    {
      "type": "button",
      "title": "View Online",
      "click": {
        "actions": [
          {
            "type": "publishText",
            "text": "viewed-online"
          },
          {
            "type": "link",
            "uri": "https://www.liveperson.com/resources/reports/great-ai-divide/"
          }
        ]
      }
    },
    {
      "type": "button",
      "title": "Not interested",
      "click": {
        "actions": [
          {
            "type": "publishText",
            "text": "stop-showing"
          }
        ]
      }
    },
    {
      "type": "button",
      "title": "View More Reports",
      "click": {
        "actions": [
          {
            "type": "link",
            "uri": "https://www.liveperson.com/resources/#all"
          }
        ]
      }
    }
  ]
}
```
