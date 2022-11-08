---
pagename: Custom Bots
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Bots
permalink: conversation-builder-bots-custom-bots.html
indicator: both
---

### Introduction
A custom bot is one that you create largely from scratch.

However, LivePerson does offer a set of predefined, industry-specific bot templates too. These can enable rapid adoption of automation. You can find more info on available bot templates in [this section](conversation-builder-bot-templates-overview.html).

### Create a custom bot

{: .attn-note}
LivePerson recommends that before you create a bot, you set up the [domains](intent-manager-key-terms-concepts.html#domains), [intents](intent-manager-key-terms-concepts.html#intents), and [entities](intent-manager-key-terms-concepts.html#entities) that the bot will need. This makes creation of the bot much faster and easier because the [Assist tool](conversation-builder-assist.html) can use that information along the way to suggest suitable intents and entities to use.

**To create a custom bot**
1. [Access Conversation Builder](conversation-builder-overview.html#access-conversation-builder).
2. On the **Bots** page, click **New Bot** in the upper-right corner.
3. In the window that appears, select the **Custom Bot** template.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/bot_custom_add.png" alt="The right-facing arrow to click to create a custom bot">

    The Custom Bot template uses English and includes just a Welcome dialog and a Fallback dialog (see [Dialog Types](conversation-builder-dialogs-dialog-basics.html#dialog-types)), so it’s ideal if you want to start from scratch.

4. In the next window that appears, specify the following:

    * **Name**: Enter a name that’s concise and clear. Make sure abbreviations can be understood, and consider adding a prefix or suffix to indicate the environment (Dev, Prod, etc.) or language (En, Sp, Fr, etc.) if applicable.
    * **Description**: Enter a description that’s meaningful to you and others. Consider including language that identifies the bot's goal and key behaviors.
    * **Bot Language**: This setting identifies the language that the bot will use to respond. Select the language based on how you'll train the bot: If you will use an intent domain, you must select the language of the domain that will be associated with the bot. For example, if the intent domain uses English, select "English" here. If these languages don't match, errors during NLU processing will occur. Alternatively, if the bot will use only pattern matching, you can select or enter any language.
    * **Bot Group**: Optionally select the [bot group](conversation-builder-bots-bot-groups.html) for the bot. A bot can be a member of exactly one group.

5. Click **Create Bot**.
5. Build out the bot, completing and adding the necessary [dialogs](conversation-builder-dialogs-dialog-basics.html) and [interactions](conversation-builder-interactions-interaction-basics.html). As you work, test the bot using the [Preview tool](conversation-builder-testing-deployment-previewing.html).
6. [Save versions](conversation-builder-versions-releases.html#save-a-version) of the bot at important points in its development. This allows you to restore a version if you need.
7. [Train and tune](conversation-builder-best-practices-train-tune-nlu.html) things as you do more testing.
8. [Save a version](conversation-builder-versions-releases.html#save-a-version) of the final “Development” bot.

    See [this Development-to-Production release workflow](conversation-builder-versions-releases.html).