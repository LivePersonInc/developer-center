---
title: Interface and Class Definitions
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: SDK APIs

order: 11
permalink: android-interface-definitions.html

---

### AgentData

```javascript
{
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
{
    Public class InitLivePersonProperties{
    Private string brandId;
    Private string appId;
    Private InitLivePersonCallBack initCallBack;
}
```


### ConsumerProfile

```javascript
{
public class ConsumerProfile {
    private String mFirstName;
    private String mLastName;
    private String mPhoneNumber;
    private String mNickName;
    private String mAvatarUrl;
}
```


### LPConversationData


```javascript
{
Public class LPConversationData{
    Private CloseReason closeReason;
    Private String conversationId;
}
```
