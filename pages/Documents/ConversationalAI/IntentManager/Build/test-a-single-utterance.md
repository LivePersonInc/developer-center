---
pagename: Test a Single Utterance
redirect_from:
    - intent-builder-testing-single-utterance-testing.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Manager
subfoldername: Build
permalink: intent-manager-build-test-a-single-utterance.html
indicator: both
---

You can use the **Test User Input** tool to test how a single utterance performs against an intent or the domain.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/ib_debug3.png" alt="">

The Test User Input tool is primarily used for debugging purposes. For example, you might find that a strange phrase was matched to an intent on Production. Using the tool, you can quickly and easily test that phrase to see how it behaves.

{: .note}
If the domain uses the LivePerson engine for NLU, on occasion you might notice a change in the matched intent for the test phrase after retraining with no additional training samples. For more on this, see [here](intent-manager-natural-language-understanding-liveperson-nlu-engine.html#variances-in-matched-intents-with-liveperson-nlu).

{: .note}
If the domain uses the LivePerson engine for NLU, you can't use the Test User Input tool to directly test and reveal entity matching. LivePerson recommends that you test entities by 1) creating an intent that uses the entities, and then 2) testing the intent itself.

**To test a single utterance**

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard.
3. Select the name of the relevant domain, and then select **Build** from the menu that appears.
3. On the **Intents** page, in the **Test User Input** panel on the right, specify the following:

    **User text**: Enter the user utterance to test.

    **Search in domain**: If you disable this, the test will be run against the currently displayed intent. If you enable this, the test will be run against all intents in the domain. In most cases, you'll want to enable this setting. If you do, you can then select whether to test against [intents](intent-manager-key-terms-concepts.html#intents), [meta intents](intent-manager-key-terms-concepts.html#meta-intents), or all.

    **Model version**: Select the trained model version test. You can select from all existing versions.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/ib_debug1.png" alt="">

3. Click **Test**.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/ib_debug2.png" alt="">

    If you searched in the domain, you can select a result to see a more detailed breakdown.

    For details on the intent scoring, see [here](intent-manager-key-terms-concepts.html#confidence-score-and-threshold).

    After reviewing the results, if the score isn't where you want it, you can add more training phrases.
