---
title: addLine
redirect_from:
  - consumer-experience-javascript-chat-addline.html
Keywords:
sitesection: Documents
level2: Consumer Experience
level3: Javascript Chat SDK
level4: Methods

order: 40
permalink: javascript-chat-sdk-methods-addline.html

indicator: chat
---

Sends a chat line to the agent. The response will echo the line sent.

**Notes**:

- *This line will also appear in the next onLine event.*
- *It is recommended to pass in success and error callbacks to his method in order to validate that the line has been sent.*

### Request

**Properties**

| Value |  Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| text	| The string the visitor typed to send to the agent. | string | Required | This will always be treated as a string for security purposes, so even HTML will be deciphered as a string on the agent's side. |

**Sample code**

```javascript
var failedRequest = myChat.addLine({
    text: "Hello, can you help me?",
    success: myChat.lineAdded,
    error: myChat.lineFailed,
    context: myChat
});

if (failedRequest && failedRequest.error) {
    alert(failedRequest.error);
}
```  
                                                                                                                    
### Response

**Sample response**

```json
{ "text": "Hello, can you help me?" }
```