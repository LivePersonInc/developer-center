---
pagename: Getting Started
redirect_from:
  - conversation-builder-getting-started-0-video-tutorials.html
  - conversation-builder-getting-started-1-dialogs-and-patterns.html
  - conversation-builder-getting-started-getting-started-part-1.html
  - conversation-builder-getting-started-2-intents.html
  - conversation-builder-getting-started-getting-started-part-2.html
  - conversation-builder-getting-started-3-integrations.html
  - conversation-builder-getting-started-getting-started-part-3.html
  - conversation-builder-getting-started-4-connect-to-liveengage.html
  - conversation-builder-getting-started-getting-started-part-4.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Tutorials & Guides
permalink: conversation-builder-tutorials-guides-getting-started.html
indicator: both
---

### Overview

The Getting Started tutorials include four tutorials that build on one another:

* **Dialogs & Patterns**: Learn how to get started with a basic bot. This tutorial explores the concept of dialogs (the different conversation flows a bot can have) and patterns, which allow the bot to match user input and respond intelligently. You are guided through the creation of a simple "Hello World" bot.

* **Intents**: Dive deeper into user input matching and look at the more advanced concepts of intents and entities. Intents allow you to use our Natural Language Understanding (NLU) engine to enable your bot to more accurately match user input, while entities help with storing variable-like parameters for quick and easy data access.

* **Integrations**: Explore integrations, which allow your bot to query external APIs, bringing powerful new options to your conversations. Integrations let you programmatically access catalogs, databases, and other web services to super power your bot responses.

* **Connect to LiveEngage**: Bring it all together by deploying your bot to the LiveEngage environment and testing it out.

### Dialogs & Patterns tutorial

#### Watch the video

<div style="display: block; position: relative; max-width: 70%;margin:0 auto;"><div style="padding-top: 56.25%;"><iframe src="https://player.vimeo.com/video/321978379" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 10px; bottom: 0px; right: 0px; left: 0px;"></iframe></div></div>
<br>

#### Prerequisite steps

This tutorial assumes you have a user account for the LiveEngage and Conversation Builder platforms. If you don't, your team should have an administrator who can create one for you.

#### Step 1: Create a new bot

1. Navigate to [https://authentication.liveperson.net/login.html](https://authentication.liveperson.net/login.html), enter your credentials, and log in.
2. In the left sidebar in LiveEngage, click the Conversational AI and Bots <img style="width:30px" src="img/ConvoBuilder/helloworld/icon_le_convers_ai.png"> icon.
3. In the Conversational AI dashboard, click **Conversation Builder**.
4. Click **New Bot** in the upper-right corner, and select the **Custom Bot** generic [template](conversation-builder-templates-overview.html).
5. Give the bot a unique name and description, and click **Create Bot**.
    
    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/helloworld/createAutomation.png">

    This takes you to the new bot in Conversation Builder. Since you selected the Custom Bot template, by default this creates a bot with a “Welcome” dialog that matches and responds to simple forms (patterns) of “hello”. The bot also has a Fallback dialog with some fallback text.

6. Click the **Welcome** tab in the lower-left corner to open the Welcome dialog, so you can examine it.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/image_3.png">

    (You can learn about the different parts of Conversation Builder [here](conversation-builder-bot-workspace.html).)

#### Step 2: Test the Welcome dialog

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

#### Step 3: Add a Goodbye dialog

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

#### Step 4: Test the Fallback dialog

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


### Intents tutorial

In this tutorial, you take things to the next level. Instead of using patterns to trigger a dialog, you use intents.

#### Watch the video - intents & entities

<div style="display: block; position: relative; max-width: 70%;margin:0 auto;"><div style="padding-top: 56.25%;"><iframe src="https://player.vimeo.com/video/321979334" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 10px; bottom: 0px; right: 0px; left: 0px;"></iframe></div></div>
<br>

#### Watch the video - advanced interactions

<div style="display: block; position: relative; max-width: 70%;margin:0 auto;"><div style="padding-top: 56.25%;"><iframe src="https://player.vimeo.com/video/321979606" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 10px; bottom: 0px; right: 0px; left: 0px;"></iframe></div></div>
<br>

#### Step 5: Create a Billing intent

Since you’re going to be using intents in this tutorial, you need to leave the Conversation Builder application for a moment. 

1. In the upper-left corner, click **< Bots** beside the bot name to return to the list of bots.

    <img class="fancyimage" style="width:200px" src="img/ConvoBuilder/helloworld/image_10.png">

2. Again in the upper-left corner, click **< Apps** to return to the Conversational AI dashboard.
3. Click **Intent Builder**.

    Intent Builder is where you create *domains*, which are collections of *intents* and *entities*. You can learn about the different parts of the Intent Builder application [here](conversation-builder-intent-builder-overview.html).

    Now let’s create a domain.

4. In the upper-right corner, click **New domain**.

5. On the Add Domain page, name the domain after your org (e.g., "ACME Co"), select "Manual", and click **Add Domain**. (While you will manually add intents and entities, they can be imported from a CSV file too.)

    This displays the Add Intent page. Now you can begin to create an intent.

6. Enter "Billing question" for **Intent Name**.

7. In the **Training** section, add the following training phrases, pressing Enter to add each one:

    * i have a question about my bill
    * can you help me with my bill
    * i have a bill related question
    * my bill is past due

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/addIntent1.png">

    Using the word “bill” in the training phrases is important because you will create an entity named "bill" that the phrases will recognize. 

8. Scroll down, and click **Add Intent**.

    Now you can use the debugger to test how the training phrases match against a user's utterance.

9. In the left panel, select the *Billing question* intent, and then click the Debug icon <img style="width:35px" src="img/ConvoBuilder/helloworld/debugger_icon.png"> in the lower-right corner.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/image_11.png">

10. Enter an utterance that is close to one of your sentences, like, "I need help with my bill". Then click **Test**.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/helloworld/matchverygood.png">

11. Enter another utterance but use “billing” instead of “bill”, e.g., "I have a billing question".

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/helloworld/matchfair.png">

    The result when using "billing" is only FAIR because it is not recognized as a synonym for “bill”. You can remedy this by creating an [entity](conversation-builder-intent-builder-entities.html). You do this next.

12. In the upper-right corner, click **Entities**.

13. On the Add Entity page, create a new entity named "bill" and add a number of entity values (synonyms) like `bill`, `billing`, `payment`, and `statement`. Click the **+** sign to add each one.

14. Click **Add Entity**.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/billentity.png">

15. *Now see how adding an entity can improve the NLU matching*: Click **Intents** in the upper-right corner to return to the Intents tab, select the "Billing question" intent, and use the debugger again. This time re-enter the phrase, "I have a billing question".

    Now the result is VERY GOOD, and you can see that the entity @bill was detected as well.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/helloworld/image_12.png">

#### Step 6: Link the intent to a Billing dialog

With the "Billing question" intent configured, let’s return to Conversation Builder and use the intent to trigger a new dialog.

1. In the upper-left corner, click **< Domains** to return to the list of domains.
2. Again in the upper-left corner, click **< Apps** to return to the Conversational AI dashboard.
3. Click **Conversation Builder**.
4. Select the bot you previously created.
5. Create a new regular dialog named "Billing".
    
    By default, a regular dialog includes a User Says interaction, but it isn't configured yet.

    The [NLU Assist tool](conversation-builder-nlu-assist.html) that automatically appears helps you to link the domain and intent to the User Says interaction.
    
    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/selectdomain.png">

7. In the NLU Assist tool <img style="width:35px" src="img/ConvoBuilder/helloworld/icon_assist.png"> , select the domain you created. This enables NLU Assist to use the platform’s NLU to match your User Says interaction against any available intents. 
    
    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/selecteddomain.png">
    
8. Select the User Says interaction, enter the phrase "I have a question about my bill" as the sample text, and press Enter.

    NLU Assist automatically finds appropriate intents to link to the User Says interaction.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/usersaysbilling.png">

9. In the NLU Assist tool, select the "Billing question" intent that you created to associate it with the Billing dialog and the User Says interaction.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/usersaysbilling2.png">

#### Step 7: Add response conditions

Now you can begin to build out the Billing dialog.

1. Add a Text statement that says, "I can help you with your bill."

2. Add a Multiple Choice question that asks, "Do you want a copy of your most recent bill?" Enter "Yes" and "No" as the choices.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/billing_mcq.png">

    When someone says "yes," you'll want to show them a specific message. The same applies when someone says, "no."

3. Add a Text statement to respond to a reply of "yes". For the statement's text, enter, "If you'd like a copy of your most recent bill, please go to http://example.com”. In the **Interaction Details**, on the **Settings** tab, change the interaction's name to "Yes statement" to better differentiate the statement from others. And on the **Next Actions** tab, for **Next Step**, select, "End Interaction." Click **Save**.
    
    You make the last change because the default behavior for statements is to display the next interaction. In our example, the No statement will be next. Since the dialog flow should stop after the Yes statement, the Yes statement's next step should be to end.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/yesstatement_end.png">

4. Add a Text statement to respond to a reply of "no". For the statement's text, enter, “OK. How else can I help you today?” In the Interaction Details, change this interaction's name to “No statement”. Click **Save**.

    You've got the dialog fleshed out; now you need to add [conditions](conversation-builder-conversation-builder-conditions.html) to detect when a user says "yes" or “no” and direct them to the correct text statement.

5. Select the multiple choice question, and open its Interaction Details. On the **Next Actions** tab, under **Response Match & Actions**, find the Conditions panel.

6. Add a condition to handle a "yes" response: Click the **+** icon beside **Conditions**. Select "Pattern" from the drop-down list, and enter `(yes|yah|yup)` for the pattern. Then, for **Next Step**, select the "Yes statement."

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/userresponseyes.png">

7. Add a condition to handle a "no" response: Click the **+** beside **Response Match & Actions** (at the top of the window) to add a second condition set. Add a condition. Select "Pattern" here too, but this time enter `(no|nope|nah)` for the pattern. And for the **Next Step**, select the "No statement."

    Now let's see the dialog in action.

8. Open the Preview window, and start a new session by entering "reset" and pressing Enter.

9. Enter an utterance that should match the billing intent, like, "I have a question about my bill". You should see the billing dialog and multiple choice question. Tap or enter “yes” or “no” and see what response you get.

<img class="fancyimage" style="width:350px" src="img/ConvoBuilder/helloworld/yestest.png">

You now understand the basics of intents, entities, and branching dialog flows.


### Integrations tutorial

Many use cases require integration with an API to send and receive data. Following the "billing" use case, in this tutorial you add an integration to check a user’s account balance. 

{: .important}
This tutorial uses an example API that returns random balance data when given an account number and email address. 

#### Watch the video

<div style="display: block; position: relative; max-width: 70%;margin:0 auto;"><div style="padding-top: 56.25%;"><iframe src="https://player.vimeo.com/video/321979952" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 10px; bottom: 0px; right: 0px; left: 0px;"></iframe></div></div>
<br>

#### Step 8: Create an account balance API integration

1. Open the bot in Conversation Builder.
2. In the upper-right corner, click **Integrations**.
3. On the Add Integration page, configure the integration as follows, and then click **Save**.

  * **Integration Name**: Balance
  * **Response Data Variable Name**: Balance
  * **Method**: GET
  * **URL**: 
    * For US: https://va.bc-intg.liveperson.net/thirdparty-services-0.1/accountBalance
    * For Europe: https://platformservice-eu.botcentralapi.com/thirdparty-services-0.1/accountBalance
    * For APAC: https://platformservice-ap.botcentralapi.com/thirdparty-services-0.1/accountBalance 

  * **Request Parameters**: Be sure to add parameters, **not** headers.

  <table>
    <thead>
    <tr>
      <th>Key</th>
      <th>Value</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>accountNumber</td>
      <td>{$botContext.slot.accountNumber} </td>
    </tr>
    <tr>
      <td>email</td>
      <td>{$botContext.slot.userEmail}</td>
    </tr>
    </tbody>
  </table>

  * **Custom Data Fields**: These provide a simple method of displaying the results in interactions in dialogs. The return data is stored here.

  <table>
    <thead>
    <tr>
      <th>Key</th>
      <th>Value</th>
    </tr>
    </thead><tbody>
    <tr>
      <td>balance</td>
      <td>{$.api_Balance.accountBalance}</td>
    </tr>
    </tbody>
  </table>

#### Step 9: Use the integration in a dialog

1. Return to the dialog editor by clicking the bot name in the upper-left corner.
  
    <img style="width:200px" src="img/ConvoBuilder/helloworld/navfromintegrations.png">
2. Add a regular dialog named "Account Balance."
3. In the dialog, in the User Says interaction, enter, "I want to see my account balance" for the sample user statement.
4. Open the interaction's **Interaction Details**, and click **Settings**. Here you can add a simple pattern to detect the word “balance” (or you can create an intent if you want to get fancy). You can use the wildcards (`*balance*`) to match all instances.
<img class="fancyimage" style="width:850px" src="img/ConvoBuilder/helloworld/accountbalancedialog.png">
5. Add a Text statement <img style="width:25px" src="img/ConvoBuilder/helloworld/icon_textStatement.png"> that says, "I can get your latest balance."

    To get the user's account balance, you need to ask for their account number.
6. Add a Text question <img style="width:20px" src="img/ConvoBuilder/helloworld/icon_textQuestion.png">. For the question text, enter, "Please enter your 6-digit account number (e.g., 123456)."
7. Still in the Text question, open the Interaction Details, and add a condition on the **Next Actions** tab. To do so, select "Regular Expression," and add the following regular expression (regex) to match 6-digit numbers: `^\b\d{6}\b`. Next, capture the user’s account number as a slot variable. Under Slot, enter a **Slot Name** of "accountNumber"; for **Slot Value**, enter `{$userMessage}`; and for **Duration**, make sure it's set to "Dialog." 
<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/helloworld/askaccountnumber.png">
  You also need to ask for and capture the user's email address.
8. Add another Text question. For the question text, enter, "Please enter your email address (e.g., fred@home.com)."
9. Still in the Text question, open the Interaction Details, and add a condition on the **Next Actions** tab. To do so, select "Regular Expression," and add the following regex to match email addresses: `^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$`. Under Slot, enter a **Slot Name** of "userEmail"; for **Slot Value**, enter `{$userMessage}`; and for **Duration**, make sure it’s set to "Dialog."
<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/helloworld/askemail.png">
  When you created the Balance integration, you told it to use the following slots in the request:

    * `{$botContext.slot.accountNumber}`
    * `{$botContext.slot.userEmail}`

    So here, in the Question interactions, you have configured things so that the user's responses are stored in slots with those slot names. Now, when you call the Balance API, it will use the values in those slots to make the request.
10. Add an API Integration interaction <img style="width:30px" src="img/ConvoBuilder/helloworld/icon_integration.png">.  In the drop-down list in the interaction, select "Balance." This is the name of the integration that you created earlier.
    
    To finish, you just need to display the user's balance results.
11. Add a Text statement that says, "Your current balance is {Balance.balance}." 
<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/helloworld/dialogflow_accountbalance.png">
  When the integration interaction runs, it stores the response data in the custom data field that you configured in the integration. `Balance.balance` is the name of the integration name followed by the name of that custom data field, which is “balance”.
  
    Now let's test all this out.
12. Open the Preview window, and start a new session by entering "reset" and pressing Enter.
13. Trigger the Account Balance dialog by entering, "I want to see my account balance," or something else with the word "balance."
14. Follow the two prompts for an account number and email address. *Any* 6-digit account number and *any* email address will work for this API.
  <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/helloworld/integrationtest.png">
  You now understand the basics of integrations and slots.


### Connect to Live Engage tutorial

In this tutorial, you walk through how to link your bot to LiveEngage, ending with an integration that transfers to a human agent.

#### Step 10: Configure LiveEngage

In this step, you create two user agents, one for the bot and one for the human that will be receiving the inbound transfers (for human "escalation"). Each user agent will have an assigned skill, which you'll also create.

##### Create the skills

1. [Log in](https://authentication.liveperson.net/login.html) to your LiveEngage account. 
2. Click the **Manage users and skills** icon <img style="width:30px" src="img/ConvoBuilder/helloworld/icon_le_usersAndSkills.png"> , and then click the **Skills** tab.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/helloworld/manageUsersAndSkillsIcon.png">

3. Click the **Add skill** button at the bottom of the page.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/addSkillButton.png">

4. On the Add Skill page, specify the following:
    * **Name**: Enter "Bot."
    * **Description**: Enter "Bot skill."
5. Click **Save**.

    The Bot skill will be the default skill connected to the bot agent.
6. Repeat steps 3 - 5 to create another skill named "Human." To enable the Save button, you'll need to provide a description here too; anything is suitable.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/confLE_1.png">

7. In the list of skills, select the Bot skill, and then note the URL that's displayed in the browser's address bar. Write down the skill ID in the URL, as it will be needed later. The skill ID is the number at the end of the URL: https://z1.le.liveperson.net/a/accountNumber/#um!skills/**skillID**.
8. Repeat the preceding step to copy down the skill ID for the Human skill.

##### Create the LiveEngage agents

In addition to the skills, you also need user agents, one for the bot and one for the agent that will be receiving the inbound transfers (for human escalation).

1. Still in LiveEngage, click the **Users** tab.
2. Click the **Add user** button at the bottom of the page.
3. On the Add User page, specify the following:
    * **User type**: Set this to "Bot." If you don't see this field, contact your LivePerson representative to enable this for you.
    * **Login name**: Enter any value, e.g., "bot_user."
    * **Email**: Enter any value, such as your own email address.
    * **Nickname**: Enter any value, e.g., "Billing Bot."
    * **Name**: Enter any value, e.g., "Billing Bot."
    * **Choose login method**: Select "API key," and then, for **Api key**, select "Generate API key." This fills in the keys automatically. If you don't see the "API key" option, contact your LivePerson representative to enable this for you.
    * **Assignment**: Click this field, and select "Agent" from the list that appears.
    * **Max no. live chats**: Select "Unlimited."
    * **Skills**: Click this field, and select "Bot" from the list that appears. This is the default bot skill. **Do NOT add additional skills.**
    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/helloworld/confLE_2.png">
4. Click **Save**.
5. Repeat steps 2 - 4 to create a human agent, and assign the Human skill to the human agent. Alternatively, assign the Human skill to your own user account, and make sure your user is set to Available (so you can take chats), not Away or Offline.

##### Assign the bot skill to an engagement

You will test this connection with a standard web chat engagement, so now you create a campaign and an engagement that routes to the new Bot skill.

1. Click the **Manage campaigns and engagements** icon <img style="width:30px" src="img/ConvoBuilder/helloworld/icon_le_campaigns.png">.
2. In the upper-right corner, click **Action > Add**.
3. On the page that appears, specify the following:
    * **Campaign name**: Enter "Bot test."
    * **Campaign goal**: Click this, select "Interact with consumers" on the page that appears, and click **Done**.
    * **Engagement**: Click **+ Add engagement**. For the **engagement source**, select "Web." In the gallery that appears next, select a chat template, and click **Next**. In the Engagement Settings that appear next, select "Live chat" for the **Conversation type**. For **Routing**, select "Specific skill," and then select the "Bot" skill.

    <img style="width:400px" src="img/ConvoBuilder/helloworld/confLE_5.png">
4. Click **Next**. 
5. In the Engagement Studio, click **Next**. 
6. In the Engagement Window Library, click **Done**.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/confLE_6.png">
7. Click **Publish** in the upper-right corner.

#### Step 11: Set up the transfer from bot to human

In this step, you set up an "escalation" to transfer the user to a human agent in LiveEngage.

1. Return to Conversation Builder, and open the bot.

2. Create a new regular dialog named "Agent Handoff" (or similar).

3. In the default User Says interaction that's provided, enter "I want to speak to an agent" as the sample user statement.

4. Open the User Says interaction's **Interaction Details**, and click the **Settings** tab.

5. Add the following pattern: `*(agent|representative|help|human)*`. Click **Save**.

6. Add an [Agent Transfer interaction](conversation-builder-interactions-integrations.html#agent-transfer-interactions) ( <img style="width:30px" src="img/ConvoBuilder/icon_agentTransfer.png"> ) beneath the User Says interaction.

7. Note the default message to be sent to the user prior to escalation. Replace this with, "Hold on while I transfer you to an agent..." Alternatively, if you don't want to send a message, enter "BLANK_MESSAGE".

8. Still in the Agent Transfer interaction, open the **Interaction Details**, and click the **Settings** tab.

9. In the **Agent Skill Id** field, enter the ID number of the human skill that you created; you wrote this down earlier.

    <img style="width:800px" src="img/ConvoBuilder/helloworld/escalation_skillId.png">

    (While you set the skill name and ID to that for a specific skill, you could also set these values using variables for a more dynamic experience.)

10. Click **Save**.

#### Step 12: Deploy the bot to LiveEngage

In this step, you use Conversation Builder to connect your bot to the bot agent you just created and get the connection running in the Demo environment.

##### Add the agent connector

1. Still in the bot in Conversation Builder, click **Agent Connectors** on the menu bar in the upper-right corner.
2. Click **New Bot Connector** in the upper-right corner, just under the menu bar.
3. In the Add Agent Connector dialog box, specify the following based on the bot user you created.
    - **Agent User ID**: Select the user ID for the bot user agent.
    - **Role**: Select "Agent."
    - **Conversation Type**: Select "Chat."
    - **Deploy to**: Select "Demo." The Demo environment is a testing environment, and the Production environment is the live environment. It's always a best practice to test your bot in the Demo environment first, before deploying it to the Production environment.
4. Click **Save**.
    
    <img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/helloworld/agentConnectorsPage1.png">

{: .important}
LivePerson recommends that, when you connect your bot to LiveEngage in a production environment, you deploy at least two LiveEngage agent connectors for a single bot. This is so the second can serve to support failover if the first goes down. Additionally, if you have traffic considerations, you might want to deploy three or more. A good baseline is no more than 50 concurrent conversations per agent connector (e.g., deploy 4 connectors to support 200 concurrent conversations).

##### Start the agent connector

- Click the **Start** button to start the agent connector. This fully deploys the bot.
    <img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/helloworld/agentConnectorsPage2.png">
    It might take a few minutes for the connection to be established.

    To view more details about the connector, move your mouse over the **i** icon beside **Details**.
    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/helloworld/agentConnectorsPage3.png">

#### Step 13: Test the bot

{: .important}
In this step, you'll be testing with Chat, so you'll be using [this test page](https://livepersoninc.github.io/visitor-page/?siteid=[your account number]), adding your account number to the URL. When you test with Messaging for Web, you can use [this test page](https://vx-lp.github.io/v2/lpwm/).

1. Be sure you are online as a Human agent in LiveEngage.

2. In a browser, navigate to [this test page](https://livepersoninc.github.io/visitor-page/?siteid=[your account number]). Note the URL.

    <img class="fancyimage" style="width:650px" src="img/ConvoBuilder/helloworld/testpage1.png">

3. In the URL, replace the placeholder with your site ID, i.e., your account number.

   <img class="fancyimage" style="width:650px" src="img/ConvoBuilder/helloworld/testpage2.png">

4. On the test page, click the Live Chat button.

    This connects you with the bot in the Bot skill.

5. Enter a message to test the bot, and press Enter.

    <img class="fancyimage" style="width:300px" src="img/ConvoBuilder/helloworld/conversation1.png">

6. Trigger the Agent Handoff dialog by entering, "I want to speak to an agent."

    <img class="fancyimage" style="width:300px" src="img/ConvoBuilder/helloworld/conversation2.png">

    The conversation should be transferred to you as long as you assigned your test agent with the appropriate skill.

6. Return to Conversation Builder. On the left sidebar, note the message indicator on the "Agent workspace for Chat" icon.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/messageindicator.png">

7. Click the icon to enter the agent workspace in LiveEngage, and then select the connection in the table. Click **Accept** in the lower-left corner.

   <img class="fancyimage" style="width:900px" src="img/ConvoBuilder/helloworld/webvisitors_accept.png">

    As an agent, when you accept the inbound transfer, you should see something like this below in your LiveEngage dashboard. You can now take part in live chat.

    <img class="fancyimage" style="width:900px" src="img/ConvoBuilder/helloworld/confLE_19.png">
