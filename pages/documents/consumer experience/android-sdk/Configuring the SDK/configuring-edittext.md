---
title: Configuring the message’s EditText
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: Customization and Branding

order: 266
permalink: android-configuring-edittext.html

---

There is an option to change the whole style of the message EditText. In the app’s styles.xml file, override the lp_enter_message_style with the required style.

*Example:*

```<style name="lp_enter_message_style" parent="Theme.AppCompat.Light.NoActionBar">           <item name="colorControlActivated">#F8BBD0</item>```
```...```
```</style>```
