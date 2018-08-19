---
title: Upgrade Guide - Android
redirect_from:
  - consumer-experience-android-sdk-upgrade-guide.html
Keywords:
sitesection: Documents
level2: Consumer Experience
level3: Mobile App Messaging SDK for Android
level4: Appendix
order: 342
permalink: mobile-app-messaging-sdk-for-android-appendix-upgrade-guide-android.html
indicator: messaging
---

### Upgrading to SDK 3.0

This document contains guides on how to upgrade from previous versions of the SDK to 3.0.

#### Android Studio Version

LP Messaging SDK 3.0 requires Android Studio 3.0 to build.

#### Gradle Version

LP Messaging SDK 3.0 uses Gradle 3.0.1.

##### Updating Gradle configuration

- gradle-wrapper.properties

    ```
    # change to gradle wrapper 4.1
    distributionUrl=https\://services.gradle.org/distributions/gradle-4.1-all.zip
    ```

* project-level build.gradle

```gradle
dependencies {
    // ensure dependencies contains gradle:3.0.1
    classpath 'com.android.tools.build:gradle:3.0.1'
}

repositories {
    // ensure repositories include google()
    google()
}
```

* app-level build.gradle

```gradle
android {
    // It is no longer necessary to specify a buildToolsVersion with gradle 3
}

dependencies {
    // SDK 3.0 requires com.android.support:appcompat-v7:25.3.1
    compile 'com.android.support:appcompat-v7:25.3.1'
}
```

### Deprecated Methods

LP Messaging SDK 2.7 introduced new versions of the `LivePerson.showConversation()` and `LivePerson.getConversationFragment()` methods.

As such if you are upgrading from any version older than 2.7.0, or if you are still using the deprecated methods in a 2.7.x+ application, you will need to adjust how you show the conversation activity or fragment by passing in a [`LPAuthenticationParams`](android-interface-definitions.html#lpauthenticationparams)  object and a `ConversationViewParams` object:

`new ConversationViewParams(boolean readOnlyMode)`


- `LivePerson.showConversation()` - [documentation](android-methods.html#showconversation-with-full-authentication-support)

```java
	if (cbAuth.isChecked()) {
		// LivePerson.showConversation(MainActivity.this, authToken);
		LivePerson.showConversation(MainActivity.this, new LPAuthenticationParams().setHostAppJWT(authToken), new ConversationViewParams(false));
	} else {
		//  LivePerson.showConversation(MainActivity.this);
		LivePerson.showConversation(MainActivity.this, new LPAuthenticationParams(), new ConversationViewParams(false));
	}
```

- `LivePerson.getConversationFragment()` - [documentation](android-methods.html#getconversationfragment-with-full-authentication-support)

```java
	if (cbAuth.isChecked()) {
		// LivePerson.getConversationFragment(authToken);
		LivePerson.getConversationFragment(new LPAuthenticationParams().setHostAppJWT(authToken), new ConversationViewParams(false));
	} else {
		//  LivePerson.getConversationFragment();
		LivePerson.getConversationFragment(MainActivity.this, new LPAuthenticationParams(), new ConversationViewParams(false));
	}
```

### Step by Step

1. Remove the existing SDK version

    - File > Project Structure > remove lp_messaging_sdk

    - delete the lp_messaging_sdk folder from application root

2. Update Gradle configuration as described above.

3. Add the new SDK version

    - File > New > Import Module > new lp_messaging_sdk

4. Change deprecated methods, as described above.
