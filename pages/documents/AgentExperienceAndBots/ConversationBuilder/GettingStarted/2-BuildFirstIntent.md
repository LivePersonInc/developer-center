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

[Intents](conversation-builder-intent-builder-overview.html) are more flexible and less exact than pattern matching. However, Intents should often be preferred because they leverage Natural Language Understanding (NLU) and [Entities](conversation-builder-intent-builder-entities.html).

In this tutorial, you will create a new dialog that asks the user which animal they like. The user will trigger the dialog with a phrase like "Ask me a question" and the bot/automation will reply with "Which animal do you like?"

In the example user answer of "I like birds", the whole phrase is an Intent and "birds" is an object inside the "animal" Entity. From this, you may be able to determine that Entities are categories of nouns for which there can be many different options.

### Create an Intent and Entity

We will now look at how to create a basic Intent and Entity.

The [Intent Builder](conversation-builder-intent-builder-overview.html) is a workspace for creating and managing these Intents and entities. Upon creation of Intents, these can be linked to your bot/automation Dialogs in the Conversation Builder via different [Domains](conversation-builder-overview-conversation-builder-assistant.html#adding-a-domain).

To get to the Intent Builder, click on the Home button in the Conversation Builder Settings Toolbar. Then click either the top-leftmost logo or the dropdown and go to Intent Builder.

<img src="img/ConvoBuilder/intentBuilderFromHome.png" style="width:700px">

Create a new Intent Builder domain called "Hello World". This domain will hold all of your Intents and Entities for these tutorials.

Create a new Intent. Name it `ask me`. Enter the following Training Phrases manually:

* ask me

    * ask me a question

    * ask a question

    * question me

    * give me a question

    * ask me something

    * ask something

Now create a new Entity for `animal` with the following options:

* animal

    * cat

    * dog

    * bird

You should now have one Intent and one Entity that you can see on the left sidebar.

<img src="img/ConvoBuilder/firstIntent.png" style="width:200px">

<br>

<img src="img/ConvoBuilder/firstEntity.png" style="width:200px">

### Add New Interactions

The next step is to create a new dialog that leverages this new intent and entity.

Go back to the Conversation Builder by using the top-leftmost part of the screen (the blue title which reads "Intent Builder" is a dropdown containing all other elements of the conversation builder). Click on your previous Hello World bot/automation.

[On the bottom of the Dialog Workspace](conversation-builder-overview-component-breakdown.html#the-dialog-workspace), you can see your three previous Dialogs (Welcome, Goodbye, What?) in the Dialog List.

Click the **+** to create a new standard dialog called "Ask a Question".

Add a new User Says interaction called "ask a question". Then add a new Bot Question Text interaction. Make the question text ask "Which animal do you like the most?".

If the interactions are out of order, you can rearrange them by hovering over the leftmost side of the interaction and clicking and dragging.

<img src="img/ConvoBuilder/whereAreYouDialog.png" style="width:300px">

### Link Intent and Entity to Interactions

The next step is to link the intent and entity to the interactions.

<div class="important">Linking intents and entities is most easily done by using the <a href="conversation-builder-overview-conversation-builder-assistant.html">Assistant tool</a>. If the Assistant tool is not already open in the Settings Toolbar, open it by clicking on the Assistant icon in the Settings Toolbar.</div>

<img src="img/ConvoBuilder/assistIcon.png" style="width:70px">

Link your Hello World intent domain via the prompt from the Assistant tool.

<img src="img/ConvoBuilder/domainLinked.png" style="width:400px">

Once the domain is linked, the Assistant tool will know to recommend related intents and entities to interactions within this dialog by using our NLU engine.

Click on the User Says interaction and you will see the Assistant tool finds a good match with the `ask me` intent. Link the intent to the User Says interaction via the Assistant tool.

Now click on the Bot Question Text interaction. Use the Assistant tool to link the `animal` entity to the question.

<img src="img/ConvoBuilder/intentAdded.png" style="width:500px">

The assist tool automatically assigned the user answer to be stored in a [Slot](conversation-builder-overview-conditions.html#slot) when you linked the `animal` entity.

Add a new Bot Statement Text interaction and make the text say "You answered: {$botContext.slot.animal}!".

`{$botContext.slot.entityName}` is how you can access values in slots and use them in other ways.

Click on the Messaging Client in the Settings Toolbar and test your bot/automation. Type "reset" to create a new session. Say "hello", followed by "ask me something". Respond with something like "I like dogs". The bot/automation should say "You answered: dogs!"

<div class="important">This concludes your first Intent and Entity created with the Conversation Builder. Next, you will learn about <a href="conversation-builder-getting-started-connect-an-integration.html">Integrations</a>.</div>
