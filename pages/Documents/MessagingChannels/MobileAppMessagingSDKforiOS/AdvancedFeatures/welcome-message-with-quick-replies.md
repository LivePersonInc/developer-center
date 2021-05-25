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

A consumer’s quick reply selection or answer gets inserted as their first message in the conversation, which opens the conversation in the Conversational Cloud agent workspace. 

### How to enable

```swift
//Welcome message
var messageTitle = "Hello Mr.Smith, how may we help you?\n"
messageTitle.append("To know more about our terms and conditions visit:\n")
messageTitle.append("https://www.mywebsite.com") //this ability is only avaliable on SDK 6.2.0 & Above

let welcomeMessageParam = LPWelcomeMessage(message: messageTitle, frequency: .everyConversation)

//adding options
let options = [
    LPWelcomeMessageOption(value: "My latest bill statement", displayName: "1️⃣ Bill"),
    LPWelcomeMessageOption(value: "A recent order placed", displayName: "2️⃣ Order"),
    LPWelcomeMessageOption(value: "Technical support", displayName: "3️⃣ Support"),
    LPWelcomeMessageOption(value: "Account information", displayName: "4️⃣ Account")
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
LPMessaging.instance.showConversation(conversationViewParams,  authenticationParams: authenticationParams)
```

{: .notice}
Support for rendering links automatically is avaliable on SDK 6.2.0 and above.

{: .notice}
Currently this feature is not fully compatible with the [Control History APIs](mobile-app-messaging-sdk-for-ios-sdk-apis-control-history-apis.html).


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

- Rendering links support only for url, sms, tel, facetime, facetime-audio, and doesn't cover hyperlinks format.