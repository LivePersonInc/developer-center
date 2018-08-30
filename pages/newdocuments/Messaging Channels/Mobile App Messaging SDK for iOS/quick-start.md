---
pagename: Quick Start
redirect_from:
  - consumer-experience-ios-sdk-quick-start.html
Keywords:
sitesection: Documents
categoryname: Consumer Experience
documentname: Mobile App Messaging SDK for iOS

order: 1
permalink: mobile-app-messaging-sdk-for-ios-quick-start.html

indicator: messaging
---

The LivePerson SDK provides brands with a simple, yet enterprise-grade and secure Mobile App Messaging solution. Through Mobile App Messaging, brands will foster connections with their customers and increase app engagement and retention.

This Quick Start will quickly get you up and running with a project powered by LivePerson. When you're done, you'll be able to send messages between an iOS device and LiveEngage. To complete this Quick Start, you will need a LiveEngage account. You can get the number and login information from the LivePerson account team.

### Prerequisites

To use the LivePerson Mobile App Messaging SDK, the following are required:

#### Version 3.1.1 and above
* XCode 9.3 or later
* Swift 4.1 or later, or Objective-C

#### Version 3.1 and below
* XCode 9.2 or lower
* Swift 4.0 or lower, or Objective-C


_Note: For information on supported operating systems and devices, refer to [System Requirements](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements.pdf)._

### Step 1: Installing the SDK into your project
LiveEngage Mobile App Messaging SDK for iOS supports multiple methods of installations.

**_Option 1: Using CocoaPods_**

The SDK is also compatible with CocoaPods, a dependency manager for Swift and Objective-C Cocoa projects. CocoaPods has thousands of libraries and is used in over 2 million apps. It can help you scale your projects elegantly and provides a standard format for managing external libraries.

 1. Install cocoapods using the following command:

```bash
$ gem install cocoapods
```

{:start="2"}
 2. Navigate to your project folder and init new pod using the following command:

```bash
$ pod init
```

{:start="3"}
 3. Podfile should be created under your project’s folder.
 To integrate Liveperson Messaging SDK into your Xcode project using CocoaPods, specify it in your Podfile:

```ruby
source 'https://github.com/LivePersonInc/iOSPodSpecs.git'
platform :ios, '9.0'
use_frameworks!

target '<Your Target Name>' do
  pod 'LPMessagingSDK'
end
```

{:start="4"}
 4. Run the following command in the terminal under your project folder:

```bash
$ pod install
```

{:start="5"}
 5. In case you wish to upgrade to the latest SDK version and you have already run 'pod install', run the following command:

```bash
$ pod update
```

{:start="6"}
 6. In project settings, navigate to the Build Phases tab, and click the + button to add a New Run Script Phase. Add the script below in order to loop through the frameworks embedded in the application and remove unused architectures (used for simulator).

<div class="important">
This step is a workaround for known iOS issue and is necessary for archiving your app before publishing it to the App Store.
</div>

```bash
bash "${SRCROOT}/Pods/LPMessagingSDK/LPMessagingSDK/LPInfra.framework/frameworks-strip.sh"
```

**_Option 2: Using Libraries Copy to Xcode Project_**

1. Click [here](https://github.com/LP-Messaging/iOS-Messaging-SDK) to download the SDK package.

2. Once downloaded, extract the ZIP file to a folder on your Mac.

3. Copy (Drag and Drop) all framework and bundle files into the project.

4. In project settings, navigate to the Build Phases tab, and make sure to have **LPMessagingSDKModels.bundle** under **Copy Bundle Resources**.

5. In project settings, navigate to the Build Phases tab, and click the + button to add a New Run Script Phase. Add the script below in order to loop through the frameworks embedded in the application and remove unused architectures (used for simulator).

<div class="important">
This step is a workaround for <a href="http://www.openradar.me/radar?id=6409498411401216">known iOS issue</a> and is necessary for archiving your app before publishing it to the App Store.
</div>

```bash
bash "${BUILT_PRODUCTS_DIR}/${FRAMEWORKS_FOLDER_PATH}/LPInfra.framework/frameworks-strip.sh"
```


### Step 2: Configure project settings to connect LiveEngage SDK

*If using CocoaPods open the Workspace created by CocoaPods rather than your Project and skip steps 1 and 2 below*

1. In project settings, navigate to the **General** tab, and add all Framework files to the **Embedded Binaries** section.

2. In the **General** tab, make sure that the framework files are under **Embedded Libraries**.

3. In Build settings, make sure **Always Embed Swift Standard Libraries** is set to **YES**.

4. Due to a new Apple policy for iOS 10 (or later), apps must declare in their project
settings which privacy settings may be used. For more information, refer to [Apple’s website](https://developer.apple.com/library/prerelease/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html)
In Xcode info.plist of the project, add two new privacy keys and values:
 * Key: **NSPhotoLibraryUsageDescription**, Value: "Photo Library Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS",
 * Key: **NSCameraUsageDescription**, Value: "Camera Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS"

<div class="important">
This step is required in order to be able to upload your host app into the App Store, as SDK 2.0 has the ability to share photos from the camera and/or photo library.
</div>

_**Note: Due to Apple policy, this step is mandatory even if the photo sharing feature is disabled in the SDK.**_

5. Some XCode Project's Capabilities need to be switched on in order to support SDK specific features.
In XCode, navigate to project's Targets settings and select the relevant target of your app, then navigate to 'Capabilities' tab.
 * **Push Notifications**: SDK uses remote push notification to notify the user whenever a new message from remote user has been received. To use remote push notifications, switch on 'Push Notifications' toggle.  
 * **Structured Content**: map items require MapKit framework to show location in map. To use map items, switch on 'Maps' toggle.  


### Step 3: Initialization

1. Inside **viewController** add the following imports:

```swift
import LPMessagingSDK
import LPInfra
```

{:start="2"}
2. Also inside **ViewController**, under **viewDidLoad**, add the following code:

```swift
do {
  try LPMessagingSDK.instance.initialize("Your account ID")
} catch {
  return
}
```

{:start="3"}
3. Set up and call the conversation view. You’ll need to provide your LivePerson account number and a container view controller.

```swift
  let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery("Your account ID")
  let conversationViewParams = LPConversationViewParams(conversationQuery: conversationQuery, isViewOnly: false)
  LPMessagingSDK.instance.showConversation(conversationViewParams, authenticationParams: nil)
```

{:start="4"}
4. In order to remove the conversation view when your container is deallocated, run the following code:

```swift
  let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountNumber)
  LPMessagingSDK.instance.removeConversation(conversationQuery)
```

<div class="important">
When using Custom View Controller Mode, the Conversation view must be removed when leaving the App. To avoid dismissing the View when CSAT/SecureForms/PhotoSharing View is presented, you should only dismiss the Conversation view if Moving From ParentView, as demonstrated below.
</div>

```swift
if (self.conversationQuery != nil && self.isMovingToParentViewController){
  LPMessagingSDK.instance.removeConversation(self.conversationQuery!)
}
```

**Note**: When ViewController Mode is used, on the Navigation Bar Back Button, you can simply call **LPMessagingSDK.instance.removeConversation(self.conversationQuery!)**.

### Step 4 (Optional): Initialization with Monitoring Params

<div class="important">
To get the App key or appInstallationId, a new Conversation Source needs to be added on LiveEngage, for more information about it, contact your Account Team.
</div>

1. Inside **viewController** add the following imports:

```swift
import LPMessagingSDK
import LPInfra
```

{:start="2"}
2. Also inside **ViewController**, under **viewDidLoad**, add the following code:

```swift
do {
  let monitoringParams = LPMonitoringInitParams(appInstallID: "appInstallationId")
  try LPMessagingSDK.instance.initialize("Your account ID", monitoringInitParams: monitoringParams)
} catch {
  return
}
```

{:start="3"}
3. Create **LPMonitoringParams**. The entry points and engagement attributes used here are dummies:

```swift
  let entryPoints = ["tel://972737004000",
                     "http://www.liveperson.com",
                     "sec://Sport",
                     "lang://Eng"]

  let engagementAttributes = [
    ["type": "purchase", "total": 20.0],
    ["type": "lead",
    "lead": ["topic": "luxury car test drive 2015",
          "value": 22.22,
          "leadId": "xyz123"]]
  ]

  let monitoringParams = LPMonitoringParams(entryPoints: entryPoints, engagementAttributes: engagementAttributes)
```

{:start="4"}
4. Using the **LPMonitoringParams**, get the Engagement for the User. This is needed to start a new conversation with a specific campaign.

```swift
 LPMonitoringAPI.instance.getEngagement(consumerID: self.consumerID, monitoringParams: monitoringParams, completion: {
      if let first = engagement.engagementDetails?.first {
        let campaign = first.campaignId
        let id = first.engagementId
        let context : String = first.contextId!
        self.campaignInfo = LPCampaignInfo(campaignId: campaign, engagementId: id, contextId: context)
      } else {
        self.campaignInfo = nil
      }
    }) { (error) in
      self.campaignInfo = nil
    }
  }
```

{:start="5"}
5. Set up and call the conversation view. You’ll need to provide your LivePerson account number, a container view controller and the campaign information.

```swift
let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery("Your account ID", campaignInfo: campaignInfo)
let conversationViewParams = LPConversationViewParams(conversationQuery: conversationQuery, isViewOnly: false)
LPMessagingSDK.instance.showConversation(conversationViewParams, authenticationParams: nil)
```

{:start="6"}
6. In order to remove the conversation view when your container is deallocated, run the following code:

```swift
let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountNumber)
LPMessagingSDK.instance.removeConversation(conversationQuery)
```

<div class="important">
When using Custom View Controller Mode, the Conversation view must be removed when leaving the App. To avoid dismissing the View when CSAT/SecureForms/PhotoSharing View is presented, you should only dismiss the Conversation view if Moving From ParentView, as demonstrated below.
</div>

```swift
if (self.conversationQuery != nil && self.isMovingToParentViewController){
  LPMessagingSDK.instance.removeConversation(self.conversationQuery!)
}
```

**Note**: When ViewController Mode is used, on the Navigation Bar Back Button, you can simply call **LPMessagingSDK.instance.removeConversation(self.conversationQuery!)**.
