---
pagename: Callbacks Index
redirect_from:
  - android-callbacks-index.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: SDK APIs

order: 120
permalink: mobile-app-messaging-sdk-for-android-sdk-apis-callbacks-index.html

indicator: messaging
---

The SDK provides a callback mechanism to keep the host app updated on events related to the conversation. This section details each callback.

_**Note:** There are 2 ways to register to LivePerson events. For more information, click [here](android-callbacks-interface.html)._


###  Agent avatar tapped

Called when the user taps on the agent avatar.

The icon is available next to the agent message bubble or on the top of the toolbar (if using activity mode).

<div style="margin-left: 20px;">
<p><b>Parameter:</b>  </p>
<p><a href="android-interface-definitions.html#agentdata">agentData</a> - contains first name, last name, avatar url and employee ID.</p>

<p><b>Intent Action:</b> </p>
<p>ILivePersonIntentAction.LP_ON_AGENT_AVATAR_TAPPED_INTENT_ACTION</p>
<p>To get the  agentData param from the Intent, use ILivePersonIntent.getAgentData(intent).</p>

<p><b>Callback:</b> </p>
<p>onAgentAvatarTapped (AgentData agentData) </p>
</div>


###  Agent details changed

Called when the assigned agent of the current conversation has changed, or their details are updated. When no agent is associated with the conversation, the callback returns a null value.  For example, when an agent returns the consumer to the queue. 

**Note:** You must check for null value before using the agentData object.

<div style="margin-left: 20px;">
<p><b>Parameter:</b>  </p>
<p><a href="android-interface-definitions.html#agentdata">agentData</a> - contains first name, last name, avatar url and employee ID.</p>

<p><b>Intent Action:</b> </p>
<p>ILivePersonIntentAction.LP_ON_AGENT_DETAILS_CHANGED_INTENT_ACTION</p>
<p>To get the  agentData param from the Intent, use ILivePersonIntent.getAgentData(intent).</p>

<p><b>Callback:</b> </p>
<p>onAgentDetailsChanged (AgentData agentData)</p>
</div>



###  Agent typing

Called when the assigned agent is typing a message. When there are 2 seconds of idle time, the callback returns false to indicate that the agent stopped typing.

<div style="margin-left: 20px;">
<p><b>Intent Action:</b> </p>
<p>ILivePersonIntentAction.LP_ON_AGENT_TYPING_INTENT_ACTION</p>
<p>To get the isTyping param from the Intent, use  ILivePersonIntent.getAgentTypingValue(intent).</p>

<p><b>Callback:</b> </p>
<p>onAgentTyping(boolean isTyping)</p>
</div>



###  Conversation started

Called whenever either the consumer or the agent starts a new conversation.

<div style="margin-left: 20px;">
<p><b>Intent Action:</b> </p>
<p>ILivePersonIntentAction.LP_ON_CONVERSATION_STARTED_INTENT_ACTION</p>


<p><b>Callback:</b> </p>
<p>onConversationStarted()</p>
</div>

###  Conversation resolved

Called when the current conversation is marked as resolved by either the consumer or the agent.

<div style="margin-left: 20px;">
<p><b>Intent Action:</b> </p>
<p>ILivePersonIntentAction.LP_ON_CONVERSATION_RESOLVED_INTENT_ACTION</p>

<p><b>Callback:</b> </p>
<p>onConversationResolved() </p>
<p>The onConversationResolved() and onConversationResolved(CloseReason reason) methods are deprecated.</p>
</div>



###  Connection state has changed

Called when the connection to the conversation server has been established or disconnected.

<div style="margin-left: 20px;">
<p><b>Parameter:</b> </p>
<p>isConnected - indicates the connection state. <ul><li><b>true</b> - connection establish</li><li><b>false</b> - disconnected</li></ul> </p>

<p><b>Intent Action:</b> </p>
<p>ILivePersonIntentAction.LP_ON_CONNECTION_CHANGED_INTENT_ACTION</p>
<p>To get the isConnected param from the Intent, use ILivePersonIntent.getConnectedValue(intent).</p>

<p><b>Callback:</b> </p>
<p>onConnectionChanged(boolean isConnected)</p>
</div>


###  CSAT Screen launched

Called when the feedback screen launches.

<div style="margin-left: 20px;">
<p><b>Intent Action:</b> </p>
<p>ILivePersonIntentAction.LP_ON_CSAT_LAUNCHED_INTENT_ACTION</p>

<p><b>Callback:</b> </p>
<p>onCsatLaunched()</p>
</div>



###  CSAT Screen dismissed

Called when the feedback screen gets dismissed, for example, when the user clicks the **Submit** button or the **Back** button. 

<div style="margin-left: 20px;">
<p><b>Intent Action:</b> </p>
<p>ILivePersonIntentAction.LP_ON_CSAT_DISMISSED_INTENT_ACTION</p>

<p><b>Callback:</b> </p>
<p>onCsatDismissed()</p>
</div>



###  CSAT Screen skipped

Called when the feedback screen gets skipped, for example, when the user clicks the **Skip** button or the **Back** button.  If skipping the CSAT screen,  both onCsatSkipped() and onCsatDismissed() are called.

<div style="margin-left: 20px;">
<p><b>Intent Action:</b> </p>
<p>ILivePersonIntentAction.LP_ON_CSAT_SKIPPED_INTENT_ACTION</p>

<p><b>Callback:</b> </p>
<p>onCsatSkipped()</p>
</div>



###  CSAT Screen submitted

Called when the user clicks the **Submit** button on the feedback screen.  Also when the user clicks the **Submit** button, onCsatDismissed gets called.

<div style="margin-left: 20px;">
<p><b>Parameter:</b> </p>
<p>conversationId - conversation ID related to the survey.</p>

<p><b>Intent Action:</b> </p>
<p>ILivePersonIntentAction.LP_ON_CSAT_SUBMITTED_INTENT_ACTION</p>
<p>To get the conversationID param from the Intent, use ILivePersonIntent.getConversationID(intent).</p>

<p><b>Callback:</b> </p>
<p>onCsatSubmitted(String conversationId)</p>
</div>


### Error indication

Called to indicate that an internal SDK error occurred.

<div style="margin-left: 20px;">
<p><b>Intent Action:</b> </p>
<p>ILivePersonIntentAction.LP_ON_ERROR_INTENT_ACTION</p>
<p>To get the params from the Intent, use<ul><li>ILivePersonIntent.getOnErrorTaskType(intent)</li><li>ILivePersonIntent.getOnErrorMessage(intent)</li></ul></p>

<p><b>Callback:</b> </p>
<p>onError(TaskType type, String message)</p>
</div>

 | Parameter | Description  | |
|-------------|---------------|---|
| type      | The category or type of error.   |  |
| Message   | A detailed message on the error.     |   |



### LivePersonCallback

Definition:

```java
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



### LivePersonIntents
#### Definition:  

```java
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

#### Intent parameters:

```java
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



###  TaskType enum:

```java
enum TaskType {
  CSDS,
  IDP,
  VERSION,
  OPEN_SOCKET
}
```

 | Type                 | Description   |   |
|--------|----|---|
| CSDS          | Internal server error.                              |   |
| IDP                  | An error occurred during the authentication process, which is usually because of a wrong or expired authentication key. |   |
| VERSION              | Your host app is using an old SDK version and cannot be initialized.                      |   |
| OPEN_SOCKET     | Error opening a socket to the server.                                              |   |

###  Token Expired

Called if the token used in the session has expired and is no longer valid. The host app needs to <a href="android-methods.html#reconnect">reconnect</a> with a new authentication key.

__Intent Action:__ .

__Callback:__  method


<div style="margin-left: 20px;">
<p><b>Intent Action:</b> </p>
<p>ILivePersonIntentAction.LP_ON_TOKEN_EXPIRED_INTENT_ACTION</p>

<p><b>Callback:</b> </p>
<p>onTokenExpired()</p>
</div>


###  Conversation marked as urgent

Called when the current conversation gets marked as urgent.

<div style="margin-left: 20px;">
<p><b>Intent Action:</b> </p>
<p>ILivePersonIntentAction.LP_ON_CONVERSATION_MARKED_AS_URGENT_INTENT_ACTION</p>

<p><b>Callback:</b> </p>
<p>onConversationMarkedAsUrgent()</p>
</div>


###  Conversation marked as normal

Called when the current conversation gets marked as normal.

<div style="margin-left: 20px;">
<p><b>Intent Action:</b> </p>
<p>ILivePersonIntentAction.LP_ON_CONVERSATION_MARKED_AS_NORMAL_INTENT_ACTION</p>

<p><b>Callback:</b> </p>
<p>onConversationMarkedAsNormal()</p>
</div>


###  Offline Hours Changes

Called when there is a change in agent availability. 

<div style="margin-left: 20px;">
<p><b>Parameter:</b> </p>
<p>isOfflineHoursOn <ul><li><b>true</b> - agent is in off hours mode</li><li><b>false</b> - agent returns to an online state. </li></ul> </p>

<p><b>Intent Action:</b> </p>
<p>ILivePersonIntentAction.LP_ON_OFFLINE_HOURS_CHANGES_INTENT_ACTION</p>
<p>To get the isOfflineHoursOn param from the Intent, use  ILivePersonIntent.getOfflineHoursOn(intent).</p>

<p><b>Callback:</b> </p>
<p>onOfflineHoursChanges(boolean isOfflineHoursOn)</p>
</div>



###  Structured Content Link Clicked

Called when a structured content control with Link action gets clicked.  

{:.important}
The uri callback only gets called if the [structured_content_link_as_callback](android-attributes.html#structured-content) parameter in the branding.xml is set to true.

<div style="margin-left: 20px;">
<p><b>Parameter:</b> </p>
<p>uri  - link uri </p>

<p><b>Intent Action:</b> </p>
<p>ILivePersonIntentAction.LP_ON_STRUCTURED_CONTENT_LINK_CLICKED</p>
<p>To get the uri param from the Intent, use  ILivePersonIntent.getLinkUri(intent).</p>

<p><b>Callback:</b> </p>
<p>onStructuredContentLinkClicked(String uri)</p>
</div>



###  User Denied Permission

**Android version supported:** 6.0 and above

Called if the user denied the necessary system permission. For example, when the user clicks on the camera/gallery button to add an image, the permission system dialog was displayed, and the user denied permission. 

<div style="margin-left: 20px;">
<p><b>Parameter:</b> </p>
<p>permissionType - permission type from the [PermissionType](android-interface-definitions.html#permissiontype) enum.</p>
<p><b>Important:</b> If the user denied the permission and also marked the "Never ask again" checkbox, the <code>doNotShowAgainMarked</code> parameter is <b>true</b>.</p>

<p><b>Intent Action:</b> </p>
<p>ILivePersonIntentAction.LP_ON_USER_DENIED_PERMISSION</p>
<p>To get the permissionType param from the Intent, use ILivePersonIntent.getPermissionType(intent).</p>
<p>To get the doNotShowAgainMarked param from the Intent, use ILivePersonIntent.getPermissionDoNotShowAgainMarked(intent).</p>

<p><b>Callbacks:</b> </p>
<p>onUserDeniedPermission(PermissionType permissionType, boolean doNotShowAgainMarked);</p>
</div>

###  User Action On Prevented Permission

**Android version supported:** 6.0 and above

Called before requiring permission and the user has not yet accepted it. For example, when the user clicks the camera or gallery buttons to add an image, this callback gets called just before the permission dialog is displayed.  If the user already allowed permission, this callback does not get called.

<div style="margin-left: 20px;">
<p><b>Parameter:</b> </p>
<p>permissionType - The permission type from the <a href="android-interface-definitions.html#permissiontype">PermissionType</a>enum.</p>

<p><b>Intent Action:</b> </p>
<p>ILivePersonIntentAction.LP_ON_USER_ACTION_ON_PREVENTED_PERMISSION</p>
<p>To get the permissionType param from the Intent, use ILivePersonIntent.getConnectedValue(intent).</p>

<p><b>Callback:</b> </p>
<p>onUserActionOnPreventedPermission(PermissionType permissionType)</p>
</div>