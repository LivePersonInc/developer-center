---
title: getEstimatedWaitTime
Keywords:
level1: Documents
level2: Consumer Experience
level3: Javascript Chat SDK
level4: Methods
order: 200
permalink: consumer-experience-javascript-chat-getestimatedwaittime.html
---

This method returns the estimated wait time in seconds before a chat starts.

A few special cases are described below:

| Value |	Description |
| :--- | :--- |
| 0 | At least one agent is available to chat immediately (the agent is online and has not exceeded his/her maximum number of chats). |
| -1	| No agents are online and/or the chat service is unavailable. |
| -2	| Chat service is available, however, there is not enough data to predict the estimated wait time. |

### Request

**Possible properties on the request object**

| Value | Description | Type |
| :--- | :--- | :--- |
| skill	| The required skill for the chat | string |
| serviceQueue | The queue type from which an agent is required. | string |

**Sample request**

```javascript
var failedRequest = myChat.getEstimatedWaitTime({
    skill: "PCRepair", //The skill we want
    success: repair.gotData, //A callback function on success
    error: repair.dataFailed, //A callback function on error
    context: repair //The execution context for our callbacks
});

if (failedRequest && failedRequest.error) {
    alert(failedRequest.error);
}
```                                                                                                                            
### Response

**Sample response**

```json
{ "estimatedWaitTime" : 0 }
```
