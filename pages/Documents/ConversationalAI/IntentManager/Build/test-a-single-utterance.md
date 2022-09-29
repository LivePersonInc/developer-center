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

{: .attn-note}
Test intents on the **Intents** tab and test entities on the **Entities** tab. You can't use either tab to test both.

### Test intent detection

You can use the **Test User Input** tool to test how a single utterance performs against an intent or the domain. The tool is primarily used for debugging purposes. For example, you might find that a strange phrase was matched to an intent on Production. Using the tool, you can quickly and easily test that phrase to see how it behaves.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/ib_debug3.png" alt="Test User Input tool showing a matched intent">

{: .attn-note}
If the domain uses the LivePerson engine for NLU, on occasion you might notice a change in the matched intent for the test phrase after retraining with no additional training samples. For more, see [this explanation](intent-manager-natural-language-understanding-liveperson-nlu-engine.html#variances-in-matched-intents-with-liveperson-nlu).

#### To test a single utterance for intent detection

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard.
3. Select the name of the relevant domain, and then select **Build** from the menu that appears.
4. On the **Intents** page, in the **Test User Input** panel on the right, specify the following:

    **User text**: Enter the consumer utterance to test.

    **Search in domain**: If you disable this, the test will be run against the currently displayed intent. If you enable this, the test will be run against all intents in the domain. In most cases, you'll want to enable this setting. If you do, you can then select whether to test against [intents](intent-manager-key-terms-concepts.html#intents), [meta intents](intent-manager-key-terms-concepts.html#meta-intents), or all.

    **Model version**: Select the trained model version test. You can select from all existing versions.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/ib_debug1.png" alt="Default state of the Test User Input tool for detecting matched intents">

5. Click **Test**.

    The search results show matched intents and their [confidence scores](intent-manager-key-terms-concepts.html#confidence-score-and-threshold).

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/ib_debug2.png" alt="Matched intent results for an example utterance">

    If you searched in the domain, you can select a result to see a more detailed breakdown.

    After reviewing the results, if the score isn't where you want it, you can refine the training phrases.

### Test entity detection

1. [Access Intent Manager](intent-manager-overview.html#access-intent-manager).
2. Locate the domain list in the Intent Manager dashboard.
3. Select the name of the relevant domain, and then select **Build** from the menu that appears.
4. Select the **Entities** page.
5. In the **Test User Input** panel on the right, specify the following:

    **User text**: Enter the consumer utterance to test.

    **Model version**: Skip this, as the saved entities are always used, both within the tool and by other applications (e.g., Conversation Builder). While you need to have a trained intent model in order to test, the entity configuration is not a part of the model versioning.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/im_testuserinput_entities1.png" alt="Default state of the Test User Input tool for testing entity detection">

3. Click **Test**.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/im_testuserinput_entities2.png" alt="Example results when testing entity detection in the Test User Input Tool">

    The **SUMMARY** tab shows the custom and global entities that were recognized. The **DETAILS** tab shows more info on recognition, including the confidence score for global entities. Custom entities are either recognized with 100% confidence or not, so no confidence score is shown for these.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/im_testuserinput_entities3.png" alt="Details tab showing the recognition info for detected entities">

    If the results for custom entities aren't what you expect, update the defined entity. If the results for global entities aren't what you expect, provide this feedback to your LivePerson representative.