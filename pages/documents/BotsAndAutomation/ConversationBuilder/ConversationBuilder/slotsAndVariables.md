---
pagename: Slots & Variables
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversation Builder
permalink: conversation-builder-conversation-builder-slots-variables.html
indicator: both
---

In the [Interaction Details Response Match & Actions](conversation-builder-conversation-builder-interaction-details.html#next-actions-response-match-actions) settings, you can assign various data points to either Slots or Variables.

One or the more common use cases of slots and variables is [storing user input](conversation-builder-conversation-builder-interactions.html#capture-and-use-consumer-response-to-a-question).

### Difference Between Slots and Variables

When to use one or the other

### Slots

Slots are a useful way to store user responses for usage in an API Integration or other interactions. Slots can be set to a simple value based on a condition or they can be associated with entities, which give them additional capability. When a user selects an answer or types their own input and invokes an [entity](conversation-builder-intent-builder-entities.html) (by, for example, indicating that they want "sandals", which belongs to the "product_shoes" entity), the specific object selected by them might be useful in the future. For example, the automation could refer to it in a reply later in the dialog or you could use an integration to query an API with the slot and retrieve specific information about a product the user was looking for, create a lead with that information or store it for future use outside of the automation (like in the case of an email address).

To configure a slot, simply click the interaction where you'd like to look for entities in the user's input (like a multiple choice question, for example), and go to User Response in the middle of the Interaction Details panel. From there, click the blue **+** icon right to the right of Slot.

In the menu which opens, first assign the slot a name by filling in the "Name" input field. **We recommend using standard naming conventions for slots. The slot name is later used to refer to and access the data which the slot contains**. Then, look for a pre-configured entity (which you should have set up for your domain previously) by typing in first the "@" character and then the name of your desired entity in the "Value" input field to the right of the Name input field.

Lastly, decide how long you'd like the slot's data to be kept for. You can set this by using the "Scope" dropdown menu on the right hand side. The dropdown provides four options:

* Request - the slot's data will only be saved for that particular use of the slot. Only useful if the next question in the tree depends on the slot's data.

* Dialog - the slot's data will only be stored for this specific dialog. Once this dialog ends (either by the user closing the conversation or the automation moving on to a different dialog), the slot's data will be cleared.

* Session - the slot's data will be saved for the entirety of the user's browser session. This is useful when using the data to query APIs and retrieve information which might be useful for multiple dialogs.

* Forever - the slot's data will be saved on our servers forever. It will be accessible via the Conversation Builder for as long as you need it.

`{$botContext.slot.slotName}` is how you can access values in slots and use them in other ways. For example, to have the automation respond with a user's previously stored answer under the assigned entity `animal`, you'd set up a text interaction like so:

"You answered: {$botContext.slot.animal}!"

If your automation asked the user "which animal do you like?" and the user answered "dogs" or something similar, the slot for the entity `animal` would be populated with their answer. The automation would then respond with "You answered: dogs!" populating the code above with the user's reply.

### Variables