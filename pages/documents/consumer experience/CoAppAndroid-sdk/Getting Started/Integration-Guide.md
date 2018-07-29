---
title: Integration Guide
redirect_from:
  - consumer-experience-voice-video-android-integrate-the-sdk.html
level1: Documents
level2: Consumer Experience
level3: Voice & Video for Android SDK (BETA)
level4: Getting Started
order: 30
permalink: voice-&-video-for-android-sdk-beta-getting-started-integration-guide.html
indicator: messaging
---

Before you continue, make sure you have completed the [Install Instructions](consumer-experience-voice-video-android-installing-the-sdk.html).

### Configuring the SDK

After adding the SDK as a dependency to your app, you now need to call it from within your codebase.

#### Step 1 - Adjust the AndroidManifest.xml

Add the following permissions to your `AndroidManifest.xml` to enable Voice, Video and In-app CoBrowse capabilities:

```XML
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-feature android:name="android.hardware.camera" />
    <uses-feature android:name="android.hardware.camera.autofocus" />
```
**Note:** Starting with Android 6.0 (API level 23), runtime permissions need to be granted while the application is running. The SDK will prompt for the following permissions when initiating a call:

* Manifest.permission.CAMERA;
* Manifest.permission.RECORD_AUDIO;
* Manifest.permission.CAPTURE_VIDEO_OUTPUT;
* [MediaProjectionManager.createScreenCaptureIntent()](https://developer.android.com/reference/android/media/projection/MediaProjectionManager.html#createScreenCaptureIntent());

#### Step 2 - Hook into your application

To initialize the SDK, you need to add it to your application's context. This is done by registering the `LPCoApp()`-Manager instance to the app's Activity lifecycle. If you don't have an `Application` class yet, just create one and adjust it like this:

```Java
package com.liveperson.sampleapplication;
import android.app.Application;
import com.liveperson.coapp.LPCoApp; // the LPCoApp()-Manager

public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();

        // Register the SDK to an activity lifecycle, that's it!

        LPCoApp coapp = LPCoApp.shared(getApplicationContext());
        registerActivityLifecycleCallbacks(coapp);
    }
}
```

This is all that is needed to enable our SDK in your app. You can now proceed by adding Push Notification capability, apply branding, etc.

## Additional Configurations

### LP Messaging SDK Integration

#### Listen to FCM/GCM Push Notifications

If you want to initiate calls via [Push Notifications](https://developer.android.com/guide/topics/ui/notifiers/notifications.html) you need to add the LPCoApp-Notification-Handler to your FCM/GCM Messaging Receiver (**Note:** if you haven't set up Messaging SDK with Push-Notifications please see [Mobile App Messaging SDK Push Notifications](https://developers.liveperson.com/android-push-notifications.html) and [Register your App](consumer-experience-voice-video-android-register-app.html) for further instructions).

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
and call it with:

```Java
    LPCoApp.handlePush(this, remoteMessage, getTaskStack());
```

