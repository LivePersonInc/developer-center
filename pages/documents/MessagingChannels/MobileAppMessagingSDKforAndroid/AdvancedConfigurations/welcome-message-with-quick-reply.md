---
pagename: Welcome Message with Quick Replies

Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Advanced Features

permalink: mobile-app-messaging-sdk-for-android-advanced-features-welcome-message-with-quick-replies.html

indicator: messaging
---

Version 3.8 of the Mobile Messaging SDK introduces a Welcome message with quick reply options in the conversation window. When a consumer starts a new conversation, or a new customer visits the site, brands can send the first message with a list of quick replies of common intents.

You can configure the Welcome message as a simple text message with or without quick replies. Quick replies run through a bot flow, allowing the bot to respond with relevant and accurate answers, reducing reply times for consumers, for example: 

> *Welcome to our support! What can we help you with today?*   
> 
> *[Questions about existing account] [open a new account] [tech support]*

A consumer’s quick reply selection or answer gets inserted as their first message in the conversation, which opens the conversation in the LiveEngage agent workspace. 

### How to enable

```java
LPWelcomeMessage lpWelcomeMessage = new LPWelcomeMessage("Welcome Message");
List<MessageOption> optionItems = new ArrayList<MessageOption>();
optionItems.add(new MessageOption("bill", "bill"));
optionItems.add(new MessageOption("sales", "sales"));
optionItems.add(new MessageOption("support", "support"));
lpWelcomeMessage.setMessageOptions(optionItems);
lpWelcomeMessage.setNumberOfItemsPerRow(8);
conversationViewParams.setLpWelcomeMessage(lpWelcomeMessage);
LivePerson.showConversation(Activity, LPAuthenticationParams, conversationViewParams);
```

### Limitations  

- You can configure up to 24 quick reply options, but you have a 25 character limit per quick reply option.  

- By default, eight quick replies are presented per row and quick replies styles inherit the Agent Bubble styling configuration.

- When the consumer ends the conversation, the window remains open, and the Welcome message appears again.

- Quick reply messages do not get recorded in the conversation history.

- The conversational metadata (ExternalId) does not get populated.
   ```
   "metadata": [
   {
   "type": "ExternalId",
   "id": "Yes-1234"
   }
   ]
   ```
