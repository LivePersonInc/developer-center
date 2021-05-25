---
pagename: Apply for a Loan
redirect_from:
    - conversation-builder-templates-apply-loan.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername:  Bot Templates
permalink: conversation-builder-bot-templates-apply-for-a-loan.html
indicator: both
---

The Apply for a Loan template is designed to capture contact and financial information from a customer and send the results to an email address.

The template uses text interactions only, so it can be deployed to any channel without modification. Escalation to an agent is also included.

{: .important}
This bot template contains dialog templates that can be used in other bots in your account. For more information on dialog templates, see [here](conversation-builder-dialog-templates.html).

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/templates_apply_loan_de.png">

### Included items
#### Dialogs
* **Loan Start**: The Loan Start dialog greets the user and then navigates to the first interaction in the Contact Info dialog.
* **Contact Info**: Starts the process by collecting the user’s contact information and their preferred method of contact.
* **Loan Info**: Gather information about the loan the user seeks. In the event of an Auto or Home loan request, the user is routed to loan-specific dialogs; otherwise, information collection occurs within Loan Info dialog.
* **Auto Loan**: Auto Loan-specific questions are provided for the unique needs of this type of borrower.
* **Home Loan**: Home Loan-specific questions are provided for the unique needs of this type of borrower.
* **Financial Info**: To wrap things up, we gather some basic income and employment information from our user before sending an email to the consultant.
* **Fallback**: This is displayed when the user enters an utterance that is not recognized.
* **Agent_Escalation**: Performs a transfer to a particular Conversational Cloud skill.

#### Integrations
* **Agent_Transfer**: Performs a transfer to a Conversational Cloud skill. You will need to configure the skill name, id, and transfer message in Global Functions.
* **Send_Email**: Sends an email to a preconfigured address that contains all of the collected fields from the various dialogs. You will need to configure the agent and reply email addresses, email subject, and the body of the email in Global Functions.

### Configuration needed
To customize this template, you need to do the following:

#### General dialog customization
Review each of the dialogs, starting with Loan Start, and customize the verbiage used to greet your customer and request their details. This is done by editing the text copy of the interactions, and hitting Enter or using the menu to save.

If you want to remove any capture interactions, be sure to review the **Next Action** navigation so that the previous interaction will go to the next interaction in the dialog.

#### Contact Info, Lending, and Financial Info dialogs
All text-based questions within the dialogs are performing some level of validation on the user’s response using RegEx. You can supply your own RegEx if you prefer.

For each dialog of questions for the user, we allow a certain number of attempts before we escalate to an agent. These can be configured to your liking in the Global Functions.

```
// Max count of fail user inputs
  setVariable('maxPersonalInfoAttempts', 2);
  setVariable('maxLoanInfoAttempts', 2);
  setVariable('maxFinancialInfoAttempts', 2);
  setVariable('personalInfoAttempts', 0);
  setVariable('loanInfoAttempts', 0);
  setVariable('financialInfoAttempts', 0);
```

#### Analytics
Custom event logging for this template has been provided by default.

For standard text statements, the function to log custom events can be found in the Pre-Process Code for the interaction:

```
botContext.logCustomEvent(‘', ‘Interaction Name’, ‘’);
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

You’ll want to customize the `generateLoanTemplate` and `getEmailBody` functions within Global Functions to reflect your branding and voice.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/templates_apply_loan_gf1.png">

#### Send Email integration
The Send Email integration is provided to forward on the captured user information to a lending agent.

Modify the following values in Global Functions:

| Variable Name | Description |
| --- | --- |
| ownerEmail | Email address to receive information collected by bot |
| replyEmail | Reply To email address, displayed to the recipient in their email program |
| emailSubject | Email subject line content |
| emailText | Initial email text, default value of "Loan Consultation Request Results" |

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/templates_apply_loan_gf2.png">

The bot captures relevant user information in several variables. These values are used in the `generateLoanTemplate` and `getEmailBody` global functions to dynamically generate the email body.

#### Agent escalation
If the user requests an agent or if they reach the max invalid attempts to validate entered information, they will be escalated to a human agent.

Modify the following values in Global Functions:

| Variable Name | Description |
| --- | --- |
| escalationBotMessage | What the bot should say prior to hand off |
| botAgentSkillId | The skill ID to transfer to |
| botAgentSkillName | The skill name to transfer to |

### Dialog templates
This bot template contains multiple [dialog templates](conversation-builder-dialog-templates.html). All dialog templates are designed to work independently of one another and provide specific use case features to your bot.

#### Apply for Loan Full
Walks through the process of applying for a home, auto, student or personal loan.

Included dialogs:
* Loan Start
* Contact Info
* Loan Info
* Home Loan
* Auto Loan
* Financial Info

Pre-built NLU domain:
* LP_Finance

Integrations:
* Send_Email

#### Auto Loan
Only the Auto Loan flow

Included dialogs:
* Auto Loan
* Loan Start
* Contact Info
* Financial Info

Pre-built NLU domain:
* LP_Finance

Integrations:
* Send_Email

Global Function modifications:

In Global Functions, `loanPurpose` is set to 'Auto' to ensure proper routing in Post-Process Code of the `Loan_Starter` interaction.

```
var loanPurpose = getVariable('loanPurpose');

if (loanPurpose === 'Auto') {
  botContext.setTriggerNextMessage('Vehicle_Check');
} else if (loanPurpose === 'Home') {
  botContext.setTriggerNextMessage('Refinance_Check');
} else {
  botContext.setTriggerNextMessage('Loan_Purpose');
}
```

#### Home Loan
Only the Home Loan flow

Included dialogs:
* Home Loan
* Loan Start
* Contact Info
* Financial Info

Pre-built NLU domain:
* LP_Finance

Integrations:
* Send_Email

Global Function modifications:

In Global Functions, `loanPurpose` is set to 'Home' to ensure proper routing in Post-Process Code of the `Loan_Starter` interaction.
