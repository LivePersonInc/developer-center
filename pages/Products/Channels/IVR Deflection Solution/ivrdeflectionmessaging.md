---
pagename: IVR Deflection
redirect_from:
  - products-channels-ivrmessaging.html
sitesection: Solutions
categoryname: Channels
documentname: IVR Deflection
root-link: true
permalink: ivr-deflection-ivr-deflection.html
order: 10
indicator: messaging
---

### Overview

One of the SMS use cases with the highest potential consumer usage is IVR Deflection. In this use case the brand suggests to a consumer to start a messaging conversation instead of staying on hold. If the consumer accepts, he receives a notification on a messaging channel (SMS, Facebook or in-app), where he can continue the conversation in an asynchronous interaction.

In this section, we will explain the different possible solutions for achieving successful IVR deflection with messaging, and will review the required architecture. In addition, we will provide some best practices for how to implement the solution in the most efficient manner.

### Prerequisites

Prior to implementation, there are a few things which need to be analyzed and prepared:

* Identifying the branches that you would like to target. Review their traffic and estimate the potential deflection volumes

* Defining the goals for the solution. What are you target deflection volumes?

* Mapping the relevant skills needed for the chosen branches.

* Decide on the phone number(s) you would like to use in the case of SMS integration.

### Criteria for selecting the relevant branches

* Volume

* Customer interaction patterns

* Typical resolution flow for the most common cases. If the key issues are simple or repetitive, and can be used without asking for too many details, they can be ideal candidates for deflection.

### Implementation options

IVR deflection scenarios can be implemented in many different ways, and with different solutions such as SMS, Facebook Messenger or even Mobile App Messaging. The right solution can be chosen based on the use-case, target market and available technologies.

The in-app based solution means that the consumer will be offered to continue the conversation in your mobile app. The app is the ideal channel for communication as it drives the highest engagement and allows for a more personal and dedicated experience.

When the consumer accepts the deflection option he will receive a push notification. The push notification will direct him to the messaging screen within the app and he can immediately start typing with the brand. Once the consumer types his first message, a conversation will be initiated within LiveEngage and routed to the most relevant agent(s).

### Configuration

The IVR deflection implementation is comprised of several steps, both on LivePerson’s side and the brand’s. On a high-level the integration is about connecting the IVR system on the specific branches of the IVR tree. The deflection requires connectivity either to a SMS gateway (Twilio) or to your push notifications service (in-app).

### Implementing IVR Deflection with SMS and Facebook Messenger

In order to connect the IVR system to the SMS messaging solution, you will need to first develop the IVR message that the consumer will be offered during the deflection, and second, connect the IVR to Twilio for triggering the deflection message. Facebook Messenger can be leveraged as the main channel for integration if a link to Facebook Messenger is embedded in the first SMS message.

The overall flow looks like the following:

![IVR Map](img/ivrmap.png)


1. Consumer calls customer care and reaches the IVR system. He reaches a certain branch that was selected for deflection, and hears the offer to deflect (e.g. "Instead of waiting on line, you can also connect with us using text messaging. It will allow you to go about your day, with our representative getting in touch with you to update you on your issue. Click 1 to gain back your time and start messaging with us now.")

2. If the consumer accepts the offer, the IVR system will connect to Twilio and trigger the initial SMS message.

3. The consumer receives the SMS message which greets him and sets the expectation (e.g. "Thank you for choosing to connect with us via SMS messaging. Please type your issue and we will be with you shortly").

4. The consumer types his message and a new conversation is created in LiveEngage.

Twilio APIs are very simple and straightforward. Your brand will need to establish a connection and send the initial SMS message. See the example of the API for messaging below:

```java
// Install the Java helper library from twilio.com/docs/java/install
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

public class Example {
  // Find your Account Sid and Token at twilio.com/user/account
  public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  public static final String AUTH_TOKEN = "your_auth_token";

  public static void main(String[] args) {
    Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

    Message message = Message
        .creator(new PhoneNumber("+15558675309"), new PhoneNumber("+15017250604"),
        	"This is the ship that made the Kessel Run in fourteen parsecs?")
        .setMediaUrl("https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg")
        .create();

    System.out.println(message.getSid());
  }
}
```
The example can be found in Twilio’s documentation:

[https://www.twilio.com/docs/api/rest/sending-messages](https://www.twilio.com/docs/api/rest/sending-messages){:target="_blank"}

For the complete Twilio Rest API documentation please refer to:

[https://www.twilio.com/docs/api/rest](https://www.twilio.com/docs/api/rest){:target="_blank"}

### Implementing IVR Deflection with Mobile App Messaging

The best approach for implementing deflection is to do so within the brand’s app.  It drives traffic to the app where additional self-service tools can be offered and, in most cases, it also leads to highest consumer engagement.

Implementing the flow with Mobile App Messaging means the consumer will receive a push notification if he accepts the deflection offer in the IVR. In order to achieve this, the IVR should connect to your brand’s push notification service and trigger the push message with the relevant deflection message. This integration should be relatively straightforward and based on the technology used within the company.

Since not all consumers have the app, the best practice would be to send push notifications only to active users (or consumers that have already enrolled for your mobile app, even if they are not actively using it), and use SMS and Facebook Messenger for all the others. This requires a development effort for querying a database that includes this information on the consumer’s base.

### Ensuring the best consumer experience

In order to ensure that consumers receive a response in the same thread brands need to ensure that the initial text be sent to a full format number e.g. +1(000) 000-0000. Numbers cannot be in toll free number format, otherwise the thread will break.

Notice the use of:

* The + sign

* The country code: 1

* Brackets around the area code (000)

* Dash between the final two number groups 000-0000

### Optimizing the solution

#### Setting consumer expectations

Setting consumer expectations throughout the flow is key for successfully transitioning more calls and achieving higher customer satisfaction. A few important aspects to take under consideration:

* Consumers send millions of SMS  to one another today. The B2C messaging experience is not yet fully perceived as a messaging channel, hence there’s a greater importance for setting expectations with the consumers.

* Setting expectations throughout the funnel is key. For example, it’s not enough to mention it in the IVR or in the first message alone. The brand should ensure that the consumers understand the SLA throughout the conversation, not only in the beginning of the conversation. An additional example is the usage of ID&V - it affects the funnel and agents should handle it carefully by explaining what it is for, its ease and its speed.

* The percent of repeating customers can be used as an indicating measurement for messaging containment. This metric, when monitored, can help in understanding how many consumers are actually returning to this channel instead of calling. For full containment analysis, the messaging data should be analyzed against the call data across a significant time frame (at least three months).

* The art of consumer expectation is a combination of System Tools and Procedures along with Agent Trainings. The journey is not just about messages but also about how Agents communicate with the consumers.
