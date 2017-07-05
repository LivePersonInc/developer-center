---
title: Callbacks Index
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: SDK APIs

order: 12
permalink: android-callbacks-index.html

indicator: messaging
---

The SDK provides a callback mechanism to keep the host app updated on events related to the conversation. This section details each callback.

_Note: There are 2 ways to register to LivePerson events. to read more about it click [here](android-callbacks-interface.html)._

### LivePersonIntents
Definition:
```javascript
public interface ILivePersonIntentAction{
      String LP_ON_ERROR_INTENT_ACTION = "LP_ON_ERROR_INTENT_ACTION";
      String LP_ON_TOKEN_EXPIRED_INTENT_ACTION = "LP_ON_TOKEN_EXPIRED_INTENT_ACTION";
      String LP_ON_CONVERSATION_STARTED_INTENT_ACTION = "LP_ON_CONVERSATION_STARTED_INTENT_ACTION";
      String LP_ON_CONVERSATION_RESOLVED_INTENT_ACTION = "LP_ON_CONVERSATION_RESOLVED_INTENT_ACTION";
      String LP_ON_CONNECTION_CHANGED_INTENT_ACTION = "LP_ON_CONNECTION_CHANGED_INTENT_ACTION";
      String LP_ON_AGENT_TYPING_INTENT_ACTION = "LP_ON_AGENT_TYPING_INTENT_ACTION";
      String LP_ON_AGENT_DETAILS_CHANGED_INTENT_ACTION = "LP_ON_AGENT_DETAILS_CHANGED_INTENT_ACTION";
      String LP_ON_AGENT_AVATAR_TAPPED_INTENT_ACTION = "LP_ON_AGENT_AVATAR_TAPPED_INTENT_ACTION";
      String LP_ON_CSAT_DISMISSED_INTENT_ACTION = "LP_ON_CSAT_DISMISSED_INTENT_ACTION";
      String LP_ON_CSAT_SUBMITTED_INTENT_ACTION = "LP_ON_CSAT_SUBMITTED_INTENT_ACTION";
      String LP_ON_CONVERSATION_MARKED_AS_URGENT_INTENT_ACTION = "LP_ON_CONVERSATION_MARKED_AS_URGENT_INTENT_ACTION";
      String LP_ON_CONVERSATION_MARKED_AS_NORMAL_INTENT_ACTION = "LP_ON_CONVERSATION_MARKED_AS_NORMAL_INTENT_ACTION";
      String LP_ON_OFFLINE_HOURS_CHANGES_INTENT_ACTION = "LP_ON_OFFLINE_HOURS_CHANGES_INTENT_ACTION";
  }

  public interface ILivePersonIntentExtras{
      String LP_ON_ERROR_TASK_TYPE_INTENT_INT_EXTRA = "LP_ON_ERROR_TASK_TYPE_INTENT_INT_EXTRA";
      String LP_ON_ERROR_MESSAGE_INTENT_STRING_EXTRA = "LP_ON_ERROR_MESSAGE_INTENT_STRING_EXTRA";
      String LP_CONVERSATION_DATA_INTENT_PARCELABLE_EXTRA = "LP_CONVERSATION_DATA_INTENT_PARCELABLE_EXTRA";
      String LP_IS_CONNECTED_INTENT_BOOLEAN_EXTRA = "LP_IS_CONNECTED_INTENT_BOOLEAN_EXTRA";
      String LP_AGENT_IS_TYPING_INTENT_BOOLEAN_EXTRA = "LP_AGENT_IS_TYPING_INTENT_BOOLEAN_EXTRA";
      String LP_AGENT_DATA_INTENT_PARCELABLE_EXTRA = "LP_AGENT_DATA_INTENT_PARCELABLE_EXTRA";
      String LP_CONVERSATION_ID_INTENT_STRING_EXTRA = "LP_CONVERSATION_ID_INTENT_STRING_EXTRA";
      String LP_IS_OFFLINE_HOURS_ON_INTENT_BOOLEAN_EXTRA = "LP_IS_OFFLINE_HOURS_ON_INTENT_BOOLEAN_EXTRA";
  }

```

### LivePersonCallback

Definition:

```javascript
{
    public interface LivePersonCallback{

    void onError(TaskType type, String message);
    void onTokenExpired();
    void onConversationStarted(LPConversationData convData);
    void onConversationResolved(LPConversationData convData);
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
```


###  Error indication

Called to indicate that an internal SDK error has occurred.

__Intent Action:__ ILivePersonIntentAction.LP_ON_ERROR_INTENT_ACTION.
<br>
To get the params from the Intent use methods: ILivePersonIntent.getOnErrorTaskType(intent) and ILivePersonIntent.getOnErrorMessage(intent).

__Callback:__ onError(TaskType type, String message) method.

 | Parameter | Description                                                                  |   |
|-----------|------------------------------------------------------------------------------|---|
| type      | The type of error. Indicates the category of the error. See the table below. |   |
| Message   | A detailed message on the error.                                             |   |

###  TaskType enum:

```javascript
enum TaskType {
   CSDS,
   IDP,
   VERSION,
   OPEN_SOCKET
}
```

 | Type                 | Description                                                                                                        |   |
|----------------------|--------------------------------------------------------------------------------------------------------------------|---|
| CSDS                 | Internal server error.                                                                                             |   |
| IDP                  | An error occurred during the authentication process. This is usually due to a wrong or expired authentication key. |   |
| VERSION              | Your host app is using an old SDK version and cannot be initialized.                                               |   |
| OPEN_SOCKET          | Error opening a socket to the server.                                                                              |   |

###  Token Expired

Called if the token used in the session has expired and no longer valid. The host app needs to [reconnect](android-reconnect.html){:target="_blank"} with a new authentication key.

__Intent Action:__ ILivePersonIntentAction.LP_ON_TOKEN_EXPIRED_INTENT_ACTION.

__Callback:__ onTokenExpired() method

###  Conversation started

Called whenever a new conversation is started by either the consumer or the agent.

__Intent Action:__ ILivePersonIntentAction.LP_ON_CONVERSATION_STARTED_INTENT_ACTION.

__Callback:__ onConversationStarted() method

###  Conversation resolved

Called when the current conversation is marked as resolved by either the consumer or the agent.

__Intent Action:__ ILivePersonIntentAction.LP_ON_CONVERSATION_RESOLVED_INTENT_ACTION.

__Callback:__ onConversationResolved() method. <BR> _Note : onConversationResolved() and onConversationResolved(CloseReason reason) are deprecated._

###  Connection state has changed

Called when the connection to the conversation server has established or disconnected.

Parameters:
isConnected - indicates the connection state. true - connection establish, false - disconnected.

__Intent Action:__ ILivePersonIntentAction.LP_ON_CONNECTION_CHANGED_INTENT_ACTION.
<br>
To get the isConnected param from the Intent use method: ILivePersonIntent.getConnectedValue(intent)

__Callback:__ onConnectionChanged(boolean isConnected) method.

###  Agent avatar tapped

Called when the user taps on the agent avatar.

The icon is available next to the agent message bubble or on the top of the toolbar (if using activity mode)

Parameters:
agentData - contains first name, last name, avatar url and employee ID.

__Intent Action:__ ILivePersonIntentAction.LP_ON_AGENT_AVATAR_TAPPED_INTENT_ACTION.
<br>
To get the AgentData param from the Intent use method: ILivePersonIntent.getAgentData(intent)

__Callback:__ onAgentAvatarTapped (AgentData agentData) method.


###  Agent details changed

Called when the assigned agent of the current conversation has changed or their details are updated.

This callback is also called with null value when there is no agent that is associated with the conversation, for instance when the consumer is returned to queue. You need to check for null value before using the agentData object.

Parameters:
agentData - contains first name, last name, avatar url and employee ID.

__Intent Action:__ ILivePersonIntentAction.LP_ON_AGENT_DETAILS_CHANGED_INTENT_ACTION.
<br>
To get the AgentData param from the Intent use method: ILivePersonIntent.getAgentData(intent)

__Callback:__ onAgentDetailsChanged (AgentData agentData) method.

###  Agent typing

Called when the assigned agent is typing a message. When there is 2 seconds of idle time, this method is called again to notify with isTyping false to indicate that the agent stopped typing.

__Intent Action:__ ILivePersonIntentAction.LP_ON_AGENT_TYPING_INTENT_ACTION.
<br>
To get the isTyping param from the Intent use method: ILivePersonIntent.getAgentTypingValue(intent)

__Callback:__ onAgentTyping(boolean isTyping) method.

###  CSAT Screen dismissed

Called when the feedback screen is dismissed (user clicked Submit button, user clicked Back button, etc.).

__Intent Action:__ ILivePersonIntentAction.LP_ON_CSAT_DISMISSED_INTENT_ACTION.

__Callback:__ onCsatDismissed() method.

###  CSAT Screen submitted

Called when the user clicked the Submit button on the feedback screen.

conversationId - The id of the conversation the survey is related to.

This callback comes in addition to the onCsatDismissed callback when clicking Submit .

__Intent Action:__ ILivePersonIntentAction.LP_ON_CSAT_SUBMITTED_INTENT_ACTION.
<br>
To get the isTyping param from the Intent use method: ILivePersonIntent.getConversationID(intent)

__Callback:__ onCsatSubmitted(String conversationId) method.

###  Conversation marked as urgent

Called when the current conversation is marked as urgent.

__Intent Action:__ ILivePersonIntentAction.LP_ON_CONVERSATION_MARKED_AS_URGENT_INTENT_ACTION.

__Callback:__ onConversationMarkedAsUrgent() method.

###  Conversation marked as normal

Called when the current conversation is marked as normal.

__Intent Action:__ ILivePersonIntentAction.LP_ON_CONVERSATION_MARKED_AS_NORMAL_INTENT_ACTION.

__Callback:__ onConversationMarkedAsNormal() method.

###  Offline Hours Changes

Called when there is a change in agent availability. When the agent is in off hours mode this method is called with isOfflineHoursOn true. When the agent return to online state, isOfflineHoursOn is called with isOfflineHoursOn false.

__Intent Action:__ ILivePersonIntentAction.LP_ON_OFFLINE_HOURS_CHANGES_INTENT_ACTION.
<br>
To get the isOfflineHoursOn param from the Intent use method: ILivePersonIntent.getOfflineHoursOn(intent)

__Callback:__ onOfflineHoursChanges(boolean isOfflineHoursOn) method.
