---
title: Override SDK Strings
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for Android
level4: String Localization

order: 270
permalink: mobile-app-messaging-sdk-for-android-string-localization-override-sdk-strings.html

indicator: messaging
---

**Android resources introduction:**

Android resources are: Strings, drawables, layouts etc. During compile time, all resources are moved to the same location. App resources receive higher priority, and, due to this, in case the SDK and the App share the same resource name, the value of the App will be used. This is under OS responsibility.

**Language implementation:**

SDK language support is split into two scenarios:

- Device settings: Uses device settings language → App’s language is identical to the device language.
- Host app settings: App sets its own language regardless of device settings language → language may be different from device language.

_**Note:** The SDK language will be the same as the app language. The SDK cannot work with a language that is different from the app language. If the SDK does not support the app language, it will use the default language instead._

The SDK contains a values folders for each supported language. For a list of supported languages, see [LiveEngage System Requirements and Language Support](https://ce-sr.s3.amazonaws.com/CA/Admin/Sys%20req/System%20requirements.pdf){:target="_blank"}. Each folder contains a strings file, where all strings are located for a specific language. Learn more about supporting different languages [here](https://developer.android.com/training/basics/supporting-devices/languages.html){:target="_blank"}.

The SDK allows you to override the string localization of any supported language in LiveEngage. To apply a custom localization files with your own strings, create a strings file in the app’s values folder (specific values folder for the required language). This option gives the ability to change strings, and to support languages that the SDK currently does not support.

_**Note:** In order to avoid collisions, each SDK resource starts with a prefix of "lp". This is to avoid cases where the SDK and the host app use the same ID for a specific string, for example, dialog done button._

**Example:**

```xml
<string name="brand_name">This new and fancy Brand name</string>
```

<div markdown="1" class="important">
Important:


If you want to change the Brand name, when using the SDK on Activity Mode, you'll need to create an English Locale and override the name.
</div>

### Create new Localization File

* **Step 1:** Using **Android View**, right-click over the **res** folder, select **new**, then **Android Resource Directory**


* **Step 2:** On the **New Resouce Directory**Screen, select **Locale** ,and click on the **>>**:


* **Step 3:** Now select the Language or Region you're trying to create:


_**Note:** Now that you have a new **Resource Directory**, you'll have to create a new **strings.xml** file to define the new strings_

* **Step 4:** Using **Project View**, right-click over the values folder you just created, select **new**, then **Values Resource File**


* **Step 5:** On the pop up window, type: **strings.xml**, this file will define all the strings for that Locale:
