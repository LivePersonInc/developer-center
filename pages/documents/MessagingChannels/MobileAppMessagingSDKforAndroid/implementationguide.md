---
pagename: Use the LivePerson SDK - Android
redirect_from:
  - android-integration-guide.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Appendix

order: 341
permalink: mobile-app-messaging-sdk-for-android-appendix-use-the-liveperson-sdk-android.html

indicator: messaging
---

### Prerequisites
It is important that you have followed the [Quick Start guide](/mobile-app-messaging-sdk-for-android-quick-start.html).  If not, make sure to install the LivePerson Mobile App Messaging SDK before proceeding. 

### Step 1 - Create initial views

In this step, you'll use some basic name features to create some initial views on our main activity / an activity of your choosing. 

![initialview](img/initialview.png)


### Step 2 - Add enabled features to your AndroidManifest.xml file
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

### Step 3 - Add Liveperson events
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

   **Note:** Here we provide you with a wide example of handling most events. For more information, see [Liveperson events](android-callbacks-index.html).

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

### Step 4 - Add messaging activity

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

#### init Button function

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
// Push - later in this tutorial
            removeNotification();
            initActivityConversation(); // The conversation activity
        }
    }
});
}
```

#### init Activity conversation
Here, you initialize the SDK with the brandID and appID, but only if you're not already in a `valid` state, which was checked in a previous section. 

**TIP** If the initialization succeeds, the `openActivity` method is called.

```java
private void  initActivityConversation() {

    LivePerson.initialize(MainActivity.this, new InitLivePersonProperties(brandID, appID, new InitLivePersonCallBack() {
        @Override
        public void onInitSucceed() {
            // you can't register pusher before initialization
            handleGCMRegistration(MainActivity.this);
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

### Step 5 - Configure push notifications


#### Firebase Configuration

![Firebase Config](img/firebase1.jpg)

1. Got to [Google Firebase console](https://firebase.google.com/).

2. Enter your app’s package name and click **Register App**.

   ![Register App](img/registerapp.png)

   <p><br> </p>

   ![Register App](img/registerapp2.png)

3. Download the JSON config file and drag it into your project level in Android studio.

4. Add Firebase to your app using the Gradle instruction:

   ![Gradle Setup](img/gradle.png)

   **Add the following lines in your app.gradle dependencies section:**

    ```java
    compile "com.google.firebase:firebase-messaging:11.6.0"
    compile "com.google.firebase:firebase-core:11.6.0"
    ```

   **Change the 'multiDexEnabled' under the android tag to true:**

    ```java
    multiDexEnabled true
    ```
5.  Make sure you have no duplicates and then click **Finish**.

#### LiveEngage Configuration

1. Connect to your account via LiveEngage, click on the **Campaigns** tab, and then choose **Data Sources**.

   ![Data Sources](img/androiddatasources.jpg)

   <p><br> </p>  

   ![Data Sources Step 2](img/androiddatasources2.png)


2. On the Mobile app management tab, click **Manage**.

3. Click **Add new** to add your app to the mobile campaign.

4. Enter your mobile package name and the Google Firebase Legacy API key, then click **Create app**.

   **Tip:** You can find the **Package Name** on the Firebase console under **General**:

   ![Firebase General](img/firebasegeneral.jpg)

   You can find the **Legacy Key** on the Firebase console under **Cloud Messaging**:

   ![Firebase Key](img/firebasekey.jpeg)

#### Project Configuration

1. Under the **application** tag, add the following services + receiver:

    ```java
    <service
            android:name=".push.fcm.MyFirebaseMessagingService">
            <intent-filter>
                <action android:name="com.google.firebase.MESSAGING_EVENT"/>
            </intent-filter>
        </service>
        <!--This service is used to receive and register the token when it is refreshed-->
        <service
            android:name=".push.fcm.MyFirebaseInstanceIDService">
            <intent-filter>
                <action android:name="com.google.firebase.INSTANCE_ID_EVENT"/>
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

2. After you've added the services, you need to create the classes to fit those services. Create new classes called: 

   - MyFirebaseMessagingService 
   - MyFirebaseInstanceIDService
   - Firebase registrationintentservice
   - NotificationUI (or choose your own names for these classes)  

3. Change the path of the services according to the classes you created.

4. Add the following permission to your app’s AndroidManifest.xml file:

    ```java
    <uses-permission android:name="com.google.android.c2dm.permission.RECEIVE" />
    <uses-permission android:name="android.permission.WAKE_LOCK" />
    ```
5. After the `handleGCMRegistration(MainActivity.this);` call added at the `init` stage, add the function to your messaging activity call to register to the pusher:

    ```java
    private void handleGCMRegistration(Context ctx) {
    Intent intent = new Intent(ctx, FirebaseRegistrationIntentService.class);
    ctx.startService(intent);
    }
    ```

6. After the `removeNotification();` call added at the `Showconversation` stage, add the following function to hide the push message when entering the conversation view:

    ```java
    private void removeNotification() {
    NotificationUI.hideNotification(this);
    }
    ```

   **NotificationUI** presents and handles the push to the UI.  

    **Simple example:**  

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
        /* Listen to changes in unread messages counter and updating icon badge*/
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

#### Services Classes

The following services are an extension of Google’s Firebase cloud messaging services, you can read more about them [here](https://firebase.google.com/docs/cloud-messaging/).

`FirebaseRegistrationIntentService`

We call this service from our messaging activity when we `init` the SDK and want to register for the pusher for the first time (or every time we `init`), here is a simple example:

```java
public class FirebaseRegistrationIntentService extends IntentService {

   public static final String TAG = FirebaseRegistrationIntentService.class.getSimpleName();

   public FirebaseRegistrationIntentService() {
       super(TAG);
   }

  @Override
   protected void onHandleIntent(Intent intent) {
       Log.d(TAG, "onHandleIntent: registering the token to pusher");
       String token = FirebaseInstanceId.getInstance().getToken();
       // Register to Liveperson Pusher
       String account = "82055668";
       String appID = "com.shaym.sdk28";
       LivePerson.registerLPPusher(account, appID, token);
   }
}
```

Enter your account number as account, and your package name as appID in order to register to the pusher, as seen in the example above. Notice the token we are getting from the `FirebaseInstanceId`. This is sent to the LivePerson pusher and integrated into your LivePerson account.

`MyFirebaseMessagingService`

This service is always running in the background and handles incoming messages, here's a simple example:

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
           String account = "82055668";
           PushMessage message = LivePerson.handlePushMessage(this, remoteMessage.getData(), account, false);

           //Code snippet to add push UI notification
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

`MyFirebaseInstanceIDService`

This is a pretty simple service that will be called every time Google’s token is refreshed so you can re-register to the push service.

Simple example:

```java
public class MyFirebaseInstanceIDService extends FirebaseInstanceIdService {

  private static final String TAG = "MyFirebaseIIDService";

  @Override
  public void onTokenRefresh() {
     // Get updated InstanceID token.
     Intent intent = new Intent(this, FirebaseRegistrationIntentService.class);
     startService(intent);

  }
}
```

#### Handle Push

To handle a scenario when a push message is clicked, you need to implement a push handler on our messaging activity’s `onCreate` function.

1. At the bottom of your `onCreate` function, add:

    ```java
    handlePush(getIntent());
    ```

2. Add the following function into the messaging activity, which checks if the intent that opened the app came from a push notification. If it does, the function automatically directs the user to the conversation screen.

    ```java
    private void handlePush(Intent intent) {
    boolean isFromPush = intent.getBooleanExtra(NotificationUI.PUSH_NOTIFICATION, false);
    //Check if we came from Push Notification
    if (isFromPush) {
        clearPushNotifications();
                if (LivePerson.isValidState()){
                    openActivity();
                }
                else
                        initActivityConversation();
    }
    }
    ```

3. Add a messaging activity to clear all pushes once the conversation screen has been clicked:

    ```java
    private void clearPushNotifications() {
    ((NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE)).cancel(NotificationUI.NOTIFICATION_ID);
    }
    ```
