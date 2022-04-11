---
pagename: Slots
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Variables & Slots
permalink: conversation-builder-variables-slots-slots.html
indicator: both
---

### Introduction

Slot variables are still variables; they’re just a special type. If you want to automatically detect an [entity](intent-manager-key-terms-concepts.html#entities) within a Question interaction, you must use a slot variable that’s associated with that entity. Using a [standard variable](conversation-builder-variables-slots-variables.html) won’t accomplish this; only slot variables have this specialized behavior.

When combined with entities, slots bring dynamic, fluid behavior to storing consumer input. For example, if you add the Question interaction, "What type of shoes are you looking for?", Conversation Builder’s Assist tool will [suggest appropriate entities](conversation-builder-assist.html#associate-a-question-with-an-entity) and slots for that interaction. As long as the consumer stays within the bounds of entities that you have created, the slots will automatically adjust and update based upon consumer input throughout the conversation.

### Add a slot manually

{: .important}
This section describes how to create a slot manually. However, if you use the Assist tool to assign an entity to a question, Assist automatically creates a slot to store the consumer's response. For info on this, see [here](conversation-builder-assist.html#associate-a-question-with-an-entity).

**To add a slot manually**

1. Select the interaction where you'd like to look for entities in the consumer’s input, like a multiple choice question, for example.
2. Add a custom rule.
3. In the Add Next Action Rule dialog box, click **+Add Slot**.
    <img class="fancyimage" width="800" src="img/ConvoBuilder/slotAdd.png">
4. Enter a slot name. The slot name is later used to refer to and access the data that the slot contains. We recommend using standard naming conventions for slots.
5. For the value field, look for a pre-configured entity (which you should have set up for your domain previously) by entering the "@" character and then the name of your desired entity.
    <img class="fancyimage" width="800" src="img/ConvoBuilder/slotAdd2.png">
6. Decide how long you'd like the slot's data to be kept for, i.e., the [duration](conversation-builder-variables-slots-the-basics.html#duration).

`{$botContext.slot.slotName}` is how you can access values in slots and use them in other ways. For example, to have the bot respond with a consumer’s stored answer under the assigned entity “animal,” you'd set up a text interaction like so:

"You answered: `{$botContext.slot.animal}`!"

If the bot asked the consumer, "Which animal do you like?" and the user answered "dogs,” the slot for the entity “animal” would be populated with their answer. The bot could then respond with "You answered: dogs!" populating the code above with the consumer’s answer.

### Slot filling with multi-entity extraction

Slot-filling becomes especially useful when mining the entities that make up a consumer's intent to pre-populate your list of questions, and streamline the data collection process. Consider the following example:

1. Create a new dialog and associate an [intent from your domain](intent-manager-key-terms-concepts.html#intents) as the dialog starter. For this example, we'll create the dialog `ordering` with the domain intent `order item`.
2. Create a few [entities](intent-manager-key-terms-concepts.html#entities) that will be captured in the intent. For this example, we are going to create an entity for `color` with the values `blue`, `white`, and `red`; one for `item` with the values `pants`, `shoes`, `shirt`, `underwear`; and finally, one for `size` with the values `small`, `medium`, and `large`. Before moving on, we'll [update and train](intent-manager-build-domains.html#train-a-liveperson-domain) the `order item` intent with some representative training phrases that contain these entities.
3. Next, we create the questions that the dialog will ask. We'll add one question interaction per slot that we are looking to fill. Using [Assist](conversation-builder-nlu-assist.html#assigning-an-intent-to-an-interaction), we'll assign the entities to the relevant questions:

    <img style="width:800px" class="fancyimage" src="img/ConvoBuilder/variables_and_slots/slot_nluassist.png">

    Once completed, we'll have a list of questions that looks like the following:

    <img style="width:600px" class="fancyimage" src="img/ConvoBuilder/variables_and_slots/slot_questions.png">

    <img style="width:600px" class="fancyimage" src="img/ConvoBuilder/variables_and_slots/slot_questions2.png">

    <img style="width:600px" class="fancyimage" src="img/ConvoBuilder/variables_and_slots/slot_questions3.png">

    When you assign an entity to a question, this automatically creates a rule for each question. Each rule creates a slot that contains our slot variable (e.g., `item`) and whose value is the entity value (e.g., `@item`).

    <img style="width:800px" class="fancyimage" src="img/ConvoBuilder/variables_and_slots/slot_fill.png">

4. Test the bot using an intent with slot choices as part of the query. When you enter the dialog, if a consumer has supplied an entity that is known to the domain, it will automatically populate the slot, skip the interaction, and move on to the next interaction's question. 

<img style="width:400px" class="fancyimage" src="img/ConvoBuilder/variables_and_slots/slot_fill_prompt.png">

If a consumer expresses all the slots as part of their intent query, it will skip to our confirmation step.

<img style="width:400px" class="fancyimage" src="img/ConvoBuilder/variables_and_slots/slot_in_action.png">