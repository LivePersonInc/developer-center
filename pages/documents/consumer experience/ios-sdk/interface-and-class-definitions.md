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
  var isViewOnly = false1
  var conversationHistoryControlParam: LPConversationHistoryControlParam? // nil = no history control filter
}
```

### LPConversationHistoryControlParam

```javascript
class LPConversationHistoryControlParam: NSObject {
  var historyConversationsStateToDisplay: LPConversationsHistoryStateToDisplay? // control what kind of conversation to show (Open/Close)
  var historyConversationsMaxDays: UInt? //get conversation that Closed/Opens in the last X days

  historyConversationMaxDaysType: LPConversationHistoryMaxDaysDateType? //Control if filter the max days by conversation start date or by conversation close date
}
```

### LPConversationsHistoryStateToDisplay

```javascript
enum LPConversationsHistoryStateToDisplay: Int {
    case open
    case close
}
```

### LPConversationHistoryMaxDaysDateType

```javascript
enum LPConversationHistoryMaxDaysDateType: Int {
    case startConversationDate    // Default
    case endConversationDate
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

### LPCampaignInfo

```javascript
class LPCampaignInfo: NSObject {
    var campaignId: Int
    var engagementId: Int
    var sessionId: String?
    var visitorId: String?
    var contextId: String
}
```

### LPMonitoringInitParams
```javascript
class : NSObject {
    var appInstallId: String // App Install ID of the Mobile Campaign of the Brand
}
```


### LPMonitoringParams
```javascript
class : NSObject {
    var entryPoints: [String]? // Entry points array of the Mobile App
    var engagementAttributes: [[String:Any]]? // Array of Engagement Attributes
    var pageId: String? // PageID to send the SDEs for
}
```

### LPGetEngagementResponse
```javascript
class : NSObject {
    var engagementDetails: [LPEngagementDetails]? // Optional Engagement Details response in case received from the server, per the Engagement's request
    var sessionId: String?
    var visitorId: String?
    var pageId: String? // PageID of the Engagement. If not sending one in request, a new one will be generated from server in the response
}
```

### LPSendSDEResponse
```javascript
class : NSObject {
    var sessionId: String?
    var visitorId: String?
    var pageId: String? // PageID of the Engagement. If not sending one in request, a new one will be generated from server in the response
}
```

### LPEngagementDetails
```javascript
class : NSObject {
    var campaignId: Int // CampaignID
    var engagementId: Int // EngagementID
    var conversationId: String? // Returned when there's an open conversation
    var status: String?
    var contextId: String?
}
```
