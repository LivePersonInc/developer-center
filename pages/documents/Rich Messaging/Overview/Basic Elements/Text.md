---
pagename: Text
redirect_from:
  - rich-messaging-basic-elements-text.html
Keywords:
sitesection: Documents
categoryname: Rich Messaging
documentname: Getting Started
subfoldername: Basic Elements
order: 40
permalink: getting-started-basic-elements-text.html
indicator: both
---

Simple plain text message.

### Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of element. Must be text. | Enum | Y | |
| text | The message | String | Y | 5000 chars |
| tooltip | Text tooltip, used also as aria | String | N | 256 chars |
| style | Styling elements  | Container | N | |
| rtl | This parameter changes the direction of text only from left to right to right to left (for languages like Hebrew, Arabic, Urdu, etc). Default is false. | Boolean | N | |

For the 'style' field, please see the [Rich Messaging Basic Elements Styling](rich-messaging-styling.html) section.

### Example

```json
{
	"type": "text",
	"text": "This is an example for text element",
	"tooltip": "text tooltip",
	"rtl" : true
}
```
