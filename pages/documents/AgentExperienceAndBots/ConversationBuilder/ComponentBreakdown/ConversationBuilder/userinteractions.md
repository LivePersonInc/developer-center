---
pagename: User Interactions
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Component Breakdown
permalink: conversation-builder-component-breakdown-user-interactions.html
indicator: both
---

The User Interactions section of the Interactions Toolbar is made up of only one type of interaction, "User Says". This interaction is the textual prompt to which the bot/automation responds, whether it is the first message which starts the Dialog or some sort of input during it. When you add a "User Says" interaction, you give an example of a question the user might ask at the start of a conversation.

Instead of just looking for the specific phrase you originally defined (which would result in the bot/automation not recognizing many of your user's inputs), you can direct the bot/automation to look for a specific pattern (a method called **pattern matching**) or to look for more broad and flexible **intents** in the user's input, by using our NLU engine.

For more information on Pattern Matching, see the section below. For more information on setting up and using intents, see either [this tutorial](conversation-builder-getting-started-building-your-first-intent.html) or a more in-depth [breakdown of the Intent Builder](conversation-builder-component-breakdown-intent-builder-overview.html).

### Bot/Automation Interactions

The **Bot** section of the Interactions Toolbar is made up of three different types of interactions:

* **Statements**. This type of interaction is a straight-forward declaration by the bot which does not expect a response from the user. There are four different types of statements available to you:

  * Text. For example, "Thank you for taking our survey!"

  * Image.

  * Audio file.

  * Video.

* **Questions**. This type of interaction is interactive and meant to be answered by the user. It can also be used to fill [slots](conversation-builder-component-breakdown-user-interactions.html#slots) with key information based on the user's answer, making it available for future use. The different types of question interactions available to you are:

  * Multiple Choice. A simple and standard multiple choice questions allowing the user to select from a list of predefined answers.

  * Text. A simple textual question.

  * Structured Content. Most conversations involve plain text like what you are reading now. However, sometimes you may want to send content (images, buttons, maps, quick replies, etc) to a consumer in a more rich, interactive, and structured format. **You can show up to 10 of these items in a horizontally scrolling carousel**.

  * Button. An object that allows you to show a simple text question with an associated button actions. A click on the button would result in an action pre-configured by you (like navigation to a link, for example).

  * Quick Reply. A question with a series of pre-configured replies that appear as a list of chips at the bottom of the interaction and disappear once the user has selected one.

  * Listpicker. **Note: list picker is relevant specifically to Apple Business Chat only**. This allows the user to make a selection in response to a simple text question from a list of items.

  * Time Picker. **Note: time picker is relevant specifically to Apple Business Chat only**. This allows the user to make a selection in response to a simple text question from a list of event times, like an appointment.

* **Integrations**. This type of interaction involves the bot/automation querying an outside API or service and retrieving information from it. For example, you could have your bot/automation search for a certain [entity](conversation-builder-component-breakdown-entities-overview.html) and retrieve the matching product's catalogue item from your own API, populating the bot/automation's next reply with the info. You could also set up an Apple Pay interaction, allowing the bot/automation to prompt the user to use Apply Pay to submit a payment.

### Conditions

When adding a question interaction to the dialog, you can configure conditional logic based on the user's response. These are basically "if then" type decisions but, when combined with pattern matching, intents, and entities can deliver a powerful flow control engine for the bot/automation.

When you add a question interaction to the dialog, you can select it and choose the Interaction Details from the Settings Toolbar on the right hand side (the second icon on the toolbar). From there, click on "User Response" in the middle of the Interactions Details panel which opens. At the bottom of this menu, you'll find the "Next Step" dropdown.

When a condition is met, the action defined under the Next Step dropdown menu will occur. The bot/automation can close the dialog, move on to the next interaction, perform an Integration call, and more based on how you configure the Next Step dropdown menu. Conditions can be set to trigger using the following:

* Response intent - the bot/automation will trigger the Next Step action when a specific intent is sent to it by the NLU engine. Make sure to connect your domain and populate it with intents so that they'll be available for conditions.

* Regular Expression - the bot/automation will trigger the Next Step action when user input matches the RegEx you define. All standard RegEx rules apply.

* Pattern Matching - the bot/automation will trigger the Next Step action when the user input matches the pattern you define. See below for more information on pattern matching.

* Exact Value - the bot/automation will trigger the Next Step action when the user input matches an exact value you define. This is useful for questions where you present the user a set or predefined answers, such as multiple choice questions, since you can anticipate the user's answer precisely.

<div class="important">You can add more than one condition to an interaction for more complex flow control. You can do so by clicking on the "+ Response Match & Actions" button below the condition box</div>

#### Pattern Matching

Patterns are templates which are compared to user input. **A user input is considered a match to a pattern if it fits the pattern exactly**. Therefore, a pattern of "hello" will **only** match with a user input of "hello". However, Patterns can use alternates for specific variations, e.g.: "I want a pair of (headphones&#124;head phones&#124;earbuds&#124;earphones)" will match "I want a pair of headphones" or "I want a pair of earphones", etc. Patterns can include wildcards for looser matches, e.g.: "&#42;home&#42;" would match "homes", "home run", "home is where the heart is".

You can use wildcards and alternates together like this:

* "&#42; (some&#124;a pair of) (headphones&#124;earbuds)&#42;"

* "(thank(&#124;s)&#124;thank you)&#42;"

* "&#42;headphones&#42;"

Once the bot/automation detects a match to the pattern which you defined, the dialog configured with that pattern kicks in and the conversation begins. If the pattern is configured for a user input in the middle of the conversation (like an answer to a question), the appropriate response will be triggered.

The basic operators available for use with pattern matching are:

* Asterisk, otherwise known as a wildcard which matches any character.

* Parentheses, which enclose a group of alternates.

* Pipe, which denotes alternates.

If you need more advanced operators, you can also use [Regular Expressions](http://www.rexegg.com/regex-quickstart.html) with pattern matching,

#### Slots

Slots are a useful way to store user responses and their entities. When a user selects an answer or types their own input and invokes an [entity](conversation-builder-component-breakdown-entities-overview.html) (by, for example, indicating that they want "sandals", which belongs to the "product_shoes" entity), the specific object selected by them might be useful in the future. For example, the bot/automation could refer to it in a reply later in the dialog or you could use an integration to query an API with the slot and retrieve specific information about a product the user was looking for, create a lead with that information or store it for future use outside of the bot/automation (like in the case of an email address).

To configure a slot, simply click the interaction where you'd like to look for entities in the user's input (like a multiple choice question, for example), and go to User Response in the middle of the Interaction Details panel. From there, click the blue **+** icon right to the right of Slot.

In the menu which opens, first assign the slot a name by filling in the "Name" input field. **We recommend using standard naming conventions for slots. The slot name is later used to refer to and access the data which the slot contains**. Then, look for a pre-configured entity (which you should have set up for your domain previously) by typing in first the "@" character and then the name of your desired entity in the "Value" input field to the right of the Name input field.

Lastly, decide how long you'd like the slot's data to be kept for. You can set this by using the "Scope" dropdown menu on the right hand side. The dropdown provides four options:

* Request - the slot's data will only be saved for that particular use of the slot. Only useful if the next question in the tree depends on the slot's data.

* Dialog - the slot's data will only be stored for this specific dialog. Once this dialog ends (either by the user closing the conversation or the bot/automation moving on to a different dialog), the slot's data will be cleared.

* Session - the slot's data will be saved for the entirety of the user's browser session. This is useful when using the data to query APIs and retrieve information which might be useful for multiple sessions.

* Forever - the slot's data will be saved on our servers forever. It will be accessible via the Conversation Builder for as long as you need it.

##### Change Response

Below the condition configuration box, you will find three check boxes. These control three different responses to the interaction you can use when using conditions:

* Change response. The bot/automation can change a slot's data if the user requests to. Common phrases like "what about sandals" or "show me sandals" will cause the bot/automation to clear the data currently in the slot, look for an entity in the user's change request, repopulate the slot with the new information, and perform the Next Step configuration again. When this occurs, you can have the bot/automation send a message to the user letting them know it is doing so, for example "Let me look for your new selection".

* Cancel response. Similarly, a user might wish to cancel their request with a phrase like "Never mind". The bot will then clear the data in the slot and send the cancelled message to the user, as defined by you.

* Fallback response. If a user asks for a slot to be changed but the bot/automation couldn't recognize the phrase the user used ("give me a different color" for example), it will send a fallback response. This could be something like "I'm sorry, I didn't understand. Can you try again?" for example.

#### The Dialog List

At the bottom of the Dialog Viewer, you'll find a view listing all your different Dialogs. Click the **+** icon at the bottom left corner of the Dialog Viewer to add a new Dialog. You'll be prompted to enter a new name for the Dialog (**we recommend using standard naming conventions to name your Dialogs, to make them more sortable and easy to find**) and choose between two options:

* Dialog - the default choice is a standard dialog, as described above.

* Fallback dialog - the second choice is a fallback dialog, which gets triggered when the bot/automation cannot recognize a user's input and has to fallback to an escalation/troubleshooting conversation.

You can use the hamburger icon right next to the **+** icon to see a list of your different dialogs. Otherwise, they are displayed horizontally, in chronological order.

#### Code

TODO
