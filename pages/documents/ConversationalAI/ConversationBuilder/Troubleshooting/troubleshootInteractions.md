---
pagename: Interactions
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Troubleshooting
permalink: conversation-builder-troubleshooting-interactions.html
indicator: both
---

Use this page to help you troubleshoot common issues when working with interactions in Conversation Builder.

#### Messages are delivered out of order

Messages sometimes can be delivered out of order because, behind the scenes, the system processes them using a rolling, two-second loop. When multiple messages are added to the queue within a single, two-second interval, there’s no guarantee of the order in which those messages are sent. To help to ensure a consistent message order, you can set an interaction delay in the settings in the Interaction Details, as described [here](conversation-builder-interactions-interaction-details.html#settings).

#### Long messages are broken into smaller ones

A single text interaction has a limit of 320 characters on the word boundary before it gets split into 2 parts. This means that large blocks of text that exceed the limit are broken into smaller messages. However, if desired, you can control exactly where the break occurs using a special tag. For more information, see the section on formatting text in interactions, which is [here](conversation-builder-interactions-interaction-basics.html#format-text).

#### Quick Reply options don’t appear in Facebook Messenger

In Facebook Messenger, a Quick Reply question can have a maximum of 13 reply options, so additional options beyond the first three defined aren’t shown.
