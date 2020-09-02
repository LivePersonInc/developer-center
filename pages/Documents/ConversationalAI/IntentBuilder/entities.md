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

Entities are keywords or expressions that represent groups of items. For example, an entity named `SIZE` might represent the following values: small, medium, and large.

In a conversation, when a bot detects an entity value in a consumer's utterance, the bot invokes the associated entity, substituting it into the utterance before determining the consumer's intent. Therefore, you can use entities in two places:

* Training phrases for intents defined in [Intent Builder](intent-builder-overview.html) 
* Intent qualifiers for articles defined in [Knowledge Base](knowledge-base-overview.html)

There are three types of entities:

* Value Set entities
* Regular Expression entities
* Built-in entities

### Types of entities

#### Value Set entities

As their name suggests, Value Set entities are those that have a defined set of values. For example, the entity `SPORTS` might have the following values in its value set:
* football
* running
* walking

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/ib_entitiesValueSet.png">

Whenever the user's utterance contains one of these entity values (e.g., "I'm interested in running"), the bot detects this, invokes the `SPORTS` entity, and substitutes it into the utterance before determining the consumer's intent. This means, when you add training phrases for the intent, instead of adding these...

* "I'm interested in football"
* "I'm interested in running"
* "I'm interested in walking"

...you can add a single training phrase that uses the `SPORTS` entity:

* "I'm interested in `SPORTS`"

All three utterances above invoke this intent.

The values for Value Set entities are usually one or two words, as they represent groups of simple objects.

#### Regular Expression entities

Unlike a Value Set entity, a Regular Expression entity doesn't have a set of values. Instead, its value is a single regular expression defined using [Regular Expression](https://www.regexlib.com/) rules. As an example, you might have an `ORDER_NO` entity whose regular expression is `^\b\d{6}\b` , which is a 6-digit number.

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/ib_entitiesRegEx.png">

Whenever the consumer's utterance contains an expression that conforms to the entity's regular expression (e.g., "I want to check on my order 757575"), the bot detects this, invokes the `ORDER_NO` entity, and substitutes it into the utterance before determining the consumer's intent. In this way, a Regular Expression entity works like a Value Set entity.

Use a Regular Expression entity in situations where the entity's possible values all conform to a specific pattern, and that list of values is so long that it makes use of a Value Set entity unfeasible. Some use cases include:

* Flight numbers
* Order numbers
* Help Desk ticket numbers

Continuing our `ORDER_NO` example, you might use the entity in the training phrases for an "order status" intent, like so:

* "I want to check on my order `ORDER_NO`"
* "What's the status of order `ORDER_NO`"

{: .important}
Regular Expression entities are available only in domains using the [LivePerson NLU v2 engine](intent-builder-natural-language-understanding.html#liveperson-nlu-v2).

#### Built-in entities

The platform automatically detects the entities listed below: 

* PERSON - Names of people, persons

* ORGANIZATION - Names of institutions

* NUMBER - Numbers in a sentence (pure number)

* MONEY -  Numbers with currency ($2000)

* DURATION - Time periods

* SET - Group (example month, week)

* ORDINAL - A number used in the context of order. 15th, 10th, etc., are examples.

* DATE - Date-related. Today, Tomorrow or explicit dates such as 03/01/2017

Using the [Assist](conversation-builder-assist.html) tool, you can assign these built-in entities to user interactions and have the bot populate a [slot](conversation-builder-conversation-builder-variables-slots.html#slots) with the user's input to the question to which the entity was assigned.

### How entities affect the NLU score (LivePerson NLU v1 only)

When using the LivePerson NLU v1 engine, the more entities in a training phrase that match, the higher the score. This can be a powerful way to increase your matching accuracy, but if overused, can lead to a lot of false positives.

You can see from the example below, that having 2 entities match the training phrases causes a 30% jump in score from the single entity matches. So use them for the key elements of your intent, but don’t overuse.


<img class="fancyimage" style="width:400px" src="img/testuserinput.png">

### Add a Value Set entity

**To add a Value Set entity**

1. Open the domain.
2. In the upper-left corner, click **Entities**.
3. In the upper-right corner, click **Add Entity**.
4. Specify the following:
    * **Entity Name**: Enter the name of the entity using alphanumeric characters (no special characters). Consider using all capital letters and underscores (instead of spaces) as a convention; this makes the entities readily visible when they are used in intents and knowledge bases.
    * **Entity Type**: Select "Value Set."
    * **Entity Values**: Enter each entity value.
5. Click **Save**.
6. If the domain is using LivePerson NLU v2 or a 3rd-party NLU engine, train the domain so that the addition is reflected in a new model version.

### Add a Regular Expression entity

{: .important}
Regular Expression entities are available only in domains using the [LivePerson NLU v2 engine](intent-builder-natural-language-understanding.html#liveperson-nlu-v2).

**To add a Regular Expression entity**

1. Open the domain.
2. In the upper-left corner, click **Entities**.
3. In the upper-right corner, click **Add Entity**.
4. Specify the following:
    * **Entity Name**: Enter the name of the entity using alphanumeric characters (no special characters). Consider using all capital letters and underscores (instead of spaces) as a convention; this makes the entities readily visible when they are used in intents and knowledge bases.
    * **Entity Type**: Select "Regular Expression."
    * **Regular Expression**: Enter the regular expression. All standard [RegEx rules](https://www.regexlib.com/) apply.
    * **Sample Values**: Enter five (5) example values that conform to the regular expression. These values aren't used during entity detection; they're used during domain training to improve the model's performance with respect to intent matching. Within Intent Builder, the sample values also serve as easy-to-read examples of the regular expression, making the expression more understandable at a glance.

        Start with five (5) sample values. If your results aren't as expected, you can add more and then retrain. 
5. Click **Save**.
6. Train the domain so that the addition is reflected in a new model version.

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