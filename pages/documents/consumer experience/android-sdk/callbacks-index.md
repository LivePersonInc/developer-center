---
title: Callbacks Index
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: SDK APIs

order: 120
permalink: android-callbacks-index.html

indicator: messaging
---

The SDK provides a callback mechanism to keep the host app updated on events related to the conversation. This section details each callback.

_**Note:** There are 2 ways to register to LivePerson events. For more information, click [here](android-callbacks-interface.html)._

### LivePersonIntents
Definition:  

```swift
public interface ILivePersonIntentAction{  

  String LP_ON_ERROR_INTENT_ACTION = "LP_ON_ERROR_INTENT_ACTION";

  String LP_ON_TOKEN_EXPIRED_INTENT_ACTION = "LP_ON_TOKEN_EXPIRED_INTENT_ACTION";

  String LP_ON_CONVERSATION_STARTED_INTENT_ACTION = "LP_ON_CONVERSATION_STARTED_INTENT_ACTION";

  String LP_ON_CONVERSATION_RESOLVED_INTENT_ACTION = "LP_ON_CONVERSATION_RESOLVED_INTENT_ACTION";

  String LP_ON_CONNECTION_CHANGED_INTENT_ACTION = "LP_ON_CONNECTION_CHANGED_INTENT_ACTION";

  String LP_ON_AGENT_TYPING_INTENT_ACTION = "LP_ON_AGENT_TYPING_INTENT_ACTION";

  String LP_ON_AGENT_DETAILS_CHANGED_INTENT_ACTION = "LP_ON_AGENT_DETAILS_CHANGED_INTENT_ACTION";

  String LP_ON_AGENT_AVATAR_TAPPED_INTENT_ACTION = "LP_ON_AGENT_AVATAR_TAPPED_INTENT_ACTION";

  String LP_ON_CSAT_LAUNCHED_INTENT_ACTION = "LP_ON_CSAT_LAUNCHED_INTENT_ACTION";

  String LP_ON_CSAT_DISMISSED_INTENT_ACTION = "LP_ON_CSAT_DISMISSED_INTENT_ACTION";

  String LP_ON_CSAT_SUBMITTED_INTENT_ACTION = "LP_ON_CSAT_SUBMITTED_INTENT_ACTION";

  String LP_ON_CSAT_SKIPPED_INTENT_ACTION = "LP_ON_CSAT_SKIPPED_INTENT_ACTION";

  String LP_ON_CONVERSATION_MARKED_AS_URGENT_INTENT_ACTION = "LP_ON_CONVERSATION_MARKED_AS_URGENT_INTENT_ACTION";

  String LP_ON_CONVERSATION_MARKED_AS_NORMAL_INTENT_ACTION = "LP_ON_CONVERSATION_MARKED_AS_NORMAL_INTENT_ACTION";

  String LP_ON_OFFLINE_HOURS_CHANGES_INTENT_ACTION = "LP_ON_OFFLINE_HOURS_CHANGES_INTENT_ACTION";

  String LP_ON_USER_DENIED_PERMISSION = "LP_ON_USER_DENIED_PERMISSION";

  String LP_ON_USER_ACTION_ON_PREVENTED_PERMISSION = "LP_ON_USER_ACTION_ON_PREVENTED_PERMISSION";

  String LP_ON_STRUCTURED_CONTENT_LINK_CLICKED = "LP_ON_STRUCTURED_CONTENT_LINK_CLICKED";
}
```

Intent parameters:

```swift
public interface ILivePersonIntentExtras{

  String LP_ON_ERROR_TASK_TYPE_INTENT_INT_EXTRA = "LP_ON_ERROR_TASK_TYPE_INTENT_INT_EXTRA";

  String LP_ON_ERROR_MESSAGE_INTENT_STRING_EXTRA = "LP_ON_ERROR_MESSAGE_INTENT_STRING_EXTRA";

  String LP_CONVERSATION_DATA_INTENT_PARCELABLE_EXTRA = "LP_CONVERSATION_DATA_INTENT_PARCELABLE_EXTRA";

  String LP_IS_CONNECTED_INTENT_BOOLEAN_EXTRA = "LP_IS_CONNECTED_INTENT_BOOLEAN_EXTRA";

  String LP_AGENT_IS_TYPING_INTENT_BOOLEAN_EXTRA = "LP_AGENT_IS_TYPING_INTENT_BOOLEAN_EXTRA";

  String LP_AGENT_DATA_INTENT_PARCELABLE_EXTRA = "LP_AGENT_DATA_INTENT_PARCELABLE_EXTRA";

  String LP_CONVERSATION_ID_INTENT_STRING_EXTRA = "LP_CONVERSATION_ID_INTENT_STRING_EXTRA";

  String LP_IS_OFFLINE_HOURS_ON_INTENT_BOOLEAN_EXTRA = "LP_IS_OFFLINE_HOURS_ON_INTENT_BOOLEAN_EXTRA";

  String LP_PERMISSION_TYPE_EXTRA = "LP_PERMISSION_TYPE_EXTRA";

  String LP_PERMISSION_DO_NOT_SHOW_AGAIN_EXTRA = "LP_PERMISSION_DO_NOT_SHOW_AGAIN_EXTRA";

  String LP_LINK_URI_EXTRA = "LP_LINK_URI_EXTRA";
}
```

### LivePersonCallback

Definition:

```swift
public interface LivePersonCallback{
  void onError(TaskType type, String message);
  void onTokenExpired();
  void onConversationStarted(LPConversationData convData);
  void onConversationResolved(LPConversationData convData);
  void onConversationResolved();
  void onConnectionChanged(boolean isConnected);
  void onAgentTyping(boolean isTyping);
  void onAgentDetailsChanged(AgentData agentData);
  void onCsatLaunched();
  void onCsatDismissed();
  void onCsatSubmitted(String conversationId);
  void onCsatSkipped();
  void onConversationMarkedAsUrgent();
  void onConversationMarkedAsNormal();
  void onOfflineHoursChanges(boolean isOfflineHoursOn);
  void onAgentAvatarTapped(AgentData agentData);
  void onUserDeniedPermission(PermissionType permissionType, boolean doNotShowAgainMarked);
  void onUserActionOnPreventedPermission(PermissionType permissionType);
  void onStructuredContentLinkClicked(String uri);
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

```swift
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

Called if the token used in the session has expired and is no longer valid. The host app needs to [reconnect](android-methods.html#reconnect){:target="_blank"} with a new authentication key.

__Intent Action:__ ILivePersonIntentAction.LP_ON_TOKEN_EXPIRED_INTENT_ACTION.

__Callback:__ onTokenExpired() method

###  Conversation started

Called whenever a new conversation is started by either the consumer or the agent.

__Intent Action:__ ILivePersonIntentAction.LP_ON_CONVERSATION_STARTED_INTENT_ACTION.

__Callback:__ onConversationStarted() method

###  Conversation resolved

Called when the current conversation is marked as resolved by either the consumer or the agent.

__Intent Action:__ ILivePersonIntentAction.LP_ON_CONVERSATION_RESOLVED_INTENT_ACTION.

__Callback:__ onConversationResolved() method.  

_Note : onConversationResolved() and onConversationResolved(CloseReason reason) are deprecated._

###  Connection state has changed

Called when the connection to the conversation server has been established or disconnected.

Parameters:  
isConnected - indicates the connection state. true - connection establish, false - disconnected.

__Intent Action:__ ILivePersonIntentAction.LP_ON_CONNECTION_CHANGED_INTENT_ACTION.  

To get the _isConnected_ param from the Intent use method: ILivePersonIntent.getConnectedValue(intent)

__Callback:__ onConnectionChanged(boolean isConnected) method.

###  Agent avatar tapped

Called when the user taps on the agent avatar.

The icon is available next to the agent message bubble or on the top of the toolbar (if using activity mode)

Parameters:      
agentData - contains first name, last name, avatar url and employee ID. See [AgentData](android-interface-definitions.html#agentdata){:target="_blank"}

__Intent Action:__ ILivePersonIntentAction.LP_ON_AGENT_AVATAR_TAPPED_INTENT_ACTION.  

To get the _agentData_ param from the Intent use method: ILivePersonIntent.getAgentData(intent)

__Callback:__ onAgentAvatarTapped (AgentData agentData) method.


###  Agent details changed

Called when the assigned agent of the current conversation has changed or their details are updated.

This callback is also called with null value when there is no agent that is associated with the conversation, for instance when the consumer is returned to queue. You need to check for null value before using the agentData object.

Parameters:    
agentData - contains first name, last name, avatar url and employee ID.

__Intent Action:__ ILivePersonIntentAction.LP_ON_AGENT_DETAILS_CHANGED_INTENT_ACTION.  

To get the _agentData_ param from the Intent use method: ILivePersonIntent.getAgentData(intent)

__Callback:__ onAgentDetailsChanged (AgentData agentData) method.

###  Agent typing

Called when the assigned agent is typing a message. When there is 2 seconds of idle time, this method is called again to notify with isTyping false to indicate that the agent stopped typing.

__Intent Action:__ ILivePersonIntentAction.LP_ON_AGENT_TYPING_INTENT_ACTION.  

To get the _isTyping_ param from the Intent use method: ILivePersonIntent.getAgentTypingValue(intent)

__Callback:__ onAgentTyping(boolean isTyping) method.

###  CSAT Screen launched

Called when the feedback screen is launched.

__Intent Action:__ ILivePersonIntentAction.LP_ON_CSAT_LAUNCHED_INTENT_ACTION.

__Callback:__ onCsatLaunched() method.

###  CSAT Screen dismissed

Called when the feedback screen is dismissed (user clicked Submit button, user clicked Back button, etc.).

__Intent Action:__ ILivePersonIntentAction.LP_ON_CSAT_DISMISSED_INTENT_ACTION.

__Callback:__ onCsatDismissed() method.

###  CSAT Screen submitted

Called when the user clicked the Submit button on the feedback screen.

conversationId - The id of the conversation the survey is related to.

This callback comes in addition to the onCsatDismissed callback when clicking Submit .

__Intent Action:__ ILivePersonIntentAction.LP_ON_CSAT_SUBMITTED_INTENT_ACTION.  

To get the _conversationId_ param from the Intent use method: ILivePersonIntent.getConversationID(intent)

__Callback:__ onCsatSubmitted(String conversationId) method.

###  CSAT Screen skipped

Called when the feedback screen is skipped (user clicked Skip button, user clicked Back button, etc.).

Note that in case CSAT screen is skipped, both onCsatSkipped() and onCsatDismissed() are called.

__Intent Action:__ ILivePersonIntentAction.LP_ON_CSAT_SKIPPED_INTENT_ACTION.

__Callback:__ onCsatSkipped() method.

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

To get the _isOfflineHoursOn_ param from the Intent use method: ILivePersonIntent.getOfflineHoursOn(intent)

__Callback:__ onOfflineHoursChanges(boolean isOfflineHoursOn) method.

###  Structured Content Link Clicked

Called when a structured content control with Link action is clicked.  

Note: this callback is called only if the [structured_content_link_as_callback](android-attributes.html#structured-content){:target="_blank"} parameter in the branding.xml is set to true.

Parameters:  
uri - The URI of the link  

__Intent Action:__ ILivePersonIntentAction.LP_ON_STRUCTURED_CONTENT_LINK_CLICKED.  

To get the _uri_ param from the Intent use method: ILivePersonIntent.getLinkUri(intent)

__Callback:__ onStructuredContentLinkClicked(String uri) method.

###  User Denied Permission

Called if the required system permission was denied by the user. For example, when the user clicks on the camera/gallery button to add an image, the permission system dialog was displayed and the user denied the permission. **If the user denied the permission and in addition marked the "Never ask again" checkbox, the _doNotShowAgainMarked_ parameter is _true_.**

Parameters:  
permissionType - The permission type from the [PermissionType](android-interface-definitions.html#permissiontype){:target="_blank"} enum.

**Note: doNotShowAgainMarked - _true_ if the user checked the "Never ask again" checkbox, _false_ if not.**

Note: this callback is relevant to Android 6.0 and above

__Intent Action:__ ILivePersonIntentAction.LP_ON_USER_DENIED_PERMISSION.  

To get the _permissionType_ param from the Intent use method: ILivePersonIntent.getPermissionType(intent)  
To get the _doNotShowAgainMarked_ parameter from the Intent use method: ILivePersonIntent.getPermissionDoNotShowAgainMarked(intent)

__Callback:__ onUserDeniedPermission(PermissionType permissionType, boolean doNotShowAgainMarked); method.

###  User Action On Prevented Permission

Called before a permission is required and the user has not yet accepted it. For example, when
the user clicks on the camera/gallery buttons to add an image, this callback will be called just before the access media permission system dialog is displayed.  
If the user already allowed the permission, this callback will not be called.

Parameters:  
permissionType - The permission type from the [PermissionType](android-interface-definitions.html#permissiontype){:target="_blank"} enum.

Note: this callback is relevant to Android 6.0 and above

__Intent Action:__ ILivePersonIntentAction.LP_ON_USER_ACTION_ON_PREVENTED_PERMISSION.  

To get the _permissionType_ param from the Intent use method: ILivePersonIntent.getPermissionType(intent)  

__Callback:__ onUserActionOnPreventedPermission(PermissionType permissionType) method.
