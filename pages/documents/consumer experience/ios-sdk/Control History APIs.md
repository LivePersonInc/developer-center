---
title: Control History APIs
Keywords:
level1:
level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: Advanced Features
order: 236
permalink: consumer-experience-ios-sdk-advanced-control-history-ios.html
indicator: messaging
---

### Overview

The Control History APIs allow brands to decide which historical or current conversations will be presented to the consumer when opening the conversation screen.

These APIs can be used when calling the method showConversation. Using the APIs, brands can control which conversations to present every time that the conversation window is presented.

The conversations can be filtered by:

* Conversation status (open, closed, all)

* Conversation date - by days (e.g. conversations from the past 14 days)


### Using the APIs

#### Parameters

LPConversationViewParams includes LPConversationHistoryControlParam:

```swift
class LPConversationHistoryControlParam: NSObject {
  var historyConversationsStateToDisplay: LPConversationsHistoryStateToDisplay?
  var historyConversationsMaxDays: UInt?
  historyConversationMaxDaysType: LPConversationHistoryMaxDaysDateType?
}
```
LPConversationHistoryControlParam contains 3 fields:
* **LPConversationsHistoryStateToDisplay**
```swift
enum LPConversationsHistoryStateToDisplay: Int {
    case open
    case close
}
```

Using `LPConversationsHistoryStateToDisplay`, brands can decide to present open conversations or closed conversations or all conversations (in order to present all conversations, simply do not provide a value).

* `historyConversationsMaxDays` - Using this parameter, brands can choose how much conversation history will be presented to the consumer by days. Not providing a value will allow consumers to see the entire history stored on LivePerson's servers (by scrolling down to see additional conversations).

* `LPConversationHistoryMaxDaysDateType` - When using `historyConversationsMaxDays`, brands can also use `LPConversationHistoryMaxDaysDateType` in order to decide whether to count the days from the conversation start date or end date. If a value is not provided, start date will be the default.

```swift
enum LPConversationHistoryMaxDaysDateType: Int {
    case startConversationDate
    case endConversationDate
}
```

#### Code Sample

```swift
 @IBAction func showConversation() {
        guard let accountNumber = self.accountTextField.text, !accountNumber.isEmpty else {
            return
        }

        self.conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountNumber)
        guard self.conversationQuery != nil else {
            return
        }

        let historyControlParam = LPConversationHistoryControlParam(
            historyConversationsStateToDisplay: LPConversationsHistoryStateToDisplay.open,
            historyConversationsMaxDays: 180,
            historyMaxDaysType: LPConversationHistoryMaxDaysDateType.startConversationDate)

        let conversationViewParams = LPConversationViewParams(conversationQuery: self.conversationQuery!, containerViewController: self, isViewOnly: false, conversationHistoryControlParam: historyControlParam)
        let authenticationParams = LPAuthenticationParams(authenticationCode: "zcKZeImY5h7xOVPj", jwt: nil, redirectURI: nil)
        LPMessagingSDK.instance.showConversation(conversationViewParams, authenticationParams: authenticationParams)
    }

```

### Important Notes

* In case there are no conversations matching the provided filter, an empty state will be presented with a message (default is "There are no conversations at this time"). The UI elements of the state can be configured - in order to change the text, change the value of `conversationEmptyState` (iOS) or `lp_history_control_api_empty_state` (Android) parameters. In order to change the text color, change `LPConfig → conversationEmptyStateTextColor` (iOS). Text color cannot currently be changed on Android.

* When opening the window with closed conversations only , the window will be opened as a view only mode.

* Every message which will arrive from the agent or will be sent by the consumer will remove the filter and conversations will be presented as if no filter was applied.
