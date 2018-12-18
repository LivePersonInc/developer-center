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

In the Hello World bot/automation tutorial, you used Patterns to match on User Says input of `goodbye`, `bye`, etc. 

Using the Patterns field in the Interaction Settings menu is a quick and simple way to get a dialog set up. However, when you start to build multiple bots/automations and multiple dialogs, it becomes more convenient to make common patterns re-usable.

Creating an Intent allows for a more robust and re-usable way to match on User Says input.

The Intent Builder is a workspace for managing your Intents. Upon creation of Intents, these can be linked to your bot/automation Dialogs in Conversation Builder.

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
  * farewell
  * See you

You should now have two Intents that you can see on the left sidebar.

<img src="img/ConvoBuilder/twoIntents.png" style="width:500px">




Currentlty, the User Text, you will learn to guide the user through the conversation with Entities!