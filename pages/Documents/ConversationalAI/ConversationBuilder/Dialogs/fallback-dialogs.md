---
pagename: Fallback Dialogs
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Dialogs
permalink: conversation-builder-dialogs-fallback-dialogs.html
indicator: both
---

### The default fallback behavior

By default, whenever a bot doesn't recognize the user's input in a conversation, it sends a _built-in_, _default_ fallback response of, “Not able to understand your question. Can you please re-phrase it?” It then returns the user to the place where the failure occurred.

### Why use a Fallback dialog?

When you create a bot using the Custom Bot template, a Fallback dialog is created by default. Use the Fallback dialog to _override_ the default behavior with a different fallback response and flow. For example, you might want to send, “I'm sorry. I didn't quite understand you,” or, “I'm not sure what '{$userMessage}' means.” [{$userMessage}](conversation-builder-variables-slots-variables.html#store-the-consumers-response) plays back to the user what they just said. Once the Fallback dialog flow is completed, the user is returned to their previous dialog and interaction position.

Since the Fallback dialog is triggered after failing to match any other dialog starter, it’s also useful for funneling user utterances into a Knowledge Base (or similar integration) search. If an appropriate search result is found, it can be displayed; if no results are found, you might then display a "sorry" message or escalate the conversation to a human agent.
