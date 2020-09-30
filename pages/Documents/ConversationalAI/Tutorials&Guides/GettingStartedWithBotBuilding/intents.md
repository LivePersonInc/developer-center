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

3. In the upper-right corner, click **New domain**.

4. On the Add Domain page, give your domain a name (e.g., "Getting Started Domain"), select "Manual", and click **Add Domain**. (While you will manually add intents and entities, they can be imported from a CSV file too.)

    This displays the Add Intent page. Now you can begin to create an intent.

5. Enter "Billing Question" for **Intent Name**.

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

    The result when using "billing" is only FAIR because it is not recognized as a synonym for “bill”. You can remedy this by creating an entity. You do this next.

10. In the upper-left corner, click **Entities**.

11. On the Add Entity page, create a new entity named "BILL" and add a number of entity values (synonyms) like `bill`, `billing`, `payment`, and `statement`. Press Enter to add each one.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/getstartedtutorial/add_entity.png">

    **Tip**: It is recommended that you use a unique naming convention when creating your entity name. This allows them to be easily identified in your training phrases. Commonly used conventions at LivePerson are all caps (ex: BILL) or preceding with ‘ent’ (ex: ent_bill).

12. Click **Add Entity** in the lower-right corner.

    Now let's see how adding an entity can improve the NLU matching.

13. Click **Intents** in the upper-left corner to return to the Intents tab, select the "Billing Question" intent (if necessary), and use the debugger again. This time re-enter the phrase, "I have a billing question".

    Now the result is VERY GOOD, and you can see that the entity @BILL was detected as well.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/getstartedtutorial/test_user_input_3.png">

### Step 6: Link the intent to a Billing dialog

With the "Billing Question" intent configured, let’s return to Conversation Builder and use the intent to trigger a new dialog.

1. In the upper-left corner, click **< Back** twice to return to the Conversational AI dashboard.
2. Click **Conversation Builder**.
3. Select the bot you previously created.
4. Create a new regular dialog named "Billing Question".

    By default, a regular dialog includes a Dialog Starter interaction, but it isn't configured yet. You'll use the [Assist tool](conversation-builder-assist.html) to do this.

5. Click <img style="width:25px" src="img/ConvoBuilder/getstartedtutorial/icon_assist.png"> (Assist icon) beside the interaction to open the Assist tool.
6. In Assist, search for the name of the domain that you created (e.g., Getting started).

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/getstartedtutorial/assist_1.png">

7. Select the domain to associate it with the dialog starter.

    In Assist, the intents within the domain are displayed. Type in a sample user message to use the NLU engine to identify the correct intent.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/getstartedtutorial/assist_2.png">

8. Select the "Billing question" intent that you created. This associates the intent with the dialog starter.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/getstartedtutorial/billing_dialog.png">

