---
title: Complex Layout
Keywords:
level1:
level2: Rich Messaging
level3: Structured Content

level-order: 2
order: 10
permalink: structured-content-complex-layout.html
root-link: true
indicator: both
---

Complex layouts have a different JSON structure - the basic elements which make up the layout are contained in another hierarchy which specifies their ordering.
This adds the option to send Structured Content templates with more friendly structure, including more elements and actions.

Each layout can include other basic elements or different layouts.

**Supported Layouts**

* **Vertical:** the block layout allows you to present a set of items vertically.

* **Horizontal:** the block layout allows you to present a set of items horizontally.

### Vertical

Layout that allows you to present a set of items (elements/layouts) vertically.

**Example**

```json
{
	"type": "vertical",
	"elements": [{
	}]
}
```

##### **Fields**

<table>
<thead>  
<tr>
    <th>Property Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
    <th>Size limit</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <th>type</th>
    <th>Type of element. Must be vertical</th>
    <th>Enum</th>
    <th>Y</th>
    <th></th>
  </tr>
  <tr>
    <th>elements</th>
    <th>Array of Elements/Layouts</th>
    <th>Elements/Layouts</th>
    <th>Y
</th>
    <th>256 elements</th>
  </tr>
  </tbody>
</table>


### Horizontal

Layout that allows you to present a set of items (elements/layouts) horizontally.

**Example**

```json
{
	"type": "horizontal",
	"elements": [{

	}]
}
```

##### **Fields**

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
    <th>Type of element. Must be horizontal</th>
    <th>Enum</th>
    <th>Y</th>
    <th></th>
  </tr>
  <tr>
    <th>elements</th>
    <th>Array of Elements/Layouts</th>
    <th>Elements/Layouts</th>
    <th>Y
</th>
    <th>256 elements</th>
  </tr>
  </tbody>
</table>
