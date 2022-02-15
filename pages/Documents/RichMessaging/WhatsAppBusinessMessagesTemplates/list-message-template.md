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

### Overview

In WhatsApp Business Messages, a List Message has the following structure:

1. Title
2. Subtitle (optional)
3. Footer (optional)
4. Vertical (at least 1 is mandatory)

**Examples Of WhatsApp List Message:**

<p float="left">
  <img src="img/connectors/wa_listmessage1.jpeg" style="display: inline; margin: 0" />
  <img src="img/connectors/wa_listmessage2.jpeg" style="display: inline; margin: 0" />
</p>

### List Message Button

The List Message Button is the container that holds the information that should be displayed by the connector.

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
For WhatsApp List Messages the type should always be <b>horizontal</b>, as it best represents the layout on customer side.</td>
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
    <td>Array of elements/templates that contains the actual content of the List Message. The elements must be in the following order:<br/><br/>
1) <a href="#title">Title</a><br/>
2) <a href="#description">Subtitle</a><br/>
3) <a href="#footer">Footer</a><br/>
4) <a href="#button">Button</a><br/><br/>
5) <a href="#vertical">Vertical</a><br/><br/>
The title and vertical are required.

There can be multiple verticals representing multiple sections.
A vertical has the following structue:

1) <a href="#horizontal-title">Title</a><br/>
2) <a href="#horizontal-button">Button</a><br/><br/>

Multiple buttons can be added.

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
  "elements": [Title, Subtitle, Footer, Button, Vertical]
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
    <td>Must be "title". If missing, the first text element in the template will be set as the card text.
    </td>
    <td>Enum</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>text</td>
    <td>
    The actual text of the headline.<br/>
    The text can not be longer than 1024 characters shared with the subtitle.
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
  "text": "Menu selection"
}
```

### Subtitle 

The subtitle is the secondary text of the List Messsage.

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
    The text can not be longer than 1024 characters shared with the title.
    </td>
    <td>String</td>
    <td>Y</td>
  </tr>
</table>


#### JSON Representation

```json
{
  "type": "text",
  "text": "Please select your menu items",
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
    The text can not be longer than 60 characters shared with the title.
    </td>
    <td>String</td>
    <td>Y</td>
  </tr>
</table>

#### JSON Representation

```json
{
  "type": "text",
  "text": "(Your order will be dispatched soon)",
  "tag": "footer"
},
```

### Button

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
  "title": "Menu List",
  "click": ClickOperations
}
```

### Full Template

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
            "text": "Menu selection",
            "tag": "title"
          },
          {
            "type": "text",
            "text": "Please select your menu items",
            "tag": "subtitle"
          },
          {
            "type": "text",
            "text": "(Your order will be dispatched soon)",
            "tag": "footer"
          },
          {
            "type": "button",
            "tag": "menu",
            "title": "Menu List",
            "click": {
              "actions": [
                {
                  "type": "publishText",
                  "text": "Menu List"
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
                    "text": "Choose main course"
                  },
                  {
                    "type": "button",
                    "title": "Lasagna",
                    "click": {
                      "actions": [
                        {
                          "type": "publishText",
                          "text": "Lasagna"
                        }
                      ]
                    }
                  },
                  {
                    "type": "button",
                    "title": "Spaghetti Carbonara",
                    "click": {
                      "actions": [
                        {
                          "type": "publishText",
                          "text": "Spaghetti Carbonara"
                        }
                      ]
                    }
                  },
                  {
                    "type": "button",
                    "title": "Risotto",
                    "click": {
                      "actions": [
                        {
                          "type": "publishText",
                          "text": "Risotto"
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
                    "text": "Choose dessert"
                  },
                  {
                    "type": "button",
                    "title": "Panna cotta",
                    "click": {
                      "actions": [
                        {
                          "type": "publishText",
                          "text": "Panna cotta"
                        }
                      ]
                    }
                  },
                  {
                    "type": "button",
                    "title": "Tiramisù",
                    "click": {
                      "actions": [
                        {
                          "type": "publishText",
                          "text": "Tiramisù"
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
