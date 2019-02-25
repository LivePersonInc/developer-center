---
pagename: 2 - Intents
redirect_from: conversation-builder-getting-started-getting-started-part-2.html
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Getting Started
permalink: conversation-builder-getting-started-2-intents.html
indicator: both
---

Now let’s take what we’ve learned to the next level and instead of using patterns to trigger a dialog, we’ll use intents.

### Step 5: Create Billing Intent

Since we’re going to be using intents for this example, we need to leave the Conversation Builder app for a moment. 

Tap on the bot library <img style="width:40px" src="img/ConvoBuilder/helloworld/bot_library.png"> icon on the top-left to return to your bot library. Then, from the drop down menu in the header, select Intent Builder.

<img style="width:750px" src="img/ConvoBuilder/helloworld/image_10.png">

The Intent Builder is where we create Domains, which are collections of Intents and Entities. Learn about the different parts of the Intent Builder app [here](conversation-builder-intent-builder-overview.html).

Let’s create our own domain by tapping on the Add Domain button. Name the Domain after your Org (eg. "ACME Co"), select Manual and click Add Domain. NOTE: You can import a CSV of Intents and Entities also.

<!--<img style="width:750px" src="img/ConvoBuilder/helloworld/adddomain.png">-->

Now we can begin to create our first Intent. Name it "Billing Question".

Click on Training and add the following training phrases, hitting enter to add them:

* i have a question about my bill
* can you help me with my bill
* i have a bill related question
* my bill is past due

{: .important}
Using the word “bill” throughout your training phrases is important because we will create an entity named "bill" that the phrases will recognize. 

Tap Add Intent when you’re finished.

<img style="width:750px" src="img/ConvoBuilder/helloworld/image_11.png">

We can use the debugger to help us see how our training phrases would return. Tap on the Debugger icon <img style="width:40px" src="img/ConvoBuilder/helloworld/debugger_icon.png"> on the right and enter an utterance that is close to one of your sentences, like "I need help with my bill". Next try another phrase but use “billing” instead of “bill”.

<!--<img style="width:400px" src="img/ConvoBuilder/helloworld/matchverygood.png">-->

<img style="width:750px" src="img/ConvoBuilder/helloworld/matchfair.png">

The result when using "billing" is only FAIR because it is not recognized as a synonym for “bill”. We can remedy this by creating an [Entity](conversation-builder-intent-builder-entities.html). 

Tap on the Entities tab on the left sidebar. Create a new entity called "bill" and add a number of synonyms like `bill`, `billing`, `payment`, `statement`, etc and then hit Add Entity.

<!--<img style="width:200px" src="img/ConvoBuilder/helloworld/domainentities.png">-->

<img style="width:750px" src="img/ConvoBuilder/helloworld/billentity.png">


To see how adding an entity can improve your NLU matching:

* Go back to the Intents tab
* Select the Billing Question intent
* Select the debugger from the right sidebar
* Re-enter the "billing" phrase: “I need help with my billing”. 

Your results should now be VERY GOOD and you can see that the entity @bill was detected as well.

<img style="width:750px" src="img/ConvoBuilder/helloworld/image_12.png">

### Step 6: Link Intent in Conversation Builder

Now that our Billing intent is configured, let’s return to the Conversation Builder and use it to trigger a new dialog. 

Navigate to the Conversation Builder by clicking on the top-left dropdown menu. Select the bot that you previously created.

Once opened, create a new regular dialog and name it "Billing".

The [Assist tool](conversation-builder-conversation-builder-assist.html) that automatically displays will help us to link the domain and intent to this User Says interaction.

From the Assist <img style="width:40px" src="img/ConvoBuilder/helloworld/image_13.png"> tool select the domain you created. This will enable the Assistant to use the platform’s NLU to match your User Says interaction against any available intents. 

<!--<img style="width:750px" src="img/ConvoBuilder/helloworld/selectdomain.png">-->

Next, tap on the User Says interaction and enter the phrase "I have a question about my bill" as the sample text and hit enter.

<!--<img style="width:300px" src="img/ConvoBuilder/helloworld/usersaysbilling.png">

<img style="width:300px" src="img/ConvoBuilder/helloworld/billinginteraction.png">-->

The Assistant will automatically find appropriate Intents to link to this User Says interaction.

<img style="width:750px" src="img/ConvoBuilder/helloworld/selectintents.png">

Select the Billing Question intent that you created to associate it with the Billing dialog and the User Says interaction.

### Step 7: Add Conditions

Now we can begin to build out our dialog. Let’s add a text statement to tell users that we can help them.

Next, we can add a multiple choice question to ask them if they want a copy of their most recent bill. Add the options "Yes" and “No” as choices. 

Now, when someone says "yes" or “no” we’ll want to show them a particular message. Add a text statement for “yes” and enter the following statement “If you’d like a copy of your most recent bill, please go to http://example.com”. 

To better differentiate this statement, change its name to "Yes Statement" in the Settings of the Interaction Details. In addition, the behavior for statements is to display the next interaction. We want to stop after we show the Yes Statement, so in the Next Step dropdown, select End Interaction.

Now let’s add a text statement for "no" and enter the following statement “OK. How else can I help you today?” We also should change the name of this interaction to “No Statement”.

<!--<img style="width:750px" src="img/ConvoBuilder/helloworld/yesnoprompt.png">-->

<img style="width:750px" src="img/ConvoBuilder/helloworld/yesstatement.png">

We’ve got our dialog fleshed out, now we need to add [conditions](conversation-builder-conversation-builder-conditions.html) to detect when a user says "yes" or “no” and direct them to the correct text statement. Select the multiple choice interaction, then select the Interaction Details icon. Under User Response, you’ll see the Conditions panel.

Add a condition using the **+** icon, select Pattern from the drop down menu. For "yes" add a pattern like `(yes|yah|yup)`. Then for the Next Step select the Yes Statement.

<img style="width:750px" src="img/ConvoBuilder/helloworld/userresponseyes.png">

Scroll up to Response Match & Actions and tap on the **+** to add another condition for "no". Add a pattern like `(no|nope|nah)`. Then for Next Step select the No Statement.

<img style="width:750px" src="img/ConvoBuilder/helloworld/userresponseno.png">

Select the Messaging Client icon and lets see the complete dialog in action.

Type in an utterance that should match for your billing intent like "I have a question about my bill". You should see the billing dialog and multiple choice question. Tap or type “yes” or “no” and see what response you get.

<img style="width:750px" src="img/ConvoBuilder/helloworld/yestest.png">

<!--<img style="width:300px" src="img/ConvoBuilder/helloworld/notest.png">-->

You now understand the basics of intents, entities, and branching dialog flows.
