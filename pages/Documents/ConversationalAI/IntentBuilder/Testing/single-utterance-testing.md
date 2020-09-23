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

You can use the **Test** tool to test a single utterance against a domain.

The Test tool is primarily used for debugging purposes. For example, you might find that a strange phrase was matched to an intent on Production. Using the Test tool, you can quickly and easily test that phrase to see how it behaves.

{: .important}
If the domain uses the LivePerson NLU v2 engine, you can't use the Test tool to directly test and reveal entity matching. This isn't supported for Regular Expression entities. With Value Set entities, you can use the tool to see the entity replacement performed by the tool’s underlying, NLU v1 expansion algorithm. However, in both cases, LivePerson recommends that you test entities by 1) creating an intent that uses the entities and 2) testing the intent itself.

**To test a domain**

1. In the dashboard that lists your domains, select the domain.
2. Click **Test** in the upper-right corner. 
3. In the Test User Input panel, specify the following:
    
    **User text**: Enter the user utterance to test.
    
    **Search in domain**: If you disable this, the test will be run against the currently displayed intent. If you enable this, the test will be run against all intents in the domain. In most cases, you'll want to enable this setting. If you do, you can then select whether to test against [intents](intent-builder-intents.html), [meta intents](intent-builder-meta-intents.html), or all.
    
    **Model version**: This setting is only displayed and relevant if the domain uses the LivePerson NLU v2 engine or a 3rd-party NLU engine. Select the trained model version test. You can select from all existing versions.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/ib_debug1.png">

3. Click **Test**.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/ib_debug2.png">

    If you searched in the domain, you can select a result to see a more detailed breakdown.

    For details on the intent scoring, see [here](intent-builder-intents.html#what-is-the-intent-scorethreshold).
    
    After reviewing the results, if the score isn't where you’d like it, you can add more training phrases. In addition, using [entities](conversation-builder-intent-builder-entities.html) helps to increase the accuracy of intents and give their score a boost.
