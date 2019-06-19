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


> **NOTE**: If you want to use the Monitoring API, you must [initialize the SDK with MonitoringParams](#initialize-the-messaging-sdk-with-monitoring-params). Once initialization is completed (<b>onInitSucceed</b>), you can call LivePerson methods.


### sendSde

Use to report on engagement attributes (SDEs) for a consumer in an appInstallationId context including show and accept impressions.

```java
public static void sendSde(Context context, @NonNull List<LPMonitoringIdentity> identities, @NonNull MonitoringParams monitoringParams, SdeCallback callback)
```

| Parameter | Description | Required |
| :--- | :--- | :--- |
| context | A context from the host app | Yes |
| identities | A list of LPMonitoringIdentity objects with the consumer identities | Yes |
| monitoringParams | An mandatory MonitoringParams with mandatory Engagement Attributes and optional PageId and entry points array  | Yes |
| callback | A callback of type [SdeCallback](android-interface-definitions.html#sdecallback). This response includes SessionId, VisitorId and PageId for future use | Yes |


### getEngagement

Use to get an engagement for a consumer in an appInstallationId context. When calculating eligibility, the decision is based on the SDEs and other parameters based on the messaging campaign concept.

As an optional parameter, you can pass SDE Data which includes Entry Points and Engagement Attributes for routing the conversation.

```java
public static void getEngagement(Context context, @Nullable List<LPMonitoringIdentity> identities, MonitoringParams monitoringParams, EngagementCallback callback)
```

| Parameter | Description | Required |
| :--- | :--- | :--- |
| context | A context from the host app | Yes |
| identities | A list of LPMonitoringIdentity objects with the consumer identities | No |
| monitoringParams | An optional object with optional pageId, Entry Points array and Engagement Attributes | No |
| callback | A callback of type [EngagementCallback](android-interface-definitions.html#engagementcallback). This response include SessionId, VisitorId and a list of [EngagementDetails](android-interface-definitions.html#engagementdetails) objects | Yes |


*Please refer to the [Interface and Class Definitions](android-interface-definitions.html) section for parameter classes.*


### Monitoring API Related Classes

#### EngagementCallback

```java
public interface EngagementCallback {
  void onSuccess(LPEngagementResponse engagementResponse);
  void onError(MonitoringErrorType errorType, Exception e);
}
```

#### EngagementDetails

```java
public final class EngagementDetails {
  @NotNull
  private  String campaignId;
  @NotNull
  private  String engagementId;
  @NotNull
  private  String engagementRevision;
  @NotNull
  private  String contextId;
  @Nullable
  private String conversationId;
  @Nullable
  private String status;
}
```


#### LPEngagementResponse

```java

public final class LPEngagementResponse {
  @NotNull
  private String pageId;
  @Nullable
  private String sessionId;
  @Nullable
  private String visitorId;
  @Nullable
  private List<EngagementDetails> engagementDetailsList;
}
```

#### LPMonitoringIdentity (Kotlin syntax)

A class that contains data on the consumer identity.

consumerId - unique and non-guessable identifier of the consumer (email and phone number are not good candidates since they can be guessed by an attacker, and might be recycled and move between consumers).

issuer - Issuer, who identified the consumer - usually the brand.

```java
class LPMonitoringIdentity(val consumerId: String? = "", val issuer: String? = ""){
}
```

#### LPSdeResponse

```java
public class LPSdeResponse {
  @NotNull
  private String pageId;
  @Nullable
  private final String sessionId;
  @Nullable
  private final String visitorId;
}
```

#### MonitoringErrorType

```java
enum class MonitoringErrorType {
  NOT_INITIALIZED,
  INITIALIZATION_ERROR,
  LOGOUT_ERROR,
  PARAMETER_MISSING,
  NO_NETWORK,
  REQUEST_ERROR,
  CSDS_ERROR
}
```


#### MonitoringInitParams

```java
public class MonitoringInitParams {
  private String mAppInstallId;
}
```

#### MonitoringParams

```java
public class MonitoringParams {
  private String pageId;
  private JSONArray entryPoints;
  private JSONArray engagementAttributes;
}
```



#### SdeCallback

```java
public interface SdeCallback {
  void onSuccess(LPSdeResponse sdeResponse);
  void onError(MonitoringErrorType errorType, Exception e);
}
```