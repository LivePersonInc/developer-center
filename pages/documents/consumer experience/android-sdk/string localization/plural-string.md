---
title: Plural String Resource Example
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for Android
level4: String Localization

order: 272
permalink: android-plural-string.html

indicator: messaging
---

Following is an example on how to add a plural string resource:

```javascript
<plurals name="lp_ttr_message_hours">
	<item quantity="one">" %1$s hour"</item>
	<item quantity="other">" %1$s hours"</item>
</plurals>
```