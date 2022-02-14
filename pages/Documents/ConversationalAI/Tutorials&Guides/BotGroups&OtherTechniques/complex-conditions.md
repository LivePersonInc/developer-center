---
pagename: Complex Conditions
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Tutorials & Guides
subfoldername: Bot Groups & Other Techniques
permalink: tutorials-guides-bot-groups-other-techniques-complex-conditions.html
indicator: both
---

In the [Getting Started](tutorials-guides-getting-started-with-bot-building-overview.html) tutorial series, we used conditional logic in the Make Payment dialog to determine which interaction to display based on a multiple choice question. Sometimes, however, there are multiple variables that need to be considered when choosing a path for users. For this purpose, Conversation Builder’s Conditions Editor provides a rules-based system to direct a user's path based on several variables. To demonstrate this, in our Order Bot, let’s create a new dialog to handle refund requests from the user.

### Step 5: Create the Refund Request dialog

Let's return to Conversation Builder, where we will create our "Refund Request" dialog. Our Cross-vertical domain contains a "request refund" intent, which we'll use to trigger this dialog.

1. Navigate to Conversation Builder, and select the Order Bot.
2. In the lower-left corner, click **Add Dialog**, and create a new standard dialog with the name **Refund Request**.
3. Open the Assist tool by clicking <img class="inlineimage" style="width:25px" src="img/ConvoBuilder/advtutorial/icon_assist.png"> (Assist icon) beside the dialog starter.

    Select the “LP_Cross-vertical” domain, followed by the "request refund" intent. You can locate this intent either by scrolling through the list of intents, or by searching with a phrase such as, "I want to request a refund." Selecting this intent associates it with the dialog starter.

4. Add a new *Text statement* to acknowledge the user's intent. Add the text, "It looks like you have a question about a refund."

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/refund_request_dialog.png">

    Next, we’re going to add the first of two questions that will determine where this conversation flows.

5. Add a new *Multiple Choice question* that asks the user whether their order was placed within the last 30 days.

    Select the name of the multiple choice question, and give it a name of "Refund Question."

    Add the question text, "Was the purchase made in the last 30 days?", with multiple choice options of *Yes* and *No*.

6. We want to preserve whichever value is selected as a variable for use later in the dialog. To do this, create a new rule by selecting the **Next Action** dropdown, and click **+ Custom Rule**.

    To complete the **Add Next Action Rule** section, start by giving the rule a name of "Yes." Next, click **+ Add Condition**, select **Pattern** from the resulting dropdown, and enter the pattern "Yes". Finally, we’ll capture the result in a variable: Click **+ Add Variable**. Name the variable `within30Days`, and set the value to "true". Click **Save**.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/yesrule.png">

    Add a second rule, giving it a name of "No." Click **+ Add Condition**, select **Pattern** from the resulting dropdown, and enter the pattern "No". Once again, click **+ Add Variable**. Name the variable `within30Days`, and set the value to "false". Click **Save**.

We’ve now created a dialog that records whether or not a purchase was made in the last 30 days and stores that value to a variable. Next, we’ll add a second question, and then we'll use the results of both questions to determine one of four interactions to display.

### Step 6: Add a second multiple choice question

1. Still in the Refund Request dialog, add a new Multiple Choice question. Change the name of the interaction to "Online or Instore".

    Add the question text, "Was the purchase made in-store or on our website?", with multiple choice options of "In-Store" and "Website".

    We’re going to add four new rules here to direct to different interactions based on the user responses up to this point. Prior to doing so, let’s add the text interactions, so we can use them in our rules.

2. Add a total of 4, new text interactions. Give each interaction the following title and text content:

    * **Interaction Title**: Store Less 30
    * **Text Content**: If you purchased your item within 30 days from one of our stores, you can bring the item back for a full refund. 
    * **Next Action**: End Interaction 

    * **Interaction Title**: Store More 30
    * **Text Content**: If you purchased your item more than 30 days ago from our store, you can bring the item back for a store credit.
    * **Next Action**: End Interaction 

    * **Interaction Title**: Web Less 30
    * **Text Content**: If you purchased your item within 30 days from our website, you can send the item back for a full refund. We'll even pay the postage!
    * **Next Action**: End Interaction 

    * **Interaction Title**: Web More 30
    * **Text Content**: If you purchased your item more than 30 days ago from our website, you can return the item for a credit. You could bring the item into one of our stores, or pay for the return shipping.
    * **Next Action**: End Interaction 

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/advtutorial/four_text_interactions.png">

3. Return to the "Online or Instore" multiple choice question, and create a new rule: Click the **Next Action** dropdown, and then click **+ Custom Rule**. We’re going to add a new rule to correspond to each of the text statements that we will be routing to.

    For the first rule, give it a name of "Store Less 30." Click **+ Add Condition**, and set the condition to match a pattern of `*store`. This will match both "In-store" and "store" utterances, which provides flexibility in how our users can respond. 

    Still in the **Add Condition** section, we want to check the value of the previously stored `within30Days` variable to determine the next step. Click **+ Add Variable Condition**, and under **Variable Name**, type in "within30Days".  In the adjacent dropdown, select **Equals**, and for **Value**, set to "true".

    We are now checking multiple conditions to determine what our next step should be. To finish this rule, select the **And Go To** dropdown and select the "Store Less 30" text interaction. Click **Save**.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/add_next_action_rule.png">

4. Complete the three, remaining rules to point to each of the other text interactions. Create these new rules, and repeat the previous step with the following information for each:

    * **Rule name**: Store More 30
    * **Conditions**:
        * Pattern matches `*store`
        * `within30Days` Equals "false"
    * **And Go To**: Store More 30

    * **Rule name**: Web Less 30
    * **Conditions**:
        * Pattern matches `web*`
        * `within30Days` Equals "true"
    * **And Go To**: Web Less 30

    * **Rule name**: Web More 30
    * **Conditions**:
        * Pattern matches `web*`
        * `within30Days` Equals "false"
    * **And Go To**: Web More 30

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/advtutorial/online_or_instore_question.png">

5. With our rules now in place, let’s test the functionality by opening the preview window, resetting the session, and triggering our Refund Request dialog. Navigate through each of the four pathways through the dialog.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/advtutorial/preview.png">

    Without a single line of JavaScript code, we now have complex conditional logic to check for multiple variables in determining a flow for our users. 

### What's next?

Continue on to the [next tutorial](tutorials-guides-bot-groups-other-techniques-auto-escalation.html) in the series.