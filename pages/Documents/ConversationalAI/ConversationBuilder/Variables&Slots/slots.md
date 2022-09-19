---
pagename: Slots
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Variables & slots
permalink: conversation-builder-variables-slots-slots.html
indicator: both
---

### Introduction

Slot variables are still variables; they’re just a special type. If you want to automatically detect an [entity](intent-manager-key-terms-concepts.html#entities) within a Question interaction, you must use a slot variable that’s associated with that entity. Using a [standard variable](conversation-builder-variables-slots-variables.html) won’t accomplish this; only slot variables have this specialized behavior.

When combined with entities, slots bring dynamic, fluid behavior to storing consumer input. For example, if you add the Question interaction, "What type of shoes are you looking for?", Conversation Builder’s Assist tool will [suggest appropriate entities](conversation-builder-assist.html#associate-a-question-with-an-entity) and slots for that interaction. As long as the consumer stays within the bounds of entities that you have created, the slots will automatically adjust and update based upon consumer input throughout the conversation.

### Add a slot manually

{: .note}
This section describes how to create a slot manually. However, if you [use the Assist tool to assign an entity to a question](conversation-builder-assist.html#associate-a-question-with-an-entity), Assist automatically creates a slot to store the consumer's response.

**To add a slot manually**

1. Select the interaction where you'd like to look for entities in the consumer’s input, like a multiple choice question, for example.
2. Add a custom rule.
3. In the Add Next Action Rule dialog box, click **+Add Slot**.
    <img class="fancyimage" width="600" src="img/ConvoBuilder/slotAdd3.png" alt="The Add Slot button in a rule">
4. Enter a slot name. The slot name is later used to refer to and access the data that the slot contains. We recommend using standard naming conventions for slots.
    <img class="fancyimage" width="800" src="img/ConvoBuilder/slotAdd.png" alt="The fields for defining a slot">
5. For the value field, look for a pre-configured entity (which you should have set up for your domain previously) by entering the "@" character and then the name of your desired entity.
    <img class="fancyimage" width="800" src="img/ConvoBuilder/slotAdd2.png" alt="A well-configured slot example">
6. Decide how long you'd like the slot's data to be kept for, i.e., the [duration](conversation-builder-variables-slots-the-basics.html#duration).

`{$botContext.slot.slotName}` is how you can access values in slots and use them in other ways. For example, if you've stored a "shoes" entity in a `shoe_type` slot, you can have the bot respond with the consumer's stored answer with a text interaction like so:

"You answered: `{$botContext.slot.shoe_type}`!"

If the bot asked the consumer, "What type of shoes are you looking for?" and the consumer answered "boots,” the slot for the entity “shoes” would be populated with their answer. The bot could then respond with "You answered: boots!" populating the code above with the consumer’s answer.

### Example 1: Fill a slot with a value for a single entity

Consider the following bot flow:

<img style="width:600px" class="fancyimage" src="img/ConvoBuilder/variables_and_slots/slot_examples_1.png" alt="An example bot flow">

The dialog starter is associated with a domain and an intent (buy_a_pet). This association allows you to also associate entities to questions.

In the multiple choice question, the Pet Type rule's configuration looks like this:

<img style="width:800px" class="fancyimage" src="img/ConvoBuilder/variables_and_slots/slot_examples_2.png" alt="An example of a rule's configuration">

The result is that:

* If the consumer starts off with, “I want to buy a pet,” the multiple choice interaction is sent to the consumer, and the consumer can choose Dog, Cat, or Bird. This fills the slot.
* If the consumer starts off with, “I want to buy a dog” (or any other recognized pet entity — it does not have to be dog, cat, or bird), then the multiple choice question is **not** sent to the consumer. But the slot is still filled.

Either way, when the consumer reaches the text interaction, the slot will have been filled, and the text interaction sends, "So you're looking for a dog. A fine choice!" Or, "So you're looking for a tortoise. A fine choice!"

The key point is that if the multiple choice question detects that the entity already exists, it performs the slot-filling step, but it does **not** send its content to the consumer. The bot flow simply continues to the next action.

### Example 2: Fill a slot with a value for one of several entities

Sometimes an intent can relate to multiple entities: For example, a consumer can make a reservation at a hotel or a restaurant.

To handle this, a slot-filling question can have more than one slot-filling rule. This means you can set up the question so that it captures whichever of multiple entities a consumer is interested in. Importantly, the rules can all fill the same slot, so you can easily use the slot later on. Here is an example that illustrates the concept:

<img style="width:600px" class="fancyimage" src="img/ConvoBuilder/variables_and_slots/slot_examples_3.png" alt="An example bot flow">

Like in *Example 1*, the dialog starter is associated with a domain and an intent (Make Reservation). This association allows you to also associate entities to questions.

Note the two rules in the question:

* Capture Hotel
* Capture Restaurant

There are two different entity types involved: hotel and restaurant. Each rule captures one of those. Here is Capture Hotel:

<img style="width:800px" class="fancyimage" src="img/ConvoBuilder/variables_and_slots/slot_examples_4.png" alt="An example of a rule's configuration">

And here is Capture Restaurant:

<img style="width:800px" class="fancyimage" src="img/ConvoBuilder/variables_and_slots/slot_examples_5.png" alt="Another example of a rule's configuration">

As we've discussed in *Example 1* above, if either of the question's rules are met by the consumer's initial intent, the question fills the slot, and it does **not** send its content to the consumer.

In this case, both rules fill the slot `establishment_name`. So, regardless of whether the consumer starts off with, “I want to eat dinner at the Olive Garden” and Capture Restaurant is triggered, or “I want to stay at the Holiday Inn” and Capture Hotel is triggered, `establishment_name` will contain the restaurant or hotel name. So, it can be used in the subsequent text statement: “So that’s a reservation for Olive Garden” or “So that’s a reservation for Holiday Inn.”

Importantly, if the consumer were to start off more generally with, “I need a reservation,” then neither rule in the question would be triggered, so the question would send, “Where would you like to make your reservation?” The consumer's response would then be used to fill the `establishment_name` slot according to the rules. And again, the text statement sent in response would make use of the value.

### Example 3: Fill multiple slots with the values for multiple entities

As *Example 1* demonstrates, slot filling is very useful when extracting the entities in a consumer's intent, so you can pre-populate answers to questions. This can streamline the data collection process significantly, as you’ll see in this example. Examine the following basic ordering dialog:

<img style="width:700px" class="fancyimage" src="img/ConvoBuilder/slots_ex3_1.png" alt="An example bot flow">

While you can’t see it in the image above, the dialog relies on a few entities in Intent Manager:

* COLOR
* ITEM
* SIZE

COLOR is a global entity. Like all global entities, this entity is automatically detected by the system, so we didn’t need to create it. In contrast, ITEM and SIZE are two custom entities (of the Value Set type). ITEM contains the values “pants,” “shoes,” and “shirt.” SIZE contains the values “small,” “medium,” and “large.” We created ITEM and SIZE manually in a domain named `My Corp`.

The My Corp domain also contains an `order item` intent. It has some representative training phrases that contain the entities. We trained and activated the `My Corp` domain, so we can use it in Conversation Builder.

In Conversation Builder, in the `ordering` dialog, things start off with a dialog starter that’s associated with the `My Corp` domain and the `order item` intent. This association allows us to associate entities to questions in the dialog.

<img style="width:700px" class="fancyimage" src="img/ConvoBuilder/slots_ex3_2.png" alt="The dialog starter">

Next in the `ordering` dialog is a list of questions to ask the consumer. There’s one question for each slot we’re looking to fill.

For the questions associated with custom entities, we used [Assist](conversation-builder-assist.html) to assign the entities to the questions.

<img style="width:700px" class="fancyimage" src="img/ConvoBuilder/slots_ex3_3.png" alt="Using the Assist tool to assign an entity to a question">

<img style="width:700px" class="fancyimage" src="img/ConvoBuilder/slots_ex3_4.png" alt="The question after the entity has been assigned">

When you use Assist to assign an entity to a question, it automatically creates a rule for each question. In turn, each rule creates a slot that contains a slot variable (e.g., ITEM) and whose value is the entity value (e.g., @ITEM).

<img style="width:800px" class="fancyimage" src="img/ConvoBuilder/slots_ex3_5.png" alt="The configuration of the rule that's automatically created">

For the “color” question though, we couldn’t use Assist. That’s because Assist can’t be used to assign global entities to questions; Assist can only be used to assign custom entities to questions. So, in the case of the “color” question, we created its rule manually. The rule looks much like shown above: It creates a slot that contains our slot variable (COLOR) and whose value is the entity value (@COLOR).

The dialog finishes with a statement that makes use of all of the entity values:

<img style="width:700px" class="fancyimage" src="img/ConvoBuilder/slots_ex3_6.png" alt="The final Statement in the dialog">

How does this dialog work in practice? Let’s examine the following conversation flow:

<img style="width:500px" class="fancyimage" src="img/ConvoBuilder/slots_ex3_7.png" alt="An example of the conversation flow with the consumer">

Notice that the consumer’s initial intent includes an entity value for the ITEM entity. As a result, the ITEM slot is filled automatically, and the “item” question is skipped.

If the consumer’s initial intent fills all of the slots, the flow moves directly to the confirmation statement:

<img style="width:500px" class="fancyimage" src="img/ConvoBuilder/slots_ex3_8.png" alt="A streamlined example of the conversation flow due to slot filling">

Overall, you can see how slots can help to streamline the data collection process with the consumer.
