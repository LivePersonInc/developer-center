---
title: Separator timestamp
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: String Localization

order: 260
permalink: android-separator.html

indicator: messaging
---

Separator contains only date in [SHORT](https://developer.android.com/reference/java/text/DateFormat.html#SHORT){:target="_blank"} date format, according to the locale (default or custom) and to device setting.

- "9/25/16" for US locale / "2016/9/25" for JP locale
- If you wish to configure this time format - override this resource id :
```<string name="lp_date_format"></string>```

With any **date** format.
*Example: "MMM d, yyyy", "EEEE dd/mm/yy" etc.*
