---
pagename: Welcome Message with Quick Replies

Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Advanced Features

permalink: mobile-app-messaging-sdk-for-ios-advanced-features-welcome-message-with-quick-replies.html

indicator: messaging
---

**Supported versions:** 3.8 and newer

When a consumer starts a new conversation, or a new customer visits the site, brands can send the first message with a list of quick replies of common intents.

You can configure the Welcome message as a simple text message with or without quick replies, for example: 

> *Welcome to our support! What can we help you with today?*   
> 
> *[Questions about existing account] [open a new account] [tech support]*

A consumer’s quick reply selection or answer gets inserted as their first message in the conversation, which opens the conversation in the LiveEngage agent workspace. 

### How to enable

```swift
        //Welcome message
let welcomeMessageParam = LPWelcomeMessage(message: "Hello Mr.Bond")

        //adding options
        let options: [LPWelcomeMessage.MessageOption] = [
            LPWelcomeMessage.MessageOption(value: "music", displayName: "awesome tunes"),
            LPWelcomeMessage.MessageOption(value: "food", displayName: "Delicious food "),
        ]
        do {
            try welcomeMessageParam.set(options: options)
        } catch {
            print(error.localizedDescription)
        }
        
        //ConversationViewParams
        let conversationViewParams = LPConversationViewParams(conversationQuery: conversationQuery,
                                                              containerViewController: nil,
                                                              isViewOnly: false,
                                                              conversationHistoryControlParam: conversationHistoryControlParam,
                                                              welcomeMessage: welcomeMessageParam)
//show conversation
LPMessagingSDK.instance.showConversation(conversationViewParams,  authenticationParams: authenticationParams)
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

