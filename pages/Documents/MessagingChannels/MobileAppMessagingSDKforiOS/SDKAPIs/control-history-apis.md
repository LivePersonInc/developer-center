---
pagename: Control History APIs
redirect_from:
  - consumer-experience-ios-sdk-advanced-control-history-ios.html
  - mobile-app-messaging-sdk-for-ios-advanced-features-control-history-apis.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: SDK APIs
permalink: mobile-app-messaging-sdk-for-ios-sdk-apis-control-history-apis.html
indicator: messaging
---

The Control History APIs allow brands to decide which historical or current conversations displays to the consumer when opening the conversation screen. For example, brands can choose to present only the last 180 days of conversation history. Use these APIs when calling `showConversation`.

The APIs lets brands:

- Control which conversations will be presented by status (open\closed).

- Control the time frame of presented conversations (by days).

### Important Notes

- If no conversations match the provided filter, an empty state presents with a message. The default message is _"There are no conversations at this time."_ You can configure the UI elements of the state.

  - **Change the text:** change the value of `conversationEmptyState`.

  - **Change the text color:** change `LPConfig → conversationEmptyStateTextColor`.

- When opening the window with closed conversations only, the window opens as a view only mode.

- To enable the presentation of the Welcome Message, the following configuration needs to be set to true: `enableWelcomeMessageForHistoryControlAPI`

{: .important}
To see more about the Welcome Message with Quick Replies, visit the following [page](mobile-app-messaging-sdk-for-ios-advanced-features-welcome-message-with-quick-replies.html).

### Parameters

LPConversationViewParams includes LPConversationHistoryControlParam:

```swift
class LPConversationHistoryControlParam: NSObject {
    var historyConversationsStateToDisplay: LPConversationsHistoryStateToDisplay (default is .all)
    var historyConversationsMaxDays: UInt?
    var historyConversationMaxDaysType: LPConversationHistoryMaxDaysDateType?
}
```

You have three relevant parameters for `LPConversationHistoryControlParam`:

- [LPConversationsHistoryStateToDisplay](#lpconversationshistorystatetodisplay)

- [historyConversationsMaxDays](#historyconversationsmaxdays)

- [LPConversationHistoryMaxDaysDateType](#lpconversationhistorymaxdaysdatetype)

#### LPConversationsHistoryStateToDisplay

Used to present open conversations or closed conversations or all conversations. _Updated:_ To present all conversations please use the enum ".all"

```swift
   enum LPConversationsHistoryStateToDisplay: Int {
       case open
       case close
       case all
   }
```

#### historyConversationsMaxDays

Used to choose how much conversation history presents to the consumer by days.
Not providing a value allows consumers to see the last 2 conversations (more can be seen by scrolling up to fetch additional conversations if stored on the local database, otherwise they'll be retrieved from the LP server).

{:.important}
When using this property, you must also use `LPConversationHistoryMaxDaysDateType`.

#### LPConversationHistoryMaxDaysDateType

Used to decide whether to count the days from the conversation start date or end date. If not providing a value, the start date is the default.

```swift
   enum LPConversationHistoryMaxDaysDateType: Int {
       case startConversationDate
       case endConversationDate
   }
```

### Code Sample

```swift
 func showConversation() {

    let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountNumber)

    let historyControlParam = LPConversationHistoryControlParam(historyConversationsStateToDisplay: .open,
                                                                historyConversationsMaxDays: 180,
                                                                historyMaxDaysType: .startConversationDate)

    let conversationViewParams = LPConversationViewParams(conversationQuery: self.conversationQuery!,
                                                          containerViewController: self,
                                                          isViewOnly: false,
                                                          conversationHistoryControlParam: historyControlParam)
    let authenticationParams = LPAuthenticationParams(authenticationCode: "zcKZeImY5h7xOVPj",
                                                      jwt: nil,
                                                      redirectURI: nil)
    LPMessaging.instance.showConversation(conversationViewParams, authenticationParams: authenticationParams)
}
```

### (Optional) Code Sample to enable Welcome Message

```swift
 func showConversation() {
    // Configuration needs to be set to true to present Welcome Message if one is configured
    LPConfig.defaultConfiguration.enableWelcomeMessageForHistoryControlAPI = true

    // Welcome Message Configuration

    var messageTitle = "Hello Mr.Smith, how may we help you?\n"

    let welcomeMessageParam = LPWelcomeMessage(message: messageTitle,
                                               frequency: .everyConversation)

    // Optional - Configuring Quick Replies
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

    let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountNumber)

    let historyControlParam = LPConversationHistoryControlParam(historyConversationsStateToDisplay: .open,
                                                                historyConversationsMaxDays: 180,
                                                                historyMaxDaysType: .startConversationDate)

    let conversationViewParams = LPConversationViewParams(conversationQuery: self.conversationQuery!,
                                                          containerViewController: self,
                                                          isViewOnly: false,
                                                          conversationHistoryControlParam: historyControlParam,
                                                          welcomeMessage: welcomeMessageParam)

    let authenticationParams = LPAuthenticationParams(authenticationCode: "zcKZeImY5h7xOVPj",
                                                      jwt: nil,
                                                      redirectURI: nil)
    LPMessaging.instance.showConversation(conversationViewParams, authenticationParams: authenticationParams)
}
```
