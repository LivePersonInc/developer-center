---
pagename: Conversational Commands
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Event Sources
permalink: liveperson-functions-event-sources-conversational-commands.html
indicator: both
---

With **Conversational Commands**, agents are able to invoke `lambdas` from the Agent Workspace by typing `/` into the messaging input in the connections panel. This empowers agents to use a bank of preconfigured, account-specific commands, to enrich the conversation with integrated functions that will help them interact efficiently with the consumer.

![Conversational Commands](img/conversational_commands.png)

Along with the invocation, the function is sent a payload containing the conversation ID and the arguments provided by the agent. This payload can then be used in the function for further processing and referencing. The result of the function has to either be a string or a number and will be shown in the Agent Workspace as a message in the transcript.

**Note** The response is not actually stored in the conversation transcript, it will only be stored temporarily in the browser and is only visible to the agent.

{: .important}
It is required that your account has the New Agent Workspace enabled; please contact your account team in order to do this.

### Configuration

{: .important}
Agent permissions required: **Use enhanced Agent Workspace** and **FaaS-Invocation** permissions have to be enabled.

#### Step 1 - Create a new Function

Create a new `lambda` from **Conversational Command** as the triggering event. The name of the function will be displayed as the name of the Conversational Command in the Agent Workspace.

The `description` will also be shown in the Agent Workspace. To give the Agent a hint on how to use the function, we recommend providing the available arguments for the function in square brackets in the description.

Here is an example for the description of a Conversational Command that sends the transcript of the conversation via email:

`[email, subject:optional] - Sends the transcript of the conversation to the provided email address.`

**Note** You can create up to 30 functions for this event.

#### Step 2 - Edit the Function

Adjust the code in the template according to your needs by modifying the function. On the right side you can see an example of the payload (in the sidebar, which you might need to open).

As mentioned above, the function must return either a string or a number. This response will be displayed in the Agent Workspace as a message. If the function returns anything else, the Agent will only be shown a generic success message. If the `lambda` returns an `Error`, this will be presented to the Agent as an error message.

#### Step 3 - Deploy the function

Just like any other function, this function must be deployed before it can be used. [Please see this document](function-as-a-service-deploying-functions.html) for more information on how to deploy your function. At this point, you can also test your function.

### Examples

You can find more information and examples in the the [LivePerson Knowledge Center](https://knowledge.liveperson.com/agent-manager-workspace-agent-tools-for-messaging-agent-workspace-for-messaging-conversational-commands.html/)

### Payload details

<table>
<thead><tr><th>property</th><th>description</th><th>type</th><th>example</th></tr></thead><tbody>
 <tr><td>conversationId</td><td>ID of conversation</td><td>STRING</td><td>c840e51e-5f65-4ad4-8d34-5c82b99a2200</td></tr>
 <tr><td>arguments</td><td>Array of strings with the arguments the Agent provided.</td><td>ARRAY</td><td>["arg1", "arg2", "argN"]</td></tr>
</tbody></table>

The following is an example of the payload that the agent workspace sends to Functions in a JSON format:

```json
{
  "timestamp":2342343242,
  "headers":[

  ],
  "payload":{
    "conversationId":"4711",
    "arguments":[
      "echo",
      "this",
      "message"
    ]
  }
}
```
