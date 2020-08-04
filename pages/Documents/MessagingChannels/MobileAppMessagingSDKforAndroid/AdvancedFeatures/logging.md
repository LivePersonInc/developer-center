---
pagename: Logging

Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Advanced Features
permalink: mobile-app-messaging-sdk-for-android-advanced-features-logging.html
indicator: messaging
---

The LivePerson Mobile SDK's Logging system has been redesigned in Android SDK 4.4 / 5.2 to bring enhanced customer control and data safety to what we send to the system logs. This new logger brings with it two features, both now located under the `LivePerson.Logging` static class: Precise Logging Level Control and Log Data Masking

## Precise Logging Level Control

The Mobile SDK can now be set to one of six different verbosity settings:

- **VERBOSE** (high-traffic logs; tracks many objects as they move through the SDK)
- **DEBUG** (details some of the inner workings of the SDK logic and network stack)
- **INFO** (primarily large business-logic steps as the SDK connects, sends, and receives messages)
- **WARNING** (things that went slightly wrong, but were recoverable enough that the user should not have noticed)
- **ERROR** (things that went wrong enough that we either failed or had to resort to a fallback that the user may have noticed)
- **NONE** (silent as the abyss)

As is standard with most logging systems, each of these settings also includes all levels below it. Setting the SDK Logging Level to **NONE** disables SDK logging entirely.

The default log level is **INFO** in Release builds, and **VERBOSE** in Debug builds.

You can adjust the logging level with the following method:

```java
LivePerson.Logging.setSDKLoggingLevel(LogLevel.DEBUG);
```

**WARNING:** While reducing the SDK logging level can reduce how much spam is sent to your system logs, doing so may hinder LivePerson Support Staff from assisting with issues, should system logs be necessary to resolve any future issues.

## Log Data Masking

The Mobile SDK now includes a feature that, when enabled, will replace all instances of sensitive data such as authentication tokens, user IDs, message contents, PII, and other sensitive data with a simple "**\*\*\*\*\*\*\*\***" string, ensuring that no details, not even the length of these items is exposed to the logs. This feature has been applied to *all* of our logs - everything from Error on down to Verbose. This allows a greater level of flexibility in deciding how much to allow the Mobile SDK to log, knowing that no matter what setting you choose, you won't have to worry about data leaks.

This feature is **Enabled** by default in Release builds, but **Disabled** in Debug builds to preserve log detail.

You can enable or disable this feature with the following method:

```java
LivePerson.Logging.setDataMaskingEnabled(true);
```

## Persistence

These setting are kept as *static* variables, and thus persist for the lifetime of the application and no further. To ensure they is always applied, a good approach is to make this change is this:

```java
public class MyHostApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        
        if (BuildConfig.DEBUG) {
            LivePerson.Logging.setSDKLoggingLevel(LogLevel. /* YOUR DEBUG LOG LEVEL */);
            LivePerson.Logging.setDataMaskingEnabled( /* YOUR DEBUG DATA MASKING BOOL */ );
        } else {
            LivePerson.Logging.setSDKLoggingLevel(LogLevel. /* YOUR PRODUCTION LOG LEVEL */);
            LivePerson.Logging.setDataMaskingEnabled( /* YOUR PRODUCTION DATA MASKING BOOL */ );
        }
    }
}
```

## Gets a snapshot of LivePerson log history

Gets a snapshot of LivePerson log history, as a List of LogLine objects, filtered by LogLevel. The returned List<LogLine> containing all log lines at an equal or lesser logging
level than "filter", and none of the lines at a greater logging level.

```java
LivePerson.Logging.getLogSnapshot(LogLevel filter);
```

| Parameter | Description |
| :--- | :--- |
| filter | The highest LogLevel of lines you want included in the snapshot |

## Gets a snapshot of LivePerson log history

List<String> containing all log lines at an equal or lesser logging level than "filter", and none of the lines at a greater logging level.

```java
LivePerson.Logging.getLogSnapshotStrings(LogLevel filter);
```

| Parameter | Description |
| :--- | :--- |
| filter | The highest LogLevel of lines you want included in the snapshot |

## Gets a snapshot of LivePerson log history

Gets a snapshot of log history, as a single String with each line separated by newline characters, filtered by LogLevel. List<String> containing all log lines at an equal or lesser logging level than "filter", and none of the lines at a greater logging level.

```java
LivePerson.Logging.getLogSnapshotStringBlock(LogLevel filter);
```

| Parameter | Description |
| :--- | :--- |
| filter | The highest LogLevel of lines you want included in the snapshot |

## Clears the in-memory log line cache

Lines already written to the System Logs (logcat) are not affected, only the logs retrievable via getLogSnapshot and related methods.

```java
LivePerson.Logging.clearHistory();
```


