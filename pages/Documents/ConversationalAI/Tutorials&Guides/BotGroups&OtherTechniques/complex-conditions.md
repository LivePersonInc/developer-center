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

### Introduction

Earlier in our Getting Started guide, we used conditional logic in our Billing Question dialog to determine which interaction to display based on a multiple choice question. Sometimes, however, there are multiple variables that need to be considered when choosing a path for our users. For this purpose, Conversation Builder’s updated Conditions Editor provides a simple, easy to follow rules based system to direct a user's path based on several variables. To demonstrate this, let’s create a new dialog in our Order Bot which will handle refund requests from our user.

### Step 5: Create the Refund Request dialog

With the "Refund Request" intent created, let’s return to Conversation Builder and use the intent to trigger a new dialog.

1. Navigate into Conversation Builder and select the Order Bot.
2. In the lower left hand corner, select the **Add Dialog** button and create a new standard dialog with the name **Refund Request**.
3. Click <img style="width:25px" src="img/ConvoBuilder/advtutorial/icon_assist.png"> (Assist icon) beside the interaction to open the Assist tool.

    Previously, we’ve created all of our Intents inside of Intent Builder. However, it is possible to create new intents directly from within Conversation Builder.

    Select the “Getting Started Domain”, followed by tapping the **Create New Intent** button.

    Fill out the resulting **Add Intent** form with the following:
    * **Intent Name**: Refund Request
    * **Training Phrases**:
        * I would like to request a refund
        * How do I get a refund?
        * I need to return an item for a refund.
        * How do I make a refund request?

    Select the **Add Intent** button to add the new Refund Request intent to the Getting Started Domain. Upon doing so, this dialog started will be automatically associated with it.

4. Add a new *Text statement* to acknowledge the users intent.

    Add the text, "It looks like you have a question about a refund."

    Here, we’re going to add the first of two questions which will ultimately determine where this conversation flows.

5. Add a new *Multiple Choice question*, which will ask our user whether their order was placed within the last 30 days.
    Tap on the name of our multiple choice question and give this interaction a name of "Refund Question."

    Add the question text, "Was the purchase made in the last 30 days?", with multiple choice options of *Yes* and *No*.

6. We want to preserve whichever value is selected as a variable for use later in this dialog. To do so, create a new rule by selecting the **Next Action** dropdown and click on **+ Custom Rule**.

    To complete the **Add Next Action Rule** section, start by giving our new rule a name of "Yes". Next, click the **+ Add Condition** button, select **pattern** from the resulting dropdown, and type in the pattern "yes". Finally, we’ll capture the result in a variable by selecting the **+ Add Variable** button. Name the variable `within30Days` and set the value to "true". Click **Save**.

    Add a second rule, giving it a name of "No". Click **+ Add Condition**, and set to a pattern of "no". Once again, select the **+ Add Variable** button, naming the variable `within30Days` with a value of "false".

We’ve now created a dialog which records whether or not a purchase was made in the last 30 days and stores that value to a variable. Next, we’ll add a second question, and use the results of both questions to determine one of four interactions to display.

### Step 6: Add a second Multiple Choice question

1. In our Refund Request dialog, add a new Multiple Choice Question. Change the name of the interaction to "Online or Instore".

    Add the question text, "Was the purchase made in-store or on our website?", with multiple choice options of "In-Store" and "Website".

    We’re going to add four new rules here to direct to different interactions based on the user responses up to this point. Prior to doing so, let’s add those different text interactions so we can use them in our rules.

2. Add a total of 4 new text interactions. Give each interaction the following titles and text content:

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

3. Return to the "Online or Instore" multiple choice question and create a new rule by selecting the **Next Action** dropdown and clicking on **+ Custom Rule**. We’re going to add a new rule to correspond to each of the text statements that we will be routing to.

    For the first rule, give it a name of "Store Less 30". Click on **+ Add Condition** set the condition to match a pattern of `*store`, as this will match both "In-store" and "store" utterances, which provides flexibility in how our users can respond. 

    Still in the **Add Condition** section, we want to check the value of the previously stored `within30Days` variable to determine our next step. Click the **+ Add Variable Condition** button and under **Variable Name**, type in "within30Days".  In the adjacent dropdown, select **Equals** and for **Value**, set to "true".

    We are now checking multiple conditions to determine what our next step should be. To finish this rule, select the **And Go To** dropdown and select our "Store Less 30" text interaction.

    Click **Save**.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/add_next_action_rule.png">

4. We can now complete the remaining three rules to point to each of our separate text interactions. Create these new rules and repeat the previous step with the following information for each:

    * **Rule name**: Store More 30
    * **Conditions**:
        * Pattern matches `*store`
        * `within30Days` Equals "true"
    * **And Go To**: Store More 30

    * **Rule name**: Web Less 30
    * **Conditions**:
        * Pattern matches `web*`
        * `within30Days` Equals "true"
    * And Go To: Web Less 30

    * **Rule name**: Web More 30
    * **Conditions**:
        * Pattern matches `web*`
        * `within30Days` Equals "false"
    * **And Go To**: Web More 30

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/advtutorial/online_or_instore_question.png">

5. With our rules now in place, let’s test the functionality by opening the preview window, resetting the session, and triggering our Refund request dialog. Navigate through each of the four pathways through our dialog.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/advtutorial/preview.png">

    Without a single line of JavaScript code, we now have complex conditional logic to check for multiple variables in determining a flow for our users. 
