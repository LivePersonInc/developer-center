---
pagename: Initialization
redirect_from:
  - consumer-experience-ios-sdk-initialization.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Configuration

order: 3
permalink: mobile-app-messaging-sdk-for-ios-configuration-initialization.html

indicator: messaging
---
<br>

### Initialize the Messaging SDK

1. Initialize the SDK and all of its components. You can initialize the SDK with or without a Brand Id.

   ```swift
   public func initialize(brandID: String? = nil) throws
   ```
   The ContainerViewController parameter shows the Conversation Window. 

2. The ContainerViewController paramater will show the Conversation Window. If no ContainerViewController is passed, the SDK will provide a ViewController. This is called Window Mode. If ContainerViewController is passed, the SDK will use it to Host the Conversation Window. This is called ViewController Mode.

```swift
public func showConversation(conversationQuery: ConversationParamProtocol, authenticationCode: String? = nil, containerViewController: UIViewController? = nil)
```

{:start="3"}
3. The below will remove the Conversation Windown from the ViewController. If using Window mode, this will remove the ConversationViewController from the Screen. When in ViewController mode, the host ViewController needs to be dismissed.

```swift
public func removeConversation(conversationQuery: ConversationParamProtocol)
```

<div class="important">
When using Custom View Controller Mode, the Conversation view must be removed when leaving the App. To avoid dismissing the View when CSAT/SecureForms/PhotoSharing View is presented, you should only dismiss the Conversation view if Moving From ParentView, example <a href="consumer-experience-ios-sdk-messaging-methods.html#removeconversation">here</a>.
</div>

### Supporting functions:

1. Will get ’filter’ for the conversation screen, determining which of the conversations will be displayed in the Conversation Window

```swift
public func getConversationBrandQuery(_ brandID: String, campaignInfo: LPCampaignInfo? = nil) -> ConversationParamProtocol
```

{:start="2"}
2. Will get ’filter’ for the conversation screen, determining which of the conversations will be displayed in the Conversation Window, using the Consumer ID

```swift
public func getConversationConsumerQuery(consumerID: String?, brandID: String, agentToken: String) -> ConversationParamProtocol
```

{:start="3"}
3. Will return a boolean flag, ready means that the Brand is connected and conversation can be proccessed.

```swift
public func isBrandReady(brandID: String) -> Bool
```

### Initialize the Messaging SDK with Monitoring Params
<div class="important">
To get the App key or appInstallationId, a new Conversation Source needs to be added on LiveEngage, for more information about it, contact your Account Team.
</div>

1. Inside **viewController** add the following imports:

```swift
import LPMessagingSDK
import LPInfra
```

{:start="2"}
2. Also inside **ViewController**, under **viewDidLoad**, add the following code:

```swift
do {
  let monitoringParams = LPMonitoringInitParams(appInstallID: "appInstallationId")
  try LPMessagingSDK.instance.initialize("Your account ID", monitoringInitParams: monitoringParams)
} catch {
  return
}
```

{:start="3"}
3. Create **LPMonitoringParams**. The entry points and engagement attributes used here are dummies:

```swift
  let entryPoints = ["tel://972737004000",
                     "http://www.liveperson.com",
                     "sec://Sport",
                     "lang://Eng"]

  let engagementAttributes = [
    ["type": "purchase", "total": 20.0],
    ["type": "lead",
    "lead": ["topic": "luxury car test drive 2015",
          "value": 22.22,
          "leadId": "xyz123"]]
  ]

  let monitoringParams = LPMonitoringParams(entryPoints: entryPoints, engagementAttributes: engagementAttributes)
```

{:start="4"}
4. Using the **LPMonitoringParams**, get the Engagement for the User. This is needed to start a new conversation with a specific campaign.

```swift
 LPMonitoringAPI.instance.getEngagement(consumerID: self.consumerID, monitoringParams: monitoringParams, completion: {
      if let first = engagement.engagementDetails?.first {
        let campaign = first.campaignId
        let id = first.engagementId
        let context : String = first.contextId!
        self.campaignInfo = LPCampaignInfo(campaignId: campaign, engagementId: id, contextId: context)
      } else {
        self.campaignInfo = nil
      }
    }) { (error) in
      self.campaignInfo = nil
    }
  }
```

{:start="5"}
5. Set up and call the conversation view. You’ll need to provide your LivePerson account number, a container view controller and the campaign information.

```swift
let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery("Your account ID", campaignInfo: campaignInfo)
let conversationViewParams = LPConversationViewParams(conversationQuery: conversationQuery, isViewOnly: false)
LPMessagingSDK.instance.showConversation(conversationViewParams, authenticationParams: nil)
```

{:start="6"}
6. In order to remove the conversation view when your container is deallocated, run the following code:

```swift
let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountNumber)
LPMessagingSDK.instance.removeConversation(conversationQuery)
```

<div class="important">
When using Custom View Controller Mode, the Conversation view must be removed when leaving the App. To avoid dismissing the View when CSAT/SecureForms/PhotoSharing View is presented, you should only dismiss the Conversation view if Moving From ParentView, as demonstrated below.
</div>

```swift
if (self.conversationQuery != nil && self.isMovingToParentViewController){
  LPMessagingSDK.instance.removeConversation(self.conversationQuery!)
}
```

**Note**: When ViewController Mode is used, on the Navigation Bar Back Button, you can simply call **LPMessagingSDK.instance.removeConversation(self.conversationQuery!)**.
