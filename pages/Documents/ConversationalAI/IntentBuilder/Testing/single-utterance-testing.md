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

### Test a domain

You can test the intents (and entities) in a domain against sample user utterances using the **Test** tool. The NLU engine takes the sample utterance and sees if it can find matches in the intents. The results list the intents and the degree to which they matched the utterance.

The purpose of testing is to determine whether the domain is performing as expected. As an example, assume you have a domain with 10 intents that each have 10 training phrases. During testing, you might use a test bank of 20-30 utterances that aren’t a part of the domain to see the results for those utterances. The accuracy would help to define the benchmark for the domain. After evaluating the utterances that didn’t work, you could fine tune the domain, re-train (required depending on the NLU engine), and then re-test for verification.

{: .important}
If the domain uses the LivePerson NLU v2 engine or a 3rd-party engine, you'll need to train the domain before testing it. However, you **don't** need to activate the resulting model version before testing it. (You can’t deactivate a version once you’ve activated it.) Use the Test tool to 1) test the **latest trained** model version and 2) compare it with results from testing the **activated** model version. When you have the latest trained model version performing as desired, you can then activate it.

**Tip**: After testing but before making any fine-tuning changes, consider exporting the intents and entities in the domain and archiving the export file. This gives you the ability to go back and compare the versions of the domain.

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
