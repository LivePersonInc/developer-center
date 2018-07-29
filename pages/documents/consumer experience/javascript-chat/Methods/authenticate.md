---
title: authenticate
Keywords:
level1: Documents
level2: Consumer Experience
level3: Javascript Chat SDK
level4: Methods

order: 31
permalink: consumer-experience-javascript-chat-authenticate.html

indicator: chat
---

This resource enables consumer SSO with LiveEngage.


**Notes**:

- **Using this resource depends on authenticated engagement parameters.**
- **In the response for this authentication resource, the following events will be triggered: onAuthentication, onAuthenticationFail.**

### Request

**Properties**

| Element | Description | Type | Notes |
| :--- | :--- | :--- | :--- | :--- |
| connectorId | The connectorId that comes back with engagement. If not filled, the SDK will take the ID from the engagement response by itself.| number | Optional |
| ssoKey | The OAuth2.0 + OpenID Connect (code / JWT). | string | Optional |
| redirectUri   | The redirect uri | string | Required |
| engagementId  | The engagement ID in case of a LiveEngage account | number | Optional |
| contextId | The context ID of the engagement that was clicked in case of a LiveEngage account. | string | Optional |
| sessionId |  The monitored visitor session ID in case of a LiveEngage account. | string | Optional |
| visitorId | The monitored visitor ID in case of a LiveEngage account. | string | Optional |

**Sample code**


```javascript
chat.authenticate({
    "authChatConnId": 12345,
    "ssoKey": "SDFKN33LJjksf843jioer09jjiodfs8sfd89fsd7fds6werhuer9ret8h",
    "redirectUri": "https://liveperson.net",
    "engagementId": 3333,
    "contextId": "4",
    "sessionId": "OXdr7ruxRpyY6DtJfpO37v",
    "visitorId": "cxY2E0NjU3MTgxNmI0ZTJl"
});
```

### Response

**Data in the response**

| Property  | Description | Type |
| :--- | :--- | :--- |
| conversationId | The conversation ID you should pass to requestChat method. | string |
| participantId | The participant ID you should pass to requestChat method. | string |


**Sample response**

```json
{
   "conversationId" : "fdabacfa-dd4d-4e95-869c-29c8f7631006",
   "participantId" : "43298091-962e-4be5-bacc-11f3c24ece00"
}
```
