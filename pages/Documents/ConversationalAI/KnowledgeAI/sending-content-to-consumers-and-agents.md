---
pagename: Sending Content to Consumers and Agents
redirect_from:
    - knowledge-base-sending-content-to-consumers.html
    - knowledgeai-sending-content-to-consumers.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: KnowledgeAI
permalink: knowledgeai-sending-content-to-consumers-and-agents.html
indicator: both
---

After you’ve added a knowledge base and finalized its content, you can expose its articles to consumers or agents as desired.

**For consumers**

In Conversation Builder, add a [Knowledge AI interaction](conversation-builder-interactions-integrations.html#knowledge-ai-interactions) within a bot.

A common use case for a Knowledge AI interaction is within a [Fallback dialog](conversation-builder-dialogs-fallback-dialogs.html), where you want to direct a consumer utterance that didn’t match a dialog starter into a knowledge base search. If an appropriate search result is found, it can be displayed. If no result is found, you might then display a "sorry" message or transfer the conversation to a human agent.

Alternatively, you might have an FAQ dialog or bot that is driven by a knowledge base full of articles. For an example use case that takes advantage of meta intents to capture all FAQ questions, check out the tutorial that's [here](tutorials-guides-bot-groups-other-techniques-meta-intents-knowledge-bases.html).

**For agents**

Save agents time by offering articles as recommended answers to consumer questions. To do this, add a Knowledge Base integration within [Conversation Assist](conversation-assist-overview.html).
