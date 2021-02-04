---
pagename: Get Integration Data
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Scripting Functions
permalink: conversation-builder-scripting-functions-get-integration-data.html
indicator: both
---

Use the following built-in functions to get information on the results of an integration.

### Is API integration execution successful?

`isApiExecutionSuccessful` is used to determine whether execution of an API integration was successful. Returns "true" if execution was successful; returns "false" if execution was unsuccessful.

{: .important}
This method always returns the result of the most recent API integration that was executed. Keep this in mind when you have a dialog that contains multiple API integrations.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `isApiExecutionSuccessful()` | None | Boolean (true or false) |

#### Example

```javascript
var isApiExecutionSuccessful = botContext.isApiExecutionSuccessful();
```

This method is commonly used together with [getApiStatusCode](conversation-builder-scripting-functions-get-integration-data.html#get-api-integration-status-code) (discussed below), for example:

```javascript
// check to see if API was executed
var isApiExecutionSuccessful = botContext.isApiExecutionSuccessful();
if(isApiExecutionSuccessful){
  var apiStatusCode = botContext.getApiStatusCode();
  botContext.printDebugMessage("API Execution Successful with Status Code: "+apiStatusCode);
 
  if(apiStatusCode == "200"|apiStatusCode == "201"|apiStatusCode == "203"){
    // request was successful
    botContext.printDebugMessage("All is well.");
  }else{
    // request was not successful
    botContext.printDebugMessage("Something went wrong!");
  }  
     
}
```

{: .important}
You can also define rules in an interaction based on the result of an API integration; for information on this, see [here](conversation-builder-interactions-integrations.html#integration-interactions).

### Get API integration status code

`getApiStatusCode` is used to retrieve the HTTP status (response) code returned from execution of an API integration. The returned code might indicate success or failure, and, in the case of a failure, it can provide insight into the type of error that occurred.

{: .important}
This method always returns the result of the most recent API integration that was executed. Keep this in mind when you have a dialog that contains multiple API integrations.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getApiStatusCode()` | None | string: 200, 201, 400, 440, 450, etc. |

#### Example

```javascript
var apiStatusCode = botContext.getApiStatusCode();
```

This method is commonly used together with [isApiExecutionSuccessful](conversation-builder-scripting-functions-get-integration-data.html#is-api-integration-execution-successful); see that entry above for an example.

### Get API integration results count

Most commonly used to check whether an API integration returned any results at all, and how many. If no results are returned, you should display an error message or redirect to a failover message.

For example, assume you are using the KnowledgeBase feature to create an FAQ bot. If the user’s query doesn’t return any results, you might want to respond with another message that provides some guidance.

#### Example

In the below example, `faqIntegration` is the name of the API integration, `title` is the custom data field mapping name, and `count` is the parameter that gives you the actual count.

```javascript
var results = botContext.getBotVariable('faqIntegration.title.count');
if (results < 1) {
      botContext.sendMessage('Sorry, I was not able to find any notes for this contact.');
}
```
