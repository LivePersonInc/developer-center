---
pagename: Bring Your Own Payments
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversational payments
permalink: conversation-builder-conversational-payments-bring-your-own-payments.html
indicator: both
---

### Introduction
Payments are an important part of eCommerce transactions, and it’s likely that you’ve been using one or more, well-tested payment systems as a part of your eCommerce operations for a long time. As you move from eCommerce to cCommerce (Conversational Commerce), it’s natural for you to want to leverage these payment systems (PayPal, WePay, Stripe, Square, etc.)  and related integrations in which you’ve invested. For example, you might have a complex checkout flow that you want to reuse, or a loyalty program that you want to continue. To help with the transition from eCommerce to cCommerce and to meet this need, LivePerson offers a feature known as “Bring Your Own Payments” or BYOP.

BYOP is a simple integration feature that connects your existing payment system to LivePerson’s Conversational AI within the conversational flow.

### The consumer experience
With BYOP, the consumer’s cCommerce experience is similar to that in eCommerce transactions.

In mobile messaging channels, the payment form is displayed as a pop-up. Once the consumer enters their credit card information and submits the form, the form closes, and the consumer is returned to the main conversation. This experience is shown below:

<img style="width:350px" src="img/ConvoBuilder/byop1.png" alt="The experience of entering credit card info as a consumer">

In the Web channel, the payment form is displayed in a non-intrusive, slide-out window. Here again, once the consumer submits the form, the form closes, and the consumer is returned to the main conversation. This experience is shown below:

<img style="width:650px" src="img/ConvoBuilder/byop2.png" alt="The Payment Form being displayed for the consumer in a window that slides out from the main conversation window">

### The end-to-end flow
1. During the conversation, the consumer selects the item to pay for. The bot presents the total amount and asks for the consumer’s confirmation to pay. 
2. The bot presents the consumer with a link or button to a payment form hosted by you.
3. The consumer clicks the link or button that presents the form. 
4. The consumer provides their credit card information: name, credit card number, expiry date and CVC number. Then they submit the information to your payment service. Along with the credit card data, metadata such as SKU number, total amount and context data (user id, bot id and conversation id) is sent to your system.
5. Your payment service processes the payment and calls back the bot by invoking LivePerson’s Callback Service (our [external Web forms integration API](conversation-builder-integrations-web-view-integration-api.html)) .
6. The Callback Service returns the consumer to the appropriate place in the conversation. The transaction’s success or failure and the order details received from your payment system are sent to the consumer.

<img style="width:800px" src="img/ConvoBuilder/byop3.png" alt="The end-to-end flow diagram for conversational payments">

### Privacy
In a BYOP implementation, the consumer’s credit card information is never stored in LivePerson’s environment. The payment form is hosted in your secure environment. The bot simply fetches the form and presents it to the consumer. The data entered by the consumer is submitted directly to your system.

### Setup
BYOP’s Callback Service is implemented using our [external Web form integrations API](conversation-builder-integrations-web-view-integration-api.html). Learn more with [this detailed tutorial](tutorials-guides-advanced-integrations-implementing-a-web-view-integration.html).

**Implementation tip**: The slide-out window shown farther above is achieved using the “Slideout” option in the button settings of a [Structured](conversation-builder-interactions-questions.html#structured-questions) or [Button](conversation-builder-interactions-questions.html#button-questions) question. Take advantage of this option (in the **Target** setting in specific). It affords a tightly integrated and attractive consumer experience; therefore, it’s often preferred in a cCommerce scenario.