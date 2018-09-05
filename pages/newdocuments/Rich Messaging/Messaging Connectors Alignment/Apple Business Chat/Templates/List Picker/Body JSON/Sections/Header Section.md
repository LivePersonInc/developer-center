---
pagename: "Basic Layout Body - Header Section"
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Apple Business Chat Templates
subfoldername: List Picker
order: 60
permalink: rich-messaging-connectors-abc-listpicker-body-header.html
indicator: messaging
---

The List Picker Header consists of a Title and a Subtitle.

The configuration of the header is done as part of the [List Picker Body JSON](rich-messaging-connectors-abc-listpicker-body.html).

### List Picker Header Title

#### Fields

Based on the [Rich Messaging Text](rich-messaging-basic-elements-text.html) element with the following restrictions:

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of element. <br/> Must be ‘text’ | Enum | Y |  |
| style | Styling elements of the title. </br>Must have the following fields:<br/>{ "bold":true,<br/>			"size":"large"}  | Container | N |  |
| tag | Must be “title” | String | Y |  |

#### Example

```json
{
  "type": "text",
  "text": "Flowers",
  "Tag": "title",
  "tooltip": "text tooltip",
  "style": {
    "bold": true,
    "size": "large"
  }
}
```

### List Picker Header Subtitle

#### Fields

Based on the [Rich Messaging Text](rich-messaging-basic-elements-text.html) element with the following restrictions:

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of element. <br/> Must be ‘text’ | Enum | Y |  |
| tag | Must be “subtitle” | String | Y |  |

**Note: the subtitle section should not use style element**

#### Example

```json
{
  "type": "text",
  "text": "Wild flowers",
  "Tag": "subtitle",
  "tooltip": "text tooltip"
}
```
