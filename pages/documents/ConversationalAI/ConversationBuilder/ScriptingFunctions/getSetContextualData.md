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

{: .important}
New to scripting functions? Please review the [Introduction](conversation-builder-scripting-functions-introduction.html).

### Get and set bot variable

The **Set** Bot Variable function is used for setting a value to the botVariable so that it can be used in further code and it returns a string data types to the results. These botVariables are available throughout the entire bot.

The **Get** Bot Variable function is used for getting the bot variable. Bot Variables that are not set will return NULL.

{: .important}
botVariables are strings. Whatever the data type of your input, it will be converted to a string. If you set a botVariable to an integer (ie: 10) it will be converted to “10”. When called using `getBotVariable()`, to be used as an integer again, you would need to convert it back to an integer (ie: 10*1).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getBotVariable(name)` | name (string) – The name for the variable. | The object defined by `name` |
| `setBotVariable(name, value, persistForSession, persistForever)` | <em>name (string)</em> – The name for the variable. Used to retrieve the variable in getBotVariable()<br><br> <em>value (object)</em> – The value to be stored, retrieved with getBotVariable() <br><br> <em>persistForSession (bool)</em> – If true, the variable persists for the current user session. Otherwise, the variable expires at the end of the current session (approximately 10 minutes). <br><br> <em>persistForever (bool)</em> – If true, the variable persists for the user indefinitely.| None |

#### Example

In the below example, we are using `getBotVariable` to retrieve a string and an integer which may need to be handled slightly differently, depending on your situation.

```javascript
// retrieving an integer
var count = botContext.getBotVariable('Howmanyitems');
count = count*1;
if (count > 10) {
      botContext.sendMessage('You have more than 10 items!');
} else {
  botContext.setBotVariable('Howmanyitems',0,true,false);
  botContext.sendMessage('Sorry, you dont have any items with you... ');
}
```

### Set bot transfer domain name

Use the `setBotTransferDomainName` function to set a domain name in the Bot Transfer Context object that can be sent from the sender bot to the receiver bot during a bot-to-bot transfer. You can retrieve the domain name that you need from the UI.

This function is intended to be used in conjunction with `setBotTransferIntentName`, as the system uses both to ascertain and pass an intent ID.

For more information, see the discussion on bot-to-bot transfers [here](conversation-builder-bots-bot-to-bot-transfers.html).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `setBotTransferDomainName(value)` | *value (String)* – The name of the domain | None |

#### Example

```javascript
botContext.setBotTransferDomainName("Billing");
```

### Set bot transfer intent name

Use the `setBotTransferIntentName` function to set an intent name in the Bot Transfer Context object that can be sent from the sender bot to the receiver bot during a bot-to-bot transfer. You can retrieve the intent name that you need from the UI or via `getDialogStarterIntent`.

This function is intended to be used in conjunction with `setBotTransferDomainName`, as the system uses both to ascertain and pass an intent ID.

For more information, see the discussion on bot-to-bot transfers [here](conversation-builder-bots-bot-to-bot-transfers.html).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `setBotTransferIntentName(value)` | *value (String)* – The name of the intent | None |

#### Example

```javascript
botContext.setBotTransferIntentName("billing question");
```


### Set bot transfer intent ID

Use the `setBotTransferIntentId` function to set an intent ID in the Bot Transfer Context object that can be sent from the sender bot to the receiver bot during a bot-to-bot transfer. You can retrieve the intent ID that you need from the application URL if you're logged into Conversation Builder directly and know how. Otherwise, use `setBotTransferDomainName` with `setBotTransferIntentName` instead.

For more information, see the discussion on bot-to-bot transfers [here](conversation-builder-bots-bot-to-bot-transfers.html).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `setBotTransferIntentId(value)` | *value (String)* – The intent ID | None |

#### Example

```javascript
botContext.setBotTransferIntentId("d46688d7-7ec2-44a4-a09c-b500f728ee05");
```

### Set bot transfer user message

Use the `setBotTransferUserMessage` function to set a user message in the Bot Transfer Context object that can be sent from the sender bot to the receiver bot during a bot-to-bot transfer. For more information, see the discussion on bot-to-bot transfers [here](conversation-builder-bots-bot-to-bot-transfers.html).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `setBotTransferUserMessage(value)` | *value (String)* – The user message | None |

#### Example

```javascript
botContext.setBotTransferUserMessage("order status");
```

### Get environment variable

Used for getting an environment variable. Environment Variables that are not set will return NULL.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getEnvVariable(name)` | name (string) – The name for the variable. | The object defined by `name` |

#### Example

In the below example, we are using `getEnvVariable` to retrieve a string which will provide for us the correct skillId for routing depending upon the environment that the bot is currently in.

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


### Get user channel
Returns the platform channel the user is currently communicating on. This function returns:

* lp_sms (for SMS)
* lp_web (for Web)
* lp_inapp (for In-app SDK)
* lp_whatsapp (for WhatsApp)
* lp_rcs (for RCS)
* lp_abc (for Apple Business Chat)
* twilio_sms (for Twilio SMS)
* lp_fb (for Facebook)

The "lp_" prefix indicates the LivePerson platform.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getUserChannel()` | None | lp_sms, lp_web, lp_inapp, lp_whatsapp, lp_rcs, lp_abc, twilio_sms, lp_fb |

#### Example

```javascript
var channel = botContext.getUserChannel();
botContext.printDebugMessage("channel used by the user is: " + channel);
```


### Get conversation ID

The Get Conversation ID function will retrieve the conversation ID for the current conversation.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getConversationId()` | None | Conversation ID (string) |

#### Example

The following example will store the conversation ID in a variable inside your current pre/post process code call "convId". It will then save this value in a bot session variable.

```javascript
// store the conversation id in a variable inside your current pre/post process code
var convId = botContext.getConversationId();

// save this in a bot session variable 
botContext.setBotVariable("conversationId", convId, true, false);
```

The bot session variable can then be accessed inside subsequent interactions or integrations using the following syntax:

`{$botContext.conversationId}`

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_0.png">

### Get current user message

Used for getting the most recent message from the user, whether typed or tapped (buttons or quick replies).

| Function Name | Arguments | Return Payload |
| --- | --- | --- |
| `getCurrentUserMessage()` | None | string: The full text of the most recent message from the user. |

#### Example

```javascript
// get what the user just said
var response = botContext.getCurrentUserMessage();
// use the response in a variable
botContext.setBotVariable('newsSource',response,true,false);
```


### Get current and previous skills

Used to add previous and current skillIds to the botContext. If the conversation was transferred to the bot, you can track the previous skill Id that the consumer came from.

{: .important}
Previous Skill Id only works for Messaging. If used in a Chat conversation, it will be set to the same ID as the current Skill ID.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getLPEngagementAttribute()` | `"currentSkillId"`, `"previousSkillId"` | skillID (string) |

#### Example

The following example shows how to access current skill and previous skill IDs and set them to a botContext variable.

```javascript
var currentSkill = botContext.getLPEngagementAttribute("currentSkillId");
var previousSkill = botContext.getLPEngagementAttribute("previousSkillId");

botContext.setBotVariable("currentSkill", currentSkill, true, false);
botContext.setBotVariable("previousSkill", previousSkill, true, false);
```

**Messaging connector requirements:**
- Ensure that the bot is set up with API OAuth login rather than password login
- Ensure that the OAuth keys have permission to Engagement History

<img class="fancyimage" style="width:500px;" src="img/ConvoBuilder/previousSkillSetupMessaging.png">

### Get matched intent
Used to retrieve the intent (associated with a User Says interaction) that was matched to the most recent user utterance.

This method returns the name of the intent. If you are using a meta intent, it returns the name of the child or sub-intent.

#### Example

```javascript
var intentName = botContext.getDialogStarterIntent();
```

### Get named entities

Used to access user utterances that are recognized as entities.

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
        toppings.push(toppingObjects[j].getPhrase)
    }
}
```


### Get NLP responses

Used to get an array of results derived from Conversation Builder’s Natural Language Processing algorithms.

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

Used for having the sentiment conversation chatbox messages with the user. Instead of using the sentiments in the intents of the bot, this function relies on programmably checking the sentiment of the user.

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

Used to get access to the Quick Reply buttons that are selected by the user. These buttons have a hidden payload that may be different than the text shown to the user. For instance, Quick Replies asking you to select your favorite color might show: Red, Blue, Green, Purple, etc. but the payloads could be color01, color02, color03, etc.

This function is used in Process User Response (where the code for assessing user interaction resides).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getQuickReplyPayload()` | None | string: The payload associated with the user-selected Quick Reply option. |

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

These functions can be used in preProcess/postProcess/processUserResponse code to get the relevant disambiguated intent data.

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

These functions retrieve session-scoped variables that were set via the [Web View API](conversation-builder-integrations-web-view-integration-api.html).

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
