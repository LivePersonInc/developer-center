---
pagename: Variables & Slots
redirect_from:
    - conversation-builder-conversation-builder-variables-slots.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder

permalink: conversation-builder-variables-slots.html
indicator: both
---

In the [custom rules](conversation-builder-interactions-configuration-next-action.html#custom-rules) of an interaction, you can assign various data points to either slots or variables. Both are useful in [API integrations](conversation-builder-integrations-api-integrations.html).

### Variables

Variables are the default way to store and access important data points throughout the flow of a bot. 

#### System variables

There are several system variables that store information that's commonly needed in use cases. You can use these variables in your interactions:

* `{$chatBotId}` - Returns the ID of the bot.
* `{$chatBotUserId}` - Returns the ID of the user (the consumer).
* `{$chatBotUserPlatformId}` - Returns the ID of the bot user agent. This is provided by Conversational Cloud.
* `{$conversationId}` - Returns the ID of the current conversation. This is provided by Conversational Cloud.
* `{$firstname}` - Returns the first name of the bot user agent. This is provided by Conversational Cloud.
* `{$quickReplyPayload}` - Returns the quick reply payload for the current interaction.
* `{$userMessage}` - Returns the current user message.

#### Storing user responses

The most common use case for variables is storing user responses to [questions](conversation-builder-interactions-questions.html).

Frequently you will want to capture what was just said by the user as the value of a variable. You can use `{$userMessage}` to do this, for example:

<img class="fancyimage" width="700" src="img/ConvoBuilder/storeUserResponse.png">

You can also use `{$query}` in the same way; it works like `{$userMessage}`.

#### Storing and accessing variables with code

The [Get and Set Bot Variables functions](conversation-builder-scripting-functions-get-set-contextual-data.html#get-and-set-bot-variable) can be used to store and access variables in the Pre-Process / Post-Process Code or the Process User Response JavaScript [code panels](conversation-builder-interactions-configuration-custom-code.html).

#### Cleaning variable data

Before setting or storing data in a variable, in the [Process User Response code](conversation-builder-interactions-configuration-custom-code.html#process-user-response), it's a good idea to "clean" or "sanitize" the data by parsing it and transforming it to remove problematic issues, i.e., remove leading or trailing white space, remove new lines ( \\n ) and special characters, and so on.

### Slots

Slots are a *special type* of variable. Most of the time, you will use [variables](#variables) to take what a user says and hold on to it for later use. Slots are useful for more specialized use cases.

#### Slots & entities

When combined with [entities](conversation-builder-intent-builder-entities.html), slots bring dynamic, fluid behavior to storing user input data.

For example, if you add a question interaction "what type of shoes are you looking for?", the [Assist](conversation-builder-assist.html#associate-a-question-with-an-entity) tool will suggest appropriate entities and slots for that interaction. As long as the user stays within the bounds of entities that you have created, slots will automatically adjust and update based upon user input throughout the conversation.

#### Adding a slot

To configure a slot, select the interaction where you'd like to look for entities in the user's input (like a multiple choice question, for example). Then add a custom rule. In the **Add Next Action Rule** dialog box, click **+Add Slot**.

<img class="fancyimage" width="700" src="img/ConvoBuilder/slotAdd.png">

Enter a slot name. **We recommend using standard naming conventions for slots. The slot name is later used to refer to and access the data that the slot contains**. Then, for the value field, look for a pre-configured entity (which you should have set up for your domain previously) by typing in first the "@" character and then the name of your desired entity. Lastly, decide how long you'd like the slot's data to be kept for, i.e., the duration.

`{$botContext.slot.slotName}` is how you can access values in slots and use them in other ways. For example, to have the bot respond with a user's previously stored answer under the assigned entity `animal`, you'd set up a text interaction like so:

"You answered: {$botContext.slot.animal}!"

If your bot asked the user "which animal do you like?" and the user answered "dogs" or something similar, the slot for the entity `animal` would be populated with their answer. The bot would then respond with "You answered: dogs!" populating the code above with the user's reply.

#### Slot filling with multi-entity extraction

Slot-filling becomes especially useful when mining the entities that make up a user's intent to pre-populate your list of questions, and streamline the data collection process.

1. Create a [new dialog](conversation-builder-dialogs-dialog-basics.html#create-a-dialog) and associate an [intent from your domain](conversation-builder-intent-builder-overview.html) as the dialog starter. For this example we will create the dialog `ordering` with the domain intent `order item`.
2. Now, devise a few [entities](intent-builder-entities.html) that will be captured in our intent. For this example, we are going to create an entity for `color` with the values `blue, white, and red`, one for `item` with `pants, shoes, shirt, underwear`. and finally, one for `size` with the values `small, medium, and large`. Before moving on, [update and train](intent-builder-domains.html#train-a-liveperson-nlu-v2-domain) the `order item` intent with some representative training phrases that contain these entities.
3. Next we will create the [questions](conversation-builder-interactions-questions.html#types-of-questions) our dialog will ask. You should add one question interaction per slot that you are looking to fill. Using [Assist](conversation-builder-nlu-assist.html#assigning-an-intent-to-an-interaction), assign your entities to the relevant questions, for example:

    <img style="width:900px" class="fancyimage" src="img/ConvoBuilder/variables_and_slots/slot_nluassist.png">

    Once completed you will have a list of questions that looks like the following:

    <img style="width:600px" class="fancyimage" src="img/ConvoBuilder/variables_and_slots/slot_questions.png">

    <img style="width:600px" class="fancyimage" src="img/ConvoBuilder/variables_and_slots/slot_questions2.png">

    <img style="width:600px" class="fancyimage" src="img/ConvoBuilder/variables_and_slots/slot_questions3.png">

    When you assign an entity to a question, this automatically creates a rule for each question. Each rule creates a slot that contains our slot variable (e.g., `item`) and whose value is the entity value (e.g., `@item`).

    <img style="width:800px" class="fancyimage" src="img/ConvoBuilder/variables_and_slots/slot_fill.png">

5. Now you can test the bot using an intent with slot choices as part of the query. When you enter the dialog, if a user has supplied an entity that is known to the domain, it will automatically populate the slot and skip the interaction and move on to the next interaction's question. 

<img style="width:400px" class="fancyimage" src="img/ConvoBuilder/variables_and_slots/slot_fill_prompt.png">

If a user manages to express all the slots as part of their intent query, it will skip to our confirmation step.
<img style="width:400px" class="fancyimage" src="img/ConvoBuilder/variables_and_slots/slot_in_action.png">

### When to use variables vs slots

Variables are the default storage unit of Conversation Builder, while slots are a special type of variable. The only reason to favor slots is if you need extra functionality that is linked to entities or if entities will be used in an API Integration catalog search, for example.

When in doubt, it is best to use variables. The [Assist](conversation-builder-nlu-assist.html) tool will help to display when slots are most useful.

### Duration of variables and slots

When you define a variable or slot, you specify how long to keep the stored data.

<img class="fancyimage" width="800" src="img/ConvoBuilder/variablesSlotsDuration.png">

There are three options for the duration:

* **Request**: The data will be saved for that particular use of the variable or slot. This option is only useful if the next question in the tree depends on the data.

* **Dialog**: The data will be stored for the specific dialog. Once the dialog ends (either by the consumer closing the conversation or the bot switching to a different dialog), the data will be cleared.

* **Session**: The data will be saved for the entirety of the consumer's automation session. This is useful when using the data to query APIs and retrieve information that might be useful across the entire bot.

If you need to store data for the long term, use the [Conversation Context Service](conversation-builder-scripting-functions-manage-the-conversation-context-service.html).

### Using variables and slots in interactions

`{}` is used for inserting dynamic values inside of interactions:

  * Bot variable: `{$botContext.botVariableName}`

  * Slot: `{$botContext.slot.slotName}`

  * [Environment variable](conversation-builder-environment-variables.html): `{$env.envVariableName}`

  * API integration [custom data field](conversation-builder-integrations-integration-basics.html#process-api-results-with-custom-data-fields): `{apiName.variableName}`