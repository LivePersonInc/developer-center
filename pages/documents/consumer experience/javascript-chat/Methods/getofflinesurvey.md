---
title: getOfflineSurvey
Keywords:
level1: Documents
level2: Consumer Experience
level3: Javascript Chat SDK
level4: Methods

order: 110
permalink: consumer-experience-javascript-chat-getofflinesurvey.html

indicator: messaging
---

Retrieves the Offline survey to be displayed to the visitor, if no agent is available to chat.

*Note: For more information on the Survey object, see [Surveys](consumer-experience-javascript-chat-surveys.html){:target="_blank"}.*

### Request

**Properties**

| Value | Description | Type | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| skill	| Survey for a specific skill. | string | Optional | |
| visitorProfile | Requests a survey for a specific visitor profile. | string | Optional | If both the skill and visitorProfile properties are provided, only the visitorProfile property will be considered. | 
| visitorId | The identifier of the visitor. | string | Optional | |
| surveyName | Requests a specific survey. | string | Optional  | If visitorprofile or skill properties are provided, and a survey with this name exists. The requested survey will be returned unless there is a rule that overrides this name. |
| surveyApiId | A survey ID you know of in the server. | string | Optional | |

**Sample code**

```javascript
var failedRequest = myChat.getOfflineSurvey({
    skill: "support",
    success: myChat.handleOfflineSurvey,
    error: myChat.errorGettingOfflineSurvey,
    context: myChat
});

if (failedRequest && failedRequest.error) {
    alert(failedRequest.error);
}
```                                                                                                                    
