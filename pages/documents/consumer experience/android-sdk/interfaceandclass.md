---
title: Interface and Class Definitions
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: SDK APIs

order: 110
permalink: android-interface-definitions.html

indicator: messaging
---

### ICallback

```javascript

public interface ICallback<T, E extends Throwable> {
   void onSuccess(T value);
   void onError(E exception);
}
```

### AgentData

```javascript

public class AgentData {

    public String mFirstName;
    public String mLastName;
    public String mAvatarURL;
    public String mEmployeeId;
    public String mNickName;
}
```



### InitLivePersonProperties

```javascript

public class InitLivePersonProperties{
    private String brandId;
    private String appId;
    private MonitoringInitParams mMonitoringInitParams;
    private InitLivePersonCallBack initCallBack;
}
```


### ConsumerProfile

```javascript

public class ConsumerProfile {
    private String mFirstName;
    private String mLastName;
    private String mPhoneNumber;
    private String mNickName;
    private String mAvatarUrl;
}
```

### PushMessage

```javascript

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


```javascript

public class LPConversationData{
    private CloseReason closeReason;
    private String conversationId;
}
```  

### PermissionType


```javascript

public enum PermissionType {
  	PHOTO_SHARING
}  
```

### LPAuthenticationParams

```javascript

public class LPAuthenticationParams{
  private String mAuthKey;
  private String mHostAppJWT;
  private String mHostAppRedirectUri;
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

```javascript

public enum LPConversationsHistoryStateToDisplay {
  OPEN, CLOSE , ALL
}

```


### LPConversationHistoryMaxDaysDateType

```javascript

public enum LPConversationHistoryMaxDaysDateType {
  startConversationDate, endConversationDate
}


```



**Monitoring API Related Classes**


### MonitoringInitParams

```javascript

public class MonitoringInitParams {

	private String mAppInstallId;
}


```

### MonitoringParams

```javascript

public class MonitoringParams {

	private String pageId;

	private JSONArray entryPoints;

	private JSONArray engagementAttributes;
}



```

### EngagementCallback

```javascript

public interface EngagementCallback {

   void onSuccess(LPEngagementResponse engagementResponse);

   void onError(MonitoringErrorType errorType, Exception e);
}

```

### SdeCallback

```javascript

public interface SdeCallback {

   void onSuccess(LPSdeResponse sdeResponse);

   void onError(MonitoringErrorType errorType, Exception e);
}

```

### LPEngagementResponse

```javascript

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

```javascript

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

```javascript

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

```javascript

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
