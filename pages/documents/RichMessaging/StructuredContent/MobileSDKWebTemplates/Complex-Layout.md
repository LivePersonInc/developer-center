---
pagename: Complex Layout
redirect_from:
  - rich-messaging-structured-content-complex-layout.html
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Structured Content
subfoldername: Mobile SDK and Web Templates
order: 10
permalink: structured-content-mobile-sdk-and-web-templates-complex-layout.html
indicator: both
---

Complex templates have a different JSON structure - the basic elements which make up the template are contained in another hierarchy which specifies their ordering.
This adds the option to send Structured Content templates with more friendly structure, including more [elements and actions](rich-messaging-getting-started.html).

Each template can include other basic elements or different templates.

**Supported Templates**

* **Vertical:** the block template allows you to present a set of items vertically.

* **Horizontal:** the block template allows you to present a set of items horizontally.

### Vertical

Template that allows you to present a set of items (elements/templates) vertically.

#### Properties

| Property Name | Description                       | Type             | Required | Size Limit   |
| :------------ | :-------------------------------- | :--------------- | :------- | :----------- |
| type          | Type of element. Must be vertical | Enum             | Y        |              |
| elements      | Array of Elements/Templates         | Elements/Templates | Y        | 256 elements |

#### Example

```json
{
	"type": "vertical",
	"elements": [{
	}]
}
```

### Horizontal

Template that allows you to present a set of items (elements/templates) horizontally.

#### Properties

| Property Name | Description                         | Type             | Required | Size Limit   |
| :------------ | :---------------------------------- | :--------------- | :------- | :----------- |
| type          | Type of element. Must be horizontal | Enum             | Y        |              |
| elements      | Array of Elements/Templates           | Elements/Templates | Y        | 256 elements |

#### Example

```json
{
	"type": "horizontal",
	"elements": [{

	}]
}
```
