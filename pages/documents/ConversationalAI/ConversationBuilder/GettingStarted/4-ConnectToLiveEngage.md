---
pagename: 4 - Connect to LiveEngage
redirect_from: conversation-builder-getting-started-getting-started-part-4.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Getting Started
permalink: conversation-builder-getting-started-4-connect-to-liveengage.html
indicator: both
---

Now we will walk through how to link your bot to LiveEngage, ending with an integration that transfers to a human.

### Step 10: Configure LiveEngage

To connect a bot to LiveEngage, we first need leave the Conversation Builder platform to configure a LiveEngage Agent.

#### Setup a New LiveEngage Account:

If you DO NOT have a LiveEngage account set up, please work with your Liveperson team before continuing further.

In order to connect your bot to LiveEngage, we will need to create a Bot User and the necessary skills we’d like our bot to route to.

#### Create the Skills

[Login to your LiveEngage account](https://authentication.liveperson.net/login.html) and create a new skill. This will be the default skill connected to the bot.

Go to Users -> Skills and create a new skill for the Routing Bot called "Bot".

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/confLE_0.png">

Create at least one other skill called "Human" to route to now. If you make others, be sure to name them appropriately for your intents (e.g., billing, account, offers).

In this tutorial, the bot will live in the Bot skill, and we will later implement a transfer to the Human skill.

Click on the Bot and Human skills you just created and copy down the skill IDs from the URLs. This will be important later. The skill ID will be the number at the end of the URL: https://z1.le.liveperson.net/a/accountNumber/#um!skills/**skillID**

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/confLE_1.png">

#### Create LiveEngage Agents

In addition to the skills, you also need User Agents as well. One for the bott and one for the agent that will be receiving the inbound transfers (for human escalation).

In LiveEngage, go to Users and create the bot user.

Make sure that the User Type is set to Bot and fill out the Login name, Email, Nickname and Name fields. If you do not see the User Type field, contact your LivePerson representative to enable this for you.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/confLE_2.png">

For the login method, choose API key and choose **Generate API Key** as the new keys will be filled in automatically. If you do not see the API Key option, contact your LivePerson representative to enable this for you.

Assign the bot user as an Agent, set the Max number of live chats to Unlimited, add the default Bot skill and click Save. **Do NOT add the other skills.**

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/confLE_4.png">

Create a new human agent and assign it to the Human skill, or assign yourself to the Human skill and make sure that you can take chats as an agent.

#### Assign Bot Skill to an Engagement

We will test this connection with a standard web chat engagement.

Create a campaign and engagement that routes to the new Bot skill. Tap Publish when done.

<img style="width:400px" src="img/ConvoBuilder/helloworld/confLE_5.png">

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/confLE_6.png">

### Step 11: Connect the Bot to LiveEngage

Go back to Conversation Builder to link your bot to the bot user you just created.

{: .important}
LivePerson recommends that, when you connect your bot to LiveEngage, you deploy at least two LiveEngage bot agents for a single bot. This is so the second bot agent can serve to support failover. Additionally, if you have traffic considerations, you might want to deploy three or more bot agents.

#### Add the agent connector

1. Open the bot, and click **Agent Connectors** on the menu bar in the upper-right corner.
2. Click **New Bot Connector** in the upper-right corner, just under the menu bar.
3. In the Add Agent Connector dialog box, specify the following, based on the bot user you created.
    - **Agent User ID**: Select the user ID for the bot user agent.
    - **Role**: Select "Agent."
    - **Conversation Type**: Select "Chat."
    - **Deploy to**: Select either "Demo" or "Production."
4. Click **Save**.

#### Start the agent connector

**To deploy to the Demo environment (for testing)**
- Click the **Start** button to start the agent connector. Skip to [testing](conversation-builder-getting-started-4-connect-to-liveengage.html#step-13-testing-the-connection) if you do this.

**To deploy to the Production environment**

Your account must have the Operations role, which gives you access to the [Bots Status](conversational-ai-platform-platform-overview.html) application.

1. In the the application drop-down menu, select **Bots Status**. If you don't see the application in the list, contact your administrator for help.

2. In the Bots Status application, find your bot agent. The filter defaults to bots in the "Production" environment. Switch it to “All” to view your bot agent in the list.

3. Select your bot agent, and move your mouse over the area to the left of the bot name.

    An ellipsis icon ( <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis.png"> )appears.

4. Select the ellipsis icon, and then select **Deploy Agent** from the menu that appears.
    <img style="width:200px" src="img/ConvoBuilder/helloworld/confLE_15.png">

5. In the Bot Agent Deployment Settings, for **Environment**, select "Production" for an official client bot.
    <img style="width:700px" src="img/ConvoBuilder/helloworld/confLE_16.png">

6. Select the ellipsis menu again, and select **Start Agent**.

7. Reload your browser or wait a few moments, and your bot agent should now show as online and connected.

    <img style="width:950px" src="img/ConvoBuilder/helloworld/confLE_18.png">

### Step 12: Transfer from Bot to Human

Let's now set up an Integration to transfer the user to a human agent in LiveEngage. This is called an Escalation.

Return to your bot in Conversation Builder. Navigate to the Integrations area.

Click the **+** icon in the bottom-left corner to create a new API with the following parameters.

* **Integration Name**: Escalation (or similar)

* **Response Data Variable Name**: Escalation (or similar)

* **Integration Type**: LivePerson Agent Escalation

* **Agent Skill Name**: The Name of Your Human Skill

* **Agent Skill Id**: The ID Number of Your Human Skill

* **Message to User**: A Message to be Displayed to User Prior to Escalation

**Save** the API settings.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/bestPractices/LivePersonAgentEscalationFields.png">

The `Agent Skill Name` and `Agent Skill Id` should be set to the Human skill that you created [at the beginning of this tutorial](#step-10-configure-liveengage) or could be set using varibles for a more dynamic experience.

Now we can return to the Dialog editor by tapping on Dialogs on the top of the workspace.

<!--<img style="width:300px" src="img/ConvoBuilder/helloworld/image_20.png">-->

To handle the flow for the Agent Handoff we need to create a new regular dialog and call it "Agent Handoff" or similar.

In the User Says interaction, type "I want to speak to an agent". In the Interaction Details > Settings we can create a pattern with alternates for keywords like `*(agent|representative|help|human)*`.

Next, we need to add our Integration interaction and select "Escalation" from the drop down.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/image_345.png">

For this next part, we will need to leverage some JavaScript code to set some variables. While selected on the Integration interaction, tap on the CODE tab in the interaction details and then tap on the **+** icon next to Pre-Process Code. This will launch a JavaScript code window.

<!--<img style="width:300px" src="img/ConvoBuilder/helloworld/selectescalation.png">-->

In order to guarantee that we provide an outgoing message to the user prior to handoff, we supply a message as part of the API called the transferMessage. The problem is, since we’re previewing in HTML (not a LiveEngage client), the escalation to LiveEngage won’t get called, so we need to provide a message to us for testing purposes. We can do this by adding the following JavaScript:

```javascript
var channel = botContext.getChannel();
var msg = "Hold on while I transfer you to an agent.";

if(channel == "web"){
  botContext.sendMessage(msg);
}else{
  botContext.setBotVariable('transferMessage',msg,true,false);
}
```

When you set the "transferMessage" bot variable, you are filling the `{$botContext.transferMessage}` slot that the integration sends for you.

See [scripting functions](conversation-builder-conversation-builder-scripting-functions.html) learn about all of the available functions.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/preprocesscode.png">

### Step 13: Testing the Connection

If you are using Chat you can use [this test page](https://livepersoninc.github.io/visitor-page/?siteid=[your account number]), adding your account number to the URL.  If you are using Messaging for Web, use [this test page](https://bigbag-retail-demo.herokuapp.com).

1. Be sure you are online as a Human agent in LiveEngage.

2. Click the Live Chat button on the test page and you should be connected to your bot in the Bot skill.

3. Enter a message and hit Send.
    <img style="width:200px" src="img/ConvoBuilder/helloworld/userwindow1.png">
    <img style="width:200px" src="img/ConvoBuilder/helloworld/userwindow2.png">

4. Try to to trigger the transfer dialog that you just created and confirm the right skill on LiveEngage.

5. The conversation should be transferred to you as long as you assigned your test agent credentials with the appropriate skill.

6. As an agent, when you accept the inbound transfer, you should see something like this in your LiveEngage dashboard.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/confLE_19.png">
