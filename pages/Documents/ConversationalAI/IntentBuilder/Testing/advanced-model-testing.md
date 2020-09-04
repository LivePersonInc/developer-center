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

Intent Builder includes an advanced Intent Tester that's designed to:

* Provide broad testing coverage for the domain
* Help you determine if the domain/model is improving or regressing from one version to the next

The general workflow for using the Intent Tester is this:

1. Define a set of utterances (test phrases) to test against the intents in the domain.
2. Run the test, and evaluate the report.
3. Improve the domain (and retrain if applicable), and/or improve the test set.
4. Re-run the test, and evaluate the report.
5. Compare reports to determine if the domain/model is improving or regressing.

You can download test reports and comparison reports.

### Add phrases to the test set
In a domain, there are three ways to add a phrase to the Model Tester’s test set:

* Click **Model Tester** in the upper-left corner, and enter the phrase manually on the **Test Set** tab.
    SCREEN
* In **Test User Input** (where single-phrase testing is performed), click [ ] (quick add) next to the sample utterance.
    SCREEN
* In an intent’s details, click [ ] (quick add) next to a training phrase.
    SCREEN

The test set can contain a maximum of 300 test phrases.

### Refine the test set
Once you’ve added a number of phrases to the test set, you need to refine the test set.

**To refine the test set**

1. Open the domain.
2. Click **Model Tester** in the upper-left corner.
3. Click the **Test Set** tab.
4. Refine the test set as follows:
    * If you added a number of phrases using the Quick Add icons, make small changes to the phrases as appropriate. The test set shouldn’t contain exact matches to the intents. This will always yield a passing score, so it isn't a valid test. In fact, if the phrase is an exact match, the match is found in pre-processing, and NLU processing is never used. 
    
        Enter test phrases that are variations of the intents. The goal is to determine how well the intents are performing when these variations are evaluated against the intents using NLU.

    * For each phrase, select the expected intent that should be matched to the phrase.
    * Ensure that all phrases are unique within the test set.

    SCREEN


#### Evaluating the intent coverage

The **Test Set** tab shows you the number of intents in the domain that are and aren’t represented in the test set. This determines the test’s Intent Coverage percentage.

SCREEN

Click the “Unused” indicator in specific to see the list of intents for which you need to take action and add test phrases. Assessing your intent coverage can help you find irrelevant intents that should be deleted.

SCREEN - WITH UNUSED TOOLTIP

### Run the test
**To run the test set against the domain**

1. Open the domain.
2. Click **Model Tester** in the upper-left corner. 
3. Click **Run Test** in the upper-right corner.
4. Specify the following:
    * **Test Report Name**: Enter a name for the report.
    * **Model Version**: Optional. If you're using the LivePerson NLU v2 engine or a third-party NLU engine, select the model version against which to run the test. You can select the activated model version or any later version.
5. Click **Test**.
    You can click [ ] (Refresh icon) to periodically check the status of the test.

    SCREEN - DASHBOARD WITH IN-PROGRESS INDICATOR 

### View a report

{: .important}
The system retains the 10 most recent reports.

**To view a report**

1. Open the domain.
2. Click **Model Tester** in the upper-left corner. 
3. Click the **Test Reports** tab.
4. Click the report name.

    SCREEN

There are several, important metrics displayed:

* **Test Phrases**: The number of phrases (utterances) in the test set.
* **Passed**: The number of test phrases that matched the expected intents.
* **Failed**: The number of test phrases that didn't match the expected intents.
* **Match Rate**: The match rate is the percentage of test phrases that matched the expected intents regardless of the rating (GOOD, FAIR PLUS, etc.). This is calculated by dividing the number of passed tests by the total number of tests.
* **Success Rate**: The success rate is the percentage of test phrases that matched with the expected intents with a rating of GOOD or VERY GOOD. This is calculated by dividing the number of passed tests with a rating of GOOD or VERY GOOD by the total number of tests.
* **Intent Coverage**: The percentage of intents in the domain that are used in the test set. This is calculated by dividing the number of used intents by the total number of intents.
* **Confidence Score**: The percentage score that reflects the NLU’s level of confidence in the intent match.
* **Rating**: The rating that indicates the NLU’s level of confidence in the match, one of VERY GOOD, GOOD, FAIR PLUS, FAIR or POOR.
* **Test Result**: An at-a-glance, visual indicator of whether the test phrase passed [ ] or failed [ ].

#### Evaluating the report

If the report's scores are low, take corrective action as follows:

* **Low Intent Coverage**: This indicates that many intents in the domain aren't represented in the test set.
    * In the test set, add phrases for the overlooked intents. This might require that you broaden the use cases and provide utterances that approach the intent from different directions.
    * In the Intents list, delete any unused and irrelevant intents. In effect, clean the domain. This can often improve performance.
* **Low Match Rate**: This indicates that many test phrases didn't match the expected intent at all. In this case, you need to examine the test phrases to determine why the match rate is low.
    * If there was no match at all, go to the expected intent and improve it.
    * If there was an actual match to the wrong intent, either correct the test set, or fix/improve the affected intents. 
* **Low Success Rate**: This indicates that many test phrases didn't match the expected intents with high confidence scores.
    * Identify the test phrases with low confidence scores. Then focus on training the associated intents to improve the scores. This might involve adding training phrases or removing irrelevant ones. Often, removing irrelevant training phrases can be more effective than adding new training phrases.

### Compare reports

A true comparison of reports -- to accurately determine if the domain/model is improving or regressing from one version to another -- is only possible when the test set remains the same in both tests.

If you want to compare reports, LivePerson recommends that you keep the test set the same, changing only the domain/model between tests.

**To compare reports**

1. Open the domain.
2. Click **Model Tester** in the upper-left corner. 
3. Click **Test Reports** tab.
4. In the dashboard that lists the reports, select the checkbox for both reports.
5. Click **Compare Reports** in the upper-right corner.

    SCREEN

    Note that a test phrase that is present in one test but not in another is marked with “ -- “ in the latter.
