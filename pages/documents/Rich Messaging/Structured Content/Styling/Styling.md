---
title: Styling
Keywords:
level1: Documents
level2: Rich Messaging
level3: Structured Content
order: 20
permalink: rich-messaging-structured-content-styling.html
indicator: both
---

Each basic element can have style elements.

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
    <td>Defines the element's color</td>
    <td>String - hex color</td>
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
	"background-color": "#3E47A0",
	"size": "small"
}
```
