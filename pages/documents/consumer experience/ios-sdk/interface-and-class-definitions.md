---
title: Interface and class definitions
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: SDK APIs

order: 11
permalink: consumer-experience-ios-sdk-interfacedefinitions.html

indicator: messaging
---

### LPUser

```javascript
{
    class LPUser: NSObject {
    var firstName: String?
    var lastName: String?
    var profileImageURL: String?
    var phoneNumber: String?
    var employeeID: String?
    var uid: String?
}
```

### LPLog

```javascript
{
    class LPLog: NSObject {
    var timestamp: String?
    var className: String?
    var funcName: String?
    var text: String?
    var logLevel: LogLevel?
}
```

### LogLevel

```javascript
{
    enum LogLevel: Int {
    case TRACE
    case DEBUG
    case INFO
    case WARNING
    case ERROR
    case OFF
}
```

### LPNotification

```javascript
{
    class LPNotification: NSObject {
    var text: String
    var user: LPUser
    var accountID: String
    var isRemote: Bool
    var toString : String
}
```

### LPConversationCloseReason

```javascript
{
    public enum LPConversationCloseReason: Int {
        case agent = 0
        case consumer
        case system
}
```








