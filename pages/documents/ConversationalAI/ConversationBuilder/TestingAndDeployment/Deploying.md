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

### Deployment statuses
A bot connector can have one of the following statuses:

- **Connected**: The bot is running, and all end-to-end connections are working well.
- **Not Connected**: At least one component isn't working, causing end-to-end connections not to function. For help with this status, see [Troubleshoot a deployment](conversation-builder-testing-deployment-deploying-to-liveengage.html#troubleshoot-a-deployment), farther above.
- **Stopped**: All end-to-end connections are working well, but the bot isn't running.

### Custom configuration flags

When adding an Enterprise Integration to connect your automation to an LE bot agent user, there is a UI section at the bottom of the screen where feature flags are entered called **_Custom Configurations_**.

This section allows you to add key/value pairs that alter the behavior of your bot. 

These custom flags allow for fundamental changes in bot behaviour *outside* of the design of the automation and are injected at the point of connecting a bot automation to an agent on a 1:1 basis.

{: .important}
This can potentially cause many issues because it allows for human error when connecting the bot "brain" to an agent “body”. For example, if you forget/mis-configure these settings for 1 of your 3 duplicate bot agents all running the same automation you will get different behaviour between the bots within an account.

#### Applying these settings

When making additions/edits/deletions of these properties to your existing bot agent connections, you **must restart** the bot for the changes to take effect. This means stopping and then starting the bot again via the Operations role in Conversation Builder or via the Enterprise integrations section of an individual bot automation.

#### Flags

| FieldName   | Default Value      | Description    | Messaging | Chat | Required |
|-------------------------|--------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|------|----------|
| lpAccountId             | null                                            | LE Account Id                                                                                                                                                                                                                                                                                                                                                                                                    | Y         | Y    | Y        |
| lpAccountUser           | null                                          | LE Account Username                                                                                                                                                                                                                                                                                                                                                                                              | Y         | Y    | Y        |
| lpPassword              | null                                             | LE Account PW                                                                                                                                                                                                                                                                                                                                                                                                    | Y         | Y    | Y        |
| lpAppKey                | null                                               | LE Account App key, if OAUTH authentication selected                                                                                                                                                                                                                                                                                                                                                             | Y         | Y    | Y        |
| lpAppSecret             | null                                            | LE Account App Secret, if OAUTH authentication selected                                                                                                                                                                                                                                                                                                                                                          | Y         | Y    | Y        |
| lpAccessToken           | null                                          | LE Account Access Token, if OAUTH authentication selected                                                                                                                                                                                                                                                                                                                                                        | Y         | Y    | Y        |
| lpAccessTokenSecret     | null                                    | LE Account Access token secret, if OAUTH authentication selected                                                                                                                                                                                                                                                                                                                                                 | Y         | Y    | Y        |
| csdsDomain              | null                                                   | CSDS Domain for connecting to LiveEngage Servers\. Typically we don’t need to set anything for this field, but for LP QA accounts we need to set the field to:hc1n\.dev\.lprnd\.net                                                                                                                                                                                                                              | Y         | Y    | N        |
| lpUserRole              | ASSIGNED\_AGENT                                        | Determines whether the user is Agent Manager or Agent\.Possible values: ASSIGNED\_AGENT, MANAGER                                                                                                                                                                                                                                                                                                                 | Y         | N    | N        |
| enableAccessibility     | TRUE                                                   | Determines whether the fields sent have the tooltip attribute for accessibility\.                                                                                                                                                                                                                                                                                                                                | Y         | Y    | N        |
| fallbackSkillId         | null                                                   | Skill Id for agent escalation if the bot does not respond to user message after a period of time set byfallbackEscalationTime                                                                                                                                                                                                                                                                                    | Y         | Y    | N        |
| fallbackEscalationTime  | 3 \* 1000 \* 60                                        | Value in milliseconds for the period of time to pass before invoking fallback Escalation                                                                                                                                                                                                                                                                                                                         | Y         | N    | N        |
| defaultGreetingMessage  | ‘hi’                                                   | Greeting message sent to the bot when the user connects                                                                                                                                                                                                                                                                                                                                                          | Y         | Y    | N        |
| defaultStepupMessage    | ‘\_STEPUP\_                                            | StepUp message sent to the bot when Stepup Authentication happens                                                                                                                                                                                                                                                                                                                                                | Y         | N    | N        |
| messageDelay            | 300 \(default set to \.3 ms, 3 seconds would be 3000\) | We have logic to collect and aggregate user messages before sending to the bot service\. I\.e\. if the user send two messages, “hi” and “how are you”, we will wait 300 miliseconds after the “hi” message and if “how are you” comes in the 300 ms window, we will concatenate both messages and send it as one message “hi how are you” to the bot                                                             | Y         | N    | N        |
| skipAgentMessage        | false                                                  | If "false", when a bot receives a conversation it sees the last utterance in the conversation history - **_regardless who sent it (agent or consumer)_**. If "true", even if the last message in the conversation history is from an agent, it will be ignored - and the receiving bot will "see" the last **_consumer message_** as the first utterance for processing. Setting to "true" is useful when you have a routing bot passing off the conversation to a specialist bot and you do not want the transfer message sent from the routing bot to be seen by the specialist bot when it receives the conversation. | Y         | N    | N        |
| tileDisplay             | vertical                                               | Vertical or horizontal display for rich structured content\. Available for FB, Web, and GRBM. Setting tileDisplay to **horizontal** is useful for resolving formatting issues that may occur on specific channels.                                                                                                                                                                                                                                                                                                                     | Y         | N    | N        |
| messageResendMaxRetries | 1                                                      | After sending a message to the CB chatserver, if there is no bot response or mark\_seen message type, it will resend the message up to the messageResendMaxRetries count                                                                                                                                                                                                                                         | Y         | N    | N        |
| retryMessageInterval    | 30000                                                  | Tied with messageResendMaxRetries, will wait 30000 miliseconds before re\-sending the message                                                                                                                                                                                                                                                                                                                    | Y         | N    | N        |
| maxEscalationRetries    | 5                                                      | When the agent escalation fails, we send an \_agent\_escalation\_failed\_ message, however this can end in infinitely loop if the escalation keep failing\. This will set the max number of failure messages sent                                                                                                                                                                                                | Y         | N    | N        |
| ringAcceptWait          | 100 milliseconds                                       | Amount of time to wait before the bot accepts the ring from UMS\.                                                                                                                                                                                                                                                                                                                                                | Y         | N    | N        |
| useRedis                | “WEBSOCKET”                                            | If set to “REDIS”, will use redis Q connection instead of websocket connection                                                                                                                                                                                                                                                                                                                                   | N         | N    | N        |
| externalWebhookUrl      | null                                                   | URL used for HTTP Connector to post message to external endpoints                                                                                                                                                                                                                                                                                                                                                | Y         | Y    | N        |
| externalWebhookAPIKey   | null                                                   | Auth header for external HTTP headers, api calls will be sent as: Bearer \{api\_key\}                                                                                                                                                                                                                                                                                                                            | Y         | N    | N        |
| apigee\_auth\_url       | null                                                   | AllState related Auth API field                                                                                                                                                                                                                                                                                                                                                                                  | Y         | N    | N        |
| apigee\_grant\_type     | null                                                   | AllState related Auth API field                                                                                                                                                                                                                                                                                                                                                                                  | Y         | N    | N        |
| apigee\_audience        | null                                                   | AllState related Auth API field                                                                                                                                                                                                                                                                                                                                                                                  | Y         | N    | N        |
| apigee\_client\_id      | null                                                   | AllState related Auth API field                                                                                                                                                                                                                                                                                                                                                                                  | Y         | N    | N        |
| apigee\_client\_secret  | null                                                   | AllState related Auth API field                                                                                                                                                                                                                                                                                                                                                                                  | Y         | N    | N        |
