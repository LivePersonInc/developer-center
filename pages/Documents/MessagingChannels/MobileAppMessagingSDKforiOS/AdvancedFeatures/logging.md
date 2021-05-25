---
pagename: Logging

Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Advanced Features
permalink: mobile-app-messaging-sdk-for-ios-advanced-features-logging.html
indicator: messaging
---

The LivePerson Mobile SDK's Logging system has been redesigned in iOS SDK 5.2.0 to bring enhanced customer control and data safety to what we send to the system logs. This new has the following functionality located within the `LPMessaging`.

## Precise Logging Level Control

The LivePerson Mobile SDK can now be set to one of six different verbosity settings:

- **TRACE** (high-traffic logs; tracks many objects as they move through the SDK)
- **DEBUG** (details some of the inner workings of the SDK logic and network stack)
- **INFO** (primarily large business-logic steps as the SDK connects, sends, and receives messages)
- **WARNING** (things that went slightly wrong, but were recoverable enough that the user should not have noticed)
- **ERROR** (things that went wrong enough that we either failed or had to resort to a fallback that the user may have noticed)
- **OFF** (no logging output from LivePerson Mobile SDK's)

As is standard with most logging systems, each of these settings also includes all levels below it. Setting the SDK Logging Level to **OFF** disables SDK logging entirely.  The LivePerson Mobile SDK's will retain up to 100 lines of logs for combined all logging levels regardless of the logging level.  This means that if the logging level is set to "ERROR" for example, you may not be able to retrieve the last 100 logs recorded.    

{:.deprecated}
For SDK 6.0.X and below, the default log level is **INFO** in Release builds, and **TRACE** in Debug builds.

{:.important}
Since SDK 6.1, the default log level is **INFO** in Release builds, and **DEBUG** in Debug builds.

You can adjust the logging level with the following method:

```Swift
 Setter for the logging level of console logs produced by LPMessaging iOS SDK.

 - Parameters:
     - level: The level of logging options in order: (.TRACE, .DEBUG, .INFO, .WARNING, .ERROR, .OFF)
 - Info: The default value for release mode is .INFO and for debug is .TRACE.  Apps should not log lower than .INFO in release configurations.
 - Discussion: This will be replacing the previous functionality via LogsManager.
 LPMessaging.instance.setLoggingLevel( level: LPLoggingLevel)
```

**WARNING:** While reducing the SDK logging level can reduce how much spam is sent to your system logs, doing so may hinder LivePerson Support Staff from assisting with issues, should system logs be necessary to resolve any future issues.

## Persistence

The logging level setting are kept as *static* variables, and thus persist for the lifetime of the application and no further. To ensure they are always applied, a simple approach might look something like this:

```Swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {

    #if RELEASE
        LPMessaging.instance.setLoggingLevel(level: .WARN)
    #else
        LPMessaging.instance.setLoggingLevel(level: .TRACE)
    #endif
    return true
}
```

## Retrieval of SDK Logs
The logs within the LivePerson Mobile SDK remain until new logs overwrite them (we record up to 100 lines) or until the SDK is shutdown.  We provide provides 2 functions to retrieve logs from the SDK back to the host app as well as real time console logs.  These functions will return up to 100 lines of logging based on the current log stack.  Current logs can be returned to the host application either as an array of strings or concatenated into 1 string object.  See below for these functions. 

```Swift
 The mechanism to retrieve LPMessagingIOS SDK logs in an array of Strings

 - Parameters:
     - level: The filtering level of logging options in the following order: (.TRACE, .DEBUG, .INFO, .WARNING, .ERROR, .OFF)
 - Returns: An array of strings consisting of up to the last 100 logs based on the log level.
 - Info: The logger only records the last 100 logs total, filtering by log level may reduce the number of logs returned.
 - Discussion: This will be replacing the previous functionality via LogsManager.  The log history does not adhere to the logging level filter.  The log history records all log levels.  You can filter the logs returned by using the 'level' parameter in the same way you can filter the logging level. However be aware log snapshot and logging level work independently.
 LPMessaging.instance.getLogSnapshot(level: LPLoggingLevel) -> [String]

 The mechanism to retrieve LPMessagingIOS SDK logs in a single String block.

 - Parameters:
     - level: The level of logging options in order: (.TRACE, .DEBUG, .INFO, .WARNING, .ERROR, .OFF)
 - Returns: An array of strings consisting of up to the last 100 logs based on the log level.
 - Info: The logger only records the last 100 logs total, filtering by log level may reduce the number of logs returned.
 - Discussion: This will be replacing the previous functionality via LogsManager.  The log history does not adhere to the logging level filter.  The log history records all log levels.  You can filter the logs returned by using the 'level' parameter in the same way you can filter the logging level. However be aware log snapshot and logging level work independently.
 LPMessaging.instance.getLogStringBlock(level: LPLoggingLevel) -> String
```
## Log Data Masking

The LivePerson Mobile SDK now includes a feature that, when enabled, will replace all instances of sensitive data such as authentication tokens, user IDs, message contents, PII, and other sensitive data with a simple "********" string, ensuring that no details, not even the length of these items is exposed to the logs. This feature has been applied to *all* of our logs - everything from Error on down to Verbose. This allows a greater level of flexibility in deciding how much to allow the LivePerson Mobile SDK to log, knowing that no matter what setting you choose, you won't have to worry about data leaks.

This feature is **Enabled** by default in Release builds, but **Disabled** in Debug builds to preserve log detail.

You can enable or disable this feature with the following method:

```Swift
Should masking PII be enabled for the logging

 - Parameters:
     - enabled: Is masking PII enabled for the logs.
 - Info: This is enabled by default for Release builds.
 LPMessaging.instance.setDataMaskingEnabled(enabled: Bool)
```

## Persistence

These setting are kept as *static* variables, and thus persist for the lifetime of the application and no further. To ensure they are always applied, a simple approach might look something like this:

```Swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {

    #if RELEASE
        LPMessaging.instance.setLoggingLevel(level: .WARN)
    #else
        LPMessaging.instance.setLoggingLevel(level: .TRACE)
    #endif
    return true
}
```

