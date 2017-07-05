---
title: Click
level1: Documents
level2: Real Time Interactions
level3: Engagement Trigger API
level4: Methods
order: 10
permalink: trigger-click.html

indicator:
---

This method simulates a mouse click on an engagement. For example, a virtual agent can programmatically start the conversation flow without knowing where in the DOM the engagement is. The method can receive information about the consumer's actions that lead to the "click". This information is displayed as an Automatic Message to both agent and consumer in the conversation window once the consumer is connected to an agent.

**Syntax**

`lpTag.taglets.rendererStub.click(engagementId);`

**Parameters**

| Name | Description | Type/Value |
| :--- | :--- | :--- |
| engagementId | The ID of the engagement on which to simulate a mouse click. | ALPHA_NUMERIC |
| options | [Optional] additional options to pass to this method. | Object |

**Options Object Properties**

| Name | Description | Type/Value |
| :--- | :--- | :--- |
| preChatLines | An array of strings that can be used to pass information about the consumer's actions that lead to the conversation. The sent data is presented as an Automatic Message to both agent and consumer in the conversation window once the consumer is connected to an agent. | ARRAY |

*Example*

    
```javascript

    if(lpTag && lpTag.taglets && lpTag.taglets.rendererStub){
       var clicked = lpTag.taglets.rendererStub.click(12356454, {preChatLines: ["The assigned agent will help you with the last question you asked the Virtual Agent \"If I sign up today can I do a 12 month contract instead of 24?\""]});
    }
```

**Return Value**

The method returns a boolean value: **True** if an engagement was found and clicked; **false** if not.  
