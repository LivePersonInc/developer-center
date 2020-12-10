---
pagename: PVA
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: Microsoft Direct Line
permalink: third-party-bots-microsoft-direct-line-pva.html
indicator:
---

### Power Virtual Agents - Overview

[Power Virtual Agents](https://powervirtualagents.microsoft.com) is a platform provided by Microsoft for codeless 
chatbot development.
Therefore, this platform can be used instead of creating a bot with the Microsoft Bot Framework.
Please read the 
[Microsoft documentation](https://docs.microsoft.com/en-us/power-virtual-agents/fundamentals-what-is-power-virtual-agents) 
on a more detailed guide.
Throughout this document the platform will be refered to as `PVA`.

### Usage
The Direct Line secret necessary to add the bot on Third-Party Bots can be found in the `Manage` Section of the PVA bot.

<img class="fancyimage" alt="PVA-secret" src="img/ThirdPartyBots/microsoft-secret-pva.png">

Adding this bot to Third-Party Bots will already enable you to leverage most of the bot functionality.
For certain features of the PVA platform, however, you should also mark the bot as a PVA bot in the 
[bot configuration](third-party-bots-microsoft-direct-line-introduction.html#configuration)

### Limitations

{: .important}
`End of Conversation`: This PVA node type found under `End the conversation`=>`End with survey` will send a native `endOfConversation` activity.
As this is [not supported by the Direct Line Channel](https://docs.microsoft.com/en-us/azure/bot-service/rest-api/bot-framework-rest-direct-line-3-0-end-conversation?view=azure-bot-service-4.0)
this connector is also not capable of supporting this node

{: .important}
The connector will send any Markdown as provided and not process the text further. 


### Support

Currently Third-Party Bots supports the following PVA features:

### Greeting Topic
By enabling the PVA setting the connector will  generate a native welcome event on a new conversation instead of the custom one described under 
`Basic Content`.
On the PVA platform this will trigger the System Topic `Greeting`.
TODO: Basic Content Link

### Multiple Choice options
A question node in PVA can be defined to provide predefined options for users.
Third-Party Bots will automatically translate these options to quick replies.

<img class="fancyimage" alt="Multiple Choice Example" src="img/ThirdPartyBots/microsoft-example-pva-multiple-choice.png">

### Transfer to Agent
This PVA node can be selected under `End the conversation`=>`Transfer to agent` and will create a native event activity
with the name `handoff.initiate`. 3rd-Party Bots supports this event. It is however crutial to take an additional step
for it to work as a Conversational Cloud transfer request. A variable named `skill` needs to be set before the transfer 
node is executed. This can e.g. be achieved by calling a Power Automation Action that returns such a value.

<img class="fancyimage" alt="Transfer example" src="img/ThirdPartyBots/microsoft-example-pva-transfer.png">

The node allows to define a `Private Message to agent`.
This message will be sent before the transfer and is not visible to the customer.

### Channel Data support
The PVA platform does not have a native option to send channel data information.
However, the connector will assume any valid JSON content sent in the message field to be channelData content.
This means all channelData objects documented for this connector can also be sent as a JSON string in the `Message` node.
In the following example this is used to send a Close Conversation action.

<img class="fancyimage" alt="Channel Data example" src="img/ThirdPartyBots/microsoft-example-pva-structured-content.png">







