---
title: Integrate the SDK using CocoaPods
level1: Documents
level2: Consumer Experience
level3: Voice & Video for iOS SDK (BETA)
level4: Getting Started
order: 20
permalink: consumer-experience-voice-video-ios-cocoa-pods.html
indicator: messaging
---
We recommend installing the SDK using the _CocoaPods_ package manager, as this minimizes integration efforts. If you are not yet familiar with CocoaPods, we recommend reading the official guide: [About CocoaPods](https://cocoapods.org/about).

### Step 1: Edit your Podfile
After setting up CocoaPods, edit your `Podfile` to look something like this:

```Bash
# This is the Podfile of your own app
# add LP's repositories
source 'https://lpgithub.dev.lprnd.net/RnD-Mannheim/lp-coapp-pods'
source 'https://lpgithub.dev.lprnd.net/lp-mobile/LPMessagingSDK-Pod.git'

target 'MyBrandApp' do
  # add the SDK to your project
  pod 'LPCoAppSDK'
  # OR specify with version: pod 'LPCoAppSDK','~> 0.1.0'

  # skip below, if you already installed LPMessaging some other way
  pod 'LPMessagingSDK'
  pod 'LPInfra'
  pod 'LPAMS'
end
```

Make sure your target (here: _MyBrandApp_) matches your actual app build target's name.

### Step 2: Install Pods

Then type `pod repo update && pod install` to have CocoaPods fetch and install the SDKs

CocoaPods will create a `*.xcworkspace` workspace for your XCode project. Use this in future _instead of_ the regular `*.xcodeproj`. Open it and continue with the [Project Settings](Project Settings) instructions.
