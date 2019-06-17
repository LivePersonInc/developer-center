---
pagename: Android Quick Start
redirect_from:
  - android-quickstart.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android

order: 11
permalink: mobile-app-messaging-sdk-for-android-quick-start.html

---

The LivePerson SDK provides brands with a secure way to foster connections with their customers and increase app engagement and retention.

Use this Quick Start guide to get you up and running with a project powered by LivePerson. When done, you'll be able to send messages between an Android device and LiveEngage.



### Prerequisites

- Followed the [Getting Started Guide](before-you-get-started-let-s-get-started.html) to create a LiveEngage account, retrieve your domain, authorize API calls, and authenticate with LiveEngage.  
- [Latest version](https://developer.android.com/studio) of **Android Studio**. 
- [Latest version](https://gradle.org/install/) of **Gradle**.


### Step 1: Install the Messaging SDK into your project
You can install the Mobile App Messaging SDK using a couple of different methods:

* [Automatically add the SDK files using Gradle](#option-1-automatically-add-the-sdk-files-using-gradle)

* [Manually copy the SDK files to your project](#option-2-manually-copy-the-sdk-files-to-your-project)

<br/>
#### Option 1: Automatically add the SDK files using Gradle

You can use Gradle, an automation tool, to scale your projects effortlessly. 

1. In your project, locate and double-click **Gradle Scripts > build.gradle (Module: app)**.
   
   ![Preview](https://raw.githubusercontent.com/LivePersonInc/developers-community/d8d203c35347a47d337033953670af34cc17afae/pages/documents/consumer%20experience/android-sdk/gradleapppic.png)  

2. In the **dependencies** section, add:
   ```java
   dependencies {
     implementation  "com.liveperson.android:lp_messaging_sdk:3.7.0"
   }
   ```

   **Example: Build.gradle (Module: app) file**

   ```java
   apply plugin: "com.android.application"

   android {
       compileSdkVersion 26
       defaultConfig {
       applicationId "com.mybrand.app"
       minSdkVersion 19
       targetSdkVersion 27
       versionCode 1
       versionName "1.0"
       }
       buildTypes {
           release {
               minifyEnabled false
               proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
           }
       }
   }

   dependencies {
       implementation fileTree(dir: "libs", include: ["*.jar"])
       implementation "com.android.support:appcompat-v7:26.1.0"
       implementation "com.android.support.constraint:constraint-layout:1.0.2"
       testImplementation "junit:junit:4.12"
       androidTestImplementation "com.android.support.test:runner:1.0.1"
       androidTestImplementation "com.android.support.test.espresso:espresso-core:3.0.1"
       // LivePerson SDK
       implementation  "com.liveperson.android:lp_messaging_sdk:3.7.0"
   }
   ```

#### Option 2: Manually copying the SDK files to your project

1. [Download](https://github.com/LP-Messaging/Android-Messaging-SDK) the latest SDK package.
2. Extract the file to a folder on your computer. The package contains all of the files you need to add to your project. Also in the package, you get a sample app that demonstrates how to use the SDK.
3. In your Android Studio project, go to **File > New > Import module**.
4. Navigate to the folder where you extracted the SDK, select the **lp_messaging_sdk module**, and then click **Finish**. 
5. In your build.gradle of your app, and in the android section, make sure the *compileSdkVersion* is at least version **26**:
   ```java
   android {
      compileSdkVersion 26
      buildToolsVersion "26.0.0"
   repositories {
     	flatDir {
       	   dirs project(":lp_messaging_sdk").file("aars")
      }
   }
   ```
6. In the **defaultConfig** section, make sure the *minSDKVersion* is set **19**:
   ```java
   defaultConfig {
       applicationId "com.mybrand.app"
       minSdkVersion 19
       targetSdkVersion 27
       versionCode 1
       versionName "1.0"
   testInstrumentationRunner "android.support.test.runner.AndroidJUnitRunner"
   }
   ```
7. In the **dependencies** section, add:
   ```java
   compile project(":lp_messaging_sdk")
   ```

   **Build.gradle file example:**
   ```java
   apply plugin: "com.android.application"

   android {
       repositories {
           flatDir {
               dirs project(":lp_messaging_sdk").file("aars")
           }
       }
      compileSdkVersion 26
      buildToolsVersion "26.0.0"
       defaultConfig {
           applicationId "com.mybrand.app"
           minSdkVersion 19
           targetSdkVersion 27
           versionCode 1
           versionName "1.0"
           testInstrumentationRunner "android.support.test.runner.AndroidJUnitRunner"
           multiDexEnabled true

       }
       buildTypes {
           release {
               minifyEnabled false
               proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
           }
       }
   }

   dependencies {
       compile fileTree(dir: "libs", include: ["*.jar"])
       androidTestCompile("com.android.support.test.espresso:espresso-core:2.2.2", {
           exclude group: "com.android.support", module: "support-annotations"
       })
       compile "com.android.support.constraint:constraint-layout:1.0.2"
       compile "com.google.firebase:firebase-messaging:11.6.0"
       compile "com.google.firebase:firebase-core:11.6.0"


       testCompile "junit:junit:4.12"
       //Liveperson SDK
       compile project(path: ":lp_messaging_sdk")
   }

   apply plugin: "com.google.gms.google-services"
   ```

8. In your **settings.gradle** of your app, add:
   ```java
   include ":lp_messaging_sdk"
   ```

### Step 2: Integrate code for basic deployment

1. Add permissions to your app’s AndroidManifest.xml file:

   ```xml
   <uses-permission android:name="android.permission.INTERNET" />
   <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
   ```

2. Add imports to your class imports section:

   ```java 
   import com.liveperson.api.LivePersonCallback;
   import com.liveperson.infra.InitLivePersonProperties;
   import com.liveperson.infra.callbacks.InitLivePersonCallBack;
   import com.liveperson.messaging.TaskType;
   import com.liveperson.messaging.model.AgentData;
   import com.liveperson.messaging.sdk.api.LivePerson;
   ```

### Step 3: Initialize the Messaging SDK 

Before you can show a conversation, you must initialize the Messaging SDK.  

{:.important}
If you want to use the Monitoring API, you must [initialize the Messaging SDK with Monitoring Params](mobile-app-messaging-sdk-for-android-configure-the-android-sdk.html#initialize-the-sdk-with-monitoring-params).  

1. **Set your app ID and view controller.** Provide your `APP_ID` as a string your application's class.
   
   ```java
   private static final String APP_ID = "com.mybrand.app";

   @Override
   protected void onCreate(Bundle savedInstanceState) {
       super.onCreate(savedInstanceState);
       setContentView(R.layout.activity_main);
   }
   ```

2. **Select your choice of authentication** for initializing the SDK instance.

   For more details on Code Flow and Implicit Flow for the Mobile SDK, see [How It Works](mobile-sdk-and-web-authentication-how-it-works.html#sign-on-flow-mobile-sdk-code-flow). 

   - **[Code Flow](mobile-sdk-and-web-authentication-how-it-works.html#sign-on-flow-mobile-sdk-code-flow)** (authenticated) 

     The LivePerson back-end verifies the authentication token sent by the SDK with your system servers. If the key cannot be verified on your company’s backend servers, this call fails.

     ```java
     LPAuthenticationParams().setAuthKey("yourAuthCode").
     ```

     **Tip:** Alternatively, when using this method, you can also set a special redirect URL when authenticating by calling:

     ```java
     lpAuthenticationParams.setHostAppRedirectUri("yourRedirectUrl")
     ```

   - **[Implicit Flow](mobile-sdk-and-web-authentication-how-it-works.html#sign-on-flow-mobile-sdk-implicit-flow)** (authenticated)  

      ```java
      LPAuthenticationParams().setHostAppJWT("yourJwt")
      ```

      Once the Authentication key expires, you get notified with a callback / local intent [`void onTokenExpired()`](android-callbacks-index.html#token-expired).

      To re-connect with a new Authentication key, use [`reconnect(LPAuthenticationParams lpAuthenticationParams)`](android-methods.html#reconnect)


      {:.important}
      Errors while trying to connect uses callback: `void onError(TaskType type, String message);`

   - **[Unauth Flow](mobile-app-messaging-sdk-for-android-advanced-features-unauthenticated-in-app-messaging.html)**

     ```java
      String brandID = "53949244";
      String appInstallID = "46bcf782-feee-490d-861d-2b5feb4437c8";
     ```

   - **Signup Flow**  

     ```java
     String brandID = "62219232";
     ```


3. **Show the conversation view.** If your system implementation involves an authentication step, you must call the `showConversation` method provided by the LPMessagingSDK instance. It pushes a new navigation stack containing the conversation view. 

   Choose an authentication method:

   * **Activity mode** - Implements the toolbar that displays the agent name to the consumer. The 'Is Typing' indicator displays when the agent is typing.

      Start a new conversation activity to open the conversation window in a separate activity:

      ```java
      LivePerson.showConversation(getActivity(), LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
      ```

      The SDK implements the controls on the action bar.


   * **Fragment mode**  - Attaches the returned fragment to a container in your activity.  The caller, placed inside a container, receives the conversation fragment from the SDK.  Also, the caller is responsible for initializing the SDK and, if needed, implementing a toolbar or other indicators according to the provided SDK callbacks.

      {:.notice}
      Make sure that the init process, from the `onInitSucceed`callback, finished successfully.

      Open conversation window in a fragment to return a conversation fragment and place it in a container in your activity:

      ```java
      LivePerson.getConversationFragment(LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
      ```

      **Tip.** When using fragment mode, you could use the provided SDK callbacks in your app to implement functionalities such as menu items, action bar indications, agent name, and typing indicator.

   * **Fragment mode - Handle CSAT (feedback)**  - Implements notifications of the CSAT screen state (**visible**/**invisible**).  For example, you can show a different title on the toolbar or show a close CSAT button. 

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


      Once the CSAT screen is visible, **setFeedBackMode** will be called with **true** value, when the CSAT is not visible anymore (skip/submitted) - **setFeedBackMode** will be called with **false** value.

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


4. **Initialize your application.**  We have provided examples to use to help you get started. The demo account has basic features available for demonstrating the Conversational Commerce experience in the LiveEngage console.


   - **Code Flow**
     ```java
     public void startCodeFlow(View v) {
         String brandID = "62219232";
         final String authCode = "k16336";
         LivePerson.initialize(this, new InitLivePersonProperties(brandID, APP_ID, new InitLivePersonCallBack() {
             @Override
             public void onInitSucceed() {
                 LPAuthenticationParams lpAuthenticationParams = new LPAuthenticationParams(LPAuthenticationParams.LPAuthenticationType.AUTH);
                 lpAuthenticationParams.setAuthKey(authCode);
                 LivePerson.showConversation(MainActivity.this, lpAuthenticationParams, new ConversationViewParams());
             }

             @Override
             public void onInitFailed(Exception e) {
             }
         }));
     }
     ```
   - **Implicit Flow**
   
     ```java
     public void startImplicitFlow(View v) {
         String brandID = "42391995";
         final String jwt = "eyJhbGciOiJSUzI1NiJ9.eyAgInN1YiI6ICJoZWxsbyIsICAiaXNzIjogImh0dHBzOi8vTFAtQXV0aC5jb20iLCAgImV4cCI6MTU1Mzc5NDAyMSwgICJpYXQiOjE1NTM3OTM0MjF9.GP0iCe1k3aQbWHp-FYKhpfK-MZqktQ8pByTTF5lAHTelCyDAxhgHyMIq5J9mJnSoIdTlUbmscRHpy2MCop-AlYx5Sz66y1aX38AD8Rat1k_SnbPNbvbEysomb_SjxZ3uleN_OCzrSqGJrLXP6yIN2UiuuvKM62i-e-aQVIWzIXWMxjgmH9n_ZUOkgq_0jY3Me8r78dKsitc-jvzGzbasv81u40fR-7Y-ViOZliFOLjVBl2VWCbgcrGerLUyWVJQW69Hn3TlvvVpSVZk-IUU8hpYorcItIb-XNV2mOVkuZmzlGo7a1nIhJCCWzP5qaQvCCecSHTTHbcROwwE7dk6vKg";
         LivePerson.initialize(this, new InitLivePersonProperties(brandID, APP_ID, new InitLivePersonCallBack() {
             @Override
             public void onInitSucceed() {
                 LPAuthenticationParams lpAuthenticationParams = new LPAuthenticationParams(LPAuthenticationParams.LPAuthenticationType.AUTH);
                 lpAuthenticationParams.setHostAppJWT(jwt);
                 LivePerson.showConversation(MainActivity.this, lpAuthenticationParams, new ConversationViewParams());
             }

             @Override
             public void onInitFailed(Exception e) {
             }
         }));
     }
     ```

   - **Unauth Flow**

     ```java
     public void startUnauthFlow(View v) {
         String brandID = "53949244";
         String appInstallID = "46bcf782-feee-490d-861d-2b5feb4437c8";
         final MonitoringInitParams monitoringInitParams = new MonitoringInitParams(appInstallID);
         LivePerson.initialize(this, new InitLivePersonProperties(brandID, APP_ID, monitoringInitParams, new InitLivePersonCallBack() {
             @Override
             public void onInitSucceed() {
                 LPAuthenticationParams lpAuthenticationParams = new LPAuthenticationParams(LPAuthenticationParams.LPAuthenticationType.UN_AUTH);
                 LivePerson.showConversation(MainActivity.this, lpAuthenticationParams, new ConversationViewParams());
             }

             @Override
             public void onInitFailed(Exception e) {
             }
         }));
     }
     ```

   - **Signup Flow**

     ```java
     public void startSignupFlow(View v) {
         String brandID = "62219232";
         LivePerson.initialize(this, new InitLivePersonProperties(brandID, APP_ID, new InitLivePersonCallBack() {
             @Override
             public void onInitSucceed() {
                 LPAuthenticationParams lpAuthenticationParams = new LPAuthenticationParams(LPAuthenticationParams.LPAuthenticationType.SIGN_UP);
                 LivePerson.showConversation(MainActivity.this, lpAuthenticationParams, new ConversationViewParams());
             }

             @Override
             public void onInitFailed(Exception e) {
             }
         }));
     }
     ```


   |Element  |Description  |
   |---------|---------|
   |brandID     |Your LivePerson account ID. If you don’t have one, please contact your LivePerson representative.         |
   |APP_ID     |Your application ID (`com.mybrand.app`), which is used in the [registerLPPusher](android-registerlppusher.html) method.     |
   |onInitSuccess     |Callback that indicates the init process has finished successfully.         |
   |onInitFailed     |Callback that indicates the init process has failed.         |



   **Example implementation:**


   ```java
   private static final String APP_ID = "com.mybrand.app";

   @Override
   protected void onCreate(Bundle savedInstanceState) {
       super.onCreate(savedInstanceState);
       setContentView(R.layout.activity_main);
   }

   public void startCodeFlow(View v) {
       String brandID = "62219232";
       final String authCode = "k16336";
       LivePerson.initialize(this, new InitLivePersonProperties(brandID, APP_ID, new InitLivePersonCallBack() {
           @Override
           public void onInitSucceed() {
               LPAuthenticationParams lpAuthenticationParams = new LPAuthenticationParams(LPAuthenticationParams.LPAuthenticationType.AUTH);
               lpAuthenticationParams.setAuthKey(authCode);
               LivePerson.showConversation(MainActivity.this, lpAuthenticationParams, new ConversationViewParams());
           }

           @Override
           public void onInitFailed(Exception e) {
           }
       }));
   }
   ```
   
   {:.notice}
   Make sure that the init process, from the `onInitSucceed`callback, finished successfully.


### Step 4: Screen orientation

#### Activity mode
Override in your application's AndroidManifest.xml with the ConversationActivity definition:

```javascript
<activity
  android:name="com.liveperson.infra.messaging_ui.ConversationActivity"
  android:screenOrientation="your screen orientation"/>
```


#### Fragment mode
Set the desired orientation in your container Activity definition in AndroidManifest.xml. For a list of Activity elements to add to your manifest, see [android:screenOrientation](https://developer.android.com/guide/topics/manifest/activity-element.html#screen).


### Next Steps

Congratulations!  You're all set.  

You can now do any of the following:
- [Configure the SDK](mobile-app-messaging-sdk-for-android-configure-the-android-sdk.html). You can register for LivePerson events related to the conversation, determine the layout of messaging with the app, configure Proguard, or define the backup rules for auto backup and restore.  You can also customize the look and feel of the conversation screen with your branding.xml file. Additionally, you can configure the style of the message EditText in your styles.xml file. 

- [Enable features in your AndroidManifest.xml file](mobile-app-messaging-sdk-for-android-appendix-use-the-liveperson-sdk-android.html#step-2---add-enabled-features-to-your-androidmanifestxml-file). If you have vibrate on new message, photo sharing, or audio messaging enabled, you must add the following to your app's AndroidManifest.xml file.  

- [Configure push notifications](mobile-app-messaging-sdk-for-android-push-notifications.html). Push and local notifications are a key factor that makes the experience better for consumers - they never have to stay in your app or keep the window open as they will get a proactive notification as soon as a reply or notice is available.

- Configure [Photo sharing](mobile-app-messaging-sdk-for-android-advanced-features-photo-sharing.html) and [File sharing](mobile-app-messaging-sdk-for-android-advanced-features-file-sharing.html). Mobile Messaging SDK added the ability for agents or bots within LiveEngage to share photos and files with consumers. Once sent, the consumer gets a notification only if push notifications are enabled. Otherwise, when the consumer returns to the conversation, the download icon appears in the unread message area of the conversation. The consumer can tap the thumbnail to view it or share it through the default app on the device. 

- [Configure quick replies](mobile-app-messaging-sdk-for-android-advanced-features-welcome-message-with-quick-replies.html). When a consumer starts a new conversation, or a new customer visits the site, brands can send the first message with a list of quick replies of common intents. 