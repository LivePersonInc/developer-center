### Step 4 (Optional): Initialization with Monitoring Params

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
