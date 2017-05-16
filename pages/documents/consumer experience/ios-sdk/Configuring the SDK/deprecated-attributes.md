---
title: Deprecated Attributes
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: Customization and Branding

order: 225
permalink: consumer-experience-ios-sdk-deprecated-attributes.html

---

Listed below are attributes that have been deprecated. These keys should no longer be used as LPConfig files, but rather as Localized strings keys. The names of these keys in the Localization files remain the same as in the LPConfig files.

In order to configure different string for this key, see String localization in SDK.

*Note: By default, these keys are configured with Localization keys values, and are sensitive to any language changes.  These keys must be reconfigured each time a language is changed.*

| Attribute name | Type | Description |
| :--- | :--- | :--- |
| customButtonDescription | string | Accessibility voiceover string for the custom button. |
| readReceiptTextDistributed | string | Text for distributed indication. |
| csatResolutionFeedbackText | string | Text for the feedback label. |
| csatResolutionQuestionText | string | Text for the resolution confirmation question. |
| readReceiptTextSent | string | Text for sent indication. |
| readReceiptTextRead | string | Text for read indication. |
| readReceiptTextSending | string | Text for sending indication. |
| sendButtonDisabledTextColor | UIColor | Send button color in disabled mode in the conversation screen. |
| sendButtonEnabledTextColor | UIColor | Send button color in enabled mode in the conversation screen |
| editTextUnderlineColor | UIColor | User text underline color |
