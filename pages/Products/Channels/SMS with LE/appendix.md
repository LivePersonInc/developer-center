---
title: Appendix
level1: Solutions
level2: Channels
level3: SMS with LiveEngage
permalink: sms-with-liveengage-appendix.html
order: 41
indicator:
---
### Additional/Miscellanious Best Practices

Based on our messaging expertise and know-how, here are the best practices that we suggest to make SMS more successful for your brand. See below for links to additional best practices for messaging resources.

**Preventing network filtering for outbound and IVR entry-points**

Brands in North America will need to purchase short-codes instead of regular long-code phone numbers if sending outbound SMS messages from an IVR or partner tool.  This is to prevent 'Carrier Filtering' (a process in which networks block long-code numbers if they are used as an outbound channel for 200 or more messages a day).

**Friendly names / vanity shortcodes:**

Friendly names such as *'1(800) New Home*' and vanity shortcodes such like '*Realty*' are not ideal for SMS messaging since most handsets do not display the 10 digit keypad when setting the recipient of a text message.  Instead, the consumer sees a regular keyboard. Therefore we recommend that brands use and advertize regular format numbers.

**Re-purposing existing numbers**

It is possible to take an existing 1(800) number or other business number and 'port' the SMS capabilities across to Twilio so that it can be connected to your LiveEngage account.  It is recommended that you first look at your telephony reports and logs for that number and determine whether text messages are already being sent to it and the types of messages being sent.  Brands should particularly do this if these messages are not being answered today as many brands begin text-enabling a number that has been published for years, only to find that it receives a high volume of junk or spam messages.  This should be evaluated on a case by case basis as it may be more practical and efficient to purchase a dedicated number.

**Different numbers for skill routing**

LiveEngage offers the ability to route SMS messages sent to different phone numbers to their own individual skill.  Numbers can map one to one (one number routes to one skill) or many to one (many numbers route to one skill).  Number-to-skill routing can be used to deliver the right messages to the right agents. It is also key, when evaluating the impact and success of different entry-points, in understanding how a consumer was targeted by the number that they texted.

**Conversation security, consumer authentication**

To help brands navigate security challenges, minimize risk to a brand and its consumers, the LivePerson Technical Services team are able to partner with you to build a custom ID&V widget to suit your needs.  The ID&V widget allows agents to send a single-use form to the consumer with questions such as "provide the second and fourth digit of your security passcode and the fourth and fifth digit of your mother’s maiden name." While ID&V does not physically secure the conversation or authenticate the consumer, it does enable the agent to confirm the consumer's identity without requesting or recording any sensitive information in the body of the conversation transcript. To find out more about ID&V and how your brand can leverage it to enhance and extend your use-cases, please contact your account team.

**Data Masking**

While LiveEngage's custom ID&V solution provides a means for exchanging such sensitive data securely, it doesn't prevent consumers from unintentionally sharing such data in the body of their conversation.  The LiveEngage integration with the Twilio framework provides a solution for this in the form of Twilio functions which can be used to mask sensitive data from the conversation [Click here to read more on this solution.](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Messaging/Enhancing+SMS+experience+with+Twilio+Functions.pdf){:target="_blank"}

**System Messages**

Business requirement for many brands include the ability to send automated responses to consumers for a variety of reasons, including but not limited to:

* TCPA compliance agreement

* Off-hours notifications

* Expectation setting for SLA's (first time consumers)

* Although system messages are not yet available as features within LiveEngage, all of the above can be achieved with Twilio functions [Click here to read more.](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Messaging/Enhancing+SMS+experience+with+Twilio+Functions.pdf){:target="_blank"}
