---
pagename: Date and Time Styles
redirect_from:
  - consumer-experience-ios-sdk-timestamps.html
  - mobile-app-messaging-sdk-for-ios-string-localization-timestamps-formatting.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: String Localization

order: 229
permalink: mobile-app-messaging-sdk-for-ios-string-localization-date-and-time-styles.html

indicator: messaging
---


The iOS platform provides four different default types of date and time styles:

- SHORT is numeric, for example, **12/13/52 or 3:30 PM**.
- MEDIUM is longer and contains the first three letters of the month, for example, **Jan 12, 1952**.
- LONG is longer and contains the full month name, for example, **January 12, 1952 or 3:30:32 PM**
- FULL is the complete time and date, for example, **Tuesday, April 12, 1952 AD or 3:30:42 PM PST**.

The LPMessagingSDK uses default styles. Each feature has a style, which is flexible and adapts the 'locale' configuration of the device. For example, the US locale SHORT date displays as "9/25/16", whereas the Japanese locale SHORT date displays as "2016/9/25".

You can set a specific 'locale' that is different from the device locale through the language and country configurations. 

```swift
country: String?,  language: String?
```


### Bubble timestamp

Bubble timestamps contain only the time in SHORT time format, according to the locale (default or custom) and device setting.

- Device set to 12-hour format: "3:30pm"
- Device set to 24-hour format: "15:30"

Override the resource ID with any **time** format, for example, "hh:mm a" or "HH:mm", which overrides all bubble timestamps:

```swift
 lpTimeFormat: String? 
```


### Date and time format instead of style

It is also possible to configure a specific format for date and time instead of style.

If the host app has customized formatting, this formatting gets used instead of style; therefore, the 'locale' does not get affected.  You can configure the  formatting  for the date only (separator) using three configurable formatting resources:

* **For date only (separator):**

   ```swift
   lpDateFormat: String?
   ```

* **For a time only, that is, the bubble's timestamp & the off hours time in case of today/tomorrow:**

   ```swift
   lpTimeFormat: String?
   ```

* For date & time together, that is, resolve message & the off hours time in case of another date:

   ```swift
   lpDateTimeFormat: String?
   ```


### Date off hours

Date off hours messages (not today/tomorrow) use the default LONG date and SHORT time according to the locale (default or custom) and device setting.

- Device set to 12-hour format:
  
   * "Thanks for your message. We will be back online January 12, 2017 at 3:30pm"*

- Device set to 24-hour format:
  
   * "Thanks for your message. We will be back online January 12, 2017 at 15:30"*

Define a special date/hour format with any **date & time format**, for example, "MMM d, yyyy hh:mm a" or "EEEE dd/mm/yy HH:mm".

```swift
lpDateFormat: String?
```


### Resolve message

Resolve messages use the default SHORT date and SHORT time according to the locale (default or custom) and device setting.

- Device set to 12-hour format (US locale):

  *"Conversation resolved by [agent name] \n 9/25/16, 3:30pm"*

- Device set to 24-hour format (US locale):
  
  *"Conversation resolved by [agent name] \n 9/25/16, 15:30"*

Define a special date/hour format with any **date & time format**, for example, "MMM d, yyyy hh:mm a" or "EEEE dd/mm/yy HH:mm":

```swift
lpDateTimeFormat: String?
```

**Limitation:** If the formatting changed after the Resolve messages already appear, this change takes no effect. We plan to fix this limitation in future versions.*


### Separator timestamp

Separator timestamps contain only the date in SHORT date format, according to the locale (default or custom) and device setting.

"9/25/16" for US locale / "2016/9/25" for JP locale

Override the resource ID with any **date** format, for example, "MMM d, yyyy" or "EEEE dd/mm/yy":

```swift
lpDateFormat: String?
```



### Timezone off hours

Off hours can appear in different time zones with this resource ID :

```swift
;offHoursTimeZoneName: String = "";
```

You can find a list of timezone IDs [here](https://helpspot.readdle.com/calendars/index.php?pg=kb.page&id=588).

**Example**: _"US/Pacific", "Europe/Berlin"._



### Today and tomorrow off hours

Today and tomorrow off hours messages use the default SHORT time only (without a date) according to the locale (default or custom) and device setting.

- Device set to 12-hour format:
  
   * "Thanks for your message. We will be back online today/tomorrow at 3:30pm"*

- Device set to 24-hour format:
  
   * "Thanks for your message. We will be back online today/tomorrow at 15:30"*

Define a special hour format with any **time** format, for example, "hh:mm a" or "HH:mm".:

```swift
lpTimeFormat: String?
```

