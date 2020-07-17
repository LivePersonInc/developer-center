---
pagename: Articles
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
permalink: knowledge-base-articles.html
indicator: both
---

### Add an article

An article is a focused piece of content (a message) on a single topic that you want to serve to consumers.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/kb_articles.png">

**To add an article to a knowledge base**

1. Open the knowledge base, and click **Add New** in the upper-right corner.
2. Specify the following basic settings:
    * **Title**: Enter a complete sentence or question, e.g., "I can't remember my password." or, "Do we have a company org chart?" See farther below on this page for best practices.
    * **Intent Qualifiers**: This field is only shown if you're using [Knowledge Base intents](knowledge-base-overview.html#knowlege-base-intents-versus-domain-intents). Intent qualifiers are alternative ways that people ask for the article, i.e., alternative ways to communicate the same intent. See farther below on this page for best practices.
    * **Intent**: This field is only shown if the knowledge base is using [Domain intents](knowledge-base-overview.html#knowlege-base-intents-versus-domain-intents). Select the intent to associate with the article. See farther below on this page for best practices. If needed, you can use the **Create intent** option in the drop-down list to create the intent in Intent Builder from this location. Similarly, there's an **Update training phrases** link for updating the training phrases in Intent Builder from here.
    * **Summary**: Enter a short response or message to be sent to the user. You can include web links, although depending on the channel they might not display correctly. For SMS/Messaging, you might need to show the URL by itself, not wrapped in HTML, since the HTML will be sent as plain text over these channels.
    * **Detail**: This field can be used to include longer messages to the user. For messaging, it's recommended that you keep the responses as brief as possible.
    * **Category**: To assign the article to a category, enter the category name. This lets you subsequently filter and find articles based on category in the Knowledge Base application.
    * **Tags**: Tags are keywords, *not* sentences, that highlight the key noun(s) or word(s) in the title and intent qualifiers/training phrases. Tags can also be [entities](intent-builder-entities.html) that you've defined in a domain in Intent Builder. To increase the accuracy of Knowledge Base search results, add tags. For example, for an article about health insurance, the tags should be "health", “insurance”, “benefits”. These should be words, not sentences.

3. If desired, click **Advanced Settings**, and specify the following:

    * **Content**: Use this field to send a *hyperlink*. Enter the URL here, and then configure the bot with the Knowledge Base integration accordingly. For help, see the next section.
    * **Audio**:  Use this field to send an *audio* file. Enter the URL here, and then configure the bot with the Knowledge Base integration accordingly. For help, see the next section.
    * **Image**: Use this field to send an *image*. Enter the URL here, and then configure the bot with the Knowledge Base integration accordingly. For help, see the next section.
    * **Video**: Use this field to send a *video*. Enter the URL here, and then configure the bot with the Knowledge Base integration accordingly. For help, see the next section.

4. Click **Save**.

{: .important}
When you add an article manually, it is disabled by default. This means it won't be returned by knowledge base searches in Knowledge Base integrations. To have this happen, you must enable the article, which is described farther below on this page. 

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

Enabled articles are returned by knowledge base searches in Knowledge Base integrations, while disabled articles are not. In the Knowledge Base application, disabled articles are indentified by a "Pending" indicator.

<img class="fancyimage" style="width:450px" src="img/ConvoBuilder/kb_articleDisabled.png">

You can enable or disable an article as you need, respectively, to add it or remove it from use in Knowledge Base integrations.

**To enable an article**

1. Open the knowledge base, and display the article.
2. Click **Enable**.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/kb_articleEnable.png">

**To disable an article**

1. Open the knowledge base, and display the article.
2. Click **Disable**.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/kb_articleDisable.png">


### Train a knowledge base

To train a knowledge base, select the knowledge base, enter an utterance, and review the results. If you don't get any results for a particular utterance, you can adjust the filters by tapping the advanced search icon.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/kb_test.png">

By default, the Search Settings are set to **Intents** and **Fair Plus**. This means that the algorithm will first see if there are any matches using our NLU, with a threshold of Fair Plus. However, if it doesn’t find any, it will attempt a text search as well. Because of this, you might see a message like "No intent matched. Performed text search. 3 results found." This means you should add some more training phrases to an article to improve your results.

If you don’t want the follow-up text search, you can change the Search Settings to "Intents Only" which will ONLY perform the intents search.

If you ONLY want to perform the text search, you can set the Settings to "All".

To add more training phrases (or intent qualifiers), you can manually add them to your article.

<img class="fancyimage" style="width:700px" src="img/qualifiers.png">

You can also use the Thumb Up and Down icons displayed in a search. Below is an example where the utterance returned some results. The preferred result was only a FAIR PLUS match. By tapping the **Thumbs Up** icon, you automatically add the current utterance to a Positive Learning set for this article. Tapping **Thumbs Down** does the opposite.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/kb_test_thumbsUp.png">

If you were to rerun the search, the article would return with a higher score.

If you look at the article details, in the **Advanced Settings**, you can see that the utterance has been added.

#### Beware of overtraining

Something to keep in mind when training in general, and using the Thumbs Up/Down icons specifically, is that because they are so easy to use, they are often misused. Often people use Thumbs Up for extremely specific or lengthy utterances that, although said by an end user, are not great training phrases because they would never match another user’s utterance. Over time, the addition of these utterances (often 50+ added) skew the results in a negative way. The same is true when using Thumbs Down. Anything over about 10 - 15 training phrases might begin to return false positives.

### Test user input

Use the Debugger tool to feed user input directly into a knowledge base to test the NLU processing and content matching.

The Debugger tool works exactly like a [Knowledge Base integration](conversation-builder-integrations-knowledge-base-integrations.html) in a bot. So, if your search selections in the tool match how you've configured the bot, the results you see with the tool will be the same as those returned in a bot conversation. If you don't yet have a bot integrated with your knowledge base, the Debugger tool is also a way to test how the bot will behave once it is.

The Debugger tool is also *the* way to see the JSON that's returned by the search.

**To test user input**

1. Open the knowledge base.
2. In the upper-right corner, click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png">, and select **Test User Input**.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/kb_testUserInput1.png">

3. Specify the following:

    * **Phrase**: Enter the phrase to search for.
    * **Search Modes**: Select either Intents, Intents Only, or All. For a description of each mode, see [here](knowledge-base-overview.html#search-modes).
    * **Threshold**: Select the minimum score that a result must have in order to be returned, either VERY GOOD, GOOD, or FAIR PLUS. For more on thresholds, see [here](knowledge-base-overview.html#thresholds).

4. Click **test**.

    In the results, the JSON of the matched article is displayed. You can examine the "title" to see which article has been matched.

    <img style="width:450px" src="img/ConvoBuilder/kb_testUserInput2.png">

### Chat with a bot linked to a knowledge base

If you have a bot linked to your knowledge base via a [Knowledge Base integration](conversation-builder-integrations-knowledge-base-integrations.html), in the Knowledge Base application, you can feed test user input to the bot to see if it matches, returns and renders content as you'd expect.

{: .important}
If you're just getting started with knowledge bases and want to try using this tool, we recommend you create a bot using the [Simple FAQ bot template](conversation-builder-bot-templates-simple-faq.html) and connect it to your knowledge base. Most of the bot development work is already done. You only need to update the integration in the bot so that it uses your knowledge base, as shown in the image below.

   <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/kb_chat3.png">

**To chat with a bot linked to a knowledge base**

1. If you haven't already done so, in Conversation Builder, create a bot that includes a [Knowledge Base integration](conversation-builder-integrations-knowledge-base-integrations.html) that uses the knowledge base you want to test.
2. Return to the Knowledge Base application, and open the knowledge base.
2. In the upper-right corner, click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png">, and select **Chat**.
4. In the Preview panel, select the bot to use.

   <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/kb_chat1.png">

5. Begin to feed test user input to the bot to see how it responds.

   <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/kb_chat2.png">  

### Find articles with a specific tag

1. Open the knowledge base.
2. In the upper-right corner, click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png">, and select **Tags**.
3. In the Tags panel, select the tag to highlight it. You can repeat this step as needed if you're looking for articles assigned to multiple tags.
    
    The result list is updated to include only the articles with the selected tags.
    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/kb_findWithTag.png">

### Find articles assigned to a specific category

1. Open the knowledge base.
2. In the upper-right corner, click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png">, and select **Categories**.
3. In the Categories panel, select the category to highlight it. You can repeat this step as needed if you're looking for articles assigned to multiple categories.
    
    The result list is updated to include only the articles assigned to the selected categories.
    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/kb_findInCategory.png">

### JSON reference

The following table identifies the JSON node for article information that's often needed when you're integrating the knowledge base with a bot.

If you're looking for the name of a node not listed here, you can use the Knowledge Base's [Debugger tool](knowledge-base-articles.html#test-user-input) to identify it; the tool displays the JSON that's returned by an article search.

| Name of UI field | Name of JSON node |
|-----|-----|
| Title | title |
| Summary | summary |
| Detail | detail |
| Content Links > Content | contentURL |
| Content Links > Image | imageURL |
| Content Links > Video | videoURL |
| Content Links > Audio | audioURL |

### Best practices

To increase the quality of your content matches, follow the best practices below.

{: .important}
For more best practices when training and tuning NLU, see [here](conversation-builder-best-practices-train-tune-nlu.html).

#### Number of articles

There isn’t a limit on the number of articles that a knowledge base can have, but the following are best practices:

- A good guideline is 75-100 articles in a knowledge base. Keep in mind that every article requires some level of training if you’re going to use NLU (and not the text-to-text search mode).

- If you have a knowledge base that exceeds 75-100 articles, consider splitting the knowledge base into smaller ones based on category, likewise splitting the intents into domains based on category, and adding multiple knowledge base integrations. Then have the NLU match the consumer’s question to the category-based intent and search the applicable knowledge base. This yields a faster response during the conversation.

    If you have a knowledge base that exceeds 75-100 articles, also consider using domain intents, and, for the domain, use LivePerson NLU v2, which has better performance with large sets of data.


#### Titles, intent qualifiers, and training phrases

* Use full sentences, e.g., “How do I reset my password?”

* Use a simple, concise sentence, not multiple sentences. For example, "How do I activate my card?" is much better than, “How do I activate my card? I am having trouble at the ATM. Can you help me?” Multiple sentences increase your risk of false positives.

* When adding intent qualifiers or training phrases, add 10 - 15 per article. Exceeding this likely means that you have overtrained, which might lead to false positives.

* The intent qualifiers or training phrases should be relatively generic. If they are too specific, the likelihood they will match a consumer’s utterance will be slim. Since consumers can phrase their questions in many ways, make sure your intents are broad to allow the NLU a chance to match as many possible versions of the sentence as possible.

{: .important}
If you're using [domain intents](knowledge-base-overview.html#knowlege-base-intents-versus-domain-intents) (not knowledge base intents), the same guidelines apply.

#### Summary and details

Technically, there aren’t any limits here, but keep these as brief as possible. Very long pieces of text will be split into multiple messages (after 320 characters) when sent to the consumer, and in rare cases the messages can be sent in the wrong order.

If you need to use a long piece of text, you can use the [breakWithDelay](conversation-builder-interactions-interaction-basics.html#break-point-within-a-large-block-of-text) tag to force the break at a specific point. Alternatively, you can override the behavior to break the text using the [setAllowMaxTextResponse](conversation-builder-scripting-functions-manage-conversation-flow.html#set-allow-max-text-response) scripting function.

#### Positive and negative learnings

Positive and negative learnings play a role in intent detection regardless of whether you're using knowledge base intents or domain intents. When using knowledge base intents or when using domain intents with LivePerson NLU v1, positive and negative learnings are applied during processing of user inputs. When using domain intents with LivePerson NLU v2 or a 3rd-party NLU engine, the positive learnings are applied (added) to the training phrases when the model is trained, and the negative learnings are applied during processing of user inputs.

As a general rule, don’t specify more than 20 positive learnings and 20 negative learnings. Too many positive and negative learnings can lead to learnings that “overlap” one another in terms of grammar. This results in an unpredictable user experience.