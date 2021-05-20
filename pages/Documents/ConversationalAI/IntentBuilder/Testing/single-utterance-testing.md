---
pagename: Single Utterance Testing
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Builder
subfoldername: Testing
permalink: intent-builder-testing-single-utterance-testing.html
indicator: both
---

You can use the **Test User Input** tool to test how a single utterance performs against an intent or the domain.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/ib_debug3.png">

The Test User Input tool is primarily used for debugging purposes. For example, you might find that a strange phrase was matched to an intent on Production. Using the tool, you can quickly and easily test that phrase to see how it behaves.

{: .important}
If the domain uses the LivePerson engine for NLU, on occasion you might notice a change in the matched intent for the test phrase after retraining with no additional training samples. For more on this, see [here](intent-builder-natural-language-understanding.html#variances-in-matched-intents-with-liveperson-nlu).

{: .important}
If the domain uses the LivePerson engine for NLU, you can't use the Test User Input tool to directly test and reveal entity matching. LivePerson recommends that you test entities by 1) creating an intent that uses the entities, and then 2) testing the intent itself.

**To test a single utterance**

1. In the dashboard that lists your domains, select the domain.
2. In the **Test User Input** panel on the right, specify the following:
    
    **User text**: Enter the user utterance to test.
    
    **Search in domain**: If you disable this, the test will be run against the currently displayed intent. If you enable this, the test will be run against all intents in the domain. In most cases, you'll want to enable this setting. If you do, you can then select whether to test against [intents](intent-builder-intents.html), [meta intents](intent-builder-meta-intents.html), or all.
    
    **Model version**: Select the trained model version test. You can select from all existing versions.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/ib_debug1.png">

3. Click **Test**.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/ib_debug2.png">

    If you searched in the domain, you can select a result to see a more detailed breakdown.

    For details on the intent scoring, see [here](intent-builder-intents.html#what-is-the-intent-scorethreshold).
    
    After reviewing the results, if the score isn't where you’d like it, you can add more training phrases.
