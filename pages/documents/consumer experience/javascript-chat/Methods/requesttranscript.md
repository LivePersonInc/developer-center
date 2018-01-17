---
title: requestTranscript
Keywords:
level1: Documents
level2: Consumer Experience
level3: Javascript Chat SDK
level4: Methods

order: 80
permalink: consumer-experience-javascript-chat-requesttranscript.html

indicator: chat
---

Sends a copy of the chat transcript to an email address at the end of the chat session. The response will echo the email data.

### Request

**Properties**

| Value | Description | Type | Required |
| :--- | :--- | :--- | :--- |
| email	| This must be a valid email address or the request will not be sent. | string | Required |
| timezoneOffset	| A number representing the time-zone offset from UTC, in milliseconds, for the date based on current host system settings. The number will be used to adjust the timestamps in the email| string | Optional |

**Sample code**

```javascript
var  failedRequest = myChat.requestTranscript({
    email: "me@me.com",
    success: myChat.transcriptQueued,
    error: myChat.transcriptRequestFailed,
    context: myChat,
    timezoneOffset: -7200000
});

if(failedRequest && failedRequest.error){
    alert(failedRequest.error);
}
```

### Response

**Sample response**

```json
{ "email" : "me@me.com" }
```
