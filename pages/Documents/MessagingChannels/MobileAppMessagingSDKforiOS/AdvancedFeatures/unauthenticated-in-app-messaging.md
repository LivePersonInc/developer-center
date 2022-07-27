---
pagename: Unauthenticated In-App Messaging
redirect_from:
  - consumer-experience-ios-sdk-advanced-unauth-ios.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Advanced Features
permalink: mobile-app-messaging-sdk-for-ios-advanced-features-unauthenticated-in-app-messaging.html
indicator: messaging
---

### Introduction

Unauthenticated In-App Messaging allows brands to communicate with consumers in an unauthenticated manner. This allows:

* Easier and quicker on-boarding to Conversational Cloud

* Having pre authentication messaging use cases, for example, assistance with password recovery

* The ability to use Campaigns 

### Related Classes, Parameters and APIs

LPAuthenticationParams contains an authentication type, you can either set it or pass it in the object initialization (```init()```). When not passing an authentication type in init() the default value is LPAuthenticationType.signup (is deprecated as of July 2019)

_Note: If you pass **authenticationCode** or **jwt** on LPAuthenticationParams init() - it will automatically set the authentication type to LPAuthenticationType.authenticated._

```swift
class LPAuthenticationParams: NSObject {
    …
    var type: LPAuthenticationType = .signup
    …
    init(authenticationCode: String? = nil, jwt: String? = nil, redirectURI: String? = nil, certPinningPublicKeys: [String]? = nil, authenticationType: LPAuthenticationType = .signup)
    …
}
```

#### Server side configurations (In case needed, should be modified by LivePerson)

* Identity idle time — setting the time frame for identifying a consumer while being idle (not communicating with the brand). When a consumer opens the conversation window after being idle for the configured time, the LivePerson data will be removed from the device. iF there's an open conversation — it will be closed and a dialog explaining what happened will be presented to the consumer.

* Unauthenticated token expiration — sets the time for the app to validate the token. When the token is expired, it will be refreshed.

#### SDK configurations

When an unauthenticated user session expire — the SDK will notify by presenting an alertView to the user. The alertView content can be modified by overriding the following string params:

* ```"unauthenticatedUserExpiredTitle"``` = "New Conversation";
* ```"unauthenticatedUserExpiredMessage"``` = "Hi there! As we haven't seen you for a while, we're opening a new conversation for you";

### Code Samples
```swift
// 1. Init SDK with Monitoring
let monitoringInitParams = LPMonitoringInitParams(appInstallID: "appInstallID")
do {
    try LPMessaging.instance.initialize("accountNumber", monitoringInitParams: monitoringInitParams)
} catch let error as NSError {
    print("initialize error: \(error)")
    return
}

…

// 2. Init LPConversationViewParams
let conversationViewParams = LPConversationViewParams(conversationQuery: self.conversationQuery!, containerViewController: nil, isViewOnly: false)

// 3. Init LPAuthenticationParams
let authenticationParams = LPAuthenticationParams(authenticationCode: nil, jwt: nil, redirectURI: nil, authenticationType: .unauthenticated)

// 4. Call showConversation() with LPConversationViewParams and LPAuthenticationParams
LPMessaging.instance.showConversation(conversationViewParams, authenticationParams: authenticationParams)
…

```

### Notes and Best Practices

* Brands who wish to use Unauthenticated In-App Messaging must activate Campaigns for Messaging and create a default engagement. For additional information, please follow the [Campaigns for Messaging guide](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Campaigns/Mobile+App+Engagement+Configuration+Guide.pdf). In addition, the SDK should be initialized with the ```LPMonitoringInitParams``` object.

* In order to change SDK modes, Logout must be called first.

* LPAuthenticationType signup is deprecated as of July 2019.
