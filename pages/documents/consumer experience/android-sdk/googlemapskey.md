---
title: Google Maps Key
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: Configuration

order: 94
permalink: google-maps-key.html

indicator: messaging
---

The Structured Content feature in the SDK uses Google Maps to display maps. If the host app requires this feature, it needs to set its own Google Maps key.
The key can be set to string ```lp_google_maps_key``` in the host app *branding.xml* file and the SDK will use this key.

For example: ```<string name="lp_google_maps_key">WIdew3245ERsdfsdgretwemyMgF5</string>```

<br>
The SDK's manifest uses internally a ```<meta-data>``` block with *com.google.android.maps.v2.API_KEY*. If the host app uses the same meta-data block it needs to add a 'replace' value parameter.
For example:

```<meta-data
  android:name="com.google.android.maps.v2.API_KEY"
  android:value="WIdew3245ERsdfsdgretwemyMgF5"
  tools:replace = "value"/>```
