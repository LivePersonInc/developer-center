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

In this tutorial, you take things to the next level. Instead of using patterns to trigger a dialog, you use an intent.

### Watch the video - Intents & entities

<div style="display: block; position: relative; max-width: 70%;margin:0 auto;"><div style="padding-top: 56.25%;"><iframe src="https://player.vimeo.com/video/441795640" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 10px; bottom: 0px; right: 0px; left: 0px;"></iframe></div></div>
<br>

### Watch the video - Advanced interactions

<div style="display: block; position: relative; max-width: 70%;margin:0 auto;"><div style="padding-top: 56.25%;"><iframe src="https://player.vimeo.com/video/446390506" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 10px; bottom: 0px; right: 0px; left: 0px;"></iframe></div></div>
<br>

### Step 5: Create a Billing intent

Since you’re going to be using an intent in this tutorial, you need to leave the Conversation Builder application for a moment.

1. In the upper-left corner, click **< Back** twice. This returns you to the Conversational AI dashboard.

2. Click **Intent Builder**.

    Intent Builder is where you create domains, which are collections of intents and entities. You can learn about Intent Builder [here](intent-builder-overview.html).

    Now let’s create a domain.

3. In the upper-right corner, click **Add Domain**.

4. On the Add Domain page, on the New Domain tab, give your domain a name (e.g., "Getting Started Domain"), select "Manual", and click **Add**. (While you will manually add intents and entities, they can be imported from a CSV file too.)

    This displays the Add Intent page. Now you can begin to create an intent.

5. Enter "Billing Question" for the **Intent Name**.

6. In the **Training** section, add the following training phrases, pressing Enter to add each one:
    * i have a question about my bill
    * can you help me with my bill
    * i have a bill related question
    * my bill is past due
    * I am looking for my most recent bill

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/getstartedtutorial/add_intent.png">

    Using the word “bill” in the training phrases is important because you will create an entity named "bill" that the phrases will recognize.

7. Click **Save** in the lower-right corner.

    Now you can use the debugger to test how the training phrases match against a user's utterance.

8. In the **Test User Input** panel on the right, enter an utterance that is close to one of your sentences, like, "I need help with my bill". Then click **Test**.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/getstartedtutorial/test_user_input_1.png">

9. Test another utterance but use “billing” instead of “bill”, e.g., "I have a billing question".

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/getstartedtutorial/test_user_input_2.png">

    The result when using "billing" is only FAIR because it is not recognized as a synonym for “bill.” You can remedy this by creating an entity. You do this next.

10. In the upper-left corner, click **Entities**.

11. On the Add Entity page, create a new entity named "BILL," keeping the default value of "Value Set" for the **Entity Type**. Add a number of entity values (synonyms) like `bill`, `billing`, `payment`, and `statement`. Press Enter to add each one.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/getstartedtutorial/add_entity.png">

    {: .important}
    It is recommended that you use a unique naming convention when creating your entity name. This allows them to be easily identified in your training phrases. Commonly used conventions at LivePerson are all caps (e.g., BILL) or preceding with an "ent_" prefix (e.g., ent_bill).

12. Click **Save** in the lower-right corner.

    Now let's see how adding an entity can improve the NLU matching.

13. Click **Intents** in the upper-left corner to return to the Intents tab, select the "Billing Question" intent (if necessary), and use the debugger again. This time re-enter the phrase, "I have a billing question".

    Now the result is VERY GOOD, and you can see that the entity @BILL was detected.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/getstartedtutorial/test_user_input_3.png">

### Step 6: Link the intent to a Billing dialog

With the "Billing Question" intent configured, let’s return to Conversation Builder and use the intent to trigger a new dialog.

1. In the upper-left corner, click **< Back** twice to return to the Conversational AI dashboard.
2. Click **Conversation Builder**.
3. Select the bot you previously created.
4. Create a new regular dialog named "Billing Question".

    By default, a regular dialog includes a Dialog Starter interaction, but it isn't configured yet. You'll use the [Assist tool](conversation-builder-assist.html) to do this.

5. Open the Assist tool by clicking <img style="width:25px" src="img/ConvoBuilder/getstartedtutorial/icon_assist.png"> (Assist icon) beside the Dialog Starter interaction.
6. In Assist, search for the name of the domain that you created (e.g., Getting Started Domain).

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/getstartedtutorial/assist_1.png">

7. Select the domain to associate it with the dialog starter.

    In Assist, the intents within the domain are displayed. Type in a sample user message to use the NLU engine to identify the correct intent.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/getstartedtutorial/assist_2.png">

8. Select the "Billing question" intent that you created. This associates the intent with the dialog starter.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/getstartedtutorial/billing_dialog.png">

### Step 7: Add custom rules
Now you can begin to build out the Billing dialog.

1. Add a Text statement that says, “Sure, I can help with that."
2. Add a Multiple Choice question that asks, "Would you like a copy of your most recent bill?" Enter "Yes" and "No" as the choices.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/getstartedtutorial/text_and_mcq.png">

    When someone says "yes," you'll want to show them a specific message. The same applies when someone says, "no."

3. Add a Text statement to respond to a reply of "yes". Name the interaction "Yes" in the upper-left corner. For the statement's text, enter, "If you would like the most recent copy of your bill, go to http://example.com.” Select "End Interaction" as the **Next Action**. Click the **Save** icon in the interaction's upper-right corner.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/getstartedtutorial/respond_to_yes.png">

    You make the last change because the default behavior for statements is to display the next interaction. In our example, the No statement will be next. Since the dialog flow should stop after the Yes statement, the Yes statement's next action should be to end.

4. Add a Text statement to respond to a reply of "no". Name the interaction "No statement" (in the upper-left corner). For the statement's text, enter, “Ok, how else can I help you?" Click **Save**.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/getstartedtutorial/respond_to_no.png">

    You've got the dialog fleshed out; now you need to add custom rules to detect when a user says "yes" or “no” and direct them to the correct text statement.

5. Return to the multiple choice question, and select the **Next Action** dropdown.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/getstartedtutorial/next_action.png">

6. Add a rule to handle a "yes" response: Click **+ Custom Rule** in the Next Action dropdown. In the Add Next Action Rule window, configure the Yes rule as follows:
    * **Rule name**: Enter "Yes".
    * **Condition**: Click **+ Add Condition**. Select "Pattern" from the drop-down list of match types, and enter "yes" and "y" as patterns.
    * **And Go To**: Select the "Yes" statement as the next action.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/getstartedtutorial/add_rule_yes.png">

    Click **Save**.

7. Add a rule to handle a "no" response: Click the **+ Custom Rule** button that's displayed once you have at least one rule defined. In the Next Action Rule window, configure the No rule as follows:
    * **Rule name**: Enter "No".
    * **Condition**: Click **+ Add Condition**. Select "Pattern" from the drop-down list of match types, and enter "no" and "n" as patterns.
    * **And Go To**: Select the "No" statement as the next action.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/getstartedtutorial/add_rule_no.png">

    Click **Save**.
    
    The multiple choice question should now look like this:

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/getstartedtutorial/mcq_finish.png">

    Now let's see the dialog in action.

8. Open the Preview window, and start a new session by clicking **Reset Session**.
9. Enter an utterance that should match the billing intent, like, "I have a question about my bill." You should see the billing dialog's flow and the multiple choice question. Tap or enter “Yes” or “No” and see what response you get.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/getstartedtutorial/preview_5.png">

    You now understand the basics of intents, entities, and branching dialog flows.

### What's next?

Continue on to the [next tutorial](tutorials-guides-getting-started-with-bot-building-integrations.html) in the series.