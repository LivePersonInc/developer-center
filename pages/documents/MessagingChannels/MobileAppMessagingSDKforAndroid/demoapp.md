---
pagename: Sample App
redirect_from:
  - android-demo-app.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Appendix

order: 330
permalink: mobile-app-messaging-sdk-for-android-appendix-sample-app.html

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
Sets the host app implementation of [LivePersonCallback](android-callbacks-index.html) to the SDK. This implementation simply display a toast message on every callback received.

**initActivityConversation method**
Opens the conversation view in Activity mode (see [Quick Start](android-quickstart.html#step-3-code-integration-for-basic-deployment))

**openFragmentContainer method**
Opens the conversation view in Fragment mode (see [Quick Start](android-quickstart.html#step-3-code-integration-for-basic-deployment)).
This method starts the FragmentContainerActivity that is simply the fragment container for the conversation fragment obtained from the SDK.

**FragmentContainerActivity class**
This is an activity class that has a fragment container. It gets the conversation fragment from the SDK (LivePerson.getConversationFragment()) and attach it to the container.

**Push package**
The push package contains sample code for implementing push notification in both [Google GCM](https://developers.google.com/cloud-messaging/gcm) or [Google FCM](https://firebase.google.com/docs/cloud-messaging/). This is a simple code taken from Google documentation and integrated to be used in SampleApp and the Messaging SDK.

**branding.xml**
Demonstrate the overriding of parameters (e.g. colors, dimensions etc.) used by the SDK. Please refer to the [Configuring the SDK](android-initialization.html) section for more details.

[LiveEngage Messaging Platform Security Overview](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/security/LiveEngage+Messaging+Platform+Security+Overview.pdf)
