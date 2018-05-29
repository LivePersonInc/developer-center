---
title: Best Practices - Messaging
Keywords: SDE's, SDE, Engagement Attribute, best practice, 
level1: Documents
level2: Guides
level3: Engagement Attributes
order: 40
permalink: engagement-attributes-bestpractices-messaging.html
indicator: messaging
---

In Messaging the SDE's are cross devices and linked to a specific conversation.
there is no need to report the SDEs on each page anew but only once per conversation, It is highly recommended to report the SDEs at the beginning of the engagement with the consumer (as soon as the info exists, report on it).
SDE's can be submitted by multiple sources such as MonitorAPI, or [Traditional Useage](https://developers.liveperson.com/engagment-attributes-types.html).
In case there is any additional information about the user during the interaction, you may send the same SDEs again in order to enrich the existing data with the new information.


**Availablity of SDE's**
- All Reported SDE's in 12 hours before the Conversation has started, while the conversation is open, and 12 hours after the conversation has closed.
- SDE's the reported with the specific consumer ID or SDE's they belong to the "visitor" (in web messaging) that started the conversation.
- SDE's should be available in the API in a matter of seconds. 
- SDE's should be searchable up to 2 hours since they received.


**Sending an SDE multiple times during a session**
Consider the following implementation on a customer page:

| Page | property1 Value | property2 Value | property3 Value |
|----|--------------|--------------|--------------|
| Page A | a1 | a2 | [Not supplied] |
| Page B | b1 | [Not supplied] | b3 |

A visitor has been to page A, then moved to page B.  How will the Engagement attributes be saved? The behavior depends on the Engagement Attribute (EA) type.

| Behavior | Behavior description | Engagement attributes | Example Output |
|----|--------------|--------------|--------------|
| *Append New Item* | Appends new item each time EA is sent | Viewed Product (prodView) <br> Visitor Error (error) <br> Transaction (purchase) <br> Lead <br> Searched Content <br> Service Activity (service) | Product 1: <br> property1: a1 <br> property2: a2 <br> Product 2: <br> property1: b1 <br> property3: b3 |
| *Replace Item* | Updates existing info, does not maintain previous values of attributes that were not supplied in latest update | Cart update, <br> Personal Info (personal) <br> Customer Info (ctmrinfo) <br> Marketing Info (mrktInfo)| Cart: <br> property1: b1 <br> property3: b3 |

* Note: As opposed to _chat_, updated behavior does not apply to the data, and *replace* behavior will be used instead.  it's recommended to always pass the full data in the engagement attribute.

**Limitation**
- In authenticated messaging flow, consumer info SDE must be sent after the login process in order to create a correlation of the user between devices and browsers




