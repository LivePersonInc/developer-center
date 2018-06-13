---
title: Structured Content
Keywords:
level1: Documents
level2: Guides
level3: Rich Messaging

level-order: 9
order: 10
permalink: rich-messaging-quick-replies.html
indicator: both
---

## Specifications

**Fields**

| Property Name | Description                                          | Type           | Required |
|---------------|------------------------------------------------------|----------------|----------|
| type          | Must be `quickReplies`.                              | String         | Y        |
| itemsPerRow   | Number of items per row.                             | Number         | Y        |
| replies       | A list of chips. A maximum of 24 items is allowed.   | Array<Chip>    | Y        |


**Chip**

| Property Name | Description                                                           | Type          | Required |
|---------------|-----------------------------------------------------------------------|---------------|----------|
| type          | Must be `button`.                                                     | String        | Y        |
| title         | The text to display on the chip. A maximum of 128 chars.              | Array<Chip>   | Y        |
| tooltip       | The text to display when hovering the chip. A maximum of 256 chars.   | String        | N        |
| click         | Actions triggered and/or metadata reported when a chip is clicked.    | Container     | N        |
| style         | Styling elements for the chip.                                        | Container     | N        |

### Click Operations

An element which has an "actions" field, has an on-click operation that is executed when the consumer clicks on the element.

On-click operations can result from two object types:

 * Actions: a list of actions to execute (Navigate/Link/publish text).

 * Metadata: list of UMS predefined objects to send back to the agent.

#### Actions

Actions are a list of applicative actions that will run on the consumer side and will help them to achieve some kind of operation. For instance: navigate with one of the navigation apps to a predefined place.

**Note**: Only button, image, and map objects can receive the actions field.

Types of actions supported by the platform:

 - Navigate
 - Link
 - publish text

**Navigate**

This actions has two use cases:

* Web: open google maps with the location.

* Mobile: navigate to the location with one of the navigation apps.

_Example_

```json
{
	"type": "navigate",
	"lo": 40.75620,
	"la": -73.99861
}
```
_Fields_

| Property Name | Description                                 | Type   | Required |
|---------------|---------------------------------------------|--------|----------|
| type          | Type of action. Must be navigate            | Enum   | Y        |
| lo            | Longitude                                   | Float  | Y        |
| la            | Latitude                                    | Float  | Y        |


**Link**

Open a URL in a web view when opened in mobile, or in a new tab for web. This action can be used for deep link purposes.

_Example_

```json
{
	"type": "link",
	"uri": "www.google.com"
}
```

_Fields_

| Property Name | Description                     | Type   | Required |
|---------------|---------------------------------|--------|----------|
| type          | Type of action. Must be link    | Enum   | Y        |
| uri           | The url to open                 | String | Y        |


**Publish text**

In order to support quick replies and to be able to send a message as a response for a button click, we introduced a new action called “Publish text”. This action allows to the brand to send a message on behalf of the consumer that will appear in the transcript.

This action will be used also by the clients (Mobile, VX) to send a response when a quick reply button was clicked.

Note: each basic element can hold only one action.

_Example_
```json
{
	"type": "publishText",
	"text": "text to send on behalf of the consumer"
}
```

#### Metadata

Metadata is a list of UMS predefined objects that can be sent back to the agent and be used in reporting. Metadata must be used inside a click block. For a more in depth guide on how metadata in Structured Content works, please refer to the [Conversation Metadata guide](guides-conversation-metadata-guide.html).

### Styling
Each chip can have its own style elements.
A full list of style attributes is available here<TODO_ADD_LINK_TO_STYLING.md>

### Example

```json
{
  "type": "quickReplies",
  "itemsPerRow": 8,
  "replies": [
    {
      "type": "button",
      "tooltip": "yes i do",
      "title": "yes",
      "click": {
        "actions": [
          {
            "type": "publishText",
            "text": "yep"
          }
        ],
        "metadata": [
          {
            "type": "ExternalId",
            "id": "Yes-1234"
          }
        ]
      },
      "style": {
        "color": "#fff",
        "border-color": "#444",
        "background-color": "#333",
        "border-radius": 25,
        "bold": true
      }
    },
    {
      "type": "button",
      "tooltip": "No!",
      "title": "No!",
      "click": {
        "actions": [
          {
            "type": "publishText",
            "text": "No!"
          }
        ],
        "metadata": [
          {
            "type": "ExternalId",
            "id": "No-4321"
          }
        ]
      }
    }
  ]
}
```