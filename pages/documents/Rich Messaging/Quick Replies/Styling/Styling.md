---
title: Styling
Keywords:
level1: Documents
level2: Rich Messaging
level3: Quick Replies
order: 20
permalink: rich-messaging-quick-replies-styling.html
indicator: both
---

Each quick reply chip can have style elements.

### Fields

<table>
<thead>
  <tr>
    <td>Property Name</td>
    <td>Description</td>
    <td>Type</td>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>bold</td>
    <td>Whether the text is bold or not</td>
    <td>Boolean</td>
  </tr>
  <tr>
    <td>italic</td>
    <td>Whether the text is in italics or not</td>
    <td>Boolean</td>
  </tr>
  <tr>
    <td>color</td>
    <td>Defines the chip's color</td>
    <td>String - hex color</td>
  </tr>
  <tr>
    <td>border-color</td>
    <td>Defines the chip's background color</td>
    <td>String - hex color</td>
  </tr>
  <tr>
    <td>border-radius</td>
    <td>Defines the element's background color</td>
    <td>Number</td>
  </tr>
  <tr>
    <td>background-color</td>
    <td>Defines the element's background color</td>
    <td>String - hex color</td>
  </tr>
  <tr>
    <td>size</td>
    <td>Defines the element's size</td>
    <td>Enum - small/medium/large</td>
  </tr>
  </tbody>
</table>


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