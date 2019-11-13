---
pagename: Full Lead Gen
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Templates
permalink: conversation-builder-templates-full-lead-gen.html
indicator: both
---

The Lead Gen template is designed to capture contact information from a customer and send the results to either an email address or SMS number. In addition, there is an option to display products or services to the customer as a channel specific gallery or list. The products could come from a Shopify collection if available.

The template can be configured to handle Web, SMS, Apple Business Chat, WhatsApp and Facebook Messenger. Escalation to an agent is also included.

<img style="width:300px" src="img/ConvoBuilder/template_full_lead_image_0.png"> <img style="width:300px" src="img/ConvoBuilder/template_full_lead_image_1.png">

### Included Items

#### Dialogs

* Welcome
    * The Welcome dialog greets the user and then navigates to the first interaction in the LeadGen dialog.
* Lead Gen
    * This is the main dialog for collecting the user’s contact information.
    * By default this dialog collects (and attempts to validate) the user’s name, email address and phone number. There is also an interaction to collect a description of their interest.
* Options for ABC
    * If you are deploying to Apple Business Chat, you can use this List Picker driven dialog to display your product or service offerings.
    * You can add rich images to the List Picker (though recommended to keep them small for faster loading).
* Options for SMS
    * If you are deploying to SMS (or WhatsApp), you can use this text driven dialog to display your product or service offerings.
    * This Text Question will display as an A, B, C… style menu.
* Options for Web Buttons
    * If you are deploying to Web (or FB Messenger), you can use this button driven dialog to display your product or service offerings.
* Options for Web Gallery
    * If you are deploying to Web (or FB Messenger), you can use this Gallery driven dialog to display your product or service offerings. 
    * This gallery can be populated manually with images and content. If you would like a dynamically populated gallery, use the Options for Web Gallery API dialog.
* Options for Web Gallery API
    * If you are deploying to Web (or FB Messenger), you can use this dynamically populated Gallery driven dialog to display your product or service offerings. 
    * This gallery is connected to an integration for Shopify, but you could use any API that returns an array of results.
* Fallback
    * Will display when the user enters an utterance that is not recognized.
* EscalateLiveAgent
    * This will perform a transfer to a particular LiveEngage skill.

#### Integrations

* Agent_Transfer
    * As you would expect, this will perform a transfer to a LiveEngage skill.
    * You will need to configure the skill name, id and transfer message in the Global Functions.
* Get_Categories
    * For the API driven options gallery, this integration with Shopify will return the title and image URL from your Shopify account.
    * You will need to configure your Shopify account information in the Global Functions.
* Send_Email
    * This integration will send an email to the ownerEmail address supplied which contains all of the collected fields from the LeadGen dialog.
    * You will need to configure your email address, subject and other information in the Global Functions.
* Send_SMS
    * This integration will send the LeadGen results to an SMS number using your Twilio account information.
    * You will need to configure your Twilio account information in the Global Functions.

### Configuration Needed

To customize this template, you will need to do the following.

#### General Dialog Customization

You will want to review each of the dialogs, starting with Welcome and Lead Gen, and customize the verbiage used to greet your customer and request their details.

This is done simply by editing the text copy of the interactions and hitting Enter or using the menu to Save.

<img class="fancyimage" style="width:600px" src="/img/ConvoBuilder/template_full_lead_image_2.png">

#### Lead Gen Dialog

The name, email and phone number steps of the LeadGen dialog are performing some level of validation on the user’s response using RegEx. You can supply your own RegEx if you prefer.

For email address and phone number capture, we allow a certain number of attempts before we escalate to an agent. These can be configured to your liking in the Global Functions.

```javascript
// Max count of fail user inputs 
setVariable('maxEmailInvalidAttempts', 2);
setVariable('maxPhoneInvalidAttempts', 2);
```

If you want to remove some of the lead gen capture interactions (eg: phone number), you will need to be sure to review the **Next Step** navigation so that the previous interaction will go to the next interaction in the dialog. 

Also, if you are using SMS as opposed to Email to send out the results, you will need to change the appropriate variables from "true" to “false” in Global Functions.

```javascript
setVariable('sendEmail', 'true');
setVariable('sendSMS', 'false');
```

#### Channel Detection

Navigate to the Global Functions. 

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/template_full_lead_image_7.png">

The first thing our functions do is to get the particular channel the user is coming from. If you would like to force the channel to make the ABC or SMS option dialogs appear, you can set the channel variable to the following:

```javascript
//var channel = botContext.getChannel(); // use this by default
var channel = "CustomContext"; // set this to "CustomContext" for ABC or "sms" for SMS
botContext.printDebugMessage("=====> USER CHANNEL IS: " + channel);
setVariable('channel', channel);
```

#### Options Dialogs

The Options dialogs are offered for a few different channels:

* List picker for Apple Business Chat (ABC);

* Simple list with a,b,c, etc variants for SMS

* Text card with buttons OR product gallery for Web.

##### Enable or Disable Options Dialogs

To configure the display (or not) of these options, navigate to the Global Functions.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/template_full_lead_image_11.png">

Options are set to be shown by default, but if you don’t want them to be shown in your bot flow just type ‘off’ value for the 'enableOptions' variable:

<table>
<thead>
 <tr>
 <th>Variable Name</th>
 <th>Description</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>enableOptions</td>
 <td>If you want to display the Product or Service options to your customer, set this to "on". Otherwise, set to “off”. </td>
 </tr>
 <tr>
 <td>The following are for web client users only. ABC and SMS will be shown automatically.</td>
 <td></td>
 </tr>
 <tr>
 <td>manualGallery</td>
 <td>If you want to manually populate the content for this gallery, set this to “on”. If you’d like to dynamically populate your products or services using an API (currently set to Shopify), set this to “off”.</td>
 </tr>
 <tr>
 <td>galleryWebOptionsView</td>
 <td>If you’d like to display your content as a scrolling gallery, set this to “on”. If you’d prefer to use a button tile, set this to “off”.</td>
 </tr>
 </tbody>
</table>


<img class="fancyimage" style="width:300px" src="img/ConvoBuilder/template_full_lead_image_12.png"><img class="fancyimage" style="width:300px" src="img/ConvoBuilder/template_full_lead_image_13.png">


##### Configure Options Dialogs

Each of the Options dialogs are displaying a number of products or services to the user and, based on their selection, setting the result to a variable called **selectedProduct**. When you add your own products and services to these interactions, be sure to configure the [Conditions and Patterns](conversation-builder-conversation-builder-conditions.html) so that your products and services will be matched and sent to the variable.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/template_full_lead_image_3.png">

If you want to display these options dialogs, after you have configured the Global Functions appropriately, depending on which channels you are supporting, you will want to populate the various options interactions with your content.

**Options for ABC**

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/template_full_lead_image_4.png">

If supporting Apple Business Chat, you will want to replace and customize the ListPicker that displays your products and services. Just tap on the images or the text fields to edit. You can see over in the preview how it will appear (if you have hard coded the channel in the global functions).

**Options for SMS**

If you are supporting SMS, you will need to update the list based menu options. Though they may not look like they are displaying properly in the Chat Preview, they will on SMS.

As mentioned previously, be sure to add a Condition for each of your menu items (as shown below).

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/template_full_lead_image_5.png">

**Options for Web Buttons**

If you are supporting a web client and want to show your options as a button tile, once you have configured the Global Functions accordingly, be sure to set up your Condition (as shown below).

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/template_full_lead_image_6.png">

#### Agent Escalation Integration

If the user requests an agent or if they reach the max invalid attempts on email or phone, they will be escalated to a Liveperson Agent.

In Global Functions, customize the following values:

<table>
<thead>
 <tr>
 <th>Variable Name</th>
 <th>Description</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>escalationBotMessage</td>
 <td>What the bot should say prior to hand off </td>
 </tr>
 <tr>
 <td>botAgentSkillId</td>
 <td>The skill id you will transfer to</td>
 </tr>
 <tr>
 <td>botAgentSkillName</td>
 <td>The skill name you will transfer to</td>
 </tr>
 </tbody>
</table>


#### Email Integration

The Send to Email integration is enabled by default. 

If you would like to use this, modify the following values in Global Functions:

<table>
<thead>
 <tr>
 <th>Variable Name</th>
 <th>Description</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>sendEmail</td>
 <td>If you want to send the user’s info to an email address, set to ‘true’, otherwise set to ‘false’</td>
 </tr>
 <tr>
 <td>ownerEmail</td>
 <td>Email to send information collected by bot</td>
 </tr>
 <tr>
 <td>replyEmail</td>
 <td>Reply To email address, displayed to the user in their email program</td>
 </tr>
 <tr>
 <td>emailSubject</td>
 <td>Email subject </td>
 </tr>
 <tr>
 <td>emailText</td>
 <td>Initial email text, instead of "Lead Gen Form Results" value </td>
 </tr>
 </tbody>
</table>


#### SMS Integration

If you are going to use the SMS integration instead of email, setup your Twilio account information in the Global Functions.

<table>
<thead>
 <tr>
 <th>Variable Name</th>
 <th>Description</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>sendSMS</td>
 <td>If you want to send the user’s info to an SMS number, set to ‘true’ (this is set to ‘false’ by default)</td>
 </tr>
 <tr>
 <td>clientNumberTo</td>
 <td>Phone number to receive information gathered by bot (do not add the + to the phone number)</td>
 </tr>
 <tr>
 <td>twillioNumberFrom</td>
 <td>Twilio phone number to send information gathered by bot to your phone number (do not add the + to the phone number)</td>
 </tr>
 <tr>
 <td>twilioAuthToken</td>
 <td>AuthToken from your Twilio account</td>
 </tr>
 <tr>
 <td>twilioAccountSid</td>
 <td>AccountSid from your Twilio account</td>
 </tr>
 <tr>
 <td>twilioAuthorization</td>
 <td>Generated Bearer token (see below)</td>
 </tr>
 </tbody>
</table>


<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/template_full_lead_image_8.png">

You can find both your account SID and auth token in the[ Twilio Console](https://www.twilio.com/console) after[ signing up for a free Twilio trial account](http://twilio.com/try-twilio).  [How to Work with your Free Twilio Trial Account](https://www.twilio.com/docs/usage/tutorials/how-to-use-your-free-trial-account) 

##### How to generate a Bearer Token

In order to use the Twilio API, the standard Account SID and Auth Token are not enough. A Bearer token must be generated by calling the API using Postman once.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/template_full_lead_image_9.png">

<table>
 <tr>
 <td>POST</td>
 <td>https://api.twilio.com/2010-04-01/Accounts/YOUR_SID/Messages.json</td>
 </tr>
 <tr>
 <td>Authorization:
Basic Auth</td>
 <td>Username: YOUR_SID
Password: YOUR_AUTH_TOKEN</td>
 </tr>
 <tr>
 <td>Headers</td>
 <td>application/x-www-form-urlencoded</td>
 </tr>
 <tr>
 <td>Body (raw)</td>
 <td>Be sure to enter the values for these variables (in blue): Format=json&To=%2BclientNumberTo&From=%2BtwillioNumberFrom&Body=This%20is%20a%20test&Method=post&__referrer=sms-mms</td>
 </tr>
</table>


When this has been set up in Postman, hit Send. This will hit the API, sending a text message to the "To" and will generate your Bearer token. Tap on the Headers tab in Postman and copy THE ENTIRE string, including the “Basic”. This will be your **twilioAuthorization** value.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/template_full_lead_image_10.png">

#### Shopify Integration

You can populate the **Options for Web Gallery API** dialog with products from your Shopify store. 

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/template_full_lead_image_14.png">

In the Global Functions, edit the following values:

<table>
<thead>
 <tr>
 <th>Variable Name</th>
 <th>Description</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>shopifyAPILink</td>
 <td>Middleware Link where sms will be sent
https://SHOPIFY_API_KEY:SHOPIFY_API_SECRET@STORE_DOMAIN/ENDPOINT</td>
 </tr>
 <tr>
 <td>shopifyAccessToken</td>
 <td>AccessToken for your Shopify Store</td>
 </tr>
 <tr>
 <td>shopifyHost</td>
 <td>Your store’s Host name</td>
 </tr>
 </tbody>
</table>

More info on how to generate a Shopify Access Token is described [here](https://www.shopify.com/partners/blog/17056443-how-to-generate-a-shopify-api-token).