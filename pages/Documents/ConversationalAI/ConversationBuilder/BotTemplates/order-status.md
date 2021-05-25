---
pagename: Order Status
redirect_from:
    - conversation-builder-templates-order-status.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Bot Templates
permalink: conversation-builder-bot-templates-order-status.html
indicator: both
---

The Order Status template is designed to provide users with information on retail orders that have been placed by providing their order number.

The template uses text interactions only, so it can be deployed to any channel without modification. Escalation to an agent is also included.

{: .important}
This bot template contains a dialog template that can be used in other bots in your account. For more information on dialog templates, see [here](conversation-builder-dialog-templates.html).

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/templates_order_status_de.png">

### Included items

#### Dialogs
* **Order Status**: Greets the user, collects the order number, and displays the results in a text-based format.
* **Fallback**: This is displayed when the user enters an utterance that is not recognized.
* **Agent_Escalation**: Performs a transfer to a particular Conversational Cloud skill using the *Agent Transfer* interaction. The skill ID and transfer message are configurable within Global Functions.
* **No Agents Available**: In the event that the escalation attempt fails, handle the issue appropriately within this dialog.

#### Integrations
* **OrderStatus**: Retrieves information based on the account number provided by the user.
    * The default integration is set to return mock data. Please use order numbers A001001 and A001002 to successfully retrieve information.
    * You need to replace the mock API with your own API integration to return customer order status information.

### Configuration needed
To customize this template, you need to do the following:

#### General dialog customization
Review each of the dialogs, starting with Order Status, and customize the verbiage used to greet your customer and request their details. This is done by editing the text copy of the interactions, and hitting Enter or using the menu to save.

If you want to remove any capture interactions, be sure to review the **Next Action** navigation so that the previous interaction will go to the next interaction in the dialog.

#### Global Function customization
Click **Global Functions** to access all the global functions and variables to be configured.

Within Global Functions, three variables (`brandName`, `transferMessage` and `escalationSkill`) have been created. Configure these with your specific brand name, along with the appropriate skill ID and transfer message to escalate to your agent.

#### Order number validation
The *get order number* interaction is responsible for collecting a user's order number. Included in this interaction is a Regex validation to ensure the order number meets the correct data format. Modify the rules for this interaction to specify the format for your brand.

#### Pre/Post-Process code blocks included
The current mock API returns date information in a format that is not structured in a user-friendly manner. To remedy this, the following code has been added to the Pre-Process Code of the *Order Status Text Display* interaction:

```
// Converting date data from api call to a more human readable form for text display
var orderDate = new Date(botContext.getBotVariable('OrderStatus.orderDate'));
var deliverDate = new Date(botContext.getBotVariable('OrderStatus.deliveryDate'));
var stringedOrderDate = orderDate.toDateString();
var stringedDeliverDate = deliverDate.toDateString();
botContext.setBotVariable('orderDate', stringedOrderDate, true, false);
botContext.setBotVariable('deliveryDate', stringedDeliverDate, true, false);
```

#### Analytics
Custom event logging for this template has been provided by default.

For standard text statements, the function to log custom events can be found in the Pre-Process Code for the interaction:

```
botContext.logCustomEvent('', 'Interaction Name', '');
```

For questions that a user must respond to, the code can be found under Process User Response:

```
var response = botContext.getCurrentUserMessage();
botContext.logCustomEvent(response, ‘Interaction Name’, ‘’);
```

{: .important}
Personal information collection events are not logged by default in this template. Please consider privacy regulations before enabling this type of logging.

For more information on custom events, see [here](conversation-builder-scripting-functions-log-debug.html#log-custom-event).

### Dialog templates
This bot template contains a [dialog template](conversation-builder-dialog-templates.html) that allows you to easily copy over the primary data collection and API integration flow independently from the bot template.

#### Order Status 
Just the Order Status dialog flow. This template doesn't include escalation, fallback or other dialogs.

Included dialogs:
* Order Status

Pre-built NLU domain:
* LP_Cross-vertical

Integrations:
* OrderStatus

Global Function modifications:

Global variables for the purpose of escalation (`transferMessage` and `skillId`) have been removed from Global Functions, as the escalation dialog is not included with this dialog template.
