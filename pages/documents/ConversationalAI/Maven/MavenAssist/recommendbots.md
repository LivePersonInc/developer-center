---
pagename: Recommended Actions for Automations
redirect_from:
  - maven-maven-assist-recommended-actions-for-bots.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Maven
subfoldername: Maven Assist
permalink: maven-maven-assist-recommended-actions-for-automations.html
indicator: messaging
---

Maven can recommend bots that match customer intents in the Recommended Actions widget. 

<img class="fancyimage" width="750" src="img/maven/RA-bots.png">

Follow along with this guide to set up the feature.

### Create a bot

Maven currently supports bots created in [Conversation Builder](conversation-builder-getting-started-0-video-tutorials.html), [Google DialogFlow](bot-connectors-google-dialogflow-version-2.html), and [IBM Watson](bot-connectors-ibm-watson-assistant.html).

### Enable Recommended Actions Widget

You will first need to enable the feature in LiveEngage. Please contact LivePerson support or your LivePerson customer representative to enable this feature. 

### Create LiveEngage Skill and User For Bot

Before adding automations to Maven, you must first properly configure LiveEngage by creating a skill and a bot user.

The [Conversation Builder Getting Started](conversation-builder-getting-started-4-connect-to-liveengage.html#step-10-configure-liveengage) guide explains how to create a skill and a bot user for each of your automations.

{: .important}
* Create the skill names and bot user names that make sense for your use case
* Be sure to match the bot skill to the bot user
* Save the API credentials generated from your new bot user(s) as you will need them to [connect your bot](#connect-bots-to-liveengage)

### Connect Bots to LiveEngage

Once LiveEngage is configured, your bot(s) need to be connected to enable them to respond to conversations in LiveEngage. 

For Conversation Builder bots, see [the next section](#configuring-conversation-builder-bots).

For third party (Watson, DialogFlow) bots, see the section [Configuring Third Party Bots](#configuring-third-party-bots).

#### Configuring Conversation Builder Bots

Follow the steps in the [Conversation Builder Getting Started](conversation-builder-getting-started-4-connect-to-liveengage.html#step-11-connect-automation-to-liveengage) guide to connect your bot.

{: .important}
Be sure to select allow **Messaging** conversations when you add the Agent for the automation.

{: .important}
Be sure to press the play button on the Bot in the bot dashboard to enable the bot to handle traffic.

<img class="fancyimage" width="200" src="img/maven/image_14.png">

For the next Configuring Maven step, you will need the **Bot ID**. For Conversation Builder, this is called the *Automation ID*.

1. Click the cog icon at the top of the Conversation Builder bot editor

2. Select **Automation Settings**

3. Scroll to the bottom and click on **More Settings**

4. Copy the **Automation ID** and **save this for the next section**

Now skip to the next [configuring maven](#configure-maven) section.

#### Configuring Third Party Bots

To connect a DialogFlow or Watson bot to LivePerson, you must follow the [Bot Connectors Getting Started](bot-connectors-getting-started.html) guide.

Then follow the specific guide for [DialogFlow](bot-connectors-google-dialogflow-version-2.html) or [IBM Watson](bot-connectors-ibm-watson-assistant.html)

{: .important}
Be sure to press the play button in the bot dashboard to enable the bot.

<img class="fancyimage" width="750" src="img/maven/image_16.png">

For the next [Configuring Maven](#configure-maven) step, you will need the **Bot ID**. For DialogFlow, this is called the *projectId*. For Watson, this is called the *Workspace ID*.

### Configure Maven

Now that you have set up LiveEngage, and connected your bot(s), you need to link these bots to Maven so they can be suggested in the Recommended Actions Widget. 

#### Log in to Maven

Log in to Maven with your LiveEngage credentials and then navigate to Maven Assist > Recommended Actions - Automations. 

#### Add the bots 

Now use the interface to add the bots to Maven. This enables Maven to suggest these bots based on customers’ utterances, and add them to the conversation. 

1. Click the Add bot button to add a new bot

2. Choose a Bot provider (Conversation Builder, Watson, or Dialogflow). Different bots support different types of credentials. For instance, DiaglogFlow uses a json object, whereas Watson provides the credentials in string format. This is reflected in the UI, when you change the bot type. 

3. Enter the bot name. Use the Login Name of the bot user created in Live Engage

4. Enter the bot ID. The **Bot ID** is the value saved from the previous [Connect Bots to LiveEngage](#connect-bots-to-liveengage) section above and differs based on which bot platform you are using.

Next you will need to add the credentials from your bot platform into the Maven Setup. If you are using a Conversation Builder bot, see [the next section](#add-credentials-for-conversation-builder). For [DialogFlow go here](#add-credentials-for-dialogflow), and [Watson go here](#add-credentials-for-watson).

##### Add credentials for Conversation Builder

Follow the steps below to gather information for the form.

<img class="fancyimage" width="750" src="img/maven/addBot-CB.png">

1. Login to LiveEngage and select the **Automation Tab**

2. Click on the **Account** icon at the top right of the page, and choose **Settings**.

Click on the **API** tab, and copy the value listed for **Your API Access Key**. This should be entered in the **Credentials** field of the *Add Bot* page on *Maven Workspace*.


##### Add credentials for DialogFlow

Follow the steps below to gather information for the form.

<img class="fancyimage" width="750" src="img/maven/addBot-DF.png">

Let’s say that you already have a bot created in [DialogFlow](https://console.dialogflow.com/api-client/) and we want to create a new credential.

<img class="fancyimage" width="600" src="img/maven/image_18.png">

1. Click on the gear icon next to the bot name to get to the General Settings page.

2. Click on the **iam.gserviceaccount.com** email address listed under ‘Service Account’.

3. This will take you to the Google Service accounts page for your selected bot.

	<img class="fancyimage" width="600" src="img/maven/image_19.png">

4. Click on the email that was listed in Step 2. It should have a name of **Dialogflow Integrations**.

5. Click **Edit** at the top of the page to start editing the service account details.

6. Click **Create Key** at the bottom of this page.

7. On the confirmation modal, select **JSON** key type, and click **Create** to save the credential file to your computer. Save this file, since you will not be able to download it again.

	<img class="fancyimage" width="600" src="img/maven/image_20.png">

8. Next, click on the IAM link in the left hand navigation.

9. On this Permissions page, find the email listed in Step 2, and check that it has **Dialogflow API Admin** under the Role section. If not, edit the item and add the appropriate fields from the dropdowns.

	<img class="fancyimage" width="600" src="img/maven/image_21.png">


##### Add credentials for Watson

Follow the steps below to gather information for the form.

<img class="fancyimage" width="750" src="img/maven/addBot-Watson.png">

Create a *service*, which generates a key which can be provided to LivePerson.

<img class="fancyimage" width="600" src="img/maven/image_22.png">

<img class="fancyimage" width="600" src="img/maven/image_23.png">

Next, create a *skill* and add *intents*.

<img class="fancyimage" width="600" src="img/maven/image_24.png">

The *workspaceId* can be obtained via the *Skill Details*, accessible from the *Skills* list.

<img class="fancyimage" width="600" src="img/maven/image_25.png"> 

The service can then request responses from Watson.


### Configure Score Threshold

Automation suggestions have a score indicating how relevant the predicted intent is to a given consumer message. Suggestions are only shown if they are above the score threshold, which is configurable as shown below. The default score threshold is 70%.

<img class="fancyimage" width="600" src="img/maven/image_26.png">