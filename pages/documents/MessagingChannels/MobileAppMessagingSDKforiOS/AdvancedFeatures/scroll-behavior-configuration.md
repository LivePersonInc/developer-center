---
pagename: Scroll Behavior Configuration
redirect_from:
  - consumer-experience-ios-sdk-scroll-behavior-configuration.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Advanced Features
permalink: mobile-app-messaging-sdk-for-ios-advanced-features-scroll-behavior-configuration.html
indicator: messaging
---

### Requirements

**Supported versions:** 
 - SDK 5.1 and higher

**Authentication**
 - Only support authentication mode: Code flow and JWT flow.


### How to configure
Simply set the attributes for `conversationScrollConfiguration` in the `lpconfig` class. Please follow the instructions for each attributes below. 


#### Scroll Options

| Scroll Option | Description | Limitation |
| :--- | :--- | :--- |
| Bottom | Conversation will scroll to the bottom regardless if there are new messages or not. | N/A |
| LastPosition | Conversation will scroll to the previous position regardless if there are unread messages or not. | Support scroll to the position within about latest 100 messages. Conversation will scroll to bottom if more than about 100 messages are loaded. |
| FirstUnreadMessage | Conversation will scroll to first unread message. If no unread messages exist, conversation will scroll to the bottom. | N/A |

### Show Conversation

`showConversation` 
scenario when the SDK conversation is shown. 

Default option: **Bottom**

```swift
let configurations = LPConfig.defaultConfiguration
configurations.conversationScrollConfiguration.showConversation = .Bottom
```

```objc
LPConfig *configurations = [LPConfig defaultConfiguration];
configurations.conversationScrollConfiguration.showConversation = ScrollPositionBottom;
```

### Move to foreground from background

`backgroundToForeground` 
scenario when the application goes from background to foreground state. 

Default option: **LastPosition**

```swift
let configurations = LPConfig.defaultConfiguration
configurations.conversationScrollConfiguration.backgroundToForeground = .Bottom
```

```objc
LPConfig *configurations = [LPConfig defaultConfiguration];
configurations.conversationScrollConfiguration.backgroundToForeground = ScrollPositionBottom;
```

### scroll to the bottom button pressed

`scrollToBottomButtonPressed`
scenario when the SDK "scroll to bottom" button is pressed.

Default option: **Bottom**

```swift
let configurations = LPConfig.defaultConfiguration
configurations.conversationScrollConfiguration.scrollToBottomButtonPressed = .Bottom
```

```objc
LPConfig *configurations = [LPConfig defaultConfiguration];
configurations.conversationScrollConfiguration.scrollToBottomButtonPressed = ScrollPositionBottom;
```

### Tapped on push notification

`pushNotificationTapped`
scenario when a push notification is tapped.

**NOTE**: This requires the call `LPMessagingSDK.instance.setPushNotificationTapped()` immediately after it is determined that a push notification was tapped.

Default option: **Bottom**


```swift
let configurations = LPConfig.defaultConfiguration
configurations.conversationScrollConfiguration.pushNotificationTapped = .Bottom
```

```objc
LPConfig *configurations = [LPConfig defaultConfiguration];
configurations.conversationScrollConfiguration.backgroundToForeground = ScrollPositionBottom;
```
