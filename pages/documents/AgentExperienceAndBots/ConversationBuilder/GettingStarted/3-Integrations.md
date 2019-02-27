---
pagename: 3 - Integrations
redirect_from: conversation-builder-getting-started-getting-started-part-3.html
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Getting Started
permalink: conversation-builder-getting-started-3-integrations.html
indicator: both
---

Many use cases will require an integration with an API to send and receive data. Following the "billing" use case, we are going to add an integration to check a user’s account balance. 

{: .important}
This is an example API that will return random balance data for a given account and email address. 

### Step 8: Create Billing API Integration

Go back to the automation you created in Conversation Builder. Along the top of the workspace, click on Integrations.

From here we will create a new API with the following parameters. 

* **Integration Name**: Balance

* **Response Data Variable Name**: Balance

* **Method**: GET

* **URL**: 

  * For US: https://platformservice.botcentralapi.com/thirdparty-services-0.1/accountBalance
  * For Europe: https://platformservice-eu.botcentralapi.com/thirdparty-services-0.1/accountBalance
  * For APAC: https://platformservice-ap.botcentralapi.com/thirdparty-services-0.1/accountBalance 

* **Request Parameters**: Be sure to add to Parameters, NOT Headers

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


* **Custom Data Fields**: these provide a simple method of displaying the results in your dialog interactions. The return data is stored here.

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

**Save** the API settings.

<img style="width:750px" src="img/ConvoBuilder/helloworld/image_15.png">

### Step 9: Use Integration in Dialog

Now we can return to the Dialog editor by tapping on Dialogs on the top of the workspace.

Let’s add a new regular dialog and name it "Account Balance". For the first User Says interaction, enter the text "I want to see my account balance".

Go to the Interaction Details and select Settings. Here we can add a simple pattern to detect the word “balance” (or if you want to get fancy, you can create an intent). You can use the wildcards (`*balance*`) to match all instances.

<img style="width:750px" src="img/ConvoBuilder/helloworld/accountbalancedialog.png">

<!--<img style="width:400px" src="img/ConvoBuilder/helloworld/balancepattern.png">-->

Now we can add a text interaction <img style="width:40px" src="img/ConvoBuilder/helloworld/image_16.png"> to tell people we can help them with their account balance. Make one that says "I can get your latest balance.".

In order to get the user’s account balance, we need to ask for their account number. Add a Text Question <img style="width:40px" src="img/ConvoBuilder/helloworld/image_17.png"> interaction and enter the following text "Please enter your 6-digit account number? (eg: 123456)". Then tap on the Interaction Details and under the User Response tab, add a Condition, select Regular Expression and add the following regex to match 6-digit numbers: `^\b\d{6}\b`.

Next, we want to capture the user’s account number as a slot variable. Under Slot, enter a Slot Name of "accountNumber", for Value, enter `{$query}` and for Scope, make sure its set to Dialog. 

<img style="width:750px" src="img/ConvoBuilder/helloworld/askaccountnumber.png">

<!--<img style="width:400px" src="img/ConvoBuilder/helloworld/accountnumberpattern.png">

<img style="width:400px" src="img/ConvoBuilder/helloworld/accountnumberstarvar.png">

<img style="width:400px" src="img/ConvoBuilder/helloworld/emailpattern.png">

<img style="width:400px" src="img/ConvoBuilder/helloworld/emailstarvar.png">-->

We want to capture the user’s email address as well. Add another Text Question interaction and add the following copy: “Please give me your email address (eg: fred@home.com)”. Then tap on the Interaction Details and under the User Response add a Condition and the following Regular Expression to match email addresses: `^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$`

Under Slot, enter a Slot Name of “userEmail”, for Value, enter `{$query}` and for Scope, make sure it’s set to Dialog. 

<img style="width:750px" src="img/ConvoBuilder/helloworld/askemail.png">

When we created the Balance integration, we told it to use the following slots in the requests:

  * `{$botContext.slot.accountNumber}`
  * `{$botContext.slot.userEmail}`

When we created the Question interactions, we stored the user responses in those same slots via the Slot Name field. Now when we call the Balance API, it will use the values in those Slots to make the request.

Add an Integration <img style="width:40px" src="img/ConvoBuilder/helloworld/image_18.png"> interaction to your dialog. Tap on the interaction and select "Balance" from the drop down selector.

To finish, we just need to display the user’s balance results. Add a Text statement interaction and enter the following copy: "Your current balance is {Balance.balance}". When the integration interaction runs, it stores the response data in the Custom Data Field that you configured. `Balance.balance` is the integration name followed by the Custom Data Field “balance” that you configured in the Integration.

Go to the Messaging Client, type "reset" and type “account balance” or similar to start your dialog. *Any* 6 digit account number and *any* email address will work for this API.

<img style="width:750px" src="img/ConvoBuilder/helloworld/integrationtest.png">

You now understand the basics of integrations and slots.