---
pagename: Scripting Functions
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversation Builder
permalink: conversation-builder-conversation-builder-scripting-functions.html
indicator: both
---

Functions are modules of code that are used for accomplishing a certain task programatically. 

With few exceptions, functions can be used in the [Pre-Process / Post-Process Code](conversation-builder-conversation-builder-interaction-details.html#code) or the [Process User Response](conversation-builder-conversation-builder-interaction-details.html#process-user-response) JavaScript code panels.

**Please note:**

* Function names are case-sensitive in the JavaScript
* Functions require the `botContext.` prefix
* Functions are scoped ONLY for the JavaScript panel in which they appear

### Get Current User Message

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

### Get and Set Bot Variable

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

### Get Conversation ID

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

### Get Current and Previous Skills

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

**Messaging Connector Requirements:**
- Ensure that the bot is set up with API OAuth login rather than password login
- Ensure that the OAuth keys have permission to Engagement History

<img class="fancyimage" style="width:500px;" src="img/ConvoBuilder/previousSkillSetupMessaging.png">

### Get Authenticated Customer Info

There are two built in methods to return authenticated customer information. You can attempt to see if either of these 2 methods return true or not.  If the visitor is authenticated, (typically they would set personal or customer info being logged in) you can access the Personal Info or Customer Info object array.

Each function refers to its corresponding [authenticated engagement attribute object](essential-resources-authentication.html#messaging-consumer-authentication-and-identification).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getLPUserPersonalInfo()` | `"currentSkillId"`, `"previousSkillId"` | [personal info](engagement-attributes-types-of-engagement-attributes.html#personal-info) object or nothing |
| `getLPCustomerInfo()` | `"currentSkillId"`, `"previousSkillId"` | [customer info](engagement-attributes-types-of-engagement-attributes.html#customer-info) object or nothing |

#### Example

```javascript
botContext.getLPUserPersonalInfo();

botContext.getLPCustomerInfo();
```


### Get Environment Variable

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

### Print Debug Message

The Print Debug Message is used to log what user said in the debug console of the bot. For instance, the `response` variable stores the most recent messages from the user, which we print to the debugger using `printDebugMessage`.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `printDebugMessage(message)` | message (string) – A message to print to the debug logs. | None |

#### Example
```javascript
// get what the user just said
var response = botContext.getCurrentUserMessage();
botContext.printDebugMessage('User said ' + response);
```

### Set Trigger Next Message

Used for triggering the message flow to selected segment of the bot.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `setTriggerNextMessage(messagename)` | messagename (string) – The message to trigger, as identified by the Name of the message. | None |

#### Example

In the below example, we test for which company the user selected, and if ‘BotCentral’ we trigger the message "Welcome BotCentral", otherwise we trigger "Welcome Other".

```javascript
var company = botContext.getCurrentUserMessage();
if (company == 'BotCentral') {
      botContext.setTriggerNextMessage('Welcome BotCentral');
}else{
      botContext.setTriggerNextMessage('Welcome Other');
}
```

### Get Channel

Returns the platform channel the user is currently communicating on. This function returns - lp_sms, lp_web, lp_inapp, sms, web, inapp. lp_ prefix indicates the LivePerson platform.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getChannel()` | None | lp_sms, lp_web, lp_inapp, sms, web, inapp |

#### Example

```javascript
var channel = botContext.getChannel();
botContext.printDebugMessage("channel used by the user is: " + channel);
```

### Evaluating Options

Used for matching the user’s input against an array of options.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `evaluateOptions(userResponse, options)` | <em>userResponse - </em>the user's message text<br><br><em>options - </em>array of strings | string: matched option from an array of options. |

#### Example

In the below example, we create an array of possible options. Then we test for a response using the evaluateOptions() function by including the userResponse and the array of options. If the user types “A” or “A)” or “Yes” the result returned will be “A) Yes”.

```javascript
var userResponse = (botContext.getCurrentUserMessage()).toLowerCase();
// match options
var options = ["A)Yes", "B)No"];
var result = botContext.evaluateOptions(userResponse, options);
// what was user's response?
botContext.printDebugMessage('====> User Said: ' + userResponse + ' and MATCH result = '+ result);
```

### Log Custom Event

Used for tracking specific bot events for the purposes of analytics. This function requires some type of user message and event name. The event detail is optional. In the example, we are setting the user message to the currentUserMessage and naming the event “Invoice API”.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `logCustomEvent(user_message, event_name[, event_detail])` | <em>user_message - </em>the user's message text<br><br><em>event_name - </em>string | Void |

#### Example

```javascript
botContext.logCustomEvent(botContext.getCurrentUserMessage(), 'Invoice API','');
```

### Log Escalation Event

Used to count the number of times the user called a particular escalation type. The function requries a user input and the string 'LivePerson' for the type of escalation.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `logEscalationEvent(user_message, escalation_type)` | <em>user_message - </em>the user's message text<br><br><em>escalation_type - </em>'LivePerson' | void |

#### Example

```javascript
botContext.logEscalationEvent(botContext.getCurrentUserMessage(), 'LivePerson');
```

### Set Message Delay Value

Used to set a delay for a group of messages such that they appear like a real conversation.

{: .important}
The setMessageDelay() function should be used within the preProcess Code JavaScript.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `setMessageDelay(delay_value)` | delay_value (integer) | None |

#### Example

In the below example, we send three messages to the user with a delay of 2000 milliseconds between them.

```javascript
// setting a delay of 2000 for each message……
botContext.setMessageDelay(2000);
//  sending message to user...
botContext.sendMessages(['Sorry to hear that you lost your credit card.','I just put the stop on your credit card', 'If you find any unauthorized transaction please let us know as soon as possible so we can remove them from your bill']);
```

### Send Immediate Reply

Delivers a message to the user immediately and stops the message flow and any other subsequent code within this message.

{: .important}
[See here](conversation-builder-conversation-builder-interactions.html#limitations) for limitations on types of text that you can send.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `sendImmediateReply(message)` | message – (string or array) – A string to be added to output. Or an array of strings, each to be added to output in succession. | None |

#### Example

In the below example, the response variables gets what user just said and sends Immediate Reply to the user.

```javascript
var response = botContext.getCurrentUserMessage();
botContext.sendImmediateReply('I think you said, ' + response);
```

### Send Message

Used to send a single message to user. Using this function we can send messages to the user at any place of the code, without stopping the message flow.

{: .important}
[See here](conversation-builder-conversation-builder-interactions.html#limitations) for limitations on types of text that you can send.

{: .important}
To send multiple messages use the [sendMessages()](#send-messages) function.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `sendMessage(message)` | message (string) | None |

#### Example
```javascript
if(count > 10){
    botContext.sendMessage('Looks like you have a lot!');
}else{
    botContext.sendMessage('You could use a few more, for sure!');
}
```

### Send Messages

Used to send array of the messages to the user. In most cases we use message delay for the send messages function.

{: .important}
[See here](conversation-builder-conversation-builder-interactions.html#limitations) for limitations on types of text that you can send.

{: .important}
To send a single message use the [sendMessage()](#send-message) function.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `sendMessages(messages)` | array | None |

#### Example
```javascript
botContext.setMessageDelay(2500);
botContext.sendMessages(['Your current cash rewards balance is $37.50.' , 'If you had been using our AcmeBank Exclusive Cash Rewards Card your current rewards balance would have been $103.50.']);
```

### Send Message With Quick Reply

Used for programatically creating a message containing quick reply buttons. Quick replies have both a title (sauce name) and an optional payload (sauce number).

{: .important}
A few limitations apply to quick replies. You can have up to 10 quick replies per message. The quick reply titles have a character limit of 20 chars. The quick reply payload (delimited by `~`) is optional.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `sendMessageWithQuickReplies()` | a message with quick reply buttons. | None |

#### Example

In the example below, we create a message to select your favorite dipping sauce. The sauces are added as an array to create the quick reply buttons.

```javascript
// Create a message with Quick Replies
botContext.sendMessageWithQuickReplies('What is your favorite type of dipping sauce?', ['Ranch~sauce01','Honey Mustard~sauce02','BBQ~sauce03','Hot~sauce04']);
```

### Add Quick Replies

The Add Quick Replies function is used for adding quick replies to a message in JavaScript rather than defining in Bot creation. This allows for the dynamic addition of the buttons to accommodate various scenarios.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `addQuickReples()` | array | None |

#### Example

The example below shows how quick replies can be added easily to your message.

```javascript
// Add these quick replies to an existing message
botContext.addQuickReples(['Ranch~sauce01','Honey Mustard~sauce02','BBQ~sauce03','Hot~sauce04']);
```

### Get Quick Reply Payload

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

### Get API Integration Results Count

Most commonly used to check whether an API integration returned any results at all, and how many. If no results are returned, you should display an error message or redirect to a failover message.

For example, imagine you are using the KnowledgeBase feature to create an FAQ bot. If the user’s query doesn’t return any results, you may want to respond with another message that provides some guidance.

#### Example

In the below example, `faqIntegration` is the name of the API integration, `title` is the custom data field mapping name, and `count` is the parameter that gives you the actual count.

```javascript
var results = botContext.getBotVariable(faqIntegration.title.count);
if (results < 1) {
      botContext.sendMessage('Sorry, I was not able to find any notes for this contact.');
}
```

### Get User Location

When you create a Required Context of type Location, a Location object is created.

You can retrieve this object with `getUserLocation()`, and access the properties of the location object by assigning it to a local variable and then calling several `get` methods on the object.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getUserLocation()` | None | location object |

#### Example

```javascript
var location = botContext.getUserLocation();
var city = location.getState(); // two-letter state abbreviation
var lat = location.getLatitude();
var lon = location.getLongitude();
var zip = location.getZipCode(); // postal code
```

You can also access the location information with the {$location} variable, for instance:

- City: {$location.city}
- State: {$location.state}
- ZipCode: {$location.zip}
- Latitude: {$location.lat}
- Longitude: {$location.lng}
- combined Lat,Lng {$location.latlng}.

### Get and Set UserName

The get UserName and set UserName functions are used to get (and set) the value of a permanent variable, dedicated to the user’s name. Having this dedicated variable makes it easy to consistently set the user’s information.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getUserName()` | None | string |
| `setUserName(name)` | name (string) | None |

#### Example

```javascript
// retrieve the username and test
var username = botContext.getUserName();
if(username != null){
  botContext.printDebugMessage('User Name = ' + username);
  botContext.sendMessage('Hi'  + username + '! Thanks for coming');
}else{
  // if it doesn’t exist, set it
  botContext.setUserName('Fred');
}
```

### Get and Set User Email Address

The get Email and set Email functions are used to get (and set) the value of a permanent variable, dedicated to the user’s email address. Having this dedicated variable makes it easy to consistently set the user’s information.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getEmail()` | None | string |
| `setEmail(address)` | address (string) | None |

#### Example

```javascript
// retrieve the user’s email address and test
var email = botContext.getEmail();
if (email != null) {
  botContext.printDebugMessage('User Email Address = ' + email);
  botContext.sendMessage('Looks like your email address is ' + email);
} else {
  // if it doesn’t exist, set it
  botContext.setEmail('fred@fred.net');
}
```

### Get NLP Responses

Used to get an array of results derived from BotCentral’s Natural Language Processing algorithms.

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

### Get Named Entities

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

### Get Sentiment

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

### Get user Platform ID and platform Type

The Get User Platform Id and Get User Platform Type are the functions that are used to get the user’s unique platform ID and their platform type (eg: FACEBOOK, HTMLCLIENT, etc).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getUserPlatformId()` | None | string: unique User platform ID |
| `getUserPlatformType()` | None | string: User platform type |

#### Example
```javascript
// get the user’s platform ID
var userId = botContext.getUserPlatformId();
// gets the user’s platform type
var platformType = botContext.getUserPlatformType();
// display the results...
botContext.printDebugMessage('The userPlatformId = ' + userId + 'and the userPlatformType = ' + platformType);
```

### Get Disambiguated Intent

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