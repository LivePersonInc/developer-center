---
title: Integrating the SDK
level1: Documents
level2: Consumer Experience
level3: Voice & Video for Android SDK (BETA)
level4: Getting Started
order: 30
permalink: consumer-experience-voice-video-android-integrate-the-sdk.html
indicator: messaging
---

Before you continue, make sure you have completed the [Install Instructions](consumer-experience-voice-video-android-integrate-the-sdk.html).

### Configuring the SDK

Almost there! After adding LP-CoApp SDK as a dependency to your app, you now need to call it from within your codebase.

#### Step 1 - Adjust the AndroidManifest.xml

Add the following permissions to your `AndroidManifest.xml` to enable CoApp Voice, Video and Screensharing capabilities:

```XML
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-feature android:name="android.hardware.camera" />
    <uses-feature android:name="android.hardware.camera.autofocus" />
```
**Note:** Starting with Android 6.0 (API level 23), Runtime permissions need to be granted while the application is running. CoApp will prompt for the following permissions when initiating a CoApp-call:

* Manifest.permission.CAMERA;
* Manifest.permission.RECORD_AUDIO;
* Manifest.permission.CAPTURE_VIDEO_OUTPUT;
* [MediaProjectionManager.createScreenCaptureIntent()](https://developer.android.com/reference/android/media/projection/MediaProjectionManager.html#createScreenCaptureIntent());

#### Step 2 - Hook CoApp into your Application

To initialize CoApp, you need to add it to your application's context. This is done by registering the `LPCoApp()`-Manager instance to the app's Activity lifecycle. If you don't have an `Application` class yet, just create one and adjust it like this:

```Java
package com.liveperson.sampleapplication;
import android.app.Application;
import com.liveperson.coapp.LPCoApp; // the LPCoApp()-Manager

public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();

        /**
         * Register CoApp to lifecycle, that's it!
         */
        LPCoApp coapp = LPCoApp.shared(getApplicationContext());
        registerActivityLifecycleCallbacks(coapp);
    }
}
```

**Congratulations!** This is all that is needed to enable LPCoApp in your app. You can now proceed by adding Push Notification capability, apply branding, etc.

## Additional Configurations

### LP Messaging SDK Integration

#### Listen to FCM/GCM Push-Notifications

If you want to initiate CoApp calls via [Push-Notifications](https://developer.android.com/guide/topics/ui/notifiers/notifications.html) you need to add the LPCoApp-Notification-Handler to your FCM/GCM Messaging Receiver (**Note:** if you haven't set up Messaging SDK with Push-Notifications please see [In-App Messaging SDK Push Notifications](https://developers.liveperson.com/android-push-notifications.html) and [Register your App](consumer-experience-voice-video-android-register-app.html) for further instructions).
Add the following lines to your Messaging Receiver Service:

```Java
public class MyMessagingService extends FirebaseMessagingService {

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        LPCoApp.handlePush(this, remoteMessage, null);
        ...
    }
    ...
```
**Bonus**: If you want to add a [TaskStack](https://developer.android.com/reference/android/support/v4/app/TaskStackBuilder.html) to the Notification (i.e. if you want Call-View to return to a certain Activity when closed), you can do so by implementing a `getTaskStack()` method, i.e.:

```Java
    private TaskStackBuilder getTaskStack() {
        TaskStackBuilder stackBuilder = TaskStackBuilder.create(this);
        // The task stack should contain i.e. the MainActivity
        stackBuilder.addParentStack(MainActivity.class);
        return stackBuilder;
    }
```
and call it with

```Java
    LPCoApp.handlePush(this, remoteMessage, getTaskStack());
```

### Standalone Integration

By registering the CoApp Manager to the Lifecycle events, CoApp can listen to Messaging or Notification events and start automatically. If you wish to use the standalone capabilities, and start CoApp sessions manually, you can do so by:

```Java
  LPCoApp.shared(getApplicationContext());
  LPCoApp.shared().configure(["server":"https://z1-a.coapp.liveperson.net"]); // Match server URL to environment
```
Starting a standalone session is triggered by calling the following:
```Java
  LPCoApp.shared().startSession(serviceId); // optionally pass NIL to open a user input-dialog
```
