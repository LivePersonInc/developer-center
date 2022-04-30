---
pagename: Configure Conversation Assist
redirect_from:
    - tutorials-guides-using-agent-assist-configure-agent-assist.html
keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Tutorials & Guides
subfoldername: Using Conversation Assist
permalink: tutorials-guides-using-conversation-assist-configure-conversation-assist.html
indicator: both
---

After completing the [prerequisite steps](tutorials-guides-using-conversation-assist-prerequisite-steps.html), you should have an Airlines knowledge base powered by the LP_Airline domain intents, as well as two bots that are connected to agents. We can now move our focus to Conversation Assist to configure its capabilities.

### Step 5: Configure the bots for Conversation Assist

1. From the Conversational AI dashboard of applications, click **Conversation Assist**.

    <img class="fancyimage" style="width:800px" src="img/agentassisttutorial/ca_menu_option.png">

    {: .important}
    If it's your first time accessing Conversation Assist, you might see a window that introduces you to the application. Just click **Get started** in the window, and then click **Got it** at the next prompt. You'll be on the **Recommendation Sources** page at this point, which is good.

2. If necessary, click **Recommendation Sources** at the top of the page, and then select the **Bots** tab.

    You should see that your bots have been automatically discovered and, therefore, are listed on the page. Any bots that are connected to active agent connectors should be visible here.

    <img style="width:800px" src="img/agentassisttutorial/botlist.png">

    Recommendations are tied to skills, so you must assign skills to the bots before the bots can be offered to human agents during conversations.
    
    Earlier, you assigned an "Agent" skill to the logged-in human agent; this is what needs to be assigned for these two bots to be recommended.

3. Assign the "Agent" skill to the Seating Bot:
    1. Beside the bot, click the <img style="width:25px" src="img/agentassist/icon_managesource.png"> (Manage source) icon.
    2. In the **Manage recommendation source** dialog, change the **Status** value to "ON," and add the "Agent" skill.

        <img width="700" src="img/agentassisttutorial/assignskill.png">

    3. Click **Save**.

4. Repeat the process for the previous step to change the status of the Booking Bot and assign the "Agent" skill to it.

### Step 6: Configure the KB for Conversation Assist

1. Still on the **Recommendation Sources** page, select the **Knowledge Bases** tab.

    <img style="width:800px" src="img/agentassisttutorial/kblist.png">

2. Follow the steps that you used for the bots: Change the **Status** of the Airline FAQ knowledge base (KB) to "ON," and assign the "Agent" skill it.

    <img style="width:800px" src="img/agentassisttutorial/kblist2.png">

    For the purpose of this tutorial, we're relying on the default values for several settings, e.g., the **Max # of recommendations** to offer at any one time. You can read about these settings [here](conversation-assist-recommendation-sources-configuring-settings.html).

{: .important}
**Customize your POC:** If you built out additional resources in previous steps, make sure to turn on those resources too. Depending on the number of resources, it might be useful to increase the number of recommendations that you display to your agents when they are in a conversation.

### Step 7: Create the Web messaging engagement

Updates to the Conversation Assist configuration can take up to 20 minutes to be reflected in conversations. While waiting for these changes to take effect, create a web messaging engagement that connects to the “Agent” skill. 

1. Back in the Conversational Cloud, select the **Manage campaigns and engagements** icon <img style="width:30px" src="img/agentassisttutorial/icon_campaigns.png"> from the left-side menu.
2. From the **Campaign Builder** portal, click **+ Add campaign** in the lower-left corner.
3. Give the campaign the name "Conversation Assist Testing," and under **Campaign goal**, select the default “Interact with consumers.” 
4. Click the **+ Add engagement** link, and then select "Web" as the engagement source.
5. In the **Engagement template gallery**, accept the default value, and click **Next**.
6. In the **Engagement settings**, under **Routing**, route to the specific skill "Agent."

    <img class="fancyimage" style="width:650px" src="img/agentassisttutorial/engagement_settings.png">
    
    It is important that this engagement is routing to the "Agent" skill that has been assigned to the human agent. As the Conversation Assist settings have been configured to recommend bots and answers to this particular skill, skipping this important step will result in recommendations not being sent.

6. Click **Next**, and continue through the workflow, accepting the default values. When you’ve reached the last option, "Behavioral targeting library," click **Done** in the lower-right corner.
7. Back on the "Conversation Assist Testing" page, confirm that the skill being routed to is "Agent." If so, select the orange **Publish** button in the upper-right corner. Once published, there will be a visible Running icon <img class="inlineimage" style="width:90px" src="img/agentassisttutorial/icon_running.png"> to the right of the engagement.

    <img class="fancyimage" style="width:800px" src="img/agentassisttutorial/engagement.png">

### What's next?

Continue on to the [next step](tutorials-guides-using-conversation-assist-test-conversation-assist.html) in the tutorial.