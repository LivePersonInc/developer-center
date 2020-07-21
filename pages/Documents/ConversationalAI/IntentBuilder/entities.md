---
pagename: Entities
redirect_from:
    - conversation-builder-intent-builder-entities.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Builder
permalink: intent-builder-entities.html
indicator: both
---

### What's an entity?

Entities are keywords that represent a number of synonyms. For instance, the entity `sports` could refer to or represent the following group of items: "walking", "jogging", "running", "football" and so on. Whenever an entity is referred to, the group that it represents is automatically inserted by the bot. So if a user sends the sentence, "I'm interested in running," the bot invokes the entity `sports`.

Therefore, when you're creating training phrases for an intent, instead of typing in multiple phrases like so: "I'm interested in walking", "I'm interested in jogging", "I'm interested in running", you can just create one training phrase that looks like the following:

"I'm interested in `sports`".

Entities can be used both in the context of intents as well as in a [Knowledge Base](conversation-builder-knowledge-base.html). Just like with training phrases for intents, entities can be used in training phrases for Knowledge Base articles.

Entities are usually one or two words as they represent groups of simple objects.

### Built-in entities

The platform automatically detects the entities listed below. Using the [Assist](conversation-builder-assist.html) tool, you can assign these default entities to user interactions and have the bot populate a [slot](conversation-builder-conversation-builder-variables-slots.html#slots) with the user's input to the question to which the entity was assigned.

* PERSON - Names of people, persons.

* ORGANIZATION - Names of institutions.

* NUMBER - Numbers in a sentence (pure number).

* MONEY -  Numbers with currency ($2000).

* DURATION - Time periods.

* SET - Group (example month, week).

* ORDINAL - A number used in the context of order. 15th, 10th etc are examples.

* DATE - Date related, Today, Tomorrow or explicit dates such as 03/01/2017.

### How entities affect the NLU score

The more entities in a training phrase that match, the higher the score. This can be a powerful way to increase your matching accuracy, but if overused, can lead to a lot of false positives.

You can see from the example below, that having 2 entities match the training phrases causes a 30% jump in score from the single entity matches. So use them for the really key elements of your intent, but don’t overuse.

<img class="fancyimage" style="width:400px" src="img/testuserinput.png">

### Add an entity

**To add an entity**

1. Open the domain.
2. In the upper-left corner, click **Entities**.
3. Click **Add Entity** in the upper-right corner.
4. Specify the following:
    * **Entity name**: Enter the name of the entity using alphanumeric characters (no special characters). Consider using all capital letters and underscores (instead of spaces) as a convention; this makes the entities readily visible when they are used in intents and knowledge bases.
    * **Entity values**: Enter each entity value, pressing Enter after each one.
5. Click **Save** in the lower-right corner.
6. If the domain is using LivePerson NLU v2 or a 3rd-party NLU engine, train the domain so that the addition is reflected in a new model version.

### Using entities

To refresh on using entities with intents, check out the [Intents tutorial](conversation-builder-tutorials-guides-getting-started.html). For using entities with Knowledge Base articles, review the [Knowledge Base tutorial](knowledge-base-tutorial.html).

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

In the Intent Builder, when creating your entities, you can provide data with additional values by adding a "~" between the phrase and the data value like this: red~10, blue~11, etc. When calling the entity you would use the following to get the data value:

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

1. Open the domain.
2. In the upper-left corner, click **Entities**.
3. In the left panel, select the entity.
4. Click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_vertical.png"> (3-dot icon), and select **Delete**.
5. In the confirmation dialog, click **Yes**.
6. If the domain is using LivePerson NLU v2 or a 3rd-party NLU engine, train the domain so that the deletion is reflected in a new model version.