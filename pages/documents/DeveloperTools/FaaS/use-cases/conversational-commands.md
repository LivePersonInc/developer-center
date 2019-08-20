---
pagename: Conversational Commands
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: LivePerson Functions
subfoldername: Use Cases
permalink: liveperson-functions-use-cases-conversational-commands.html
indicator: both
---

This guide explains how to enable Conversational Commands for LivePerson Functions.

With **Conversational Commands** agents are able to invoke `lambdas` from the Agent Workspace by typing `/` into the messaging input in the connections panel. This empowers agents to use a bank of preconfigured, account-specific commands, to enrich the conversation with integrated functions that will help them interact efficiently with the consumer.

Along with the invocation, the function is sent a payload containing the conversation ID and the arguments provided by the agent. This payload can then be used in the function for further processing and referencing. The result of the function has to either be a string or a number and will be shown in the Agent Workspace as a message in the transcript. 

**Note** The response is not actually stored in the conversation transcript, it will only be stored temporarily in the browser and is only visible to the agent.

<div class="important"> It is required that your account has the New Agent Workspace enabled; please contact your account team in order to do this. Also the Agent profile needs to have the permission `Use enhanced Agent Workspace`.</div>

### Conversational Commands events for Function Invocation

**Conversational Commands** offers one triggering event:

#### Conversational Command

All deployed `lambdas` that for that event will be available as Conversational Commands in the Agent Workspace. 

### Step-by-Step implementation guide

#### Step 1 - Create function

Create a new function using the Conversational Command event.

#### Step 2 - Edit the Function

Adjust the code in the template according to your needs by modifying the function. On the right side you can see an example of the payload (in the sidebar, which you might need to open).

As mentioned above, the function can return either a string or a number. The response will be displayed in the Agent Workspace as a message. If the function returns anything else, the Agent will only be shown a generic success message. If the `lambda` returns an `Error`, this will be presented to the Agent in as an error message.

#### Step 4 - Deploy the function

Just like any other function, this function must be deployed before it can be used. [Please see this document](function-as-a-service-deploying-functions.html) for more information on how to deploy your function. At this point, you can also test your function.

### Payload details

<table>
<thead><tr><th>property</th><th>description</th><th>type</th><th>example</th></tr></thead><tbody>
 <tr><td>conversationId</td><td>ID of conversation</td><td>STRING</td><td>c840e51e-5f65-4ad4-8d34-5c82b99a2200</td></tr>
 <tr><td>arguments</td><td>Array of strings with the arguments the Agent provided.</td><td>ARRAY</td><td>["arg1", "arg2", "argN"]</td></tr>

</tbody></table>
