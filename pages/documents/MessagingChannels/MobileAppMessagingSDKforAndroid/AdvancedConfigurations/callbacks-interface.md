---
pagename: LivePerson Callbacks Interface
redirect_from:
  - android-callbacks-interface.html
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Mobile App Messaging SDK for Android
subfoldername: Configuration

order: 30
permalink: mobile-app-messaging-sdk-for-android-configuration-liveperson-callbacks-interface.html

indicator: messaging
---

The SDK provides a callback mechanism to keep the host app updated on events related to the conversation. 

You have two ways to register to LivePerson events:
* Local Intents (Recommended)
* Callbacks

### Local Intents

With Local Intents, you can register to a specific Action or all of them. 

**Tip:** You can file all Actions defined in the Interface.  You can find all the additional data for using Extras on the intents defined in the `LivePersonIntents.ILivePersonIntentExtras` Interface.

The `LivePersonIntents` class provides several methods that help get the data out of the intent, without dealing with the Extras. For a full list of all possible Intents, see [livepersonintents in Android Callbacks](android-callbacks-index.html#livepersonintents).

We have provided an `IntentFilter` that contains all the intent Actions so that you can easily register to all of them.  

To easily register to all the intent Actions, we provide an `IntentFilter` that contains them all in `LivePersonIntents.getIntentFilterForAllEvents()`.

{:.important}
These Intents are local only and, therefore, you must register them via LocalBroadcastManager.

#### Register `BroadcastReceiver` for all Intents:

```java
LocalBroadcastManager.getInstance(
  getApplicationContext()).registerReceiver(<your receiver>,
  LivePersonIntents.getIntentFilterForAllEvents()
);
```

#### Register `BroadcastReceiver` for a specific set of Intents:

```java
IntentFilter filter = new IntentFilter();
filter.addAction(LivePersonIntents.ILivePersonIntentAction.LP_ON_AGENT_DETAILS_CHANGED_INTENT_ACTION);
filter.addAction(LivePersonIntents.ILivePersonIntentAction.LP_ON_CONVERSATION_RESOLVED_INTENT_ACTION);

LocalBroadcastManager.getInstance(
  getApplicationContext()).registerReceiver(<your receiver>,filter
);
```

#### Catch the Broadcast:


```java
BroadcastReceiver <your receiver> = new BroadcastReceiver(){
  @Override
  public void onReceive(Context context, Intent intent) {
    Log.d(TAG, "Got LP intent event with action " + intent.getAction());
    switch (intent.getAction()){
      //handle the relevant actions from LivePersonIntents.ILivePersonIntentAction
      ...
    }
  }
};
```

**Note**: if you registered for multiple **Intents**, you'll have to filter each one, using a **switch**.

### Callbacks

#### Register the callback:

```java
public static void setCallback(final LivePersonCallback listener)
```

#### Remove a callback:

```java
public static void removeCallBack()
```

For more details, see [Android Callbacks](android-callbacks-index.html).
