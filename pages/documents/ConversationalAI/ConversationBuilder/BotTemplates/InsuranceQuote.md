---
pagename: Insurance Quote
redirect_from:
    - conversation-builder-templates-insurance-quote.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Templates
permalink: conversation-builder-bot-templates-insurance-quote.html
indicator: both
---

### Insurance Quote

The Insurance Quote template is designed to capture information related to insurance needs from a customer and send the results to an email address.

The template uses text interactions only, so it can be deployed to any channel without modification. Escalation to an agent is also included.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/templates/InsuranceQuote1.png">


#### Included Items

##### Dialogs
- Welcome
 - The Welcome dialog greets the user and then asks the user to select an insurance type they would like to receive a quote for. After selection, the user is routed to that insurance type dialog.
- Home
 - Collects property information, such as address and current ownership status. To wrap things up, users are offered a choice between another insurance dialog or to finish the conversation in “Quote” dialog.
- Auto
 - Collects auto information, such as make, model, and year as well as ownership status of the automobile to be insured. To wrap things up, users are offered a choice between another insurance dialog or to finish the conversation in “Quote” dialog.
- Life
 - Collects user information, such as current life insurance coverage and type of insurance sought. To wrap things up, users are offered a choice between another insurance dialog or to finish the conversation in “Quote” dialog.
- Quote
 - Finalizes the quote request by asking for contact information and preparing a message to be sent to the insurance consultant.
- Fallback
 - Will display when the user enters an utterance that is not recognized.
- Agent_Escalation
 - This will perform a transfer to a particular Conversational Cloud skill.

#### Integrations
- Agent_Transfer
 - As you would expect, this will perform a transfer to a Conversational Cloud skill.
You will need to configure the skill name, id, and transfer message in Global Functions

- Send_Email
 - This integration will send an email to a preconfigured address which contains all of the collected fields from the various dialogs.
You will need to configure the agent and reply email addresses, email subject, and the body of the email in Global Functions

### Configuration Needed

To customize this template, you will need to do the following

#### General Dialog Customization
You will want to review each of the dialogs, starting with Welcome and each insurance dialog, and customize the verbiage used to greet your customer and request their details.

This is done simply by editing the text copy of the interactions and hitting Enter or using the menu to Save.

#### Insurance (Home|Auto|Life) Dialogs
Each interaction requiring user input is performing some level of validation on the user’s response using RegEx. You can supply your own RegEx if you prefer.

For each dialog of questions for our user, we allow a certain number of attempts before we escalate to an agent. These can be configured to your liking in the Global Functions.

```
  // Max count of fail user inputs 
  setVariable('maxAttempts', 2);
  setVariable('autoAttempts', 0);
  setVariable('lifeAttempts', 0);
  setVariable('homeAttempts', 0);

```

If you want to remove any capture interactions (eg: vehicle primary use), you will need to be sure to review the Next Step navigation so that the previous interaction will go to the next interaction in the dialog.

#### Quote Dialog
The name, email and phone number steps of the Quote dialog are performing some level of validation on the user’s response using RegEx. You can supply your own RegEx if you prefer.

#### Analytics
Custom event logging for this template has been provided by default.

For standard text statements, the function to log custom events can be found in the Pre-Process Code for the interaction, ex:

```
botContext.logCustomEvent(‘’, ‘Interaction Name’, ‘’);
```

For questions that a user must respond to, the code can be found under Process User Response, ex:

```
var response = botContext.getCurrentUserMessage();
botContext.logCustomEvent(response, ‘Interaction Name’, ‘’);
```
*Note: Personal information collection events are not logged by default in this template. Please consider privacy regulations before enabling this type of logging.*

For more information on custom events, please refer to [our developer documentation](https://developers.liveperson.com/conversation-builder-scripting-functions-log-debug.html#log-custom-event).

#### Global Function Customization

Click the Global Functions link to access all the global functions and variables to be configured.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/templates/InsuranceQuote2.png">

You’ll want to customize the generateLoanTemplate and getEmailBody functions within Global Functions to reflect your branding and voice.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/templates/InsuranceQuote3.png">

##### Send Email Integration

The Send Email integration is provided to forward the captured user information on to a lending agent. 

Modify the following values in Global Functions


|  Variable Name | Description  |
|---|---|
| ownerEmail | Email address to receive information collected by bot |
| replyEmail |Reply To email address, displayed to the recipient in their email program|
| emailSubject |Email subject line content
| emailText | Initial email text, default value of  "Loan Consultation Request Results" 

The bot captures relevant user information in several variables. These values are used in the `generateLoanTemplate` and `getEmailBody` Global Functions to dynamically generate your email body. 

##### Agent Escalation
If the user requests an agent or if they reach the max invalid attempts to validate entered information, they will be escalated to a human agent.

Modify the following values in Global Functions:

|  Variable Name | Description  |
|---|---|
| escalationBotMessage | What the bot should say prior to hand off |
| botAgentSkillId |The skill id you will transfer to  |
| botAgentSkillName |The skill name you will transfer to
