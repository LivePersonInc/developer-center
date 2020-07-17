---
pagename: Managing Custom Bots
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Bots Status
permalink: bots-status-managing-custom-bots.html
indicator: both
---

### Supporting failover

LivePerson recommends that, when you connect your bot to Conversational Cloud in a production environment, you deploy at least two Conversational Cloud agent connectors for a single bot. This is so the second can serve to support failover if the first goes down. Additionally, if you have traffic considerations, you might want to deploy three or more. A good baseline is no more than 50 concurrent conversations per agent connector (e.g., deploy 4 connectors to support 200 concurrent conversations).

### Stop an agent

Typically, you don't stop an agent, but you might need to in a few cases:

* You need to make a change to the connector's configuration. This requires that you first stop the agent.
* You're seeing some undesirable behavior in the bot, so you want to take the bot offline temporarily.

When you stop an agent, in-progress conversations are left as is until the agent is started again.

**To stop an agent**

1. Access the Bots Status application as described [here](bots-status-overview.html#access-bots-status).
2. Use the filter controls to display the bots for the relevant environment.
3. Select the bot, and click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png"> (3-dot icon) beside the bot name.
4. Select **Stop Agent**.
5. Click **Yes** to confirm the action.

    The status of the agent connector changes to Stopped.

### Start an agent

Starting an agent gets the connector running so that new conversations can start to occur. Be aware that it can take a few minutes for the agent to start.

**To start an agent**

1. Access the Bots Status application as described [here](bots-status-overview.html#access-bots-status).
2. Use the filter controls to display the bots for the relevant environment.
3. Select the bot, and click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png"> (3-dot icon) beside the bot name.
4. Select **Start Agent**.

    The status of the agent connector changes to Online.

### Redeploy an agent

Reploying an agent allows you to take an agent connector that's deployed in one environment and redeploy it to a different environment. For example, when you're ready, you can use this capability to take an agent that's deployed in the Demo environment and redeploy it to the Production environment. 

This capability to switch the environment eliminates the need to delete the agent connector and re-add it for the desired environment.

**To redeploy an agent**

1. Access the Bots Status application as described [here](bots-status-overview.html#access-bots-status).
2. Use the filter controls to display the bots for the relevant environment.
3. Stop the bot if it is currently online.
4. Select the bot, and click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png"> (3-dot icon) beside the bot name.
5. Select **Re-deploy Agent**.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/botsStatus_redeploy.png">

6. In the **Environment** drop-down, select the target environment.
7. Click **Save Settings**.
8. Click **Yes** to confirm the action.
9. Start the agent.

### Troubleshooting

If you encounter errors or issues, see [here](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#troubleshoot-a-deployment) for troubleshooting information.