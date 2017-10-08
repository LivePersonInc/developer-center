---
title: Resolve Message
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: String Localization

order: 280
permalink: android-resolve.html

indicator: messaging
---

Resolve message use default SHORT date and SHORT time according to the locale (default or custom) and to device setting.

- If device is set to 12 hours format (US locale):
  "Conversation resolved by [agent name] \n 9/25/16 , 3:30pm"
- If device is set to 24 hours format (US locale):
  "Conversation resolved by [agent name] \n 9/25/16 , 15:30"
- In case you want special date/hour format, you can use
```<string name="lp_date_time_format"></string>```

With any **date & time format**.
*Example: "MMM d, yyyy hh:mm a", "EEEE dd/mm/yy HH:mm" etc.*
