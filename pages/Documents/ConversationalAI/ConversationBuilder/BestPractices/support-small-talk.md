---
pagename: Support Small Talk
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Best Practices
permalink: conversation-builder-best-practices-support-small-talk.html
indicator: both
---

### What’s small talk?

Small talk is chitchat. It includes the greetings, pleasantries, profanities and other trivial remarks that people make during conversation. Some examples of small talk include:

* Hi
* Bye
* How are you
* What’s your name
* Thank you

### Why support small talk?

When consumers converse with bots, they sometimes engage in small talk. Therefore, for the best conversational experience — one that feels Curiously Human™ to your consumers — a bot should recognize small talk and respond in kind.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/bp_smalltalk_example.png" alt="Conversation between bot and consumer that includes small talk">

### How Small Talk works

#### When the Small Talk feature is on

When the feature is on, the flow is as follows:

<img style="width:700px" src="img/ConvoBuilder/bp_smalltalk_flow_on.png" alt="Process flow that occurs when a consumer message is received, and Small Talk is turned on. Find full description at the bottom of this page.">

Behind the scenes, the system is set up to detect various consumer messages as small talk. Below are a few examples.

| Small Talk intent | Consumer messages |
| --- | --- |
| What is your name? | What’s your name<br>Tell me your name<br>What are you called<br>Etc. |
| What can you do? | Need some help<br>Can you help me with<br>What kind of info do u know<br>Etc. |
| Frustration | Not helpful<br>Thanks for nothing<br>Service sucks<br>Etc.

You can see all this in action here:

<img style="width:700px" src="img/ConvoBuilder/bp_smalltalk_example2.png" alt="Conversation between bot and consumer that includes small talk">

#### Answering questions with small talk

If the consumer responds to a Structured, Button, or Quick Reply question with small talk, and the response doesn’t match any of the conditions in the question’s rules or the question doesn’t have a [No Match rule](conversation-builder-interactions-configuration-next-action.html#conditions), the bot responds in kind and immediately resends the question:

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/bp_smalltalk_example3.png" alt="Conversation where bot responds to small talk and immediately resends question">

#### When the Small Talk feature is off

When the feature is off, the [normal fallback flow](conversation-builder-dialogs-fallback-dialogs.html) is followed.

<img style="width:700px" src="img/ConvoBuilder/bp_smalltalk_example4.png" alt="Conversation where bot doesn't respond to small talk and instead sends fallback response">

### Limitations

#### Language support

Currently, the Small Talk feature is only supported for English-language bots.

#### Bot export

When you [export a bot](conversation-builder-bots-bot-basics.html#export-a-bot) to a JSON file, the value (on or off) of the bot’s Small Talk setting is included in the export file. So this info is preserved.

However, any bot-level customizations (i.e., the bot’s responses to small talk and which individual types of small talk are supported by the bot) aren’t included in the export file. After you export the bot and import the JSON into a new bot, you must reapply those customizations.

#### Messages combining small talk and an intentful query

Sometimes, the consumer combines both small talk and an intentful query. Depending on the punctuation used, this can yield different outcomes in cases where there is no intent match. For example:

* “Hi. What’s the return policy?” = No intent matched and detected as two sentences. This triggers the Fallback dialog.
* “Hi, what’s your return policy?” = No intent matched and detected as one sentence. This triggers a bot response to the small talk. The Fallback dialog is never reached.

Keep this in mind, especially if your Fallback dialog contains a knowledge base integration or other important logic.

### Turning Small Talk on or off

#### Turn on Small Talk for a bot

This is essentially a 2-step process.

1. Turn on the feature for your account:
    1. [Access the Bot Accounts application](bot-accounts-overview.html#access-bot-accounts).
    2. Select the organization.
    3. On the **Account Details** page, turn on the **Small Talk** setting. Newer accounts have this turned on by default. But older accounts don’t, to avoid disrupting your current consumer experience.

    <img style="width:800px" src="img/ConvoBuilder/bp_smalltalk_accountsetting_off.png" alt="Turn on the Small Talk setting">

2. Turn on the feature in the bot:
    1. In Conversation Builder, open the bot.
    2. Click <img class="inlineimage" style="width:30px" src="img/ConvoBuilder/icon_ellipsisVertical.png" alt="Three-dot icon"> (More items) in the upper-left corner, just to the right of the menu bar. Then select **Bot Settings** from the menu.
    3. Scroll down to the **Small Talk** setting, and turn it on. Newer bots might have this turned on by default. But your older bots don’t, to avoid disrupting your current consumer experience.
    4. Click **Save**.

#### Turn off Small Talk for a single bot

* In Conversation Builder, in the bot’s **Bot Settings**, turn off the **Small Talk** setting.

#### Turn off Small Talk for all bots

* In Bot Accounts, turn off the **Small Talk** toggle.

{: .attn-note}
When Small Talk is off for your account, it’s off for all of your bots. This is regardless of how you’ve configured your bots.

When you turn off Small Talk at the account level, the value of a bot's **Small Talk** setting isn't changed. This is so you can turn things back on with a single click in Bot Accounts. However, the bot-level **Small Talk** settings are disabled, so you can’t use them (as this wouldn't make sense). A warning icon lets you know why they're disabled.

<img style="width:800px" src="img/ConvoBuilder/bp_smalltalk_disabledstg.png" alt="Disabled Small Talk settings within the bot. They're disabled when the feature is turned off at the account level.">

### Customizing the default behavior

Customizing the default behavior for Small Talk involves two, account-level steps:

* Customizing the bot responses to small talk per your brand’s voice
* Turning on or off support for individual types of small talk

All of your bots inherit and use this account-level configuration. But you can override it at the bot level if needed.

{: .attn-note}
Bot-level configuration takes precedence over the account-level configuration.

#### To customize the default behavior

1. [Access the Bot Accounts application](bot-accounts-overview.html#access-bot-accounts).
2. Select the organization.
3. On the **Account Details** page, locate the **Small Talk** setting, and click **Customize bot responses**.

    <img style="width:800px" src="img/ConvoBuilder/bp_smalltalk_customize1.png" alt="Access the dialog for customizing bot responses">

4. Customize the default behavior as you require:

    <img style="width:800px" src="img/ConvoBuilder/bp_smalltalk_customize2.png" alt="Customize bot responses">

5. Click **Save**.

### Making bot-level overrides

The Small Talk feature allows you to override the account-level behavior at the bot level. This flexibility lets you support various scenarios. For example, you might have a specialized bot that handles VIP consumers a bit differently.

{: .attn-note}
Bot-level configuration takes precedence over the account-level configuration.

#### To make bot-level overrides

1. In Conversation Builder, open the bot.
2. Click <img class="inlineimage" style="width:30px" src="img/ConvoBuilder/icon_ellipsisVertical.png" alt="Three-dot icons"> (More items) in the upper-left corner, just to the right of the menu bar. Then select **Bot Settings** from the menu.
3. Scroll down to the **Small Talk** setting, and click **Customize bot responses**.
4. Do either or both of the following:
    * Customize the bot responses to small talk per your brand’s voice.
    * Turn on or off support for individual types of small talk.
    
    {: .attn-note}
    This works just like it does at the account level.

5. Click **Save**.

### Best practices

#### Bot responses

When customizing the bot responses to different types of small talk, don’t include questions in the responses. This keeps their usage flexible and helps to ensure they work in many scenarios. What’s more, the goal is to return the consumer to their primary intent as quickly as possible, not to further engage in small talk.

### Reporting

Use the Intents view in Bot Analytics to see reporting on the matches of consumer messages to small talk. In the view, select “Small Talk” as the source in the upper-left corner.

<img style="width:800px" src="img/ConvoBuilder/bp_smalltalk_analytics.png" alt="Small Talk view in Bot Analytics. Match rate is always 100 percent. Number of unmatched phrases is always zero.">

Keep in mind the way the Small Talk feature works: If the consumer’s message contains both small talk and an intentful query, the small talk is regarded as inconsequential to the consumer. Only the intentful query is regarded as important and responded to in kind. So, in cases where the consumer *combines* small talk and an intentful query, the small talk isn’t recorded and represented in the data. Only the intentful query is recorded and reported as matched or unmatched.

### FAQs

#### What happens if the consumer’s message contains small talk and multiple, supported intentful statements?

This works as normal. Either the dialog flow for the strongest match begins. Or, if there are several good matches and [disambiguation](conversation-builder-dialogs-disambiguation-dialogs.html) is set up, the disambiguation flow begins. The system check for small talk never happens.

#### I’m getting what appear to be inconsistent results: Sometimes I’m getting a small talk response. Other times I’m getting an intent match. Why is this?

This is likely due to how dialog starters work in general and a classification issue with the intent in specific. In Intent Manager, use the Test User Input tool to check the exact phrases that you’re using (small talk plus intentful message). What are the match scores? Check it against the process flow diagram provided above.

#### Can I customize the consumer messages that are detected as small talk?

No, not at this time.

#### Can I add more types of small talk?

No, not at this time.

#### I’m not ready to support small talk yet. What should I do?

If you’re not ready to support small talk yet, there’s no action required by you. We’ve introduced this feature in our November 2022 release. All accounts that existed before this release remain unaffected: Small Talk is off at the account level, so it’s off for all of your bots too.

Newer accounts have the feature turned on at the account level by default. If you don’t want to support small talk, simply turn it off.

#### I’m ready to support small talk. What should I do?

Great! Supporting small talk is considered a best practice to offer a human-like experience with automation. 

If your account existed *before* the November 2022 release, to get started:

1. In Bot Accounts, manually turn on Small Talk for your account. (Once you do this, any new bots that you create will have it turned on at the bot level too.)
2. In Conversation Builder, create a new bot. 
3. Use the new bot to evaluate the default behavior.

If your account was created *after* the November 2022 release, to get started:

1. In Conversation Builder, create a new bot. By default, Small Talk is turned on for your account. And any new bot that you create has it turned on too. 
2. Use the new bot to evaluate the default behavior.

### Info for Accessibility users

#### Process flow for Small Talk

When the feature is on, the flow is as follows:

1. When a consumer message is received, check it for a match to a pattern or intent (with a match of GOOD or better) in a dialog starter in the bot or in the bot's group, if one exists.
    * If Yes, trigger the dialog flow.
    * If No, proceed to step 2.
2. Check the consumer's message for a match to small talk. 
    * If Yes, proceed to step 3.
    * If No, send the fallback response.
3. Check the consumer's message to see if it contains more than one sentence or if it's greater than 100 characters.
    * If Yes, send the fallback response because the small talk is inconsequential alongside the consumer's intentful message.
    * If No, send the bot's response to the small talk.