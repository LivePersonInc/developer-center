---
pagename: Messaging API
redirect_from:
  - consumer-experience-ios-sdk-messaging-methods.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: SDK APIs 

order: 10
permalink: mobile-app-messaging-sdk-for-ios-sdk-apis-messaging-api.html

indicator: messaging
---

### checkActiveConversation

Use this API method to check if there is an active conversation by passing a conversation query.

**Notes:**

* Conversation query defines a filter that fetches conversations which match certain conditions. Each query can have one active conversation at most.
* Conversation is said to be active the moment the server receives an ACK (acknowledgement). It may not yet have an assigned agent.
* You may call this API only if you are sure that the SDK is in sync with the server, meaning LPMessagingSDKConnectionStateChanged was invoked and isReady is set to true.

```swift
func checkActiveConversation(_ conversationQuery: ConversationParamProtocol) -> Bool
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations display in the following screens. | Default: sorts the conversations by account number.  |

### clearHistory

Use this API method only when there is no active conversation because it clears the local database. The history is still available on the server but is unretrievable from the specific device unless the device has a fresh install.

{: .important}
Due to current product limitations, when calling the `logout` method in Authentication Mode, the user's history shows up when they return to the conversation, even if calling `clearHistory` previously.

```swift
func clearHistory(_ conversationQuery: ConversationParamProtocol) throws
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations displays in the following screens. | Default: sorts the conversations by account number.  |

### destruct
Use this method to stop and clear all the metadata of the SDK. It is a destructive method and conducts the following: 

* Clears all SDK non-persistent data.
* Stops all connections and operations.
* Remove Conversation View Controller

```swift
func destruct()
```

### dismissUrgent

Use this API method to cancel the [markAsUrgent API](consumer-experience-ios-sdk-messaging-methods.html#markasurgent), which resets the SLA for the agent response back to default.  This API can be called only for open conversations.

```swift
func dismissUrgent(_ conversationQuery: ConversationParamProtocol)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations displays in the following screens. | Default: sorts the conversations by account number.  |


### getAllSupportedLanguages

Use this method to get all supported languages as Strings dictionary where:

* **Key** - Locale key
* **Value** - explicit language name (example: "English", "Portuguese (Brazil)", ...)

```swift
func getAllSupportedLanguages() -> [String : String]
```
### getAssignedAgent

Use this API method to get the assigned agent details of the last or current conversation.

For this method to work correctly, you need to set **retrieveAssignedAgentFromLastClosedConversation** to **true** in the LPConfig defaultConfiguration.

You must check that the SDK is ready before calling this method.

```swift
func getAssignedAgent(_ conversationQuery: ConversationParamProtocol) -> LPUser?
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations displays in the following screens. | Default: sorts the conversations by account number.  |

### getConversationBrandQuery

Create ConversationParamProtocol of Brand query type. ConversationParamProtocol represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens.

```swift
func getConversationBrandQuery(_ brandID: String, campaignInfo: LPCampaignInfo? = nil) -> ConversationParamProtocol
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| brandID | brandID to request the conversation query for | -- |
| campaignInfo | an optional campaign info (LPCampaignInfo) to use advanced routing for the consumer. This object based on campaignID(mandatory), engagementID(mandatory), contextID(mandatory), sessionID(optional) and visitorID(optional) |  -- |

_**Note: for information about the how to initialize the SDK with MonitoringParams and get the Campaign, click [here](consumer-experience-ios-sdk-quick-start.html#step-4-optional-initialization-with-monitoring-params)**_

### getConversationConsumerQuery

Create ConversationParamProtocol of Consumer and Skill query type. ConversationParamProtocol represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens.

```swift
func getConversationConsumerQuery(_ consumerID: String?, brandID: String, agentToken: String) -> ConversationParamProtocol
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| consumerID | consumerID to request the conversation query for | -- |
| brandID | brandID to request the conversation query for | -- |
| agentToken | a unique token for agent aka Agent Bearer |  -- |








### getInactiveUserInteractionTimeInterval

Use this API method to get the Inactive time interval in seconds of the user's last touch on screen. This interval applies to scroll/messaging/action menus and any other general action on the conversation screen.
If the screen is not active or the application is in the background this API will return -1.

```swift
func getInactiveUserInteractionTimeInterval(_ conversationQuery: ConversationParamProtocol) -> TimeInterval
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations displays in the following screens. | Default: sorts the conversations by account number. |


### getSDKVersion

Use this API to get the current SDK version string.

```swift
func getSDKVersion() -> String?
```


### getUnreadMessagesCount

When unread messages are waiting for the consumer within the brand app, this information can be pushed to display in the app’s notification badge. Within the app, brands can develop their own visualization of a badge, such as a number, icon, or another marker to show unread messages.

With every push, the SDK receives the unread messages number through the LP Push Service.

{:.important}
The last device registered to the LP Push Service receives the push, which means only one device can fetch the unready messages indication.  So, if the user uses two devices in parallel, the device that that does not receive push events receives updates only once a message has been sent from that device and the push arrives.  Additionally, if a conversation is ongoing in web messaging, then the push does not arrive on the device since the web socket is already open. 

**Get the unread message badge counter**

This API method uses a threshold mechanism of 10 seconds from the last time the badge retrieved from the server. If calling this method within less than 10 seconds, the counter will be returned from cache. Otherwise, it will be fetched again with new data.

```swift
func getUnreadMessagesCount(_ conversationQuery: ConversationParamProtocol, completion: @escaping (_ badgeCounter: Int)->(), failure: @escaping (_ error:NSError)->())
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |
| completion | called once the operation ends successfully with the counter of unread badge messages. | If no unread message, 0 will be returned. |
| failure | called once the operation of retrieving unread messages count failed for the provided conversation query. | -- |


### handlePush

To receive all incoming push notifications in a single function and handle them, add the following method. This method cooperates with two other API methods:

* This method calls the shouldShowPushNotification method. If the host app returns false, the SDK does not show anything to the UI.

* Otherwise, the SDK asks the host app to provide a view as an in-app notification. If the host app doesn’t implement this method, the SDK uses its own implementation.

```swift
func application(application: UIApplication, didReceiveRemoteNotification userInfo: [NSObject : AnyObject], fetchCompletionHandler completionHandler: (UIBackgroundFetchResult) -> Void) {
    LPMessagingSDK.instance.handlePush(userInfo)
}
```

{:.important}
The proprietary SDK notification is only for display purposes, interacting with it launches the Application, but won't navigate to the Conversation Window/ViewController, for a fully interactive notification host app needs to provide the implementation.


### initialize

The SDK initialization is done only once, inside AppDelegate, and it checks that the SDK has all mandatory preconditions. For example, it can find the bundle file, verify that all the pre-defined configurations are valid, and more.  If any precondition does not get met, the SDK throws an exception and, at this point, you must not do any other call to the SDK.

SDK can be initialized once without monitoringInitParams and then have another initialize call using this param.

{:.important}
Passing monitoringInitParams is mandatory when using Monitoring API capabilities.

```swift
func initialize(_ brandID: String? = nil, monitoringInitParams: LPMonitoringInitParams? = nil)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| brandId | An account ID of the Brand| Optional Parameter |
| monitoringInitParams | An initialization parameter of type [LPMonitoringInitParams](consumer-experience-ios-sdk-interfacedefinitions.html). This object contains all relevant parameters for initialization of the SDK for an account, including app install id. | Optional Parameter |

**Tip:** For authenticated users. If you want to register for push notifications immediately, before showing the conversation view, you must initialize the SDK  with an Account number. 

### isUrgent

Use this API method to check if the active conversation, if existing, is marked as urgent; otherwise, it returns false.

**Note:** You must check that the SDK is in [ready state](consumer-experience-ios-sdk-advanced-configurations.html) before calling this method.

```swift
func isUrgent(_ conversationQuery: ConversationParamProtocol) -> Bool
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations displays in the following screens. | Default: sorts the conversations by account number.  |

### logout

Use this API method to clean a user's data before a second user logs into the same device or to log the current user out.  

The `logout` method conducts the following:

* Unregisters from the push notification service.

* Clears all SDK persistent data.

* Cleans running operations (see [destruct](consumer-experience-ios-sdk-messaging-methods.html#destruct)).


```swift
func logout(completion: @escaping ()->(), failure: @escaping (_ error: Error)->())
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| Completion block | A completion block for successfully logout. | Completion block invokes only if all logout steps succeeded. |
| Failure block | A failure block with a specified error for logout failure. | Failure block invokes if at least one of the logout steps has failed. |

{:.important}
After calling `logout,` and before calling any other SDK methods, we recommend that you `initialize` again.  For details, see [initialized](https://developers.liveperson.com/consumer-experience-ios-sdk-messaging-methods.html#initialize).

### markAsUrgent

A consumer can mark a conversation as urgent to request a faster response from the agent. You can call this API method only if there’s an active conversation, otherwise an alert triggers. The conversation is marked as urgent only after the server receives an ACK (acknowledgement).

```swift
func markAsUrgent(_ conversationQuery: ConversationParamProtocol)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations display in the following screens. | Default: sorts the conversations by account number.  |

### printAllLocalizedKeys

Use this API method to print all localized strings’ keys.

```swift
func printAllLocalizedKeys()
```

### printSupportedLanguages

Use this API method to print the SDK's supported languages.

```swift
func printSupportedLanguages()
```

### reconnect

When using SSO in an authenticated connection, the SDK receives an auth-code (see [showConversation](consumer-experience-ios-sdk-messaging-methods.html#showconversation) API). The session, in this case, might have an expiration date (see [LPMessagingSDKTokenExpired](consumer-experience-ios-sdk-callbacks-index.html)). To reconnect with a new token, use the following 'reconnect' API and pass the new token.

Use this API method to reconnect the conversation's connection for conversation query.  Reconnecting opens the related WebSockets and syncs the conversation with its latest updates.

```swift
func reconnect(_ conversationQuery: ConversationParamProtocol, authenticationParams: LPAuthenticationParams)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations display in the following screens. | Default: sorts the conversations by account number.  |
| authenticationParams | Object type: LPAuthenticationParams?<br><br>Represents an object to determine the properties of an authenticated connection. If using authenticate connection, this parameter must be passed. LPAuthenticationParams supports Code Flow login or Implicit Flow login.<br><br>-**Implicit Flow**: pass 'jwt' parameter only.<br>- **Code Flow**: pass 'authCode' and 'redirectURI' only. | For object details see [LPAuthenticationParams](consumer-experience-ios-sdk-interfacedefinitions.html). |


### registerPushNotifications

Use this API method, in AppDelegate, to register to LPMessagingSDK push notifications.

**Note:** Push notifications must be pre-configured, and you must upload an APN certificate to LiveEngage. For details, see [how to configure push notifications](push-service-overview.html).

```swift
`func registerPushNotifications(token: Data, notificationDelegate: LPMessagingSDKNotificationDelegate? = nil, alternateBundleID: String? = nil, authenticationParams: LPAuthenticationParams? = nil)`
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| token | A token that identifies the device to APNs. The token is an opaque data type because that is the form that the provider needs to submit to the APNs servers when it sends a notification to a device. | The APNs servers require a binary format for performance reasons. <br> This is the exact same dictionary as received in application:didRegisterForRemoteNotificationsWithDeviceToken: method |
| notificationDelegate | An implementer of LPMessagingSDKNotificationDelegate. | |
| alternateBundleID | An optional value that can be used so that the LivePerson pusher service identifies your app with this identifier. | In debug mode, the SDK appends "-Dev" string to the bundle ID.  |
| authenticationParams | An optional authentication ([LPAuthenticationParams](consumer-experience-ios-sdk-interfacedefinitions.html)) param to be used for immediate Pusher registration | If passing authentication params, this method registers immediately to Pusher, otherwise the registration is performed when calling showConversation. |


**Tip:** For authenticated users. If you want to register for push notifications immediately, before showing the conversation view, you must initialize the SDK  with an Account number. 

{:.important}
After calling `logout,` and before calling any other SDK methods, we recommend that you `initialize` again.  For details, see [initialized](https://developers.liveperson.com/consumer-experience-ios-sdk-messaging-methods.html#initialize).


### removeConversation

When navigating out of the conversation screen, this API removes the view controller from its container by calling the remove conversation API. The method removes the SDK UI and cleans the service or network operation that was running.

Use this API method on the container's [deinit function](https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/Deinitialization.html).

{:.important}
Calling this API method from [viewWillDisappear](https://developer.apple.com/documentation/uikit/uiviewcontroller/1621485-viewwilldisappear) or [viewDidDisappear](https://developer.apple.com/documentation/uikit/uiviewcontroller/1621477-viewdiddisappear) can cause unexpected behavior.


```swift
func removeConversation(_ conversationQuery: ConversationParamProtocol)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations display in the following screens. | Default: sorts the conversations by account number. |

{:.important}
When using Custom View Controller Mode, you must configure it so that you remove the Conversation view when leaving the App.  To avoid dismissing the View when CSAT/SecureForms/PhotoSharing View displays, you should only dismiss the Conversation view if Moving From ParentView, as demonstrated below:

```swift
if (self.conversationQuery != nil && self.isMovingToParentViewController){
  LPMessagingSDK.instance.removeConversation(self.conversationQuery!)
}
```

**Note:** When using ViewController Mode, and on the Navigation Bar Back Button, you can simply call `LPMessagingSDK.instance.removeConversation(self.conversationQuery!)`.

### resolveConversation

Use this API method to enable a conversation to be resolved. The API requests the server to mark the active conversation as resolved. If there is no active conversation, an alert displays.

```swift
func resolveConversation(_ conversation: Conversation, completion: (() -> Void)? = {()})
```


| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations displays in the following screens. | Default: sorts the conversations by account number.  |


### setUserProfile

Use this API method to add custom parameters about the user and set them for the messaging agent.

```swift
func setUserProfile(_ lpuser: LPUser, brandID: String)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
|[lpuser](consumer-experience-ios-sdk-interfacedefinitions.html#lpuser) | object is an instance of LPUser. | Example: let user = LPUser(firstName: "John", lastName: "Doe", profileImageURL: "URL of image", phoneNumber: "555-555555") |
| brandId  | An account ID | -- |


### showConversation

Use this API method to open the conversation screen.

```swift
func showConversation(_ conversationViewParams: LPConversationViewParams, authenticationParams: LPAuthenticationParams? = nil)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationViewParams | Object type: LPConversationViewParams <br><br>Represents an object to determine conversation mode, filter and container. Such as Container or Window or if ViewOnly. | For object details see [LPConversationViewParams](consumer-experience-ios-sdk-interfacedefinitions.html). |
| authenticationParams | Object type: LPAuthenticationParams?<br><br>Represents an object to determine the properties of an authenticated connection. If using authenticated connection, this paramater must be passed. LPAuthenticationParams supports Code Flow login or Implicit Flow login. <br><br>- **Implicit Flow**: pass 'jwt' paramater only.<br>- **Code Flow**: pass 'authCode' and 'redirectURI' only. | For object details see [LPAuthenticationParams](consumer-experience-ios-sdk-interfacedefinitions.html). |

### subscribeLogEvents

Use this API method to subscribe to log events (Trace, Debug, Info, Warning, Error). Each time a log event with the passed log level occurs, the callback invokes with the log object.

```swift
func subscribeLogEvents(_ logLevel: LogLevel, logEvent: @escaping LogEventClosure)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| logLevel | object is an instance of [LPLog](consumer-experience-ios-sdk-interfacedefinitions.html). | |
| logEvent | The completion block passes the [LPLog](consumer-experience-ios-sdk-interfacedefinitions.html) object, which consists of all the information for the log. | To get text, use log.text |


### toggleChatActions

Use this API method to open or close the SDK menu.

* If using [window mode](consumer-experience-ios-sdk-messaging-methods.html#showconversation), you don’t need to utilize this method as the SDK has a dedicated button in the navigation bar to toggle the menu.
* If using [view controller mode](consumer-experience-ios-sdk-messaging-methods.html#showconversation), you may call this API to open the SDK menu or use other APIs to build your own menu.

```swift
func toggleChatActions(_ accountID: String, sender: UIBarButtonItem? = nil)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| accountID | An account ID | -- |
| sender | An optional UIBarButtonItem to use for toggling the chat actions | -- |



### Deprecated methods

#### showConversation (Deprecated)
*This method is deprecated since SDK version 2.7.0.**
*Use [showConversation(_ conversationViewParams: LPConversationViewParams, authenticationParams: LPAuthenticationParams? = nil)](consumer-experience-ios-sdk-messaging-methods.html#showconversation) instead*

This method is used to open the conversation screen.

```swift
func showConversation(_ conversationQuery: ConversationParamProtocol, authenticationCode: String? = nil, containerViewController: UIViewController? = nil)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |
| authenticationCode | The SDK can enable code-flow SSO. | If your account uses SSO, pass the auth-code here. Otherwise, skip this parameter. |
| containerViewController | The SDK needs a container view controller. This can be done in two ways: <br> **View Controller mode**: If you provide a container viewController, the SDK will put itself inside as a child viewController. This mode allows you to keep your own navigation bar intact. Using this method, you can use the provided callbacks to retrieve data from the SDK and show it in the navigation bar (users profile data, avatar URL, calling menu items, etc.) <br> **Window mode**: If you don’t provide a container view controller, the SDK places its UI components on top of the app UI, including the navigation bar.  | | |  

#### reconnect (Deprecated)
*This method was deprecated since SDK version 2.7.0. Use [reconnect(_ conversationQuery: ConversationParamProtocol, authenticationParams: LPAuthenticationParams](consumer-experience-ios-sdk-messaging-methods.html#reconnect) instead*

When using SSO in an authenticated connection, an auth-code is passed to the SDK (see [showConversation](consumer-experience-ios-sdk-messaging-methods.html#showconversation) API). The session in this case might have an expiration date (see [LPMessagingSDKTokenExpired](consumer-experience-ios-sdk-callbacks-index.html)). To reconnect with a new token, use the following 'reconnect’ API and pass the new token.

This method reconnects the conversation's connection for conversation query.
Reconnect open related webSockets and sync the conversation with its latest updates.

```swift
func reconnect(_ conversationQuery: ConversationParamProtocol, authenticationCode: String)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |
| authenticationCode | The SDK can enable code-flow SSO. | If your account uses SSO, pass the auth-code here. Otherwise, skip this parameter. |

#### logout (Deprecated)

This method is a destructive method that is typically used to clean a user’s data before a second user logs into the same device or just to log the current user out.

This method conducts the following:

* Unregisters from the push notification service.
* Clears all SDK persistent data.
* Cleans running operations (see [destruct](consumer-experience-ios-sdk-messaging-methods.html#destruct))

```swift
func logout() (Deprecated)
```

*This method was deprecated since SDK version 2.8.0. Use [func logout(completion: @escaping ()->(), failure: @escaping (_ error: Error)->())](consumer-experience-ios-sdk-messaging-methods.html#logout) instead*