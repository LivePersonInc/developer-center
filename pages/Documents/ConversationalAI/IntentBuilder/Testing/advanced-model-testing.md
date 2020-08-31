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

Intent Builder includes an advanced Model Tester that’s available in domains where you train model versions, i.e., in domains  that use LivePerson NLU v2 or a 3rd-party NLU engine.

The Model Tester lets you define a set of utterances that you can test against the intents in the domain. You define the test set, and then you run the test against a specific model version. By repeating the test with the next model version, and then comparing the reports, you can determine if the model is improving or degrading from one version to another.

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
    * First, if you added a number of phrases using the Quick Add icons, make small changes to the phrases as appropriate. The test set shouldn’t contain exact matches to the intents, as this will always yield a passing score. The goal is to test variations and alternatives to determine how well the defined intents are performing when evaluated against them.
    * Second, for each phrase, select the intent that should be matched to the phrase.

    SCREEN

#### Evaluating the intent coverage

The **Test Set** tab shows you the number of intents in the domain that are and aren’t represented in the test set. This determines the test’s Intent Coverage percentage.

SCREEN

Click the “Unused” indicator in specific to see the list of intents for which you need to take action and add test phrases.

SCREEN - WITH UNUSED TOOLTIP

### Run the test
**To run the test set against the domain**

1. Open the domain.
2. Click **Model Tester** in the upper-left corner. 
3. Click **Run Test** in the upper-right corner.
4. Specify the following:
    * **Test Report Name**: Enter a name for the report.
    * **Model Version**: Select the model version against which to run the test. You can select the activated model version or any later version.
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

* **Passed**: The number of test phrases that matched the expected intents with a rating of GOOD or VERY GOOD.
* **Failed**: The number of test phrases that matched the expected intents with a rating of FAIR PLUS or FAIR.
* **Match Rate**: The match rate is the percentage of test phrases that matched with the expected intents regardless of the rating (GOOD, FAIR, etc.). This is calculated by dividing the number of passed tests by the total number of tests.
* **Success Rate**: The success rate is the percentage of test phrases that matched with the expected intents with a rating of GOOD or VERY GOOD. This is calculated by dividing the number of passed tests with a rating of GOOD or VERY GOOD by the total number of tests.
* **Intent Coverage**: The percentage of intents in the domain that are used in the test set, calculated by dividing the number of used intents by the total number of intents.
* **Confidence Score**: The percentage score that reflects the NLU’s level of confidence in the intent match.
* **Rating**: The rating that indicates the NLU’s level of confidence in the match, one of VERY GOOD, GOOD, FAIR PLUS, or FAIR.
* **Test Result**: An at-a-glance, visual indicator of whether the test phrase passed [ ] or failed [ ].

#### Evaluating the report

to be added

### Compare reports
**To compare reports**

1. Open the domain.
2. Click **Model Tester** in the upper-left corner. 
3. Click **Test Reports** tab.
4. In the dashboard that lists the reports, select the checkbox for both reports.
5. Click **Compare Reports** in the upper-right corner.

    SCREEN

    Note that a test phrase that is present in one test but not in another is marked with “ -- “ in the latter.

#### Evaluating the comparison

to be added
