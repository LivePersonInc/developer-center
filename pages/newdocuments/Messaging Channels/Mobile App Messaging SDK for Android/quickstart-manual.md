---
pagename: Quick Start-Manual
redirect_from:
  - android-quickstart-manual.html
Keywords:
sitesection: Documents
categoryname: Consumer Experience
documentname: Mobile App Messaging SDK for Android

order: 11
permalink: mobile-app-messaging-sdk-for-android-quick-start-manual.html

---

###  Prerequisites

To use the LivePerson Mobile App Messaging SDK, the following are required:

* LiveEngage account with messaging enabled and a mobile app configured.

* **Embeddable library for AAR**: Binary distribution of an Android Library Project (included in zip package)

*  **Installers**: Gradle (included in zip package)

**Note**:

* For information on supported operating systems and devices, refer to [System Requirements](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements.pdf).
* For extra guidance regarding app configuration and SDK step by step usage, refer to the full [Using Live Person SDK Guide](android-integration-guide-manual.html).

### Step 1: Download and unzip the SDK

Follow the steps below to download and unzip the SDK.

1. Download the latest Messaging SDK from the following link: [SDK Repository](https://github.com/LP-Messaging/Android-Messaging-SDK).

2. Extract the ZIP file to a folder on your computer.

  The downloaded package should contain the following three items:

  * LP_Messaging_SDK/lp_messaging_sdk - Module that should be added to your project. This module contains the following:

  * LivePerson.java - Main entry point for the Messaging SDK

  * Resources (.aars files)

  * SampleApp-Source - demonstrate how to use the Messaging SDK.

  * SampleApp-APK - sample app installation file.

### Step 2: Configure project settings to connect to the SDK

Follow the steps below to configure the project settings to connect to the SDK.

1. Import the downloaded lp_messaging_sdk module into your project.

    * In the Android Studio menu bar, select: **File** → **New** → **Import module**.

    * Navigate to the folder where you extracted the SDK project. Navigate to the lp_messaging_sdk module, and click **Finish**.

2. Add the following lines to the build.gradle of your app :

    * **compileSdkVersion** and **buildToolsVersion** (should be at least Version 23).

    * Add the following code under the Android section:

```javascript
repositories {
  flatDir {
    dirs project(':lp_messaging_sdk').file('aars')
  }
}
```

{:start="3"}
3. Under the Dependencies section, add the following line:

```javascript
compile project(':lp_messaging_sdk')
```


**Example: Build.gradle file**

```javascript
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


### Step 3: Code integration for basic deployment

1. Add the following permission to your app’s AndroidManifest.xml file:

```javascript
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

* Vibrate on new incoming msg (required if enabled) :

```javascript
<uses-permission android:name="android.permission.VIBRATE"/>
```

* For Photo Sharing (required if enabled) :

```javascript
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

2. Add the following imports to your class imports section:

```swift
import com.liveperson.api.LivePersonCallback;`
import com.liveperson.infra.InitLivePersonProperties;
import com.liveperson.infra.callbacks.InitLivePersonCallBack;
import com.liveperson.messaging.TaskType;
import com.liveperson.messaging.model.AgentData;
import com.liveperson.messaging.sdk.api.LivePerson;
```

3. Initialize the Messaging SDK

  You can initialize the SDK in your Activity before showing LivePerson's Activity/Fragment, but it is recommended to initialize the SDK once, in your app's Application class.

```swift
String brandID = "YourLivepersonAccountIdString";
String appID = "your app package name"
LivePerson.initialize(MainActivity.this, new InitLivePersonProperties(brandID, appID, new InitLivePersonCallBack() {
  @Override
  public void onInitSucceed() {

  }

  @Override
  public void onInitFailed(Exception e) {

  }
});
```


<table>
<thead>
  <tr>
    <th>Element</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>brandID</td>
    <td>Your LivePerson account ID. If you don’t have one, please contact your LivePerson representative.</td>
  </tr>
  <tr>
    <td>appID</td>
    <td>Your app id, used for registering LP pusher service.</td>
  </tr>
  <tr>
    <td>onInitSuccess</td>
    <td>Callback that indicates the init process has finished successfully. </td>
  </tr>
  <tr>
    <td>onInitFailed</td>
    <td>Callback that indicates the init process has failed.</td>
  </tr>
  </tbody>
</table>


_Example implementation:_


```swift
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
});
```

{:start="4"}
4. Show conversation screen.

The SDK supports two operation modes:

  * Activity mode

  * Fragment mode

**Activity mode**

Activity mode implements the toolbar that displays the agent name the consumer is talking with. The 'Is Typing’ indicator displays when the agent is typing.

To open conversation window in separate activity use the following. This will start a new conversation activity:

```swift
LivePerson.showConversation(getActivity(), LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
```

Using this method, the SDK implements the controls on the action bar.

**Fragment mode**

In fragment mode the SDK returns the conversation fragment to the caller that needs to be placed inside a container. Also, the caller is responsible for initializing the SDK and, if needed, implementing a toolbar or other indicators according to the provided SDK callbacks.

_**Note: Ensure that the init process finished successfully. These should be called from the onInitSucceed callback.**_

To open conversation window in a fragment: This returns a conversation fragment to be placed in a container in your activity:

```swift
LivePerson.getConversationFragment(LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
```

When using fragment mode, you should use the provided SDK callbacks in your app in order to implement functionalities such as menu items, action bar indications, agent name, and typing indicator.

**Fragment mode - Handle CSAT (feedback)**

In Fragment mode, there is an option to get notified of the CSAT screen state (**visible**/**invisible**).
**For example** - show different title on Toolbar, show a close csat button etc...

The container Activity (the Activity that hosts the fragment) needs to implement  ConversationFragmentCallbacks interface:

```swift
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


Once the CSAT screen is visible, **setFeedBackMode** will be called with **true** value, when the CSAT is not visible anymore (skip/submitted) - **setFeedBackMode** will be called with **false** value.

Example - how to use **ConversationFragmentCallbacks** (code from the container Activity)

```swift
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


### Screen Orientation

**In case of Fragment mode** - set the desired orientation in your container Activity definition in AndroidManifest.xml

[Android Screen Orentations](https://developer.android.com/guide/topics/manifest/activity-element.html#screen)


**In case of Activity mode** - override in your application's AndroidManifest.xml the ConversationActivity definition and set the desired screen orientation:

```javascript
<activity
  android:name="com.liveperson.infra.messaging_ui.ConversationActivity"
  android:screenOrientation="your screen orientation"/>
```

### Step 4 (Optional): Initialization with Monitoring Params

<div class="important">
To get the App key or appInstallationId, a new Conversation Source needs to be added on LiveEngage, for more information about it, contact your Account Team.
</div>

1. Initialize the Messaging SDK with Monitoring Params

  You can initialize the SDK in your Activity before showing LivePerson's Activity/Fragment, but it is recommended to initialize the SDK once, in your app's Application class.

```swift
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
});
```

{:start="2"}
2. Create **MonitoringParams**. The entry points and engagement attributes used here are dummies:

```swift
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
  jsonArray = new JSONArray("[\n" +
    "[\"type\": \"purchase\", \"total\": 20.0],\n" +
    "[\"type\": \"lead\",\n" +
    "\"lead\": [\"topic\": \"luxury car test drive 2015\",\n" +
    "\"value\": 22.22,\n" +
    "\"leadId\": \"xyz123\"]]\n" +
    "]");
} catch (JSONException e) {
  // Log Error
  Log.d(TAG, "Error Creating Engagement Attr :: " + e.getLocalizedMessage());
}
// Create Monitoring Params
MonitoringParams params = new MonitoringParams(null, entryPoints, engagementAttributes);
```

{:start="3"}
3. Using the **LivepersonMonitoring**, get the Engagement for the User. This is needed to start a new conversation with a specific campaign, this call will use the MonitoringParams created on the previous step.

```swift
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

{:start="4"}
4. Set up the ConversationViewParams with the Campaign Information.

```swift
// Create new ConversationViewParams
ConversationViewParams params = new ConversationViewParams();
// Set Campaign Info
params.setCampaignInfo(campaign);
// Set Mode
params.setReadOnlyMode(false);
```

{:start="5"}
5. Using the previously created ConversationViewParams to start a new Conversation:

```swift
// Show Conversation - Activity Mode
LivePerson.showConversation(MessagingActivity.this, authParams, params);

// or when using a fragment

// Show Conversation - Fragment Mode
mConversationFragment = (ConversationFragment) LivePerson.getConversationFragment(authParams, params);
```
