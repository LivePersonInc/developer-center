---
pagename: Getting Started
redirect_from:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Bot Connectors
permalink: bot-connectors-getting-started.html
indicator:
---

### Introduction

External Bot frameworks and Bot builders can be enabled and managed through LiveEngage just like a normal human agent.

Using the Bot Connector Manager, you can provision a bot connector for IBM Watson, Google Dialog Flow, Amazon Lex, etc.

There are two steps to setting up a new bot connector. 

1. Set up Bot user in LiveEngage

2. Provision connector in the Bot Connector Management dashboard

### Set Up Bot User in LiveEngage

1. Add a new user in LiveEngage, choose "Bot" for “User type”. If “User type” is not available, contact your LivePerson account manager to enable the feature.

    <img style="width:600px" src="img/dialogflowversion2/image_0.png">

2. Add login method as "API key" and generate new API key for the new user

    <img style="width:600px" src="img/dialogflowversion2/image_1.png">

3. Make sure the user has chat and/or messaging slot > 0 based on the target channel of the bot.

4. Set Max No of Live Chats 

    * If Chat in the drop down select  - Value > 1.

    * If Messaging Max No of Live Chats -> **No Chats and Max No of Messaging Converversations to Custom Setting and enter a value greater than 0** 

5. Find api key name in bot user profile
    
    <img style="width:400px" src="img/dialogflowversion2/image_2.png">

--- 

**Below is Messaging ONLY**
    
Go to API management page (Campaigns tab > Data Sources > APIs) and add the following APIs to the bot’s API key:

* Engagement History API

* Operational API

    <img style="width:600px" src="img/dialogflowversion2/image_3.png">

* Administration (Skills) - **Read ONLY**

    <img style="width:600px" src="img/dialogflowversion2/image_4.png">

### Provision Bot Connector

To access the Bot Connector dashboard navigate to your appropriate URL:

| Region | URL |
| --- | --- | 
| NA | https://bot-console.fs.liveperson.com |
| EMEA | https://bot-console.emea.fs.liveperson.com |
| APAC | https://bot-console.apac.fs.liveperson.com |

Upon logging in, you will see the bot status screen.

<img style="width:900px" src="img/botconnectordashboard/overview.png">

Follow the steps below to add a new bot connector.

1. Navigate to the Config page and click “+ADD NEW BOT”

    <img style="width:800px" src="img/botconnectordashboard/addnew.png">

2. Assign agent:  Assign the bot agent that you just created

3. Choose conversation type:  Chat or Messaging

    Settings for Chat:
    <img style="width:900px" src="img/botconnectordashboard/chat.png">

    Settings for Messaging:
    <img style="width:900px" src="img/botconnectordashboard/messaging.png">

4. Setup Escalation: Skill to transfer to in the event of an error during connection to the AI service

    <img style="width:900px" src="img/botconnectordashboard/escalation.png">

5. Connect to A.I.: Choose an AI engine from a list. Add the configuration of AI. See [Next Steps](#next-steps).

### Next Steps

Move on to the product guides to learn how to connect and configure your specific product.


