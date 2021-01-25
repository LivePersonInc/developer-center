---
pagename: Troubleshooting
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Agent Assist
permalink: conversation-orchestrator-agent-assist-troubleshooting.html
indicator: messaging
---

If you encounter issues during setup, verify the following:

### Common
**All flows should work as expected outside of Conversation Orchestrator.** 

For example:
* The Conversation Builder bot should respond as expected using the Preview tool.
* The knowledge base should perform as expected using the Knowledge Base search tool.

### Campaigns
The campaign must be of the Messaging conversation type. Recommendations aren’t made if the type is Chat. When you enable recommendations for the first time (i.e., you enable the **Enable recommendations** setting within Agent Assist), you are shown the following, one-time message:

<img width="500" src="img/agentassist/message.png">

Also, the engagement must route to specific skills. It should not be set to route to all skills.
 
<img width="500" src="img/agentassist/routing.png">

If you instead set the engagement to route to “All skills,” the effect is that conversations within the engagement don’t have an assigned skill. As a result, there are no recommended actions within the Conversational Cloud agent workspace since all recommendations are made based on the conversation’s skills.

### Bots
* You must use a supported bot provider: Conversation Builder, Google DialogFlow, or IBM Watson.
* The bot must be able to join a conversation, i.e., there is an assigned bot user that is online and ready to accept conversations.

### Knowledge bases
If you're using an internal knowledge base, the articles in the knowledge base must be enabled. By default, articles manually added to knowledge bases of this type are initially disabled.