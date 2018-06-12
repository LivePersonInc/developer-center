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
    <th>Type of element. Must be button</th>
    <th>Enum</th>
    <th>Y</th>
    <th></th>
  </tr>
  <tr>
    <th>title</th>
    <th>Button title</th>
    <th>String</th>
    <th>Y</th>
    <th>128 chars</th>
  </tr>
  <tr>
    <th>click</th>
    <th>On-click operation (included metadata and/or actions clauses)</th>
    <th>???</th>
    <th>???</th>
    <th></th>
  </tr>
  <tr>
    <th>tooltip</th>
    <th>Button tooltip, used also as aria</th>
    <th>String</th>
    <th>N</th>
    <th>256 chars</th>
  </tr>
  <tr>
    <th>rtl</th>
    <th>This parameter changes the direction of text only from left to right to right to left (for languages like Hebrew, Arabic, Urdu, etc). Default is false.</th>
    <th>Boolean</th>
    <th>N</th>
    <th></th>
  </tr>
	</tbody>
</table>


For the Metadata field, please see the Metadata section in the [Click Operations](https://developers.liveperson.com/rich-messaging-click-ops.html) section.
