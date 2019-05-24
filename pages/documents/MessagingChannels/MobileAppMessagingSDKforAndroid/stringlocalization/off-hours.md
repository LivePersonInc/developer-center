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

### Date and time formatting

Android provides four default types of date and time formats:

- [SHORT](https://developer.android.com/reference/java/text/DateFormat.html#SHORT) is completely numeric (12.13.52 or 3:30pm)
- [MEDIUM](https://developer.android.com/reference/java/text/DateFormat.html#MEDIUM) is longer and contains the first 3 letters of the month (Jan 12, 1952)
- [LONG](https://developer.android.com/reference/java/text/DateFormat.html#LONG) is longer (January 12, 1952 or 3:30:32pm)
- [FULL](https://developer.android.com/reference/java/text/DateFormat.html#FULL) specifies the complete time and date (Tuesday, April 12, 1952 AD or 3:30:42pm) PST.

If customizing the date/time format, we have provided a unique resource ID for each feature. By default, all these formatting resources are empty to take the default device locale.

We define three configurable formatting resources:

- **Date only** (separator):

   ```xml
   <string name="lp_date_format"></string>
   ```

- **Time only** (bubble’s timestamp & off hours time in case of today/tomorrow):

   ```xml
   <string name="lp_time_format"></string>
   ```

- **Date & time together** (resolve message & off hours time in case of other date):

   ```xml
   <string name="lp_date_time_format"></string>
   ```


### Today and tomorrow off hours 
Today and tomorrow off hours messages use the default SHORT time without date according to the locale (default or custom) and to device setting.

- If the device is set to 12-hour format:
  
   *"Thanks for your message. We will be back online today/tomorrow at 3:30pm"*

- If the device is set to 24-hour format:
  
   *"Thanks for your message. We will be back online today/tomorrow at 15:30"*

If you want special hour format, use:

```xml
<string name="lp_time_format"></string>
```

With any **time** format, for example, "hh:mm a" or "HH:mm".

### Date off hours

Date off hours messages (not today/tomorrow) use the default LONG date and SHORT time according to the locale (default or custom) and to device setting.

- If the device is set to 12-hour format:
  
   *"Thanks for your message. We will be back online January 12, 2017 at 3:30pm"*

- If the device is set to 24-hour format:
  
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

### Bubble timestamp

Bubble timestamps contain only time in [SHORT](https://developer.android.com/reference/java/text/DateFormat.html#SHORT) time format, according to the locale (default or custom) and to device setting.

- If the device is set to 12-hour format : "3:30pm"
- If the device is set to 24-hour format : "15:30"
- If you the bubble time format, override the resource ID with any **time** format, for example, "hh:mm a" or "HH:mm":

   ```xml
   <string name="lp_time_format"></string>
   ```

   This will apply to all bubble’s timestamp.

### Separator timestamp

Separator timestamps contain only date in [SHORT](https://developer.android.com/reference/java/text/DateFormat.html#SHORT) date format, according to the locale (default or custom) and to device setting.

- "9/25/16" for US locale / "2016/9/25" for JP locale
- If you the separator time format, override the resource id, with any **date** format, for example, "MMM d, yyyy" or "EEEE dd/mm/yy":

   ```xml
   <string name="lp_date_format"></string>
   ```

### Resolve message

Resolve message use default SHORT date and SHORT time according to the locale (default or custom) and to device setting.

- If the device is set to 12-hour format (US locale):

  *"Conversation resolved by [agent name] \n 9/25/16, 3:30pm"*

- If the device is set to 24-hour format (US locale):
  
  *"Conversation resolved by [agent name] \n 9/25/16, 15:30"*

- If you want special date/hour format, use with any **date & time format**, for example, "MMM d, yyyy hh:mm a" or "EEEE dd/mm/yy HH:mm":

   ```java
   <string name="lp_date_time_format"></string>
   ```

