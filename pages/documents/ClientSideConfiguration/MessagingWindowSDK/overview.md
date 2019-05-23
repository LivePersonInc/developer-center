---
pagename: Overview
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Messaging Window API
permalink: messaging-window-sdk-overview.html
indicator: messaging
---

This Messaging Window SDK for the LiveEngage [Messaging Window API](messaging-window-api-overview.html) will make building custom messaging windows and JavaScript applications efficient and stable. The SDK does a lot of the work of connecting to LivePerson's messaging servers, subscribing to notifications, and managing the conversation for you. Thus, you can use this SDK to build your own messaging windows for your consumers to use or even moving the conversation entirely out of a window-type experience and embedding it into the webpage.

### Prerequisites

This library requires only an active LiveEngage account number.

### Use Cases

1) Customize the LiveEngage window. Because this SDK enables you to handle the most common messaging events, it allows you to build your own messaging window using JavaScript. Under this use case, you'd build the menu using HTML/CSS and call the various methods of this SDK to handle user and agent input, typing indicators, and the such.

2) Embed the conversation inside a webpage. As the world turns to conversational commerce, interactions with bots and human agents are set to replace outdated tools like website navigation, homepages, and the such. By using this SDK, you can embed these conversations directly into a webpage, providing a seamless and integrated conversational experience. Because this SDK uses JavaScript, the agent handling the conversation can be any type of agent: human agents, bots created using our [Conversation Builder](conversation-builder-conversation-builder-overview.html), or your own [custom bots](custom-third-party-bots.html). You can see an example of such an embedded conversation on LivePerson's [Knowledge Center](www.knowledge.liveperson.com), where the homepage has been replaced by a bot.

### Next Steps

You're ready to get started with the Messaging Window SDK! The SDK's documentation is maintained on Github and can be found [at this location](https://github.com/LivePersonInc/messaging-window-sdk). It's made up of the following parts:

* [Quick Start](https://github.com/LivePersonInc/messaging-window-sdk#quick-start) - check out the Quick Start guide for a quick look at how to get up and running with the SDK.

* [Methods](https://github.com/LivePersonInc/messaging-window-sdk#available-methods) - this section covers the various methods which the SDK offers. These methods allow you to send content to LiveEngage, update the conversation state, and more!

* [Event Callbacks](https://github.com/LivePersonInc/messaging-window-sdk#event-callbacks) - this section covers the various callbacks which are included in the SDK. These callbacks allow you to "listen" to events within LiveEngage, like a message sent or received, and write code which handles the content of these events (for example, grabbing a message's text and rendering it to a page).

* [Sample Code](https://github.com/LivePersonInc/messaging-window-sdk#sample-code) - this section contains a simple example of how the SDK might be used to handle and send agent and consumer messages.
