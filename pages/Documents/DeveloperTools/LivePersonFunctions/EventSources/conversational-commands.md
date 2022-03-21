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

When properly set up, agents can use Conversational Commands to invoke functions from the Agent Workspace. By typing `/` into the messaging input in the connections panel, all available commands are shown. This empowers agents to use a bank of preconfigured, account-specific commands, to enrich the conversation with integrated functions that will help them interact efficiently with the consumer.

<img src="img/functions/functions_conversational_commands.png" alt="Functions: Conversational Commands" style="width:50%;"/>

Along with the invocation a payload is sent containing the conversation ID and the arguments provided by the agent. This payload can then be used in the function for further processing and referencing. The result of the function has to either be a string or a number and will be shown in the Agent Workspace as a message in the transcript.

**Note:** The response is not actually stored in the conversation transcript, it will only be stored temporarily in the browser and is only visible to the agent.

### Configuration

{: .important}
It is required that your account has the New Agent Workspace enabled; please contact your account team in order to do this.

To be able to use Conversational Commands an Agent needs the following permissions:

* **Use enhanced Agent Workspace**
* **FaaS-Invocation**

#### Step 1 - Create a new Function

Create a new function with the **Conversational Command** event as the trigger. The name of the function will be displayed as the name of the Conversational Command in the Agent Workspace.

The `description` will also be shown in the Agent Workspace. To give the Agent a hint on how to use the function, we recommend providing the available arguments for the function in square brackets in the description.

Here is an example for the description of a Conversational Command that sends the transcript of the conversation via email:

`[email, subject:optional] - Sends the transcript of the conversation to the provided email address.`

**Note:** You can create up to 30 functions for this event.

#### Step 2 - Edit the Function

Adjust the code in the template according to your needs by modifying the function. On the right side you can see an example of the payload (in the sidebar, which you might need to open).

The function must return either a string or a number. This response will be displayed in the Agent Workspace as a message. If the function returns anything else, the Agent will only be shown a generic success message. If the function returns an `Error`, this will be presented to the Agent as an error message.
Please see our [deep dive UI Creation Process](liveperson-functions-getting-started-deep-dive-ui.html#creation-process) section or as alternative [deep dive CLI Create](liveperson-functions-getting-started-deep-dive-cli.html) section for further information.
#### Step 3 - Deploy the function

Just like any other function, this function must be deployed before it can be used.  Please see our [deep dive UI Deployment Process](liveperson-functions-getting-started-deep-dive-ui.html#deployment-process) section or as alternative [deep dive CLI Deploy](liveperson-functions-getting-started-deep-dive-cli.html) section for more information on how to deploy your function.
### Examples

You can find more information and examples in the the [LivePerson Knowledge Center](https://knowledge.liveperson.com/agent-manager-workspace-agent-tools-for-messaging-agent-workspace-for-messaging-conversational-commands.html/)

### Payload details

|property|description|type|example|
|--- |--- |--- |--- |
|conversationId|ID of the conversation.|STRING|c840e51e-5f65-4ad4-8d34-5c82b99a2200|
|arguments|Array of strings with the arguments the Agent provided.|ARRAY|["arg1", "arg2", "argN"]|

The following is an example of a payload that the Agent Workspace sends to Functions in a JSON format:

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
