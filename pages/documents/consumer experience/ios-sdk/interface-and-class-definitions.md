---
title: Interface and class definitions
redirect_from:
  - consumer-experience-ios-sdk-interfacedefinitions.html
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for iOS
level4: SDK APIs

order: 12
permalink: mobile-app-messaging-sdk-for-ios-sdk-apis-interface-and-class-definitions.html

indicator: messaging
---

### ConversationParamProtocol

```swift
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

```swift
enum ConversationQueryType: String {
    case Brand = "Brand"
    case Consumer = "Consumer"
}
```

### LPUser

```swift
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

```swift
class LPLog: NSObject {
    var timestamp: String?
    var className: String?
    var funcName: String?
    var text: String?
    var logLevel: LogLevel?
}
```

### LPConversationViewParams

```swift
class LPConversationViewParams: NSObject {
  var conversationQuery: ConversationParamProtocol!
  var containerViewController: UIViewController? // nil = WindowMode
  var isViewOnly = false
  var conversationHistoryControlParam: LPConversationHistoryControlParam? // nil = no history control filter
}
```

### LPConversationHistoryControlParam

```swift
class LPConversationHistoryControlParam: NSObject {
  var historyConversationsStateToDisplay: LPConversationsHistoryStateToDisplay? // control what kind of conversation to show (Open/Close)
  var historyConversationsMaxDays: UInt? //get conversation that Closed/Opens in the last X days

  historyConversationMaxDaysType: LPConversationHistoryMaxDaysDateType? //Control if filter the max days by conversation start date or by conversation close date
}
```

### LPConversationsHistoryStateToDisplay

```swift
enum LPConversationsHistoryStateToDisplay: Int {
    case open
    case close
}
```

### LPConversationHistoryMaxDaysDateType

```swift
enum LPConversationHistoryMaxDaysDateType: Int {
    case startConversationDate    // Default
    case endConversationDate
}
```

### LPAuthenticationParams

```swift
class LPAuthenticationParams: NSObject {
  var authenticationCode: String? // Code Flow authentication
  var jwt: String? // Implicit Flow authentication
  var redirectURI: String? // Code Flow authentication
  var certPinningPublicKeys: [String]? //Cert pining validation public keys
  var type: LPAuthenticationType = .signup // User authentication type with 'signup' as default
}
```

### LPNotification

```swift
class LPNotification: NSObject {
    var text: String
    var user: LPUser
    var accountID: String
    var isRemote: Bool
    var toString : String
}
```

### LogLevel

```swift
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

```swift
enum LPConversationCloseReason: Int {
    case agent = 0
    case consumer
    case system
}
```

### LPCampaignInfo

```swift
class LPCampaignInfo: NSObject {
    var campaignId: Int
    var engagementId: Int
    var sessionId: String?
    var visitorId: String?
    var contextId: String
}
```

### LPMonitoringInitParams
```swift
class : NSObject {
    var appInstallId: String // App Install ID of the Mobile Campaign of the Brand
}
```


### LPMonitoringParams
```swift
class : NSObject {
    var entryPoints: [String]? // Entry points array of the Mobile App
    var engagementAttributes: [[String:Any]]? // Array of Engagement Attributes
    var pageId: String? // PageID to send the SDEs for
}
```

### LPGetEngagementResponse
```swift
class : NSObject {
    var engagementDetails: [LPEngagementDetails]? // Optional Engagement Details response in case received from the server, per the Engagement's request
    var sessionId: String?
    var visitorId: String?
    var pageId: String? // PageID of the Engagement. If not sending one in request, a new one will be generated from server in the response
}
```

### LPSendSDEResponse
```swift
class : NSObject {
    var sessionId: String?
    var visitorId: String?
    var pageId: String? // PageID of the Engagement. If not sending one in request, a new one will be generated from server in the response
}
```

### LPEngagementDetails
```swift
class : NSObject {
    var campaignId: Int // CampaignID
    var engagementId: Int // EngagementID
    var connectorId: Int
    var engagementRevision: Int
    var conversationId: String? // Returned when there's an open conversation
    var status: String?
    var contextId: String?
}
```

### LPAuthenticationType
```javascript
enum LPAuthenticationType: Int {
    case signup // Old unauthenticated method
    case unauthenticated // New unauthenticated method for users without identity
    case authenticated // Authenticated users
}
```
