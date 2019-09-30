---
pagename: Get and Set Conversation Flow Data
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Scripting Functions
permalink: conversation-builder-scripting-functions-get-and-set-conversation-flow-data.html
indicator: both
---

The following built-in functions, can be used to get/set data that is related to or affects the flow of a conversation.

{: .important}
Please see the [Scripting Functions Introduction](conversation-builder-scripting-functions-introduction.html) for more information on Conversation Builder's built-in functions.

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

