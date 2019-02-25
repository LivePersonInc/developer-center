---
pagename: 1 - Dialogs and Patterns
redirect_from: conversation-builder-getting-started-getting-started-part-1.html
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Getting Started
permalink: conversation-builder-getting-started-1-dialogs-and-patterns.html
indicator: both
---

This guide will help step you through setting up a simple Hello World automation with Conversation Builder. 

### Step 1: Create a New Bot

This step requires that you have a user account for the Conversation Builder platform. If you do not, your team should have an Administrator assigned who can create one for you.

1. Once provided a Conversation Builder account, navigate to [https://platform.botcentralai.com](https://platform.botcentralai.com), enter your credentials, select your region, and log in.

    <!--<img style="width:750px" src="img/ConvoBuilder/helloworld/image_1.png">-->

2. From the list of app icons, click on Conversation Builder in the upper left.

    <!--<img style="width:750px" src="img/ConvoBuilder/helloworld/image_2.png">-->

3. Click **New Automation**, select the Basic Automation template, give your automation a unique name and description, and be sure to select Consumer Facing Bot. 
    <!--<img style="width:750px" src="img/ConvoBuilder/helloworld/newAutomation.png">-->

    <img style="width:750px" src="img/ConvoBuilder/helloworld/createAutomation.png">

4. You will be taken to your new automation in the Conversation Builder.

    Learn about the different parts of the Conversation Builder app [here](conversation-builder-conversation-builder-overview.html).
    <img style="width:750px" src="img/ConvoBuilder/helloworld/image_3.png">

5. **Before you do anything else**, we need to "Publish" the automation (make it Publicly accessible) to your Organization. (For those with multiple Org access, the automation will default to Private, which is why we want to change it.)
  * Click the gear <img style="width:40px" src="img/ConvoBuilder/helloworld/gearicon.png"> icon in the upper-left and then Automation Settings. Scroll down and tap "More Settings".
  * Make sure the Automation Account is set to the appropriate Org.
  * Set the Public slider to on.
  * Scroll down and hit Save.
    
    <img style="width:750px" src="img/ConvoBuilder/helloworld/image_5.png">

### Step 2: Hello World

Now that we’ve got our bot automation prepared, let’s see how we can make our automation respond to user utterances.

Currently our automation only has one dialog called **Welcome**. The first interaction in the Welcome dialog is a **User Says** interaction that allows us to match a user’s utterance using patterns or intents. Following that is a simple **Text Statement** interaction that displays some text ("Hi there! Thanks for coming!") to the user.

The statement interactions (Text, Image, Audio, Video) are for displaying content to the user, without listening for a user response. Once the statement is displayed, it will move on to whatever is next in the dialog.

Learn more about interactions [here](conversation-builder-conversation-builder-interactions.html).

Let’s see them in action! Tap on the Messaging Client icon <img style="width:40px" src="img/ConvoBuilder/helloworld/messaging_client_icon.png"> floating in the bottom-right and you should now see the Welcome dialog display.

Type "reset" in the Messaging Client to start fresh and then type “hello” or “hello there” and you should get the welcome again.

<img style="width:750px" src="img/ConvoBuilder/helloworld/testConvo.png">

So how does the Welcome dialog get triggered? 

Click on the topmost **User Says** interaction if you haven't already done so. There are two small icons to the right of it. Click on the top Interaction Details icon <img style="width:40px" src="img/ConvoBuilder/helloworld/interaction_details_icon.png"> and then tap Settings.  Under Patterns you should see the different patterns used to match this particular dialog. You can *also* use Intents to trigger a dialog, but for this exercise, we’ll focus on patterns.

<img style="width:750px" src="img/ConvoBuilder/helloworld/interactiondetails.png">

Since this is a "welcome" dialog, it uses patterns like “hi”, “hello” and “howdy” to match those phrases exactly and display a response. Add another couple patterns (eg: “hiya”, “ciao”, “hola”) and test them in the previewer.

By adding wildcards (eg: `hi *` or `hello *`) you can allow for broader matches like “hi there” or “hello my friend”. Using parentheses and pipes allow you to specify a series of alternates. For instance, `(hi|hello|hey)*` will match “hi” as well as “hello there” and “hey you”.

Now that you’ve seen how a dialog is triggered, let’s change the welcome **response** by editing the Text Statement interaction. 

Click on the Text interaction below the User Says interaction. Change the text from `Hi there! Thanks for coming!` to just `Hello World!` and hit enter. There is no need to open the Interaction Details panel to change simple output text.

To see your change, open the Messaging Client in the bottom-right, type “reset” and then “hi”. You should now be seeing your “Hello World!” response.

<img style="width:750px" src="img/ConvoBuilder/helloworld/helloworld.png">


### Step 3: New Dialog (Goodbye)

Let’s create another dialog to put these concepts into practice. 

Since we have a "Welcome" dialog, let’s create a “Goodbye” dialog. Click on **+ Dialog** in the bottom-left to create a new dialog, name it "Goodbye" and select Dialog for the Dialog Type.

<img style="width:750px" src="img/ConvoBuilder/helloworld/goodbyedialog.png">

Your new Goodbye dialog will be completely empty. To allow your dialog to be triggered by patterns and intents, add a User Says interaction and name it "Goodbye".

For this User Says interaction to match on user input, we need to add some patterns.

To add the patterns for our Goodbye dialog, tap on the Interaction Details icon <img style="width:40px" src="img/ConvoBuilder/helloworld/interaction_details_icon.png"> and then Settings.  Now add patterns like `goodbye`, `bye`, `see ya`, etc.

<img style="width:750px" src="img/ConvoBuilder/helloworld/addnewpattern.png">

Before we test in the Messaging Client, we need to add some content to display once we’ve matched our patterns. 

Add a Text interaction after the User Says interaction, type your goodbye message (eg: "Bye, thanks for coming!") and hit enter. 

Now go to the Messaging Client, type “reset” and then type “hi” to see the Welcome dialog and then type “bye” to trigger the Goodbye dialog and to see your goodbye message.

<img style="width:750px" src="img/ConvoBuilder/helloworld/byetest.png">

### Step 4: The Fallback Dialog

So we’ve seen how to create a new dialog and trigger it by using patterns. But what happens when you enter an utterance that has not been accounted for? We need to provide a "Fallback Dialog" to catch these when they occur.

Click on **+ Dialog** to add another dialog, name it "Fallback", and this time, be sure to select Fallback Dialog as the type.

We do not need to add a User Says interaction to a Fallback dialog, because it has special properties that will cause it to display when there are no other matches available.

{: .important}
There can only be one Fallback Dialog Type per automation.

We do, however, need to add some type of message to tell the user that we didn’t understand their query. Add a new Text statement and provide a message like `Sorry, I only know ‘hello’ and ‘goodbye’...` or similar and hit enter. 

Go to the Messaging Client, type “reset” and then type something other than your hello and goodbye patterns. You should now be getting your fallback message.

<img style="width:750px" src="img/ConvoBuilder/helloworld/fallbacktext.png">
