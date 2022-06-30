---
pagename: List Message Template
redirect_from:
  - structured-content-whatsapp-business-messages-templates-list-message-template.html
Keywords: structured content rich messaging whatsapp business messages list messages picker
sitesection: Documents
categoryname: "Rich Messaging"
documentname: WhatsApp Business Messages Templates
permalink: whatsapp-business-messages-templates-list-message-template.html
indicator: messaging
---

## Overview

In WhatsApp Business Messages, a List Message has the following structure:

1. Title
2. Subtitle (optional)
3. Footer (optional)
4. Horizontal (at least 1 is mandatory)

Each horizontal can contain the following elements:
1. Title (mandatory)
2. Subtitle (optional)
3. Button (at least 1 is mandatory)


**Examples Of WhatsApp List messages:**

<p float="left">
  <img src="img/connectors/wa_listmessage1.png" style="display: inline; margin: 0" />
  <img src="img/connectors/wa_listmessage2.png" style="display: inline; margin: 0" />
  <img src="img/connectors/wa_listmessage3.png" style="display: inline; margin: 0" />
</p>

## Top level vertical

Wrapping element that contains the list message vertical.

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
    <td>
      Type of the Container.<br/>
      Always <b>vertical</b> for WhatsApp list messages.
    </td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>tag</td>
    <td>Always <b>generic</b> for WhatsApp list messages</td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>elements</td>
    <td>
    Contains only the list message vertical (see next section).
    </td>
    <td>Array(Element)</td>
    <td>Y</td>
  </tr>
</table>

## List message vertical

This vertical contains contains the  basic information of the list, such as
the title, subtitle, title of the clickable options button as well as the vertical element hat contains all of
of sections and respective selectable options that the consumer can choose from.
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
    <td>
      Type of the Container.<br/>
      For WhatsApp List Messages the type is always <b>vertical</b>.
    </td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>elements</td>
    <td>
      Array of elements that make the main structure of the list message.
      Multiple horizontals can be added to create multiple sections
      These elements must be in the following order:
      <br/>
      <br/>
      1) <a href="#title">Title</a><br/>
      2) <a href="#description">Subtitle</a><br/>
      3) <a href="#footer">Footer</a><br/>
      4) <a href="#button">Button</a><br/>
      5) <a href="#horizontal">Horizontal</a><br/>
  </td>
    <td>Array(Element)</td>
    <td>Y</td>
  </tr>
</table>

#### JSON Representation Card

```json
{
  "type": "vertical",
  "tag": "generic",
  "elements": [Title, Subtitle, Footer, Button, Horizontal]
}
```

### Title

The highlighted headline of the list message.

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
    <td>Must be "title". If missing, the first text element in the template will be set as the card text.
    </td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>text</td>
    <td>
    Text of the headline <br/>
    It's length can not be longer than 1024 characters.<br/>
    <b>Note:</b> This length is shared with the subtitle. This means that
    to find the real limit of this text you must substract the length of the
    subtitle when it is set. 
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
  "text": "Title of the list message"
}
```

### Subtitle 

The subtitle represents the secondary text of the List Messsage.
This is generally where the body of the message can be entered.

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
    <td>Must be "subtitle".
    </td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>text</td>
    <td>
    The description text.<br/>
    The text can not be longer than 1024 characters
    <b>Note: </b> This text length is shared with the title length. This means that
    to find the real limit of this text you must substract the length of the
    subtitle when it is set.
    </td>
    <td>String</td>
    <td>Y</td>
  </tr>
</table>


#### JSON Representation

```json
{
  "type": "text",
  "text": "Body of the message",
  "tag": "subtitle"
}
```

### Footer

Footer of the list messages. This is shown below the subtitle or title if the first is absent.

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
    <td>Must be "footer".
    </td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>text</td>
    <td>
    The description text.<br/>
    The text can not be longer than 60 characters.
    </td>
    <td>String</td>
    <td>Y</td>
  </tr>
</table>

#### JSON Representation

```json
{
  "type": "text",
  "text": "Footer of the list message",
  "tag": "footer"
},
```

### Options Button

This element is a placeholder for the button shown in the user WhatsApp app.
It can be used to change its name.

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
    The text can not be longer than 20 characters.
    </td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>subtitle</td>
    <td>
    Description for the button.<br/>
    The text can not be longer than 20 characters.
    </td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>click</td>
    <td>
    The click operations that should be executed when the customer clicks the button.<br/>
    These click operations must contain at least one action. The WhatsApp only supports the
    <a href="getting-started-with-rich-messaging-introduction.html#publish-text">publishText</a>
    </td>
    <td><a href="getting-started-with-rich-messaging-introduction.html#element-click-operations">ClickOperations</a></td>
    <td>Y</td>
  </tr>
</table>

```json
{
  "type": "button",
  "title": "Button title",
  "subtitle": "Button description",
  "click": ClickOperations
}
```


### Option section

A section is a way of grouping one or more option buttons (rows).
At least one row must be added to the list message. In the case of using
just one section its title is not mandatory.

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
    <td>
      Always <b>horizontal</b> for WhatsApp list messages.
    </td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>elements</td>
    <td>
      Vertical that contains option buttons. See next section.
  </td>
    <td>Array(Element)</td>
    <td>Y</td>
  </tr>
</table>


#### JSON representation

```json
{
  "type": "horizontal",
  "elements": [
    {
      "type": "vertical",
      "elements": [Button]
    }
  ]
}
```

### Option Button

This element represents the options that the consumer can choose from.
These buttons are added within a section. There can be 10 options across all sections.

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
    The text can not be longer than 20 characters.
    </td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>subtitle</td>
    <td>
    Description for the button.<br/>
    The text can not be longer than 20 characters.
    </td>
    <td>String</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>click</td>
    <td>
    The click operations that should be executed when the customer clicks the button.<br/>
    These click operations must contain at least one action. The WhatsApp only supports the
    <a href="getting-started-with-rich-messaging-introduction.html#publish-text">publishText</a>
    </td>
    <td><a href="getting-started-with-rich-messaging-introduction.html#element-click-operations">ClickOperations</a></td>
    <td>Y</td>
  </tr>
</table>

```json
{
  "type": "button",
  "title": "Button title",
  "subtitle": "Button description",
  "click": ClickOperations
}
```

## Full Template

```json
{
    "type": "vertical",
    "tag": "list",
    "elements": [
      {
        "type": "vertical",
        "elements": [
          {
            "type": "text",
            "text": "Our flower selection",
            "tag": "title"
          },
          {
            "type": "text",
            "text": "These are our current flower selection. Select the one that you are interested in.",
            "tag": "subtitle"
          },
          {
            "type": "text",
            "text": "(Choose one option out of all the categories)",
            "tag": "footer"
          },
          {
            "type": "button",
            "tag": "menu",
            "title": "See options",
            "click": {
              "actions": [
                {
                  "type": "publishText",
                  "text": "See options"
                }
              ]
            }
          },
          {
            "type": "horizontal",
            "elements": [
              {
                "type": "vertical",
                "elements": [
                  {
                    "type": "text",
                    "tag": "title",
                    "text": "Birthday Flowers"
                  },
                  {
                    "type": "button",
                    "title": "Red roses bouquet",
                    "subtitle": "12 fresh roses",
                    "click": {
                      "actions": [
                        {
                          "type": "publishText",
                          "text": "Red roses bouquet"
                        }
                      ]
                    }
                  },
                  {
                    "type": "button",
                    "title": "White lilies bouquet",
                    "subtitle": "15 fresh lilies",
                    "click": {
                      "actions": [
                        {
                          "type": "publishText",
                          "text": "White lilies bouquet"
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "horizontal",
            "elements": [
              {
                "type": "vertical",
                "elements": [
                  {
                    "type": "text",
                    "tag": "title",
                    "text": "Just because"
                  },
                  {
                    "type": "button",
                    "title": "Tulips bouquet",
                    "subtitle": "10 fresh tulips",
                    "click": {
                      "actions": [
                        {
                          "type": "publishText",
                          "text": "Tulips bouquet"
                        }
                      ]
                    }
                  },
                  {
                    "type": "button",
                    "title": "Gerberas bouquet",
                    "subtitle": "10 fresh gerberas",
                    "click": {
                      "actions": [
                        {
                          "type": "publishText",
                          "text": "Gerberas bouquet"
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
```
