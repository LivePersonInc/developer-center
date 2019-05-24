---
pagename: Date and Time
redirect_from:
  - android-off-hours.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: String Localization

order: 240
permalink: mobile-app-messaging-sdk-for-android-string-localization-date-and-time.html

indicator: messaging
---

### Today and tomorrow off hours 
Today and tomorrow off hours messages use the default SHORT time without date according to the locale (default or custom) and to device setting.

- If the device is set to 12 hours format:
  
   *"Thanks for your message. We will be back online today/tomorrow at 3:30pm"*

- If the device is set to 24 hours format:
  
   *"Thanks for your message. We will be back online today/tomorrow at 15:30"*

If you want special hour format, use:

```xml
<string name="lp_time_format"></string>
```

With any **time** format, for example, "hh:mm a" or "HH:mm".

### Date off hours

Date off hours messages (not today/tomorrow) use the default LONG date and SHORT time according to the locale (default or custom) and to device setting.

- If the device is set to 12 hours format:
  
   *"Thanks for your message. We will be back online January 12, 2017 at 3:30pm"*

- If the device is set to 24 hours format:
  
   *"Thanks for your message. We will be back online January 12, 2017 at 15:30"*

If you want special date/hour format, use:

```xml
<string name="lp_date_time_format"></string>
```

With any **date & time format**, for example, "MMM d, yyyy hh:mm a" or "EEEE dd/mm/yy HH:mm".

###  Timezone

Off hours can appear in different time zone with this resource ID:

```xml
<string name="lp_ttr_message_off_hours_time_zone_id"></string>
```

You can find a list of timezone IDs [here](https://garygregory.wordpress.com/2013/06/18/what-are-the-java-timezone-ids/).

**Example**: _"US/Pacific", "Europe/Berlin"_
