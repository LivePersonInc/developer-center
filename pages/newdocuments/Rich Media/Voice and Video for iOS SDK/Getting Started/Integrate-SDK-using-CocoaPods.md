---
pagename: Installing the SDK with CocoaPods
redirect_from:
  - consumer-experience-voice-video-ios-cocoa-pods.html
sitesection: Documents
categoryname: "Rich Media"
documentname: Voice & Video for iOS SDK (BETA)
subfoldername: Getting Started
order: 20
permalink: voice-and-video-for-ios-sdk-beta-getting-started-installing-the-sdk-with-cocoapods.html
indicator: messaging
---

**UNAVAILABLE DURING BETA PHASE, PLEASE CONTACT YOUR ACCOUNT TEAM FOR INSTALLATION GUIDELINES**

We recommend installing the SDK using the _CocoaPods_ dependency manager, as this minimizes integration effort. If you are not yet familiar with CocoaPods, we recommend reading the official guide of [CocoaPods](https://cocoapods.org/about).

### Step 1: Edit your Podfile
After setting up CocoaPods, edit your `Podfile` to look something like this:

```Bash
platform :ios, '10.0'
source 'https://github.com/LivePersonInc/iOSPodSpecs.git'

target 'MyBrandApp' do
  # add the SDK to your app, optionally specify a version '~> 0.1.0'
  pod 'LPCoAppSDK'
  ...
end
```

Make sure your target (here: _MyBrandApp_) matches your actual app build target's name.

### Step 2: Install Pods

Then type `pod repo update && pod install` to have CocoaPods fetch and install the SDK

CocoaPods will create a `*.xcworkspace` workspace for your XCode project. Use this in future _instead of_ the regular `*.xcodeproj`. Open it and continue with the [Project Settings](consumer-experience-voice-video-ios-project-settings.html) instructions.
