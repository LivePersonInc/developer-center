---
pagename: Use the LivePerson SDK - Android
redirect_from:
  - android-integration-guide.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Resources
order: 341
permalink: mobile-app-messaging-sdk-for-android-resources-use-the-liveperson-sdk-android.html
indicator: messaging
---

### Prerequisites
It is important that you have followed the [Quick Start guide](/mobile-app-messaging-sdk-for-android-quick-start.html).  If not, make sure to install the LivePerson Mobile App Messaging SDK before proceeding.

### Step 1 — Create initial views

In this step, you'll use some basic name features to create some initial views on our main activity / an activity of your choosing.

![initialview](img/initialview.png)

### Step 2 — Add enabled features to your AndroidManifest.xml file

If you have any of these features enabled, you must add the following to your app's AndroidManifest.xml file:

#### Vibrate on new incoming msg

```xml
<uses-permission android:name="android.permission.VIBRATE"/>
```

#### Photo Sharing

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

#### Audio Messaging

```xml
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

### Step 3 — Add LivePerson events

In this step, you add a class to handle LivePerson basic messaging events via BroadcastReceiver and respond via callback.

1. Create a class named **IntentsHandler**.

   **Tip:** You can use any name of your choosing.

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

### Step 4 — Add messaging activity

In this step, you create a messaging activity that launches the activity session. Here we provide you with a basic initialization of the LivePerson SDK in *Activity mode*.  You can also initialize it in *Fragment mode* and use different features.

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
            // You can't register pusher before initialization
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

### Step 5 — Configure push notifications

Push and local notifications are a key factor that makes the experience better for consumers — they never have to stay in your app or keep the window open as they will get a proactive notification as soon as a reply or notice is available.

#### Prerequisites

- Followed the [Quick Start Guide for Android](mobile-app-messaging-sdk-for-android-quick-start.html) and are now ready to implement and enable features.

- Added [Firebase](https://firebase.google.com/docs/android/setup) to your Android project and installed the [Firebase Cloud Messaging (FCM) SDk](https://firebase.google.com/docs/cloud-messaging/android/client).

#### Step 1. Register the client app instance

The proprietary SDK notification is only for display purposes, interacting with it won't launch the Application or navigate to the Conversation Fragment/Activity. For a fully interactive notification, the host app needs to provide the implementation.

1. Use the registration token for the client app instance and register it using the [registerLPPusher() API call](android-registerlppusher.html) so it knows which device should get each push message.

2. Upon receiving a push message to your app, handle it so it is displayed to the customer.

   ```java
   public class MyFirebase extends FirebaseMessagingService {
     /**
     * Called when a message is received.
     * @param remoteMessage Object representing the message received from Firebase Cloud Messaging.
     */
     @Override
     public void onMessageReceived(RemoteMessage remoteMessage) {
       // Sends the message into the SDK
       LivePerson.handlePushMessage(this, remoteMessage.getData(), lpAccount, true);
     }
   }
   ```

#### Step 2. Configure push notifications in Conversational Cloud

1. Log into your [Conversational Cloud account](https://authentication.liveperson.net/login.html?lpservice=liveEngage&servicepath=a%2F~~accountid~~%2F%23%2C~~ssokey~~).

2. In Conversational Cloud, click the **Campaign Builder** tab, and then **Data Sources**.

  ![Data Sources](img/androiddatasources.jpg)

3. On the Integrations tab, under **Mobile app management**, click **Manage**.

4. Click **Add new** to add your app to the mobile campaign.

5. Enter your mobile package name and the Google Firebase Legacy API key, then click **Create app**.

   **Tip:** You can find the **Package Name** on the Firebase console under **General**, and the **Legacy Key** on the Firebase console under **Cloud Messaging**.

#### Step 3. Configure the services and classes

1. Under the **application** tab, add the following services + receiver:

    ```xml
        <service
            android:name=".push.fcm.MyFirebaseMessagingService">
            <intent-filter>
                <action android:name="com.google.firebase.MESSAGING_EVENT"/>
            </intent-filter>
        </service>

        <service
            android:name=".push.fcm.FirebaseRegistrationIntentService"
            android:exported="false">
        </service>

        <receiver android:name=".push.NotificationUI$BadgeBroadcastReceiver">
            <intent-filter>
                <action android:name="ACTION_LP_UPDATE_NUM_UNREAD_MESSAGES_ACTION"/>
            </intent-filter>
        </receiver>
    ```

2. Now, create the classes to fit those services and change the path according to the classes you created.

   The following services are an extension of Google’s Firebase cloud messaging services. For more details, see [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging/).

   - **MyFirebaseMessagingService**: runs in the background and handles incoming messages.

     ```java
     public class MyFirebaseMessagingService extends FirebaseMessagingService {

        private static final String TAG = "MyFirebaseMsgService";

         @Override
        public void onMessageReceived(RemoteMessage remoteMessage) {
            // TODO(developer): Handle FCM messages here.
            Log.d(TAG, "From: " + remoteMessage.getFrom());
            // Check if message contains a data payload.
            if (remoteMessage.getData().size() > 0) {
                Log.d(TAG, "Message data payload: " + remoteMessage.getData());

                // Send the data into the SDK
                String account = "12345678";
                PushMessage message = LivePerson.handlePushMessage(this, remoteMessage.getData(), account, false);

                // Code snippet to add push UI notification
                if (message != null){
                    NotificationUI.showNotification(this, message);
                }
            }
            // Check if message contains a notification payload.
            if (remoteMessage.getNotification() != null) {
                Log.d(TAG, "Message Notification Body: " + remoteMessage.getNotification().getBody());
            }
        }
     }
     ```

   - **FirebaseRegistrationIntentService**: registers for the pusher everytime the SDK gets initialized.

     Enter your account number as account, and your package name as appID in order to register to the pusher, as shown in the example. Notice the token we are getting from the `FirebaseInstanceId`. This is sent to the LivePerson pusher and integrated into your LivePerson account.

     ```java
     public class FirebaseRegistrationIntentService extends IntentService {

        public static final String TAG = FirebaseRegistrationIntentService.class.getSimpleName();

        public FirebaseRegistrationIntentService() {
            super(TAG);
        }

       @Override
        protected void onHandleIntent(Intent intent) {
            String token = FirebaseInstanceId.getInstance().getToken();
            // Register to LivePerson Pusher
            String account = "12345678"; // Replace with your account id.
            String appID = "com.liveperson.sampleapp"; // Replace with your applicationId.
            LivePerson.registerLPPusher(String brandId, String appId, String deviceToken, PushType pushType, LPAuthenticationParams authenticationParams, ICallback<Void, Exception> registrationCompletedCallback);
        }
     }
     ```

   - **NotificationUI** (or choose your own names for these classes): presents and handles the push to the UI.

     ```java
     public class NotificationUI {

     private static final String TAG = NotificationUI.class.getSimpleName();
     public static final int NOTIFICATION_ID = 143434567;
     public static final String PUSH_NOTIFICATION = "push_notification";

     public static void showNotification(Context ctx, PushMessage pushMessage) {
         NotificationCompat.Builder builder = new NotificationCompat.Builder(ctx).
                 setContentIntent(getPendingIntent(ctx)).
                 setContentTitle(pushMessage.getMessage()).
                 setAutoCancel(true).
                 setDefaults(Notification.DEFAULT_SOUND | Notification.DEFAULT_LIGHTS).
                 setSmallIcon(R.mipmap.ic_launcher).
                 setStyle(new NotificationCompat.InboxStyle()

                         .addLine(pushMessage.getFrom())
                         .addLine(pushMessage.getBrandId())
                         .addLine(pushMessage.getConversationId())
                         .addLine(pushMessage.getBackendService())
                         .addLine(pushMessage.getCollapseKey())
                         .addLine("Unread messages : " + LivePerson.getNumUnreadMessages(pushMessage.getBrandId()))

                 );

         if (Build.VERSION.SDK_INT >= 21) {
             builder = builder.
                     setCategory(Notification.CATEGORY_MESSAGE).
                     setPriority(Notification.PRIORITY_HIGH);
         }
         getNotificationManager(ctx).notify(NOTIFICATION_ID, builder.build());
     }
     public static void hideNotification(Context ctx){
         getNotificationManager(ctx).cancel(NOTIFICATION_ID);
     }
     private static NotificationManager getNotificationManager(Context ctx) {
         return (NotificationManager) ctx.getSystemService(Context.NOTIFICATION_SERVICE);
     }
     private static PendingIntent getPendingIntent(Context ctx) {
         Intent showIntent = new Intent(ctx, MainActivity.class);
         showIntent.putExtra(PUSH_NOTIFICATION, true);
         return PendingIntent.getActivity(ctx, 0, showIntent, PendingIntent.FLAG_UPDATE_CURRENT);
     }

     /************************ Example of Icon Badge - For Samsung *******************************/
     public static void setBadge(Context context, int count) {

             SharedPreferences.Editor editor = context.getSharedPreferences("liveperson", MODE_PRIVATE).edit();
             SharedPreferences prefs = context.getSharedPreferences("liveperson", MODE_PRIVATE);

         int current = prefs.getInt("count", 0);
         if (current == 0 || count == 1)
             current += count;
         else
             current = count;
         editor.putInt("count", current);
         editor.apply();

         String launcherClassName = getLauncherClassName(context);
         if (launcherClassName == null) {
             return;
         }
         Intent intent = new Intent("android.intent.action.BADGE_COUNT_UPDATE");
         intent.putExtra("badge_count", current);
         intent.putExtra("badge_count_package_name", context.getPackageName());
         intent.putExtra("badge_count_class_name", launcherClassName);
         context.sendBroadcast(intent);
     }
     public static String getLauncherClassName(Context context) {

         PackageManager pm = context.getPackageManager();

         Intent intent = new Intent(Intent.ACTION_MAIN);
         intent.addCategory(Intent.CATEGORY_LAUNCHER);

         List<ResolveInfo> resolveInfos = pm.queryIntentActivities(intent, 0);
         for (ResolveInfo resolveInfo : resolveInfos) {
             String pkgName = resolveInfo.activityInfo.applicationInfo.packageName;
             if (pkgName.equalsIgnoreCase(context.getPackageName())) {
                 return resolveInfo.activityInfo.name;
             }
         }
         return null;
     }
         /* Listen to changes in unread messages counter and update icon badge*/
     public static class BadgeBroadcastReceiver extends BroadcastReceiver{
         public BadgeBroadcastReceiver(){}
         @Override
         public void onReceive(Context context, Intent intent) {
             int unreadCounter = intent.getIntExtra(LivePerson.ACTION_LP_UPDATE_NUM_UNREAD_MESSAGES_EXTRA, 0);
             NotificationUI.setBadge(context, unreadCounter);
         }
     }
     }
     ```

3. After the `handlePusherRegistration(MainActivity.this);` call added at the `init` stage, add the function to your messaging activity call to register to the pusher:

    ```java
    private void handlePusherRegistration(Context ctx) {
      Intent intent = new Intent(ctx, FirebaseRegistrationIntentService.class);
      ctx.startService(intent);
    }
    ```

4. After the `removeNotification();` call added at the `Showconversation` stage, add the following function to hide the push message when entering the conversation view:

    ```java
    private void removeNotification() {
      NotificationUI.hideNotification(this);
    }
    ```

#### Step 4. Implement a push handler

To handle a scenario when a push message is clicked, you need to implement a push handler on our messaging activity’s `onCreate` function.

1. At the bottom of your `onCreate` function, add:

    ```java
    handlePush(getIntent());
    ```

2. Add the following function into the messaging activity, which checks if the intent that opened the app came from a push notification. If it does, the function automatically directs the user to the conversation screen.

    ```java
    private void handlePush(Intent intent) {
      boolean isFromPush = intent.getBooleanExtra(NotificationUI.PUSH_NOTIFICATION, false);
      // Check if we came from Push Notification
      if (isFromPush) {
          clearPushNotifications();
          if (LivePerson.isValidState()){
            openActivity();
          } else {
            initActivityConversation();
          }
      }
    }
    ```

3. Add a messaging activity to clear all pushes once the conversation screen has been clicked:

    ```java
    private void clearPushNotifications() {
      ((NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE)).cancel(NotificationUI.NOTIFICATION_ID);
    }
    ```