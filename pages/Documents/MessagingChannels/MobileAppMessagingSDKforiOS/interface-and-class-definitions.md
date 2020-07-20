---
pagename: Interface and Class Definitions
redirect_from:
  - consumer-experience-ios-sdk-interfacedefinitions.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: SDK APIs

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
    func getOpenDialog() -> Dialog?
    func getLatestClosedConversations(_ conversationsCount: Int) -> [Conversation]?
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
    var nickName: String?
    var profileImageURL: String?
    var phoneNumber: String?
    var employeeID: String?
    var uid: String?
}
```

### LPConversationViewParams

```swift
class LPConversationViewParams: NSObject {
  var conversationQuery: ConversationParamProtocol
  var containerViewController: UIViewController? // nil = WindowMode
  var isViewOnly
  var conversationHistoryControlParam: LPConversationHistoryControlParam
  var welcomeMessage: LPWelcomeMessage = LPWelcomeMessage(message: nil)
}
```

### LPConversationHistoryControlParam

```swift
class LPConversationHistoryControlParam: NSObject {
  var historyConversationsStateToDisplay: LPConversationsHistoryStateToDisplay // control what kind of conversation to show (Open/Close)
  var historyConversationsMaxDays: Int //get conversation that Closed/Opens in the last X days
  var isEnable: Bool //whether filtering by open or close, or filtering by historyConversationsMaxDays
  var historyConversationMaxDaysType: LPConversationHistoryMaxDaysDateType? //Control if filter the max days by conversation start date or by conversation close date
}
```

### LPConversationsHistoryStateToDisplay

```swift
enum LPConversationsHistoryStateToDisplay: Int {
    case open
    case close
    case all
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
    var sessionId: String? // if 'nil' SDE will not be sent to Agent
    var visitorId: String? // if 'nil' SDE will not be sent to Agent
    var contextId: String
}
```

### LPMonitoringInitParams
```swift
class LPMonitoringInitParams: NSObject {
    var appInstallId: String // App Install ID of the Mobile Campaign of the Brand
}
```


### LPMonitoringParams
```swift
class LPMonitoringParams: NSObject {
    var entryPoints: [String]? // Entry points array of the Mobile App
    var engagementAttributes: [[String:Any]]? // Array of Engagement Attributes.  SDE will not be sent to Agent if seesionID and visitorID are nil.
    var pageId: String? // PageID to send the SDEs for
}
```

### LPGetEngagementResponse
```swift
class LPGetEngagementResponse: NSObject {
    var engagementDetails: [LPEngagementDetails]? // Optional Engagement Details response in case received from the server, per the Engagement's request
    var sessionId: String?
    var visitorId: String?
    var pageId: String? // PageID of the Engagement. If not sending one in request, a new one will be generated from server in the response
}
```

### LPSendSDEResponse
```swift
class LPSendSDEResponse: NSObject {
    var sessionId: String?
    var visitorId: String?
    var pageId: String? // PageID of the Engagement. If not sending one in request, a new one will be generated from server in the response
}
```

### LPEngagementDetails
```swift
class LPEngagementDetails: NSObject {
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
```swift
enum LPAuthenticationType: Int {
    case signup // Old unauthenticated method
    case unauthenticated // New unauthenticated method for users without identity
    case authenticated // Authenticated users
}
```
