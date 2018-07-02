---
title: Structured Content Templates
Keywords:
level1: 
level2: Guides
level3: Structured Content

level-order: 9
order: 10
permalink: structured-content-templates.html
root-link: true
indicator: both
---

### Overview

Our solution allows to send messages (both Chat messages and "pure" Messaging) in a variety of ways: you can send simple text and images, or use our structured content templates to build your own layout with images, buttons and multiple actions in one message. The following document lists the different types of entries available for use with such a layout and includes templates for how to write them in JSON.

You can use [this tool](https://livepersoninc.github.io/json-pollock/editor/) to render your JSON in advance and get a sense of how your card will look. For more information on how this tool works, please see [this document](rich-messaging-structured-content-pollock.html).

Below, you can find specifications for each element of a Structured Content card. To view a complete example of a card, please scroll to the bottom of the document or [click here](https://developers.liveperson.com/structured-content-templates.html#json-examples) to view the examples.

### Specifications

**Basic elements**

Basic elements are the core components of the structured content messaging template. By using this element in your template, you can send basic messages, such as simple text, images or buttons. You can also send a card which includes multiple basic elements with attached actions.

Please refer to the limitation section for basic elements limitations.

Types of basic elements supported by the platform:

 * Text
 * Button
 * Image
 * Map

##### **Text**

Simple plain text message.

**Example**

```json
{
	"type": "text",
	"text": "This is an example for text element",
	"tooltip": "text tooltip",
	"rtl" : true
}
```
**Fields**

| Property Name | Description                      | Type    | Required |
|---------------|----------------------------------|---------|----------|
| type          | Type of element. Must be text.   | Enum    | Y        |
| text          | The message.                     | String  | Y        |
| tooltip       | Text tooltip, used also as aria. | String  | N        |
| rtl           | This parameter changes the direction of text only from left to right to right to left (for languages like Hebrew, Arabic, Urdu, etc). Default is false.                | Boolean | N        |


#### Button

Simple Button which triggers an Action when clicked.

**Example**

```json
{
	"type": "button",
	"title": "Push Me!",
	"click": {
		"metadata": [{
	        }],
		"actions": [{
        "type": "link",
        "name": "Add to cart",
        "uri": "https://www.example.com"
		}]
	},
	"tooltip": "button tooltip",
	"rtl": true
}
```
**Fields**

| Property Name | Description                       | Type    | Required |
|---------------|-----------------------------------|---------|----------|
| type          | Type of element. Must be button   | Enum    | Y        |
| title         | Button title                      | String  | Y        |
| actions       | List of Actions                   | Action  | Y        |
| tooltip       | Button tooltip, used also as aria | String  | N        |
| rtl           | This parameter changes the direction of text only from left to right to right to left (for languages like Hebrew, Arabic, Urdu, etc). Default is false.                   | Boolean | N        |

For the Metadata field, please see the Metadata section in this document, below.

#### Image

You can send images by sharing a URL. Supported formats are JPG and PNG.

**Example**

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
**Fields**

| Property Name | Description                      | Type    | Required |
|---------------|----------------------------------|---------|----------|
| type          | Type of element. Must be image   | Enum    | Y        |
| url           | Image URL                        | String  | Y        |
| caption       | Image caption                    | String  | N        |
| rtl           | This parameter changes the direction of text only from left to right to right to left (for languages like Hebrew, Arabic, Urdu, etc). Default is false                 | Boolean | N        |
| actions       | List of Actions                  | Action  | N        |
| tooltip       | Image tooltip, used also as aria | String  | N        |

For the Metadata field, please see the Metadata section in this document, below.

**Note**: all images must be hosted on an HTTPS secure URL.

#### Map

Map that points to a specific location.

**Example**

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
**Fields**

| Property Name | Description                    | Type   | Required |
|---------------|--------------------------------|--------|----------|
| type          | Type of element. Must be map   | Enum   | Y        |
| lo            | Longitude                      | Float  | Y        |
| la            | Latitude                       | Float  | Y        |
| actions       | List of Actions                | Action | N        |
| tooltip       | Map tooltip, used also as aria | String | N        |

For the Metadata field, please see the Metadata section in this document, below.

#### Complex layouts


Complex layouts have a different JSON structure - the basic elements which make up the layout are contained in another hierarchy which specifies their ordering. This adds the option to send cards with more friendly structure, including more elements and actions.

Each layout can include other basic elements or different layouts. Please check the limitations section below for more info on the limitations of complex layouts.

The layouts we support are:

 * **Vertical:** the block layout allows you to present a set of items vertically.
 * **Horizontal:** the block layout allows you to present a set of items horizontally.

#### Vertical

Layout that allows you to present a set of items (elements/layouts) vertically.

**Example**

```json
{
	"type": "vertical",
	"elements": [{
	}]
}
```
**Fields**

| Property Name | Description                       | Type              | Required |
|---------------|-----------------------------------|-------------------|----------|
| type          | Type of element. Must be vertical | Enum              | Y        |
| elements      | Array of Elements/Layouts         | Elements/Layouts  | Y        |


#### Horizontal

Layout that allows you to present a set of items (elements/layouts) horizontally.

**Example**

```json
{
	"type": "horizontal",
	"elements": [{

	}]
}
```
**Fields**

| Property Name | Description                         | Type              | Required |
|---------------|-------------------------------------|-------------------|----------|
| type          | Type of element. Must be horizontal | Enum              | Y        |
| elements      | Array of Elements/Layouts           | Elements/Layouts  | Y        |


#### Click Operations

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

Each environment can override the URI for their specific needs.


_Example_

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

**Note**: when using our APIs to communicate as a consumer (for example, by using the Messaging Window API or the Connector API, metadata should always be added to an action. This is so that our services have an indication that an element was clicked. The metadata should be sent as part of `AcceptStatusEvent` with the assigned status of `ACTION`.

If the the type of action is `publishText` (see above for an example), the metadata should be attached to the `ContentEvent` as well. This is so a certain text that is published is associated with the click which sent it.

**Style**

Each basic element can have a style.

**Fields**

| Property Name | Description | Type                      |
|---------------|-------------|---------------------------|
| bold          | Whether the text is bold or not            | Boolean                   |
| italic        | Whether the text is in italics or not            | Boolean                   |
| color         | Defines the element's color            | String - hex color        |
| background-color         | Defines the element's background color            | String - hex color        |
| size          | Defines the element's size            | Enum - small/medium/large |


**Example**

```json
"style": {
	"bold": true,
	"italic": true,
	"color": "#453533",
	"background-color": "#3E47A0",
	"size": "small"
}
```

#### JSON examples:


**Card 1:**

```json
  {
    	"type": "vertical",
    	"elements": [{
    		"type": "image",
    		"url": "https://cdn.bgr.com/2016/08/iphone-8-concept.jpg",
    		"tooltip": "image tooltip"
    	}, {
    		"type": "text",
    		"text": "product name (Title)",
    		"tooltip": "product name (Title)"
    	}, {
    		"type": "text",
    		"text": "product category (type)",
    		"tooltip": "product category (type)"
    	}, {
    		"type": "text",
    		"text": "$155.99",
    		"tooltip": "$155.99"
    	}]
    }
```

**Card 2:**

```json
      {
   	"type": "vertical",
   	"elements": [{
   		"type": "image",
   		"url": "https://cdn.bgr.com/2016/08/iphone-8-concept.jpgl",
   		"tooltip": "image tooltip"
   	}, {
   		"type": "text",
   		"text": "product name (Title)",
   		"tooltip": "text tooltip"
   	}, {
   		"type": "text",
   		"text": "product category (type)",
   		"tooltip": "text tooltip"
   	}, {
   		"type": "text",
   		"text": "$155.99",
   		"tooltip": "text tooltip"
   	}, {
   		"type": "button",
   		"title": "Add to cart",
   		"click": {
   			"metadata": [{
   				"type": "ExternalId",
   				"id": "12345678"
   			}],
   			"actions": [{
                "type": "publishText",
                "text": "consumer text"
   			}, {
   				"type": "link",
   				"ios": {
   					"uri": "specific uri for iOS"
   				},
   				"android": {
   					"uri": "specific uri for Android"
   				},
   				"web": {
   					"uri": "specific uri for Web"
   				}
   			}]
   		}
   	}, {
   		"type": "button",
   		"title": "Navigate to store",
   		"click": {
   			"metadata": [{
   				"type": "ExternalId",
   				"id": "12345678"
   			}],
   			"actions": [{
   					"type": "navigate",
            "la": 40.75620,
            "lo": -73.99861,
   				},
   				{
   					"type": "publishText",
   					"text": "consumer text"
   				}
   			]
   		}
   	}, {
   		"type": "button",
   		"title": "Navigate",
   		"click": {
   			"metadata": [{
   				"type": "ExternalId",
   				"id": "12345678"
   			}],
   			"actions": [{
   					"type": "navigate",
   					"lo": 40.75620,
   					"la": -73.99861
   				},
   				{
   					"type": "publishText",
   					"text": "consumer text"
   				}
   			]
   		}
   	}]
   	}
```

### Limitations

#### Maps

Both the web window (visitor side) and the workspace (agent side) do not show map by user-specific location but instead shows a static snapshot, the default map view defined.

#### Styling

**Mobile**

1. Only the following parameters can be configured in Bubble branding when using the In-App SDK. All other attributes are inherited from the SDK configuration:

  * Card border width

  * Card border color

2. Structured content JSON affects text formatting in the structured content “Text” element. Only the following parameters can be configured for the "Text" element:

  * Font size

  * Font style (Italic, Bold)

  * Font color

  * Background color

**Web (Chat/Messaging)**

You cannot customize the branding of the structured content bubble in the web window view. Cards may be branded using the JSON schema only.

### Accessibility

Structured Content does not yet contain Accessibility support. This is planned for 2018.

### Structured Content Notes

1. Image domains must be added to a whitelist via internal LivePerson configuration (Houston). Please note that you must add all domains to this list manually as wildcards are not supported. All domains must be HTTPS secure.
