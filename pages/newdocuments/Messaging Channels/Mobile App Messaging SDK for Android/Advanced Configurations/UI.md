---
pagename: UI
redirect_from:
  - android-UI.html
Keywords:
sitesection: Documents
categoryname: Consumer Experience
documentname: Mobile App Messaging SDK for Android
subfoldername: Configuration

order: 50
permalink: mobile-app-messaging-sdk-for-android-configuration-ui.html

indicator: messaging
---

To determine the layout of messaging within the app, you can utilize various actions to control the behavior and UI such as menus, typing indication, etc.

LivePerson callbacks:

```swift
void onAgentTyping(boolean isTyping);
void onAgentDetailsChanged(AgentData agentData);
void onCsatDismissed();
void onCsatSubmitted(String conversationId);
void onConversationMarkedAsUrgent();
void onConversationMarkedAsNormal();
void onOfflineHoursChanges(boolean isOfflineHoursOn);
void onAgentAvatarTapped(AgentData agentData);
```

*Note: For the full list of Callbacks, click [here](android-callbacks-index.html#livepersoncallback){:target="_blank"} for more information.*
