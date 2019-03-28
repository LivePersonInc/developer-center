---
pagename: Using LivePerson SDK - iOS
redirect_from:
  - consumer-experience-ios-sdk-sampleapp.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Appendix

order: 246
permalink: mobile-app-messaging-sdk-for-ios-appendix-using-liveperson-sdk-ios.html

indicator: messaging
---

<br>
The LivePerson SDK provides brands with a secure and straightforward Mobile App Messaging solution. Through Mobile App Messaging, brands foster connections with their customers and increase app engagement and retention.

Use this Quick Start guide to get you up and running with a project powered by LivePerson. When done, you'll be able to send messages between an iOS device and LiveEngage.

### Prerequisites

- **LiveEngage account** information (account ID and login credentials), messaging enabled, and the mobile app configured.
  <div class="notice">If you don't know your account information, you can get it from your LivePerson account team.</div>
- **Version 3.5.1 and newer**
    - XCode 10 or newer
    - Swift 4.2.1 (swiftlang-1000.11.42 clang-1000.11.45.1), or Objective-C
- **Version ~3.4**
    - Xcode 10 or newer
    - Swift version 4.2 (swiftlang-1000.11.37.1 clang-1000.11.45.1) or Objective-C
- **Version ~3.3**
    - XCode 10 or newer
    - Swift version 4.2 (swiftlang-1000.11.37.1 clang-1000.11.45.1), or Objective-C
- **Version 3.1.1 - 3.3.0**
    - XCode 9.3 or newer
    - Swift 4.1 or newer, or Objective-C
- **Version 3.1 and older**
    - XCode 9.2 or older
    - Swift 4.0 or older, or Objective-C


For information on supported operating systems and devices, refer to the [System Requirements and Language Support](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements.pdf) guide.


### Step 1: Install the SDK into your project

You can install LiveEngage Mobile App Messaging SDK for iOS using a couple of different methods:

* [Automatically using CocoaPods](#option-1-cocoapods)
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

2. Extract the file to a folder on your computer.

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

This step:
1. **Sets up your account information.** You must provide your LiveEngage account number as a string in the 'accountID' constant and a unique JSON Web Token (JWT) in the 'jwt' constant. We have provided an example to use for the this quick start process.  
2. **Sets up and initializes the SDK instance** for the accountID provided.
3. **Sets up and calls the conversation view.** Here, your view controller calls our showConversation method provided by the LPMessagingSDK instance. It pushes a new navigation stack containing the Conversation View Controller. In the LPAuthenticationParams object, you can use either a jwt or authentication code from your authentication server.  The LiveEngage console site attached to this account only has a basic set of features available to demonstrate the Conversational Commerce experience.
4. **Removes the conversation view when deallocating the container.**  The LPMessagingSDK view stack must be released when the client app is backgrounded or suspended.  Foregrounding the application adds an instance of the view stack. 

We have provided code snippets for [Authenticated](#authenticated), [Unauthenticated](#unauthenticated), and [Signup](#signup).

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
         Adding the following code initializes the SDK instance.
         */
        do {
            try LPMessagingSDK.instance.initialize(accountID)
        } catch {
            fatalError("Was unable to initialize LPMessagingSDK for account \(accountID)")
        }

        //MARK: - Show LPMessagingSDK View Stack and Conversation View Controller.
        /*
         Here your view controller will call our showConversation method provided by the LPMessagingSDK instance.  This will push on a new navigation stack containing the Conversation View Controller.  You would use either a jwt or an authentication code from your authentication server below in the LPAuthenticationParams object. The LiveEngage console site attached to this account only has a basic set of features available to demonstrate the Conversational Commerce experience.
         */
        let authenticationParams: LPAuthenticationParams = LPAuthenticationParams(jwt: jwt, authenticationType: .authenticated)
        let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountID)
        let conversationViewParams = LPConversationViewParams(conversationQuery: conversationQuery, isViewOnly: false)
        LPMessagingSDK.instance.showConversation(conversationViewParams, authenticationParams: authenticationParams)
    }

    // MARK: - Release LPMessagingSDK view stack when client app is backgrounded or suspended
    /*
     The LPMessagingSDK view stack must be removed and deallocated when the presenting app is backgrounded or suspended.  Foregrounding the application adds an instance of the view stack.
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
 The LPMessagingSDK view stack must be removed and deallocated when the presenting app is backgrounded or suspended.  Foregrounding the application adds an instance of the view stack.
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
     The LPMessagingSDK view stack must be removed and deallocated when the presenting app is backgrounded or suspended.  Foregrounding the application adds an instance of the view stack.
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
 The LPMessagingSDK view stack must be removed and deallocated when the presenting app is backgrounded or suspended.  Foregrounding the application adds an instance of the view stack.
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
     The LPMessagingSDK view stack must be removed and deallocated when the presenting app is backgrounded or suspended.  Foregrounding the application adds an instance of the view stack.
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
 The LPMessagingSDK view stack must be removed and deallocated when the presenting app is backgrounded or suspended.  Foregrounding the application adds an instance of the view stack.
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

### Step 4: Customizing the Messaging Screen
Now that you've initialized the LPMessagingSDK, you can start customizing your messaging screen.  For example, you can add more options to the LPMessagingSDK menu, such as **Mark as urgent**, **Clear history**, and **Resolve the conversation**.

<div class="important">You must customize your Messaging Screen before initializing a conversation (calling <b>LPMessagingSDK.instance.showConversation()</b>).</div>

1. Add more options to the messaging menu:

   ```swift
   // Call LPMessagingSDK Menu
   LPMessagingSDK.instance.toggleChatActions("Your Account Number")
   ```

2. Get the object containing the default configurations:

   ```swift
   // Configuration instance
   let configuration = LPConfig.defaultConfiguration
   ```

3. Call the predefined customization methods:

   ```swift
   // Set Agent User Bubble Background Color
   configuration.remoteUserBubbleBackgroundColor = UIColor.lightGray
   // Set Agent User Bubble Border Color
   configuration.remoteUserBubbleBorderColor = UIColor.lightGray
   // Set Agent Avatar Silhouette Color
   configuration.remoteUserAvatarIconColor = UIColor.white
   // Set Agent Avatar Background Color
   configuration.remoteUserAvatarBackgroundColor = UIColor.lightGray
   // Set User Bubble Background Color
   configuration.userBubbleBackgroundColor = UIColor.white
   // Set User Bubble Border Color
   configuration.userBubbleBorderColor = UIColor.lightGray
   // Set User Bubble Border Width
   configuration.userBubbleBorderWidth = 1.0
   // Set User Text Color
   configuration.userBubbleTextColor = tangerine
   // Set Scroll to Bottom Button Background Color   
   configuration.scrollToBottomButtonBackgroundColor = tangerine
   ```

   Print the configurations:

   ```swift
   // Print Configurations
   LPConfig.printAllConfigurations()
   ```

For more details on the different attributes you are able to customize, refer to [Customizing and Branding](consumer-experience-ios-sdk-attributes.html).


### Step 5: Customizing the Customer Experience Survey

<div class="important">You must customize your Customer Experience Survey before initializing a conversation (calling <b>LPMessagingSDK.instance.showAgentConversation()</b>).</div>

1. Get the object containing the default configurations:

   ```swift
   // Configuration instance
   let configuration = LPConfig.defaultConfiguration
   ```

2. Call the predefined customization methods:

   ```swift
   // Configuration instance
   let configuration = LPConfig.defaultConfiguration
   // Set Survey Button Background Color
   configuration.csatSubmitButtonBackgroundColor = UIColor.lightGray
   // Set Survey Background Color of the Rating Buttons
   configuration.csatRatingButtonSelectedColor = UIColor.lightGray
   // Set Survey Color for the FCR survey buttons (YES/NO) when selected.
   configuration.csatResolutionButtonSelectedColor = UIColor.lightGray
   // Set Survey Text Color for all Labels.
   configuration.csatAllTitlesTextColor = UIColor.lightGray
   // Set Survey Navigation Bar Background Color
    configuration.csatNavigationBackgroundColor = UIColor.lightGray
   ```

   Print the configurations using:

   ```swift
   // Print Configurations
   LPConfig.printAllConfigurations()
   ```

For more details on the different attributes you are able to customize, refer to [Customizing and Branding](mobile-app-messaging-sdk-for-ios-customization-and-branding-attributes.html#surveys-buttons-csat-and-fcr).

### Step 7: Enable Photo Sharing
A picture is worth a thousand words. **Photo sharing** allows consumers to share images with their agent, so they can better describe an item, pinpoint a problem or specify a product or service.

Before you enable photo sharing, there's a few important things to know about the photo sharing feature. 

* Available only for the Mobile App Messaging SDK.

* Enables photo sharing only; not videos or files.

* One-way only; photos can be sent from consumer to agent, but not vice versa.

* Device storage includes up to 20 images, which is configurable.

* Supports .png, .jpg, and .gif (non-animated).

* Photo size reduction: 
  * **Thumbnail** - 30 KB
  * **Preview** - 3 MB



1. Change the following property during the Configurations:

   ```swift
   // Enable Photo Sharing
   LPConfig.defaultConfiguration.enablePhotoSharing = true
   ```

2. Customize Photo Sharing:

    **Note**: as with the Messaging & Customer Experience Survey, you can also customize some of the elements on the Photo Sharing UI, for the complete list of Attributes visit [Customizing and Branding](consumer-experience-ios-sdk-attributes.html#photo-sharing)

   ```swift
   // Set the Background Color on Photo Sharing Menu
   configuration.photosharingMenuBackgroundColor = UIColor.lightGray
   // Set the text of buttons on Photo Sharing Menu
   configuration.photosharingMenuButtonsTextColor = UIColor.white
   // Set Photo Share Menu Button's Background Color
   configuration.photosharingMenuButtonsBackgroundColor = UIColor.white
   // Set Photo Sharing Menu Buttons Outline Color
   configuration.photosharingMenuButtonsTintColor = UIColor.lightGray
   ```

   Print the configurations using:

   ```swift
   // Print Configurations
   LPConfig.printAllConfigurations()
   ```

#### Step 8: Configuring App for Push Notifications

**Note**: In order for the push notification to work, you will need a **Physical Device**, and two .pem files for **LiveEngage**:

* **First**, a **certificate file** stored using a **pem format**.

* **Second**, a **Key file** stored using a **pem format without a password**.

**_We'll create those later_**.

#### Adding Push Notifications to your Xcode Project

**Note**: In order for the push notification to work, you will need a **Physical Device**.

#### Step 1

1. Navigate to your **Project Settings** > **Capabilities** tab,

2. Turn on the **Push Notificiations** switch,

    **Note**: the steps shown under the **Push Notificiations** should have a check mark, if not, your App isn't fully configure to receive Push Notifications on the **Apple Developer's Portal**

3. Turn on the **Background Modes** switch, and check **Remote notifications**

    **Note**: Add the Required Background Modes key to your info plist file legend should be check.

#### Step 2

4. Add the following imports to your **AppDelegate**:

```swift
// Required LivePerson Import
import LPMessagingSDK
// Required Notification Import
import UserNotifications
```

5. Add the **LPMessagingSDKNotificationDelegate** to your **AppDelegate**

```swift
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, LPMessagingSDKNotificationDelegate {
```

6. To Register for **Push Notifications** on your **AppDelegate.swift** file, locate the method **didFinishLaunchingWithOptions**, and add the following code:

```swift
// Check if iOS 10.0
if #available(iOS 10.0, *) {
  // Register for push remote push notifications
  UNUserNotificationCenter.current().requestAuthorization(options:[.badge, .alert, .sound]) { (granted, error) in
    // Dispatch Async Queue
    DispatchQueue.main.async {
      // LOG
      print("Granted::Push")
      // Register for Push
      UIApplication.shared.registerForRemoteNotifications()
    }
  }
} else {
  // Register for push remote push notifications - Deprecated in iOS 10.0
  application.registerUserNotificationSettings(UIUserNotificationSettings(types: [.badge, .sound, .alert], categories: nil))
  // Register for Notifications
  application.registerForRemoteNotifications()
}
```

7. Add the following Methods to your **AppDelegate** to handle for Registering and Receiving Push Notifications:

```swift
func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
  // Get Token & Parse it
  let token = deviceToken.map { String(format: "%02.2hhx", $0) }.joined()
  // Print Token
  print("Token:: \(token)")
  // Register Push on LPMessagingSDK
  LPMessagingSDK.instance.registerPushNotifications(token: deviceToken, notificationDelegate: self)
}

func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
  // Handle Push Notification
  LPMessagingSDK.instance.handlePush(userInfo)
}
```

#### Enabling Push Notifications on Apple Developer's Portal

1. Login into your Developer Account,
2. On the **Overview** section, click on **Certificates, Identifiers & Profiles**,
3. Under the **Identifiers** section, locate & click on the **App IDs** item,
4. Look for your Application Name or Id (Bundle name), and click on it,
5. The **Push Notification** item should be **checked**, if that's not the case, enable it
6. Make sure the **Push Notification** services are **Enabled** or **Configurable**

**Note**: if the services appear as **Configurable**, that means you'll need to create the corresponden **Certificate** depending on your needs **Development** or **Production**.

#### Creating Push Certificates

#### Creating a Certificate Signing Request file

With this file, we will create both a .p12 file and a .crt file.

**Note**: To manually generate a **Certificate**, you need a **Certificate Signing Request (CSR) file from your Mac**. To create a CSR file, follow the **instructions below** to create one using **Keychain Access**.

#### Step 1

1. In the **Applications** folder on your Mac, open the **Utilities** folder, and launch **Keychain Access**.
2. Within the **Keychain Access** dropdown menu, select **Keychain Access** > **Certificate Assistant** > **Request a Certificate from a Certificate Authority**.

#### Step 2

Creating a **Certificate Signing Request (CSR)**

* In the **Certificate Information** window, enter the following information:
    * In the **User Email Address** field, enter your email address.
    * In the **Common Name** field, enter your name.
    * The **CA Email Address** field should be left **empty**.
    * In the **Request is** group, select the **Saved to disk** option.
    * Click **Continue**, then select a name & location to save your file.
    * Click **Save**.

**Note**: You'll need this **.certSigningRequest** file to create the Certificate on the Apple Developer's Portal

#### Step 3

Creating an **Apple Push Notification service SSL Certificate**

1. Login into your Developer Account,
2. On the **Overview** section, click on **Certificates, Identifiers & Profiles**,
3. Under the **Identifiers** section, locate & click on the **App IDs** item,
4. Look for your Application Name or Id (Bundle name), and click on it, scroll down and click the **Edit** button,
5. Look for the **Push Notification** section, under **Development SSL Certificate** click **Create Certificate...**,
6. **If you already made Step 2, you can skip this, by clicking Continue**, else follow the instructions to create the **Certificate Signing Request (CSR)**, click **Continue**,
7. Upload the **certSigningRequest file** you create on **Step 2**, and click **Continue**
8. Download the Certificate you create.

**Note**: the certificate is usually save with the name **aps_development.cert**

{:start="9"}
9. Locate the Certificate you just create, and **double click** it to **Add it to your Keychain**.

#### Step 4

Creating both **key.pem** file and **cert.pem** file

**Note**: This is used when configuring LiveEngage Push Notification.

1. In the **Applications** folder on your Mac, open the **Utilities** folder, and launch **Keychain Access**,
2. Under the **Category** section on the left, look for the **Certificates** item and click on it,
3. Look for the item with the name: Apple Development IOS Push Service:<YOUR_BUNDLE_IDENTIFIER>,
4. Select the **Certificate** and right click on it, then select the option Export "Apple Development IOS Push Service:<YOUR_BUNDLE_IDENTIFIER>",
5. Select a location for your **Certificate**,

**Note**: is recommended to save the file in the same folder you saved the **aps_development.cert** file, as you need to access both files on the following steps.

{:start="6"}
6. Save the certificate as **Certificates.p12** as a .p12 file,

**Note**: You will be prompted to enter a password for the p12. You can either leave this blank or enter a password of your choosing.

{:start="7"}
7. In the **Applications** folder on your Mac, open the **Utilities** folder, and launch the **Terminal** app.
8. Using the **Terminal** locate the folder in which you saved the **aps_development.cert** file,
9. Create a **.pem** file using the **.cert** file, run the following command on the **Terminal**:

```bash
$ openssl x509 -in aps_development.cer -inform der -out dev-cert.pem
```

{:start="10"}
10. Convert the private keys **.p12** file into a **.pem**:

```bash
$ cp Certificates.p12 key.p12
$ openssl pkcs12 -nocerts -out keyWithPassword.pem -in key.p12
```

**Note**: You will be prompted to enter a **passphrase** for this file. Enter any password and **remember it** for the next step.

{:start="11"}
11. Create a RSA **.pem** key, you'll be prompt for the **passphrase** you used on the previous step:

```bash
 $ openssl rsa -in keyWithPassword.pem -out hostkey.pem
```

#### Step 5

Create Application on LiveEngage & Upload **PEM** files

1. Login into **LiveEngage**, then nagivate to **Campaigns** > **Data Sources**,
2. Under the **Conectors** section, on **Mobile App Management**, click the **Manage** button on the right,
3. On the **Application key management** screen, select **Add new**,
4. On the **Platform** dropdown select **iOS**,
5. Under **Mobile App name**, type the **Bundle Identifier** of your app,

<div class="important">
If your App uses an <b>Apple Development IOS Push Service Certificate</b>, you need to add <b>-Dev</b> at the end of the <b>Bundle Identifier</b>.
</div>

{:start="6"}
6. Click on Create App
7. The **Production** switch is **On** by default, if you're using an **Apple Development IOS Push Service Certificate**, turn **Production** switch is **Off**,
8. Under the **Enable push notification by uploading your certificate files** section, upload the **.pem** files as follows:

    * Certificate file should be : dev-cert.pem
    * Key file should be : hostkey.pem

#### Step 6 (if the App already exist on LiveEngage)

Upload **PEM** files into LiveEngage

1. Login into **LiveEngage**, then nagivate to **Campaigns** > **Data Sources**,
2. Under the **Conectors** section, on **Mobile App Management**, click the **Manage** button on the right,
3. On the **Application key management** screen, select your app,

<div class="important">
If your App uses an <b>Apple Development IOS Push Service Certificate</b>, you need to add <b>-Dev</b> at the end of the <b>Bundle Identifier</b>.
</div>

{:start="4"}
4. The **Production** switch is **On** by default, if you're using an **Apple Development IOS Push Service Certificate**, turn **Production** switch is **Off**
5. Under the **Enable push notification by uploading your certificate files** section, upload the **.pem** files as follows:

    * Certificate file should be : dev-cert.pem
    * Key file should be : hostkey.pem


#### Step 7 (Optional)

Testing Push Notifications

It's important to make sure your **Certificates** are correct and everything is ready to **Push Notifications** from **LiveEngage**, to test add your device is ready, just follow this part.

1. From the App Store on your Mac, download the following App [Easy APNs Provider](https://itunes.apple.com/us/app/easy-apns-provider-push-notification-service-testing-tool/id989622350?mt=12)
2. To get your Device Token, on your Xcode project, on the **AppDelegate.swift** file, locate the method **didRegisterForRemoteNotificationsWithDeviceToken**, and add the following:

```swift
// Get Token & Parse it
let token = deviceToken.map { String(format: "%02.2hhx", $0) }.joined()
// Print Token
print("Token:: \(token)")
```

**Note**: this should print the token on the Xcode Console, on the search field, just look for Token::

{:start="3"}
3. Lauch **Easy APNs Provider** app:
    1. Click on **Add tokens**, and add your Device Token,
    2. Click on **Choose Certificate File**, and add your **aps_development.cert** file,
    3. On **Connect to:** select **gateway.sandbox.push.apple.com** if you're using a Development Certificate,

        **Note**: On the Feedback status screen you should be able to see the **Status Log**, errors will be shown here.

    {:start="4"}
    4. Click in **Send APN**
    5. You should receive a Push Notification.

**Note**: this only ensure that the **Apple Development IOS Push Service Certificate** is able to push Notifications, this process it's not related to **LiveEngage**


<a name="2.5step1"/>

## SDK 2.5.3.0, iOS 10.3, Swift 3


#### Step 1: Installing the SDK

#### Method 1:  Using CocoaPods

**(Optional) Install Cocoapods on your Computer.**

1. On the terminal window, type the following command:

```bash
$ gem install cocoapods
```

{:start="2"}
2. After the installation is over, navigate to your project folder and initialize a new pod using the following command:

```bash
$ pod init
```

**Add LPMessagingSDK to your Podfile**

1. On top of your Podfile, on the source section add:

```ruby
source 'https://github.com/LivePersonInc/iOSPodSpecs.git'
```

{:start="2"}
2. Under your Application Target add:

```ruby
target '<YourApplicatioName>' do

  # Pods for <YourApplicatioName>
  pod 'LPMessagingSDK','~>2.5.3.0'
```

{:start="3"}
3. Your Podfile should look like this:

```ruby
# Uncomment the next line to define a global platform for your project
# platform :ios, '9.0'

source 'https://github.com/CocoaPods/Specs.git'
source 'https://github.com/LivePersonInc/iOSPodSpecs.git'

target '<YourApplicatioName>' do
  # Comment the next line if you're not using Swift and don't want to use dynamic frameworks
  use_frameworks!

  # Pods for <YourApplicatioName>
  pod 'LPMessagingSDK'

end
```

{:start="4"}
4. If you already had a Podfile, your terminal run the following command:

```bash
$ pod update
```

{:start="5"}
5. if not, run the following command:

```bash
$ pod init
```

#### Method 2: Adding LivePerson Libraries

1. Download the SDK package from [Github](https://github.com/LP-Messaging/iOS-Messaging-SDK)

2. Once downloaded, extract the ZIP file to a folder on your Mac.

3. Copy (Drag and Drop) all framework and bundle files into the project.

<a name="2.5step2"/>

#### Step 2: Configure project settings

* If you’re not using Cocoapods, you will have to add the Frameworks to your Project:
    1. In project settings, navigate to the **General tab**, and add all Framework files to the **Embedded Binaries** section.

    2. In the **General tab**, make sure that the framework files are under **Embedded Libraries**.

* In **Build Settings**, make sure **Always Embed Swift Standard Libraries** is set to **YES**.

* Due to a new Apple policy for iOS 10 (or later), apps must declare in their project settings which privacy settings may be used. For more information, refer to Apple’s website. In Xcode info.plist of the project, add two new privacy keys and values:

  *  Key: **NSPhotoLibraryUsageDescription**, Value: **"Photo Library Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS"**

  *  Key: **NSCameraUsageDescription**, Value: **"Camera Privacy Setting for LiveEngage Mobile App Messaging SDK for iOS"**

<div class="important">
This step is required in order to be able to upload your host app into the App Store, as SDK 2.0 has the ability to  share photos from the camera and/or photo library. Note: Due to Apple policy, this step is mandatory even if the photo sharing feature is disabled in the SDK.
</div>

1. In **project settings**, navigate to the **Build Phases** tab, and click the + button to add a **New Run Script Phase**. Add the script below in order to loop through the frameworks embedded in the application and remove unused architectures (used for simulator). **_This step is a workaround for known iOS issue and is necessary for archiving your app before publishing it to the App Store._**

  * If frameworks installed using CocoaPods, use the following script:

```bash
bash "${SRCROOT}/Pods/LPMessagingSDK/LPMessagingSDK/LPInfra.framework/frameworks-strip.sh"
```

  *   If frameworks installed by coping Libraries to Xcode project, use the following script:

```bash
bash "${BUILT_PRODUCTS_DIR}/${FRAMEWORKS_FOLDER_PATH}/LPInfra.framework/frameworks-strip.sh"
```

<a name="2.5step3"/>

#### Step 3: Using the SDK

* On the ViewController.swift that will host the LPMessagingSDK add the following Imports:

```swift
import LPMessagingSDK
import LPAMS
import LPInfra
```

* Locate the function **viewDidLoad()** and Initialize your LPMessagingSDK instance:

```swift
do {
  try LPMessagingSDK.instance.initialize(“Your Account Number”)
} catch {
  return
}
```

*  To start a conversation, add the following code after initializing the **LPMessagingSDK.instance**

```swift
// Get Conversation - ConversationParamProtocol
let conversationParamProtocol = LPMessagingSDK.instance.getConversationBrandQuery(accountNumber)
// Show Agent Conversation
_ = LPMessagingSDK.instance.showAgentConversation(conversationParamProtocol, containerViewController: self)
```

**Note**: In this case, the containerViewController reference is self, given that we have a dedicated ViewController for the LPMessagingSDK, if you want to target a different ViewController you can sent that one as a reference too.

*  To end a conversation, there are two ways, for both you'll need to set up an **@IBAction**:

1.  Manually ending a conversation, on your **@IBAction** call the following code:

```swift
// Get your Conversation Parameters
let conversationParamProtocol = LPMessagingSDK.instance.getConversationBrandQuery(“Your Account Number”)
// Remove the Conversation
LPMessagingSDK.instance.removeConversation(conversationParamProtocol)
```

2. Call the following code on your **@IBAction** to access LPMessagingSDK Menu, this will give you a couple more options like **Mark as urgent**, **Clear history**, and **Resolve the conversation**:

```swift
// Call LPMessagingSDK Menu
LPMessagingSDK.instance.toggleChatActions(“Your Account Number”)
```

<a name="2.5step4"/>

#### Step 4: Customizing the SDK

**Customizing the Messaging Screen**

**Note**: Customizing your Messaging Screen should be done before initializing a conversation (calling **LPMessagingSDK.instance.showAgentConversation()**)

1. Get the object containing the default configurations:

```swift
// Configuration instance
let configuration = LPConfig.defaultConfiguration
```

{:start="2"}
2. Once you have your configuration object you simply call the predefine customization methods like this:

```swift
// Set Agent User Bubble Background Color
configuration.remoteUserBubbleBackgroundColor = UIColor.lightGray
// Set Agent User Bubble Border Color
configuration.remoteUserBubbleBorderColor = UIColor.lightGray
// Set Agent Avatar Silhouette Color
configuration.remoteUserAvatarIconColor = UIColor.white
// Set Agent Avatar Background Color
configuration.remoteUserAvatarBackgroundColor = UIColor.lightGray
// Set User Bubble Background Color
configuration.userBubbleBackgroundColor = UIColor.white
// Set User Bubble Border Color
configuration.userBubbleBorderColor = UIColor.lightGray
// Set User Bubble Border Width
configuration.userBubbleBorderWidth = 1.0
// Set User Text Color
configuration.userBubbleTextColor = tangerine
// Set Scroll to Bottom Button Background Color
configuration.scrollToBottomButtonBackgroundColor = tangerine
```

* At the end just print the configurations using:

```swift
// Print Configurations
LPConfig.printAllConfigurations()
```

**Note**: this object gives you access to all the different attributes you are able to customize, **to see the whole list go to** [the Attributes section of this document](consumer-experience-ios-sdk-attributes.html).

#### Customizing the Customer Experience Survey

**Note**: Customizing the Customer Experience Survey should be done before initializing a conversation (calling **LPMessagingSDK.instance.showAgentConversation()**)

1. Get the object containing the default configurations:

```swift
// Configuration instance
let configuration = LPConfig.defaultConfiguration
```

{:start="2"}
2. Once you have your configuration object you simply call the predefine customization methods like this:

```swift
// Configuration instance
let configuration = LPConfig.defaultConfiguration
// Set Survey Button Background Color
configuration.csatSubmitButtonBackgroundColor = UIColor.lightGray
// Set Survey Background Color of the Rating Buttons
configuration.csatRatingButtonSelectedColor = UIColor.lightGray
// Set Survey Color for the FCR survey buttons (YES/NO) when selected.
configuration.csatResolutionButtonSelectedColor = UIColor.lightGray
// Set Survey Text Color for all Labels.
configuration.csatAllTitlesTextColor = UIColor.lightGray
// Set Survey Navigation Bar Background Color
configuration.csatNavigationBackgroundColor = UIColor.lightGray
```

* At the end just print the configurations using:

```swift
// Print Configurations
LPConfig.printAllConfigurations()
```

Note: this object gives you access to all the different attributes you are able to customize, **to see the whole list go to** [LivePerson](consumer-experience-ios-sdk-attributes.html)

#### Adding Advanced Features

**Enable Photo Sharing**

**Notes**:


  * This feature is available only for the Mobile App Messaging SDK.

  * This features enables photo sharing only (not video/files).

  * Photo-sharing is one-way only: Photos can be sent from consumer to agent, but not vice versa.

  * Device storage includes up to 20 images - this is configurable.

  * Supported formats: .png, .jpg, .gif (non-animated).

  * Photo size reduction: Thumbnail - 30 KB, Preview -3 MB.

1. To enable/disable Photo Sharing on your App, just change the following property during the Configurations:

```swift
// Enable Photo Sharing
LPConfig.defaultConfiguration.enablePhotoSharing = true
```

**Note**: Since this feature is in BETA, you will also need to contact your Account Team in order to enable the feature on your account, if not, even if you enable this property, you won't be able to see the Photo Sharing Button

{:start="2"}
2. Customizing the Photo Sharing

**Note**: as with the Messaging & Customer Experience Survey, you can also customize some of the elements on the Photo Sharing UI, for the complete list of Attributes visit [the relevant section in this document](consumer-experience-ios-sdk-attributes.html#photo-sharing).

```swift
// Set the Background Color on Photo Sharing Menu
configuration.photosharingMenuBackgroundColor = UIColor.lightGray
// Set the text of buttons on Photo Sharing Menu
configuration.photosharingMenuButtonsTextColor = UIColor.white
// Set Photo Share Menu Button's Background Color
configuration.photosharingMenuButtonsBackgroundColor = UIColor.white
// Set Photo Sharing Menu Buttons Outline Color
configuration.photosharingMenuButtonsTintColor = UIColor.lightGray
```

* At the end just print the configurations using:

```swift
// Print Configurations
LPConfig.printAllConfigurations()
```

<a name="2.5step5"/>

#### Step 4: Configuring App for Push Notifications

**Note**: In order for the push notification to work, you will need a **Physical Device**, and two .pem files for **LiveEngage**:

* **First**, a **certificate file** stored using a **pem format**.

* **Second**, a **Key file** stored using a **pem format without a password**.

* **_We'll create those later_**.

#### Adding Push Notifications to your Xcode Project

**Note**: In order for the push notification to work, you will need a **Physical Device**.

#### Step 1

1. Navigate to your **Project Settings** > **Capabilities** tab,

2. Turn on the **Push Notificiations** switch,

    **Note**: the steps shown under the **Push Notificiations** should have a check mark, if not, your App isn't fully configure to receive Push Notifications on the **Apple Developer's Portal**

3. Turn on the **Background Modes** switch, and check **Remote notifications**

    **Note**: Add the Required Background Modes key to your info plist file legend should be check.

#### Step 2

1. Add the following imports to your **AppDelegate**:

```swift
// Required LivePerson Import
import LPMessagingSDK
// Required Notification Import
import UserNotifications
```

{:start="2"}
2. Add the **LPMessagingSDKNotificationDelegate** to your **AppDelegate**

```swift
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, LPMessagingSDKNotificationDelegate {
```

{:start="3"}
3. To Register for **Push Notifications** on your **AppDelegate.swift** file, locate the method **didFinishLaunchingWithOptions**, and add the following code:

```swift
// Check if iOS 10.0
if #available(iOS 10.0, *) {
  // Register for push remote push notifications
  UNUserNotificationCenter.current().requestAuthorization(options:[.badge, .alert, .sound]) { (granted, error) in
    // Check if permissions granted
    if granted {
      // Register for Notifications
      UIApplication.shared.registerForRemoteNotifications()
    }
  }
} else {
  // Register for push remote push notifications - Deprecated in iOS 10.0
  UIApplication.shared.registerUserNotificationSettings(UIUserNotificationSettings(types: [.badge, .sound, .alert], categories: nil))
  // Register for Notifications
  UIApplication.shared.registerForRemoteNotifications()
}
```

{:start="4"}
4. Add the following Methods to your **AppDelegate** to handle for Registering and Receiving Push Notifications:

```swift
func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
  // Register Push on LPMessagingSDK
  LPMessagingSDK.instance.registerPushNotifications(token: deviceToken, notificationDelegate: self)
}

func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
  // Handle Push Notification
  LPMessagingSDK.instance.handlePush(userInfo)
}
```

#### Enabling Push Notifications on Apple Developer's Portal

1. Login into your Developer Account,

2. On the **Overview** section, click on **Certificates, Identifiers & Profiles**,

3. Under the **Identifiers** section, locate & click on the **App IDs** item,

4. Look for your Application Name or Id (Bundle name), and click on it,

5. The **Push Notification** item should be **checked**, if that's not the case, enable it

6. Make sure the **Push Notification** services are **Enabled** or **Configurable**

**Note**: if the services appear as **Configurable**, that means you'll need to create the corresponden **Certificate** depending on your needs **Development** or **Production**.

#### Creating Push Certificates

#### Creating a Certificate Signing Request file

With this file, we will create both a .p12 file and a .crt file. **Note**: To manually generate a **Certificate**, you need a **Certificate Signing Request (CSR) file from your Mac**. To create a CSR file, follow the **instructions below** to create one using **Keychain Access**.

#### Step 1

1. In the **Applications** folder on your Mac, open the **Utilities** folder, and launch **Keychain Access**.

2. Within the **Keychain Access** dropdown menu, select **Keychain Access** > **Certificate Assistant** > **Request a Certificate from a Certificate Authority**.

#### Step 2

Creating a **Certificate Signing Request (CSR)**

* In the **Certificate Information** window, enter the following information:

    * In the **User Email Address** field, enter your email address.

    * In the **Common Name** field, enter your name.

    * The **CA Email Address** field should be left **empty**.

    * In the **Request is** group, select the **Saved to disk** option.

    * Click **Continue**, then select a name & location to save your file.

    * Click **Save**.

**Note**: You'll need this **.certSigningRequest** file to create the Certificate on the Apple Developer's Portal

#### Step 3

Creating an **Apple Push Notification service SSL Certificate**

1. Login into your Developer Account,

2. On the **Overview** section, click on **Certificates, Identifiers & Profiles**,

3. Under the **Identifiers** section, locate & click on the **App IDs** item,

4. Look for your Application Name or Id (Bundle name), and click on it, scroll down and click the **Edit** button,

5. Look for the **Push Notification** section, under **Development SSL Certificate** click **Create Certificate...**,

6. **If you already made Step 2, you can skip this, by clicking Continue**, else follow the instructions to create the **Certificate Signing Request (CSR)**, click **Continue**,

7. Upload the **certSigningRequest file** you create on **Step 2**, and click **Continue**

8. Download the Certificate you create.

**Note**: the certificate is usually save with the name **aps_development.cert**

9. Locate the Certificate you just create, and **double click** it to **Add it to your Keychain**.

#### Step 4

Creating both **key.pem** file and **cert.pem** file

**Note**: This is used when configuring LiveEngage Push Notification.

1. In the **Applications** folder on your Mac, open the **Utilities** folder, and launch **Keychain Access**,

2. Under the **Category** section on the left, look for the **Certificates** item and click on it,

3. Look for the item with the name: **Apple Development IOS Push Service:<YOUR_BUNDLE_IDENTIFIER>**,

4. Select the **Certificate** and right click on it, then select the option **Export "Apple Development IOS Push Service:<YOUR_BUNDLE_IDENTIFIER>"**,

5. Select a location for your **Certificate**,

**Note**: is recommended to save the file in the same folder you saved the **aps_development.cert** file, as you need to access both files on the following steps.

6. Save the certificate as **Certificates.p12** as a .p12 file,

**Note**: You will be prompted to enter a password for the p12. You can either leave this blank or enter a password of your choosing.

7. In the **Applications** folder on your Mac, open the **Utilities** folder, and launch the **Terminal** app.

8. Using the **Terminal** locate the folder in which you saved the **aps_development.cert** file,

9. Create a **.pem** file using the **.cert** file, run the following command on the **Terminal**:

```bash
$ openssl x509 -in aps_development.cer -inform der -out dev-cert.pem
```

10. Convert the private keys **.p12** file into a **.pem**:

```bash
$ cp Certificates.p12 key.p12
$ openssl pkcs12 -nocerts -out keyWithPassword.pem -in key.p12
```

**Note**: You will be prompted to enter a **passphrase** for this file. Enter any password and **remember it** for the next step.

11. Create a RSA **.pem** key, you'll be prompt for the **passphrase** you used on the previous step:

```bash
 $ openssl rsa -in keyWithPassword.pem -out hostkey.pem
```

#### Step 5

Create Application on LiveEngage & Upload **PEM** files

1. Login into **LiveEngage**, then nagivate to **Campaigns** > **Data Sources**,

2. Under the **Conectors** section, on **Mobile App Management**, click the **Manage** button on the right,

3. On the **Application key management** screen, select **Add new**,

4. On the **Platform** dropdown select **iOS**,

5. Under **Mobile App name**, type the **Bundle Identifier** of your app,

<div class="important">
If your App uses an <b>Apple Development IOS Push Service Certificate</b>, you need to add <b>-Dev</b> at the end of the <b>Bundle Identifier</b>.
</div>

6. Click on Create App

7. The **Production** switch is **On** by default, if you're using an **Apple Development IOS Push Service Certificate**, turn **Production** switch is **Off**,

8. Under the **Enable push notification by uploading your certificate files** section, upload the **.pem** files as follows:

    * Certificate file should be : **dev-cert.pem**

    * Key file should be : **hostkey.pem**

#### Step 6 (if the App already exists on LiveEngage)

Upload **PEM** files into LiveEngage

1. Login into **LiveEngage**, then nagivate to **Campaigns** > **Data Sources**,
2. Under the **Conectors** section, on **Mobile App Management**, click the **Manage** button on the right,
3. On the **Application key management** screen, select your app,

<div class="important">
If your App uses an <b>Apple Development IOS Push Service Certificate</b>, you need to add <b>-Dev</b> at the end of the <b>Bundle Identifier</b>.
</div>

4. The **Production** switch is **On** by default, if you're using an **Apple Development IOS Push Service Certificate**, turn **Production** switch is **Off**

5. Under the **Enable push notification by uploading your certificate files** section, upload the **.pem** files as follows:

    * Certificate file should be : **dev-cert.pem**

    * Key file should be : **hostkey.pem**

#### Step 7 (Optional)

Testing Push Notifications

It's important to make sure your **Certificates** are correct and everything is ready to **Push Notifications** from **LiveEngage**, to test add your device is ready, just follow this part:

1. From the App Store on your Mac, download the following App [Easy APNs Provider](https://itunes.apple.com/us/app/easy-apns-provider-push-notification-service-testing-tool/id989622350?mt=12)

2. To get your Device Token, on your Xcode project, on the **AppDelegate.swift** file, locate the method **didRegisterForRemoteNotificationsWithDeviceToken**, and add the following:

```swift
// Get Token & Parse it
let token = deviceToken.map { String(format: "%02.2hhx", $0) }.joined()
// Print Token
print("Token:: \(token)")
```

**Note**: this should print the token on the Xcode Console, on the search field, just look for Token::

3. Lauch **Easy APNs Provider** app:

    1. Click on **Add tokens**, and add your Device Token,

    2. Click on **Choose Certificate File**, and add your **aps_development.cert** file,

    3. On **Connect to:** select **gateway.sandbox.push.apple.com** if you're using a Development Certificate. **Note**: On the Feedback status screen you should be able to see the **Status Log**, errors will be shown here,

    4. Click in **Send APN**

    5. You should receive a Push Notification.

**Note**: this only ensure that the **Apple Development IOS Push Service Certificate** is able to push Notifications, this process it's not related to **LiveEngage**
