---
title: Deploying Bots on Live Chat

level1: Products
level2: Bots
level3: Customer Facing Bots

order: 6

permalink: products-bots-chat.html

indicator:
---


### Step 1 - Set Up Your LiveEngage Configuration

If your brand is using Live Chat - both desktop and mobile web chats can incorporate bots utilizing the [Chat Agent API](chat-agent-getting-started.html){:target="_blank"}. 

1. Create a user for your bot: Go to the users tab and create a new user > populate the form with the bot information including the name that will display to customers as well as the icon.

2. Create a skill for your bot. From the same users tab, navigate to ‘skills’ and create a  new skill. Name the skill as appropriate for the use case of your bot and **ensure it has the word ‘bot’ in the skill name.** This is critical in order to create dedicated segments to services as well as for the reporting on the performance of your bot.

### Step 2 - Implement the Chat Agent API

In order to use the Chat Agent API, please follow the steps below:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information.
2. **Log a user into LiveEngage** using the [Login Service API](login-getting-started.html){:target="_blank"}. Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all Chat Agent API requests.
3. **Create an agent session** using the [Start Agent Session method](agent-start-agent-session.html){:target="_blank"}.
4. **Log out** using the [Login Service API](agent-logout.html){:target="_blank"}.

You can also use the chatbot simulator in order to learn how to implement the main agent methods provided by the Chat Agent API - [C​lick here](https://github.com/LivePersonInc/agent-sample-app){:target="_blank"} to review the full code repository on Github. 

### Step 3 - Assign your bot to a LiveEngage campaign and manage bot escalations

**Assign your bot to a Campaign**

Once your bot is created, it must be assigned into a LiveEngage campaign in order to be assigned to the right engagements and skills. 

1. Create a new campaign within LiveEngage by navigating to the ‘campaigns’ tab and click on new campaign.

2. Create a new engagement - this is the button that invites visitors to begin a chat.  The engagement can be in any format, size, shape of even a simple link (Ensure that in the first step, you select ‘conversation type - Live Chat’).

3. Configure the skill for this engagement via the studio - this should match the skill for your bot

4. Publish your campaign. 

**Manage escalations**
In cases where your bot will not be able to solve the consumer queries, escalation to a human agent should be determined. Your bot can be coached to perform escalation in several ways: Consumer types “Agent” to escalate, or using your AI and NLP service to perform intent matching for an escalation to the right skill. 

### Step 4 - Test your bot

Once your bot is connected to an engagement, you can begin to test the bot and see how it behaves as an agent within LiveEngage.  Conduct the following tests:

* Start a conversation and ensure the bot picks up the appropriate skill
* Ensure you are able to see the bot conversation from the agent workspace and monitor it in real time
* Ensure that the skill routing is correct
* View the agent list to see that your bot displays
* Test the escalation to human agent

### Step 5 - Monitor the performance of your bot

The LivePerson report builder will have detailed data and analysis on the performance of your bot.

Best practice - monitor the following statistics on your bot agents:

* MCS
* CSAT
* Number of Conversations resolved
* Number of transfers to human agent
* Reason for transfer
* A/B testing across different bots

