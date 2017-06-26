---
title: Integration Guide
level1: Documents
level2: Consumer Experience
level3: Voice & Video for iOS SDK (BETA)
level4: Getting Started
order: 50
permalink: consumer-experience-voice-video-ios-integration-guide.html
indicator: messaging
---

Before you continue, make sure you have completed the steps detailed in either:
   * [CocoaPods Installation](consumer-experience-voice-video-ios-cocoa-pods.html){:target="_blank"} or
   * [Manual Installation](consumer-experience-voice-video-ios-manually.html){:target="_blank"}

**AND** adjusted your [Project Settings](consumer-experience-voice-video-ios-project-settings.html){:target="_blank"}


### Step 1: Header Includes
If you are using a **Swift** project, add this to your app's **Briding-Header**:

```Header
#import <LPCoAppSDK/LPCoApp.h>
```

**Note:** If you do not have a briding header yet, simply create a new Objective-C file in your project. XCode will ask to create a briding header for you. For **Objective-C** projects, you can directly import the header in your *.m* file.

### Step 2: Code Calls

Add the following to your *AppDelegate*'s `application:didFinishLaunchingWithOptions` function:

```Swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    // ... do your regular app setup here

    LPCoApp.initSDK()
    LPCoApp.shared().register { token in
        // Forward VoIP token to LPMessagingSDK
        LPMessagingSDK.instance.registerVoipPushNotifications(token: token!)
    }

    // Handle a call launching the app
    LPCoApp.shared().handleIncomingCall(launchOptions)
}
```

**Alternative**: To support only _regular Push_ add the code below to your `application:didReceiveRemoteNotification` function. _Note:_ do not add both function calls.

```Swift
func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {

    LPCoApp.shared().handleIncomingCall(userInfo) // Handle a call received via regular Push
}
```
This is *all that is needed* to use the the SDK.

### Optional: LP Messaging SDK - Integration

To allow users to return to the messaging conversation from within a Voice/Video session, complete the following steps:
* Add the `LPCoAppDelegate` interface to one of your app's active view controllers
* Set itself as delegate
* Implement a callback function:

```Swift
class YourViewController: UIViewController,LPCoAppDelegate {

    override func viewDidLoad() {
        LPCoApp.shared().delegate = self;
    }
    func LPCoAppShowMessagingConversation() {
        LPMessagingSDK.instance.showConversation(...)
        // push conversation view controller (see Messaging SDK documentation)
    }
}
```
Now, whenever users tap on the messaging icon, your callback will be executed, returning them to their original conversation.
