---
pagename: Simple Router
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Templates
permalink: conversation-builder-templates-simple-router.html
indicator: both
---

The Simple Router template provides an easy framework for the creation of a routing bot.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/template_simplerouter.png">

### Included Items

#### Dialogs

- Welcome
    - Presents the multiple choice interaction to the customer. Each multiple choice response represents a skill.
- Reprompt
    - The multiple choice interaction responses can be clicked or the customer can also type an answer. In the event that the bot does not understand the customer's response, this dialog will reprompt the welcome dialog.
- No Agents Available
    - In the event that the customer could not be transferred to a skill, this dialog will trigger.
- Escalation
    - When a user answers the Welcome dialog's multiple choice, this dialog will trigger and begin the transfer process.

#### Integrations

- Escalation
    - This integration posts a configuration payload to a LivePerson hosted service that will route the customer to a different skill.
    - In the Integrations area, there should be a pre-configured integration named “Transfer” and “Liveperson Agent Escalation” should be selected in the Integration Type menu.
    
    <img style="width:400px" src="img/ConvoBuilder/template_simplerouter_3.png">

    - The “skillName”, “skillId” and “transferMessage” variables will be populated via our Global Function. You do not need to change anything here.
    
    <img style="width:450px" src="img/ConvoBuilder/template_simplerouter_4.png">



### Configuration Needed

To customize this template, you will need to do the following.

#### Welcome dialog

In the Welcome dialog, click on the first "hi" interaction. In the Interaction Details > Settings, edit the Patterns.

Now click on the multiple choice interaction and edit each option text for your skills.

In the multiple choice Interaction Details > Next Actions, edit each Response Match & Action for the new skills. You will need to edit the Conditions patterns **and** and intent variable value for each. Of course, you should add or remove Response Match & Actions depending on how many skills you plan to route to.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/template_simplerouter_2.png">

#### Reprompt dialog

Customize the text response to match your brand voice.

#### No Agents Available dialog

Customize the text response to match your brand voice.

#### Escalation Integration

Click on Integrations at the top of Conversation Builder and click on Escalation.

Confirm that the POST url endpoint is using the right url for your server environment.

| Server Environment | URL endpoint |
| --- | --- |
| US | `https://platformservice.botcentralapi.com/botservice-0.1/botcentral/livePersonAgent` |
| US (If accessing from LiveEngage automation tab) | `https://va.bc-bot.liveperson.net/botservice-0.1/botcentral/livePersonAgent` |
| Europe | `https://platformservice-eu.botcentralapi.com/botservice-0.1/botcentral/livePersonAgent` |
| APAC | `https://platformservice-ap.botcentralapi.com/botservice-0.1/botcentral/livePersonAgent` |

#### Global Functions

The last thing to do is customize some important variables in the Global Functions.

When you click on Global Functions at the top of Conversation Builder, you should see a block of code. Within this block of code, there is a `switch` statement like the below:

```javascript
switch(intent){
case "billing":
    transferMessage = "Hold on while I transfer you to someone who can help with your billing issue...";
    skillId = '1234567890';
    skillName = intent;
    break;
case "account":
    transferMessage = "Hold on while I transfer you to someone who can help with your account issue...";
    skillId = '2345678901';
    skillName = intent;
    break;
case "help":
    transferMessage = "Hold on while I transfer you to someone who can help with your issue...";
    skillId = '3456789012';
    skillName = intent;
    break;  
}      
```

For each of your skill options:

- Edit the `case` to match the [intent variable values](#welcome-dialog) of your skill names.

- Edit the `transferMessage` to match the name of your skills. 

- Edit the `skillId` to match that of your skills. The skill ID is displayed in the URL in LiveEngage when you click on an individual skill.

- The `skillName` is being set to the name of the intent, but if you want to customize it you can.


You may add or remove `case` branches as needed for the number of your skills.

#### Deploy Your Bot

[Follow these instructions](conversation-builder-getting-started-4-connect-to-liveengage.html) for connecting your bot to LiveEnage.

Now you can test your routing bot and see how it routes to your skills.
