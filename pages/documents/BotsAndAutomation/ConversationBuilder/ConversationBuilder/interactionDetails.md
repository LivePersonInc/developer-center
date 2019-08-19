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

The Interaction Details widget is where you will configure the majority of dialog and interaction logic.

It contains three panels: [Settings](#settings), [Next Actions](#next-actions-response-match-actions), and [Code](#code).

### Settings

The Settings panel contains essential data about the selected Interaction.

* ID
  * This is useful for debugging
* Interaction Name
  * Change the name to something memorable and useful to reference in the [Next Step](#next-step) selector
* Interaction Type
  * Shows the [Interaction Type](conversation-builder-conversation-builder-interactions.html). Be aware that it is possible to change the type from this dropdown.
* Interaction Delay
  * Set the millisecond time delay between sending this message. It is recommended to add a 2000 ms delay if you want to ensure a consistent message order.
* Enabled
  * On/Off selector for enabling or disabling
* Required
  * On/Off selector for required or not-required

### Next Actions - Response Match & Actions

#### Conditions

In the first dropdown within Conditions, you can set how you would like to match user input. 

* Response Intent uses your linked Intent Domain and finds a match based on NLU (The Assist tools tries to suggest intent matches automatically for you)
* Regular Expression
* Pattern
* Exact Value

##### Pattern Matching

Patterns are combinations of keywords, wildcards and alternates which are compared to user input. **A user input is considered a match to a pattern if it fits the pattern exactly**. Therefore, a pattern of "hello" will **only** match with a user input of "hello". 

However, Patterns can use alternates for specific variations, e.g., `I want a pair of (headphones|head phones|earbuds|earphones)` will match "I want a pair of headphones" or "I want a pair of earphones", etc. 

Patterns can also include wildcards for looser matches, e.g., `*home*` would match "homes", "home run", "home is where the heart is".

You can use wildcards and alternates together like this:

* `* (some|a pair of) (headphones|earbuds)*`

* `(thank(|s)|thank you)*`

* `*headphones*`

Once the automation detects a match to the pattern which you defined, the dialog configured with that pattern kicks in and the conversation begins. If the pattern is configured for a user input in the middle of the conversation (like an answer to a question), the appropriate response will be triggered.

The basic operators available for use with pattern matching are:

* Asterisk, otherwise known as a wildcard which matches any character.

* Parentheses, which enclose a group of alternates.

* Pipe, which denotes alternates.

If you need more advanced operators, you can also use [Regular Expressions](http://www.rexegg.com/regex-quickstart.html) with pattern matching.

#### Slots

A slot is a container for storing a value or parameter, so it can be used in subsequent actions. You can store values in slots based on whether a condition is met.

As an example, you might have a Text Question interaction that asks the user for their 6-digit account number. If that condition is met (the user enters a 6-digit number), the number is then stored in a slot named `accountNumber`. A subsequent Integration interaction uses that number to retrieve the user's balance.

<img class="fancyimage" width="750" src="img/ConvoBuilder/conditions_and_slots.png">

[See here](conversation-builder-conversation-builder-slots-variables.html#slots) for more on working with slots.

#### Variables

[See here](conversation-builder-conversation-builder-slots-variables.html#variables) for more on working with variables.

#### Next Step

When adding a [question interaction](conversation-builder-conversation-builder-interactions.html) to the dialog, you can configure conditional logic based on the user's response. These are basically "if then" type decisions but, when combined with pattern matching, intents, and entities, they can deliver a powerful flow control engine for the automation.

When you add a question interaction to the dialog, you can select it and choose the Interaction Details icon on the right side of the interaction. From there, click on "User Response" in the middle of the Interactions Details panel which opens. At the bottom of this menu, you'll find the "Next Step" dropdown.

When a condition is met, the action defined under the Next Step dropdown menu will occur. The automation can close the dialog, move on to the next interaction, perform an Integration call, and more based on how you configure the Next Step dropdown menu. Conditions can be set to trigger using the following:

* Response [intent](conversation-builder-intent-builder-overview.html) - the automation will trigger the Next Step action when a specific intent is sent to it by the NLU engine. Make sure to connect your domain and populate it with intents so that they'll be available for conditions.

* Regular Expression - the automation will trigger the Next Step action when user input matches the RegEx you define. All standard RegEx rules apply.

* Pattern Matching - the automation will trigger the Next Step action when the user input matches the pattern you define. See below for more information on pattern matching.

* Exact Value - the automation will trigger the Next Step action when the user input matches an exact value you define. This is useful for questions where you present the user a set or predefined answers, such as multiple choice questions, since you can anticipate the user's answer precisely.

<div class="important">You can add more than one condition to an interaction for more complex flow control. You can do so by clicking on the "+ Response Match & Actions" button below the condition box.</div>

### Next Actions - Advanced Responses

#### Fallback Response

If a user asks for a slot to be changed but the automation couldn't recognize the phrase the user used ("give me a different color" for example), it will send a fallback response. This could be something like "I'm sorry, I didn't understand. Can you try again?" for example.

### Code

Javascript code can be utilized in the following areas:

* Pre-Process Code
* Post-Process Code

This will enable you to use [built-in scripting functions](conversation-builder-conversation-builder-scripting-functions.html) to access variables and manipulate data to expand your automation capabilities.
