---
pagename: Timestamps Formatting
redirect_from:
  - android-timestamps.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: String Localization

order: 230
permalink: mobile-app-messaging-sdk-for-android-string-localization-timestamps-formatting.html

indicator: messaging
---

Android provides 4 different default types of date and time formats:

- [SHORT](https://developer.android.com/reference/java/text/DateFormat.html#SHORT) is completely numeric (12.13.52 or 3:30pm)
- [MEDIUM](https://developer.android.com/reference/java/text/DateFormat.html#MEDIUM) is longer and contains the first 3 letters of the month (Jan 12, 1952)
- [LONG](https://developer.android.com/reference/java/text/DateFormat.html#LONG) is longer (January 12, 1952 or 3:30:32pm)
- [FULL](https://developer.android.com/reference/java/text/DateFormat.html#FULL) specifies the complete time and date (Tuesday, April 12, 1952 AD or 3:30:42pm) PST.

For each feature we added a special resource ID in case customizing the date/time formatting is needed. By default, all these formatting resources are empty in order to take the default device locale.
We define 3 configurable formatting resources:

- For date only (separator):

```xml
<string name="lp_date_format"></string>
```
- For time only (bubble’s timestamp & off hours time in case of today/tomorrow):

```xml
<string name="lp_time_format"></string>
```
- For date & time together (resolve message & off hours time in case of other date):

```xml
<string name="lp_date_time_format"></string>
```
