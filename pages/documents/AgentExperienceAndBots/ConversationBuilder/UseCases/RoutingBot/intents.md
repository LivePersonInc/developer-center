---
pagename: Step 3 - Intents
sitesection: Documents
categoryname: "Agent Experience & Bot"
documentname: Conversation Builder
subfoldername: Routing Bot Tutorial
permalink: conversation-builder-routing-bot-tutorial-step-3-intents.html
indicator: both
---

### Working with Intents

We’ve seen what we can do with patterns thus far. [Intents](conversation-builder-intent-builder-overview.html) are different and more powerful: where patterns provide a more exact match approach, intents use NLU (Natural Language Understanding) to provide a more flexible matching approach. Let’s try it!

Before we make changes to our beautiful template, let's **save the current version** as a backup.

1. Click on the versions icon <img class="inlineimage" src="img/conversationimages/image_21.png" /> on the right sidebar. Then click Save Current Version, give it a name and then hit Save. This backup can now be used to revert to the last known good version of your automation.

    <img src="img/conversationimages/image_22.png" style="height:250px">

2. Exit the Bot Builder <img class="inlineimage" src="img/conversationimages/image_23.png" /> and select Intent Builder from the drop down menu at the top left.

3. On the [Intent Builder dashboard](conversation-builder-intent-builder-overview.html) click the Add Domain button to create your own new Domain. Domains are groups of intents and entities, usually gathered for use with one brand or bot experience. **Give your domain a unique name** and hit Add Domain.

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

### Adding Entities

If you really want to ramp up the power of your intents, you can add **entities** to them. [Entities](conversation-builder-intent-builder-entities.html) are keywords that represent a number of synonyms (eg: the entity "billing" could represent: bills, billing, payment, statement, etc).

1. To add an entity, go back to the Intent Builder, select your Domain and select the Entities tab.

2. Add an entity for billing (or whichever works with your intent example) with a number of synonyms and Save.

    <img src="img/conversationimages/image_32.png" style="height:600px">

3. Now, within your intent for billing, all of those synonyms will be swapped in any time the entity name is represented (in this case **billing**). So if a user says "I have a question about my payment" it should match due to the entity being matched, since "payment" is included in the "billing" enttiy. You can try this in the intent debugger.

    <img src="img/conversationimages/image_33.png" style="height:500px">

### Your Friend, the Debugger

Before we move on, it’s important to discuss a way to test and troubleshoot your automations, called the Debugger. The debugger will display all of the logs and developer added messages available for your automation. Every instance of your automation (in the previewer, on the web, in SMS, in Facebook Messenger, etc) for every single user, each have their own User ID. See the screenshot below for an example of how to retrieve your User ID.

<img src="img/conversationimages/image_34.png" style="height:200px">

* To view debugger output, click on the previewer and type "display userid" and copy everything **AFTER** “UserId:”.

* Next, click on the Debugger <img class="inlineimage" src="img/conversationimages/image_4.png" /> icon and paste that into the field and hit REFRESH.  You should be seeing the initial logs for your bot. You’ll need to hit refresh to get the latest logs.

#### Add a debug message

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
