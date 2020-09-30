---
pagename: Integrations
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Tutorials & Guides
subfoldername: Getting Started with Bot Building
permalink: tutorials-guides-getting-started-with-bot-building-integrations.html
indicator: both
---

Many use cases require integration with an API to send and receive data. Following the "billing" use case, in this tutorial you add an integration to check a user’s account balance.

### Watch the video

<div style="display: block; position: relative; max-width: 70%;margin:0 auto;"><div style="padding-top: 56.25%;"><iframe src="https://player.vimeo.com/video/450720977" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 10px; bottom: 0px; right: 0px; left: 0px;"></iframe></div></div>
<br>

### Prerequisite steps
In this tutorial, a second intent will be used to trigger an Order Status dialog. Create the intent within our **Getting Started Domain** following the same process as outlined in the Intents tutorial. The intent should be built as follows:

* **Intent Name**: Order Status
* **Intent Display Name**: Order Status
* **Intent type**: Intent
* **Training phrases**:
    * I’d like to check on my order status
    * What is my order status
    * What is the status of my order
    * When will my order be here
    * Where is my order

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/getstartedtutorial/intent_details.png">

### Step 8: Create the Order Status dialog

With the "Order Status" intent created, let’s return to Conversation Builder and use the intent to trigger a new dialog.

1. Open the **Getting Started** bot in Conversation Builder.
2. Create a new regular dialog named “Order Status”.

    By default, a regular dialog includes a Dialog Starter interaction, but it isn't configured yet. You'll use the [Assist tool](conversation-builder-assist.html) to do this.

3. Click <img style="width:25px" src="img/ConvoBuilder/getstartedtutorial/icon_assist.png"> (Assist icon) beside the interaction to open the Assist tool.

    Select the “Getting Started Domain”, followed by the "Order Status" intent that was just created. This associates the intent with the dialog starter.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/getstartedtutorial/order_status.png">

4. Add a new Text Statement to acknowledge the users intent. Add the text, "Let’s find your order."

5. Add a new Text Question to capture the user’s order number. Add the text, "What is your order number?"

6. Still in the Text question, add a custom rule that checks whether the order number is valid: 

    Select the **Next Action** dropdown, and click **+ Custom Rule** within it. In the Add Next Action Rule window, name the rule "Order number". Then click **+ Condition**. For the condition, select "Regular Expression" from the list of match types, and add the following regular expression (regex) to match the order number format (a letter followed by six digits): `^\w\d{6}$`. 

    **Note**: This mock API will successfully return order data for accounts A001001, A001010 and A001002. 

    Next, capture the user’s order number as a variable: Click **+ Add Variable**. Name the variable `orderNumber`, enter `{$userMessage}` for its value, and click **Save**.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/getstartedtutorial/order_num_rule.png">

    By saving the result of the user’s response as the variable `orderNumber`, we will have access to that data throughout our automation. In this case, we will use that within our API call to find that user’s order.

### Step 9: Create an Order Status API integration

1. In the upper-left corner, click **Integrations**.
2. On the Add Integration page, configure the integration as follows:
    * **Integration Name**: OrderStatus
    * **Response Data Variable Name**: OrderStatus
    * **Integration Type**: API
    * **Method**: GET
    * **URL**: https://5ed69a5fc2ca2300162c67f1.mockapi.io/api/v1/order-status/{$botContext.orderNumber}

        Note the use of the orderNumber bot variable being interpolated onto the end of the URL string. 

    * **Custom Data Fields**: These provide a simple method of displaying the results in interactions in dialogs. The return data is stored here.

    | Key | Value |
    | --- | --- |
    | id | {$.api_OrderStatus.id} |
    | name | {$.api_OrderStatus.name} |
    | orderStatus | {$.api_OrderStatus.orderStatus} |
    | image | {$.api_OrderStatus.image} |

3. Click **Save**, and navigate back to our Order Status dialog.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/getstartedtutorial/integration_settings.png">

