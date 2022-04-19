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

You won't see a knowledge base in Conversation Assist if any of the following conditions are true:

* The knowledge base is empty, i.e., it doesn’t have any articles yet. In this case, add some articles.
* The knowledge base has articles, but none of the articles are enabled yet. In this case, enable some articles.
* The knowledge base is a legacy knowledge base, so it isn't supported within Conversation Assist. In other words, it uses Knowledge Base intents and the LivePerson (Legacy) NLU engine behind the scenes. In this case, download the knowledge base and import the export file into a new knowledge base. All new knowledge bases use the LivePerson NLU engine by default.