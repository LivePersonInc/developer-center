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
subfoldername: Interactions
permalink: conversation-builder-interactions-configuration-settings.html
indicator: both
---

The **Interaction Settings** dialog is where you can configure some key settings for an interaction.

### Access the Interaction Settings dialog

1. Select the interaction.
2. In the interaction's upper-right corner, click <img style="width:25px" src="img/ConvoBuilder/icon_settings.png"> (Settings icon).

### Basic settings

Basic settings are those that are common to all interactions.

* **ID**: This is useful for debugging.
* **Interaction Name**: Change the name to something memorable and useful to reference in the Next Action selector.
* **Interaction Type**: Shows the interaction type. Be aware that it is possible to change the type from this drop-down list.
* **Interaction Delay**: Set the time delay in milliseconds before sending this message. You can specify a maximum value of 10000 milliseconds (10 seconds).

    {: .important}
    If you see messages out of order, add a 1000-2000 millisecond (1-2 second) delay. A 2-second delay is recommended to ensure a consistent message order.

* **Interaction Enabled**: Set this On/Off slider to Off to disable the interaction, i.e., to exclude it from being executed as a part of the dialog flow. The default value is On (Enabled).
* **Fallback Response**: Applicable to questions only. Enter the text to be sent to the user if none of the defined conditions are met.

### Advanced settings

If the interaction type has additional, interaction-specific settings, these are found on an **Advanced** tab. See the documentation on the given interaction type for details.