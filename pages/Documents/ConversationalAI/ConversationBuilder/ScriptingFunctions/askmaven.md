---
pagename: askMaven
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Scripting Functions
permalink: conversation-builder-scripting-functions-askmaven.html
indicator: both
---

### askMaven

The following, built-in `askMaven` functions in Conversation Builder can be used to programmatically call [Conversation Orchestrator](maven-ai-overview.html) capabilities. These functions conveniently wrap the [Recommendation APIs](maven-ai-askmaven-overview.html). You can use them as part of a [Maven Concierge](conversation-builder-bot-templates-maven-concierge.html) bot to ask Conversation Orchestrator for the next best actions (route to skill, route to Knowledge Base article, etc.).

Both methods return a String of the JSON response from the askMaven API. For a response example, see [here](maven-ai-askmaven-methods.html#get-next-actions).

| Function Name | Arguments | Returns |
| --- | --- | --- |
| `askMaven()` | None<br><br>By default, this method is invoked on the current conversation, i.e., it uses the current conversation ID. | JSON response (String) |
| `askMaven(String conversationId, String consumerId, String groupId)` | *conversationId (String)* - Optional. The conversation ID of the current conversation.<br><br>*consumerId (String)* - Optional. The LivePerson consumer ID for the current conversation.<br><br>*groupId (String)* - Optional. The group ID associated with the session store variable call to set values. If no groupId is specified, then the conversationId will be used to associate with the session store variables. | JSON response (String) |

#### Example

```javascript
// disable context switching
botContext.setBotVariable('skipPreviousDialog', 'true', true, false);
// ask maven
botContext.printDebugMessage("BEGINNING ASK MAVEN CALL");
var askMavenResponse = botContext.askMaven();
botContext.printDebugMessage("ASK MAVEN RESPONSE:"+askMavenResponse);
var getContextJsonResponse = JSON.parse(askMavenResponse);
var policyActions = getContextJsonResponse.rule.actions;
botContext.setBotVariable("policyActions", JSON.stringify(policyActions), true, false);
botContext.printDebugMessage("policyActions: "+JSON.stringify(policyActions));

// test for NO ACTIONS
if(!policyActions){
  botContext.setTriggerNextMessage("Agent No Actions Found");
} else {
  botContext.setTriggerNextMessage("Agent Maven Response");
}
```