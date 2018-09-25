---
pagename: Overview
redirect_from:
  - rich-messaging-structured-content-overview.html
  - structured-content-templates.html
Keywords:
sitesection: Documents
categoryname: "Rich Messaging"
documentname: Structured Content

level-order: 2
order: 5
permalink: structured-content-overview.html
root-link: true
indicator: both
---

Structured content is a modular approach to managing digital content that uses metadata tags and automation to publish content from a single source to multiple distribution channels.
It is engineered for Rich messaging, such as content management and marketing automation, to enable dynamic delivery of powerful customer experiences.

Structured content helps marketers do much more with less time, money, and hassle to maximize investment in content technology.

LivePerson Structured Content uses Rich Messaging elements, such as images and buttons, and constructs them within a layout.

### Prerequisites

* Structured Content needs to be enabled for your LiveEngage account. Contact your LivePerson representative.
* LE UI version 9.10
* UMS version 3.11

#### For Chat/Messaging

LE VX (Unified Window) version 9.4

#### For In-App Messaging:

In-app Messaging SDK v2.7 (for Cards) or SDK 3.2 (for Carousel) or above available for both Android and iOS
* Integrate the SDK into your brand app
* Ensure that the following toggle is enabled within the SDK - [Android](android-attributes.html#structured-content) or [iOS](consumer-experience-ios-sdk-attributes.html#structured-content)

### Sending Structured Content

Determine if the Structured Content should be used for a human or virtual agent journey.

#### Agent
You will need to implement a new widget based on the [Agent Workspace Widget SDK](agent-workspace-sdk-overview.html).
A new command has been added to the Agent Workspace SDK:

```javascript
'Write StructuredContent' (var cmdName = lpTag.agentSDK.cmdNames.writeSC).
```

This command sends a JSON that represents a structured content input.
For further information, refer to the [Developer Community documentation](agent-workspace-sdk-methods.html#command).

#### Virtual Agent
You will need to implement a bot integration using the [Messaging Agent SDK](messaging-agent-sdk-overview.html).
For more general information about using the SDK to integrate bots, please refer to the [Solution’s documentation](products-customer-facing-bots-overview.html).
For a specific example of using the SDK to send Structured Content, please refer to the [SDK’s repository](https://github.com/LivePersonInc/node-agent-sdk#example-sending-rich-content-structured-content).
