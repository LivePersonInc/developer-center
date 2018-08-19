---
title: "Basic Layout Body - Item Section"
Keywords:
sitesection: Documents
level2: Rich Messaging
level3: Apple Business Chat Templates
level4: List Picker
order: 70
permalink: rich-messaging-connectors-abc-listpicker-body-item.html
indicator: messaging
---

Each List Picker Item consists of an image (optional), a title, a subtitle and a button, ordered in a horizontal layout.

The configuration of the List Picker Item is done as part of the [List Picker Body JSON](rich-messaging-connectors-abc-listpicker-body.html).

### List Picker Item Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of layout. <br/> Must be ‘horizontal’ | Enum | Y |  |
| elements | Array of elements: image (optional), title, subtitle and a button. <br/> Must be in that order | Elements | Y |  |


### List Picker Item Elements Configurations

The List Picker Item elements are based on the basic [Rich Messaging elements](rich-messaging-getting-started.html) with some limitations.

The following section describes those elements and their specific configuration fields.

#### Image Element Fields

Based on the [Rich Messaging Image](rich-messaging-basic-elements-image.html) element with the following restrictions:

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of element. <br/> Must be 'image' | Enum | Y |  |
| uri | Image URL. <br/> Must be whitelisted by a LivePerson representative | String | Y |  |

**Note: The image section should not use style element**

#### Title Element Fields

Based on the [Rich Messaging Text](rich-messaging-basic-elements-text.html) element with the following restrictions:

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of element. <br/> Must be 'text' | Enum | Y |  |
| style | Styling elements of the title. </br>Must have the following fields:<br/>{ "bold":true,<br/>			"size":"large"}  | Container | Y |  |
| Tag | Must be “title” | String | Y |  |

#### Subtitle Element Fields

Based on the [Rich Messaging Text](rich-messaging-basic-elements-text.html) element with the following restrictions:

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of element. <br/> Must be 'text' | Enum | Y |  |
| Tag | Must be “subtitle” | String | Y |  |

**Note: The subtitle section should not use style element**

#### Button Element Fields

Based on the [Rich Messaging Button](rich-messaging-basic-elements-button.html) element with the following restrictions:

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of element. <br/> Must be 'button' | Enum | Y |  |
| click | Click operation must use “publishText” type only  | Enum | Y |  |

**Note: The button section should not use style element**


### List Picker Item JSON Example

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
