---
title: Button
Keywords:
level1: Documents
level2: Rich Messaging
level3: Getting Started
level4: Basic Elements
order: 50
permalink: rich-messaging-basic-elements-button.html
indicator: both
---

A simple Button which triggers an Action when clicked.

### Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of element. Must be 'button' | Enum | Y |  |
| title | Button title | String | Y | 128 chars |
| click | On-click operation (included metadata and/or actions clauses) |  | Y | |
| tooltip | Button tooltip, used also as aria | String | N | 256 chars |
| style | Styling elements | Container | N | |
| rtl | This parameter changes the direction of text only from left to right to right to left (for languages like Hebrew, Arabic, Urdu, etc). Default is false. | Boolean | N |  |

For the 'click' field, please see the [Click Operations](rich-messaging-click-ops.html) section.

For the 'style' field, please see the [Rich Messaging Basic Elements Styling](rich-messaging-styling.html) section.

### Example

```json
{
	"type": "button",
	"title": "Push Me!",
	"click": {
		"metadata": [{
	        }],
		"actions": [{
        "type": "link",
        "name": "Add to cart",
        "uri": "https://www.example.com"
		}]
	},
	"tooltip": "button tooltip",
	"rtl": true
}
```
