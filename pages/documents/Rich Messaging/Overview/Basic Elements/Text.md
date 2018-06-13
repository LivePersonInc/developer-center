---
title: Text
Keywords:
level1: Documents
level2: Rich Messaging
level3: Getting Started
level4: Basic Elements
order: 40
permalink: rich-messaging-basic-elements-text.html
indicator: both
---

Simple plain text message.

### Example

```json
{
	"type": "text",
	"text": "This is an example for text element",
	"tooltip": "text tooltip",
	"rtl" : true
}
```

### Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of element. Must be text. | Enum | Y | |
| text | The message | String | Y | 5000 chars |
| tooltip | Text tooltip, used also as aria | String | N | 256 chars |
| rtl | This parameter changes the direction of text only from left to right to right to left (for languages like Hebrew, Arabic, Urdu, etc). Default is false. | Boolean | N | |
