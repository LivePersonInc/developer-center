---
pagename: Interaction Basics
redirect_from:
  - conversation-builder-conversation-builder-interactions.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Interactions
permalink: conversation-builder-interactions-interaction-basics.html
indicator: both
---

### Interaction categories
There are four, general categories of interactions: 

- **Dialog Starter**: Dialog Starter interactions are how dialogs are initially triggered, so most dialogs start with a Dialog Starter interaction (fallback dialogs work differently). The user starts things off by supplying some user input - a message or a question. In response, the bot tries to match the user input with a pattern or intent that’s specified in a dialog starter in one of its dialogs. If a match is found, that dialog is triggered, and its flow begins. For more on dialog starters, see [here](conversation-builder-interactions-dialog-starter.html).

- **Statements**: Statements simply display information and then execute the next action. They don’t expect or wait for a user response. For more on statements, see [here](conversation-builder-interactions-statements.html). 

- **Questions**: Questions present information to the user (a text-based question, a list of things to pick from, etc.), and they expect and wait for a user response before executing the next action. In a question interaction, you can define conditions that evaluate the user’s response against a set of criteria. If a condition is met, its next action is then performed. For example, if the user enters a valid email address, then an email could be sent. For more on questions, see [here](conversation-builder-interactions-questions.html).

- **Integrations**: Integrations make programmatic (API) calls to retrieve or post data to external systems and/or to perform actions. Integrations simply perform their work and then execute the next action. However, if the integration retrieves data, that data can be stored in custom fields, so you can use it in subsequent interactions. Integrations are similar to questions in that you can define conditions that each perform different next actions (based on which condition is met). Common uses for this include checking whether the integration call was a success or failure, having a condition triggered by the value of an API response, and having these events direct the flow of the conversation in a desired manner. For more on integrations, see [here](conversation-builder-interactions-integrations.html).

### General guidelines and best practices
One of the goals and challenges in developing interactions is creating a unified implementation and consumer experience across channels. When working with structured content in particular, LivePerson recommends that you find the "common denominator" across mobile messaging, web messaging, and Facebook Messenger with respect to a given element's attributes. For example, in a structured question, Conversational Cloud allows up to 128 characters for the button label, but Facebook does not allow more than 20 characters. Depending on your implementation, constraints like this might play a role.

*For details on constraints like this*, see the best practices information that's found [here](https://developers.liveperson.com/facebook-messenger-templates-best-practices.html) in the Rich Messaging section of this LivePerson developers' site, and refer to the [Messaging channels](https://knowledge.liveperson.com/messaging-channels-messaging-connectors-overview.html) section in the LivePerson Knowledge Center.

{: .important}
Your bot implementation should meet Conversational Cloud requirements and those of the specific channels in use.

For information on which interactions are supported in which channels, see [here](conversation-builder-interactions-interaction-support.html).

### Whitelisting

For information on whitelisting rich media, see [here](conversation-builder-networking-security.html#whitelisting-rich-media).

### URL shortening

If you have lengthy web links, you might want to enable the shortening of URLs. You can enable this at the bot level using the **Shorten URLs** setting in the bot's [Bot Settings](conversation-builder-bots-bot-basics.html#configure-bot-settings).

As an example, if you enable URL shortening, a URL like this...

http://www.myexample.com/folder1/folder2/veryverylongstringhere.html

...is shortened to this:

http://{abbreviated domain}/{unique code}

If you enable URL shortening, it's applied to *all* URLs (for websites, images, etc.) in all types of interactions. There is one exception: If shortening is enabled, but the URL contains only the domain (e.g., http://www.mysite.com), the URL isn't shortened.

If you enable URL shortening, the shortened domain must be whitelisted; for more information, see [here](conversation-builder-networking-security.html#whitelisting-rich-media).

### Images

As long as the image is whitelisted (discussed above), it will be sent to the consumer. Provide high-resolution images in the appropriate format: JPEG for photos, PNG for bitmap/raster artwork. Make sure the images are interesting and aesthetically pleasing, and verify their quality before use. Keep the images as small in size as possible, so they load quickly.

The Apple developers' site provides some good, general guidelines regarding resolution, size, optimization, and more; you can find this [here](https://developer.apple.com/design/human-interface-guidelines/business-chat/interactive-messages/about-interactive-messages/#images).

### Add an interaction

{: .important}
When selecting an interaction to add, make sure it's supported by the channel you will be using. For a listing of which channels support which interactions, see [here](conversation-builder-interactions-interaction-support.html).

**To add a new interaction to the end of the dialog**

- Click **New Interaction**, which appears below the last interaction, and then select the interaction icon from the toolbar that appears. Alternatively, select the last interaction, and then select the interaction on the interactions toolbar on the right.

    Either method adds the interaction as the last unless you added a Dialog Starter interaction, which is always inserted at the start of the dialog.

**To add a new interaction between two interactions**

- Select the interaction that should precede the one you want to add (to highlight it), and then select the interaction on the interactions toolbar.

    This inserts the interaction after the one you selected unless you inserted a Dialog Starter interaction, which is always inserted at the start of the dialog.

### Name an interaction

If you name your interactions **(1)**, it's easier to see and understand a dialog's flow **(2)**.

<img style="width:800px" class="fancyimage" src="img/ConvoBuilder/interactionName1.png">

* To name an interaction, replace the text in the upper-left corner of the interaction tile.

    <img style="width:600px" class="fancyimage" src="img/ConvoBuilder/interactionName2.png">

The name must be unique with respect to all interactions in the bot.

### Specify patterns in interactions

Patterns are combinations of keywords, wildcards and alternates that are compared to user input. *A user input is considered a match to a pattern if it fits the pattern exactly*. Therefore, a pattern of "hello" will only match with the user input "hello". 

Patterns can use alternates for specific variations. For example, `I want a pair of (headphones|head phones|earbuds|earphones)` will match "I want a pair of headphones", "I want a pair of earphones", etc. 

Patterns can also include wildcards for looser matches. For example, `*home*` will match "homes", "home run", and "home is where the heart is".

The basic operators available for use with pattern matching are:

* Asterisk - Also known as a "wildcard;" matches any character
* Pipe - Denotes alternates
* Parentheses - Enclose a group of alternates

You can use wildcards and alternates together like this:

* `* (some|a pair of) (headphones|earbuds)*`
* `(thank(|s)|thank you)*`
* `*headphones*`

When the bot detects a match to a defined pattern, the dialog starter configured with that pattern is triggered, and the conversation begins. If the pattern is configured for user input in the middle of the conversation (like an answer to a question), the appropriate response is triggered.

#### Popular patterns

When you're specifying a pattern in a [dialog starter](conversation-builder-interactions-dialog-starter.html) or in a [condition](conversation-builder-interactions-configuration-next-action.html#conditions) in a custom rule, you'll see a library that's available.

<img style="width:500px" class="fancyimage" src="img/ConvoBuilder/interactions_pattern_library_1.png">

The library contains a list of popular patterns. Click **Add** to append a set of patterns to the current list.

<img style="width:800px" class="fancyimage" src="img/ConvoBuilder/interactions_pattern_library_2.png">

#### Advanced patterns with Regular Expressions

If you need more advanced operators, you can use [regular expressions](http://www.regexlib.com) with pattern matching.

<img style="width:500px" class="fancyimage" src="img/ConvoBuilder/regex_hint.png">

When defining a [condition](conversation-builder-interactions-configuration-next-action.html#conditions) using a regular expression, click **Hint** to view and quickly copy commonly used regular expressions.

<img style="width:800px" class="fancyimage" src="img/ConvoBuilder/regex_hint_2.png">

### Use variables and slots in interactions
For information on this, see [here](conversation-builder-variables-slots.html#using-variables-and-slots-in-interactions).

### Format text
#### Types of text

The types of text that you can send in a Conversation Builder interaction vary depending on whether you're building a bot for **Chat** or for **Messaging**.

**Messaging** only allows plain text to be sent. 

**Chat** allows for plain text and a subset of HTML limited to the paragraph, linebreak and anchor tags:

* `<p></p>`
* `<br>`
* `<a href=""></a>`

Examples of valid anchor tags:

* `<a href="http://example.com/test.jpg">`
* `<a href="http://example.com/1$2324%342523">`
* `<a href="{$botcontext.host}/test.jpg">`
* `<a href="http://example.com/{$botcontext.fileName}">`
* `<a href="{$botcontext.link}”>`

Examples of invalid anchor tags:

* `<a href="javascript: alert(’test’)">`
* `<a href="http://example.com/test.jpg" onmouseover="alert('test')”>`
* `<a onmouseover="alert('test')" href="http://example.com/test.jpg">`

#### Line Breaks
CTRL+ENTER - Hold control and hit enter/return.

{: .important}
This does not render when using the the Preview tool inside Conversation Builder. You will not see line breaks in the preview tool.

#### Character limit

One single text interaction has a limit of 320 characters on the word boundary before it gets split into 2 parts. However, you can override this behavior with the [setAllowMaxTextResponse](conversation-builder-scripting-functions-manage-conversation-flow.html#set-allow-max-text-response) scripting function.

#### Break point within a large block of text

Add the following special tag inline inside your text interaction to force a break into 2 separate blocks of text:

    `tag::breakWithDelay=1000`

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/interactions_breakPoint1.png">

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/interactions_breakPoint2.png">

{: .important}
The delay value is in milliseconds. 1000 = 1 second.

### Save changes
Some but not all changes are automatically saved after you make them. As a general rule, always do a manual save after making changes.

**To save changes to an interaction**

1. Select the interaction.
2. Click the <img style="width:25px" src="img/ConvoBuilder/icon_save_int.png"> (Save) icon in the upper-right corner.

### Move an interaction
You can move any type of interaction except a Dialog Starter interaction. Dialog Starter interactions always stay at the start of dialogs.

**To move an interaction within a dialog**

1. Select the interaction.
2. In the upper center of the interaction, click <img style="width:30px" src="img/ConvoBuilder/icon_moveInteraction.png"> (Move icon).
3. While holding down the Move icon, drag the interaction to the desired location, and then drop it.

**To move an interaction to a new dialog**

1. Select the interaction.
2. Click <img style="width:20px" src="img/ConvoBuilder/icon_ellipsisVertical_int.png"> in its upper-right corner, and click **Move**.
3. In the Move Interaction dialog box, select the destination dialog:

    * Selecting the current dialog moves the interaction to its end.
    * Selecting a different dialog moves it to the end of that dialog.

### Duplicate an interaction
You can duplicate any type of interaction except a Dialog Starter interaction. A dialog can only have one Dialog Starter interaction.

**To duplicate an interaction**

1. Select the interaction.
2. Click <img style="width:20px" src="img/ConvoBuilder/icon_ellipsisVertical_int.png"> in its upper-right corner, and click **Duplicate**. The copy is added directly beneath the original. (You can move it if desired.) The copy is given the same name as the original but with “_copy” appended.
3. Change the name of the copy as appropriate.

### Disable an interaction
A disabled interaction is ignored in a dialog flow. Consider disabling an interaction as an alternative to deleting it (deletion is non-recoverable). Disabling can be particularly useful during testing, for example, when testing two different variants of an interaction.

**To disable an interaction**

1. Select the interaction, click the <img style="width:25px" src="img/ConvoBuilder/icon_settings.png"> (Settings) icon in its upper-right corner.
2. On the Basic tab, click the **Interaction Enabled** slider to turn it to the off position.

### Delete an interaction
Deleting an interaction is a non-recoverable action, so consider disabling the interaction as an alternative.

{: .important}
After you delete an interaction, verify that the interaction flow isn't broken as a result. You might need to modify the Next Action field in the remaining interactions so that the conversation flow works as expected.

**To delete an interaction**

1. Select the interaction.
2. Click <img style="width:20px" src="img/ConvoBuilder/icon_ellipsisVertical_int.png"> in its upper-right corner, and click **Delete**.
3. Click **Continue** to confirm the deletion.

### Troubleshooting

For troubleshooting help when working with interactions, see [here](conversation-builder-interactions-troubleshooting.html).