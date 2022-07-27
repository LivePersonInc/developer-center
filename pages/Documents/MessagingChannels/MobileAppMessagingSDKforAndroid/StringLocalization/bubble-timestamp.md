---
pagename: Bubble timestamp
redirect_from:
  - android-bubble.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: String Localization

order: 250
permalink: mobile-app-messaging-sdk-for-android-string-localization-bubble-timestamp.html

indicator: messaging
---

Bubbles contains only time in [SHORT](https://developer.android.com/reference/java/text/DateFormat.html#SHORT) time format, according to the locale (default or custom) and to device setting.

- If device is set to 12 hours format: "3:30pm"
- If device is set to 24 hours format: "15:30"
- If you wish to configure this time format, override this resource ID:

```xml
<string name="lp_time_format"></string>
```

With any **time** format.

**Example:** "hh:mm a", "HH:mm" etc.*

This will apply to all bubble’s timestamp.
