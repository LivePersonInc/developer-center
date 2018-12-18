---
pagename: Building Your First Intent
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Getting Started
permalink: conversation-builder-getting-started-building-your-first-intent
indicator: both
---

### Create Intents

In the Hello World bot/automation tutorial, you used Patterns to match the User Says input of `goodbye`, `bye`, etc.

Using the Patterns field in the Interaction Settings menu is a quick and simple way to get a dialog set up. However, when you start to build multiple bots/automations and multiple dialogs, it becomes more convenient to make common patterns re-usable. Creating an Intent allows for a more robust and re-usable way to match on User Says input.

The Intent Builder is a workspace for managing these Intents. Upon creation of Intents, these can be linked to your bot/automation Dialogs in the Conversation Builder.

To get to the Intent Builder, click on the Home button in the Conversation Builder Settings Toolbar. Then click either the top-leftmost logo or the dropdown and go to Intent Builder.

<img src="img/ConvoBuilder/homeIcon.png" style="width:50px">

<img src="img/ConvoBuilder/getHome.png" style="width:300px">

Create a new Intent Builder domain called Hello World. This domain will hold all of your Intents for these tutorials.

Create two new Intents. Call the first Greeting, call the other Goodbye. Enter the following Training Phrases manually:

1. Greeting

    * Hey

    * Hello

    * Hi

    * What's up

    * Howdy

    * Salutations

2. Goodbye

    * Goodbye

    * Bye

    * Later

    * So long

    * Farewell

    * See you

You should now have two Intents that you can see on the left sidebar.

<img src="img/ConvoBuilder/twoIntents.png" style="width:500px">

### Link Intents to Dialog Interactions

The next step is to leverage your Intents in the Hello World bot/automation from the previous tutorial. These two intents will replace the Patterns in the Interaction Details Settings for the User Says text interactions.

Go back to the Conversation Builder by again using the top-leftmost part of the screen. Click on your previous Hello World bot/automation.

On the bottom of the Dialog Workspace, you can see your three previous Dialogs (Welcome, Goodbye, What?).

Select the Welcome Dialog.

When you open a dialog, the Settings Toolbar is open to the Assist menu. Assist is a contextual menu that offers guidance in linking intents and entities. Go ahead and link your Hello World intents Domain via the Assist menu. Linking your domain will automatically make your intents available in this dialog.

<img src="img/ConvoBuilder/domainLinked.png" style="width:500px">

Select the first User Says interaction in the Dialog Workspace. Then select the Interaction Details menu from the Settings Toolbar. Click on Settings in the Interaction Details and delete the existing Patterns. Then add your Greeting Intent just below Patterns.

<img src="img/ConvoBuilder/intentAdded.png" style="width:300px">

Do the same thing for the Goodbye dialog. Link your Hello World domain. Delete the existing patterns for "hi", "hello", etc. Add the Greeting Intent.

Now click on the Messaging Client in the Settings Toolbar and test your bot/automation. Type "reset" to create a new session. Say "hello", "goodbye", and gibberish and notice that the bot/automation works just as before.

Moving forward, you can re-use these intents to more quickly create common dialogs.

Currently, the bot/automation requires the User to know what they can/cannot say. You need a way to guide the user through the conversation. You can do this with Entities!
