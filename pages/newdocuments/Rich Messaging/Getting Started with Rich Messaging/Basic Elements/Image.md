---
pagename: Image
redirect_from:
  - rich-messaging-basic-elements-image.html
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Getting Started
subfoldername: Basic Elements
order: 60
permalink: getting-started-with-rich-messaging-basic-elements-image.html
indicator: both
---

You can send images by sharing a URL. Supported formats are JPG and PNG. Since, in this case, images are not stored on LivePerson servers, there is no file size limit when using images within a Structured Content image element.

### Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of element. Must be image | Enum | Y |  |
| url | Image URL | String | Y | 2048 chars |
| caption | Image caption | String | N | 128 chars |
| rtl | This parameter changes the direction of text only from left to right to right to left (for languages like Hebrew, Arabic, Urdu, etc). Default is false | Boolean | N |  |
| click | On-click operation (included metadata and/or actions clauses) |  |  |  |
| tooltip | Image tooltip, used also as aria | String | N |  |
| style | Styling elements | Container | N | |

For the 'click' field, please see the [Click Operations](rich-messaging-click-ops.html) section.

For the 'style' field, please see the [Rich Messaging Basic Elements Styling](rich-messaging-styling.html) section.

**Note**: Image domains must be added to a whitelist via internal LivePerson configuration (Houston). Please note that you must add all domains to this list manually as wildcards are not supported. All domains must be HTTPS secure.

### Example

```json
{
	"type": "image",
	"url": "https://cdn.bgr.com/2016/08/iphone-8-concept.jpg?quality=98&strip=all",
	"caption": "This is an example of image caption",
	"click": {
		"metadata": [{
	        }],
    "actions": [{
      "type": "link",
      "name": "Add to cart",
      "uri": "https://www.example.com"
		}]
	},
	"tooltip": "image tooltip",
	"rtl" : true
}
```
