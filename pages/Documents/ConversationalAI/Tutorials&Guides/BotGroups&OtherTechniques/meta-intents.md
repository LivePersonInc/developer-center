---
pagename: Meta Intents
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Tutorials & Guides
subfoldername: Bot Groups & Other Techniques
permalink: tutorials-guides-bot-groups-other-techniques-meta-intents.html
indicator: both
---

In order to maintain an optimal user experience, automations should handle not only business focused intents, but should strive to respond intelligently to small talk from the user. User’s asking “how are you” or “are you a bot” should receive a more intelligent response than simply hitting a fallback message. One intelligent solution for handling these types of utterances is by using a Knowledge Base to access and read back responses to a variety of small talk. However, simply pushing all of your KB searches in your Fallback Dialog can complicate your bot design with too many integration calls in one dialog. This final section of this guide will detail creating a Small Talk meta intent and a Small Talk Knowledge Base, each of which to be implemented in our Small Talk bot.

### Step 10: Create the Small Talk meta intent
A meta intent is a wrapper for a grouping of related intents.

<img style="width:600px" src="img/ConvoBuilder/advtutorial/ib_metaintents_diagram.png">

Using meta intents, we can funnel a variety of intents into a single dialog for processing. Additional information about meta intents can be found in our developers documentation [here](intent-builder-meta-intents.html). 

1. From the **Conversational AI** section of the Conversational Cloud, navigate to **Intent Builder** and select the Getting Started Domain.
2. Prior to creating the Small Talk meta intent, standard intents for the different types of small talk must be created. Using the **Add Intent** button in the lower left, create the following intents with the following information:

    * **Intent name**: How are you?
    * **Intent Display Name**: How are you?
    * **Intent type**: Intent
    * **Training phrases**:
        * Are you holding up alright?
        * How are you?
        * How are you doing?
        * How do you feel?
        * How’s it going?
    <br>
    <br>
    * **Intent name**: I am upset
    * **Intent Display Name**: I am upset
    * **Intent type**: Intent
    * **Training phrases**:
        * I am upset
        * I hate you
        * This is dumb
        * You are an idiot
        * You’re stupid
    <br>
    <br>
    * **Intent name**: Thank you
    * **Intent Display Name**: Thank you
    * **Intent type**: Intent
    * **Training phrases**:
        * I appreciate it
        * Thank u
        * Thank you
        * Thanks
    <br>
    <br>
    * **Intent name**: Who are you?
    * **Intent Display Name**: Who are you?
    * **Intent type**: Intent
    * **Training phrases**:
        * Are you a person
        * What are you
        * What is this
        * Who are you
        * Is this a bot?

    After these 4 intents have been created, create a meta intent by selecting **Add Intent** one last time and completing with the following:
    * **Intent name**: Small Talk
    * **Intent Display Name**: Small Talk
    * **Intent type**: Meta intent
    * **Select intent to add**:
        * How are you?
        * I am upset
        * Thank you
        * Who are you?
	
    When finished, click **Save**.

    If created correctly, you should see your standard intents displayed underneath the Small Talk meta intent.

    <img style="width:250px" src="img/ConvoBuilder/advtutorial/ib_meta_intent.png">

4. Test to make sure both intents and meta intents are being triggered by your training phrases. In the **Test User Input** panel on the right, turn on the **Search in domain** setting, and keep the default "All" in the resulting dropdown. Test out a few phrases that you would expect to match the newly created intents. If set up correctly, you should show both the standard intent and its parent meta intent triggered with the same confidence score.

    <img style="width:400px" src="img/ConvoBuilder/advtutorial/ib_test_user_input.png">

    With a newly created meta intent in hand, the next step will be to create a new knowledge base that we will access using domain intents.

### Step 11: Create the Small Talk knowledge base

1. From the **Conversational AI** section of the Conversational Cloud, navigate to the **Knowledge Base** section, and select the **Add Knowledge Base** button.
2. On the **AI Enabled** tab of the window that appears, select **Internal Knowledge Base**.
3. Specify the following:
    * **Data source name**: Small Talk KB
    * **Language**: English
    * **Intent Association**: Domain intents
    * **Domain**: Getting Started Domain

    {: .important}
    Using Domain intents allows us to use intents created via Intent Builder for triggering our Knowledge Base articles. 

	Click **Save**.

4. Our resulting Small Talk KB page will be empty. Add new articles to correspond with each of our Small Talk standard intents. Click **Add New** in the upper right and complete the resulting form, selecting **Save** and repeating for each intent.

    * **Title**: How are you?
    * **Intent**: How are you?
    * **Summary**: I’m staying safe and healthy! Thanks for asking!

    * **Title**: I am upset
    * **Intent**: I am upset
    * **Summary**: I know these times can be stressful, but I’m programmed to be positive and helpful!

    * **Title**: Thank you
    * **Intent**: Thank you
    * **Summary**: That’s what I’m here for!

    * **Title**: Who are you?
    * **Intent**: Who are you?
    * **Summary**: I’m your virtual assistant, here to assist with your questions or concerns.

5. In each article's settings, click **Enable Article** to activate the article.

    <img style="width:800px" src="img/ConvoBuilder/advtutorial/ib_small_talk_kb.png">

    Our final step will be to include our Knowledge Base search in a dialog to be triggered by our Small Talk meta intent.

### Step 12: Create the Small Talk dialog

1. Navigate to **Conversation Builder** and select the Small Talk Bot, which to this point only includes the Escalation dialog.

2. Add a new standard Dialog by clicking the **Add Dialog** button in the lower-left corner and giving the Dialog a name of "Small Talk". 

3. Using the Assist tool, select the Getting Started Domain and associate with your Small Talk Meta Intent. Note the asterisk next to the Small Talk Intent, which serves to signify that this is a Meta Intent.

    <img style="width:800px" src="img/ConvoBuilder/advtutorial/ib_assist_tool.png">

    This ensures that any of the contained intents within our Small Talk meta intent will trigger this specific dialog.

4. Before moving further, select **Integrations** from the upper menu to create our Knowledge Base integration, following the same procedures for the previously used FAQ knowledge base.
    * **Integration Name**: SmallTalk
    * **Response Data Variable Name**: SmallTalk
    * **Integration Type**: Knowledge Base
    * **Knowledge Base**: Small Talk KB

    Again, the remainder of this form will be automatically completed once selecting the Knowledge Base integration type. 

	Click **Save**.

    <img style="width:800px" src="img/ConvoBuilder/advtutorial/small_talk_integration.png">

5. Return to the newly created Small Talk dialog, which should only contain the dialog starter which has been tied to the Small Talk intent. 

6. Select a new Integration interaction and from the drop down menu, select the SmallTalk integration. 

7. Follow this integration with a new text_statement interaction. Modify the text content to read the integration response variable, `{SmallTalk.article}`.

    <img style="width:800px" src="img/ConvoBuilder/advtutorial/small_talk_integration_2.png">

8. Test by opening the previewer, resetting your session, and typing in a variety of your small talk phrases. If successful, you will receive different responses for each intent despite the fact that we have a single meta intent triggering this dialog.

    <img style="width:350px" src="img/ConvoBuilder/advtutorial/small_talk_preview.png">

    This is successful because while the meta intent triggers the process, we are sending the user’s message to our knowledge base. Each of the articles within the knowledge base are triggered by individual standard intents. Adding additional small talk phrases simply requires creating new intents, nesting them under our Small Talk meta intent, and creating a corresponding Small Talk KB article. No additional dialogs will be required.

    Congratulations on completing this tutorial series!
