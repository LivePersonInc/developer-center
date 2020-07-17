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

<img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/templates/ApplyforaLoan2.png">

### Included items

#### Dialogs

- Welcome
    - The Welcome dialog greets the user and then navigates to the first interaction in the Contact Info dialog.
- Contact Info
    - Starts the process by collecting our user’s contact information and their preferred method of contact.
- Loan Info
    - Gather information about the loan our user is seeking. In the event of an Auto or Home loan request, the user is routed to loan specific dialogs, otherwise information collection occurs within Loan Info dialog.
- Auto Loan
    - Auto Loan specific questions are provided for the unique needs of this type of borrower. 
- Home Loan
    - Home Loan specific questions are provided for the unique needs of this type of borrower.
- Financial Info
    - To wrap things up, we gather some basic income and employment information from our user before sending an email to our consultant.
- Fallback
    - Will display when the user enters an utterance that is not recognized.
- Agent_Escalation
    - This will perform a transfer to a particular Conversational Cloud skill.

#### Integrations
- Agent_Transfer
 - As you would expect, this will perform a transfer to a Conversational Cloud skill. You will need to configure the skill name, id, and transfer message in Global Functions
- Send_Email
    - This integration will send an email to a preconfigured address which contains all of the collected fields from the various dialogs. You will need to configure the agent and reply email addresses, email subject, and the body of the email in Global Functions

### Configuration needed

To customize this template, you will need to do the following:

#### General dialog customization
You will want to review each of the dialogs, starting with Welcome and customize the verbiage used to greet your customer and request their details.

This is done simply by editing the text copy of the interactions and hitting Enter or using the menu to Save.

If you want to remove any capture interactions, you will need to be sure to review the Next Action navigation so that the previous interaction will go to the next interaction in the dialog.

#### Contact Info, Lending, and Financial Info dialogs
All text-based questions within the dialogs are performing some level of validation on the user’s response using RegEx. You can supply your own RegEx if you prefer.

For each dialog of questions for our user, we allow a certain number of attempts before we escalate to an agent. These can be configured to your liking in the Global Functions.

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

For standard text statements, the function to log custom events can be found in the Pre-Process Code for the interaction, i.e.:

```
botContext.logCustomEvent(‘’, ‘Interaction Name’, ‘’);
```

For questions that a user must respond to, the code can be found under Process User Response, i.e.:

```
var response = botContext.getCurrentUserMessage();
botContext.logCustomEvent(response, ‘Interaction Name’, ‘’);
```
*Note: Personal information collection events are not logged by default in this template. Please consider privacy regulations before enabling this type of logging.*

For more information on custom events, please refer to [our developer documentation](https://developers.liveperson.com/conversation-builder-scripting-functions-log-debug.html#log-custom-event).

#### Global Function customization

Click **Global Functions** to access all the global functions and variables to be configured.

You’ll want to customize the `generateLoanTemplate` and `getEmailBody` functions within Global Functions to reflect your branding and voice.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/templates/ApplyforaLoan1.png">

##### Send Email integration

The Send Email integration is provided to forward the captured user information on to a lending agent. 

Modify the following values in Global Functions

|  Variable Name | Description  |
|---|---|
| ownerEmail | Email address to receive information collected by bot |
| replyEmail |Reply To email address, displayed to the recipient in their email program|
| emailSubject |Email subject line content
| emailText | Initial email text, default value of  "Loan Consultation Request Results" 

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/templates/ApplyforaLoan3.png">

The bot captures relevant user information in several variables. These values are used in the `generateLoanTemplate` and `getEmailBody` global functions to dynamically generate the email body. 

##### Agent escalation
If the user requests an agent or if they reach the max invalid attempts to validate entered information, they will be escalated to a human agent.

Modify the following values in Global Functions:

|  Variable Name | Description  |
|---|---|
| escalationBotMessage | What the bot should say prior to hand off |
| botAgentSkillId |The skill id you will transfer to  |
| botAgentSkillName |The skill name you will transfer to
