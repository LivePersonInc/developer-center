---
pagename: Getting Started
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Dynamic Routing
permalink: conversation-orchestrator-dynamic-routing-getting-started.html
indicator: messaging
---

{: .important}
In August 2021, LivePerson updated the Conversation Orchestrator - Dynamic Routing bot template that’s available in Conversation Builder so that it uses a newly introduced Dynamic Routing interaction. If your bot is based on the older template, we recommend that you switch to the newer template, which is much simpler. Getting started with the newer template is discussed in this topic. For those still using bots based on the older template, see [here](conversation-orchestrator-dynamic-routing-getting-started-legacy.html) instead for setup information.

### Introduction
To get started, you need to direct traffic to a routing bot. Your setup is different depending on how you configure your bot. There are three options:

* Use the Conversation Orchestrator bot if you are setting up routing for the first time, or if you don’t mind setting up a new routing or concierge bot. This template comes pre-wired with hooks to [Dynamic Routing](conversation-orchestrator-dynamic-routing-overview.html) and the [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html). The Conversation Orchestrator bot also comes with out-of-the-box intent and channel based routing. This is the easiest way to get started.
* If you already have a functional routing bot in Conversational Cloud and don’t want to move that logic to a new bot, you’ll need to manually add the Dynamic Routing interaction.
* You can use [Dynamic Routing](conversation-orchestrator-dynamic-routing-overview.html) even if all your automation is configured on an external platform such as Google DialogFlow. In this case, you can create routing policies in Dynamic Routing, but you need to use the [Next Actions API](conversation-orchestrator-next-actions-api-overview.html) from the external system to perform the routing. This is discussed in more detail [here](conversation-orchestrator-dynamic-routing-using-dynamic-routing-outside-of-conversational-cloud.html).

Each of these options is further discussed in this topic.

### Using the Dynamic Routing bot 
Get up and running in just a few, simple steps. Beforehand, please [familiarize yourself with Conversation Builder](tutorials-guides-getting-started-with-bot-building-overview.html) to learn about bots.

1. In Conversational Cloud, from the dashboard of Conversational AI applications, select **Conversation Builder** to access the application.
2. Click **New Bot** in the upper-right corner.
3. From the bot template menu, select the **Conversation Orchestrator > Dynamic Routing Bot** template. Then click **Create Bot**.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_choosetemplate.png">

    The template includes the following:
    * A simple scenario to ask consumers for their phone number and storing that phone number into the context service for routing. 
    * A Dynamic Routing interaction that can be moved around to determine  where to perform routing.
    * Based on a policy action, the bot can then perform the following: transfer to an agent, transfer to a skill, or send a message.

4. Optionally, within the bot, click **Bot Settings** to change the name of the bot.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_botsettings.png">
    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_renamebot.png">

5. Dynamic Routing is triggered based on where the interaction is placed. The interaction can be dragged and dropped at different places based on where the routing needs to happen.   
6. Create routing policies by clicking **Manage routing policies** on the Dynamic Routing interaction. This takes you to the Manage Policies page in Conversation Orchestrator, where you can create your policies. To learn about policies, see [here](conversation-orchestrator-dynamic-routing-creating-routing-policies.html).

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_dynroutingtile.png">

    Once the bot is deployed, routing policies get evaluated at the appropriate step, and a transfer is performed based on a match.

7. If none of the routing policies match or there is a failure, you have the option to handle fallbacks. There are two ways to configure fallback.

    * **Option 1: Falling back to a skill**: Click **Settings** in the Dynamic Routing interaction, and add a fallback skill ID, fallback skill name (optional), and fallback message. This is the fallback skill to which the conversation is routed in the case of a failure.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_drtileconfig1.png">
    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_drtileconfig2.png">

    * **Option 2: Handling fallbacks within the Dynamic Routing bot**: In this case, select the appropriate interaction or select Next Interaction (whichever is appropriate) in the the dropdown in the Dynamic Routing interaction, as shown below.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_drtileconfig3.png">

8. [Connect to an engagement and deploy the bot](tutorials-guides-getting-started-with-bot-building-deploy-the-bot.html) in Conversational Cloud. Ensure an agent connector is assigned to a user, and the user should be connected to a skill that is deployed to an engagement. Ensure all the incoming interactions are routed to this bot.

### Using your own routing bot
This section assumes that you already have a functional routing bot within Conversational Cloud, and you want to use Dynamic Routing.

1. Within Conversation Builder, open an already functional routing bot with which Dynamic Routing needs to be integrated.
2. On the Dialogs page, using the interaction palette on the right side, add the **Dynamic Routing** interaction (under **Integrations**). By default, the interaction is added to the bottom of the page. Select it, and move it to where the routing needs to be performed.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_useownbot.png">

3. Follow steps 5-8 as described in the previous section. 

