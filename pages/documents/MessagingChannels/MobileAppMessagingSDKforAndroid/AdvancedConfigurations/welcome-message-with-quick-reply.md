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

**Supported versions:** 3.8 and higher

When a consumer starts a new conversation, or a new customer visits the site, brands can send the first message with a list of quick replies of common intents.

You can configure the Welcome message as a simple text message with or without quick replies, for example: 

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

If set empty String in constructor `LPWelcomeMessage(String welcomeMessage)`, the welcome message with quick reply feature will be disabled. It shows the default welcome message, which is set up in the String resources `lp_first_message`.

There are two parameters in the MessageOption class constructor.

```java
public MessageOption(@NonNull String displayText, @NonNull String value)
```

- **displayText** is the text displayed in the quick reply button.
- **value** is the content that is sent to the agent. Default value is displayText if set to empty String.


There are two message frequencies: 
- **FIRST_TIME_CONVERSATION:** Shows the welcome message for first conversation only.
- **EVERY_CONVERSATION:** Shows welcome a message for every new conversation.


### Limitations  

- You can configure up to 24 quick reply options, but you have a 25 character limit per quick reply option.  

- By default, eight quick replies are presented per row and quick replies styles inherit the Agent Bubble styling configuration.

- When the consumer ends the conversation, the window remains open, and the Welcome message appears again. The message frequency should be set to `EVERY_CONVERSATION`.

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
