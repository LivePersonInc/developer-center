---
pagename: Callbacks Index
redirect_from:
  - android-callbacks-index.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: SDK APIs
permalink: mobile-app-messaging-sdk-for-android-sdk-apis-callbacks-index.html
indicator: messaging
---

The SDK provides a callback mechanism to keep the host app updated on events related to the conversation. This section details each callback.

_**Note:** There are 2 ways to register to LivePerson events. For more information, click [here](mobile-app-messaging-sdk-for-android-configure-the-android-sdk.html#callbacks-interface).

### Conversation Events
#### Conversation Started

Called whenever either the consumer or the agent starts a new conversation.

> **Intent Action:**
>
> ILivePersonIntentAction.LP_ON_CONVERSATION_STARTED_INTENT_ACTION
>
> - To get the convData param from the Intent, use LivePersonIntents.getLPConversationData(intent).
>
> **Callback:**
>
> onConversationStarted(LPConversationData convData)
>
> *Deprecated since April 26, 2017* <br/>
> onConversationStarted()

| Parameter | Type | Description  |
|----|----|----|
| convData | [LPConversationData](android-interface-definitions.html#lpconversationdata) | Contains the ID of the new Conversation, and a null CloseReason. |



#### Conversation Resolved

Called when the current conversation is marked as resolved by either the consumer or the agent.

> **Intent Action:** 
>
> ILivePersonIntentAction.LP_ON_CONVERSATION_RESOLVED_INTENT_ACTION
>
> - To get the convData param from the Intent, use LivePersonIntents.getLPConversationData(intent).
>
> **Callback:** 
>
> onConversationResolved(LPConversationData convData)
>
> *Deprecated since February 13, 2017* <br/>
> onConversationResolved()
>
> *Deprecated since April 26, 2017* <br/>
> onConversationResolved(CloseReason reason)

| Parameter | Type | Description  |
|----|----|----|
| convData | [LPConversationData](android-interface-definitions.html#lpconversationdata) | Contains the ID of the resolved Conversation, and a CloseReason describing why the conversation ended. |



#### Conversation Fragment Closed

Called when the Conversation Fragment is closed (only called when using Fragment Mode).


> **Intent Action:** 
>
> ILivePersonIntentAction.LP_ON_CONVERSATION_FRAGMENT_CLOSED_INTENT_ACTION
>
> **Callback:** 
>
> onConversationFragmentClosed() 



#### Conversation Marked as Urgent

Called when the current conversation gets marked as urgent by either the consumer or the agent.


> **Intent Action:** 
>
> ILivePersonIntentAction.LP_ON_CONVERSATION_MARKED_AS_URGENT_INTENT_ACTION
>
> **Callback:** 
>
> onConversationMarkedAsUrgent()



#### Conversation Marked as Normal

Called when the current conversation gets marked as normal by either the consumer or the agent.


> **Intent Action:** 
>
> ILivePersonIntentAction.LP_ON_CONVERSATION_MARKED_AS_NORMAL_INTENT_ACTION
>
> **Callback:** 
>
> onConversationMarkedAsNormal()



### Agent Action Events
#### Agent details changed

Called when the assigned agent of the current conversation has changed, or their details are updated. When no agent is associated with the conversation, the callback passes a null value. For example, this happens when an agent returns the consumer to the request queue. 

**Note:** You must check for null value before using the agentData object.


> **Intent Action:** 
>
> ILivePersonIntentAction.LP_ON_AGENT_DETAILS_CHANGED_INTENT_ACTION
>
> - To get the agentData param from the Intent, use LivePersonIntents.getAgentData(intent).
>
> **Callback:** 
>
> onAgentDetailsChanged(AgentData agentData)

| Parameter | Type | Description  |
|----|----|----|
| agentData | [AgentData](android-interface-definitions.html#agentdata) | Contains the first and last names, avatar url, and employee ID of the new (or updated) currently-assigned Agent. |



#### Agent typing

Called when the assigned agent is typing a message. When there are 2 seconds of idle time, the callback returns false to indicate that the agent stopped typing.

> **Intent Action:** 
>
> ILivePersonIntentAction.LP_ON_AGENT_TYPING_INTENT_ACTION
>
> - To get the isTyping param from the Intent, use LivePersonIntents.getAgentTypingValue(intent).
>
> **Callback:** 
>
> onAgentTyping(boolean isTyping)

| Parameter | Type | Description  |
|----|----|----|
| isTyping | boolean | **true** if the Agent is currently typing; **false** if the Agent's keyboard becomes idle. |



#### Offline Hours Changed

Called when there is a change in agent availability. 

> **Intent Action:** 
>
> ILivePersonIntentAction.LP_ON_OFFLINE_HOURS_CHANGES_INTENT_ACTION
>
> - To get the isOfflineHoursOn param from the Intent, use LivePersonIntents.getOfflineHoursOn(intent).
>
> **Callback:** 
>
> onOfflineHoursChanges(boolean isOfflineHoursOn)

| Parameter | Type | Description  |
|----|----|----|
| isOfflineHoursOn | boolean | **true** if the Agent is in Offline Hours mode; **false** if the Agent returns to an online state. |



### User Action Events
#### User Denied Permission

**Android version supported:** 6.0 and above

Called if the user denied a necessary system permission for the action they tried to perform. For example, when the user clicks on the camera/gallery button to add an image, the permission system dialog was displayed, and the user denied permission. 

> **Intent Action:** 
>
> ILivePersonIntentAction.LP_ON_USER_DENIED_PERMISSION
>
> - To get the permissionType param from the Intent, use LivePersonIntents.getPermissionType(intent).
> - To get the doNotShowAgainMarked param from the Intent, use LivePersonIntents.getPermissionDoNotShowAgainMarked(intent).
>
> **Callbacks:** 
>
> onUserDeniedPermission(PermissionType permissionType, boolean doNotShowAgainMarked);

| Parameter | Type | Description  |
|----|----|----|
| permissionType | [PermissionType](android-interface-definitions.html#permissiontype) | The type of permission required for the action the user was attempting to perform. |
| doNotShowAgainMarked | boolean | **true** if the user directed the Permissions system to never ask again for this permissionType; **false** otherwise. |



#### User Action On Prevented Permission

**Android version supported:** 6.0 (Marshmallow; API 23) and above

Called before requiring a permission that the user has not yet accepted. For example, when the user clicks the camera or gallery buttons to add an image, this callback gets called just before the permission dialog is displayed. If the user already allowed permission, this callback does not get called.

> **Intent Action:** 
>
> ILivePersonIntentAction.LP_ON_USER_ACTION_ON_PREVENTED_PERMISSION
>
> - To get the permissionType param from the Intent, use LivePersonIntents.getPermissionType(intent).
>
> **Callback:** 
>
> onUserActionOnPreventedPermission(PermissionType permissionType)

| Parameter | Type | Description  |
|----|----|----|
| permissionType | [PermissionType](android-interface-definitions.html#permissiontype) | The type of permission required for the action the user is attempting to perform. |



#### Agent avatar tapped

Called when the user taps on the agent avatar.

The icon is available next to the agent message bubble or on the top of the toolbar (if using activity mode).


> **Intent Action:** 
>
> ILivePersonIntentAction.LP_ON_AGENT_AVATAR_TAPPED_INTENT_ACTION
>
> - To get the agentData param from the Intent, use LivePersonIntents.getAgentData(intent).
>
> **Callback:** 
>
> onAgentAvatarTapped (AgentData agentData) 

| Parameter | Type | Description  |
|----|----|----|
| agentData | [AgentData](android-interface-definitions.html#agentdata) | Contains the first and last names, avatar url, and employee ID of the Agent the user tapped on. |



#### Structured Content Link Clicked

Called when a structured content control with Link action gets clicked.  

{:.important}
This callback only gets called if the [structured_content_link_as_callback](android-attributes.html#structured-content) parameter in the branding.xml is set to **true**.

> **Intent Action:** 
>
> ILivePersonIntentAction.LP_ON_STRUCTURED_CONTENT_LINK_CLICKED
>
> - To get the uri param from the Intent, use LivePersonIntents.getLinkUri(intent).
>
> **Callback:** 
>
> onStructuredContentLinkClicked(String uri)

| Parameter | Type | Description  |
|----|----|----|
| uri | String | A link to the content the user was sent to when they tapped on a piece of Structured Content. |



### Survey Events
#### CSAT Screen Launched

Called when the feedback screen launches.

> **Intent Action:** 
>
> ILivePersonIntentAction.LP_ON_CSAT_LAUNCHED_INTENT_ACTION
>
> **Callback:** 
>
> onCsatLaunched()



#### CSAT Screen Dismissed

Called when the feedback screen gets dismissed with any result, positive or negative. (The user taps the **Submit**, **Skip**, or **Back** buttons.) 

> **Intent Action:** 
>
> ILivePersonIntentAction.LP_ON_CSAT_DISMISSED_INTENT_ACTION
>
> **Callback:** 
>
> onCsatDismissed()



#### CSAT Screen Submitted

Called when the user taps the **Submit** button on the feedback screen. The onCsatDismissed callback is called as well.

> **Intent Action:** 
>
> ILivePersonIntentAction.LP_ON_CSAT_SUBMITTED_INTENT_ACTION
>
> - To get the conversationID param from the Intent, use LivePersonIntents.getConversationID(intent).
> - To get the starRating param from the Intent, use LivePersonIntents.getCsatStarRating(intent).
>
> **Callback:** 
>
> onCsatSubmitted(String conversationId, int starRating)
>
> *Deprecated since August 19, 2019* <br/>
> onCsatSubmitted(String conversationId)

| Parameter | Type | Description  |
|----|----|----|
| conversationId | String | ID of the conversation the survey is rating. |
| starRating | int | How many stars (out of 5) the user rated this conversation. |



#### CSAT Screen Skipped

Called when the user taps the **Skip** or **Back** buttons. The onCsatDismissed callback is called as well.

> **Intent Action:** 
>
> ILivePersonIntentAction.LP_ON_CSAT_SKIPPED_INTENT_ACTION
>
> **Callback:** 
>
> onCsatSkipped()



### Authentication Events
#### Token Expired

Called if the token used in the session has expired and is no longer valid. The host app needs to [reconnect](android-methods.html#reconnect) with a new authentication key.

> **Intent Action:** 
>
> ILivePersonIntentAction.LP_ON_TOKEN_EXPIRED_INTENT_ACTION
>
> **Callback:** 
>
> onTokenExpired()



#### Unauthenticated User Expired

Called if the temporary user authentication used specifically in an Unauthenticated type flow expires.

> **Intent Action:** 
>
> ILivePersonIntentAction.LP_ON_UNAUTHENTICATED_USER_EXPIRED_INTENT_ACTION
>
> **Callback:** 
>
> onUnauthenticatedUserExpired()



### Connection Events
#### Connection State has Changed

Called when the connection to the conversation server has been established or disconnected.

> **Intent Action:** 
>
> ILivePersonIntentAction.LP_ON_CONNECTION_CHANGED_INTENT_ACTION
>
> - To get the isConnected param from the Intent, use LivePersonIntents.getConnectedValue(intent).
> 
> **Callback:** 
>
> onConnectionChanged(boolean isConnected)

| Parameter | Type | Description  |
|----|----|----|
| isConnected | boolean | **true** for connected, **false** for disconnected |



### Error Events
#### Multi-Type Error Indication

Called to indicate that an internal SDK error occurred.

> **Intent Action:** 
>
> ILivePersonIntentAction.LP_ON_ERROR_INTENT_ACTION
>
> - Deprecated since September 28, 2020.
> - To get the type param from the Intent, use LivePersonIntents.getOnErrorTaskType(intent).
> - To get the message param from the Intent, use LivePersonIntents.getOnErrorMessage(intent).
>
> **Callback:** 
>
> onError(TaskType type, String message)

| Parameter | Type | Description |
|----|----|----|
| type      | TaskType (enum) | The category or type of error. |
| message   | String          | A detailed message on the error. |

> **Intent Action:** 
>
> ILivePersonIntentAction.LP_ON_ERROR_TYPE_INTENT_ACTION
>
> - To get the type param from the Intent, use LivePersonIntents.getErrorType(intent).
> - To get the message param from the Intent, use LivePersonIntents.getOnErrorMessage(intent).
>
> **Callback:** 
>
> onError(LpError lpError, String message);

| Parameter | Type | Description |
|----|----|----|
| lpError | LpError (enum)| The error.   |
| message | String        | A detailed message on the error. |


### LivePerson Callbacks

Definition:

```java
public interface LivePersonCallback {
    // Conversation Events
    void onConversationStarted(LPConversationData convData);
    @Deprecated @LPDeprecated(since = 1493164800) // April 26, 2017
    void onConversationStarted();
    void onConversationResolved(LPConversationData convData);
    @Deprecated @LPDeprecated(since = 1486944000) // February 13, 2017
    void onConversationResolved();
    @Deprecated @LPDeprecated(since = 1493164800) // April 26, 2017
    void onConversationResolved(CloseReason reason);
    void onConversationFragmentClosed();
    void onConversationMarkedAsUrgent();
    void onConversationMarkedAsNormal();
    
    // Agent Events
    void onAgentTyping(boolean isTyping);
    void onAgentDetailsChanged(AgentData agentData);
    void onOfflineHoursChanges(boolean isOfflineHoursOn);
    
    // User Action Events
    void onUserDeniedPermission(PermissionType permissionType, boolean doNotShowAgainMarked);
    void onUserActionOnPreventedPermission(PermissionType permissionType);
    void onAgentAvatarTapped(AgentData agentData);
    void onStructuredContentLinkClicked(String uri);
    
    // Survey Events
    void onCsatLaunched();
    void onCsatDismissed();
    @Deprecated
    @LPDeprecated(since = 1566261196) // August 19, 2019
    void onCsatSubmitted(String conversationId);
    void onCsatSubmitted(String conversationId,int starRating);
    void onCsatSkipped();
    
    // Authentication Events
    void onTokenExpired();
    void onUnauthenticatedUserExpired();
    
    // Connection Events
    void onConnectionChanged(boolean isConnected);
    
    // Error Events
    @Deprecated @LPDeprecated(since = 1601280000) // September 28, 2020
    void onError(TaskType type, String message);
    void onError(LpError lpError, String message);
}
```



### LivePerson Intents
#### Intent Actions:  

```java
public interface ILivePersonIntentAction {
    // Conversation Events
    String LP_ON_CONVERSATION_STARTED_INTENT_ACTION = "LP_ON_CONVERSATION_STARTED_INTENT_ACTION";
    String LP_ON_CONVERSATION_RESOLVED_INTENT_ACTION = "LP_ON_CONVERSATION_RESOLVED_INTENT_ACTION";
    String LP_ON_CONVERSATION_FRAGMENT_CLOSED_INTENT_ACTION = "LP_ON_CONVERSATION_FRAGMENT_CLOSED_INTENT_ACTION";
    String LP_ON_CONVERSATION_MARKED_AS_URGENT_INTENT_ACTION = "LP_ON_CONVERSATION_MARKED_AS_URGENT_INTENT_ACTION";
    String LP_ON_CONVERSATION_MARKED_AS_NORMAL_INTENT_ACTION = "LP_ON_CONVERSATION_MARKED_AS_NORMAL_INTENT_ACTION";
    
    // Agent Action Events
    String LP_ON_AGENT_TYPING_INTENT_ACTION = "LP_ON_AGENT_TYPING_INTENT_ACTION";
    String LP_ON_AGENT_DETAILS_CHANGED_INTENT_ACTION = "LP_ON_AGENT_DETAILS_CHANGED_INTENT_ACTION";
    String LP_ON_OFFLINE_HOURS_CHANGES_INTENT_ACTION = "LP_ON_OFFLINE_HOURS_CHANGES_INTENT_ACTION";
    
    // User Action Events
    String LP_ON_USER_DENIED_PERMISSION = "LP_ON_USER_DENIED_PERMISSION";
    String LP_ON_USER_ACTION_ON_PREVENTED_PERMISSION = "LP_ON_USER_ACTION_ON_PREVENTED_PERMISSION";
    String LP_ON_AGENT_AVATAR_TAPPED_INTENT_ACTION = "LP_ON_AGENT_AVATAR_TAPPED_INTENT_ACTION";
    String LP_ON_STRUCTURED_CONTENT_LINK_CLICKED = "LP_ON_STRUCTURED_CONTENT_LINK_CLICKED";
    
    // Survey Events
    String LP_ON_CSAT_LAUNCHED_INTENT_ACTION = "LP_ON_CSAT_LAUNCHED_INTENT_ACTION";
    String LP_ON_CSAT_DISMISSED_INTENT_ACTION = "LP_ON_CSAT_DISMISSED_INTENT_ACTION";
    String LP_ON_CSAT_SUBMITTED_INTENT_ACTION = "LP_ON_CSAT_SUBMITTED_INTENT_ACTION";
    String LP_ON_CSAT_SKIPPED_INTENT_ACTION = "LP_ON_CSAT_SKIPPED_INTENT_ACTION";
    
    // Authentication Events
    String LP_ON_TOKEN_EXPIRED_INTENT_ACTION = "LP_ON_TOKEN_EXPIRED_INTENT_ACTION";
    String LP_ON_UNAUTHENTICATED_USER_EXPIRED_INTENT_ACTION = "LP_ON_UNAUTHENTICATED_USER_EXPIRED_INTENT_ACTION";
    
    // Connection Events
    String LP_ON_CONNECTION_CHANGED_INTENT_ACTION = "LP_ON_CONNECTION_CHANGED_INTENT_ACTION";
    
    // Error Events
    String LP_ON_ERROR_INTENT_ACTION = "LP_ON_ERROR_INTENT_ACTION";
}
```


#### Intent parameter 'Extras':

```java
public interface ILivePersonIntentExtras{
    // Conversation Extras
    String LP_CONVERSATION_DATA_INTENT_PARCELABLE_EXTRA = "LP_CONVERSATION_DATA_INTENT_PARCELABLE_EXTRA";
    
    // Agent Extras
    String LP_AGENT_IS_TYPING_INTENT_BOOLEAN_EXTRA = "LP_AGENT_IS_TYPING_INTENT_BOOLEAN_EXTRA";
    String LP_AGENT_DATA_INTENT_PARCELABLE_EXTRA = "LP_AGENT_DATA_INTENT_PARCELABLE_EXTRA";
    String LP_IS_OFFLINE_HOURS_ON_INTENT_BOOLEAN_EXTRA = "LP_IS_OFFLINE_HOURS_ON_INTENT_BOOLEAN_EXTRA";
    
    // User Extras
    String LP_PERMISSION_TYPE_EXTRA = "LP_PERMISSION_TYPE_EXTRA";
    String LP_PERMISSION_DO_NOT_SHOW_AGAIN_EXTRA = "LP_PERMISSION_DO_NOT_SHOW_AGAIN_EXTRA";
    String LP_LINK_URI_EXTRA = "LP_LINK_URI_EXTRA";
    
    // Survey Extras
    String LP_CONVERSATION_ID_INTENT_STRING_EXTRA = "LP_CONVERSATION_ID_INTENT_STRING_EXTRA";
    String LP_CSAT_STAR_RATING_INTENT_INT_EXTRA = "LP_CSAT_STAR_RATING_INTENT_INT_EXTRA";
    
    // Connection Extras
    String LP_IS_CONNECTED_INTENT_BOOLEAN_EXTRA = "LP_IS_CONNECTED_INTENT_BOOLEAN_EXTRA";
    
    // Error Extras
    @Deprecated @LPDeprecated(since = 1601280000) // September 28, 2020
    String LP_ON_ERROR_TASK_TYPE_INTENT_INT_EXTRA = "LP_ON_ERROR_TASK_TYPE_INTENT_INT_EXTRA";
    String LP_ON_ERROR_INTENT_INT_EXTRA = "LP_ON_ERROR_INTENT_INT_EXTRA";
    String LP_ON_ERROR_MESSAGE_INTENT_STRING_EXTRA = "LP_ON_ERROR_MESSAGE_INTENT_STRING_EXTRA";
}
```


### TaskType enum:

```java
/**
* @deprecated Since September 28, 2020
*/
enum TaskType {
  CSDS,
  IDP,
  VERSION,
  OPEN_SOCKET,
  INVALID_CERTIFICATE,
  USER_EXPIRED,
  CLOSING_SOCKET
}
```

| Type | Description |
|----|----|
| CSDS                | Internal server error. |
| IDP                 | An error occurred during the authentication process, which is usually because of a wrong or expired authentication key. |
| VERSION             | Your host app is using an old SDK version and cannot be initialized. |
| OPEN_SOCKET         | Error opening a socket to the server. |
| INVALID_CERTIFICATE | Error with a peer's certificate (server cert not valid, cert pinning mismatch, etc). |
| USER_EXPIRED        | The user's authentication has expired. |
| CLOSING_SOCKET      | A request has timed out while trying to reach a server, and as a result we are closing our socket. |

### LpError enum:

```java
enum class LpError {
  IDP,
  CSDS,
  INVALID_CERTIFICATE,
  SOCKET,
  TIMEOUT,
  INVALID_SDK_VERSION,
  UNKNOWN,
  STEP_UP_FAILURE
}
```

| Type | Description |
|----|----|
| IDP                 | An error occurred during the authentication process, which is usually because of a wrong or expired authentication key. |
| CSDS                | Error while requesting domains. |
| INVALID_CERTIFICATE | Error with a peer's certificate (server cert not valid, cert pinning mismatch, etc). |
| SOCKET              | Error opening a socket to the server or a request has timed out while trying to reach a server, and as a result we are closing our socket. |
| TIMEOUT             | A general timed out error. |
| INVALID_SDK_VERSION | Your host app is using an old SDK version and cannot be initialized. |
| STEP_UP_FAILURE     | Error while stepping up consumer from un-authenticated conversation to authenticated. |
| UNKNOWN             | General SDK error. |

