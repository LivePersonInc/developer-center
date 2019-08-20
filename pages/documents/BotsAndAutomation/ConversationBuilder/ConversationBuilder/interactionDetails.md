---
pagename: Interaction Details
redirect_from:
    - conversation-builder-conversation-builder-conditions.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversation Builder
permalink: conversation-builder-conversation-builder-interaction-details.html
indicator: both
---

The Interaction Details widget is where you configure the majority of dialog and interaction logic.

**To access the Interaction Details widget**
- Select the interaction, and click the **Interaction Details** icon that's displayed to its right.
<img style="width:650px" src="img/ConvoBuilder/interactionDetails_icon.png">

The Interaction Details widget can contain three panels:
- [Settings](#settings)
- [Next Actions](#next-actions)
- [Code](#code) (Available for Statement, Question and Integration interactions)

<img style="width:450px" src="img/ConvoBuilder/interactionDetails_panel.png">

### Settings

The Settings panel contains essential data about the selected interaction:

* **ID**: This is useful for debugging.
* **Interaction Name**: Change the name to something memorable and useful to reference in the [Next Step](#response-match--actions---next-step) selector.
* **Interaction Type**: Shows the [Interaction Type](conversation-builder-conversation-builder-interactions.html). Be aware that it is possible to change the type from this dropdown.
* **Interaction Delay**: Set the millisecond time delay between sending this message. It is recommended to add a 2000 millisecond delay if you want to ensure a consistent message order.
* **Enabled**: On/Off selector for enabling or disabling.
* **Required**: Available for Question interactions only. On/Off selector for required or not required.

### Next Actions

Each Next Actions panel can contain one or many Response Match & Action sets, and each set contains instructions for how to respond to the user input. For example, if you ask the user what their favorite color is, you might create a Response Match & Action set for each possible primary color.

The following image illustrates two Response Match & Actions sets, where the first is displayed.

<img style="width:450px" src="img/ConvoBuilder/interactionDetails_sets.png">

**To add a Response Match & Action set**
* Click the <img style="width:25px" src="img/ConvoBuilder/icon_addResponseMatchSet.png"> icon beside "Response Match & Actions."

### Response Match & Actions - Conditions

When adding a question or integration [interaction](conversation-builder-conversation-builder-interactions.html) to the dialog, you can configure conditional logic based on the user's response. These are basically "if..., then..." type decisions, but, when combined with pattern matching, intents, and entities, they can deliver a powerful flow control engine for the automation.

In the first dropdown within Conditions, you can set how you want to match the user input: 

* **Response [Intent](conversation-builder-intent-builder-overview.html)**: The automation will trigger the [Next Step](#response-match--actions---next-step) action when a specific intent is sent to it by the NLU engine. Make sure to connect your domain and populate it with intents, so they'll be available for conditions.
* **Regular Expression**: The automation will trigger the [Next Step](#response-match--actions---next-step) action when the user input matches the RegEx you define. All standard RegEx rules apply.
* **Pattern**: The automation will trigger the [Next Step](#response-match--actions---next-step) action when the user input matches the pattern you define. See below for more information on pattern matching.
* **Exact Value**: The automation will trigger the [Next Step](#response-match--actions---next-step) action when the user input matches an exact value you define. This is useful for questions where you present the user a set or predefined answers, such as multiple choice questions, since you can anticipate the user's answer precisely.

You can add more than one condition to an interaction for more complex flow control. To do so, click the <img style="width:25px" src="img/ConvoBuilder/icon_addCondition.png"> icon in the Conditions section.

<img style="width:400px" src="img/ConvoBuilder/interactionDetails_addCondition.png">

#### Pattern Matching

Patterns are combinations of keywords, wildcards and alternates which are compared to user input. **A user input is considered a match to a pattern if it fits the pattern exactly**. Therefore, a pattern of "hello" will **only** match with a user input of "hello". 

However, Patterns can use alternates for specific variations, e.g., `I want a pair of (headphones|head phones|earbuds|earphones)` will match "I want a pair of headphones" or "I want a pair of earphones", etc. 

Patterns can also include wildcards for looser matches, e.g., `*home*` would match "homes", "home run", "home is where the heart is".

You can use wildcards and alternates together like this:

* `* (some|a pair of) (headphones|earbuds)*`

* `(thank(|s)|thank you)*`

* `*headphones*`

Once the automation detects a match to the pattern that you defined, the dialog configured with that pattern kicks in and the conversation begins. If the pattern is configured for a user input in the middle of the conversation (like an answer to a question), the appropriate response will be triggered.

The basic operators available for use with pattern matching are:

* Asterisk, otherwise known as a "wildcard," which matches any character.

* Parentheses, which enclose a group of alternates.

* Pipe, which denotes alternates.

If you need more advanced operators, you can use [Regular Expressions](http://www.rexegg.com/regex-quickstart.html) with pattern matching.

### Response Match & Actions - Slots

A slot is a container for storing a value or parameter, so it can be used in subsequent actions. You can store values in slots based on whether a condition is met.

As an example, you might have a Text Question interaction that asks the user for their 6-digit account number. If that condition is met (the user enters a 6-digit number), the number is then stored in a slot named `accountNumber`. A subsequent Integration interaction uses that number to retrieve the user's balance.

<img class="fancyimage" width="750" src="img/ConvoBuilder/interactionDetails_slots.png">

[See here](conversation-builder-conversation-builder-slots-variables.html#slots) for more on working with slots.

### Response Match & Actions - Variables

[See here](conversation-builder-conversation-builder-slots-variables.html#variables) for more on working with variables.

### Response Match & Actions - Next Step

When a condition is met, the action defined under the Next Step dropdown menu will occur. The automation can close the dialog, move on to the next interaction, perform an integration call, and more, based on how you configure the Next Step dropdown menu.

### Next Actions - Advanced Responses

#### Fallback Response

If a user asks for a slot to be changed, but the automation can't recognize the phrase the user used ("give me a different color," for example), it will send a fallback response. This could be something like, "I'm sorry; I didn't understand. Can you try again?"

### Next Actions - Process User Response

This enables you to add JavaScript code for processing user input _upon receiving the input_, which can be useful for cleaning or normalizing user input, or even passing the data to an API.

Use the built-in [scripting functions](conversation-builder-conversation-builder-scripting-functions.html) to access variables and manipulate data.

### Code

The Code panel that's available for Statement, Question and Integration interactions allows you to add scripts for the following options:

* Pre-Process Code
* Post-Process Code

This enables you to add JavaScript code that executes _before or after_ the interaction runs, which can be useful for any kind of build-up or tear-down that must take place.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/interactionDetails_code.png">

Use the built-in [scripting functions](conversation-builder-conversation-builder-scripting-functions.html) to access variables and manipulate data.
