---
pagename: Variables
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Variables & Slots
permalink: conversation-builder-variables-slots-variables.html
indicator: both
---

### Introduction

You can store data that you’ve collected throughout a bot conversation with a consumer in variables. Variables are more commonly used than slots. Use a variable when you simply want to save a value. Using a slot for this basic behavior doesn’t offer any additional value. So, when in doubt, use a variable.

### System variables

There are several system variables that store information that's commonly needed in use cases. You can use these variables in your interactions:

* `{$chatBotId}` - Returns the ID of the bot.
* `{$chatBotUserId}` - Returns the ID of the consumer.
* `{$chatBotUserPlatformId}` - Returns the ID of the bot user agent. This is provided by Conversational Cloud.
* `{$conversationId}` - Returns the ID of the current conversation. This is provided by Conversational Cloud.
* `{$firstname}` - Returns the first name of the bot user agent. This is provided by Conversational Cloud.
* `{$quickReplyPayload}` - Returns the quick reply payload for the current interaction.
* `{$userMessage}` - Returns the current user message.

### Store the consumer's response

The most common use case for variables is storing consumer responses to [questions](conversation-builder-interactions-questions.html). Frequently, you’ll want to capture what the consumer just said as the value of a variable. You can use `{$userMessage}` to do this, for example:

<img width="700" src="img/ConvoBuilder/storeUserResponse.png">

You can also use `{$query}` in the same way; it works like `{$userMessage}`.

### Add a variable

1. In the interaction, click **Next Action**, and then click **+ Custom Rule**.
2. In the window that appears, define the custom rule. To add the variable, click **+ Add Variable**, and then define the variable using the fields provided. These fields are illustrated in the preceding section.

### Clean variable data

Before setting or storing data in a variable, in the [Process User Response code](conversation-builder-interactions-configuration-custom-code.html#process-user-response), it's a good idea to "clean" or "sanitize" the data by parsing it and transforming it to remove problematic issues, i.e., remove leading or trailing white space, remove new lines ( \\n ) and special characters, and so on.

### Store and access variable data with code

Use the [Get and Set Bot Variables functions](conversation-builder-scripting-functions-get-set-session-data.html#get-and-set-bot-variable) to store and access variable data in the Pre-Process Code, Post-Process Code, and Process User Response JavaScript [code panels](conversation-builder-interactions-configuration-custom-code.html) in interactions.
