---
pagename: Details - Settings
redirect_from:
    - conversation-builder-conversation-builder-interaction-details.html
    - conversation-builder-interaction-details.html
    - conversation-builder-interactions-interaction-details.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversation Builder
permalink: conversation-builder-interactions-details-settings.html
indicator: both
---

The **Settings** tab in the **Interaction Details** widget is where you configure some key settings for the interaction.

### Access the Settings tab

1. Select the interaction to configure, and click the <img style="width:25px" src="img/ConvoBuilder/icon_interactionDetails.png"> icon (Interaction Details) that's displayed to its right.

    <img style="width:600px" class="fancyimage" src="img/ConvoBuilder/interactions_detailsSettings1.png">
2. Click the **Settings** tab.

    <img style="width:400px" class="fancyimage" src="img/ConvoBuilder/interactions_detailsSettings2.png">

### Settings

* **ID**: This is useful for debugging.
* **Interaction Name**: Change the name to something memorable and useful to reference in the Next Step selector.
* **Interaction Type**: Shows the interaction type. Be aware that it is possible to change the type from this drop-down list.
* **Interaction Delay**: Set the millisecond time delay before sending this message.

    {: .important}
    If you see messages out of order, add a 1000-2000 millisecond (1-2 second) delay. A 2-second delay is recommended to ensure a consistent message order.

* **Interaction Enabled**: Set this On/Off slider to Off to disable the interaction, i.e., to exclude it from being executed as a part of the dialog flow. The default value is On (Enabled).

### Settings in User Says interactions

The following are additional settings in [User Says](conversation-builder-interactions-user-says.html) interactions:

* **Patterns**: A pattern is a text string that is matched against user input in order to trigger a bot message. Enter the pattern against which to match the input. See [here](conversation-builder-interactions-interaction-basics.html#specify-patterns-in-interactions) for more information on pattern matching.
* **Exclude Keywords**: An "exclude keyword" is a text string that is matched against user input in order to *not* trigger a bot message.
* **Intent**: Intents are another way (in addition to patterns, above) for the bot to understand the user's meaning. Intents can be matched against user input in order to trigger a bot message. Select the intent against which to match the input.

### Settings in Multiple Choice questions

The following is an additional setting in Multiple Choice question interactions:

* **Enable Indentation**: Affects the display of options in text-only channels. Enable this to indent (with one tab space) the multiple choice options under the question. Disable this to align them under the question without an indent. 