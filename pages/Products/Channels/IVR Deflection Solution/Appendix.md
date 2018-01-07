---
title: Appendix
level1: Solutions
level2: Channels
level3: IVR Deflection Solution

order: 3

permalink: products-channels-ivr-deflection-solution-appendix.html
indicator:
---

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