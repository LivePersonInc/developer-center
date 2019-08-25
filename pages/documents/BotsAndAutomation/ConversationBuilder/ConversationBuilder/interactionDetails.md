---
pagename: Interaction Details
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversation Builder
permalink: conversation-builder-conversation-builder-interaction-details.html
indicator: both
---

The Interaction Details widget is where you configure the majority of dialog and interaction logic.

**To access the Interaction Details widget**
- Select the interaction, and click the **Interaction Details** icon that's displayed to its right.

<img style="width:600px" class="fancyimage" src="img/ConvoBuilder/interactionDetails_icon.png">

The Interaction Details widget can contain three panels:
- [Settings](#settings)
- [Next Actions](#next-actions)
- [Code](#code) (Not applicable to User Says interactions)

<img style="width:450px" class="fancyimage" src="img/ConvoBuilder/interactionDetails_panel.png">

### Settings

The Settings panel contains essential data about the selected interaction:

* **ID**: This is useful for debugging.
* **Interaction Name**: Change the name to something memorable and useful to reference in the [Next Step](conversation-builder-conversation-builder-response-match-actions.html#next-step) selector.
* **Interaction Type**: Shows the [Interaction Type](conversation-builder-conversation-builder-interactions.html). Be aware that it is possible to change the type from this dropdown.
* **Interaction Delay**: Set the millisecond time delay before sending this message.

    {: .important}
    If you see messages out of order, add a 1000-2000 millisecond (1-2 second) delay. A 2-second delay is recommended to ensure a consistent message order.

* **Enabled**: On/Off selector for enabling or disabling.
* **Required**: Available for Question interactions only. On/Off selector for required or not required.

### Next Actions

Each Next Actions panel can contain one or many Response Match & Action sets, and each set contains instructions for how to respond to the user input. For example, if you ask the user what their favorite color is, you might create a Response Match & Action set for each possible primary color.

The following image illustrates two Response Match & Actions sets, where the first is displayed.

<img style="width:450px" class="fancyimage" src="img/ConvoBuilder/interactionDetails_sets.png">

**To add a Response Match & Action set**
* Click the <img style="width:25px" src="img/ConvoBuilder/icon_addResponseMatchSet.png"> icon beside "Response Match & Actions."

#### Response Match & Actions

See [Response Match & Actions](conversation-builder-conversation-builder-response-match-actions.html) for more information on configuring matches and their subsequent actions.

#### Advanced Responses

##### Fallback Response

If a user is currently within an interaction flow (eg. Answering a Question), this fallback response will trigger if the user response has no [conditions](conversation-builder-conversation-builder-response-match-actions.html#conditions) that are met.

If you do **not** set this fallback response within the interaction, and no conditions or intents are matched, the automation will defer to a [Fallback **Dialog**](conversation-builder-conversation-builder-dialogs.html#fallback).

#### Process User Response

This enables you to add JavaScript code for processing user input _upon receiving the input_, which can be useful for cleaning or normalizing user input, or even passing the data to an API.

Use the built-in [scripting functions](conversation-builder-conversation-builder-scripting-functions.html) to access variables and manipulate data.

### Code

The Code panel that's available for Statement, Question and Integration interactions allows you to add scripts for the following options:

* Pre-Process Code
* Post-Process Code

This enables you to add JavaScript code that executes _before or after_ the interaction runs, which can be useful for any kind of build-up or tear-down that must take place.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/interactionDetails_code.png">

Use the built-in [scripting functions](conversation-builder-conversation-builder-scripting-functions.html) to access variables and manipulate data.
