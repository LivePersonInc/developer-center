---
pagename: Order Status
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Templates
permalink: conversation-builder-templates-order-status.html
indicator: both
---

The Order Status template is designed to show a customer their order status based on either an order number or email address. This template is integrated with Shopify and a fake Shopify store for demonstration purposes. You can enter the order numbers 1162 or 1163 to return order status results from the test Shopify integration.

<img class="fancyimage" style="width:750px" src="/img/ConvoBuilder/template_orderstatus_0.png">

{: .important}
Your app can access the last 60 days of orders for a store. You can request access to a store’s full order history in your Shopify Store.

### Included Items

#### Dialogs

* Welcome

    * The Welcome dialog greets the user and then requests the required information from the user. 

    * The CHECK_ORDER_STATUS API requires either the order number or the email address associated with the order.

    * API Success and Fail messages will be displayed accordingly.

* Fallback

    * When a user enters an input that is not recognized, it will go to the Fallback dialog.

    * If a user hits the Fallback dialog up to a certain threshold, they will be escalated to an Agent.

* Return Policy

    * As an example of how you might want to include your Return Policy or other content, we’ve added an additional dialog.

    * This could also be maintained within a Knowledge Base.

* Agent Escalation

    * If a user reaches their Fallback maximum or if they enter an "agent" keyword or intent, they will be escalated to an Agent.

#### Integrations

* CHECK_ORDER_STATUS

    * This integration connects to a middleware API that returns a Shopify order status.

    * The Shopify store credentials must be configured in the Global Functions. 

* Transfer

    * As you would expect, this will perform a transfer to a LiveEngage skill.

    * You will need to configure the skill name, id and transfer message in the Global Functions

### Configuration Needed

To customize this template, you will need to do the following.

#### General Dialog Customization

As noted previously, you will want to review each of the dialogs, starting with Welcome to customize the verbiage used to greet your customer and request their details.

This is done simply by editing the text copy of the interactions and hitting Enter or using the menu to Save.

#### Global Functions Customization

Click on the "Global Functions" button to access all the Global functions & variables to be configured.

<img class="fancyimage" style="width:750px" src="/img/ConvoBuilder/template_orderstatus_1.png">

#### LE Escalation Configuration

To setup escalation to an Agent in LE, change the following values:

<table>
 <thead>
 <tr>
 <th>Variable Name</th>
 <th>Description</th>
 </tr>
 </thead><tbody>
 <tr>
 <td>botAgentSkillName</td>
 <td>Agent Skill name</td>
 </tr>
 <tr>
 <td>botAgentSkillId</td>
 <td>Agent Skill ID</td>
 </tr>
 <tr>
 <td>escalationMessage</td>
 <td>Message will be shown when escalate to an Agent. Change it to be suitable for your business</td>
 </tr>
 </tbody>
</table>

#### Shopify Integration Settings

Add Shopify credentials to setup your online store integration. These values will need to come from the brand’s Shopify store admin.

More info about how to **generate a Shopify Access Token** is described [here](https://www.shopify.com/partners/blog/17056443-how-to-generate-a-shopify-api-token).

<table>
<thead>
 <tr>
 <th>Variable Name</th>
 <th>Description</th>
 </tr>
 </thead><tbody>
 <tr>
 <td>shopifyHostName</td>
 <td>Your store’s Host name (eg: somebrand.myshopify.com)</td>
 </tr>
 <tr>
 <td>shopifyApiKey</td>
 <td>ApiKey for the Shopify app (DO NOT CHANGE)</td>
 </tr>
 <tr>
 <td>shopifyShopPassword</td>
 <td>Password for the Shopify app (DO NOT CHANGE)</td>
 </tr>
 <tr>
 <td>shopifyAccessToken</td>
 <td>AccessToken for your Shopify Store. See Shopify instructions here.</td>
 </tr>
 </tbody>
</table>

#### Invalid Order Attempts

How many attempts at entering an order number or email should a user get before we escalate to an agent:

<table>
<thead>
 <tr>
 <th>Variable Name</th>
 <th>Description</th>
 </tr>
 </thead><tbody>
 <tr>
 <td>invalidOrderAttemptsLimit</td>
 <td>The default is 2 tries before escalation. You can give the user more tries by increasing this number.</td>
 </tr>
 </tbody>
</table>

#### No Order Exists Messages

To modify the messages shown when no order is found, change the following values:

<table>
<thead>
 <tr>
 <th>Variable Name</th>
 <th>Description</th>
 </tr>
 </thead><tbody>
 <tr>
 <td>noOrderExistsNumber</td>
 <td>This message will be shown when no order is found when using an order number.</td>
 </tr>
 <tr>
 <td>noOrderExistsEmail</td>
 <td>This message will be shown when no order is found when using an email address.</td>
 </tr>
 </tbody>
</table>

#### Fallback Message

To modify the messages shown in the Fallback dialog, change the following values:

<table>
<thead>
 <tr>
 <th>Variable Name</th>
 <th>Description</th>
 </tr>
 </thead><tbody>
 <tr>
 <td>fallBackMessages</td>
 <td>There are 2 messages here, delimited by "|" which will be selected at random. You can add more by separating them with a pipe.</td>
 </tr>
 <tr>
 <td>fallbackAttemptsLimit</td>
 <td>How many failures before we escalate to an agent? The default is set to 2.</td>
 </tr>
 </tbody>
</table>


