---
pagename: Routing Conversations by Intents
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Dynamic Routing
permalink: conversation-orchestrator-dynamic-routing-routing-conversations-by-intents.html
indicator: messaging
---

{: .important}
This topic assumes that you are familiar with [Intent Manager](intent-manager-overview.html). 

You can create policies to recognize a consumer's intent from their utterance and transfer to the appropriate agent or skill. Routing by intent is very useful when agents or bots are organized by functional departments. 

**Examples**
* When a VIP consumer says, “I want to upgrade my service,” they should be transferred to the Upgrade Service skill that includes all upgrade specialists or bots.
* When a member says, “I have an outage,” they should be escalated to an Outage specialist.

**Please Note:**
The technique is very useful for advanced routing use cases, such as scenarios that involve a combination of intent recognition, contextual information and/or transferring to both humans and bots. 
 
If all your operations are contained within Conversation Builder bots, and you already have different bots for specific intents, please use the direct approach of [bot collaboration](conversation-builder-bots-bot-to-bot-transfers.html#automatic-transfers-via-bot-group).

### Prerequisite steps
* Configure the intents using [Intent Manager](intent-manager-overview.html).
* Configure your [routing bot](conversation-orchestrator-dynamic-routing-getting-started.html).

### Process
There are two ways to accomplish intent-based routing:
* If you have a limited number of intents, use the dialog starter approach.
* If you have many intents and corresponding skills, enable intent routing in the Conversation Orchestrator bot.

{: .important}
Some users might be using older approaches to routing by intents. Typically, this involves writing custom JavaScript to store context variables and call the Next Actions API. However, LivePerson recommends that you use the approaches discussed in this topic; they leverage Conversation Builder's Dynamic Routing interaction, which reduces the need to write custom code. Still, for information to aid in troubleshooting older approaches, you can access an older version of this topic [here](conversation-orchestrator-dynamic-routing-routing-conversations-by-intents-legacy.html).

#### Routing by intent using the dialog starter approach

When an intent triggers a dialog starter, the intent name is automatically saved to the default “orchestrator” namespace in the Context Service in a variable named “intent”. This approach is useful when using a small number of intents (5-10). 

1. Create a new dialog in your Conversation Builder bot. 

2. In the newly created dialog starter, select the **+ Intent** option to add a domain and intent to trigger this dialog. 

3. Set the **Next Action** to the Dynamic Routing interaction.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_next_action.png">
           
4. Create intent-based routing policies. For more on this, see the section at the end of this topic.

#### Enabling intent routing in the Dynamic Routing bot

When working with larger domains, assigning individual dialogs to each intent can be difficult to scale. By using the Conversation Orchestrator bot template, bot developers can manually call the analyze intent API and save the intent name to the default namespace, enabling routing to any intent-based skill in the account.

{: .important}
This approach is powered by an API provided by the [Dynamic Routing Bot template](conversation-builder-bot-templates-conversation-orchestrator.html). This API is not suitable for use with legacy versions of Liveperson’s NLU engine. Please upgrade to the current NLU domain offering if using this approach.

1. Create the Dynamic Routing bot, and open **Global Functions**.

    Create a new bot using the **Dynamic Routing Bot** by following the steps [here](conversation-orchestrator-dynamic-routing-getting-started.html). Then open **Global Functions**, and change  two configurations (botAppKey & domainId) as highlighted in the next, few steps.
           
2. Retrieve the botAppKey.

    Retrieve the botAppKey value from a bot user agent. This can be found in the **User Management** section of the Conversational Cloud. Copy this value.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_route1.png">

3. Retrieve the intent domain ID.

    Retrieve the Domain ID for your intent domain. You can find this in the **Domain Settings** for your domain in Intent Manager. Copy this value.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_route2.png">
    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_route3.png">

4. Update configurations in the **Global Functions**.
    
    Enter the botAppKey and domainId values into their associated variables within the **Global Functions** editor of your bot.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_route4.png">

5. Enable the intent dialogs in the bot.

    Delete the COLLECT_PHONE_NUMBER interaction. Enable both the ASK_INTENT and getIntent_API interactions using the interaction settings for each. Make sure the Dynamic Routing interaction is directly below the getIntent_API as shown below.

    *Enabling ASK_INTENT and getIntent_API interactions:*

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_route5.png">

    *To enable interactions, go to the **Interaction Settings**, and enable the toggle*:

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_route6.png">

6. Create intent-based routing policies. For help with this, see the next section.

### Create intent-based routing policies

The policy creation flow is identical for both approaches:
* Dialog starter
* Enabling intent routing
 
1. Navigate to **Manage Policies**.

    Use the **Manage routing policies** link in the Dynamic Routing interaction to navigate to Conversation Orchestrator.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_ibpolicies1.png">

2. Create your policy.

    Create a new policy by selecting **Add Policy**. Give the new policy a name. In the conditions editor, select “orchestrator.intent” from the dropdown, and set it equal to the relevant intent name.

3. Configure your policy.

    In the actions editor, select "Transfer to skill" from the left-hand dropdown and the relevant skill from the right-hand dropdown. Ensure that agents are assigned to the book_flight skill.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_ibpolicies2.png">

4. Enable your policy.
    
    Once saved, toggle the switch for the policy in the policy list to enable the policy.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_ibpolicies3.png">

5. Test your policy.

    You can test your setup on the web client emulator. For details on this, see [here](conversation-orchestrator-dynamic-routing-testing-with-the-web-emulator.html).
    
    Alternatively, to test, you can deploy the bot and connect it to a campaign that’s linked to your production/staging channel of your choice. For this setup, see [here](conversation-orchestrator-dynamic-routing-getting-started.html). 

    Follow these steps once you have configured your testing setup:

    <img class="fancyimage" width="250" src="img/convorchestrator/co_dr_ibpolicies4.png">

    The message routing flow is identical for both approaches (Dialog Starter and Enabling Intent Routing) because we have used the same intent and the same policy in our demonstration. 
 
    Start by saying “Hi.” 
 
    When prompted by the routing bot, provide the phone number 1111. This is when the Dynamic Routing interaction evaluates all your policies to make the routing decision.
 
    The conversation will be routed to the skill SeattleEmployeeSkill. A specific agent within the skill will be picked.
 
    For this example, it will be routed to Agent Bob if you have configured Agent Bob to be the only user who maps to SeattleEmployeeSkill.
