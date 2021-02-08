---
pagename: Prerequisite Steps
keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Tutorials & Guides
subfoldername: Using Agent Assist
permalink: tutorials-guides-using-agent-assist-prerequisite-steps.html
indicator: both
---

{: .important}
**Customize your POC:** This guide is meant to walk through building a working example of the Agent Assist capabilities within 30 minutes. The examples and starter resources provided are intentionally simple to move through the process quickly. Keep an eye out for "Customize your POC" sections like this one for indications as to where you can further develop and customize your implementation of an Agent Assist proof of concept to fit your specific needs.

This section walks through the steps necessary to complete before configuring Agent Assist. These steps include the creation of the following:

* Airline NLU v2 Starter pack in Intent Builder
* Airline specific knowledge base to serve FAQ articles tied to intents in the NLU domain
* User profiles and associated skills to be tied to both human and bot agents
* Several bots in Conversation Builder with dialogs triggered by intents from the starter pack domain
* Web messaging engagement directed to the signed-in “human” skill. 

### Step 1: Create the Airline NLU v2 Domain

LivePerson offers a variety of domain-specific starter packs to help get up and running with Intent Builder quickly. After signing into the LivePerson Conversational Cloud, navigate to the Conversational AI portal and complete the following steps to build out the NLU Domain which will be used in the Agent Assist solution.

{: .important}
**Customize your POC:** For demonstration purposes, this guide assumes a build out suited for an Airline client. Add in a vertical specific pre-built domain to customize for your use case, or optionally add additional domains to supplement the primary one you are using. Agent Assist can pull from multiple domain intents to make recommendations for your users.

1. From the Conversational AI portal, click the **Intent Builder** menu option.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/agentassisttutorial/intent_builder_menu_option.png">

2. Click **Add Domain** in the upper-right corner of the Intent Builder screen.
3. In the resulting **Add Domain** menu, select “Prebuilt Domains” along the top.
4. The following view will display all Intent Starter Packs available with Conversational Cloud. Highlight the “Airline” domain, and click **Add**.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/agentassisttutorial/add_prebuilt_domain.png">

    Once completed, the LP_Airlines NLU v2 domain will be created, fully trained and containing intents for use with any Airline.

