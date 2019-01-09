---
pagename: Step 2 - Modifying the Template
sitesection: Documents
categoryname: "Agent Experience & Bot"
documentname: Conversation Builder
subfoldername: Routing Bot Use Case
permalink: conversation-builder-routing-bot-use-case-step-2-modifying-the-template.html
indicator: both
---

Now that we’ve got our template all setup, let’s learn how our bot responds to user input and how to change its configuration.

### The Welcome

This bot is setup to **route to 4 different skills** based on certain options (Billing, Your Account, Special Offers and Other), but you can change them to whatever you like. Let’s start with the Welcome message that users will see by default.

1. If it’s not already selected, select the Welcome dialog from the [dialog tabs](conversation-builder-overview-component-breakdown.html#the-dialog-list):

    ![](img/conversationimages/image_8.png)

    1. This dialog is set to respond to various greeting [patterns](conversation-builder-overview-conditions.html#pattern-matching). Once one of these patterns is recognized, the bot will send out the welcome dialog. We recommend leaving the patterns as is. At the very least, leave a "hi" pattern which we use as a default trigger (otherwise, no pattern will be matched and the bot won't trigger).

        ![](img/conversationimages/image_9.png)

    2. The Welcome text is a simple [text interaction](conversation-builder-overview-user-interactions.html) that greets the user. Edit this greeting message to introduce the automation to your users.

        ![](img/conversationimages/image_10.png)

    3. This component, which is serving as a "Main Menu", is using a [multiple choice interaction](conversation-builder-overview-interactions.html) to display routing options to your users.

        ![](img/conversationimages/image_11.png)

    4. Click on this interaction and on the top of the right panel, make sure "USER RESPONSE" is selected. This panel allows you to determine how you want this interaction to react to the user’s next response. For the moment we are using a simple [pattern](conversation-builder-overview-conditions.html#pattern-matching) to match the word “billing” (by using the pattern “billing”) which will navigate to the Option 1 dialog and, within it, to the "billing text" interaction which appears in the dropdown. Ultimately, this will trigger the escalation to the Billing skill.

        <img src="img/conversationimages/image_12.png" style="height:500px">

2. Let’s add more patterns to make our automation more responsive to the billing option. There are several considerations to take into account when we use patterns (complete information on patterns can be found [here](conversation-builder-overview-conditions.html)). Follow along to understand the details:

    1. **Patterns match EXACT keywords and phrases**

        1. eg: **billing**, **payment**, **pay** will match these keywords **exactly**.

        2. Add at least 5 single keywords to the patterns by clicking New Pattern.

        3. Enter different variations of your keywords in the previewer and see what happens.

    2. **Patterns can use alternates for specific variations**

        1. For example, <span><b>״I have a question about (billing|my bill|payments|paying)</b>"</span> will match "I have a question about billing" or “I have a question about my bill”.

        2. Add 3 different patterns using alternates.

        3. Enter different variations of your alternate sentences in the previewer and see what happens.

    3. **Patterns can include wildcards for looser matches**

        1. For example, ***billing*** would match "billing", “I have a question about billing”, “I have a billing issue”, etc.

        2. Add 3-5 more patterns using wildcards.

        3. Try different variations of sentences in the previewer and see what happens.

    4. **Click on each of the paging dots at the bottom of the panel to see the other Conditions being matched for the other options (account, offers, other).**

        1. Perform the steps we just completed above for billing, for each of the other options (account, offers, other).

        2. The Other pattern could be used for something else not listed. You could add patterns for "agent", “help” or “something else” as well.

    5. The last Condition (using the wildcard * as a pattern) is a "catch-all" that will match any random utterance the user provides and direct them to the **Reprompt** dialog (see below for more information on this).

    6. Now that you’ve seen how we’re matching patterns, use the previewer to test these keywords and see where it works and where it fails.

### The Reprompt

<img src="img/conversationimages/image_13.png" style="height:250px">

From the dialog tabs, select the Reprompt dialog. Click on the small arrow to display the dialog menu and click Dialog Settings. Note that the **Type** for this dialog is **Fallback**. This means that this dialog will be triggered whenever someone types in something the bot doesn’t understand.

<img src="img/conversationimages/image_14.png" style="height:250px">

The Reprompt menu interaction should perform the same function as the Main Menu interaction, in this case. Select it and check the User Response panel. **The patterns are missing! You need to add them!**

1. On the User Response panel, click on the Match Type drop down menu and select **Pattern**.

    <img src="img/conversationimages/image_15.png" style="height:250px">

2. click on the New Pattern bubble and add the patterns we created earlier for **billing** and hit enter.

    <img src="img/conversationimages/image_16.png" style="height:250px">

3. Now we need to tell the interaction where to go when it matches. click on the Next Step drop down menu and look for Option 1 > billing text. Select it

    <img src="img/conversationimages/image_17.png" style="height:200px">

4. Let’s add the conditions for account, offers and other. Click on the **+ Response Match & Actions link.**

5. click on the **+** icon next to Conditions to add another condition.

6. Perform the same steps as billing. This time use the patterns you created for "account" for the pattern.

7. From the Next Step menu select Option 2 > account text.

    <img src="img/conversationimages/image_18.png" style="height:200px">

8. Add another Response Match for Special Offers.

9. Add a condition and select pattern. This time user "offer" as the pattern.

10. From the Next Step menu select Option 3 > offer text.

    <img src="img/conversationimages/image_19.png" style="height:200px">

11. Add another Response Match for Other.

12. Add a condition and select pattern. This time user "other" as the pattern.

13. From the Next Step menu select Option 4 > other text. Option 4 is the default escalation.

    <img src="img/conversationimages/image_20.png" style="height:200px">

14. Since we’re already in the Reprompt dialog, if someone says anything NOT in out list of options, we don’t want them to get stuck in an infinite loop. Not fun for anyone! So let’s create one last Response Match, but _this_ time let’s make our pattern a wildcard * and for the Next Step, select Option 4 > other text. This will escalate the user directly.

15. Once you’ve finished, go to the previewer and type "reset" and “hi”. Then try out your router automation. Try the buttons, try typing, try typing something unexpected and see what happens. REMEMBER: this is not connected to LiveEngage so you will not actually be escalating.
