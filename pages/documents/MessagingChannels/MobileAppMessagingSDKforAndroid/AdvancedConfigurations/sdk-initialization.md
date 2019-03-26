---
pagename: Initialization
redirect_from:
  - android-initialization.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Configuration

order: 20
permalink: mobile-app-messaging-sdk-for-android-configuration-initialization.html

indicator: messaging
---

### Initialize the Messaging SDK:

```java
String brandID = "Your-Liveperson-Account-Id-String";
String appID = "your-app-package-name"
LivePerson.initialize(context, new InitLivePersonProperties( brandID, appID,
  new InitLivePersonCallBack() {
    @Override
    public void onInitSucceed() {
    }

    @Override
    public void onInitFailed(Exception e) {
    }
  }
));
```

| Element | Description |
| :--- | :--- |
| brandID | Your LivePerson account ID. If you don’t have one, please contact your LivePerson representative. |
| appID | Your app ID, used for registering LP pusher service. |
| onInitSuccess | Callback that indicates the init process has finished successfully. |
| onInitFailed | Callback that indicates the init process has failed. <br> *Note: You can call initialize before showing LivePerson's Activity/Fragment, but it is recommended to initialize the SDK in your app's Application class.* |

>**NOTE**: If you want to use the Monitoring API, you must [initialize the SDK with MonitoringParams](#initialize-the-messaging-sdk-with-monitoring-params). Once initialization is completed (<b>onInitSucceed</b>), you can call LivePerson methods.


### Initialize the Messaging SDK with Monitoring Params
<div class="important">
To get the App key or appInstallationId, a new Conversation Source needs to be added on LiveEngage. For more information about it, contact your Account Team.
</div>

1. In your app's Application class, initialize the Messaging SDK with Monitoring Params.

   ```java
   String brandID = "YourLivepersonAccountIdString";
   String appID = "your app package name"
   MonitoringInitParams monitoringParams = new MonitoringInitParams("appInstallationId");

   LivePerson.initialize(MainActivity.this, new InitLivePersonProperties(brandID, appID, monitoringParams, new InitLivePersonCallBack() {
     @Override
     public void onInitSucceed() {
     }

     @Override
     public void onInitFailed(Exception e) {
     }
   }));
   ```

2. Create **MonitoringParams**. 

   <div class="notice">The entry points and engagement attributes used here are dummies.</div>

   ```java
   // Create Entry Points JSON
   JSONArray entryPoints = null;
   try {
     // Try to Create JSON Array
     jsonArray = new JSONArray("[tel://972737004000, http://www.liveperson.com, sec://sport, lang://Eng]");
   } catch (JSONException e) {
     // Log Error
     Log.d(TAG, "Error Creating Entry Points :: " + e.getLocalizedMessage());
   }
   // Create Engagement Attributes
   JSONArray engagementAttributes = null;
   try {
     // Try to Create JSON Array
   jsonArray = new JSONArray("[{\"type\": \"purchase\", \"total\": \"20.0\"},{\"type\": \"lead\",\"lead\": {\"topic\": \"luxury car test drive 2015\",\"value\": \"22.22\",\"leadId\": \"xyz123\"}}]")
   } catch (JSONException e) {
     // Log Error
     Log.d(TAG, "Error Creating Engagement Attr :: " + e.getLocalizedMessage());
   }
   // Create Monitoring Params
   MonitoringParams params = new MonitoringParams(null, entryPoints, engagementAttributes);
   ```

3. Using **LivepersonMonitoring**, get the Engagement for the User, which is needed to start a new conversation with a specific campaign. This call uses the MonitoringParams created in the previous step.

   ```java
   // Get Engagement
   LivepersonMonitoring.getEngagement(context, consumerID, params, new EngagementCallback() {
     @Override
     public void onSuccess(LPEngagementResponse lpEngagementResponse) {
       List<EngagementDetails> engagementList = lpEngagementResponse.getEngagementDetailsList();
       // Check if User qualifies for an Engagement
       if (engagementList != null && !engagementList.isEmpty()) {
         // Set Campaign ID
         currentCampaignId = engagementList.get(0).getCampaignId();
         // Set Engagement ID
         currentEngagementId = engagementList.get(0).getEngagementId();
         // Set Engagement Context Id
         currentEngagementContextId = engagementList.get(0).getContextId();
         // Set Session ID
         currentSessionId = lpEngagementResponse.getSessionId();
         // Set Visitor ID
         currentVisitorId = lpEngagementResponse.getVisitorId();
         // Try-Catch Block
         try {
           // Create Campaign Object
           CampaignInfo campaign = new CampaignInfo(Long.valueOf(currentCampaignId), Long.valueOf(currentEngagementId), currentEngagementContextId, currentSessionId, currentVisitorId);
           // Log
           Log.d(TAG, "Campaign :: " + campaign);
         } catch (BadArgumentException e){
           // Log Error
           Log.d(TAG, "Error Creating Campaign :: " + e.getLocalizedMessage());
         }
       } else {
         // Log Error
         Log.d(TAG, "No Engagement found");
       }
     }

     @Override
     public void onError(MonitoringErrorType monitoringErrorType, Exception e) {
       // Log Error
       Log.d(TAG, "Error Getting Engagement :: " + e.getLocalizedMessage());
     }
   });
   ```

4. Set up the **ConversationViewParams** with the Campaign Information.

   ```java
   // Create new ConversationViewParams
   ConversationViewParams params = new ConversationViewParams();
   // Set Campaign Info
   params.setCampaignInfo(campaign);
   // Set Mode
   params.setReadOnlyMode(false);
   ```

5. Start a new Conversation:

   ```java
   // Show Conversation - Activity Mode
   LivePerson.showConversation(MessagingActivity.this, authParams, params);
   
   // or when using a fragment

   // Show Conversation - Fragment Mode
   mConversationFragment = (ConversationFragment) LivePerson.getConversationFragment(authParams, params);
   ```
 

The SDK supports two operation modes:

* Activity.

* Fragment.

_**Note: For more information about each mode, refer to [Step 3: Code integration for basic deployment](android-quickstart.html#step-3-code-integration-for-basic-deployment).**_

To start LivePerson's Activity mode:

```java
LivePerson.showConversation(Activity activity, LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
```

To start LivePerson's Fragment mode: (Attach the returned fragment to a container in your activity) :

```java
LivePerson.getConversationFragment( LPAuthenticationParams lpAuthenticationParams, ConversationViewParams params‎);
```

When using fragment mode, you could use the provided SDK callbacks in your app in order to implement functionalities such as menu items, action bar indications, agent name, and typing indicator.


**Shut Down**

Close LivePerson Messaging SDK- Uninitialized SDK without cleaning data.

```java
public static void shutDown(final ShutDownLivePersonCallback shutdownCallback)
```

Click [here](android-shutdown.html) for more information.

**Logout**

Close LivePerson Messaging SDK- Clear LivePerson Messaging SDK data and unregister push.

```java
public static void logOut(final Context context, final String brandId, final String appId, final LogoutLivePersonCallback logoutCallback)
```

Click [here](android-logout.html) for more information.
