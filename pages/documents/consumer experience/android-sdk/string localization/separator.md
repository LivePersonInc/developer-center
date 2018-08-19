---
title: Separator timestamp
redirect_from:
  - android-separator.html
Keywords:
sitesection: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for Android
level4: String Localization

order: 260
permalink: mobile-app-messaging-sdk-for-android-string-localization-separator-timestamp.html

indicator: messaging
---

Separator contains only date in [SHORT](https://developer.android.com/reference/java/text/DateFormat.html#SHORT){:target="_blank"} date format, according to the locale (default or custom) and to device setting.

- "9/25/16" for US locale / "2016/9/25" for JP locale
- If you wish to configure this time format - override this resource id:

```xml
<string name="lp_date_format"></string>
```

With any **date** format.

**Example:** "MMM d, yyyy", "EEEE dd/mm/yy" etc.*
