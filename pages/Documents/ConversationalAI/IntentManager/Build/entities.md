---
pagename: Entities
redirect_from:
    - conversation-builder-intent-builder-entities.html
    - intent-builder-entities.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Manager
subfoldername: Build
permalink: intent-manager-build-entities.html
indicator: both
---

### What's an entity?

An [entity](intent-manager-key-terms-concepts.html#entities) is any word(s) or series of characters that consistently refers to (an attribute of) a single person, place, or thing, or set of same, e.g., SPORT, SIZE, HELP_DESK_TICKET_NUMBER, or CITY.

There are three types of entities:

* [Value Set](intent-manager-key-terms-concepts.html#value-set-entities) - You define these.
* [Regular Expression](intent-manager-key-terms-concepts.html#regular-expression-entities) - You define these.
* [Global](intent-manager-key-terms-concepts.html#global-entities) - These are automatically detected by the system; see [the complete list](intent-manager-key-terms-concepts.html#global-entities).

Use entities to fill [slots](conversation-builder-variables-slots-slots.html) in Conversation Builder bots.

{: .attn-info}
Interested in the performance? Check out the discussion on precision and recall in our [October 2022 blog post](https://www.liveperson.com/blog/improving-named-entity-recognition/).

### Add a Value Set entity

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard.
3. Select the name of the relevant domain, and then select **Build** from the menu that appears.
4. Select the **Entities** page.
5. In the upper-right corner, click **Add Entity**.
6. Specify the following:
    * **Entity Name**: Enter the name of the entity using alphanumeric characters (no special characters). Consider using all capital letters and underscores (instead of spaces) as a convention; this makes the entities readily visible when they are used in intents and knowledge bases. Note that entity names are case-sensitive.
    * **Description**: Enter a short phrase describing the entity. While this field is optional, it's often useful. Many entity names can be technical. A description adds clarity and is particularly helpful to a person not familiar with the domain.
    * **Entity Type**: Select "Value Set."
    * **Entity Values**: Enter each entity value.
7. Click **Save**.
8. Train the domain so that the addition is reflected in a new model version.

### Add a Regular Expression entity

{: .attn-note}
Regular Expression entities are available only in domains using the [LivePerson engine](intent-manager-natural-language-understanding-liveperson-nlu-engine.html#liveperson-nlu-engine) for NLU.

**To add a Regular Expression entity**

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard.
3. Select the name of the relevant domain, and then select **Build** from the menu that appears.
4. Select the **Entities** page.
5. In the upper-right corner, click **Add Entity**.
6. Specify the following:
    * **Entity Name**: Enter the name of the entity using alphanumeric characters (no special characters). Consider using all capital letters and underscores (instead of spaces) as a convention; this makes the entities readily visible when they are used in intents and knowledge bases. Note that entity names are case-sensitive.
    * **Description**: Enter a short phrase describing the entity. While this field is optional, it's often useful. Many entity names can be technical. A description adds clarity and is particularly helpful to a person not familiar with the domain.
    * **Entity Type**: Select "Regular Expression."
    * **Regular Expression**: Enter the regular expression. All standard [RegEx rules](https://regex101.com/) apply.
    * **Sample Values**: Enter five (5) example values that conform to the regular expression. These values aren't used during entity detection; they're used during domain training to improve the model's performance with respect to intent matching. Within Intent Manager, the sample values also serve as easy-to-read examples of the regular expression, making the expression more understandable at a glance.

        Start with five (5) sample values. If your results aren't as expected, you can add more and then retrain.
7. Click **Save**.
8. Train the domain so that the addition is reflected in a new model version.

### Add or update entity values in bulk

Use the **Bulk Add** or **Bulk Edit** features, respectively, to add or edit a set of entity values in bulk.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/im_entities_bulkedit1.png" alt="Bulk Edit link on Entity Details page">

When you click the link, all of the values are placed into a single field. This means you can make changes to all or some of them in bulk. For example, you can:

* Insert a number of additional values at the top or bottom. This is handy if you have the values in a separate file. You can quickly copy them and paste them in.
* Select a number of values and delete them all at once. This is faster than doing so one by one.

<img style="width:700px" src="img/ConvoBuilder/im_entities_bulkedit2.png" alt="Example of all entity values in a single field">

{: .attn-note}
To save your changes, click the **Update Entity** button. Once you save the changes, they can’t be reverted. To cancel, navigate away from the page without saving the changes.

Take care when using this feature to avoid making unintended changes:

* To replace what exists, paste over it.
* To add to what exists, paste the additions into (not over) the list.
* Ensure that each value is on a different line.

### Delete an entity

Deleting an entity is a non-recoverable action, so be certain about doing so before taking this action.

{: .attn-note}
Before you delete an entity, ensure that it isn't being used in any intents or Knowledge Base articles.

**To delete an entity**

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard.
3. Select the name of the relevant domain, and then select **Build** from the menu that appears.
4. Select the **Entities** page.
5. In the left panel, select the entity.
6. Click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_vertical.png" alt="Three-dot icon"> (3-dot icon), and select **Delete**.
7. In the confirmation dialog, click **Yes**.
8. Train the domain so that the deletion is reflected in a new model version.
