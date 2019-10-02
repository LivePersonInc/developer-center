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

You can override the string localization of any supported language in LiveEngage. Create **LPLocalizable.strings** files for relevant languages inside your app, which includes the keys to override.  

### Create and localize a strings file and add languages

1. In your app, go to **New file > Strings file > Create**.

2. Create a file called **LPLocalizable.strings**.  

3. Add a new key, for example, if you want to override the SDK English string of `send`:  
   
   ```swift
   "send" = "<ANY NEW VALUE>";
   ```

4. Tap the **LPLocalizable.string** file and open the file inspector.

5. Go to the **Localization** section and Tap **Localize**.

6. Open project settings, on the **Info** tab, under Localizations, press the **plus (+)**.

7. Choose the new language you want to support.

### Attach a strings file to existing languages


1. Choose the desired strings file.

2. Open the file inspector.

3. Under **Localizations**, choose the relevant languages.


### Print or get localized keys or supported languages

* Print all localized keys with a default English value in the SDK:

   ```swift
   LPMessagingSDK.instance.printAllLocalizedKeys()
   ```

* Get or print all localized supported languages in the SDK:

   ```swift
   LPMessagingSDK.instance.printSupportedLanguages()
   ```

* Get all supported languages by key-value (the key is locale key and value is language description):

   ```swift
   LPMessagingSDK.instance.getAllSupportedLanguages()
   ```
