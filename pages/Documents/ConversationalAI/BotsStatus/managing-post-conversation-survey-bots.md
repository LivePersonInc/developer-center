---
pagename: Managing Post-Conversation Survey Bots
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Bots Status
permalink: bots-status-managing-post-conversation-survey-bots.html
indicator: both
---

### Overview

You can use the Bots Status application that's intended for monitoring agent connectors to monitor the agent connector for your [post-conversation survey bots](conversation-builder-bots-post-conversation-survey-bots.html). Unlike other bots, post-conversation survey bots all share a *single* connector, making them easier to manage.

Successfully deployed survey bots display "Deployed" beneath the bot name.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/surveyBot_monitoring1.png">

{: .important}
Since all survey bots share a single agent connector, performing any operation on the agent connector affects all the survey bots.

### Troubleshooting - Redeploy the connector

Redeploying the connector stops and restarts it. Use this as a troubleshooting technique when the connector appears to be in a stuck state.

**To redeploy the survey bot connector**

1. Access the Bots Status application as described [here](bots-status-overview.html#access-bots-status).
2. Click **Bot Agents** in the upper-left corner, and then click the **PCS Connector** tab.
3. Click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_vertical.png"> (3-dot icon) beside the connector, and select **Redeploy Connector**.

### Disable a single survey bot

For information on this, see [here](conversation-builder-bots-post-conversation-survey-bots.html#how-do-i-disable-a-survey-bot).