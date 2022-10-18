---
pagename: Global Helper Functions
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Bot Templates
permalink: conversation-builder-bot-templates-global-helper-functions.html
indicator: both
---

Global Helper Functions are recommended and useful for building bots that involve any coding logic that must take place in Pre/Post-Process code or in integrations. This bot template contains a set of recommended global functions that can help to capture needed information and process common methods without the need to write the botContext methods in your bot.

This bot template serves to demonstrate the functionality of many of these global functions. It is **not** intended for use as a stand-alone bot, but instead as an example of how you might use these functions within your own.

### Included items

#### Dialogs

* **01 Welcome**: Greets the user and presents them with the main menu.
* **02 Bot Variables**: Demonstrates getting the most recent user message and setting of bot variables.
* **03 Context Session Store**: Demonstrates setting and retrieving values with the Context Session Store.
* **04 Navigation and Sending Messages**: Demonstrates using code to navigate between different interactions and sending messages.
* **05 Logging and Debugging**: Demonstrates printing debug messages and logging custom events.
* **06 Navigating Back**: Demonstrates the “trail” function to keep a record of visited interactions.
* **06B Go Back**: Demonstrates the “previous()” function to revisit interactions stored using the “trail()” function.
* **99 Fallback**: This is displayed when the user enters an utterance that is not recognized.

#### Global Functions

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/templates_ghf1.png" alt="The Global Functions page in a bot created from the Global Helper Functions bot template">

The functions are designed to simplify the use of pre/post process code. All functions are provided with the dialog template.

##### Retrieving user message and intent

[getUserMessage](conversation-builder-scripting-functions-get-set-session-data.html#get-current-user-message): Retrieves the most recent message sent to the bot.
```javascript
function getUserMessage(){return botContext.getCurrentUserMessage();}
```

[getIntent](conversation-builder-scripting-functions-get-set-session-data.html#get-matched-intent): Retrieves the name of the most recent intent matched to a dialog starter.
```javascript
function getIntent(){return botContext.getDialogStarterIntent();}
```

##### Getting and setting variables

[setBotVar](conversation-builder-scripting-functions-get-set-session-data.html#get-and-set-bot-variable): Sets a value to a session scoped bot variable.
```javascript
function setBotVar(arg,val){botContext.setBotVariable(arg, val, true, false);}
```

[getBotVar](conversation-builder-scripting-functions-get-set-session-data.html#get-and-set-bot-variable): Retrieves the value of a bot variable.
```javascript
function getBotVar(arg){return botContext.getBotVariable(arg);}
```

[getWebVar](conversation-builder-scripting-functions-get-set-session-data.html#get-web-view-variables): Retrieves the value of a Web View variable.
```javascript
function getWebVar(arg){return botContext.getWebViewVariable(arg);}
```

[getEnvVar](conversation-builder-scripting-functions-get-set-session-data.html#get-environment-variable): Retrieves the value of an environment variable.
```javascript
function getEnvVar(arg){return botContext.getEnvVariable(arg);}
```

[setContextConv](conversation-builder-scripting-functions-manage-the-conversation-context-service.html#set-a-variable): Creates or updates a conversation-scoped variable and value in the [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html) for the default namespace defined in ‘__initConversation’.

```javascript
function setContextConv(key, value) {
 var success = botContext.setContextDataForConversation(getBotVar('contextNameSpace'), key, value);
 if (success) {
   debugMsg("SETTING Context Data: Key: "+key+ "; Value: "+value);
 }else{
   debugMsg("FAILED to Set Context Data: Key: "+key+ "; Value: "+value);
 }
}
```

[getContextConv](conversation-builder-scripting-functions-manage-the-conversation-context-service.html#get-a-variable): Retrieves a conversation-scoped variable’s value from the [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html) for the default namespace defined in ‘__initConversation’.

```javascript
function getContextConv(key) {
 var success = botContext.getContextDataForConversation(getBotVar('contextNameSpace'), key);
 if (success) {
   debugMsg("GETTING Context Data: Key: "+key+ "; Value: "+success);
   return success;
 }else{
   debugMsg("FAILED to Get Context Data: Key: "+key);
 }
}
```

##### Debugging

[debugMsg](conversation-builder-scripting-functions-log-debug.html#print-debug-message): Prints a debug message to the bot logs.

```javascript
function debugMsg(arg){botContext.printDebugMessage(arg);}
```

[debugVar](conversation-builder-scripting-functions-log-debug.html#print-debug-message): Prints a bot variable name and its value to the bot logs.

```javascript
function debugVar(arg){botContext.printDebugMessage(arg + ': ' + getBotVar(arg));}
```

[printVar](conversation-builder-scripting-functions-send-messages.html#send-message): Sends a message to the user containing a bot variable name and its value.

```javascript
function printVar(arg){botContext.sendMessage(arg + ": " + getBotVar(arg));}
```

##### Send messages

[sendMsg](conversation-builder-scripting-functions-send-messages.html#send-message): Sends a single text message to the user.

```javascript
function sendMsg(arg){botContext.sendMessage(arg);}
```

[sendMsgArr](conversation-builder-scripting-functions-send-messages.html#send-messages): Accepts an array of strings and sends each as a separate message to the user.

```javascript
function sendMsgArr(arr){botContext.sendMessages(arr);}
```

##### Custom event logging

[logEvent](conversation-builder-scripting-functions-log-debug.html#log-custom-event): Logs a simple custom event containing just the event name argument.

```javascript
function logEvent(event_name) {botContext.logCustomEvent('', event_name, '');}
```

[logEventAdv](conversation-builder-scripting-functions-log-debug.html#log-custom-event): Logs a full custom event containing arguments for user message, event name, and event details.

```javascript
function logEventAdv(user_message, event_name, event_details){
  botContext.logCustomEvent(user_message, event_name, event_details);
}
```

##### Manage conversation flow

[goNext](conversation-builder-scripting-functions-manage-conversation-flow.html#set-trigger-next-message): Navigates to a specific interaction.

```javascript
function goNext(arg){botContext.setTriggerNextMessage(arg);}
```

[setDelay](conversation-builder-scripting-functions-manage-conversation-flow.html#set-message-delay-value): Use in pre-process code to set a delay to the interaction in milliseconds.

```javascript
function setDelay(arg){botContext.setMessageDelay(arg);}
```

**goDefault**: Configure to send a conversation to a bot’s default interaction (ex: Main Menu). Replace “platform.default” with that interaction's name.

```javascript
function goDefault(){goNext("platform.default");}
```

**trail**: Sets a ‘breadcrumb’ variable containing the name of the current interaction. The interaction name is added to an interactionArray of previous ‘breadcrumb’ interactions, which can be used in ‘previous()’ function to enable ‘back’ functionality. Should be used with ALL question interactions.

```javascript
function trail(val) {
 var e = getBotVar('intArr');
 if (e == 'null' || e == null || e.length === 0) {
   e = [];
 } else {
   e = e.split(',');
 }
 e.push(val);
 setBotVar('intArr', e.toString());
 var count = Number(getBotVar('errorCounter'));
 var breadcrumb = getBotVar('breadcrumb');
 if (breadcrumb != val) {
   count = 0;
 }
 setBotVar('errorCounter', count);
 setBotVar('breadcrumb', val);
}
```

**previous**: Used in conjunction with the ‘trail()’ function. ‘Pops’ interactions from the interactionArray and navigates to the most recent interaction. Typically used in its own dialog triggered by a ‘back’ pattern.

```javascript
function previous(){
 var e = getBotVar('intArr').split(",");
 if(e.length === 1){
   debugMsg('You are already back to the start');
 }
 e.pop();
 setBotVar('intArr', e);
 goNext(e.pop());
}
```

#### Init variables

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/templates_ghf1.png" alt="Init variables on the Global Functions page in a bot created from the Global Helper Functions bot template">

Automatically establishes frequently used values as bot variables. Includes LP Engagement Attributes as well as channel, account, user, and conversation-specific values. Is also used to establish default skills and registration of [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html) namespace.

```javascript
 var initVars = {
   defaultSkillId: "",
   defaultSkillName: "",
   firstInteraction: 'WELCOME',
   transferMessage: 'Stand by!, transferring…',
   contextNameSpace: 'testNamespace',
   errorThreshold: 2,
   errorCount: 0,
   currentSkill: botContext.getLPEngagementAttribute("currentSkillId"),
   previousSkill: botContext.getLPEngagementAttribute("previousSkillId"),
   campaignId: botContext.getLPEngagementAttribute('campaignId'),
   accountId: botContext.getLPAccountId(),
   rtSessionId: botContext.getLPEngagementAttribute("rtSessionId"),
   sharkSessionId: botContext.getLPEngagementAttribute("sharkSessionId"),
   sharkVisitorId: botContext.getLPEngagementAttribute("sharkVisitorId"),
   bearerToken: botContext.getLPEngagementAttribute("BearerToken"),
   chatSessionKey: botContext.getLPEngagementAttribute("chatSessionKey"),
   agentSessionId: botContext.getLPEngagementAttribute("agentSessionId"),
   engid: botContext.getLPEngagementAttribute("engagementId"),
   conversationId: botContext.getConversationId(),
   customerInfo: botContext.getLPCustomerInfo(),
   userId: botContext.getUserPlatformId(),
   channel: botContext.getUserChannel(),
   customerId: botContext.getLPCustomerInfo().customerId,
   botId: "get from settings"
 };
 for(var i in Object.keys(initVars)) {
   setBotVar(Object.keys(initVars)[i], initVars[Object.keys(initVars)[i]]); // set each of the initVars as a variable
   debugMsg(Object.keys(initVars)[i]+ ": " +initVars[Object.keys(initVars)[i]]); // print a debug message for each of the variables set
 }
 botContext.registerContextNamespace(getBotVar('contextNameSpace'));
```

{: .attn-note}
Many of these bot variables don't return information if you're testing from within Conversation Builder. It is recommended that you [deploy your bot](tutorials-guides-getting-started-with-bot-building-deploy-the-bot.html) to a messaging test page.

### Dialog templates

This bot template contains a [dialog template](conversation-builder-dialog-templates.html) that can be imported into any Conversation Builder bot.

{: .attn-note}
If you import the dialog template into a bot, do so **before** you begin building out the bot. If you have existing global functions, there could be naming conflicts; so please double check after import.

#### Global Helper Functions
Contains all global helper functions and variables without the demonstration dialogs.

**Included dialogs:**
* 00 — Global Functions README