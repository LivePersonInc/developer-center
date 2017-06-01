---
title: Release Notes
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: Release Notes

order: 243
permalink: consumer-experience-ios-sdk-release-notes.html
---
### In-App Messaging SDK Version 2.3

These are the main feature releases available in the **In-App Messaging SDK version 2.3 for iOS**.

### iOS Developer Enhancements

The LiveEngage in-app SDK is fully compatible with the most recent versions of Apple’s developer tools, XCode 8.3 and Swift 3.1.

The SDK is also compatible with [CocoaPods](https://cocoapods.org/){:target="_blank"}, a dependency manager for Swift and Objective-C Cocoa projects. CocoaPods has thousands of libraries and is used in over 2 million apps. It can help you scale your projects elegantly and provides a standard format for managing external libraries.

Note: Sample Apps are now using CocoaPods.

**CocoaPods Installation**

1.	Install cocoapods using the following command:

    $ gem install cocoapods

2.	Navigate to your project folder and init new pod using the following command:

    $ pod init

3.	Podfile should be created under your project’s folder.

    To integrate Liveperson Messaging SDK into your Xcode project using CocoaPods, specify it in your Podfile:

      source 'https://github.com/LivePersonInc/iOSPodSpecs.git'
        platform :ios, '8.0'
      	use_frameworks!

      	target '<Your Target Name>' do
      	    pod 'LPMessagingSDK'
      	end

4.	Run the following command in the terminal under your project folder:

    $ pod install

5.	In project settings, navigate to the Build Phases tab, and click the + button to add a New Run Script Phase. Add the script below in order to loop through the frameworks embedded in the application and remove unused architectures (used for the simulator). This step is a workaround for the [known iOS issue](http://www.openradar.me/radar?id=6409498411401216){:target="_blank"} and is necessary for archiving your app before publishing it to the App Store.

```shell
bash "${SRCROOT}/Pods/LPMessagingSDK/LPMessagingSDK/LPInfra.framework/frameworks-strip.sh"
```

### Secure form for in-app messaging

The secure form gives consumers the confidence to submit sensitive information, such as credit card data and social security numbers, while messaging in-app. The form also enables agents to safely carry out secure processes, such as payment, identification and authorisations.

The form can be tailored to match the in-app messaging experience and has a time-out expiry, for added security.

_This feature requires consulting services support. For more information, please refer to the LiveEngage [secure form for messaging documentation](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/security/Secure+form+for+messaging.pdf){:target="_blank"}_.

![Release Notes Secure Form](img/releasenotessecureform.png)

**Related properties**: Agent PCI bubble
**Related strings**: PCI

### List of certified and supported devices extended
The following devices are now also supported and/or certified to host our in-app messaging SDK:

**iPhone**

|                 |    Operating system    |                 |
|-----------------|------------------------|-----------------|
|    Device       |    iOS 9.x             |    iOS 10.x     |
|    iPhone SE    |    Supported           |    Supported    |

**iPad**

|                       |    Operating system    |                 |                 |
|-----------------------|------------------------|-----------------|-----------------|
|    Device             |    iOS 8.x             |    iOS 9.x      |    iOS 10.x     |
|    Air 2 (2014)       |    Supported           |    Supported    |    Supported    |
|    Mini 4 (2015)      |    N/A                 |    Supported    |    Supported    |
|    iPad Pro (2016)    |    N/A                 |    Supported    |    Supported    |
|    iPad 5 (2017)      |    N/A                 |    N/A          |    Supported    |





### In-App Messaging SDK Version 2.0

These are the main feature releases available in the In-App Messaging SDK version 2.0.

### Photo sharing for iOS and Android (Beta)

Consumers can now add photos directly into a messaging conversation, enabling them to describe an item and share it with their agent. Photo sharing supports multiple image sizes, and all shared images are logged in All Connections. This feature is available for Facebook messenger, web messaging, and in-app messaging, on both Android and iOS.

![Release Notes Photo Sharing](img/releasenotessharing.png)

### Accessibility for messaging

The In-App Messaging SDK now supports accessibility WCAG Level A and Level AA and CATO.

![Release Note Accessibility](img/releasenotesaccessibility.png)

### Configure regular expressions to create hyperlinks in messages

Brands can now configure their own regular expressions to create hyperlinks which link directly to relevant pages or actions.

Expressions can be configured for the following commands:

*	Call
*	Email
*	URL

![Release Notes Hyperlinks](img/releasenotes1.png)

### In-conversation shortcut to new messages

A shortcut can now be configured to appear within the conversation when there are new messages available. This saves the consumer time when scrolling within messaging conversations. Clicking on the shortcut navigates the visitor straight to the new messages so they can quickly and easily continue the conversation.

![Release Note In-conversation](img/releasenotesinconversation.png)

### Set icon for send button

Brands now have the ability to replace the Send button in a messaging conversation with a paper plane (Android) or arrow (iOS). This icon can be customized to match the brand’s colors.

![Release Notes Set Icon](img/releasenotesseticon.png)

### Link preview within conversation

When sending a link within an in-app messaging conversation, a preview of the link page will display within the thread, giving the consumer a useful overview of the link content.

![Release Notes Link Preview](img/releasenoteslinkpreview.png)

### Ability to remove resolved divider in thread

Brands are now able to configure the removal of the resolved divider within a thread. The divider usually appears underneath the system message noting that the conversation has been resolved. This creates the feel of one ongoing, undisrupted conversation for consumers using messaging.

![Release Notes Ability to Remove](img/releasenotesability1.png) ![Release Notes Ability to Remove](img/releasenotesability2.png)

### Add callback to SDK for agent picture click

In order to provide brands with greater insight into consumer activity within the messaging window, LiveEngage will provide a callback when a consumer clicks on the agent’s picture in the conversation. The brand can then decide what action they would like to take, for example opening an agent profile or enlarging the picture.

![Release Notes Add Callback](img/releasenotescallback.png)

### Enhancement: Configure CSAT Timeout

Brands can now configure for how long a CSAT form will be displayed to the consumer after the messaging conversation is resolved by the agent. This applies to consumers who exit the conversation before it is resolved.

Brands can select from the following options:
-	The CSAT form never times out, and will be displayed to the consumer when they reopen the conversation regardless of the amount of time that has passed since the conversation was resolved.

-	The number of minutes from when the conversation was resolved to when the form will no longer be displayed.
