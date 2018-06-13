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

Simple Button which triggers an Action when clicked.

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

### Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of element. Must be button | Enum | Y |  |
| title | Button title | String | Y | 128 chars |
| click | On-click operation (included metadata and/or actions clauses) |  | Y | |
| tooltip | Button tooltip, used also as aria | String | N | 256 chars |
| rtl | This parameter changes the direction of text only from left to right to right to left (for languages like Hebrew, Arabic, Urdu, etc). Default is false. | Boolean | N |  |

For the Metadata field, please see the Metadata section in the [Click Operations](https://developers.liveperson.com/rich-messaging-click-ops.html) section.
