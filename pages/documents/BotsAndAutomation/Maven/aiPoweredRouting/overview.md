---
pagename: Overview
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Maven
subfoldername: AI Powered Routing
permalink: maven-ai-powered-routing-overview.html
indicator: messaging
---

### What is AI Powered Routing

Maven’s AI Powered Routing provides a centralized experience to create dynamic policies to achieve routing to the best human agent, skill, or bot. Routing policies are based on intent and/or context attributes such as consumer profile data, operational context (load, predicted wait times, KPIs), and conversation history. 

Below are some examples of policies you can create: 

- **When** a brand suffers an exceptional **event** (storm, incident), route to a bot for **intents** related to the outage. For all other intents (e.g. billing) route to a human agent pool
- **Route** a group of **intents** (e.g. order enquiry, cancellation, scheduling) to a general order skill unless the customer is a **VIP**, then send them to their **Dedicated Advisor**
- For lost baggage **intent**, return to the **same agent** if the customer is **returning within a given time period**; for **VIP** customers, route to high priority skill 

To learn more about policies and how to create/manage them, see [Intent and Routing Policies](intent-routing-policies.html).
