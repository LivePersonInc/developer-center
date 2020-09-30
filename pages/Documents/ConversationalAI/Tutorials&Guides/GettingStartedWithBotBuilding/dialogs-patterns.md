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

### Watch the video

To be added

### Prerequisite steps

This tutorial assumes you have a user account for the Conversational Cloud and Conversation Builder platforms. If you don't, your team should have an administrator who can create one for you.

### Step 1: Create a new bot

1. Navigate to [https://authentication.liveperson.net/login.html](https://authentication.liveperson.net/login.html), enter your credentials, and log in.
2. In the left sidebar in Conversational Cloud, click the Conversational AI and Bots <img style="width:25px" src="img/ConvoBuilder/getstartedtutorial/icon_cb.png"> icon.
3. In the Conversational AI dashboard, click **Conversation Builder**.
4. Click **New Bot** in the upper-right corner, and select the generic **Custom Bot** [template](conversation-builder-bot-templates-overview.html).
5. Give the bot a unique name and description, and click **Create Bot**.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/getstartedtutorial/custom_bot.png">

    This takes you to the new bot in Conversation Builder. Since you selected the Custom Bot template, by default this creates a bot with a “Welcome” dialog that matches and responds to simple forms (patterns) of “hello”.The bot also has a Fallback dialog with some fallback text.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/getstartedtutorial/welcome_dialog.png">

6. Examine the Welcome dialog, which is displayed by default. 
    (You can learn about the different parts of Conversation Builder [here](conversation-builder-bot-workspace.html).)

### Step 2: Test the Welcome dialog

With the bot created, let’s see how to make it respond to user utterances.

The first interaction in the Welcome dialog is a Dialog Starter interaction that allows us to match a user’s utterance using patterns or intents. Following that is a Text Statement interaction that displays some text ("Hi there! Thanks for coming!") to the user.

Statement interactions (Text, Image, Audio, and Video) are for displaying content to the user, without listening for a user response. Once the statement is displayed, the conversation flow moves on to whatever is next in the dialog. (You can learn more about interactions [here](conversation-builder-interactions-interaction-basics.html).)

Let’s see the interactions in action!

1. Click **Preview** in the upper-right corner.

2. In the Preview window, enter “hello” or “hello there.” You should see the welcome response.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/getstartedtutorial/preview.png">

    So how is the Welcome dialog triggered?

3. Examine the Dialog Starter interaction. On the interaction tile, note the different patterns used to match this particular dialog. (You can also use an intent to trigger a dialog, but for this exercise we focus on patterns.)

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/getstartedtutorial/dialog_starter.png">

    Since this is a "Welcome" dialog, it uses patterns like “hi”, “hello” and “howdy” to match those phrases exactly and display a response.

    By adding wildcards (e.g., `hi *` or `hello *`) you can allow for broader matches like “hi there” or “hello my friend”. Using parentheses and pipes allows you to specify a series of alternates. For instance, `(hi|hello|hey)*` will match “hi”, “hello there” and “hey you”.

    **Note**: Patterns are a great way to create hard-coded logic in your bot while you build out the design. As your bot grows, you’ll want to incorporate Natural Language Understanding to provide a more conversational experience for your users. Our next section on Intents and Entities will serve as an introduction to these topics.

4. Click the patterns (green button). On the Patterns & Intent tab in the Interaction Settings window, add some more patterns (e.g., “hiya”, “ciao”, “hola”). Then click **Save**.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/getstartedtutorial/patterns_intent.png">

5. In the Preview window, click **Reset Session**. This starts a new session that "picks up" your changes.

6. Test the new patterns in the Preview window like you did before.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/getstartedtutorial/preview_2.png">

    Now that you’ve seen how a dialog is triggered, let’s change the welcome response by editing the Text Statement interaction.

7. Select (click) the Text Statement interaction below the dialog starter.

8. Change the text from "Hi there! Thanks for coming!" to "Hi there! How can I help you?", and press Enter. (There is no need to open the Interaction Settings to change simple output text.)

9. To see your change, open the Preview window again, and click **Reset Session**. Then enter “hi”. You should see the “Hi there! How can I help you?” response.

