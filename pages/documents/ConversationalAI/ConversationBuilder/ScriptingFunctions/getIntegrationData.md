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

{: .important}
New to scripting functions? Please review the [Introduction](conversation-builder-scripting-functions-introduction.html).

### Is API integration execution successful?

Used to determine whether execution of the API integration was successful.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `isApiExecutionSuccessful()` | None | Boolean (true or false) |

#### Example

```javascript
to be added
```

### Get API integration status code

Used to retrieve the HTTP status (response) code from execution of the API integration.

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `getApiStatusCode()` | None | string: 200, 201, 400, 440, 450, etc. |

#### Example

```javascript
to be added
```

### Get API integration results count

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
