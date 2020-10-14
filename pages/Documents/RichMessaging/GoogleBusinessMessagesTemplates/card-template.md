---
pagename: Card Template
redirect_from:
  - structured-content-google-business-messages-templates-card-template.html
Keywords: structured content rich messaging gbm google business messages card template
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Google Business Messages Templates
permalink: google-business-messages-templates-card-template.html
indicator: messaging
---

### Overview

In Google Business Messages a card has the following structure:

1. Image
2. Title
3. Description
4. Buttons (up to 4)

_Examples Of GBM Rich Cards:_

![GBM RichCard Examples](img/connectors/gbm_cards.png)

### Card

The card is the container that holds the information that should be displayed by the connector.

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
    <td>Type of the Container.</br>
For Rich Cards in GBM the type should always be <b>vertical</b>, as it best represents the layout on customer side.</td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>tag</td>
    <td>Tag of template view, must be <b>generic</b> for GBM Rich Cards.</td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>display</td>
    <td>Object that defines how the Image is being displayed.</td>
    <td><a id="#display-options">DisplayOptions</a></td>
    <td>N</td>
  </tr>
  <tr>
    <td>elements</td>
    <td>Array of elements/templates that contains the actual content of the Rich Card. The Elements must be in the following order:</br></br>
1) <a href="#image">Image</a></br>
2) <a href="#title">Title</a></br>
3) <a href="#description">Description</a></br>
4-7) <a href="#button">Button</a></br></br>
While all of these elements are optional, it is still required to have at least one Image, Title, or Description	</td>
    <td>Array(Element)</td>
    <td>Y</td>
  </tr>
</table>

#### JSON Representation Card

```json
{
  "type": "vertical",
  "tag": "generic",
  "display": Display,
  "elements": [Image, Title, Description, Button, Button, Button, Button]
}
```

### Display Options

The display options describe how the image is being rendered. While the width of the card is always set automatically (fitted to the screen width), the default height of images (**168dp**) can be modified by setting the size attribute in the display options to _compact_ (=**112dp**) or _tall_ (=**264dp**)

_If the image size is not matching to the selected display option, it will be cropped as shown in the following picture:_

![Example of How the image will be cropped](img/connectors/gbm_displayoptions.png)

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
    <td>size</td>
    <td>Defines the height of the Image in a GBM Rich Card.</br>
    Can be one of:</br>
    <li><b>compact</b> (height = 112dp)</li>
    <li><b>tall</b> (height = 264dp)</li>
    If no value is given the height is 168dp.
    </td>
    <td>Enum</td>
    <td>N</td>
  </tr>
</table>

#### JSON Representation

```json
{
  "size": "tall"
}
```

### Image

The image that will be displayed at the top of the rich card. If no image is given, Title or or Description are required.

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
    The URL of the image that will be send to google.</br>
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
    The actual text of the headline.</br>
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
    The description text.</br>
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
