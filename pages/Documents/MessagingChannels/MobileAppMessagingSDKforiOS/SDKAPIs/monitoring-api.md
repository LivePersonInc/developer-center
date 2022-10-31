---
pagename: Monitoring API
redirect_from:
  - consumer-experience-ios-sdk-monitoring-methods.html
  - consumer-experience-ios-sdk-methods.html#getEngagement
  - consumer-experience-ios-sdk-methods.html#sendSDE
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for iOS
subfoldername: SDK APIs
permalink: mobile-app-messaging-sdk-for-ios-sdk-apis-monitoring-api.html
indicator: messaging
---

{: .attn-note}
Monitoring API is enabled only when the SDK is initialized with [LPMonitoringParams](consumer-experience-ios-sdk-interfacedefinitions.html), to use this initialization refer to the [Quick Start](mobile-app-messaging-sdk-for-ios-quick-start.html#step-3-initialize-the-lpmessagingsdk) guide.

### sendSDE

Use this API method to report on engagement attributes (SDEs) for a consumer in an appInstallationId context including show and accept impressions.

```swift
func sendSDE(identities: [LPMonitoringIdentity], monitoringParams: LPMonitoringParams, completion: @escaping (_ response: LPSendSDEResponse)->(), failure: @escaping (_ error: NSError)->())
```

| Parameter | Description | Required |
| :--- | :--- | :--- |
| identities | Mandatory array of identity objects of type LPMonitoringIdentity which includes the details on the consumer and issuer. | Yes |
| monitoringParams | An mandatory [LPMonitoringParams](consumer-experience-ios-sdk-interfacedefinitions.html) with mandatory Engagement Attributes and optional PageId and entry points array.  | Yes |
| completion | A Completion callback with response of type [LPSendSDEResponse](consumer-experience-ios-sdk-interfacedefinitions.html). This response includes sessionID and visitorID for future use. |  Yes |
| failure | A Failure callback with an error in case the request fails. |  Yes |

### getEngagement

Use this API method to get an engagement for a consumer in an appInstallationId context. When calculating eligibility, the SDEs, and other parameters based on the messaging concept determine the decisions.

As an optional parameter, you can pass SDE Data, which includes Entry Points and Engagement Attributes for routing the conversation.

```swift
func getEngagement(identities: [LPMonitoringIdentity], monitoringParams: LPMonitoringParams?, completion: @escaping (_ response: LPGetEngagementResponse)->(), failure: @escaping (_ error: NSError)->())
```

| Parameter | Description | Required |
| --- | --- | --- |
| identities | Mandatory array of identity objects of type LPMonitoringIdentity which includes the details on the consumer and issuer. | No |
| monitoringParams | An optional [LPMonitoringParams](consumer-experience-ios-sdk-interfacedefinitions.html) with optional pageId, Entry Points array and Engagement Attributes. | No |
| completion | A Completion callback with response of type [LPGetEngagementResponse](consumer-experience-ios-sdk-interfacedefinitions.html). This response includes sessionID and visitorID for future use. |  Yes |
| failure | A Failure callback with an error in case the request fails. |  Yes |

{: .attn-alert}
When trying to fetch an Authenticated Engagement, the LPMonitoringIdentity parameter containing the ConsumerId is required.

### sendSDE (Deprecated)
*This method was deprecated since SDK version 3.2.0 Use [sendSDE(identity: LPMonitoringIdentity, monitoringParams: LPMonitoringParams, completion: @escaping (_ response: LPSendSDEResponse)->(), failure: @escaping (_ error: NSError)->()) instead](#sendsde) instead*

Use this API to report on engagement attributes (SDEs) for a consumer in an appInstallationId context including show and accept impressions.

```swift
func sendSDE(consumerID: String, monitoringParams: LPMonitoringParams, completion: @escaping (_ response: LPSendSDEResponse)->(), failure: @escaping (_ error: NSError)->())
```

| Parameter | Description | Required |
| --- | --- | --- |
| consumerId | Mandatory consumer ID from the host app | Yes |
| monitoringParams | A mandatory [LPMonitoringParams](consumer-experience-ios-sdk-interfacedefinitions.html) with mandatory Engagement Attributes and optional PageId and entry points array  | Yes |
| completion | A Completion callback with response of type [LPSendSDEResponse](consumer-experience-ios-sdk-interfacedefinitions.html). This response includes sessionID and visitorID for future use |  Yes |
| failure | A Failure callback with an error in case the request fails |  Yes |

### getEngagement (Deprecated)
*This method was deprecated since SDK version 3.2.0 Use [getEngagement(identity: LPMonitoringIdentity, monitoringParams: LPMonitoringParams?, completion: @escaping (_ response: LPGetEngagementResponse)->(), failure: @escaping (_ error: NSError)->()) instead) instead](#getengagement) instead*

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