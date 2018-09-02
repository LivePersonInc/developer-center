---
pagename: Actions
redirect_from:
  - rich-messaging-click-ops-actions.html
Keywords:
sitesection: Documents
categoryname: "Rich Media"
documentname: Getting Started
subfoldername: Click Operations
order: 90
permalink: getting-started-with-rich-messaging-click-operations-actions.html
indicator: both
---

Actions are a list of applicative actions that will run on the consumer side and will help them to achieve some kind of an operation. For instance: navigate with a third party navigation app to a predefined place.

**Note**: Only button, image and map objects can receive the actions field.

Types of actions supported by the platform:

* Navigate

* Link

* Publish Text

### Navigate

This actions has two use cases:

* Web: open Google Maps with the location preselected.

* Mobile: navigate to the location with a third party navigation app.

#### Fields

| Property Name | Description | Type | Required |
| :--- | :--- | :--- | :--- |
| type | Type of action. Must be navigate | Enum | Y |
| lo | Longitude | Float | Y |
| la | Latitude | Float | Y |

#### Example

```json
{
	"type": "navigate",
	"lo": 40.75620,
	"la": -73.99861
}
```

### Link

Open a URL in a web view when opened in mobile, or in a new tab for web. This action can be used for deep link purposes.

Each environment can override the URI for their specific needs.

#### Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of action. Must be link | Enum | Y |  |
| uri | The url to open | String | Y | 2048 chars |

#### Example

```json
{
	"type": "link",
	"uri": "www.google.com",
	"ios": {
		"uri": "specific uri for iOS"
	},
	"android": {
		"uri": "specific uri for Android"
	},
	"web": {
		"uri": "specific uri for Web"
	}
}
```

### Publish Text

In order to support sending a message as a response for a button click, we introduced a new action called "Publish Text".
This action allows the brand to send a message on behalf of the consumer that will appear in the transcript.

This action will be used also by the clients (the Mobile Messaging App for example or LiveEngage's window) to send a response when a button was clicked.

#### Fields

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of action. Must be 'publishText' | Enum | Y |  |
| text | The text to display in the transcript once the action was clicked | String | Y | 5000 chars |


#### Example

```json
 {
   "type": "publishText",
   "text": "text to send on behalf of the consumer"
 }
```
