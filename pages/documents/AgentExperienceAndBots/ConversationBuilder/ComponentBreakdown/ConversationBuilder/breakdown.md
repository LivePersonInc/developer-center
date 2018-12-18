---
pagename: Conversation Builder Component Breakdown
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Component Breakdown
permalink: conversation-builder-conversation-builder-component-breakdown.md
indicator: both
---

LivePerson's Conversation Builder is made up of **three** different areas. In the center of the screen, you will find the **Dialog Workspace**. This panel contains the different [interactions](placeholder.com) of which the bot/automation consists; it represents the flow of the conversation (also called **a Dialog**) you are building ,including user messages the automation will respond to, the responses it will provide, and the different integrations you might use during the conversation.

On the left-hand side of the window, you can find the **Interactions Toolbar**. This toolbar contains the different types of [interactions](placeholder.com) which can be used in a dialog.

On the right-hand side of the window, you can find the **Settings Toolbar**. This toolbar contains additional information regarding your bot/automation and various configuration options.


### The Interactions Toolbar

The Interactions Toolbar is divided into two parts:

1) The **User** section.

2) The **Bot/Automation** section.

Using the Interactions Toolbar is simple; simply select the interaction you'd like to add to the Dialog Workspace (see below for more information on the Dialog Workspace) and click on it. It will be then added and you can start configuring it (for example, if you choose a simple, text based question, you'll now be able to type in the question you'd like the bot/automation to ask the user).

#### User Interactions

The User interactions section is made up of only one type of interaction, "User Says". This interaction is the textual prompt to which the bot/automation responds, whether it is the first message which starts the Dialog or some sort of input during it. You can direct the bot/automation to look for a specific pattern (a method called **pattern matching**) or to look for more broad and flexible **intents**, by using our NLU engine.

For more information on Pattern Matching, see the section below. For more information on setting up and using intents, see either [this tutorial](placeholder.com) or a more in-depth [breakdown of the Intent Builder](placeholder.com).

##### Pattern Matching

#### Bot/Automation Interactions

The **Bot** section of the Interactions Toolbar is made up of three different types of interactions:

* **Statements**. This type of interaction is a straight-forward declaration by the bot which does not expect a response from the user. There are four different types of statements available to you:

  * Text. For example, "Thank you for taking our survey!"

  * Image.

  * Audio file.

  * Video.

* **Questions**. This type of interaction is interactive and meant to be answered by the user. It can also be used to fill [slots](placeholder.com) with key information based on the user's answer, making it available for future use. The different types of question interactions available to you are:

  * Multiple Choice

  * Text

  * Structured [TODO: short explanation + link to docs]

  * Button

  * Quick Reply [TODO: short explanation + link to docs]

  * Listpicker [TODO: short explanation + link to docs]

  * Time Picker [TODO: short explanation + link to docs]

* **Integrations**. This type of interaction involves the bot/automation querying an outside API or service and retrieving information from it. For example, you could have your bot/automation search for a certain [entity](placeholer.com) and retrieve the matching product's catalogue item from your own API, populating the bot/automation's next reply with the info. You could also set up an Apple Pay interaction, allowing the bot/automation to prompt the user to use Apply Pay to submit a payment.

### The Dialog Workspace

The Dialog Workspace is the main panel of the Conversation Builder. It lists the different interactions which make up this specific Dialog. A Dialog is composed of a series of interactions which together make up a back and forth conversation between the user and the bot/automation.

A Dialog is always triggered by a user statement, either via simple [pattern matching](placeholder.com) or via [intents](placeholder.com). Once the bot/automation recognizes the user statement via either of these methods, it triggers the corresponding Dialog, listening to user answers and responding as configured by its Dialog. Thus, the Dialog Workspace will always display a diagram of the interactions which make up a Dialog, from the initial User Statement to the last interaction in the Dialog.

Clicking on any interaction will allow you to configure it. See above for the different configuration options and requirements for each interaction type.

#### TODO: supported incoming channels

#### The Dialog List

At the bottom of the Dialog Viewer, you'll find a view listing all your different Dialogs. Click the **+** icon at the bottom left corner of the Dialog Viewer to add a new Dialog. You'll be prompted to enter a new name for the Dialog (**we recommend using standard naming conventions to name your Dialogs, to make them more sortable and easy to find**) and choose between two options:

* Dialog - the default choice is a standard dialog, as described above.

* Fallback dialog - the second choice is a fallback dialog, which gets triggered when the bot/automation cannot recognize a user's input and has to fallback to an escalation/troubleshooting conversation.

You can use the hamburger icon right next to the **+** icon to see a list of your different dialogs. Otherwise, they are displayed horizontally, in chronological order.

### The Settings Toolbar

The Settings Toolbar contains various menus and panels which allow you to configure your bot/automation further. It also includes the **Assist** tool, which actively "listens" to your dialogue as you build it and recommends intents, entities and more for your use, and the **Messaging Client**, which allows you to test your various dialogs.
