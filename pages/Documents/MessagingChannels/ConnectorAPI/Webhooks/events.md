---
pagename: Events
redirect_from:
  - webhooks-events.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connector API
subfoldername: Webhooks
order: 20
indicator: messaging
permalink: connector-api-webhooks-events.html
---

An [application](connector-api-webhooks-configuration.html) can be configured to receive notifications of the following event types. A `cqm.ExConversationChangeNotification` event is sent if the state of a conversation changed. For example, when a conversation is closed. A `ms.MessagingEventNotification.ChatStateEvent` event is sent when either of the participants is typing or paused typing. A `ms.MessagingEventNotification.AcceptStatusEvent` event is sent when a message arrived at the server or the corresponding participant received and/or read it. A `ms.MessagingEventNotification.RichContentEvent` event is sent for events with surveys, images, audio or any other message than just text. And a `ms.MessagingEventNotification.ContentEvent` event is sent for a plain text message. Within a single [App](connector-onboarding.html), each event type can only be sent one endpoint. Though, one account can have multiple apps.
