---
pagename: Logs and Info
redirect_from:
  - consumer-experience-ios-sdk-logs-info.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Configuration

order: 9
permalink: mobile-app-messaging-sdk-for-ios-configuration-logs-and-info.html

indicator: messaging
---


Send logs from LiveEngage to your app. Logs include different severity levels of errors and warnings.  

1. This method subscribes the host app to recieve log events from a specific log level and above.

    * _**Note: for information about the possible log levels, click [here](consumer-experience-ios-sdk-interfacedefinitions.html#loglevel)**_

```swift
public func subscribeLogEvents(logLevel: LogLevel)
```

{:start="2"}
2. Will be triggered when the SDK version you're using is obselete and needs an update.

```swift
<LPMessagingSDKdelegate> func LPMessagingSDKObseleteVersion(error: NSError)
```

{:start="3"}
3. This method returns the SDK current version.

```swift
public func getSDKVersion() -> String?
```

{:start="4"}
4. This method prints all the keys that can be localized on the SDK.

```swift
public func printAllLocalizedKeys()
```

{:start="5"}
5. This method prints all supported languages on the SDK.

```swift
public func printSupportedLanguages()
```

{:start="6"}
6. This method returns all supported languages on the SDK.

```swift
public func getAllSupportedLanguages() -> [String : String]
```
