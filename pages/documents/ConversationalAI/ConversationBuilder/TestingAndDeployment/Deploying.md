---
pagename: Deploying to LiveEngage
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Testing & Deployment
permalink: conversation-builder-testing-deployment-deploying-to-liveengage.html
indicator: both
---

As a bot developer, you can use the same application, Conversation Builder, that you use to create your bots to also quickly deploy them to a LiveEngage environment. Typically, you'll want to do this for testing purposes.

### The High-Level Deployment Process

Before you can deploy a bot, you must complete the following, pre-requisite steps in LiveEngage:

1. Create at least one skill to assign to your bot agent.
2. Create the bot agent (user type = Bot), and assign the skill to the bot agent.
3. Create a campaign and engagement that routes to the skill that you assigned to the bot agent.

Deployment is then a two-step process:

1. **[Add the bot connector](conversation-builder-testing-deployment-deploying-to-liveengage.html#add-a-bot-connector)**. This creates the connection between the bot and the target LiveEngage environment, but it doesn't *fully* deploy the bot.
2. **[Start the bot agent](conversation-builder-testing-deployment-deploying-to-liveengage.html#start-a-bot-agent)**. This fully deploys the bot, which is now running in the target environment.

{: .important}
LivePerson recommends that, when you connect your bot to LiveEngage, you deploy at least two LiveEngage bot agents for a single bot. This is so the second bot agent can serve to support failover. Additionally, if you have traffic considerations, you might want to deploy three or more bot agents.

For some practice at deployment, try [tutorial #4](conversation-builder-getting-started-4-connect-to-liveengage.html). 

### The Deploy Page
The Deploy page makes it fast and easy to understand the status (1) of all your deployed bots. Unless you're troubleshooting a connector, typically, you won't need to dive into the details (2) on the individual components that support the end-to-end connection.

*add annotated screen here*

### Add a Bot Connector
Adding a bot connector creates a connection between the bot and the target LiveEngage environment.

**To add a bot connector**

1. Open the bot.
2. Click **DEPLOY** in the upper-right corner.
3. Click **Add Bot Connector**.
4. In the Add New Bot Connector dialog, specify the following:
    - **Username**:
    - **Conversation type**: 
    - **Role**: 
    - **Target environment** (deploy to where): Select either "Demo" (for Test) or "Production." To deploy to Production, you must have the necessary privileges.
5. If desired, click Configurations and specify the advanced settings, which are optional:
    - **External Webhook URL**: 
    - **Fallback Skill ID**: 
    - **Custom Configurations**:
    - **Accessibility**: 
6. Click **Add**.

    This creates the connection between the bot and the target LiveEngage environment, but it doesn't fully deploy the bot. To do the latter, you must [start the bot agent](conversation-builder-testing-deployment-deploying-to-liveengage.html#start-a-bot-agent). 

### Edit a Bot Connector
You can edit a bot connector as long as the bot isn't running.

**To edit a bot connector**

1. Open the bot.
2. Click **DEPLOY** in the upper-right corner.
3. Locate the bot connector in the table, click its  icon, and select **Edit** from the menu that appears.
4. Edit the information and click **Save**.

### Delete a Bot Connector
You can delete a bot connector as long as the bot isn't running.

**To delete a bot connector**

1. Open the bot.
2. Click **DEPLOY** in the upper-right corner.
3. Locate the bot connector in the table, click its  icon, and select **Delete** from the menu that appears.
4. Click **TBD** to confirm the deletion. 

### Start a Bot Agent
1. Open the bot.
2. Click **DEPLOY** in the upper-right corner.
3. Locate the bot connector in the table, and click its **Start** button.

### Stop an Bot Agent
1. Open the bot.
2. Click **DEPLOY** in the upper-right corner.
3. Locate the bot connector in the table, and click its **Stop** button.

### Troubleshoot a deployment
TBA

### Custom configuration flags

*Move this doc from the Enterprise Integrations page?*

### Deployment Statuses
A bot connector can have one of the following statuses:

- **Connected**: The bot is running, and all end-to-end connections are working well.
- **Not Connected**: At least one component isn't working, causing end-to-end connections not to function. For help with this status, see [Troubleshoot a deployment](conversation-builder-testing-deployment-deploying-to-liveengage.html#troubleshoot-a-deployment), farther above.
- **Stopped**: All end-to-end connections are working well, but the bot isn't running.