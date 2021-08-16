---
pagename: Routing Conversations by Channel
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Dynamic Routing
permalink: conversation-orchestrator-dynamic-routing-routing-conversations-by-channel.html
indicator: messaging
---

You can create policies to recognize a consumer's channel: Web, Facebook Messenger, and so on, and transfer to the appropriate agent or skill. This is very useful in cases where you have specialized skills or agents for respective channels.

**Examples** 
* When a consumr messages from Facebook Messenger, transfer them to the FBMessengerSkill.
* When a consumer messages from the Web channel, transfer them to WebSkill.

### Prerequisite steps
* [Configure the routing bot].(conversation-orchestrator-dynamic-routing-getting-started.html).
* Set up Messaging for the respective channels. For details, see the top-level "Messaging Channels" section in the [Knowledge Center](https://knowledge.liveperson.com/).
 
### Process

1. Modify your routing bot to power the desired experience. In the example below, the bot responds to a customer greeting of “Hi," "Hello," etc., and immediately performs dynamic routing.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_routechannel1.png">

2. In the Dynamic Routing interaction, click **Manage routing policies** to go to the policy management interface.

3. Create the policy by selecting “orchestrator.channel” as the attribute and “channel’ as data type. Then choose from the available list of channels.

    Also configure the action to transfer to a skill. Make sure the skill has at least one or more bot or human agents.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_routechannel3.png">       
 
4. Save and enable the policy.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_routechannel4.png"> 

5. Launch a messaging conversation from the respective channel and test the flow.
    
    If you are routing based on “web-channel”, You can test your setup on the web client emulator. For details, see [here](conversation-orchestrator-dynamic-routing-testing-with-the-web-emulator.html).

    Alternatively, you can deploy the bot and connect it to a campaign that’s linked to your production/staging channel of your choice. For this setup, see [here](conversation-orchestrator-dynamic-routing-getting-started.html).

6. Follow these steps once you have messaging set up. 
 
    Launch messaging. Start by saying “Hi. And then immediately get routed to the respective skill. Here below, “Agentbob” is an agent who is mapped to the User3Skill.

    <img class="fancyimage" width="250" src="img/convorchestrator/co_dr_routechannel5.png">

7. You can also create one such policy for every unique channel. And you can also add more conditions to the policies if required.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_dr_routechannel4.png">
