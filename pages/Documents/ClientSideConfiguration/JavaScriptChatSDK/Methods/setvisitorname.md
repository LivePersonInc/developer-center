---
pagename: setVisitorName
redirect_from:
  - consumer-experience-javascript-chat-setvisitorname.html
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Javascript Chat SDK
subfoldername: Methods
order: 60
permalink: javascript-chat-sdk-methods-setvisitorname.html
indicator: chat
---

This updates the visitor's name in the chat. The response echoes the original request data.

*Note: If the visitor's name is the same as the currently registered name for the chat, the request will be ignored.*

### Request

**Properties**

| Value | Description | Type |
| :--- | :--- | :--- | :--- |
| visitorName	| The visitor's name. | string |

**Sample code**

```javascript
var failedRequest = myChat.setVisitorName({
    visitorName: "Phil",
    success: myChat.nameUpdated,
    error: myChat.nameUpdateFailed,
    context: myChat
});

if(failedRequest && failedRequest.error){
    alert(failedRequest.error);
}
```

### Response

**Sample response**

```json
{ "visitorName" : "Phil" }
```