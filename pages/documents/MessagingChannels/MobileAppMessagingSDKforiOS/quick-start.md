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

We have provided code snippets for [Authenticated](#authenticated), [Unauthenticated](), and [Signup](#signup).

#### Authenticated

```swift
import UIKit
import LPMessagingSDK
import LPAMS
import LPInfra

class DocumentationViewController: UIViewController {
    
    // MARK: - Setup Account information.
    
    /// Account ID is your site ID for your LiveEngage Account.
    let accountID: String = "14800077"
    /// Unique JSON Web Token used for authentication of the consumer.  Enter unique JWT here.
    let jwt: String = "eyJhbGciOiJSUzI1NiJ9.eyAgInN1YiI6ICJwdWJsaWNfcXVpY2tzdGFydF91c2VyIiwgICJpc3MiOiAiaHR0cHM6Ly9MUC1BdXRoLmNvbSIsICAiZXhwIjoxNTg0Njc0MDc3LCAgImlhdCI6MTU1MzExNjQ3N30.tFtanIwh8SrmJWM5iSUxmj7WaroA_WCtZfTS4KN9N8Q0Vy0O5rRdb7T7ZkFJxnGfwg0fsKfBuM3qTD8NHWNOKqaZX_bQKXQ-cnJHa4DtJX9Udv0MGfg_UHO0DBg5vaC_38beUlSaUPQ0rQAHb9sm0PE1tNOMfLzvPqM1kF3VMBq1dZNpNkDYaV8oleEcm0v8woRj45FYOv34etrgSsf0Pi-68AP8ckG3WJzS_y9dpZAxW3oDIv_XXHZ4TXQw_wPwMKu0UtZoMfctz-5ERk7uTQxeWP6TS9ce2YQ38FqUwIBN3ImAhA3vE2gLsYexFsPiO_I3hSEC272Ya-b-eJZ8vg"
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // MARK: - Setup instance of LPMessagingSDK
        
        /*
         Add the following code initializing the SDK instance. You will need to provide your account number as a String. We have provided an example to use for the quickstart process in the 'accountID' constant above.
         */
        do {
            try LPMessagingSDK.instance.initialize(accountID)
        } catch {
            fatalError("Was unable to initialize LPMessagingSDK for account \(accountID)")
        }
        
        //MARK: - Show LPMessagingSDK View Stack and Conversation View Controller.
        /*
         Here your view controller will call our showConversation method provided by the LPMessagingSDK instance.  This will push on a new navigation stack containing the Conversation View Controller.  You would use either a jwt or an authentication code from your authentication server below in the LPAuthenticationParams object. We have provide you one here as an example.  The LiveEngage console site attached to this account only has a basic set of features available to demonstrate the Conversational Commerce experience.
         */
        let authenticationParams: LPAuthenticationParams = LPAuthenticationParams(jwt: jwt, authenticationType: .authenticated)
        let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountID)
        let conversationViewParams = LPConversationViewParams(conversationQuery: conversationQuery, isViewOnly: false)
        LPMessagingSDK.instance.showConversation(conversationViewParams, authenticationParams: authenticationParams)
    }
    
    // MARK: - Release LPMessagingSDK view stack when client app is backgrounded or suspended
    /*
     The LPMessagingSDK view stack must be removed and deallocated when the presenting app is backgrounded or suspended.  A instance of the view stack will be added upon foregrounding the application.
     */
    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountID)
        if (conversationQuery.getBrandID() == accountID) {
            LPMessagingSDK.instance.removeConversation(conversationQuery)
        }
    }
}

```

```objectivec
#import "DocumentationViewController.h"
#import <LPMessagingSDK/LPMessagingSDK.h>
#import <LPAMS/LPAMS.h>
#import <LPInfra/LPInfra.h>

@implementation DocumentationViewController

// MARK: - Setup Account information.

/// Account ID is your site ID for your LiveEngage Account.
NSString * const accountID = @"14800077";

/// Unique JSON Web Token used for authentication of the consumer.  Enter unique JWT here.
NSString * const jwt = @"eyJhbGciOiJSUzI1NiJ9.eyAgInN1YiI6ICJwdWJsaWNfcXVpY2tzdGFydF91c2VyIiwgICJpc3MiOiAiaHR0cHM6Ly9MUC1BdXRoLmNvbSIsICAiZXhwIjoxNTg0Njc0MDc3LCAgImlhdCI6MTU1MzExNjQ3N30.tFtanIwh8SrmJWM5iSUxmj7WaroA_WCtZfTS4KN9N8Q0Vy0O5rRdb7T7ZkFJxnGfwg0fsKfBuM3qTD8NHWNOKqaZX_bQKXQ-cnJHa4DtJX9Udv0MGfg_UHO0DBg5vaC_38beUlSaUPQ0rQAHb9sm0PE1tNOMfLzvPqM1kF3VMBq1dZNpNkDYaV8oleEcm0v8woRj45FYOv34etrgSsf0Pi-68AP8ckG3WJzS_y9dpZAxW3oDIv_XXHZ4TXQw_wPwMKu0UtZoMfctz-5ERk7uTQxeWP6TS9ce2YQ38FqUwIBN3ImAhA3vE2gLsYexFsPiO_I3hSEC272Ya-b-eJZ8vg";

- (void)viewDidLoad {
    [super viewDidLoad];
    
    // MARK: - Setup instance of LPMessagingSDK
    
    /*
     Add the following code initializing the SDK instance. You will need to provide your account number as a NSString. We have provided an example to use for the quickstart process in the 'accountID' constant above.
     */
    
    NSError *error = nil;
    [[LPMessagingSDK instance] initialize:accountID
                     monitoringInitParams:nil
                                    error:&error];
    
    //MARK: - Show LPMessagingSDK View Stack and Conversation View Controller.
    /*
     Here your view controller will call our showConversation method provided by the LPMessagingSDK instance.  This will push on a new navigation stack containing the Conversation View Controller.  You would use either a jwt or an authentication code from your authentication server below in the LPAuthenticationParams object. We have provide you one here as an example.  The LiveEngage console site attached to this account only has a basic set of features available to demonstrate the Conversational Commerce experience.
     */
    
    
    LPAuthenticationParams *authenticationParams = [[LPAuthenticationParams alloc] initWithAuthenticationCode:nil
                                                                                                          jwt:jwt
                                                                                                  redirectURI:nil
                                                                                        certPinningPublicKeys:nil authenticationType:LPAuthenticationTypeAuthenticated];
    
    id<ConversationParamProtocol> _Nonnull conversationQuery = [[LPMessagingSDK instance] getConversationBrandQuery:accountID
                                                                                                       campaignInfo:nil];
    
    LPConversationViewParams * conversationViewParams = [[LPConversationViewParams alloc] initWithConversationQuery: conversationQuery
                                                                        containerViewController:nil
                                                                                     isViewOnly:false
                                                                conversationHistoryControlParam:nil];
    
    [[LPMessagingSDK instance] showConversation:conversationViewParams
                           authenticationParams:authenticationParams];
}

// MARK: - Release LPMessagingSDK view stack when client app is backgrounded or suspended
/*
 The LPMessagingSDK view stack must be removed and deallocated when the presenting app is backgrounded or suspended.  A instance of the view stack will be added upon foregrounding the application.
 */
- (void) viewWillDisappear:(BOOL)animated {
    [super viewWillDisappear:animated];
    
    id<ConversationParamProtocol> _Nonnull conversationQuery = [[LPMessagingSDK instance] getConversationBrandQuery:accountID
                                                                                                       campaignInfo:nil];
    
    if ([[conversationQuery getBrandID] isEqualToString:accountID]) {
        [[LPMessagingSDK instance] removeConversation:conversationQuery];
    }
}
@end
```

#### Unauthenticated

```swift
import UIKit
import LPMessagingSDK
import LPAMS
import LPInfra
import LPMonitoring

class DocumentationViewController: UIViewController {
    
    // MARK: - Setup Account information to use for Monitoring.
    
    /// Account ID is your site ID for your LiveEngage Account.
    let accountID: String = "77690044"
    /// appIntallID is a Application identifier generated by LiveEngage for Monitoring API.
    let appInstallID: String = "62b50381-4532-42a9-98dd-2045975ce5d3"
    
    override func viewDidLoad() {
        super.viewDidLoad()
        /// Create the following monitoring parameters object.  This object will take in the appInstallID described above.
        let monitoringInitParams: LPMonitoringInitParams? = LPMonitoringInitParams(appInstallID: appInstallID)
        
        // MARK: - Setup instance of LPMessagingSDK
        
        /*
         Add the following code initializing the SDK instance. You will need to provide your account number as a String and the above created monitoring parameters. We have provided an example to use for the quickstart process in the 'accountID' and monitoringInitParams constant.
         */
        do {
            try LPMessagingSDK.instance.initialize(accountID, monitoringInitParams: monitoringInitParams)
        } catch {
            fatalError("Was unable to initialize LPMessagingSDK for account \(accountID)")
        }
        
        //MARK: - Show LPMessagingSDK View Stack and Conversation View Controller.
        
        /*
         Here your view controller will call our showConversation method provided by the LPMessagingSDK instance.  This will push on a new navigation stack containing the Conversation View Controller.  You would not need to authenticate as the LPMessagingSDK instance already has knowledge about your account from the monitoring information provided above. The LiveEngage console site attached to this account only has a basic set of features available to demonstrate the Conversational Commerce experience.
         */
        let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountID)
        let conversationViewParams = LPConversationViewParams(conversationQuery: conversationQuery, isViewOnly: false)
        LPMessagingSDK.instance.showConversation(conversationViewParams)
    }
    
    // MARK: - Release LPMessagingSDK view stack when client app is backgrounded or suspended
    
    /*
     The LPMessagingSDK view stack must be removed and deallocated when the presenting app is backgrounded or suspended.  A instance of the view stack will be added upon foregrounding the application.
     */
    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountID)
        if (conversationQuery.getBrandID() == accountID) {
            LPMessagingSDK.instance.removeConversation(conversationQuery)
        }
    }
}
```

```objectivec
#import "DocumentationViewController.h"
#import <LPInfra/LPInfra.h>
#import <LPMessagingSDK/LPMessagingSDK.h>
#import <LPMonitoring/LPMonitoring.h>

@implementation DocumentationViewController

// MARK: - Setup Account information.

/// Account ID is your site ID for your LiveEngage Account.
NSString * const accountID = @"77690044";

/// appIntallID is a Application identifier generated by LiveEngage for Monitoring API.
NSString * const appInstallID = @"62b50381-4532-42a9-98dd-2045975ce5d3";

- (void)viewDidLoad {
    [super viewDidLoad];

    // MARK: - Setup instance of LPMessagingSDK

    /// Create the following monitoring parameters object.  This object will take in the appInstallID described above.
    LPMonitoringInitParams * monitoringInitParams = [[LPMonitoringInitParams alloc] initWithAppInstallID:accountID];

    /*
     Add the following code initializing the SDK instance. You will need to provide your account number as a String and the above created monitoring parameters. We have provided an example to use for the quickstart process in the 'accountID' and monitoringInitParams constant.
     */

    NSError *error = nil;
    [[LPMessagingSDK instance] initialize:accountID
                     monitoringInitParams:monitoringInitParams
                                    error:&error];

    //MARK: - Show LPMessagingSDK View Stack and Conversation View Controller.
    /*
     Here your view controller will call our showConversation method provided by the LPMessagingSDK instance.  This will push on a new navigation stack containing the Conversation View Controller.  You would not need to authenticate as the LPMessagingSDK instance already has knowledge about your account from the monitoring information provided above. The LiveEngage console site attached to this account only has a basic set of features available to demonstrate the Conversational Commerce experience.
     */

    id<ConversationParamProtocol> _Nonnull conversationQuery = [[LPMessagingSDK instance] getConversationBrandQuery:accountID
                                                                                                       campaignInfo:nil];
    LPConversationViewParams *conversationViewParams = [[LPConversationViewParams alloc] initWithConversationQuery:conversationQuery
                                                                                            containerViewController:nil
                                                                                                         isViewOnly:false
                                                                                    conversationHistoryControlParam:nil];
    [[LPMessagingSDK instance] showConversation:conversationViewParams
                           authenticationParams:nil];
}

// MARK: - Release LPMessagingSDK view stack when client app is backgrounded or suspended

/*
 The LPMessagingSDK view stack must be removed and deallocated when the presenting app is backgrounded or suspended.  A instance of the view stack will be added upon foregrounding the application.
 */
- (void) viewWillDisappear:(BOOL)animated {
    [super viewWillDisappear:animated];

    id<ConversationParamProtocol> _Nonnull conversationQuery = [[LPMessagingSDK instance] getConversationBrandQuery:accountID
                                                                                                       campaignInfo:nil];

    if ([[conversationQuery getBrandID] isEqualToString:accountID]) {
        [[LPMessagingSDK instance] removeConversation:conversationQuery];
    }
}
@end
```


#### Signup



```swift
import UIKit
import LPMessagingSDK
import LPAMS
import LPInfra


class DocumentationViewController: UIViewController {
    
    // MARK: - Setup Account information.
    
    /// Account ID is your site ID for your LiveEngage Account.
    let accountID: String = "14800077"
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // MARK: - Setup instance of LPMessagingSDK
        
        /*
         Add the following code initializing the SDK instance. You will need to provide your account number as a String. We have provided an example to use for the quickstart process in the 'accountID' constant above.
         */
        do {
            try LPMessagingSDK.instance.initialize(accountID)
        } catch {
            fatalError("Was unable to initialize LPMessagingSDK for account \(accountID)")
        }
        
        //MARK: - Show LPMessagingSDK View Stack and Conversation View Controller.
        /*
         Here your view controller will call our showConversation method provided by the LPMessagingSDK instance.  This will push on a new navigation stack containing the Conversation View Controller.  When no authentication parameter object is provided or the authentication type is specified to signup, a unique conversation is created for consumers providing access to LiveEngage agents.  This flow will become deprecated in June 2019. The LiveEngage console site attached to this account only has a basic set of features available to demonstrate the Conversational Commerce experience.
         */
        
        let authenticationParams: LPAuthenticationParams = LPAuthenticationParams(authenticationType: .signup)
        let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountID)
        let conversationViewParams = LPConversationViewParams(conversationQuery: conversationQuery, isViewOnly: false)
        LPMessagingSDK.instance.showConversation(conversationViewParams, authenticationParams: authenticationParams)
    }
    
    // MARK: - Release LPMessagingSDK view stack when client app is backgrounded or suspended
    
    /*
     The LPMessagingSDK view stack must be removed and deallocated when the presenting app is backgrounded or suspended.  A instance of the view stack will be added upon foregrounding the application.
     */
    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountID)
        if (conversationQuery.getBrandID() == accountID) {
            LPMessagingSDK.instance.removeConversation(conversationQuery)
        }
    }
}
```

```objectivec
#import "DocumentationViewController.h"
#import <LPMessagingSDK/LPMessagingSDK.h>
#import <LPAMS/LPAMS.h>
#import <LPInfra/LPInfra.h>

@implementation DocumentationViewController

// MARK: - Setup Account information.

/// Account ID is your site ID for your LiveEngage Account.
NSString * const accountID = @"14800077";

- (void)viewDidLoad {
    [super viewDidLoad];
    
    // MARK: - Setup instance of LPMessagingSDK
    
    /*
     Add the following code initializing the SDK instance. You will need to provide your account number as a NSString. We have provided an example to use for the quickstart process in the 'accountID' constant above.
     */
    
    NSError *error = nil;
    [[LPMessagingSDK instance] initialize:accountID
                     monitoringInitParams:nil
                                    error:&error];
    
    //MARK: - Show LPMessagingSDK View Stack and Conversation View Controller.
    /*
     Here your view controller will call our showConversation method provided by the LPMessagingSDK instance.  This will push on a new navigation stack containing the Conversation View Controller.  When no authentication parameter object is provided or the authentication type is specified to signup, a unique conversation is created for consumers providing access to LiveEngage agents.  This flow will become deprecated in June 2019. The LiveEngage console site attached to this account only has a basic set of features available to demonstrate the Conversational Commerce experience.
     */
    
    LPAuthenticationParams *authenticationParams = [[LPAuthenticationParams alloc] initWithAuthenticationCode:nil
                                                                                                          jwt:nil
                                                                                                  redirectURI:nil
                                                                                        certPinningPublicKeys:nil authenticationType:LPAuthenticationTypeSignup];
    
    id<ConversationParamProtocol> _Nonnull conversationQuery = [[LPMessagingSDK instance] getConversationBrandQuery:accountID
                                                                                                       campaignInfo:nil];
    
    LPConversationViewParams * cp = [[LPConversationViewParams alloc] initWithConversationQuery: conversationQuery
                                                                        containerViewController:nil
                                                                                     isViewOnly:false
                                                                conversationHistoryControlParam:nil];
    
    [[LPMessagingSDK instance] showConversation:cp
                           authenticationParams:authenticationParams];
}

// MARK: - Release LPMessagingSDK view stack when client app is backgrounded or suspended

/*
 The LPMessagingSDK view stack must be removed and deallocated when the presenting app is backgrounded or suspended.  A instance of the view stack will be added upon foregrounding the application.
 */
- (void) viewWillDisappear:(BOOL)animated {
    [super viewWillDisappear:animated];
    
    id<ConversationParamProtocol> _Nonnull conversationQuery = [[LPMessagingSDK instance] getConversationBrandQuery:accountID
                                                                                                       campaignInfo:nil];
    
    if ([[conversationQuery getBrandID] isEqualToString:accountID]) {
        [[LPMessagingSDK instance] removeConversation:conversationQuery];
    }
}

@end
```


### Next Steps

Congratulations!  You're all set.  

You can now do any of the following:

- Turn on the following toggles, under **Capabilities**, to support push notifications and structured content:
  - **Push**: Notifies the user when a new message from the remote user is received.
  - **Maps**: Shows location in the map.

    For details on configuring notifications, refer to [Notifications](pushnotifications.md). 

- Create the **LPMonitoringParams** to get the Engagement for the user, which is needed to start a new conversation with a specific campaign. For details on configuring monitoring, refer to [Initialization with Monitoring Params](initialization-with-monitoring-params.md).

