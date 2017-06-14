---
title: Deprecated Attributes
Keywords:
level1: Documents
level2: Consumer Experience
level3: In-App Messaging SDK for iOS
level4: Customization and Branding

order: 225
permalink: consumer-experience-ios-sdk-deprecated-attributes.html

indicator: messaging
---

Listed below are attributes that have been deprecated. These keys should no longer be used as LPConfig files, but rather as Localized strings keys. The names of these keys in the Localization files remain the same as in the LPConfig files.

In order to configure different string for this key, see String localization in SDK.

*Note: By default, these keys are configured with Localization keys values, and are sensitive to any language changes.  These keys must be reconfigured each time a language is changed.*

| Attribute name | Type | Description | Replacement |
| :--- | :--- | :--- |
| customButtonDescription | string | Accessibility voiceover string for the custom button. | Use customButtonAccessibilityDescription key in Localization languages files.
| readReceiptTextDistributed | string | Text for distributed indication. | Use readReceiptTextDistributed key in Localization languages files.
| csatResolutionFeedbackText | string | Text for the feedback label. | Use csatResolutionFeedbackText key in Localization languages files.
| csatResolutionQuestionText | string | Text for the resolution confirmation question. | Use csatResolutionQuestionText key in Localization languages files.
| readReceiptTextSent | string | Text for sent indication. | Use readReceiptTextSent key in Localization languages files.
| readReceiptTextRead | string | Text for read indication. | Use readReceiptTextRead key in Localization languages files.
| readReceiptTextSending | string | Text for sending indication. | Use readReceiptTextSending key in Localization languages files.
| sendButtonDisabledTextColor | UIColor | Send button color in disabled mode in the conversation screen. | Use sendButtonDisabledColor.
| sendButtonEnabledTextColor | UIColor | Send button color in enabled mode in the conversation screen | Use sendButtonEnabledColor.
| editTextUnderlineColor | UIColor | User text underline color | Underline is not used any more. To change background color of TextView container use inputTextViewContainerBackgroundColor.
