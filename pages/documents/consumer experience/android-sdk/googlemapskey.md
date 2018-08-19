---
pagename: Google Maps Key
redirect_from:
  - google-maps-key.html
Keywords:
sitesection: Documents
categoryname: Consumer Experience
documentname: Mobile App Messaging SDK for Android
subfoldername: Configuration

order: 94
permalink: mobile-app-messaging-sdk-for-android-configuration-google-maps-key.html

indicator: messaging
---

The Structured Content feature in the SDK uses Google Maps to display maps. If the host app requires this feature, it needs to set its own Google Maps key.
The key can be set to string **lp_google_maps_key** in the host app **branding.xml** file and the SDK will use this key.

For example:

```xml
<string name="lp_google_maps_key">WIdew3245ERsdfsdgretwemyMgF5</string>
```

The SDK's manifest uses internally a _**meta-data**_ tag block with _**com.google.android.maps.v2.API_KEY**_. If the host app uses the same meta-data block it needs to add a 'replace' value parameter.
For example:

```xml
<meta-data
  android:name="com.google.android.maps.v2.API_KEY"
  android:value="WIdew3245ERsdfsdgretwemyMgF5"
  tools:replace = "value"/>
```
