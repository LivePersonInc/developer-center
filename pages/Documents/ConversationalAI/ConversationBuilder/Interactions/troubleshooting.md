---
pagename: Troubleshooting
redirect_from:
    - conversation-builder-troubleshooting-interactions.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Interactions
permalink: conversation-builder-interactions-troubleshooting.html
indicator: both
---

Use this page to help you troubleshoot common issues when working with interactions in Conversation Builder.

#### Messages are delivered out of order

Messages sometimes can be delivered out of order because, behind the scenes, the system processes them using a rolling, two-second loop. When multiple messages are added to the queue within a single, two-second interval, there’s no guarantee of the order in which those messages are sent. To help to ensure a consistent message order, you can set an interaction delay in the [interaction's settings](conversation-builder-interactions-configuration-settings.html#settings).

#### Long messages are broken into smaller ones

A single text interaction has a limit of 320 characters on the word boundary before it gets split into 2 parts. This means that large blocks of text that exceed the limit are broken into smaller messages. However, if desired, you can control exactly where the break occurs using a special tag. For more information, see [the section on formatting text in interactions](conversation-builder-interactions-interaction-basics.html#format-text). Alternatively, you can override the behavior so that all text is within a single message using the [setAllowMaxTextResponse](conversation-builder-scripting-functions-manage-conversation-flow.html#set-allow-max-text-response) function.
