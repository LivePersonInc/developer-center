---
title: Styling
Keywords:
level1: Documents
level2: Rich Messaging
level3: Getting Started
order: 110
permalink: rich-messaging-styling.html
indicator: both
---

Each basic element can have style elements.

### Fields

| Property Name | Description | Type |
| :--- | :--- | :--- |
| bold | Whether the text is bold or not | Boolean |
| italic | Whether the text is in italics or not | Boolean |
| color | Defines the element's color | String - hex color |
| background-color | Defines the element's background color | String - hex color |
| size | Defines the element's size | Enum - small/medium/large |

### Example

```json
"style": {
	"bold": true,
	"italic": true,
	"color": "#453533",
	"background-color": "#3E47A0",
	"size": "small"
}
```
