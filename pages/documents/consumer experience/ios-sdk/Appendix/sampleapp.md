---
title: Using LivePerson SDK - iOS
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: Appendix

order: 246
permalink: consumer-experience-ios-sdk-sampleapp.html

indicator: messaging
---

##### Table of Contents  

### SDK 2.8.0, iOS 11.0, Swift 4

[Installing the SDK](#2.8step1)  
[Configure project settings](#2.8step2)  
[Using the SDK](#2.8step3)  
[Customizing the SDK](#2.8step4)  
[Configuring App for Push Notifications](#2.8step5)  

### SDK 2.5.3.0, iOS 10.3, Swift 3

[Installing the SDK](#2.5step1)  
[Configure project settings](#2.5step2)  
[Using the SDK](#2.5step3)  
[Customizing the SDK](#2.5step4)  
[Configuring App for Push Notifications](#2.5step5)  

<a name="2.8step1"/>

## SDK 2.8.0, iOS 11.0, Swift 4

#### Step 1: Installing the SDK

#### Method 1:  Using CocoaPods

**(Optional) Install Cocoapods on your Computer.**

1. On the terminal window, type the following command:

```sh
$ gem install cocoapods
```

2. After the installation is over, navigate to your project folder and init a new pod using the following command:

```sh
$ pod init
```

#### Add LPMessagingSDK to your Podfile

1. On top of your Podfile, on the source section add:

```ruby
source 'https://github.com/LivePersonInc/iOSPodSpecs.git'
```

2. Under your Application Target add:


```ruby
target '<YourApplicatioName>' do

  # Pods for <YourApplicatioName>
  pod 'LPMessagingSDK','~>2.8.0.9'
```

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
  pod 'LPMessagingSDK','~>2.8.0.9'
end
```
* If you already had a Podfile, on your terminal run the following command:

```sh
$ pod update
```
* if not, run the following command:

```sh
$ pod init
```

#### Method 2: Adding LivePerson Libraries

1. Download the SDK package from [GitHub](https://github.com/LivePersonInc/iOSFrameworks/releases/tag/2.8.0.9.1162)

2. Once downloaded, extract the ZIP file to a folder on your Mac.

3. Copy (Drag and Drop) all framework and bundle files into the project.

<a name="2.8step2"/>

#### Step 2: Configure project settings

- If you’re not using Cocoapods, you will have to add the Frameworks to your Project:

    1. In project settings, navigate to the **General tab**, and add all Framework files to the **Embedded Binaries** section.

    2. In the **General tab**, make sure that the framework files are under **Embedded Libraries**.

- In **Build Settings**, make sure **Always Embed Swift Standard Libraries** is set to **YES**.

- Due to a new Apple policy for iOS 10 (or later), apps must declare in their project settings which privacy settings may be used. For more information, refer to Apple’s website. In Xcode info.plist of the project, add two new privacy keys and values:

    * Key: **NSPhotoLibraryUsageDescription**, Value: **"Photo Library Privacy Setting for LiveEngage In-App Messaging SDK for iOS"**

    * Key: **NSCameraUsageDescription**, Value: **"Camera Privacy Setting for LiveEngage In-App Messaging SDK for iOS"**

<div style="color:red;font-weight:bold;">
Important:
</div>
**This step is required in order to be able to upload your host app into the App Store, as SDK 2.0 has the ability to share photos from the camera and/or photo library. Note: Due to Apple policy, this step is mandatory even if the photo sharing >feature is disabled in the SDK.**

1. In **project settings**, navigate to the **Build Phases** tab, and click the + button to add a **New Run Script Phase**. Add the script below in order to loop through the frameworks embedded in the application and remove unused architectures (used for simulator).

<div style="color:red;font-weight:bold;">
Important:
</div>
**_This step is a workaround for known iOS issue and is necessary for archiving your app before publishing it to the App Store._**

* If sdk installed using CocoaPods, use the following script:

```bash
bash "${SRCROOT}/Pods/LPMessagingSDK/LPMessagingSDK/LPInfra.framework/frameworks-strip.sh"
```

* If sdk installed by coping Libraries to Xcode project, use the following script:

```sh
bash "${BUILT_PRODUCTS_DIR}/${FRAMEWORKS_FOLDER_PATH}/LPInfra.framework/frameworks-strip.sh"
```

<a name="2.8step3"/>

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
  try LPMessagingSDK.instance.initialize()
} catch {
  return
}
```

*  To start a conversation, add the following code after initializing the **LPMessagingSDK.instance**

```swift
// Get Conversation - ConversationParamProtocol
let conversationParamProtocol = LPMessagingSDK.instance.getConversationBrandQuery("Your Account Number")
// Get Conversation View Params
let conversationViewParams = LPConversationViewParams(conversationQuery: conversationParamProtocol!, containerViewController: self, isViewOnly: false)
// Show Conversation
LPMessagingSDK.instance.showConversation(conversationViewParams, authenticationParams: nil)
```

**Note**: In this case, the containerViewController reference is self, given that we have a dedicated ViewController for the LPMessagingSDK, if you want to target a different ViewController you can sent that one as a reference too.

*  To end a conversation, there are two ways, for both you'll need to set up an **@IBAction**:

1.  Manually ending a conversation, on your **@IBAction** call the following code:

```swift
// Get your Conversation Parameters
let conversationParamProtocol = LPMessagingSDK.instance.getConversationBrandQuery("Your Account Number")
// Remove the Conversation
LPMessagingSDK.instance.removeConversation(conversationParamProtocol!)
```

{:start="2"}
2. Call the following code on your **@IBAction** to access LPMessagingSDK Menu, this will give you a couple more options like **Mark as urgent**, **Clear history**, and **Resolve the conversation**:

```swift
// Call LPMessagingSDK Menu
LPMessagingSDK.instance.toggleChatActions("Your Account Number")
```

<a name="2.8step4"/>

#### Step 3: Customizing the SDK

#### Customizing the Messaging Screen

**Note**: Customizing your Messaging Screen should be done before initializing a conversation (calling **LPMessagingSDK.instance.showConversation()**)

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

**Note**: this object gives you access to all the different attributes you are able to customize, **to see the whole list go to** [LivePerson](https://developers.liveperson.com/consumer-experience-ios-sdk-attributes.html)

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

**Note**: this object gives you access to all the different attributes you are able to customize, **to see the whole list go to** [LivePerson](https://developers.liveperson.com/consumer-experience-ios-sdk-attributes.html)

#### Adding Advanced Features

#### Enable Photo Sharing

**Notes**:


* This feature is available only for the In-App Messaging SDK.

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

    **Note**: as with the Messaging & Customer Experience Survey, you can also customize some of the elements on the Photo Sharing UI, for the complete list of Attributes visit [LivePerson](https://developers.liveperson.com/consumer-experience-ios-sdk-attributes.html#photo-sharing)


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

<a name="2.8step5"/>

#### Step 4: Configuring App for Push Notifications

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

```sh
$ openssl x509 -in aps_development.cer -inform der -out dev-cert.pem
```

{:start="10"}
10. Convert the private keys **.p12** file into a **.pem**:

```sh
$ cp Certificates.p12 key.p12
$ openssl pkcs12 -nocerts -out keyWithPassword.pem -in key.p12
```

**Note**: You will be prompted to enter a **passphrase** for this file. Enter any password and **remember it** for the next step.

{:start="11"}
11. Create a RSA **.pem** key, you'll be prompt for the **passphrase** you used on the previous step:

```sh
 $ openssl rsa -in keyWithPassword.pem -out hostkey.pem
```

#### Step 5

Create Application on LiveEngage & Upload **PEM** files

1. Login into **LiveEngage**, then nagivate to **Campaigns** > **Data Sources**,
2. Under the **Conectors** section, on **Mobile App Management**, click the **Manage** button on the right,
3. On the **Application key management** screen, select **Add new**,
4. On the **Platform** dropdown select **iOS**,
5. Under **Mobile App name**, type the **Bundle Identifier** of your app,

<div style="color:red;font-weight:bold;">
Important:
</div>
If your App uses an **Apple Development IOS Push Service Certificate**, you need to add **-Dev** at the end of the **Bundle Identifier**.

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

<div style="color:red;font-weight:bold;">
Important:
</div>
If your App uses an **Apple Development IOS Push Service Certificate**, you need to add **-Dev** at the end of the **Bundle Identifier**.

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

```sh
$ gem install cocoapods
```

{:start="2"}
2. After the installation is over, navigate to your project folder and initialize a new pod using the following command:

```sh
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

```sh
$ pod update
```

{:start="5"}
5. if not, run the following command:

```sh
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

  *  Key: **NSPhotoLibraryUsageDescription**, Value: **"Photo Library Privacy Setting for LiveEngage In-App Messaging SDK for iOS"**

  *  Key: **NSCameraUsageDescription**, Value: **"Camera Privacy Setting for LiveEngage In-App Messaging SDK for iOS"**

<div style="color:red;font-weight:bold;">
Important:
</div>
**This step is required in order to be able to upload your host app into the App Store, as SDK 2.0 has the ability to  share photos from the camera and/or photo library. Note: Due to Apple policy, this step is mandatory even if the photo sharing >feature is disabled in the SDK.**

1. In **project settings**, navigate to the **Build Phases** tab, and click the + button to add a **New Run Script Phase**. Add the script below in order to loop through the frameworks embedded in the application and remove unused architectures (used for simulator). **_This step is a workaround for known iOS issue and is necessary for archiving your app before publishing it to the App Store._**

  * If frameworks installed using CocoaPods, use the following script:

```sh
bash "${SRCROOT}/Pods/LPMessagingSDK/LPMessagingSDK/LPInfra.framework/frameworks-strip.sh"
```

  *   If frameworks installed by coping Libraries to Xcode project, use the following script:

```sh
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

**Note**: this object gives you access to all the different attributes you are able to customize, **to see the whole list go to** [the Attributes section of this document](https://developers.liveperson.com/consumer-experience-ios-sdk-attributes.html).

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

Note: this object gives you access to all the different attributes you are able to customize, **to see the whole list go to** [LivePerson](https://developers.liveperson.com/consumer-experience-ios-sdk-attributes.html)

#### Adding Advanced Features

**Enable Photo Sharing**

**Notes**:


  * This feature is available only for the In-App Messaging SDK.

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

**Note**: as with the Messaging & Customer Experience Survey, you can also customize some of the elements on the Photo Sharing UI, for the complete list of Attributes visit [the relevant section in this document](https://developers.liveperson.com/consumer-experience-ios-sdk-attributes.html#photo-sharing).

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

```sh
$ openssl x509 -in aps_development.cer -inform der -out dev-cert.pem
```

10. Convert the private keys **.p12** file into a **.pem**:

```sh
$ cp Certificates.p12 key.p12
$ openssl pkcs12 -nocerts -out keyWithPassword.pem -in key.p12
```

**Note**: You will be prompted to enter a **passphrase** for this file. Enter any password and **remember it** for the next step.

11. Create a RSA **.pem** key, you'll be prompt for the **passphrase** you used on the previous step:

```sh
 $ openssl rsa -in keyWithPassword.pem -out hostkey.pem
```

#### Step 5

Create Application on LiveEngage & Upload **PEM** files

1. Login into **LiveEngage**, then nagivate to **Campaigns** > **Data Sources**,

2. Under the **Conectors** section, on **Mobile App Management**, click the **Manage** button on the right,

3. On the **Application key management** screen, select **Add new**,

4. On the **Platform** dropdown select **iOS**,

5. Under **Mobile App name**, type the **Bundle Identifier** of your app,

<div style="color:red;font-weight:bold;">
Important:
</div>
If your App uses an **Apple Development IOS Push Service Certificate**, you need to add **-Dev** at the end of the **Bundle Identifier**.

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

<div style="color:red;font-weight:bold;">
Important:
</div>
if your App uses an **Apple Development IOS Push Service Certificate**, you need to add **-Dev** at the end of the **Bundle Identifier**.

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
