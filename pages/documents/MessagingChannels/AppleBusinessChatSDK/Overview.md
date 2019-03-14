---
pagename: Overview
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Apple Business Chat SDK
permalink: apple-business-chat-sdk-overview.html
indicator: messaging
---

### What is the ABC SDK

The Apple Business Chat SDK is an iOS Swift framework that allows developers to easily implement a rich, interactive experience for consumers, by reacting to conversational context in real time.

The framework is very lightweight at ~450kb (release binary). It is designed to be an easy addition to any host app or iMessage app.


### What does the SDK do?

After recieveing a [Custom Interactive Message (CIM)](apple-business-chat-templates-custom-interactive-message-template.html), this SDK allows the developer to monitor the consumer behavior and report it back to LivePerson as engagement attributes to enhance the conversation.

- Report SDEs
  - Allows you to measure incremental lift and ROI from ABC conversations and LiveEngage operational tools
- More easily allows Agents to read Custom Interactive Messages from Consumers
  - Provides human and bot agents with context of the consumer’s iMessage app transactional and activity data, allowing them to have a more meaningful and effective conversation
- Notify the developer of conversational events so that they can take action with custom SDEs
  - Create data-driven integrations to external systems via the agent widget SDK

### Who is the SDK for?

Firstly, the Apple Business Chat SDK is for brands that are using or intend to use the Apple Business Chat channel to connect with their consumers.

The SDK has 2 distinctive contextual integration environments:
  - iMessage app mode (required)
  - Host app mode (optional)


### Example Use Cases

#### Consumer Transaction over iMessage App

1. Consumer is messaging an appliance brand via Business Chat 
2. Consumer is asking the agent to provide details on the delivery and installation offering for the their ovens.
3. Agent gives the consumer all the details on the delivery and installation, and consumer decides to buy both the oven and the delivery package. 
4. Agent sends the consumer an iMessage app interaction that includes all products selected in cart area, with payment flow.

Path A:

{:start="5"}
5. Consumer taps on the iMessage app and purchases the oven and delivery package 
6. Agent in LiveEngage can see the consumer transaction details in real time in the agent workspace customer info widget, and asks the consumer if they can help on other matters before closing the conversation 
7. Agent manager generates a report that looks at the weekly/monthly transaction details (values and product details) per skill/per agent, and attributes incremental conversation lift to the LE conversation 

Path B:

{:start="5"}
5. Consumer does not respond to the iMessage app transaction sent to him by the agent, and texts that agent that he still need some time to decide
6. Agent closes the conversation in LiveEngage 
7. After a couple of hours the consumer comes back to the ABC conversation and continues with the purchase flow on the iMessage app interaction - consumer does not message the brand, but only opens the iMessage app in the conversation thread 
8. LE Conversation is updated with the transaction items and value via SDEs while the conversation is closed in LiveEngage 
9. Agent manager generates a report that looks at the cross session conversation (transaction that reported after conversation closed in LE), to evaluate the correlation between consumer conversations and transactions, and to attribute incremental lift for LE conversation 

#### Consumer Transaction over Main App

1. Consumer looks for a smart door lock on brand's app
2. Consumer adds two types of door locks to the cart 
3. Brands report the product in cart and the value to LE unauthenticated SDEs
4. After an hour, the consumer taps on a link in the app that opens the Apple Business Chat conversation thread 
5. Consumer starts to message brand via ABC, the conversation is triggered in LiveEngage 
6. The human or bot agent joins the conversation and reviews the products and value added by the consumer to the cart, and can manage the conversation with full context to the consumer’s needs. 
7. The consumer decides on the product they would like to purchase and completes the payment funnel while in conversation with the agent.
    1. Another scenario is when the consumer does not decide on the product while in conversation and closed the conversation with the brand. After a couple of hours the consumer goes to the app and completes the purchase flow. 
8. Once payment is complete, the brand reports the transaction value and product info as SDEs, and the agent can view the purchase info in real time in the agent workspace 
    1. Or if the purchase was performed after the conversation, the SDE will be assigned to the conversation and will be reported in conversation reports. 
9. The agent manager reviews the weekly LE report on agent conversations, and can review the agent’s conversion rates (in session or cross session). 
