---
pagename: Managing Post-Conversation Survey Bots
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Bots Status
permalink: bots-status-managing-post-conversation-survey-bots.html
indicator: both
---

You can use the Bots Status application that's intended for monitoring agent connectors to monitor your [post-conversation survey bots](conversation-builder-bots-post-conversation-survey-bots.html). There are a few important distinctions to be aware of as you do so:

* You can identify survey bots by examining the **User Name**. This is always "Survey Connector." (Normal bots display the agent name that's configured in Conversational Cloud.)
* While each survey bot is listed individually in the dashboard, they all share a single agent connector.
* Successfully deployed survey bots display "Deployed" beneath the bot name.

<img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/surveyBot_monitoring1.png">

{: .important}
Keep in mind that all survey bots share a single agent connector, so performing any operation on one survey bot affects all the survey bots.

### Redeploy the survey bot connector

Redeploying the connector stops and restarts it. Use this as a troubleshooting technique when the connector appears to be in a stuck state.

**To redeploy the survey bot connector**

1. Access the Bots Status application as described [here](bots-status-overview.html#access-bots-status).
2. Use the filter controls to display the survey bots for the relevant environment.
3. Select one of the survey bots, and click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_vertical.png"> (3-dot icon) beside the bot name.
4. Select **Redeploy Connector**.

### Migrate to Conversation Builder

{: .important} 
This procedure is for brands that are moving from managing surveys in Bot Studio to doing so in Conversation Builder.

If you currently use Bot Studio to trigger surveys, you must *manually switch* to triggering surveys from Conversation Builder. Follow this procedure after you've finished with survey development and testing using Conversation Builder.

**To migrate to Conversation Builder**

1. Access the Bots Status application as described [here](bots-status-overview.html#access-bots-status).
2. Use the filter controls to display the survey bots for the relevant environment.
3. Select one of the survey bots, and click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_vertical.png"> (3-dot icon) beside the bot name.
4. Select **Migrate to Conversation Builder**.

    A confirmation message appears to indicate that the account has been migrated to Conversation Builder.

    <img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/surveyBot_monitoring4.png">

    Subsequently, the page is refreshed. You should see each survey bot listed individually with a "Deployed" indicator.

     <img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/surveyBot_monitoring5.png">

### Refresh the survey bot connector

{: .important} 
This procedure is for brands that are moving from managing surveys in Bot Studio to doing so in Conversation Builder.

If you've just migrated from Bot Studio to Conversation Builder, but things don't seem to be working, use this procedure as a troubleshooting technique. Refreshing the connector toggles an underlying system setting to put things in sync.

**To refresh the survey bot connector**

1. Access the Bots Status application as described [here](bots-status-overview.html#access-bots-status).
2. Use the filter controls to display the survey bots for the relevant environment.
3. Select one of the survey bots, and click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_vertical.png"> (3-dot icon) beside the bot name.
4. Select **Refresh Connector**.

### Roll back to Bot Studio

{: .important} 
This procedure is for brands that are moving from managing surveys in Bot Studio to doing so in Conversation Builder.

Rolling back to Bot Studio reverts your account to triggering surveys from Bot Studio instead of Conversation Builder. This undeploys the survey connector in Conversation Builder.

**To roll back to Bot Studio**

1. Access the Bots Status application as described [here](bots-status-overview.html#access-bots-status).
2. Use the filter controls to display the survey bots for the relevant environment.
3. Select one of the survey bots, and click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_vertical.png"> (3-dot icon) beside the bot name.
4. Select **Roll back to Bot Studio**.
    
    A confirmation message appears to indicate that the account has been rolled back to Bot Studio.

    <img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/surveyBot_monitoring2.png">

    Subsequently, the page is refreshed. You should see a single, undeployed survey connector.

     <img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/surveyBot_monitoring3.png">
