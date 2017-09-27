---
title: How it works - Watson and LiveEngage Operational Flow
keywords:
level1: Products
level2: Channels
level3: Watson with LiveEngage
order: 20
permalink: watson-how-it-works.html
indicator: messaging
---

Watson is integrated seamlessly into the LiveEngage platform, ensuring that from the moment a consumer initiates a conversation, LiveEngage analyzes and evaluates a series of parameters to ensure the consumer is directed to the right agent, be it Watson or a human agent.

Once assigned to a bot agent, the conversation will be handled by the bot, until it is resolved by one of the following actions:

* The bot resolves the conversation

* The bot escalates it to a human agent

* An agent manager manually takes over the conversation

![image alt text](images/image_0.png)

An escalation from a bot to a human agent can occur in three situations:

* By design, based on the intent

* When Watson is unable to identify the intent

* By consumer request

When a conversation is escalated, it is particularly important that the consumer is routed rapidly and accurately from Watson to the most appropriate agent. LiveEngage selects the appropriate skill based on the intent identified by the bot, performs an availability check immediately upon escalation and and displays the relevant message to the consumer.

![image alt text](images/image_1.png)

### Prerequisites

The following steps need to be taken prior to configuring the Watson connector with LiveEngage:

1. **Setup Watson:** The Watson Virtual Agent (WVA) should be setup and configured (via IBM Global Business Service or a certified LivePerson professional service engineer).

2. **Define your bot persona:** You will need to develop a persona, name and avatar for the bot, to match your understanding of your consumer’s needs and the brand experience you want to communicate via the bot.

3. **Enable LiveEngage account**: Messaging must be preconfigured on your account, along with the messaging channels you wish to use. LiveEngage offers in-app messaging, web messaging and messaging via Facebook, SMS and Google My Business. Please contact your LivePerson account team to ensure messaging and Watson are fully enabled on your account.

4. **Auto messages & Predefined Content:** You will need to define appropriate text for auto messages and predefined content, to ensure the consumer experience when communicating with a bot is as well-informed and seamless as possible.

5. **Define routing logic:** In order to assign incoming conversations from the mapped bot journies to the bot skill, the brand should work with LivePerson CS to configure automatic skill selection.

## Step 1: Planning

### Define a vision for your Watson implementation strategy

#### Set goals

Brands must first define their business-driven vision for adding Watson to their contact center operations, by defining their business goals. These may include:

* Decreasing operational costs

* Enhancing the customer experience and increasing customer satisfaction

* Increasing agent efficiency

* Reducing agent attrition and boosting agent satisfaction

#### Determine metrics

Defining your goals for Watson should also lead you to determine what metrics you will use to measure the impact and success of your bot operations, and thereby deciding what a successful Watson deployment would look like for your contact center. This can include CSAT, NPS and MCS target KPIs, as well as for transfer or containment rates, and agent retention.  

#### Map use cases

Watson is most effective when handling simple and automatic tasks; those that can make the biggest difference to the workload of your human agents once Watson takes them over. It’s important to take the time to map these use cases effectively to determine which tasks will be the most appropriate for Watson to handle. Consider questions such as:

* Evaluate the most common inquiries you handle from your consumers and determine if they are suitable for automation, or example, password reset, checking order status, account balance.

    * A transcript analysis of your chat and messaging conversations can help you to understand your top queries.

* Run a topic analysis on your conversations. LivePerson offers a specialized analytics service on natural language conversations - LivePerson Insights - that can be very useful in identifying topics for Watson’s actions.  

#### Assess customer feedback

LivePerson can help you to conduct user acceptance testing and validation to assess how consumers respond to journeys involving Watson, such as the following considerations:

* Are customers aware they are chatting with a bot? What is their reaction?

* How do they respond to terms such as virtual agent, Watson or bot?

* What is their response to being transferred to a human?

* Are your mapped use cases working? Are consumers behaving as you would expect?

Committing to Watson as an agent in your enterprise contact center should occur in stages over a long term project. It is recommended to start small in order to check performance and business impact and scale slowly.  

## Step 2: Configuring Watson with LiveEngage

### Bot as an agent setup

For Watson to perform like any other human agent in your contact center team, we need to ensure LiveEngage is facilitating operational management and efficiency for Watson as an agent. As an agent user, Watson acts as an agent / agent manager with all the relevant permissions. It can also be tracked and managed in the same way as any other human agent. To enable automation, the bot user will be able to login automatically.

Within LiveEngage, this means the following activities apply:

* User creation: a user is created for Watson, with the type ‘bot’

* Monitoring: Watson conversations are measure in the same way as human agent conversations

    * When a conversation with Watson begins, it automatically appears in the ‘Active Connections’ tab within LiveEngage

    * Watson is measured on the same real time KPIs agents are

    * Managers can click into the conversation and read the transcript in real time

* MCS: Watson, along with human agents, is monitored and measured with the Meaningful Connection Score, providing real time sentiment analysis

* Reporting: All data and reports available for agents are automatically available for Watson

![image alt text](images/image_2.png)

You should first **create a skill to be used only by the bot**. This will enable LiveEngage to route conversations appropriately and is also critical for reporting and analysis.

**To create a skill:**

1. Click on the users tab.

2. Click on Skills to view the Skills list.

3. Click Add Skill.

4. The Add skill dialog box will open.

5. Name the new skill and type in a description.

Note: the name given to the skill should be clear and easy to track, for example ‘watson-bot’.

6. Set the maximum wait time (in seconds) that you’re allowing your visitors to wait for agents with this skill. This ensures that your agents are fully occupied, yet not overextended, and that visitors won't wait longer than the maximum wait time.

7. Click Save.

For further information, refer to the [Skills documentation](https://ce-sr.s3.amazonaws.com/CA/Admin/skills/29_Skills.pdf).

You must also **create a bot type user**. The bot user can be configured with roles and permissions, in the same way as a human agent, and its performance will be tracked and reflected in reporting by LiveEngage.

**To create a bot type user:**

1. In the users tab, click on ‘new user’.

2. In the *User type* dropdown select **Bot**.

3. Select the avatar and name for your bot.

![image alt text](images/image_3.png)

4. In the *login method** *dropdown select **API key**, then click the **Generate** button.  The key will later be used in the Connector configuration.

5. Assign the relevant skill and agent group.

6. Set the maximum number of messaging conversations.

![image alt text](images/image_4.png)

Note: You must have admin or campaign manager permissions in order to create a bot type user.


#### Setup the connector

Onboarding the Watson connector is a two-part process, involving obtaining and entering Watson’s credentials and configuring the LiveEngage account to ensure it is enabled to facilitate Watson activity. This includes:

* creating a new LiveEngage user

* adding automatic messages

* defining default skills for escalation and failure

* completing intent to skill mapping

Your LivePerson team will support you with all of the backend configuration for your Watson connector. During this process, they will consult with you to ensure Watson is setup to reflect the brand image and consumer experience you want to deliver. This includes determining content for the following entities:

**Auto messages**

A number of automatic messages are required to display during certain scenarios, such as when Watson is not responding or when the conversation is escalated to a human agent.

**Skills**

To ensure the experience is always smooth for the consumer, default skills need to be mapped for Watson, in case of escalation or bot failure, or if skill mapping was not properly completed.

**Skill to intent mapping**

Mapping capabilities defined in Watson to the skills defined in LiveEngage is an important step to ensure the consumer has a seamless experience when interacting with the bot. Once the mapping is complete, upon an escalation the conversation will automatically be routed to the most appropriate skill.

#### Define the human agent workflow

For bot and human agents to work together effectively, the transition between bot and human must be seamless. Watson must be able to escalate a conversation to a human agent at appropriate points in the conversation, while agents and agent managers must also be able to step into the conversation at any time if they identify an issue.

**Bot to agent escalation**

* Automatic: Watson can identify and push an escalation based on intent, customer request or unsupported use case.

* Seamless: Both consumers and agents continue to use the same window and view the entire history and context of the conversation.

* Transparent: Consumers clearly see the avatar reflecting who they speak with. In addition, system messages communicate the status of the transfer.

* Availability check: Before routing to an agent, LiveEngage performs availability checks to ensure that agents within the identified skill are available. Relevant messages are conveyed to customers.

* Reporting: LiveEngage will report on the escalations and their reasons to help brands understand where and how to optimize Watson.

Watson should be treated as any other agent in the contact center team, and tracked and monitored accordingly. The following steps should be taken to establish the Watson - human agent workflow:

**Assign a human manager to Watson:**

It’s important to determine which agents or agent managers will monitor the bot in real time.

Enable the Takeover conversation permission:

1. Adjust the profile permissions of the agent or agent manager(s) to include the *Takeover conversation* permission. This will enable the agent or agent manager to takeover the conversation at any time from the bot, meaning they can step in

Note: If you would like to enable the *Takeover* *conversation *permission for some agents or agent managers, but not for others, this can be achieved by creating a new custom profile within the relevant role. For further information, refer to the [Customize user profiles documentation](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Admin/Permissions+(profiles).pdf).

2. Assign the created bot user to the human manager’s agent group.

![image alt text](images/image_5.png)

![image alt text](images/image_6.png)

**Pending agent response after transfer to skill**

When a human or bot agent transfers a conversation they are handling to a different skill, the conversation will automatically be set to pending agent response, regardless of which participant (agent or consumer) was the last one to respond within the conversation. This will ensure that when a bot transfers or escalates the conversation to an agent, it will be considered as an 'active' conversation by smart capacity and auto close, and treated accordingly.

Transferring to a different skill will also reset the conversation’s response time, which is displayed to the consumer and to agents. The KPIs on the real-time data bar will also update to reflect that a conversation is pending the agent’s response.
