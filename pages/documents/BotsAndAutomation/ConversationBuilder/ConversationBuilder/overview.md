---
pagename: Conversation Builder Overview
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversation Builder
permalink: conversation-builder-conversation-builder-overview.html
indicator: both
---

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/convobuilder_main.png">

The Conversation Builder app is the primary workspace for designing an automation. It is what ties together all of the other aspects of the Platform.

An automation consists of one or more Dialogs that each have one or more [interactions](conversation-builder-conversation-builder-interactions.html) within them.

At the top of the screen, you will see:

* **Dialogs** - Create and edit dialogs.

* **Integrations** - Create and edit Integrations.

* **Global Functions** - Write code snippets for use within dialogs. See [scripting functions](conversation-builder-conversation-builder-scripting-functions.html) for built-in methods.

* **Visualize** - View each dialog at a high level.

{: .important}
The conversation builder supports the creation of automations for all the LiveEngage channels. Because an automation simply listens to a piece of text sent from a user, any channel that provides text to LiveEngage can potentially trigger an automation. However, there are channel specific formats, features, and conventions that may not be available for all channels. Please contact your LivePerson account team for information on formats supported for specific channels.

### Dialogs

When you first open an automation, you will be in the **Dialogs** view.

On the left-hand side of the window, you can find the **Interactions Toolbar**. This toolbar contains the different types of interactions which can be used in a dialog.

A Dialog may be triggered by a user statement, either via simple [pattern matching](conversation-builder-conversation-builder-conditions.html#pattern-matching) or via [intents](conversation-builder-intent-builder-overview.html). It may also be triggered by an Interaction via a Next Step action. Once the automation recognizes the user statement via either of these methods, it triggers the corresponding Dialog, listening to user answers and responding as configured by the Dialog. The Dialog Workspace displays a diagram of the interactions which make up a Dialog, from the initial User Statement to the last interaction in it.

Clicking on any of the interactions in the Dialog will allow you to configure them. See below for the different configuration options and requirements for each interaction type.

#### The Dialog List

At the bottom of the Dialog Viewer, you'll find a view listing all your different Dialogs. Click the **+** icon at the bottom left corner of the Dialog Viewer to add a new Dialog. You'll be prompted to enter a new name for the Dialog (**we recommend using standard naming conventions to name your Dialogs, to make them more sortable and easy to find**) and choose between two options:

* Dialog - the default choice is a standard dialog, as described above.

* Fallback dialog - the second choice is a fallback dialog, which gets triggered when the automation cannot recognize a user's input and has to fallback to an escalation/troubleshooting conversation (For example, "I didn't quite understand you. Let me transfer this conversation to a human agent").

You can use the hamburger icon right next to the **+** icon to see a list of your different dialogs. Otherwise, they are displayed horizontally, in chronological order.

### The Interactions Toolbar

The Interactions Toolbar is divided into four parts:

* **User Says** - Usually the starting point of any dialog. Contains the logic to match user input.

* **Statements** - Displays information to the user.

* **Questions** - Prompts the user for a response. The user response is often stored in a slot and referenced later in an Integration.

* **Integration** - Activates an integration that you've configured in the Integrations tab.

Using the Interactions Toolbar is simple; simply select the interaction you'd like to add to the Dialog Workspace. It will be then added and you can start configuring it (for example, if you choose a simple, text based question, you'll now be able to type in the question you'd like the automation to ask the user). For more information on the different interactions available to you, see [this guide](conversation-builder-conversation-builder-interactions.html).

### Settings and Other

On the top-left of the screen, you will find the **Bot Menu** gear icon which includes:

* **Automation Settings** - Includes settings that you selected during automation creation. Includes more advanced settings like public/private visibility, delete automation, etc.

* **Enterprise Integrations** - Settings for connecting to LiveEngage.

* **Automation Change History** - View all of the changes made to the automation by time/date. Useful when automations are managed by teams.

* **Automation Diff** - View differences between two automations.

On the bottom-right of the screen, you will find:

* **Preview** - Automation test conversation. Start a new session by sending "reset".

* **Debugger** - View logs for a certain User ID.

* **Releases** - Save or select between major releases of automation.

* **Versions** - Save or select between different versions of automation.
