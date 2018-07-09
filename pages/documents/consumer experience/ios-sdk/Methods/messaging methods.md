---
title: Messaging API
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for iOS
level4: SDK APIs

order: 10
permalink: mobile-app-messaging-sdk-for-ios-sdk-apis-messaging-api.html

indicator: messaging
---
### initialize

The SDK initialization is done only once, inside AppDelegate. This function checks that the SDK has all mandatory preconditions. For example, it is able to find the bundle file, verify that all the pre-defined configurations are valid, and more. If any of the preconditions are not met, an exception is thrown. Once an exception is thrown, you must not do any other call to the SDK.
SDK can be initialized once without monitoringInitParams and then have another initialize call using this param.
Passing monitoringInitParams is mandatory when using MonitoringAPI capabilities

```swift
func initialize(_ brandID: String? = nil, monitoringInitParams: LPMonitoringInitParams? = nil)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| brandId | An account ID of the Brand| Optional Parameter |
| monitoringInitParams | An initialization parameter of type [LPMonitoringInitParams](consumer-experience-ios-sdk-interfacedefinitions.html). This object contains all relevant parameters for initialization of the SDK for an account, including app install id. | Optional Parameter |

### showConversation

This method is used to open the conversation screen.

```swift
func showConversation(_ conversationViewParams: LPConversationViewParams, authenticationParams: LPAuthenticationParams? = nil)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationViewParams | Object type: LPConversationViewParams. Represents an object to determine conversation mode, filter and container. Such as Container or Window or if ViewOnly. | For object details see [LPConversationViewParams](consumer-experience-ios-sdk-interfacedefinitions.html){:target="_blank"}. |
| authenticationParams | Object type: LPAuthenticationParams? . Represents an object to determine the properties of an authenticated connection. If using authenticated connection, this paramater must be passed. LPAuthenticationParams supports Code Flow login or Implicit Flow login. For **Implicit Flow**: pass 'jwt' paramater only. For **Code Flow**: pass 'authCode' and 'redirectURI' only. | For object details see [LPAuthenticationParams](consumer-experience-ios-sdk-interfacedefinitions.html){:target="_blank"}. |

### showConversation (Deprecated)
**This method is deprecated since SDK version 2.7.0.**

Use [showConversation(_ conversationViewParams: LPConversationViewParams, authenticationParams: LPAuthenticationParams? = nil)](https://developers.liveperson.com/consumer-experience-ios-sdk-messaging-methods.html#showconversation){:target="_blank"} instead

This method is used to open the conversation screen.

```swift
func showConversation(_ conversationQuery: ConversationParamProtocol, authenticationCode: String? = nil, containerViewController: UIViewController? = nil)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |
| authenticationCode | The SDK can enable code-flow SSO. | If your account uses SSO, pass the auth-code here. Otherwise, skip this parameter. |
| containerViewController | The SDK needs a container view controller. This can be done in two ways: <br> **View Controller mode**: If you provide a container viewController, the SDK will put itself inside as a child viewController. This mode allows you to keep your own navigation bar intact. Using this method, you can use the provided callbacks to retrieve data from the SDK and show it in the navigation bar (users profile data, avatar URL, calling menu items, etc.) <br> **Window mode**: If you don’t provide a container view controller, the SDK places its UI components on top of the app UI, including the navigation bar.  |  

### removeConversation

When navigating out of the conversation screen, this API will remove the view controller from its container. This is done by calling the remove conversation API. The method will remove the SDK UI and clean the service or network operation that was running.

This API should be used on the container's [deinit function](https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/Deinitialization.html).

**Please note**: calling this API from [viewWillDisappear](https://developer.apple.com/documentation/uikit/uiviewcontroller/1621485-viewwilldisappear) or [viewDidDisappear](https://developer.apple.com/documentation/uikit/uiviewcontroller/1621477-viewdiddisappear) can cause unexpected behavior and brand should avoid such implementation.




```swift
func removeConversation(_ conversationQuery: ConversationParamProtocol)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |

<div markdown="1" class="important">
Important:

When using Custom View Controller Mode, the Conversation view must be removed when leaving the App. To avoid dismissing the View when CSAT/SecureForms/PhotoSharing View is presented, you should only dismiss the Conversation view if Moving From ParentView, as demonstrated below.

</div>

```swift
if (self.conversationQuery != nil && self.isMovingToParentViewController){
  LPMessagingSDK.instance.removeConversation(self.conversationQuery!)
}
```

**Note**: When ViewController Mode is used, on the Navigation Bar Back Button, you can simply call **LPMessagingSDK.instance.removeConversation(self.conversationQuery!)**.

### reconnect
When using SSO in an authenticated connection, an auth-code is passed to the SDK (see [showConversation](https://developers.liveperson.com/consumer-experience-ios-sdk-messaging-methods.html#showconversation){:target="_blank"} API). The session in this case might have an expiration date (see [LPMessagingSDKTokenExpired](consumer-experience-ios-sdk-callbacks-index.html){:target="_blank"}). To reconnect with a new token, use the following 'reconnect’ API and pass the new token.

This method reconnects the conversation's connection for conversation query.
Reconnect open related webSockets and sync the conversation with its latest updates.

```swift
func reconnect(_ conversationQuery: ConversationParamProtocol, authenticationParams: LPAuthenticationParams)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |
| authenticationParams | Object type: LPAuthenticationParams? . Represents an object to determine the properties of an authenticated connection. If using authenticate connection, this parameter must be passed. LPAuthenticationParams supports Code Flow login or Implicit Flow login. For **Implicit Flow**: pass 'jwt' parameter only. For **Code Flow**: pass 'authCode' and 'redirectURI' only. | For object details see [LPAuthenticationParams](consumer-experience-ios-sdk-interfacedefinitions.html){:target="_blank"}. |

### reconnect (Deprecated)
*This method was deprecated since SDK version 2.7.0. Use [reconnect(_ conversationQuery: ConversationParamProtocol, authenticationParams: LPAuthenticationParams](https://developers.liveperson.com/consumer-experience-ios-sdk-messaging-methods.html#reconnect){:target="_blank"} instead*

When using SSO in an authenticated connection, an auth-code is passed to the SDK (see [showConversation](https://developers.liveperson.com/consumer-experience-ios-sdk-messaging-methods.html#showconversation){:target="_blank"} API). The session in this case might have an expiration date (see [LPMessagingSDKTokenExpired](consumer-experience-ios-sdk-callbacks-index.html){:target="_blank"}). To reconnect with a new token, use the following 'reconnect’ API and pass the new token.

This method reconnects the conversation's connection for conversation query.
Reconnect open related webSockets and sync the conversation with its latest updates.

```swift
func reconnect(_ conversationQuery: ConversationParamProtocol, authenticationCode: String)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |
| authenticationCode | The SDK can enable code-flow SSO. | If your account uses SSO, pass the auth-code here. Otherwise, skip this parameter. |

### toggleChatActions

This API call is used to open or close the SDK menu.

* If you’re using [window mode](https://developers.liveperson.com/consumer-experience-ios-sdk-messaging-methods.html#showconversation){:target="_blank"}, you won’t need to utilize this method as the SDK will have a dedicated button in the navigation bar to toggle the menu.
* If you are using [view controller mode](https://developers.liveperson.com/consumer-experience-ios-sdk-messaging-methods.html#showconversation){:target="_blank"}, you may call this API to open the SDK menu, or use other APIs to build your own menu.

```swift
func toggleChatActions(_ accountID: String, sender: UIBarButtonItem? = nil)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| accountID | An account ID | -- |
| sender | An optional UIBarButtonItem to use for toggling the chat actions | -- |

### checkActiveConversation

Check if there is an active conversation by passing a conversation query.

**Notes:**

* Conversation query defines a filter that fetches conversations which match certain conditions. Each query can have one active conversation at most.
* Conversation is said to be active the moment an 'ack’ is received from the server. It may not yet have an assigned agent.
* You may call this API only if you are sure that the SDK is in sync with the server, meaning LPMessagingSDKConnectionStateChanged was invoked and isReady is set to true.

```swift
func checkActiveConversation(_ conversationQuery: ConversationParamProtocol) -> Bool
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |

### markAsUrgent

A consumer can mark a conversation as urgent in order to request a faster response from the agent. You can call the API only if there’s an active conversation, otherwise an alert will be triggered. The conversation is marked as urgent only after an ACK is received from the server.

```swift
func markAsUrgent(_ conversationQuery: ConversationParamProtocol)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |

### isUrgent

Checks if the active conversation (if existing) is marked as urgent. Otherwise returns false.

*Note: You must check that the SDK is in [ready state](consumer-experience-ios-sdk-advanced-configurations.html) before calling this method.*

```swift
func isUrgent(_ conversationQuery: ConversationParamProtocol) -> Bool
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |

### dismissUrgent

This API is used to cancel the [markAsUrgent API](https://developers.liveperson.com/consumer-experience-ios-sdk-messaging-methods.html#markasurgent){:target="_blank"}. It will reset the SLA for the agent response back to default.  This API can be called only for open conversations.

```swift
func dismissUrgent(_ conversationQuery: ConversationParamProtocol)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |


### resolveConversation

This API enables a conversation to be resolved. The API will request the server to mark the active conversation as resolved. If there is no active conversation, an alert will be displayed.

```swift
func resolveConversation(_ conversationQuery: ConversationParamProtocol)
```


| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |

### clearHistory

This API may be used only when there is no active conversation. This API clears the local database. The history is still available on the server, but won’t be retrieved from the specific device unless a fresh installation is made.

```swift
func clearHistory(_ conversationQuery: ConversationParamProtocol) throws
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |

### logout

This method is a destructive method that is typically used to clean a user’s data before a second user logs into the same device or just to log the current user out.

This method conducts the following:

* Unregisters from the push notification service.
* Clears all SDK persistent data.
* Cleans running operations (see [destruct](https://developers.liveperson.com/consumer-experience-ios-sdk-messaging-methods.html#destruct){:target="_blank"}).

```swift
func logout(completion: @escaping ()->(), failure: @escaping (_ error: Error)->())
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| Completion block | A completion block for successfully logout. | Completion block will be invoked only if all logout steps succeeded. |
| Failure block | A failure block with a specified error for logout failure. | Failure block will be invoked if at least one of the logout steps has failed. |

### logout (Deprecated)

This method is a destructive method that is typically used to clean a user’s data before a second user logs into the same device or just to log the current user out.

This method conducts the following:

* Unregisters from the push notification service.
* Clears all SDK persistent data.
* Cleans running operations (see [destruct](https://developers.liveperson.com/consumer-experience-ios-sdk-messaging-methods.html#destruct))

```swift
func logout() (Deprecated)
```

*This method was deprecated since SDK version 2.8.0. Use [func logout(completion: @escaping ()->(), failure: @escaping (_ error: Error)->())](https://developers.liveperson.com/consumer-experience-ios-sdk-messaging-methods.html#logout) instead*

### destruct
This method is a destructive method that is typically used to stop and clear all the metadata of the SDK.

This method conducts the following:
* Clears all SDK non-persistent data.
* Stops all connections and operations.
* Remove Conversation View Controller

```swift
func destruct()
```

### handlePush

In order to receive all incoming push notifications in a single function and handle them, add the following method. This method cooperates with two other API methods:

* This method calls the shouldShowPushNotification method. If the host app returns false, the SDK will not show anything to the UI.
* Otherwise, the SDK will ask the host app to provide a view as an in-app notification. If the host app doesn’t implement this method, the SDK will use its own implementation.

```swift
func application(application: UIApplication, didReceiveRemoteNotification userInfo: [NSObject : AnyObject], fetchCompletionHandler completionHandler: (UIBackgroundFetchResult) -> Void) {
    LPMessagingSDK.instance.handlePush(userInfo)
}
```

<div markdown="1" class="important">
Important:


The proprietary SDK notification is only for display purposes, interacting with it will launch the Application, but won't navigate to the Conversation Window/ViewController, for a fully interactive notification host app needs to provide the implementation.

</div>

### registerPushNotifications

Register to LPMessagingSDK push notifications with the following code in AppDelegate:

*Note: Push notifications must be pre-configured, and an APN certificate has to be uploaded to the LiveEngage platform. See more info on [how to configure push notifications](push-service-overview.html).*

```swift
func registerPushNotifications(token: Data, notificationDelegate: LPMessagingSDKNotificationDelegate? = nil, alternateBundleID: String? = nil)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| token | A token that identifies the device to APNs. The token is an opaque data type because that is the form that the provider needs to submit to the APNs servers when it sends a notification to a device. | The APNs servers require a binary format for performance reasons. <br> This is the exact same dictionary as received in application:didRegisterForRemoteNotificationsWithDeviceToken: method |
| notificationDelegate | An implementer of LPMessagingSDKNotificationDelegate. | |
| alternateBundleID | An optional value that can be used so that the LivePerson pusher service identifies your app with this identifier. | In debug mode, the SDK appends "-Dev" string to the bundle ID.  |

### getUnreadMessagesCount

When there are unread messages waiting for the consumer within the brand app, this information can be pushed to display in the app’s notification badge. Within the app, brands can develop their own visualization of a badge, such as a number, icon or other marker to show unread messages.

The unread messages number is passed to the SDK through LP Push service with every push.

<div markdown="1" class="important">
Important:

A push is sent to the last device which was registered to the LP push service, meaning that the unread messages indication can be fetched by only one device.

</div>

* If the user is using two devices in parallel, the device that does not receive push events will receive updates of the unread message indicator only once a message has been sent from that device and the push arrives to it.

* In addition, if a conversation is ongoing in web messaging, then the push will not arrive to the device, since the web-socket is already open.

**Getting the unread message badge counter**

This API method uses a threshold mechanism of 10 seconds from the last time the badge retrieved from the server. If calling this method within less than 10 seconds, the counter will be returned from cache. Otherwise, it will be fetched again with new data.

```swift
func getUnreadMessagesCount(_ conversationQuery: ConversationParamProtocol, completion: @escaping (_ badgeCounter: Int)->(), failure: @escaping (_ error:NSError)->())
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |
| completion | called once the operation ends successfully with the counter of unread badge messages. | If no unread message, 0 will be returned. |
| failure | called once the operation of retrieving unread messages count failed for the provided conversation query. | -- |

### setUserProfile

Add custom parameters about the user and set them for the messaging agent.

```swift
func setUserProfile(_ lpuser: LPUser, brandID: String)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
|lpuser | object is an instance of LPUser. | Example: let user = LPUser(firstName: "John", lastName: "Doe", profileImageURL: "URL of image", phoneNumber: "555-555555") |
| brandId  | An account ID | -- |

_**Note: for information about the LPUser object, click [here](consumer-experience-ios-sdk-interfacedefinitions.html#lpuser)**_

### getAssignedAgent

Get assigned agent details of the last or current conversation

_Note: for this method to work you need to set **retrieveAssignedAgentFromLastClosedConversation** to **true** in the LPConfig defaultConfiguration._

You must check that the SDK is ready before calling this method.

```swift
func getAssignedAgent(_ conversationQuery: ConversationParamProtocol) -> LPUser?
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |

### subscribeLogEvents

Subscribe to log events (Trace, Debug, Info, Warning, Error). Each time a log event with the passed log level occurs, the callback will be invoked with the log object.

```swift
func subscribeLogEvents(_ logLevel: LogLevel, logEvent: @escaping LogEventClosure)
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| logLevel | object is an instance of [LPLog](consumer-experience-ios-sdk-interfacedefinitions.html){:target="_blank"}. | |
| logEvent | The completion block will pass  [LPLog](consumer-experience-ios-sdk-interfacedefinitions.html){:target="_blank"} object which consists all the information for the log. | To get text, use log.text |

### getSDKVersion

Get current SDK version string.

```swift
func getSDKVersion() -> String?
```


### getInactiveUserInteractionTimeInterval

Get Inactive time interval in seconds of the user's last touch on screen. This interval applies to scroll/messaging/action menus and any other general action on the conversation screen.
If the screen is not active or the application is in the background this API will return -1.

```swift
func getInactiveUserInteractionTimeInterval(_ conversationQuery: ConversationParamProtocol) -> TimeInterval
```

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a 'filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |



### printAllLocalizedKeys

Prints all localized strings’ keys

```swift
func printAllLocalizedKeys()
```

### printSupportedLanguages

Prints the SDK's supported languages

```swift
func printSupportedLanguages()
```

### getAllSupportedLanguages

Get all supported languages as Strings dictionary where:

* Key - Locale key
* Value - explicit language name (example: "English", "Portuguese (Brazil)", ...)

```swift
func getAllSupportedLanguages() -> [String : String]
```


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
