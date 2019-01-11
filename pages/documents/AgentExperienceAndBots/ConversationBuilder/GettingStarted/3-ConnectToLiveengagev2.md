---
pagename: Connect to LiveEngage
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Getting Started
permalink: conversation-builder-getting-started-connect-to-liveengage.html
indicator: both
---

To connect to a LiveEngage account for Agent handoff, we need to configure an API Integration. 

### Step 7: Adding LiveEngage Handoff

From the Conversation Builder, navigate to the Integrations area.

<img style="width:300px" src="img/ConvoBuilder/helloworld/image_19.png">

From here we will create a new API with the following parameters. 

* Integration Name: Escalation

* Response Data Variable Name: Escalation

* Method: POST

* URL: 

  1. For US: https://platformservice.botcentralapi.com/botservice-0.1/botcentral/livePersonAgent

  2. For EU: https://platformservice-eu.botcentralapi.com/botservice-0.1/botcentral/livePersonAgent

  3. For APAC: https://platformservice-ap.botcentralapi.com/botservice-0.1/botcentral/livePersonAgent

* Request Headers:

  <table>
    <tr>
      <td>Key</td>
      <td>Value (hit Enter after each field is added)</td>
    </tr>
    <tr>
      <td>Authorization</td>
      <td>YOUR PERMANENT API ACCESS KEY<br>
        This is found under your profile settings here:<br>
        <img style="width:300px" src="img/ConvoBuilder/helloworld/apiaccess.png"><br>
        Then tap on the API tab and copy the API Access Key<br>
        <img style="width:300px" src="img/ConvoBuilder/helloworld/permapikey.png">
      </td>
    </tr>
  </table>


* Post Body:

  ```json
  {

  "userPlatformId" : "{$chatBotUserPlatformId}",

  "chatBotId": "{$chatBotId}",

  "message": "{$botContext.transferMessage}",

  "conversationId": "{$botContext.convId}",

    "agentSkillName": "<<ENTER SKILL NAME HERE>>",

    "agentSkillId": "<<ENTER SKILL ID HERE>>"

  }
  ```
	

**Save** the API settings.

Now we can return to the Dialog editor by tapping the Interactions icon.

<img style="width:300px" src="img/ConvoBuilder/helloworld/image_20.png">

To handle the flow for the Agent Handoff we need to create a new dialog and call it "Agent Handoff" or similar.

We can add a User Says interaction, with sample intent "I want to speak to an agent". In the Interaction Details > Settings we can create a pattern with alternates for keywords like `(agent|representative|help|human)`.

Next, we need to add our Integration interaction and select "Escalation" from the drop down. For this next part, we will need to leverage some JavaScript code to set some variables. While selected on the Integration interaction, tap on the CODE tab in the interaction details and then tap on the **+** icon next to Pre-Process Code. This will launch a JavaScript code window. 

<img style="width:300px" src="img/ConvoBuilder/helloworld/selectescalation.png">

<img style="width:300px" src="img/ConvoBuilder/helloworld/preprocesscode.png">


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

### Step 8: Configure LiveEngage

Now, we need to connect to LiveEngage, we need to configure a User Agent. 

#### Setup a New LiveEngage Account:

If you DO NOT have a LiveEngage account set up, please work with your Liveperson team before continuing further.

In order to connect your bot to LiveEngage, we will need to create a Bot User and the necessary skills we’d like our bot to route to.

#### Create the Skills

1. Login to the LE account and create a new skill (If you already have a skill created skip this step). This will be the default skill connected to the bot.

    1. Go to Users -> Skills and create a new skill for the Routing Bot.
    <img style="width:500px" src="img/ConvoBuilder/helloworld/confLE_0.png">

    2. Click on the new/existing Bot skill and copy down the skill ID in the URL. Your LivePerson CSM / Account Manager will need this information to make this the Default Skill for your account.

2. If you are creating a router bot, you could create the rest of the skills to route to now. Be sure to name them appropriately for your intents (eg: billing, account, offers, human, etc).

<img style="width:500px" src="img/ConvoBuilder/helloworld/confLE_1.png">

#### Create LiveEngage User Agents

In addition to the skills, you also need User Agents as well. One for the bot and one for the agent that will be receiving the inbound transfers (for human escalation).

1. First we’ll create the bot user. In LiveEngage, go to Users and add a new user.

    1. Make sure that the User Type is set to Bot and fill out the Login name, Email, Nickname and Name fields.

    2. If you do not see the User Type field, contact your CSM to enable this for you.
    <img style="width:500px" src="img/ConvoBuilder/helloworld/confLE_2.png">

    3. Choose API key and choose Generate API Key as the new keys will be filled in automatically. **Copy this information down as you will need it shortly.**

    4. If you do not see the API Key option, contact your CSM to enable this for you.
    <img style="width:500px" src="img/ConvoBuilder/helloworld/confLE_3.png">

    5. Assign the bot user as an Agent, set the Max number of live chats to Unlimited, add the default Bot skill and click Save. **Do NOT add the other skills.**
    <img style="width:400px" src="img/ConvoBuilder/helloworld/confLE_4.png">

2. Create one or more additional users and assign the routing skills (billing, etc) to them.

#### Edit the Campaign

In order to trigger the bot when this account is initialized, we need to target the default bot skill. Go to Campaigns > Edit and configure the engagement to route to a specific skill for the Routing Bot. Tap Publish when done.

<img style="width:400px" src="img/ConvoBuilder/helloworld/confLE_5.png">

<img style="width:500px" src="img/ConvoBuilder/helloworld/confLE_6.png">

### Step 9: Connect to LiveEngage

Now that we’ve set up our LiveEngage account, let’s connect your bot.

#### Set up an Enterprise Integration

Click on the gear icon and and choose Enterprise Integrations.
<img style="width:300px" src="img/ConvoBuilder/helloworld/confLE_7.png">

1. Click the link to Add Enterprise Integration.
<img style="width:300px" src="img/ConvoBuilder/helloworld/confLE_8.png">

2. Select LivePerson from the drop down menu, enter a Company Name, and click CREATE.
<img style="width:500px" src="img/ConvoBuilder/helloworld/confLE_9.png">

3. Now you will see Agents under More Options.
<img style="width:600px" src="img/ConvoBuilder/helloworld/confLE_10.png">

4. Click Add Agent.

5. Fill out the agent information for the bot user you created.  

    1. Select Chat as the Conversation Type

    2. Add your LE account number

    3. Enter the login name for the bot user

    4. For the Role, select Assigned Agent

    5. Choose OAuth for the Authentication Type, and fill in the 4 keys that were generated for the bot user from [Create a Bot User](#heading=h.4txh4ov0sw39).  

6. Click Add Agent once everything is entered.
<img style="width:600px" src="img/ConvoBuilder/helloworld/confLE_11.png">

7. The new agent will now be added.
<img style="width:500px" src="img/ConvoBuilder/helloworld/confLE_12.png">

#### Deploy the Bot Agent

To finally connect your Bot User Agent with your LiveEngage account, you need to deploy your Bot Agent. To deploy to the Demo server environment (for testing), just hit the green play button to start.

To deploy to Production, you will need Operations role access.

<img style="width:300px" src="img/ConvoBuilder/helloworld/confLE_13.png">

1. From the drop down menu, select Operations. If you do not see the Operations module, contact your Administrator to provide access or to assist you with this.

2. In the Operations module, find your bot agent. The filter defaults to bots in the "Production" environment. Switch it to “All”.
    <img style="width:800px" src="img/ConvoBuilder/helloworld/confLE_14.png">

3. Tap on the menu (three dots) to the left of your bot’s name and select Deploy Agent.
    <img style="width:300px" src="img/ConvoBuilder/helloworld/confLE_15.png">

4. For an official client bot, select Production.
    <img style="width:700px" src="img/ConvoBuilder/helloworld/confLE_16.png">

5. Tap on the menu again and select Start Agent.
    <img style="width:300px" src="img/ConvoBuilder/helloworld/confLE_17.png">

6. Reload your browser or wait a few moments and your bot agent should now show as online and connected.
    <img style="width:800px" src="img/ConvoBuilder/helloworld/confLE_18.png">

#### Testing the Routing Bot

If you are using Chat you can use [this test page](https://livepersoninc.github.io/visitor-page/?siteid=[your account number]), adding your account number to the URL.  If you are using Messaging for Web, use [this test page](https://bigbag-retail-demo.herokuapp.com).

1. Be sure you are online as a Human agent in LE.

2. Click the Live Chat button.

3. Enter a message and hit Send.
    <img style="width:200px" src="img/ConvoBuilder/helloworld/userwindow1.png">
    <img style="width:200px" src="img/ConvoBuilder/helloworld/userwindow2.png">

4. Try to to trigger the transfer for each route (eg: billing, etc) and confirm the right skill on LiveEngage.

5. The conversation should be transferred to you as long as you assigned your test agent credentials with the appropriate skills.

6. When you tap on the inbound transfer, you should see something like this in your LiveEngage dashboard.

<img style="width:800px" src="img/ConvoBuilder/helloworld/confLE_19.png">