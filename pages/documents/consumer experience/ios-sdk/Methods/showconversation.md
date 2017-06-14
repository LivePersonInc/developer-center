---
title: showConversation
Keywords:

level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: Methods

order: 20
permalink: consumer-experience-ios-sdk-showconversation.html

indicator: messaging
---

This method is used to open the conversation screen.

`func showConversation(_ conversationQuery: ConversationParamProtocol, authenticationCode: String? = nil, containerViewController: UIViewController? = nil)`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| conversationQuery | Represents a ‘filter’ for the conversation screen, determining which of the conversations will be displayed in the following screens. | Default: sorts the conversations by account number. <br> See helpers methods above for how to generate a conversation query. |
| authenticationCode | The SDK can enable code-flow SSO. | If your account uses SSO, pass the auth-code here. Otherwise, skip this parameter. |
| containerViewController | The SDK needs a container view controller. This can be done in two ways: <br> **View Controller mode**: If you provide a container viewController, the SDK will put itself inside as a child viewController. This mode allows you to keep your own navigation bar intact. Using this method, you can use the provided callbacks to retrieve data from the SDK and show it in the navigation bar (users profile data, avatar URL, calling menu items, etc.) <br> **Window mode**: If you don’t provide a container view controller, the SDK places its UI components on top of the app UI, including the navigation bar.  | |  

