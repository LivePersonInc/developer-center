---
pagename: 3 - Integrations
redirect_from: conversation-builder-getting-started-getting-started-part-3.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Getting Started
permalink: conversation-builder-getting-started-3-integrations.html
indicator: both
---

Many use cases require integration with an API to send and receive data. Following the "billing" use case, in this tutorial you add an integration to check a user’s account balance. 

{: .important}
This tutorial uses an example API that returns random balance data when given an account number and email address. 

### Step 8: Create an account balance API integration

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

### Step 9: Use the integration in a dialog

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