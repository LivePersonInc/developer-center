---
pagename: Building Your First Intent
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Getting Started
permalink: conversation-builder-getting-started-building-your-first-intent.html
indicator: both
---

In the [Hello Conversation Builder](conversation-builder-getting-started-hello-conversation-builder.html) tutorial, you matched User input to dialogs using Patterns.

Intents are more flexible and less exact than pattern matching. However, Intents can often be preferred because they leverage Natural Language Understanding and Entities. 

In this tutorial, you will create a new dialog that asks the user what major city they live near or in.

The user will prompt the dialog with a phrase like "Ask me a question" and the bot/automation will reply with "What major US city are you near?".

In the example of "I'm near Seattle", the whole phrase is an Intent and "Seattle" is an Entity. From this, you may be able to determine that Entities are categories of nouns for which there can be many different options. For example, "Seattle" is an Entity of City, of which there can be other options like "Los Angeles", "New York City", etc.

### Create an Intent and Entity

We will now look at how to create a basic Intent and Entity.

The Intent Builder is a workspace for managing these Intents. Upon creation of Intents, these can be linked to your bot/automation Dialogs in the Conversation Builder.

To get to the Intent Builder, click on the Home button in the Conversation Builder Settings Toolbar. Then click either the top-leftmost logo or the dropdown and go to Intent Builder.

<img src="img/ConvoBuilder/homeIcon.png" style="width:50px">

<img src="img/ConvoBuilder/getHome.png" style="width:300px">

Create a new Intent Builder domain called "Hello World". This domain will hold all of your Intents and Entities for these tutorials.

Create a new Intent. Name it "Where I Am". Enter the following Training Phrases manually:

* Ask a question

    * ask me a question

    * ask a question

    * question me

    * give me a question

    * ask me something

    * ask something

Now create a new Entity for city with the following options:

* city

    * Seattle

    * Atlanta

    * New York City

    * Austin

    * San Fransisco

You should now have one Intent and one Entity that you can see on the left sidebar.

<img src="img/ConvoBuilder/firstIntent.png" style="width:200px"> <img src="img/ConvoBuilder/firstEntity.png" style="width:200px">

### Add New Interactions

The next step is to create a new dialog that leverages this new intent and entity.

Go back to the Conversation Builder by, again, using the top-leftmost part of the screen. Click on your previous Hello World bot/automation.

On the bottom of the Dialog Workspace, you can see your three previous Dialogs (Welcome, Goodbye, What?).

Click the **+** to create a new standard dialog called "Ask a Question".

Add a new User Says interaction called "ask a question". Then add a new Bot Question Text interaction. Make the question text ask "What major US city are you near?".

If the interactions are out of order, you can rearrange them by hovering over the leftmost side of the interaction and clicking and dragging.

<img src="img/ConvoBuilder/whereAreYouDialog.png" style="width:300px">

### Link Intent and Entity to Interactions

The next step is to link the intent and entity to the interactions.

**Note:** if the Assist tool is not already open in the Settings Toolbar, open it by clicking on the Assist icon in the Settings Toolbar.

<img src="img/ConvoBuilder/assistIcon.png" style="width:70px">

Link your Hello World intent domain via the prompt from the Assist tool.

<img src="img/ConvoBuilder/domainLinked.png" style="width:400px">

Once the domain is linked, the Assist tool will know to recommend related intents and entities to interactions within this dialog.

Click on the User Says interaction and you will see the Assist tool finds a good match with the "Ask a Question" intent. Link the intent to the User Says interaction via the Assist tool.

Now click on the Bot Question Text interaction. Use the Assist tool to link the "city" entity to the question.

<img src="img/ConvoBuilder/intentAdded.png" style="width:500px">

The assist tool automatically linked the city entity and assigned the user answer to be stored in a Slot.

Add a new Bot Statement Text interaction and make the text say "I love {$botContext.slot.city}!".

`{$botContext.slot.entityName}` is how you can access values in slots and use them in other ways.

Click on the Messaging Client in the Settings Toolbar and test your bot/automation. Type "reset" to create a new session. Say "hello", followed by "ask me something". Respond with something like "I live in San Fransisco". The bot/automation should say "I love San Fransisco!"