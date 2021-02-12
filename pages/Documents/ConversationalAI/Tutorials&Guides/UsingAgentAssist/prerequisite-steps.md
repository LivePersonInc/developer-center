---
pagename: Prerequisite Steps
keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Tutorials & Guides
subfoldername: Using Agent Assist
permalink: tutorials-guides-using-agent-assist-prerequisite-steps.html
indicator: both
---

{: .important}
**Customize your POC:** This guide is meant to walk through building a working example of the Agent Assist capabilities within 30 minutes. The provided examples and starter resources are intentionally simple to move through the process quickly. Keep an eye out for "Customize your POC" sections like this one for indications as to where you can further develop and customize your implementation of an Agent Assist proof-of-concept to fit your specific needs.

This section walks through the steps that are necessary to complete before configuring Agent Assist. These steps include the creation of the following:

* Airline NLU v2 starter pack in Intent Builder
* Airline-specific knowledge base to serve FAQ articles tied to intents in the NLU domain
* User profiles and associated skills to be tied to both human and bot agents
* Several bots in Conversation Builder with dialogs triggered by intents from the starter pack domain
* Web messaging engagement directed to the signed-in “human” skill

### Before you begin

Before you get started with this tutorial, download this [ZIP file](https://publisher.liveperson.net/co-agent-assist/AgentAssistTutorial_resources.zip), which contains a few, necessary resources.

### Step 1: Create the Airline NLU v2 domain

LivePerson offers a variety of domain-specific starter packs ([pre-built domains](http://localhost:4000/intent-builder-overview.html#prebuilt-domains)) to help you get up and running with Intent Builder quickly. After signing into the LivePerson Conversational Cloud, navigate to the Conversational AI portal and complete the following steps to build out the NLU domain that will be used in the Agent Assist solution.

{: .important}
**Customize your POC:** For demonstration purposes, this guide assumes a build-out suited for an Airline client. Add in a vertical-specific, pre-built domain to customize for your use case, or optionally add additional domains to supplement the primary one you are using. Agent Assist can pull from multiple domain intents to make recommendations for your users.

1. From the Conversational AI portal, click the **Intent Builder** menu option.

    <img class="fancyimage" style="width:800px" src="img/agentassisttutorial/intent_builder_menu_option.png">

2. Click **Add Domain** in the upper-right corner of the Intent Builder screen.
3. In the resulting **Add Domain** menu, select “Prebuilt Domains” along the top.
4. The following view will display all intent starter packs available with Conversational Cloud. Highlight the “Airline” domain, and click **Add**.

    <img class="fancyimage" style="width:800px" src="img/agentassisttutorial/add_prebuilt_domain.png">

    Once completed, the LP_Airlines NLU v2 domain is created, fully trained and containing intents for use with any airline.

### Step 2: Create the Airline FAQ knowledge base

With the NLU domain created, the next step is to create a knowledge base with articles to be tied to domain intents. For the purpose of this demonstration, a CSV file has been provided to simplify the process. You downloaded this file earlier.

{: .important}
**Customize your POC:** This example uses a single knowledge base in order to quickly showcase the capabilities of recommending articles using Agent Assist. Adding additional knowledge bases to showcase that Agent Assist can pull from multiple data sources can help to create a more substantial and impressive demonstration with your proof-of-concept. Each additional knowledge base can pull from any domain you previously created to showcase their functionality.

1. From the Conversational AI portal, click the **Knowledge Base** menu option.

    <img class="fancyimage" style="width:800px" src="img/agentassisttutorial/knowledge_base_menu_option.png">

2. Click **Add Knowledge Base** in the upper-right corner of the Knowledge Base screen.
3. In the resulting **Add Knowledge Base** menu, select “Internal Knowledge Base” from within the **AI Enabled** menu.
4. Complete the **Add Knowledge Base** form with the following information:

    * **Knowledge Base Name**: Airline FAQ
    * **Language**: English
    * **Import Articles From**: CSV
        * *Use the CSV file that is in the ZIP file that you downloaded earlier.*
    * **Intent Association**: Domain Intents
    * **Domain**: LP_Airlines
	
5. Click **Save** to upload your knowledge base articles, with intents from the LP_Airlines domain automatically associated with each article.

    <img class="fancyimage" style="width:800px" src="img/agentassisttutorial/articles.png">

    **Note:** Intents will be automatically associated as long as you have already created the NLU model in the previous section. If you have not done so, you can make your intent associations after by aligning the intents with the correct article. 

    | Article Title | Intent |
    | --- | --- |
    | Seating assignment | ask about seat assignment |
    | Refund policy | request refund or credit |
    | Claim reward miles | claim reward miles |
    | Baggage policies | ask about baggage | 
    | Upgrade my seat | upgrade seat |
    | Cancel flight | cancel flight |
    | Change flight | change flight |
    | Reschedule disrupted flight | reschedule disrupted flight |
    | Book a flight | book flight |

6. Prior to leaving the knowledge base, click the **API Key** icon <img style="width:30px" src="img/agentassisttutorial/icon_apikey.png"> in the upper-right corner, and record the alphanumeric key listed as **Your API Access Key**. This will be needed later when configuring Agent Assist.

### Step 3: Create the users and skills

Every bot and human agent requires a user profile and an associated skill to be deployed and accessible from within the Conversational Cloud. This section provides the details needed to update the logged-in human agent with an associated skill, as well as the details needed to create bot agents for the two bots that will be uploaded. For more details on this procedure, please see [this article](tutorials-guides-getting-started-with-bot-building-deploy-the-bot.html#step-13-create-a-bot-user) in the *Conversation Builder Getting Started with Bot Building* tutorial.

{: .important}
**Customize your POC:** This guide provides two bots that agent assist can source recommendations from. These demonstration bots do not provide much functionality out of the box, so bring in your own domain specific bots to fit the needs of your POC. Keep in mind that any additional bots created will need their own corresponding bot user agents and skills.

1. Click the **Manage users and skills** icon <img style="width:30px" src="img/agentassisttutorial/icon_usersandskills.png"> from the left-side menu to go to the **User Management** section of the Conversational Cloud. 
2. From the list of users, select your logged-in human user. From the **Edit user** form, scroll to the bottom. In the **Skills** field, add the skill “agent.” Click **Save**.
3. Back on the Users screen, select the **+ Add user** button in the lower-left corner of the page. Fill out the **Add user** form with the following user details:

    * **User type**: Bot
    * **Login name**: Booking Bot
    * **Email**: Your email address
    * **Nickname**: Booking
    * **Name**: Booking Bot
    * **Choose login method**: API key
    * **API key**: Generate API key
    * **Assignment > Assign Profile**: Agent
    * **Skills**: booking

	Click **Save**.

4. Repeat the same process to create a second bot user with the following details:

    * **User type**: Bot
    * **Login name**: Seating Bot
    * **Email**: Your email address
    * **Nickname**: Seating
    * **Name**: Seating Bot
    * **Choose login method**: API key
    * **API key**: Generate API key
    * **Assignment > Assign Profile**: Agent
    * **Skills**: seating

### Step 4: Import the Conversation Builder bots

In this step, you create two, new bots in Conversation Builder using the JSON files that are in the ZIP file that you downloaded earlier. 

* Booking Bot
* Seating Bot

These bots have been created with dialog starters matched to several of the LP_Airlines intents, and they will be used to recommend actions to agents engaged in conversations with users.

1. From the Conversational AI portal, click the **Conversation Builder** menu option.

    <img class="fancyimage" style="width:800px" src="img/agentassisttutorial/cb_menu_option.png">

2. Click **Import Bot** in the upper-right corner, and select the "Booking Bot" JSON file that you downloaded. 

    **Note**: If you have completed the previous step of creating the NLU v2 Domain, the intents will be automatically associated with the correct dialogs in the bots. However, if you have not yet done so, you will need to connect them manually to the appropriate dialog starters using Conversation Builder's Assist tool.

3. Once uploaded, click the **Agent Connectors** menu option at the top of Conversation Builder.
4. Select **Add Agent Connector**, and in the resulting form, select your "Booking Bot" user agent from the **Agent User ID** dropdown. Ensure that the **Conversation Type** is set to "Messaging," and click **Save**.
5. Click the orange **> Start** button to start the agent connector. 

    <img class="fancyimage" style="width:800px" src="img/agentassisttutorial/agent_connector.png">

6. Follow the same process to upload the "Seating Bot" that you downloaded, and connect the Seating Bot user agent. Once finished, you will have two bots up and running with agent connectors.

    **Note**: These bots are for demonstration purposes, so they don't do much beyond serving a dialog to a user based on the intent. No booking or seating functionality is built in. As such, they can be modified to meet your use case.

### What's next?

Continue on to the [next step](tutorials-guides-using-agent-assist-configure-agent-assist.html) in the tutorial.
