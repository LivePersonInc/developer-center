---
pagename: Quick Start - 6.0 and up (XCFramework support)
redirect_from:
  - consumer-experience-ios-sdk-quick-start-6-0-and-up.html
  - consumer-experience-ios-sdk-quick-start.html
  - mobile-app-messaging-sdk-for-ios-quick-start.html
  - consumer-experience-ios-sdk-quick-start.html#step-4-optional-initialization-with-monitoring-params
  - mobile-app-messaging-sdk-for-ios-quick-start.html#step-3-initialize-the-lpmessagingsdk
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Quick Starts
permalink: mobile-app-messaging-sdk-for-ios-quick-starts-quick-start-6-0-and-up-xcframework-support.html
indicator: messaging
---

### Overview

In this Quick Start, we will cover the steps that will get you up and running with SDK version 6.0 and up. SDK V6.0 has been modified in the new format of XCFramework. With the new framework that was introduced by Apple, both architectures arm64 and x86_64 builds of the library are consolidated into one single bundle of LPMessagingSDK.xcframework, the four frameworks (LPMessagingSDK.framework, LPInfra.framework, LPAMS.framework and LPMonitoring.framework) have been unified into one framework (LPMessagingSDK.xcframework), and we have reduced the exposure of CoreData Objects to the brands apps.   

**Here are some of the advantages that the new framework provides:** 
- XCFramework uses Swift Module Interface which lists out all the public APIs of the module in a textual format that behaves like source code. Since they behave like source code, future versions of the Swift Compiler will be able to import the module interfaces created with older versions. This removes the version-lock which is currently in Swift.

- In older versions, the SDK builds the universal framework for the clients which supports both devices and simulators. As a result, the clients, before submitting the app, need to remove x86_64 which is the simulator architecture. The new XCFramework simplifies all this by eliminating the need for building a universal framework - in the process of producing the XCFramework, all the supported architectures can be combined within one XCFramework.


- XCFramework packages all dependencies under all target platforms and architectures into one single bundle. More information about XCFramework can be found [here](https://developer.apple.com/videos/play/wwdc2019/416/), and the Xcode help article can be found [here](https://help.apple.com/xcode/mac/11.4/#/dev51a648b07). 


### Prerequisites

- Followed the [Getting Started Guide](getting-started-with-your-free-trial-account.html) to create a Conversational Cloud account, retrieve your domain, authorize API calls, and authenticate with Conversational Cloud.  
- Bundle ID registered in an Apple developer account.
- Xcode11 and above
- Swift 5.1 and above
- Cocoapod 1.9.0 and above

### Step 1: Install the SDK into your project

You can install Conversational Cloud Mobile App Messaging SDK for iOS using a couple of different methods:

* [Automatically using CocoaPods](#option-1-cocoapods)
* [Manually copying the libraries to your Xcode Project](#option-2-libraries-copy-to-xcode-project)

<div class="important">For both methods, you are <b>required</b> to perform a specific step as a workaround for a <a href="http://www.openradar.me/radar?id=6409498411401216" target="_blank">known iOS issue</a>. It's necessary for archiving your app before publishing it to the App Store. The required step involves adding a script that loops through the frameworks embedded in the application and removes unused architectures (used for the simulator).</div>

#### *Option 1: Automatically using CocoaPods*

You can use CocoaPods, a dependency manager for Swift and Objective-C projects, to scale your projects elegantly. It provides a standard format for managing external libraries.

1. Install CocoaPods:

   ```bash
   sudo gem install cocoapods
   ```

2. Navigate to your project folder and create a Podfile for your project:

   ```bash
   pod init
   ```

   <div class="important">
   The Podfile must be created under your project's folder.
   </div>

3. Open the Podfile.

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

4. In your project folder, install the dependencies for your project and then upgrade to the latest SDK:

   ```bash
   pod install
   pod update
   ```

#### *Option 2: Manually copying the libraries to your Xcode Project*

1. [Download](https://github.com/LP-Messaging/iOS-Messaging-SDK) the SDK package.

2. Extract the file to a folder on your computer.

3. In your Xcode project settings, navigate to the **General** tab, and under the **Embedded Binaries** section, add all the Framework files.

4. (**Required**) In your Xcode project settings, navigate to the **Build Phases** tab, and do the following:

   1. Under **Copy Bundle Resources**, make sure you have **LPMessagingSDKModels.bundle**.  


### Step 2: Configure project settings to connect Conversational Cloud SDK

1. Under **Build Settings**, make sure you set **Always Embed Swift Standard Libraries** to **YES**.

2. (**Required for iOS 10 or newer**) In the project's Xcode info.plist, add the following privacy keys and values:  

    * **NSPhotoLibraryUsageDescription**: Photo Library Privacy Setting for Conversational Cloud Mobile App Messaging SDK for iOS

    * **NSCameraUsageDescription**: Camera Privacy Setting for Conversational Cloud Mobile App Messaging SDK for iOS

    * **NSMicrophoneUsageDescription**: Microphone Privacy Setting for Conversational Cloud Mobile App Messaging SDK for iOS

   Alternatively, you can open the Info.plist file in an external text editor and then paste the XML into the file:

   ```xml
   <key>NSPhotoLibraryUsageDescription</key>
   <string>Photo Library Privacy Setting for Conversational Cloud Mobile App Messaging SDK for iOS</string>
   <key>NSCameraUsageDescription</key>
   <string>Camera Privacy Setting for Conversational Cloud Mobile App Messaging SDK for iOS</string>
   <key>NSMicrophoneUsageDescription</key>
   <string>Microphone Privacy Setting for Conversational Cloud Mobile App Messaging SDK for iOS</string>
   ```


### Step 3: Initialize the LPMessagingSDK
Before you can show a conversation, you must initialize the Messaging SDK.  

1. **Set up your account information.** 
   1. Provide your Conversational Cloud account number as a string in the `accountID` constant.
   2. Provide a unique JSON Web Token (JWT) in the `jwt` constant.   

2. **Set up instance of LPMessagingSDK** for the accountID provided.

3. **Show LPMessagingSDK View Stack and Conversation View Controller.** Here, your view controller calls our showConversation method provided by the LPMessagingSDK instance. It pushes a new navigation stack containing the Conversation View Controller. In the LPAuthenticationParams object, you can use either a jwt or authentication code from your authentication server.  The Conversational Cloud console site attached to this account only has a basic set of features available to demonstrate the Conversational Commerce experience.

4. **Release the conversation view when deallocating the container.**  The LPMessagingSDK view stack must be released when the client app is backgrounded or suspended.  Foregrounding the application adds an instance of the view stack. 

 We have provided an example to use for this quick start process:   
   - [Authenticated](#authenticated)
   - [Unauthenticated](#unauthenticated)

#### Authenticated 

```swift
import UIKit
import LPMessagingSDK

class DocumentationViewController: UIViewController {

    // MARK: - Set up Account information.

    /// Account ID is your Conversational Cloud account Number.
    let accountID: String = "14800077"
    /// Unique JSON Web Token used for authentication of the consumer.  Enter unique JWT here.
    let jwt: String = "eyJhbGciOiJSUzI1NiJ9.eyAgInN1YiI6ICJwdWJsaWNfcXVpY2tzdGFydF91c2VyIiwgICJpc3MiOiAiaHR0cHM6Ly9MUC1BdXRoLmNvbSIsICAiZXhwIjoxNTg0Njc0MDc3LCAgImlhdCI6MTU1MzExNjQ3N30.tFtanIwh8SrmJWM5iSUxmj7WaroA_WCtZfTS4KN9N8Q0Vy0O5rRdb7T7ZkFJxnGfwg0fsKfBuM3qTD8NHWNOKqaZX_bQKXQ-cnJHa4DtJX9Udv0MGfg_UHO0DBg5vaC_38beUlSaUPQ0rQAHb9sm0PE1tNOMfLzvPqM1kF3VMBq1dZNpNkDYaV8oleEcm0v8woRj45FYOv34etrgSsf0Pi-68AP8ckG3WJzS_y9dpZAxW3oDIv_XXHZ4TXQw_wPwMKu0UtZoMfctz-5ERk7uTQxeWP6TS9ce2YQ38FqUwIBN3ImAhA3vE2gLsYexFsPiO_I3hSEC272Ya-b-eJZ8vg"

    override func viewDidLoad() {
        super.viewDidLoad()

        // MARK: - Set up instance of LPMessagingSDK

        /*
         Adding the following code initializes the SDK instance.
         */
        do {
            try LPMessaging.instance.initialize(accountID)
        } catch {
            fatalError("Was unable to initialize LPMessagingSDK for account \(accountID)")
        }

        //MARK: - Show LPMessagingSDK View Stack and Conversation View Controller.
        /*
        Here your view controller will call our showConversation method provided by the LPMessagingSDK instance.  This will push on a new navigation stack containing the Conversation View Controller.  You would use either a jwt or an authentication code from your authentication server below in the LPAuthenticationParams object. The Conversational Cloud console site attached to this account only has a basic set of features available to demonstrate the Conversational Commerce experience.
        */
        let authenticationParams = LPAuthenticationParams(authenticationCode: nil,
                                                                         jwt: jwt,
                                                                 redirectURI: nil,
                                                       certPinningPublicKeys: nil,
                                                          authenticationType: .authenticated)
         
        let welcomeMessageParam = LPWelcomeMessage(message: "How can i help you today?", frequency: .FirstTimeConversation)
        
        let conversationQuery = LPMessaging.instance.getConversationBrandQuery(accountID)
        
        let controlParam = LPConversationHistoryControlParam(historyConversationsStateToDisplay: .all,
                                                                    historyConversationsMaxDays: -1,
                                                                             historyMaxDaysType: .startConversationDate)
        
        let conversationViewParams = LPConversationViewParams(conversationQuery: conversationQuery,
                                                        containerViewController: nil,
                                                                     isViewOnly: false,
                                                conversationHistoryControlParam: controlParam,
                                                                 welcomeMessage: welcomeMessageParam)
        
        LPMessaging.instance.showConversation(conversationViewParams, authenticationParams: authenticationParams)
    }

    // MARK: - Release LPMessagingSDK view stack when client app is backgrounded or suspended
    
    deinit {
        let conversationQuery = LPMessaging.instance.getConversationBrandQuery(accountID)
        if (conversationQuery.getBrandID() == accountID) {
            LPMessaging.instance.removeConversation(conversationQuery)
        }
    }
}

```

```objc

#import "DocumentationViewController.h"
#import <LPMessagingSDK/LPMessagingSDK.h>

@implementation DocumentationViewController

#pragma mark  - Setup Account information.

/// Account ID is your site ID for your Conversational Cloud Account.
NSString * const accountID = @"14800077";

/// Unique JSON Web Token used for authentication of the consumer.  Enter unique JWT here.
NSString * const jwt = @"eyJhbGciOiJSUzI1NiJ9.eyAgInN1YiI6ICJwdWJsaWNfcXVpY2tzdGFydF91c2VyIiwgICJpc3MiOiAiaHR0cHM6Ly9MUC1BdXRoLmNvbSIsICAiZXhwIjoxNTg0Njc0MDc3LCAgImlhdCI6MTU1MzExNjQ3N30.tFtanIwh8SrmJWM5iSUxmj7WaroA_WCtZfTS4KN9N8Q0Vy0O5rRdb7T7ZkFJxnGfwg0fsKfBuM3qTD8NHWNOKqaZX_bQKXQ-cnJHa4DtJX9Udv0MGfg_UHO0DBg5vaC_38beUlSaUPQ0rQAHb9sm0PE1tNOMfLzvPqM1kF3VMBq1dZNpNkDYaV8oleEcm0v8woRj45FYOv34etrgSsf0Pi-68AP8ckG3WJzS_y9dpZAxW3oDIv_XXHZ4TXQw_wPwMKu0UtZoMfctz-5ERk7uTQxeWP6TS9ce2YQ38FqUwIBN3ImAhA3vE2gLsYexFsPiO_I3hSEC272Ya-b-eJZ8vg";

- (void)viewDidLoad {
   [super viewDidLoad];

    #pragma mark - Setup instance of LPMessagingSDK

    /*
     Add the following code initializing the SDK instance. You will need to provide your account number as a NSString. We have provided an example to use for the quickstart process in the 'accountID' constant above.
     */

    NSError *error = nil;
    [[LPMessaging instance] initialize:accountID
                  monitoringInitParams:nil
                                 error:&error];

    #pragma mark Show LPMessagingSDK View Stack and Conversation View Controller.

    /*
     Here your view controller will call our showConversation method provided by the LPMessagingSDK instance.  This will push on a new navigation stack containing the Conversation View Controller.  You would use either a jwt or an authentication code from your authentication server below in the LPAuthenticationParams object. We have provide you one here as an example.  The Conversational Cloud console site attached to this account only has a basic set of features available to demonstrate the Conversational Commerce experience.
     */


    LPAuthenticationParams *authenticationParams = [[LPAuthenticationParams alloc] initWithAuthenticationCode:nil
                                                                                                          jwt:jwt
                                                                                                  redirectURI:nil
                                                                                        certPinningPublicKeys:nil
                                                                                           authenticationType:LPAuthenticationTypeAuthenticated];

    id<ConversationParamProtocol> _Nonnull conversationQuery = [[LPMessaging instance] getConversationBrandQuery:accountID
                                                                                                       campaignInfo:nil];
    LPWelcomeMessage * welcomeMessageParam = [[LPWelcomeMessage alloc] initWithMessage:@"How may i help you today?"
                                                                             frequency:MessageFrequencyFirstTimeConversation];
                                                                                  
    LPConversationHistoryControlParam * controlParam = [[LPConversationHistoryControlParam alloc] initWithHistoryConversationsStateToDisplay: LPConversationsHistoryStateToDisplayNone
                                                                                                                 historyConversationsMaxDays: -1
                                                                                                                          historyMaxDaysType: LPConversationHistoryMaxDaysDateTypeStartConversationDate];
                                                                                  
    LPConversationViewParams *conversationViewParams = [[LPConversationViewParams alloc]    initWithConversationQuery: conversationQuery
                                                                                              containerViewController: self.conversationViewController
                                                                                                           isViewOnly: NO
                                                                                      conversationHistoryControlParam: controlParam
                                                                                                       welcomeMessage: welcomeMessageParam];

    [[LPMessaging instance] showConversation:conversationViewParams
                        authenticationParams:authenticationParams];
}

    #pragma mark - Release LPMessagingSDK view stack when client app is backgrounded or suspended
    - (void) dealloc {
        id<ConversationParamProtocol> _Nonnull conversationQuery = [[LPMessaging instance] getConversationBrandQuery:accountID
                                                                                                        campaignInfo:nil];
        
        if ([[conversationQuery getBrandID] isEqualToString:accountID]) {
            [[LPMessaging instance] removeConversation:conversationQuery];
        }
    }
@end
```

#### Unauthenticated

```swift
import UIKit
import LPMessagingSDK

class DocumentationViewController: UIViewController {

    // MARK: - Setup Account information to use for Monitoring.

    /// Account ID is your site ID for your Conversational Cloud Account.
    let accountID: String = "77690044"
    /// appIntallID is a Application identifier generated by Conversational Cloud for Monitoring API.
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
            try LPMessaging.instance.initialize(accountID, monitoringInitParams: monitoringInitParams)
        } catch {
            fatalError("Was unable to initialize LPMessagingSDK for account \(accountID)")
        }
    
        //MARK: - Show LPMessagingSDK View Stack and Conversation View Controller.
    
        /*
        Here your view controller will call our showConversation method provided by the LPMessagingSDK instance.  This will push on a new navigation stack containing the Conversation View Controller.  You would not need to authenticate as the LPMessagingSDK instance already has knowledge about your account from the monitoring information provided above. The Conversational Cloud console site attached to this account only has a basic set of features available to demonstrate the Conversational Commerce experience.
        */
        let conversationQuery = LPMessaging.instance.getConversationBrandQuery(accountID)
        let historyControlParam = LPConversationHistoryControlParam(historyConversationsStateToDisplay: .all, historyConversationsMaxDays: -1, historyMaxDaysType: .startConversationDate)
        let welcomeMessage = LPWelcomeMessage(message: "Hello, how may I help you?", frequency: .FirstTimeConversation)
        let conversationViewParams = LPConversationViewParams(conversationQuery: conversationQuery,
        containerViewController: nil, isViewOnly: false, conversationHistoryControlParam: historyControlParam, welcomeMessage: welcomeMessage)
        LPMessaging.instance.showConversation(conversationViewParams)
    }


    // MARK: - Release LPMessagingSDK view stack when client app is backgrounded or suspended
        
    deinit {
        let conversationQuery = LPMessaging.instance.getConversationBrandQuery(accountID)
        if (conversationQuery.getBrandID() == accountID) {
            LPMessaging.instance.removeConversation(conversationQuery)
        }
    }
}
```

```objc

#import "DocumentationViewController.h"
#import <LPMessagingSDK/LPMessagingSDK.h>

@implementation DocumentationViewController

    #pragma mark - Setup Account information.
    
    /// Account ID is your site ID for your Conversational Cloud Account.
    NSString * const accountID = @"77690044";
    
    /// appIntallID is a Application identifier generated by Conversational Cloud for Monitoring API.
    NSString * const appInstallID = @"62b50381-4532-42a9-98dd-2045975ce5d3";

    - (void)viewDidLoad {
        [super viewDidLoad];
    
        #pragma mark Setup instance of LPMessagingSDK
        
        /// Create the following monitoring parameters object.  This object will take in the appInstallID described above.
        LPMonitoringInitParams * monitoringInitParams = [[LPMonitoringInitParams alloc] initWithAppInstallID:accountID];
        
        /*
        Add the following code initializing the SDK instance. You will need to provide your account number as a String and the above created monitoring parameters. We have provided an example to use for the quickstart process in the 'accountID' and monitoringInitParams constant.
        */
        
        NSError *error = nil;
        [[LPMessaging instance] initialize:accountID
                      monitoringInitParams:monitoringInitParams
                                     error:&error];
        
        #pragma mark Show LPMessagingSDK View Stack and Conversation View Controller.
        
        /*
        Here your view controller will call our showConversation method provided by the LPMessagingSDK instance.  This will push on a new navigation stack containing the Conversation View Controller.  You would not need to authenticate as the LPMessagingSDK instance already has knowledge about your account from the monitoring information provided above. The Conversational Cloud console site attached to this account only has a basic set of features available to demonstrate the Conversational Commerce experience.
        */
        
        LPWelcomeMessage * welcomeMessageParam = [[LPWelcomeMessage alloc] initWithMessage: @"How may i help you today?"
                                                                                 frequency: MessageFrequencyFirstTimeConversation];
        
        LPConversationHistoryControlParam * controlParam = [[LPConversationHistoryControlParam alloc] initWithHistoryConversationsStateToDisplay: LPConversationsHistoryStateToDisplayNone
                                                                                                                     historyConversationsMaxDays: -1
                                                                                                                              historyMaxDaysType: LPConversationHistoryMaxDaysDateTypeStartConversationDate];
        
        
        id<ConversationParamProtocol> _Nonnull conversationQuery = [[LPMessaging instance] getConversationBrandQuery: accountID
                                                                                                        campaignInfo: nil];
        
        
        LPConversationViewParams *conversationViewParams = [[LPConversationViewParams alloc] initWithConversationQuery:conversationQuery 
                                                                                               containerViewController:nil 
                                                                                                            isViewOnly:false 
                                                                                        onversationHistoryControlParam:controlParam 
                                                                                                        welcomeMessage:welcomeMessageParam];
        
        [[LPMessaging instance] showConversation:conversationViewParams
                            authenticationParams:nil];
    }
    
    #pragma mark - Release LPMessagingSDK view stack when client app is backgrounded or suspended 
    
    - (void) dealloc {
        id<ConversationParamProtocol> _Nonnull conversationQuery = [[LPMessaging instance] getConversationBrandQuery:accountID
                                                                                                        campaignInfo:nil];
        
        if ([[conversationQuery getBrandID] isEqualToString:accountID]) {
            [[LPMessaging instance] removeConversation:conversationQuery];
        }
    }

@end
```

### Next Steps

Congratulations!  You're all set.  

You can now do any of the following:

- [Configure the SDK](mobile-app-messaging-sdk-for-ios-configure-the-ios-sdk.html). You can register for LivePerson events related to the conversation, determine the layout of messaging with the app, sends logs from Conversational Cloud to your app, and display consumer information to agents or vice versus. You can also customize the look and feel look and feel of your app using LPConfig object. You can also create your own configuration instance and assign the attributes you want to customize.

- [Configure push notifications](mobile-app-messaging-sdk-for-ios-push-notifications.html). Push and local notifications are a key factor that makes the experience better for consumers. They never have to stay in your app or keep the window open as they will get a proactive notification as soon as a reply or notice is available.

- Configure [Photo sharing](mobile-app-messaging-sdk-for-ios-advanced-features-photo-sharing.html) and [File sharing](mobile-app-messaging-sdk-for-ios-advanced-features-file-sharing.html). Agents within Conversational Cloud to share photos and files with consumers. Once sent, the consumer gets a notification only if push notifications are enabled. Otherwise, when the consumer returns to the conversation, the download icon appears in the unread message area of the conversation. The consumer can tap the thumbnail to view it or share it through the default app on the device.  

- [Configure quick replies](mobile-app-messaging-sdk-for-ios-advanced-features-welcome-message-with-quick-replies.html). When a consumer starts a new conversation, or a new customer visits the site, brands can send the first message with a list of quick replies of common intents.  

### Upgrading from older SDK versions to 6.0:

This guide will help current users of older versions of the SDK to upgrade to the new SDK 6.0 and upwards.  

**How to upgrade?**

Before you start, important to note:
* Before SDK 6.0, there was a dependency between Xcode, Swift version, and SDK version - That forced customers to upgrade their Xcode or Swift version, this version unlocks this dependency. 
* The class '**LPMessagingSDK**' has been renamed  '**LPMessaging**'.


**Step 1:**
* Rename **LPMessagingSDK** to **LPMessaging**.
* Remove of all import statements such as import LPInfra, import LPAMS, import LPMonitoring - keep only: import LPMessagingSDK.

**Step 2:**
* Replace any class/facade function calls to the new LPMessaging class. Examples:
```swift
LPAMSFacade.getUnreadMessagesCount()
```
is now 
```swift
LPMessaging.instance.getUnreadMessagesCount()
```
```swift
LPInfraFacade.getUnreadMessagesCount()
```
is now 
```swift
LPMessaging.instance.getUnreadMessagesCount()
```
```swift
LPMonitoring.sendSDEWithConsumerID()
```
is now 
```swift
LPMessaging.instance.sendSDEWithConsumerID()
```

**Step 3:**
* If  you are using the Logging Module please refer to this [document](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-advanced-features-logging.html).
* Example of changes in this model:

 Setting up the log level is now
```swift
LPMessaging.instance.setLoggingLevel(level: .TRACE)
```
  
Old way subscribing to received logs from LPMessagingSDK  
  
```swift
LPMessagingSDK.instance.subscribeLogEvents(.trace)
```

Is now 

```swift
LPMessaging.instance.getLogSnapshot(level: LPLoggingLevel) -> [String]
LPMessaging.instance.getLogStringBlock(level: LPLoggingLevel) -> String
```
