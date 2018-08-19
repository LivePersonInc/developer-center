---
title: IVR Deflection for Chat
redirect_from:
  - products-channels-ivr-deflection-solution-introduction.html
keywords: ['IVR', 'IVR Deflection', 'IVR Deflection for Messaging']
sitesection: Solutions
level2: Channels
level3: IVR Deflection
order: 20
permalink: ivr-deflection-ivr-deflection-for-chat.html
indicator: chat
---
### How the IVR Deflection Solution Works

The diagram below illustrates the flow of the IVR Deflection Solution:

![IVR2](img/ivr2.png)

If an engagement is available, the IVR Engagement API returns a URL to start the chat. Thus, when consumers initiate a voice call, the IVR system can check engagement availability and, if available, provide consumers with the option to press a number and move to mobile messaging. When selecting this option, consumers receive a link via SMS, which they can click to start chatting with an agent without having to wait on hold.

In some cases, brands can choose to skip the availability check and provide the option to move to mobile messaging regardless using a static link. In this this case, it is the brand’s responsibility to ensure that their service center is properly staffed.

In addition to cost-effectiveness over voice, live messaging and chat interactions have also been proven to drive higher CSAT. In a [study
conducted by [Amdocs](http://www.amdocs.com/news/pages/amdocs-survey-improved-proactive-care-mobile-self-service-tools.aspx){:target="_blank"}, 76% of consumers say they prefer to communicate with brands via mobile messaging. However, 92% of interactions with brands are still conducted over the phone.

The LivePerson IVR Deflection Solution provides brands with the opportunity to facilitate consumers who have already dialed their service number with the option to move their interaction to mobile chat.

Providing consumers with a digital choice lowers the volume of calls connected with agents, decreases the length of call queues, and provides an overall improved customer experience.

![IVR1](img/ivr1.png)

This document outlines the LivePerson solution for deflecting calls from within the IVR into mobile chat.

### Benefits of the IVR Deflection Solution

Moving calls to mobile chat provides increased opportunities for app downloads and usage as well as future self-service. The IVR Deflection Solution enhances customer experience by providing an intelligent concierge service tailored to the customer or transaction type.

Top use cases of deflecting calls to mobile chat are for inquiries that are digital in nature. The following scenarios support the notions that IVR and voice are less ideal channels for many types of customer service and that, optimally, consumers contacting brands via phone should be migrated to mobile messaging.

* Technical inquiries regarding online accounts or digital assets, for example, password resets or account activations.

* Inquiries regarding services provided online or via mobile apps, for example, a current account balance or a bill dispute.

* Requests regarding services provided online or via mobile apps, for example, ordering checks or signing up for digital services such as automatic bill payment or alerts.

### Security Information


The LivePerson IVR Deflection Solution provides a secure environment for mobile chat between agents and consumers. For more information on how LivePerson protects your private data, refer to the LiveEngage Security Whitepaper, available upon request from your LivePerson Account Manager.

### SMS Vendors Code Examples

The following are VXML examples of sending text messages using leading SMS gateway vendors. The VXML code should be deployed in the appropriate IVR decision tree location (scenario).

**Sample flow**:

1. Prompt caller for phone number.

2. Retrieve phone number.

3. Thank caller.

4. Send request to the SMS gateway.

5. Disconnect.


### clickatell.com

```xml
	<?xml version="1.0" encoding="UTF-8"?>
	<vxml version = "2.1">
	<form>
	<var name="msg" expr="'Please click this URL to chat with an agent http://bit.ly/1FqRKyT'"
	<field name="user" type="digits">
	<audio src="http://s3.amazonaws.com/lpivr/voice/presspound.mp3" fetchhint="prefetch"
	<filled>
	<audio src="http://s3.amazonaws.com/lpivr/voice/thank+you+after+pressed+1.mp3" fetchhint="prefetch"
	<data ecmaxmltype="e4x" name="SendSMS" srcexpr="'http://api.clickatell.com/http/sendmsg?user=hblutrich&amp;password=<password>&amp;api\_id=<id>&amp;to=' + encodeURIComponent(user) + '&amp;text=' + encodeURIComponent(msg)"
	</filled>
	</field>
	</form>
	</vxml>
```

### Voxeo

```xml
	<?xml version="1.0" encoding="UTF-8"?>
	<vxml version = "2.1">
	<form>
	<var name="botkey" expr="<key>"
	<var name="apimethod" expr="'send'"
	<var name="msg" expr="'Please click this URL to chat with an agent http://bit.ly/1IAVehP'"
	<var name="network" expr="'SMS'"
	<var name="from" expr="3477733852"
	<field name="user" type="digits">
	<audio src="http://s3.amazonaws.com/lpivr/voice/presspound.mp3" fetchhint="prefetch"
	<filled>
	<audio src="http://s3.amazonaws.com/lpivr/voice/thank+you+after+pressed+1.mp3" fetchhint="prefetch"
	<data name="SendSMS" srcexpr="'http://<user>:<password>@api.messaging.staging.voxeo.net/1.0/messaging?botkey=' + encodeURIComponent(botkey)+ '&amp;apimethod=' + encodeURIComponent(apimethod) + '&amp;msg=' + encodeURIComponent(msg) + '&amp;user=' + encodeURIComponent(user) + '&amp;network=' + encodeURIComponent(network) + '&amp;from=' + encodeURIComponent(from)"
	</filled>
	</field>
	</form>
	</vxml>
```
