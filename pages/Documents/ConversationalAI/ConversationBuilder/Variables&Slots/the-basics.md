---
pagename: The Basics
redirect_from:
    - conversation-builder-conversation-builder-variables-slots.html
    - conversation-builder-variables-slots.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Variables & Slots
permalink: conversation-builder-variables-slots-the-basics.html
indicator: both
---

### Introduction

During a bot conversation with a consumer, you’ll likely want to capture and store some information that’s been collected along the way. You can store that information in variables and slots:

* **Variables**: [Variables](conversation-builder-variables-slots-variables.html) are more commonly used than slots. Use a variable when you simply want to save a value, for example, to save a consumer’s response in a Question interaction. Using a slot for this basic behavior doesn’t offer any additional value. So, when in doubt, use a variable.
* **Slots**: [Slot variables](conversation-builder-variables-slots-slots.html) are still variables; they’re just a special type. If you want to automatically detect an entity within a Question interaction, you must use a slot variable that’s associated with that entity. Using a standard variable won’t accomplish this; only slot variables have this specialized behavior.

You can add both variables and slots to the [custom rules](conversation-builder-interactions-configuration-next-action.html#custom-rules) of an interaction.

If you’re adding an [API integration](conversation-builder-integrations-api-integrations.html) to perform some action or retrieve information (e.g., retrieve an order’s status), variables and slots are useful for storing and then passing along the necessary data (e.g., the order’s number).

{: .attn-note}
See also [this tutorial on using variables in interactions](tutorials-guides-getting-started-with-bot-building-integrations.html).

### Referencing variables and slots
To reference variables and slots and thereby insert dynamic values in interactions and integrations, use `{}`. Follow this syntax:

  * Bot variable: `{$botContext.botVariableName}`

  * Slot: `{$botContext.slot.slotName}`

  * [Environment variable](conversation-builder-environment-variables.html): `{$env.envVariableName}`

  * API integration [custom data field](conversation-builder-integrations-integration-basics.html#process-api-results-with-custom-data-fields): `{apiName.variableName}`

### Duration

When you define a variable or slot, you specify how long to keep the stored data.

<img loading="lazy" width="800" src="img/ConvoBuilder/variablesSlotsDuration.png" alt="The options for specifying a duration">

There are three options for the duration:

* **Request**: The data is saved for that particular use of the variable or slot. This option is only useful if the next question depends on the data.
* **Dialog**: The data is saved for the duration of the dialog. Once the dialog’s flow ends, the data is cleared.
* **Session**: The data is saved for the entirety of the consumer’s bot session. This is useful when you’re using the data to query APIs and retrieve information that might be useful across the entire bot.

If you need to store data for the long term, use the [Conversation Context Service](conversation-builder-scripting-functions-manage-the-conversation-context-service.html).
