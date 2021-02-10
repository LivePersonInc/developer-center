---
pagename: Deploying to Conversational Cloud
redirect_from:
  - conversation-builder-testing-deployment-deploying-to-liveengage.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Testing & Deployment
permalink: conversation-builder-testing-deployment-deploying-to-conversational-cloud.html
indicator: both
---

As a bot developer, you can use Conversation Builder to quickly deploy bots to a Conversational Cloud environment.

### The high-level deployment process

#### Prerequisite steps

{: .important}
If you have [IP restrictions](https://knowledge.liveperson.com/security-regulations-security-ip-restriction.html) in place, you'll need to do some whitelisting before adding agent connectors. For details, see [here](conversation-builder-networking-security.html).

Before you can deploy a bot, you must complete the following, pre-requisite steps in Conversational Cloud:

1. Create a bot agent. This is a user where the type = "Bot." Make sure to enable the agent. Also make sure to create the agent with API-based authentication, not password-based authentication. The API-based authentication is more secure and doesn't expire. If your bot agent is currently using password-based authentication, you should update immediately.
2. Create a skill and assign it to the bot agent.
3. Create a campaign and engagement that routes to the skill you assigned to the bot agent.

For help with these steps, see the [LivePerson Knowledge Center](https://knowledge.liveperson.com).

#### The deployment process
After the pre-requisite steps are performed, at a high level, deployment is a two-step process:

1. Add the agent connector. This establishes the necessary connections to make the bot operational.
2. Start the agent connector. This gets the agent connector running in the target environment.

{: .important}
LivePerson recommends that, when you connect your bot to Conversational Cloud in a production environment, you deploy at least two Conversational Cloud agent connectors for a single bot. This is so the second can serve to support failover if the first goes down. Additionally, if you have traffic considerations, you might want to deploy three or more. A good baseline is no more than 50 concurrent conversations per agent connector (e.g., deploy 4 connectors to support 200 concurrent conversations).

For some practice at deployment, complete the [Deploy the Bot](tutorials-guides-getting-started-with-bot-building-deploy-the-bot.html) tutorial.

### The Agent Connectors page
The Agent Connectors page makes it fast and easy to understand the status of the agent connectors for a single bot. Unless you're troubleshooting a connector, typically you won't need to dive into the details on the individual components that support the end-to-end connection. Use the Start/Stop toggle button to start and stop an agent connector.

<img class="fancyimage" style="width:1100px" src="img/ConvoBuilder/deploy_agntCntrPg.png">

### Add an agent connector
Adding an agent connector creates a connection between the bot and a bot agent in the target Conversational Cloud environment.

{: .important}
An agent can belong to only one bot.

**To add an agent connector**

1. Open the bot.
2. Click **Agent Connectors** in the upper-left corner.
3. Click **Add Agent Connector** in the upper-right corner.
    
    The Add Agent Connector dialog appears.

4. Enter your account number in the field provided, and click <img style="width:40px" src="img/ConvoBuilder/icon_chevron_orange.png">. You can specify the account number of any account you have access to. For example, you might have Development and Production accounts.

    **Note:** If you've logged into Conversation Builder directly (i.e., you're on the AWS platform), you can specify any account, and the **Agent User ID** list will be populated accordingly. However, if you've logged into Conversation Builder via single sign-on through Conversational Cloud (i.e., you're on the LivePerson platform), this field behaves differently due to some built-in validation. In the latter case, the field is pre-populated with the number of your current account (i.e., the one you're logged into), but you can change it. If you change the account number, you must have a user account in whatever Conversational Cloud account you specify in order for the **Agent User ID** list to be populated accordingly. If you don't have a user account in the Conversational Cloud account, an error is displayed.

5. Specify the following in the dialog:
    - **Agent User ID**: Select the login name of the bot agent you intend to use. This was set in Conversational Cloud as a prerequisite step (discussed above). If you don't see the bot agent you need, verify that the agent is enabled; only enabled agents for the account that you specified appear in this list.
    - **Role (Agent or Manager)**: Select the profile that's assigned to the bot agent you intend to use. This was set in Conversational Cloud as a prerequisite step (see farther above).
    - **Conversation Type**: Select either "Chat" or "Messaging." This should match the type of Conversational Cloud account, which is either one or the other.
    - **Deploy to**: Select either "Demo" (for testing) or "Production," as appropriate. To deploy to Production, you must have the necessary privileges (i.e., the role of Bot Status Access or Administrator). As a bot developer who deploys bots for testing purposes, typically you'll set this to "Demo."
6. If desired, click **Advanced Options** and specify any optional, advanced settings:
    - **Fallback Skill ID**: If the skill (that you assigned to the bot agent) has a defined fallback skill, you can enter the fallback skill's ID here. The fallback skill is the skill to which to route the conversation as a fallback if no agents with the primary skill have free capacity. Fallback skills have several uses, but they're often used to escalate (transfer) a conversation from a bot agent to a live agent. You define fallback skills for skills in Conversational Cloud. For more on this, see the [LivePerson Knowledge Center](https://knowledge.liveperson.com).
    - **External Webhook URL**: This option is for brands that want to use HTTP instead of WebSocket for connection to Conversational Cloud. Enter the URL to which the HTTP connector will post user messages to external endpoints.
    - **Custom Configurations**: If desired, click **+ Custom Configurations**, and enter any custom configuration fields to set. For information on these, see "Custom configuration fields" later in this topic.
    - **Accessibility**: Select this if you want the bot messages to support Accessibility. If you select this, the fields sent in the JSON object have the tooltip attribute.
7. Click **Save**.

    This establishes the connection between the bot and the bot agent in the target Conversational Cloud environment.
    
    To fully deploy the bot, now you must start the agent connector. 

### Edit an agent connector
You can edit an agent connector as long as 1) the agent connector isn't running, and 2) the specified bot agent is active in Conversational Cloud.

**To edit an agent connector**

1. Open the bot.
2. Click **Agent Connectors** in the upper-left corner.
3. If the connector is running, click **Stop**.
4. Move your mouse over the connector in the table, click the <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_dark.png"> icon, and select **Edit** from the menu that appears.
5. Edit the information, and click **Save**.

### Delete an agent connector
You can delete an agent connector as long as it isn't running.

**To delete an agent connector**

1. Open the bot.
2. Click **Agent Connectors** in the upper-left corner.
3. If the connector is running, click **Stop**.
4. Move your mouse over the connector in the table, click the <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_dark.png"> icon, and select **Delete** from the menu that appears.
5. Click **Yes** to confirm the deletion. 

### Start an agent connector
1. Open the bot.
2. Click **Agent Connectors** in the upper-left corner.
3. Locate the connector in the table, and click its **Start** button.

{: .important}
Establishing the connection can take a few minutes.

### Stop an agent connector
1. Open the bot.
2. Click **Agent Connectors** in the upper-left corner.
3. Locate the connector in the table, and click its **Stop** button.

### Troubleshoot a deployment
If a connector enters an Offline status, which is an error status, click **Details** to view the statuses of the individual, underlying components that support the end-to-end connection.

<img class="fancyimage" style="width:375px" src="img/ConvoBuilder/deploy_detailsMsgs.png">

* **Failed connection**: In the event of a failed connection, wait some time, and then try to stop and restart the connector. If you still need assistance, please contact your LivePerson representative.

* **401 "unauthorized" error**: This error can occur if you try to add an agent connector for a bot user that wasn't created by you. Either add the agent connector for a different bot user created by you, or have the creator of the bot user add the agent connector.

### Deployment statuses
For status descriptions, see [here](bots-status-overview.html#statuses).

### Custom configuration fields

Custom configuration fields are optional key/value pairs that you can add to alter the behavior of the bot. They allow for fundamental changes in the bot's behavior *outside* of the design of the bot and are injected at the point of connecting the bot to an agent on a 1:1 basis.
 
You add these fields in the **Advanced Options** of the agent connector.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/deploy_customConfig.png">

{: .important}
If you have multiple agent connectors deployed for the same bot, remember to add identical custom configuration settings to each of them. Otherwise, you'll get different behavior between the bots within an account.

#### acceptStatusEventValue
By default, a message from the consumer is shown to the consumer as "Read' once it is sent. Set this field to "SENT" if you want the message to be shown as "Sent" instead. Once the agent logs into Conversational Cloud and views the message, this status will change to "Read."

**Default value**: READ<br>
**Messaging**: Yes<br>
**Chat**: No

#### defaultGreetingMessage
The greeting message sent to the bot when the user connects.

**Default value**: hi<br>
**Messaging**: Yes<br>
**Chat**: Yes

#### defaultStepupMessage
The StepUp message sent to the bot when Stepup Authentication happens.

**Default value**: \_STEPUP\_<br>
**Messaging**: Yes<br>
**Chat**: No

#### enableButtonTextOnPostback

{: .important}
This custom configuration field controls the behavior of Structured and Button questions, not Quick Reply questions.

By default, when you specify a callback value for a button in a [Structured](conversation-builder-interactions-questions.html) or [Button](conversation-builder-interactions-questions.html) question, that value is sent to the bot when the consumer selects the button. What’s more, that value, not the button’s label, is displayed to the consumer as their selected choice.

In many cases though, you want to send the callback value to the bot, but you want to hide this from the consumer, displaying instead the button’s label to the consumer as their choice. You can accomplish this with the enableButtonTextOnPostback custom configuration field.

If you set this field to true, the selected button’s label is displayed to the consumer as their choice. You can still retrieve the callback value that is sent to the bot; to do this, use the [getButtonPayload](conversation-builder-scripting-functions-manage-conversation-flow.html#get-button-payload) scripting function in the Process User Response code for the question interaction.

If this field is unset or you set this field to false, the selected button’s callback value is displayed to the consumer as their choice.

**Default value**: false<br>
**Messaging**: Yes<br>
**Chat**: No

#### fallbackEscalationTime
The value in milliseconds for the period of time to pass before invoking fallback escalation.

**Default value**: 3 \* 1000 \* 60<br>
**Messaging**: Yes<br>
**Chat**: No

#### maxConsumerMessageDelay
The maximum time delay in minutes between the bot agent's receipt of the last consumer message (to which the bot responded) and its receipt of the next consumer message. If the next message is received after this time has elapsed, the bot ignores the message and does not respond.

For example, assume the bot agent receives a message from the consumer at 1:00 p.m., and it then receives the consumer's next message at 1:20 p.m. The delay between consumer messages is 20 minutes. If the maxConsumerMessageDelay is set to 30 minutes, the bot will respond to the message received at 1:20 p.m.

Conversely, assume the bot agent receives a message from the consumer at 1:00 p.m., and it then receives the consumer's next message at 2:00 p.m. The delay between consumer messages is 60 minutes. If the maxConsumerMessageDelay is set to 30 minutes, the bot will not respond to the message received at 2:00 p.m.

The default value of 30 minutes should suit most use cases due to the sequential nature of bot conversations, where the conversation either ends in resolution or escalation. However, messaging is asynchronous, so a consumer might reply in intervals that are longer than 30 minutes. As a result, you can increase this value if needed based on your use cases.

**Default value**: 30<br>
**Messaging**: Yes<br>
**Chat**: No<br>

#### maxEscalationRetries
When the agent escalation fails, we send an \_agent\_escalation\_failed\_ message. However, this can end in infinitely loop if the escalation keeps failing. This will set the max number of failure messages sent.

**Default value**: 5<br>
**Messaging**: Yes<br>
**Chat**: No

#### messageDelay
We have logic to collect and aggregate user messages before sending to the bot service, i.e., if the user sends two messages, “hi” and “how are you,” we will wait 300 milliseconds after the “hi” message and if “how are you” comes in the 300 ms window, we will concatenate both messages and send it as one message “hi how are you” to the bot.

**Default value**: 300 \(default set to \.3 ms, 3 seconds would be 3000\)<br>
**Messaging**: Yes<br>
**Chat**: No

#### messageResendMaxRetries
After sending a message to the Conversation Builder chat server, if there is no bot response or mark\_seen message type, it will resend the message up to the messageResendMaxRetries count.

**Default value**: 1<br>
**Messaging**: Yes<br>
**Chat**: No

#### retryMessageInterval
Tied with messageResendMaxRetries; wait 30000 milliseconds before re-sending the message.

**Default value**: 30000<br>
**Messaging**: Yes<br>
**Chat**: No

#### ringAcceptWait
The amount of time in milliseconds to wait before the bot accepts the ring from UMS.

**Default value**: 100<br>
**Messaging**: Yes<br>
**Chat**: No

#### skipAgentMessage
If "false", when a bot receives a conversation, it sees the last utterance in the conversation history *_regardless of who sent it (agent or consumer)_*. If "true", even if the last message in the conversation history is from an agent, it will be ignored, and the receiving bot will "see" the last *_consumer message_* as the first utterance for processing. Setting to "true" is useful when you have a routing bot passing off the conversation to a specialist bot, and you don't want the transfer message sent from the routing bot to be seen by the specialist bot when it receives the conversation.

**Default value**: false<br>
**Messaging**: Yes<br>
**Chat**: No

#### tileDisplay
Vertical or horizontal display for rich structured content. Available for FB, Web, and GRBM. Setting tileDisplay to "horizontal" is useful for resolving formatting issues that might occur on specific channels.

**Default value**: vertical<br>
**Messaging**: Yes<br>
**Chat**: No
