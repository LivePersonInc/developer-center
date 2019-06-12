---
pagename: Control History APIs
redirect_from:
  - consumer-experience-ios-sdk-advanced-control-history-ios.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Advanced Features
order: 236
permalink: mobile-app-messaging-sdk-for-ios-advanced-features-control-history-apis.html
indicator: messaging
---


Use the Control History APIs when calling the method `showConversation` to control which historical or current conversations present to the consumer when opening the conversation screen.

The conversations can be filtered by:

* Conversation status (open, closed, all)

* Conversation date - by days (for example, conversations from the past 14 days)


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

* **LPConversationsHistoryStateToDisplay** - Use to present open conversations or closed conversations or all conversations. To present all conversations, do not provide a value.

   ```swift
   enum LPConversationsHistoryStateToDisplay: Int {
       case open
       case close
   }
   ```

* `historyConversationsMaxDays` - Use to choose how much conversation history presents to the consumer by days. Not providing a value allows consumers to see the entire history stored on LivePerson's servers (by scrolling down to see additional conversations).  

   {:.important}
   When using this, you must also use `LPConversationHistoryMaxDaysDateType`.

* `LPConversationHistoryMaxDaysDateType` - Use to decide whether to count the days from the conversation start date or end date. If not providing a value, the start date is the default. 

   ```swift
   enum LPConversationHistoryMaxDaysDateType: Int {
       case startConversationDate
       case endConversationDate
   }
   ```

### Code Sample

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

* In case no conversations are matching the provided filter, an empty state presents with a message. The default message is *"There are no conversations at this time."* The UI elements of the state can be configured.  

   - Change the text: change the value of `conversationEmptyState`. 

   - Change the text color:  change `LPConfig → conversationEmptyStateTextColor`.

* When opening the window with closed conversations only, the window opens as a view only mode.

* Every message that arrives from the agent or sent by the consumer removes the filter and conversations present as if no filter was applied.
