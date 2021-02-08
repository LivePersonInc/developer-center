---
pagename: Managing Custom Bots
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Bots Status
permalink: bots-status-managing-custom-bots.html
indicator: both
---

### Introduction

In Bots Status, you use the **Custom Connectors** tab of the **Bot Agents** page to perform functions on agents (restart, stop, start, etc.).

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/botsStatus_custom_connectors.png">

Use the filters in the upper-right corner to display the desired agents.

The metrics displayed at the top of the page are affected by the **Environment** filter and no others.

<img class="fancyimage" style="width:300px" src="img/ConvoBuilder/botsStatus_filter.png">

### Supporting failover

LivePerson recommends that, when you connect your bot to Conversational Cloud in a production environment, you deploy at least two Conversational Cloud agent connectors for a single bot. This is so the second can serve to support failover if the first goes down. Additionally, if you have traffic considerations, you might want to deploy three or more. A good baseline is no more than 50 concurrent conversations per agent connector (e.g., deploy 4 connectors to support 200 concurrent conversations).

### Restart multiple agents

As a convenience, the Restart Agents function lets you restart multiple agents at once. Use this to stop, then start again, agents when needed. For example, you might need to do this to re-establish the agent's connection to a resource (e.g., Conversational Cloud) if the resource happens to go down, then come online again.

**To restart multiple agents**

1. Access the Bots Status application as described [here](bots-status-overview.html#access-bots-status).

    The dashboard is displayed by default.

2. Click **Bot Agents** in the upper-left corner.
3. On the **Custom Connectors** tab, use the filter controls to display the bots for the relevant environment. (The bots for Production are displayed by default.)
4. Select the checkboxes for the bots, and then select **Restart Agents** from the **Actions** list.

### Stop an agent

Typically, you don't stop an agent, but you might need to in a few cases:

* You need to make a change to the connector's configuration. This requires that you first stop the agent.
* You're seeing some undesirable behavior in the bot, so you want to take the bot offline temporarily.

When you stop an agent, in-progress conversations are left as is until the agent is started again.

**To stop an agent**

1. Access the Bots Status application as described [here](bots-status-overview.html#access-bots-status).

    The dashboard is displayed by default.

2. Click **Bot Agents** in the upper-left corner.
3. On the **Custom Connectors** tab, use the filter controls to display the bots for the relevant environment. (The bots for Production are displayed by default.)
4. Select the checkbox for the bot, and then select **Stop Agent** from the **Actions** list.
5. Click **Yes** to confirm the action.

    The status of the agent connector changes to Stopped.

### Start an agent

Starting an agent gets the connector running so that new conversations can start to occur. Be aware that it can take a few minutes for the agent to start.

**To start an agent**

1. Access the Bots Status application as described [here](bots-status-overview.html#access-bots-status).

    The dashboard is displayed by default.

2. Click **Bot Agents** in the upper-left corner.
3. On the **Custom Connectors** tab, use the filter controls to display the bots for the relevant environment. (The bots for Production are displayed by default.)
4. Select the checkbox for the bot, and then select **Start Agent** from the **Actions** list.

    The status of the agent connector changes to Online.

### Redeploy an agent

Reploying an agent allows you to take an agent connector that's deployed in one environment and redeploy it to a different environment. For example, when you're ready, you can use this capability to take an agent that's deployed in the Demo environment and redeploy it to the Production environment. 

This capability to switch the environment eliminates the need to delete the agent connector and re-add it for the desired environment.

**To redeploy an agent**

1. Access the Bots Status application as described [here](bots-status-overview.html#access-bots-status).

    The dashboard is displayed by default.

2. Click **Bot Agents** in the upper-left corner.
3. On the **Custom Connectors** tab, use the filter controls to display the bots for the relevant environment.  (The bots for Production are displayed by default.)
4. Stop the bot if it is currently online.
5. Select the checkbox for the bot, and then select **Re-deploy Agent** from the **Actions** list.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/botsStatus_redeploy.png">

6. In the **Environment** drop-down, select the target environment.
7. Click **Save Settings**.
8. Click **Yes** to confirm the action.
9. Start the agent.

### View or edit an agent connector

For convenience, you can view and edit an agent connector right from the Bot Agents page in Bots Status.

**To view or edit an agent connector**

1. Access the Bots Status application as described [here](bots-status-overview.html#access-bots-status).

    The dashboard is displayed by default.

2. Click **Bot Agents** in the upper-left corner.
3. If you need to edit the agent connector, stop the agent if it is running.
4. Click the name of the agent, i.e., click the row in the table.

    The **Edit Agent Connector** window is displayed, where you can view and edit the information.

5. If desired, edit the agent connector. For more on this, see [here](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#add-an-agent-connector).
6. If you edited the agent connector, click **Save**. And at the appropriate time, restart the agent for the changes to take effect.

### Troubleshooting

If you encounter errors or issues, see [here](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#troubleshoot-a-deployment) for troubleshooting information.