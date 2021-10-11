---
pagename: Troubleshooting
redirect_from:
    - conversation-orchestrator-agent-assist-troubleshooting.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Assist
permalink: conversation-assist-troubleshooting.html
indicator: messaging
---

If you encounter issues during setup, verify the following:

### Common
**All flows should work as expected outside of Conversation Assist.** 

For example:
* The Conversation Builder bot should respond as expected using Conversation Builder's [Preview tool](conversation-builder-testing-deployment-previewing.html).
* The knowledge base should perform as expected using KnowledgeAI's [Answer Tester tool](knowledgeai-optimizing-your-content-tuning-a-knowledge-base.html).

### Skills
Remember to assign skills to your bots and knowledge bases within Conversation Assist’s configuration. Otherwise, they are not used in recommendations.

### Campaigns
The campaign must be of the Messaging conversation type. Recommendations aren’t made if the type is Chat.

Also, the engagement must route to specific skills. It should not be set to route to all skills.
 
<img width="500" src="img/agentassist/routing.png">

If you instead set the engagement to route to “All skills,” the effect is that conversations within the engagement don’t have an assigned skill. As a result, there are no recommendations within the Conversational Cloud agent workspace since all recommendations are made based on the conversation’s skills.

### Bots
The bot must be able to join a conversation, i.e., there is an assigned bot user that is online and ready to accept conversations.

### Knowledge bases
If you're using an internal knowledge base, the articles in the knowledge base must be enabled. By default, articles manually added to knowledge bases of this type are initially disabled.