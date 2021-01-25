---
pagename: Travel Notification
redirect_from:
    - conversation-builder-templates-travel-notification.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Bot Templates
permalink: conversation-builder-bot-templates-travel-notification.html
indicator: both
---

The Travel Notifications template allows an authenticated user to report their future travel to ensure that they have full access to their spending power with their debit/credit cards.

The template uses text interactions only, so it can be deployed to any channel without modification. Escalation to an agent is also included.

{: .important}
This bot template contains a dialog template that can be used in other bots in your account. For more information on dialog templates, see [here](conversation-builder-dialog-templates.html).

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/templates_travel_notif_de.png">

### Included items

#### Dialogs
* **Welcome**: The Welcome dialog greets the user, introduces the bot functionality, and directs to the Travel Info dialog.
* **Travel Info**: Directs the user through the collection of information, with special attention paid to ensuring that the dates are recorded correctly.
* **Fallback**: This is displayed when the user enters an utterance that is not recognized.
* **Agent_Escalation**: Perform a transfer to a particular Conversational Cloud skill.

#### Integrations
* **Agent_Transfer**: Performs a transfer to a Conversational Cloud skill. You will need to configure the skill name, id, and transfer message in Global Functions.
* **Send_Email**: Sends an email to a preconfigured address that contains all of the collected fields from the various dialogs. You will need to configure the agent and reply email addresses, email subject, and the body of the email in Global Functions.

### Configuration needed

To customize this template, you need to do the following:

#### General dialog customization
Review each of the dialogs, starting with Welcome, and customize the verbiage used to greet your customer and request their details. This is done by editing the text copy of the interactions, and hitting Enter or using the menu to save.

If you want to remove any capture interactions, be sure to review the **Next Action** navigation so that the previous interaction will go to the next interaction in the dialog.

#### Travel Info dialog
Travel dates, destinations, and the approved card steps of the Travel Info dialog are performing some level of validation on the user’s response using RegEx. You can supply your own RegEx if preferred. 

Additionally, dates are validated to ensure they are appropriate (e.g., dates cannot occur in the past, return date on or after depart date). These can be customized with JavaScript as needed in the interaction's Process User Response section.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/templates_travel_notif_code.png">

For the date captures, we allow a certain number of attempts before we escalate to an agent. In addition, we apply the same logic to the information confirmation interactions. These can be configured to your liking in the Global Functions.

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

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/templates_travel_notif_gf.png">

You’ll want to customize the `getEmailBody` functions within Global Functions to reflect your brand and voice.

```
// format email
function getEmailBody(text) {
  var message = '';
  message = "<p>" + text + "</p><ul><li>Travel Dates: " + getVariable('departDate') + " - " + getVariable('returnDate') + "</li><li>Destinations: " + getVariable('destinations') + "</li><li>Approved Cards: " + getVariable('approvedCards') + "</li></ul>";
  return message;
}
```

#### Send Email integration
Users can request to have an email confirmation of their travel details sent to them at the conclusion of their conversation.

Several variables are captured to populate the email body with the needed data. The `getEmailBody` function in Global Functions can be modified to reflect the voice and style desired for your company.

Modify the following values in Global Functions:

| Variable Name | Description |
| --- | --- |
| ownerEmail | Email address to receive information collected by bot |
| replyEmail | Reply To email address, displayed to the recipient in their email program |
| emailSubject | Email subject line content |
| emailText | Initial email text, dynamically recreated by `getEmailBody` function |

The following variables are captured in the course of the dialog and used to create the email body:

| Variable Name | Description |
| --- | --- |
| departDate | Travel departure date |
| returnDate | Travel return date |
| destinations | One or more countries that the user will be traveling to |
| approvedCards | One or more cards the user will be using |

#### Agent escalation
If the user requests an agent or if they reach the max invalid attempts to validate entered information, they will be escalated to a human agent.

Modify the following values in Global Functions:

| Variable Name | Description |
| --- | --- |
| escalationBotMessage | What the bot should say prior to hand off | 
| botAgentSkillId | The skill ID to transfer to | 
| botAgentSkillName | The skill name to transfer to |

### Dialog templates
This bot template contains a [dialog template](conversation-builder-dialog-templates.html) that allows you to easily copy over the primary data collection flow independently from the bot template.

#### Travel data collection
Gathers user information on their upcoming travel and debit/credit cards they intend to use.

Included dialogs:
* Travel Info

Pre-built NLU domain:
* LP_Finance

Integrations:
* Send_Email
