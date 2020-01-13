
### Add keyword patterns

INTRO TO BE ADDED

**To add a keyword pattern to a knowledge base**
1. Open the knowledge base, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_settings.png"> (Knowledge Base Menu icon) in the lower-right corner.
2. In the Settings panel, click **KB Settings**.
3. Click **More Options**, and scroll down to the **Keyword Patterns** section.
4. Enter the pattern, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_add.png"> (Refresh icon).

### Add stop words

Stop words are words that aren't used by the NLU engine to score an utterance. These words are removed or ignored in the matching process.

You can add stop words to a knowledge base. Typically, this is done for words or phrases like your company name or brand name, as these words typically aren't needed for and don't help the scoring of an utterance.

{: .important}
There is a list of stop words that are applied by default; you can view that list [here](conversation-builder-best-practices-train-tune-nlu.html#nlu-stop-words). You don't need to add these words.

**To add a stop word to a knowledge base**
1. Open the knowledge base, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_settings.png"> (Knowledge Base Menu icon) in the lower-right corner.
2. In the Settings panel, click **KB Settings**.
3. Click **More Options**, and scroll down to the **Stop Words** section.
4. Enter the word, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_add.png"> (Add).
5. Click **Update**.

### Approve a pending article

ADD INTRO/BACKSTORY HERE

**To approve a pending article**

1. Open the knowledge base, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_advSearch.png"> (Advanced Search) beside the Search box.
    This displays the advanced search controls.
2. For **Status**, select "Pending." *Don't* enter anything in the Search box, as a search for a phrase is only performed against *active* (approved) articles.
    This displays all articles in Pending status. 
3. Locate the article in the list, and review the article's contents. Make any changes necessary.
4. If the article is ready to be activated, click **Approve**.

### Settings toolbar

* <img style="width:30px" src="img/ConvoBuilder/icon_kb_intentAnalytics.png"> **Intents Analytics**: Use this to see historical information on the intents that were and weren't matched by bots to the knowledge base's articles.

### THIS BELOW IS FROM THE TRAIN AND TUNE NLU TOPIC. IT WAS WRITTEN WHEN IT WAS THOUGHT THAT TAGS WERE USED BY NLU AS A WEIGHTING MECHANISM.

#### Tags in KB articles

Tags play a very important role in returning accurate results in your knowledge base. Where the training phrases should be intents (e.g., complete sentences), the tags should highlight the key noun(s) or word(s) in the training phrases. For example, for an article about health insurance, the tags should be "health", “insurance”, “benefits”. When an utterance contains these keywords, it will be scored higher. Remember, these should be **words**, not sentences!

Also, if you find yourself needing a large number of tags, you most likely should be using an entity.

<img class="fancyimage" style="width:700px" src="img/tags.png">

## OLD DESCRIPTION OF TAGS WRITTEN WHEN IT WAS THOUGHT THAT TAGS WERE USED BY NLU AS A WEIGHTING MECHANISM

Tags assist the NLU engine in matching intents, your content, and the user input by highlighting the key sections of the user's message in regards to the intents that you created.

## THIS BELOW IS BP DOC WRITTEN WHEN IT WAS THOUGHT THAT TAGS WERE USED BY NLU AS A WEIGHTING MECHANISM

#### Tags

Tags play an important role in returning accurate results in your knowledge base. As mentioned farther above, tags assist the NLU engine in matching intents, your content, and the user input by highlighting the key sections of the user's message in regards to the intents that you created.

Tags should highlight the key noun(s) or word(s) in the training phrases. For example, for an article about health insurance, the tags should be "health", “insurance”, “benefits”. These should be words, not sentences.

If you find yourself needing a large number of tags, you most likely should be using an [entity](intent-builder-entities.html).