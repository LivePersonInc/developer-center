---
title: Methods
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: SDK APIs

order: 10
permalink: consumer-experience-ios-sdk-methods.html

indicator: messaging
---

### initialize

The SDK initialization is done only once, inside AppDelegate. This function checks that the SDK has all mandatory preconditions. For example, it is able to find the bundle file, verify that all the pre-defined configurations are valid, and more. If any of the preconditions are not met, an exception is thrown. Once an exception is thrown, you must not do any other call to the SDK.

`func initialize(_ brandID: String? = nil) throws`

| Parameter | Description |
| :--- | :--- |
| brandId | An account ID |

### showConversation

This method is used to open the conversation screen.

`func showConversation(_ conversationViewParams: LPConversationViewParams, authenticationParams: LPAuthenticationParams? = nil)`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationViewParams | Object type: LPConversationViewParams. Represents an object to determine conversation mode, filter and container. Such as Container or Window or if ViewOnly. | For object details see [LPConversationViewParams](consumer-experience-ios-sdk-interfacedefinitions.html){:target="_blank"}. |
| authenticationParams | Object type: LPAuthenticationParams? . Represents an object to determine the properties of an authenticated connection. If using authenticated connection, this paramater must be passed. LPAuthenticationParams supports Code Flow login or Implicit Flow login. For **Implicit Flow**: pass 'jwt' paramater only. For **Code Flow**: pass 'authCode' and 'redirectURI' only. | For object details see [LPAuthenticationParams](consumer-experience-ios-sdk-interfacedefinitions.html){:target="_blank"}. |

### showConversation (Deprecated)
*This method was deprecated since SDK version 2.7.0. Use [showConversation(_ conversationViewParams: LPConversationViewParams)](https://developers.liveperson.com/consumer-experience-ios-sdk-methods.html#showconversation){:target="_blank"} instead*

This method is used to open the conversation screen.

`func showConversation(_ conversationQuery: ConversationParamProtocol, authenticationCode: String? = nil, containerViewController: UIViewController? = nil)`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a ‘filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |
| authenticationCode | The SDK can enable code-flow SSO. | If your account uses SSO, pass the auth-code here. Otherwise, skip this parameter. |
| containerViewController | The SDK needs a container view controller. This can be done in two ways: <br> **View Controller mode**: If you provide a container viewController, the SDK will put itself inside as a child viewController. This mode allows you to keep your own navigation bar intact. Using this method, you can use the provided callbacks to retrieve data from the SDK and show it in the navigation bar (users profile data, avatar URL, calling menu items, etc.) <br> **Window mode**: If you don’t provide a container view controller, the SDK places its UI components on top of the app UI, including the navigation bar.  | |  

### removeConversation

When navigating out of the conversation screen, remove the view controller from its container. This is done by calling remove conversation API. The method will remove the SDK UI and clean the service or network operation that was running.

`func removeConversation(_ conversationQuery: ConversationParamProtocol)`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a ‘filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |

### reconnect
When using SSO in an authenticated connection, an auth-code is passed to the SDK (see [showConversation](https://developers.liveperson.com/consumer-experience-ios-sdk-methods.html#showconversation){:target="_blank"} API). The session in this case might have an expiration date (see [LPMessagingSDKTokenExpired](consumer-experience-ios-sdk-callbacks-index.html){:target="_blank"}). To reconnect with a new token, use the following ‘reconnect’ API and pass the new token.

This method reconnects the conversation's connection for conversation query.
Reconnect open related webSockets and sync the conversation with its latest updates.

`func reconnect(_ conversationQuery: ConversationParamProtocol, authenticationCode: String)`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a ‘filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |
| authenticationParams | Object type: LPAuthenticationParams? . Represents an object to determine the properties of an authenticated connection. If using authenticate connection, this parameter must be passed. LPAuthenticationParams supports Code Flow login or Implicit Flow login. For **Implicit Flow**: pass 'jwt' parameter only. For **Code Flow**: pass 'authCode' and 'redirectURI' only. | For object details see [LPAuthenticationParams](consumer-experience-ios-sdk-interfacedefinitions.html){:target="_blank"}. |

### reconnect (Deprecated)
*This method was deprecated since SDK version 2.7.0. Use [reconnect(_ conversationQuery: ConversationParamProtocol, authenticationParams: LPAuthenticationParams](https://developers.liveperson.com/consumer-experience-ios-sdk-methods.html#reconnect){:target="_blank"} instead*

When using SSO in an authenticated connection, an auth-code is passed to the SDK (see [showConversation](https://developers.liveperson.com/consumer-experience-ios-sdk-methods.html#showconversation){:target="_blank"} API). The session in this case might have an expiration date (see [LPMessagingSDKTokenExpired](consumer-experience-ios-sdk-callbacks-index.html){:target="_blank"}). To reconnect with a new token, use the following ‘reconnect’ API and pass the new token.

This method reconnects the conversation's connection for conversation query.
Reconnect open related webSockets and sync the conversation with its latest updates.

`func reconnect(_ conversationQuery: ConversationParamProtocol, authenticationCode: String)`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a ‘filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |
| authenticationCode | The SDK can enable code-flow SSO. | If your account uses SSO, pass the auth-code here. Otherwise, skip this parameter. |

### toggleChatActions

This API call is used to open or close the SDK menu.

* If you’re using [window mode](https://developers.liveperson.com/consumer-experience-ios-sdk-methods.html#showconversation){:target="_blank"}, you won’t need to utilize this method as the SDK will have a dedicated button in the navigation bar to toggle the menu.
* If you are using [view controller mode](https://developers.liveperson.com/consumer-experience-ios-sdk-methods.html#showconversation){:target="_blank"}, you may call this API to open the SDK menu, or use other APIs to build your own menu.

`func toggleChatActions(_ accountID: String, sender: UIBarButtonItem? = nil)`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| accountID | An account ID |
| sender | An optional UIBarButtonItem to use for toggling the chat actions |

### checkActiveConversation

Check if there is an active conversation by passing a conversation query.

**Notes:**

* Conversation query defines a filter that fetches conversations which match certain conditions. Each query can have one active conversation at most.*
* Conversation is said to be active the moment an ‘ack’ is received from the server. It may not yet have an assigned agent.*
* You may call this API only if you are sure that the SDK is in sync with the server, meaning LPMessagingSDKConnectionStateChanged was invoked and isReady is set to true.*

`func checkActiveConversation(_ conversationQuery: ConversationParamProtocol) -> Bool`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a ‘filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |

### markAsUrgent

A consumer can mark a conversation as urgent in order to request a faster response from the agent. You can call the API only if there’s an active conversation, otherwise an alert will be triggered. The conversation is marked as urgent only after an ACK is received from the server.

`func markAsUrgent(_ conversationQuery: ConversationParamProtocol)`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a ‘filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |

### isUrgent

Checks if the active conversation (if existing) is marked as urgent. Otherwise returns false.

*Note: You must check that the SDK is in [ready state](consumer-experience-ios-sdk-advanced-configurations.html) before calling this method.*

`func isUrgent(_ conversationQuery: ConversationParamProtocol) -> Bool`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a ‘filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |

### dismissUrgent

This API is used to cancel the [markAsUrgent API](https://developers.liveperson.com/consumer-experience-ios-sdk-methods.html#markasurgent){:target="_blank"}. It will reset the SLA for the agent response back to default.  This API can be called only for open conversations.

`func dismissUrgent(_ conversationQuery: ConversationParamProtocol`)

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a ‘filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |


### resolveConversation

This API enables a conversation to be resolved. The API will request the server to mark the active conversation as resolved. If there is no active conversation, an alert will be displayed.

`func resolveConversation(_ conversationQuery: ConversationParamProtocol)`


| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a ‘filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |

### clearHistory

This API may be used only when there is no active conversation. This API clears the local database. The history is still available on the server, but won’t be retrieved from the specific device unless a fresh installation is made.

`func clearHistory(_ conversationQuery: ConversationParamProtocol) throws`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a ‘filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |

### logout

This method is a destructive method that is typically used to clean a user’s data before a second user logs into the same device or just to log the current user out.

This method conducts the following:

* Unregisters from the push notification service.
* Clears all SDK persistent data.
* Cleans running operations (see [destruct](https://developers.liveperson.com/consumer-experience-ios-sdk-methods.html#destruct){:target="_blank"}).

`func logout()`

### destruct
This method is a destructive method that is typically used to stop and clear all the metadata of the SDK.

This method conducts the following:
* Clears all SDK non-persistent data.
* Stops all connections and operations.
* Remove Conversation View Controller

`func destruct()`

### handlePush

In order to receive all incoming push notifications in a single function and handle them, add the following method. This method cooperates with two other API methods:

* This method calls the shouldShowPushNotification method. If the host app returns false, the SDK will not show anything to the UI.
* Otherwise, the SDK will ask the host app to provide a view as an in-app notification. If the host app doesn’t implement this method, the SDK will use its own implementation.

```javascript

func application(application: UIApplication, didReceiveRemoteNotification userInfo: [NSObject : AnyObject], fetchCompletionHandler completionHandler: (UIBackgroundFetchResult) -> Void) {

		LPMessagingSDK.instance.handlePush(userInfo)

}
```

### registerPushNotifications

Register to LPMessagingSDK push notifications with the following code in AppDelegate:

*Note: Push notifications must be pre-configured, and an APN certificate has to be uploaded to the LiveEngage platform. See more info on [how to configure push notifications](consumer-experience-ios-sdk-configuration.html){:target="_blank"}.*

`func registerPushNotifications(token: Data, notificationDelegate: LPMessagingSDKNotificationDelegate? = nil, alternateBundleID: String? = nil)`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| token | A token that identifies the device to APNs. The token is an opaque data type because that is the form that the provider needs to submit to the APNs servers when it sends a notification to a device. | The APNs servers require a binary format for performance reasons. <br> This is the exact same dictionary as received in application:didRegisterForRemoteNotificationsWithDeviceToken: method |
| notificationDelegate | An implementer of LPMessagingSDKNotificationDelegate. | |
| alternateBundleID | An optional value that can be used so that the LivePerson pusher service identifies your app with this identifier. | In debug mode, the SDK appends "-dev" string to the bundle ID.  |

### setUserProfile

Add custom parameters about the user and set them for the messaging agent.

`func setUserProfile(_ lpuser: LPUser, brandID: String)`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
|lpuser | object is an instance of LPUser. | Example: let user = LPUser(firstName: "John", lastName: "Doe", profileImageURL: "URL of image", phoneNumber: "555-555555") |
| brandId  | An account ID | |


### getAssignedAgent


Get assigned agent details of the last or current conversation - depending on retrieveAssignedAgentFromLastClosedConversation in the LPConfig defaultConfiguration.

You must check that the SDK is ready before calling this method.

`func getAssignedAgent(_ conversationQuery: ConversationParamProtocol) -> LPUser?`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a ‘filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |

### subscribeLogEvents

Subscribe to log events (Trace, Debug, Info, Warning, Error). Each time a log event with the passed log level occurs, the callback will be invoked with the log object.

`func subscribeLogEvents(_ logLevel: LogLevel, logEvent: @escaping LogEventClosure)`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| logLevel | object is an instance of [LPLog](consumer-experience-ios-sdk-interfacedefinitions.html){:target="_blank"}. |
| logEvent | The completion block will pass [LPLog](consumer-experience-ios-sdk-interfacedefinitions.html){:target="_blank"} object which consists all the information for the log. |

### getSDKVersion

Get current SDK version string.

`func getSDKVersion() -> String?`


### printAllLocalizedKeys

Prints all localized strings’ keys

`func printAllLocalizedKeys()`

### printSupportedLanguages

Prints the SDK's supported languages

`func printSupportedLanguages()`

### getAllSupportedLanguages

Get all supported languages as Strings dictionary where:

* Key - Locale key
* Value - explicit language name (example: "English", "Portuguese (Brazil)", ...)

`func getAllSupportedLanguages() -> [String : String]`
