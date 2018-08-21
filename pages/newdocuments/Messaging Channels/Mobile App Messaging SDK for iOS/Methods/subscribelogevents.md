---
pagename: subscribeLogEvents
redirect_from:
  - consumer-experience-ios-sdk-subscribelogevents.html
Keywords:

categoryname: Consumer Experience
documentname: Mobile App Messaging SDK for iOS
subfoldername: Methods

order: 180
permalink: mobile-app-messaging-sdk-for-ios-methods-subscribelogevents.html

indicator: messaging
---

Subscribe to log events (Trace, Debug, Info, Warning, Error). Each time a log event with the passed log level occurs, the callback will be invoked with the log object.

`func subscribeLogEvents(_ logLevel: LogLevel, logEvent: @escaping LogEventClosure)`

| Parameter | Description | Notes |
| :--- | :--- | :--- |
| logLevel | object is an instance of [LPLog](consumer-experience-ios-sdk-interfacedefinitions.html){:target="_blank"}. |
| logEvent | The completion block will pass [LPLog](consumer-experience-ios-sdk-interfacedefinitions.html){:target="_blank"} object which consists all the information for the log. |