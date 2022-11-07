---
pagename: Quick Start 5.2.1 and below
redirect_from:
  - consumer-experience-ios-sdk-quick-start-5-2-1-and-below.html
  - mobile-app-messaging-sdk-for-ios-initializing-with-monitoring-params.html
  - initialization-with-monitoring-params.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Quick Starts
permalink: mobile-app-messaging-sdk-for-ios-quick-starts-quick-start-5-2-1-and-below.html
indicator: messaging
---
The LivePerson SDK provides brands with a secure way to foster connections with their customers and increase app engagement and retention.

Use this Quick Start guide to get you up and running with a project powered by LivePerson. When done, you'll be able to send messages between an iOS device and Conversational Cloud.

### Prerequisites

- Followed the [Getting Started Guide](getting-started-with-your-free-trial-account.html) to create a Conversational Cloud account, retrieve your domain, authorize API calls, and authenticate with Conversational Cloud.
- Bundle ID registered in an Apple developer account.
- SDK Release version [here](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-all-releases.html)

### Step 1: Install the SDK into your project

You can install Conversational Cloud Mobile App Messaging SDK for iOS using a couple of different methods:

* [Automatically using CocoaPods](#option-1-cocoapods)
* [Manually copying the libraries to your Xcode Project](#option-2-libraries-copy-to-xcode-project)

{: .attn-note}
For both methods, you are **required** to perform a specific step as a workaround for a [known iOS issue](http://www.openradar.me/radar?id=6409498411401216). It's necessary for archiving your app before publishing it to the App Store. The required step involves adding a script that loops through the frameworks embedded in the application and removes unused architectures (used for the simulator).

#### Option 1: Automatically using CocoaPods

You can use CocoaPods, a dependency manager for Swift and Objective-C projects, to scale your projects elegantly. It provides a standard format for managing external libraries.

1. Install CocoaPods:

   ```bash
   sudo gem install cocoapods
   ```

2. Navigate to your project folder and create a Podfile for your project:

   ```bash
   pod init
   ```

   {: .attn-note}
   The Podfile must be created under your project's folder.

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

5. (**Required**) In your Xcode project settings, navigate to the **Build Phases** tab, and click the + button and select **New Run Script Phase**. Add the following script, which loops through the frameworks embedded in the application and removes unused architectures (used for the simulator).

    ```bash
   bash "${SRCROOT}/Pods/LPMessagingSDK/LPMessagingSDK/LPInfra.framework/frameworks-strip.sh"
    ```

#### Option 2: Manually copying the libraries to your Xcode Project

1. [Download](https://github.com/LivePersonInc/iOSFrameworks) the SDK package.

2. Extract the file to a folder on your computer.

3. In your Xcode project settings, navigate to the **General** tab, and under the **Embedded Binaries** section, add all the Framework files.

4. (**Required**) In your Xcode project settings, navigate to the **Build Phases** tab, and do the following:

   1. Under **Copy Bundle Resources**, make sure you have **LPMessagingSDKModels.bundle**.
   2. Click the + button and select **New Run Script Phase**. Add the following script, which loops through the frameworks embedded in the application and removes unused architectures (used for the simulator).

   ```bash
   bash "${BUILT_PRODUCTS_DIR}/${FRAMEWORKS_FOLDER_PATH}/LPInfra.framework/frameworks-strip.sh"
   ```

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

3. **Show LPMessagingSDK View Stack and Conversation View Controller.** Here, your view controller calls our showConversation method provided by the LPMessagingSDK instance. It pushes a new navigation stack containing the Conversation View Controller. In the LPAuthenticationParams object, you can use either a JWT or authentication code from your authentication server. The Conversational Cloud console site attached to this account only has a basic set of features available to demonstrate the Conversational Commerce experience.

4. **Release the conversation view when deallocating the container.**  The LPMessagingSDK view stack must be released when the client app is backgrounded or suspended.  Foregrounding the application adds an instance of the view stack.

 We have provided an example to use for this quick start process:
   - [Authenticated](#authenticated)
   - [Unauthenticated](#unauthenticated)

#### Authenticated

```swift
import UIKit
import LPMessagingSDK
import LPAMS
import LPInfra

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
            try LPMessagingSDK.instance.initialize(accountID)
        } catch {
            fatalError("Was unable to initialize LPMessagingSDK for account \(accountID)")
        }

        // MARK: - Show LPMessagingSDK View Stack and Conversation View Controller.

        /*
         Here your view controller will call our showConversation method provided by the LPMessagingSDK instance.  This will push on a new navigation stack containing the Conversation View Controller.  You would use either a JWT or an authentication code from your authentication server below in the LPAuthenticationParams object. The Conversational Cloud console site attached to this account only has a basic set of features available to demonstrate the Conversational Commerce experience.
         */

         let authenticationParams = LPAuthenticationParams(authenticationCode: nil,
                                                                          jwt: jwt,
                                                                  redirectURI: nil,
                                                        certPinningPublicKeys: nil,
                                                           authenticationType: .authenticated)

        let welcomeMessageParam = LPWelcomeMessage(message: "How can I help you today?",
                                                 frequency: .FirstTimeConversation)

        let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountID)

        let controlParam = LPConversationHistoryControlParam(historyConversationsStateToDisplay: .none,
                                                                    historyConversationsMaxDays: -1,
                                                                             historyMaxDaysType: .startConversationDate)

        let conversationViewParams = LPConversationViewParams(conversationQuery: conversationQuery,
                                                        containerViewController: nil,
                                                                     isViewOnly: false,
                                                conversationHistoryControlParam: controlParam,
                                                                 welcomeMessage: welcomeMessageParam)

        LPMessagingSDK.instance.showConversation(conversationViewParams, authenticationParams: authenticationParams)
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
#import <LPAMS/LPAMS.h>
#import <LPInfra/LPInfra.h>

@implementation DocumentationViewController

    // MARK: - Setup Account information.

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
        [[LPMessagingSDK instance] initialize: accountID
                         monitoringInitParams: nil
                                        error: &error];

        // MARK: - Show LPMessagingSDK View Stack and Conversation View Controller.
        /*
         Here your view controller will call our showConversation method provided by the LPMessagingSDK instance.  This will push on a new navigation stack containing the Conversation View Controller.  You would use either a JWT or an authentication code from your authentication server below in the LPAuthenticationParams object. We have provide you one here as an example.  The Conversational Cloud console site attached to this account only has a basic set of features available to demonstrate the Conversational Commerce experience.
         */


        LPAuthenticationParams *authenticationParams = [[LPAuthenticationParams alloc] initWithAuthenticationCode: nil
                                                                                                              jwt: jwt
                                                                                                      redirectURI: nil
                                                                                            certPinningPublicKeys: nil
                                                                                               authenticationType: LPAuthenticationTypeAuthenticated];

        id<ConversationParamProtocol> _Nonnull conversationQuery = [[LPMessagingSDK instance] getConversationBrandQuery:accountID
                                                                                                           campaignInfo:nil];
        LPWelcomeMessage * welcomeMessageParam = [[LPWelcomeMessage alloc] initWithMessage:@"How may I help you today?"
                                                                                 frequency:MessageFrequencyFirstTimeConversation];

        LPConversationHistoryControlParam * controlParam = [[LPConversationHistoryControlParam alloc] initWithHistoryConversationsStateToDisplay: LPConversationsHistoryStateToDisplayNone
                                                                                                                     historyConversationsMaxDays: -1
                                                                                                                              historyMaxDaysType: LPConversationHistoryMaxDaysDateTypeStartConversationDate];

        LPConversationViewParams *conversationViewParams = [[LPConversationViewParams alloc] initWithConversationQuery: conversationQuery
                                                                                               containerViewController: self.conversationViewController
                                                                                                            isViewOnly: NO
                                                                                       conversationHistoryControlParam: controlParam
                                                                                                        welcomeMessage: welcomeMessageParam];

        [[LPMessagingSDK instance] showConversation:conversationViewParams
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
import LPAMS
import LPInfra
import LPMonitoring

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
            try LPMessagingSDK.instance.initialize(accountID, monitoringInitParams: monitoringInitParams)
        } catch {
            fatalError("Was unable to initialize LPMessagingSDK for account \(accountID)")
        }

        //MARK: - Show LPMessagingSDK View Stack and Conversation View Controller.

        /*
        Here your view controller will call our showConversation method provided by the LPMessagingSDK instance.  This will push on a new navigation stack containing the Conversation View Controller.  You would not need to authenticate as the LPMessagingSDK instance already has knowledge about your account from the monitoring information provided above. The Conversational Cloud console site attached to this account only has a basic set of features available to demonstrate the Conversational Commerce experience.
        */
        let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountID)
        let historyControlParam = LPConversationHistoryControlParam(historyConversationsStateToDisplay: .none,
                                                                           historyConversationsMaxDays: -1,
                                                                                    historyMaxDaysType: .startConversationDate)
        let welcomeMessage = LPWelcomeMessage(message: "Hello, how may I help you?",
                                            frequency: .FirstTimeConversation)
        let conversationViewParams = LPConversationViewParams(conversationQuery: conversationQuery,
                                                        containerViewController: nil,
                                                                     isViewOnly: false,
                                                conversationHistoryControlParam: historyControlParam,
                                                                 welcomeMessage: welcomeMessage)
        LPMessagingSDK.instance.showConversation(conversationViewParams)
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
#import <LPInfra/LPInfra.h>
#import <LPMessagingSDK/LPMessagingSDK.h>
#import <LPMonitoring/LPMonitoring.h>

@implementation DocumentationViewController

    #pragma mark  - Setup Account information.

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
        [[LPMessagingSDK instance] initialize:accountID
                         monitoringInitParams:monitoringInitParams
                                        error:&error];

        #pragma mark - Show LPMessagingSDK View Stack and Conversation View Controller.

        /*
        Here your view controller will call our showConversation method provided by the LPMessagingSDK instance.  This will push on a new navigation stack containing the Conversation View Controller.  You would not need to authenticate as the LPMessagingSDK instance already has knowledge about your account from the monitoring information provided above. The Conversational Cloud console site attached to this account only has a basic set of features available to demonstrate the Conversational Commerce experience.
        */

        LPWelcomeMessage * welcomeMessageParam = [[LPWelcomeMessage alloc] initWithMessage:@"How may I help you today?"
                                                                                 frequency:MessageFrequencyFirstTimeConversation];

        LPConversationHistoryControlParam * controlParam = [[LPConversationHistoryControlParam alloc] initWithHistoryConversationsStateToDisplay: LPConversationsHistoryStateToDisplayNone
                                                                                                                     historyConversationsMaxDays:-1
                                                                                                                              historyMaxDaysType:LPConversationHistoryMaxDaysDateTypeStartConversationDate];


        id<ConversationParamProtocol> _Nonnull conversationQuery = [[LPMessagingSDK instance] getConversationBrandQuery:accountID
                                                                                                           campaignInfo:nil];


        LPConversationViewParams *conversationViewParams = [[LPConversationViewParams alloc] initWithConversationQuery: conversationQuery
                                                                                               containerViewController: nil
                                                                                                            isViewOnly: false
                                                                                       conversationHistoryControlParam: controlParam welcomeMessage:welcomeMessageParam];

        [[LPMessagingSDK instance] showConversation:conversationViewParams
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

### Supporting Accessibility

When using Window Mode, which is passing a `nil` value as the `containerViewController` on the LPConversationViewParams object, sometimes VO Assistants will read the contents of the ViewController behind the Conversation Screen.
To prevent this from happening, the accessibility on this VC should be hidden preventing the VO Assistant from reading its content.

```swift
self.view.accessibilityElementsHidden = true
// NOTE: if there is a TabBar, it should be hidden too:
// self.tabBarController?.tabBar.accessibilityElementsHidden = true
```

Once the Conversation Screen is dismissed, these elements need to be re-enabled on the ViewController in which they were disabled, the best way to achieve is listening to the following delegate:

```swift
/**
* This delegate method is optional.
* It is called when the conversation view controller removed from its container view controller or window.
*/
func LPMessagingSDKConversationViewControllerDidDismiss() {
  // NOTE: Setting Parent ViewController accessibility hidden value to true, so VO will read the elements on this View
  self.view.accessibilityElementsHidden = false
  // NOTE: if there is a tabbar, it should reset too:
  // self.tabBarController?.tabBar.accessibilityElementsHidden = false
}
```

### Next Steps

Congratulations! You're all set.

You can now do any of the following:

- [Configure the SDK](mobile-app-messaging-sdk-for-ios-configure-the-ios-sdk.html). You can register for LivePerson events related to the conversation, determine the layout of messaging with the app, sends logs from Conversational Cloud to your app, and display consumer information to agents or vice versus. You can also customize the look and feel look and feel of your app using LPConfig object. You can also create your own configuration instance and assign the attributes you want to customize.

- [Configure push notifications](mobile-app-messaging-sdk-for-ios-push-notifications.html). Push and local notifications are a key factor that makes the experience better for consumers. They never have to stay in your app or keep the window open as they will get a proactive notification as soon as a reply or notice is available.

- Configure [Photo sharing](mobile-app-messaging-sdk-for-ios-advanced-features-photo-sharing.html) and [File sharing](mobile-app-messaging-sdk-for-ios-advanced-features-file-sharing.html). Agents within Conversational Cloud to share photos and files with consumers. Once sent, the consumer gets a notification only if push notifications are enabled. Otherwise, when the consumer returns to the conversation, the download icon appears in the unread message area of the conversation. The consumer can tap the thumbnail to view it or share it through the default app on the device.

- [Configure quick replies](mobile-app-messaging-sdk-for-ios-advanced-features-welcome-message-with-quick-replies.html). When a consumer starts a new conversation, or a new customer visits the site, brands can send the first message with a list of quick replies of common intents. 