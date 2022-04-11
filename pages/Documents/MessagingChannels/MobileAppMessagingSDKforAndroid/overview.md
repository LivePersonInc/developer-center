---
pagename: Overview
redirect_from:
  - android-overview.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
permalink: mobile-app-messaging-sdk-for-android-overview.html
indicator: messaging
---
Messaging and conversational experiences have transformed how businesses engage with their customers. When you add Mobile App Messaging directly within your app, you get:

- Increased customer satisfaction with an ideal customer experience through an always connected, ongoing conversation.
- Increased customer retention and engagement (stickiness of your app).
- Consumers never miss a new message with push notifications.
- Fully customizable customer experience including look and feel.
- Optimized for network bandwidth and battery usage.

<img src="img/inappoverview1.png" alt="InAppOverview1" style="width:auto;max-height:400px;"> <img src="img/inappoverview2.png" alt="InAppOverview2" style="width:auto;max-height:400px;"> <img src="img/inappoverview3.png" alt="InAppOverview3" style="width:auto;max-height:400px;">

### Implementation considerations 

To successfully deploy messaging within your mobile app, it’s important to understand that the SDK has several functions and tasks. We recommend you go through the following list before beginning your deployment.

1. **Authentication.** The most important and possibly the most complex portion of your deployment. Determine if you are placing messaging in authenticated areas of your app.  If so, consider the following:  

   - Your mobile app user s should be able to log into your back-end securely.
   - Your back-end must be able to supply, upon request during the session, an OAuth 2.0 code (for Code Flow) or a JSON Web Token (JWT) (for Implicit Flow). 

2. **Push Notifications.**  The key factor that makes the experience better for customers because they receive a proactive notification as soon as a reply or notice is available. Determine how you want the push notifications to work. You can use your own push service or use LivePerson’s. 

3. **Control over the conversation window.** Take full control of the window or customize the window provided by LivePerson. 

   - Customize the window: Activity mode
   - Full control of window: Fragment mode

4. **Customization and branding.** Review the list of default configurations available for [Android](/mobile-app-messaging-sdk-for-android-configure-the-android-sdk.html#branding) to determine the features to enable.  

5. **Callback behavior.**  Utilize LivePerson’s [Callbacks](/android-callbacks-index.html) and APIs to control or change the behaviors and actions of the messaging app. The SDK provides a callback mechanism to keep the host app updated on events related to the conversation. The SDK provides APIs to establish the server connection for messaging. 

6. **Messaging in multiple languages.** Utilize LivePerson’s default translations or override them with your own text and language adjustments.  Language settings are based on the user’s phone language settings and app language settings. Override all settings and maintain your default language at all times. 

7. **Data Masking.** Determine if you require data masking for potentially sensitive data. If so, choose one of the two masking capabilities and then contact your Account Team or Support to have data masking configured.  

   - Client-side masking: The data is masked in the conversation transcript, appearing as asterisks, but the Agent can read it.
   - Real-time masking: Both client and agent data get masked.

8.  **Accessibility.** Not all features available in the SDK support accessibility. You may need to turn off various features to be fully compliant.  

      - Snackbar duration: 60000
      - Disable link preview:
        - false
        - false
      - Disable In-conversation shortcut to new messages:
        - false
        - false

<p style="text-align: right">
<a href="mobile-app-messaging-sdk-for-android-quick-start.html" center><img src="/img/btn-mobile-quick-start.png" style="height: 30px; width: auto;"></a><br></p>