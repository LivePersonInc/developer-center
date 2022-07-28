---
pagename: Configure the Android SDK

redirect_from:
  - mobile-app-messaging-sdk-for-android-configuration-liveperson-callbacks-interface.html
  - android-configuring-changing-fonts.html
  - mobile-app-messaging-sdk-for-android-customization-and-branding-changing-fonts.html
  - android-configuring-edittext.html
  - mobile-app-messaging-sdk-for-android-customization-and-branding-configuring-the-message-s-edit-text.html
  - android-configuring-sdk.html
  - mobile-app-messaging-sdk-for-android-customization-and-branding-customizing-the-sdk.html

Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
permalink: mobile-app-messaging-sdk-for-android-configure-the-android-sdk.html
indicator: messaging
---

You can register for LivePerson events related to the conversation, determine the layout of messaging with the app, configure Proguard, or define the backup rules for auto backup and restore. 

### Android Automatic Restore

Since Android 6.0 (API 23), Android has offered the Auto Backup and restore for Apps feature as a way for developers to quickly add backup functionality to their apps. If enabled on an App, when reinstalling the application, all stored data gets restored to the device. For more details, see [Auto Backup for Apps](https://developer.android.com/guide/topics/data/autobackup.html) for more info.

Currently, the Mobile App Messaging SDK for Android does not support Automatic Restore.  If the app has enabled Automatic Backup, you must disable it on the host app. 

**Note:** If you have Automatic Backup enabled on the manifest of the host app, you must add the following:

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

### Branding

You can customize the look and feel of the conversation screen with your branding.xml file. Additionally, you can configure the style of the message EditText in your styles.xml file.

#### Step 1. Create your branding.xml file and add design attributes

1. In your Android Studio project, right-click your app and select **New → XML → Values XML File**.

2. Add design attributes to your **branding.xml** file. The file MUST contain all the resource-names as they are listed in [Attributes](android-attributes.html). The Customer notes column includes space for you to add your branding.

   {: .important}
   If a clearer view of which attribute corresponds with a design element is needed, utilize the [Attributes Design Sheet](android-attributes-designsheet.html).

3. Add resources to your project. The SDK utilizes several resources as part of its GUI. 
   
   - [**lp_messaging_ui_brand_logo**](mobile-app-messaging-sdk-for-android-sdk-attributes-attributes.html#lp_messaging_ui_brand_logo) - Default brand avatar on the avatar next to brand bubble (the first brand message) and on agent avatar appearing on the action bar before an agent is assigned.

      If you want to define the background color for this avatar, override `brand_logo_background_color` resource ID. Only relevant for bubble brand’s avatar.

      Background color of the agent avatar on action bar is `agent_avatar_background_color`.

  
   - [**lp_messaging_ui_ic_agent_avatar**](mobile-app-messaging-sdk-for-android-sdk-attributes-attributes.html#lp_messaging_ui_ic_agent_avatar) - Default agent avatar appearing next to an agent’s bubble when no avatar URL is assigned on Conversational Cloud and on agent avatar appearing on the action bar.

      If you want to define the background color for this avatar, override `agent_avatar_background_color` resource ID.

   - [**lpmessaging_ui_secure_form_progress_bar.xml**](mobile-app-messaging-sdk-for-android-sdk-attributes-attributes.html#lpmessaging_ui_secure_form_progress_barxml)- Default progress bar vector drawable for PCI secure form (after pressing to fill the form, the button changes to progress bar until we can show the form). To override this resource, create a vector drawable under the android drawable folder with the same resource name.

   - [**lpmessaging_ui_image_progress_bar.xml**](mobile-app-messaging-sdk-for-android-sdk-attributes-attributes.html#lpmessaging_ui_image_progress_barxml) - Default progress bar vector drawable for downloading or uploading an image. It appears on the image, inside the bubble, until progress is done. To override this resource, create a vector drawable under the android drawable folder with the same resource name.

   - [**lpinfra_ui_ic_send_disabled.xml**](mobile-app-messaging-sdk-for-android-sdk-attributes-attributes.html#lpinfra_ui_ic_send_disabledxml) - You can display a different drawable to represent sending a message. Create a drawable file named **lpinfra_ui_ic_send_disabled.xml**, which overrides the SDK's default drawable.

      To display an image instead of text, set the use_send_image_button boolean to true.

#### Step 2. Configure the message EditText in your styles.xml file

1. In the app’s **styles.xml** file, override the `lp_enter_message_style` with the required style.

   ```xml
   <style name="lp_enter_message_style" parent="Theme.AppCompat.Light.NoActionBar">
   <item name="colorControlActivated">#F8BBD0</item>
   </style>
   ```

2. Change the font of the elements in the conversation view with two separate settings: 

   - **custom_font_name_conversation_feed** - Font name (standard Android font name, such as *san-serif-thin*) for all conversation feed’s element. By default, the value is empty. 

   - **custom_font_name_non_conversation_feed** - Font name (custom installed TTF font, such as *customFont.ttf*), for all elements that are not in the conversation feed. For example, the font on the Enter Message EditText control or toolbar text. 

     {: .important}
     The custom font file must reside in the **assets** folder of the host app, located as a sibling of the **res** folder. If using a custom font, the above font parameters should be the custom font file name with the TTF extension (**customFont.ttf**).

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
      …
    }
  }
};
```

{: .important}
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

### Google Maps Key

The Structured Content feature in the SDK uses Google Maps to display maps. If the host app requires this feature, it needs to set its own Google Maps key.
The key can be set to string **lp_google_maps_key** in the host app **branding.xml** file and the SDK will use this key.

For example:

```xml
<string name="lp_google_maps_key">WIdew3245ERsdfsdgretwemyMgF5</string>
```

The SDK's manifest uses internally a _**meta-data**_ tag block with _**com.google.android.geo.API_KEY**_. If the host app uses the same meta-data block it needs to add a 'replace' value parameter.
For example:

```xml
<meta-data
  android:name = "com.google.android.geo.API_KEY"
  android:value = "WIdew3245ERsdfsdgretwemyMgF5"
  tools:replace = "value" />
```

### Initialize the SDK with Monitoring Params

{: .important}
To get the App key or appInstallationId, a new Conversation Source needs to be added on Conversational Cloud. For more information about it, contact your Account Team.

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
        entryPoints = new JSONArray("[tel://972737004000, http://www.liveperson.com, sec://sport, lang://Eng]");
    } catch (JSONException e) {
        Log.e(TAG, "Error Creating Entry Points :: " + e);
    }
    
    // Create Engagement Attributes
    JSONArray engagementAttributes = null;
    try {
        engagementAttributes = new JSONArray("[{\"type\": " + purchaseType + ", \"total\": " + purchaseTotal + "}, " +
            "{\"type\": \"lead\", \"lead\": {\"topic\": " + leadTopic + ", \"value\": " + leadValue + ",\"leadId\": " + leadId + "}}]");
    } catch (JSONException e) {
        Log.e(TAG, "Error Creating Engagement Attr :: " + e);
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

5. **Start a new Conversation.**  If your system implementation involves an authentication step, you must call the `showConversation` method provided by the LPMessagingSDK instance. It pushes a new navigation stack containing the conversation view. 

   Choose an authentication method:

   * **Activity mode** - Implements the toolbar that displays the agent name to the consumer. The 'Is Typing' indicator displays when the agent is typing.

      Start a new conversation activity to open the conversation window in a separate activity:

      ```java
      LivePerson.showConversation(getActivity(), LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
      ```

      The SDK implements the controls on the action bar.

   * **Fragment mode**  - Attaches the returned fragment to a container in your activity.  The caller, placed inside a container, receives the conversation fragment from the SDK.  Also, the caller is responsible for initializing the SDK and, if needed, implementing a toolbar or other indicators according to the provided SDK callbacks.

      **Note:** Make sure the init process finished successfully.   Call from the onInitSucceed callback.

      Open conversation window in a fragment to return a conversation fragment and place it in a container in your activity:

      ```java
      LivePerson.getConversationFragment(LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
      ```

      **Tip.** When using fragment mode, you could use the provided SDK callbacks in your app to implement functionalities such as menu items, action bar indications, agent name, and typing indicator.

   * **Fragment mode — Handle CSAT (feedback)** — Implements notifications of the CSAT screen state (**visible**/**invisible**). For example, you can show a different title on the toolbar or show a close CSAT button. 

      The container Activity (the activity that hosts the fragment) needs to implement  ConversationFragmentCallbacks interface:

      ```java
      public interface ConversationFragmentCallbacks {

        void setFeedBackMode(boolean on, IFeedbackActions actions);

        // boolean on-Notify whether feedback (csat) screen is visible or dismisses.
        // IFeedbackActions actions - provides set of actions for the feedback screen.
        void onSurveySubmitted(IFeedbackActions actions);

        void setSecureFormMode(boolean on, String formTitle) {}
      }

      // IFeedbackActions actions-provides a set of actions for the feedback screen.
      public interface IFeedbackActions {

        void closeFeedBackScreen();

        //close the screen, for example-after submitting the CSAT. When showing the "thank you" screen.

        void skipFeedBackScreen();

        //skip and close the whole feedback process.
      }
      ```

      Once the CSAT screen is visible, `setFeedBackMode` is called with **true** value. When the CSAT is not visible anymore (skip/submitted), `setFeedBackMode` calls with **false** value.

      Example — how to use **ConversationFragmentCallbacks** (code from the container Activity)

      ```java
      class ContainerActivity extends FragmentActivity implements ConversationFragmentCallbacks {
        @Override
        public void setFeedBackMode(boolean on, final IFeedbackActions actions) {
          toolbar.setTitle("Csat mode: " + ( on ? "on!" : "off!" ));
          toolbar.setNavigationOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
              if (actions != null){
                actions.closeFeedBackScreen();
              }
            }
          });
        }

        @Override
        public void onSurveySubmitted(IFeedbackActions actions) {
          toolbar.setTitle("survey submitted");
        }
      }
      ```  

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

### LivePerson events
Add a class to handle LivePerson basic messaging events via BroadcastReceiver and respond via callback. 

1. Create a class named **IntentsHandler**.  

   **Tip:** You can use any name.

    ```java
    public class IntentsHandler {

    private Context mContext;
    private BroadcastReceiver mLivePersonReceiver;

    public IntentsHandler(Context ctx){
        this.mContext = ctx;
        registerToLivePersonEvents();
    }
    }
    ```

2. Create a function named **registerToLivePersonEvents** and initialize the broadcast receiver.

    ```java
    public void registerToLivePersonEvents(){
    createLivePersonReceiver();
    LocalBroadcastManager.getInstance(mContext.getApplicationContext())
            .registerReceiver(mLivePersonReceiver, LivePersonIntents.getIntentFilterForAllEvents());
    }
    ```

   In this example, you listen to all events via the **intentfilter**. 
   
   **Tip:** You can create your own specific intent filter.

3. Create a function named `createLivePersonReceiver` to handle the events.  

   **Note:** Here we provide you with a wide example of handling most events. For more information, see [LivePerson events](android-callbacks-index.html).

   Here is an example of a function which handles some LivePerson events:

    ```java
    private void createLivePersonReceiver() {
    if (mLivePersonReceiver != null){
        return;
    }
    mLivePersonReceiver = new BroadcastReceiver(){

        @Override
        public void onReceive(Context context, Intent intent) {

            Log.d(TAG, "Got LP intent event with action " + intent.getAction());
            switch (intent.getAction()){
                case LivePersonIntents.ILivePersonIntentAction.LP_ON_AGENT_AVATAR_TAPPED_INTENT_ACTION:
                    onAgentAvatarTapped(LivePersonIntents.getAgentData(intent));
                    break;

                case LivePersonIntents.ILivePersonIntentAction.LP_ON_AGENT_DETAILS_CHANGED_INTENT_ACTION:
                    AgentData agentData = LivePersonIntents.getAgentData(intent);
                    onAgentDetailsChanged(agentData);
                    break;
            }

        }
    };
    }
    ```

4. Add a function that acts according to the specific use-case, for example:

    ```java
    private void onAgentAvatarTapped(AgentData agentData) {
    showToast("on Agent Avatar Tapped - " + agentData.mFirstName + " " + agentData.mLastName);
    }
    ```

   For more details about this function, see [Agent Avatar Tapped](mobile-app-messaging-sdk-for-android-sdk-apis-callbacks-index.html#agent-avatar-tapped).

### Logs and Info

Upon errors, we send logs including different severity levels of errors and warnings.

**For SDK 3.6.1 and newer.** Use `setIsDebuggable` to enable or disable SDK logs. By default, logging is disabled. To enable it, use:

```java
public static void setIsDebuggable(boolean isDebuggable)
```

**Example:** Liveperson.setIsDebuggable(BuildConfig.DEBUG)

### Messaging activity

Create a messaging activity that launches the activity session. We provide you with a basic initialization of the LivePerson SDK in **Activity mode**.  You can also initialize it in *Fragment mode* and use different features.

#### Basic members

```java
public class MainActivity extends AppCompatActivity {
// Consumer name inputs
private EditText fnameInput;
private EditText lnameInput;
private Button startConvBtn;
// Brand login details
private final String brandID = "82055668";
// Project’s package
private final String appID = "com.shaym.sdk28";
// Intent Handler
private IntentsHandler mIntentsHandler;
}
```

#### onCreate

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
super.onCreate(savedInstanceState);
setContentView(R.layout.activity_main);
// IntentsHandler is the object we introduced in the previous section of this tutorial
mIntentsHandler = new IntentsHandler(this);
// init basic UI views
initViews();
// Init the button listener
initOpenConversationButton();
}
```

#### initOpenConversationButton

```java
private void initOpenConversationButton() {
startConvBtn = (Button) findViewById(R.id.startcnvbtn);
startConvBtn.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        // This will check if we already in a conversation
        if (LivePerson.isValidState()) {
            openActivity();
        }
        else {
            removeNotification();
            initActivityConversation(); // The conversation activity
        }
    }
});
}
```

#### initActivityConversation
You initialize the SDK with the brandID and appID, but only if you're not already in a `valid` state, which was checked in a previous section. 

**Tip:** If the initialization succeeds, the `openActivity` method is called.

```java
private void  initActivityConversation() {

    LivePerson.initialize(MainActivity.this, new InitLivePersonProperties(brandID, appID, new InitLivePersonCallBack() {
        @Override
        public void onInitSucceed() {
            // you can't register pusher before initialization
            handlePusherRegistration(MainActivity.this);
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    openActivity();
                }
            });
        }
        @Override
        public void onInitFailed(Exception e) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    Toast.makeText(MainActivity.this, "Init Failed", Toast.LENGTH_SHORT).show();
                }
            });
        }
    }));
}
```

#### openActivity function

Here, you use the LivePerson SDK’s `showConversation` method. 

**Tip:** In the example below, we do not use an authentication parameter.  If you need to use an authentication paramenter, use `setPhoneNumber`.

```java
private void openActivity() {
LivePerson.showConversation(MainActivity.this,  new LPAuthenticationParams().setAuthKey(""), new ConversationViewParams(false));
ConsumerProfile consumerProfile = new ConsumerProfile.Builder()
        .setFirstName(fnameInput.getText().toString())
        .setLastName(lnameInput.getText().toString())
        .setPhoneNumber("")
        .build();
LivePerson.setUserProfile(consumerProfile);
}
```

### Proguard 

The SDK handles its own obfuscation and all its dependencies according to ProGuard rules. When enabled in the gradle file of your application, ProGuard activates and runs automatically.

**For SDK version 3.7 and newer.** If your App supports Android KitKat, add the following rule to ProGuard file. If you don't set this rule, an error message appears in logs.

```java
-keepclassmembers class * implements javax.net.ssl.SSLSocketFactory {
	final javax.net.ssl.SSLSocketFactory delegate;
}
```

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

Pass and display consumer information to agents, and agent information to consumers. See more information about each method, see [setUserProfile](mobile-app-messaging-sdk-for-android-sdk-apis-messaging-api.html#setuserprofile) and [checkAgentID](mobile-app-messaging-sdk-for-android-sdk-apis-messaging-api.html#checkagentid)

#### Set the User Profile (Not an SDE):

```java
public static void setUserProfile(ConsumerProfile profile)
```

{: .important}
When using SDEs (Authenticated Chat), SDEs have priority and will override the setUserProfile.

#### Get Agent Details:

```java
public static void checkAgentID(final ICallback<AgentData, Exception> callback)
```

