---
title: Overview
redirect_from:
  - rt-interactions-ivr-engagement-overview.html
level1: Documents
level2: Real Time Interactions
level3: IVR Engagement API

level-order: 3
order: 1
permalink: ivr-engagement-api-overview.html
root-link: true
indicator: chat
---
### Introduction

In addition to cost-effectiveness over voice, live messaging and chat interactions have also been proven to drive higher CSAT. In a study conducted by Amdocs, 76% of consumers say they prefer to communicate with brands via mobile messaging. However, 92% of interactions with brands are still conducted over the phone.

The LivePerson IVR Deflection Solution provides brands with the opportunity to facilitate consumers who have already dialed their service number with the option to move their interaction to mobile messaging.

Providing consumers with a digital choice lowers the volume of calls connected with agents, decreases the length of call queues, and provides an overall improved customer experience.

<img src="img/ivrengagement1.png" alt="IVREngagement1" style="max-width:230px;max-height:700px;"> <img src="img/ivrengagement2.png" alt="IVREngagement2" style="max-width:230px;max-height:700px;"> <img src="img/ivrengagement3.png" alt="IVREngagement3" style="max-width:230px;max-height:700px;">

The IVR API exposes the ability to check the eligibility and availability of an engagement for a specific consumer. This means that when the IVR system wants to suggest to a caller to continue the service via chat, it will use the API in order to trigger an IVR chat engagement.

Using the API can be very helpful in reducing the volume of your voice calls by implementing a simple IVR deflection solution that will send chat invite links to voice callers, and improve the call center total conversions.

Before getting started with the IVR API, set up a LiveEngage campaign with an IVR engagement following the steps listed below:

1. Create an engagement and select the IVR as the source.

2. Configure the landing page URL to which consumers will be redirected after clicking on the link attached to the SMS.

	* The page must contain the LiveEngage tag.

	* The page should be a simple page with limited content so that it loads quickly.

3. Copy the static link, as shown below, if choosing to skip the availability check.

3. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html){:target="_blank"}

![IVR Guide](img/ivr.png)

From there, follow the instructions found in the rest of this document to use the IVR API.

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* smt

2. This API requires authorization using API key.

	* [Follow these instructions](guides-gettingstarted.html){:target="_blank"}, to create and use an API key.

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

**Benefits of the IVR Deflection Solution**

Moving calls to mobile messaging provides increased opportunities for app downloads and usage as well as future self-service. The IVR Deflection Solution enhances customer experience by providing an intelligent concierge service tailored to the customer or transaction type.

Top use cases of deflecting calls to mobile messaging are for inquiries that are digital in nature. The following scenarios support the notions that IVR and voice are less ideal channels for many types of customer service and that, optimally, consumers contacting brands via phone should be migrated to mobile messaging.

* Technical inquiries regarding online accounts or digital assets, for example, password resets or account activations.

* Inquiries regarding services provided online or via mobile apps, for example, a current account balance or a bill dispute.

* Requests regarding services provided online or via mobile apps, for example, ordering checks or signing up for digital services such as automatic bill payment or alerts.

In addition to this API, please see [IVR Call Deflection document](products-channels-ivr-deflection-solution-introduction.html){:target="_blank"}. For more detailed information on setting up IVR engagements (a type of offsite engagement) within LiveEngage, refer to the Offsite Engagements connection area article.
