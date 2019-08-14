---
pagename: Conditions
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversation Builder
permalink: conversation-builder-conversation-builder-conditions.html
indicator: both
---

### User Response Match & Actions

When adding a [question interaction](conversation-builder-conversation-builder-interactions.html) to the dialog, you can configure conditional logic based on the user's response. These are basically "if then" type decisions but, when combined with pattern matching, intents, and entities, they can deliver a powerful flow control engine for the automation.

When you add a question interaction to the dialog, you can select it and choose the Interaction Details icon on the right side of the interaction. From there, click on "User Response" in the middle of the Interactions Details panel which opens. At the bottom of this menu, you'll find the "Next Step" dropdown.

When a condition is met, the action defined under the Next Step dropdown menu will occur. The automation can close the dialog, move on to the next interaction, perform an Integration call, and more based on how you configure the Next Step dropdown menu. Conditions can be set to trigger using the following:

* Response [intent](conversation-builder-intent-builder-overview.html) - the automation will trigger the Next Step action when a specific intent is sent to it by the NLU engine. Make sure to connect your domain and populate it with intents so that they'll be available for conditions.

* Regular Expression - the automation will trigger the Next Step action when user input matches the RegEx you define. All standard RegEx rules apply.

* Pattern Matching - the automation will trigger the Next Step action when the user input matches the pattern you define. See below for more information on pattern matching.

* Exact Value - the automation will trigger the Next Step action when the user input matches an exact value you define. This is useful for questions where you present the user a set or predefined answers, such as multiple choice questions, since you can anticipate the user's answer precisely.

<div class="important">You can add more than one condition to an interaction for more complex flow control. You can do so by clicking on the "+ Response Match & Actions" button below the condition box.</div>

### Pattern Matching

Patterns are combinations of keywords, wildcards and alternates which are compared to user input. **A user input is considered a match to a pattern if it fits the pattern exactly**. Therefore, a pattern of "hello" will **only** match with a user input of "hello". However, Patterns can use alternates for specific variations, e.g., "I want a pair of (headphones&#124;head phones&#124;earbuds&#124;earphones)" will match "I want a pair of headphones" or "I want a pair of earphones", etc. Patterns can also include wildcards for looser matches, e.g., "&#42;home&#42;" would match "homes", "home run", "home is where the heart is".

You can use wildcards and alternates together like this:

* "&#42; (some&#124;a pair of) (headphones&#124;earbuds)&#42;"

* "(thank(&#124;s)&#124;thank you)&#42;"

* "&#42;headphones&#42;"

Once the automation detects a match to the pattern which you defined, the dialog configured with that pattern kicks in and the conversation begins. If the pattern is configured for a user input in the middle of the conversation (like an answer to a question), the appropriate response will be triggered.

The basic operators available for use with pattern matching are:

* Asterisk, otherwise known as a wildcard which matches any character.

* Parentheses, which enclose a group of alternates.

* Pipe, which denotes alternates.

If you need more advanced operators, you can also use [Regular Expressions](http://www.rexegg.com/regex-quickstart.html) with pattern matching.

### Slots

A slot is a container for storing a value or parameter, so it can be used in subsequent actions. You can store values in slots based on whether a condition is met.

As an example, you might have a Text Question interaction that asks the user for their 6-digit account number. If that condition is met (the user enters a 6-digit number), the number is then stored in a slot named `accountNumber`. A subsequent Integration interaction uses that number to retrieve the user's balance.

<!--
Add conditions_and_slots.png.
-->

For more on working with slots, see [Slots](conversation-builder-conversation-builder-slots.html).

#### Change Response

Below the condition configuration box, you will find three check boxes. These control three different responses to the interaction you can use when using conditions:

* Fallback response. If a user asks for a slot to be changed but the automation couldn't recognize the phrase the user used ("give me a different color" for example), it will send a fallback response. This could be something like "I'm sorry, I didn't understand. Can you try again?" for example.

<!-- These two are gone for some reason.

* Change response. The automation can change a slot's data if the user requests to. Common phrases like "what about sandals" or "show me sandals" will cause the automation to clear the data currently in the slot, look for an entity in the user's change request, repopulate the slot with the new information, and perform the configured Next Step again. When this occurs, you can have the automation send a message to the user letting them know it is doing so, for example "Let me look for your new selection".

* Cancel response. Similarly, a user might wish to cancel their request with a phrase like "Never mind". The automation will then clear the data in the slot and send the cancelled message to the user, as defined by you.
-->

#### Code

This will enable you to write JavaScript code directly into your automation, further defining and controlling the flow of the dialog with even more advanced configurations. See [scripting functions](conversation-builder-conversation-builder-scripting-functions.html) for the available built-in functions.

<!--
Change Response and Code sections were H4s, i.e., subsections of slots. Do those belong in the Interactions topic instead?
Mary to look into this after the Slots topic is more stable. For now, those sections remain in this topic.
-->
