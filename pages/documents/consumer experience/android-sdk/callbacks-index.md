---
title: Callbacks Index
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: SDK APIs

order: 12
permalink: android-callbacks-index.html

---

The SDK provides a callback mechanism to keep the host app updated on events related to the conversation. This section details each callback.

### LivePersonCallback 

Definition:

```javascript
{
    public interface LivePersonCallback{

    void onError(TaskType type, String message);
    void onTokenExpired();
    void onConversationStarted();
    void onConversationResolved();
    void onConnectionChanged(boolean isConnected);
    void onAgentTyping(boolean isTyping);
    void onAgentDetailsChanged(AgentData agentData);
    void onCsatDismissed();
    void onCsatSubmitted(String conversationId);
    void onConversationMarkedAsUrgent();
    void onConversationMarkedAsNormal();
    void onOfflineHoursChanges(boolean isOfflineHoursOn);
}

enum TaskType {
   CSDS,
   IDP,
   VERSION,
   OPEN_SOCKET
}
```

###  Error indication

The onError(TaskType type, String message) method is called to indicate that an internal SDK error has occurred.

 | Parameter | Description                                                                  |   |
|-----------|------------------------------------------------------------------------------|---|
| type      | The type of error. Indicates the category of the error. See the table below. |   |
| Message   | A detailed message on the error.                                             |   |

###  TaskType enum:

 | Type                 | Description                                                                                                        |   |
|----------------------|--------------------------------------------------------------------------------------------------------------------|---|
| CSDS                 | Internal server error.                                                                                             |   |
| IDP                  | An error occurred during the authentication process. This is usually due to a wrong or expired authentication key. |   |
| VERSION              | Your host app is using an old SDK version and cannot be initialized.                                               |   |
| OPEN_SOCKET          | Error opening a socket to the server.                                                                              |   |
| MESSAGE_SEND_FAILURE | Called when a sent message has failed.                                                                             |   |

###  Token Expired

The onTokenExpired() method is called if the token used in the session has expired and no longer valid. The host app needs to [reconnect](android-reconnect.html){:target="_blank"} with a new authentication key.

###  Conversation started

The onConversationStarted() method is called whenever a new conversation is started by either the consumer or the agent.

###  Conversation resolved

The onConversationResolved() method is called when the current conversation is marked as resolved by either the consumer or the agent.

###  Connection state has changed

The onConnectionChanged(boolean isConnected) method is called when the connection to the conversation server has established or disconnected.

Parameters:
isConnected - indicates the connection state. true - connection establish, false - disconnected.

###  Agent avatar tapped

The onAgentAvatarTapped (AgentData agentData) method is called when the user taps on the agent avatar. 

The icon is available next to the agent message bubble or on the top of the toolbar (if using activity mode)

###  Agent details changed

The onAgentDetailsChanged(AgentData agentData) method is called when the assigned agent of the current conversation has changed or their details are updated. 

This callback is also called with null value when there is no agent that is associated with the conversation, for instance when the consumer is returned to queue. You need to check for null value before using the agentData object.

Parameters:
agentData - contains first name, last name, avatar url and employee ID. 

###  Agent typing

The onAgentTyping(boolean isTyping) method is called when the assigned agent is typing a message. When there is 2 seconds of idle time, this method is called again to notify with isTyping false to indicate that the agent stopped typing.

###  CSAT Screen dismissed

The onCsatDismissed() method is called when the feedback screen is dismissed (user clicked Submit button, user clicked Back button, etc.).

###  CSAT Screen submitted

The onCsatSubmitted(String conversationId) method is called when the user clicked the Submit button on the feedback screen. 

conversationId - The id of the conversation the survey is related to. 

This callback comes in addition to the onCsatDismissed callback when clicking Submit .

###  Conversation marked as urgent

The onConversationMarkedAsUrgent() method is called when the current conversation is marked as urgent.

###  Conversation marked as normal

The onConversationMarkedAsNormal() method is called when the current conversation is marked as normal.

###  Offline Hours Changes

The onOfflineHoursChanges(boolean isOfflineHoursOn) is called when there is a change in agent availability. When the agent is in off hours mode this method is called with isOfflineHoursOn true. When the agent return to online state, isOfflineHoursOn is called with isOfflineHoursOn false.

### LogoutLivePersonCallback

```javascript
{
public interface LogoutLivePersonCallback{
    void onLogoutSucceed();
    void onLogoutFailed();
}
```

### ICallback

```javascript
{
public interface ICallback<T, E extends Throwable> {
   void onSuccess(T value);
   void onError(E exception);
}
```

### InitLivePersonCallBack

```javascript
{
public interface InitLivePersonCallBack {
    void onInitSucceed();
    void onInitFailed(Exception e);
}
```

### ShutDownLivePersonCallback

```javascript
{
public interface ShutDownLivePersonCallback {
  void onShutdownSucceed();
  void onShutdownFailed();
}
```
