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

### Overview

The User Interactions section of the [Interactions Toolbar](conversation-builder-conversation-builder-overview.html#the-interactions-toolbar) is made up of only one type of interaction, "User Says". This interaction is the textual prompt to which the automation responds, whether it is the first message which starts the Dialog or some sort of input during it. When you add a "User Says" interaction, you give an example of a question the user might ask at the start of a conversation.

Instead of just looking for the specific phrase you originally defined (which would result in the automation not recognizing many of your user's inputs), you can direct the automation to look for a specific pattern (a method called [pattern matching](conversation-builder-conversation-builder-interaction-details.html#conditions)) or to look for more broad and flexible [intents](conversation-builder-intent-builder-overview.html) in the user's input, by using our NLU engine.

For more information on Pattern Matching, see the link above. For more information on setting up and using intents, see either [part 2 of the Getting Started tutorial](conversation-builder-getting-started-2-intents.html) or a more in-depth [breakdown of the Intent Builder](conversation-builder-intent-builder-overview.html).

The Interactions Toolbar is made up of different types of interactions including the following:

### Statements 

This type of interaction is a straight-forward declaration by the automation which does not expect a response from the user. There are four different types of statements available to you:

  * Text. For example, "Thank you for taking our survey!"

  * Image. A simple, static image files which the automation will send.

  * Audio file. A pre-recorded audio message that the automation will send.

  * Video. A pre-recorded video file that the automation will send.

### Questions

This type of interaction is interactive and meant to be answered by the user. The different types of question interactions available to you are:

  * Multiple Choice. A simple and standard multiple choice question allowing the user to select from a list of predefined answers (although the automation can be configured to respond to answers not appearing in the list through the use of [entities](conversation-builder-intent-builder-entities.html)).

  * Text. A simple textual question.

  * Structured Content. Most conversations involve plain text like what you are reading now. However, sometimes you may want to send content (images, buttons, maps, quick replies, etc) to a consumer in a more rich, interactive, and structured format. **You can show up to 10 of these items in a horizontally scrolling carousel**.

  ![Carousel](img/carousel.gif)

  * Button. An object that allows you to show a simple text question with an associated button action. A click on the button would result in an action pre-configured by you (like navigation to a link, for example).

  * Quick Reply. A question with a series of pre-configured replies that appear as a list of chips at the bottom of the interaction and disappear once the user has selected one.

  * Listpicker. **Note: list picker is relevant specifically to Apple Business Chat only**. This allows the user to make a selection in response to a simple text question from a list of items.

  * Time Picker. **Note: time picker is relevant specifically to Apple Business Chat only**. This allows the user to make a selection in response to a simple text question from a list of event times, like an appointment.

#### Capture and Use Consumer Response to a Question 

Question interactions can be used to fill [slots](conversation-builder-conversation-builder-slots-variables.html#slots) with key information based on the user's response, making it available for future use.

The following special syntax can also be used to access and save responses into a variable: 

`{$query}`

This is special syntax - used during **Response Conditions** for a question where you want to save the response from the consumer into a variable.

The below would store whatever the user response was to a question in this variable name.

<img class="fancyimage" width="400" src="img/ConvoBuilder/bestPractices/tips_image_7.png">

### Integrations

This type of interaction involves the automation querying an outside API or service and retrieving information from it. 

See [Integrations](conversation-builder-conversation-builder-integrations.html) for more information.

### Formatting

#### How do I show a variable inside a text interaction?

* `{}` is used for inserting dynamic values inside of text interactions

  * Bot Variable: `{$botContext.botVariableName}`

  * [Slot Variable](conversation-builder-conversation-builder-conditions.html): `{$botContext.slot.slotName}`

  * [Environment Variable](conversation-builder-best-practices-using-environment-variables.html): `{$env.envVariableName}`

  * API Integration custom data values: `{apiName.variableName}`

#### How do I add line breaks inside text interactions?

CTRL+ENTER - Hold control and hit enter/return.

{: .important}
This does not render when using the the Preview tool inside Conversation Builder. You will not see line breaks in the preview tool.

#### What is the character limit on a single text interaction before it gets split into 2 parts?

320 characters on word boundary

#### How to specify the break point within a large block of text

Add the following special tag inline inside your text interaction to force a break into 2 separate blocks of text.

`tag::breakWithDelay=1000`

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_8.png">

{: .important}
The delay value is in milliseconds. 1000 = 1 second.

### Limitations

The types of text that you can send in a Conversation Builder interaction vary depending if you are building an automation for **chat** or for **messaging**.

**Messaging** only allows plain text to be sent.

**Chat** allows for plain text as well as a subset of HTML limited to the anchor, paragraph and linebreak tags.

* `<a href=""></a>`
* `<p></p>`
* `<br>`
