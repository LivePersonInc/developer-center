---
pagename: Intents
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Tutorials & Guides
subfoldername: Getting Started with Bot Building
permalink: tutorials-guides-getting-started-with-bot-building-intents.html
indicator: both
---

In this tutorial, you take things to the next level. Instead of using patterns to trigger a dialog, you use an intent. LivePerson offers several trained and pre-built domains to help you get up and running quickly with intents. For this tutorial, we’ll take advantage of the Cross-vertical pre-built domain, which is designed as a great starting point for any brand with an online presence.

<!--
### Watch the video - Intents & entities

<div style="display: block; position: relative; max-width: 70%;margin:0 auto;"><div style="padding-top: 56.25%;"><iframe src="https://player.vimeo.com/video/441795640" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 10px; bottom: 0px; right: 0px; left: 0px;"></iframe></div></div>
<br>

### Watch the video - Advanced interactions

<div style="display: block; position: relative; max-width: 70%;margin:0 auto;"><div style="padding-top: 56.25%;"><iframe src="https://player.vimeo.com/video/464652923" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 10px; bottom: 0px; right: 0px; left: 0px;"></iframe></div></div>
<br>
-->

### Step 5: Import the Cross-vertical domain

Since you’re going to be using an intent in this tutorial, you need to leave the Conversation Builder application for a moment.

1. In the upper-left corner, click **< Back** twice. This returns you to the Conversational AI dashboard.

2. Click **Intent Manager**.

    Intent Manager is where you create domains, which are collections of intents and entities. You can learn about Intent Manager [here](intent-manager-overview.html).

    Now let’s create a domain.

3. Locate the domain list in the Intent Manager dashboard. In the upper-right corner, click **Add a domain**.

4. On the Add Domain page, select the **Prebuilt domains** option along the top. Hover over the "Cross-vertical" option, and select **Add**.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/getstartedtutorial/intents_cv_domain.png">

5. Adding the Cross-vertical pre-built domain provides you with a robust, trained domain with several intents designed to quickly get you up and running. Take some time to look at the intents provided along the left side. Clicking any of them displays the intent name and its training phrases, which can be modified to suit your specific needs.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/getstartedtutorial/intents_cv_domain2.png">

    For now, you won’t add any additional content, but keep in mind that any new intents you add will need a minimum of 15 training phrases, and that any changes will result in the model needing to be re-trained.

6. In the **Test User Input** panel on the right, you can test utterances and see how they score against the provided intents. You will be using the "make payment" intent in this tutorial, so enter an utterance that you would expect to trigger this particular intent, such as, “I want to make a payment.” Select "1" for your **Model version**, and toggle the **Search in domain** switch to "on." Then click **Test**.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/getstartedtutorial/intents_test.png">

7. Continue to test utterances to see how the confidence scores differ from phrase to phrase. The following test phrases should all score either Very Good or Good, signifying that they will successfully trigger the dialog this intent is attached to.

    * How can I make a payment?
    * I need to pay my bill
    * Can I pay off my statement balance?

### Step 6: Link the intent to a Make Payment dialog

With the "Make Payment" intent configured, let’s return to Conversation Builder and use the intent to trigger a new dialog.

1. In the upper-left corner, click **Conversational AI** in the breadcrumb trail.
2. Select **Conversation Builder**.
3. Select the bot you previously created.
4. Create a new regular dialog named "Make Payment".

    By default, a regular dialog includes a Dialog Starter interaction, but it isn't configured yet. You'll use the [Assist tool](conversation-builder-assist.html) to do this.

5. Open the Assist tool by clicking <img style="width:25px" src="img/ConvoBuilder/getstartedtutorial/icon_assist.png"> (Assist icon) beside the Dialog Starter interaction.
6. In Assist, search for the name of the domain that you created, i.e., "LP_Cross-vertical."

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/getstartedtutorial/intents_assist1.png">

7. Select the domain to associate it with the dialog starter.

    In Assist, the intents within the domain are displayed. 

8. Type in a sample user message to use the NLU engine to identify the correct intent.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/getstartedtutorial/intents_assist2.png">

9. Select the "Make payment" intent that you tested. This associates the intent with the dialog starter.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/getstartedtutorial/intents_assoc.png">

### Step 7: Add custom rules
Now you can begin to build out the Make Payment dialog.

1. Add a Text statement that says, “Sure, I can help with that."
2. Add a Multiple Choice question that asks, "Are you prepared with your preferred payment method?" Enter "Yes" and "No" as the choices.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/getstartedtutorial/intents_rules1.png">

    When someone says "yes," you'll want to show them a specific message. The same applies when someone says, "no."

3. Add a Text statement to respond to a reply of "yes". Name the interaction "Yes" in the upper-left corner. For the statement's text, enter, "Great! To pay your bill, please go to our billing portal at http://example.com.” Select "End Interaction" as the **Next Action**. Click the **Save** icon in the interaction's upper-right corner.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/getstartedtutorial/intents_rules2.png">

    You make the last change because the default behavior for statements is to display the next interaction. In our example, the No statement will be next. Since the dialog flow should stop after the Yes statement, the Yes statement's next action should be to end.

4. Add a Text statement to respond to a reply of "no". Name the interaction "No" (in the upper-left corner). For the statement's text, enter, “Ok, we’ll be here to help when you are ready." Select "End Interaction" as the **Next Action**. Click **Save**.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/getstartedtutorial/intents_rules3.png">

    You've got the dialog fleshed out; now you need to add custom rules to detect when a user says "yes" or “no” and direct them to the correct text statement.

5. Return to the multiple choice question, and select the **Next Action** dropdown.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/getstartedtutorial/intents_rules4.png">

6. Add a rule to handle a "yes" response: Click **+ Custom Rule** in the Next Action dropdown. In the Add Next Action Rule window, configure the Yes rule as follows:
    * **Rule name**: Enter "Yes".
    * **Condition**: Click **+ Add Condition**. Select "Pattern" from the drop-down list of match types, and enter "yes" and "y" as patterns.
    * **And Go To**: Select the "Yes" statement as the next action.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/getstartedtutorial/intents_rules5.png">

    Click **Save**.

7. Add a rule to handle a "no" response: Click the **+ Custom Rule** button that's displayed once you have at least one rule defined. In the Next Action Rule window, configure the No rule as follows:
    * **Rule name**: Enter "No".
    * **Condition**: Click **+ Add Condition**. Select "Pattern" from the drop-down list of match types, and enter "no" and "n" as patterns.
    * **And Go To**: Select the "No" statement as the next action.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/getstartedtutorial/intents_rules6.png">

    Click **Save**.
    
    The multiple choice question should now look like this:

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/getstartedtutorial/intents_rules7.png">

    Now let's see the dialog in action.

8. Open the Preview window, and start a new session by clicking **Reset Session**.
9. Enter an utterance that should match the Make Payment intent, like, "Can you help me to make a payment?" You should see the Make Payment dialog's flow and the multiple choice question. Tap or enter “Yes” or “No” and see what response you get.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/getstartedtutorial/intents_preview.png">

    You now understand the basics of intents and branching dialog flows.

### What's next?

Continue on to the [next tutorial](tutorials-guides-getting-started-with-bot-building-integrations.html) in the series.