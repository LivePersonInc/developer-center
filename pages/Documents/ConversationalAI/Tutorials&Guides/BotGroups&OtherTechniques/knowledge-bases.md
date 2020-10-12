---
pagename: Knowledge Bases
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Tutorials & Guides
subfoldername: Bot Groups & Other Techniques
permalink: tutorials-guides-bot-groups-other-techniques-knowledge-bases.html
indicator: both
---

Brands often have static content, such as frequently asked questions, that can be addressed through bots and delivered with Conversation Builder. Instead of creating new dialogs and specific interactions to handle these use cases, Conversational Cloud provides Knowledge Base support to provide a seamless experience in delivering this content. A common design pattern at LivePerson is to include Knowledge Base access in the Fallback Dialog, as a last check before triggering the Fallback interaction. In this section, you create a new Knowledge Base, which will be accessed in the Fallback dialog located in the Greeter Bot.

### Watch the video

<div style="display: block; position: relative; max-width: 70%;margin:0 auto;"><div style="padding-top: 56.25%;"><iframe src="https://player.vimeo.com/video/456479762" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 10px; bottom: 0px; right: 0px; left: 0px;"></iframe></div></div>
<br>

### Step 8: Create the FAQ knowledge base

In this step, you create a new FAQ knowledge base using an existing CSV file. This demonstration also shows how to add additional FAQ articles to your knowledge base.

1. From the **Conversational AI** section of the Conversational Cloud, navigate to the **Knowledge Base** section.

    <img class="fancyimage" style="width:300px" src="img/ConvoBuilder/advtutorial/kb_app_option.png">

2. Click **Add Knowledge Base** in the upper-right corner.
3. On the **AI Enabled** tab of the window that appears, select **Internal Knowledge Base**. 
4. Specify the following:
    * **Knowledge Base Name**: Getting Started KB
    * **Language**: English
    * **Import articles from**: CSV
    * **CSV File**: Download and select this [Retail FAQ file](https://static-assets.fs.liveperson.com/csbs/Retail_FAQ_KB.csv) as a starting point. Click **Upload**.
    * **Intent Association**: Knowledge Base Intents

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/kb_add_int.png">

    Click **Save** in the lower-right corner.

5. After the KB has been created, you are presented with the various articles contained within the knowledge base. Selecting any, individual article, you can see that each article contains intent qualifiers, which the NLU engine will use in conjunction with tags to match user intents to a specific article.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/kb_samplearticle.png">

6. Back in the Getting Started KB page, click **Add New** in the upper-right corner to build upon our provided FAQ content. In the resulting **Add Article** form, complete with the following information: 
    * **Title**: When are you open?
    * **Intent Qualifiers**: 
        * What are your hours of operation?
        * What time do you close?
    * **Summary**: We are open every day from 9am to 7pm.

    {: .important}
    Additional details and tags can be included when creating your Knowledge Base articles. Please see our developers documentation on knowledge bases, which is [here](knowledge-base-overview.html), for more details on how to use these features to optimize your Knowledge Base searches.

	Click **Save** in the lower-right corner.

7. Back in the **Getting Started KB** page, confirm that the newly created article has been included in your list of articles. Note the **Inactive** designation, as all newly created articles will need to be enabled prior to being accessible.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/kb_article_inactive.png">

	Click the article title, scroll down to the **Enable Article** setting, and turn it on. Click **Save**.

    The knowledge base has now been created and expanded upon.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/kb_article_list.png">

    Navigating back to Conversation Builder, next you will provide an integration to access and display this content.

### Step 9: Create the Knowledge Base integration in the Fallback Dialog

Prior to displaying the Fallback message for unrecognized utterances, create a Knowledge Base integration to check if the user’s intent can be satisfied with an FAQ article as a last resort.

1. From the **Conversational AI** section of the Conversational Cloud, navigate to **Conversation Builder**, and select the Greeter Bot.
2. Click **Integrations** in the menu in the upper-left corner, then click **Add Integration** in the upper-right corner. In the **Add Integration** form, specify the following:

    * **Integration Name**: FAQ
    * **Response Data Variable Name**: FAQ
    * **Integration Type**: Knowledge Base
    * **Knowledge Base**: Getting Started KB

    The remainder of the form should have been auto completed when the Knowledge Base integration type was selected. Ensure that the form matches the content in the screenshot.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/kb_integration_add.png">

3. Click **Save** in the lower right hand corner, and on success, navigate to the Fallback dialog.
4. In the Fallback, create a new **Integration** interaction, and drag and drop the interaction above the **fallback_starter** interaction. From the **Select integration** dropdown, select the newly created FAQ integration. 

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/advtutorial/kb_integration_fallback_1.png">

    Rules will need to be created to direct the flow of the conversation based on whether there was a successful Knowledge Base query. Prior to doing so, create a new text message interaction that will display a successful search article.

5. Create a new **Text message** interaction, and nest it between the integration and the fallback_starter.

    For the text content, type `{FAQ.article}`. For the **Next Action**, select **End Interaction** to prevent triggering the fallback_starter after display.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/advtutorial/kb_integration_fallback_2.png">

6. Create custom rules to account for successful and unsuccessful FAQ search requests. In the integration, in the **Next Action** dropdown, click **+ Custom Rule**, and complete with the following:
    * Rule name: KB Success
    * **+ Add Condition**: **API Result** matches **Success**
    * **And Go To**: Go To: Next Interaction
	
	Click **Save**.

7. Create a second rule to account for a failed search; this will point to the **fallback_starter** as the next action. Click **+ Custom Rule**, and complete with the following:
    * **Rule name**: KB Failure
    * **+ Add Condition**: **API Result** matches **Failure**
    * **And Go To**: Go To: fallback_starter

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/advtutorial/kb_integration_fallback_3.png">

8. Test the FAQ search. Open the previewer, reset the session, and test user utterances that trigger the FAQ articles. Also test utterances you intend to pass through to the fallback_starter.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/advtutorial/kb_integration_preview.png">

    Knowledge bases are optimized to handle frequently asked questions and other static content that you want to provide for users. By including them intelligently in your conversation designs, you can round out the bot experience to answer questions and ensure users will be happy to return to your bot.

### What's next?

Continue on to the [next tutorial](tutorials-guides-bot-groups-other-techniques-meta-intents.html) in the series.