---
title: Overview
Keywords:
level1: Documents
level2: Guides
level3: Push Notification Service

level-order: 7
order: 10
permalink: push-notification-service-overview.html
root-link: true
indicator: messaging
---

*Note* - the push service is available only for customers using the Mobile App Messaging SDK, for [iOS](https://developers.liveperson.com/consumer-experience-ios-sdk-overview.html) or [Android](https://developers.liveperson.com/android-overview.html).

### Introduction

Mobile App Messaging provides brands with the ability to provide their customers with an ongoing, continuous conversation that takes place on their time.  For Mobile App Messaging to be successful, push notifications must be configured in order to send customers incoming messages when they are not inside the app.

![PushServices](img/pushservices.png)

LivePerson’s push service interfaces directly with Apple’s APNS and Google’s GCM push notification services. For brands who wish to refrain from sharing their tokens/certificates, LivePerson offers the option to configure their push to the URIs of their choice and to utilize their own logic.

### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* pusher

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html){:target="_blank"}
