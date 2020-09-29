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

### Introduction

Brands often have static content, such as frequently asked questions, that can be addressed through automations and delivered with Conversation Builder. As opposed to creating new dialogs and specific interactions to handle these use cases, the Conversational Cloud provides Knowledge Base support to provide a seamless experience in delivering this content. A common design pattern at LivePerson is to include this Knowledge Base access in our Fallback Dialog, as a last check before triggering our Fallback interaction. In this section, we will be creating a new Knowledge Base, which will be accessed in the Fallback dialog located in our Greeter Bot.

### Step 8: Create the FAQ knowledge base

In this step, a new FAQ knowledge base will be created using an existing CSV file. This demonstration will also show how to add additional FAQ articles to your knowledge base.

1. From the **Conversational AI** section of the Conversational Cloud, navigate to the **Knowledge Base** section.

    <img class="fancyimage" style="width:300px" src="img/ConvoBuilder/advtutorial/kb_app_option.png">

2. Click on the **Add Knowledge Base** in the upper-right corner.
3. On the **AI Enabled** tab of the window that appears, select **Internal Knowledge Base**. 
4. Specify the following:
    * **Data source name**: Getting Started KB
    * **Language**: English
    * **Import articles from**: CSV
    * **CSV File**: Download and select this [Retail FAQ file](https://static-assets.fs.liveperson.com/csbs/Retail_FAQ_KB.csv) as a starting point. Click **Upload**.
    * **Intent Association**: Knowledge Base Intents

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/kb_add_int.png">

    Click **Save** in the lower-right corner.

5. After the KB has been created, we are presented with the various articles contained within our knowledge base. Selecting any individual article, we can see that each article contains intent qualifiers, which the NLU engine will use in conjunction with tags to match user intents to a specific article.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/kb_samplearticle.png">

6. Back in our Getting Started KB page, click the **Add New** button from the upper-right corner to build upon our provided FAQ content. In the resulting **Add Article** form, complete with the following information: 
    * **Title**: When are you open?
    * **Intent Qualifiers**: 
        * What are your hours of operation?
        * What time do you close?
    * **Summary**: We are open every day from 9am to 7pm.

    **Note**: Additional details and tags can be included when creating your Knowledge Base articles. Please see our developers documentation on knowledge bases for more details on how to use these features to optimize your Knowledge Base searches.

	Click **Save** in the lower-right corner.

7. Back in the **Getting Started KB** menu, confirm that the newly created article has been included in your list of articles. Note the **Inactive** designation, as all newly created articles will need to be enabled prior to being accessible.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/kb_article_inactive.png">

	Click the article title, scroll down to the **Enable Article** setting, and turn it on. Click **Save**.

    Our Knowledge Base has now been created and expanded upon.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/kb_article_list.png">

    Navigating back to Conversation Builder, we will provide an integration to access and display this content.

### Step 9: Create the Knowledge Base Integration in the Fallback Dialog

Prior to displaying our Fallback message for unrecognized utterances, create a Knowledge Base integration to check with our FAQ as a last resort to check if the user’s intent can be satisfied using a Knowledge Base article.

1. From the **Conversational AI** section of the Conversational Cloud, navigate to the **Conversation Builder** and select the Greeter Bot.
2. Click on the **Integrations** menu from the menu bar along the top. In the **Add Integration** form, complete with the following details:

    * **Integration Name**: FAQ
    * **Response Data Variable Name**: FAQ
    * **Integration Type**: Knowledge Base
    * **Knowledge Base**: Getting Started KB

    The remainder of the form should have been auto completed when the Knowledge Base Integration Type was selected. Ensure that the form matches the content in the screenshot.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/kb_integration_add.png">

3. Click **Save** in the lower right hand corner and on success, navigate to the Fallback dialog.
4. In the Fallback, create a new **Integration** interaction and drag and drop the interaction above our **fallback_starter** interaction. From the **Select integration** dropdown, select the newly created FAQ Integration. 

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/advtutorial/kb_integration_fallback_1.png">

    Rules will need to be created to direct the flow of the conversation based on whether there was a successful Knowledge Base query. Prior to doing so, create a new text message interaction which will display a successful search article.

5. Create a new **Text message** interaction, which will be nested between the Integration and the fallback_starter.

    For the text content, type `{FAQ.article}`. For the Next Action, select **End Interaction** to prevent triggering the fallback_starter after display.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/advtutorial/kb_integration_fallback_2.png">

6. Create custom rules to account for successful and unsuccessful FAQ search requests. From the **Next Action** dropdown in the API Integration, select **+ Custom Rule** and complete with the following:
    * Rule name: KB Success
    * **+ Add Condition**: **API Result** matches **Success**
    * **And Go To**: Go To: Next Interaction
	
	Click **Save**.

7. Create a second rule to account for a failed search, which will point to the **fallback_starter** as the next action. Select **+ Custom Rule** and complete with the following:
    * **Rule name**: KB Failure
    * **+ Add Condition**: **API Result** matches **Failure**
    * **And Go To**: Go To: fallback_starter

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/advtutorial/kb_integration_fallback_3.png">

8. Test out the FAQ search by opening the previewer, resetting your session, and testing user utterances that should trigger FAQ articles, as well as ones you intend to pass through to the fallback_starter.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/advtutorial/kb_integration_preview.png">

    Knowledge bases are optimized to handle frequently asked questions and other static content that you want to provide for your users. By including them intelligently in your conversation designs, you can round out the bot experience to answer questions and ensure your users will be happy to return to your automation.
