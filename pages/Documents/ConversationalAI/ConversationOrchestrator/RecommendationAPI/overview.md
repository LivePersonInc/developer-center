---
pagename: Overview
redirect_from:
  - maven-askmaven-overview.html
  - maven-ai-askmaven-overview.html
  - maven-ai-recommendation-api-overview.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Recommendation API
permalink: conversation-orchestrator-recommendation-api-overview.html
indicator: messaging
---

### What is the Recommendation API

The Recommendation API is a REST API that allows you and your bots, web sites, and apps to call Conversation Orchestrator capabilities programmatically. You can use the API to ask Conversation Orchestrator for the next best actions (route to skill, KB article, etc) for a concierge bot/app.

<img class="fancyimage" width="750" src="img/maven/askmaven.png">

### Use Cases

A typical use case for using Recommendation APIs is to get a routing decision to transfer to a skill from a Bot or LOB app. 

1. A brands concierge bot (for example a bot built in Conversation Builder or Google Dialogflow) handles branded greetings, dialogs, and intents. 
2. It then calls the Recommendation API which evaluates all the policies setup in Dynamic Routing and then returns the next best best action. 
3. The concierge bot then uses the action (for example route to a skill), to transfer the conversation to that skill in Conversational Cloud. 
4. This is often used in conjunction with the Conversation Context Service to pass custom attributes to use in a policy (for example intents). To learn more about how to use the Conversation Context Service [please see documentation](maven-context-warehouse-context-session-store.html).

<img class="fancyimage" style="width:700px" src="img/maven/askmaven2.png">

### Developer Key

To use Recommendation APIs you will need to create and use an API key. To get your unique key:

4. Login to Conversation Orchestrator with your Conversational Cloud credentials and then navigate to **Developer Key**.

5. Copy and paste the key you see in the experience and use it in your API headers. 

6. To generate a new key, click on the **Regenerate Key** button. Please note that this will invalidate the previous key. The key is shared for all Conversation Orchestrator APIs and therefore you will have to use the new key wherever the APIs are being called.  

<img class="fancyimage" width="750" src="img/maven/devkey.png">
