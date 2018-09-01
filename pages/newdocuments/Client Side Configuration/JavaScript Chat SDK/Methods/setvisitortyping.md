---
pagename: setVisitorTyping
redirect_from:
  - consumer-experience-javascript-chat-setvisitortyping.html
Keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Javascript Chat SDK
subfoldername: Methods

order: 50
permalink: javascript-chat-sdk-methods-setvisitortyping.html

indicator: chat
---

This notifies the agent of the typing state of the visitor. The response echoes the request data.

*Note: If you send the same state more than once, the requests will be ignored until a new state is sent.*

### Request

**Properties**

| Value | Description | Type | Required |
| :--- | :--- | :--- | :--- | 
| typing | The current state of the visitor input. | Boolean | Required |

**Sample code**

```javascript
var failedRequest = myChat.setVisitorTyping({
    typing: true,
    success: myChat.typingUpdated,
    error: myChat.typingUpdateFailed,
    context: myChat
});
 
if(failedRequest && failedRequest.error){
    alert(failedRequest.error);
}
```    
                                                                                                                      
### Response

**Sample response**

```json
{ "typing" : true }
```
