---
pagename: Configure the iOS SDK
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS

permalink: mobile-app-messaging-sdk-for-ios-configure-the-ios-sdk.html

---


You can register for LivePerson events related to the conversation, determine the layout of messaging with the app, sends logs from LiveEngage to your app, and display consumer information to agents or vice versus. 


The most suitable time to customize configuration is right after the SDK initialization and before calling `showConversation()`.

* Default configuration:

   ```swift
   let configuration = LPConfig.defaultConfiguration
   ```

* Print all configurable attributes and their default values:

   ```swift
   LPConfig.printAllConfigurations()
   ```

### Functions

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

### SDK Delegates

The SDK uses 2 delegates:

1. **LPMessagingSDKDelegate** - for lifecycle and connectivity events:

   ```swift
   LPMessagingSDK.instance.delegate = self
   ```

2. **LPMessagingSDKNotificationDelegate** - for handling Push and In-App Notifications:

   ```swift
   LPMessagingSDK.instance.registerPushNotifications(token: deviceToken, notificationDelegate: self)
   ```

You should implement and set the **LPMessagingSDKNotificationDelegate**, in order to receive Push Notifications from the SDK.

### Conversations Lifecycle

During the course of the conversation, consumers can take several actions such as Mark as urgent to receive a faster service, or Resolve conversation to let your agents know they have received their answers.  

#### Methods

For information about the methods, see to [Messaging API](consumer-experience-ios-sdk-messaging-methods.html).

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

### UI

To determine the layout of messaging within the app, you can utilize various actions to control the behavior and UI such as menus, custom buttons, typing indication, etc.

**Note:** The following methods (1,2 and 3) are only available when using the SDK ViewController (Window Mode).

* Change the state of the action menu of the conversation for brandID:

   ```swift
   public func toggleChatActions(accountID: String, sender: UIBarButtonItem? = nil)
   ```

   **Note:** Refer to [[Messaging API](consumer-experience-ios-sdk-messaging-methods.html#togglechatactions) to learn more about `toggleChatActions`.


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

* Set the user profile on LiveEngage:

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

### Logs and Info


Send logs from LiveEngage to your app. Logs include different severity levels of errors and warnings.  

* Subscribe the host app to receive log events from a specific log level and above:

   ```swift
   public func subscribeLogEvents(logLevel: LogLevel)
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

### App Extensions

To make sure the SDK uses the iOS keyboard only, and not third party ones, disable app extensions for keyboard as follows:

In your **AppDelegate**, add the method application(_:shouldAllowExtensionPointIdentifier:)
 with the implementation of:

```swift
func application(_ application: UIApplication, shouldAllowExtensionPointIdentifier extensionPointIdentifier: UIApplicationExtensionPointIdentifier) -> Bool {
    return extensionPointIdentifier != UIApplicationExtensionPointIdentifier.keyboard
 }
```


### Look and feel (branding)

You can customize the look and feel of your app using the `LPConfig` object. Create your configuration instance and assign the attributes you want to customize.  For the list of all the attributes to can configure, see [Attributes](mobile-app-messaging-sdk-for-ios-sdk-attributes-attributes.html).


**Example configuration:**   

```swift
configuration.remoteUserBubbleBackgroundColor = UIColor.purpleColor()
configuration.brandName = "Brand Name"
configuration.remoteUserBubbleBorderWidth = 0.5
```

### Message screen

You can customize the messaging screen by adding more options to the LPMessagingSDK menu, such as **Mark as urgent**, **Clear history**, and **Resolve the conversation**.

* Add options to the messaging menu:

   ```swift
   LPMessagingSDK.instance.toggleChatActions("Your Account Number")
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

### Customer Experience Survey


<div class="important">
When using Custom View Controller Mode, the Conversation view must be removed when leaving the App. To avoid dismissing the View when CSAT/SecureForms/PhotoSharing View is presented, you should only dismiss the Conversation view if Moving From ParentView, as demonstrated below.
</div>

```swift
if (self.conversationQuery != nil && self.isMovingToParentViewController){
    LPMessagingSDK.instance.removeConversation(self.conversationQuery!)
}
```

**Note**: When ViewController Mode is used, on the Navigation Bar Back Button, you can simply call **LPMessagingSDK.instance.removeConversation(self.conversationQuery!)**.


{:.important}
You must customize your Customer Experience Survey before initializing a conversation (calling **LPMessagingSDK.instance.showAgentConversation()**).

1. Get the object containing the default configurations:

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


### Audio

Audio Messaging allows consumers to send audio messages to agents. 

1. Contact your Account Team to activate the feature on the LivePerson server side.

2. Open the Info.plist and add the required permission to access the microphone. 

   * **Key:** `NSMicrophoneUsageDescription`

   * **Value:** "Microphone Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS"   

   When the system prompts the user to approve access to the microphone, it displays as part of the alert.

2. Enable the feature:  

   `LPConfig.defaultConfiguration.enableAudioSharing`  

   By default, the value is *false* (disabled).  

3. Define the max length of an audio message:

   `LPConfig.defaultConfiguration.recordingDurationLimit`  

   The values are in seconds. 
   
   The minimum value is 15 seconds; the maximum and the default value is *120* seconds.

4. Define the max number of audio messages saved on the device:  

   `LPConfig.defaultConfiguration.maxNumberOfSavedAudioFilesOnDisk`  

   The default value is *20*.  

5. Modify and localize the following strings:  

   * **Short tap tooltip**  

     Presented when the consumer used a shorttap instead of a long tap.  
     
     **Key:** `toolTipLongTapToRecord`
     
     The default text is *"Long tap to record."*

   * **Release microphone tooltip**

     Presented when the consumer doesn't release the microphone icon. 
     
     **Key:** `toolTipReleaseButtonForRecording` 
     
     The default text is *"Release for recording."*

   * **Maximum length reached tooltip**

     Presented when the message length reached to the maximum length. 
     
     **Key:** `toolTipRecordLimitReached`
     
     The default text is *"Recording limit has been reached, click to send."*
