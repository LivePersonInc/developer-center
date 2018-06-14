---
title: Click Operations
Keywords:
level1: Documents
level2: Rich Messaging
level3: Getting Started
order: 80
permalink: rich-messaging-click-ops.html
indicator: both
---

An element which has an "actions" field, an on-click operation (executed when the consumer clicks on the element) and a metadata field.

### Objects

On-click operations can result from two object types:

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| Actions | List of actions to execute (Navigate/Link/publish text) | action | N | 4 actions per element |
| Metadata | list of UMS predefined objects to send back to the agent |  | N |  |

### Actions

Actions are a list of applicative actions that will run on the consumer side and will help them to achieve some kind of an operation. For instance: navigate with one of the navigation apps to a predefined place.

**Note**: Only button, image and map objects can receive the actions field.

Types of actions supported by the platform:

* Navigate

* Link

* Publish Text

#### Navigate

This actions has two use cases:

* Web: open google maps with the location.

* Mobile: navigate to the location with one of the navigation apps.

**Example**

```json
{
	"type": "navigate",
	"lo": 40.75620,
	"la": -73.99861
}
```

##### **Fields**

| Property Name | Description | Type | Required |
| :--- | :--- | :--- | :--- |
| type | Type of action. Must be navigate | Enum | Y |
| lo | Longitude | Float | Y |
| la | Latitude | Float | Y |

#### Link

Open a URL in a web view when opened in mobile, or in a new tab for web. This action can be used for deep link purposes.

Each environment can override the URI for their specific needs.

**Example**

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

##### **Fields**

| Property Name | Description | Type | Required | Size Limit |
| :--- | :--- | :--- | :--- | :--- |
| type | Type of action. Must be link | Enum | Y |  |
| uri | The url to open | String | Y | 2048 chars |

#### Publish Text

In order to support sending a message as a response for a button click, we introduced a new action called "Publish Text".
This action allows the brand to send a message on behalf of the consumer that will appear in the transcript.

This action will be used also by the clients (Mobile, VX) to send a response when a button was clicked.

**Example**

```json
 {
   "type": "publishText",
   "text": "text to send on behalf of the consumer"
 }
```

### Metadata

Metadata is a list of UMS predefined objects that can be sent back to the agent and be used in reporting. Metadata must be used inside a click block. For a more in depth guide on how metadata in Structured Content works, please refer to the [Conversation Metadata guide](https://developers.liveperson.com/guides-conversation-metadata-guide.html).
