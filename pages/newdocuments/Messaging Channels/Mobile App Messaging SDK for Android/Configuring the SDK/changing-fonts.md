---
pagename: Changing Fonts
redirect_from:
  - android-configuring-changing-fonts.html
Keywords:
sitesection: Documents
categoryname: Consumer Experience
documentname: Mobile App Messaging SDK for Android
subfoldername: Customization and Branding

order: 200
permalink: mobile-app-messaging-sdk-for-android-customization-and-branding-changing-fonts.html

---

It is possible to change the font of the elements in the conversation view. In order to do this, there are two separate settings: ```custom_font_name_conversation_feed``` for the font of the elements in the conversation feed itself and ```custom_font_name_non_conversation_feed``` for the elements that are not in the conversation feed (e.g. font on the Enter Message EditText control, toolbar text etc.). Refer to the [Custom Fonts](android-attributes.html#Custom Fonts) section for the parameters description.

The above font parameters accept either a standard Android font name (e.g. ```sans-serif-thin```) or a custom installed TTF font. The custom font file should resides on the ```assets``` folder in the host app, located as a sibling of the ```res``` folder. If a custom font is used, the above font parameters should be the custom font file name including the TTF extension (e.g. ```customFont.ttf```)
