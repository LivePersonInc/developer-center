---
pagename: Date and Time Formats
redirect_from:
  - android-off-hours.html
  - android-bubble.html
  - mobile-app-messaging-sdk-for-android-string-localization-bubble-timestamp.html
  - android-separator.html
  - mobile-app-messaging-sdk-for-android-string-localization-separator-timestamp.html
  - android-timestamps.html
  - mobile-app-messaging-sdk-for-android-string-localization-timestamps-formatting.html
  - android-resolve.html
  - mobile-app-messaging-sdk-for-android-string-localization-resolve-message.html
  - mobile-app-messaging-sdk-for-android-string-localization-date-and-time.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: String Localization

order: 240
permalink: mobile-app-messaging-sdk-for-android-string-localization-date-and-time-formats.html

indicator: messaging
---


The Android platform provides four default types of date and time formats:

- [SHORT](https://developer.android.com/reference/java/text/DateFormat.html#SHORT) is numeric, for example, **12.13.52 or 3:30pm**.
- [MEDIUM](https://developer.android.com/reference/java/text/DateFormat.html#MEDIUM)  is longer and contains the first three letters of the month, for example, **Jan 12, 1952**.
- [LONG](https://developer.android.com/reference/java/text/DateFormat.html#LONG) is longer and contains the full month name, for example, **January 12, 1952 or 3:30:32pm**.
- [FULL](https://developer.android.com/reference/java/text/DateFormat.html#FULL)is the complete time and date, for example, **Tuesday, April 12, 1952 AD or 3:30:42pm PST**.

When customizing the date and time format, use the unique resource ID that we've provided for each feature. By default, all these formatting resources are empty to take the default device locale.

You can configure the following:

- **Date only** (separator)

   ```xml
   <string name="lp_date_format"></string>
   ```

- **Time only** (bubble's timestamp & off hours in case of today/tomorrow)

   ```xml
   <string name="lp_time_format"></string>
   ```

- **Date & time together** (resolve message & off hours in case of another date)

   ```xml
   <string name="lp_date_time_format"></string>
   ```


### Bubble timestamp

Bubble timestamps contain only the time in [SHORT](https://developer.android.com/reference/java/text/DateFormat.html#SHORT) time format, according to the locale (default or custom) and device setting.

- Device set to 12-hour format: "3:30pm"
- Device set to 24-hour format: "15:30"

Override the resource ID with any **time** format, for example, "hh:mm a" or "HH:mm", which overrides all bubble timestamps:

```xml
<string name="lp_time_format"></string>
```

### Date off hours

Date off hours messages (not today/tomorrow) use the default LONG date and SHORT time according to the locale (default or custom) and device setting.

- Device set to 12-hour format:
  
   * "Thanks for your message. We will be back online January 12, 2017 at 3:30pm"*

- Device set to 24-hour format:
  
   * "Thanks for your message. We will be back online January 12, 2017 at 15:30"*

- If you want to define a special date/hour format with any **date & time format**, for example, "MMM d, yyyy hh:mm a" or "EEEE dd/mm/yy HH:mm".

   ```xml
   <string name="lp_date_time_format"></string>
   ```


### Resolve message

Resolve messages use the default SHORT date and SHORT time according to the locale (default or custom) and device setting.

- Device set to 12-hour format (US locale):

  *"Conversation resolved by [agent name] \n 9/25/16, 3:30pm"*

- Device set to 24-hour format (US locale):
  
  *"Conversation resolved by [agent name] \n 9/25/16, 15:30"*

Define a special date/hour format with any **date & time format**, for example, "MMM d, yyyy hh:mm a" or "EEEE dd/mm/yy HH:mm":

```java
<string name="lp_date_time_format"></string>
```



### Separator timestamp

Separator timestamps contain only the date in [SHORT](https://developer.android.com/reference/java/text/DateFormat.html#SHORT) date format, according to the locale (default or custom) and device setting.

"9/25/16" for US locale / "2016/9/25" for JP locale

Override the resource ID with any **date** format, for example, "MMM d, yyyy" or "EEEE dd/mm/yy":

```xml
<string name="lp_date_format"></string>
```


### Timezone

Off hours can appear in different time zones with this resource ID:

```xml
<string name="lp_ttr_message_off_hours_time_zone_id"></string>
```

You can find a list of timezone IDs [here](https://garygregory.wordpress.com/2013/06/18/what-are-the-java-timezone-ids/).

**Example**: _"US/Pacific", "Europe/Berlin"_



### Today and tomorrow off hours 
Today and tomorrow off hours messages use the default SHORT time only (without a date) according to the locale (default or custom) and device setting.

- Device set to 12-hour format:
  
   * "Thanks for your message. We will be back online today/tomorrow at 3:30pm"*

- Device set to 24-hour format:
  
   * "Thanks for your message. We will be back online today/tomorrow at 15:30"*

Define a special hour format with any **time** format, for example, "hh:mm a" or "HH:mm".:

   ```xml
   <string name="lp_time_format"></string>
   ```