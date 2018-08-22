---
pagename: Map
redirect_from:
  - rich-messaging-basic-elements-map.html
Keywords:
sitesection: Documents
categoryname: Rich Messaging
documentname: Getting Started
subfoldername: Basic Elements
order: 70
permalink: getting-started-basic-elements-map.html
indicator: both
---

Map that points to a specific location.

### Fields

| Property Name | Description | Type | Required |
| :--- | :--- | :--- | :--- |
| type | Type of element. Must be map | Enum | Y |
| lo | Longitude | Float | Y |
| la | Latitude | Float | Y |
| click | On-click operation (included metadata and/or actions clauses) |  |  |
| tooltip | Map tooltip, used also as aria | String | N |
| style | Styling elements  | Container | N | |

For the 'click' field, please see the [Click Operations](rich-messaging-click-ops.html) section.

For the 'style' field, please see the [Rich Messaging Basic Elements Styling](rich-messaging-styling.html) section.

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
