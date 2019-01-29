---
pagename: Intents
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Getting Started
permalink: conversation-builder-getting-started-intents.html
indicator: both
---

Now let’s take what we’ve learned to the next level and instead of using patterns to trigger a dialog, we’ll use intents for a simple "Billing" use case. 

### Step 5: Simple Billing Use Case

Since we’re going to be using intents for this example, we need to leave Conversation Builder for a moment. Tap on the Home <img style="width:40px" src="img/ConvoBuilder/helloworld/image_9.png"> icon in the right sidebar to return to your Dashboard. Then, from the drop down menu in the header, select Intent Builder.

<img style="width:500px" src="img/ConvoBuilder/helloworld/image_10.png">

The Intent Builder is where we create Domains, which are collections of Intents and Entities. Let’s create our own domain by tapping on the Add Domain button. Give it a unique name and tapp Add Domain. NOTE: You can import a CSV of Intents and Entities also.

<img style="width:200px" src="img/ConvoBuilder/helloworld/adddomain.png">

<img style="width:400px" src="img/ConvoBuilder/helloworld/namedomain.png">

Now we can begin to create our first Intent. Give it a name like "Billing Question" and add some Training Phrases. These should be complete sentences like “I have a question about my bill”. NOTE: Use the word “bill” throughout your training phrases. We will use it as an entity. Tap Add Intent when you’re finished.

<img style="width:600px" src="img/ConvoBuilder/helloworld/image_11.png">

We can use the debugger to help us see how our training phrases would return. Tap on the Debugger icon on the right and enter an utterance that is close to one of your sentences, like "I need help with my bill". Next try another phrase but use “billing” instead of “bill”.

<img style="width:400px" src="img/ConvoBuilder/helloworld/matchverygood.png">

<img style="width:400px" src="img/ConvoBuilder/helloworld/matchfair.png">

The result when using "billing" is only FAIR because it is not recognized as a synonym for “bill”. We can remedy this by creating an Entity. 

Tap on the Entities tab. Create a new entity called "bill" and add a number of synonyms like bill, billing, payment, statement, etc and then hit Add Entity.

<img style="width:200px" src="img/ConvoBuilder/helloworld/domainentities.png">

<img style="width:400px" src="img/ConvoBuilder/helloworld/billentity.png">


To see how adding an entity can improve your NLU matching, select the Intent tab, select the debugger from the side bar and re-enter the "billing" phrase: “I have a billing question”. Your results should now be VERY GOOD and you can see that the entity @bill was detected as well.

<img style="width:400px" src="img/ConvoBuilder/helloworld/image_12.png">

Now that our Billing intent is configured, let’s return to the Conversation Builder and use it to trigger a new dialog. Navigate to the Conversation Builder using the drop down. Select the bot you created.

Once opened, create a new dialog and name it "Billing". 

Next, add a User Says interaction and enter the phrase "I have a question about my bill" as the sample text and hit enter.

<img style="width:300px" src="img/ConvoBuilder/helloworld/usersaysbilling.png">

<img style="width:300px" src="img/ConvoBuilder/helloworld/billinginteraction.png">


Now, tap on the Assist <img style="width:40px" src="img/ConvoBuilder/helloworld/image_13.png"> icon which will display the available Domains. Select the domain you created. This will enable the Assistant to use the platform’s NLU to match your User Says interaction against any available intents. 

<img style="width:300px" src="img/ConvoBuilder/helloworld/selectdomain.png">

<img style="width:300px" src="img/ConvoBuilder/helloworld/selectintents.png">


Select the Billing Question intent that you created to associate it with the Billing dialog and the User Says interaction. 

Now we can begin to build out our dialog. Let’s add a text statement to tell users that we can help them.

Next, we can add a multiple choice question to ask them if they want a copy of their most recent bill. Add the options "Yes" and “No” as choices. 

<img style="width:350px" src="img/ConvoBuilder/helloworld/yesnoprompt.png">

<img style="width:300px" src="img/ConvoBuilder/helloworld/yesstatement.png">


Now, when someone says "yes" or “no” we’ll want to show them a particular message. Add a text statement for “yes” and enter the following statement “If you’d like a copy of your most recent bill, please go to http://www.telco.com”. 

To better differentiate this statement, change its name to "Yes Statement" in the right Interaction Details panel. In addition, the behavior for statements is to display the next interaction. We want to stop after we show the Yes Statement, so in the Next Step drop down, select End Interaction.

Now let’s add a text statement for "no" and enter the following statement “OK. How else can I help you today?” We also should change the name to of this interaction to “No Statement”.

We’ve got our dialog fleshed out, now we need to add conditions to detect when a user says "yes" or “no” and direct them to the correct text statement. Select the multiple choice interaction, then select the Interaction Details icon. Under User Response you’ll see the Conditions panel.

<img style="width:300px" src="img/ConvoBuilder/helloworld/userresponseyes.png">

<img style="width:300px" src="img/ConvoBuilder/helloworld/userresponseno.png">


Add a condition using the **+** icon, select Pattern from the drop down menu. For "yes" add a pattern like `(yes|yah|yup)`. Then for the Next Step select the Yes Statement.

Now tap on the **+** Response Match & Actions link to add another condition for "no". Add a pattern like `(no|nope|nah)`. Then for Next Step select the No Statement.

Select the Previewer icon and lets see the complete dialog in action.

Type in an utterance that should match for your billing intent like "I have a question about my bill". You should see the billing dialog and multiple choice question. Tap or type “yes” or “no” and see what response you get.

<img style="width:300px" src="img/ConvoBuilder/helloworld/yestest.png">

<img style="width:300px" src="img/ConvoBuilder/helloworld/notest.png">
