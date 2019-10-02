---
pagename: List Picker Template
redirect_from:
  - rich-messaging-connectors-abc-listpicker.html
  - structured-content-apple-business-chat-templates-list-picker-template.html
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Apple Business Chat Templates
permalink: apple-business-chat-templates-list-picker-template.html
indicator: messaging
---

### Overview

[Business Chat List Picker](https://developer.apple.com/documentation/businesschatapi/messages_sent/interactive_messages/list_picker) enables human or automated agents to share a list of items and information about them while allowing the consumer to select multiple items and reply back with the selection. The following capabilities are supported:

* Define items information - item name, description, image.
* Item sections - divide your list of items into sections based on the product categories.
* Multi-selection - Allow the consumer to select multiple items.
* receivedMessage and replyMessage bubbles style structures - define the templates for the bubbles that are received by the consumer on the Business Chat thread, and replied to.

Using metadata properties, brands can define the received and reply bubble structures and enable multi-selection capabilities.

Below is an image example of a Business Chat List Picker with multi-selection turned on:

![Apple Business Chat List Picker Main](images/abc-listpicker-1.jpg)   ![Apple Business Chat List Picker list](images/abc-listpicker-2.PNG)

### Basic Template Overview

In order to comply with the Apple Business Chat JSON structure, the below LiveEngage structured content template must be applied.

Each List Picker template has the following mandatory sections:

1. [Business Chat Message](#metadata---business-chat-message): multi selection, Received bubble, Reply bubbles (part of the metadata JSON

2. [List Picker header](#body---list-picker-header): title and subtitle (part of the JSON body)

3. [List Picker list items](#body---list-picker-items): title, subtitle and an optional image (part of the JSON body)



The following JSON metadata and body structures are templates for any List Picker object:

#### Metadata JSON template

```json
[
  {
    "type": "BusinessChatMessage",
    "multipleSelection": TRUE/FALSE,
    "receivedMessage": {
      "style": "icon",
      "subtitle": "THIS IS THE SUBTITLE",
      "title": "THIS IS THE TITLE",
      "secondarySubtitle": "SECONDARY SUBTITLE",
      "tertiarySubtitle": "TERTIARY SUBTITLE"
    },
    "replyMessage": {
      "style": "icon",
      "subtitle": "THIS IS THE SUBTITLE",
      "title": "THIS IS THE TITLE",
      "secondarySubtitle": "SECONDARY SUBTITLE",
      "tertiarySubtitle": "TERTIARY SUBTITLE"
    }
  }
]
```


#### Body JSON Template

```json
{
  "type": "vertical",
  "tag": "list",
  "elements": [
    {
      "type": "vertical",
      "elements": [
        {
          ///START TITLE OF SECTION HEADER
		  "type": "text",
          "text": "HEADER TITLE TEXT",
          "tag": "title",
          "tooltip": "TITLE TOOLTIP",
          "style": {
            "bold": true,
            "size": "large"
          }
        },
        {
          ///START SUBTITLE OF SECTION HEADER
		  "type": "text",
          "text": "HEADER SUBTITLE TEXT",
          "tag": "subtitle",
          "tooltip": "SUBTITLE TOOLTIP"
        },
        {
          ///FIRST ITEM IN THE LIST
		  "type": "horizontal",
          "elements": [
            {
              ///LIST ITEM IMAGE ELEMENT (OPTIONAL)
			  "type": "image",
              "url": "IMAGE URL",
              "tooltip": "IMAGE TOOLTIP"
            },
            {
              ///LIST ITEM TITLE, SUBTITLE AND BUTTON ACTION.
              ///WILL ALWAYS BE IN A VERTICAL LAYOUT
              "type": "vertical",
              "elements": [
                {
                  "type": "text",
                  "tag": "title",
                  "text": "LIST ITEM TITLE",
                  "tooltip": "TITLE TOOLTIP",
                  "style": {
                    "bold": true,
                    "size": "large"
                  }
                },
                {
                  "type": "text",
                  "tag": "subtitle",
                  "text": "LIST ITEM SUBTITLE",
                  "tooltip": "SUBTITLE TOOLTIP"
                },
                {
                  "type": "button",
                  "tooltip": "BUTTON TOOLTIP",
                  "title": "LIST ITEM BUTTON",
                  "click": {
                    "actions": [
                      {
                        "type": "publishText",
                        "text": "ON-CLICK PUBLISHED TEXT"
                      }
                    ],
                    "metadata": [
                      {
                        "type": "ExternalId",
                        "id": "ON-CLICK EXTERNAL ID"
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }//END OF LIST PICKER ITEM ###1,
        {
          ///SECOND ITEM IN THE LIST
        },
        {
          ///THIRD ITEM IN THE LIST
        },
        ///ETC
      ]
    }
  ]
}
```

### Metadata - Business Chat Message

The List Picker Metadata JSON is based on [this JSON template](#metadata-json-template).

#### List Picker Metadata JSON Properties

| Property Name     | Description                                                                                 | Type    | Required | Size Limit |
| :---------------- | :------------------------------------------------------------------------------------------ | :------ | :------- | :--------- |
| type              | Type of metadata. </br> Must be BusinessChatMessage                                         | Enum    | Y        |            |
| multipleSelection | Value that indicates if the customer can make multiple selections. </br> Defaults to false. | Boolean | N        |            |
| receivedMessage   | Defines how the bubble template will be displayed when a message is received.                 | Object  | Y        |            |
| replyMessage      | Defines how the bubble will be displayed when a message is sent back by the consumer.       | Object  | Y        |            |


#### Received and Reply Message

The Received Message is the first card presented to the consumer, from which they access the list of items to choose from. It consists of an image and actions.

The Reply Message is the reply card presented to the consumer after selecting items from the list.

The configuration of the Received and Reply Messages is done via a metadata JSON file.


##### Received and Reply Message Properties

| Property Name     | Description                                                                                  | Type   | Required | Size Limit                                                                         |
| :---------------- | :------------------------------------------------------------------------------------------- | :----- | :------- | :--------------------------------------------------------------------------------- |
| Style             | Defines the size of the message. Can be set to icon, small or large. <br/> Defaults to icon. | String | N        |                                                                                    |
| title             | The title of the message                                                                     | String | Y        | 85 characters (30 is recommended by Apple)                                         |
| Subtitle          | Subtitle to be displayed under title of the message                                          | String | N        | 400 characters (85 is recommended by Apple)                                        |
| imageURL          | Image to be placed in the List Picker received and reply message template                      | String | N        | JPG and PNG Only <br/> The total image size in the list picker is limited to 0.5MB |
| secondarySubtitle | Title that is aligned right of the message                                                   | String | Y        |                                                                                    |
| tertiarySubtitle  | Subtitle that is aligned right of the message                                                | String | Y        |                                                                                    |


#### Metadata JSON Example

```json
[
  {
    "type": "BusinessChatMessage",
    "multipleSelection": true,
    "receivedMessage": {
      "style": "icon",
      "subtitle": "Select your favorite",
      "title": "Beautiful flowers",
      "secondarySubtitle": "secondary subtitle",
      "tertiarySubtitle": "tertiarySubtitle",
      "imageURL": "https://i.pinimg.com/736x/a0/67/5e/a0675e5161d7ae5be2550987f397a641--flower-shops-paper-flowers.jpg"
    },
    "replyMessage": {
      "style": "large",
      "subtitle": "",
      "title": "Your selection",
      "secondarySubtitle": "secondarySubtitle",
      "tertiarySubtitle": "tertiarySubtitle",
      "imageURL": "https://i.pinimg.com/736x/a0/67/5e/a0675e5161d7ae5be2550987f397a641--flower-shops-paper-flowers.jpg"
    }
  }
]
```

### Body - Overview

The List Picker Body JSON is based on [this JSON template](#body-json-template).

#### List Picker Body JSON Properties

| Property Name | Description                                     | Type     | Required | Size Limit |
| :------------ | :---------------------------------------------- | :------- | :------- | :--------- |
| type          | Type of the element. <br/> Must be “vertical” | string   | Y        |            |
| tag           | Must be “list”                                | String   | Y        |            |
| elements      | List of Time Picker elements                    | Elements | Y        |            |

View the [List Picker Header](#body---list-picker-header) and [List Picker Item](#body---list-picker-items) sections for details on how to construct the List Picker Body JSON.

#### List Picker Body JSON Example

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
          "text": "Flowers",
          "tooltip": "text tooltip",
          "style": {
            "bold": true,
            "size": "large"
          }
        },
        {
          "type": "horizontal",
          "elements": [
            {
              "type": "image",
              "url": "https://i.pinimg.com/736x/60/38/93/603893c655392b2c623a516f0a8c014c--wildflower-bouquet-dahlia-bouquet.jpg",
              "tooltip": "Spring flowers"
            },
            {
              "type": "vertical",
              "elements": [
                {
                  "type": "text",
                  "tag": "title",
                  "text": "Spring bouquet",
                  "tooltip": "Spring bouquet",
                  "style": {
                    "bold": true,
                    "size": "large"
                  }
                },
                {
                  "type": "text",
                  "tag": "subtitle",
                  "text": "Wild flowers",
                  "tooltip": "Wild flowers"
                },
                {
                  "type": "button",
                  "tooltip": "Add to cart",
                  "title": "Add to cart",
                  "click": {
                    "actions": [
                      {
                        "type": "publishText",
                        "text": "Spring bouquet"
                      }
                    ],
                    "metadata": [
                      {
                        "type": "ExternalId",
                        "id": "Spring bouquet"
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
              "type": "image",
              "url": "http://www.gamttep.com/wp-content/uploads/2017/03/wedding-bouquets-flowers-pleasant-design-ideas-13-1000-ideas-about-on-pinterest.jpg",
              "tooltip": "Spring flowers"
            },
            {
              "type": "vertical",
              "elements": [
                {
                  "type": "text",
                  "tag": "title",
                  "text": "Bday flowers",
                  "tooltip": "Bday flowers",
                  "style": {
                    "bold": true,
                    "size": "large"
                  }
                },
                {
                  "type": "text",
                  "tag": "subtitle",
                  "text": "Mix flowers",
                  "tooltip": "Mix flowers"
                },
                {
                  "type": "button",
                  "tooltip": "Add to cart",
                  "title": "Add to cart",
                  "click": {
                    "actions": [
                      {
                        "type": "publishText",
                        "text": "published text button tap"
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

### Body - List Picker Header

The List Picker Header consists of a Title and a Subtitle.

The configuration of the header is done as part of the [List Picker Body JSON](#body-overview).

#### List Picker Header Title

##### Properties

Based on the [Structured Content Basic Element Text](structured-content-introduction-to-structured-content.html#text) with the following restrictions:

| Property Name | Description                                                                                                   | Type      | Required | Size Limit |
| :------------ | :------------------------------------------------------------------------------------------------------------ | :-------- | :------- | :--------- |
| type          | Type of element. <br/> Must be ‘text’                                                                       | Enum      | Y        |            |
| style         | Styling elements of the title. </br>Must have the following properties:<br/>{ "bold":true,<br/>			"size":"large"} | Container | N        |            |
| tag           | Must be “title”                                                                                             | String    | Y        |            |

##### Example

```json
{
  "type": "text",
  "text": "Flowers",
  "tag": "title",
  "tooltip": "text tooltip",
  "style": {
    "bold": true,
    "size": "large"
  }
}
```

#### List Picker Header Subtitle

##### Properties

Based on the [Structured Content Basic Element Text](structured-content-introduction-to-structured-content.html#text) with the following restrictions:

| Property Name | Description                             | Type   | Required | Size Limit |
| :------------ | :-------------------------------------- | :----- | :------- | :--------- |
| type          | Type of element. <br/> Must be ‘text’ | Enum   | Y        |            |
| tag           | Must be “subtitle”                    | String | Y        |            |

**Note: the subtitle section should not use style element**

##### Example

```json
{
  "type": "text",
  "text": "Wild flowers",
  "tag": "subtitle",
  "tooltip": "text tooltip"
}
```

### Body - List Picker Items

Each List Picker Item consists of an image (optional), a title, a subtitle and a button, ordered in a horizontal template.

The configuration of the List Picker Item is done as part of the [List Picker Body JSON](#body-overview).

#### List Picker Item Properties

| Property Name | Description                                                                                    | Type     | Required | Size Limit |
| :------------ | :--------------------------------------------------------------------------------------------- | :------- | :------- | :--------- |
| type          | Type of template. <br/> Must be ‘horizontal’                                                   | Enum     | Y        |            |
| elements      | Array of elements: image (optional), title, subtitle and a button. <br/> Must be in that order | Elements | Y        |            |


#### List Picker Item Elements Configurations

The List Picker Item elements are based on the basic [Structured Content basic elements](structured-content-introduction-to-structured-content.html#basic-elements) with some limitations.

The following section describes those elements and their specific configuration properties.

##### Image Element Properties

Based on the [Structured Content Basic Element Image](structured-content-introduction-to-structured-content.html#image) element with the following restrictions:

| Property Name | Description                                                         | Type   | Required | Size Limit |
| :------------ | :------------------------------------------------------------------ | :----- | :------- | :--------- |
| type          | Type of element. <br/> Must be 'image'                              | Enum   | Y        |            |
| uri           | Image URL. <br/> Must be whitelisted by a LivePerson representative | String | Y        |            |

**Note: The image section should not use style element**

##### Title Element Properties

Based on the [Structured Content Basic Element Text](structured-content-introduction-to-structured-content.html#text) element with the following restrictions:

| Property Name | Description                                                                                                   | Type      | Required | Size Limit |
| :------------ | :------------------------------------------------------------------------------------------------------------ | :-------- | :------- | :--------- |
| type          | Type of element. <br/> Must be 'text'                                                                         | Enum      | Y        |            |
| style         | Styling elements of the title. </br>Must have the following properties:<br/>{ "bold":true,<br/>			"size":"large"} | Container | Y        |            |
| tag           | Must be “title”                                                                                             | String    | Y        |            |

##### Subtitle Element Properties

Based on the [Structured Content Basic Element Text](structured-content-introduction-to-structured-content.html#text) element with the following restrictions:

| Property Name | Description                           | Type   | Required | Size Limit |
| :------------ | :------------------------------------ | :----- | :------- | :--------- |
| type          | Type of element. <br/> Must be 'text' | Enum   | Y        |            |
| tag           | Must be “subtitle”                  | String | Y        |            |

**Note: The subtitle section should not use style element**

##### Button Element Properties

Based on the [Structured Content Basic Element Button](structured-content-introduction-to-structured-content.html#button) element with the following restrictions:

| Property Name | Description                                        | Type | Required | Size Limit |
| :------------ | :------------------------------------------------- | :--- | :------- | :--------- |
| type          | Type of element. <br/> Must be 'button'            | Enum | Y        |            |
| click         | Click operation must use “publishText” type only | Enum | Y        |            |

**Note: The button section should not use style element**


#### List Picker Item JSON Example

```json
{
  "Type": "horizontal",
  "elements": [
    {
      "type": "image",
      "url": "https://cdn.macrumors.com/article-new/2017/09/Flowersexfrontback-800x573.jpg",
      "tooltip": "Flowerse X"
    },
    {
      "type": "vertical",
      "elements": [
        {
          "type": "text",
          "tag": "title",
          "text": "Flowerse X",
          "tooltip": "Title",
          "style": {
            "bold": true,
            "size": "large"
          }
        },
        {
          "type": "text",
          "tag": "subtitle",
          "text": "Black",
          "tooltip": "Black"
        },
        {
          "type": "button",
          "tooltip": "Add to cart",
          "title": "Add to cart",
          "click": {
            "actions": [
              {
                "type": "publishText",
                "text": "Flowerse X Added"
              }
            ],
            "metadata": [
              {
                "type": "ExternalId",
                "id": "Flowerse X"
              }
            ]
          }
        }
      ]
    }
  ]
}
```
