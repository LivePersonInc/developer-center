---
pagename: 1 - Dialogs and Patterns
redirect_from: conversation-builder-getting-started-getting-started-part-1.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Getting Started
permalink: conversation-builder-getting-started-1-dialogs-and-patterns.html
indicator: both
---

This guide will help step you through setting up a simple Hello World bot with Conversation Builder.

### Step 1: Create a New Bot

This step requires that you have a user account for the Conversation Builder platform. If you do not, your team should have an Administrator assigned who can create one for you.

1. Once provided a Conversation Builder account, navigate to [https://platform.botcentralai.com](https://platform.botcentralai.com), enter your credentials, select your region, and log in.

2. On the Conversational AI dashboard, click **Conversation Builder**.

3. Click **New Bot** in the upper-right corner, and select the **Basic Bot** generic [template](conversation-builder-templates-overview.html).

4. Give the bot a unique name and description, and select "Consumer Facing Bot" for the **Bot Type**.
    
    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/createAutomation.png">

    You will be taken to your new bot in Conversation Builder. (Learn about the different parts of Conversation Builder [here](conversation-builder-conversation-builder-overview.html).)
    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/image_3.png">

    **Before you do anything else**, we need to "publish" the bot (make it publicly accessible) to your organization. (For those with multiple Org access, the bot will default to Private, which is why we want to change it.)

7. Click the ellipsis icon <img style="width:35px" src="img/ConvoBuilder/helloworld/icon_ellipsis_horizontal.png"> in the upper-right corner, and then select **Bot Settings** from the menu that appears.
8. On the Bot Settings page, scroll down, and select **More Settings**.
9. Make sure **Bot Account** is set to the appropriate org.
10. Click the **Public** slider to enable it.
11. Scroll down, and click **Save**.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/image_5.png">

### Step 2: Test the Welcome Dialog

Now that we’ve got our bot prepared, let’s see how we can make it respond to user utterances.

Currently the bot has only one dialog named "Welcome." The first interaction in the Welcome dialog is a *User Says* interaction that allows us to match a user’s utterance using patterns or intents. Following that is a *Text Statement* interaction that displays some text ("Hi there! Thanks for coming!") to the user.

Statement interactions (Text, Image, Audio, and Video) are for displaying content to the user, without listening for a user response. Once the statement is displayed, the conversation flow moves on to whatever is next in the dialog. (Learn more about interactions [here](conversation-builder-interactions-interaction-basics.html).)

Let’s see the interactions in action!

1. Click the Preview icon <img style="width:35px" src="img/ConvoBuilder/helloworld/messaging_client_icon.png"> in the lower-right corner. You should see the welcome response in the window.

2. In the Preview window, enter "reset" and press Enter to start fresh.

3. Enter “hello” or “hello there.” You should get the welcome response again.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/testConvo.png">

    So how does the Welcome dialog get triggered?

4. Click the *User Says* interaction (the top interaction) to select it. There are two small icons to the right of it.

5. Click the top **Interaction Details** icon <img style="width:40px" src="img/ConvoBuilder/helloworld/interaction_details_icon.png"> to display the window, and then click the **Settings** tab inside.

6. Under **Patterns**, note the different *patterns* used to match this particular dialog. You can also use *intents* to trigger a dialog, but for this exercise, we focus on patterns.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/helloworld/interactiondetails.png">

    Since this is a "welcome" dialog, it uses patterns like “hi”, “hello” and “howdy” to match those phrases exactly and display a response.

7. Add some more patterns (e.g., “hiya”, “ciao”, “hola”), and then click **Save** in the window.

8. Test the new patterns in the Preview window like you did before.

    By adding wildcards (e.g., `hi *` or `hello *`) you can allow for broader matches like “hi there” or “hello my friend”. Using parentheses and pipes allow you to specify a series of alternates. For instance, `(hi|hello|hey)*` will match “hi”, “hello there”, and “hey you”.

    Now that you’ve seen how a dialog is triggered, let’s change the welcome **response** by editing the Text Statement interaction.

9. Click the Text Statement interaction below the User Says interaction to select it.

10. Change the text from `Hi there! Thanks for coming!` to just `Hello World!` and press Enter. (There is no need to open the Interaction Details panel to change simple output text.)

11. To see your change, open the Preview window again, enter “reset” and press Enter. Then enter “hi”. You should see the “Hello World!” response.

<img class="fancyimage" style="width:350px" src="img/ConvoBuilder/helloworld/helloworld.png">


### Step 3: Add a Goodbye Dialog

Let’s create another dialog to put these concepts into more practice. Since we have a "Welcome" dialog, let’s create a “Goodbye” dialog.

1. Click **+ Dialog** in the lower-left to create a new dialog, name it "Goodbye", and select Dialog for the **Dialog Type**.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/helloworld/goodbyedialog.png">

    The new Goodbye dialog is empty. To allow the dialog to be triggered by patterns and intents, let's add a *User Says* interaction.
    
2.  Select the User Says icon <img style="width:30px" src="img/ConvoBuilder/helloworld/icon_userSays.png">  in the Interactions toolbar. This inserts the interaction.

3. In the interaction, enter "Goodbye" as the sample user statement, and press Enter.

    For this User Says interaction to match on user input, we need to add some patterns.

4. Click the Interaction Details icon <img style="width:35px" src="img/ConvoBuilder/helloworld/interaction_details_icon.png"> , and then click **Settings**.

5. Add patterns like `goodbye`, `bye`, `see ya`, etc. Click **Save** in the window.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/helloworld/addnewpattern.png">

    Before we test in the Preview window, we need to add some content to be displayed once we’ve matched our patterns. Let's add a Text Statement interaction.

6. In the Interactions toolbar, click the Text Statement icon <img style="width:25px" src="img/ConvoBuilder/helloworld/icon_textStatement.png">. This inserts the interaction.

7. In the interaction, enter a goodbye message (e.g., "Bye, thanks for coming!"), and press Enter.

    Let's test the changes.

8. Open the Preview again, enter “reset”, and press Enter.

9. Enter “hi” to trigger the Welcome dialog and see the welcome message. Then enter “bye” to trigger the Goodbye dialog and see the goodbye message.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/helloworld/byetest.png">

### Step 4: Add a Fallback Dialog

You’ve seen how to create a new dialog and trigger it using patterns. But what happens when you enter an utterance that has not been accounted for? To catch these when they occur, you need to provide a "fallback dialog".

{: .important}
There can be only one dialog of type Fallback per bot.

1. Click **+ Dialog** to add another dialog.

2. In the dialog that appears, enter a name of "Fallback", and select "Fallback Dialog" for the **Dialog Type**.

    You don't need to add a User Says interaction to the Fallback dialog, because the Fallback dialog has special properties that cause it to display when there are no other matches available.

    However, you do need to add some type of message to tell the user that the bot didn’t understand their query.

3. Add a new text statement. In the interaction, enter  a message like `Sorry, I only know ‘hello’ and ‘goodbye’.` or something similar, and press Enter.

4. Open the Preview window, enter “reset” and press Enter.

5. Enter something other than your hello and goodbye patterns. You should see your fallback message.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/fallbacktext.png">
