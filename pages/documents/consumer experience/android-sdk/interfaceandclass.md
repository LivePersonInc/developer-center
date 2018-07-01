---
title: Interface and Class Definitions
Keywords:
level1: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for Android
level4: SDK APIs

order: 110
permalink: android-interface-definitions.html

indicator: messaging
---

### ICallback

```swift
public interface ICallback<T, E extends Throwable> {
  void onSuccess(T value);
  void onError(E exception);
}
```

### AgentData

```swift
public class AgentData {
  public String mFirstName;
  public String mLastName;
  public String mAvatarURL;
  public String mEmployeeId;
  public String mNickName;
}
```



### InitLivePersonProperties

```swift
public class InitLivePersonProperties{
  private String brandId;
  private String appId;
  private MonitoringInitParams mMonitoringInitParams;
  private InitLivePersonCallBack initCallBack;
}
```


### ConsumerProfile

```swift
public class ConsumerProfile {
  private String mFirstName;
  private String mLastName;
  private String mPhoneNumber;
  private String mNickName;
  private String mAvatarUrl;
}
```

### PushMessage

```swift
public class PushMessage {
  private String mBrandId;
  private String mMessage;
  private String mFrom;
  private String mConversationId;
  private String mBackendService;
  private String mCollapseKey;
  private int mCurrentUnreadMessagesCounter = -1;
  //if we get unread messages counter from push message this value will contain it.
}
```

### LPConversationData


```swift
public class LPConversationData{
  private CloseReason closeReason;
  private String conversationId;
}
```  

### PermissionType


```swift
public enum PermissionType {
  PHOTO_SHARING
}  
```

### LPAuthenticationParams

```swift
public class LPAuthenticationParams{
  private LPAuthenticationType mType;
    private String mAuthKey;
    private String mHostAppJWT;
    private String mHostAppRedirectUri;
    private List<String> mCertificatePinningKeys;

    public enum LPAuthenticationType {SIGN_UP, UN_AUTH, AUTH }
}
```

### ConversationViewParams

```javascript

public class ConversationViewParams{
  boolean viewOnlyMode = false;
  CampaignInfo mCampaignInfo;
  LPConversationsHistoryStateToDisplay mHistoryConversationsStateToDisplay = LPConversationsHistoryStateToDisplay.ALL;
  LPConversationHistoryMaxDaysDateType mHistoryConversationMaxDaysType = LPConversationHistoryMaxDaysDateType.startConversationDate;
  int mHistoryConversationsMaxDays = -1; //no limit
}
```

### LPConversationsHistoryStateToDisplay

```swift
public enum LPConversationsHistoryStateToDisplay {
  OPEN, CLOSE , ALL
}

```


### LPConversationHistoryMaxDaysDateType

```swift
public enum LPConversationHistoryMaxDaysDateType {
  startConversationDate, endConversationDate
}
```

**Monitoring API Related Classes**


### MonitoringInitParams

```swift
public class MonitoringInitParams {
  private String mAppInstallId;
}
```

### MonitoringParams

```swift
public class MonitoringParams {
  private String pageId;
  private JSONArray entryPoints;
  private JSONArray engagementAttributes;
}
```

### EngagementCallback

```swift
public interface EngagementCallback {
  void onSuccess(LPEngagementResponse engagementResponse);
  void onError(MonitoringErrorType errorType, Exception e);
}
```

### SdeCallback

```swift
public interface SdeCallback {
  void onSuccess(LPSdeResponse sdeResponse);
  void onError(MonitoringErrorType errorType, Exception e);
}
```

### LPEngagementResponse

```swift

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

### LPSdeResponse

```swift
public class LPSdeResponse {
  @NotNull
  private String pageId;
  @Nullable
  private final String sessionId;
  @Nullable
  private final String visitorId;
}
```

### EngagementDetails

```swift
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

### MonitoringErrorType

```swift
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

### LPMonitoringIdentity (Kotlin syntax)

A class that contains data on the consumer identity.

consumerId - unique and non-guessable identifier of the consumer (email and phone number are not good candidates since they can be guessed by an attacker, and might be recycled and move between consumers).

issuer - Issuer, who identified the consumer - usually the brand.

```swift
class LPMonitoringIdentity(val consumerId: String? = "", val issuer: String? = ""){
}
```
