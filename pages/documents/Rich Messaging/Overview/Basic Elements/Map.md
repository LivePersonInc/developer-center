---
title: Map
Keywords:
level1: Documents
level2: Rich Messaging
level3: Getting Started
level4: Basic Elements
order: 70
permalink: rich-messaging-basic-elements-map.html
indicator: both
---

Map that points to a specific location.

### Example

```json
{
	"type": "map",
  "la": 40.75620,
  "lo": -73.99861,
	"click": {
		"metadata": [{
	        }],
    "actions": [{
        "type": "navigate",
        "la": 40.75620,
        "lo": -73.99861,
		}]
	},
	"tooltip": "map tooltip"
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
  </tr>
	</thead>
	<tbody>
  <tr>
    <th>type</th>
    <th>Type of element. Must be map</th>
    <th>Enum</th>
    <th>Y</th>
  </tr>
  <tr>
    <th>lo</th>
    <th>Longitude</th>
    <th>Float</th>
    <th>Y</th>
  </tr>
  <tr>
    <th>la</th>
    <th>Latitude</th>
    <th>Float</th>
    <th>Y</th>
  </tr>
  <tr>
    <th>click</th>
    <th>On-click operation (included metadata and/or actions clauses)</th>
    <th>???</th>
    <th>???</th>
  </tr>
  <tr>
    <th>tooltip</th>
    <th>Map tooltip, used also as aria</th>
    <th>String</th>
    <th>N</th>
  </tr>
	</tbody>
</table>


For the Metadata field, please see the Metadata section in the [Click Operations](https://developers.liveperson.com/rich-messaging-click-ops.html) section.
