---
pagename: Resolve Message
redirect_from:
  - android-resolve.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: String Localization

order: 280
permalink: mobile-app-messaging-sdk-for-android-string-localization-resolve-message.html

indicator: messaging
---

Resolve message use default SHORT date and SHORT time according to the locale (default or custom) and to device setting.

- If device is set to 12 hours format (US locale):
  **"Conversation resolved by [agent name] \n 9/25/16, 3:30pm"**
- If device is set to 24 hours format (US locale):
  **"Conversation resolved by [agent name] \n 9/25/16, 15:30"**
- In case you want special date/hour format, you can use:

```java
<string name="lp_date_time_format"></string>
```

With any **date & time format**.

**Example:** "MMM d, yyyy hh:mm a", "EEEE dd/mm/yy HH:mm" etc.*
