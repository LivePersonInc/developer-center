---
pagename: Configure the iOS SDK
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS

permalink: mobile-app-messaging-sdk-for-ios-configure-the-ios-sdk.html

---

You can register for LivePerson events related to the conversation, determine the layout of messaging with the app, configure Proguard, or define the backup rules for auto backup and restore. 

### Initialize the Messaging SDK with Monitoring Params

{:.important}
To get the App key or `appInstallationId`, a new Conversation Source needs to be added on LiveEngage, for more information about it, contact your Account Team.


1. Inside **viewController** add the following imports:

   ```swift
   import LPMessagingSDK
   import LPInfra
   import LPMonitoring
   ```

2. Also inside **ViewController**, under **viewDidLoad**, add the following code:

   ```swift
   do {
     let monitoringParams = LPMonitoringInitParams(appInstallID: "appInstallationId")
     try LPMessagingSDK.instance.initialize("Your account ID", monitoringInitParams: monitoringParams)
   } catch {
     return
   }
   ```

3. Create **LPMonitoringParams**. The entry points and engagement attributes used here are dummies:

   ```swift
     let entryPoints = ["tel://972737004000",
                       "http://www.liveperson.com",
                       "sec://Sport",
                       "lang://Eng"]

     let engagementAttributes = [
       ["type": "purchase", "total": 20.0],
       ["type": "lead",
       "lead": ["topic": "luxury car test drive 2015",
             "value": 22.22,
             "leadId": "xyz123"]]
     ]

     let monitoringParams = LPMonitoringParams(entryPoints: entryPoints, engagementAttributes: engagementAttributes)
   ```


4. Using the **LPMonitoringParams**, get the Engagement for the User, which is needed to start a new conversation with a specific campaign.

   ```swift
   LPMonitoringAPI.instance.getEngagement(consumerID: self.consumerID, monitoringParams: monitoringParams, completion: {
         if let first = engagement.engagementDetails?.first {
           let campaign = first.campaignId
           let id = first.engagementId
           let context : String = first.contextId!
           self.campaignInfo = LPCampaignInfo(campaignId: campaign, engagementId: id, contextId: context)
         } else {
           self.campaignInfo = nil
         }
       }) { (error) in
         self.campaignInfo = nil
       }
     }
   ```

5. Set up and call the conversation view. You’ll provide your LivePerson account number, a container view controller, and the campaign information.

   ```swift
   let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery("Your account ID", campaignInfo: campaignInfo)
   let conversationViewParams = LPConversationViewParams(conversationQuery: conversationQuery, isViewOnly: false)
   LPMessagingSDK.instance.showConversation(conversationViewParams, authenticationParams: nil)
   ```

6. Remove the conversation view when your container is deallocated:

   ```swift
   let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountNumber)
   LPMessagingSDK.instance.removeConversation(conversationQuery)
   ```

   <div class="important">When using Custom View Controller Mode, the Conversation view must be removed when leaving the App. To avoid dismissing the View when CSAT/SecureForms/PhotoSharing View is presented, you should only dismiss the Conversation view if Moving From ParentView, as demonstrated below.</div>

   ```swift
   if (self.conversationQuery != nil && self.isMovingToParentViewController){
     LPMessagingSDK.instance.removeConversation(self.conversationQuery!)
   }
   ```

**Note**: When using ViewController Mode, on the Navigation Bar Back Button, you can call **LPMessagingSDK.instance.removeConversation(self.conversationQuery!)**.


#### Supporting functions:

1. Get ’filter’ for the conversation screen, determining which of the conversations display in the Conversation Window:

   ```swift
   public func getConversationBrandQuery(_ brandID: String, campaignInfo: LPCampaignInfo? = nil) -> ConversationParamProtocol
   ```

2. Get ’filter’ for the conversation screen, determining which of the conversations display in the Conversation Window, using the **Consumer ID**:

   ```swift
   public func getConversationConsumerQuery(consumerID: String?, brandID: String, agentToken: String) -> ConversationParamProtocol
   ```

3. Returns a boolean flag, with **Ready** when the Brand is connected and conversation can be processed:

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

**Note: for the complete information about the methods, refer to this [link](consumer-experience-ios-sdk-messaging-methods.html)**

1. This method checks for an active conversation, **True** - there is an active conversation. **False** - there is no active conversation

   ```swift
   public func checkActiveConversation(conversationQuery: ConversationParamProtocol) -> Bool
   ```

2. This method marks the current conversation as Urgent.

   ```swift
   public func markAsUrgent(conversationQuery: ConversationParamProtocol)
   ```

3. This method checks if the current conversation is marked as Urgent.

   ```swift
   public func isUrgent(conversationQuery: ConversationParamProtocol) -> Bool
   ```

4. This method marks an urgent conversation as normal.

   ```swift
   public func dismissUrgent(conversationQuery: ConversationParamProtocol)
   ```

5. This method resolves the current conversation.

   ```swift
   public class func resolveConversation(_ conversation: Conversation, completion: (() -> Void)? = {()})
   ```

   ```swift
   public class func resolveConversationForConversationQuery(_ conversationQuery: ConversationParamProtocol, completion: (() -> Void)? = {()})
   ```


6. This method clears the conversation history.

   ```swift
   public func clearHistory(conversationQuery: ConversationParamProtocol) throws
   ```

   **Note:** Use clear history only if there is no open/active conversation.

7. This method will logout Current User from LPMessagingSDK

   ```swift
   public func logout()
   ```

8. This method is typically used to stop and clear all the metadata of the SDK

   ```swift
   public func destruct()
   ```

#### Delegates

1. Will be triggered when the customer satisfaction survey is dismissed after the user has submitted the survey

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKConversationCSATDismissedOnSubmittion(conversationID: String?)
   ```

2. Will be triggered after the customer satisfaction page is submitted with a score.

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKCSATScoreSubmissionDidFinish(brandID: String, rating: Int)
   ```

3. Will be triggered when a new conversation has started, from the agent or from the consumer side.

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKConversationStarted(conversationID: String?)
   ```

4. Will be triggered when a conversation has ended, from the agent or from the consumer side.

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKConversationEnded(_ conversationID: String?, closeReason: LPConversationCloseReason)
   ```

5. Will be triggered when the conversation view controller removed from its container view controller or window.

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKConversationViewControllerDidDismiss()
   ```

6. Will be triggered each time the agent typing state changes.

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKAgentIsTypingStateChanged(isTyping: Bool)
   ```

### UI

To determine the layout of messaging within the app, you can utilize various actions to control the behavior and UI such as menus, custom buttons, typing indication, etc.

**Note:** The following methods (1,2 and 3) are only available when using the SDK ViewController (Window Mode).

1. The **[toggleChatActions](consumer-experience-ios-sdk-messaging-methods.html#togglechatactions)** method changes the state of the action menu of the conversation for brandID.

   ```swift
   public func toggleChatActions(accountID: String, sender: UIBarButtonItem? = nil)
   ```

2. The **LPMessagingSDKActionsMenuToggled** nethod triggers each time the SDK menu is opened/closed.

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKActionsMenuToggled(toggled: Bool)
   ```

3. If you set a custom button, the **LPMessagingSDKCustomButtonTapped** method gets called when clicking the custom button.

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKCustomButtonTapped()
   ```

4. The **LPMessagingSDKOffHoursStateChanged** method triggers if Off-Hours state changed.

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKOffHoursStateChanged(isOffHours: Bool, brandID: String)
   ```
