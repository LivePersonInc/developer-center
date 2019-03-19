---
pagename: Quick Start
redirect_from:
  - consumer-experience-ios-sdk-quick-start.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS

order: 1
permalink: mobile-app-messaging-sdk-for-ios-quick-start.html

indicator: messaging
---

The LivePerson SDK provides brands with a secure and straightforward Mobile App Messaging solution. Through Mobile App Messaging, brands foster connections with their customers and increase app engagement and retention.

Use this Quick Start guide to get you up and running with a project powered by LivePerson. When done, you'll be able to send messages between an iOS device and LiveEngage. 

<div class="important">
To complete this Quick Start, you need a LiveEngage account. You can get the number and login information from the LivePerson account team.
</div>

## Prerequisites

To use the LivePerson Mobile App Messaging SDK, the following are required:

#### Version 3.5.1 and above
* XCode 10 or later
* Swift 4.2.1 (swiftlang-1000.11.42 clang-1000.11.45.1), or Objective-C

#### Version ~3.4 
* Xcode 10 or later
* Swift version 4.2 (swiftlang-1000.11.37.1 clang-1000.11.45.1) or Objective-C

#### Version ~3.3
* XCode 10 or later
* Swift version 4.2 (swiftlang-1000.11.37.1 clang-1000.11.45.1), or Objective-C


#### Version 3.1.1 - 3.3.0
* XCode 9.3 or later
* Swift 4.1 or later, or Objective-C

#### Version 3.1 and below
* XCode 9.2 or lower
* Swift 4.0 or lower, or Objective-C


For information on supported operating systems and devices, refer to the [System Requirements and Language Support](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements.pdf) guide.


### Step 1: Install the SDK into your project

You can install LiveEngage Mobile App Messaging SDK for iOS using a couple of different methods:

* [CocoaPods](#option-1-cocoapods) 
* [Libraries Copy to Xcode Project](#option-2-libraries-copy-to-xcode-project)

<div class="important">
For both methods, you are <b>Required</b> to perform a specific step as a workaround for a <a href="http://www.openradar.me/radar?id=6409498411401216" target="_blank">known iOS issue</a>. It's necessary for archiving your app before publishing it to the App Store. The required step involves adding a script that loops through the frameworks embedded in the application and removes unused architectures (used for the simulator).
</div>

#### *Option 1: CocoaPods*

You can use CocoaPods, a dependency manager for Swift and Objective-C projects, to scale your projects elegantly. It provides a standard format for managing external libraries. 

1. Install CocoaPods:

   ```bash
   sudo gem install cocoapods
   ```

2. Set up CocoaPods:

   ```bash
   pod setup --verbose
   ```
   <div class="notice">
   It may take a few minutes to complete.
   </div>

3. Navigate to your project folder and create a Podfile for your project:

   ```bash
   pod init
   ```
   
   <div class="important">
   The Podfile must be created under your project's folder.
   </div>

4. Open your Podfile:

   ```bash
   open -a Xcode Podfile
   ```

5. Add the **LPMessagingSDK** pod to integrate it into your Xcode project:

   ```ruby
   source 'https://github.com/LivePersonInc/iOSPodSpecs.git'
   platform :ios, '9.0'
   use_frameworks!

   target '<Your Target Name>' do
      pod 'LPMessagingSDK'
   end
   ```

6. In your project folder, install the dependencies for your project and to upgrade to the latest SDK:

   ```bash
   pod install
   pod update
   ```

7. (**Required**) In your Xcode project settings, navigate to the **Build Phases** tab, and click the + button and select **New Run Script Phase**. 

8. Add the following script, which loops through the frameworks embedded in the application and removes unused architectures (used for the simulator).

    ```bash
   ${PODS ROOT}/Pods/LPMessagingSDK/LPMessagingSDK/LPInfra.framework/frameworks-strip.sh
    ```

#### *Option 2: Libraries Copy to Xcode Project*

1. [Download](https://github.com/LP-Messaging/iOS-Messaging-SDK) the SDK package.

2. Extract the file to a folder on your Mac.

3. Copy all framework and bundle files into the project folder.

4. (**Required**) In your Xcode project settings, navigate to the **Build Phases** tab, and do the following:

   1. Under **Copy Bundle Resources**, make sure you have **LPMessagingSDKModels.bundle**.  [what happens if they run the script and this bundle isn't in there?]
   2. Click the + button and add the script below.  The script loops through the frameworks embedded in the application and removes unused architectures (used for the simulator).

   ```bash
   ${BUILT_PRODUCTS_DIR}/${FRAMEWORKS_FOLDER_PATH}/LPInfra.framework/frameworks-strip.sh
   ```


### Step 2: Configure project settings to connect LiveEngage SDK

1. In your Xcode project settings, navigate to the **General** tab, and under the **Embedded Binaries** section, add all the Framework files.

2. Under Build settings, make sure **Always Embed Swift Standard Libraries** is set to **YES**.

3. (**Required for iOS 10 or newer**) In the project's Xcode info.plist, add three new privacy keys and values: 

    * Key: `NSPhotoLibraryUsageDescription`, Value: "Photo Library Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS",

    * Key: `NSCameraUsageDescription`, Value: "Camera Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS",

    * Key: `NSMicrophoneUsageDescription`, Value: "Microphone Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS"

    ```xml
    <key>NSPhotoLibraryUsageDescription</key>
    <string>Photo Library Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS</string>
    <key>NSCameraUsageDescription</key>
    <string>Camera Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS</string>
    <key>NSMicrophoneUsageDescription</key>
    <string>Microphone Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS</string>
    ```

    <div class="important">
    To upload your host app into the App Store, even if these features are disabled or not used, you must add these values to your project's Xcode Info.plist. <ul><li>SDK 2.0 lets you share photos from the camera or photo library.</li><li>SDK 3.2 lets you send audio messages.</li></ul>
    </div>

    For more information, refer to [Apple’s website](https://developer.apple.com/library/prerelease/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html).

4. Under Capabilities, in your project's Targets settings, turn on the following toggles to support SDK-specific features:

   * **Push Notifications**: SDK uses remote push notification to notify the user whenever a new message from the remote user is received. 

   * **Maps** (Structured content): map items require MapKit framework to show location in the map. 


### Step 3: Initialization

1. Inside **ViewController**, add the following imports:

   ```swift
   import LPMessagingSDK
   import LPInfra
   ```

2. Also inside **ViewController**, under **viewDidLoad**, add the following code:

   ```swift
   do {
     try LPMessagingSDK.instance.initialize("Your account ID")
   } catch {
     return
   }
   ```

3. Set up and call the conversation view. You’ll need to provide your LivePerson account number and a container view controller.

   ```swift
   let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery("Your account ID")
   let conversationViewParams = LPConversationViewParams(conversationQuery: conversationQuery, isViewOnly: false)
   LPMessagingSDK.instance.showConversation(conversationViewParams, authenticationParams: nil)
   ```

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

   <div class="notice">
   When using ViewController Mode, on the Navigation Bar Back Button, you can simply call <b>LPMessagingSDK.instance.removeConversation(self.conversationQuery!)</b>.
   </div>

### Step 4 (Optional): Initialization with Monitoring Params

<div class="important">
To get the App key or appInstallationId, a new Conversation Source needs to be added on LiveEngage. For more details, contact your Account Team.
</div>

1. Inside **viewController** add the following imports:

   ```swift
   import LPMessagingSDK
   import LPInfra
   ```

2. Also inside **ViewController**, under **viewDidLoad**, add the following code:

   ```swift
   do {
     let monitoringParams = LPMonitoringInitParams(appInstallID: "appInstallationId")
     try LPMessagingSDK.instance.initialize("Your account ID", monitoringInitParams: monitoringParams)
   } catch {
     return
   }
   ```

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

4. Use the **LPMonitoringParams** to get the Engagement for the User, which is needed to start a new conversation with a specific campaign.

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

5. Set up and call the conversation view. You’ll need to provide your LivePerson account number, a container view controller and the campaign information.

   ```swift
   let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery("Your account ID", campaignInfo: campaignInfo)
   let conversationViewParams = LPConversationViewParams(conversationQuery: conversationQuery, isViewOnly: false)
   LPMessagingSDK.instance.showConversation(conversationViewParams, authenticationParams: nil)
   ```


6. Remove the conversation view when your container is deallocated:

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

   <div class="notice">
   When using ViewController Mode, on the Navigation Bar Back Button, you can simply call <b>LPMessagingSDK.instance.removeConversation(self.conversationQuery!)</b>.
   </div>
  
