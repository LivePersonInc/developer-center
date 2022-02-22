---
pagename: Bot Workspace
redirect_from:
    - conversation-builder-conversation-builder-overview.html
    - conversation-builder-automation-workspace-overview.html
    - conversation-builder-getting-started-bot-workspace-overview.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder

permalink: conversation-builder-bot-workspace.html
indicator: both
---

The Conversation Builder application is the primary workspace for designing a bot.

<img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/botWorkspace.png">

A bot consists of one or more [dialogs](conversation-builder-dialogs-dialog-basics.html) that each contain one or more [interactions](conversation-builder-interactions-interaction-basics.html). In the image above of the Dialogs view in Conversation Builder, note the following:

* The open "Hello World" bot has 6 dialogs. These are listed in the dialogs panel on the left.
* The Billing dialog contains 5 interactions. These are also listed in the dialogs panel on the left.
* The Billing dialog is currently displayed in the dialog editor in the center of the screen. As such, its name appears in bold in the dialogs panel.

{: .important}
Conversation Builder supports the creation of bots for all the Conversational Cloud channels. Because a bot simply listens to a piece of text sent from a user, any channel that provides text to Conversational Cloud can potentially trigger a bot. However, there are channel-specific formats, features and conventions that might not be available for all channels. Please contact your LivePerson account team for information on formats supported for specific channels.

### The Dialogs view

When you first open a bot, you are taken to the **Dialogs** view. Use this view to make changes to the bot's [dialogs](conversation-builder-dialogs-dialog-basics.html) and the [interactions](conversation-builder-interactions-interaction-basics.html) within them.

<img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/botWorkspace_dialogEditor.png">

In the left panel in the Dialogs view, there's an expandable list of the dialogs in the open bot. The dialogs are displayed vertically and in alphabetical order. You can use the search box to search by dialog name, interaction name, or interaction content.

<img class="fancyimage" style="width:250px" src="img/ConvoBuilder/botWorkspace_dialogsPanel.png">

### The interactions toolbar

The interactions toolbar is located on the right side in the Dialogs view.

<img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/botWorkspace_interactionsToolbar.png">

The toolbar contains tools for adding different [types of interactions](conversation-builder-interactions-interaction-basics.html#interaction-categories) to the dialog that's currently open in the dialog editor in the center of the screen.

Select an interaction to add it to the open dialog. You can then start configuring the interaction. For example, if you add a simple, text-based question, you'll be able to enter the question that you want the bot to ask the user.

### The menu bar

The menu bar is displayed in the upper-left corner and contains the following options:

* **Dialogs**: Create and edit [dialogs](conversation-builder-dialogs-dialog-basics.html) in this view.

* **Integrations**: Create and edit [integrations](conversation-builder-integrations-integration-basics.html) in this view.

* **Global Functions**: Write code snippets for use within dialogs here. See [scripting functions](conversation-builder-scripting-functions-introduction.html) for built-in methods.

* **Agent Connectors**: [Deploy](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html) the bot to a Conversational Cloud environment.

* The <img class="inlineimage" style="width:30px" src="img/ConvoBuilder/icon_ellipsisVertical.png"> icon makes available more options: 

    * **Bot Settings** (see [here](conversation-builder-bots-bot-basics.html#configure-bot-settings))
    * **Bot Change History**
    * **Bot Diff**
    * **Visualize**
    * **Releases** (see [here](conversation-builder-versions-releases.html))
    * **Versions** (see [here](conversation-builder-versions-releases.html))

In the upper-right corner, there are a few more options:

* **Preview**: Test the open bot by [previewing a conversation](conversation-builder-testing-deployment-previewing.html). From here you can also [access the bot's logs](conversation-builder-testing-deployment-debugging.html) for **debugging** purposes.

* **Add Dialog**: Add a dialog to the open bot.
