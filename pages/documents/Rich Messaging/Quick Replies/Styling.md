---
title: Styling
Keywords:
level1: Documents
level2: Rich Messaging
level3: Quick Replies
order: 20
permalink: rich-messaging-quick-replies-styling.html
indicator: messaging
---

Each Quick Reply chip can have its own style elements.

### Fields

| Property Name | Description | Type |
| :--- | :--- | :--- |
| bold | Whether the text is bold or not | Boolean |
| italic | Whether the text is in italics or not | Boolean |
| color | Defines the chip's color | String - hex color |
| border-color | Defines the chip's background color | String - hex color |
| border-radius | Defines the element's background color | Number |
| background-color | Defines the element's background color | String - hex color |
| size | Defines the element's size | Enum - small/medium/large |

### Example

```json
"style": {
	"bold": true,
	"italic": true,
	"color": "#453533",
	"border-color": "#000000",
	"border-radius": 5,
	"background-color": "#3E47A0",
	"size": "small"
}
```
