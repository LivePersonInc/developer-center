---
pagename: Configuration - Settings
redirect_from:
    - conversation-builder-conversation-builder-interaction-details.html
    - conversation-builder-interaction-details.html
    - conversation-builder-interactions-interaction-details.html
    - conversation-builder-interactions-details-settings.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversation Builder
permalink: conversation-builder-interactions-configuration-settings.html
indicator: both
---

The **Settings** dialog is where you can configure some key settings for an interaction.

### Access the Settings dialog

1. Select the interaction.
2. In the interaction's upper-right corner, click <img style="width:20px" src="img/ConvoBuilder/icon_ellipsisVertical_int.png"> (3-dot icon), and select **Settings**.

    <img style="width:600px" class="fancyimage" src="img/ConvoBuilder/interactions_settings1.png">

    This displays the Settings dialog.

    <img style="width:600px" class="fancyimage" src="img/ConvoBuilder/interactions_settings2.png">

### Settings

* **ID**: This is useful for debugging.
* **Interaction Name**: Change the name to something memorable and useful to reference in the Next Step selector.
* **Interaction Type**: Shows the interaction type. Be aware that it is possible to change the type from this drop-down list.
* **Interaction Delay**: Set the millisecond time delay before sending this message.

    {: .important}
    If you see messages out of order, add a 1000-2000 millisecond (1-2 second) delay. A 2-second delay is recommended to ensure a consistent message order.

* **Interaction Enabled**: Set this On/Off slider to Off to disable the interaction, i.e., to exclude it from being executed as a part of the dialog flow. The default value is On (Enabled).
* **Fallback Response**: Enter the text to be sent to the user if none of the defined conditions are met.

### Settings in Dialog Starter interactions

The following are additional settings in [Dialog Starter](conversation-builder-interactions-dialog-starter.html) interactions:

* **Patterns**: A pattern is a text string that is matched against user input in order to trigger a bot message. Enter the pattern against which to match the input. See [here](conversation-builder-interactions-interaction-basics.html#specify-patterns-in-interactions) for more information on pattern matching.
* **Exclude Keywords**: An "exclude keyword" is a text string that is matched against user input in order to *not* trigger a bot message.
* **Intent**: Intents are another way (in addition to patterns, above) for the bot to understand the user's meaning. Intents can be matched against user input in order to trigger a bot message. Select the intent against which to match the input.

### Settings in Multiple Choice questions

The following is an additional setting in Multiple Choice question interactions:

* **Enable Indentation**: Affects the display of options in text-only channels. Enable this to indent (with one tab space) the multiple choice options under the question. Disable this to align them under the question without an indent. 