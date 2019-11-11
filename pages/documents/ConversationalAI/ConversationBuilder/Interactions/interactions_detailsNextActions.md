---
pagename: Details - Next Actions
redirect_from:
    - conversation-builder-conversation-builder-conditions.html
    - conversation-builder-conversation-builder-response-match-actions.html
    - conversation-builder-response-match-actions.html
    - conversation-builder-interactions-response-match-actions.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversation Builder
permalink: conversation-builder-interactions-details-next-actions.html
indicator: both
---

The **Next Actions** tab in the **Interaction Details** widget is where you configure most of the dialog and interaction logic.

### Access the Next Actions tab

1. Select the interaction to configure, and click the <img style="width:25px" src="img/ConvoBuilder/icon_interactionDetails.png"> icon (Interaction Details) that's displayed to its right.

    <img style="width:600px" class="fancyimage" src="img/ConvoBuilder/interactions_detailsNextActions1.png">
2. Click the **Next Actions** tab.

    <img style="width:350px" class="fancyimage" src="img/ConvoBuilder/interactions_detailsNextActions2.png">

### Response Match & Action

#### Response Match & Action sets

A Response Match & Action set contains the instructions for how to respond to the user input. You can create one or many sets depending on how many responses you need to support. The following image illustrates two sets, where the first is displayed.

<img style="width:300px" class="fancyimage" src="img/ConvoBuilder/interactionDetails_sets.png">

**To add a Response Match & Action set**
* Click the <img style="width:25px" src="img/ConvoBuilder/icon_addResponseMatchSet.png"> icon beside "Response Match & Actions."

#### Conditions

When adding a question or integration interaction to the dialog, you can configure conditional logic based on the user's response in order to take the user through the desired next steps. These are essentially "if..., then..." conditional statements, but when combined with pattern matching, intents and entities, they can deliver a powerful flow control engine for the bot.

In the first drop-down in the Conditions section, you specify how you want to match the user input. Methods include: 

* **Response [Intent](intent-builder-intents.html)**: The bot will trigger the Next Step action (discussed below) when the intent that you select is sent to it by the NLU engine. Make sure to connect your domain and populate it with intents, so they'll be available for conditions.
* **Regular Expression**: The bot will trigger the Next Step action (discussed below) when the user input matches the RegEx that you specify. All standard [RegEx rules](http://www.rexegg.com/regex-quickstart.html) apply.
* **Pattern**: The bot will trigger the Next Step action (discussed below) when the user input matches the pattern that you specify. See [here](conversation-builder-interactions-interaction-basics.html#specify-patterns-in-interactions) for more information on pattern matching.
* **Exact Value**: The bot will trigger the Next Step action (discussed below) when the user input matches an exact value that you specify. This is useful for questions where you present the user a set of predefined answers, such as multiple choice questions, since you can anticipate the user's answer precisely.

You can add more than one condition to an interaction for more complex flow control. To do so, click the <img style="width:25px" src="img/ConvoBuilder/icon_addCondition.png"> icon in the Conditions section.

<img style="width:400px" class="fancyimage" src="img/ConvoBuilder/interactionDetails_addCondition.png">

#### Slots

A slot is a special type of variable that is automatically assigned an entity value when mapped to a specific entity. You can fetch the value of a slot variable in interactions or API integrations using`{$botContext.slot.SLOT_VARIABLE_NAME}`. For more on using slots, see [Variables & Slots](conversation-builder-variables-slots.html).

#### Variables

Variables are the default way to store and access important data points through the flow of the bot. You can fetch the value of a variable in interactions or API integrations inline using `{$botContext.VARIABLE_NAME}`. For more on using variables, see [Variables & Slots](conversation-builder-variables-slots.html).

#### Next Step

Select the next step if the displayed condition is satisfied. You have three types of choices:

* Continue to the next interaction (in the dialog)
* "End interaction," which closes the dialog
* Jump to a specific interaction that you select by name

### Fallback Response

In the **Fallback Response** field, enter the text to be sent to the user if none of the defined conditions are met.

### Process User Response

Use the **Process User Response** section to add code that runs after the user has responded to this interaction. This code can be used in place of the response conditions, or in conjunction with them after a successful match.

You can use the built-in [scripting functions](conversation-builder-scripting-functions-functions-list.html) to access variables and manipulate data.
