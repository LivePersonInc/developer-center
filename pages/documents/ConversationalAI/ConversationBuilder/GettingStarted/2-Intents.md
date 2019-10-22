---
pagename: 2 - Intents
redirect_from: conversation-builder-getting-started-getting-started-part-2.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Getting Started
permalink: conversation-builder-getting-started-2-intents.html
indicator: both
---

In this tutorial, you take things to the next level. Instead of using patterns to trigger a dialog, you use intents.

### Step 5: Create a Billing intent

Since you’re going to be using intents in this tutorial, you need to leave the Conversation Builder application for a moment. 

1. In the upper-left corner, click **< Bots** beside the bot name to return to the list of bots.

    <img class="fancyimage" style="width:200px" src="img/ConvoBuilder/helloworld/image_10.png">

2. Again in the upper-left corner, click **< Apps** to return to the Conversational AI dashboard.
3. Click **Intent Builder**.

    Intent Builder is where you create *domains*, which are collections of *intents* and *entities*. You can learn about the different parts of the Intent Builder application [here](conversation-builder-intent-builder-overview.html).

    Now let’s create a domain.

4. In the upper-right corner, click **New domain**.

5. On the Add Domain page, name the domain after your org (e.g., "ACME Co"), select "Manual", and click **Add Domain**. (While you will manually add intents and entities, they can be imported from a CSV file too.)

    This displays the Add Intent page. Now you can begin to create an intent.

6. Enter "Billing question" for **Intent Name**.

7. In the **Training** section, add the following training phrases, pressing Enter to add each one:

    * i have a question about my bill
    * can you help me with my bill
    * i have a bill related question
    * my bill is past due

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/addIntent1.png">

    Using the word “bill” in the training phrases is important because you will create an entity named "bill" that the phrases will recognize. 

8. Scroll down, and click **Add Intent**.

    Now you can use the debugger to test how the training phrases match against a user's utterance.

9. In the left panel, select the *Billing question* intent, and then click the Debug icon <img style="width:35px" src="img/ConvoBuilder/helloworld/debugger_icon.png"> in the lower-right corner.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/image_11.png">

10. Enter an utterance that is close to one of your sentences, like, "I need help with my bill". Then click **Test**.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/helloworld/matchverygood.png">

11. Enter another utterance but use “billing” instead of “bill”, e.g., "I have a billing question".

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/helloworld/matchfair.png">

    The result when using "billing" is only FAIR because it is not recognized as a synonym for “bill”. You can remedy this by creating an [entity](conversation-builder-intent-builder-entities.html). You do this next.

12. In the upper-right corner, click **Entities**.

13. On the Add Entity page, create a new entity named "bill" and add a number of entity values (synonyms) like `bill`, `billing`, `payment`, and `statement`. Click the **+** sign to add each one.

14. Click **Add Entity**.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/billentity.png">

15. *Now see how adding an entity can improve the NLU matching*: Return to the Intents tab, select the "Billing question" intent, and use the debugger again. This time re-enter the phrase, "I have a billing question".

    Now the result is VERY GOOD, and you can see that the entity @bill was detected as well.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/helloworld/image_12.png">

### Step 6: Link the intent to a Billing dialog

With the "Billing question" intent configured, let’s return to Conversation Builder and use the intent to trigger a new dialog.

1. In the upper-left corner, click **< Domains** to return to the list of domains.
2. Again in the upper-left corner, click **< Apps>** to return to the Conversational AI dashboard.
3. Click **Conversation Builder**.
4. Select the bot you previously created.
5. Create a new regular dialog named "Billing".
6. Add a User Says interaction.
    
    The [NLU Assist tool](conversation-builder-nlu-assist.html) that automatically appears helps you to link the domain and intent to the User Says interaction.
    
    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/selectdomain.png">

7. In the Assist tool <img style="width:35px" src="img/ConvoBuilder/helloworld/icon_assist.png"> , select the domain you created. This enables Assist to use the platform’s NLU to match your User Says interaction against any available intents. 
    
    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/selecteddomain.png">
    
8. Select the User Says interaction, enter the phrase "I have a question about my bill" as the sample text, and press Enter.

    Assist automatically finds appropriate intents to link to the User Says interaction.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/usersaysbilling.png">

9. In the Assist tool, select the "Billing question" intent that you created to associate it with the Billing dialog and the User Says interaction.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/usersaysbilling2.png">

### Step 7: Add response conditions

Now you can begin to build out the Billing dialog.

1. Add a Text statement that says, "I can help you with your bill."

2. Add a Multiple Choice question that asks, "Do you want a copy of your most recent bill?" Enter "Yes" and "No" as the choices.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/billing_mcq.png">

    When someone says "yes," you'll want to show them a specific message. The same applies when someone says, "no."

3. Add a Text statement to respond to a reply of "yes". For the statement's text, enter, "If you'd like a copy of your most recent bill, please go to http://example.com”. In the **Interaction Details**, on the **Settings** tab, change the interaction's name to "Yes statement" to better differentiate the statement from others. And on the **Next Actions** tab, for **Next Step**, select, "End Interaction." Click **Save**.
    
    You make the last change because the default behavior for statements is to display the next interaction. In our example, the No statement will be next. Since the dialog flow should stop after the Yes statement, the Yes statement's next step should be to end.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/yesstatement.png">

4. Add a Text statement to respond to a reply of "no". For the statement's text, enter, “OK. How else can I help you today?” Change this interaction's name to “No statement”. Click **Save**.

    You've got the dialog fleshed out; now you need to add [conditions](conversation-builder-conversation-builder-conditions.html) to detect when a user says "yes" or “no” and direct them to the correct text statement.

5. Select the multiple choice question, and open its Interaction Details. On the **Next Actions** tab, under **Response Match & Actions**, find the Conditions panel.

6. Add a condition to handle a "yes" response: Click the **+** icon beside **Conditions**. Select "Pattern" from the drop-down list, and enter `(yes|yah|yup)` for the pattern. Then, for **Next Step**, select the "Yes statement."

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/userresponseyes.png">

7. Add a condition to handle a "no" response: Click the **+** beside **Response Match & Actions** to add a second condition set. Select "Pattern" here too, but this time enter `(no|nope|nah)` for the pattern. And for the **Next Step**, select the "No statement."

    Now let's see the dialog in action.

8. Open the Preview window, and start a new session by entering "reset" and pressing Enter.

9. Enter an utterance that should match the billing intent, like, "I have a question about my bill". You should see the billing dialog and multiple choice question. Tap or enter “yes” or “no” and see what response you get.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/yestest.png">

You now understand the basics of intents, entities, and branching dialog flows.
