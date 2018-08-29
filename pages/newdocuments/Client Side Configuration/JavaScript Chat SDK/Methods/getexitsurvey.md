---
pagename: getExitSurvey
redirect_from:
  - consumer-experience-javascript-chat-getexitsurvey.html
Keywords:
sitesection: Documents
categoryname: Consumer Experience
documentname: Javascript Chat SDK
subfoldername: Methods

order: 90
permalink: javascript-chat-sdk-methods-getexitsurvey.html

indicator: chat
---

The Exit survey will be displayed after the chat has ended if one was configured for the account.

**Notes**:

- *For more information on the Survey object, see [Surveys](consumer-experience-javascript-chat-surveys.html).*
- *To submit this survey use the [submitExitSurvey](consumer-experience-javascript-chat-submitexitsurvey.html) method.*

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

