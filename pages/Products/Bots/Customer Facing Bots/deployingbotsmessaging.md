---
title: Deploying Bots on Messaging

level1: Solutions
level2: Bots
level3: Customer Facing Bots

order: 7

permalink: products-bots-messaging.html

indicator:
---

### Step 1 - Set Up Your LiveEngage Configuration

1. Ensure your LiveEngage account is provisioned for messaging. (A quick way to know if you have messaging enabled is if you see the 'all connections’ list displayed on your workspace).

2. Create a user for your bot. Go to the users tab in LiveEngage and create a new user.  Populate the form with the bot information including the name that will display to customers as well as the icon. Some best practices:

	* Bot should be assigned to a designated bot skill.  This is critical in order to create dedicated segments to services as well as for the reporting on the performance of your bot.

	* Skill assigned with your bots are also important for escalation purposes, when you have more than one bot in your contact center. For example, if one of your agents decides to escalate to a bot in order to quickly perform a task, he should be able to distinguish between the bots expertise by the skill they are assigned to.   

	* Uploading an avatar for your bot is important when looking to achieve a level of transparency with your consumers. Clarifying to your consumers they are messaging with a bot will create a transparent user experience and eliminate miscommunication.  

### Step 2 - Implement the Messaging Agent SDK

Our Messaging Agent SDK can be found at [this location](messaging-agent-sdk-overview.html){:target="_blank"}.

Based on the use cases identified for your bot, you can create a simple bot for specific tasks or operations, or a more complex bot that acts as a virtual agent. 

#### Creating a simple bot

A simple bot within LiveEngage is one that handles a simple task and does not have any backend integrations. 

The following example and sample code demonstrate an 'automatic messages’ bot which subscribes to all incoming conversations and sends them a welcome message. 

[Click here](https://github.com/LivePersonInc/node-agent-sdk#running-the-sample-app){:target="_blank"} for sample code and instructions. 
​

#### Creating an advanced bot

Utilize the methods provided by LivePerson’s Messaging Agent SDK to automate your bot agent activities. 

The following example demonstrating running a bot using the major API calls.

[C​lick here](https://github.com/LivePersonInc/node-agent-sdk/tree/master/examples/agent-bot){:target="_blank"} to review the full code repository on Github. 

You can also watch this demo video, which will guide you on how to run this example bot:

[https://www.youtube.com/embed/7PVj6nhjG5o](https://www.youtube.com/embed/7PVj6nhjG5o){:target="_blank"}

### Step 3 - Create backup systems for your bot with Clusters (optional)

For enterprise brands, take additional measure to ensure the scalability of your bot to handle large volumes through setting up bot clusters that enable: 


* Bot Resiliency - If one node crashes, one ​of the other ​clusters ​will reconnect the bot.

* Multiple Bots - The bots will be spread across the cluster’s nodes. If one node fails the other will share its bots. If a new node is added to the cluster it will take some of the bots from other nodes.


This example demonstrates running a bot on a ​horizontal scalable cluster. It can be used for a few use cases:

[C​lick here](https://github.com/LivePersonInc/node-agent-sdk/tree/master/examples/cluster){:target="_blank"} to review the full code repository on Github. 
​
You can also watch the demo video which will guide you through this example bot:
[https://www.youtube.com/embed/4FgZa87sDho](https://www.youtube.com/embed/4FgZa87sDho){:target="_blank"}

​As well as a code review video: 
[https://www.youtube.com/embed/QZiNzkWgPWk](https://www.youtube.com/embed/QZiNzkWgPWk){:target="_blank"}

### Step 4 - Assign your bot to engagements and manage bot escalations

With LiveEngage your can decide which messaging entry points will be assigned to the different bot skills in your contact center. This means you can decide to have a bot skill dedicated only to your Facebook messaging conversations, and an additional bot skill dedicated only to your In-app messaging conversations. 

Furthermore, you can decide within each entrypoint on different routing rules, for example you can route messages from your Facebook service page to your service bot skill, and messages from your Facebook store page to your sales bot (or decide on a mix routing between the human skill and the bot skill).

_Please contact your LivePerson representative to complete this task._

To manage bot escalations, you can teach your bot to escalate to a human skill once consumer types "Agent", provide structured menu with escalation option for In-app and Facebook, or use your AI and NLP service to perform Intent matching).  

### Step 5 - Test your bot

Once your bot is assigned to an engagement, you can begin to test the bot and see how it behaves as an agent within LiveEngage.  Conduct the following tests:

* Start a conversation and ensure the bot picks up the appropriate skill
* Ensure you are able to see the bot conversation from the agent workspace and monitor it in real time
* Ensure that the skill routing is correct
* View the agent list to see that your bot displays
* Test the escalation to human agent

### Step 6 - Monitor the performance of your bot

The LivePerson report builder will have detailed data and analysis on the performance of your bot.  [add link to report builder document from sarah]

Best practice - monitor the following statistics on your bot agents:

* MCS
* CSAT
* Number of Conversations resolved
* Number of transfers to human agent
* Reason for transfer
* A/B testing across different bots