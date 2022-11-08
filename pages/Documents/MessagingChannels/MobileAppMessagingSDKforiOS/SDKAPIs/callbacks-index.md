---
pagename: Callbacks Index
redirect_from:
  - consumer-experience-ios-sdk-callbacks-index.html
  - consumer-experience-ios-sdk-callbacks.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: SDK APIs
permalink: mobile-app-messaging-sdk-for-ios-sdk-apis-callbacks-index.html
indicator: messaging
---

The SDK uses 2 delegates:

1. **LPMessagingSDKDelegate**: for lifecycle and connectivity events
2. **LPMessagingSDKNotificationDelegate**: for handling push and in app notifications

### LPMessagingSDKDelegate

```swift
  {
  protocol LPMessagingSDKdelegate {
    func LPMessagingSDKObseleteVersion(_ error: NSError)
    func LPMessagingSDKAuthenticationFailed(_ error: NSError)
    func LPMessagingSDKTokenExpired(_ brandID: String)
    func LPMessagingSDKError(_ error: NSError)
    optional func LPMessagingSDKCustomButtonTapped()
    optional func LPMessagingSDKAgentDetails(_ agent: LPUser?)
    optional func LPMessagingSDKAgentAvatarTapped(_ agent: LPUser?)
    optional func LPMessagingSDKActionsMenuToggled(_ toggled: Bool)
    optional func LPMessagingSDKHasConnectionError(_ error: String?)
    optional func LPMessagingSDKCSATScoreSubmissionDidFinish(_ brandID: String, rating: Int)
    optional func LPMessagingSDKCSATCustomTitleView(_ brandID: String) -> UIView>
    optional func LPMessagingSDKConversationCSATSkipped(_ conversationID: String?)
    optional func LPMessagingSDKUserDeniedPermission(_ permissionType: LPPermissionTypes)
    optional func LPMessagingSDKConnectionRetriesFailed(_ error: NSError)
    optional func LPMessagingSDKAgentIsTypingStateChanged(_ isTyping: Bool)
    optional func LPMessagingSDKConversationStarted(_ conversationID: String?)
    optional func LPMessagingSDKConversationEnded(_ conversationID: String?)
    optional func LPMessagingSDKConversationEnded(_ conversationID: String?, closeReason: LPConversationCloseReason)
    optional func LPMessagingSDKConversationCSATDismissedOnSubmittion(_ conversationID: String?)
    optional func LPMessagingSDKConversationCSATDidLoad(_ conversationID: String?)
    optional func LPMessagingSDKConnectionStateChanged(_ isReady: Bool, brandID: String)
    optional func LPMessagingSDKOffHoursStateChanged(_ isOffHours: Bool, brandID: String)
    optional func LPMessagingSDKConversationViewControllerDidDismiss()
    optional func LPMessagingSDKCertPinningFailed(_ error: NSError)
    optional func LPMessagingSDKPushRegistrationDidFinish()
    optional func LPMessagingSDKPushRegistrationDidFail(_ error: NSError)
    optional func LPMessagingSDKUnauthenticatedUserExpired()
}
```

To use the **LPMessagingSDKDelegate**, you'll need to initiate it, and conform the protocol with the required methods:

```swift
LPMessaging.instance.delegate = self
```

### LPMessagingSDKCustomButtonTapped

In [window mode only](consumer-experience-ios-sdk-showconversation.html), the app can place a custom button in the SDK UI. When the button is tapped, the following delegate method is invoked:

When pressed, it calls the following delegate:

```swift
func LPMessagingSDKCustomButtonTapped() {
  UIApplication.sharedApplication().openURL(NSURL(string: "tel://55555555")!)
}
```

### LPMessagingSDKAgentDetails(agent: LPUser?)

Called when agent details are received or updated. For every message, the SDK checks for agent details in order to determine whether the assigned agent was changed. If there is no assigned agent, agent will be nil, for instance, when the consumer is returned to queue.

### LPMessagingSDKAgentAvatarTapped(_ agent: LPUser?)

Called when the user tapped on the agent’s avatar in the conversation and also in the navigation bar within window mode.

### LPMessagingSDKActionsMenuToggled(toggled: Bool)

Called when the action menu is toggled.

### LPMessagingSDKHasConnectionError(error: String?)

Called whenever the SDK receives a connection error from the socket.

### LPMessagingSDKCSATScoreSubmissionDidFinish(brandID: String, rating: Int)

When a conversation is resolved, a feedback page is presented (CSAT — Customer Satisfaction).
This delegate method is invoked after the CSAT is submitted. If the user chooses to skip the CSAT, the delegate method is called with score=0.

### LPMessagingSDKCSATCustomTitleView(_ brandID: String) -> UIView

Custom Title view for to display in the CSAT survey view.

### LPMessagingSDKConversationCSATSkipped

Invoked when a CSAT page is skipped

```swift
func LPMessagingSDKConversationCSATSkipped(_ conversationID: String?) {
  print("LPMessagingSDKConversationCSATSkipped: \(conversationID)")
}
```

### LPMessagingSDKUserDeniedPermission

When a user permission is required for different device abilities (such as Camera, Photos library or Microphone) but the permission is missing, this callback will be invoked and specify which permission is missing.

```swift
func LPMessagingSDKUserDeniedPermission(_ permissionType: LPPermissionTypes) {
  print("\"\(permissionType.description)\" permission is missing")
}
```

### LPMessagingSDKObseleteVersion(error: NSError)

Called when the SDK version is obsolete and needs to be updated.

### LPMessagingSDKAuthenticationFailed(error: NSError)

Called when the current session fails due to an authentication error.

### LPMessagingSDKTokenExpired

Called when the current session fails due to an authentication error.

### LPMessagingSDKError(error: NSError)

Called when the SDK has a general error.
If there is an SDK initialization error, the SDK can not proceed, and you should not call any other SDK API.
There are also other possible errors such as send message error.

### LPMessagingSDKConnectionRetriesFailed(error: NSError)

Called when the SDK failed to connect after all the reconnect retries.

### LPMessagingSDKAgentIsTypingStateChanged(isTyping: Bool)

Called when the typing state of the agent is changed.

### LPMessagingSDKConversationStarted(conversationID: String?)

Called when a new conversation is started.

### LPMessagingSDKConversationEnded(conversationID: String?)

Called when an open conversation is ended by the consumer or by the agent.

### LPMessagingSDKConversationCSATDismissedOnSubmittion(conversationID: String?)

Called after CSAT screen is dismissed by clicking Submit.

### LPMessagingSDKConversationCSATDidLoad(_ conversationID: String?)

Called when CSAT screen was loaded and presented to consumer

### LPMessagingSDKConnectionStateChanged

Invoked when the connection state is changed.

* isReady: Bool — Set to true when the SDK is connected and in sync with the server.
* brandID: String — Brand account number

### LPMessagingSDKOffHoursStateChanged(isOffHours: Bool, brandID: String)

Called when an off hours state changes.

### LPMessagingSDKConversationViewControllerDidDismiss()
Called when the conversation ViewController is dismissed (both for window mode and viewController mode).

### LPMessagingSDKCertPinningFailed(_ error: NSError)

Called when the Cert pinning mechanism failed. The server trust was successfully evaluated but did not contain any of the configured public keys pins or the server trust's evaluation failed because the server's certificate chain is not trusted.

### LPMessagingSDKPushRegistrationDidFinish()
Called when the SDK registration for the LP Pusher service has succeeded.

Pusher is the service that is responsible for Remote Push Notifications routing and delivering from and to APNS.

### LPMessagingSDKPushRegistrationDidFail(_ error: NSError)

Called when the SDK registration for LP Pusher service has failed with an error.

Pusher is the service that is responsible for Remote Push Notifications routing and delivering from and to APNS.

### LPMessagingSDKUnauthenticatedUserExpired()
Called when an Unauthenticated user expired and can no longer be in used.

When this callback is invoked, the previous open conversation will be closed locally.

### LPMessagingSDKNotificationDelegate

```swift
protocol LPMessagingSDKNotificationDelegate {
  optional func LPMessagingSDKNotification(didReceivePushNotification notification: LPNotification)
  optional func LPMessagingSDKNotification(shouldShowPushNotification notification: LPNotification) -> Bool
  optional func LPMessagingSDKNotification(customLocalPushNotificationView notification: LPNotification) -> UIView
  optional func LPMessagingSDKNotification(notificationTapped notification: LPNotification)
}
```

### LPMessagingSDKNotification(didReceivePushNotification notification: LPNotification)

Called when handling the push notifications, the SDK will form up a struct: LPNotification,
which will then be passed to the host app.

### LPMessagingSDKNotification(shouldShowPushNotification notification: LPNotification) -> Bool

Called after calling [handlePush](consumer-experience-ios-sdk-handlepush.html), the SDK will ask the host app if it should display an in-app notification in the UI. (See [handlePush](consumer-experience-ios-sdk-handlepush.html) for the full description).

### LPMessagingSDKNotification(customLocalPushNotificationView notification: LPNotification) -> UIView

If shouldShowPushNotification is not implemented, or it returns yes, the app can implement this method for showing an in-app notification in the UI. In case the method is not implemented, the SDK will provide and show its own view. Note that it is advised to set the custom view's Frame and not its Bounds.

```swift
func LPMessagingSDKNotification(customLocalPushNotificationView notification: LPNotification) -> UIView {
  guard let delegate = UIApplication.shared.delegate as? AppDelegate, let window = delegate.window else { return UIView() }
  view.frame = CGRect(x: 0, y: 0, width: window.bounds.size.width, height: 85)
  return view
}
```

### LPMessagingSDKNotification(notificationTapped notification: LPNotification)

Called when tapping a local notification message bar when a remote push notification received. You should implement this delegate method if you wish to navigate and show the conversation screen.

```swift
func LPMessagingSDKNotification(notificationTapped notification: LPNotification) {
  // Navigate to a desired view controller
}
```
