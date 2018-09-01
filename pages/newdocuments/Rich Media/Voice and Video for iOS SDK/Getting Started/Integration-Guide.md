---
pagename: Integration Guide
redirect_from:
  - consumer-experience-voice-video-ios-integration-guide.html
sitesection: Documents
categoryname: "Rich Media"
documentname: Voice & Video for iOS SDK (BETA)
subfoldername: Getting Started
order: 50
permalink: voice-and-video-for-ios-sdk-beta-getting-started-integration-guide.html
indicator: messaging
---

Before you continue, make sure you have completed the steps detailed in either:

   * [CocoaPods Installation](consumer-experience-voice-video-ios-cocoa-pods.html) or
   * [Manual Installation](consumer-experience-voice-video-ios-manually.html)

**AND** adjusted your [Project Settings](consumer-experience-voice-video-ios-project-settings.html)


### Step 1: Header Includes
If you are using a **Swift** project, add this to your app's **Bridging-Header**:

```Header
#import <LPCoAppSDK/LPCoApp.h>
```

**Note:** If you do not have a bridging header yet, simply create a new Objective-C file in your project. XCode will ask to create a briding header for you. For **Objective-C** projects, you can directly import the header in your *.m* file.

### Step 2: Code Calls

Add the following to your *AppDelegate*'s `application:didFinishLaunchingWithOptions` function:

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    // ... do your regular app setup here

    if #available(iOS 9, *) { // setup & register for push calls
        LPCoApp.initSDK()
        LPCoApp.shared().register { token in
            LPMessagingSDK.instance.registerVoipPushNotifications(token: token!)
        }
    }
}
```

This is *all that is needed* to use the the SDK.

### Optional: LP Messaging SDK - Integration

To allow users to return to the messaging conversation from within a Voice/Video session, complete the following steps:

* Add the `LPCoAppDelegate` interface to one of your app's active view controllers
* Set itself as delegate
* Implement a callback function:

```swift
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
