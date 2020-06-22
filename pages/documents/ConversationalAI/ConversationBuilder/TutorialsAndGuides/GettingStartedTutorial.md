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

* **Connect to Conversational Cloud**: Bring it all together by deploying your bot to the Conversational Cloud environment and testing it out.

### Dialogs & Patterns tutorial

#### Watch the video

<div style="display: block; position: relative; max-width: 70%;margin:0 auto;"><div style="padding-top: 56.25%;"><iframe src="https://player.vimeo.com/video/321978379" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 10px; bottom: 0px; right: 0px; left: 0px;"></iframe></div></div>
<br>

#### Prerequisite steps

This tutorial assumes you have a user account for the Conversational Cloud and Conversation Builder platforms. If you don't, your team should have an administrator who can create one for you.

#### Step 1: Create a new bot

1. Navigate to [https://authentication.liveperson.net/login.html](https://authentication.liveperson.net/login.html), enter your credentials, and log in.
2. In the left sidebar in Conversational Cloud, click the Conversational AI and Bots <img style="width:30px" src="img/ConvoBuilder/helloworld/icon_le_convers_ai.png"> icon.
3. In the Conversational AI dashboard, click **Conversation Builder**.
4. Click **New Bot** in the upper-right corner, and select the generic **Custom Bot** [template](conversation-builder-templates-overview.html).
5. Give the bot a unique name and description, and click **Create Bot**.
    
    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/helloworld/createAutomation.png">

    This takes you to the new bot in Conversation Builder. Since you selected the Custom Bot template, by default this creates a bot with a “Welcome” dialog that matches and responds to simple forms (patterns) of “hello”. 
    
    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/image_3.png">
    
    The bot also has a Fallback dialog with some fallback text.

6. Examine the Welcome dialog, which is displayed by default.

   (You can learn about the different parts of Conversation Builder [here](conversation-builder-bot-workspace.html).)

#### Step 2: Test the Welcome dialog

With the bot created, let’s see how to make it respond to user utterances.

The first interaction in the Welcome dialog is a *Dialog Starter* interaction that allows us to match a user’s utterance using patterns or intents. Following that is a *Text Statement* interaction that displays some text ("Hi there! Thanks for coming!") to the user.

Statement interactions (Text, Image, Audio, and Video) are for displaying content to the user, without listening for a user response. Once the statement is displayed, the conversation flow moves on to whatever is next in the dialog. (You can learn more about interactions [here](conversation-builder-interactions-interaction-basics.html).)

Let’s see the interactions in action!

1. Click **Preview** in the upper-right corner.

2. In the Preview window, enter “hello” or “hello there.” You should see the welcome response.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/helloworld/testConvo.png">

    So how is the Welcome dialog triggered?

3. Examine the Dialog Starter interaction. On the interaction tile, note the different patterns used to match this particular dialog. (You can also use an intent to trigger a dialog, but for this exercise we focus on patterns.)

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/patterns.png">

    Since this is a "Welcome" dialog, it uses patterns like “hi”, “hello” and “howdy” to match those phrases exactly and display a response.

    By adding wildcards (e.g., `hi *` or `hello *`) you can allow for broader matches like “hi there” or “hello my friend”. Using parentheses and pipes allows you to specify a series of alternates. For instance, `(hi|hello|hey)*` will match “hi”, “hello there” and “hey you”.

4. Click the patterns (green button). On the Patterns & Intent tab in the Interaction Settings window, add some more patterns (e.g., “hiya”, “ciao”, “hola”). Then click **Save**.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/patterns2.png">

5. In the Preview window, click **Reset Session**. This starts a new session that "picks up" your changes.

6. Test the new patterns in the Preview window like you did before.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/helloworld/patterns3.png">

    Now that you’ve seen how a dialog is triggered, let’s change the welcome response by editing the Text Statement interaction.

7. Select (click) the Text Statement interaction below the dialog starter.

8. Change the text from `Hi there! Thanks for coming!` to `Hello World!`, and press Enter. (There is no need to open the Interaction Settings to change simple output text.)

9. To see your change, open the Preview window again, and click **Reset Session**. Then enter “hi”. You should see the “Hello World!” response.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/helloworld/helloworld.png">

#### Step 3: Add a Goodbye dialog

Let’s create another dialog to put these concepts into more practice. Since there is a "Welcome" dialog, let’s now create a “Goodbye” dialog.

1. Click **Add Dialog** in the lower-left corner.

2. In the Add Dialog window, name the dialog "Goodbye", and select Dialog for **Dialog Type**. Click **Save**.

    By default, the new Goodbye dialog has a Dialog Starter interaction; this allows the dialog to be triggered by patterns or an intent. But the interaction isn't configured by default, so let's do that now.

    For the dialog starter to match user input, you need to add some patterns.

3. Select the interaction, and click **+ Pattern**.

4. Under Patterns, add a few patterns like `goodbye`, `bye`, `see ya`, etc. Click **Save**.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/addnewpattern.png">

    Before you test things in the Preview window, you need to add some content to be displayed when the bot matches a pattern. Let's add a Text Statement interaction.

5. In the Interactions toolbar, click the Text Statement icon <img style="width:25px" src="img/ConvoBuilder/helloworld/icon_textStatement.png">. This inserts the interaction.

    (If you can't see the Interactions toolbar, close the Preview window, which might be covering it up.)

6. In the interaction, enter a goodbye message (e.g., "Bye. Thanks for coming!"), and press Enter.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/addByeResponse.png">

    Let's test the changes.

7. Open the Preview window again, and click **Reset Session**.

8. Enter “hi” to trigger the Welcome dialog and see the welcome message. Then enter “bye” to trigger the Goodbye dialog and see the goodbye message.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/helloworld/byetest.png">

#### Step 4: Test the Fallback dialog

You’ve seen how to create a new dialog and trigger it using patterns. But what happens when you enter an utterance that hasn't been accounted for? To catch and handle these when they occur, you can provide a "fallback dialog." By default, when you create a bot using the Custom Bot template, one is included. Let's examine and test it now.

{: .important}
There can be only one dialog of type Fallback per bot.

1. In the Dialogs panel on the left, click **2 Fallback**. This opens the Fallback dialog.

2. Note how there isn't a Dialog Starter interaction.

    You don't need a Dialog Starter interaction in the Fallback dialog because the Fallback dialog has special properties that cause it to display when there are no other matches available. However, you do need to add some type of message to tell the user that the bot didn’t understand their query. A default message is provided for you.

3. Select the Text Statement interaction, and change the message to, `Sorry, I only know ‘hello’ and ‘goodbye’.` Press Enter.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/fallbackTextTile.png">

4. Open the Preview window again, and click **Reset Session**.

5. Enter something other than your hello and goodbye patterns. You should see your fallback message.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/helloworld/fallbacktext.png">


### Intents tutorial

In this tutorial, you take things to the next level. Instead of using patterns to trigger a dialog, you use an intent.

#### Watch the video - intents & entities

<div style="display: block; position: relative; max-width: 70%;margin:0 auto;"><div style="padding-top: 56.25%;"><iframe src="https://player.vimeo.com/video/321979334" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 10px; bottom: 0px; right: 0px; left: 0px;"></iframe></div></div>
<br>

#### Watch the video - advanced interactions

<div style="display: block; position: relative; max-width: 70%;margin:0 auto;"><div style="padding-top: 56.25%;"><iframe src="https://player.vimeo.com/video/321979606" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 10px; bottom: 0px; right: 0px; left: 0px;"></iframe></div></div>
<br>

#### Step 5: Create a Billing intent

Since you’re going to be using an intent in this tutorial, you need to leave the Conversation Builder application for a moment. 

1. In the upper-left corner, click **< Back** twice. This returns you to the Conversational AI dashboard.

2. Click **Intent Builder**.

    Intent Builder is where you create domains, which are collections of intents and entities. You can learn about Intent Builder [here](conversation-builder-intent-builder-overview.html).

    Now let’s create a domain.

3. In the upper-right corner, click **New domain**.

4. On the Add Domain page, name the domain after your org (e.g., "Acme Corporation"), select "Manual", and click **Add Domain**. (While you will manually add intents and entities, they can be imported from a CSV file too.)

    This displays the Add Intent page. Now you can begin to create an intent.

5. Enter "Billing question" for **Intent Name**.

6. In the **Training** section, add the following training phrases, pressing Enter to add each one:

    * i have a question about my bill
    * can you help me with my bill
    * i have a bill related question
    * my bill is past due

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/helloworld/addIntent1.png">

    Using the word “bill” in the training phrases is important because you will create an entity named "bill" that the phrases will recognize. 

7. Click **Add Intent** in the lower-right corner.

    Now you can use the debugger to test how the training phrases match against a user's utterance.

8. Click **Debug** in the upper-right corner.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/helloworld/image_11.png">

9. Enter an utterance that is close to one of your sentences, like, "I need help with my bill". Then click **Test**.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/helloworld/matchverygood.png">

10. Test another utterance but use “billing” instead of “bill”, e.g., "I have a billing question".

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/helloworld/matchfair.png">

    The result when using "billing" is only FAIR because it is not recognized as a synonym for “bill”. You can remedy this by creating an [entity](conversation-builder-intent-builder-entities.html). You do this next.

11. In the upper-left corner, click **Entities**.

12. On the Add Entity page, create a new entity named "bill" and add a number of entity values (synonyms) like `bill`, `billing`, `payment`, and `statement`. Press Enter to add each one.

    <img class="fancyimage" style="width:300px" src="img/ConvoBuilder/helloworld/addbillentity.png">

13. Click **Add Entity** in the lower-right corner.

    Now let's see how adding an entity can improve the NLU matching.

14. Click **Intents** in the upper-left corner to return to the Intents tab, select the "Billing question" intent (if necessary), and use the debugger again. This time re-enter the phrase, "I have a billing question".

    Now the result is VERY GOOD, and you can see that the entity @bill was detected as well.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/helloworld/image_12.png">

#### Step 6: Link the intent to a Billing dialog

With the "Billing question" intent configured, let’s return to Conversation Builder and use the intent to trigger a new dialog.

1. In the upper-left corner, click **< Back** twice to return to the Conversational AI dashboard.
2. Click **Conversation Builder**.
3. Select the bot you previously created.
4. Create a new regular dialog named "Billing".
    
    By default, a regular dialog includes a Dialog Starter interaction, but it isn't configured yet. You'll use the [Assist tool](conversation-builder-assist.html) to do this.

5. Click <img style="width:30px" src="img/ConvoBuilder/helloworld/icon_assist.png"> (Assist icon) beside the interaction to open the Assist tool.

6. In Assist, search for the name of the domain that you created (e.g., Acme Corporation).

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/helloworld/selectdomain.png">

7. Select the domain to associate it with the dialog starter.

    In Assist, the intents within the domain are displayed.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/helloworld/selectintent.png">

8. Select the "Billing question" intent that you created. This associates the intent with the dialog starter.
    
   <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/helloworld/domainandintent.png"> 

#### Step 7: Add custom rules

Now you can begin to build out the Billing dialog.

1. Add a Text statement that says, "I can help you with your bill."

2. Add a Multiple Choice question that asks, "Do you want a copy of your most recent bill?" Enter "Yes" and "No" as the choices.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/billing_mcq.png">

    When someone says "yes," you'll want to show them a specific message. The same applies when someone says, "no."

3. Add a Text statement to respond to a reply of "yes". Name the interaction "Yes statement" (in the upper-left corner). For the statement's text, enter, "If you'd like a copy of your most recent bill, please go to http://example.com”. Select "End Interaction" as the next action. Click **Save**.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/addYesStatement.png">
    
    You make the last change because the default behavior for statements is to display the next interaction. In our example, the No statement will be next. Since the dialog flow should stop after the Yes statement, the Yes statement's next action should be to end.

4. Add a Text statement to respond to a reply of "no". Name the interaction "No statement" (in the upper-left corner). For the statement's text, enter, “Okay. How else can I help you today?" Click **Save**.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/addNoStatement.png">

    You've got the dialog fleshed out; now you need to add [custom rules](conversation-builder-interactions-configuration-next-action.html#custom-rules) to detect when a user says "yes" or “no” and direct them to the correct text statement.

5. Return to the multiple choice question, and select the Next Action dropdown.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/customrule1.png">

6. Add a rule to handle a "yes" response: Click **+ Custom Rule** in the Next Action dropdown. In the Add Next Action Rule window, configure the Yes rule as follows:

    * **Rule name**: Enter "Yes rule".
    * **Condition**: Click **+ Add Condition**. Select "Pattern" from the drop-down list of match types, and enter `(yes|yah|yup)` for the pattern.
    * **And Go To**: Select the "Yes statement" as the next action.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/helloworld/customrule2.png">

7. Add a rule to handle a "no" response: Click the **+ Custom Rule** button that's displayed once you have at least one rule defined. In the Next Action Rule window, configure the No rule as follows:

    * **Rule name**: Enter "No rule".
    * **Condition**: Click **+ Add Condition**. Select "Pattern" from the drop-down list of match types, and enter `(no|nope|nah)` for the pattern.
    * **And Go To**: Select the "No statement" as the next action.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/helloworld/customrule3.png">

    The multiple choice question should now look like this:

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/customrule4.png">

    Now let's see the dialog in action.

8. Open the Preview window, and start a new session by clicking **Reset Session**.

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
2. In the upper-left corner, click **Integrations**.
3. On the Add Integration page, configure the integration as follows, and then click **Save**.

  * **Integration Name**: Balance
  * **Response Data Variable Name**: Balance
  * **Integration Type**: API
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
      <td>{$botContext.slot.accountNumber}</td>
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

1. In the upper-left corner, click **Dialogs** to return to the dialog editor.
2. Add a regular dialog named "Account Balance."
3. In the Dialog Starter interaction, click **+ Pattern**, and enter a simple pattern to detect the word “balance” (or you can create an intent if you want to get fancy). You can use the wildcards (`*balance*`) to match all instances.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/accountbalancedialog.png">

4. Add a Text statement <img style="width:25px" src="img/ConvoBuilder/helloworld/icon_textStatement.png"> that says, "I can get your latest balance."

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/balanceTextStmt.png">

    To get the user's account balance, you need to ask for their account number.

5. Add a Text question <img style="width:20px" src="img/ConvoBuilder/helloworld/icon_textQuestion.png">. For the question text, enter, "Please enter your 6-digit account number (e.g., 123456)."

6. Still in the Text question, add a custom rule that checks whether the account number is valid: Select the **Next Action** dropdown, and click **+ Custom Rule** within it. In the Add Next Action Rule window, name the rule "Valid account number". Then click **+ Condition**. For the condition, select "Regular Expression" from the list of match types, and add the following regular expression (regex) to match 6-digit numbers: `^\b\d{6}\b`. Next, capture the user’s account number as a slot variable: Click **+ Add Slot**. Name the slot "accountNumber", enter `{$userMessage}` for its value, and make sure it has a duration of "Dialog." Click **Save**.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/helloworld/askaccountnumber.png">

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/askaccountnumber2.png">

    You also need to ask for and capture the user's email address.

7. Add another Text question. For the question text, enter, "Please enter your email address (e.g., fred@home.com)."

8. Still in the Text question, add a custom rule that checks whether the account number is valid: Select the **Next Action** dropdown, and click **+ Custom Rule** within it. In the Add Next Action Rule window, name the rule "Valid email". Then click **+ Condition**. For the condition, select "Regular Expression" from the list of match types, and add the following regex to match email addresses: `^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$`. Next, capture the user's email address as a slot variable: Click **+ Add Slot**. Name the slot "userEmail", enter `{$userMessage}` for its value, and make sure it has a duration of "Dialog." Click **Save**.

    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/helloworld/askemail.png">

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/askemail2.png">

    When you created the Balance integration, you told it to use the following slots in the request:

    * `{$botContext.slot.accountNumber}`
    * `{$botContext.slot.userEmail}`

    So here, in the Question interactions, you have configured things so that the user's responses are stored in slots with those slot names. Now, when you call the Balance API, it will use the values in those slots to make the request.

9. Add an API Integration interaction <img style="width:30px" src="img/ConvoBuilder/helloworld/icon_integration.png">.  In the drop-down list in the interaction, select "Balance." This is the name of the integration that you created earlier.
    
     <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/callapi.png">

    To finish, you just need to display the user's balance results.

10. Add a Text statement that says, "Your current balance is {Balance.balance}."

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/helloworld/displaybalance.png">
    
    When the integration interaction runs, it stores the response data in the custom data field that you configured in the integration. `Balance.balance` is the name of the integration name followed by the name of that custom data field, which is “balance”.
  
    Now let's test all this out.

11. Open the Preview window, and start a new session by clicking **Reset Session**.

12. Trigger the Account Balance dialog by entering, "I want to see my account balance," or something else with the word "balance."

13. Follow the two prompts for an account number and email address. *Any* 6-digit account number and *any* email address will work for this API.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/helloworld/integrationtest.png">

    You now understand the basics of integrations and slots.


### Connect to Live Engage tutorial

In this tutorial, you walk through how to link your bot to Conversational Cloud, ending with an integration that transfers to a human agent.

#### Step 10: Configure Conversational Cloud

In this step, you create two user agents, one for the bot and one for the human that will be receiving the inbound transfers (for human "escalation"). Each user agent will have an assigned skill, which you'll also create.

##### Create the skills

1. [Log in](https://authentication.liveperson.net/login.html) to your Conversational Cloud account. 
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

7. In the list of skills, select the Human skill, and then note the URL that's displayed in the browser's address bar. Write down the skill ID in the URL, as it will be needed later. The skill ID is the number at the end of the URL: https://z1.le.liveperson.net/a/accountNumber/#um!skills/**skillID**.

##### Create the Conversational Cloud agents

In addition to the skills, you also need user agents, one for the bot and one for the agent that will be receiving the inbound transfers (for human escalation).

1. Still in Conversational Cloud, click the **Users** tab.
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
5. Assign the Human skill to your own user account, and make sure your user is set to Available (so you can take chats), not Away or Offline.

##### Assign the bot skill to an engagement

You will test this connection with a standard web chat engagement, so now you create a campaign and an engagement that routes to the new Bot skill.

1. Click the **Manage campaigns and engagements** icon <img style="width:30px" src="img/ConvoBuilder/helloworld/icon_le_campaigns.png">.
2. Click **+ Add Campaign** at the bottom of the page.
3. On the page that appears, specify the following:
    * **Campaign name**: Enter "Bot test."
    * **Campaign goal**: Click this, select "Interact with consumers" on the page that appears, and click **Done**.
    * **Engagement**: Click **+ Add engagement**. For the **engagement source**, select "Web." In the gallery that appears next, select a messaging template, and click **Next**. In the Engagement Settings that appear next, select "Messaging" for the **Conversation type**. For **Routing**, select "Specific skill," and then select the "Bot" skill.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/helloworld/confLE_5.png">
4. Click **Next**. 
5. In the Engagement Studio, click **Next**. 
6. In the Engagement Window Library, click **Done**.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/confLE_6.png">
7. Click **Publish** in the upper-right corner. Then click **Publish** again to confirm the action.

#### Step 11: Set up the transfer from bot to human

In this step, you set up an "escalation" to transfer the user to a human agent in Conversational Cloud.

1. Return to Conversation Builder, and open the bot.

2. Create a new regular dialog named "Agent Handoff" (or similar).

3. In the Dialog Starter interaction, click **+ Pattern**.

4. Add the following pattern: `*(agent|representative|help|human)*`. Click **Save**.

    <img style="width:600px" src="img/ConvoBuilder/helloworld/escalation_ds.png">

5. Add an [Agent Transfer interaction](conversation-builder-interactions-integrations.html#agent-transfer-interactions) ( <img style="width:30px" src="img/ConvoBuilder/icon_agentTransfer.png"> ) beneath the Dialog Starter interaction.

6. Note the default message to be sent to the user prior to escalation. Replace this with, "Hold on while I transfer you to an agent..." Alternatively, if you don't want to send a message, enter "BLANK_MESSAGE".

    <img style="width:600px" src="img/ConvoBuilder/helloworld/escalation_at.png">

7. Still in the Agent Transfer interaction, click the **Settings** icon in the upper-right corner. Then click the **Advanced** tab.

8. In the **Agent Skill Id** field, enter the ID number of the human skill that you created; you wrote this down earlier.

    <img style="width:500px" src="img/ConvoBuilder/helloworld/escalation_skillId.png">

    (While you set the skill ID to that for a specific skill, you could also set the value using a variable for a more dynamic experience.)

9. Click **Save**.

#### Step 12: Deploy the bot to Conversational Cloud

In this step, you use Conversation Builder to connect your bot to the bot agent you just created and get the connection running in the Demo environment.

##### Add the agent connector

1. Still in the bot in Conversation Builder, click **Agent Connectors** on the menu bar in the upper-left corner.
2. Click **Add Agent Connector** in the upper-right corner.
3. In the Add Agent Connector dialog box, specify the following based on the bot user you created.
    - **Agent User ID**: Select the user ID for the bot user agent. This should be "bot_user" or something similar.
    - **Role**: Select "Agent."
    - **Conversation Type**: Select "Messaging."
    - **Deploy to**: Select "Demo." The Demo environment is a testing environment, and the Production environment is the live environment. It's always a best practice to test your bot in the Demo environment first, before deploying it to the Production environment.
4. Click **Save**.
    
    <img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/helloworld/agentConnectorsPage1.png">

{: .important}
LivePerson recommends that, when you connect your bot to Conversational Cloud in a production environment, you deploy at least two Conversational Cloud agent connectors for a single bot. This is so the second can serve to support failover if the first goes down. Additionally, if you have traffic considerations, you might want to deploy three or more. A good baseline is no more than 50 concurrent conversations per agent connector (e.g., deploy 4 connectors to support 200 concurrent conversations).

##### Start the agent connector

- Click the **Start** button to start the agent connector. This fully deploys the bot.
    <img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/helloworld/agentConnectorsPage2.png">
    It might take a few minutes for the connection to be established.

    To view more details about the connector, move your mouse over the **i** icon beside **Details**.

#### Step 13: Test the bot

{: .important}
In this step, you'll be testing with Messaging, so you'll be using [this test page](https://vx-lp.github.io/v2/lpwm/). When you test with Chat, you can use [this test page](https://livepersoninc.github.io/visitor-page/?siteid=%5Byour%20account%20number%5D), adding your account number to the URL.

1. Be sure you are online as a Human agent in Conversational Cloud.

2. In a browser, navigate to [this test page](https://vx-lp.github.io/v2/lpwm/).

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/helloworld/testpage1.png">

3. Enter your account number and username (just your first name will do fine), and then click **Update**.

4. Click the Messaging call to action.

    This connects you with the bot in the Bot skill.

5. Enter a message to test the bot, and press Enter.

    <img class="fancyimage" style="width:300px" src="img/ConvoBuilder/helloworld/conversation1.png">

6. Trigger the Agent Handoff dialog by entering, "I want to speak to an agent."

    <img class="fancyimage" style="width:300px" src="img/ConvoBuilder/helloworld/conversation2.png">

    The conversation should be transferred to you as long as you assigned your test agent with the appropriate skill.

7. Return to LiveEngage. On the left sidebar, note on the "Agent workspace for Chat" icon that there's a message indicator.

    <img class="fancyimage" style="width:75px" src="img/ConvoBuilder/helloworld/messageindicator.png">

8. Click the icon to enter the agent workspace in Conversational Cloud. Then click **Accept** in the lower-left corner.

   <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/helloworld/webvisitors_accept.png">

    As an agent, when you accept the inbound transfer, you should see something like this below in your Conversational Cloud dashboard. You can now take part in live chat.

    <img class="fancyimage" style="width:900px" src="img/ConvoBuilder/helloworld/confLE_19.png">
