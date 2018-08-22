---
pagename: Installing the SDK manually
redirect_from:
  - consumer-experience-voice-video-ios-manually.html
sitesection: Documents
categoryname: Consumer Experience
documentname: Voice & Video for iOS SDK (BETA)
subfoldername: Getting Started
order: 30
permalink: voice-&-video-for-ios-sdk-beta-getting-started-installing-the-sdk-manually.html
indicator: messaging
---
We highly recommend integrating our SDK using CocoaPods as [described here](consumer-experience-voice-video-ios-cocoa-pods.html). If this does not fit your needs and you prefer to add the SDK manually follow these steps for your app's __XCode Project__:

### Step 1: Copy Dependencies

  * Copy the `LPCoAppSDK.framework` to your project's file directory.
  * Next add the `LPCoAppSDK.bundle` contained within the `LPCoAppSDK.framework` to your target's __Build Phases → Copy Bundle Resources__ step

### Step 2: Link Frameworks
Add the following Frameworks to your build target's __Build Phases → Link Binary With Libraries__ option.

  * `LPCoAppSDK.framework`
  * `GLKit.framework`
  * `VideoToolbox.framework`

![Frameworks](img/link_frameworks.png)

### Step 3: Adjust Build Settings
Under your target's **Build Settings**, adjust the following:

  * Add the directory containing `LPCoAppSDK.framework` to **Framework Search Path**
  * Add the following line to **Library Search Paths**: 		
	  * *$(FRAMEWORK_SEARCH_PATHS)/LPCoAppSDK.framework/***
  * Add the following flags to your **Other Linker Flags** setting:
      * `-lc++`
      * `-lWebRTC`

**Important**: Ensure that your iOS *Base SDK* is set to *9.0* or higher.

Now continue with the [Project Settings](consumer-experience-voice-video-ios-project-settings.html)
