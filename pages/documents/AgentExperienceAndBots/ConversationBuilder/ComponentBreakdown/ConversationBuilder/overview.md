---
pagename: Conversation Builder Overview
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Component Breakdown
permalink: conversation-builder-component-breakdown-conversation-builder-overview.html
indicator: both
---

LivePerson's Conversation Builder is made up of **three** different areas. In the center of the screen, you will find the **Dialog Workspace**. This panel contains the different [interactions](placeholder.com) of which the bot/automation consists; it represents the flow of the conversation (also called **a Dialog**) you are building ,including user messages the automation will respond to, the responses it will provide, and the different integrations you might use during the conversation.

On the left-hand side of the window, you can find the **Interactions Toolbar**. This toolbar contains the different types of [interactions](placeholder.com) which can be used in a dialog.

On the right-hand side of the window, you can find the **Settings Toolbar**. This toolbar contains additional information regarding your bot/automation and various configuration options.

### The Dialog Workspace

The Dialog Workspace is the main panel of the Conversation Builder. It lists the different interactions which make up this specific Dialog. A Dialog is composed of a series of interactions which together make up a back and forth conversation between the user and the bot/automation.

A Dialog is always triggered by a user statement, either via simple [pattern matching](placeholder.com) or via [intents](placeholder.com). Once the bot/automation recognizes the user statement via either of these methods, it triggers the corresponding Dialog, listening to user answers and responding as configured by its Dialog. Thus, the Dialog Workspace will always display a diagram of the interactions which make up a Dialog, from the initial User Statement to the last interaction in the Dialog.

Clicking on any interaction will allow you to configure it. See below for the different configuration options and requirements for each interaction type.

### The Interactions Toolbar

The Interactions Toolbar is divided into two parts:

1) The **User** section.

2) The **Bot/Automation** section.

Using the Interactions Toolbar is simple; simply select the interaction you'd like to add to the Dialog Workspace (see below for more information on the Dialog Workspace) and click on it. It will be then added and you can start configuring it (for example, if you choose a simple, text based question, you'll now be able to type in the question you'd like the bot/automation to ask the user).

#### User Interactions

The User interactions section is made up of only one type of interaction, "User Says". This interaction is the textual prompt to which the bot/automation responds, whether it is the first message which starts the Dialog or some sort of input during it. When you add a "User Says" interaction, you give an example of a question the user might ask at the start of a conversation.

Instead of just looking for the specific phrase you originally defined (which would result in the bot/automation not recognizing many of your user's inputs), you can direct the bot/automation to look for a specific pattern (a method called **pattern matching**) or to look for more broad and flexible **intents** in the user's input, by using our NLU engine.

For more information on Pattern Matching, see the section below. For more information on setting up and using intents, see either [this tutorial](placeholder.com) or a more in-depth [breakdown of the Intent Builder](placeholder.com).

#### Bot/Automation Interactions

The **Bot** section of the Interactions Toolbar is made up of three different types of interactions:

* **Statements**. This type of interaction is a straight-forward declaration by the bot which does not expect a response from the user. There are four different types of statements available to you:

  * Text. For example, "Thank you for taking our survey!"

  * Image.

  * Audio file.

  * Video.

* **Questions**. This type of interaction is interactive and meant to be answered by the user. It can also be used to fill [slots](placeholder.com) with key information based on the user's answer, making it available for future use. The different types of question interactions available to you are:

  * Multiple Choice. A simple and standard multiple choice questions allowing the user to select from a list of predefined answers.

  * Text. A simple textual question.

  * Structured Content. Most conversations involve plain text like what you are reading now. However, sometimes you may want to send content (images, buttons, maps, quick replies, etc) to a consumer in a more rich, interactive, and structured format. **You can show up to 10 of these items in a horizontally scrolling carousel**.

  * Button. An object that allows you to show a simple text question with an associated button actions. A click on the button would result in an action pre-configured by you (like navigation to a link, for example).

  * Quick Reply. A question with a series of pre-configured replies that appear as a list of chips at the bottom of the interaction and disappear once the user has selected one.

  * Listpicker. **Note: list picker is relevant specifically to Apple Business Chat only**. This allows the user to make a selection in response to a simple text question from a list of items.

  * Time Picker. **Note: time picker is relevant specifically to Apple Business Chat only**. This allows the user to make a selection in response to a simple text question from a list of event times, like an appointment.

* **Integrations**. This type of interaction involves the bot/automation querying an outside API or service and retrieving information from it. For example, you could have your bot/automation search for a certain [entity](placeholer.com) and retrieve the matching product's catalogue item from your own API, populating the bot/automation's next reply with the info. You could also set up an Apple Pay interaction, allowing the bot/automation to prompt the user to use Apply Pay to submit a payment.

#### Conditions

When adding a question interaction to the dialog, you can configure conditional logic based on the user's response. These are basically "if then" type decisions but, when combined with pattern matching, intents, and entities can deliver a powerful decision making engine for the bot/automation.

When you add a question interaction to the dialog, you can select it and choose the Interaction Details from the Settings Toolbar on the right hand side (the second icon on the toolbar). From there, click on "User Response" in the middle of the Interactions Details panel which opens. At the bottom of this menu, you'll find the "Next Step" dropdown.

When a condition is met, the action defined under the Next Step dropdown menu will occur. The bot/automation can close the dialog, move on to the next interaction, perform an Integration call, and more based on how you configure the Next Step dropdown menu. Conditions can be set to trigger using the following:

* Response intent - the bot/automation will trigger the Next Step action when a specific intent is sent to it by the NLU engine. Make sure to connect your domain and populate it with intents so that they'll be available for conditions.

* Regular Expression - the bot/automation will trigger the Next Step action when user input matches the RegEx you define. All standard RegEx rules apply.

* Pattern Matching - the bot/automation will trigger the Next Step action when the user input matches the pattern you define. See below for more information on pattern matching.

* Exact Value - the bot/automation will trigger the Next Step action when the user input matches an exact value you define. This is useful for questions where you present the user a set or predefined answers, such as multiple choice questions, since you can anticipate the user's answer precisely.

##### Pattern Matching

Patters are templates which are compared to user input. **A user input is considered a match to a pattern if it fits the pattern exactly**. Therefore, a pattern of "hello" will **only** match with a user input of "hello". However, Patterns can use alternates for specific variations, e.g.: "I want a pair of (headphones|head phones|earbuds|earphones)" will match "I want a pair of headphones" or "I want a pair of earphones", etc. Patterns can include wildcards for looser matches, e.g.: "&#42;home&#42;" would match "homes", "home run", "home is where the heart is".

You can use wildcards and alternates together like this:

* "&#42; (some|a pair of) (headphones|earbuds)&#42;"

* "(thank(|s)|thank you)&#42;"

* "&#42;headphones&#42;"

Once the bot/automation detects a match to the pattern which you defined, the dialog configured with that pattern kicks in and the conversation begins. If the pattern is configured for a user input in the middle of the conversation (like an answer to a question), the appropriate response will be triggered.

The basic operators available for use with pattern matching are:

* Asterisk, otherwise known as a wildcard which matches any character.

* Parentheses, which enclose a group of alternates.

* Pipe, which denotes alternates.

If you need more advanced operators, you can also use [Regular Expressions](http://www.rexegg.com/regex-quickstart.html) with pattern matching,

#### Slots

Slots are a useful way to store user responses and their entities. When a user selects an answer or types their own input and invokes an [entity](placeholder.com) (by, for example, indicating that they want "sandals", which belongs to the "product_shoes" entity), the specific object selected by them might be useful in the future. For example, the bot/automation could refer to it in a reply later in the dialog or you could use an [integration](placeholder.com) to query an API with the slot and retrieve specific information about a product the user was looking for.

To configure a slot, simply click the interaction where you'd like to look for entities in the user's input (like a multiple choice question, for example), and go to User Response in the middle of the Interaction Details panel. 

##### Change Response

##### Cancel Response

##### Fallback Response

#### Supported incoming channels

The platform supports the creation of automation for all the LiveEngage channels. Because an automation simply listens to a piece of text from a user, any channel that provides text to LiveEngage can potentially trigger an automation. However, there are channel specific formats, features, and conventions that may not be available for all channels.

#### The Dialog List

At the bottom of the Dialog Viewer, you'll find a view listing all your different Dialogs. Click the **+** icon at the bottom left corner of the Dialog Viewer to add a new Dialog. You'll be prompted to enter a new name for the Dialog (**we recommend using standard naming conventions to name your Dialogs, to make them more sortable and easy to find**) and choose between two options:

* Dialog - the default choice is a standard dialog, as described above.

* Fallback dialog - the second choice is a fallback dialog, which gets triggered when the bot/automation cannot recognize a user's input and has to fallback to an escalation/troubleshooting conversation.

You can use the hamburger icon right next to the **+** icon to see a list of your different dialogs. Otherwise, they are displayed horizontally, in chronological order.

### The Settings Toolbar

The Settings Toolbar contains various menus and panels which allow you to configure your bot/automation further. It also includes the **Assist** tool, which actively "listens" to your dialogue as you build it and recommends intents, entities and more for your use, and the **Messaging Client**, which allows you to test your various dialogs.

Once you have populated the Dialog View with interactions, you can select any interaction and click on the Interaction Details icon (it will be selected by default). Inside this panel, you can configure further actions for the bot/automation dependent on the same methods we described above such as pattern matching, intents, and so on. You can achieve this by selecting User Response, configuring the conditions the bot/automation will look for and the resulting action (like sending a specific interaction, ending the dialog, and so on).





#### Next Step

#### Code
