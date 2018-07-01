---
title: Best Practices for Messaging
Keywords:
level1:
level2: Guides
level3: Engagement Attributes
order: 50
permalink: engagement-attributes-best-practices-messaging.html
indicator: messaging
---

Engagement attributes (EAs) passed by the brand can include important information that the agent should consider in real time, while engaging with customers. Unauthenticated EAs give brands the ability to provide agents with real-time information about the visitor in order to improve their efficiency and service quality in messaging conversations as well as in chat. For example, they can provide agents with an order ID for when visitors inquire about the terms and conditions of their order, or provide agents with customer information during a conversation with a registered visitor.

This feature will display unauthenticated EAs passed in a messaging conversation within the Agent Workspace. Any EAs passed 12 hours before the conversation has started, and 12 hours after a conversation has ended, will be attributed to the conversation.

EAs will be presented in the Agent Workspace in several areas:

1. **Consumer Info widget** - each EA will be presented in its own section, much like for chat conversations today. They will be available in both Open Connections & All Connections, as well as in the Engagement History widget.

2. **All Connections view** - users will be able to search unauthenticated EAs in the All Connections table, as part of the EAs search.

The table below explains which EAs should be collected and presented in LE UI.

<table>
<thead>
  <tr>
    <th>Category</th>
    <th>Engagement Attribute</th>
    <th>Description</th>
    <th>When is it sent?</th>
    <th>How many times is it expected to be sent</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>Visitor Info</td>
    <td>Marketing source</td>
    <td>Used to obtain information about the marketing source of the visitors, e.g which channel or campaign drove visitors to the website</td>
    <td>Usually, when the page loads.</td>
    <td>This information should be sent per session</td>
  </tr>
  <tr>
    <td></td>
    <td>Customer info</td>
    <td>Used to collect information about a registered visitor and their unique identifier.</td>
    <td>When information about the visitor is available. The data can come from different sources and may be passed asynchronously.</td>
    <td>This information should be sent per session. Expected to be sent once per session, but usually, as data comes from different sources, will be sent more than once.</td>
  </tr>
  <tr>
    <td></td>
    <td>Personal info</td>
    <td>Used to collect personal information about visitors</td>
    <td>When information about the visitor is available. The data can come from different sources and may be passed asynchronously.</td>
    <td>This information should be sent per session and not per page. Expected to be sent once per session, but usually, as data comes from different sources, will be sent more than once.</td>
  </tr>
  <tr>
    <td>Ecommerce Info</td>
    <td>Cart update</td>
    <td>Used to get the status of the visitor’s shopping cart.</td>
    <td>When the visitor’s shopping cart is updated.</td>
    <td>This information usually will be sent more than once per session.</td>
  </tr>
  <tr>
    <td></td>
    <td>Viewed product</td>
    <td>Used to track a product or service that interests visitors. Each product is described by Name, Category, and SKU.</td>
    <td>When a visitor views a product.</td>
    <td>This information will usually be sent more than once per session.</td>
  </tr>
  <tr>
    <td></td>
    <td>Transaction</td>
    <td>Used to track any money transaction including the items themselves and their details.</td>
    <td>Upon a transaction.</td>
    <td>This information usually will be sent once per session, depending on tracked transactions.</td>
  </tr>
  <tr>
    <td>Visitor Journey</td>
    <td>Lead</td>
    <td>Tracking lead information will understand what visitors are interested in and where they are in the funnel. Tracking the value of the lead will appear in revenue reports, in order to measure the monetary value of campaigns.</td>
    <td>Upon a lead generation.</td>
    <td>This information usually will be sent once per session, depending on generated leads.</td>
  </tr>
  <tr>
    <td></td>
    <td>Service activity</td>
    <td>Used to measure service activities, for example, ordering a checkbook, submitting an application, or requesting a mortgage.</td>
    <td>Upon a service activity</td>
    <td>This information usually won’t be sent more than a few times per session, depending on the service activities.</td>
  </tr>
  <tr>
    <td></td>
    <td>Visitor error</td>
    <td>Used to collect information about errors that visitors experience. All errors are aggregated in a list during the session until resolved.</td>
    <td>Upon a visitor encountering an error.</td>
    <td>This information usually won’t be sent more than a few times per session, depending on the number of tracked errors the visitor encounter.</td>
  </tr>
  <tr>
    <td></td>
    <td>Section</td>
    <td>Section Engagement Attributes allow to describe specific webpages by embedding code on the webpage. Use sections to determine the appropriate Location for engaging with visitors, or to display where those visitors are browsing.</td>
    <td>Upon page load</td>
    <td>This information is expected to be sent once per page and thus multiple per session.</td>
  </tr>
  <tr>
    <td></td>
    <td>Searched content</td>
    <td>Getting information about content searched by visitors on the website. For example: searching for FAQs about how to reset password.</td>
    <td>Not documented</td>
    <td>Not documented</td>
  </tr>
</tbody>
</table>




### Monitored Data

The following monitored data will be added to the Consumer Info widget under Consumer Info section (same as in chat)

1. Country

2. City

3. ISP

4. Organization

5. Referrer (start page)

6. IP Address (don't forget to take **IP masking** into consideration)



The monitored data will be collected from the first session. Geo location will be collected from when the conversation first originated, and will not update if the user changes their location during an open conversation.

Both unauthenticated EAs and monitored data will be available to view in the Agent Widget SDK, and through the Messaging Interactions API.

**Limitations**

1. EAs submitted more than 12 hours before conversation started will not be displayed

2. EAs submitted more than 12 hours after conversation ended will not be displayed

3. This includes resuming a conversation - if resume was done in the 12 hour time frame from conversation close time, the relevant EAs will be shown

4. Unauthenticated conversations started from different browsers will be treated as separate conversations and will have their own EAs

5. In an authenticated messaging flow, consumer info EAs must be sent after the login process in order to create a correlation of the user between devices and browsers

6. EAs submitted in a messaging conversation will be available for search in All Connections up two hours later. EAs may appear before, but might not be the most current ones. Avg. estimated time for final EAs to appear would be ~30 min.

### Submitting EAs

In Messaging, the EAs are cross-device and linked to a specific conversation. There is no need to report the EAs separately on each page anew but only once per conversation. It is highly recommended to report the EAs at the beginning of the engagement with the consumer (as soon as the info exists, report on it).
EAs can be submitted from multiple sources such as the Monitoring API, or through more [Traditional Channels](https://developers.liveperson.com/engagement-attributes-types.html).

In case there is any additional information about the user during the interaction, you may send the same EAs again in order to update the existing data with the new information.


**Availablity of EAs**

- All Reported EAs within 12 hours before the Conversation  started, while the conversation is open, and 12 hours after the conversation has closed will be available.

- EAs will be reported with the specific consumer ID or EAs will be assigned to the "visitor" (in web messaging) that started the conversation.

- EAs will be available through API calls in a matter of seconds.

- EAs will be searchable in the UI up to 2 hours since they were received.


**Sending an EA multiple times during a session**

Consider the following implementation on a customer page:

| Page | property1 Value | property2 Value | property3 Value |
|----|--------------|--------------|--------------|
| Page A | a1 | a2 | [Not supplied] |
| Page B | b1 | [Not supplied] | b3 |

A visitor has been to page A, then moved to page B.  How will the Engagement attributes be saved? The behavior depends on the Engagement Attribute (EA) type. Note that, unlike the best practices defined for chat, the only two behaviors we used in Messaging is **Append** and **Replace**. Which EA should use which behavior in Messaging is covered in the table below.

| Behavior | Behavior description | Engagement attributes | Example Output |
|----|--------------|--------------|--------------|
| *Append New Item* | Appends new item each time EA is sent | Viewed Product (prodView) <br> Visitor Error (error) <br> Transaction (purchase) <br> Lead <br> Searched Content <br> Service Activity (service) | Product 1: <br> property1: a1 <br> property2: a2 <br> Product 2: <br> property1: b1 <br> property3: b3 |
| *Replace Item* | Updates existing info, does not maintain previous values of attributes that were not supplied in latest update | Cart update, <br> Personal Info (personal) <br> Customer Info (ctmrinfo) <br> Marketing Info (mrktInfo)| Cart: <br> property1: b1 <br> property3: b3 |

* Note: As opposed to _Chat_, updated behavior does not apply to the data, and *replace* behavior will be used instead. It's recommended to always pass the full data in the engagement attribute.

**Limitation**

- In authenticated messaging flow, consumer info EAs must be sent after the login process in order to create a correlation of the user between devices and browsers
