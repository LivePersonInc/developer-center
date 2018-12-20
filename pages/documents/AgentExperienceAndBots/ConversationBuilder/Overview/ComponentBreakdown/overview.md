---
pagename: Component Breakdown
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Overview
permalink: conversation-builder-overview-component-breakdown.html
indicator: both
---

LivePerson's Conversation Builder is made up of **three** different areas. In the center of the screen, you will find the **Dialog Workspace**. This panel contains the different interactions of which the bot/automation consists; it represents the flow of the conversation (also called **a Dialog**) you are building ,including user messages the automation will respond to, the responses it will provide, and the different integrations you might use during the conversation.

On the left-hand side of the window, you can find the **Interactions Toolbar**. This toolbar contains the different types of interactions which can be used in a dialog.

On the right-hand side of the window, you can find the **Settings Toolbar**. This toolbar contains additional information regarding your bot/automation and various configuration options.

<div class="important">The conversation builder supports the creation of automation for all the LiveEngage channels. Because an automation simply listens to a piece of text from a user, any channel that provides text to LiveEngage can potentially trigger an automation. However, there are channel specific formats, features, and conventions that may not be available for all channels.</div>

### The Dialog Workspace

The Dialog Workspace is the main panel of the Conversation Builder. It lists the different interactions which make up this specific Dialog. A Dialog is composed of a series of interactions which together make up a back and forth conversation between the user and the bot/automation.

A Dialog is always triggered by a user statement, either via simple [pattern matching](conversation-builder-overview-conditions.html#pattern-matching) or via [intents](conversation-builder-overview-intent-builder-overview.html). Once the bot/automation recognizes the user statement via either of these methods, it triggers the corresponding Dialog, listening to user answers and responding as configured by its Dialog. Thus, the Dialog Workspace will always display a diagram of the interactions which make up a Dialog, from the initial User Statement to the last interaction in the Dialog.

Clicking on any interaction will allow you to configure it. See below for the different configuration options and requirements for each interaction type.

#### The Dialog List

At the bottom of the Dialog Viewer, you'll find a view listing all your different Dialogs. Click the **+** icon at the bottom left corner of the Dialog Viewer to add a new Dialog. You'll be prompted to enter a new name for the Dialog (**we recommend using standard naming conventions to name your Dialogs, to make them more sortable and easy to find**) and choose between two options:

* Dialog - the default choice is a standard dialog, as described above.

* Fallback dialog - the second choice is a fallback dialog, which gets triggered when the bot/automation cannot recognize a user's input and has to fallback to an escalation/troubleshooting conversation.

You can use the hamburger icon right next to the **+** icon to see a list of your different dialogs. Otherwise, they are displayed horizontally, in chronological order.

### The Interactions Toolbar

The Interactions Toolbar is divided into two parts:

1) The **User** section.

2) The **Bot/Automation** section.

Using the Interactions Toolbar is simple; simply select the interaction you'd like to add to the Dialog Workspace (see below for more information on the Dialog Workspace) and click on it. It will be then added and you can start configuring it (for example, if you choose a simple, text based question, you'll now be able to type in the question you'd like the bot/automation to ask the user).

### The Settings Toolbar

The Settings Toolbar contains various menus and panels which allow you to configure your bot/automation further. It also includes the **Assist** tool, which actively "listens" to your dialogue as you build it and recommends intents, entities and more for your use, and the **Messaging Client**, which allows you to test your various dialogs.

Once you have populated the Dialog View with interactions, you can select any interaction and click on the Interaction Details icon (it will be selected by default). Inside this panel, you can configure further actions for the bot/automation dependent on the same methods we described above such as pattern matching, intents, and so on. You can achieve this by selecting User Response, configuring the conditions the bot/automation will look for and the resulting action (like sending a specific interaction, ending the dialog, and so on).
