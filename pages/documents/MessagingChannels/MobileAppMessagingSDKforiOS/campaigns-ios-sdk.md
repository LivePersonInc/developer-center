---
pagename: Campaigns 
redirect_from:
  - consumer-experience-ios-sdk-advanced-campaigns.html
  - mobile-app-messaging-sdk-for-ios-advanced-features-campaigns-for-mobile-app-messaging.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: Advanced Features

order: 235
permalink: mobile-app-messaging-sdk-for-ios-advanced-features-campaigns.html

indicator: messaging
---

Campaigns are the cornerstone of LiveEngage - the place where every digital engagement is created and organized. By using campaigns, brands can target specific audiences to achieve their business goals, such as increasing sales or generating leads.

Use the Monitoring APIs to:

* Report on the customer's journey inside the app

* Retrieve engagements based on the reported SDEs

* Report on engagement attributes

* Route conversations to a specific skill (based on engagements)

While web messaging allows automatic capturing of events (using the LE Tag), when using campaigns for In-App Messaging, it is up to the app to report the various events by using the In-App Monitoring APIs.

### Prerequisites

- Follow the steps in the [Campaigns for Messaging guide](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Campaigns/Mobile+App+Engagement+Configuration+Guide.pdf) **before** adding the implementation to a mobile app.

- The SDK must be initialized with the `LPMonitoringInitParams` object.

### Notes & Best Practices

* To start a conversation with a specific campaign and engagement, provide an `LPCampaignInfo` object to the `LPConversationViewParams` object.

* A monitoring session is a 6-hours window. All SDEs that report during the session get aggregated.

* If not reporting any SDEs (idle) for 30 minutes, a new session starts when reporting the next SDE.


### Monitoring APIs

The Monitoring APIs provide brands access to the LivePerson monitoring system. The eligibility of an engagement is based on campaigns and an engagement's definitions.  Monitoring APIs include:

* [sendSDE](consumer-experience-ios-sdk-monitoring-methods.html) - Sends engagement attributes to LivePerson. Use whenever the app would like to report on an engagement attribute.

* [getEngagement](consumer-experience-ios-sdk-monitoring-methods.html) - Returns an engagement if there is a matching campaign and engagement. Use to send engagement attributes (as part of the request body) as well. 

### Code Samples

```swift
// 1. Init SDK with Monitoring
let monitoringInitParams = LPMonitoringInitParams(appInstallID: "appInstallID")
do {
    try LPMessagingSDK.instance.initialize("accountNumber", monitoringInitParams: monitoringInitParams)
} catch let error as NSError {
    print("initialize error: \(error)")
    return
}

// 2. APIs
let entryPoints = ["http://www.liveperson-test.com",
                   "sec://Food",
                   "lang://De"]
let engagementAttributes = [
    ["type": "purchase",
     "total": 11.7,
     "orderId": "DRV1534XC"],
    ["type": "lead",
     "lead": ["topic": "luxury car test drive 2015",
              "value": 22.22,
              "leadId": "xyz123"]]
]

let monitoringParams = LPMonitoringParams(entryPoints: entryPoints, engagementAttributes: engagementAttributes, pageId: "pageId")
let identity = LPMonitoringIdentity(consumerID: "consumerID", issuer: "BrandIssuer")

// SendSDE
LPMonitoringAPI.instance.sendSDE(identities: [identity], monitoringParams: monitoringParams, completion: { (sendSdeResponse) in
    print("received send sde response: \(String(describing: sendSdeResponse))")
    })
    { [weak self] (error) in
    print("send sde error: \(error.userInfo.description)")
    }

// GetEngagement
LPMonitoringAPI.instance.getEngagement(identities: [identity], monitoringParams: monitoringParams, completion: { (getEngagementResponse) in
    print("received get engagement response: \(String(describing: getEngagementResponse))")
}) { [weak self] (error) in
    print("get engagement error: \(error.userInfo.description)")
}

// 3. Show Conversation using Campaign
// LPCampaignInfo parameters are based on the response of getEngagement() using getEngagementResponse (of Type //LPGetEngagementResponse) and includes LPEngagementDetails

let campaignInfo = LPCampaignInfo(campaignId: campaignID, engagementId: engagementID, contextId: contextID)
// Add campaignInfo to conversationQuery
let conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(accountNumber, campaignInfo: campaignInfo)
let conversationViewParam = LPConversationViewParams(conversationQuery: conversationQuery, isViewOnly: false)
// show conversation using campaignInfo
LPMessagingSDK.instance.showConversation(conversationViewParam)
```


