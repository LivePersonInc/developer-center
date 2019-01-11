---
pagename: Intents and Integrations
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Getting Started
permalink: conversation-builder-getting-started-intents-and-integrations.html
indicator: both
---

Now let’s take what we’ve learned to the next level and instead of using patterns to trigger a dialog, we’ll use intents for a simple "Billing" use case. 

### Step 5: Simple Billing Use Case

Since we’re going to be using intents for this example, we need to leave Conversation Builder for a moment. Tap on the Home <img style="width:40px" src="img/ConvoBuilder/helloworld/image_9.png"> icon in the right sidebar to return to your Dashboard. Then, from the drop down menu in the header, select Intent Builder.

<img style="width:500px" src="img/ConvoBuilder/helloworld/image_10.png">

The Intent Builder is where we create Domains, which are collections of Intents and Entities. Let’s create our own domain by tapping on the Add Domain button. Give it a unique name and tapp Add Domain. NOTE: You can import a CSV of Intents and Entities also.

<img style="width:200px" src="img/ConvoBuilder/helloworld/adddomain.png">

<img style="width:400px" src="img/ConvoBuilder/helloworld/namedomain.png">

Now we can begin to create our first Intent. Give it a name like "Billing Question" and add some Training Phrases. These should be complete sentences like “I have a question about my bill”. NOTE: Use the word “bill” throughout your training phrases. We will use it as an entity. Tap Add Intent when you’re finished.

<img style="width:600px" src="img/ConvoBuilder/helloworld/image_11.png">

We can use the debugger to help us see how our training phrases would return. Tap on the Debugger icon on the right and enter an utterance that is close to one of your sentences, like "I need help with my bill". Next try another phrase but use “billing” instead of “bill”.

<img style="width:400px" src="img/ConvoBuilder/helloworld/matchverygood.png">

<img style="width:400px" src="img/ConvoBuilder/helloworld/matchfair.png">

The result when using "billing" is only FAIR because it is not recognized as a synonym for “bill”. We can remedy this by creating an Entity. 

Tap on the Entities tab. Create a new entity called "bill" and add a number of synonyms like bill, billing, payment, statement, etc and then hit Add Entity.

<img style="width:200px" src="img/ConvoBuilder/helloworld/domainentities.png">

<img style="width:400px" src="img/ConvoBuilder/helloworld/billentity.png">


To see how adding an entity can improve your NLU matching, select the Intent tab, select the debugger from the side bar and re-enter the "billing" phrase: “I have a billing question”. Your results should now be VERY GOOD and you can see that the entity @bill was detected as well.

<img style="width:400px" src="img/ConvoBuilder/helloworld/image_12.png">

Now that our Billing intent is configured, let’s return to the Conversation Builder and use it to trigger a new dialog. Navigate to the Conversation Builder using the drop down. Select the bot you created.

Once opened, create a new dialog and name it "Billing". 

Next, add a User Says interaction and enter the phrase "I have a question about my bill" as the sample text and hit enter.

<img style="width:300px" src="img/ConvoBuilder/helloworld/usersaysbilling.png">

<img style="width:300px" src="img/ConvoBuilder/helloworld/billinginteraction.png">


Now, tap on the Assist <img style="width:40px" src="img/ConvoBuilder/helloworld/image_13.png"> icon which will display the available Domains. Select the domain you created. This will enable the Assistant to use the platform’s NLU to match your User Says interaction against any available intents. 

<img style="width:300px" src="img/ConvoBuilder/helloworld/selectdomain.png">

<img style="width:300px" src="img/ConvoBuilder/helloworld/selectintents.png">


Select the Billing Question intent that you created to associate it with the Billing dialog and the User Says interaction. 

Now we can begin to build out our dialog. Let’s add a text statement to tell users that we can help them.

Next, we can add a multiple choice question to ask them if they want a copy of their most recent bill. Add the options "Yes" and “No” as choices. 

<img style="width:350px" src="img/ConvoBuilder/helloworld/yesnoprompt.png">

<img style="width:300px" src="img/ConvoBuilder/helloworld/yesstatement.png">


Now, when someone says "yes" or “no” we’ll want to show them a particular message. Add a text statement for “yes” and enter the following statement “If you’d like a copy of your most recent bill, please go to http://www.telco.com”. 

To better differentiate this statement, change its name to "Yes Statement" in the right Interaction Details panel. In addition, the behavior for statements is to display the next interaction. We want to stop after we show the Yes Statement, so in the Next Step drop down, select End Interaction.

Now let’s add a text statement for "no" and enter the following statement “OK. How else can I help you today?” We also should change the name to of this interaction to “No Statement”.

We’ve got our dialog fleshed out, now we need to add conditions to detect when a user says "yes" or “no” and direct them to the correct text statement. Select the multiple choice interaction, then select the Interaction Details icon. Under User Response you’ll see the Conditions panel.

<img style="width:300px" src="img/ConvoBuilder/helloworld/userresponseyes.png">

<img style="width:300px" src="img/ConvoBuilder/helloworld/userresponseno.png">


Add a condition using the **+** icon, select Pattern from the drop down menu. For "yes" add a pattern like `(yes|yah|yup)`. Then for the Next Step select the Yes Statement.

Now tap on the **+** Response Match & Actions link to add another condition for "no". Add a pattern like `(no|nope|nah)`. Then for Next Step select the No Statement.

Select the Previewer icon and lets see the complete dialog in action.

Type in an utterance that should match for your billing intent like "I have a question about my bill". You should see the billing dialog and multiple choice question. Tap or type “yes” or “no” and see what response you get.

<img style="width:300px" src="img/ConvoBuilder/helloworld/yestest.png">

<img style="width:300px" src="img/ConvoBuilder/helloworld/notest.png">


### Step 6: Adding an API Integration

Many use cases will require an integration with an API to send and receive data. We are going to add an integration to check a user’s account balance. NOTE: this is an example API that will return random balance data for a given account and email address. 

From the Conversation Builder, we need to navigate to the Integrations area.

<img style="width:300px" src="img/ConvoBuilder/helloworld/image_14.png">

From here we will create a new API with the following parameters. 

* Integration Name: Balance

* Response Data Variable Name: Balance

* Method: GET

* URL: https://dev.service.botcentralapi.com/thirdparty-services-0.1/accountBalance

* Request Parameters: Be sure to add to Parameters, NOT Headers

  <table>
    <tr>
      <td>Key</td>
      <td>Value (hit Enter after each field is added)</td>
    </tr>
    <tr>
      <td>accountNumber</td>
      <td>{$botContext.slot.accountNumber} </td>
    </tr>
    <tr>
      <td>email</td>
      <td>{$botContext.slot.userEmail}</td>
    </tr>
  </table>


* Custom Data Fields: these provide a simple method of displaying the results in your dialog interactions.

  <table>
    <tr>
      <td>Key</td>
      <td>Value (hit Enter after each field is added)</td>
    </tr>
    <tr>
      <td>accountId</td>
      <td>{$.api_Balance.accountId}</td>
    </tr>
    <tr>
      <td>balance</td>
      <td>{$.api_Balance.accountBalance}</td>
    </tr>
  </table>

**Save** the API settings.

Now we can return to the Dialog editor by tapping the Interactions icon.

<img style="width:300px" src="img/ConvoBuilder/helloworld/image_15.png">

Let’s add a new dialog and name it "Account Balance". Go to the Interaction Details and select Settings. Here we can add a simple pattern to detect the word “balance” (or if you want to get fancy, you can create an intent). You can use the wildcards *balance* to match all instances.

<img style="width:400px" src="img/ConvoBuilder/helloworld/accountbalancedialog.png">

<img style="width:400px" src="img/ConvoBuilder/helloworld/balancepattern.png">


Now we can add a text statement <img style="width:40px" src="img/ConvoBuilder/helloworld/image_16.png"> to tell people we can help them with their account balance.

In order to get the user’s account balance, we need to ask for their account number. Add a Text Question <img style="width:40px" src="img/ConvoBuilder/helloworld/image_17.png"> interaction and enter the following text "Please enter your 6-digit account number? (eg: 123456)". Then tap on the Interaction Details and under the User Response add the following pattern to match 6-digit numbers: `*(\b\d{6}\b)*`.

<img style="width:400px" src="img/ConvoBuilder/helloworld/askaccountnumber.png">

<img style="width:400px" src="img/ConvoBuilder/helloworld/accountnumberpattern.png">

<img style="width:400px" src="img/ConvoBuilder/helloworld/accountnumberstarvar.png">


Next, we want to capture the user’s account number as a slot variable. Under Slot, enter a Slot Name of "accountNumber", for Value, enter “starVar2” and for Scope, change to Session. 

NOTE: A starVar is a value that is derived from a pattern that uses wildcards. The starVar index matches the positions of wildcards and alternates, in our case the 1st position matches the first wildcard, the 2nd position matches the RegEx value, the 3rd position matches the final wildcard. 

<img style="width:400px" src="img/ConvoBuilder/helloworld/askemail.png">

<img style="width:400px" src="img/ConvoBuilder/helloworld/emailpattern.png">

<img style="width:400px" src="img/ConvoBuilder/helloworld/emailstarvar.png">

We want to capture the user’s email address as well. Add another Text Question interaction and add the following copy: "Please give me your email address (eg: fred@home.com)". Then tap on the Interaction Details and under the User Response add the following pattern to match email addresses: `*(^\S+@\S+$)*`. NOTE: this is a VERY simple RegEx, for example only.

Under Slot, enter a Slot Name of "userEmail", for Value, enter “starVar2” and for Scope, change to Session. 

Now that we have our account number and email address configured, we can call the API Integration. From the Interaction palette, tap on the Integration <img style="width:40px" src="img/ConvoBuilder/helloworld/image_18.png"> icon to add an Integration to your dialog. Tap on the interaction and select "Balance" from the drop down selector.

To finish, we just need to display the user’s balance results. Add a Text statement interaction and enter the following copy: "Your current balance is {Balance.balance}". This notation will call the Integration and display the Custom Data Field you’ve configured.

Go to the Previewer, type "reset" and type “account balance” or similar to start your dialog. ANY email address will work for this API.
