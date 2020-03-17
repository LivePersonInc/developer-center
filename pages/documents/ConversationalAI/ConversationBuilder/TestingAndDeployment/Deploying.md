---
pagename: Deploying to LiveEngage
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Testing & Deployment
permalink: conversation-builder-testing-deployment-deploying-to-liveengage.html
indicator: both
---

As a bot developer, you can use Conversation Builder to quickly deploy bots to a LiveEngage environment.

### The high-level deployment process

#### Prerequisite steps

If you have [IP restrictions](https://knowledge.liveperson.com/security-regulations-security-ip-restriction.html) in place and you're accessing Conversation Builder from within LiveEngage (i.e., your browser is pointing to the "liveperson.net" domain), you must whitelist LivePerson's IP addresses within LiveEngage. You can find these details [here](https://knowledge.liveperson.com/security-regulations-security-configuring-your-firewall.html) in the Knowledge Center. However, if you're accessing Conversation Builder directly (i.e., your browser is pointing to the "livepersonai.com" domain), please contact LivePerson Support to obtain the AWS IP addresses to whitelist.

Also, before you can deploy a bot, you must complete the following, pre-requisite steps in LiveEngage:

1. Create a bot agent. This is a user where the type = "Bot." Make sure to enable the agent. Also make sure to create the agent with API-based authentication, not password-based authentication. The API-based authentication is more secure and doesn't expire. If your bot agent is currently using password-based authentication, you should update immediately.
2. Create a skill and assign it to the bot agent.
3. Create a campaign and engagement that routes to the skill you assigned to the bot agent.

For help with these steps, see the [LivePerson Knowledge Center](https://knowledge.liveperson.com).

#### The deployment process
After the pre-requisite steps are performed, at a high level, deployment is a two-step process:

1. [Add the agent connector](conversation-builder-testing-deployment-deploying-to-liveengage.html#add-a-bot-connector). This establishes the necessary connections to make the bot operational.
2. [Start the agent connector](conversation-builder-testing-deployment-deploying-to-liveengage.html#start-a-bot-agent). This gets the agent connector running in the target environment.

{: .important}
LivePerson recommends that, when you connect your bot to LiveEngage in a production environment, you deploy at least two LiveEngage agent connectors for a single bot. This is so the second can serve to support failover if the first goes down. Additionally, if you have traffic considerations, you might want to deploy three or more. A good baseline is no more than 50 concurrent conversations per agent connector (e.g., deploy 4 connectors to support 200 concurrent conversations).

For some practice at deployment, complete the [Connect to Live Engage](conversation-builder-tutorials-guides-getting-started.html) tutorial. 

### The Agent Connectors page
The Agent Connectors page makes it fast and easy to understand the status **(1)** of the agent connectors for a single bot. Unless you're troubleshooting a connector, typically you won't need to dive into the details **(2)** on the individual components that support the end-to-end connection. Use the Start/Stop toggle button **(3)** to start and stop an agent connector.

<img class="fancyimage" style="width:1100px" src="img/ConvoBuilder/deploy_agntCntrPg.png">

### Add an agent connector
Adding an agent connector creates a connection between the bot and a bot agent in the target LiveEngage environment.

**To add an agent connector**

1. Open the bot.
2. Click **Agent Connectors** in the upper-right corner.
3. Click **New Bot Connector** in the upper-right corner.
    
    The Add Agent Connector dialog appears.

4. Enter your account number in the field provided, and click <img style="width:40px" src="img/ConvoBuilder/icon_chevron_orange.png">. You can specify the account number of any account you have access to. For example, you might have Development and Production accounts.

    **Note:** If you've logged into Conversation Builder directly (i.e., you're on the AWS platform), you can specify any account, and the **Agent User ID** list will be populated accordingly. However, if you've logged into Conversation Builder via single sign-on through LiveEngage (i.e., you're on the LivePerson platform), this field behaves differently due to some built-in validation. In the latter case, the field is pre-populated with the number of your current account (i.e., the one you're logged into), but you can change it. If you change the account number, you must have a user account in whatever LiveEngage account you specify in order for the **Agent User ID** list to be populated accordingly. If you don't have a user account in the LiveEngage account, an error is displayed.

5. Specify the following in the dialog:
    - **Agent User ID**: Select the login name of the bot agent you intend to use. This was set in LiveEngage as a prerequisite step (discussed above). If you don't see the bot agent you need, verify that the agent is enabled; only enabled agents for the account that you specified appear in this list.
    - **Role (Agent or Manager)**: Select the profile that's assigned to the bot agent you intend to use. This was set in LiveEngage as a [prerequisite step](conversation-builder-testing-deployment-deploying-to-liveengage.html#prerequisite-steps).
    - **Conversation Type**: Select either "Chat" or "Messaging." This should match the type of LiveEngage account, which is either one or the other.
    - **Deploy to**: Select either "Demo" (for testing) or "Production," as appropriate. To deploy to Production, you must have the necessary privileges (i.e., the role of Bot Status Access or Administrator). As a bot developer who deploys bots for testing purposes, typically you'll set this to "Demo."
6. If desired, click **Advanced Options** and specify any optional, advanced settings:
    - **Fallback Skill ID**: If the skill (that you assigned to the bot agent) has a defined fallback skill, you can enter the fallback skill's ID here. The fallback skill is the skill to which to route the conversation as a fallback if no agents with the primary skill have free capacity. Fallback skills have several uses, but they're often used to escalate (transfer) a conversation from a bot agent to a live agent. You define fallback skills for skills in LiveEngage. For more on this, see the [LivePerson Knowledge Center](https://knowledge.liveperson.com).
    - **External Webhook URL**: This option is for brands that want to use HTTP instead of WebSocket for connection to LiveEngage. Enter the URL to which the HTTP connector will post user messages to external endpoints.
    - **Custom Configurations**: If desired, click " + ", and enter any custom configuration fields to set. For information on these, see [below](conversation-builder-testing-deployment-deploying-to-liveengage.html#custom-configuration-flags) in this topic.
    - **Accessibility**: Select this if you want the bot messages to support Accessibility. If you select this, the fields sent in the JSON object have the tooltip attribute.
7. Click **Save**.

    This establishes the connection between the bot and the bot agent in the target LiveEngage environment.
    
    To fully deploy the bot, now you must [start the agent connector](conversation-builder-testing-deployment-deploying-to-liveengage.html#start-a-bot-agent). 

### Edit an agent connector
You can edit an agent connector as long as 1) the agent connector isn't running, and 2) the specified bot agent is active in LiveEngage.

**To edit an agent connector**

1. Open the bot.
2. Click **Agent Connectors** in the upper-right corner.
3. If the connector is running, click **Stop**.
4. Move your mouse over the connector in the table, click the <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_dark.png"> icon, and select **Edit** from the menu that appears.
5. Edit the information, and click **Save**.

### Delete an agent connector
You can delete an agent connector as long as it isn't running.

**To delete an agent connector**

1. Open the bot.
2. Click **Agent Connectors** in the upper-right corner.
3. If the connector is running, click **Stop**.
4. Move your mouse over the connector in the table, click the <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_dark.png"> icon, and select **Delete** from the menu that appears.
5. Click **Yes** to confirm the deletion. 

### Start an agent connector
1. Open the bot.
2. Click **Agent Connectors** in the upper-right corner.
3. Locate the connector in the table, and click its **Start** button.

{: .important}
Establishing the connection can take a few minutes.

### Stop an agent connector
1. Open the bot.
2. Click **Agent Connectors** in the upper-right corner.
3. Locate the connector in the table, and click its **Stop** button.

### Troubleshoot a deployment
If a connector enters an Offline status, which is an error status, click **Details** to view the statuses of the individual, underlying components that support the end-to-end connection.

<img class="fancyimage" style="width:375px" src="img/ConvoBuilder/deploy_detailsMsgs.png">

* **Failed connection**: In the event of a failed connection, wait some time, and then try to stop and restart the connector. If you still need assistance, please contact your LivePerson representative.

* **401 "unauthorized" error**: This error can occur if you try to add an agent connector for a bot user that wasn't created by you. Either add the agent connector for a different bot user that you have created, or have the creator of the bot user add the agent connector.

### Deployment statuses
An agent connector can have one of the following statuses:

- **Ready to Start**: The connector was added successfully, but it hasn't been started for the first time.
- **Online**: The connector is running, and all end-to-end connections are working well.
- **Offline**: At least one underlying component isn't working, causing end-to-end connections not to function. The connector is in an error state and isn't running.
- **Stopped**: The connector isn't running because it was manually stopped. 

### Custom configuration fields

Custom configuration fields are key/value pairs that you can add to alter the behavior of the bot. They allow for fundamental changes in the bot's behavior *outside* of the design of the bot and are injected at the point of connecting the bot to an agent on a 1:1 basis.

{: .important}
Use of custom configuration fields potentially can cause many issues because it allows for human error when connecting the bot "brain" to an agent “body.” For example, if you forget and mis-configure these settings for one of your duplicate bot connectors all running the same bot, you'll get different behavior between the bots within an account.

#### Fields

| Field Name   | Default Value      | Description    | Messaging | Chat | Required |
|--------|---------|-------------|-----------|------|----------|
| fallbackEscalationTime  | 3 \* 1000 \* 60   | Value in milliseconds for the period of time to pass before invoking fallback Escalation    | Y   | N    | N    |
| defaultGreetingMessage  | ‘hi’   | Greeting message sent to the bot when the user connects   | Y         | Y    | N  |
| defaultStepupMessage  | ‘\_STEPUP\_  | StepUp message sent to the bot when Stepup Authentication happens   | Y  | N    | N   |
| messageDelay  | 300 \(default set to \.3 ms, 3 seconds would be 3000\) | We have logic to collect and aggregate user messages before sending to the bot service\. I\.e\. if the user send two messages, “hi” and “how are you”, we will wait 300 miliseconds after the “hi” message and if “how are you” comes in the 300 ms window, we will concatenate both messages and send it as one message “hi how are you” to the bot          | Y  | N    | N   |
| skipAgentMessage  | false   | If "false", when a bot receives a conversation it sees the last utterance in the conversation history - **_regardless who sent it (agent or consumer)_**. If "true", even if the last message in the conversation history is from an agent, it will be ignored - and the receiving bot will "see" the last **_consumer message_** as the first utterance for processing. Setting to "true" is useful when you have a routing bot passing off the conversation to a specialist bot and you do not want the transfer message sent from the routing bot to be seen by the specialist bot when it receives the conversation. | Y  | N    | N        |
| tileDisplay  | vertical  | Vertical or horizontal display for rich structured content\. Available for FB, Web, and GRBM. Setting tileDisplay to **horizontal** is useful for resolving formatting issues that may occur on specific channels.   | Y   | N    | N   |
| messageResendMaxRetries | 1    | After sending a message to the CB chatserver, if there is no bot response or mark\_seen message type, it will resend the message up to the messageResendMaxRetries count       | Y    | N    | N  |
| retryMessageInterval  | 30000    | Tied with messageResendMaxRetries, will wait 30000 miliseconds before re\-sending the message   | Y   | N    | N    |
| maxEscalationRetries    | 5     | When the agent escalation fails, we send an \_agent\_escalation\_failed\_ message, however this can end in infinitely loop if the escalation keep failing\. This will set the max number of failure messages sent                                               | Y    | N    | N   |
| ringAcceptWait   | 100 milliseconds  | Amount of time to wait before the bot accepts the ring from UMS\.    | Y   | N    | N   |