---
pagename: Disambiguation
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Tutorials & Guides
subfoldername: Getting Started with Bot Building
permalink: tutorials-guides-getting-started-with-bot-building-disambiguation.html
indicator: both
---

When working with natural language from our users, it is sometimes necessary to dive further into their statement to understand what their true intent is. In addition, humans have a tendency to communicate in ways which might include multiple intents in the same statement. In both of these cases, we can use disambiguation to clarify our user intents and ensure that their needs are being addressed appropriately.

### Watch the video

<div style="display: block; position: relative; max-width: 70%;margin:0 auto;"><div style="padding-top: 56.25%;"><iframe src="https://player.vimeo.com/video/455215972" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 10px; bottom: 0px; right: 0px; left: 0px;"></iframe></div></div>
<br>

### Step 11: Demonstration of need
This step serves to demonstrate a use case for when we might need to employ disambiguation. 

1. From the Conversational AI section of the Conversational Cloud, navigate to **Intent Builder** and select the ‘Getting Started’ domain.

    The Getting Started domain should contain both an Order Status and a Billing Question intent.

2. Use the debugger to test out some utterances. In the **Test User Input** panel on the right, enter the text “I want to know about my bill and recent order”. Make sure that the **Search in domain** toggle is switched to on and click on **Test**.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/getstartedtutorial/disambiguation_need.png">

3. Note that this input results in a FAIR PLUS score for both of our intents. In this case, our user would be directed to our Fallback dialog despite the fact that there is some confidence that their utterance matches multiple intents. This example clearly demonstrates the need to drill deeper with our user and provide a pathway to find resolution.

### Step 12: Implement a Disambiguation dialog

In recognizing the need to provide this level of consideration to our users, Conversation Builder comes equipped with a special type of dialog called a Disambiguation Dialog.

1. Navigate back to Conversation Builder and select your Getting Started bot. 
2. Select the **Add Dialog** button from the bottom left corner and fill the resulting **Add Dialog** form with the following:
    * **Dialog Name**: Disambiguation
    * **Dialog Type**: Disambiguation Dialog
    * **Match Threshold**: Fair Plus
    * **Disambiguate only selected domains**: Getting Started Domain
	
    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/getstartedtutorial/add_disambig_dialog.png">

    The Disambiguation Dialog type is a special type of dialog which serves the single purpose of providing disambiguation for a user’s utterance. Like the Fallback Dialog, Disambiguation Dialogs are limited to one per bot. 

    Click **Save**.

    The resulting Disambiguation Dialog provides a new interaction type specifically for handling disambiguation. This displays similarly to a multiple choice interaction, with the intents that are being disambiguated representing the button options. 

3. Click into the interaction text and change the display text to read “Which can I assist you with?”. 

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/getstartedtutorial/disambig_interaction.png">

4. Click on the settings wheel in the upper right corner of the interaction to be taken to the **Interaction Settings** menu. Select the **Advanced** menu to further customize the intents that will be displayed. Here, you can select either two or three intents to display as well as an optional static label which can be useful for a “Main Menu” or escalation message. For this demonstration, leave everything as its default.

5. Select the **Preview** button to test this disambiguation dialog by using the same phrase we used in the Intent Builder above. Reset your session and type “I want to know about my bill and recent order”. This should result in a multiple choice display of the two intents that are being disambiguated.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/getstartedtutorial/preview_7.png">

6. Selecting either option should result in the appropriate dialog being started for the user. 

    While made up of a single interaction, the Disambiguation Dialog will go a long way in ensuring that users are being directed to the correct solution. Every automation solution should include a way to drill deeper into our users intent so that we are always pushing them towards a solution.

### What's next?

Continue on to the [next tutorial](tutorials-guides-getting-started-with-bot-building-deploy-the-bot.html) in the series.