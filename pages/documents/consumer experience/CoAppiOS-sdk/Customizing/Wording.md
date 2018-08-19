---
pagename: Wording
redirect_from:
  - consumer-experience-voice-video-ios-appearance-wording.html
sitesection: Documents
categoryname: Consumer Experience
documentname: Voice & Video for iOS SDK (BETA)
subfoldername: Customizing
order: 70
permalink: voice-&-video-for-ios-sdk-beta-customizing-wording.html
indicator: messaging
---
These settings should only be used to customize the wording according to you app's needs. If you plan to offer a new language not yet available in the SDK, please to speak to your LivePerson account manager.

### Step 1: Setup

In your XCode project, create a new file named:

  * `LPCoAppSDK.strings` and enable __Localization__ for this file.

This will put the file under your `[Language].lproj` (e.g. `EN.lproj`) folders.

### Step 2: Edit Wording
<style>
td:first-child {
  width: 150px!important;
}
</style>

Open your `LPCoAppSDK.strings` in the language you wish to edit and add (ONLY!) those keys you wish to edit. Non specified keys will use the default wording.

| Key        | Default Value (EN) | Note  |
| ------------- |:-------------:|:-----|
|   **CALLER_NAME**   | Agent  | The name displayed to the user as the caller, if the actual agent's name could not yet be resolved OR was set to `default`. This should most likely be your **Brand's name**  |

**NOTE:** More options will be made available once the SDK is out of BETA
