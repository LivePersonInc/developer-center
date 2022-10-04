---
pagename: Step Up Authentication
redirect_from:
  - ios-sdk-step-up-authentication.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Advanced Features
permalink: mobile-app-messaging-sdk-for-ios-advanced-features-step-up-authentication.html
indicator: messaging
---

Step Up authentication allows consumers to continue the ongoing unauthenticated conversations by merging it to the authenticated conversation history after signing in.

**Supported versions**
 - v6.8.0 and higher

### How to enable
- KB article: [Step Up Authentication Overview](https://knowledge.liveperson.com/step-up-authentication-overview/)
- Setup account: Please reach out to LivePerson representative to get it activated and configured.

### Notes
- Step Up task will be processed automatically by SDK.
- SDK will trigger LPMessagingStepupFailed(_ error: NSError) delegate when an error occurred while performing Step Up.