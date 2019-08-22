---
pagename: Response Match & Actions
redirect_from:
    - conversation-builder-conversation-builder-conditions.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversation Builder
permalink: conversation-builder-conversation-builder-response-match-actions.html
indicator: both
---

Each [Next Actions panel](conversation-builder-conversation-builder-interaction-details.html#next-actions) can contain one or many **Response Match & Action sets**, and each set contains instructions for how to respond to the user input. For example, if you ask the user what their favorite color is, you might create a Response Match & Action set for each possible primary color.

The following image illustrates two Response Match & Actions sets, where the first is displayed.

<img style="width:450px" class="fancyimage" src="img/ConvoBuilder/interactionDetails_sets.png">

**To add a Response Match & Action set**
* Click the <img style="width:25px" src="img/ConvoBuilder/icon_addResponseMatchSet.png"> icon beside "Response Match & Actions."

### Conditions

When adding a question or integration [interaction](conversation-builder-conversation-builder-interactions.html) to the dialog, you can configure conditional logic based on the user's response. These are basically "if..., then..." type decisions, but, when combined with pattern matching, intents, and entities, they can deliver a powerful flow control engine for the automation.

In the first dropdown within Conditions, you can set how you want to match the user input: 

* **Response [Intent](conversation-builder-intent-builder-overview.html)**: The automation will trigger the [Next Step](#next-step) action when a specific intent is sent to it by the NLU engine. Make sure to connect your domain and populate it with intents, so they'll be available for conditions.
* **Regular Expression**: The automation will trigger the [Next Step](#next-step) action when the user input matches the RegEx you define. All standard RegEx rules apply.
* **Pattern**: The automation will trigger the [Next Step](#next-step) action when the user input matches the pattern you define. See below for more information on pattern matching.
* **Exact Value**: The automation will trigger the [Next Step](#next-step) action when the user input matches an exact value you define. This is useful for questions where you present the user a set or predefined answers, such as multiple choice questions, since you can anticipate the user's answer precisely.

You can add more than one condition to an interaction for more complex flow control. To do so, click the <img style="width:25px" src="img/ConvoBuilder/icon_addCondition.png"> icon in the Conditions section.

<img style="width:400px" class="fancyimage" src="img/ConvoBuilder/interactionDetails_addCondition.png">

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

### Slots

A slot is a container for storing a value or parameter, so it can be used in subsequent actions. You can store values in slots based on whether a condition is met.

As an example, you might have a Text Question interaction that asks the user for their 6-digit account number. If that condition is met (the user enters a 6-digit number), the number is then stored in a slot named `accountNumber`. A subsequent Integration interaction uses that number to retrieve the user's balance.

<img class="fancyimage" width="750" src="img/ConvoBuilder/interactionDetails_slots.png">

[See here](conversation-builder-conversation-builder-variables-slots.html#slots) for more on working with slots.

### Variables

[See here](conversation-builder-conversation-builder-variables-slots.html#variables) for more on working with variables.

### Next Step

When a condition is met, the action defined under the Next Step dropdown menu will occur. The automation can close the dialog, move on to the next interaction, perform an integration call, and more, based on how you configure the Next Step dropdown menu.