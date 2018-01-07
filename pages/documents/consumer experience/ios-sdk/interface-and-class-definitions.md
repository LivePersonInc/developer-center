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

### ConversationParamProtocol

```javascript
protocol ConversationParamProtocol {
    func getConversations() -> [Conversation]?
    func getConversations(_ predicate: NSPredicate?) -> [Conversation]?
    func getClosedConversations() -> [Conversation]?
    func getActiveConversation() -> Conversation?
    func getOpenConversation() -> Conversation?
    func getLatestClosedConversation(_ conversationsCount: Int) -> [Conversation]?
    func createNewConversation() -> Conversation
    func getQueryType() -> String
    func isConversationRelatedToQuery(_ conversation: Conversation) -> Bool
    func getBrandID() -> String
    func getQueryUID() -> String
    func getQueryProperties() -> [String : Any]
}
```

### ConversationQueryType

```javascript
enum ConversationQueryType: String {
    case Brand = "Brand"
    case Consumer = "Consumer"
}
```

### LPUser

```javascript
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
class LPLog: NSObject {
    var timestamp: String?
    var className: String?
    var funcName: String?
    var text: String?
    var logLevel: LogLevel?
}
```

### LPConversationViewParams

```javascript
class LPConversationViewParams: NSObject {
  var conversationQuery: ConversationParamProtocol!
  var containerViewController: UIViewController? // nil = WindowMode
  var isViewOnly = false
}
```

### LPAuthenticationParams

```javascript
class LPAuthenticationParams: NSObject {
  var authenticationCode: String? // Code Flow authentication
  var jwt: String? // Implicit Flow authentication
  var redirectURI: String? // Code Flow authentication
}
```

### LPNotification

```javascript
class LPNotification: NSObject {
    var text: String
    var user: LPUser
    var accountID: String
    var isRemote: Bool
    var toString : String
}
```

### LogLevel

```javascript
enum LogLevel: Int {
    case TRACE
    case DEBUG
    case INFO
    case WARNING
    case ERROR
    case OFF
}
```

### LPConversationCloseReason

```javascript
enum LPConversationCloseReason: Int {
        case agent = 0
        case consumer
        case system
}
```
