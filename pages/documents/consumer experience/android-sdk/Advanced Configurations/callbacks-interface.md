---
title: LivePerson Callbacks Interface
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: Configuration

order: 3
permalink: android-callbacks-interface.html

indicator: messaging
---

The SDK provides a callback mechanism to keep the host app updated on events related to the conversation.

There are 2 ways to register to LivePerson events:

1. Local Intents (Recommended)
2. Callbacks

#### Local Intents

You can register to specific Action or to all of them.
All the Actions are defined in LivePersonIntents.ILivePersonIntentAction Interface, all the additional data provided using Extras on the intents and defined in LivePersonIntents.ILivePersonIntentExtras Interface.
LivePersonIntents class provides several methods that help get the data out of the intent, without dealing with the Extras.
For full list of all the methods click [here](android-callbacks-index.html).

To easily register to all the intent Actions, we provide IntentFilter that already contains them all in LivePersonIntents.getIntentFilterForAllEvents().

To register BroadcastReceiver use this code:

_ Note: Those Intent are local only and must by register via LocalBroadcastManager. _

```javascript
LocalBroadcastManager.getInstance(getApplicationContext())
               .registerReceiver(<your receiver>,
                 LivePersonIntents.getIntentFilterForAllEvents());
```


```javascript
 <your receiver> = new BroadcastReceiver(){

          @Override
          public void onReceive(Context context, Intent intent) {

             Log.d(TAG, "Got LP intent event with action " + intent.getAction());
             switch (intent.getAction()){
              //handle the relevant actions from LivePersonIntents.ILivePersonIntentAction
               ...

             }

          }  
     };
 }
```

##### Callbacks

To register the callback call:

`LivePerson : public static void setCallback(final LivePersonCallback listener) `

To remove a callback:

`LivePerson : public static void removeCallBack()`

Click [here](android-callbacks-index.html){:target="_blank"} for more information.
