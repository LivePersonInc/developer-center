---
pagename: Implementing a Web View Integration
redirect_from:
 - conversation-builder-tutorials-guides-implementing-a-web-view-integration.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Tutorials & Guides
subfoldername: Advanced Integrations
permalink: tutorials-guides-advanced-integrations-implementing-a-web-view-integration.html
indicator: both
---

### Overview

The [Web View Integration API](conversation-builder-integrations-web-view-integration-api.html) was designed to allow an external system to post information back to a bot. For example, if a user is directed to an external web form to collect data (e.g., for lead generation or payment), this API can be used by that external form to send the data back to the bot. This guide provides a sample implementation for this API.

### Information needed

In order to call the Web View Integration API, the following data is needed:
* Bot ID
* Conversation ID
* User ID
* Message (optional)
* Context variables (actual data to be passed)
* A hosted form with the API integrated (detailed below)

The Bot ID can be found in Conversation Builder in the bot's [Bot Settings](conversation-builder-bots-bot-basics.html#configure-bot-settings) (expand **More Settings**).

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/guideWebView_botID.png">

The conversation ID can be retrieved with the [botContext.getConversationId()](conversation-builder-scripting-functions-get-set-contextual-data.html#get-conversation-id) method in bot code.

The user ID can be retrieved with the [botContext.getUserPlatformId()](conversation-builder-scripting-functions-get-user-data.html#get-user-platform-id-and-platform-type) method in bot code.

**Note:** If you're using a platform that already has access to the conversation ID and/or user ID (such as [LivePerson Functions](liveperson-functions-overview.html)), you can simply take them from there.

### Set up the form link in Conversation Builder

In this guide, we'll be passing the required data to a URL with the bot ID, conversation ID, and user ID in the query string. The URL format will look like this:

http://{formUrl}?userId={userId}&convId={convId}&botId={botId}

We'll use the methods mentioned above to construct the URL.

In the Global Functions of our bot, we’ll use the code below to retrieve the necessary data and then set the URL in the bot variable **formURL**, which we’ll use later to provide a link to the user to fill out the form.

```javascript
function __initConversation() {
 var userId = botContext.getUserPlatformId();
 var convId = botContext.getConversationId();
 var botId = '7a4e10287a6b90cee1de9910f0b5010985eef16a';
 botContext.setBotVariable('formURL', 'https://static-assets.dev.fs.liveperson.com/cb_test/web_view_test/web_view/index.html?userId=' + userId + '&convId=' + convId + '&botId=' + botId, true, false);
}
```

### Send the form link to the visitor

In the bot, we have a simple dialog to present the form link to the visitor. The dialog has a simple pattern match for triggering.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/guideWebView_formLink.png">

The dialog also has a single Button Question interaction with a single button. This button uses the **formURL** bot variable that was created in the Global Functions as the **Callback**. This way, when the visitor clicks the button, they will be directed to the form URL.

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/guideWebView_buttonConfig.png">

### Call the API from the browser

For the purposes of this guide, we created a simple HTML page, with a basic form, in order to submit some collected information back to the bot. We are not performing any validation, but you might want to do so in your form.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/guideWebView_form.png">

After the user fills out the form, the method below is called to submit the data back to the bot. We retrieve the data from the query string, then retrieve the form data, then set the domain and authorization, and finally post data to the bot.

```javascript
// Post data when form is submitted
submitForm = async function() {
 // Get data from query string
 const queryParams = new URLSearchParams(document.location.search);
 const userId = queryParams.get('userId');
 const conversationId = queryParams.get('convId');
 const botId = queryParams.get('botId');
 
 // Get data from form
 const name = document.querySelector('input[name="user_name"]').value;
 const color = document.querySelector('input[name="favorite_color"]').value;
 const swallow = document.querySelector('input[name="unladen_swallow"]').value;
 
 // use correct domain for your region
 const domain = 'https://va.bc-intg.liveperson.net/thirdparty-services-0.1/webview';
  // encode auth string
 const authString = `${conversationId} || ${botId}`;
 const auth = await sha256(authString);
 
 const res = await postData(domain, auth, {
   botId,
   conversationId,
   userId,
   message: "request successful", // optional
   contextVariables: [
     {"name": "name", "value": name},
     {"name": "color", "value": color},
     {"name": "swallow", "value": swallow}
   ],
 });
}
```

**Note:** The authorization for the bot *must* be in the format of “{conversationId} \|\| {botId}”, then sha256 encoded. You will need to do this in whatever method your platform supports.

The postData method referenced above looks like this:

```javascript
// Post data to Web View API
async function postData(url = '', auth, data = {}) {
 const response = await fetch(url, {
   method: 'POST',
   mode: 'cors',
   headers: {
     'Authorization': auth,
     'Content-Type': 'application/json',
   },
   body: JSON.stringify(data),
 });
 return await response.json();
};
```

### React to the submitted data in the bot

When we called the Web View Integration API upon submitting the form, we passed a “message” parameter with a value of “request successful.” This “message” can be used in the dialog flow. You can see in the images below that we have a custom rule to pattern match the message that we sent.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/guideWebView_react_a.png">
<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/guideWebView_react_b.png">
<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/guideWebView_react_c.png">

In the pre-process code for the interaction, we have the following code to retrieve the visitor’s name that was sent in the API payload. This value is then assigned to a bot variable, which we can use in the text interaction.

```javascript
var visitor_name = botContext.getWebViewVariable('name');
var visitor_color = botContext.getWebViewVariable('color');
var visitor_swallow = botContext.getWebViewVariable('swallow');
botContext.setBotVariable('visitor_name', visitor_name, true, false);
botContext.setBotVariable('visitor_color', visitor_color, true, false);
botContext.setBotVariable('visitor_swallow', visitor_swallow, true, false);
```

An end-to-end demo can be found [here](https://static-assets.dev.fs.liveperson.com/cb_test/web_view_test/index.html). Simply type “web view” to trigger the appropriate dialog. Click the link to access the form, fill it in, and then submit the form. The bot will then respond, confirming that the form was filled.

<img class="fancyimage" style="width:300px" src="img/ConvoBuilder/guideWebView_chat.png">
