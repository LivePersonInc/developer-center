---
pagename: Integrations
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Getting Started
permalink: conversation-builder-getting-started-integrations.html
indicator: both
---

Many use cases will require an integration with an API to send and receive data. Following the "billing" use case, we are going to add an integration to check a user’s account balance. 

NOTE: this is an example API that will return random balance data for a given account and email address. 

### Step 6: Adding an API Integration

From the Conversation Builder, we need to navigate to the Integrations area.

<img style="width:300px" src="img/ConvoBuilder/helloworld/image_14.png">

From here we will create a new API with the following parameters. 

* Integration Name: Balance

* Response Data Variable Name: Balance

* Method: GET

* URL: https://dev.service.botcentralapi.com/thirdparty-services-0.1/accountBalance

* Request Parameters: Be sure to add to Parameters, NOT Headers

  <table>
    <thead>
    <tr>
      <th>Key</th>
      <th>Value (hit Enter after each field is added)</th>
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


* Custom Data Fields: these provide a simple method of displaying the results in your dialog interactions.

  <table>
    <thead>
    <tr>
      <th>Key</th>
      <th>Value (hit Enter after each field is added)</th>
    </tr>
    </thead><tbody>
    <tr>
      <td>accountId</td>
      <td>{$.api_Balance.accountId}</td>
    </tr>
    <tr>
      <td>balance</td>
      <td>{$.api_Balance.accountBalance}</td>
    </tr>
    </tbody>
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
