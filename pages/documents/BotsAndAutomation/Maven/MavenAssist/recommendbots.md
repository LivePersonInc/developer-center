---
pagename: Recommended Actions for Bots
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Maven
subfoldername: Maven Assist
permalink: maven-maven-assist-recommended-actions-for-bots.html
indicator: both
---

Maven can recommend bots that match customer’s intents in the Recommended Actions widget. To use this feature you will need to have created bots that can handle specific intents and workloads. 

1. Create a bot

Maven currently supports bots created in LivePerson Conversation Builder, Google DialogFlow, and IBM Watson. To learn how to create bots in these specific platforms please refer to respective product documentation

2. Enable Recommended Actions Widget in Live Engage

You will first need to enable the feature in LiveEngage. Please call LivePerson support or your LivePerson customer representative to enable this feature. 

3. Configure LiveEngage

Before adding automations to Maven, you must first properly configure [LiveEngage](https://server.iad.liveperson.net/hc/web/public/pub/ma/lp/login.jsp?lpservice=liveEngage&servicepath=a%2F~~accountid~~%2F%23%2C~~ssokey~~) in the following order. These are the steps:

1. Create a LiveEngage Skill that will be used to route conversations

2. Create a Bot user, which will be associated with that skill

3. Configure a bot connector, which will enable a LiveEngage account to send & receive messages to the bot & the platform it is hosted on (Watson, DialogFlow etc.)

1. Add a skill

*Add skills for each bot you wish to be able to join to a conversation. *

In the LiveEngage window, click on the **Users** button at the top, followed by the **Skills** tab.

<img class="fancyimage" width="600" src="img/maven/image_2.png">

<img class="fancyimage" width="600" src="img/maven/image_3.png">

Click on the **Add skill** button at the bottom of the page. The *Add skill* page is shown.

<img class="fancyimage" width="600" src="img/maven/image_4.png">

Enter the **Name** and **Description**; other settings can be left as defaults. Click **Save** to save the new skill.

2. Add a bot user

LiveEngage requires a bot user to represent your bot automation. For each bot automation, there should be only **_one_** single bot user in LiveEngage with an associated skill to allow for transfers or joins to happen correctly.

In the LiveEngage window, click on the **Users** tab, then **Add User** at the bottom.

<img class="fancyimage" width="600" src="img/maven/image_5.png">

<img class="fancyimage" width="600" src="img/maven/image_6.png">

In the **User type** dropdown menu, choose **Bot**. 

*Note: If the User type menu does not appear, verify that your AC Features settings in Houston has ***_Common.User_type_bot_*** enabled (remember, it can take 5-10 minutes for changes in Houston to take effect).*

<img class="fancyimage" width="600" src="img/maven/image_7.png">

Fill out the rest of the form. The following values can be anything descriptive:

<img class="fancyimage" width="600" src="img/maven/image_8.png">

For credentials, choose **API Key** and then **Generate API Key**. If using a Conversation Builder bot, save these credentials as you will need them when configuring the bot connector.

Choose your login method, and then click on the **Assign Profile** field under **Assignment**.

Then select the *Agent* role.

<img class="fancyimage" width="600" src="img/maven/image_9.png">

After selecting the role, more fields will appear. If desired, set the maximum chats and conversations, and then move to the **Skills** section.

Click on the ** Assign / Create** field, and choose the skill created in the previous step.

<img class="fancyimage" width="600" src="img/maven/image_10.png">

Click **Save** to save all changes and create the bot user.

3. Configure Bot Connectors

Once LiveEngage is configured, connector(s) need to be setup to enable bots to respond to conversations in LiveEngage. 

For ConversationBuilder bots, see the next section. For third party (Watson, DialogFlow) bots, see the section *[Configuring Third Party Bot*s](#heading=h.g1dot6ycgy7e).

### Configuring ConversationBuilder Bots

1. Login to LiveEngage and select the **Automation Tab**

2. Select the **Build and manage bots** link from the left hand menu

3. Click the **Conversation Builder** button on this page<img class="fancyimage" width="600" src="img/maven/image_11.png">

4. Click on the Bot you wish the configure, then click the cog icon at the top of the page to open the **bot menu
**<img class="fancyimage" width="600" src="img/maven/image_12.png">

5. Select **Enterprise Integrations**, then choose **Add Enterprise Configuration**

6. Choose **LivePerson** from the dropdown

7. Enter a **Company Name** and then click the **Save** button.

8. Click the **Add Agent** button.

9. When the Add Agent dialog opens, select conversation type *Messaging*, and enter the *Account Number* and *Login Name (The Bot’s login name)*. For the Role, select *Assigned Agent*, and for Authentication Type, select *OAuth*.

10. Enter the **Application Key**, **Application Secret**, **Access Token**, and **Token Secret** from the **LiveEngage Bot User Credentials** you saved from the previous step to create the bot user. Then click **Save**.
<img class="fancyimage" width="600" src="img/maven/image_13.png">

11. **_IMPORTANT_***:** *Be sure to press the play button on the Bot in the bot dashboard to enable the bot to handle traffic.

<img class="fancyimage" width="600" src="img/maven/image_14.png">

### Fetching the Automation ID

1. Click the cog icon at the top of the page to open the **bot menu**

2. Select** Automation Settings**

3. Scroll to the bottom and click on **More Settings** to expand the settings

4. Copy the **Automation ID** and **save this for the next section**.

### Configuring Third Party Bots (DialogFlow, Watson)

The Bot dashboard referred to in the guide will automatically let you continue setup for bot users you created in Live Engage. You will need to enter the configuration info from the Bot provider into the "connect to AI screen" after going through the steps in the workflow.

**Note:** For each platform, you will need to provide the *botId* (which the platform uses to identify the bot), the *botName* (which should exactly match the name of the bot agent in LiveEngage), and a *credential* (which differs depending on the platform). Additionally, when selecting a *target skill* in the Bot Connector dashboard, be sure to use the skill that the bot should escalate to in the case of a problem (i.e. a skill assigned to human agents), **not** the skill assigned to bots.

For **DialogFlow**, the *botId* is the same as the *projectId*; this is displayed when you create the bot. The credential is obtained by [creating a service account and downloading the key, as a JSON file, for that account](https://dialogflow.com/docs/reference/v2-auth-setup).

For **Watson**, the *botId* is referred to as the *Workspace ID*, and can be found in the skill’s API Details. The credential is referred to as the *Password*, and is found below the Workspace ID. The credential is obtained by [creating a watson bot and retrieving the API details](https://www.ibm.com/watson/how-to-build-a-chatbot).

Follow the guide located below for your respective bot type:

[https://docs.google.com/document/d/18GPFxMyqWT8mJ1TaJQBNpjY90pKcFo1iH8BOyAZxPnU](https://docs.google.com/document/d/18GPFxMyqWT8mJ1TaJQBNpjY90pKcFo1iH8BOyAZxPnU/edit?usp=sharing)

<img class="fancyimage" width="600" src="img/maven/image_15.png">

IMPORTANT: Be sure to press the play button on the Bot in the bot dashboard to enable the bot.

<img class="fancyimage" width="600" src="img/maven/image_16.png">

4. Configure Maven

Now that you have setup LiveEngage, and configured Bot Connectors,  you need to link these bots to Maven so they can be suggested in the Recommended Actions Widget. 

### Login to Maven

Login to Maven with your LiveEngage credentials and then navigate to Maven Assist > Recommended Actions - KB. 

### Add the bots 

Now use the experience to add the bots to Maven. This enables Maven to suggest these bots based on customers’ utterances, and also ability to join them to the conversation. 

<img class="fancyimage" width="600" src="img/maven/image_17.png">

1. Click Add bot button to add a new bot

2. Choose a Bot provider (Conversation Builder, Watson, or Dialogflow). Different bots support different types of credentials. For instance, DiaglogFlow uses a json object, whereas Watson provides the credentials in string format. This is reflected in the UI, when you change the bot type. 

3. Enter the bot name and ID. Enter a **Bot Name** (use the Login Name of the bot user created in Live Engage)and **Bot ID** into their respective input fields. The **Bot ID** is the value saved from the previous *[Configure Bot Connector*s](https://docs.google.com/document/d/1uQz2-tXuEIN8XJkfgriS7jli0fInJzHyzwpU8eHcObA/edit#heading=h.i08an4sg7dlj) above. If using BotCentral/Conversation Builder, this is the *Automation ID*. For DialogFlow, this is the *projectId*; and for Watson, this is the *Workspace ID*.

### Add credentials for Conversation Builder

1. Login to LiveEngage and select the **Automation Tab**

2. Click on the **Account** icon at the top right of the page, and choose **Settings**.

Click on the **API** tab, and copy the value listed for **Your API Access Key**. This should be entered in the **Credentials** field of the *Add Bot* page on *Maven Workspace*.

### Add credentials for DialogFlow

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

### Add credentials for Watson

	Create a *service*, which generates a key which can be provided to LivePerson.

<img class="fancyimage" width="600" src="img/maven/image_22.png">

<img class="fancyimage" width="600" src="img/maven/image_23.png">

1. Next, create a *skill* and add *intents*.

<img class="fancyimage" width="600" src="img/maven/image_24.png">

1. The *workspaceId *can be obtained via the *Skill Details*, accessible from the *Skills* list.

<img class="fancyimage" width="600" src="img/maven/image_25.png"> 

The service can then request responses from Watson.

5. Configure Score Threshold

Automation suggestions have a score indicating how relevant the predicted intent is to a given consumer message. Suggestions are only shown if they are above the score threshold, which is configurable as shown below. The default score threshold is 70%.

<img class="fancyimage" width="600" src="img/maven/image_26.png">