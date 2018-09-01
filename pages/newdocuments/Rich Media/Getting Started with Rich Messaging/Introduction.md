---
pagename: Introduction
redirect_from:
  - rich-messaging-getting-started.html
Keywords:
sitesection: Documents
categoryname: "Rich Media"
documentname: Getting Started with Rich Messaging

level-order: 1
order: 10
permalink: getting-started-with-rich-messaging-introduction.html
root-link: true
indicator: both
---

LiveEngage allows sending messages (through both the Chat and Messaging channels) in a variety of ways: you can send simple text and images, or use our structured content templates to build your own, more complex message layout with images, buttons and multiple actions in one message. The following documentation describes the types of Rich Messages which we support, how to build them, report on them and send them to the consumer.

The following document lists the different types of entries available for use with such a layout and includes templates for how to write them in JSON.
You can use [this tool](https://livepersoninc.github.io/json-pollock/editor/) to render your JSON in advance and get a sense of how your structured content object will look.

### Basic Elements

Basic elements are the core components of the structured content messaging template. By using these elements in your template, you can send basic messages, such as simple text, images or buttons.

You can also send a Structured Content template which includes multiple basic elements with attached actions, creating a more complex message layout.

Types of basic elements supported by the platform:

* [Text](rich-messaging-basic-elements-text.html)

* [Button](rich-messaging-basic-elements-button.html)

* [Image](rich-messaging-basic-elements-image.html)

* [Map](rich-messaging-basic-elements-map.html)

### Click operations

An element which has an "actions" field, an [on-click operation](rich-messaging-click-ops.html) (executed when the consumer clicks on the element) and a [metadata field](rich-messaging-click-ops-metadata.html). These elements are clickable by the consumer, resulting in an action performed on the browser or app through which the consumer is interacting with you. This action be be opening a link, a third party navigation app and more.

### Metadata
Metadata is a list of UMS predefined objects that can be sent back to the agent and be used in reporting. Metadata can be defined in the header section of the request or inside a click block. For a more in depth guide on how metadata in Structured Content works, please refer to the [Conversation Metadata guide](guides-conversation-metadata-guide.html).
When creating the JSON structure, the metadata ExternalID that will be returned to LiveEngage when an element in the card is clicked, also needs to be defined.

This is important for reporting on consumer interaction with the card, as well as for bot activity. A Structured Content object general ID can be defined in the <header> section of the request by using the <metadata> tag. It can also be defined for each click.

You can see an example in the [Messaging Agent SDK](https://github.com/LivePersonInc/node-agent-sdk#example-sending-rich-content-structured-content) by searching for “ExternalID”.
