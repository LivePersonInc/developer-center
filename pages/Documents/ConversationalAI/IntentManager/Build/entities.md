---
pagename: Entities
redirect_from:
    - conversation-builder-intent-builder-entities.html
    - intent-builder-entities.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Manager
subfoldername: Build
permalink: intent-manager-build-entities.html
indicator: both
---

### What's an entity?

For an explanation of an entity, see [here](intent-manager-key-terms-concepts.html#entities).

### Add a Value Set entity

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard.
3. Select the name of the relevant domain, and then select **Build** from the menu that appears.
4. Select the **Entities** page.
5. In the upper-right corner, click **Add Entity**.
6. Specify the following:
    * **Entity Name**: Enter the name of the entity using alphanumeric characters (no special characters). Consider using all capital letters and underscores (instead of spaces) as a convention; this makes the entities readily visible when they are used in intents and knowledge bases.
    * **Description**: Enter a short phrase describing the entity. While this field is optional, it's often useful. Many entity names can be technical. A description adds clarity and is particularly helpful to a person not familiar with the domain.
    * **Entity Type**: Select "Value Set."
    * **Entity Values**: Enter each entity value.
7. Click **Save**.
8. Train the domain so that the addition is reflected in a new model version.

### Add a Regular Expression entity

{: .important}
Regular Expression entities are available only in domains using the [LivePerson engine](intent-manager-natural-language-understanding-liveperson-nlu-engine.html#liveperson-nlu-engine) for NLU.

**To add a Regular Expression entity**

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard.
3. Select the name of the relevant domain, and then select **Build** from the menu that appears.
4. Select the **Entities** page.
5. In the upper-right corner, click **Add Entity**.
6. Specify the following:
    * **Entity Name**: Enter the name of the entity using alphanumeric characters (no special characters). Consider using all capital letters and underscores (instead of spaces) as a convention; this makes the entities readily visible when they are used in intents and knowledge bases.
    * **Description**: Enter a short phrase describing the entity. While this field is optional, it's often useful. Many entity names can be technical. A description adds clarity and is particularly helpful to a person not familiar with the domain.
    * **Entity Type**: Select "Regular Expression."
    * **Regular Expression**: Enter the regular expression. All standard [RegEx rules](https://regex101.com/) apply.
    * **Sample Values**: Enter five (5) example values that conform to the regular expression. These values aren't used during entity detection; they're used during domain training to improve the model's performance with respect to intent matching. Within Intent Manager, the sample values also serve as easy-to-read examples of the regular expression, making the expression more understandable at a glance.

        Start with five (5) sample values. If your results aren't as expected, you can add more and then retrain. 
7. Click **Save**.
8. Train the domain so that the addition is reflected in a new model version.

### Add or update entity values in bulk

Use the **Bulk Add** or **Bulk Edit** features, respectively, to add or edit a set of entity values in bulk.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/im_entities_bulkedit1.png">

When you click the link, all of the values are placed into a single field. This means you can make changes to all or some of them in bulk. For example, you can:
* Insert in a number of additional values - at the top, the bottom, or anywhere in between. This is handy if you have them in a separate file. You can quickly copy them and paste them in.
* Select a number of co-located values and delete them all at once. This is faster than doing so one by one.

<img style="width:700px" src="img/ConvoBuilder/im_entities_bulkedit2.png">

{: .important}
To save your changes, click the **Update Entity** button. Once you save the changes, they can’t be reverted. To cancel, navigate away from the page without saving the changes.

Take care when using this feature to avoid making unintended changes:
* To replace what exists, paste over it.
* To add to what exists, paste the additions into (not over) the list.
* Ensure that each value is on a different line.

### Capture an entity using Conversation Builder's Assist

Use Conversation Builder's **Assist** tool to associate a question with an entity, so you can capture the consumer's response as the value of that entity. This is illustrated [here](conversation-builder-assist.html#associate-a-question-with-an-entity).

When you use Assist to associate a question with an entity, Assist automatically creates a slot to store the consumer's response. A slot is a special -- and powerful -- type of variable that brings dynamic, fluid behavior to storing consumer input; more on slots [here](conversation-builder-variables-slots-slots.html).

Using Assist is the easiest way to capture an entity, and it should suit most use cases. For more advanced use cases, such as those that involve modifying or cleaning entities, you can use the [getNamedEntities](conversation-builder-scripting-functions-get-set-session-data.html#get-named-entities) scripting function.

### Detect entities using JavaScript

Use the [getNamedEntities](conversation-builder-scripting-functions-get-set-session-data.html#get-named-entities) scripting function.

### Delete an entity

Deleting an entity is a non-recoverable action, so be certain about doing so before taking this action.

{: .important}
Before you delete an entity, ensure that it isn't being used in any intents or Knowledge Base articles.

**To delete an entity**

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard.
3. Select the name of the relevant domain, and then select **Build** from the menu that appears.
4. Select the **Entities** page.
5. In the left panel, select the entity.
6. Click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_vertical.png"> (3-dot icon), and select **Delete**.
7. In the confirmation dialog, click **Yes**.
8. Train the domain so that the deletion is reflected in a new model version.

### How entities affect the NLU score - LivePerson (Legacy) engine only

When using the LivePerson (Legacy) engine, the more entities in a training phrase that match, the higher the score. This can be a powerful way to increase your matching accuracy, but if overused, can lead to a lot of false positives.

You can see from the example below, that having 2 entities match the training phrases causes a 30% jump in score from the single entity matches. So use them for the key elements of your intent, but don’t overuse.

<img class="fancyimage" style="width:300px" src="img/ConvoBuilder/ib_entities_test1.png">
<img class="fancyimage" style="width:300px" src="img/ConvoBuilder/ib_entities_test2.png">