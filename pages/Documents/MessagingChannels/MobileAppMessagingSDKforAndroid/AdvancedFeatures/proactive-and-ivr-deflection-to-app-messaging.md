---
pagename: Proactive and IVR Deflection to App Messaging

Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Advanced Features
permalink: mobile-app-messaging-sdk-for-android-advanced-features-proactive-and-ivr-deflection-to-app-messaging.html
indicator: messaging
---

To integrate Proactive or IVR Deflection to App messaging, brands must follow these configurations steps when implementing the SDK (minimum version 4.7/5.5):

- Make sure the brand app already has push notification set up in order to enable their consumers to receive notifications. You can find detailed instructions on how to set up LivePerson's push notification service [here](mobile-app-messaging-sdk-for-android-push-notifications.html).

- #### handlePushMessage
Call SDK’s [handlePushMessage](mobile-app-messaging-sdk-for-android-sdk-apis-messaging-api.html#handlepushmessage) API upon receiving push notifications which will return PushMessage object.

```java
public static PushMessage handlePushMessage(Context context, Map<String, String> remoteMessage, String brandId, boolean showNotification)
``` 

- ##### PushMessage
```json
{
    "id":  "pushMessageId",
    "brandId":  "accountId",
    "message":  "proactiveMessage",
    "backendService":  "prmsg/c2m",
    "lookBackPeriod":  "lookBackPeriod",
    "agentPid":  "agentPid",
    "campaignInfo": "campaignInfo"
}
```
- #### setPushNotificationTapped
When the consumer taps on the notification, before redirecting the consumer to the conversation screen by calling [showConversation](mobile-app-messaging-sdk-for-android-sdk-apis-messaging-api.html#showconversation) / [getConversationFragment](mobile-app-messaging-sdk-for-android-sdk-apis-messaging-api.html#getconversationfragment)
method, call [setPushNotificationTapped](mobile-app-messaging-sdk-for-android-sdk-apis-messaging-api.html#setpushnotificationtapped) method and pass in the pushMessageId obtained from PushMessage object.

```java
public static void setPushNotificationTapped(String pushMessageId)
```

- #### set notification expiry
If you want to make sure consumers do not tap on expired notifications, set notification expiry (look back period) while creating and displaying notification.

```java
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
    builder.setTimeoutAfter(pushMessage.getLookBackPeriod());
}
```
You can find an example on how to build a push notification and set an expiry in our [SampleApp](https://github.com/LP-Messaging/Android-Messaging-SDK/blob/5ed173a7252caeb5fb45de0bd75fdaa038259048/SampleApp-Source/sample_app/src/main/java/com/liveperson/sample/app/notification/NotificationUI.java#L64)

- Use [show_outbound_inapp_message](mobile-app-messaging-sdk-for-android-advanced-features-proactive-and-ivr-deflection-to-app-messaging.html#show_outbound_in_app_message) configuration if required, see details in the section below.

### Configurations

#### show_outbound_in_app_message
- This configuration allows brands that want to display the outbound message in the in-app conversation interface to consumers even after they discard or ignore the message notification.
- In case the consumer did not tap on the push notification to navigate to the in-app conversation, this configuration can be set to true if the brand wants to display the outbound message to the consumer even in the case that the look back period has expired. If set to false, the outbound message will not be displayed to consumers once they navigate to the in-app conversation screen from the app.

#### LogOut
Consumers can now receive push notifications even in logged out state. SDK has introduced new enum configurations to let brand decide If they want consumers to receive notifications when logged out.

Brands can choose either of the following configurations to unregister user from pusher:

#### PushUnregisterType
```java
enum class PushUnregisterType {
    NONE,
    ALL,
    AGENT
}
```

**NONE:** Do not unregister from pusher at all. Consumer will receive push notifications from both agent as well as outbound notification.

**ALL (Default):** Unregister/remove consumer from pusher. No push notifications will be sent if the consumer is logged out.

**AGENT:** Unregister only for agent push notification messages. Consumers will still receive outbound push notifications sent from the Proactive or Connect to Messaging (IVR) services.

Updated Liveperson.LogOut api:

#### Liveperson.LogOut()

````java
public static void logOut(Context context, String brandId, String appId, PushUnregisterType unregisterType, LogoutLivePersonCallback logoutCallback)
````

