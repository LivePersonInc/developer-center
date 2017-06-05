---
title: Release Notes
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for iOS

order: 243
permalink: consumer-experience-ios-sdk-release-notes.html
---
### In-App Messaging SDK Version 2.3.1

In-App Messaging SDK v2.3.1 for iOS contains the following bug fix:

#### Symptom:
For one minute after the consumer has navigated away from the conversation window, any arriving messages will not display. They will only appear in the conversation window after the minute has passed.

#### Fix:
The following capability which was first introduced in v2.3 has been disabled to avoid this bug : “Presence enablement for photo sharing - beta*”.
