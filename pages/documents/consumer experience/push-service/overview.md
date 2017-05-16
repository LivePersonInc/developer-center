---
title: Overview
Keywords:
level1: Documents
level2: Guides
level3: Push Notification Service (iOS and Android)

level-order: 7
order: 10
permalink: push-service-overview.html
root-link: true
---
### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* pusher 

In-app messaging provides brands with the ability to provide their customers with an ongoing, continuous conversation that takes place on their time.  For in-app messaging to be successful, push notifications must be configured in order to send customers incoming messages when they are not inside the app.

![PushServices](img/pushservices.png)

LivePerson’s push service interfaces directly with Apple’s APNS and Google’s GCM push notification services. For brands who wish to refrain from sharing their tokens/certificates, LivePerson offers the option to configure their push to the URIs of their choice and to utilize their own logic.

