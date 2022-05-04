---
pagename: Configure the iOS SDK
redirect_from:
  - consumer-experience-ios-sdk-configuring-the-sdk.html
  - mobile-app-messaging-sdk-for-ios-customization-and-branding-customizing-the-sdk.html
  - consumer-experience-ios-sdk-app-extensions.html
  - consumer-experience-ios-sdk-initialization.html
  - mobile-app-messaging-sdk-for-ios-configuration-initialization.html
  - consumer-experience-ios-sdk-lifecycle.html
  - mobile-app-messaging-sdk-for-ios-configuration-conversations-lifecycle.html
  - consumer-experience-ios-sdk-delegates.html
  - mobile-app-messaging-sdk-for-ios-configuration-sdk-delegates.html
  - consumer-experience-ios-sdk-logs-info.html
  - mobile-app-messaging-sdk-for-ios-configuration-logs-and-info.html
  - consumer-experience-ios-sdk-UI.html
  - mobile-app-messaging-sdk-for-ios-configuration-ui.html
  - consumer-experience-ios-sdk-user-data.html
  - mobile-app-messaging-sdk-for-ios-configuration-user-data.html
  - consumer-experience-ios-sdk-configuration.html

Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
permalink: mobile-app-messaging-sdk-for-ios-configure-the-ios-sdk.html
indicator: messaging
---
 

You can register for LivePerson events related to the conversation, determine the layout of messaging with the app, sends logs from Conversational Cloud to your app, and display consumer information to agents or vice versus. 


The most suitable time to customize configuration is right after the SDK initialization and before calling `showConversation()`.

* Default configuration:

   ```swift
   let configuration = LPConfig.defaultConfiguration
   ```

* Print all configurable attributes and their default values:

   ```swift
   LPConfig.printAllConfigurations()
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



### Branding

You can customize the look and feel of your app using the `LPConfig` object. Create your configuration instance and assign the attributes you want to customize.  For the list of all the attributes to can configure, see [Attributes](mobile-app-messaging-sdk-for-ios-sdk-attributes-attributes.html).



**Example configuration:**   

```swift
configuration.remoteUserBubbleBackgroundColor = UIColor.purpleColor()
configuration.brandName = "Brand Name"
configuration.remoteUserBubbleBorderWidth = 0.5
```





### Conversations Lifecycle

During the course of the conversation, consumers can take several actions such as Mark as urgent to receive a faster service, or Resolve conversation to let your agents know they have received their answers.  

#### Methods

For information about the methods, see to [Messaging API](mobile-app-messaging-sdk-for-ios-sdk-apis-messaging-api.html).

* Check for an active conversation:
   - **True** - Active conversation 
   - **False** - No active conversation

   ```swift
   public func checkActiveConversation(conversationQuery: ConversationParamProtocol) -> Bool
   ```

* Mark the current conversation as Urgent:

   ```swift
   public func markAsUrgent(conversationQuery: ConversationParamProtocol)
   ```

* Check if the current conversation is marked as Urgent:

   ```swift
   public func isUrgent(conversationQuery: ConversationParamProtocol) -> Bool
   ```

* Mark an urgent conversation as normal:

   ```swift
   public func dismissUrgent(conversationQuery: ConversationParamProtocol)
   ```

* Resolve the current conversation:

   ```swift
   public class func resolveConversation(_ conversation: Conversation, completion: (() -> Void)? = {()})
   ```

   ```swift
   public class func resolveConversationForConversationQuery(_ conversationQuery: ConversationParamProtocol, completion: (() -> Void)? = {()})
   ```


* Clear the conversation history:

   ```swift
   public func clearHistory(conversationQuery: ConversationParamProtocol) throws
   ```

   **Note:** Use clear history only if there is no open/active conversation.

* Logout Current User from LPMessagingSDK:

   ```swift
   public func logout()
   ```

* Stop and clear all the metadata of the SDK:

   ```swift
   public func destruct()
   ```

#### Delegates

* Triggered when the the user submits the survey and dismisses the customer satisfaction survey:

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKConversationCSATDismissedOnSubmittion(conversationID: String?)
   ```

* Triggered after the user submits the customer satisfaction with a score:

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKCSATScoreSubmissionDidFinish(brandID: String, rating: Int)
   ```

* Triggered when a new conversation has started, from the agent or from the consumer side:

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKConversationStarted(conversationID: String?)
   ```

* Triggered when a conversation has ended, from the agent or from the consumer side:

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKConversationEnded(_ conversationID: String?, closeReason: LPConversationCloseReason)
   ```

* Triggered when the conversation view controller is removed from its container view controller or window:

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKConversationViewControllerDidDismiss()
   ```

* Triggered each time the agent typing state changes:

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKAgentIsTypingStateChanged(isTyping: Bool)
   ```


### Customer Experience Survey
The Customer Experience Survey contains the agent avatar, and by default, the agent's name is empty.  If the conversation has an assigned agent and its image was downloaded previously using profileUrl, this image displays in the view.  Also, if the conversation has an assigned agent, the agent's nickName is used.  If no avatar image, then the default avatar image displays with the background and tint color configuration for the agent bubble.

The survey only shows if the CSAT configured to appear according to `LPConfig.defaultConfiguration.csatShowSurveyView`, the conversation has an assigned agent, or the CSAT wasn't previously submitted.  The survey gets dismissed when the user completes the survey and then presses the submit button or if they chose to skip the CSAT.  The CSAT gets automatically dismissed if the consumer filled it in on another device.  If the CSAT is visible when an agent resumes the conversation, the CSAT gets dismissed automatically.  

**Notes:** 
When using Custom View Controller Mode, the Conversation view must be removed when leaving the App. To avoid dismissing the View when CSAT/SecureForms/PhotoSharing View is presented, you should only dismiss the Conversation view if Moving From ParentView, as demonstrated below.

```swift
if (self.conversationQuery != nil && self.isMovingToParentViewController){
    LPMessaging.instance.removeConversation(self.conversationQuery!)
}
```

When ViewController Mode is used, on the Navigation Bar Back Button, you can simply call `LPMessaging.instance.removeConversation(self.conversationQuery!)`.


* Get the object containing the default configurations:

   ```swift
   let configuration = LPConfig.defaultConfiguration
   ```

* Set Survey Button Background Color:

   ```swift
   configuration.csatSubmitButtonBackgroundColor = UIColor.lightGray
   ```

* Set Survey Background Color of the Rating Buttons:

   ```swift
   configuration.csatRatingButtonSelectedColor = UIColor.lightGray
   ```

* Set Survey Color for the FCR survey buttons (YES/NO) when selected:

   ```swift
   configuration.csatResolutionButtonSelectedColor = UIColor.lightGray
   ```

* Set Survey Text Color for all Labels:

   ```swift
   configuration.csatAllTitlesTextColor = UIColor.lightGray
   ```

* Set Survey Navigation Bar Background Color:

   ```swift
   configuration.csatNavigationBackgroundColor = UIColor.lightGray
   ```

**Example configuration:**  

 ```swift
let configuration = LPConfig.defaultConfiguration
configuration.csatSubmitButtonBackgroundColor = UIColor.lightGray
configuration.csatRatingButtonSelectedColor = UIColor.lightGray
configuration.csatResolutionButtonSelectedColor = UIColor.lightGray
configuration.csatAllTitlesTextColor = UIColor.lightGray
configuration.csatNavigationBackgroundColor = UIColor.lightGray
```

* Hide or don't use the agent avatar and agent name:

   ```swift
   LPConfig.defaultConfiguration.csatAgentViewHidden
   ```

* Set agent avatar icon and background color:

   ```swift
   LPConfig.defaultConfiguration.csatAgentAvatarBackgroundColor
   LPConfig.defaultConfiguration.csatAgentAvatarIconColor
   ```

* Define the color of the stars:

   ```swift
   LPConfig.defaultConfiguration.csatRatingButtonSelectedColor
   ```

   The rating question includes 'Agent' by default in the text. If the conversation has an assigned agent and the agent's nickName is not empty, this nickName is used instead.

   {:.important}
   The visibility cannot be configured; therefore, it is always visible.


* Hide or don't use the Resolution Confirmation View (yes/no):

   ```swift
   LPConfig.defaultConfiguration.csatResolutionHidden
   ```

   {:.important}
   If agentView is shown ("**csatAgentViewHidden**"), this view will always be hidden, even if "**csatResolutionHidden**" is set to true.

* Define the CSAT title text color:

   ```swift
   LPConfig.defaultConfiguration.csatAllTitlesTextColor
   ```



For more details on the different attributes you are able to customize, refer to [Attributes](mobile-app-messaging-sdk-for-ios-customization-and-branding-attributes.html#surveys-buttons-csat-and-fcr).




### Logs and Info


Send logs from Conversational Cloud to your app. Logs include different severity levels of errors and warnings.  

* Subscribe the host app to receive log events from a specific log level and above:

   ```swift
   public func setLoggingLevel( level: LPLoggingLevel)
   ```

    **Note:** Refer to [Interface and class definitions](consumer-experience-ios-sdk-interfacedefinitions.html#lpuser) to learn more about the `LogLevel` object.

* Triggered when the SDK version you're using is obselete and needs an update:

   ```swift
   <LPMessagingSDKdelegate> func LPMessagingSDKObseleteVersion(error: NSError)
   ```

* Return the SDK current version:

   ```swift
   public func getSDKVersion() -> String?
   ```

* Print all the keys that can be localized on the SDK:

   ```swift
   public func printAllLocalizedKeys()
   ```

* Print all supported languages on the SDK:

   ```swift
   public func printSupportedLanguages()
   ```

* Return all supported languages on the SDK:

   ```swift
   public func getAllSupportedLanguages() -> [String : String]
   ```




### LPMessagingSDK Delegates

The SDK uses 2 delegates:

1. **LPMessagingSDKDelegate** - for lifecycle and connectivity events:

   ```swift
   LPMessaging.instance.delegate = self
   ```

2. **LPMessagingSDKNotificationDelegate** - for handling Push and In-App Notifications:

   ```swift
   LPMessaging.instance.registerPushNotifications(token: deviceToken, notificationDelegate: self)
   ```

You should implement and set the **LPMessagingSDKNotificationDelegate**, in order to receive Push Notifications from the SDK.


#### Conversation Functions

* Get the conversation screen and determine which of the conversations to display in the Conversation Window.

   ```swift
   public func getConversationBrandQuery(_ brandID: String, campaignInfo: LPCampaignInfo? = nil) -> ConversationParamProtocol
   ```

* Get the conversation screen and determine which of the conversations to display in the Conversation Window, using the **Consumer ID**:

   ```swift
   public func getConversationConsumerQuery(consumerID: String?, brandID: String, agentToken: String) -> ConversationParamProtocol
   ```

* Return a boolean flag, with **Ready** when the Brand is connected and conversation can be processed:

   ```swift
   public func isBrandReady(brandID: String) -> Bool
   ```



### Message screen

You can customize the messaging screen by adding more options to the LPMessagingSDK menu, such as **Mark as urgent**, **Clear history**, and **Resolve the conversation**.

* Add options to the messaging menu:

   ```swift
   LPMessaging.instance.toggleChatActions("Your Account Number")
   ```

* Get the object containing the default configurations:

   ```swift
   let configuration = LPConfig.defaultConfiguration
   ```

* Set Agent User Bubble Background Color:
   
   ```swift
   configuration.remoteUserBubbleBackgroundColor = UIColor.lightGray
   ```

* Set Agent User Bubble Border Color:

   ```swift
   configuration.remoteUserBubbleBorderColor = UIColor.lightGray
   ```

* Set Agent Avatar Silhouette Color:

   ```swift
   configuration.remoteUserAvatarIconColor = UIColor.white
   ```

* Set Agent Avatar Background Color: 

   ```swift
   configuration.remoteUserAvatarBackgroundColor = UIColor.lightGray
   ```

* Set User Bubble Background Color: 

   ```swift
   configuration.userBubbleBackgroundColor = UIColor.white
   ```

* Set User Bubble Border Color:

   ```swift
   configuration.userBubbleBorderColor = UIColor.lightGray
   ```

* Set User Bubble Border Width:

   ```swift
   configuration.userBubbleBorderWidth = 1.0
   ```

* Set User Text Color:

   ```swift
   configuration.userBubbleTextColor = tangerine
   ```

* Set Scroll to Bottom Button Background Color:  

   ```swift
   configuration.scrollToBottomButtonBackgroundColor = tangerine
   ```


For more details on the different attributes you are able to customize, refer to [Customizing and Branding](consumer-experience-ios-sdk-attributes.html).


### Push Notifications
Currently, our default flow for the process of loading the Conversation View Controller (such as registering with several of our internal domains) also registers the consumer to our Push Notification service. If this is not desired, you can now opt out of this process by setting the following flag to "false".  The default is set to "true", and in order for the changes to take effect the consumer must log out of the LPMessagingSDK:

```swift
configuration.enableLpPusherService: Bool = true
```

### UI

To determine the layout of messaging within the app, you can utilize various actions to control the behavior and UI such as menus, custom buttons, typing indication, etc.

**Note:** The following methods (1,2 and 3) are only available when using the SDK ViewController (Window Mode).

* Change the state of the action menu of the conversation for brandID:

   ```swift
   public func toggleChatActions(accountID: String, sender: UIBarButtonItem? = nil)
   ```

   **Note:** Refer to [[Messaging API](mobile-app-messaging-sdk-for-ios-sdk-apis-messaging-api.html#togglechatactions) to learn more about `toggleChatActions`.


* Triggered each time the SDK menu is opened/closed:

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKActionsMenuToggled(toggled: Bool)
   ```

* If you set a custom button, the **LPMessagingSDKCustomButtonTapped** method gets called when clicking the custom button:

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKCustomButtonTapped()
   ```

* Triggered if Off-Hours state changed:

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKOffHoursStateChanged(isOffHours: Bool, brandID: String)
   ```  

### User Data

Pass and display consumer information to agents, and agent information to consumers.

**Note:** Refer to [Interface and class definitions](consumer-experience-ios-sdk-interfacedefinitions.html#lpuser) to learn more about the `LPUser` object.

* Set the user profile on Conversational Cloud:

   ```swift
   public func setUserProfile(lpuser: LPUser, brandID: String)
   ```

* Return Previously Assigned Agent, if any:

   ```swift
   public func getAssignedAgent(conversationQuery: ConversationParamProtocol) -> LPUser?
   ```

* Triggered each time the SDK receives info about the agent from the Server:

   ```swift
   <LPMessagingSDKdelegate> optional func LPMessagingSDKAgentDetails(agent: LPUser?)
   ```
