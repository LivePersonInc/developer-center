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

**To add a Value Set entity**

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

### Using entities

To refresh on using entities with intents, check out the [Intents tutorial](tutorials-guides-getting-started-with-bot-building-intents.html). For information on using entities with Knowledge Base articles, see [here](knowledgeai-internal-knowledge-bases-articles.html#using-entities-in-a-knowledge-base).

#### Can I detect entities using JavaScript?

There is a JS method to detect which entities have been picked up by the NLU called [getNamedEntities();](conversation-builder-scripting-functions-get-set-contextual-data.html#get-named-entities) This will return an array of entities for a particular entity name. For example, the following will return an array of toppings found. So in an utterance like "I would like a pizza with pepperoni, sausage and peppers" it would return [pepperoni, sausage, peppers]:

```javascript
var toppingObjects = botContext.getNamedEntities('toppings');

var toppings = [];

if (toppingObjects != null && toppingObjects.length > 0) {

    for (j = 0; j < toppingObjects.length; j++) {

        toppings.push(toppingObjects[j].getPhrase())

    }

}
```

#### Can an entity return a different value?

Sometimes you will want an entity match to return a value, say for sending to an API. For example, if you have an entity for "color" with values like red, blue, green, yellow, black but your API is expecting a numeric data values like red: 10, blue: 11, green: 12, yellow: 13, black: 14 how would you create this mapping?

In the Intent Manager, when creating your entities, you can provide data with additional values by adding a "~" between the phrase and the data value like this: red~10, blue~11, etc. When calling the entity you would use the following to get the data value:

```javascript
var color = botContext.getNamedEntities('colors');

var whichColor = '';

if (color != null && color.length > 0) {

    for (j = 0; j < color.length; j++) {

        whichColor = color[j].getDataValue();

    }

}
```

#### How do I use multiple entities to map to a single value?

Sometimes you need a number of entities to map to a single value. For instance, multiple misspellings or alternative utterances that all mean the same thing. Let’s take an Airport example where we want to detect different ways people might enter names of airports. We can use the data value to be the unifier for these different possible utterances.

Using a similar script to the above color example, which returns the data value, would get you the "LAX" or “DFW” you need.

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