---
pagename: Authentication for Android
redirect_from:
  - android-authentication.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfolder: Resources

permalink: mobile-app-messaging-sdk-for-android-resources-authentication.html

indicator: messaging
---


### Authenticated in-app messaging

#### Prerequisites
* Your mobile app users should be able to log into your back-end securely.
* Your back-end must be able to supply, upon request during the session, an OAuth 2.0 (for Code Flow) or a JWT token (for Implicit Flow).

#### Authentication methods 

If your system implementation involves an authentication step , you can use one of the following methods in order to get the conversation view:

##### Activity mode

```java
LivePerson.showConversation(Activity activity, LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
```

##### Fragment mode (Attach the returned fragment to a container in your activity)

```java
LivePerson.getConversationFragment(LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
```

#### Authenticated connection methods

##### AuthenticationKey
The LivePerson back-end verifies the authentication token sent by the SDK with your system servers. If the key cannot be verified on your company’s backend servers, this call fails.

```java
LPAuthenticationParams().setAuthKey("yourAuthCode").
```

**Tip:** Alternatively, when using this method, you can also set a special redirect URL when authenticating by calling:

```java
lpAuthenticationParams.setHostAppRedirectUri("yourRedirectUrl")
```

##### JWT

```java
LPAuthenticationParams().setHostAppJWT("yourJwt")
```

Once the Authentication key expires, you get notified with a callback / local intent ["void onTokenExpired()"](android-callbacks-index.html#token-expired).

To re-connect with a new Authentication key, use [reconnect( LPAuthenticationParams lpAuthenticationParams) ](android-methods.html#reconnect)


{:.important}
Errors while trying to connect uses callback: `void onError(TaskType type, String message);`

### Unauthenticated in-app messaging

Unauthenticated In-App Messaging allows brands to communicate with consumers in an unauthenticated manner. This allows:

* Easier & quicker on-boarding to LiveEngage

* Having pre authentication messaging use cases, for example, assistance with password recovery

* The ability to use Campaigns for Messaging    

#### Related Classes, Parameters & APIs

The `LPAuthenticationParams` object contains an authentication type which should be passed in the ctor. An empty ctor is also available and the default authentication type will be SIGN_UP (will be deprecated on July 2019).

_Note: if you call any methods in LPAuthenticationParams that support authentication (for ex. - `setHostAppJWT()`) - it will automatically set the authentication type to LPAuthenticationType.AUTH_

```java
public class LPAuthenticationParams {
    ...
    private LPAuthenticationType mType;
  }
```

```java
public enum LPAuthenticationType {SIGN_UP, UN_AUTH, AUTH}

```

##### Server side configurations (In case needed, should be modified by LivePerson)

* Identity idle time - setting the time frame for identifying a consumer while being idle (not communicating with the brand). When a consumer opens the conversation window after being idle for the configured time, the LivePerson data will be removed from the device. If there's an open conversation - it will be closed and a dialog explaining what happened will be presented to the consumer.

* Unauthenticated token expiration - sets the time for the app to validate the token. When the token is expired, it will be refreshed.

##### SDK configurations

When an unauthenticated user session expire - the SDK will notify by presenting a dialog to the consumer. The dialog content can be modified by overriding the following string params

```xml
   <string name="lp_new_unauth_user_dialog_title">New Conversation</string>
   <string name="lp_new_unauth_user_dialog_message">"Hi there! As we haven't seen you for a while, we're opening a new conversation for you."</string>
```

#### Code Samples

```java
// 1. Init SDK with Monitoring
MonitoringInitParams monitoringInitParams = new MonitoringInitParams(monitoringAppInstallId);

LivePerson.initialize(getApplicationContext(), new InitLivePersonProperties(accountId,APP_ID, monitoringInitParams, new InitLivePersonCallBack() {...}));

// 2. create & pass LPAuthenticationParams
LPAuthenticationParams lpAuthenticationParams = new LPAuthenticationParams(LPAuthenticationType.UN_AUTH);

LivePerson.showConversation(activity,lpAuthenticationParams, conversationViewParams);
```

#### Notes & Best Practices

* Brands who wish to use Unauthenticated In-App Messaging must activate Campaigns for Messaging and create a default engagement. For additional information, please follow the [Campaigns for Messaging guide](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Campaigns/Mobile+App+Engagement+Configuration+Guide.pdf). In addition, the SDK should be initialized with the ```LPMonitoringInitParams``` object.

* In order to change SDK modes, Logout must be called first.

* LPAuthenticationType signup will be deprecated at the end June 2019.
