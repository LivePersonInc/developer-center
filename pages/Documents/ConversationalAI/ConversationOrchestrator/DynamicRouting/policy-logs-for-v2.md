---
pagename: Policy Logs for v2
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Dynamic Routing
permalink: conversation-orchestrator-dynamic-routing-policy-logs-for-v2.html
indicator: messaging
---

### What are policy logs?

Policy logs help you to understand how dynamic routing decisions are made. The tool helps trace routing outcomes back to policy configurations and context variables.

The benefits of using policy logs include:

* Understanding why certain conversions were routed a specific way
* Narrowing down root causes of errors to policy configurations and context variables
* Diving deep to understand why certain policies execute more often than others

{: .attn-note}
Policy Logs are only available to brands that are upgraded to [Conversation Context Service v2](conversation-orchestrator-conversation-context-service-overview.html#api-versions). Please talk to your LivePerson account representative if you want to use this feature and have not been upgraded.

### Using policy logs

Policy logs are available under **Dynamic Routing** and logs start showing up if at least one policy is executed.

<img class="fancyimage" width="800" src="img/convorchestrator/dr_policylogs1.png" alt="The default view of the Policy Logs page">

Logs are available for conversations for up to 7 days. Specific conversations can be searched by using the ConversationId, which is available in the agent workspace.

<img class="fancyimage" width="800" src="img/convorchestrator/dr_policylogs2.png" alt="The search field on the Policy Logs page">

For every conversation, the policies appear in the order they were executed. For every policy, the policy-name, execution-result, conditions and actions are shown. Values of context variables passed during policy execution can be viewed by hovering the mouse on variables in the conditions. Knowing runtime context values is very useful for triaging issues or for making improvements.

<img class="fancyimage" width="800" src="img/convorchestrator/dr_policylogs3.png" alt="A tooltip that shows the value of a context variable passed during policy execution">

Errors appear in red, and root cause of errors can be viewed on mouse hover.

<img class="fancyimage" width="600" src="img/convorchestrator/dr_policylogs4.png" alt="An example error that appears in red">

### Understanding policy states

| Status | Definition |
| --- | --- |
| <img style="width:75px" src="img/convorchestrator/dr_policylogs_states_true.png" alt="The True status indicator"> | The policy execution outcome was TRUE, and the conversation was routed by this policy because the context variables passed at runtime matched those defined in the policy condition. |
| <img style="width:75px" src="img/convorchestrator/dr_policylogs_states_false.png" alt="The False status indicator"> | The policy execution outcome was FALSE, and the conversation was not routed by this policy because the context variables passed at runtime did not match those defined in the policy condition. |
| <img style="width:75px" src="img/convorchestrator/dr_policylogs_states_error.png" alt="The Error status indicator"> | The policy did not execute due to an ERROR. The error can be found by hovering on the context variable that is highlighted in red. An example of an error is a 400 exception in a FAAS function that is used in a policy. |
| <img style="width:75px" src="img/convorchestrator/dr_policylogs_states_invalid.png" alt="The Invalid status indicator"> | The policy was not configured correctly. An example of an invalid policy is passing a number to a context variable that’s expecting a string. |
| <img style="width:75px" src="img/convorchestrator/dr_policylogs_states_disabled.png" alt="The Disabled status indicator"> | The policy was disabled and did not execute. |

### Common errors

The following are common errors that can be deduced using policy logs:

* An intended policy was configured to have invalid conditions when the conversation was routed.
* An intended policy was disabled when the conversation was routed.
* There was an error in custom FAAS logic.
* An intended policy was placed too low in the priority order, and other policies were executed before it.
* An intended policy was disabled at the time the conversation was routed.
