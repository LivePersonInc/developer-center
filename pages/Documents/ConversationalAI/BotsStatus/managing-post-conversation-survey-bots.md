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

You can use the Bots Status application that's intended for monitoring agent connectors to monitor your [post-conversation survey bots](conversation-builder-bots-post-conversation-survey-bots.html). There are a few important distinctions to be aware of as you do so:

* You can identify survey bots by examining the **User Name**. This is always "Survey Connector." (Custom bots display the agent name that's configured in Conversational Cloud.)
* While each survey bot is listed individually in the dashboard, they all share a single agent connector.
* Successfully deployed survey bots display "Deployed" beneath the bot name.

<img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/surveyBot_monitoring1.png">

{: .important}
Keep in mind that all survey bots share a single agent connector, so performing any operation on one survey bot affects all the survey bots.

### Troubleshooting - Redeploy the connector

Redeploying the connector stops and restarts it. Use this as a troubleshooting technique when the connector appears to be in a stuck state.

**To redeploy the survey bot connector**

1. Access the Bots Status application as described [here](bots-status-overview.html#access-bots-status).
2. Use the filter controls to display the survey bots for the relevant environment.
3. Select one of the survey bots, and click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_vertical.png"> (3-dot icon) beside the bot name.
4. Select **Redeploy Connector**.
