---
pagename: Interactions
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversation Builder
permalink: conversation-builder-conversation-builder-interactions.html
indicator: both
---

The User Interactions section of the [Interactions Toolbar](conversation-builder-conversation-builder-overview.html#the-interactions-toolbar) is made up of only one type of interaction, "User Says". This interaction is the textual prompt to which the automation responds, whether it is the first message which starts the Dialog or some sort of input during it. When you add a "User Says" interaction, you give an example of a question the user might ask at the start of a conversation.

Instead of just looking for the specific phrase you originally defined (which would result in the automation not recognizing many of your user's inputs), you can direct the automation to look for a specific pattern (a method called [pattern matching](conversation-builder-conversation-builder-conditions.html#pattern-matching)) or to look for more broad and flexible [intents](conversation-builder-intent-builder-overview.html) in the user's input, by using our NLU engine.

For more information on Pattern Matching, see the link above. For more information on setting up and using intents, see either [part 2 of the Getting Started tutorial](conversation-builder-getting-started-2-intents.html) or a more in-depth [breakdown of the Intent Builder](conversation-builder-intent-builder-overview.html).

### Automation Interactions

The Interactions Toolbar is made up of three different types of automation interactions:

* **Statements**. This type of interaction is a straight-forward declaration by the automation which does not expect a response from the user. There are four different types of statements available to you:

  * Text. For example, "Thank you for taking our survey!"

  * Image. A simple, static image files which the automation will send.

  * Audio file. A pre-recorded audio message that the automation will send.

  * Video. A pre-recorded video file that the automation will send.

* **Questions**. This type of interaction is interactive and meant to be answered by the user. It can also be used to fill [slots](conversation-builder-conversation-builder-conditions.html#slots) with key information based on the user's answer, making it available for future use. The different types of question interactions available to you are:

  * Multiple Choice. A simple and standard multiple choice question allowing the user to select from a list of predefined answers (although the automation can be configured to respond to answers not appearing in the list through the use of [entities](conversation-builder-intent-builder-entities.html)).

  * Text. A simple textual question.

  * Structured Content. Most conversations involve plain text like what you are reading now. However, sometimes you may want to send content (images, buttons, maps, quick replies, etc) to a consumer in a more rich, interactive, and structured format. **You can show up to 10 of these items in a horizontally scrolling carousel**.

  ![Carousel](img/carousel.gif)

  * Button. An object that allows you to show a simple text question with an associated button action. A click on the button would result in an action pre-configured by you (like navigation to a link, for example).

  * Quick Reply. A question with a series of pre-configured replies that appear as a list of chips at the bottom of the interaction and disappear once the user has selected one.

  * Listpicker. **Note: list picker is relevant specifically to Apple Business Chat only**. This allows the user to make a selection in response to a simple text question from a list of items.

  * Time Picker. **Note: time picker is relevant specifically to Apple Business Chat only**. This allows the user to make a selection in response to a simple text question from a list of event times, like an appointment.

* **Integrations**. This type of interaction involves the automation querying an outside API or service and retrieving information from it. For example, you could have your automation search for a certain [entity](conversation-builder-intent-builder-entities.html) and retrieve the matching product's catalogue item from your own API, populating the automation's next reply with the info. You could also set up an Apple Pay interaction, allowing the automation to prompt the user to use Apply Pay to submit a payment. For more information on setting up an integration, see [part 3 of the Getting Started tutorial](conversation-builder-getting-started-3-integrations.html).
