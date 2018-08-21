---
pagename: UI
redirect_from:
  - consumer-experience-ios-sdk-UI.html
Keywords:
sitesection: Documents
categoryname: Consumer Experience
documentname: Mobile App Messaging SDK for iOS
subfoldername: Configuration

order: 6
permalink: mobile-app-messaging-sdk-for-ios-configuration-ui.html

indicator: messaging
---

To determine the layout of messaging within the app, you can utilize various actions to control the behavior and UI such as menus, custom buttons, typing indication, etc.

_**Note: these methods (1,2 and 3) are only available when using the SDK ViewController (Window Mode)**_

1. This method changes the state of the action menu of the conversation for brandID.

    * _**Note: for more information about how to use this method, click [here](consumer-experience-ios-sdk-messaging-methods.html#togglechatactions)**_

```swift
public func toggleChatActions(accountID: String, sender: UIBarButtonItem? = nil)
```

{:start="2"}
2. Will be triggered each time the SDK menu is opened/closed.

```swift
<LPMessagingSDKdelegate> optional func LPMessagingSDKActionsMenuToggled(toggled: Bool)
```

{:start="3"}
3. If you set a custom button, this method will be called when the custom button is clicked.

```swift
<LPMessagingSDKdelegate> optional func LPMessagingSDKCustomButtonTapped()
```

{:start="4"}
4. Will be triggered if Off-Hours state changed.

```swift
<LPMessagingSDKdelegate> optional func LPMessagingSDKOffHoursStateChanged(isOffHours: Bool, brandID: String)
```
