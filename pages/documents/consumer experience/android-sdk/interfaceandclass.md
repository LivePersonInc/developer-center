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

Public class InitLivePersonProperties{
    Private string brandId;
    Private string appId;
    Private InitLivePersonCallBack initCallBack;
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

Public class LPConversationData{
    Private CloseReason closeReason;
    Private String conversationId;
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

Public class LPAuthenticationParams{
  private String mAuthKey;
  private String mHostAppJWT;
  private String mHostAppRedirectUri;
}
```
