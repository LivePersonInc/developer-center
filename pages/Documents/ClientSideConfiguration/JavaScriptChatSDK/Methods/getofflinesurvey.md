---
pagename: getOfflineSurvey
redirect_from:
  - consumer-experience-javascript-chat-getofflinesurvey.html
Keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Javascript Chat SDK
subfoldername: Methods

order: 110
permalink: javascript-chat-sdk-methods-getofflinesurvey.html

indicator: chat
---

Retrieves the Offline survey to be displayed to the visitor, if no agent is available to chat.

*Note: For more information on the Survey object, see [Surveys](consumer-experience-javascript-chat-surveys.html).*

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
