---
pagename: String Localization
redirect_from:
  - consumer-experience-ios-sdk-stringlocalization.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: String Localization

order: 227
permalink: mobile-app-messaging-sdk-for-ios-string-localization-string-localization.html

indicator: messaging
---

The SDK contains language folders for each language supported. For a list of supported languages, see [LiveEngage System Requirements and Language Support](https://ce-sr.s3.amazonaws.com/CA/Admin/Sys%20req/System%20requirements.pdf). Each folder contains LPLocalizable.strings file for a specific language.

The example below contains four language folders:

* **en.lproj**: English strings (used in case we do not support the host app/device language)
* **fr.lproj**: French strings
* **pt.lproj**: Portuguese strings
* **pt-PT.lproj**: Portuguese (Portugal) strings

The SDK allows you to override the string localization of any supported language in LiveEngage.

To apply a custom localization file with your strings, create **LPLocalizable.strings** files for relevant languages inside your app, which includes the keys you would like to override.

**Example**: Overriding the SDK English string of `send`:

1. In your app, create a new localization Base file called LPLocalizable.strings which includes your supported language:  
   
   **New file > Strings file > Create**

2. Add new key:  
   
   `"send" = "<ANY NEW VALUE>";`

3. Mark the LPLocalizable.strings file as localized: 

   1. Tap the **LPLocalizable.string** file.

   2. Open the file inspector.

   3. Go to **Localization** section and Tap **Localize**.

4. Add a new supported language:

   1. Open project settings.

   2. On the Info tab, under Localizations, press the plus (+).

   3. Choose the new language you want to support.

5.  Attaching a Strings file to existing supported languages:

   1. Choose the desired strings file.

   2. Open the file inspector.

   3. Under localizations, choose the relevant languages.

Your `send` string implementation overrides the localization in English.

Print all localized keys with a default English value in the SDK:

```swift
LPMessagingSDK.instance.printAllLocalizedKeys()
```



Get or print all localized supported languages in the SDK:

```swift
LPMessagingSDK.instance.printSupportedLanguages()
```



Get all supported languages by key-value (the key is locale key and value is language description):

```swift
LPMessagingSDK.instance.getAllSupportedLanguages()
```


**Note:** The SDK uses native iOS control for the Copy/Paste menu.  If the host app has this language, the current device language defines the language of the menu control. Otherwise, the last menu control language is used. 
