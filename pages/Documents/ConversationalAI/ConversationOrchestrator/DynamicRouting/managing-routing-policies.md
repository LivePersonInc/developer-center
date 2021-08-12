---
pagename: Managing Routing Policies
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Dynamic Routing
permalink: conversation-orchestrator-dynamic-routing-managing-routing-policies.html
indicator: messaging
---

This topic explains how a large number of policies can be managed. When a route request is made, the policies are evaluated from top to bottom, and the matching policy routes to the agent or skill as configured. It is important to know how to prioritize and manage policies to ensure routing efficiency.
 
### Find a newly created policy
Newly created policies get added to the bottom of the list. 

<img class="fancyimage" width="500" src="img/convorchestrator/co_dr_policies_find.png">

### Enable or disable policies
Enable or disable a policiy by clicking the toggle. Disabled policies do not play a part in routing. Newly created policies are in disabled state, and the toggle needs to be switched to enable them.
 
### Prioritize policies
Whenever a routing call is made, policies are evaluated from top to bottom. For this reason, place the more important, higher priority policies higher up on the list. 

<img class="fancyimage" width="500" src="img/convorchestrator/co_dr_policies_prioritize.png">

### Search for policies
You can search for policies by name.

<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_policies_search.png">
