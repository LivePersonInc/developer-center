---
pagename: 1 - Dialogues and Patterns
redirect_from: conversation-builder-tutorials-getting-started-part-1.html
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Tutorials
permalink: conversation-builder-tutorials-1-dialogues-and-patterns.html
indicator: both
---

This guide will help step you through setting up a simple Hello World bot with Conversation Builder. 

### Step 1: Create a New Bot

This step requires that you have a user account for the Conversation Builder platform. If you do not, your team should have an Administrator assigned who can create one for you.

1. Once provided a Conversation Builder account, select your region and login at [https://platform.botcentralai.com](https://platform.botcentralai.com)

    <img style="width:750px" src="img/ConvoBuilder/helloworld/image_1.png">

2. Click on the Conversation Builder icon.

    <img style="width:750px" src="img/ConvoBuilder/helloworld/image_2.png">

3. Tap on the **New Automation** icon and give your bot a unique name and description. Be sure to select Version 2.0 under Bot Builder and Consumer Facing Bot. 

    Then select **Basic Automation** from the template area below and hit Save.

    <img style="width:750px" src="img/ConvoBuilder/helloworld/newAutomation.png">

    <img style="width:750px" src="img/ConvoBuilder/helloworld/createAutomation.png">

4. You will be taken to your new automation in the Conversation Builder.
    <img style="width:750px" src="img/ConvoBuilder/helloworld/image_3.png">

5. **Before you do anything else**, we need to "Publish" the bot to your Organization. (For those with multiple Org access, the bot will default to Private, which is why we want to change it.)
  * Tap the gear <img style="width:40px" src="img/ConvoBuilder/helloworld/image_4.png"> icon on the right sidebar and then Automation Settings. Scroll down and tap "More Settings".
  * Where it says "Publish Automation", change to the appropriate Org and hit Save.
    
    <img  src="img/ConvoBuilder/helloworld/image_5.png">

### Step 2: Hello World

Now that we’ve got our bot automation prepared, let’s learn about the different parts of the Conversation Builder and see how we can make our automation respond to user utterances.

On the left is our **Interactions** palette, in the middle is our **Dialog** editor and on the right is access to **Settings**, **Chat Preview**, **Debugger** and more.

Currently our automation only has one dialog called **Welcome**. The first interaction in the Welcome dialog is a **User Says** interaction that allows us to match a user’s utterance using patterns or intents. Following that is a simple **Text Statement** interaction that displays some text ("Hi there! Thanks for coming!") to the user.  

The statement interactions (Text, Image, Audio, Video) are for displaying content to the user, without listening for a user response. Once the statement is displayed, it will move on to whatever is next in the dialog.

Let’s see them in action! Tap on the Chat Preview icon <img style="width:40px" src="img/ConvoBuilder/helloworld/image_6.png"> on the right sidebar and you should now see the Welcome dialog display. When an automation is launched for the first time, we automatically send a "hi" message to start the conversation. NOTE: We do not do this for messaging, because messaging deployments are initialized by a user utterance.

<img style="width:400px" src="img/ConvoBuilder/helloworld/testConvo.png">

Now type "reset" to start fresh and then type “hello” or “hello there” and you should get the welcome again.

So how does the Welcome dialog get triggered? Tap on the **User Says** interaction and then on the right side bar, tap on the Interaction Details <img style="width:40px" src="img/ConvoBuilder/helloworld/image_7.png"> icon and then tap Settings.  Under Patterns you should see the different patterns used to match this particular dialog. You can ALSO use Intents to trigger a dialog, but for this exercise, we’ll focus on patterns.


<img style="width:400px" src="img/ConvoBuilder/helloworld/usersays.png">

<img style="width:350px" src="img/ConvoBuilder/helloworld/interactiondetails.png">

Since this is a "welcome" dialog, it uses patterns like “hi”, “hello” and “howdy” to match those phrases exactly and display a response. Add another couple patterns (eg: “hiya”, “ciao”, “hola”) and test them in the previewer.

By adding wildcards (eg: `hi *` or `hello *`) you allow for broader matches like “hi there” or “hello my friend”. Using parentheses and pipes allow you to specify a series of alternates. For instance, `(hi|hello|hey)*` will match “hi” as well as “hello there” and “hey you”.

Now that you’ve seen how a dialog is triggered, let’s change the welcome **response** by editing the Text Statement interaction. Tap on the Text interaction and change the text to "Hello World!" and hit enter. To see your change, type “reset” and then “hi” in the Chat Preview. You should now be seeing your “Hello World!” response.

<img style="width:400px" src="img/ConvoBuilder/helloworld/textresponse.png">

<img style="width:350px" src="img/ConvoBuilder/helloworld/helloworld.png">


### Step 3: New Dialog (Goodbye)

Let’s create another dialog to put these concepts into practice. Since we have a "Welcome" dialog, let’s create a “Goodbye” dialog. Tap on the Add Dialog + icon to create a new dialog. Then give it a name like Goodbye.

<img style="width:400px" src="img/ConvoBuilder/helloworld/addnewdialog.png">

<img style="width:400px" src="img/ConvoBuilder/helloworld/namedialog.png">


Your new Goodbye dialog will be completely empty. To allow your dialog to be triggered by patterns and intents, add a User Says interaction from the left Interaction palette. Then type a sample intent or phrase (in our case "goodbye") into the User Says and hit enter.

<img style="width:400px" src="img/ConvoBuilder/helloworld/goodbyedialog.png">

<img style="width:400px" src="img/ConvoBuilder/helloworld/addnewpattern.png">


To add the patterns for our Goodbye dialog, tap on the Interaction Details icon <img style="width:40px" src="img/ConvoBuilder/helloworld/image_8.png"> and then Settings.  Now add patterns like "goodbye", “bye”, “see ya”, etc.

Before we go to the Previewer, we need to add some content to display once we’ve matched our patterns. Tap on the Text statement interaction in the Interaction palette and type your goodbye message (eg: "Bye, thanks for coming!") and hit enter. Now go to the Previewer, type “reset” and then type “hi” to see the Welcome dialog and then type “bye” to trigger the Goodbye dialog and to see your goodbye message.

<img style="width:300px" src="img/ConvoBuilder/helloworld/byethanks.png">

<img style="width:300px" src="img/ConvoBuilder/helloworld/byetest.png">


### Step 4: The Fallback Dialog

So we’ve seen how to create a new dialog and trigger it by using patterns. But what happens when you enter an utterance that has not been accounted for? We need to provide a "Fallback Dialog" to catch these when they occur.

Tap on the Add Dialog + icon to add another dialog, name it "Fallback", and this time, be sure to select Fallback Dialog as the type.

<img style="width:300px" src="img/ConvoBuilder/helloworld/createfallback.png">

<img style="width:350px" src="img/ConvoBuilder/helloworld/fallbacktext.png">


We don’t need to add a User Says interaction to a Fallback dialog, because it has special properties that will cause it to display when there are no other matches available. NOTE: there can only be ONE Fallback Dialog per bot/automation.

We do, however, need to add some type of message to tell the user that we didn’t understand their query. Add a new Text statement and provide a message like "Sorry, I only know ‘hello’ and ‘goodbye’..." or similar and hit enter. Now, go to the Previewer, type “reset” and then type something other than your hello and goodbye patterns. You should now be getting your fallback message.
