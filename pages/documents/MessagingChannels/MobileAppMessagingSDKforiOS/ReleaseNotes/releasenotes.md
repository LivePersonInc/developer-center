---
pagename: Release Notes
redirect_from:
  - consumer-experience-ios-sdk-release-notes.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS


permalink: mobile-app-messaging-sdk-for-ios-release-notes.html
indicator: messaging
---

<div class="subscribe">Working with this SDK or planning to in the future? Make sure to <a href="https://visualping.io/?url=developers.liveperson.com/consumer-experience-ios-sdk-release-notes.html&mode=web&css=post-content">subscribe</a> to receive notifications of changes! When we update the Release Notes, you'll get a notification straight to your email of choice!</div>


### iOS Messaging SDK - Version 5.1.1
**Release Date**: January 22, 2020 

### Environmental Requirements
The iOS Mobile Messaging SDK version 5.1.1 is compatible with Xcode 11.3.1, Swift version 5.1.3 (swiftlang-1100.0.282.1 clang-1100.0.33.15), and supported on iOS versions 11 through 13.   

### Bugs fixed 
* Fixed issue were CSAT was appearing for auto closed conversations
* Fixed issue where Separator line was being shown while configurations.enableConversationSeparatorLine was disable

### New Features 
* If the user has denied access before for Audio, Photos, or Camera, the SDK now shows an alert upon usage informing the user that access can be enabled in the settings app.
The message, title, and options buttons for this alert can be customized by updating the values of the LPLocalizable.strings for the keys matching below.

"permissionPopUpDeniedOptionNotNow"
"permissionPopUpDeniedOptionGoToSettings"
"permissionPopUpDeniedTitle"

"permissionPopUpDeniedMicrophoneDescription"
"permissionPopUpDeniedCameraDescription"
"permissionPopUpDeniedPhotoLibraryDescription"

"permissionPopUpRestrictedTitle"
"permissionPopUpRestrictedDescription"

For more information on how to override localize keys, see the [String Localization](https://developers.liveperson.com/mobile-app-messaging-sdk-for-ios-string-localization-string-localization.html) page.

<br>
<p style="text-align: left">
<a href="mobile-app-messaging-sdk-for-ios-all-release-notes.html" center><img src="../img/back-to-all-release-notes.png" style="height: 30px; width: auto;"></a></p>

