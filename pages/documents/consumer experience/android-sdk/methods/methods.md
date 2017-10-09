---
title: Methods
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: SDK APIs

order: 100
permalink: android-methods.html

indicator: messaging
---

### initialize (deprecated)

*This method was deprecated - please use the [new method](android-initializeproperties.html){:target="_blank"}.*

To allow user interaction, the Messaging Mobile SDK must be initiated. This API initializes the resources required by the SDK. All subsequent API calls, except to the handlePushMessage, assume that the SDK has been initialized.
When the conversation screen is displayed, the server connection for messaging will be established. If a user session is already active and an additional SDK init call is made, it will be ignored and will not start an additional session.

`public static void initialize (Context context, String brandId, InitLivePersonCallBack initCallBack)`

| Parameter | Description |
| :--- | :--- |
| context | A context from the host app |
| brandId | An account ID |
| initCallBack | An InitLivePersonCallBack implementation |


### initialize (with SDK properties object)

To allow user interaction, the Messaging Mobile SDK must be initiated. This API initializes the resources required by the SDK; all subsequent API calls. Except for the handlePushMessage, assume that the SDK has been initialized.

When the conversation screen is displayed, the server connection for messaging will be established. If a user session is already active and an additional SDK init call is made, it will be ignored and will not start an additional session. This method gets InitLivePersonProperties, which includes the properties needed for the init phase of the SDK.

`public static void initialize (Context context, InitLivePersonProperties initProperties)`

| Parameter | Description |
| :--- | :--- |
| context | A context from the host app |
| initProperties | An object with all the properties needed to initialize the SDK |


### showConversation (with full authentication support)

The showConversation API displays the messaging screen as a new activity with the conversation fragment. The consumer can then start or continue a conversation. The conversation screen is controlled entirely by the SDK.

This method returns a Boolean value to indicate success or failure in opening the messaging screen. If the operation is successful, this method returns true, else it returns false.

Initiating the conversation screen opens the WebSocket to the LivePerson Messaging Server.

**LPAuthenticationParams:**

If your system implementation involves an authentication step - pass LPAuthenticationParams.

There are 2 authenticated connection methods:

 1. with authenticationKey - Usually this means that the LivePerson backend will verify the authentication token sent by the SDK with your system servers. If the key cannot be verified on your company’s backend servers, this call will fail.
  new LPAuthenticationParams().setAuthKey(yourAuthCode).

_Optional_ - when using this method, you can also set a special redirect URL when authenticating; by calling : lpAuthenticationParams.setHostAppRedirectUri(yourRedirectUrl)

{:start="2"}
 2. with jwt - new LPAuthenticationParams().setHostAppJWT(yourJwt)

if you want to connect in an *unAuthenticated* way, you can pass null or an empty LPAuthenticationParams.

**ConversationViewParams:**

boolean viewOnlyMode : define if to show /hide the enter message area (under the conversation view)

`public static boolean showConversation(Activity activity, LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎)`

| Parameter | Description |
| :--- | :--- |
| activity | The calling activity |
| LPAuthenticationParams | authentication params |
| ConversationViewParams | view params |



### showConversation (Deprecated)

The showConversation API displays the messaging screen as a new activity with the conversation fragment. The consumer can then start or continue a conversation. The conversation screen is controlled entirely by the SDK.

This method returns a Boolean value to indicate success or failure in opening the messaging screen. If the operation is successful, this method returns true, else it returns false.

Initiating the conversation screen opens the WebSocket to the LivePerson Messaging Server.

`public static boolean showConversation(Activity activity)`

| Parameter | Description |
| :--- | :--- |
| activity | The calling activity |

### showConversation (with authentication support) (Deprecated)

Same as [showConversation](android-showconversation.html){:target="_blank"} with the addition of authentication support. You should use this alternative if you know your system implementation involves an authentication step. Usually this means that the LivePerson backend will verify the authentication token sent by the SDK with your system servers. If the key cannot be verified on your company’s backend servers, this call will fail.

`public static boolean showConversation(Activity activity, String authenticationKey)`

| Parameter | Description |
| :--- | :--- |
| activity | The calling activity |
| authenticationKey | The authentication key  |

### hideConversation

The hideConversation API hides the conversation activity. The conversation screen is shown again by calling showConversation.

`public static void hideConversation(Activity activity)`

| Parameter | Description |
| :--- | :--- |
| activity | The calling activity |

*Notes*:

- *Hiding the conversation closes the WebSocket.*
- *When using the SDK’s activity, the back button performs the same function.*


### getConversationFrgament (with full authentication support)

The getConversationFragment method creates and returns the conversation fragment.

*Note: This API does not show the actual screen, but only creates the fragment. Your implementation needs to handle when and how to show it.*

**LPAuthenticationParams:**

If your system implementation involves an authentication step - pass LPAuthenticationParams.

There are 2 authenticated connection methods:

 1. with authenticationKey - Usually this means that the LivePerson backend will verify the authentication token sent by the SDK with your system servers. If the key cannot be verified on your company’s backend servers, this call will fail.
  new LPAuthenticationParams().setAuthKey(yourAuthCode).

_Optional_ - when using this method, you can also set a special redirect URL when authenticating; by calling : lpAuthenticationParams.setHostAppRedirectUri(yourRedirectUrl)

{:start="X"}
 2. with jwt - new LPAuthenticationParams().setHostAppJWT(yourJwt)

if you want to connect in an *unAuthenticated* way, you can pass null or an empty LPAuthenticationParams.

**ConversationViewParams:**

boolean viewOnlyMode : define if to show /hide the enter message area (under the conversation view)

`public static Fragment getConversationFragment(LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎)`

| Parameter | Description |
| :--- | :--- |
| LPAuthenticationParams | authentication params |
| ConversationViewParams | view params |

### getConversationFrgament (Deprecated)

The getConversationFragment method creates and returns the conversation fragment.

`public static Fragment getConversationFragment();`

The getConversationFragment method creates and returns the conversation fragment.

*Note: This API does not show the actual screen, but only creates the fragment. Your implementation needs to handle when and how to show it.*

### getConversationFragment with authentication support

Same as [getConversationFragment](android-getconversationfrag.html){:target="_blank"} with the attention of authentication support. You should use this alternative if you know your system implementation involves an authentication step. Usually this means the LivePerson backend will verify the authentication token sent by the SDK with your system servers. If the key cannot be verified, or your backend isn’t set up with the LivePerson backend, this call will fail.

`public static Fragment getConversationFragment(String authKey)`

| Parameter | Description |
| :--- | :--- |
| authKey | The authentication key  |

### reconnect

Reconnect with a new authentication key. When connecting with an authentication key, the connection may be closed once the token is expired. When this happens, the [onTokenExpired](android-callbacks-index.html){:target="_blank"} callback method is called. In this case, the application needs to obtain a fresh key and reconnect by calling the reconnect method.

`public static void reconnect(String authKey)`

| Parameter | Description |
| :--- | :--- |
| authKey | The authentication key  |

### setUserProfile

The setUserProfile API takes custom parameters about the consumer as an input and sets it to be displayed on the messaging Agent Workspace consumer transcript. This can be set at any time either before, after, or during a messaging session.

`public static void setUserProfile(ConsumerProfile profile)`

| Parameter | Description |
| :--- | :--- |
| profile | The user’s profile |

### setUserProfile (deprecated)

*Deprecated. Please use the [setUserProfile](android-setuserprofile.html){:target="_blank"} (String firstName, String lastName, String phone) method ).*

The setUserProfile API takes custom parameters about the consumer as an input and sets it to be displayed on the messaging Agent Workspace consumer transcript. This can be set at any time either before, after, or during a messaging session.

`public static void setUserProfile(String appId, String firstName, String lastName, String phone)*`

| Parameter | Description |
| :--- | :--- |
| appId | The host app ID |
| firstName | User’s first name |
| lastName | User’s last name |
| phone | User’s phone |

### registerLPPusher

`public static void registerLPPusher(String brandId, String appId, String gcmToken)`

| Parameter | Description |
| :--- | :--- |
| brandId | The account ID (e.g. 652838922). |
| appId | The host app ID (e.g. com.liveperson.myApp). |
| gcmToken | The GCM Token. Usually used to pass the Google provided token. However, this parameter can contain any string value. |

*Note: If you use the gcmToken as a custom value, you need to handle the mapping between this custom value and the actual gcm token in your server.*

### unregisterLPPusher

Unregister from registered push notification service.

`public static void unregisterLPPusher(String brandId, String appId)`

| Parameter | Description |
| :--- | :--- |
| brandId | The account ID. |
| appId | The host app ID. |

### handlePushMessage

All incoming push messages are received by the host app. The host app can choose to fully handle any push message and display a notification message, or partially handle it and allow the SDK to display the notification.

In case a host app decides to show its own custom notification, it can call handlePushMessage() with showNotification parameter set to false. That will parse and return a PushMessage object. In a case where the push message is not related to the SDK, it will return null.

_Note: To get unread messages feature will work properly - host app must call this method upon receiving SDK push messages (whether showing custom notification or not)_.

`public static PushMessage handlePushMessage(Context context, Map<String, String> remoteMessage, String brandId, boolean showNotification)`

| Parameter | Description |
| :--- | :--- |
| context | A context from the host app. |
| remoteMessage | A Map that contains the push message. Push service sends RemoteMessage object - To get the map from this object - call remoteMessage.getData().  |
| brandId | The account Id. |
| showNotification | Used to instruct the SDK to either show or not show a notification to the user. If you wish your app will handle the display of the notification you can set this as false.  |

### handlePush (Deprecated)

**(Deprecated. Please use the above handlePushMessage() method)**

All incoming push messages are received by the host app. The host app can choose to fully handle any push message and display a notification message, or partially handle it and allow the SDK to display the notification.

Handling the push message allows the host app to do the following:

- Receive non-messaging related push messages.
- Handle custom in-app alerts upon an incoming message.

*Note: Whether the host app fully handles any push messages or partially, any messaging push message should be sent to the SDK using the handlePushMessage method.*

`public static void handlePushMessage(Context context, Bundle data, String brandId, Boolean showNotification)`

| Parameter | Description |
| :--- | :--- |
| context | A context from the host app. |
| data | A Bundle that contains the message. The bundle should hold a string with key named "message". |
| brandId | The account ID. |
| showNotification | Used to instruct the SDK to either show or not show a notification to the user. If you wish your app will handle the display of the notification you can set this as false. |

### getNumUnreadMessages (Deprecated)

Returns the counter of the unread messages - the number of push messages received. This number is set to 0 when opening the conversation screen.

To get updates on the unread messages counter: create a BroadcastReceiver that will listen to the following Action: **LivePerson.ACTION_LP_UPDATE_NUM_UNREAD_MESSAGES_ACTION;**

To get the number of unread messages out of the intent use the following extra key: **LivePerson.ACTION_LP_UPDATE_NUM_UNREAD_MESSAGES_EXTRA;**

`public static int getNumUnreadMessages(String brandId)`

| Parameter | Description |
| :--- | :--- |
| brandId | The account ID. |

### getNumUnreadMessages

Get the count of unread messages that are not yet received by the consumer's device. This API returns the count data through the provided callback.

**Note:** the SDK needs to be initialized before calling this API.


`public static void getNumUnreadMessages(String appId, final ICallback<Integer, Exception> callback)`

| Parameter | Description |
| :--- | :--- |
| appId | The host app ID |
| callback | An [ICallback](android-callbacks-index.html){:target="_blank"} implementation |

### getSDKVersion

Returns the SDK version.

`public static String getSDKVersion()`

### setCallback

Sets the SDK callback listener. The host app gets updates from the SDK using this callback listener. See [LivePerson Callbacks Interface](android-callbacks-interface.html){:target="_blank"} for more information.

`public static void setCallback(final LivePersonCallback listener)`

| Parameter | Description |
| :--- | :--- |
| listener | A LivePersonCallback implementation |

### removeCallBack

Removes the registered [LivePersonCallback](android-callbacks-index.html){:target="_blank"} callback.

`public static void removeCallBack()`

### checkActiveConversation

Checks whether there is an active (unresolved) conversation. The result will be returned to the provided callback.

`public static void checkActiveConversation(final ICallback<Boolean, Exception> callback)`

| Parameter | Description |
| :--- | :--- |
| callback | An [ICallback](android-callbacks-index.html){:target="_blank"} implementation |

### checkAgentID

If there is an active conversation, this API returns agent data through the provided callback. If there is no active conversation, the API returns null.

[AgentData definition](android-interface-and-class-definitions.html){:target="_blank"}

`public static void checkAgentID(final ICallback<AgentData, Exception> callback)`

| Parameter | Description |
| :--- | :--- |
| callback | An [ICallback](android-callbacks-index.html){:target="_blank"} implementation |

### markConversationAsUrgent

Marks the current conversation as urgent.

`public static void markConversationAsUrgent()`

### markConversationAsNormal

Marks the current conversation as normal.

`public static void markConversationAsNormal()`

### checkConversationIsMarkedAsUrgent

Checks whether the current conversation is marked as urgent. The result is returned through the provided callback.

`public static void checkConversationIsMarkedAsUrgent(final ICallback<Boolean, Exception> callback)`

| Parameter | Description |
| :--- | :--- |
| callback | An [ICallback](android-callbacks-index.html){:target="_blank"} implementation |

### resolveConversation

Resolves the current conversation.

`public static void resolveConversation()`

### shutDown

`public static void shutDown(final ShutDownLivePersonCallback shutdownCallback)`

| Parameter | Description |
| :--- | :--- |
| shutdownCallback | A [ShutDownLivePersonCallback](android-callbacks-index.html){:target="_blank"} implementation to get indication whether the shutdown succeeded or failed |

Shuts down the SDK and removes the footprint of the user session from local memory. After shutdown the SDK is unavailable until re-initiated. Message history is saved locally on the device and synced with the server upon reconnection.

The server continues to send push notifications when the SDK is shut down. To unregister from push services, call [unregisterLPPusher](android-unregisterlppusher.html){:target="_blank"} API.

ShutDownLivePersonCallback callback description:

- onShutdownSucceed() method is called when the shutdown process finished successfully.
- onShutdownFailed() method is called when the shutdown process failed (for example, shutdown was called when the conversation screen is displayed in the foreground).

*Note: This does not end the current messaging conversation.*

### shutDown (deprecated)

*Deprecated. Please use the [shutDown(ShutDownLivePersonCallback)](android-shutdown.html){:target="_blank"} method.*

Shuts down the SDK and removes the footprint of the user session from local memory. After shutdown the SDK is unavailable until re-initiated. Message history is saved locally on the device and synced with the server upon reconnection.

The server continues to send push notifications when the SDK is shut down. To unregister from push services, call [unregisterLPPusher](android-unregisterlppusher.html){:target="_blank"} API.

`public static void shutDown()`

*Note: This does not end the current messaging conversation.*

**Important: This method must not be called when the conversation screen is displayed.**

### clearHistory

Clear all conversations from the device. This clears all conversations and messages from the device only and does not remove them from the server. If the account has history enabled and is used on a new device, all conversations will be loaded from the server.

The return value indicates whether the action was completed successfully or not:

- True - All conversations were cleared successfully.
- False - Conversations were not cleared since there is an open conversation.

*Note: The clearHistory API call will work only if there is currently no active conversation.*

`public static boolean clearHistory()`

### logOut

Logout from the SDK - when all user data should be removed.

Calls [unregisterLPPusher](android-unregisterlppusher.html){:target="_blank"}, [shutDown](android-shutdown.html){:target="_blank"} and, in addition, deletes all user data (messages and user details) from the device.

In order to unregister from push, it must be called when there is network available. After logout the SDK is unavailable until re-initiated.

**This method does not require the SDK to be initialized.**

*Note: This does not end the current messaging conversation.*

**Important: This method must not be called when the conversation screen is displayed.**

`public static void logOut(Context context, String brandId, String appId, LogoutLivePersonCallback logoutCallback){`

| Parameter | Description |
| :--- | :--- |
| context | A context from the host app. |
| brandId | An account ID. |
| appId | The host app ID. |
| logoutCallback | An [LogoutLivePersonCallback](android-callbacks-index.html){:target="_blank"} implementation. |
