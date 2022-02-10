---
pagename: Dialogs & Patterns
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Tutorials & Guides
subfoldername: Getting Started with Bot Building
permalink: tutorials-guides-getting-started-with-bot-building-dialogs-patterns.html
indicator: both
---

<!--
### Watch the video

<div style="display: block; position: relative; max-width: 70%;margin:0 auto;"><div style="padding-top: 56.25%;"><iframe src="https://player.vimeo.com/video/440317206" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 10px; bottom: 0px; right: 0px; left: 0px;"></iframe></div></div>
<br>
-->

### Prerequisite steps

This tutorial assumes you have a user account for the Conversational Cloud and Conversation Builder platforms. If you don't, your team should have an administrator who can create one for you.

### Step 1: Create a new bot

1. Navigate to [https://authentication.liveperson.net/login.html](https://authentication.liveperson.net/login.html), enter your credentials, and log in.
2. In the left sidebar in Conversational Cloud, click the **Conversational AI and Bots** <img style="width:25px" src="img/ConvoBuilder/getstartedtutorial/icon_cb.png"> icon.
3. In the Conversational AI dashboard, click **Conversation Builder**.
4. Click **New Bot** in the upper-right corner, and select the generic **Custom Bot** [template](conversation-builder-bot-templates-overview.html). Click the orange **Next** arrow.
5. Give the bot a unique name (e.g., Getting Started Bot) and a description, and click **Create Bot**.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/getstartedtutorial/custom_bot.png">

    This takes you to the new bot in Conversation Builder. Since you selected the Custom Bot template, by default this creates a bot with a “Welcome” dialog that matches and responds to simple forms (patterns) of “hello.” The bot also has a Fallback dialog with some fallback text.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/getstartedtutorial/welcome_dialog.png">

6. Examine the Welcome dialog, which is displayed by default. 

    (You can learn about the different parts of Conversation Builder [here](conversation-builder-bot-workspace.html).)

### Step 2: Test the Welcome dialog

With the bot created, let’s see how to make it respond to user utterances.

The first interaction in the Welcome dialog is a Dialog Starter interaction that allows us to match a user’s utterance using patterns or intents. Following that is a Text Statement interaction that displays some text ("Hi there! Thanks for coming!") to the user.

Statement interactions (e.g., Text, Image) are for displaying content to the user, without listening for a user response. Once the statement is displayed, the conversation flow moves on to whatever is next in the dialog. (You can learn more about interactions [here](conversation-builder-interactions-interaction-basics.html).)

Let’s see the interactions in action!

1. Click **Preview** in the upper-right corner.

2. In the Preview window, enter “hello” or “hello there,” and click **Send**. You should see the welcome response.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/getstartedtutorial/preview.png">

    So how is the Welcome dialog triggered?

3. Examine the Dialog Starter interaction. On the interaction tile, note the different patterns used to match this particular dialog. (You can also use an intent to trigger a dialog, but in this tutorial we focus on patterns.)

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/getstartedtutorial/dialog_starter.png">

    Since this is a "Welcome" dialog, it uses patterns like “hi”, “hello” and “howdy” to match those phrases exactly and display a response.

    By adding wildcards (e.g., `hi *` or `hello *`) you can allow for broader matches like “hi there” or “hello my friend.” Using parentheses and pipes allows you to specify a series of alternates. For instance, `(hi|hello|hey)*` will match “hi”, “hello there” and “hey you.”

    {: .important}
    Patterns are a great way to create hard-coded logic in the bot while you build out the design. As your bot grows, you’ll want to incorporate Natural Language Understanding to provide a more conversational experience for users. Our next tutorial on "intents" and "entities" serves as an introduction to these topics.

4. Click the patterns (green button). On the Patterns & Intent tab in the Interaction Settings window, add some more patterns (e.g., “hiya”, “ciao”, and “hola”). Click **Save**.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/getstartedtutorial/patterns_intent.png">

5. In the Preview window, click **Reset Session**. This starts a new session that "picks up" your changes.

6. Test the new patterns in the Preview window like you did before.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/getstartedtutorial/preview_2.png">

    Now that you’ve seen how a dialog is triggered, let’s change the welcome response by editing the Text Statement interaction.

7. Select (click) the Text Statement interaction below the dialog starter.

8. Change the text from "Hi there! Thanks for coming!" to "Hi there! How can I help you?", and press Enter. (There is no need to open the Interaction Settings to change simple output text.)

9. To see your change, open the Preview window again, and click **Reset Session**. Then enter “hi”. You should see the “Hi there! How can I help you?” response.

### Step 3: Add a Goodbye dialog

Let’s create another dialog to put these concepts into more practice. Since there is a "Welcome" dialog, let’s now create a “Goodbye” dialog.

1. Click **Add Dialog** in the lower-left corner.
2. In the Add Dialog window, on the New Dialog tab, name the dialog "Goodbye", and select Dialog for **Dialog Type**. Click **Save**.

    By default, the new Goodbye dialog has a Dialog Starter interaction; this allows the dialog to be triggered by patterns or an intent. But the interaction isn't configured by default, so let's do that now.

    For the dialog starter to match user input, you need to add some patterns.

3. Select the interaction, and click **+ Pattern**.

4. Under Patterns, add a few patterns like `goodbye`, `bye`, `see ya`, etc. You can do this manually:

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/getstartedtutorial/patterns_intent_2.png">

    Alternatively, a quick and easy way to add these patterns is to click the **Library** link, and select the "Bye" set of patterns.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/getstartedtutorial/pattern_intent_library_2.png">

5. Click **Save**.

    Before you test things in the Preview window, you need to add some content to be displayed when the bot matches a pattern. Let's add a Text Statement interaction.

6. In the Interactions toolbar, click the Text Statement icon <img class="inlineimage" style="width:25px" src="img/ConvoBuilder/getstartedtutorial/icon_text_interaction.png">. This inserts the interaction.

    (If you can't see the Interactions toolbar, close the Preview window, which might be covering it up.)

7. In the interaction, enter a goodbye message (e.g., "Thanks for stopping by."), and press Enter.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/getstartedtutorial/text_interaction_thanks.png">

    Let's test the changes.

8. Open the Preview window again, and click **Reset Session**.

9. Enter “hi” to trigger the Welcome dialog and see the welcome message. Then enter “goodbye” to trigger the Goodbye dialog and see the goodbye message.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/getstartedtutorial/preview_3.png">

### Step 4: Test the Fallback dialog

You’ve seen how to create a new dialog and trigger it using patterns. But what happens when you enter an utterance that hasn't been accounted for? To catch and handle these when they occur, you can provide a "fallback dialog." By default, when you create a bot using the Custom Bot template, one is included. Let's examine and test it now.

{: .important}
There can be only one dialog of type Fallback per bot.

1. In the Dialogs panel on the left, click **2 Fallback**. This opens the Fallback dialog.

2. Note how there isn't a Dialog Starter interaction.

    You don't need a dialog starter in the Fallback dialog because the Fallback dialog has special properties that cause it to display when there are no other matches available. However, you do need to add some type of message to tell the user that the bot didn’t understand their query. A default message is provided for you.

3. Select the Text Statement interaction, and change the message to, "Sorry, I am not able to understand. Please try again." Press Enter.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/getstartedtutorial/fallback_starter.png">

4. Open the Preview window again, and click **Reset Session**.

5. Enter something other than your hello and goodbye patterns. You should see your fallback message.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/getstartedtutorial/preview_4.png">

### What's next?

Continue on to the [next tutorial](tutorials-guides-getting-started-with-bot-building-intents.html) in the series.