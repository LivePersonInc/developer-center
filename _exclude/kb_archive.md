This file contains an archive of out-of-date Knowledge Base documentation.

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


### Refresh the intents

The intents for every article are stored in a cache that is updated automatically every 5 minutes. But if you've made a recent change to intents--either [Knowledge Base intents or Domain intents](knowledge-base-internal-knowledge-bases-introduction.html#knowlege-base-intents-versus-domain-intents)--and you want to immediately see the result of the changes, you can manually refresh the cache.

**To refresh the intents in a knowledge base**
1. Open the knowledge base.
2. In the upper-right corner, click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png">, and select **Knowledge Base Menu**.
3. In the Settings panel, click **KB Settings**.
4. Click **More Options**, scroll down to the **Refresh Intents** section, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_refresh.png"> (Refresh icon).

### Test user input

Use the Debugger tool to feed user input directly into a knowledge base to test content matching.

The Debugger tool works exactly like a [Knowledge Base integration](conversation-builder-integrations-knowledge-base-integrations.html) in a bot. So, if your search selections in the tool match how you've configured the bot, the results you see with the tool will be the same as those returned in a bot conversation. If you don't yet have a bot integrated with your knowledge base, the Debugger tool is also a way to test how the bot will behave once it is.

The Debugger tool is also *the* way to see the JSON that's returned by the search.

**To test user input**

1. Open the knowledge base.
2. In the upper-right corner, click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png">, and select **Test User Input**.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/kb_testUserInput1.png">

3. Specify the following:

    * **Phrase**: Enter the phrase to search for.
    * **Search Modes**: Select either Intents, Intents Only, or All. For a description of each mode, see [here](knowledge-base-common-common-concepts.html#knowledge-base-searches).
    * **Threshold**: Select the minimum score that a result must have in order to be returned, either VERY GOOD, GOOD, or FAIR PLUS. For more on thresholds, see [here](knowledge-base-common-common-concepts.html#scoring-and-thresholds).

4. Click **test**.

    In the results, the JSON of the matched article is displayed. You can examine the "title" to see which article has been matched.

    <img style="width:450px" src="img/ConvoBuilder/kb_testUserInput2.png">