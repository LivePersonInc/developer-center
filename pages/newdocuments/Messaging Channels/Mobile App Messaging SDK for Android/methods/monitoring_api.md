---
pagename: Monitoring API
redirect_from:
  - android-monitoring_api.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: SDK APIs

order: 104
permalink: mobile-app-messaging-sdk-for-android-sdk-apis-monitoring-api.html

indicator: messaging
---
**(LivepersonMonitoring.java class)**



**Note:** Monitoring API is enabled only when the SDK is initialized with [MonitoringInitParams](android-interface-definitions.html), for how to initialize the SDK with MonitoringParams, click [here](android-quickstart-manual.html#step-4-optional-initialization-with-monitoring-params).

### sendSde

Use this API to report on engagement attributes (SDEs) for a consumer in an appInstallationId context including show and accept impressions.

```swift
public static void sendSde(Context context, @NonNull List<LPMonitoringIdentity> identities, @NonNull MonitoringParams monitoringParams, SdeCallback callback)
```

| Parameter | Description | Required |
| :--- | :--- | :--- |
| context | A context from the host app | Yes |
| identities | A list of LPMonitoringIdentity objects with the consumer identities | Yes |
| monitoringParams | An mandatory MonitoringParams with mandatory Engagement Attributes and optional PageId and entry points array  | Yes |
| callback | A callback of type [SdeCallback](android-interface-definitions.html#sdecallback). This response includes SessionId, VisitorId and PageId for future use | Yes |


### getEngagement

Use this method to get an engagement for a consumer in an appInstallationId context. When calculating eligibility, the decision is based on the SDEs and other parameters based on the messaging campaign concept.

As an optional parameter, you can pass SDE Data which includes Entry Points and Engagement Attributes for routing the conversation.

```swift
public static void getEngagement(Context context, @Nullable List<LPMonitoringIdentity> identities, MonitoringParams monitoringParams, EngagementCallback callback)
```

| Parameter | Description | Required |
| :--- | :--- | :--- |
| context | A context from the host app | Yes |
| identities | A list of LPMonitoringIdentity objects with the consumer identities | No |
| monitoringParams | An optional object with optional pageId, Entry Points array and Engagement Attributes | No |
| callback | A callback of type [EngagementCallback](android-interface-definitions.html#engagementcallback). This response include SessionId, VisitorId and a list of [EngagementDetails](android-interface-definitions.html#engagementdetails) objects | Yes |


*Please refer to the [Interface and Class Definitions](android-interface-definitions.html) section for parameter classes.*
