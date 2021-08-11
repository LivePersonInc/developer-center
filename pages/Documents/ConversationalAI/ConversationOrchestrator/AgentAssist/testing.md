---
pagename: Testing
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Agent Assist
permalink: conversation-orchestrator-agent-assist-testing.html
indicator: messaging
---

**Tip:** Before testing recommendations, verify that your bots and knowledge bases work in isolation.

**To test recommended actions**

1. Create a test skill, and assign it to your bot and/or knowledge base.
2. [Start a new messaging conversation](https://developers.liveperson.io/web-messaging/) from the consumer side.
3. Open Conversational Cloud and accept the conversation.
    
    This opens the conversation window.
4. From the consumer side, enter a message that is relevant to a bot or an article that you want to be triggered. The goal here is to test that the intent is being mapped correctly and triggering the right recommendations.

    In this example below, the consumer is asking about canceling an order.

    <img width="550" src="img/agentassist/test1.png">

5. Click a recommendation to expand the box and view more information about it.

    <img width="550" src="img/agentassist/test2.png">

6. Test [using the recommendations](conversation-orchestrator-agent-assist-agent-experience.html), i.e., use the bot or the article.

    Make sure to test both positively and negatively. For example, if you enter a consumer message that doesn’t map to an intent, you should expect to receive no recommendations.
