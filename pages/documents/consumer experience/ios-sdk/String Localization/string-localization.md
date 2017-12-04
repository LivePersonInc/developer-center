---
title: String Localization
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: String Localization

order: 227
permalink: consumer-experience-ios-sdk-stringlocalization.html

indicator: messaging
---

TThe SDK contains language folders for each language supported. For a list of supported languages, see [LiveEngage System Requirements and Language Support](https://ce-sr.s3.amazonaws.com/CA/Admin/Sys%20req/System%20requirements.pdf){:target="_blank"}. Each folder contains LPLocalizable.strings file, where all strings are located for a specific language.

The example below contains four language folders:

* en.lproj: strings in English. Used in case the host app/device language is not supported by us.
* fr.lproj: strings in French.
* pt.lproj: strings in Portuguese.
* pt-PT.lproj: strings in Portuguese (Portugal).

The SDK allows you to override the string localization of any supported language in LiveEngage.

To apply a custom localization files with your own strings, create LPLocalizable.strings files for relevant languages inside your app, which will include the keys you would like to override.

Example: Overriding the SDK string of 'send’ in English:

1. Create in your app a new localization Base file called LPLocalizable.strings which will include your supported language: 'New file…’ -> 'Strings file’ -> 'Create’
2. Add new key: "send" = "<ANY NEW VALUE>";
3. Mark this _LPLocalizable.strings_ file as localized: Tap on _LPLocalizable.strings_ file -> Open the file inspector -> Go to 'Localization’ section -> Tap 'Localize…’

4. **Adding a new supported language**
* Open project settings
* Info tab
* Under Localizations, press '+’ sign
* Choose the new language you would like to support.

  **Attaching a Strings file to existing supported languages**:
* Choose the desired strings file
* Open the file inspector
* Under localizations, choose the relevant languages.

Your 'send’ string implementation will override the localization in English in the SDK`


In order to print all localized keys with a default English value in the SDK, call the following:

`LPMessagingSDK.instance.printAllLocalizedKeys()`



In order to get or print all localized supported languages in the SDK, call the following:

`LPMessagingSDK.instance.printSupportedLanguages()`



In order to get all supported languages by key-value (key is locale key and value is language description), call the following:

`LPMessagingSDK.instance.getAllSupportedLanguages()`



_Note: The SDK uses native iOS control for the Copy/Paste menu. The language of the menu control is defined by the current device language if the host app is localized for this language. If the host app does not have this language, the last menu control language will be used._
