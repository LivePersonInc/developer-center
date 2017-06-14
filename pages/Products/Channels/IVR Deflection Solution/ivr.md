---
title: Introduction
level1: Products
level2: Channels
level3: IVR Deflection Solution

order: 1
level-order: 2
root-link: true
permalink: products-channels-ivr-deflection-solution-introduction.html
indicator:
---

In addition to cost-effectiveness over voice, live messaging and chat interactions have also been proven to drive higher CSAT. In a [study
conducted by Amdocs](http://www.amdocs.com/news/pages/amdocs-survey-improved-proactive-care-mobile-self-service-tools.aspx){:target="_blank"}, 76% of consumers say they prefer to communicate with brands via mobile messaging. However, 92% of interactions with brands are still conducted over the phone.

The LivePerson IVR Deflection Solution provides brands with the opportunity to facilitate consumers who have already dialed their service number with the option to move their interaction to mobile messaging.

Providing consumers with a digital choice lowers the volume of calls connected with agents, decreases the length of call queues, and provides an overall improved customer experience.

<img src="img/ivr1.png" alt="IVR1" width="577" height="565"

![IVR1](img/ivr1.png)

This document outlines the LivePerson solution for deflecting calls from within the IVR into mobile messaging.

### Benefits of the IVR Deflection Solution

Moving calls to mobile messaging provides increased opportunities for app downloads and usage as well as future self-service. The IVR Deflection Solution enhances customer experience by providing an intelligent concierge service tailored to the customer or transaction type.

Top use cases of deflecting calls to mobile messaging are for inquiries that are digital in nature. The following scenarios support the notions that IVR and voice are less ideal channels for many types of customer service and that, optimally, consumers contacting brands via phone should be migrated to mobile messaging.

* Technical inquiries regarding online accounts or digital assets, for example, password resets or account activations.

* Inquiries regarding services provided online or via mobile apps, for example, a current account balance or a bill dispute.

* Requests regarding services provided online or via mobile apps, for example, ordering checks or signing up for digital services such as automatic bill payment or alerts.

### Security Information


The LivePerson IVR Deflection Solution provides a secure environment for mobile messaging between agents and consumers. For more information on how LivePerson protects your private data, refer to the LiveEngage Security Whitepaper, available upon request from your LivePerson Account Manager.

### How the IVR Deflection Solution Works


The diagram below illustrates the flow of the IVR Deflection Solution:

![IVR2](img/ivr2.png)

Brands can now view the eligibility and availability of engagement from IVR systems using [*IVR Engagement API*](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/API+Guides/IVR+Deflection+External+Engagement+API.pdf){:target="_blank"}. If an engagement is available, the IVR Engagement API returns a URL to start the chat.

Thus, when consumers initiate a voice call, the IVR system can check engagement availability and, if available, provide consumers with the option to press a number and move to mobile messaging. When selecting this option, consumers receive a link via SMS, which they can click to start chatting with an agent without having to wait on hold.

In some cases, brands can choose to skip the availability check and provide the option to move to mobile messaging regardless using a static link. In this this case, it is the brand’s responsibility to ensure that their service center is properly staffed.

