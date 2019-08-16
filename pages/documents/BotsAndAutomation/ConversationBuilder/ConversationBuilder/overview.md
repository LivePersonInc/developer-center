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

On the left-hand side of the window, you can find the [Interactions Toolbar](#the-interactions-toolbar). This toolbar contains the different types of interactions which can be used in a dialog.

Clicking on any of the interactions in the Dialog will allow you to configure them. See below for the different configuration options and requirements for each interaction type.

#### The Dialog List

At the bottom of the Dialog Viewer, you'll find a view listing all your different Dialogs.

You can use the hamburger icon right next to the **+** icon to see a list of your different dialogs. Otherwise, they are displayed horizontally, in chronological order.

Learn more about [dialogs here](conversation-builder-conversation-builder-dialogs.html).

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
