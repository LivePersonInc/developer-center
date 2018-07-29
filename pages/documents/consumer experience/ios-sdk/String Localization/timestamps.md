---
title: Timestamps Formatting
redirect_from:
  - consumer-experience-ios-sdk-timestamps.html
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for iOS
level4: String Localization

order: 229
permalink: mobile-app-messaging-sdk-for-ios-string-localization-timestamps-formatting.html

indicator: messaging
---

### Time/Date Styles

The iOS platform provides four different default types of date and time styles:

- [SHORT](https://developer.android.com/reference/java/text/DateFormat.html#SHORT){:target="_blank"} is completely numeric.
- [MEDIUM](https://developer.android.com/reference/java/text/DateFormat.html#MEDIUM){:target="_blank"} is longer and contains the first 3 letters of the month.
- [LONG](https://developer.android.com/reference/java/text/DateFormat.html#LONG){:target="_blank"} is longer and contains the full month name.
- [FULL](https://developer.android.com/reference/java/text/DateFormat.html#FULL){:target="_blank"} specifies the complete time and date.

*iOS examples:*

- SHORT  12/13/52 or 3:30 PM
- MEDIUM  Jan 12, 1952
- LONG January 12, 1952 or 3:30:32 PM
- FULL Tuesday, April 12, 1952 AD or 3:30:42 PM PST.

The LPMessagingSDK uses default styles. Each feature has its own style. The style is flexible and adapts the 'locale’ configuration of the device.

_**Example**: US locale SHORT date is displayed as "9/25/16", whereas Japanese locale SHORT date is displayed as "2016/9/25"._

A specific 'locale’ which is different from the device locale can be set through the language and country configurations.

_**Example**: country: String?,  language: String?_

**Time/Date formats**

It is also possible to configure a specific format for time and date instead of style.

If the host app has configured its own formatting, this formatting will be used instead of style (and therefore will not be affected by 'locale’).

To configure the formatting by the host app, three configurable formatting resources have been added:
For date only (separator):

- lpDateFormat: String?
For time only (bubble’s timestamp & off hours time in case of today/tomorrow):
- lpTimeFormat: String?
For date & time together (resolve message & off hours time in case of other date):
- lpDateTimeFormat: String?

### Off Hours

**Date & Time**

- The Today and tomorrow off hours message uses the default SHORT time without date according to the locale (default or custom).

If the device is set to 12 hour format: "Thanks for your message. We will be back online today/tomorrow at 3:30 PM"
If the device is set to 24 hour format:	"Thanks for your message. We will be back online today/tomorrow at 15:30"

To use a different time format, you can use lpTimeFormat: String? with any time format.
_**Example**: "hh:mm a", "HH:mm", etc._

- The Date off hours message (not today/tomorrow) uses default LONG date and SHORT time according to the locale (default or custom).

If the device is set to 12 hour format: "Thanks for your message. We will be back online January 12, 2017 at 3:30 PM"
If the device is set to 24 hour format: "Thanks for your message. We will be back online January 12, 2017 at 15:30"

To use a different date/hour format, you can use lpDateFormat: String? with any date & time format.

_**Example**: "MMM d, yyyy hh:mm a", "EEEE dd/mm/yy HH:mm" etc._

**Timezone**

Off hours can appear in different time zones with this resource ID :

    ;offHoursTimeZoneName: String = "";

A list of timezone IDs can be found [here](https://garygregory.wordpress.com/2013/06/18/what-are-the-java-timezone-ids/){:target="_blank"}.

_**Example**: "US/Pacific", "Europe/Berlin"._

### Bubble timestamp

The Bubble timestamp contains the time only in the [SHORT](https://developer.android.com/reference/java/text/DateFormat.html#SHORT){:target="_blank"} time format, according to the locale (default or custom) and to the device setting.

If the device is set to 12 hours format : "3:30 PM"
If the device is set to 24 hours format : "15:30"

If you wish to configure this time format, override the resource ID lpTimeFormat: String? with any time format.

_**Example**: "hh:mm a", "HH:mm" etc._

*Note: This applies to all bubble timestamps.*

### Separator timestamp

The Separator timestamp contains the date only in the [SHORT](https://developer.android.com/reference/java/text/DateFormat.html#SHORT){:target="_blank"} date format, according to the locale (default or custom) and to device setting.

"9/25/16" for US locale / "2016/9/25" for JP locale

If you wish to configure this time format, override the resource ID **lpDateFormat: String?** with any date format.

_**Example**: "MMM d, yyyy", "EEEE dd/mm/yy" etc._

### Resolve message

The Resolve message uses the default SHORT date and SHORT time according to the locale (default or custom) and to the device setting.

If the device is set to 12 hour format (US locale): "Conversation resolved by [agent name] \n 9/25/16, 3:30 PM"
If the device is set to 24 hour format (US locale): "Conversation resolved by [agent name] \n 9/25/16, 15:30"

To use a different date/hour format, you can use lpDateTimeFormat: String? with any date & time format.

_**Example**: "MMM d, yyyy hh:mm a", "EEEE dd/mm/yy HH:mm" etc._

*Limitation: If the formatting is changed after the Resolve messages already appears, this change will take no effect. This will be fixed in future versions.*
