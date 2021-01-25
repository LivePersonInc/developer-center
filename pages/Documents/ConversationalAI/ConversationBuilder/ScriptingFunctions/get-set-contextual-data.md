---
pagename: Get & Set Contextual Data
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Scripting Functions
permalink: conversation-builder-scripting-functions-get-set-contextual-data.html
indicator: both
---

Use the following built-in functions to get and set contextual data.

### Get and set bot variable

The `setBotVariable` function is used to set a bot variable’s state in memory, so it can be used later in the bot flow. By default, it stores the variable state in request scope, but you can specify the scope as a parameter.

The `getBotVariable` function is used for getting the bot variable. Bot variables that are not set will return NULL.

{: .important}
botVariables are strings. Whatever the data type of your input, it will be converted to a string. If you set a botVariable to an integer (ie: 10) it will be converted to “10”. When called using `getBotVariable()`, to be used as an integer again, you would need to convert it back to an integer (ie: 10*1).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getBotVariable(name)` | name (string) – The name for the variable. | The object defined by `name` |
| `setBotVariable(name, value, persistForSession, persistForever)` | <em>name (string)</em> – The name for the variable. Used to retrieve the variable in getBotVariable()<br><br> <em>value (object)</em> – The value to be stored, retrieved with getBotVariable() <br><br> <em>persistForSession (bool)</em> – If true, the variable persists for the current user session. If false, the variable is treated as a request variable, which means the variable is available from the time the user posts a question to the time the bot responds. You can set a request variable in the Pre-Process code and use it in the Post-Process code, as both are evaluated in the same request. <br><br> <em>persistForever (bool)</em> – If true, the variable persists for 180 days. **Note**: Support for a value of "true" will be deprecated in a future release. Use of the [Conversation Context Service](conversation-builder-scripting-functions-manage-the-conversation-context-service.html) is recommended instead.| None |

#### Example

In the example below, we're using `getBotVariable` to retrieve a string that represents an integer, which might need to be handled slightly differently depending on your situation.

```javascript
// retrieving an integer
var count = botContext.getBotVariable('Howmanyitems');
count = count*1;
if (count > 10) {
      botContext.sendMessage('You have more than 10 items!');
} else {
  botContext.setBotVariable('Howmanyitems',0,true,false);
  botContext.sendMessage('Sorry, you do not have any items with you... ');
}
```

### Get current user message

`getCurrentUserMessage` is used for getting the most recent message from the user, whether typed or tapped (buttons or quick replies).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getCurrentUserMessage()` | None | (string) The full text of the most recent message from the user |

#### Example

```javascript
// get what the user just said
var response = botContext.getCurrentUserMessage();
// use the response in a variable
botContext.setBotVariable('newsSource',response,true,false);
```

### Set bot transfer intent by domain

Use the `setBotTransferIntentbyDomain` function to set an intent ID in the Transfer Bot Context object that can be sent from the sender bot to the receiver bot during a manual, [bot-to-bot transfer](conversation-builder-bots-bot-to-bot-transfers.html). The intent ID is derived from the supplied domain name and intent name. You can retrieve the domain name that you need from the UI. And you can retrieve the intent name that you need from the UI or via [getDialogStarterIntent](conversation-builder-scripting-functions-functions-list.html). During the transfer, the system uses the domain name and the intent name to ascertain and pass the intent ID.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `setBotTransferIntentbyDomain(intentName, domainName)` | *intentName (String)* – The name of the intent <br>*domainName (String)* - The name of the domain | None |

#### Example

```javascript
botContext.setBotTransferIntentbyDomain("billing question", "Billing");
```

### Set bot transfer intent ID

Use the `setBotTransferIntentId` function to set an intent ID in the Transfer Bot Context object that can be sent from the sender bot to the receiver bot during a manual, [bot-to-bot transfer](conversation-builder-bots-bot-to-bot-transfers.html). You can retrieve the intent ID that you need from the application URL if you're logged into Conversation Builder directly and know how. Otherwise, use [setBotTransferIntentbyDomain](conversation-builder-scripting-functions-functions-list.html) instead.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `setBotTransferIntentId(value)` | *value (String)* – The intent ID | None |

#### Example

```javascript
botContext.setBotTransferIntentId("d46688d7-7ec2-44a4-a09c-b500f728ee05");
```

### Set bot transfer user message

Use the `setBotTransferUserMessage` function to set a user message in the Transfer Bot Context object that can be sent from the sender bot to the receiver bot during a manual, [bot-to-bot transfer](conversation-builder-bots-bot-to-bot-transfers.html).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `setBotTransferUserMessage(value)` | *value (String)* – The user message | None |

#### Example

```javascript
botContext.setBotTransferUserMessage("order status");
```

### Get environment variable

`getEnvVariable` is used for getting an environment variable. An environment variable that isn't set returns NULL.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getEnvVariable(name)` | name (string) – The name of the variable. | The object defined by `name` |

#### Example

In the example below, we use `getEnvVariable` to retrieve a string which will provide for us the correct skillId for routing depending upon the environment that the bot is currently in.

```javascript
switch(intent){
case "billing":
    transferMessage = "Hold on while I transfer you to someone who can help with your billing issue...";
    skillId = botContext.getEnvVariable('billing');
    skillName = intent;
    break;
case "account":
    transferMessage = "Hold on while I transfer you to someone who can help with your account issue...";
    skillId = botContext.getEnvVariable('account');
    skillName = intent;
    break;
case "help":
    transferMessage = "Hold on while I transfer you to someone who can help with your issue...";
    skillId = botContext.getEnvVariable('help');
    skillName = intent;
    break;  
}      
```


### Get conversation ID

The `getConversationId` function will retrieve the conversation ID for the current conversation.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getConversationId()` | None | Conversation ID (string) |

#### Example

```javascript
// store the conversation id in a variable inside your current pre/post process code
var convId = botContext.getConversationId();
```

You can also use the `{$conversationId}` [system variable](conversation-builder-variables-slots.html#system-variables) to display the conversation ID as text in interactions or post bodies.


### Get LP account ID

The `getLPAccountId` function retrieves the Conversational Cloud account ID for the current conversation.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getLPAccountId()` | None | LP account ID (string) |

#### Example

```javascript
// store the LP account ID in a variable inside your current pre/post process code
var acctId = botContext.getLPAccountId();

```
### Get LP engagement attribute

The `getLPEngagementAttribute` function retrieves the specified LivePerson engagement attribute for the current conversation.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getLPEngagementAttribute(arg)` | `sharkVisitorId` - The ID of the real-time visitor,<br>`sharkSessionId` - The ID of the session,<br>`sharkContextId` - Conversational Cloud's interactionContextId<br>`campaignId` - The ID of the campaign,<br>`engagementId` - The ID of the engagement,<br>`startTs` - The start time of the engagement,<br>`os` - The consumer's operating system,<br>`appId` - The ID of the app on the consumer's mobile device,<br>`brandId` - The ID of the brand,<br>`BearerToken` - The authentication credential,<br>`currentSkillId` - The ID of the current skill, or <br>`previousSkillId` - The ID of the previous skill<br>`rtSesssionId` - **Chat-specific**; the session ID for the chat engagement<br>`chatSessionKey` - **Chat-specific**; the unique key of the agent session (when the agent talks to the consumer) <br>`agentSessionId` - **Chat-specific**; the agent's login session ID (specific to the agent that's logged in, who can be talking to multiple consumers) | String |

{: .important}
`previousSkillId` only works for Messaging. If used in a Chat conversation, it will be set to the same ID as the current skill ID.


#### Example

The following example shows how to use the function to access the current skill and previous skill IDs and set them to a botContext variable.

```javascript
var currentSkill = botContext.getLPEngagementAttribute("currentSkillId");
var previousSkill = botContext.getLPEngagementAttribute("previousSkillId");

botContext.setBotVariable("currentSkill", currentSkill, true, false);
botContext.setBotVariable("previousSkill", previousSkill, true, false);
```

**Messaging connector requirements:**
- Ensure that the bot is set up with API OAuth login rather than password login.
- Ensure that the OAuth keys have permission to Engagement History.

<img class="fancyimage" style="width:500px;" src="img/ConvoBuilder/previousSkillSetupMessaging.png">

### Get matched intent
`getDialogStarterIntent` is used to retrieve the intent (associated with a Dialog Starter interaction) that was matched to the most recent user utterance.

This method returns the name of the intent. If you are using a meta intent, it returns the name of the child or sub-intent.

#### Example

```javascript
var intentName = botContext.getDialogStarterIntent();
```

### Get named entities

`getNamedEntities` is used to access user utterances that are recognized as entities.

To access the actual phrases used, call `getPhrase()` on the entity objects.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getNamedEntities(entity_name)` | entity_name (string) | array of `namedEntity()` objects |

#### Example

```javascript
var toppingObjects = botContext.getNamedEntities('toppings');
var toppings = [];
if (toppingObjects != null && toppingObjects.length > 0) {
    for (j = 0; j < toppingObjects.length; j++) {
        toppings.push(toppingObjects[j].getPhrase())
    }
}
```


### Get NLP responses

`getNlpResponse` is used to get an array of results derived from Conversation Builder’s Natural Language Processing algorithms.

For instance, the sentence, “The quick brown fox jumped over the lazy dog” returns the following nouns [dog, fox], the verb [jumped], the phrases [the quick brown Fox, the lazy Dog] and tokens: [the, over, quick, lazy, jumped, brown, Dog, Fox].

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getNlpResponse()` | None | array of NLP results (nouns, verbs, phrases, sentences, tokens) |

#### Example

```javascript
// get the results
var nlpResponse = botContext.getNlpResponse();
var nlpNouns = nlpResponse.nouns;
var nlpVerbs = nlpResponse.verbs;
var nlpPhrases = nlpResponse.phrases;
var nlpTokens = nlpResponse.tokens;

botContext.sendMessage('I found the following nouns: '+ nlpNouns + ' and verbs: '+ nlpVerbs + ' and phrases: ' + nlpPhrases + ' and tokens: ' + nlpTokens);
```


### Get sentiment

`getSentiment` is used for having the sentiment conversation chatbox messages with the user. Instead of using the sentiments in the intents of the bot, this function relies on programmatically checking the sentiment of the user.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getSentiment()` | None | returns a string (Positive, Neutral, Negative) based on the most recent user message |

#### Example

```javascript
// get the sentiment results
var sentiment =  botContext.getSentiment();
if(sentiment == "Positive"){
    botContext.sendMessage('Excellent!');
} else if(sentiment == "Neutral"){
    botContext.sendMessage('Hmmmm, not too sure about that…');
} else {
    botContext.sendMessage('Well that’s not good.');
}
```


### Get quick reply payload

`getQuickReplyPayload` is used to access the Quick Reply buttons that are selected by the user. These buttons have a hidden payload that may be different than the text shown to the user. For instance, Quick Replies asking you to select your favorite color might show: Red, Blue, Green, Purple, etc., but the payloads could be color01, color02, color03, etc.

This function is used in Process User Response, where the code for assessing user interaction resides.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getQuickReplyPayload()` | None | (string) The payload associated with the user-selected Quick Reply option |

#### Example
```javascript
//get what the user just said
var response = botContext.getCurrentUserMessage();
//accessing the user selected payload
var payload = botContext.getQuickReplyPayload();
//sending an Immediate reply to the user with the desired output
botContext.sendImmediateReply('Hey you picked option ' + response  +' with a payload of '+ payload);
```


### Get disambiguated intent

`getDisambiguatedIntentName` and `getDisambiguatedIntentId` can be used in preProcess/postProcess/processUserResponse code to get the relevant disambiguated intent data.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getDisambiguatedIntentName()` | None | selected intent name from the disambiguation interaction (string) |
| `getDisambiguatedIntentId()` | None | selected intent ID from the disambiguation interaction (string) |

#### Example

```javascript
// get the disambiguated intent name
var intentName = botContext.getDisambiguatedIntentName() ;
// get the disambiguated intent ID
var intentID = botContext.getDisambiguatedIntentId();
// display the results...
botContext.printDebugMessage('The intent name = ' + intentName + 'and the intent ID = ' + intentID);
```


### Get Web View variables

`getWebViewVariable` and `getWebViewVariables` retrieve session-scoped variables that were set via the [Web View API](conversation-builder-integrations-web-view-integration-api.html).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getWebViewVariable(variableName)` | _variableName_ - the name of the variable to retrieve | string |
| `getWebViewVariables()` | none | object:list of strings |

#### Example

```javascript
    botContext.getWebViewVariable('name'); // This returns the value as PaymentId
    botContext.getWebViewVariable('PaymentStatus'); // This returns the value as PROCESSED
```
For the corresponding curl example, see the [Web View API](conversation-builder-integrations-web-view-integration-api.html) documentation.

### Get type of hours

Given an array of hours classified by type and a time zone, `getHoursType` returns the type of hours.

This method is commonly used to provide a different experience or messaging to the consumer during regular or after hours. Additionally, the method is able to handle generalized hours, hours for specific days of the week, and specific dates. Note the following:

* **Keys**: The keys are user-defined and arbitrary (REG_HOURS, AFTER_HOURS, etc.). If you want to specify a shift/time period for a particular day, use the name of the day (“FRIDAY\|”, “SATURDAY\|”, etc.) as appropriate. You can also use a specific date (e.g., 12.25.2018 for Christmas).
* **Values**: If two time frames overlap, the later time frame is used.
* **Time zone**: The time zone value should be the time zone of the agent call center, not the user. You can find the appropriate format for all time zones [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

{: .important}
`getHoursType` is a basic function to specify agent time shifts.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| getHoursType(hoursSpec, zoneIdStr) | *hoursSpec (String array)* – The hours classified by type <br><br> *zoneIdStr (String)* – The time zone, e.g., “America/Los_Angeles” | The String that defines the type of hours, e.g., “AFTER_HOURS” | 

#### Example

```javascript
var hoursSpec = [
    "REG_HOURS~8:00~20:00",
    "AFTER_HOURS~20:00~8:00",
    "FRIDAY|WKEND_REG_HOURS~8:00~17:00",
    "FRIDAY|WKEND_AFTER_HOURS~17:00~08:00",
    "SATURDAY|WKEND_REG_HOURS~8:00~17:00",
    "SATURDAY|WKEND_AFTER_HOURS~17:00~08:00",
    "SUNDAY|WKEND_REG_HOURS~8:00~17:00",
    "SUNDAY|WKEND_AFTER_HOURS~17:00~08:00",
    "11.22.2018|HOLIDAY_THANKS~0:00~23:59",
    "12.25.2018|HOLIDAY_XMAS~0:00~23:59"
];

var type = botContext.getHoursType(hoursSpec, "America/Los_Angeles");

// TEST FOR type and set the transferMessage to result
switch(type){
  case "REG_HOURS":
  case "WKEND_REG_HOURS":
    msg = "Let me connect you to an Agent who can help you.";
    botContext.setBotVariable('transferMessage',msg,true,false);
    botContext.setTriggerNextMessge('Liveperson Transfer');
    break;

  case "AFTER_HOURS":
  case "WKEND_AFTER_HOURS":
    msg = "You have reached us after our business hours. We are open 7 days a week; 8AM - 8PM PST Monday through Thursday and 8AM - 5PM PST Friday through Sunday.";
    botContext.setBotVariable('noTransferMessage',msg,true,false);
    botContext.setTriggerNextMessge('No Transfer');
    break;

  case "HOLIDAY_THANKS":
    msg = "We are closed for the Thanksgiving holiday today. We will resume regular hours tomorrow. We are open 7 days a week; 8AM - 8PM PST Monday through Thursday and 8AM - 5PM PST Friday through Sunday.";
    botContext.setBotVariable('noTransferMessage',msg,true,false);
    botContext.setTriggerNextMessge('No Transfer');
    break;

  case "HOLIDAY_XMAS":
    msg = "We are closed for the Christmas holiday today. We will resume regular hours tomorrow. We are open 7 days a week; 8AM - 8PM PST Monday through Thursday and 8AM - 5PM PST Friday through Sunday.";
    botContext.setBotVariable('noTransferMessage',msg,true,false);
    botContext.setTriggerNextMessge('No Transfer');
    break;
}
```