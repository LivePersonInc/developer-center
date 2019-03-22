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

4. Open the Podfile.

   ```bash
   open -a Xcode Podfile
   ```

   Add the **LPMessagingSDK** pod to integrate it into your Xcode project. Make sure you change the target name to YOUR target name:

   ```ruby
   source 'https://github.com/LivePersonInc/iOSPodSpecs.git'
   platform :ios, '9.0'
   use_frameworks!

   target '<Your Target Name>' do  
      pod 'LPMessagingSDK'
   end
   ```

6. In your project folder, install the dependencies for your project and then upgrade to the latest SDK:

   ```bash
   pod install
   pod update
   ```

7. (**Required**) In your Xcode project settings, navigate to the **Build Phases** tab, and click the + button and select **New Run Script Phase**. Add the following script, which loops through the frameworks embedded in the application and removes unused architectures (used for the simulator).

    ```bash
   bash "${SRCROOT}/Pods/LPMessagingSDK/LPMessagingSDK/LPInfra.framework/frameworks-strip.sh"
    ```

#### *Option 2: Libraries Copy to Xcode Project*

1. [Download](https://github.com/LP-Messaging/iOS-Messaging-SDK) the SDK package.

2. Extract the file to a folder on your Mac.

3. In your Xcode project settings, navigate to the **General** tab, and under the **Embedded Binaries** section, add all the Framework files.

4. (**Required**) In your Xcode project settings, navigate to the **Build Phases** tab, and do the following:

   1. Under **Copy Bundle Resources**, make sure you have **LPMessagingSDKModels.bundle**.  
   2. Click the + button and add the script below.  The script loops through the frameworks embedded in the application and removes unused architectures (used for the simulator).

   ```bash
   bash "${BUILT_PRODUCTS_DIR}/${FRAMEWORKS_FOLDER_PATH}/LPInfra.framework/frameworks-strip.sh"
   ```


### Step 2: Configure project settings to connect LiveEngage SDK

1. Under **Build Settings**, make sure you set **Always Embed Swift Standard Libraries** to **YES**.

2. (**Required for iOS 10 or newer**) In the project's Xcode info.plist, add the following privacy keys and values:  

    * **NSPhotoLibraryUsageDescription**: Photo Library Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS

    * **NSCameraUsageDescription**: Camera Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS

    * **NSMicrophoneUsageDescription**: Microphone Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS

   Alternatively, you can open the Info.plist file in an external text editor and then paste the XML into the file:

   ```xml
   <key>NSPhotoLibraryUsageDescription</key>
   <string>Photo Library Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS</string>
   <key>NSCameraUsageDescription</key>
   <string>Camera Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS</string>
   <key>NSMicrophoneUsageDescription</key>
   <string>Microphone Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS</string>
   ```



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

- Turn on the following toggles, under **Capabilities**, to support SDK-specific features:
  - **Push**: Notifies the user when a new message from the remote user is received.
  - **Maps**: Shows location in the map.
- Create the **LPMonitoringParams** to get the Engagement for the user, which is needed to start a new conversation with a specific campaign.

