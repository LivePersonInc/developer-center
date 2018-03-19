---
title: Monitoring API
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: SDK APIs

order: 104
permalink: android-monitoring_api.html

indicator: messaging
---
**(LivepersonMonitoring.java class)**



**Note:** Monitoring API is enabled only when the SDK is initialized with [MonitoringInitParams](android-interface-definitions.html){:target="_blank"}

### getEngagement

Use this method to get an engagement for a consumer in an appInstallationId context. When calculating eligibility, the decision is based on the SDEs and other parameters based on messaging campaign concept.

As an optional parameter, you can pass SDE Data which includes Entry Points and Engagement Attributes for routing the conversation.

`public static void getEngagement(Context context, @Nullable String consumerId, MonitoringParams monitoringParams, EngagementCallback callback)`

| Parameter | Description |
| :--- | :--- |
| context | A context from the host app |
| consumerId | The consumer ID from the host app |
| monitoringParams | An optional object with optional pageId, Entry Points array and Engagement Attributes |
| callback | A callback of type [EngagementCallback](android-interface-definitions.html){:target="_blank"}. This response include SessionId, VisitorId and a list of [EngagementDetails](android-interface-definitions.html){:target="_blank"} objects |


### sendSde

Use this API to report on engagement attributes (SDEs) for a consumer in an appInstallationId context including show and accept impression.

`public static void sendSde(Context context, @NonNull String consumerId, @NonNull MonitoringParams monitoringParams, SdeCallback callback)`

| Parameter | Description |
| :--- | :--- |
| context | A context from the host app |
| consumerId | Mandatory consumer ID from the host app |
| monitoringParams | An mandatory MonitoringParams with mandatory Engagement Attributes and optional PageId and entry points array  |
| callback | A callback of type [SdeCallback](android-interface-definitions.html){:target="_blank"}. This response includes SessionId, VisitorId and PageId for future use |


*Please refer to the [Interface and Class Definitions](android-interface-definitions.html){:target="_blank"} section for parameter classes.*
