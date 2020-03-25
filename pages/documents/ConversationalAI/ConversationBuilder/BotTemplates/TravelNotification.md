---
pagename: Travel Notification
redirect_from:
    - conversation-builder-templates-travel-notification.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Templates
permalink: conversation-builder-bot-templates-travel-notification.html
indicator: both
---

### Travel Notification

The Travel Notifications template allows an authenticated user to report their future travel to ensure that they have full access to their spending power with their debit/credit cards.

The template uses text interactions only, so it can be deployed to any channel without modification. Escalation to an agent is also included.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/templates/TravelNotification1.png">



#### Included Items

##### Dialogs
- Welcome
 - The Welcome dialog greets the user, introduces the bot functionality, and directs to the Travel Info dialog
- Travel Info
 - Directs the user through the collection of information, with special attention paid to ensuring that the dates are recorded correctly.
- Fallback
 - Will display when the user enters an utterance that is not recognized.
- Agent_Escalation 
 - This will perform a transfer to a particular LiveEngage skill.

#### Integrations
- Agent_Transfer
 - As you would expect, this will perform a transfer to a LiveEngage skill.
You will need to configure the skill name, id, and transfer message in Global Functions

- Send_Email
 - This integration will send an email to a preconfigured address which contains all of the collected fields from the various dialogs.
You will need to configure the agent and reply email addresses, email subject, and the body of the email in Global Functions

### Configuration Needed

To customize this template, you will need to do the following

#### General Dialog Customization
You will want to review each of the dialogs, starting with Welcome and each insurance dialog, and customize the verbiage used to greet your customer and request their details.

This is done simply by editing the text copy of the interactions and hitting Enter or using the menu to Save.

#### Travel Info Dialog

Travel dates, destinations, and the approved card steps of the Travel Info dialog are performing some level of validation on the user’s response using RegEx. You can supply your own RegEx if preferred. Additionally, dates are validated to ensure they are appropriate (eg: dates cannot occur in the past, return date on or after depart date). These can be customized with JavaScript as needed in the interaction “Process User Response” section.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/templates/TravelNotification2.png">

For the date captures, we allow a certain number of attempts before we escalate to an agent. In addition, we apply the same logic to the information confirmation interactions.These can be configured to your liking in the Global Functions.
 
```
  // Max count of fail user inputs 
  setVariable('maxAttempts', 2);
  setVariable('departAttempts', 0);
  setVariable('returnAttempts', 0);
  setVariable('dateAttempts', 0);
  setVariable('confirmationAttempts', 0);
```

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

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/templates/TravelNotification3.png">

You’ll want to customize the getEmailBody function within Global Functions to reflect your branding and voice.

```
// format email
function getEmailBody(text) {
  var message = '';
  message = "<p>" + text + "</p><ul><li>Travel Dates: " + getVariable('departDate') + " - " + getVariable('returnDate') + "</li><li>Destinations: " + getVariable('destinations') + "</li><li>Approved Cards: " + getVariable('approvedCards') + "</li></ul>";
  return message;
}
```

##### Agent Escalation
If the user requests an agent or if they reach the max invalid attempts to validate entered information, they will be escalated to a human agent.

Modify the following values in Global Functions:

|  Variable Name | Description  |
|---|---|
| escalationBotMessage | What the bot should say prior to hand off |
| botAgentSkillId |The skill id you will transfer to  |
| botAgentSkillName |The skill name you will transfer to

##### Send Email Integration

Users can request to have an email confirmation of their travel details sent to them at the conclusion of their conversation.

Several variables are captured to populate the email body with the needed data. The `getEmailBody` function in Global Functions can be modified to reflect the voice and style desired for your company.

Modify the following values in Global Functions


|  Variable Name | Description  |
|---|---|
| ownerEmail | Email address to receive information collected by bot |
| replyEmail |Reply To email address, displayed to the recipient in their email program|
| emailSubject |Email subject line content
| emailText | Initial mail text, dynamically recreated by `getEmailBody` function 

The following variables are captured in the course of the dialog and used to create the email body.

|  Variable Name | Description  |
|---|---|
| departDate | Travel departure date |
| returnDate |Travel return date|
| destinations |One or more countries that the user will be traveling to
| approvedCards | One or more cards the user will be using
