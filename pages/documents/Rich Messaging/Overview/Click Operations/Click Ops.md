---
title: Click Operations
Keywords:
level1:
level2: Rich Messaging
level3: Getting Started
order: 20
permalink: getting-started-click-operations.html
indicator: both
---

An element which has an "actions" field, an on-click operation (executed when the consumer clicks on the element) and a metadata field.

### Objects

On-click operations can result from two object types:

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
    <th>Actions</th>
    <th>List of actions to execute (Navigate/Link/publish text)</th>
    <th>action</th>
    <th>N</th>
    <th>4 actions per element</th>
  </tr>
  <tr>
    <th>Metadata</th>
    <th>list of UMS predefined objects to send back to the agent</th>
    <th>???</th>
    <th>N</th>
    <th></th>
  </tr>
  </tbody>
</table>


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
    <th>Type of action. Must be navigate</th>
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
    <th>Y
</th>
  </tr>
  </tbody>
</table>


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
    <th>Type of action. Must be link</th>
    <th>Enum</th>
    <th>Y</th>
    <th></th>
  </tr>
  <tr>
    <th>uri</th>
    <th>The url to open</th>
    <th>String</th>
    <th>Y
</th>
    <th>2048 chars</th>
  </tr>
  </tbody>
</table>


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
