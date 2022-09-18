---
pagename: Assist
redirect_from:
    - conversation-builder-conversation-builder-assist.html
    - conversation-builder-nlu-assist.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
permalink: conversation-builder-assist.html
indicator: both
---

You can use the Assist tool to associate a dialog starter with a domain and an intent, and to associate a question with an entity.

### Associate a dialog starter with a domain

You associate a dialog starter with a [domain](intent-manager-key-terms-concepts.html#domains) to give you access inside the dialog to the intents (and entities) within the domain. 

If desired, this lets you subsequently associate the dialog starter with one of the domain's intents to trigger the dialog's flow. (Alternatively, you can use patterns to trigger the dialog.)

**To associate a dialog starter with a domain**

1. Select the dialog starter, and open Assist by doing one of the following:
    * Click **+ Intent** in the interaction.
    * Clicking <img style="width:25px" src="img/ConvoBuilder/icon_assist.png"> (Assist icon) just to the right of the interaction.
2. In Assist, select the domain from the suggested, available domains, using the Search box if needed. This associates the domain with the dialog starter. Other interactions within the dialog will be associated with the domain as well.

    <img alt="test" class="fancyimage" style="width:800px" src="img/ConvoBuilder/assist_associatedDomain.png">

    At this point, you can now associate the dialog starter with an intent.

### Associate a dialog starter with an intent

Associating a dialog starter with an [intent](intent-manager-key-terms-concepts.html#intents) means that when a user provides an utterance that matches a particular dialog starter's intent, the bot will trigger that dialog's flow.

**To associate a dialog starter with an intent**

1. In Assist, search for the intent by entering a user message (utterance) or training phrase that triggers the intent.

    <img alt="test" class="fancyimage" style="width:800px" src="img/ConvoBuilder/assist_findIntent.png">

2. Select the intent from the suggested, available intents. This associates it with the dialog starter.

    <img alt="test" class="fancyimage" style="width:800px" src="img/ConvoBuilder/assist_associatedIntent.png">

### Associate a question with an entity

Once you've associated the dialog (or question interaction) with a domain, you can also use Assist to assign [entities](intent-manager-key-terms-concepts.html#entities) to questions. This automatically creates [slots](conversation-builder-variables-slots-slots.html) to store user responses.

**To associate a question with an entity**

1. Search for the entity by entering a consumer message. This populates the **Available Entities** list based on the values you've assigned to the entities in the domain in [Intent Manager](intent-manager-overview.html).

    <img alt="test" class="fancyimage" style="width:800px" src="img/ConvoBuilder/assist_assignEntity1.png">

    (If the question is a *multiple choice* question, Assist suggests entities based on the option list in the question.)

2. Select the entity from the suggested, available entities. This associates the question with the entity. It also automatically creates a slot based on the entity, for storing the consumer’s response. The slot allows you to store the specific answer that the user sent, which is one of the values of the entity.

    <img alt="test" class="fancyimage" style="width:800px" src="img/ConvoBuilder/assist_assignEntity2.png">
    <img alt="test" class="fancyimage" style="width:800px" src="img/ConvoBuilder/assist_assignEntity3.png">

{: .note}
For several examples of how slot filling works, see [here](conversation-builder-variables-slots-slots.html). Also, be aware that you can’t use Assist to assign *global entities* to questions; you can only use Assist to assign *custom entities* to questions. To assign a global entity to a question, manually add the rule that creates the slot.
