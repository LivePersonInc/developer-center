---
pagename: Styling
redirect_from:
  - rich-messaging-quick-replies-styling.html
Keywords:
sitesection: Documents
categoryname: Rich Messaging
documentname: Quick Replies
order: 20
permalink: quick-replies-styling.html
indicator: messaging
---

Each Quick Reply chip can have its own style elements.
<br/>
Additional styling configuration is available for Mobile SDK: [Android](android-attributes.html#quick-replies) | [iOS](consumer-experience-ios-sdk-attributes.html#quick-reply)

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
