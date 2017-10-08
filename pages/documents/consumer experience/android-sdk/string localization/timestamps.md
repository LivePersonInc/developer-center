---
title: Timestamps Formatting
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: String Localization

order: 230
permalink: android-timestamps.html

indicator: messaging
---

Android provides 4 different default types of date and time formats:

- [SHORT](https://developer.android.com/reference/java/text/DateFormat.html#SHORT){:target="_blank"} is completely numeric (12.13.52 or 3:30pm)
- [MEDIUM](https://developer.android.com/reference/java/text/DateFormat.html#MEDIUM){:target="_blank"} is longer and contains the first 3 letters of the month (Jan 12, 1952)
- [LONG](https://developer.android.com/reference/java/text/DateFormat.html#LONG){:target="_blank"} is longer (January 12, 1952 or 3:30:32pm)
- [FULL](https://developer.android.com/reference/java/text/DateFormat.html#FULL){:target="_blank"} specifies the complete time and date (Tuesday, April 12, 1952 AD or 3:30:42pm) PST.

For each feature we added a special resource ID in case customizing the date/time formatting is needed. By default, all these formatting resources are empty in order to take the default device locale.
We define 3 configurable formatting resources:

- For date only (separator):
```<string name="lp_date_format"></string>```
- For time only (bubble’s timestamp & off hours time in case of today/tomorrow):
```<string name="lp_time_format"></string>```
- For date & time together (resolve message & off hours time in case of other date):
```<string name="lp_date_time_format"></string>```
