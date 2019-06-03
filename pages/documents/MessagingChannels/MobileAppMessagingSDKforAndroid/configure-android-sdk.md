---
pagename: Configure the Android SDK
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android

permalink: mobile-app-messaging-sdk-for-android-configure-the-android-sdk.html

---

You can register for LivePerson events related to the conversation, determine the layout of messaging with the app, configure Proguard, or define the backup rules for auto backup and restore. 

### Initialize the SDK with Monitoring Params

{:.important}
To get the App key or appInstallationId, a new Conversation Source needs to be added on LiveEngage. For more information about it, contact your Account Team.


1. In your app's Application class, initialize the Messaging SDK with Monitoring Params.

   ```java
   String brandID = "YourLivepersonAccountIdString";
   String appID = "your app package name"
   MonitoringInitParams monitoringParams = new MonitoringInitParams("appInstallationId");

   LivePerson.initialize(MainActivity.this, new InitLivePersonProperties(brandID, appID, monitoringParams, new InitLivePersonCallBack() {
     @Override
     public void onInitSucceed() {
     }

     @Override
     public void onInitFailed(Exception e) {
     }
   }));
   ```

2. Create **MonitoringParams**. 

   <div class="notice">The entry points and engagement attributes used here are dummies.</div>

   ```java
   // Create Entry Points JSON
   JSONArray entryPoints = null;
   try {
     // Try to Create JSON Array
     jsonArray = new JSONArray("[tel://972737004000, http://www.liveperson.com, sec://sport, lang://Eng]");
   } catch (JSONException e) {
     // Log Error
     Log.d(TAG, "Error Creating Entry Points :: " + e.getLocalizedMessage());
   }
   // Create Engagement Attributes
   JSONArray engagementAttributes = null;
   try {
     // Try to Create JSON Array
   jsonArray = new JSONArray("[{"type": "purchase", "total": "20.0"},{"type": "lead","lead": {"topic": "luxury car test drive 2015","value": "22.22","leadId": "xyz123"}}]")
   } catch (JSONException e) {
     // Log Error
     Log.d(TAG, "Error Creating Engagement Attr :: " + e.getLocalizedMessage());
   }
   // Create Monitoring Params
   MonitoringParams params = new MonitoringParams(null, entryPoints, engagementAttributes);
   ```

3. Using **LivepersonMonitoring**, get the Engagement for the User, which is needed to start a new conversation with a specific campaign. This call uses the MonitoringParams created in the previous step.

   ```java
   // Get Engagement
   LivepersonMonitoring.getEngagement(context, consumerID, params, new EngagementCallback() {
     @Override
     public void onSuccess(LPEngagementResponse lpEngagementResponse) {
       List<EngagementDetails> engagementList = lpEngagementResponse.getEngagementDetailsList();
       // Check if User qualifies for an Engagement
       if (engagementList != null && !engagementList.isEmpty()) {
         // Set Campaign ID
         currentCampaignId = engagementList.get(0).getCampaignId();
         // Set Engagement ID
         currentEngagementId = engagementList.get(0).getEngagementId();
         // Set Engagement Context Id
         currentEngagementContextId = engagementList.get(0).getContextId();
         // Set Session ID
         currentSessionId = lpEngagementResponse.getSessionId();
         // Set Visitor ID
         currentVisitorId = lpEngagementResponse.getVisitorId();
         // Try-Catch Block
         try {
           // Create Campaign Object
           CampaignInfo campaign = new CampaignInfo(Long.valueOf(currentCampaignId), Long.valueOf(currentEngagementId), currentEngagementContextId, currentSessionId, currentVisitorId);
           // Log
           Log.d(TAG, "Campaign :: " + campaign);
         } catch (BadArgumentException e){
           // Log Error
           Log.d(TAG, "Error Creating Campaign :: " + e.getLocalizedMessage());
         }
       } else {
         // Log Error
         Log.d(TAG, "No Engagement found");
       }
     }

     @Override
     public void onError(MonitoringErrorType monitoringErrorType, Exception e) {
       // Log Error
       Log.d(TAG, "Error Getting Engagement :: " + e.getLocalizedMessage());
     }
   });
   ```

4. Set up the **ConversationViewParams** with the Campaign Information.

   ```java
   // Create new ConversationViewParams
   ConversationViewParams params = new ConversationViewParams();
   // Set Campaign Info
   params.setCampaignInfo(campaign);
   // Set Mode
   params.setReadOnlyMode(false);
   ```

5. **Start a new Conversation.**  If your system implementation involves an authentication step, you must call our showConversation method provided by the LPMessagingSDK instance. It pushes a new navigation stack containing the conversation view. Choose an authentication method:

   - **Activity mode**
     ```java
     LivePerson.showConversation(Activity activity, LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
     ```

   - **Fragment mode (Attach the returned fragment to a container in your activity)**
     ```java
     LivePerson.getConversationFragment(LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
     ```

     When using fragment mode, you could use the provided SDK callbacks in your app in order to implement functionalities such as menu items, action bar indications, agent name, and typing indicator.

6. **Shutdown the SDK and remove the footprint of the user session from local memory.** After shutdown, the SDK is unavailable until re-initiated. Message history is saved locally on the device and synced with the server upon reconnection. 

   ```java
   public static void shutDown(final ShutDownLivePersonCallback shutdownCallback)
   ```
   For more details, see the [shutDown](android-shutdown.html) method.

7. **Clear LivePerson Messaging SDK data and unregister push.** Calls [unregisterLPPusher](android-unregisterlppusher.html), [shutDown](android-shutdown.html) and, in addition, deletes all messages and user details from the device. The `logOut` method does not end the current messaging conversation.

   ```java
   public static void logOut(final Context context, final String brandId, final String appId, final LogoutLivePersonCallback logoutCallback)
   ```
   For more details, see the [logOut](android-logout.html) method.

### Callbacks interface

The SDK provides a callback mechanism to keep the host app updated on events related to the conversation. There are two ways to register to LivePerson events via Local Intents (Recommended) or via Callbacks.

#### Local Intents

When using local intents, you can register for all Actions or to a specific Action. All the Actions are defined in the `LivePersonIntents.ILivePersonIntentAction` Interface. All the additional data provided using Extras on the intents is defined in the ``LivePersonIntents.ILivePersonIntentExtras`` Interface.

LivePersonIntents class provides several methods that help get the data out of the intent, without dealing with the Extras. For a full list of all possible Intents, see the [Android Callbacks Index](android-callbacks-index.html#livepersonintents).


We provide an `IntentFilter` that contains all the intent Actions in `LivePersonIntents.getIntentFilterForAllEvents()` to register. Remember, these Intents are local only and must by registered through `LocalBroadcastManager`.

##### Register `BroadcastReceiver` for all Intents:

```java
LocalBroadcastManager.getInstance(
  getApplicationContext()).registerReceiver(<your receiver>,     LivePersonIntents.getIntentFilterForAllEvents()
);
```

##### Register `BroadcastReceiver` for a specific set of Intents:

```java
IntentFilter filter = new IntentFilter();
filter.addAction(LivePersonIntents.ILivePersonIntentAction.LP_ON_AGENT_DETAILS_CHANGED_INTENT_ACTION);
filter.addAction(LivePersonIntents.ILivePersonIntentAction.LP_ON_CONVERSATION_RESOLVED_INTENT_ACTION);

LocalBroadcastManager.getInstance(
  getApplicationContext()).registerReceiver(<your receiver>,filter
);
```

##### Catch the Broadcast:



```java
BroadcastReceiver <your receiver> = new BroadcastReceiver(){
  @Override
  public void onReceive(Context context, Intent intent) {
    Log.d(TAG, "Got LP intent event with action " + intent.getAction());
    switch (intent.getAction()){
      //handle the relevant actions from LivePersonIntents.ILivePersonIntentAction
      ...
    }
  }
};
```

{:.important}
If you registered for multiple **Intents**, you must filter each one, using a **switch**.

#### Callbacks

##### Register the callback call:

```java
public static void setCallback(final LivePersonCallback listener)
```

##### Remove a callback call:

```java
public static void removeCallBack()
```

For more details, see the [Android Callbacks Index](android-callbacks-index.html).


### Conversations Lifecycle

During the course of the conversation, consumers can take several actions such as Mark as urgent to receive a faster service, or Resolve conversation to let your agents know they have received their answers.

#### LivePerson API:

```java
public static void checkActiveConversation(final ICallback<Boolean, Exception> callback)
public static void checkConversationIsMarkedAsUrgent(final ICallback<Boolean, Exception> callback)
public static void checkAgentID(final ICallback<AgentData, Exception> callback)
public static void markConversationAsUrgent()
public static void markConversationAsNormal()
public static void resolveConversation()
public static boolean clearHistory()
```

For more details, see the [Android Methods](android-methods.html).

#### Callbacks:

```java
void onConversationStarted(LPConversationData convData);
void onConversationResolved(LPConversationData convData);
void onConnectionChanged(boolean isConnected);
```

For more details, see the [Android Callbacks Index](android-callbacks-index.html#livepersoncallback).

### UI

To determine the layout of messaging within the app, you can utilize various actions to control the behavior and UI such as menus, typing indication, etc.

#### LivePerson callbacks:

```java
void onAgentTyping(boolean isTyping);
void onAgentDetailsChanged(AgentData agentData);
void onCsatDismissed();
void onCsatSubmitted(String conversationId);
void onConversationMarkedAsUrgent();
void onConversationMarkedAsNormal();
void onOfflineHoursChanges(boolean isOfflineHoursOn);
void onAgentAvatarTapped(AgentData agentData);
```

For the full list of Callbacks, see the [Android Callbacks Index](android-callbacks-index.html#livepersoncallback) for more information.

### User Data

Pass and display consumer information to agents, and agent information to consumers. See more information about each method, see [setUserProfile](android-methods.html#setuserprofile) and [checkAgentID](android-methods.html#checkagentid)

#### Set the User Profile (Not an SDE):

```java
public static void setUserProfile(ConsumerProfile profile)
```

{:.important}
When using SDEs (Authenticated Chat), SDEs have priority and will override the setUserProfile.

#### Get Agent Details:

```java
public static void checkAgentID(final ICallback<AgentData, Exception> callback)
```

### Logs and Info

Upon errors, we send logs including different severity levels of errors and warnings.

### Proguard 

The SDK handles its own obfuscation and all its dependencies according to ProGuard rules. There is no need to add any ProGuard specific rules that relate to the SDK.

The SDK ProGuard will run automatically when the ProGuard option is enabled in the gradle file of your application.

In case there is no ProGuard activated, the SDK ProGuard will also be disabled.

### Android Automatic Restore

Since Android 6.0 (API 23), Android has offered the Auto Backup and restore for Apps feature as a way for developers to quickly add backup functionality to their apps. If this feature is enabled on an App, when reinstalling the application all stored data is restored to the device. refer to [Auto Backup for Apps](https://developer.android.com/guide/topics/data/autobackup.html) for more info.

Currently, the Mobile App Messaging SDK for Android does not support Automatic Restore and needs to be disabled on the host app if the app enabled Automatic Backup.

Note: the following configuration is relevant only if Automatic Backup is enabled on the manifest of the host app:

```xml
<application
    android:allowBackup="true"
```

#### Define backup rules

1. Create an XML resource file under res/xml folder named: _lp_backup_rules.xml_ with the following content:

   ```xml
   <?xml version="1.0" encoding="utf-8"?>
   <full-backup-content xmlns:android="http://schemas.android.com/apk/res/android">
       <exclude domain="sharedpref" path="lp_shared.xml"/>
       <exclude domain="database" path="lp_infra_tables.db"/>
       <exclude domain="file" path="images"/>
   </full-backup-content>
   ```

2. Add the following line under the \<application\> tag on the host app manifest:

   ```xml
   android:fullBackupContent="@xml/lp_backup_rules"
   ```

### Google Maps Key

The Structured Content feature in the SDK uses Google Maps to display maps. If the host app requires this feature, it needs to set its own Google Maps key.
The key can be set to string **lp_google_maps_key** in the host app **branding.xml** file and the SDK will use this key.

For example:

```xml
<string name="lp_google_maps_key">WIdew3245ERsdfsdgretwemyMgF5</string>
```

The SDK's manifest uses internally a _**meta-data**_ tag block with _**com.google.android.maps.v2.API_KEY**_. If the host app uses the same meta-data block it needs to add a 'replace' value parameter.
For example:

```xml
<meta-data
  android:name="com.google.android.maps.v2.API_KEY"
  android:value="WIdew3245ERsdfsdgretwemyMgF5"
  tools:replace = "value"/>
```
