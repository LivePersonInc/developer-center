---
pagename: Advanced Model Testing
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Builder
subfoldername: Testing
permalink: intent-builder-testing-advanced-model-testing.html
indicator: both
---

### Overview

If your domain is using the LivePerson NLU v2 engine or a 3rd-party NLU engine, there's an advanced Model Tester that's available.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/ib_model_tester.png">

The Model Tester is designed to help you to determine if the model is improving or regressing from one version to the next as you train the intents in the domain.

If you need to [test a single utterance](intent-builder-testing-single-utterance-testing.html) against an intent or the domain, use the **Test User Input** tool. But for broad testing coverage of the intents in the domain, use the **Model Tester** if it's available.

### High-level workflow

The general workflow for using the Model Tester is this:

1. Define a set of utterances (test phrases) to test against the intents in the domain.
2. Run the test, and evaluate the report.
3. Improve the domain, and retrain the model.
4. Re-run the test, and evaluate the report.
5. Compare reports to determine if the model is improving or regressing.

You can download test reports and comparison reports.

### Add phrases to the test set
In a domain, there are three ways to add a phrase to the Model Tester’s test set:

* Click **Model Tester** in the upper-left corner, and enter the phrase manually on the **Test Set** tab.
    <img class="fancyimage" style="width:300px" src="img/ConvoBuilder/ib_model_tester_addphrase1.png">
* In **Test User Input** (where [single-phrase testing](intent-builder-testing-single-utterance-testing.html) is performed), click <img style="width:25px" src="img/ConvoBuilder/icon_ib_quick_add.png"> (quick add) next to the sample utterance.
    <img class="fancyimage" style="width:300px" src="img/ConvoBuilder/ib_model_tester_addphrase2.png">
* In an intent’s details, click <img style="width:25px" src="img/ConvoBuilder/icon_ib_quick_add.png"> (quick add) next to a training phrase.
    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/ib_model_tester_addphrase3.png">

### Refine the test set
Once you’ve added a number of phrases to the test set, you need to refine the test set.

**To refine the test set**

1. Open the domain.
2. Click **Model Tester** in the upper-left corner.
3. Click the **Test Set** tab.
4. Refine the test set as follows:
    * If you added a number of phrases using the Quick Add icons, make small changes to the phrases as appropriate. The test set shouldn’t contain exact matches to the intents. This will always yield a passing score, so it isn't a valid test. In fact, if the phrase is an exact match, the match is found in pre-processing, and NLU processing is never used. 
    
        Enter test phrases that are variations of the intents. The goal is to determine how well the intents are performing when these variations are evaluated against the intents using NLU.

    * If you added a number of phrases directly in the test set (i.e., not via quick add), for each phrase, select the expected intent that should be matched to the phrase. You can only select intents, not meta intents.
    * Ensure that all phrases are unique within the test set.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/ib_model_tester_refine.png">

{: .important}
The test set overall can contain a maximum of 300 test phrases. Each intent can have a maximum of 25 test phrases.

#### Evaluating the test coverage

The **Test Set** tab shows you the number of intents in the domain that are and aren’t represented in the test set. This determines the test’s Test Coverage percentage.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/ib_model_tester_coverage1.png">

Click the message, and then select **Unselected** to see the list of intents for which you need to take action and add test phrases. Assessing your test coverage can also help you find irrelevant intents that should be deleted.

<img class="fancyimage" style="width:300px" src="img/ConvoBuilder/ib_model_tester_coverage2.png">

### Run the test
**To run the test set against the domain**

1. Open the domain.
2. Click **Model Tester** in the upper-left corner. 
3. Click **Run Test** in the upper-right corner.
4. Specify the following:
    * **Test Report Name**: Enter a name for the report.
    * **Model Version**: Select the model version against which to run the test. You can select the activated model version or any later version.
5. Click **Test**.

    You can click <img style="width:25px" src="img/ConvoBuilder/icon_ib_refresh.png"> (Refresh icon) to periodically check the status of the test.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/ib_model_tester_run_report.png">

### View a report

{: .important}
The system retains the 10 most recent reports.

**To view a report**

1. Open the domain.
2. Click **Model Tester** in the upper-left corner. 
3. Click the **Test Reports** tab.
4. Click the report name.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/ib_model_tester_viewreport.png">

There are several, important metrics displayed:

* **Test Phrases**: The number of phrases in the test set.
* **Passed**: The number of phrases that matched the expected intents with a match rating of Very Good or Good.
* **Failed**: The number of test phrases that either didn't match the expected intents or matched them with a match rating of Fair Plus, Fair or Poor.
* **Success Rate**: The percentage of phrases in the test set that passed the test.
* **Test Coverage**: The percentage of intents in the domain that are used in the test set.
* **Result**: A quick, visual indicator of whether the phrase passed, failed, or passed but with a false positive. Respectively, these conditions are represented with: 
<img style="width:25px" src="img/ConvoBuilder/ib_model_tester_icon_passed.png"> <img style="width:25px" src="img/ConvoBuilder/ib_model_tester_icon_failed.png">
<img style="width:25px" src="img/ConvoBuilder/ib_model_tester_icon_falsepos.png">
* **Match Rating**: The rating that indicates the NLU’s level of confidence in the match, one of Very Good, Good, Fair Plus, Fair or Poor.
<!-- * **Match Score**: The percentage score that reflects the NLU’s level of confidence in the match to the matched intent. -->

### Evaluate the report

{: .important}
On occasion, you might notice a small number of changes in the matched intents for the test set after retraining with no additional training samples. For more on this, see [here](intent-builder-natural-language-understanding.html#variances-in-matched-intents-with-liveperson-nlu-v2).

If the report's scores are low, take corrective action as follows:

**Low Test Coverage**: This indicates that many intents in the domain aren't represented in the test set. To improve the test coverage:

* In the test set, add phrases for the overlooked intents. This might require that you broaden the use cases and provide utterances that approach the intent from different directions. For example, "Can I get a refund?" might also be approached with, "I want my money back." The idea is to train the model with diverse and relevant sentences for an intent and to avoid overusing similar training phrases. Whenever possible, it is recommended that you use actual data to enrich your training set. You can find such data with [Intent Analyzer](intent-analyzer-overview.html).
* In the Intents list, delete any unused and irrelevant intents. In effect, clean the domain. This can often improve performance.

**Low Success Rate**: This indicates that many test phrases failed the test because they either didn't match the expected intents, or they did so with low match ratings. Here below is an example of the latter:

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/ib_model_tester_lowsuccessrate.png">

To improve the success rate, focus on training the associated intents to improve the scores. This might involve adding training phrases or removing irrelevant ones. Often, removing irrelevant training phrases can be more effective than adding new training phrases.

**False Positives**: A false positive occurs when a test phrase matches an intent other than the expected intent. False positives are indicated with an "FP" indicator, like is shown in our example below:

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/ib_model_tester_falsepositive.png">

To correct false positives, here again, focus on training the associated intents.

A false positive is often indicative of some overlap in the training of the two intents. It is recommended that you remove training phrases from each of the intents that are too similar to each other. Adding more training phrases can help as well.

### Compare reports

A true comparison of reports -- to accurately determine if the domain/model is improving or regressing from one version to another -- is only possible when the test set remains the same in both tests. Therefore, if you want to compare reports, LivePerson recommends that you keep the test set the same, changing only the model between tests.

**To compare reports**

1. Open the domain.
2. Click **Model Tester** in the upper-left corner. 
3. Click the **Test Reports** tab.
4. In the dashboard that lists the reports, select the checkboxes for both reports.
5. Click **Compare Reports** in the upper-right corner.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/ib_model_tester_comparereports.png">

    Note that a test phrase that is present in one test but not in another is marked with “ -- “ in the latter.

### Best practices

LivePerson recommends that you keep modifications to the test set to a minimum, as changing this more often makes comparisons more difficult. A best practice is to:

1. Create a strong test set.
2. Test the intents.
3. Improve the intents.
4. Compare the results.

Steps 2 through 4 should be done frequently. Changes to the test set should only happen if necessary, i.e., if intents are added or removed.
