---
pagename: Quick Start
redirect_from:
  - android-quickstart.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android

order: 10
permalink: mobile-app-messaging-sdk-for-android-quick-start.html

---

Use this Quick Start guide to get you up and running with a project powered by LivePerson. When done, you'll be able to send messages between an Android device and LiveEngage.  

In this guide, you have the option to install the Mobile App Messaging SDK automatically via a Gradle file or manually. 

### Prerequisites

- **LiveEngage account** with messaging enabled and the mobile app configured.  You can get the number and login information from your LivePerson account team. 
- Read or are familiar with the **supported operating systems and devices**.  For more information, see the [Systems Requirements and Language Support](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements.pdf) guide. 
- **For manual installation only:** 
   - **Embeddable library for AAR:** Binary distribution of an Android Library Project (included in the download)
   - **Installers:** Gradle (included in the download)

<div class="important">
For guidance on app configuration and SDK step-by-step usage, see the [Using LivePerson SDK - Android](https://developers.liveperson.com/mobile-app-messaging-sdk-for-android-appendix-using-liveperson-sdk-android-manual.html) guide.
</div>

### Step 1: Install the SDK into your project
You can install LivePerson Mobile App Messaging SDK using a couple of different methods:

- Automatically using Gradle
- Manually 

#### Option 1: Automatically using Gradle
You can use Gradle, to scale your projects effortlessly. 

1. In your project, locate and double-click **Gradle Scripts > build.gradle (Module: app)**.
   [image]
2. In the dependencies section, insert:
   ```gradle
   dependencies {
     implementation  'com.liveperson.android:lp_messaging_sdk:3.2.1'
   }
   ```
   **Example of the build.gradle (Module: app) file**
   ```gradle
   apply plugin: 'com.android.application'

   android { 
     compileSdkVersion 26
     defaultConfig {
       applicationId "com.shaym.liveperson.androidsdk"
       minSdkVersion 19
       targetSdkVersion 26
       versionCode 1
       versionName "1.0"
       testInstrumentationRunner "android.support.test.runner.AndroidJUnitRunner"
     }
     buildTypes {
       release {
         minifyEnabled false
         proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
       }
     } 
   }

   dependencies {
     implementation fileTree(dir: 'libs', include: ['*.jar'])
     implementation 'com.android.support:appcompat-v7:26.1.0'
     implementation 'com.android.support.constraint:constraint-layout:1.0.2'
     testImplementation 'junit:junit:4.12'
     androidTestImplementation 'com.android.support.test:runner:1.0.1'
     androidTestImplementation 'com.android.support.test.espresso:espresso-core:3.0.1'
     // LivePerson SDK
     implementation  'com.liveperson.android:lp_messaging_sdk:3.5.0'
   }
   ```
   
#### Option 2: Manually 
1. [Download](https://github.com/LP-Messaging/Android-Messaging-SDK) the latest SDK package.
2. Extract the file to a folder on your computer. The package contains all the files you need to add to your project as well as a sample app that demonstrates how to use the SDK. 
3. In your Android Studio project, go to **File > New > Import module**. 
4. Navigate to the folder where you extracted the SDK, select the **lp_messaging_sdk** module, and click **Finish**. 
5. Add the following to the build.gradle of your app:
   - **compileSdkVersion**
   - **buildToolsVersion**
   <div class="important">
   The version should be at least Version 23.
   </div>
6. Under the Android section, add:
   ```gradle
   repositories {
     flatDir {
       dirs project(':lp_messaging_sdk').file('aars')
     }
   }
7. Under the Dependencies section, add:
   ```gradle
   compile project(':lp_messaging_sdk')
   ```
   **Example of the build.gradle file**
   ```gradle
   apply plugin: 'com.android.application'
   android {
     compileSdkVersion 24
     buildToolsVersion "24.0.3"

     repositories {
       flatDir {
         dirs project(':lp_messaging_sdk').file('aars')
       }
     }

     defaultConfig {
       applicationId "xxx"
       minSdkVersion xx
       targetSdkVersion xx
       versionCode 1
       versionName "1.0"
     }
     buildTypes {
       release {
         minifyEnabled false
         proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
       }
     }
   }

   dependencies {   
     compile project(':lp_messaging_sdk')
   }

   ```

### Step 2: Code integration for basic deployment

1. Add the following permissions to your app’s AndroidManifest.xml file:

   ```xml
   <uses-permission android:name="android.permission.INTERNET" />
   <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
   ```

   If you have any of these features enabled, you must add the following to your app's AndroidManifest.xml file:

   * **Vibrate on new incoming msg**

      ```xml
      <uses-permission android:name="android.permission.VIBRATE"/>
      ```

   * **Photo Sharing**

      ```xml
      <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
      <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
      ```

   * **Audio Messaging**

      ```xml
      <uses-permission android:name="android.permission.RECORD_AUDIO" />
      <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
      <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
      ```

2. Add the following imports to your class imports section:

   ```java
   import com.liveperson.api.LivePersonCallback;
   import com.liveperson.infra.InitLivePersonProperties;
   import com.liveperson.infra.callbacks.InitLivePersonCallBack;
   import com.liveperson.messaging.TaskType;
   import com.liveperson.messaging.model.AgentData;
   import com.liveperson.messaging.sdk.api.LivePerson;
   ```

### Step 3: Initialize the Messaging SDK 
1. In your app's Application class, add:

   ```java
   String brandID = "YourLivepersonAccountIdString";
   String appID = "your app package name"
    LivePerson.initialize(MainActivity.this, new InitLivePersonProperties(brandID, appID, new InitLivePersonCallBack() {
     @Override
     public void onInitSucceed() {
     }

     @Override
     public void onInitFailed(Exception e) {
     }
   }));
   ```
   
   |Element  |Description  |
   |---------|---------|
   |brandID     |Your LivePerson account ID. If you don’t have one, please contact your LivePerson representative.         |
   |appID     |Your app id, used for registering LP pusher service.         |
   |onInitSuccess     |Callback that indicates the init process has finished successfully.         |
   |onInitFailed     |Callback that indicates the init process has failed.         |


   **Example implementation:**


   ```java
   LivePerson.initialize(context, new InitLivePersonProperties(brandID, appID, new  InitLivePersonCallBack() {
     @Override
     public void onInitSucceed() {
       initFragment();
       LivePerson.setUserProfile(appId, firstName, lastName, phone);
     }
     @Override
     public void onInitFailed(Exception e) {
       Toast.makeText(MainActivity.this, "Init Failed", Toast.LENGTH_SHORT).show();
     }
   }));
   ```
   
   <div class="notice">Make sure that the init process, from the onInitSucceed callback, finished successfully.</div>

### Step 4: Show conversation screen
You can use either [Activity mode]() or [Fragment mode]() to show the conversation screen. 

#### Activity mode
**Activity mode** implements the toolbar that displays the agent name for the conversation. When the agent types, the *'Is Typing’* indicator displays.

   ```java
   LivePerson.showConversation(getActivity(), LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
   ```
   
#### Fragment mode

Fragment mode returns the conversation fragment to the caller to place inside a container. The caller is also responsible for initializing the SDK, and if needed, implementing a toolbar or other indicators according to the provided SDK callbacks. 

1. Open a conversation window in a fragment, placing it in a container in your activity, add the following code: 

 ```java
 LivePerson.getConversationFragment(LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
 ```

 <div class="important">When using fragment mode, you must use the provided SDK callbacks in your app to implement functionalities such as menu items, action bar indications, agent name, and typing indicator.</div>

2. Show CSAT notifications. For example, you can show a different title on the toolbar, show a button to close CSAT, and so on. 

   <div class="important">The container Activity that hosts the fragment must implement ConversationFragmentCallbacks.</div>

   ```java
   public interface ConversationFragmentCallbacks {
     void setFeedBackMode(boolean on, IFeedbackActions actions); 

     // boolean on - Notify whether feedback (csat) screen is visible or dismisses.
     // IFeedbackActions actions - provides set of actions for the feedback screen.
     void onSurveySubmitted(IFeedbackActions actions);
     void setSecureFormMode(boolean on, String formTitle) {}
   }

   // IFeedbackActions actions - provides set of actions for the feedback screen.
   public interface IFeedbackActions {
     void closeFeedBackScreen();

     //close the screen, for example- after submitting the csat. When showing "thank you" screen.

     void skipFeedBackScreen();

     //skip and close the whole feedback process.
   }
   ```

   When visible, **setFeedbackMode** is called with the **true** value.  When not visible (skip/submitted), **setFeedBackMode** is called with the **false** value. 

   Example - how to use **ConversationFragmentCallbacks** (code from the container Activity)

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

### Step 5: Set the screen orientation.

   **For Activity mode** - override in your application's AndroidManifest.xml the ConversationActivity definition and set the desired screen orientation:

   ```xml
   <activity
     android:name="com.liveperson.infra.messaging_ui.ConversationActivity"
     android:screenOrientation="your screen orientation"/>
   ```

   **For Fragment mode** - set the desired orientation in your container Activity definition in AndroidManifest.xml

   [Android Screen Orentations](https://developer.android.com/guide/topics/manifest/activity-element.html#screen)



### Step 6 (Optional): Initialization with Monitoring Params

<div class="important">
To get the App key or appInstallationId, a new Conversation Source needs to be added on LiveEngage, for more information about it, contact your Account Team.
</div>

1. Initialize the Messaging SDK with Monitoring Params in your app's Application class.

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
   jsonArray = new JSONArray("[{\"type\": \"purchase\", \"total\": \"20.0\"},{\"type\": \"lead\",\"lead\": {\"topic\": \"luxury car test drive 2015\",\"value\": \"22.22\",\"leadId\": \"xyz123\"}}]")
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

5. Start a new Conversation:

   ```java
   // Show Conversation - Activity Mode
   LivePerson.showConversation(MessagingActivity.this, authParams, params);
   
   // or when using a fragment

   // Show Conversation - Fragment Mode
   mConversationFragment = (ConversationFragment) LivePerson.getConversationFragment(authParams, params);
   ```
 
