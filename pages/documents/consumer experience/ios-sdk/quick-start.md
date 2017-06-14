---
title: Quick Start
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for iOS

order: 1
permalink: consumer-experience-ios-sdk-quick-start.html

indicator: chat messaging
---

The LivePerson SDK provides brands with a simple, yet enterprise-grade and secure in-app messaging solution. Through in-app messaging, brands will foster connections with their customers and increase app engagement and retention.

This Quick Start will quickly get you up and running with a project powered by LivePerson. When you're done, you'll be able to send messages between an iOS device and LiveEngage. To complete this Quick Start, you will need a LiveEngage account. You can get the number and login information from the LivePerson account team.

### Prerequisites

To use the LivePerson In-App Messaging SDK, the following are required:

* XCode 8.3 or later 
* Swift 3.1 or later, or Objective-C

_Note: For information on supported operating systems and devices, refer to [System Requirements](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Sys+req/System+requirements.pdf){:target="_blank"}._


### Step 1: Download and Unzip the SDK

1. Click [here](https://github.com/LP-Messaging/iOS-Messaging-SDK){:target="_blank"} to download the SDK package.
2.  Once downloaded, extract the ZIP file to a folder on your Mac.

### Step 2: Configure project settings to connect LiveEngage SDK

1. Copy the files into the project.

2. In project settings, navigate to the **General** tab, and add all Framework files to the **Embedded Binaries** section. **INSERT IMAGE HERE**

3. In the **General** tab, make sure that the framework files are under **Embedded Libraries**.

4. In Build settings, make sure **Always Embed Swift Standard Libraries** is set to **YES**.

5. Due to a new Apple policy for iOS 10 (or later), apps must declare in their project 
settings which privacy settings may be used. For more information, refer to [Apple’s website](https://developer.apple.com/library/prerelease/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html){:target="_blank"}. 
In Xcode info.plist of the projhect, add two new privacy keys and values: 
* Key: NSPhotoLibraryUsageDescription, Value: "Photo Library Privacy Setting for LiveEngage In-App Messaging SDK for iOS",
* Key: NSCameraUsageDescription, Value: "Camera Privacy Setting for LiveEngage In-App Messaging SDK for iOS"
<br>This step is required in order to be able to upload your host app into the App Store, as SDK 2.0 has the ability to share photos from the camera and/or photo library. 
Note: Due to Apple policy, this step is mandatory even if the photo sharing feature is disabled in the SDK. 

6. In project settings, navigate to the Build Phases tab, and click the + button to add a New Run Script Phase. Add the script below in order to loop through the frameworks embedded in the application and remove unused architectures (used for simulator). This step is a workaround for [known iOS issue](http://www.openradar.me/radar?id=6409498411401216){:target="_blank"} and is necessary for archiving your app before publishing it to the App Store.

	* If you installed frameworks using CocoaPods, use the following script: 

	`bash "${SRCROOT}/Pods/LPMessagingSDK/LPMessagingSDK/LPInfra.framework/frameworks-strip.sh"`

	* If you installed frameworks using copy to Xcode project, use the following script:

	`bash "${BUILT_PRODUCTS_DIR}/${FRAMEWORKS_FOLDER_PATH}/LPInfra.framework/frameworks-strip.sh"`

### Step 3: Initialization

1. Inside `AppDelegate`, under `didFinishLaunchingWithOptions`, add the following code:

```javascript
do {
try LPMessagingSDK.instance.initialize("Your Account ID")
} catch {
return
}
```

2. Set up and call the conversation view. You’ll need to provide your LivePerson account number and a container view controller. 


	`let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountNumber)`

3. In order to remove the conversation view when your container is deallocated, run the following code:

	`let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountNumber)
	 LPMessagingSDK.instance.removeConversation(conversationQuery)`
