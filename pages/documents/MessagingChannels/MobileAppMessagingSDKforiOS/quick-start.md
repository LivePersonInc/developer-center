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

### Prerequisites

To use the LivePerson Mobile App Messaging SDK, the following are required:

* **LiveEngage account** (You can get the number and login information from the LivePerson account team.)
* **Version 3.5.1 and above**
  * XCode 10 or later
  * Swift 4.2.1 (swiftlang-1000.11.42 clang-1000.11.45.1), or Objective-C
* **Version ~3.4** 
  * Xcode 10 or later
  * Swift version 4.2 (swiftlang-1000.11.37.1 clang-1000.11.45.1) or Objective-C
* **Version ~3.3**
  * XCode 10 or later
  * Swift version 4.2 (swiftlang-1000.11.37.1 clang-1000.11.45.1), or Objective-C
* **Version 3.1.1 - 3.3.0**
  * XCode 9.3 or later
  * Swift 4.1 or later, or Objective-C
* **Version 3.1 and below**
  * XCode 9.2 or lower
  * Swift 4.0 or lower, or Objective-C


For information on supported operating systems and devices, refer to the [System Requirements and Language Support](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements.pdf) guide.

<details><summary><b>CocoaPods</b></summary><br><p>&nbsp;&nbsp;&nbsp;&nbsp;You can proceed to step 6.</p></details>
<details><summary>Is the <b>Promised ship date</b> populated?</summary><br><p>&nbsp;&nbsp;&nbsp;&nbsp;You can proceed to step 6.</p></details>



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

3. Navigate to your project folder and create a Podfile for your project:

   ```bash
   pod init
   ```
   
   <div class="important">
   The Podfile must be created under your project's folder.
   </div>

4. Open the Podfile and add the **LPMessagingSDK** pod to integrate it into your Xcode project. Make sure you change the target name:

   ```ruby
   source 'https://github.com/LivePersonInc/iOSPodSpecs.git'
   platform :ios, '9.0'
   use_frameworks!

   target '<Your Target Name>' do  #Remember to change <Your Target Name> to the name of YOUR target.
      pod 'LPMessagingSDK'
   end
   ```

5. In your project folder, install the dependencies for your project and then upgrade to the latest SDK:

   ```bash
   pod install
   pod update
   ```

6. (**Required**) In your Xcode project settings, navigate to the **Build Phases** tab, and click the + button and select **New Run Script Phase**. Add the following script, which loops through the frameworks embedded in the application and removes unused architectures (used for the simulator).

    ```bash
   bash "${SRCROOT}/Pods/LPMessagingSDK/LPMessagingSDK/LPInfra.framework/frameworks-strip.sh"
    ```

#### *Option 2: Libraries Copy to Xcode Project*

1. [Download](https://github.com/LP-Messaging/iOS-Messaging-SDK) the SDK package.

2. Extract the file to a folder on your Mac.

3. Copy all framework and bundle files into the project folder. [what is the best way to do this?]

4. (**Required**) In your Xcode project settings, navigate to the **Build Phases** tab, and do the following:

   1. Under **Copy Bundle Resources**, make sure you have **LPMessagingSDKModels.bundle**.  
   2. Click the + button and add the script below.  The script loops through the frameworks embedded in the application and removes unused architectures (used for the simulator).

   ```bash
   bash "${BUILT_PRODUCTS_DIR}/${FRAMEWORKS_FOLDER_PATH}/LPInfra.framework/frameworks-strip.sh"
   ```


### Step 2: Configure project settings to connect LiveEngage SDK

1. In your Xcode project settings, navigate to the **General** tab, and under the **Embedded Binaries** section, add all the Framework files.

2. Under **Build Settings**, make sure **Always Embed Swift Standard Libraries** is set to **YES**.

3. (**Required for iOS 10 or newer**) In the project's Xcode info.plist, add the following privacy keys and values.  

    * **NSPhotoLibraryUsageDescription**: Photo Library Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS

    * **NSCameraUsageDescription**: Camera Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS

    * **NSMicrophoneUsageDescription**: Microphone Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS

   ```xml
   <key>NSPhotoLibraryUsageDescription</key>
   <string>Photo Library Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS</string>
   <key>NSCameraUsageDescription</key>
   <string>Camera Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS</string>
   <key>NSMicrophoneUsageDescription</key>
   <string>Microphone Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS</string>
   ```

4. Under **Capabilities**, in your project's Targets settings, turn on the following toggles to support SDK-specific features:

   * **Push Notifications**: Notifies the user whenever a new message from the remote user is received. 

   * **Structured Content**: Map items require MapKit framework to show location in the map. 


### Step 3: Initialize the LPMessagingSDK

This step does the following:
- **Initializes the SDK instance.** You must provide your account number as a string. We have provided an example to use for the this quick start process in the `accountID` constant. 
- **Sets up and calls the conversation view.** Your view controller calls our showConversation method provided by the LPMessagingSDK instance. It pushes a new navigation stack containing the Conversation View Controller. In the LPAuthenticationParams object, you can use either a jwt or authentication code from your authentication server. We have provided you one here as an example.  The LiveEngage console site attached to this account only has a basic set of features available to demonstrate the Conversational Commerce experience.
-  **Removes the conversation view when deallocating the container.**  The LPMessagingSDK view stack must be released when the client app is backgrounded or suspended.  Foregrounding the application adds an instance of the view stack. 

We have provided code snippets for [Authenticated](#authenticated) and [Signup](#signup).

#### Authenticated

```swift
import UIKit
import LPMessagingSDK
import LPAMS
import LPInfra


class DocumentationViewController: UIViewController {
    
    let accountID: String = "14800077"
    let jwt: String = "eyJhbGciOiJSUzI1NiJ9.eyAgInN1YiI6ICJwdWJsaWNfcXVpY2tzdGFydF91c2VyIiwgICJpc3MiOiAiaHR0cHM6Ly9MUC1BdXRoLmNvbSIsICAiZXhwIjoxNTg0Njc0MDc3LCAgImlhdCI6MTU1MzExNjQ3N30.tFtanIwh8SrmJWM5iSUxmj7WaroA_WCtZfTS4KN9N8Q0Vy0O5rRdb7T7ZkFJxnGfwg0fsKfBuM3qTD8NHWNOKqaZX_bQKXQ-cnJHa4DtJX9Udv0MGfg_UHO0DBg5vaC_38beUlSaUPQ0rQAHb9sm0PE1tNOMfLzvPqM1kF3VMBq1dZNpNkDYaV8oleEcm0v8woRj45FYOv34etrgSsf0Pi-68AP8ckG3WJzS_y9dpZAxW3oDIv_XXHZ4TXQw_wPwMKu0UtZoMfctz-5ERk7uTQxeWP6TS9ce2YQ38FqUwIBN3ImAhA3vE2gLsYexFsPiO_I3hSEC272Ya-b-eJZ8vg"
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // MARK: - Setup instance of LPMessagingSDK
        
        /*  Adds the following code to initialize the SDK instance. You must provide your account number as a string. We have provided an example to use for this quick start process in the 'accountID' constant above.  */
        do {
            try LPMessagingSDK.instance.initialize(accountID)
        } catch {
            fatalError("Was unable to initialize LPMessagingSDK for account \(accountID)")
        }
        
        // MARK: - Show LPMessagingSDK View Stack and Conversation View Controller.
        /*
         Here your view controller calls our showConversation method provided by the LPMessagingSDK instance. It pushes a new navigation stack containing the Conversation View Controller. In the LPAuthenticationParams object, you can use either a jwt or authentication code from your authentication server. We have provided you one here as an example.  The LiveEngage console site attached to this account only has a basic set of features available to demonstrate the Conversational Commerce experience.
         */
        let authenticationParams: LPAuthenticationParams = LPAuthenticationParams(authenticationCode: nil, jwt: jwt, redirectURI: nil, certPinningPublicKeys: nil, authenticationType: .authenticated)
        let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountID)
        let conversationViewParams = LPConversationViewParams(conversationQuery: conversationQuery, isViewOnly: false)
        LPMessagingSDK.instance.showConversation(conversationViewParams, authenticationParams: authenticationParams)
    }
    
    // MARK: - Removes the conversation view when deallocating the container.
    /*
     The LPMessagingSDK view stack must be released when the client app is backgrounded or suspended.  Foregrounding the application adds an instance of the view stack.
     */
    override func viewWillDisappear(_ animated: Bool) {
        let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountID)
        if (conversationQuery.getBrandID() == accountID) {
            LPMessagingSDK.instance.removeConversation(conversationQuery)
        }
    }
}

```

#### Signup



```swift
import UIKit
import LPMessagingSDK
import LPAMS
import LPInfra


class DocumentationViewController: UIViewController {
    
    let accountID: String = "14800077"

    override func viewDidLoad() {
        super.viewDidLoad()
        
        // MARK: - Setup instance of LPMessagingSDK
        
        /*  Adds the following code to initialize the SDK instance. You must provide your account number as a string. We have provided an example to use for this quick start process in the 'accountID' constant above.  */
        do {
            try LPMessagingSDK.instance.initialize(accountID)
        } catch {
            fatalError("Was unable to initialize LPMessagingSDK for account \(accountID)")
        }
        
        //MARK: - Show LPMessagingSDK View Stack and Conversation View Controller.
        /*
         Here Your view controller calls our showConversation method provided by the LPMessagingSDK instance. It pushes a new navigation stack containing the Conversation View Controller. In the LPAuthenticationParams object, you can use either a jwt or authentication code from your authentication server. We have provided you one here as an example.  The LiveEngage console site attached to this account only has a basic set of features available to demonstrate the Conversational Commerce experience.
         */
        let authenticationParams: LPAuthenticationParams = LPAuthenticationParams(authenticationCode: nil, jwt: nil, redirectURI: nil, certPinningPublicKeys: nil, authenticationType: .signup)
        let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountID)
        let conversationViewParams = LPConversationViewParams(conversationQuery: conversationQuery, isViewOnly: false)
        LPMessagingSDK.instance.showConversation(conversationViewParams, authenticationParams: authenticationParams)
    }
    
    // MARK: - Removes the conversation view when deallocating the container.
    /*
     The LPMessagingSDK view stack must be released when the client app is backgrounded or suspended.  Foregrounding the application adds an instance of the view stack.
     */
    override func viewWillDisappear(_ animated: Bool) {
        let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountID)
        if (conversationQuery.getBrandID() == accountID) {
            LPMessagingSDK.instance.removeConversation(conversationQuery)
        }
    }
}
```



### Next Steps

Congratulations!  You're all set.  

You can now do any of the following:

- Initialization with monitoring params
- 

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
  
