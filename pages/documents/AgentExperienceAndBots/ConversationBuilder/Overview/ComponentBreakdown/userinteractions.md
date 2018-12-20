---
pagename: Interactions
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Overview
permalink: conversation-builder-overview-interactions.html
indicator: both
---

The User Interactions section of the [Interactions Toolbar](conversation-builder-overview-component-breakdown.html#the-interactions-toolbar) is made up of only one type of interaction, "User Says". This interaction is the textual prompt to which the bot/automation responds, whether it is the first message which starts the Dialog or some sort of input during it. When you add a "User Says" interaction, you give an example of a question the user might ask at the start of a conversation.

Instead of just looking for the specific phrase you originally defined (which would result in the bot/automation not recognizing many of your user's inputs), you can direct the bot/automation to look for a specific pattern (a method called **pattern matching**) or to look for more broad and flexible **intents** in the user's input, by using our NLU engine.

For more information on Pattern Matching, see the section below. For more information on setting up and using intents, see either [this tutorial](conversation-builder-getting-started-building-your-first-intent.html) or a more in-depth [breakdown of the Intent Builder](conversation-builder-overview-intent-builder-overview.html).

### Bot/Automation Interactions

The **Bot** section of the Interactions Toolbar is made up of three different types of interactions:

* **Statements**. This type of interaction is a straight-forward declaration by the bot which does not expect a response from the user. There are four different types of statements available to you:

  * Text. For example, "Thank you for taking our survey!"

  * Image.

  * Audio file.

  * Video.

* **Questions**. This type of interaction is interactive and meant to be answered by the user. It can also be used to fill [slots](conversation-builder-overview-conditions.html#slots) with key information based on the user's answer, making it available for future use. The different types of question interactions available to you are:

  * Multiple Choice. A simple and standard multiple choice questions allowing the user to select from a list of predefined answers.

  * Text. A simple textual question.

  * Structured Content. Most conversations involve plain text like what you are reading now. However, sometimes you may want to send content (images, buttons, maps, quick replies, etc) to a consumer in a more rich, interactive, and structured format. **You can show up to 10 of these items in a horizontally scrolling carousel**.

  * Button. An object that allows you to show a simple text question with an associated button actions. A click on the button would result in an action pre-configured by you (like navigation to a link, for example).

  * Quick Reply. A question with a series of pre-configured replies that appear as a list of chips at the bottom of the interaction and disappear once the user has selected one.

  * Listpicker. **Note: list picker is relevant specifically to Apple Business Chat only**. This allows the user to make a selection in response to a simple text question from a list of items.

  * Time Picker. **Note: time picker is relevant specifically to Apple Business Chat only**. This allows the user to make a selection in response to a simple text question from a list of event times, like an appointment.

* **Integrations**. This type of interaction involves the bot/automation querying an outside API or service and retrieving information from it. For example, you could have your bot/automation search for a certain [entity](conversation-builder-overview-entities-overview.html) and retrieve the matching product's catalogue item from your own API, populating the bot/automation's next reply with the info. You could also set up an Apple Pay interaction, allowing the bot/automation to prompt the user to use Apply Pay to submit a payment.
