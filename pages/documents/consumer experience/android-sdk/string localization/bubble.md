---
title: Bubble timestamp
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: String Localization

order: 276
permalink: android-bubble.html

---

Bubbles contains only time in [SHORT](https://developer.android.com/reference/java/text/DateFormat.html#SHORT){:target="_blank"} time format, according to the locale (default or custom) and to device setting.

- If device is set to 12 hours format : "3:30pm"
- If device is set to 24 hours format : "15:30"
- If you wish to configure this time format, override this resource ID:
```<string name="lp_time_format"></string>```

With any **time** format. 
*Example: "hh:mm a", "HH:mm" etc.*

This will apply to all bubble’s timestamp. 

