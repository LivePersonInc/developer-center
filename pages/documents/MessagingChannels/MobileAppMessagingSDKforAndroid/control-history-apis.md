---
pagename: Control History APIs
redirect_from:
  - consumer-experience-ios-sdk-advanced-control-history-android.html
  - mobile-app-messaging-sdk-for-android-advanced-features-control-history-apis.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: SDK APIs

order: 292

permalink: mobile-app-messaging-sdk-for-android-sdk-apis-control-history-apis.html

indicator: messaging
---


The Control History APIs allow brands to decide which historical or current conversations displays to the consumer when opening the conversation screen. For example, brands can choose to present only the last 180 days of conversation history.  Use these APIs when calling `showConversation`.

You can use these APIs together with `getEngagement` (Monitoring APIs) to determine how to present conversations history according to whether there is an open conversation or not. For example, if there is no open conversation, brands can present a **View conversation history** button that displays only if the closed conversations are from the time specified, for example the last 180 days.

The APIs lets brands:

- Get an indication if there is an open conversation or not (Monitoring APIs).

- Control which conversations will be presented by status (open\closed).

- Control the time frame of presented conversations (by days).



### Parameters 

You have three relevant parameters for `ConversationViewParams`:

  - [LPConversationsHistoryStateToDisplay](#lpconversationshistorystatetodisplay)

  - [LPConversationHistoryMaxDaysDateTyp](#lpconversationhistorymaxdaysdatetyp)

  - [LPConversationHistoryMaxDaysDateType](#lpconversationhistorymaxdaysdatetype)

```java
public class ConversationViewParams{
  boolean viewOnlyMode = false;
  CampaignInfo mCampaignInfo;
  LPConversationsHistoryStateToDisplay mHistoryConversationsStateToDisplay = LPConversationsHistoryStateToDisplay.ALL;
  LPConversationHistoryMaxDaysDateType mHistoryConversationMaxDaysType = LPConversationHistoryMaxDaysDateType.startConversationDate;
  int mHistoryConversationsMaxDays = -1;
}
```


#### LPConversationsHistoryStateToDisplay
Using this parameter, brands can decide if to present open conversations, closed conversations or all conversations.

```java
public enum LPConversationsHistoryStateToDisplay {
  OPEN, CLOSE , ALL
}
```

#### LPConversationHistoryMaxDaysDateTyp

* `mHistoryConversationMaxDaysType` - has the following values: 

   * `startConversationDate`  

   * `endConversationDate`
  
   When using `mHistoryConversationsMaxDays`, LPConversationHistoryMaxDaysDateType decides if to filter by the conversations' start date or end date. When not providing a value, `startConversationDate` is the default. 

* `mHistoryConversationsMaxDays` - Brands can choose how much conversation history presents to the consumer by days. Not providing a value allows consumers to see the entire history stored on LivePerson's servers (by scrolling down to see additional conversations).

#### LPConversationHistoryMaxDaysDateType

When using `mhistoryConversationsMaxDays`, LPConversationHistoryMaxDaysDateType decides if to filter by the conversations' start date or end date. When not providing a value, `startConversationDate` becomes default.

```java
public enum LPConversationHistoryMaxDaysDateType {
  startConversationDate, endConversationDate
}
```



### Code Sample

```java
LivePerson.initialize(getApplicationContext(), new InitLivePersonProperties(brandId, appId, new InitLivePersonCallBack() {

    @Override
    public void onInitSucceed() {
        Log.i(TAG, "onInitSucceed");

        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                mConversationFragment = (ConversationFragment) getSupportFragmentManager().findFragmentByTag(LIVEPERSON_FRAGMENT);
                if (mConversationFragment == null) {
                    LPAuthenticationParams authParams = new LPAuthenticationParams();
                    authParams.setAuthKey(authCode);
                    authParams.addCertificatePinningKey(publicKey);
                    ConversationViewParams params = new ConversationViewParams()
                            .setCampaignInfo(campaignInfo)
                            .setReadOnlyMode(isReadOnly())
                            .setHistoryConversationsMaxDays(180)
                            .setHistoryConversationMaxDaysType(LPConversationHistoryMaxDaysDateType.startConversationDate)
                            .setHistoryConversationsStateToDisplay(LPConversationsHistoryStateToDisplay.ALL);

                    mConversationFragment = (ConversationFragment) LivePerson.getConversationFragment(authParams, params);

                    FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
                    ft.add(R.id.custom_fragment_container, mConversationFragment, LIVEPERSON_FRAGMENT).commit();
                }
            }
        });
    }

    @Override
    public void onInitFailed(Exception e) {
        Log.e(TAG, "onInitFailed : " + e.getMessage());
    }
}));
```

### Important Notes

* In no conversations match the provided filter, an empty state presents with a message (default is "There are no conversations at this time"). The UI elements of the state can be configured. To change the text, change the value of `lp_history_control_api_empty_state` parameters. 

* When opening the window with closed conversations only, the window opens as a view only mode.

* Every message that arrives from the agent or sent by the consumer removes the filter and the conversations present as if no filter was applied.
