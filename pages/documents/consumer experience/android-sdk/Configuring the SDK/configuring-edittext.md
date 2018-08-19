---
pagename: Configuring the message’s EditText
redirect_from:
  - android-configuring-edittext.html
Keywords:
sitesection: Documents
categoryname: Consumer Experience
documentname: Mobile App Messaging SDK for Android
subfoldername: Customization and Branding

order: 190
permalink: mobile-app-messaging-sdk-for-android-customization-and-branding-configuring-the-message’s-edittext.html

indicator: messaging
---

There is an option to change the whole style of the message EditText. In the app’s styles.xml file, override the lp_enter_message_style with the required style.

*Example:*

```xml
<style name="lp_enter_message_style" parent="Theme.AppCompat.Light.NoActionBar">
<item name="colorControlActivated">#F8BBD0</item>
</style>
```
