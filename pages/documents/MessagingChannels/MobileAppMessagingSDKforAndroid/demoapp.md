---
pagename: Sample App
redirect_from:
  - android-demo-app.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Resources

order: 330
permalink: mobile-app-messaging-sdk-for-android-resources-sample-app.html

indicator: messaging
---

The SDK is provided with a sample application called "SampleApp" that demonstrate the use of the SDK in a host app.

###  Project structure explained

**MainActivity class**

This is the main class of the application. It gets the user data (first name, last name, the phone),  the account number and authentication code (if required by the account) in order to set them to the SDK.

The main screen has two buttons to optionally open the conversation in Activity mode or in Fragment mode.

The Language and Region controls are used to test localization.

![sampleapplication](img/sampleapplication.png)

**setCallBack method** 
Sets the SDK callback listener. The host app gets updates from the SDK using this callback listener. For more details about this method, see [Message API](mobile-app-messaging-sdk-for-android-sdk-apis-messaging-api.html#setcallback).

**initActivityConversation method** 
Opens the conversation view in Activity mode.

**openFragmentContainer method** 
Opens the conversation view in Fragment mode. This method starts the FragmentContainerActivity that is simply the fragment container for the conversation fragment obtained from the SDK.

**FragmentContainerActivity class** 
This is an activity class that has a fragment container. It gets the conversation fragment from the SDK (`LivePerson.getConversationFragment()`) and attach it to the container.

**Push package**
The push package contains sample code for implementing push notification in [Google FCM](https://firebase.google.com/docs/cloud-messaging/). This is a simple code taken from Google documentation and integrated to be used in SampleApp and the Messaging SDK.

**branding.xml**
Demonstrate the overriding of parameters (e.g. colors, dimensions etc.) used by the SDK. Please refer to the [Configuring the SDK](android-initialization.html) section for more details.

[LiveEngage Messaging Platform Security Overview](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/security/LiveEngage+Messaging+Platform+Security+Overview.pdf)
