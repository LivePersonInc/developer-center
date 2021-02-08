---
pagename: Configure Agent Assist
keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Tutorials & Guides
subfoldername: Using Agent Assist
permalink: tutorials-guides-using-agent-assist-configure-agent-assist.html
indicator: both
---

After completing the [prerequisite steps](tutorials-guides-using-agent-assist-prerequisite-steps.html), you should have an Airlines knowledge base powered by the LP_Airline domain intents, as well as two bots that are connected to agents. We can now move our focus to Conversation Orchestrator to configure the Agent Assist capabilities.

### Step 5: Configure Agent Assist bot recommendations

1. From the Conversational AI portal, click the **Conversation Orchestrator** menu option.

    <img class="fancyimage" style="width:800px" src="img/agentassisttutorial/co_menu_option.png">

2. From the Conversation Orchestrator home page, select the **Bots** menu option under **Agent Assist**.
3. Ensure that the **Enable recommendations** toggle is turned on. Here, there is an option to select the maximum number of recommendations provided to a human agent. Leave the selection to the default of 3.

    <img class="fancyimage" style="width:800px" src="img/agentassisttutorial/max_num_recommendations.png">

4. The **Confidence threshold** section allows customization of the confidence percentage used for a bot suggestion. Leave the slider at the default 70%.
5. Under **Configure bot recommendations**, both the Booking Bot and Seating Bot should be listed. Any bots that are connected to active agent connectors should be visible here.
6. Recommendations are tied to skills, which must be specified in this section before they will display to a human agent during a conversation. Earlier, the logged-in human agent was assigned an “agent” skill, which is what needs to be specified for these bots to be recommended. In the skills form field, type in “agent”.

    <img class="fancyimage" style="width:800px" src="img/agentassisttutorial/config_bot_recommendations.png">

### Step 6: Configure Agent Assist knowledge base recommendations

1. Select the **Knowledge Bases** menu option under **Agent Assist**.
2. Confirm that the **Enable recommendations** toggle is still turned on. The maximum number of recommendations should be the same as well.
3. Under **Add KB**, add the API Access Key that was copied from the Knowledge Base portal in an earlier step. This needs to be provided in order to discover the knowledge bases that have been created. Click **Save**.
4. Follow the steps that were taken with bots: Enable the Airline FAQ knowledge base under the **Configure article recommendations** section, and assign the “agent” skill to it.

    <img class="fancyimage" style="width:800px" src="img/agentassisttutorial/config_article_recommendations.png">

{: .important}
**Customize your POC:** If you built out additional resources in previous steps, make sure to enable those resources too. Depending on the number of resources, it might be useful to increase the number of recommendations that you display to your agents when they are in a conversation.

### Step 7: Create the Web messaging engagement

Updates to the Agent Assist configuration can take up to 20 minutes to be reflected in conversations. While waiting for these changes to take effect, create a web messaging engagement that connects to the “agent” skill. 

1. Back in the Conversational Cloud, select the **Manage campaigns and engagements** icon <img style="width:30px" src="img/agentassisttutorial/icon_campaigns.png"> from the left-side menu.
2. From the **Campaign Builder** portal, select **+ Add campaign** in the lower-left corner.
3. Give the campaign the name "Agent Assist Testing," and under **Campaign goal**, select the default “Interact with consumers.” 
4. Click the **+ Add engagement** link to specify a web messaging engagement as the source. 
5. In the resulting workflow, keep the default values for all screens except for the **Engagement settings**. In **Engagement settings**, it is important that this engagement is routing to the "agent" skill that has been assigned to the human agent. As the Agent Assist settings have been configured to recommend bots and knowledge bases to this particular skill, skipping this important step will result in recommendations not being sent.

    <img class="fancyimage" style="width:800px" src="img/agentassisttutorial/engagement_settings.png">

6. Continue through the workflow, accepting the default values. When you’ve reached the last option, "Behavior," select the **Done** button in the lower-right corner.
7. Back on the "Agent Assist Testing" page, confirm that the skill being routed to is "agent." If so, select the orange **Publish** button in the upper-right corner. Once published, there will be a visible Running icon <img style="width:90px" src="img/agentassisttutorial/icon_running.png"> to the right of the engagement.

    <img class="fancyimage" style="width:800px" src="img/agentassisttutorial/engagement.png">

### What's next?

Continue on to the [next step](tutorials-guides-using-agent-assist-test-agent-assist.html) in the tutorial.