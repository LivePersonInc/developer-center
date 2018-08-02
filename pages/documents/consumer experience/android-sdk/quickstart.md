---
title: Quick Start
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for Android

order: 10
permalink: android-quickstart.html

---

###  Prerequisites

To use the LivePerson Mobile App Messaging SDK, the following are required:

* LiveEngage account with messaging enabled, mobile app configured.

**Note**:

* For information on supported operating systems and devices, refer to [System Requirements](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements.pdf).
* For extra guidance regarding app configuration and SDK step by step usage, refer to the full [Using Live Person SDK Guide](https://developers.liveperson.com/android-integration-guide.html).


### Step 1: Integrate LivePerson Android SDK within your Project (Gradle)

1. In your project files in the left sidebar, locate Gradle Scripts > build.gradle (Module: app), then double-click the file to open it in the editor.

![Preview](https://raw.githubusercontent.com/LivePersonInc/developers-community/d8d203c35347a47d337033953670af34cc17afae/pages/documents/consumer%20experience/android-sdk/gradleapppic.png)

{:start="2"}
2. In the dependencies section, insert the following line:

```javascript
dependencies {
  implementation  'com.liveperson.android:lp_messaging_sdk:3.2.1'
}
```

**Example: Build.gradle (Module: app) file**

```javascript
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
  implementation  'com.liveperson.android:lp_messaging_sdk:3.2.1'
}
```

### Step 2: Code integration for basic deployment

1. Add the following permission to your app’s AndroidManifest.xml file:

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

* Vibrate on new incoming msg (required if enabled) :

```xml
<uses-permission android:name="android.permission.VIBRATE"/>
```

* For Photo Sharing (required if enabled) :

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

* For Audio Messaging (required if enabled) :

```xml
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

{:start="2"}
2. Add the following imports to your class imports section:

```swift
import com.liveperson.api.LivePersonCallback;
import com.liveperson.infra.InitLivePersonProperties;
import com.liveperson.infra.callbacks.InitLivePersonCallBack;
import com.liveperson.messaging.TaskType;
import com.liveperson.messaging.model.AgentData;
import com.liveperson.messaging.sdk.api.LivePerson;
```

{:start="3"}
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

Activity mode implements the toolbar that displays the agent name the consumer is talking with. The **'Is Typing’** indicator displays when the agent is typing.

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

[Android Screen Orentations](https://developer.android.com/guide/topics/manifest/activity-element.html#screen){:target="_blank"}


**In case of Activity mode** - override in your application's AndroidManifest.xml the ConversationActivity definition and set the desired screen orientation:

```xml
<activity
  android:name="com.liveperson.infra.messaging_ui.ConversationActivity"
  android:screenOrientation="your screen orientation"/>
```

### Step 3 (Optional): Initialization with Monitoring Params

<div class="important">
Important:
</div>
_To get the App key or appInstallationId, a new Conversation Source needs to be added on LiveEngage, for more information about it, contact your Account Team._

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
3. Using the **LivepersonMonitoring**, get the Engagement for the Use. This is needed to start a new conversation with a specific campaign, this call will use the MonitoringParams created on the previous step.

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
