---
title: Setting up the IVR Deflection Solution
level1: Products
level2: Channels
level3: IVR Deflection Solution for Chat

order: 2

permalink: products-channels-ivr-deflection-solution-setting-up-ivr.html
indicator:
---

To start using the **IVR Deflection Solution for Chat**, set up a LiveEngage campaign with IVR engagement following the key steps listed below:

1.  Create an engagement and select the IVR as the source.

2.  Configure the landing page URL to which consumers will be redirected after clicking on the link attached to the SMS.

  * The page must contain the LiveEngage tag.

  * The page should be a simple page with limited content so that it loads quickly.

3.  Copy the static link, as shown below, if choosing to skip the availability check.

    ![IVR3](img/ivr3.png)

For detailed information on how to create a campaign, refer to the [*LiveEngage Offsite Campaigns Tutorial*](https://ce-sr.s3.amazonaws.com/CA/Campaign%20Manager/Offsite%20Engagements/70a_Engage.Anywhere.pdf){:target="_blank"}.

### Best Practices for Setting up your IVR

In order to set up your IVR, a scenario must be created by adding a modifying VXML snippet to the IVR decision tree. IVRs support the ability to decide when a scenario is presented to the visitor.

Sample scenarios can be:

* Mobile users only.

* Offer IVR deflection between 09:00 to 17:00.

* Offer IVR deflection to callers if wait time is longer than 10 min.

* Offer IVR deflection to X% of the callers.

Most modern IVRs also have built-in SMS gateways, which allow them to send or receive (SMS) transmissions. IVRs can use gateways to send chat invite links to voice callers. In cases where the IVR does not support an SMS gateway, you can configure the IVR to send SMS using 3rd party SMS gateways.

The [Appendix](products-channels-ivr-deflection-solution-appendix.html){:target="_blank"} provides 2 SMS gateway integration samples.

**The following is an example of VoiceXML 2.1 using a Voxeo IVR SMS solution and a static link:**

```xml

<?xml version="1.0" encoding="UTF-8"?>
<vxml version = "2.1">
<meta name="maintainer" content="<author email>"/>
<form>
<var name="botkey" expr="*****"/>
<var name="apimethod" expr="'send'"/>
<var name="msg" expr="'<Enter the SMS text message and the short URL here. >'"/>
<var name="network" expr="'SMS'"/>
<var name="from" expr="<sender phone number>"/>
<field name="user" type="digits">
<prompt>Please enter a your phone number including the country code and area number. To finish press the pound sign.</prompt>
<filled>
<prompt>A chat link will be send to <say-as interpret-as="vxml:phone"><value expr="user"/></say-as>. Thank you and good bye.</prompt>

```

**Note**: Other SMS providers may use a different method to send SMS text messages.

### Impact of the IVR Deflection Solution on Existing Functionality

The table below illustrates the impact of this feature upon LiveEngage
users.

| User             | Impact                                                                                                                                                                                                                                                |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Campaign Manager | The Visits KPI (which is found in the Campaign Manager Data Bar and is used to track website visitors) will not track the voice callers who called the IVR. Instead, it will begin tracking visitors who clicked on the link embedded within the SMS. |
