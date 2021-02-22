---
pagename: Simple Lead Gen
redirect_from:
    - conversation-builder-templates-simple-lead-gen.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Bot Templates
permalink: conversation-builder-bot-templates-simple-lead-gen.html
indicator: both
---

The Simple Lead Gen template is designed to capture contact and financial information from a customer and send the results to an email address.

The template uses text interactions only, so it can be deployed to any channel without modification. Escalation to an agent is also included.

{: .important}
This bot template contains a dialog template that can be used in other bots in your account. For more information on dialog templates, see [here](conversation-builder-dialog-templates.html).

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/templates_simple_leadgen_de.png">

### Included items

#### Dialogs
* **Welcome**: Greets the user and then navigates to the first interaction in the Lead Gen dialog.
* **Lead Gen**: This is the main dialog for collecting the user’s contact information. By default this dialog collects (and attempts to validate) the user’s name, email address and phone number. There is also an interaction to collect a description of their interest.
* **Fallback**: This is displayed when the user enters an utterance that is not recognized.
* **Agent_Escalation**: Performs a transfer to a particular Conversational Cloud skill.

#### Integrations
* **Agent_Transfer**: Performs a transfer to a Conversational Cloud skill. You will need to configure the skill name, id, and transfer message in Global Functions.
* **Send_Email**: Sends an email to a preconfigured address that contains all of the collected fields from the various dialogs. You will need to configure the agent and reply email addresses, email subject, and the body of the email in Global Functions.

### Configuration needed
To customize this template, you need to do the following:

#### General dialog customization
Review each of the dialogs, starting with Welcome and Lead Gen, and customize the verbiage used to greet your customer and request their details. This is done by editing the text copy of the interactions, and hitting Enter or using the menu to save.

#### Lead Gen dialog
The name, email and phone number steps of the LeadGen dialog are performing some level of validation on the user’s response using RegEx. You can supply your own RegEx if you prefer.

For email address and phone number capture, we allow a certain number of attempts before we escalate to an agent. These can be configured to your liking in the Global Functions.

```
// Max count of fail user inputs 
setVariable('maxEmailInvalidAttempts', 2);
setVariable('maxPhoneInvalidAttempts', 2);
```

If you want to remove some of the lead gen capture interactions (e.g., phone number), be sure to review the **Next Action** navigation so that the previous interaction will go to the next interaction in the dialog.

#### Send Email integration
The Send Email integration is provided to forward on the captured user information to a lending agent.

Modify the following values in Global Functions:

| Variable Name | Description |
| --- | --- |
| ownerEmail | Email address to receive information collected by bot |
| replyEmail | Reply To email address, displayed to the recipient in their email program |
| emailSubject | Email subject line content |
| emailText | Initial email text, default value of "Lead Gen Form Results" |

The bot captures relevant user information in several variables. These values are used in the `getEmailBody` global function to dynamically generate the email body.

#### Agent escalation
If the user requests an agent or if they reach the max invalid attempts to validate entered information, they will be escalated to a human agent.

Modify the following values in Global Functions:

| Variable Name | Description |
| --- | --- |
| escalationBotMessage | What the bot should say prior to hand off |
| botAgentSkillId | The skill ID to transfer to |
| botAgentSkillName | The skill name to transfer to |

### Dialog templates
This bot template contains a dialog template that allows you to easily copy over the primary data collection flow independently from the bot template.

#### Lead Gen - Data Collection
Walks through the process of applying for a home, auto, student or personal loan.

Included dialogs:
* Lead Gen

Integrations:
* Send_Email

Global Function modifications:

Removed unnecessary global functions, such as Agent Escalation variables.
