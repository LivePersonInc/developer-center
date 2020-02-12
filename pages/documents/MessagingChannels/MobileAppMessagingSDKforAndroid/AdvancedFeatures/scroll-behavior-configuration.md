---
pagename: Scroll Behavior configuration

Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Advanced Features
permalink: mobile-app-messaging-sdk-for-android-advanced-features-scroll-behavior-configuration.html
indicator: messaging
---

### Requirements

**Supported versions:** 
 - 4.3 and higher
 - (AndroidX) 5.1 and higher

**Authentication**
 - Only support authentication mode: Code flow and JWT flow.

### How to configure

Simply set the attributes in branding.xml file. Please follow the instructions of each attributes below. If the configuration is missing in branding.xml file or configure to wrong value, the SDK will take the default scroll behavior. 

| Scroll Option | Description | Limitation |
| :--- | :--- | :--- |
| Bottom | Conversation will scroll to the bottom regardless if there are new messages or not. | N/A |
| LastPosition | Conversation will scroll to the previous position regardless if there are unread messages or not. | Support scroll to the position within about latest 100 messages for `lp_scroll_show_conversation` and `lp_scroll_when_push_notification`. Conversation will scroll to bottom if more than about 100 messages are loaded. No restrictions for `lp_scroll_when_foreground`. |
| FirstUnreadMessage | Conversation will scroll to first unread message. If no unread messages exist, conversation will scroll to the bottom. | N/A |

### Show Conversation

`lp_scroll_show_conversation` configures the scroll behavior when opening the conversation screen from another screen of the app. 

Available options: **Bottom(Default), LastPosition, FirstUnreadMessage**

```xml
<string name="lp_scroll_show_conversation" translatable="false">Bottom</string>
```

### Move to foreground from background

`lp_scroll_when_foreground` configures the scroll behavior when bringing the conversation screen to the foreground from the background. 

Available options: **Bottom, LastPosition(Default), FirstUnreadMessage**

```xml
<string name="lp_scroll_when_foreground" translatable="false">LastPosition</string>
```

### Tapped on push notification

`lp_scroll_when_push_notification` configures the scroll behavior when open conversation screen by tapping on push notification. 

`LivePerson.setPushNotificationTapped();` before show the conversation screen. Otherwise, the scroll behavior will follow the configuration of `lp_scroll_show_conversation`. `LivePerson.setPushNotificationTapped();` must be called after SDK is initialized. 

Available options: **Bottom(Default), LastPosition, FirstUnreadMessage**

```xml
<string name="lp_scroll_when_push_notification" translatable="false">Bottom</string>
```

#### Activity mode

```java
LivePerson.setPushNotificationTapped();
LivePerson.showConversation(Activity, LPAuthenticationParams, ConversationViewParams);
```

#### Fragment mode

If conversation Fragment is not initialized.

```java
LivePerson.setPushNotificationTapped();
LivePerson.getConversationFragment(LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
```

If the conversation Fragment is initialized and it's in background, the attribute can be configured based on host app implentation. Below is an example,

```java
@Override
protected void onNewIntent(Intent intent) {
    super.onNewIntent(intent);
    if (pushNotificationTapped) {
        LivePerson.setPushNotificationTapped();
    }
}
```


### Click on the scroll down indicator

`lp_scroll_when_scroll_down` configures the scroll behavior when tapping on the scroll down indicator. 

Available options: **Bottom(Default), FirstUnreadMessage**

```xml
<string name="lp_scroll_when_scroll_down" translatable="false">Bottom</string>
```

