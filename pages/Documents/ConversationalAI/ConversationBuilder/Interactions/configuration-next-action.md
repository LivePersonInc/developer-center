---
pagename: Configuration - Next Action
redirect_from:
    - conversation-builder-conversation-builder-conditions.html
    - conversation-builder-conversation-builder-response-match-actions.html
    - conversation-builder-response-match-actions.html
    - conversation-builder-interactions-response-match-actions.html
    - conversation-builder-interactions-details-next-actions.html
    - conversation-builder-interactions-configuration-next-step.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Interactions
permalink: conversation-builder-interactions-configuration-next-action.html
indicator: both
---

### Next Action

Every interaction has a specified next action. This determines the direction of the dialog flow after the interaction has been processed.

You specify an interaction's **Next Action** directly on the interaction tile:

<img style="width:600px" class="fancyimage" src="img/ConvoBuilder/interactions_nextStep.png">

When specifying the next action, you can select from the following options:

* *Next Interaction*: Directs the flow to the next interaction in the dialog.
* *Current Interaction*: Repeats the current interaction.
* *End Interaction*: Stops the flow within the dialog.
* *Close Conversation*: Closes the conversation but **doesn't** trigger a post-conversation survey; see [here](conversation-builder-dialogs-dialog-basics.html#close-the-conversation) for more.
* *Close Dialog*: Closes the conversation and triggers a post-conversation survey; see [here](conversation-builder-dialogs-dialog-basics.html#close-the-dialog) for more.
* *{interaction name}*: Directs the flow to the interaction with the specified name.

Next Action options depend on the given interaction; only suitable options are available. For example, "Current Interaction" is only available for Question interactions, and "Close Conversation" isn't available for Dialog Starter interactions.

As shown in the image above, in question and integration interactions, you can create *custom rules* that determine the next action that occurs. This is discussed next.

### Custom Rules

A custom rule contains a set of instructions for how to respond to the user input or to the result of an integration call.

As an example, the following rule says that if the user responds to a Yes/No question with the pattern "yes," "yah," or "yup," the dialog flow should continue to the Yes statement.

<img style="width:750px" class="fancyimage" src="img/ConvoBuilder/interactions_rule.png">

In question and integration interactions, you can create one or multiple custom rules depending on how many responses you need to support.

Use the guided Add/Edit Next Action Rule window to:

1. Specify the rule name.
2. Define the condition that must evaluate to true for the rule to be executed.
3. Store data in a [variable or slot]((conversation-builder-variables-slots.html)). (Multiple variables can be added to a rule, but only a single slot can be added to a rule. A rule can fill only a single slot because it evaluates only a single element in the consumer's utterance against the defined condition.)
4. Specify the next step in the dialog flow.

#### Adding variable conditions

You can create more complex rules by adding one or more variable conditions using **+ Add Variable Condition**.

<img style="width:700px" class="fancyimage" src="img/ConvoBuilder/interactions_addVarCondition1.png">

If you add a variable condition, *both* the first defined condition *and* the variable condition must be true for the next action to be performed.

To specify a `botContext` variable in a variable condition, enter only the variable name.

In our example below, the consumer must answer "yes" to our question and the `channel` variable must be "ABC" for Apple Business Chat. If both are true, then the consumer is offered a promotion.

<img style="width:700px" class="fancyimage" src="img/ConvoBuilder/interactions_addVarCondition2.png">

We could further expand the example to include additional custom rules with variable conditions that checked for other channels, e.g., SMS and so on, and configure next actions for those as well.

#### Multiple rules (order of execution)

If an interaction has multiple custom rules, they are evaluated in the following order:

1. Rules with a "Response Intent" match type are evaluated first.
2. Rules with any other match type except "No Match" are evaluated next.
3. A rule with a "No Match" match type is always evaluated last.

Within the above confines, the rules are then evaluated in the order they are listed.

To reorder rules, move the cursor over the area to the left of the rule, and click the Up or Down arrow that appears.

<img style="width:500px" class="fancyimage" src="img/ConvoBuilder/interactions_rule2.png">

For information on the match types mentioned above, see *Conditions*, which is discussed next.

### Conditions

Conditions are "if..., then..." statements that, when combined with pattern matching, intents and entities, deliver a powerful flow control engine for the bot.

#### Conditions in question interactions

Consider the following question that asks the user for their 6-digit account number.

<img style="width:600px" class="fancyimage" src="img/ConvoBuilder/interactions_conditions1.png">

The question contains a single rule, which is this:

<img style="width:750px" class="fancyimage" src="img/ConvoBuilder/interactions_conditions2.png">

In the rule, there's a condition that determines if the user's response matches the RegEx for a 6-digit number. If it does, the user's response is stored in a [slot](conversation-builder-variables-slots.html#slots), and the dialog flow continues to the next interaction.

Like in the example above, when you define a condition (in a rule) in a question interaction, you specify how you want to match the user's input. You can select from the following match types:

* **Response Intent**: This triggers the Next Action when the user input matches the selected [intent](intent-builder-intents.html). Make sure to connect your domain and populate it with intents, so they'll be available for conditions. For an example of usage, see [here](conversation-builder-best-practices-reusable-components.html#create-reusable-yes-and-no-intents).
* **Regular Expression**: This triggers the Next Action when the user input matches the RegEx that you specify. All standard [Regex rules](http://www.regexlib.com) apply. Take advantage of the [hint feature](conversation-builder-interactions-interaction-basics.html#advanced-patterns-with-regular-expressions) that's available.
* **Pattern**: This triggers the Next Action when the user input matches the pattern that you specify. See [here](conversation-builder-interactions-interaction-basics.html#specify-patterns-in-interactions) for more information on pattern matching. Take advantage of the [pattern library](conversation-builder-interactions-interaction-basics.html#popular-patterns) that's available.
* **Exact Value**: This triggers the Next Action when the user input matches an exact value that you specify. This is useful for questions where you present the user a set of predefined answers, such as multiple choice questions, since you can anticipate the user's answer precisely.
* **Evaluate Options**: Available for multiple choice questions only. This triggers the Next Action when the user's choice matches the choice that you select here. For a match to be found, the consumer must select the option, enter the choice exactly, or, in text-only channels, enter the corresponding letter or number (configured in the interaction's settings).

    <img style="width:200px" class="fancyimage" src="img/ConvoBuilder/interactions_conditions4.png">

    If you need more flexibility (e.g., you have a Yes/No question but you want to account for "Yeah" and "Yup" in the condition), use a different method instead.

    When defining a condition using Evaluate Options, make sure the choices in the question are defined *before* defining the condition. Otherwise, the choices won't be available for use in the condition.

* **No Match**: This triggers the Next Action when a match to an earlier rule in the interaction isn't found. Use this option in a final rule to catch all utterances other than those caught by earlier rules. 

    The No Match option is a great way to repeat the same interaction until the consumer enters an expected utterance. This is done below.

    <img style="width:600px" class="fancyimage" src="img/ConvoBuilder/interactions_noMatch.png">

    <img style="width:700px" class="fancyimage" src="img/ConvoBuilder/interactions_noMatch2.png">

    Keep in mind the following when using the "No Match" match type:

    * The No Match rule is always the *last* rule to be evaluated regardless of where you place it in the list of rules in the interaction. Therefore, as a best practice, place the No Match rule last in the rule list.
    * You have the option to define a message that is sent before the next step is executed. (See the example in the image above.)
    * [Context switching](conversation-builder-dialogs-dialog-basics.html#context-switching) based on the consumer's utterance doesn't happen when an interaction has a No Match rule. This is because a No Match rule is *always* executed when there isn't a match to an earlier rule in the interaction.

#### Conditions in integration interactions

You can define a condition (in a rule) in an integration interaction to direct the dialog flow based on the result of the API integration call. This is a best practice that's recommended by LivePerson.

<img style="width:750px" class="fancyimage" src="img/ConvoBuilder/interactions_conditions3.png">

For more on doing this, see the discussion on integration interactions [here](conversation-builder-interactions-integrations.html#defining-rules-based-on-the-result-of-the-api-integration).