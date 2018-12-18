---
pagename: Hello Conversation Builder
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Getting Started
permalink: conversation-builder-getting-started-hello-conversation-builder.html
indicator: both
---

### Hello

After logging in to the Conversation Builder Platform, click on Conversation Builder to get started. Click on New Automation to create a new bot/automation.


<!--<img src="img/ConvoBuilder/welcomeScreen.png" style="width:500px">


<img src="img/ConvoBuilder/newAutomation.png" style="width:500px">-->

Set up a new bot/automation with the following settings:

<img src="img/ConvoBuilder/createBot.png" style="width:600px">

After creating the Hello World bot/automation, you will be brought into the Conversation Builder. A bot/automation consists of one or many dialogs. A dialog is a set of interactions (user input prompts, responses, and integrations which make up a conversation).

When you first open the Hello World bot/automation, you will see two interactions in a Welcome dialog.

<img src="img/ConvoBuilder/dialogMainScreen.png" style="width:700px">

In the Interactions Toolbar on the lefthand side, you will see a User interaction, and many different types of bot/automation interactions.

<!--<img src="img/ConvoBuilder/interactionsToolbar.png" style="width:300px">-->

Click on the first User interaction in your Dialog Workspace (center area) and rename it to say "Hello!" Click on the next bot/automation Text interaction and rename that to say "Hello World!" in reply.

<img src="img/ConvoBuilder/helloRenames.png" style="width:400px">

In the Settings Toolbar on the righthand side, click on the Messaging Client to test your bot/automation.

<img src="img/ConvoBuilder/messagingClientIcon.png" style="width:400px">

Type in "reset" to reset the bot/automation session. Then try to type in "hello" or "hi". Your bot/automation should respond with "Hello World!". It can recognize both "hello" and "hi" because it comes with a pre-set pattern match. We'll address how to edit and create pattern matching in the next step of this tutorial.

### Goodbye

There is already a Welcome dialog. To create a "Goodbye" dialog, click the **+** on the bottom of the Dialog View.

<img src="img/ConvoBuilder/createNewDialog.png" style="width:500px">

<img src="img/ConvoBuilder/nameYourDialog.png" style="width:300px">

From the Interaction Toolbar on the left, select the User Says interaction. Name this "Goodbye".

<!--<img src="img/ConvoBuilder/userSaysGoodbyeInteraction.png" style="width:500px">-->

When you first add an interaction to your Dialog Workspace, you will see the Interaction Details menu in the Settings Toolbar.

<img src="img/ConvoBuilder/interactionSettings.png" style="width:500px">

Click on Settings and notice the Patterns field. Utilizing patterns is the simplest way to match User input in a dialog.

Add the following patterns:

* `goodbye`

* `bye`

Now add a bot/automation response to trigger when this user input is recognized. Select Bot > Statements > Text from the Interactions Toolbar. Make the text say "Goodbye!".

<img src="img/ConvoBuilder/goodbyeDialogWorkspace.png" style="width:300px">

In the Settings Toolbar on the righthand side, click on the Messaging Client to test all of your dialogs together.

<!--<img src="img/ConvoBuilder/messagingClientIcon.png" style="width:500px">-->

Type in "reset" to reset the bot/automation session. Type in "hello" and the bot should respond with the Welcome dialog. Type in "goodbye" or "bye" and the bot should respond with your new Goodbye dialog.

### Fallback Dialog

If you try to type in something other that "hi", "hello", or "goodbye", the bot will reply with default fallback text. To customize the fallback text, create a new dialog and name it "What?"

<img src="img/ConvoBuilder/fallbackDialogName.png" style="width:300px">

Add only one Bot Text interaction to your Dialog Workspace. Make this text say "I only say 'Hello World' and 'Goodbye'".

Click on the Messaging Client in the Settings Toolbar again to test out the new fallback dialog.

<img src="img/ConvoBuilder/helloWorldFullTest.png" style="width:400px">

This concludes your first bot/automation created with the Conversation Builder. Next, you will learn about Intents.
