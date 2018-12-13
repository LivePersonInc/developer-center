---
pagename: Introduction to Structured Content
redirect_from:
  - rich-messaging-structured-content-overview.html
  - structured-content-templates.html
  - structured-content-overview.html
  - structured-content-introduction-to-structured-content.html
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Getting Started with Rich Messaging
permalink: getting-started-with-rich-messaging-introduction-to-structured-content.html
root-link: true
indicator: both
---

### What is Structured Content

Most conversations involve plain text like what you are reading now. However, sometimes you may want to send content (images, buttons, maps, etc) to a consumer in a more clear, rich, and _structured_ format. This _structured content_ is persistent in the conversation history and customizable to suit various needs to promote specific content.

![Carousel](img/carousel.gif)

For example, rather than sending an address to a location, you can send a picture of the location on a map that links out to a map application.

In order to achieve this behavior, you must send information in a structured format that can be interpreted and rendered. The most common format is JSON (Javascript Object Notation).

So, rather than sending to a consumer the text `1234 Hollywood Boulevard, Los Angeles, CA`, you would send the address in JSON format like below:

```json
{
  "text": yourBusinessName,
  "type": "vertical",
  "elements": [
    {
      "type": "map",
      "lo": yourLongitude,
      "la": yourLatitude,
      "tooltip": "Map",
      "click": {
        "actions": [
          {
            "type": "navigate",
            "name": "navigate",
            "lo": yourLongitude,
            "la": yourLatitude
          }  
        ]
      }
    },
    {
      "type": "text",
      "text": "1234 Hollywood Boulevard, Los Angeles, CA"
    },
  ],
  "metadata": { "fallback": url_link_map_link }
}
```

This JSON format is called a **template**. Every template contains **elements** (in this case, "map" and "text").

LivePerson provides templates and common elements for all rich messaging enabled channels.

### How to Send Structured Content to the Conversation

How a structured content template is sent to a consumer is different depending if it is sent by a human or bot agent.

#### Human Agent

With a human agent, you will need to implement a new widget based on the [Agent Workspace Widget SDK](agent-workspace-sdk-overview.html).

You will use the `writeSC` command to push the template to the conversation from the widget. Below is example code of what the widget would need at the minimum for our example.

```javascript
var notifyWhenDone = function(err) {
    if (err) {
        // Do something with the error
    }
    // called when the command is completed successfully,
    // or when the action terminated with an error.
};

var cmdName = lpTag.agentSDK.cmdNames.writeSC; // = "Write StructuredContent"
var data = {
  json: {
    "text": yourBusinessName,
    "type": "vertical",
    "elements": [
      {
        "type": "map",
        "lo": yourLongitude,
        "la": yourLatitude,
        "tooltip": "Map",
        "click": {
          "actions": [
            {
              "type": "navigate",
              "name": "navigate",
              "lo": yourLongitude,
              "la": yourLatitude
            }  
          ]
        }
      },
      {
        "type": "text",
        "text": "1234 Hollywood Boulevard, Los Angeles, CA"
      },
    ],
    "metadata": { "fallback": url_link_map_link }
  },
  metadata: [	//metadata is optional
			{"type":"ExternalId","id":"running364"},
			{"type":"ExternalId","id":"soccer486"}
		]
};

lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
```

Continuing with the map example, the agent widget would contain a text property that allows the agent to enter an address and click a "send" button. This "send" button would:

* convert the address to the correct template with the desired elements
* send the template to the consumer with the `writeSC` command

For further information, refer to the [Developer Community documentation](agent-workspace-sdk-methods.html#command).

#### Bot Agent

You will need to set up a bot integration using the [Messaging Agent SDK](messaging-agent-sdk-overview.html).

For more general information about using the SDK to integrate bots, please refer to the [Solution’s documentation](products-customer-facing-bots-overview.html).

Once the bot exists, you will perform the same transformation as with the Agent Workspace Widget:

* convert the data to the correct template with the desired elements
* send the template to the consumer with the Agent Workspace SDK command

Below is an example of sending the same location map.

```javascript
agent.publishEvent({
	dialogId: 'MY_DIALOG_ID',
	event: {
		type: 'RichContentEvent',
		content: {
      "text": yourBusinessName,
      "type": "vertical",
      "elements": [
        {
          "type": "map",
          "lo": yourLongitude,
          "la": yourLatitude,
          "tooltip": "Map",
          "click": {
            "actions": [
              {
                "type": "navigate",
                "name": "navigate",
                "lo": yourLongitude,
                "la": yourLatitude
              }  
            ]
          }
        },
        {
          "type": "text",
          "text": "1234 Hollywood Boulevard, Los Angeles, CA"
        },
      ],
      "metadata": { "fallback": url_link_map_link }
    }
	}
}, null, [{type: 'ExternalId', id: 'MY_CARD_ID'}]);  // ExternalId is how this card will be referred to in reports

// Success response: {"sequence":29}
```

Please refer to the [SDK’s repository](https://github.com/LivePersonInc/node-agent-sdk#example-sending-rich-content-structured-content) for more examples.

### Templates

LivePerson provides multiple structured content **templates** for each unique rich messaging enabled channel. See a list of rich messaging channels in [Getting Started with Rich Messaging](getting-started-with-rich-messaging-introduction.html).

In order to handle the differences in channel rendering, these templates abstract away the unique feel of each channel and allow you to implement common **elements** in a familiar way.

Each structured content template will contain one or more **elements** in the `elements` array seen in the example below:

#### Example

```json
{
  "type": "type",
  "tag": "tag",
  "elements": [
    // Basic elements here
  ]
}
```

#### Properties

| Property Name | Description                                                                         | Type   | Required |
| :------------ | :---------------------------------------------------------------------------------- | :----- | :------- |
| type          | Type of template. Often used to specify arrangement like "vertical" or "horizontal" | Enum   | Y        |
| tag           | Further specifies the template type                                                 | String | N        |
| elements      | List of element objects                                                             | Array  | Y        |

All templates will consist of an object that holds the elements array. The object will always have a type and optionally have a tag. The tag is only relevant when using third party connectors like Facebook Messenger, Apple Business Chat, etc.

Below you will find basic elements, their styling, and their click operations, that are common within all templates.

When you are comfortable with the basic elements, you can see them in action in the various templates for Mobile SDK & Web, Facebook Messenger, Apple Business Chat, etc.

### Basic Elements

Basic elements are the core components of the structured content messaging framework. By using these elements in your template, you can send basic messages, such as simple text, images or buttons.

You can also send a Structured Content template which includes multiple basic elements with attached actions, creating a more complex message template.

See the types of basic elements supported by the framework below:

#### Button

A simple Button which triggers an Action when clicked.

##### Properties

| Property Name | Description                                                                                                                                             | Type      | Required | Size Limit |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------- | :------- | :--------- |
| type          | Type of element. Must be 'button'                                                                                                                       | Enum      | Y        |            |
| title         | Button title                                                                                                                                            | String    | Y        | 128 chars  |
| click         | On-click operation (included metadata and/or actions clauses)                                                                                           |           | Y        |            |
| tooltip       | Button tooltip, used also as aria                                                                                                                       | String    | N        | 256 chars  |
| style         | Styling elements                                                                                                                                        | Container | N        |            |
| rtl           | This parameter changes the direction of text only from left to right to right to left (for languages like Hebrew, Arabic, Urdu, etc). Default is false. | Boolean   | N        |            |

For the 'click' property, please see the [Click Operations](#element-click-operations) section.

For the 'style' property, please see the [Rich Messaging Basic Elements Styling](#element-styling) section.

##### Example

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

#### Image

You can send images by sharing a URL. Supported formats are JPG and PNG. Since, in this case, images are not stored on LivePerson servers, there is no file size limit when using images within a Structured Content image element.

##### Properties

| Property Name | Description                                                                                                                                            | Type      | Required | Size Limit |
| :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- | :------- | :--------- |
| type          | Type of element. Must be image                                                                                                                         | Enum      | Y        |            |
| url           | Image URL                                                                                                                                              | String    | Y        | 2048 chars |
| caption       | Image caption                                                                                                                                          | String    | N        | 128 chars  |
| rtl           | This parameter changes the direction of text only from left to right to right to left (for languages like Hebrew, Arabic, Urdu, etc). Default is false | Boolean   | N        |            |
| click         | On-click operation (included metadata and/or actions clauses)                                                                                          |           |          |            |
| tooltip       | Image tooltip, used also as aria                                                                                                                       | String    | N        |            |
| style         | Styling elements                                                                                                                                       | Container | N        |            |

For the 'click' property, please see the [Click Operations](#element-click-operations) section.

For the 'style' property, please see the [Rich Messaging Basic Elements Styling](#element-styling) section.

**Note**: Image domains must be added to a whitelist via internal LivePerson configuration (Houston). Please note that you must add all domains to this list manually as wildcards are not supported. All domains must be HTTPS secure.

##### Example

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

#### Map

Map that points to a specific location.

##### Properties

| Property Name | Description                                                   | Type      | Required |
| :------------ | :------------------------------------------------------------ | :-------- | :------- |
| type          | Type of element. Must be map                                  | Enum      | Y        |
| lo            | Longitude                                                     | Float     | Y        |
| la            | Latitude                                                      | Float     | Y        |
| click         | On-click operation (included metadata and/or actions clauses) |           |          |
| tooltip       | Map tooltip, used also as aria                                | String    | N        |
| style         | Styling elements                                              | Container | N        |  |

For the 'click' property, please see the [Click Operations](#element-click-operations) section.

For the 'style' property, please see the [Rich Messaging Basic Elements Styling](#element-styling) section.

##### Example

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

#### Text

Simple plain text message.

##### Properties

| Property Name | Description                                                                                                                                             | Type      | Required | Size Limit |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------- | :------- | :--------- |
| type          | Type of element. Must be text.                                                                                                                          | Enum      | Y        |            |
| text          | The message                                                                                                                                             | String    | Y        | 5000 chars |
| tooltip       | Text tooltip, used also as aria                                                                                                                         | String    | N        | 256 chars  |
| style         | Styling elements                                                                                                                                        | Container | N        |            |
| rtl           | This parameter changes the direction of text only from left to right to right to left (for languages like Hebrew, Arabic, Urdu, etc). Default is false. | Boolean   | N        |            |

For the 'style' property, please see the [Rich Messaging Basic Elements Styling](#element-styling) section.

##### Example

```json
{
	"type": "text",
	"text": "This is an example for text element",
	"tooltip": "text tooltip",
	"rtl" : true
}
```

### Element Click Operations

An element which has an "actions" property, an on-click operation (executed when the consumer clicks on the element) and a metadata property. These elements are clickable by the consumer, resulting in an action performed on the browser or app through which the consumer is interacting with you. This action could be opening a link, a third party navigation app and more.

On-click operations can result from two object types:

| Property Name | Description                                             | Type   | Required | Size Limit            |
| :------------ | :------------------------------------------------------ | :----- | :------- | :-------------------- |
| Actions       | List of actions to execute (Navigate/Link/publish text) | action | N        | 4 actions per element |
| Metadata      | list of predefined objects to send back to the agent    |        | N        |                       |


#### Example

```json
"click": {
	"metadata": [
		{
			"type": "ExternalId",
			"id": "someID"
		}
	],
	"actions": [
		{
			"type": "publishText",
			"text": "Show Plan"
		}
	]
}
```

#### Actions

Actions are a list of applicative actions that will run on the consumer side and will help them to achieve some kind of an operation. For instance: navigate with a third party navigation app to a predefined place.

**Note**: Only button, image and map objects can receive the actions property.

Types of actions supported by the platform:

* Navigate
* Link
* Publish Text

##### Navigate

This actions has two use cases:

* Web: open Google Maps with the location preselected.
* Mobile: navigate to the location with a third party navigation app.

###### Properties

| Property Name | Description                      | Type  | Required |
| :------------ | :------------------------------- | :---- | :------- |
| type          | Type of action. Must be navigate | Enum  | Y        |
| lo            | Longitude                        | Float | Y        |
| la            | Latitude                         | Float | Y        |

###### Example

```json
{
	"type": "navigate",
	"lo": 40.75620,
	"la": -73.99861
}
```

##### Link

Open a URL in a web view when opened in mobile, or in a new tab for web. This action can be used for deep link purposes.

Each environment can override the URI for their specific needs.

###### Properties

| Property Name | Description                  | Type   | Required | Size Limit |
| :------------ | :--------------------------- | :----- | :------- | :--------- |
| type          | Type of action. Must be link | Enum   | Y        |            |
| uri           | The url to open              | String | Y        | 2048 chars |

###### Example

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

##### Publish Text

In order to support sending a message as a response for a button click, we introduced a new action called "Publish Text".
This action allows the brand to send a message on behalf of the consumer that will appear in the transcript.

This action will be used also by the clients (the Mobile Messaging App for example or LiveEngage's window) to send a response when a button was clicked.

###### Properties

| Property Name | Description                                                       | Type   | Required | Size Limit |
| :------------ | :---------------------------------------------------------------- | :----- | :------- | :--------- |
| type          | Type of action. Must be 'publishText'                             | Enum   | Y        |            |
| text          | The text to display in the transcript once the action was clicked | String | Y        | 5000 chars |


###### Example

```json
 {
   "type": "publishText",
   "text": "text to send on behalf of the consumer"
 }
```

#### Metadata

Metadata is a list of predefined objects that can be sent back to the agent / bot and be used in reporting / analysis. Metadata can be defined in the header section of the request or inside an element click object. For a more in depth guide on how metadata in Structured Content works, please refer to the [Conversation Metadata guide](messaging-agent-sdk-conversation-metadata-guide.html).

When filling out the structured content template, if the metadata `ExternalID` is supplied, it will be returned to LiveEngage when the associated action is executed.

This is important for reporting on consumer interactions with the template, as well as for bot activity. A Structured Content object general ID can be defined in the <header> section of the request by using the <metadata> tag. It can also be defined for each click.

You can see an example in the [Messaging Agent SDK](https://github.com/LivePersonInc/node-agent-sdk#example-sending-rich-content-structured-content) by searching for “ExternalID”.

**Note:** when using our APIs to communicate as a consumer (for example, by using the Messaging Window API or the Connector API), metadata should always be added to an action. This is so that our services have an indication that an element was clicked. The metadata should be sent as part of 'AcceptStatusEvent' with the assigned status of 'ACTION'. For more information on 'AcceptStatusEvent' and its status property, please see the [Messaging Window API](agent-int-api-reference.html).

If the type of action is 'publishText' (see above for an example), the metadata should be attached to the 'ContentEvent' as well.
This is so that a certain text which is published is associated with the click which sent it.

### Element Styling

Each basic element can have specific style rules defined for it, controlling how it looks like when rendered.

#### Properties

| Property Name    | Description                            | Type                      |
| :--------------- | :------------------------------------- | :------------------------ |
| bold             | Whether the text is bold or not        | Boolean                   |
| italic           | Whether the text is in italics or not  | Boolean                   |
| color            | Defines the element's color            | String - hex color        |
| background-color | Defines the element's background color | String - hex color        |
| size             | Defines the element's size             | Enum - small/medium/large |

#### Example

```json
"style": {
	"bold": true,
	"italic": true,
	"color": "###453533",
	"background-color": "###3E47A0",
	"size": "small"
}
```
