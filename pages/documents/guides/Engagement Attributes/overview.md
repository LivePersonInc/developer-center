---
title: Overview
Keywords:
level1: Documents
level2: Guides
level3: Engagement Attributes

level-order: 3
order: 10
permalink: engagment-attributes-overview.html
root-link: true
indicator: both
---

LiveEngage provides out-of-the-box basic information about your visitors, for example, the visitor’s geolocation, the amount of time they spent on a page, and which pages they viewed.

In order to collect more in-depth, specific information such as product viewed, purchase information, errors the visitor encountered, and search results, you can send this information to LiveEngage by using Engagement Attributes.

Information collected using Engagement Attributes can be used to achieve the following:

* Create specific and advanced targeting of visitors.
* Empower agents with relevant information during conversations with consumers.
* Receive a comprehensive view of visitor Engagement History.
* Measure and track campaign goals.

### Uses of Engagement Attributes in LiveEngage

Described below are some of the uses of Engagement Attributes in LiveEngage.

* **Create more specific visitor targeting**: Segment your visitors according to their properties, behavior, and journey on your website, and provide a tailored experience for each segment. For example, provide assistance to visitors who struggle to log in, or offer insurance to a client that is renting a car.

![Targeting Examples](img/targeting.png)

* **Conversion / Goal tracking**: Measure your campaign performance against your business objectives, whether it’s ROI or service quality. For example, use hotel booking value to track your promotional campaign conversions, or use loan application completion as a goal reached indication.

![Conversion Tracking](img/conversion.png)

* **Tools for agents**: Provide agents with real-time information about the visitor in order to improve their efficiency and service quality. For example, provide agents with an order ID for when visitors inquire about the terms and conditions of their order, or provide agents with customer information during a conversation with a registered visitor.

* **Engagement History**: Receive a comprehensive view of the visitor journey, behavior and attributes, as part of the Engagement History in order to better track agent performance and take corrective action should the need arise.

* **Authentication Service (OAuth 2.0)**: Authenticated Customer Information enables visitors that have logged into a brand’s website and initiated a chat to show up as being authenticated. The Agent Workspace then displays, in real-time, the correct and verified PII (Personally Identifiable Information) of the authenticated visitor.

### Important notes

1. In order for targeting rules (related to target audience or visitor behavior) to be validated, each Engagement Attribute **MUST** be implemented on the visitor's page at least once during a session.

2. For example, a brand wants to exclude all consumers who have received a specific error code on their site from receiving an engagement. In order for the targeting rule to be checked by LiveEngage, **an engagement attribute must be sent** both if the error code was received and also if it was not received, so that LiveEngage can determine which consumers to display the engagement to.
