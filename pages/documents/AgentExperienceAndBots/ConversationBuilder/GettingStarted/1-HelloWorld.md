---
pagename: Hello World
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Getting Started
permalink: conversation-builder-getting-started-hello-world.md
indicator: both
---

### Hello

After logging in to Conversation Builder, click on Conversation Builder to get started.

<img src="ConvoBuilder/welcomeScreen.png" style="width:500px">

Click on New Automation to create a new bot/automation.

<img src="ConvoBuilder/newAutomation.png" style="width:500px">

Set up a new bot/automation with the following settings:

<img src="ConvoBuilder/createBot.png" style="width:500px">

After creating the Hello World bot/automation, you will be brought into the Conversation Builder.

<img src="ConvoBuilder/dialogMainScreen.png" style="width:700px">

A bot/automation consists of one or many dialogs. A dialog is a set of interactions (user input prompts, responses, and integrations which make up a conversation).

When you first open the Hello World bot/automation, you will see two interactions in a Welcome dialog.

In the Interactions Toolbar on the lefthand side, you will see a User interaction, and many different types of bot/automation interactions.

<img src="ConvoBuilder/interactionsToolbar.png" style="width:500px">

Click on the first User interaction in your Dialog Workspace (center area) and rename it to say "Hello!"

Click on the next bot/automation Text interaction and rename that to say "Hello World!" in reply.

<img src="ConvoBuilder/helloRenames.png" style="width:500px">

In the Settings Toolbar on the righthand side, click on the Messaging Client to test your bot/automation.

<img src="ConvoBuilder/messagingClientIcon.png" style="width:500px">

Type in "reset" to reset the bot/automation session. Then try to type in "hello" or "hi". Your bot/automation should respond with "Hello World!".

### Goodbye

There is already a Welcome dialog. To create a "Goodbye" dialog, click the `+` on the bottom of the Dialog View.

<img src="ConvoBuilder/createNewDialog.png" style="width:500px">

<img src="ConvoBuilder/nameYourDialog.png" style="width:500px">

From Interaction Toolbar select the User Says interaction. Name this "Goodbye".

<img src="ConvoBuilder/userSaysGoodbyeInteraction.png" style="width:500px">

When you first add an interaction to your Dialog Workspace, you will see the Interaction Settings menu in the Settings Toolbar.

<img src="ConvoBuilder/interactionSettings.png" style="width:500px">

Click on Settings and notice the Patterns field. Utilizing patterns is the simplest way to match User input in a dialog.

Add the following patterns: `goodbye`, `bye`

Now add a bot/automation response. Select Bot > Statements > Text from the Interactions Toolbar. Make the text say "Goodbye!".

<img src="ConvoBuilder/goodbyeDialogWorkspace.png" style="width:500px">

In the Settings Toolbar on the righthand side, click on the Messaging Client to test all of your dialogs together.

<img src="ConvoBuilder/messagingClientIcon.png" style="width:500px">

Type in "reset" to reset the bot/automation session. Type in "hello" and the bot should respond with the Welcome dialog. Type in "goodbye" or "bye" and the bot should respond with your new Goodbye dialog.

### Fallback Dialog