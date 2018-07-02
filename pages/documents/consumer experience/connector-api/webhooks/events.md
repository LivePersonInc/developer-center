---
title: Events
level1: Documents
level2: Consumer Experience
level3: Connector API
level4: Webhooks
order: 20
indicator: both
permalink: webhooks-events.html
---

### Events

An application registering for WH notifications can be configured to receive notifications on the following events:

  * **cqm.ExConversationChangeNotification**

  * **ms.MessagingEventNotification.ChatStateEvent**

  * **ms.MessagingEventNotification.AcceptStatusEvent**

  * **ms.MessagingEventNotification.RichContentEvent**

  * **ms.MessagingEventNotification.ContentEvent**

**Note**! Within the context of an [**App Installation Schema**](connector-onboarding.html){:target="_blank"}, each event type can be configured only once per account, specifying a single endpoint to which it should be sent (meaning that for an account, a given application cannot request the same event type to be sent to multiple endpoints).
