---
pagename: Messaging API
redirect_from:
  - android-methods.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: SDK APIs

order: 100
permalink: mobile-app-messaging-sdk-for-android-sdk-apis-messaging-api.html

indicator: messaging
---

**(Liveperson.java class)** 



### checkActiveConversation

Checks whether there is an active (unresolved) conversation. The result will be returned to the provided callback.

```java
public static void checkActiveConversation(final ICallback<Boolean, Exception> callback)
```

| Parameter | Description |
| :--- | :--- |
| callback | An [ICallback](android-callbacks-index.html) implementation |

### checkAgentID

If there is an active conversation, this API returns agent data through the provided callback. If there is no active conversation, the API returns null.

[AgentData definition](android-interface-and-class-definitions.html)

```java
public static void checkAgentID(final ICallback<AgentData, Exception> callback)
```

| Parameter | Description |
| :--- | :--- |
| callback | An [ICallback](android-callbacks-index.html) implementation |


### clearHistory

Clear all conversations from the device. This clears all conversations and messages from the **device only** and **does not remove them from the server**. If the account has history enabled and is used on a new device, all conversations will be loaded from the server.

The return value indicates whether the action was completed successfully or not:

- **True** - All conversations were cleared successfully.
- **False** - Conversations were not cleared since there is an open conversation.

_**Note: The clearHistory API call will work only if there is currently no active conversation.**_

```java
public static boolean clearHistory()
```

### checkConversationIsMarkedAsUrgent

Checks whether the current conversation is marked as urgent. The result is returned through the provided callback.

```java
public static void checkConversationIsMarkedAsUrgent(final ICallback<Boolean, Exception> callback)
```

| Parameter | Description |
| :--- | :--- |
| callback | An [ICallback](android-callbacks-index.html) implementation |

**openFragmentContainer method** 
Opens the conversation view in Fragment mode. This method starts the FragmentContainerActivity that is simply the fragment container for the conversation fragment obtained from the SDK.

**FragmentContainerActivity class** 
This is an activity class that has a fragment container. It gets the conversation fragment from the SDK (`LivePerson.getConversationFragment()`) and attach it to the container.

### getConversationFragment (with full authentication support)

The getConversationFragment method creates and returns the conversation fragment.

**Note:** This API does not show the actual screen, but only creates the fragment. Your implementation needs to handle when and how to show it.

**LPAuthenticationParams:**

If your system implementation involves an authentication step - pass **LPAuthenticationParams**.

There are 2 authenticated connection methods:

1. authenticationKey - **LPAuthenticationParams().setAuthKey("yourAuthCode")**.

   **Note:** Usually this means that the LivePerson backend will verify the authentication token sent by the SDK with your system servers. If the key cannot be verified on your company’s backend servers, this call will fail.

   {:.important}
   **Optional:** When using this method, you can also set a special redirect URL when authenticating by calling: `lpAuthenticationParams.setHostAppRedirectUri(yourRedirectUrl)`.


2. jwt - new **LPAuthenticationParams().setHostAppJWT("yourJwt")**

   **Note:** if you want to connect in an *unAuthenticated* way, you can pass null or an empty LPAuthenticationParams.

**ConversationViewParams:**

* **viewOnlyMode** - Define if enter message area (under the conversation view), is shown/hide.

   ```java
   new ConversationViewParams(false);
   // Or
   new ConversationViewParams().setReadOnlyMode(false);
   ```

**History Control API** - Define to filter the shown messages.

* **LPConversationsHistoryStateToDisplay**

    * Possible states:
        * LPConversationsHistoryStateToDisplay.ALL - Show All Conversations (**Default**)
        * LPConversationsHistoryStateToDisplay.CLOSE - Shows only closed Conversations
        * LPConversationsHistoryStateToDisplay.OPEN - Shows only open Converstations

   ```java
   new ConversationViewParams().setHistoryConversationsStateToDisplay(LPConversationsHistoryStateToDisplay.ALL);
   ```

* **LPConversationHistoryMaxDaysDateType**

    * Possible values:
        * LPConversationHistoryMaxDaysDateType.startConversationDate (**Default**)
        * LPConversationHistoryMaxDaysDateType.endConversationDate

   ```java
   new ConversationViewParams().setHistoryConversationMaxDaysType(LPConversationHistoryMaxDaysDateType.endConversationDate);
   ```

* **HistoryConversationsMaxDays**

    * Possible values: Any Positive Integer (**Default** : -1 , **No limit**)

   ```java
   new ConversationViewParams().setHistoryConversationsMaxDays(20);
   ```

* **ShowConversation** method:

   ```java
   public static Fragment getConversationFragment(LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎)
   ```

   | Parameter | Description |
   | :--- | :--- |
   | LPAuthenticationParams | authentication params |
   | ConversationViewParams | view params |

* 

### getNumUnreadMessages

Get the count of unread messages that are not yet received by the consumer's device. This API returns the count data through the provided callback.

When there are unread messages waiting for the consumer within the brand app, this information can be pushed to display in the app’s notification badge. Within the app, brands can develop their own visualization of a badge, such as a number, icon or other marker to show unread messages.

This API method uses a threshold mechanism of 10 seconds from the last time the badge retrieved from the server. If calling this method within less than 10 seconds, the counter will be returned from cache otherwise,it will be fetched again with new data.


**Note:** the SDK needs to be initialized before calling this API.


```java
public static void getNumUnreadMessages(String appId, final ICallback<Integer, Exception> callback)
```

| Parameter | Description |
| :--- | :--- |
| appId | The host app ID |
| callback | An [ICallback](android-callbacks-index.html) implementation |



### getSDKVersion

Returns the SDK version.

```java
public static String getSDKVersion()
```


### handlePushMessage

All incoming push messages are received by the host app. The host app can choose to fully handle any push message and display a notification message, or partially handle it and allow the SDK to display the notification.

In case a host app decides to show its own custom notification, it can call handlePushMessage() with showNotification parameter set to false. That will parse and return a PushMessage object. In a case where the push message is not related to the SDK, it will return null.

**Note:** To get the unread messages feature to work properly the host app must call this method upon receiving SDK push messages, whether showing custom notification or not.

```java
public static PushMessage handlePushMessage(Context context, Map<String, String> remoteMessage, String brandId, boolean showNotification)
```

| Parameter | Description |
| :--- | :--- |
| context | A context from the host app. |
| remoteMessage | A Map that contains the push message. Push service sends RemoteMessage object - To get the map from this object - call remoteMessage.getData().  |
| brandId | The account Id. |
| showNotification | Used to instruct the SDK to either show or not show a notification to the user. If you wish your app will handle the display of the notification you can set this as false.  |

<div class="important">
The proprietary SDK notification is only for display purposes, interacting with it won't launch the Application or navigate to the Conversation Fragment/Activity, for a fully interactive notification host app needs to provide the implementation.
</div>




### hideConversation

The hideConversation API hides the conversation activity. The conversation screen is shown again by calling showConversation.

```java
public static void hideConversation(Activity activity)
```

| Parameter | Description |
| :--- | :--- |
| activity | The calling activity |

**Notes:**

- Hiding the conversation closes the WebSocket.
- When using the SDK’s activity, the back button performs the same function.



**initActivityConversation method** 
Opens the conversation view in Activity mode.

You initialize the SDK with the brandID and appID, but only if you're not already in a `valid` state, which was checked in a previous section. 

**TIP** If the initialization succeeds, the `openActivity` method is called.

```java
private void  initActivityConversation() {

    LivePerson.initialize(MainActivity.this, new InitLivePersonProperties(brandID, appID, new InitLivePersonCallBack() {
        @Override
        public void onInitSucceed() {
            // you can't register pusher before initialization
            handleGCMRegistration(MainActivity.this);
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    openActivity();
                }
            });
        }
        @Override
        public void onInitFailed(Exception e) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    Toast.makeText(MainActivity.this, "Init Failed", Toast.LENGTH_SHORT).show();
                }
            });
        }
    }));
}
```



### initialize (with SDK properties object)

To allow user interaction, the Messaging Mobile SDK must be initiated. This API initializes the resources required by the SDK; all subsequent API calls. Except for the handlePushMessage, assume that the SDK has been initialized.

When the conversation screen is displayed, the server connection for messaging will be established. If a user session is already active and an additional SDK init call is made, it will be ignored and will not start an additional session. This method gets InitLivePersonProperties, which includes the properties needed for the init phase of the SDK.

InitLivePersonProperties has a new [MonitoringInitParams](android-interface-definitions.html) member that initializes the Monitoring API. Passing the MonitoringInitParams is mandatory when using Monitoring API capabilities.

```java
public static void initialize (Context context, InitLivePersonProperties initProperties)
```

| Parameter | Description |
| :--- | :--- |
| context | A context from the host app |
| initProperties | An object with all the properties needed to initialize the SDK |


#### initOpenConversationButton

```java
private void initOpenConversationButton() {
startConvBtn = (Button) findViewById(R.id.startcnvbtn);
startConvBtn.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        // This will check if we already in a conversation
        if (LivePerson.isValidState()) {
            openActivity();
        }
        else {
// Push - later in this tutorial
            removeNotification();
            initActivityConversation(); // The conversation activity
        }
    }
});
}
```



### logOut

Logout from the SDK - when all user data should be removed.

Calls [unregisterLPPusher](android-unregisterlppusher.html), [shutDown](android-shutdown.html) and, in addition, deletes all user data (messages and user details) from the device.

In order to unregister from push, it must be called when there is network available. After logout the SDK is unavailable until re-initiated.

**Note:** This method does not require the SDK to be initialized.

*Note: This does not end the current messaging conversation.*

<div class="important">
This method must not be called when the conversation screen is displayed.
</div>

```java
public static void logOut(Context context, String brandId, String appId, LogoutLivePersonCallback logoutCallback)
```

| Parameter | Description |
| :--- | :--- |
| context | A context from the host app. |
| brandId | An account ID. |
| appId | The host app ID. |
| logoutCallback | An [LogoutLivePersonCallback](android-callbacks-index.html) implementation. |


### markConversationAsNormal

Marks the current conversation as normal.

```java
public static void markConversationAsNormal()
```


### markConversationAsUrgent

Marks the current conversation as urgent.

```java
public static void markConversationAsUrgent()
```

#### openActivity function

Here, you use the LivePerson SDK’s `showConversation` method. 

**Tip:** In the example below, we do not use an authentication parameter.  If you need to use an authentication paramenter, use `setPhoneNumber`.

```java
private void openActivity() {
LivePerson.showConversation(MainActivity.this,  new LPAuthenticationParams().setAuthKey(""), new ConversationViewParams(false));
ConsumerProfile consumerProfile = new ConsumerProfile.Builder()
        .setFirstName(fnameInput.getText().toString())
        .setLastName(lnameInput.getText().toString())
        .setPhoneNumber("")
        .build();
LivePerson.setUserProfile(consumerProfile);
}
```

#### onCreate

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
super.onCreate(savedInstanceState);
setContentView(R.layout.activity_main);
// IntentsHandler is the object we introduced in the previous section of this tutorial
mIntentsHandler = new IntentsHandler(this);
// init basic UI views
initViews();
// Init the button listener
initOpenConversationButton();
}
```



### openFragmentContainer method 
Opens the conversation view in Fragment mode. This method starts the FragmentContainerActivity that is simply the fragment container for the conversation fragment obtained from the SDK.


### reconnect

Reconnect with a new LPAuthenticationParams object: that contains String `mAuthKey`, String `mHostAppJWT`, String `mHostAppRedirectUri`.
When connecting, the connection may be closed once the token is expired. When this happens, the [onTokenExpired](android-callbacks-index.html) callback method is called. In this case, the application needs to obtain a fresh key and reconnect by calling the reconnect method.
When creating a new LPAuthenticationParams - you may call empty constructor and then call setAuthKey() or setHostAppJWT() according to the host parameter

```java
public static void reconnect(LPAuthenticationParams lPAuthenticationParams)
```

| Parameter | Description |
| :--- | :--- |
| LPAuthenticationParams | authentication key / JWT |

### registerLPPusher

Register to LPMessagingSDK push notifications. Providing the authenticationParams parameter enables registering to the LPPusher without opening a conversation first. If providing `registrationCompletedCallback` callback, it will be called when registeration is finishes successfully or if it fails and indicates which one happened.

```java
public static void registerLPPusher(String brandId, String appId, String gcmToken, LPAuthenticationParams authenticationParams, final ICallback<Void, Exception> registrationCompletedCallback)
```

| Parameter | Description |
| :--- | :--- |
| brandId | The account ID, for example, 652838922. |
| appId | The host app ID, for example, com.liveperson.myApp. |
| gcmToken | The GCM Token. Usually used to pass the Google provided token. However, this parameter can contain any string value. If you use the gcmToken as a custom value, you need to handle the mapping between this custom value and the actual gcm token in your server. |
| authenticationParams | An optional parameter that enables registering without first opening a conversation. |
| registrationCompletedCallback | An optional callback on the registration status. |


#### Authenticated (authenticationKey)

Call `LPAuthenticationParams().setAuthKey("yourAuthCode")` to allow the LivePerson backend to verify the authentication token sent by the SDK with your system servers. If the key cannot be verified on your company’s backend servers, this call fails.

**Note:** When using this method, you can also set a special redirect URL when authenticating by calling: `lpAuthenticationParams.setHostAppRedirectUri(yourRedirectUrl)` with jwt - new `LPAuthenticationParams().setHostAppJWT("yourJwt")`.

When using **registerLPPusher** with authentication parameters for JWT renewal (JWT renewal when in the background), the authentication process goes into an infinite loop.  Use `updateTokenInBackground` to separate the *register to push* and the *token update* when in the background.  

When the JWT expires or if the registration fails due to an expired token, the `onTokenExpired()` callback gets called.  

* If the screen is in the background, the host app uses the updateTokenInBackground() API with new authentication parameters instead of calling `registerLPPusher()`. 

* If the screen is in the foreground, the host app calls `reconnect()` to renew the JWT.

Code sample
```java
@Override
 public void onTokenExpired() {

 String jwt = generateNewJwt(); // A host app method

 LivePerson.updateTokenInBackground("1234567", new LPAuthenticationParams().setAuthKey(jwt));

}
```

#### Unauthenticated

Pass null or an empty LPAuthenticationParams.



### removeCallBack

Removes the registered [LivePersonCallback](android-callbacks-index.html) callback.

```java
public static void removeCallBack()
```

### resolveConversation

Resolves the current conversation.

```java
public static void resolveConversation()
```


### setCallback

Sets the SDK callback listener. The host app gets updates from the SDK using this callback listener. See [LivePerson Callbacks Interface](android-callbacks-interface.html) for more information.

```java
public static void setCallback(final LivePersonCallback listener)
```

| Parameter | Description |
| :--- | :--- |
| listener | A LivePersonCallback implementation |


### setUserProfile

The setUserProfile API takes custom parameters about the consumer as an input and sets it to be displayed on the messaging Agent Workspace consumer transcript. This can be set at any time either before, after, or during a messaging session.

```java
public static void setUserProfile(ConsumerProfile profile)
```

| Parameter | Description |
| :--- | :--- |
| profile | The user’s profile |


### showConversation (with full authentication support)

The showConversation API displays the messaging screen as a new activity with the conversation fragment. The consumer can then start or continue a conversation. The conversation screen is controlled entirely by the SDK.

This method returns a Boolean value to indicate success or failure in opening the messaging screen. If the operation is successful, this method returns **true**, else it returns **false**.

Initiating the conversation screen opens the WebSocket to the LivePerson Messaging Server.

**LPAuthenticationParams:**

If your system implementation involves an authentication step, use `LPAuthenticationParams`.

There are 2 authenticated connection methods:

* **Authenticated (authenticationKey)** - Call `LPAuthenticationParams().setAuthKey("yourAuthCode")` to allow the LivePerson backend to verify the authentication token sent by the SDK with your system servers. If the key cannot be verified on your company’s backend servers, this call fails.

   **Note:** When using this method, you can also set a special redirect URL when authenticating by calling: `lpAuthenticationParams.setHostAppRedirectUri(yourRedirectUrl)` with jwt - new `LPAuthenticationParams().setHostAppJWT("yourJwt")`.

   When using **[registerLPPusher](#registerlppusher)** with authentication parameters for JWT renewal (JWT renewal when in the background), the authentication process goes into an infinite loop.  Use `updateTokenInBackground` to separate the *register to push* and the *token update* when in the background.  

   When the JWT expires or if the registration fails due to an expired token, the `onTokenExpired()` callback gets called.  

   * If the screen is in the background, the host app uses the updateTokenInBackground() API with new authentication parameters instead of calling `registerLPPusher()`. 

   * If the screen is in the foreground, the host app calls `reconnect()` to renew the JWT.

   **Code sample:**

   ```java
   @Override
    public void onTokenExpired() {

    String jwt = generateNewJwt(); // A host app method

    LivePerson.updateTokenInBackground("1234567", new LPAuthenticationParams().setAuthKey(jwt));

   }
   ```

* **Unauthenticated** - Pass null or an empty LPAuthenticationParams.





**ConversationViewParams:**


   ```java
   new ConversationViewParams(false);
   // Or
   new ConversationViewParams().setReadOnlyMode(false);
   ```

**History Control API** - Define to filter the shown messages.

* **LPConversationsHistoryStateToDisplay**

    * Possible states:
        * LPConversationsHistoryStateToDisplay.ALL - Show All Conversations (**Default**)
        * LPConversationsHistoryStateToDisplay.CLOSE - Shows only closed Conversations
        * LPConversationsHistoryStateToDisplay.OPEN - Shows only open Converstations

   ```java
   new ConversationViewParams().setHistoryConversationsStateToDisplay(LPConversationsHistoryStateToDisplay.ALL);
    ```

* **LPConversationHistoryMaxDaysDateType**

    * Possible values:
        * LPConversationHistoryMaxDaysDateType.startConversationDate (**Default**)
        * LPConversationHistoryMaxDaysDateType.endConversationDate

   ```java
    new ConversationViewParams().setHistoryConversationMaxDaysType(LPConversationHistoryMaxDaysDateType.endConversationDate);
   ```

* **LPWelcomeMessage** 

   ```java
   LPWelcomeMessage lpWelcomeMessage = new LPWelcomeMessage("Welcome Message");
   new ConversationViewParams().setLpWelcomeMessage(lpWelcomeMessage);
   ```

   For details on implementing, see [Welcome Message with Quick Replies](mobile-app-messaging-sdk-for-android-advanced-features-welcome-message-with-quick-replies.html).

* **HistoryConversationsMaxDays**

    * Possible values: Any Positive Integer (**Default** : -1 , **No limit**)

   ```java
   new ConversationViewParams().setHistoryConversationsMaxDays(20);
   ```

* **ShowConversation** method:

   ```java
   public static boolean showConversation(Activity activity, LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎)
   ```

   | Parameter | Description |
   | :--- | :--- |
   | activity | The calling activity |
   | LPAuthenticationParams | authentication params |
   | ConversationViewParams | view params |


### shutDown

```java
public static void shutDown(final ShutDownLivePersonCallback shutdownCallback)
```

| Parameter | Description |
| :--- | :--- |
| shutdownCallback | A [ShutDownLivePersonCallback](android-callbacks-index.html) implementation to get indication whether the shutdown succeeded or failed |

Shuts down the SDK and removes the footprint of the user session from local memory. After shutdown the SDK is unavailable until re-initiated. Message history is saved locally on the device and synced with the server upon reconnection.

The server continues to send push notifications when the SDK is shut down. To unregister from push services, call [unregisterLPPusher](android-unregisterlppusher.html) API.

ShutDownLivePersonCallback callback description:

- **onShutdownSucceed()** method is called when the shutdown process finished successfully.
- **onShutdownFailed()** method is called when the shutdown process failed (for example, shutdown was called when the conversation screen is displayed in the foreground).

**Note:** This does not end the current messaging conversation.


### unregisterLPPusher

Unregister from registered push notification service.

```java
public static void unregisterLPPusher(String brandId, String appId)
```

| Parameter | Description |
| :--- | :--- |
| brandId | The account ID. |
| appId | The host app ID. |







### Deprecated

#### initialize (deprecated)

*This method was deprecated - please use the [new method](android-initializeproperties.html).*

To allow user interaction, the Messaging Mobile SDK must be initiated. This API initializes the resources required by the SDK. All subsequent API calls, except to the handlePushMessage, assume that the SDK has been initialized.
When the conversation screen is displayed, the server connection for messaging will be established. If a user session is already active and an additional SDK init call is made, it will be ignored and will not start an additional session.

```java
public static void initialize (Context context, String brandId, InitLivePersonCallBack initCallBack)
```

| Parameter | Description |
| :--- | :--- |
| context | A context from the host app |
| brandId | An account ID |
| initCallBack | An InitLivePersonCallBack implementation |

#### showConversation (Deprecated)

The showConversation API displays the messaging screen as a new activity with the conversation fragment. The consumer can then start or continue a conversation. The conversation screen is controlled entirely by the SDK.

This method returns a Boolean value to indicate success or failure in opening the messaging screen. If the operation is successful, this method returns true, else it returns false.

Initiating the conversation screen opens the WebSocket to the LivePerson Messaging Server.

```java
public static boolean showConversation(Activity activity)
```

| Parameter | Description |
| :--- | :--- |
| activity | The calling activity |

#### showConversation (with authentication support) (Deprecated)

Same as [showConversation](android-showconversation.html) with the addition of authentication support. You should use this alternative if you know your system implementation involves an authentication step. Usually this means that the LivePerson backend will verify the authentication token sent by the SDK with your system servers. If the key cannot be verified on your company’s backend servers, this call will fail.

```java
public static boolean showConversation(Activity activity, String authenticationKey)
```

| Parameter | Description |
| :--- | :--- |
| activity | The calling activity |
| authenticationKey | The authentication key  |

#### getConversationFragment (Deprecated)

The getConversationFragment method creates and returns the conversation fragment.

```java
public static Fragment getConversationFragment()
```

The getConversationFragment method creates and returns the conversation fragment.

**Note:** This API does not show the actual screen, but only creates the fragment. Your implementation needs to handle when and how to show it.


#### getConversationFragment with authentication support (Deprecated)

Same as [getConversationFragment](android-getconversationfrag.html) with the attention of authentication support. You should use this alternative if you know your system implementation involves an authentication step. Usually this means the LivePerson backend will verify the authentication token sent by the SDK with your system servers. If the key cannot be verified, or your backend isn’t set up with the LivePerson backend, this call will fail.

```java
public static Fragment getConversationFragment(String authKey)
```

| Parameter | Description |
| :--- | :--- |
| authKey | The authentication key  |

#### reconnect (Deprecated)

Reconnect with a new authentication key. When connecting with an authentication key, the connection may be closed once the token is expired. When this happens, the [onTokenExpired](android-callbacks-index.html) callback method is called. In this case, the application needs to obtain a fresh key and reconnect by calling the reconnect method.

```java
public static void reconnect(String authKey)
```

| Parameter | Description |
| :--- | :--- |
| authKey | The authentication key  |

#### setUserProfile (deprecated)

*Deprecated. Please use the [setUserProfile](android-methods.html#setUserProfile) (String firstName, String lastName, String phone) method ).*

The setUserProfile API takes custom parameters about the consumer as an input and sets it to be displayed on the messaging Agent Workspace consumer transcript. This can be set at any time either before, after, or during a messaging session.

```java
public static void setUserProfile(String appId, String firstName, String lastName, String phone)*
```

| Parameter | Description |
| :--- | :--- |
| appId | The host app ID |
| firstName | User’s first name |
| lastName | User’s last name |
| phone | User’s phone |

#### registerLPPusher (deprecated)

Register to LPMessagingSDK push notifications

*Deprecated. Please use the [registerLPPusher](android-methods.html#registerlppusher)(String brandId, String appId, String gcmToken, LPAuthenticationParams authenticationParams,final ICallback<Void, Exception> registrationCompletedCallback) method ).*

```java
public static void registerLPPusher(String brandId, String appId, String gcmToken)
```

| Parameter | Description |
| :--- | :--- |
| brandId | The account ID (e.g. 652838922). |
| appId | The host app ID (e.g. com.liveperson.myApp). |
| gcmToken | The GCM Token. Usually used to pass the Google provided token. However, this parameter can contain any string value. |

_**Note: If you use the gcmToken as a custom value, you need to handle the mapping between this custom value and the actual gcm token in your server.**_


#### handlePush (Deprecated)

**(Deprecated. Please use the above handlePushMessage() method)**

All incoming push messages are received by the host app. The host app can choose to fully handle any push message and display a notification message, or partially handle it and allow the SDK to display the notification.

Handling the push message allows the host app to do the following:

- Receive non-messaging related push messages.
- Handle custom in-app alerts upon an incoming message.

_**Note: Whether the host app fully handles any push messages or partially, any messaging push message should be sent to the SDK using the handlePushMessage method.**_

```java
public static void handlePushMessage(Context context, Bundle data, String brandId, Boolean showNotification)
```

| Parameter | Description |
| :--- | :--- |
| context | A context from the host app. |
| data | A Bundle that contains the message. The bundle should hold a string with key named "message". |
| brandId | The account ID. |
| showNotification | Used to instruct the SDK to either show or not show a notification to the user. If you wish your app will handle the display of the notification you can set this as false. |


#### getNumUnreadMessages (Deprecated)

Returns the counter of the unread messages - the number of push messages received. This number is set to 0 when opening the conversation screen.

To get updates on the unread messages counter: create a BroadcastReceiver that will listen to the following Action: **LivePerson.ACTION_LP_UPDATE_NUM_UNREAD_MESSAGES_ACTION;**

To get the number of unread messages out of the intent use the following extra key: **LivePerson.ACTION_LP_UPDATE_NUM_UNREAD_MESSAGES_EXTRA;**

```java
public static int getNumUnreadMessages(String brandId)
```

| Parameter | Description |
| :--- | :--- |
| brandId | The account ID. |

#### shutDown (deprecated)

*Deprecated. Please use the [shutDown(ShutDownLivePersonCallback)](android-shutdown.html) method.*

Shuts down the SDK and removes the footprint of the user session from local memory. After shutdown the SDK is unavailable until re-initiated. Message history is saved locally on the device and synced with the server upon reconnection.

The server continues to send push notifications when the SDK is shut down. To unregister from push services, call [unregisterLPPusher](android-unregisterlppusher.html) API.

```java
public static void shutDown()
```

*Note: This does not end the current messaging conversation.*

<div class="important"> This method must not be called when the conversation screen is displayed.</div>



