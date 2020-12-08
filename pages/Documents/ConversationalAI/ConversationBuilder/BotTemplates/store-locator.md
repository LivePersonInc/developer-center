---
pagename: Store Locator
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername:  Bot Templates
permalink: conversation-builder-bot-templates-store-locator.html
indicator: both
---

The Store Locator template is designed to provide users with information on the closest retail locations to a supplied zip code.

While this template takes advantage of rich content interactions, alternatives have been included for channels that do not support structured content (SMS, WhatsApp, etc.).

{: .important}
This bot template contains a dialog template that can be used in other bots in your account. For more information on dialog templates, see [here](conversation-builder-dialog-templates.html).

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/templates_store_loc_de.png">

### Included items

#### Dialogs
* **Store Locator**: Greets the user, collects the zip code, and displays returned data from an API call in structured content.
* **Text Only**: For channels that don't support structured content, a text-only alternative is provided to dynamically display results in a text question.
* **Fallback**: This is displayed when the user enters an utterance that is not recognized.
* **Agent_Escalation**: Performs a transfer to a particular Conversational Cloud skill using the *Agent Transfer* interaction. The skill ID and transfer message are configurable within Global Functions.
* **No Agents Available**: In the event that the escalation attempt fails, handle the issue appropriately within this dialog.

#### Integrations
* **StoreLocator**: This integration retrieves a collection of retail locations, returning information about their address, opening hours, and links to a Google map. The return data is static on the mock API side, but does demonstrate how to iterate over the data set and display as structured content.
    * Custom code provided in Transform Result Script saves the response as a bot variable for dynamic use in text-only channels.
    * Returned data is not dependent on the zip code provided by the user. This is included in the API URI simply as a demonstration of its use.
    * You will need to replace the mock API with your own API integration to return store location information.

<img class="fancyimage" style="width:350px" src="img/ConvoBuilder/templates_store_loc_preview1.png">
<img class="fancyimage" style="width:350px" src="img/ConvoBuilder/templates_store_loc_preview2.png">

### Configuration needed

To customize this template, you will need to do the following:

#### General dialog customization
Review each of the dialogs, starting with Store Locator, and customize the verbiage used to greet your customer and request their details. This is done by editing the text copy of the interactions, and hitting Enter or using the menu to save.

If you want to remove any capture interactions, be sure to review the **Next Action** navigation so that the previous interaction will go to the next interaction in the dialog.

#### Global Function customization
Click **Global Functions** to access all the global functions and variables to be configured.

Within Global Functions, three variables (`brandName`, `transferMessage` and `escalationSkill`) have been created. Configure these with your specific brand name, along with the appropriate skill ID and transfer message to escalate to your agent.

#### Zip Code validation
The *get zip code* and *zip code reprompt* interactions are responsible for collecting a user's zip code. Included in this interaction is a Regex validation to ensure the zip code meets the standard, 5-digit format. Modify the rules for this interaction if you need to collect a different format.

#### Pre/Post-Process Code Blocks included
The *API success* interaction contains the following code to route differently for unsupported channels:

```
// if structured content is not supported for channel, divert to text only display stores
var channel = botContext.getUserChannel();
if (channel === 'lp_abc' || channel === 'lp_sms' || channel === 'lp_whatsapp') {
botContext.setTriggerNextMessage('text only nearest stores');
}
```

Our *text only nearest stores* interaction contain both Pre-Process and Process User Response code snippets to dynamically create a multiple choice menu and respond appropriately. Details of this process can be found [here](conversation-builder-integrations-integration-basics.html#process-api-results-with-custom-data-fields).

```
// Parse store results array from API call
var storeArray = JSON.parse(botContext.getBotVariable('storeArray'));
// Empty string to populate a dynamic list of options for use to choose from. Also including an array for processing user response.
var options = '';
var optionsArray = [];
// Alphabet string to properly label the options (e.g. A) opt1, B) opt2, etc)
var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// Iterate through list building option string as well as options array.
for (var i = 0; i < storeArray.length; i++) {
  var cityName = storeArray[i].city;
  var optionText = alphabet[i] + ') ' + cityName + '\n';
  options += optionText;
  optionsArray.push(optionText);
}
// Set bot as bot variables.
botContext.setBotVariable('storeOptions', options, true, false);
botContext.setBotVariable('optionsArray', JSON.stringify(optionsArray), true, false);
```

#### Analytics
All information capture interactions include custom event logging by default. These code blocks can be found in the Process User Response section of the interaction’s setting panel.

#### Notes on Structured Content
Prior to displaying images within structured content, the image domains will need to be whitelisted. For assistance with this, please contact your LivePerson Account representative.

By default, structured content is displayed vertically in messaging. If you want the content to be horizontally scrollable instead, you need to include the `tileDisplay: horizontal` custom configuration when creating your agent connector. For details on this, see [here](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#tiledisplay).

### Dialog templates
This bot template contains a [dialog template](conversation-builder-dialog-templates.html) that allows you to easily copy over the primary data collection and API integration flow independently from the bot template.

#### Store Locator
Includes the Store Locator dialog, as well as the Text Only dialog to accommodate for channels that don't support rich content. The template doesn't include escalation, fallback or other dialogs.

Included dialogs:
* Store Locator
* Text Only

Pre-built NLU domain:
* LP_Cross-vertical

Integrations:
* StoreLocator

Global Function modifications:

Global variables for the purpose of escalation (`transferMessage` and `skillId`) have been removed from Global Functions, as the escalation dialog is not included with this dialog template.
