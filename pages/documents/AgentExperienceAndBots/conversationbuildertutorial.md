---
pagename: Conversation Builder Tutorial
sitesection: Documents
categoryname: "Agent Experience & Bot"
documentname: Conversation Builder
permalink: conversation-builder-conversation-builder-tutorial.html
indicator: both
---

### Overview

This guide will step you through setting up a Routing Bot with the Conversation Builder. The goal of this tutorial is to familiarze yourself with the Conversation Builder, it's main functionality and areas. Connection to a LiveEngage account is not covered.  

### Step 1: Create New Router Bot

This step requires that you have a user account for the Conversation Builder platform. If you do not, your team should have an Administrator assigned who can create one for you.

#### Importing the Template

1. Once provided a Conversation Builder account, select your region (United States) and login at [https://alpha.botcentralai.com/#/account/signin](https://alpha.botcentralai.com/#/account/signin)

    ![](img/conversationimages/image_1.png)

2. Click on the Bot Builder icon.

    ![](img/conversationimages/image_2.png)

3. Click on the NEW BOT icon and give your bot a unique name and description. Be sure to select Version 2.0 under Bot Builder and Consumer Facing Bot. Then select **Router Bot for Training** from the template area below and hit Save.

4. You will be taken to your new automation in the Conversation Builder.

    ![](img/conversationimages/image_3.png)

#### Initial Bot Setup

**Before you do anything else**, we need to "Publish" the bot to your Organization. (For those with access to multiple organizations, the bot will default to Private, which is why we want to change it.)

1. Click the gear <img class="inlineimage" src="img/conversationimages/image_4.png" /> icon on the right sidebar and then Bot Settings. Scroll down and click "More Settings".

2. Where it says "Publish Bot" change to the appropriate organization and hit Save.

    ![](img/conversationimages/image_5.png)

#### Testing Your Bot

To quickly test your bot’s functionality, click on the Chat preview button <img class="inlineimage" src="img/conversationimages/image_6.png" /> on the right sidebar and type one of the options (or not, if you want to see how the bot responds to unstructured text). Keep in mind, the Chat preview is not connected to LiveEngage and cannot display the actual transfer to agent. For that you’ll need to connect your bot to LiveEngage and view an interaction with a chat or messaging consumer.

You may need to type "**reset**" and hit enter. Then type “hi” to trigger the initial Welcome message. **Reset** clears all variables to start fresh.

<img src="img/conversationimages/image_7.png" style="height:500px">

Select one of the options by clicking on a button or by typing a keyword like **billing**, **account**, **offers** or **help**.

### Step 2: Modifying the Template

Now that we’ve got our template all setup, let’s learn how our bot responds to user input and how to change its configuration.

#### The Welcome

This bot is setup to **route to 4 different skills** based on certain options (Billing, Your Account, Special Offers and Other), but you can change them to whatever you like. Let’s start with the Welcome message that users will see by default.

1. If it’s not already selected, select the Welcome dialog from the dialog tabs:

    ![](img/conversationimages/image_8.png)

    1. This dialog is set to respond to various greeting patterns. Once of these patterns is recognized, the bot will send out the welcome dialog. We recommend leaving the patterns as is. At the very least, leave a "hi" pattern which we use as a default trigger (otherwise, no pattern will be matched and the bot won't trigger).

        ![](img/conversationimages/image_9.png)

    2. The Welcome text is a simple text interaction that greets the user. Edit this greeting message to introduce the automation to your users.

        ![](img/conversationimages/image_10.png)

    3. This component, which is serving as a "Main Menu", is using a multiple choice interaction to display routing options to your users.

        ![](img/conversationimages/image_11.png)

    4. Click on this interaction and on the top of the right panel, make sure "USER RESPONSE" is selected. This panel allows you to determine how you want this interaction to react to the user’s next response. For the moment we are using a simple pattern to match the word “billing” (by using the pattern “billing”) which will navigate to the Option 1 dialog and, within it, to the "billing text" interaction which appears in the dropdown. Ultimately, this will trigger the escalation to the Billing skill.

        <img src="img/conversationimages/image_12.png" style="height:500px">

2. Let’s add more patterns to make our automation more responsive to the billing option. There are several considerations to take into account when we use patterns. Follow along to understand the details:

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

#### The Reprompt

<img src="img/conversationimages/image_13.png" style="height:250px">

From the dialog tabs, select the Reprompt dialog. Click on the small arrow to display the dialog menu and click Dialog Settings. Note that the **Type** for this dialog is **Fallback**. This means that this dialog  will be triggered whenever someone types in something the bot doesn’t understand.

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

### Step 3: Intents

#### Working with Intents

We’ve seen what we can do with patterns thus far. Intents are different and more powerful: where patterns provide a more exact match approach, intents use NLU (Natural Language Understanding) to provide a more flexible matching approach. Let’s try it!

Before we make changes to our beautiful template, let's **save the current version** as a backup.

1. Click on the versions icon <img class="inlineimage" src="img/conversationimages/image_21.png" /> on the right sidebar. Then click Save Current Version, give it a name and then hit Save. This backup can now be used to revert to the last known good version of your automation.

    <img src="img/conversationimages/image_22.png" style="height:250px">

2. Exit the Bot Builder <img class="inlineimage" src="img/conversationimages/image_23.png" /> and select Intent Builder from the drop down menu at the top left.

3. On the Intent Builder dashboard click the Add Domain button to create your own new Domain. Domains are groups of intents and entities, usually gathered for use with one brand or bot experience. **Give your domain a unique name** and hit Add Domain.

4. You should now be looking at a blank intent detail view like this:

    <img src="img/conversationimages/image_24.png" style="height:300px">

Now let’s create our first intent for our Billing option.

1. Give your intent a name like "I have a billing question".

2. Then add 5 or so training phrases like "can you help me with my billing issue", etc. When done hit Add Intent. Remember these guidelines when creating an intent:

    1. **Intents match an ENTIRE SENTENCE** against a set of training sentences or KB articles and the results are scored based on level of confidence (VERY GOOD, GOOD, FAIR PLUS, FAIR, POOR).

    2. **Intents do NOT have to be an exact match** like patterns, but need to be similar.

    3. **Intents can contain entities** for more flexible matching.

3. You can test how well your intent is matching by clicking on the debugger icon on the right sidebar and entering a phrase. This phrase matched VERY GOOD, which is the highest level of confidence.

    ![](img/conversationimages/image_25.png)

To try this out, we need to associate this domain with our automation and the intent with the message.

1. Exit the Intent Builder <img class="inlineimage" src="img/conversationimages/image_23.png" /> and then select Bot Builder from the drop down menu. Enter your bot automation and go to <img class="inlineimage" src="img/conversationimages/image_4.png" /> Automation Settings > More Settings > Entity and select **the specific Domain you created above** and hit Save.

2. Now select the Welcome dialog and select the Main Menu interaction again. Click on the Interaction Settings <img class="inlineimage" src="img/conversationimages/image_28.png" /> and instead of using patterns, we are going switch to our new intent.

3. In the Match Type drop down menu, select Response Intent.

    <img src="img/conversationimages/image_29.png" style="height:150px">

4. Now select the intent you just created for Billing.

    <img src="img/conversationimages/image_30.png" style="height:150px">

5. Click on the previewer, type "reset" and then type something similar to your billing intents like “I need help with billing” which should now match your message, not with patterns, but with intents!

    <img src="img/conversationimages/image_31.png" style="height:300px">

#### Adding Entities

If you really want to ramp up the power of your intents, you can add **entities** to them. Entities are keywords that represent a number of synonyms (eg: the entity "billing" could represent: bills, billing, payment, statement, etc).

1. To add an entity, go back to the Intent Builder, select your Domain and select the Entities tab.

2. Add an entity for billing (or whichever works with your intent example) with a number of synonyms and Save.

    <img src="img/conversationimages/image_32.png" style="height:600px">

3. Now, within your intent for billing, all of those synonyms will be swapped in any time the entity name is represented (in this case **billing**). So if a user says "I have a question about my payment" it should match due to the entity being matched, since "payment" is included in the "billing" enttiy. You can try this in the intent debugger.

    <img src="img/conversationimages/image_33.png" style="height:500px">

#### Your Friend, the Debugger

Before we move on, it’s important to discuss a way to test and troubleshoot your automations, called the Debugger. The debugger will display all of the logs and developer added messages available for your automation. Every instance of your automation (in the previewer, on the web, in SMS, in Facebook Messenger, etc) for every single user, each have their own User ID. See the screenshot below for an example of how to retrieve your User ID.

<img src="img/conversationimages/image_34.png" style="height:200px">

* To view debugger output, click on the previewer and type "display userid" and copy everything **AFTER** “UserId:”.

* Next, click on the Debugger <img class="inlineimage" src="img/conversationimages/image_4.png" /> icon and paste that into the field and hit REFRESH.  You should be seeing the initial logs for your bot. You’ll need to hit refresh to get the latest logs.

##### Add a debug message

![](img/conversationimages/image_36.png)

1. Go to the Welcome dialog of your automation and select the greeting text interaction.

2. Click the interactions settings icon and then click the CODE tab. This is where you can add additional JavaScript (if required) to run before or after your interaction displays.

3. We will add our debug message before the interaction is displayed. Click the **PreProcess Code** + which will launch a JavaScript editor.

    * Add the following to the editor and hit Save: botContext.printDebugMessage(‘Here is my Welcome debug message!’);

    * NOTE: if you copy and paste the above line, the quotes may not paste correctly. Replace them using your keyboard and hit Save.

4. You will need to type "**reset**" and “**hi**” to trigger the updated Welcome message.

5. Switch to the Debugger and hit Refresh. You should now see your message in the log.

    <img src="img/conversationimages/image_37.png" style="height:100px">

6. Add another debug message in one of your Options dialogs (eg: billing, etc). Did it show up?

### Step 5: Escalation

Because this is a routing bot, its main purpose is to route to a particular skill based on the user’s intent.

*Note: For the purposes of this tutorial we will NOT be connecting to LiveEngage.*

#### Edit transfer messages

<img src="img/conversationimages/image_38.png" style="height:200px">

1. Select one of the options dialogs (eg: Billing), select the text interaction with the variable transferMessage being shown.

2. Navigate to view the PreProcess code using the settings panel. This is where you will edit the **transfer message** for that intent; this is the message that will be sent to the user before being transferred to an agent.

3. Currently the transfer message says "Thank you! I'll transfer you to an agent who can help with your billing issue. One moment, please." Edit this message to reflect your brand’s tone and personality. Hit Save and test in the previewer.

4. Edit the transfer messages in each of the other Option dialogs as well.

5. You can also see the Escalation interaction in each of these dialogs. This will perform the API call that handles the transfer to a LiveEngage agent (once your automation is connected to a LiveEngage account).
