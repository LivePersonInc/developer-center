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

This tutorial guides you through creating a simple "Hello World" bot.

### Prerequisite steps

This tutorial assumes you have a user account for the LiveEngage and Conversation Builder platforms. If you don't, your team should have an administrator who can create one for you.

### Step 1: Create a new bot

1. Navigate to [https://authentication.liveperson.net/login.html](https://authentication.liveperson.net/login.html), enter your credentials, and log in.
2. In the left sidebar in LiveEngage, click the Conversational AI and Bots <img style="width:30px" src="img/ConvoBuilder/helloworld/icon_le_convers_ai.png"> icon.
3. In the Conversational AI dashboard, click **Conversation Builder**.
4. Click **New Bot** in the upper-right corner, and select the **Custom Bot** generic [template](conversation-builder-templates-overview.html).
5. Give the bot a unique name and description, and select "Consumer Facing Bot" for the **Bot Type**.
6. Click **Create Bot**.
    
    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/helloworld/createAutomation.png">

    This takes you to the new bot in Conversation Builder. Since you selected the Custom Bot template, by default this creates a bot with a “Welcome” dialog that matches and responds to simple forms (patterns) of “hello”. The bot also has a Fallback dialog with some fallback text.

7. Click the **Welcome** tab in the lower-left corner to open the Welcome dialog, so you can examine it.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/image_3.png">

    (You can learn about the different parts of Conversation Builder [here](conversation-builder-getting-started-bot-workspace-overview.html).)

### Step 2: Test the Welcome dialog

With the bot created, let’s see how to make it respond to user utterances.

The first interaction in the Welcome dialog is a *User Says* interaction that allows us to match a user’s utterance using patterns or intents. Following that is a *Text Statement* interaction that displays some text ("Hi there! Thanks for coming!") to the user.

Statement interactions (Text, Image, Audio, and Video) are for displaying content to the user, without listening for a user response. Once the statement is displayed, the conversation flow moves on to whatever is next in the dialog. (You can learn more about interactions [here](conversation-builder-interactions-interaction-basics.html).)

Let’s see the interactions in action!

1. Click the Preview icon <img style="width:35px" src="img/ConvoBuilder/helloworld/messaging_client_icon.png"> in the lower-right corner.

2. In the Preview window, enter “hello” or “hello there.” You should see the welcome response.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/helloworld/testConvo.png">

    So how is the Welcome dialog triggered?

4. Click the *User Says* interaction (the top interaction) to select it. There are two small icons to the right of it.

5. Click the top **Interaction Details** icon <img style="width:40px" src="img/ConvoBuilder/helloworld/interaction_details_icon.png"> to display the window, and then click the **Settings** tab inside.

6. Under **Patterns**, note the different *patterns* used to match this particular dialog. You can also use *intents* to trigger a dialog, but for this exercise we focus on patterns.

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/helloworld/interactiondetails.png">

    Since this is a "welcome" dialog, it uses patterns like “hi”, “hello” and “howdy” to match those phrases exactly and display a response.

    By adding wildcards (e.g., `hi *` or `hello *`) you can allow for broader matches like “hi there” or “hello my friend”. Using parentheses and pipes allow you to specify a series of alternates. For instance, `(hi|hello|hey)*` will match “hi”, “hello there”, and “hey you”.

7. Add some more patterns (e.g., “hiya”, “ciao”, “hola”), and then click **Save** in the window.

8. In the Preview window, enter "reset", and press Enter. This starts a new session, so you can "pick up" your changes.
9. Test the new patterns in the Preview window like you did before.

    Now that you’ve seen how a dialog is triggered, let’s change the welcome *response* by editing the Text Statement interaction.

9. Select (click) the Text Statement interaction below the User Says interaction.

10. Change the text from `Hi there! Thanks for coming!` to `Hello World!`, and press Enter. (There is no need to open the Interaction Details panel to change simple output text.)

11. To see your change, open the Preview window again, enter “reset” and press Enter. Then enter “hi”. You should see the “Hello World!” response.

<img class="fancyimage" style="width:350px" src="img/ConvoBuilder/helloworld/helloworld.png">


### Step 3: Add a Goodbye dialog

Let’s create another dialog to put these concepts into more practice. Since there is a "Welcome" dialog, let’s now create a “Goodbye” dialog.

1. Click **+ Dialog** in the lower-left corner.

2. In the dialog box that appears, name the dialog "Goodbye", and select Dialog for **Dialog Type**.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/helloworld/goodbyedialog.png">

    By default, the new Goodbye dialog has a User Says interaction; this allows the dialog to be triggered by patterns and intents. But the interaction isn't configured by default, so let's do that now.
    
3. Select the interaction, enter "Goodbye" as the sample user statement, and press Enter.

    For this User Says interaction to match user input, you need to add some patterns.

4. Click the Interaction Details icon <img style="width:35px" src="img/ConvoBuilder/helloworld/interaction_details_icon.png"> , and then click **Settings**.

5. Scroll down to the Patterns section, and add a few patterns like `goodbye`, `bye`, `see ya`, etc.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/helloworld/addnewpattern.png">

6. Click **Save** in the window.

    Before you test things in the Preview window, you need to add some content to be displayed when the bot matches a pattern. Let's a Text Statement interaction.

6. In the Interactions toolbar, click the Text Statement icon <img style="width:25px" src="img/ConvoBuilder/helloworld/icon_textStatement.png">. This inserts the interaction.

7. In the interaction, enter a goodbye message (e.g., "Bye, thanks for coming!"), and press Enter.

    Let's test the changes.

8. Open the Preview again, enter “reset”, and press Enter.

9. Enter “hi” to trigger the Welcome dialog and see the welcome message. Then enter “bye” to trigger the Goodbye dialog and see the goodbye message.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/helloworld/byetest.png">

### Step 4: Test the Fallback dialog

You’ve seen how to create a new dialog and trigger it using patterns. But what happens when you enter an utterance that has not been accounted for? To catch these when they occur, you need to provide a "fallback dialog." By default, when you create a bot using the Custom Bot template, one is included. Let's examine and test it now.

{: .important}
There can be only one dialog of type Fallback per bot.

1. Click the **Fallback** tab in the lower-left corner to open the Fallback dialog.

2. Note that there isn't a User Says interaction.

    You don't need a User Says interaction in the Fallback dialog because the Fallback dialog has special properties that cause it to display when there are no other matches available. However, you do need to add some type of message to tell the user that the bot didn’t understand their query. A default message is provided for you.

3. Select the Text Statement interaction, and change the message to, `Sorry, I only know ‘hello’ and ‘goodbye’.` Press Enter.

4. Open the Preview window, enter “reset” and press Enter.

5. Enter something other than your hello and goodbye patterns. You should see your fallback message.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/fallbacktext.png">
