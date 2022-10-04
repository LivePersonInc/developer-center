---
pagename: Step Up Authentication
redirect_from:
  - android-sdk-step-up-authentication.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Advanced Features
permalink: mobile-app-messaging-sdk-for-android-advanced-features-step-up-authentication.html
indicator: messaging
---

Step Up authentication allows consumers to continue the ongoing unauthenticated conversations by merging it to the authenticated conversation history after signing in.

**Supported versions**
 - v5.10.0 and higher

### How to enable

- KB article: [Step Up Authentication Overview](https://knowledge.liveperson.com/step-up-authentication-overview/)
- Setup account: Please reach out to LivePerson representative to get it activated and configured.

### Notes

- To enable Step Up authentication, make sure to set performStepUp flag to true.
- SDK will trigger onError(LpError lpError, String message) callback when an error occurred while performing Step Up by LpError.STEP_UP_FAILURE enum.

### Code Samples

```java
LPAuthenticationParams lpAuthenticationParams = new LPAuthenticationParams(LPAuthenticationType.AUTH);
lpAuthenticationParams.setPerformStepUp(true);

// Presenting the conversation window. During open conversation and based on the performStepUp flag, SDK will detect authenticated identity added and perform Step Up flow.
LivePerson.showConversation(activity, lpAuthenticationParams, conversationViewParams);
```