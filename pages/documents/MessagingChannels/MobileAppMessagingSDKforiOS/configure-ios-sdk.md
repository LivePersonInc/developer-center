---
pagename: Configure the iOS SDK
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS

permalink: mobile-app-messaging-sdk-for-ios-configure-the-ios-sdk.html

---


You can register for LivePerson events related to the conversation, determine the layout of messaging with the app, sends logs from LiveEngage to your app, and display consumer information to agents or vice versus. 




### Functions

1. Get the conversation screen and determine which of the conversations to display in the Conversation Window.

   ```swift
   public func getConversationBrandQuery(_ brandID: String, campaignInfo: LPCampaignInfo? = nil) -> ConversationParamProtocol
   ```

2. Get the conversation screen and determine which of the conversations to display in the Conversation Window, using the **Consumer ID**:

   ```swift
   public func getConversationConsumerQuery(consumerID: String?, brandID: String, agentToken: String) -> ConversationParamProtocol
   ```

3. Return a boolean flag, with **Ready** when the Brand is connected and conversation can be processed:

   ```swift
   public func isBrandReady(brandID: String) -> Bool
   ```

### SDK Delegates

The SDK uses 2 delegates:

1. **LPMessagingSDKDelegate** - for lifecycle and connectivity events.

   ```swift
   LPMessagingSDK.instance.delegate = self
   ```

2. **LPMessagingSDKNotificationDelegate** - for handling Push and In-App Notifications.

   ```swift
   LPMessagingSDK.instance.registerPushNotifications(token: deviceToken, notificationDelegate: self)
   ```

You should implement and set the **LPMessagingSDKNotificationDelegate**, in order to receive Push Notifications from the SDK.

### Conversations Lifecycle

During the course of the conversation, consumers can take several actions such as Mark as urgent to receive a faster service, or Resolve conversation to let your agents know they have received their answers.  

#### Methods

For information about the methods, see to [Messaging API](consumer-experience-ios-sdk-messaging-methods.html).

1. Check for an active conversation.
   - **True** - Active conversation 
   - **False** - No active conversation

   ```swift
   public func checkActiveConversation(conversationQuery: ConversationParamProtocol) -> Bool
   ```

2. Mark the current conversation as Urgent.

   ```swift
   public func markAsUrgent(conversationQuery: ConversationParamProtocol)
   ```

3. Check if the current conversation is marked as Urgent.

   ```swift
   public func isUrgent(conversationQuery: ConversationParamProtocol) -> Bool
   ```

4. Mark an urgent conversation as normal.

   ```swift
   public func dismissUrgent(conversationQuery: ConversationParamProtocol)
   ```

5. Resolve the current conversation.

   ```swift
   public class func resolveConversation(_ conversation: Conversation, completion: (() -> Void)? = {()})
   ```

   ```swift
   public class func resolveConversationForConversationQuery(_ conversationQuery: ConversationParamProtocol, completion: (() -> Void)? = {()})
   ```


6. Clear the conversation history.

   ```swift
   public func clearHistory(conversationQuery: ConversationParamProtocol) throws
   ```

   **Note:** Use clear history only if there is no open/active conversation.

7. Logout Current User from LPMessagingSDK.

   ```swift
   public func logout()
   ```

8. Stop and clear all the metadata of the SDK.

   ```swift
   public func destruct()
   ```

#### Delegates

1. Triggered when the the user submits the survey and dismisses the customer satisfaction survey.

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKConversationCSATDismissedOnSubmittion(conversationID: String?)
   ```

2. Triggered after the user submits the customer satisfaction with a score.

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKCSATScoreSubmissionDidFinish(brandID: String, rating: Int)
   ```

3. Triggered when a new conversation has started, from the agent or from the consumer side.

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKConversationStarted(conversationID: String?)
   ```

4. Triggered when a conversation has ended, from the agent or from the consumer side.

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKConversationEnded(_ conversationID: String?, closeReason: LPConversationCloseReason)
   ```

5. Triggered when the conversation view controller is removed from its container view controller or window.

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKConversationViewControllerDidDismiss()
   ```

6. Triggered each time the agent typing state changes.

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKAgentIsTypingStateChanged(isTyping: Bool)
   ```

### UI

To determine the layout of messaging within the app, you can utilize various actions to control the behavior and UI such as menus, custom buttons, typing indication, etc.

**Note:** The following methods (1,2 and 3) are only available when using the SDK ViewController (Window Mode).

1. Change the state of the action menu of the conversation for brandID.

   ```swift
   public func toggleChatActions(accountID: String, sender: UIBarButtonItem? = nil)
   ```

   **Note:** Refer to [[Messaging API](consumer-experience-ios-sdk-messaging-methods.html#togglechatactions) to learn more about `toggleChatActions`.


2. Triggered each time the SDK menu is opened/closed.

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKActionsMenuToggled(toggled: Bool)
   ```

3. If you set a custom button, the **LPMessagingSDKCustomButtonTapped** method gets called when clicking the custom button.

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKCustomButtonTapped()
   ```

4. Triggered if Off-Hours state changed.

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKOffHoursStateChanged(isOffHours: Bool, brandID: String)
   ```  

### User Data

Pass and display consumer information to agents, and agent information to consumers.

**Note:** Refer to [Interface and class definitions](consumer-experience-ios-sdk-interfacedefinitions.html#lpuser) to learn more about the `LPUser` object.

1. Set the user profile on LiveEngage.

   ```swift
   public func setUserProfile(lpuser: LPUser, brandID: String)
   ```

2. Return Previously Assigned Agent, if any.

   ```swift
   public func getAssignedAgent(conversationQuery: ConversationParamProtocol) -> LPUser?
   ```

3. Triggered each time the SDK receives info about the agent from the Server.

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKAgentDetails(agent: LPUser?)
   ```

### Logs and Info


Send logs from LiveEngage to your app. Logs include different severity levels of errors and warnings.  

1. Subscribe the host app to receive log events from a specific log level and above.

   ```swift
   public func subscribeLogEvents(logLevel: LogLevel)
   ```

    **Note:** Refer to [Interface and class definitions](consumer-experience-ios-sdk-interfacedefinitions.html#lpuser) to learn more about the `LogLevel` object.

2. Triggered when the SDK version you're using is obselete and needs an update.

   ```swift
   <LPMessagingSDKdelegate> func LPMessagingSDKObseleteVersion(error: NSError)
   ```

3. Return the SDK current version.

   ```swift
   public func getSDKVersion() -> String?
   ```

4. Print all the keys that can be localized on the SDK.

   ```swift
   public func printAllLocalizedKeys()
   ```

5. Print all supported languages on the SDK.

   ```swift
   public func printSupportedLanguages()
   ```

6. Return all supported languages on the SDK.

   ```swift
   public func getAllSupportedLanguages() -> [String : String]
   ```

### App Extensions

To make sure the SDK uses the iOS keyboard only, and not third party ones, disable app extensions for keyboard as follows:

In your **AppDelegate**, add the method application(_:shouldAllowExtensionPointIdentifier:)
 with the implementation of:

```swift
func application(_ application: UIApplication, shouldAllowExtensionPointIdentifier extensionPointIdentifier: UIApplicationExtensionPointIdentifier) -> Bool {
    return extensionPointIdentifier != UIApplicationExtensionPointIdentifier.keyboard
 }
```



