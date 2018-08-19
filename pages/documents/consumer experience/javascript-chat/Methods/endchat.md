---
title: endChat
redirect_from:
  - consumer-experience-javascript-chat-endchat.html
Keywords:
sitesection: Documents
level2: Consumer Experience
level3: Javascript Chat SDK
level4: Methods

order: 70
permalink: javascript-chat-sdk-methods-endchat.html

indicator: chat
---

Method to notify the agent that the visitor has ended the chat. The method publishes the new state as the response.

### Request

**Properties**

| Value | Description | Type | Required |
| :--- | :--- | :--- | :--- |
| disposeVisitor | If set to true will not retrieve this session's data on refresh. | Boolean | Optional |

*Note: This will also cause the [onStop](consumer-experience-javascript-chat-onstop.html){:target="_blank"} event to be triggered from the server.*

**Sample code**

```javascript
var failedRequest = myChat.endChat({
    success: myChat.chatEnded,
    error: myChat.chatEndFailed,
    context: myChat,
    disposeVisitor: true
});

if (failedRequest && failedRequest.error) {
    alert(failedRequest.error);
}
```         
                                                                                                             
### Response

**Sample response**

```json
{"state":"ended","time":"20:37:44 GMT+0300 (Jerusalem Daylight Time)"}
```