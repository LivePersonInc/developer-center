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

1. Initialize the SDK and all of its components. You can initialize the SDK with or without a brandID.

   ```swift
   public func initialize(brandID: String? = nil) throws
   ```
   
2. Add the ContainerViewController parameter to show the Conversation Window. 

   <div class="important">If you do not pass ContainerViewController, the SDK provides a ViewController called <b>Window Mode</b>. If you pass the  ContainerViewController, the SDK uses it to Host the Conversation Window  called <b>ViewController Mode</b>.</div>

   ```swift
   public func showConversation(conversationQuery: ConversationParamProtocol, authenticationCode: String? = nil, containerViewController: UIViewController? = nil)
   ```

3. Dismiss the Conversation Window from the host ViewController.  

   ```swift
   public func removeConversation(conversationQuery: ConversationParamProtocol)
   ```

   <div class="important">When using Custom View Controller Mode, the Conversation view must be removed when leaving the App. To avoid dismissing the View when CSAT/SecureForms/PhotoSharing View is presented, you should only dismiss the Conversation view if Moving From ParentView, example <a href="consumer-experience-ios-sdk-messaging-methods.html#removeconversation">here</a>.</div>



### Initialize the Messaging SDK with Monitoring Params
<div class="important">
To get the App key or appInstallationId, a new Conversation Source needs to be added on LiveEngage, for more information about it, contact your Account Team.
</div>

1. Inside **viewController** add the following imports:

   ```swift
   import LPMessagingSDK
   import LPInfra
   ```

2. Also inside **ViewController**, under **viewDidLoad**, add the following code:

   ```swift
   do {
     let monitoringParams = LPMonitoringInitParams(appInstallID: "appInstallationId")
     try LPMessagingSDK.instance.initialize("Your account ID", monitoringInitParams: monitoringParams)
   } catch {
     return
   }
   ```

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


4. Using the **LPMonitoringParams**, get the Engagement for the User, which is needed to start a new conversation with a specific campaign.

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

5. Set up and call the conversation view. You’ll provide your LivePerson account number, a container view controller, and the campaign information.

   ```swift
   let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery("Your account ID", campaignInfo: campaignInfo)
   let conversationViewParams = LPConversationViewParams(conversationQuery: conversationQuery, isViewOnly: false)
   LPMessagingSDK.instance.showConversation(conversationViewParams, authenticationParams: nil)
   ```

6. Remove the conversation view when your container is deallocated:

   ```swift
   let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountNumber)
   LPMessagingSDK.instance.removeConversation(conversationQuery)
   ```

   <div class="important">When using Custom View Controller Mode, the Conversation view must be removed when leaving the App. To avoid dismissing the View when CSAT/SecureForms/PhotoSharing View is presented, you should only dismiss the Conversation view if Moving From ParentView, as demonstrated below.</div>

   ```swift
   if (self.conversationQuery != nil && self.isMovingToParentViewController){
     LPMessagingSDK.instance.removeConversation(self.conversationQuery!)
   }
   ```

**Note**: When using ViewController Mode, on the Navigation Bar Back Button, you can call **LPMessagingSDK.instance.removeConversation(self.conversationQuery!)**.


### Supporting functions:

1. Get ’filter’ for the conversation screen, determining which of the conversations display in the Conversation Window:

   ```swift
   public func getConversationBrandQuery(_ brandID: String, campaignInfo: LPCampaignInfo? = nil) -> ConversationParamProtocol
   ```

2. Get ’filter’ for the conversation screen, determining which of the conversations display in the Conversation Window, using the **Consumer ID**:

   ```swift
   public func getConversationConsumerQuery(consumerID: String?, brandID: String, agentToken: String) -> ConversationParamProtocol
   ```

3. Returns a boolean flag, with **Ready** when the Brand is connected and conversation can be proccessed:

   ```swift
   public func isBrandReady(brandID: String) -> Bool
   ```