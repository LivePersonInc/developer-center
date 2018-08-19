---
title: Control History APIs
redirect_from:
  - consumer-experience-ios-sdk-advanced-control-history-android.html
Keywords:
sitesection: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for Android
level4: Advanced Features
order: 292
permalink: mobile-app-messaging-sdk-for-android-advanced-features-control-history-apis.html
indicator: messaging
---

### Overview

The Control History APIs allow brands to decide which historical or current conversations will be presented to the consumer when opening the conversation screen.

These APIs can be used when calling the method showConversation. Using the APIs, brands can control which conversations to present every time that the conversation window is presented.

The conversations can be filtered by:

* Conversation status (open/closed/all)

* Conversation date - by days (e.g. conversations from the past 14 days)


### Using the APIs

#### Parameters

There are three relevant fields in ConversationViewParams:

```java
public class ConversationViewParams{
  boolean viewOnlyMode = false;
  CampaignInfo mCampaignInfo;
  LPConversationsHistoryStateToDisplay mHistoryConversationsStateToDisplay = LPConversationsHistoryStateToDisplay.ALL;
  LPConversationHistoryMaxDaysDateType mHistoryConversationMaxDaysType = LPConversationHistoryMaxDaysDateType.startConversationDate;
  int mHistoryConversationsMaxDays = -1;
}
```


* `LPConversationsHistoryStateToDisplay` - Using this parameter, brands can decide if to present open conversations, closed conversations or all conversations.

```java
public enum LPConversationsHistoryStateToDisplay {
  OPEN, CLOSE , ALL
}
```

* `mHistoryConversationsMaxDays` - Using this parameter, brands can choose how much conversation history will be presented to the consumer by days. Not providing a value will allow consumers to see the entire history stored on LivePerson's servers (by scrolling down to see additional conversations).

* `LPConversationHistoryMaxDaysDateType`

```java
public enum LPConversationHistoryMaxDaysDateType {
  startConversationDate, endConversationDate
}
```

When using `mHistoryConversationsMaxDays`, brands can also use `LPConversationHistoryMaxDaysDateType` in order to decide whether to count the days from the conversation start date or end date. If a value is not provided, the start date will be the default.

#### Code Sample

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

* In case there are no conversations matching the provided filter, an empty state will be presented with a message (default is "There are no conversations at this time"). The UI elements of the state can be configured - in order to change the text, change the value of `conversationEmptyState` (iOS) or `lp_history_control_api_empty_state` (Android) parameters. In order to change the text color, change `LPConfig → conversationEmptyStateTextColor` (iOS). Text color cannot currently be changed on Android.

* When opening the window with closed conversations only , the window will be opened as a view only mode.

* Every message which will arrive from the agent or will be sent by the consumer will remove the filter and conversations will be presented as if no filter was applied.
