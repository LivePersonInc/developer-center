---
pagename: Reply Button Template
redirect_from:
  - structured-content-whatsapp-business-messages-templates-reply-button-template.html
Keywords: structured content rich messaging whatsapp business messages reply button card template
sitesection: Documents
categoryname: "Rich Messaging"
documentname: WhatsApp Business Messages Templates
permalink: whatsapp-business-messages-templates-reply-button-template.html
indicator: messaging
---

### Overview

In WhatsApp Business Messages, a Reply Button Message has the following structure:

1. Image (optional)
2. Header (optional)
3. Description
4. Footer (optional)
4. Buttons (between 1 and 3)

_Examples Of WhatsApp Reply Button:_

![Whatsapp Reply Button Examples](img/connectors/wa_replybutton.png)

### Reply Button

The Reply Button is the container that holds the information that should be displayed by the connector.

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
    <td>Type of the Container.<br/>
For Reply Buttons in WhatsApp the type should always be <b>vertical</b>, as it best represents the layout on customer side.</td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>tag</td>
    <td>Tag of template view, must be <b>generic</b>.</td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>elements</td>
    <td>Array of elements/templates that contains the actual content of the Reply Button. The elements must be in the following order:<br/><br/>
1) <a href="#image">Image</a><br/>
2) <a href="#title">Title</a><br/>
3) <a href="#description">Description</a><br/>
4-7) <a href="#button">Button</a><br/><br/>
The description and at least one button element are required.</td>
    <td>Array(Element)</td>
    <td>Y</td>
  </tr>
</table>

#### JSON Representation Card

```json
{
  "type": "vertical",
  "tag": "generic",
  "elements": [Image, Title, Description, Button, Button, Button, Button]
}
```

### Image

The image that will be displayed at the top of the Reply Button.

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
    <td>Must be "image". Identifies the element as an object of type <a href="getting-started-with-rich-messaging-introduction.html#image">image</a>.
    </td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>url</td>
    <td>
    The URL of the image that will be send to google.<br/>
    The domain where the image is being stored must be whitelisted before it can be used.
    </td>
    <td>String</td>
    <td>Y</td>
  </tr>
</table>

#### JSON Representation

```json
{
  "type": "image",
  "url": "https://d1hryyr5hiabsc.cloudfront.net/web2020/img/resources/rep-great-ai-divide@1x.jpg"
}
```

### Title

The highlighted headline of the rich card.

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
    <td>Must be "text". Identifies the element as an object of type <a href="getting-started-with-rich-messaging-introduction.html#text">text</a>.
    </td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>tag</td>
    <td>Must be "title". If missing, the text will be identified as the description.
    </td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>text</td>
    <td>
    The actual text of the headline.<br/>
    The text can not be longer than 200 characters.
    </td>
    <td>String</td>
    <td>Y</td>
  </tr>
</table>

#### JSON Representation

```json
{
  "type": "text",
  "tag": "title",
  "text": "The great AI divide"
}
```

### Description

The text of the rich card.

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
    <td>Must be "text". Identifies the element as an object of type <a href="getting-started-with-rich-messaging-introduction.html#text">text</a>.
    </td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>text</td>
    <td>
    The description text.<br/>
    The text can not be longer than 2000 characters.
    </td>
    <td>String</td>
    <td>Y</td>
  </tr>
</table>

#### JSON Representation

```json
{
  "type": "text",
  "text": "Consumer attitudes on the gender gap in technology and perceptions of AI's future.\nView the whole article online, or request the content to be sent via text messages."
}
```

### Button

A button at the bottom of a rich card.

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
    The text of the button.<br/>
    The text can not be longer than 25 characters.
    </td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>click</td>
    <td>
    The click operations that should be executed when the customer clicks the button.<br/>
    These click operations must contain at least one action which can be any action of the following types:
    <li><a href="getting-started-with-rich-messaging-introduction.html#publish-text">publishText</a></li>
    <li><a href="getting-started-with-rich-messaging-introduction.html#navigate">navigate</a></li>
    <li><a href="getting-started-with-rich-messaging-introduction.html#link">link</a></li><br/>
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
  "type": "vertical",
  "tag": "generic",
  "display": {
    "size": "tall"
  },
  "elements": [
    {
      "type": "image",
      "url": "https://d1hryyr5hiabsc.cloudfront.net/web2020/img/resources/rep-great-ai-divide@1x.jpg"
    },
    {
      "type": "text",
      "tag": "title",
      "text": "The great AI divide"
    },
    {
      "type": "text",
      "text": "Consumer attitudes on the gender gap in technology and perceptions of AI's future.\nView the whole article online, or request the content to be sent via text messages."
    },
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
