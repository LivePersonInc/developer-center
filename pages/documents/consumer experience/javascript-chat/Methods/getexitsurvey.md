---
title: getExitSurvey
Keywords:
level1: Documents
level2: Consumer Experience
level3: Javascript Chat SDK
level4: Methods

order: 90
permalink: consumer-experience-javascript-chat-getexitsurvey.html

indicator: chat
---

The Exit survey will be displayed after the chat has ended if one was configured for the account.

**Notes**:

- *For more information on the Survey object, see [Surveys](consumer-experience-javascript-chat-surveys.html){:target="_blank"}.*
- *To submit this survey use the [submitExitSurvey](consumer-experience-javascript-chat-submitexitsurvey.html){:target="_blank"} method.*

### Request

**Properties**

| Value | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| surveyName | A specific survey for which the name is known. | string | Optional | Otherwise the server will determine the appropriate survey. | 
| surveyApiId | A specific survey ID you know on the server. | string | Optional | |

**Sample code**

```javascript
var failedRequest = myChat.getExitSurvey({
    success: myChat.handleExitSurvey,
    error: myChat.noSurveyRecieved,
    context: myChat
});

if (failedRequest && failedRequest.error) {
    alert(failedRequest.error);
}
```                                                                                                                      

