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
4. Horizontal (at least 1 is mandatory)

Each horizontal can contain the following elements:
1. Title (mandatory)
2. Subtitle (optional)
3. Button (at least 1 is mandatory)


**Examples of WhatsApp List Messages**

![](img/connectors/wa_listmessages.png)


### Top Level Vertical

Wrapping element that contains the list message vertical.

| Property Name | Description | Type | Required |
| --- | --- | --- | --- |
| type |  Type of the Container. Always vertical for WhatsApp list messages.  | Enum | Y |
| tag | Always generic for WhatsApp list messages | Enum | Y |
| elements |  Contains only the list message vertical (see next section).  | Array(Element) | Y |

### List Message Vertical

This vertical contains contains the  basic information of the list, such as
the title, subtitle, title of the clickable options button as well as the vertical element hat contains all of
of sections and respective selectable options that the consumer can choose from.

| Property Name | Description | Type | Required |
| --- | --- | --- | --- |
| type |  Type of the Container. For WhatsApp List Messages the type is always vertical.  | Enum | Y |
| elements |  Array of elements that make the main structure of the list message. Multiple horizontals can be added to create multiple sections These elements must be in the following order:<br> 1) Title <br> 2) Subtitle <br> 3) Footer <br> 4) Button <br> 5) Horizontal <br> | Array(Element) | Y |

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

| Property Name | Description | Type | Required |
| --- | --- | --- | --- |
| type | Must be "text". Identifies the element as an object of type text.  | Enum | Y |
| tag | Must be "title". If missing, the first text element in the template will be set as the card text.  | Enum | Y |
| text |  Text of the headline  It's length can not be longer than 1024 characters. Note: This length is shared with the subtitle. This means that to find the real limit of this text you must substract the length of the subtitle when it is set.  | String | Y |


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

| Property Name | Description | Type | Required |
| --- | --- | --- | --- |
| type | Must be "text". Identifies the element as an object of type text.  | Enum | Y |
| tag | Must be "subtitle".  | Enum | Y |
| text |  The description text. The text can not be longer than 1024 characters <br> **Note:**  This text length is shared with the title length. This means that to find the real limit of this text you must substract the length of the subtitle when it is set.  | String | Y |


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

| Property Name | Description | Type | Required |
| --- | --- | --- | --- |
| type | Must be "text". Identifies the element as an object of type text.  | Enum | Y |
| tag | Must be "footer".  | Enum | Y |
| text |  The description text. The text can not be longer than 60 characters.  | String | Y |


#### JSON Representation

```json
{
  "type": "text",
  "text": "Footer of the list message",
  "tag": "footer"
},
```

### Options Menu Button

This element is a placeholder for the button shown in the user WhatsApp app.
It can be used to change its name.

| Property Name | Description | Type | Required |
| --- | --- | --- | --- |
| type | Must be "button". Identifies the element as an object of type button.  | Enum | Y |
| title |  The text of the button. The text can not be longer than 20 characters.  | String | Y |
| subtitle |  Description for the button. The text can not be longer than 20 characters.  | String | Y |
| click |  The click operations that should be executed when the customer clicks the button. These click operations must contain at least one action. The WhatsApp only supports the publishText  | ClickOperations | Y |


```json
{
  "type": "button",
  "title": "Button title",
  "subtitle": "Button description",
  "click": ClickOperations
}
```

### Option Section

A section is a way of grouping one or more option buttons (rows).
At least one row must be added to the list message. In the case of using
just one section its title is not mandatory.

| Property Name | Description | Type | Required |
| --- | --- | --- | --- |
| type |  Always horizontal for WhatsApp list messages.  | Enum | Y |
| elements |  Vertical that contains option buttons. See next section.  | Array(Element) | Y |

#### JSON Representation

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

### Option (Row) Button

This element represents the options that the consumer can choose from.
These buttons are added within a section. There can be 10 options across all sections.

| Property Name | Description | Type | Required |
| --- | --- | --- | --- |
| type | Must be "button". Identifies the element as an object of type button.  | Enum | Y |
| title |  The text of the button. The text can not be longer than 20 characters.  | String | Y |
| subtitle |  Description for the button. The text can not be longer than 20 characters.  | String | Y |
| click |  The click operations that should be executed when the customer clicks the button. These click operations must contain at least one action. The WhatsApp only supports the publishText  | ClickOperations | Y |

```json
{
  "type": "button",
  "title": "Button title",
  "subtitle": "Button description",
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
