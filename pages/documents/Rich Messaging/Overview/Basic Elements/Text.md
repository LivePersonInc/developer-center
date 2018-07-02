---
title: Text
Keywords:
level1:
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

<table>
<thead>
  <tr>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
    <th>Size Limit</th>
  </tr>
	</thead>
	<tbody>
  <tr>
    <th>type</th>
    <th>Type of element. Must be text.</th>
    <th>Enum</th>
    <th>Y</th>
    <th></th>
  </tr>
  <tr>
    <th>text</th>
    <th>The message.</th>
    <th>String</th>
    <th>Y</th>
    <th>5000 chars</th>
  </tr>
  <tr>
    <th>tooltip</th>
    <th>Text tooltip, used also as aria.</th>
    <th>String</th>
    <th>N</th>
    <th>256 chars</th>
  </tr>
  <tr>
    <th>rtl</th>
    <th>This parameter changes the direction of text only from left to right to right to left (for languages like Hebrew, Arabic, Urdu, etc). Default is false.</th>
    <th>Boolean</th>
    <th>N
</th>
    <th></th>
  </tr>
	</tbody>
</table>
