---
pagename: Assist
redirect_from:
    - conversation-builder-conversation-builder-assist.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversation Builder
permalink: conversation-builder-assist.html
indicator: both
---

You can use the Assist tool to associate a dialog starter with a domain and an intent, and to associate questions with entities.

### Associate a dialog starter with a domain

You associate a dialog starter with a domain to give you access inside the dialog to the intents (and entities) within the domain. 

If desired, this lets you subsequently associate the dialog starter with one of the domain's intents to trigger the dialog's flow. (Alternatively, you can use patterns to trigger the dialog.)

**To associate a dialog starter with a domain**

1. Select the dialog starter, and open Assist by clicking <img style="width:25px" src="img/ConvoBuilder/icon_assist.png"> (Assist icon).
2. In Assist, search for the [domain](intent-builder-domains.html) to associate.

    <img alt="test" class="fancyimage" style="width:800px" src="img/ConvoBuilder/assist_findDomain.png">

3. Select the domain from the available domains. This associates it with the dialog starter.

    <img alt="test" class="fancyimage" style="width:800px" src="img/ConvoBuilder/assist_associatedDomain.png">

    At this point, you can now associate the dialog starter with an intent if desired (i.e., if not using patterns to trigger the dialog).

### Associate a dialog starter with an intent

Associating a dialog starter with an intent means that, when the intent is found in a conversation, the bot will trigger the dialog's flow. For example, if the consumer's message is, "I want to buy a shirt," Assist might trigger an intent named "order item." Depending on the training phrases that you associate with the "order item" [intent](intent-builder-intents.html), the dialog might also be triggered by something like, "Do you have any shirts?"

**To associate a dialog starter with an intent**

1. Select the dialog starter, and open Assist by clicking <img style="width:25px" src="img/ConvoBuilder/icon_assist.png"> (Assist icon).

2. In Assist, search for the intent by entering a user message (utterance) or training phrase that triggers the intent.

    <img alt="test" class="fancyimage" style="width:800px" src="img/ConvoBuilder/assist_findIntent.png">

3. Select the intent from the suggested, available intents. This associates it with the dialog starter.

    <img alt="test" class="fancyimage" style="width:800px" src="img/ConvoBuilder/assist_associatedIntent.png">

### Associate a question with an entity

Once you've associated the dialog with a domain, you can also use Assist to assign [entities](intent-builder-entities.html) to questions. This automatically creates [slots](conversation-builder-variables-slots.html#slots) to store user responses.

<img alt="test" class="fancyimage" style="width:800px" src="img/ConvoBuilder/assist_assignEntity1.png">

To do this in Assist, search for the entity by entering a user message. This populates the available entities based on the values you've assigned to the entities in [Intent Builder](intent-builder-overview.html).

<img alt="test" class="fancyimage" style="width:800px" src="img/ConvoBuilder/assist_assignEntity2.png">

(If the question is a multiple choice question, Assist will suggest entities based on the option list in the question.)

Select the entity from the available entities. This associates the entity with the question. It also automatically creates a slot based on the entity, for storing the user message. The slot allows you to store the specific answer that the user sent, which is one of the values of the entity.

<img alt="test" class="fancyimage" style="width:800px" src="img/ConvoBuilder/assist_assignEntity3.png">

<img alt="test" class="fancyimage" style="width:800px" src="img/ConvoBuilder/assist_assignEntity4.png">
