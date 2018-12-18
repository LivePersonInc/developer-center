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

LivePerson's Conversation Builder is made up of **three** different areas. In the center of the screen, you will find the **Dialogue Workspace**. This panel contains the different [interactions](placeholder.com) of which the bot/automation consists; it represents the flow of the conversation (also called **a dialogue**) you are building ,including user messages the automation will respond to, the responses it will provide, and the different integrations you might use during the conversation.


### The Interactions Toolbar

On the left-hand side of the window, you can find the **Interactions Toolbar**. This toolbar contains the different types of [interactions](placeholder.com) which can be used in a dialogue. It is divided into two parts:

1) The **User** section is made up of only one type of interaction, "User Says". This interaction is the textual prompt to which the bot/automation responds, whether it is the first message which starts the dialogue or some sort of input during it.

2) The **Bot/Automation** section, which is detailed below.

Using the Interactions Toolbar is simple; simply select the interaction you'd like to add to the Dialogue Workspace (see below for more information on the Dialogue Workspace) and click on it. It will be then added and you can start configuring it (for example, if you choose a simple, text based question, you'll now be able to type in the question you'd like the bot/automation to ask the user).

#### Bot/Automation Interactions

The **Bot** section of the Interactions Toolbar is made up of three different types of interactions:

* **Statements**. This type of interaction is a straight-forward declaration by the bot which does not expect a response from the user. There are four different types of statements available to you:

  * Text. For example, "Thank you for taking our survey!".

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

* **Integrations**. This type of interaction involves the bot/automation querying an outside API or service and retrieving information from it. For example, you could have your bot/automation search for a certain [entity](placeholer.com) and retrieve the matching product's catalogue item from your own API, populating the bot/automation's next reply with the info. You could also set up an Apple Pay interaction, allowing the bot/automation to prompt the user into using Apply Pay to submit a payment.

### The Dialogue Workspace

The Dialogue Workspace is the main panel of the Conversation Builder. It lists the different interactions which make up this specific dialogue. A dialogue is composed of a series of interactions which together make up a back and forth conversation between the user and the bot/automation.

A dialogue is always triggered by a user statement, either via simple [pattern matching](placeholder.com) or via [intents](placeholder.com). Once the bot/automation recognizes the user statement via either of these methods, it triggers the corresponding dialogue, listening to user answers and responding as configured by its dialogue.
