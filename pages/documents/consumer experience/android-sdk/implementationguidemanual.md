---
title: Using LivePerson SDK - Android - Manual
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for Android
level4: Appendix

order: 342
permalink: mobile-app-messaging-sdk-for-android-appendix-using-liveperson-sdk-android-manual.html

indicator: messaging
---

### Step 1 - Creating initial views

* In order to get some basic data from the user, let’s create some initial views on our main activity / an activity of your choosing (more data can be used in order to initialize the SDK, during this guide, we’ll use some basic name features only).

![initialview](img/initialview.png)

### Step 2 - Downloading and adding the SDK to our project

1. Download the latest Messaging SDK from the following link: [SDK Repository](https://github.com/LP-Messaging/Android-Messaging-SDK)

2. Extract the ZIP file to a folder on your computer.

3. The downloaded package should contain the following item:

LP_Messaging_SDK/lp_messaging_sdk - this is a Module that should be added to your project. This module contains the following:

1. LivePerson.java - Main entry point for the Messaging SDK

2. Resources (.aars files)

Drag the `lp_messaging_sdk` folder into your project folder OR add it as a module to your project from a different folder.

* File - > New -> Import Module

![Import Module](img/importmodule.png)

And then select the LivePerson SDK module

![Select Module](img/selectmodule.png)

### Step 3 - Gradle modifications

1. compileSdkVersion and buildToolsVersion (should be at least Version 23)

2. minSDKVersion should be at least 19

3. Add the following code under the Android section:

```java
repositories {
            flatDir {
                dirs project(':lp_messaging_sdk').file('aars')
              }
  }
```

{:start="4"}
4. Under the Dependencies section, add the following line:

```java
compile project(':lp_messaging_sdk')
```

**Build.gradle file example:**

```java
apply plugin: 'com.android.application'

    android {
    repositories {
        flatDir {
            dirs project(':lp_messaging_sdk').file('aars')
        }
    }
    compileSdkVersion 26
    buildToolsVersion '26.0.2'
    defaultConfig {
        applicationId "com.shaym.sdk28"
        minSdkVersion 19
        targetSdkVersion 26
        versionCode 1
        versionName "1.0"
        testInstrumentationRunner "android.support.test.runner.AndroidJUnitRunner"
        multiDexEnabled true

    }
    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}

dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
    androidTestCompile('com.android.support.test.espresso:espresso-core:2.2.2', {
        exclude group: 'com.android.support', module: 'support-annotations'
    })
    compile 'com.android.support.constraint:constraint-layout:1.0.2'
    compile 'com.google.firebase:firebase-messaging:11.6.0'
    compile 'com.google.firebase:firebase-core:11.6.0'


    testCompile 'junit:junit:4.12'
    //Liveperson SDK
    compile project(path: ':lp_messaging_sdk')
}
apply plugin: 'com.google.gms.google-services'
```


{:start="5"}
5. Make sure you have the following line written in your settings.gradle file:

```java
include ':lp_messaging_sdk'
```

### Step 4 - Manifest modifications

1. Add the following permission to your app’s AndroidManifest.xml file:

```java
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

Vibrate on new incoming msg (required if enabled):

```java
<uses-permission android:name="android.permission.VIBRATE"/>
```
For Photo Sharing (required if enabled):

```java
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

### Step 5- Liveperson Events

1. Intents Handler - In order to listen to LivePerson basic messaging events (via BroadcastReceiver) and respond via callback accordingly, we will have to add a class that will handle those events.

* **Create a class and name it - IntentsHandler (or any other name of your choosing)**

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

* **Create a function named** `registerToLivePersonEvents` and `init` the broadcast receiver we declared earlier:

```java
public void registerToLivePersonEvents(){
   createLivePersonReceiver();
   LocalBroadcastManager.getInstance(mContext.getApplicationContext())
           .registerReceiver(mLivePersonReceiver, LivePersonIntents.getIntentFilterForAllEvents());
}
```

* In this example we will listen to all events via the intentfilter shown above, but you can create your own specific intent filter as well.

* Create a function named `createLivePersonReceiver` and handle the events accordingly. This is a general example of handling most of the events. You can read more about LivePerson events [here](https://developers.liveperson.com/android-callbacks-index.html).

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

Following the function above, you will have to add a function that will act according to the specific use-case, for example:

```java
private void onAgentAvatarTapped(AgentData agentData) {
   showToast("on Agent Avatar Tapped - " + agentData.mFirstName + " " + agentData.mLastName);
}
```

### Step 6- Messaging activity

1. Create a messaging activity that will launch the activity session. In this tutorial, we will demonstrate a basic initialization of the LivePerson SDK in *Activity mode*, though you can also initialize it in *Fragment mode* and use different features while doing so.

2. **Basic members:**

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

3. **onCreate:**

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


4. **init Button function:**

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

5. **init Activity conversation:**

A few notes on this step:

* In this step we will initialize the SDK, but only if we're not already in a `valid` state (we checked for that in the previous section).

* We are using the brandID and appID which we declared in the top of this class.

* If the initialization is a success, we will call the `openActivity` method

* GCMRegistration is a service we will implement in order to use push notifications, we will touch on that later on in this tutorial.

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

{:start="6"}
6. **The openActivity function**

Here is where we use LivePerson SDK’s `showConversation` method. In this example, we aren't using an authentication parameter, though you can definitely use one if needed (using the `setPhoneNumber` field).

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

### Step 7- Configuring Push Notifications

**Firebase Configuration**

![Firebase Config](img/firebase1.png)

1. Enter [Google Firebase console ](https://firebase.google.com/)

2. Enter your app’s package name and click on ‘Register App’

![Register App](img/registerapp.png)

![Register App](img/registerapp2.png)

{:start="3"}
3. Download the JSON config file and drag it into your project level in Android studio.

4. Follow the gradle instructions below (make sure there are no duplicates), and click ‘Finish’.

![Gradle Setup](img/gradle.png)

**Add the following lines in your app.gradle dependencies section:**

```java
compile 'com.google.firebase:firebase-messaging:11.6.0'
compile 'com.google.firebase:firebase-core:11.6.0'
```

**Change the 'multiDexEnabled' under the android tag to true**

```java
multiDexEnabled true
```

### LiveEngage Configuration

1. Connect to your account via LiveEngage, click on the campaigns tab. Then choose 'Data Sources'

![Data Sources](img/androiddatasources.jpg)

![Data Sources Step 2](img/androiddatasources2.jpg)

{:start="2"}
2. Click Manage, on the right of 'Mobile app management' tab

{:start="3"}
3. Click Add new, in order to add your app to the mobile campaign

![App Key](img/appkey.png)

{:start="4"}
4. Fill in your mobile package name under mobile app name, Google Firebase Legacy API key under push notification API key.

Then click 'Create app'

![Create App](img/addnewapp.png)

{:start="5"}
5. Package Name  (From the firebase console):

![Firebase General](img/firebasegeneral.jpg)

{:start="6"}
6. Legacy Key:

![Firebase Key](img/firebasekey.png)

**Project Configuration**

1. Add the following services + receiver under the application tag:

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


**Note**: After you've added the services you will have to create the classes to fit those services. Create new classes called: MyFirebaseMessagingService, MyFirebaseInstanceIDService, Firebase registrationintentservice, NotificationUI (or choose your own names for these classes).

**Change the path of the services according to the classes you just created.**

{:start="2"}
2. Add the following permission to your app’s AndroidManifest.xml file:

```java
<uses-permission android:name="com.google.android.c2dm.permission.RECEIVE" />
<uses-permission android:name="android.permission.WAKE_LOCK" />
```

{:start="3"}
3. Following the `handleGCMRegistration(MainActivity.this);` call we added at the `init` stage, add the following function to your messaging activity call in order to register to the pusher:

```java
private void handleGCMRegistration(Context ctx) {
   Intent intent = new Intent(ctx, FirebaseRegistrationIntentService.class);
   ctx.startService(intent);
}
```

{:start="4"}
4. Following the `removeNotification();` call we added at the `Showconversation` stage, add the following function in order to hide the push message when entering the conversation view:

```java
private void removeNotification() {
   NotificationUI.hideNotification(this);
}
```

{:start="5"}
5. NotificationUI is the class that will enable us to present and handle the push to the UI.

Here is a simple example:

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

**Services Classes**

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

public class MyFirebaseMessagingService extends FirebaseMessagingService {

   private static final String TAG = "MyFirebaseMsgService";

```java
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

**Handle Push**

In order to handle a scenario when a push message is clicked on, we will have to implement a push handler on our messaging activity’s `onCreate` function.

Add the following call into the bottom of your `onCreate` function to achieve this:

```java
handlePush(getIntent());
```

Then, add the following function into the messaging activity. This will check if the intent which opened the app came from a push notification. If it did, the function will automatically direct the user to the conversation screen.

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


You should also add to your messaging activity in order to clear all pushes once the conversation screen has been clicked:

```java
private void clearPushNotifications() {
   ((NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE)).cancel(NotificationUI.NOTIFICATION_ID);
}
```
