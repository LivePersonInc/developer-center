---
title: UI
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: Configuration

order: 6
permalink: consumer-experience-ios-sdk-UI.html

indicator: chat messaging
---

To determine the layout of messaging within the app, you can utilize various actions to control the behavior and UI such as menus, custom buttons, typing indication, etc.

1. `public func toggleChatActions(accountID: String, sender: UIBarButtonItem? = nil)`
2. `<LPMessagingSDKdelegate>   optional func LPMessagingSDKActionsMenuToggled(toggled: Bool)`
3. `<LPMessagingSDKdelegate>   optional func LPMessagingSDKCustomButtonTapped()`
4. `<LPMessagingSDKdelegate>   optional func LPMessagingSDKAgentIsTypingStateChanged(isTyping: Bool)`
5. `<LPMessagingSDKdelegate>   optional func LPMessagingSDKOffHoursStateChanged(isOffHours: Bool, brandID: String)`
6. `<LPMessagingSDKdelegate>   optional func LPMessagingSDKConversationViewControllerDidDismiss()`