---
pagename: Articles
redirect_from:
    - knowledge-base-articles.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
subfoldername: LivePerson Knowledge Bases
permalink: knowledge-base-liveperson-knowledge-bases-articles.html
indicator: both
---

### Add an article

An article is a focused piece of content (a message) on a single topic that you want to serve to consumers.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/kb_articles.png">

**To add an article to a knowledge base**

1. Open the knowledge base, and click **Add New** in the upper-right corner.
2. Specify the following basic settings:
    * **Title**: Enter a complete sentence or question, e.g., "I can't remember my password." or, "Do we have a company org chart?" See farther below on this page for best practices.
    * **Intent Qualifiers**: This field is only shown if you're using [Knowledge Base intents](knowledge-base-liveperson-knowledge-bases-introduction.html#knowlege-base-intents-versus-domain-intents). Intent qualifiers are alternative ways that people ask for the article, i.e., alternative ways to communicate the same intent. See farther below on this page for best practices.
    * **Intent**: This field is only shown if the knowledge base is using [Domain intents](knowledge-base-liveperson-knowledge-bases-introduction.html#knowlege-base-intents-versus-domain-intents). Select the intent to associate with the article. See farther below on this page for best practices. If needed, you can use the **Create intent** option in the drop-down list to create the intent in Intent Builder from this location. Similarly, there's an **Update training phrases** link for updating the training phrases in Intent Builder from here.
    * **Summary**: Enter a short response or message to be sent to the user. You can include web links, although depending on the channel they might not display correctly. For SMS/Messaging, you might need to show the URL by itself, not wrapped in HTML, since the HTML will be sent as plain text over these channels.
    * **Detail**: This field can be used to include longer messages to the user. For messaging, it's recommended that you keep the responses as brief as possible.
    * **Category**: To assign the article to a category, enter the category name. This lets you subsequently filter and find articles based on category in the Knowledge Base application.
    * **Tags**: Tags are keywords, *not* sentences, that highlight the key noun(s) or word(s) in the title and intent qualifiers/training phrases. Tags can also be [entities](intent-builder-entities.html) that you've defined in a domain in Intent Builder. To increase the accuracy of Knowledge Base search results, add tags. For example, for an article about health insurance, the tags should be "health", “insurance”, “benefits”. These should be words, not sentences.

3. If desired, click **Advanced Settings**, and specify the following:
     * **Valid From** and **Valid To**: If desired, specify in [UTC](https://www.timeanddate.com/worldclock/timezone/utc) the dates and times during which the article is active. To specify a finite time period, use both date settings. To specify an open-ended date range, omit the **Valid To** date. To activate an article immediately after you add it, omit the **Valid From** date. These settings work with the **Enable Article** setting to determine if and when the article is active. For more on this, see [here](knowledge-base-liveperson-knowledge-bases-introduction.html#active-versus-inactive-articles).
    * **Content**: Use this field to send a *hyperlink*. Enter the URL here, and then configure the bot with the Knowledge Base integration accordingly. For help, see the next section.
    * **Audio**:  Use this field to send an *audio* file. Enter the URL here, and then configure the bot with the Knowledge Base integration accordingly. For help, see the next section.
    * **Image**: Use this field to send an *image*. Enter the URL here, and then configure the bot with the Knowledge Base integration accordingly. For help, see the next section.
    * **Video**: Use this field to send a *video*. Enter the URL here, and then configure the bot with the Knowledge Base integration accordingly. For help, see the next section.

4. Click **Save**.

    By default, the article is disabled, which means it isn't returned in knowledge base searches in Knowledge Base integrations. This is done to give you the opportunity to test the article before enabling it.

### Add content links

You can use the content links in the **Advanced Settings** of an article to send rich content (hyperlink, audio, image, and/or video) along with an article. 

<img class="fancyimage" style="width:450px" src="img/ConvoBuilder/kb_advSettings0.png">

Details on how to set this up follow below.

#### Configure the article

First, in the **Advanced Settings** of the article, enter the URLs to send **(1)**.

<img class="fancyimage" style="width:450px" src="img/ConvoBuilder/kb_advSettings1.png">

#### Configure the Knowledge Base integration in the bot

Next, open Conversation Builder and navigate to the [Knowledge Base integration](conversation-builder-integrations-knowledge-base-integrations.html) inside the bot that uses the knowledge base.

Verify that the appropriate knowledge base is selected **(2)**, and then add custom data fields for the content links that you're using **(3)**.

The "article" custom data field is added automatically when you add the Knowledge Base integration, but in this step you need to manually add additional custom data fields for the content links. For the values, specify the paths to the URL nodes in the JSON, like we've done in the image below.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/kb_advSettings2.png">

{: .important}
For the names of the JSON nodes for the content links, see the JSON reference farther below in this topic.

#### Configure the dialog in the bot

Next, still in Conversation Builder, build out the applicable dialog to make use of the additional content **(4)**, i.e., use the custom data fields as you require. (For help on displaying variables in interactions, see [here](conversation-builder-interactions-interaction-basics.html#display-variables-in-interactions).)

<img class="fancyimage" style="width:550px" src="img/ConvoBuilder/kb_advSettings3.png">
<img class="fancyimage" style="width:550px" src="img/ConvoBuilder/kb_advSettings3b.png">
<img class="fancyimage" style="width:550px" src="img/ConvoBuilder/kb_advSettings3c.png">

#### Preview the conversation

Use Conversation Builder's Preview tool or the Knowledge Base's Chat tool to preview the conversation and verify the content is returned and rendered as you expect.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/kb_advSettings5.png">

#### Useful techniques

Continuing our example, we've added some JavaScript so that, if there's a content link that is returned by the integration call, it is displayed. And if there isn't one, the conversation ends after the article is sent.

To accomplish this, in the Display Article interaction, we've configured the next action to be "End Interaction." Then, we've added some Post-Process code to that same interaction. The code (shown below) checks whether the content link (URL) exists, and, if it does, it changes the interaction's next action to be the following interaction.

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/kb_advSettings6.png">

### Enable or disable an article

Enabled articles are returned by knowledge base searches in Knowledge Base integrations, while disabled articles are not. That said, keep in mind that an enabled article is returned only if the article is [active](knowledge-base-liveperson-knowledge-bases-introduction.html#active-versus-inactive-articles), i.e., if the current date and time in UTC falls within the time period specified by the article's **Valid From** and/or **Valid To** dates, if specified.

**To enable or disable an article**

1. Open the knowledge base, and display the article.
2. Scroll down, and click **Advanced Settings**.
3. In the **Enable Article** setting, do either of the following:

    * Turn on (enable) the setting to enable the article.
    * Turn off (disable) the setting to disable the article.

### Chat with a bot linked to a knowledge base

If you have a bot linked to your knowledge base via a [Knowledge Base integration](conversation-builder-integrations-knowledge-base-integrations.html), in the Knowledge Base application, you can feed test user input to the bot to see if it matches, returns and renders content as you'd expect.

{: .important}
If you're just getting started with knowledge bases and want to try using this tool, we recommend you create a bot using the [Simple FAQ bot template](conversation-builder-bot-templates-simple-faq.html) and connect it to your knowledge base. Most of the bot development work is already done. You only need to update the integration in the bot so that it uses your knowledge base, as shown in the image below.

   <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/kb_chat3.png">

### Find articles with a specific tag

1. Open the knowledge base.
2. In the upper-right corner, click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png">, and select **Tags**.
3. In the Tags panel, select the tag to highlight it. You can repeat this step as needed if you're looking for articles assigned to multiple tags.
    
    The result list is updated to include only the articles with the selected tags.
    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/kb_findWithTag.png">

### Find articles with a specific category

1. Open the knowledge base.
2. In the upper-right corner, click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png">, and select **Categories**.
3. In the Categories panel, select the category to highlight it. You can repeat this step as needed if you're looking for articles assigned to multiple categories.
    
    The result list is updated to include only the articles assigned to the selected categories.
    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/kb_findInCategory.png">

### JSON reference

The following table identifies the JSON node for article information that's often needed when you're integrating the knowledge base with a bot.

If you're looking for the name of a node not listed here, you can use the Knowledge Base's [Debugger tool](knowledge-base-common-common-tasks.html#test-user-input) to identify it; the tool displays the JSON that's returned by an article search.

| Name of UI field | Name of JSON node |
|-----|-----|
| Title | title |
| Summary | summary |
| Detail | detail |
| Content Links > Content | contentURL |
| Content Links > Image | imageURL |
| Content Links > Video | videoURL |
| Content Links > Audio | audioURL |
