---
title: Monitoring API
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for iOS
level4: SDK APIs

order: 11
permalink: consumer-experience-ios-sdk-monitoring-methods.html

indicator: messaging
---

<div style="color:red;font-weight:bold;">
Important:
</div>
Monitoring API is enabled only when the SDK is initialized with [LPMonitoringParams](consumer-experience-ios-sdk-interfacedefinitions.html), to use this initialization refer to the following [steps](consumer-experience-ios-sdk-quick-start.html#step-4-optional-initialization-with-monitoring-params)

### sendSDE

Use this API to report on engagement attributes (SDEs) for a consumer in an appInstallationId context including show and accept impressions.

```swift
func sendSDE(consumerID: String, monitoringParams: LPMonitoringParams, completion: @escaping (_ response: LPSendSDEResponse)->(), failure: @escaping (_ error: NSError)->())
```

| Parameter | Description | Required |
| :--- | :--- | :--- |
| consumerId | Mandatory consumer ID from the host app | Yes |
| monitoringParams | An mandatory [LPMonitoringParams](consumer-experience-ios-sdk-interfacedefinitions.html) with mandatory Engagement Attributes and optional PageId and entry points array  | Yes |
| completion | A Completion callback with response of type [LPSendSDEResponse](consumer-experience-ios-sdk-interfacedefinitions.html). This response includes sessionID and visitorID for future use |  Yes |
| failure | A Failure callback with an error in case the request fails |  Yes |


### getEngagement

Use this method to get an engagement for a consumer in an appInstallationId context. When calculating eligibility, the decision is based on the SDEs and other parameters based on the messaging campaign concept.

As an optional parameter, you can pass SDE Data which includes Entry Points and Engagement Attributes for routing the conversation.

```swift
func getEngagement(consumerID: String?, monitoringParams: LPMonitoringParams?, completion: @escaping (_ response: LPGetEngagementResponse)->(), failure: @escaping (_ error: NSError)->())
```

| Parameter | Description | Required |
| :--- | :--- | :--- |
| consumerId | The consumer ID from the host app | No |
| monitoringParams | An optional [LPMonitoringParams](consumer-experience-ios-sdk-interfacedefinitions.html) with optional pageId, Entry Points array and Engagement Attributes | No |
| completion | A Completion callback with response of type [LPGetEngagementResponse](consumer-experience-ios-sdk-interfacedefinitions.html). This response includes sessionID and visitorID for future use |  Yes |
| failure | A Failure callback with an error in case the request fails |  Yes |


*Please refer to the [Interface and Class Definitions](consumer-experience-ios-sdk-interfacedefinitions.html) section for parameter classes.*
