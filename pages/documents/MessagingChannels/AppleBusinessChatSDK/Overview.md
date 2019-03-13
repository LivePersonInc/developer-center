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

The Apple Business Chat SDK is an XCode library that allows developers to easily provide a more interactive experience to consumers by reacting to conversational context.

After sending a custom interactive message, this SDK allows you to monitor the consumer behavior and report it back to LivePerson as engagement attributes to enhance the conversation.

### What does the SDK do?

- Allows you to measure incremental lift and ROI from ABC conversations and LiveEngage operational tools.  
- Provides human and bot agents with context of the consumer’s iMessage app transactional and activity data, allowing them to have a more meaningful and effective conversation
- Create data-driven integrations to external systems via the agent widget SDK

### Who is the SDK for?

Firstly, the Apple Business Chat SDK is for brands that are using or intend to use the Apple Business Chat channel to converse with their consumers.

The SDK has 2 distinctive contextual integration environments:
  - iMessage app mode
  - Host app mode

<!--


Brands using Apple Business Chat to connect with their consumers can now gather more interactional and activity context on the consumer with the Apple Business Chat. Brands using Business Chat are using the native Custom Interactive Message (iMessage apps) to enrich the consumer experience with conversational apps to allow for more transactions to occur during the brand to consumer connection. To fully enrich the consumer conversational interactions, brands are also looking to pass the iMessage apps user transaction or activities events to LiveEngage, to allow bots and agents to gather the consumer information required to manage a contextual and knowledgeable conversation with the consumer, in run time conversation. Brands should also be able to look at historical data to analyze the business activities and transactions that lifts the conversions rates and business goals.    


Liveperson ABC SDK goal is to provide integration solutions for iOS apps (Host & iMessage app/ Extension) with LiveEngage platform. 
After sending a custom interactive message (CIM), this SDK will allows you to enhance the conversation by reporing any of the supported consumer behavior/SDEs, as [engagement attributes](engagement-attributes-types-of-engagement-attributes.html) to the Liveengage platform:  

### What Problem does the SDK solve

- **Real time transaction and activities events (SDEs)** - Bots and agents cannot react to real time activities or transactions of consumers they're conversing with. They are kept blind to the conversation context, and therefore cannot manage the conversation with the expected context and knowledge. 
- **Historical transactions and activities analytics (SDEs)** -  Brands can’t report to LE on transaction or activities that happened during the Business Chat conversation, which creates a problem for brands that are looking to measure ROI, incremental lift and business conversation correlated to the ABC conversations. Brands can’t answer the basic  question of “did LE help me reach my business goals?”.

### Benefits of using the SDK



### Included Functionality

By leveraging LivePerson's APIs ([Monitoring](monitoring-api-overview.html) and [Engagement Attribute API](engagement-attributes-api-overview.html) among others), this SDK is able to provide the following functionality:

- Report Engagement Attributes back to the LiveEngage conversation
- Notify human and bot agents whether an iMessage app is installed via an SDE, once a ‘Welcome bubble’ message type is sent to an iOS device.* (Auto triggered SDEs)
- Enabling textual context for outgoing Interactive messages to be presented on Agent Console. * 
- How to implement Custom Reply Message

-->

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


### General Limitations

**Cross devices** - If a consumer starts the conversation from an iPhone device, and after a while continues the conversation from an iPad while performing activity in the app ext or main app, SDEs will not be reported to the LE conversation.
