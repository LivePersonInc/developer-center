---
title: Introduction
Keywords:
level1: Documents
level2: Rich Messaging
level3: Getting Started

level-order: 1
order: 10
permalink: getting-started-introduction.html
root-link: true
indicator: both
---

LiveEngage allows sending messages (through both the Chat and Messaging channels) in a variety of ways: you can send simple text and images, or use our structured content templates to build your own, more complex message layout with images, buttons and multiple actions in one message. The following documentation describes the types of Rich Messages which we support, how to build them, report on them and send them to the consumer.

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

### Styling

Each basic element can have style elements which are used to configure various aspects of how it will be rendered, such as background color, text color and more. [Click here for more information](rich-messaging-styling.html).

The following documentation lists the different types of templates and structures used to create complex Strucutred Content layouts and basic elements. It also includes templates for how to write them in JSON. You can use [this tool](https://livepersoninc.github.io/json-pollock/editor/) to render your JSON in advance and get a sense of how your Structured Content object will look once you send it to a consumer. For more information on how this tool works, please see [this document](rich-messaging-structured-content-pollock.html).
