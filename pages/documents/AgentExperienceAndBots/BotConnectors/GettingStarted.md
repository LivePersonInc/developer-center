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

Outlined below will be step 1. 

The result of this is fed into the "Bot Configuration" outlined in each product specific guide.

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
    
    <img style="width:600px" src="img/dialogflowversion2/image_2.png">

--- 

**Below is Messaging ONLY**
    
Go to API management page (Campaigns tab > Data Sources > APIs) and add the following APIs to the bot’s API key:

* Engagement History API

* Operational API

    <img style="width:600px" src="img/dialogflowversion2/image_3.png">

* Administration (Skills) - **Read ONLY**

    <img style="width:600px" src="img/dialogflowversion2/image_4.png">

### Next Steps

You have just completed the first step to setting up a bot connector.

1. ~~Set up Bot user in LiveEngage~~

2. Provision connector in the Bot Connector Management dashboard

Move on to the product guides to learn how to connect and configure your specific bot connector.

To access the Bot Connector Management dashboard:

| Region | URL |
| --- | --- | 
| NA | https://bot-console.fs.liveperson.com |
| EMEA | https://bot-console.emea.fs.liveperson.com |
| APAC | https://bot-console.apac.fs.liveperson.com |
