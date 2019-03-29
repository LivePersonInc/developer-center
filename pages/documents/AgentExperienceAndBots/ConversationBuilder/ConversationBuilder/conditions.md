---
pagename: Conditions
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
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

First paragraph: Slots are a useful way to store user responses for usage in an API Integration or other interactions. Slots can be set to a simple value based on a condition or they can be associated with entities, which give them additional capability. When a user selects an answer or types their own input and invokes an [entity](conversation-builder-intent-builder-entities.html) (by, for example, indicating that they want "sandals", which belongs to the "product_shoes" entity), the specific object selected by them might be useful in the future. For example, the automation could refer to it in a reply later in the dialog or you could use an integration to query an API with the slot and retrieve specific information about a product the user was looking for, create a lead with that information or store it for future use outside of the automation (like in the case of an email address).

To configure a slot, simply click the interaction where you'd like to look for entities in the user's input (like a multiple choice question, for example), and go to User Response in the middle of the Interaction Details panel. From there, click the blue **+** icon right to the right of Slot.

In the menu which opens, first assign the slot a name by filling in the "Name" input field. **We recommend using standard naming conventions for slots. The slot name is later used to refer to and access the data which the slot contains**. Then, look for a pre-configured entity (which you should have set up for your domain previously) by typing in first the "@" character and then the name of your desired entity in the "Value" input field to the right of the Name input field.

Lastly, decide how long you'd like the slot's data to be kept for. You can set this by using the "Scope" dropdown menu on the right hand side. The dropdown provides four options:

* Request - the slot's data will only be saved for that particular use of the slot. Only useful if the next question in the tree depends on the slot's data.

* Dialog - the slot's data will only be stored for this specific dialog. Once this dialog ends (either by the user closing the conversation or the automation moving on to a different dialog), the slot's data will be cleared.

* Session - the slot's data will be saved for the entirety of the user's browser session. This is useful when using the data to query APIs and retrieve information which might be useful for multiple dialogs.

* Forever - the slot's data will be saved on our servers forever. It will be accessible via the Conversation Builder for as long as you need it.

`{$botContext.slot.slotName}` is how you can access values in slots and use them in other ways. For example, to have the automation respond with a user's previously stored answer under the assigned entity `animal`, you'd set up a text interaction like so:

"You answered: {$botContext.slot.animal}!"

If your automation asked the user "which animal do you like?" and the user answered "dogs" or something similar, the slot for the entity `animal` would be populated with their answer. The automation would then respond with "You answered: dogs!" populating the code above with the user's reply.

#### Change Response

Below the condition configuration box, you will find three check boxes. These control three different responses to the interaction you can use when using conditions:

* Fallback response. If a user asks for a slot to be changed but the automation couldn't recognize the phrase the user used ("give me a different color" for example), it will send a fallback response. This could be something like "I'm sorry, I didn't understand. Can you try again?" for example.

<!-- These two are gone for some reason.

* Change response. The automation can change a slot's data if the user requests to. Common phrases like "what about sandals" or "show me sandals" will cause the automation to clear the data currently in the slot, look for an entity in the user's change request, repopulate the slot with the new information, and perform the configured Next Step again. When this occurs, you can have the automation send a message to the user letting them know it is doing so, for example "Let me look for your new selection".

* Cancel response. Similarly, a user might wish to cancel their request with a phrase like "Never mind". The automation will then clear the data in the slot and send the cancelled message to the user, as defined by you.
-->

#### Code

This will enable you to write JavaScript code directly into your automation, further defining and controlling the flow of the dialog with even more advanced configurations. See [scripting functions](conversation-builder-conversation-builder-scripting-functions.html) for the available built-in functions.