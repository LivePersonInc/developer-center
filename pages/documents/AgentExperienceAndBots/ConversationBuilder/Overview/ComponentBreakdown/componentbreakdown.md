---
pagename: Conversation Builder Overview
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Components
permalink: conversation-builder-components-conversation-builder-overview.html
indicator: both
---

LivePerson's Conversation Builder is made up of **three** different areas. In the center of the screen, you will find the **Dialog Workspace**. This panel contains the different interactions of which the bot/automation consists; it represents the flow of the conversation (also called **a Dialog**) you are building, including user messages the automation will respond to, the responses it will provide, and the different integrations you might use during the conversation.

On the left-hand side of the window, you can find the **Interactions Toolbar**. This toolbar contains the different types of interactions which can be used in a dialog.

On the right-hand side of the window, you can find the **Settings Toolbar**. This toolbar contains additional information regarding your bot/automation and various configuration options.

<div class="important">The conversation builder supports the creation of automations for all the LiveEngage channels. Because an automation simply listens to a piece of text snet from a user, any channel that provides text to LiveEngage can potentially trigger an automation. However, there are channel specific formats, features, and conventions that may not be available for all channels. Please contact your LivePerson account team for information on formats supported for specific channels.</div>

### The Dialog Workspace

The Dialog Workspace is the main panel of the Conversation Builder. It lists the different interactions which make up this specific Dialog. A Dialog is composed of a series of interactions which together make up a back and forth conversation between the user and the bot/automation.

A Dialog may be triggered by a user statement, either via simple [pattern matching](conversation-builder-components-conditions.html#pattern-matching) or via [intents](conversation-builder-components-intent-builder-overview.html). It may also be triggered by an Interaction via a Next Step action. Once the bot/automation recognizes the user statement via either of these methods, it triggers the corresponding Dialog, listening to user answers and responding as configured by the Dialog. The Dialog Workspace displays a diagram of the interactions which make up a Dialog, from the initial User Statement to the last interaction in it.

Clicking on any of the interactions in the Dialog will allow you to configure them. See below for the different configuration options and requirements for each interaction type.

#### The Dialog List

At the bottom of the Dialog Viewer, you'll find a view listing all your different Dialogs. Click the **+** icon at the bottom left corner of the Dialog Viewer to add a new Dialog. You'll be prompted to enter a new name for the Dialog (**we recommend using standard naming conventions to name your Dialogs, to make them more sortable and easy to find**) and choose between two options:

* Dialog - the default choice is a standard dialog, as described above.

* Fallback dialog - the second choice is a fallback dialog, which gets triggered when the bot/automation cannot recognize a user's input and has to fallback to an escalation/troubleshooting conversation (For example, "I didn't quite understand you. Let me transfer this conversation to a human agent").

You can use the hamburger icon right next to the **+** icon to see a list of your different dialogs. Otherwise, they are displayed horizontally, in chronological order.

### The Interactions Toolbar

The Interactions Toolbar is divided into two parts:

1) The **User** section.

2) The **Bot/Automation** section.

Using the Interactions Toolbar is simple; simply select the interaction you'd like to add to the Dialog Workspace (see above for more information on the Dialog Workspace) and click on it. It will be then added and you can start configuring it (for example, if you choose a simple, text based question, you'll now be able to type in the question you'd like the bot/automation to ask the user). For more information on the different interactions available to you, see [this guide](conversation-builder-components-interactions.html).

### The Settings Toolbar

The Settings Toolbar contains various menus and panels which allow you to further configure your bot/automation. It also includes the **Assistant** tool, which actively "listens" to your dialog as you build it and recommends intents, entities and more for your use, and the **Messaging Client**, which allows you to test your various dialogs.

Once you have populated the Dialog View with interactions, you can select any interaction and click on the Interaction Details icon (it will be selected by default) in the Settings Toolbar. Inside this panel, you can configure further actions for the bot/automation dependent on the same methods we described above such as pattern matching, intents, and so on. You can achieve this by selecting User Response, configuring the [conditions](conversation-builder-components-conditions.html) the bot/automation will look for and then configuring the resulting action (like sending a specific interaction, ending the dialog, and so on).
