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

order: 236

permalink: mobile-app-messaging-sdk-for-ios-sdk-apis-control-history-apis.html

indicator: messaging
---


The Control History APIs allow brands to decide which historical or current conversations displays to the consumer when opening the conversation screen. For example, brands can choose to present only the last 180 days of conversation history.  Use these APIs when calling `showConversation`.

You can use these APIs together with `getEngagement` (Monitoring APIs) to determine how to present conversations history according to whether there is an open conversation or not. For example, if there is no open conversation, brands can present a **View conversation history** button that displays only if the closed conversations are from the time specified, for example the last 180 days.

The APIs lets brands:

- Get an indication if there is an open conversation or not (Monitoring APIs).

- Control which conversations will be presented by status (open\closed).

- Control the time frame of presented conversations (by days).


### Important Notes

* If no conversations match the provided filter, an empty state presents with a message. The default message is *"There are no conversations at this time."* You can configure the UI elements of the state.  

   - **Change the text:** change the value of `conversationEmptyState`. 

   - **Change the text color:**  change `LPConfig → conversationEmptyStateTextColor`.

* When opening the window with closed conversations only, the window opens as a view only mode.

* Every message that arrives from the agent or sent by the consumer removes the filter and conversations present as if no filter was applied.

### Parameters

LPConversationViewParams includes LPConversationHistoryControlParam:

```swift
class LPConversationHistoryControlParam: NSObject {
  var historyConversationsStateToDisplay: LPConversationsHistoryStateToDisplay?
  var historyConversationsMaxDays: UInt?
  historyConversationMaxDaysType: LPConversationHistoryMaxDaysDateType?
}
```

You have three relevant parameters for `LPConversationHistoryControlParam`:

* [LPConversationsHistoryStateToDisplay](#lpconversationshistorystatetodisplay)

* [historyConversationsMaxDays](#historyconversationsmaxdays)

* [LPConversationHistoryMaxDaysDateType](#lpconversationhistorymaxdaysdatetype)

#### LPConversationsHistoryStateToDisplay

Use to present open conversations or closed conversations or all conversations. To present all conversations, do not provide a value.

   ```swift
   enum LPConversationsHistoryStateToDisplay: Int {
       case open
       case close
   }
   ```

#### historyConversationsMaxDays
Use to choose how much conversation history presents to the consumer by days. Not providing a value allows consumers to see the entire history stored on LivePerson's servers (by scrolling down to see additional conversations).  

   {:.important}
   When using this, you must also use `LPConversationHistoryMaxDaysDateType`.

#### LPConversationHistoryMaxDaysDateType
Use to decide whether to count the days from the conversation start date or end date. If not providing a value, the start date is the default. 

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


