---
title: Metadata
Keywords:
level1: Documents
level2: Rich Messaging
level3: Getting Started
level4: Click Operations
order: 100
permalink: rich-messaging-click-ops-metadata.html
indicator: both
---

Metadata is a list of UMS predefined objects that can be sent back to the agent and be used in reporting. Metadata must be used inside a click block. For a more in depth guide on how metadata in Structured Content works, please refer to the [Conversation Metadata guide](guides-conversation-metadata-guide.html).

**Note:** when using our APIs to communicate as a consumer (for example, by using the Messaging Window API or the Connector API), metadata should always be added to an action.
This is so that our services have an indication that an element was clicked. The metadata should be sent as part of 'AcceptStatusEvent' with the assigned status of 'ACTION'.

If the type of action is 'publishText' (see above for an example), the metadata should be attached to the 'ContentEvent' as well.
This is so that a certain text which is published is associated with the click which sent it.
