---
pagename: Automation Workspace Overview
redirect_from:
    - conversation-builder-conversation-builder-overview.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversation Builder
permalink: conversation-builder-automation-workspace-overview.html
indicator: both
---

<img class="fancyimage" style="width:750px" src="img/beaut_cb_2.png">

The Conversation Builder application is the primary workspace for designing a bot. It is what ties together all the other aspects of the platform.

{: .important}
Conversation Builder supports the creation of bots for all the LiveEngage channels. Because a bot simply listens to a piece of text sent from a user, any channel that provides text to LiveEngage can potentially trigger a bot. However, there are channel-specific formats, features and conventions that might not be available for all channels. Please contact your LivePerson account team for information on formats supported for specific channels.

A bot consists of one or more dialogs that each have one or more [interactions](conversation-builder-interactions-interaction-basics.html) within them.

In the upper-right corner on the menu bar, you will find:

* **Dialogs** - Create and edit dialogs.

* **Integrations** - Create and edit integrations.

* **Global Functions** - Write code snippets for use within dialogs. See [scripting functions](conversation-builder-scripting-functions-introduction.html) for built-in methods.

* **Agent Connectors** - [Deploy](conversation-builder-testing-deployment-deploying-to-liveengage.html) the bot to a LiveEngage environment.

* The ellipsis icon makes available more options: **Bot Settings**, **Bot Change History**, **Bot Diff** and **Visualize**.

In the lower-right corner, you will find:

* **Preview** - Bot test conversation. Start a new session by sending "reset".

* **Debugger** - View logs for a user ID.

* **Releases** - Save or select between major releases of a bot.

* **Versions** - Save or select between different versions of a bot.

### Dialogs

When you first open a bot, you will be in the **Dialogs** view.

On the left side of the window, you can find the [Interactions Toolbar](#the-interactions-toolbar). This toolbar contains the different types of interactions that can be used in a dialog. Clicking an interaction in the dialog will allow you to configure it.

Learn more about dialogs [here](conversation-builder-dialogs-dialog-basics.html).

#### The Dialog List

At the bottom of the Dialog Viewer, you'll find a listing of all your different dialogs. They are displayed horizontally and in chronological order.

You can also use the hamburger icon next to the **+ Dialog** icon to see a list of your different dialogs. 

### The Interactions Toolbar

The Interactions toolbar is divided into four parts:

* **User Says** - Usually the starting point of any dialog. Contains the logic to match user input.

* **Statements** - Displays information to the user.

* **Questions** - Prompts the user for a response. The user response is often stored in a variable or slot and referenced later in an integration.

* **Integrations** - Activates an integration that you've configured in the Integrations tab.

To use the Interactions toolbar, simply select the interaction you'd like to add to the dialog workspace. It will be then added, and you can start configuring it. For example, if you choose a simple, text-based question, you'll be able to enter the question you'd like the bot to ask the user. 

For more information on interactions, see [this guide](conversation-builder-interactions-interaction-basics.html).
