---
pagename: askMaven
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Scripting Functions
permalink: conversation-builder-scripting-functions-askMaven.html
indicator: both
---

### askMaven

The following, built-in functions in Conversation Builder can be used to programmatically call [Maven](maven-ai-overview.html) capabilities. These functions conveniently wrap the [askMaven APIs](maven-ai-askmaven-overview.html). You can use them as part of a [Maven Concierge](conversation-builder-bot-templates-maven-concierge.html) bot to ask Maven for the next best actions (route to skill, route to Knowledge Base article, etc.).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `askMaven()` | None<br><br>By default, this method is invoked on the current conversation, i.e., it uses the current conversation ID. | JSON response (String) |
| `askMaven(String conversationId, String consumerId, String groupId)` | *conversationId (String)* - Optional. The conversation ID of the current conversation.<br><br>*consumerId (String)* - Optional. The LivePerson consumer ID for the current conversation.<br><br>*groupId (String)* - Optional. The group ID associated with the session store variable call to set values. If no groupId is specified, then the conversationId will be used to associate with the session store variables. | JSON response (String) |

#### Example

```javascript
var askMavenResponse = botContext.askMaven("fdf4025dba834eee7618f190ca3d452eaf784063130b8bcb67cd2b38ead497a5", "123456789", "87876");
var getContextJsonResponse = JSON.parse(askMavenResponse.jsonData);
var getContextJsonResponseStr = askMavenResponse.jsonData;
var policyActions = getContextJsonResponse.api_policyResponse.rule.actions[0];
var policyRule = getContextJsonResponse.api_policyResponse.rule;
botContext.setBotVariable("policyActions: ", policyActions, true, false);
botContext.setBotVariable("getContextJsonResponse", getContextJsonResponseStr, true, false);
```