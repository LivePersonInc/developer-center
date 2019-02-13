---
pagename: 3 - Integrations
redirect_from: conversation-builder-tutorials-getting-started-part-3.html
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Tutorials
permalink: conversation-builder-tutorials-3-integrations.html
indicator: both
---

Many use cases will require an integration with an API to send and receive data. Following the "billing" use case, we are going to add an integration to check a user’s account balance. 

NOTE: this is an example API that will return random balance data for a given account and email address. 

### Step 6: Billing API Integration

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

In order to get the user’s account balance, we need to ask for their account number. Add a Text Question <img style="width:40px" src="img/ConvoBuilder/helloworld/image_17.png"> interaction and enter the following text "Please enter your 6-digit account number? (eg: 123456)". Then tap on the Interaction Details and under the User Response tab, add a Condition, select Regular Expression and add the following regex to match 6-digit numbers: `^\b\d{6}\b`.

<img style="width:500px" src="img/ConvoBuilder/helloworld/askaccountnumber.png">

<img style="width:400px" src="img/ConvoBuilder/helloworld/accountnumberpattern.png">

<img style="width:400px" src="img/ConvoBuilder/helloworld/accountnumberstarvar.png">


Next, we want to capture the user’s account number as a slot variable. Under Slot, enter a Slot Name of "accountNumber", for Value, enter `{$query}` and for Scope, make sure its set to Dialog. 

<img style="width:450px" src="img/ConvoBuilder/helloworld/askemail.png">

<img style="width:400px" src="img/ConvoBuilder/helloworld/emailpattern.png">

<img style="width:400px" src="img/ConvoBuilder/helloworld/emailstarvar.png">

We want to capture the user’s email address as well. Add another Text Question interaction and add the following copy: “Please give me your email address (eg: fred@home.com)”. Then tap on the Interaction Details and under the User Response add a Condition and the following Regular Expression to match email addresses: `^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$`

Under Slot, enter a Slot Name of “userEmail”, for Value, enter `{$query}` and for Scope, make sure it’s set to Dialog. 

Now that we have our account number and email address configured, we can call the API Integration. From the Interaction palette, tap on the Integration <img style="width:40px" src="img/ConvoBuilder/helloworld/image_18.png"> icon to add an Integration to your dialog. Tap on the interaction and select "Balance" from the drop down selector.

To finish, we just need to display the user’s balance results. Add a Text statement interaction and enter the following copy: "Your current balance is {Balance.balance}". This notation will call the Integration and display the Custom Data Field you’ve configured.

Go to the Previewer, type "reset" and type “account balance” or similar to start your dialog. ANY email address will work for this API.

### Step 7: LiveEngage Escalation API Integration

To connect to a LiveEngage account for Agent handoff, we need to configure an API Integration. 

From the Conversation Builder, navigate to the Integrations area.

<img style="width:300px" src="img/ConvoBuilder/helloworld/image_19.png">

From here we will create a new API with the following parameters. 

* Integration Name: Escalation

* Response Data Variable Name: Escalation

* Method: POST

* URL: 

  1. For US: https://platformservice.botcentralapi.com/botservice-0.1/botcentral/livePersonAgent

  2. For EU: https://platformservice-eu.botcentralapi.com/botservice-0.1/botcentral/livePersonAgent

  3. For APAC: https://platformservice-ap.botcentralapi.com/botservice-0.1/botcentral/livePersonAgent

* Request Headers:

  <table>
    <thead>
    <tr>
      <th>Key</th>
      <th>Value (hit Enter after each field is added)</th>
    </tr>
    </thead><tbody>
    <tr>
      <td>Authorization</td>
      <td>YOUR PERMANENT API ACCESS KEY<br>
        This is found under your profile settings here:<br>
        <img style="width:300px" src="img/ConvoBuilder/helloworld/apiaccess.png"><br>
        Then tap on the API tab and copy the API Access Key<br>
        <img style="width:300px" src="img/ConvoBuilder/helloworld/permapikey.png">
      </td>
    </tr>
    </tbody>
  </table>


* Post Body:

  ```json
  {

  "userPlatformId" : "{$chatBotUserPlatformId}",

  "chatBotId": "{$chatBotId}",

  "message": "{$botContext.transferMessage}",

  "conversationId": "{$botContext.convId}",

    "agentSkillName": "<<ENTER SKILL NAME HERE>>",

    "agentSkillId": "<<ENTER SKILL ID HERE>>"

  }
  ```
	

**Save** the API settings.

Now we can return to the Dialog editor by tapping the Interactions icon.

<img style="width:300px" src="img/ConvoBuilder/helloworld/image_20.png">

To handle the flow for the Agent Handoff we need to create a new dialog and call it "Agent Handoff" or similar.

We can add a User Says interaction, with sample intent "I want to speak to an agent". In the Interaction Details > Settings we can create a pattern with alternates for keywords like `(agent|representative|help|human)`.

Next, we need to add our Integration interaction and select "Escalation" from the drop down. For this next part, we will need to leverage some JavaScript code to set some variables. While selected on the Integration interaction, tap on the CODE tab in the interaction details and then tap on the **+** icon next to Pre-Process Code. This will launch a JavaScript code window. 

<img style="width:300px" src="img/ConvoBuilder/helloworld/selectescalation.png">

<img style="width:300px" src="img/ConvoBuilder/helloworld/preprocesscode.png">


In order to guarantee that we provide an outgoing message to the user prior to handoff, we supply a message as part of the API called the transferMessage. The problem is, since we’re previewing in HTML (not a LiveEngage client), the escalation to LiveEngage won’t get called, so we need to provide a message to us for testing purposes. We can do this by adding the following JavaScript:

```javascript
var channel = botContext.getChannel();

var msg = "Hold on while I transfer you to an agent.";

if(channel == "web"){

  botContext.sendMessage(msg);

}else{

  botContext.setBotVariable('transferMessage',msg,true,false);

}
```

See [scripting functions](conversation-builder-conversation-builder-scripting-functions.html) for all of the available functions.