---
pagename: Articles
redirect_from:
    - knowledge-base-articles.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
subfoldername: Internal Knowledge Bases
permalink: knowledge-base-internal-knowledge-bases-articles.html
indicator: both
---

### Add an article

An article is a focused piece of content (a message) on a single topic that you want to serve to consumers.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/kb_articles.png">

**To add an article to an internal knowledge base**

1. Open the knowledge base, and (on the Articles page) click **Add New** in the upper-right corner.
2. Specify the following basic settings:
    * **Title**: Enter a complete sentence or question, e.g., "I can't remember my password." or, "Do we have a company org chart?" See farther below on this page for best practices.
    * **Intent Qualifiers**: This field is only shown if you're using [Knowledge Base intents](knowledge-base-internal-knowledge-bases-introduction.html#domain-intents-versus-knowledge-base-intents). Intent qualifiers are alternative ways that people ask for the article, i.e., alternative ways to communicate the same intent. See farther below on this page for best practices. **Note**: An intent qualifier can't be used more than once, i.e., in more than one article.
    * **Intent**: This field is only shown if the knowledge base is using [Domain intents](knowledge-base-internal-knowledge-bases-introduction.html#domain-intents-versus-knowledge-base-intents). Select the intent to associate with the article. See farther below on this page for best practices. If needed, you can use the **Create intent** option in the drop-down list to create the intent in Intent Builder from this location. Similarly, there's an **Update training phrases** link for updating the training phrases in Intent Builder from here. **Note**: An intent can't be used more than once, i.e., in more than one article.
    * **Summary**: Enter a short response or message to be sent to the user. You can include web links, although depending on the channel they might not display correctly. For SMS/Messaging, you might need to show the URL by itself, not wrapped in HTML, since the HTML will be sent as plain text over these channels. For details on the subset of HTML that can be used in this field, see [here](knowledge-base-common-settings-tasks.html#format-text-in-an-article).
    * **Detail**: This field can be used to include longer messages to the user. For messaging, it's recommended that you keep the responses as brief as possible. For details on the subset of HTML that can be used in this field, see [here](knowledge-base-common-settings-tasks.html#format-text-in-an-article).
    * **Category**: To assign the article to a category, enter the category name. This lets you subsequently filter and find articles based on category in the Knowledge Base application.
    * **Tags**: Tags are keywords, *not* sentences, that highlight the key noun(s) or word(s) in the title and intent qualifiers/training phrases. Tags can also be [entities](intent-builder-entities.html) that you've defined in a domain in Intent Builder. To increase the accuracy of Knowledge Base search results, add tags. For example, for an article about health insurance, the tags should be "health", “insurance”, “benefits”. These should be words, not sentences.

3. If desired, click **Advanced Settings**, and specify the following:
     * **Valid From** and **Valid To**: If desired, specify in [UTC](https://www.timeanddate.com/worldclock/timezone/utc) the dates and times during which the article is active. To specify a finite time period, use both date settings. To specify an open-ended date range, omit the **Valid To** date. To activate an article immediately after you add it, omit the **Valid From** date. These settings work with the **Enable Article** setting to determine if and when the article is active. For more on this, see [here](knowledge-base-internal-knowledge-bases-introduction.html#active-versus-inactive-articles).
    * **Content**: Use this field to send a *hyperlink*. Enter the URL here, and then configure the bot with the Knowledge Base integration accordingly. For help, see the next section.
    * **Audio**:  Use this field to send an *audio* file. Enter the URL here, and then configure the bot with the Knowledge Base integration accordingly. For help, see the next section.
    * **Image**: Use this field to send an *image*. Enter the URL here, and then configure the bot with the Knowledge Base integration accordingly. For help, see the next section.
    * **Video**: Use this field to send a *video*. Enter the URL here, and then configure the bot with the Knowledge Base integration accordingly. For help, see the next section.

4. Click **Save**.

    By default, the article is disabled, which means it isn't returned in knowledge base searches in Knowledge Base integrations. This is done to give you the opportunity to test the article before enabling it.

### Add content links

You can use the content links in the **Advanced Settings** of an article to send rich content (hyperlink, audio, image, and/or video) along with an article. 

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/kb_advSettings0.png">

Details on how to set this up follow below.

#### Configure the article

First, in the **Advanced Settings** of the article, enter the URLs to send **(1)**.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/kb_advSettings1.png">

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

Use Conversation Builder's Preview tool to preview the conversation and verify the content is returned and rendered as you expect.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/kb_advSettings5.png">

#### Useful techniques

Continuing our example, we've added some JavaScript so that, if there's a content link that is returned by the integration call, it is displayed. And if there isn't one, the conversation ends after the article is sent.

To accomplish this, in the Display Article interaction, we've configured the next action to be "End Interaction." Then, we've added some Post-Process code to that same interaction. The code (shown below) checks whether the content link (URL) exists, and, if it does, it changes the interaction's next action to be the following interaction.

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/kb_advSettings6.png">

### Enable or disable an article

Enabled articles are returned by knowledge base searches in Knowledge Base integrations, while disabled articles are not. That said, keep in mind that an enabled article is returned only if the article is [active](knowledge-base-internal-knowledge-bases-introduction.html#active-versus-inactive-articles), i.e., if the current date and time in UTC falls within the time period specified by the article's **Valid From** and/or **Valid To** dates, if specified.

**To enable or disable an article**

1. Open the knowledge base, find the article, and click its title.
2. In the Edit Article window, scroll down to **Enable Article**.
3. Do either of the following:

    * Turn on (enable) the setting to enable the article.
    * Turn off (disable) the setting to disable the article.

### Using entities in a knowledge base

[Entities](intent-builder-entities.html) are keywords that refer to a number of synonyms. For example, the entity `SPORTS` might have a number of synonyms, like walking, running, football, jogging, baseball, etc. When creating intent qualifiers and tags for your articles, you can leverage the power of entities as well.

Leveraging entities within a knowledge base provides the same benefits that doing so affords you elsewhere: They are a great way to make intents even broader, allowing the NLU to associate a group of words (like similar products, different misspellings of common words, and so on) with an entity instead of pattern matching to every single item in the group.

#### Create the domain

1. Navigate to Intent Builder.
2. Click **New domain** in the upper-right corner.
3. Enter a name for the domain, e.g., "Tutorial Domain."
4. Click **Add Domain**.

#### Create the entity

1. Inside the domain you just created, click **Entities** in the upper-left corner.
2. In the Add Entity panel, specify the following:
    * **Entity name**: Enter "CREDENTIALS."
    * **Entity type**: Select "Value Set," which is the default.
    * **Entity values**: Add the values below:
        * `log in`
        * `login`
        * `pass word`
        * `password`
        * `user name`
        * `username`
        * `pin`
3. Click **Save**.

#### Connect the domain to the knowledge base

If you're using [Knowledge Base intents](knowledge-base-internal-knowledge-bases-introduction.html#domain-intents-versus-knowledge-base-intents) instead of Domain intents (like we show in our example below), to use entities within a knowledge base, you'll need to connect the domain to the knowledge base.

1. Exit Intent Builder, and return to Knowledge Base.
2. Open the knowledge base.
3. Click **Settings** in the upper-left corner.
4. Scroll down, and click **More Options**.
5. In the **Associated Domain for Entity** field, select the name of the domain you just created.
6. Click **Update**.

#### Use the entities in the knowledge base

In your articles, replace any word where you want the "CREDENTIALS" entity to be substituted in, *including* the tags. This might make some intent qualifiers and tags redundant, which means you can (and should) delete them.

Assume we have a knowledge base using [Knowledge Base intents](knowledge-base-internal-knowledge-bases-introduction.html#domain-intents-versus-knowledge-base-intents) and an existing article with the following content:

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/kb_entities_1.png">

Our article when taking advantage of entities would result in the following:

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/kb_entities_2.png">

Note that we are able to reduce the number of intent qualifiers and tags while actually improving the success rate of our queries, as the "CREDENTIALS" entity will consider all of the entity values that were defined earlier.

{: .important}
You don't need to enter entities using all capital letters like we've done above, but it does help you to identify the words that are entities.

Now, when someone says an utterance that includes any of the entity synonyms, they should match. Try entering, "My pin doesn't work." This should return with a score of GOOD.

{: .important}
The entity values are cached, so if you add a number of entities but they aren't matching your articles right away, wait a minute or two. The cache should update.

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

| Name of UI field | Name of JSON node |
|-----|-----|
| Title | title |
| Summary | summary |
| Detail | detail |
| Content Links > Content | contentURL |
| Content Links > Image | imageURL |
| Content Links > Video | videoURL |
| Content Links > Audio | audioURL |
