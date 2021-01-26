---
pagename: Insurance Quote
redirect_from:
    - conversation-builder-templates-insurance-quote.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Bot Templates
permalink: conversation-builder-bot-templates-insurance-quote.html
indicator: both
---

The Insurance Quote template is designed to capture information related to insurance needs from a customer and send the results to an email address.

The template uses text interactions only, so it can be deployed to any channel without modification. Escalation to an agent is also included.

{: .important}
This bot template contains dialog templates that can be used in other bots in your account. For more information on dialog templates, see [here](conversation-builder-dialog-templates.html).

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/templates_insu_quote_de.png">

### Included items

#### Dialogs
* **Welcome**: The Welcome dialog greets the user and then navigates to the first interaction in the Insurance Intro dialog.
* **Insurance Intro**: Serves to provide users with a choice of which type insurance they are interested in receiving a quote for. After selection, directs the user to the appropriate dialog.
* **Home**: Collects and stores property information, such as address and current ownership status.
* **Auto**: Collects auto information, such as make, model, and year, as well as ownership status of the automobile to be insured.
* **Life** Collects user information, such as current life insurance coverage and the type of insurance sought.
* **Additional Ins**: In the full bot template and full coverage dialog template flows, gives an option for a user to add additional types of insurance to their quote.
* **Quote**: Finalizes the quote request by asking for contact information and preparing a message to be sent to the insurance consultant.
* **Fallback**: This is displayed when the user enters an utterance that is not recognized.
* **Agent_Escalation**: Performs a transfer to a particular Conversational Cloud skill.

#### Integrations
* **Agent_Transfer**: Performs a transfer to a Conversational Cloud skill. You will need to configure the skill name, id, and transfer message in Global Functions.
* **Send_Email**: Sends an email to a preconfigured address that contains all of the collected fields from the various dialogs. You will need to configure the agent and reply email addresses, email subject, and the body of the email in Global Functions.

### Configuration needed
To customize this template, you need to do the following:

#### General dialog customization
Review each of the dialogs, starting with Welcome, and customize the verbiage used to greet your customer and request their details. This is done by editing the text copy of the interactions, and hitting Enter or using the menu to save.

If you want to remove any capture interactions, be sure to review the **Next Action** navigation so that the previous interaction will go to the next interaction in the dialog.

#### Insurance (Home|Auto|Life) dialogs
Each interaction requiring user input is performing some level of validation on the user’s response using RegEx. You can supply your own RegEx if preferred.

For each dialog of questions for the user, we allow a certain number of attempts before we escalate to an agent. These can be configured to your liking in the Global Functions.

```
 // Max count of fail user inputs 
  setVariable('maxAttempts', 2);
  setVariable('autoAttempts', 0);
  setVariable('lifeAttempts', 0);
  setVariable('homeAttempts', 0);
```

#### Quote dialog
The name, email and phone number steps of the Quote dialog are performing some level of validation on the user’s response using RegEx. You can supply your own RegEx if preferred.

#### Analytics
Custom event logging for this template has been provided by default.

For standard text statements, the function to log custom events can be found in the Pre-Process Code for the interaction:

```
botContext.logCustomEvent(‘’, ‘Interaction Name’, ‘’);
```

For questions that a user must respond to, the code can be found under Process User Response:

```
var response = botContext.getCurrentUserMessage();
botContext.logCustomEvent(response, ‘Interaction Name’, ‘’);
```

{: .important}
Personal information collection events are not logged by default in this template. Please consider privacy regulations before enabling this type of logging.

For more information on custom events, see [here](conversation-builder-scripting-functions-log-debug.html#log-custom-event).

#### Global Function customization
Click **Global Functions** to access all the global functions and variables to be configured.

You’ll want to customize the `setAutoTemplate`, `setHomeTemplate`, `setLifeTemplate` and `getEmailBody` functions within Global Functions to reflect your branding and voice.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/templates_insu_quote_gf1.png">

#### Send Email integration
The Send Email integration is provided to forward on the captured user information to a lending agent.

Modify the following values in Global Functions:

| Variable Name | Description |
| --- | --- |
| ownerEmail | Email address to receive information collected by bot | 
| replyEmail | Reply To email address, displayed to the recipient in their email program |
| emailSubject | Email subject line content |
| emailText | Initial email text, default value of "Insurance Consultation Request Results" |

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/templates_insu_quote_gf2.png">

The bot captures relevant user information in several variables. These values are used in the `setAutoTemplate`, `setHomeTemplate`, `setLifeTemplate` and `getEmailBody` functions to dynamically generate the email body.

#### Agent escalation
If the user requests an agent or if they reach the max invalid attempts to validate entered information, they will be escalated to a human agent.

Modify the following values in Global Functions:

| Variable Name | Description |
| --- | --- |
| escalationBotMessage | What the bot should say prior to hand off |
| botAgentSkillId | The skill id to transfer to |
| botAgentSkillName | The skill name to transfer to |

### Dialog templates
This bot template contains multiple [dialog templates](conversation-builder-dialog-templates.html). All dialog templates are designed to work independently of one another and provide specific use case features to your bot.

#### Insurance - Full Package
All insurance options in one dialog template

Included dialogs:
* Insurance Intro
* Quote
* Life
* Auto
* Home
* Additional Ins

Integrations:
* Send_Email

#### Insurance - Auto Package
Only the Auto Insurance flow

Included dialogs:
* Auto
* Quote

Integrations:
* Send_Email

Global Function modifications:

In Global Functions, `multiIns` is set to 'false' to ensure proper routing in the Pre-Process Code of the `Auto_Other` interaction.

```
var multiIns = getVariable('multiIns');

if (multiIns === 'true') {
  botContext.setTriggerNextMessage('Multi_Ins');
} else {
  botContext.setTriggerNextMessage('Quote_Starter');
}
```

#### Insurance - Home Package
Only the Home Insurance flow

Included dialogs:
* Home
* Quote

Integrations:
* Send_Email

Global Function modifications:

In Global Functions, `multiIns` is set to 'false' to ensure proper routing in the Pre-Process Code of the `Home_Other` interaction.

#### Insurance - Life Package
Only the Life Insurance flow

Included dialogs:
* Life
* Quote

Integrations:
* Send_Email

Global Function modifications:

In Global Functions, `multiIns` is set to 'false' to ensure proper routing in the Pre-Process Code of the `Life_Other` interaction.
