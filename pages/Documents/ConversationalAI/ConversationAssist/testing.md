---
pagename: Testing
redirect_from:
    - conversation-orchestrator-agent-assist-testing.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Assist
permalink: conversation-assist-testing.html
indicator: messaging
---

### Tip
Before testing recommendations, verify that your bots and knowledge bases work in isolation.

### Test recommendations

1. Create a test skill, and assign it to your bot and/or knowledge base.
2. [Start a new messaging conversation](https://developers.liveperson.io/web-messaging/) from the consumer side.
3. Open Conversational Cloud and accept the conversation.

    This opens the conversation window.
4. From the consumer side, enter a message that is relevant to a bot or an article that you want to be triggered. The goal here is to test that the intent is being mapped correctly and triggering the right recommendations.

    In this example below, the consumer is asking about canceling an order.

    <img loading="lazy" width="550" alt="Two recommendations being offered inline in the conversation" src="img/agentassist/test1.png">

5. Click a recommendation to expand the box and view more information about it.

    <img loading="lazy" width="550" alt="The expanded view of offered recommendations, which shows more details" src="img/agentassist/test2.png">

6. Test [using the recommendations](conversation-assist-agent-experience.html), i.e., use the bot or the article.

    Make sure to test both positively and negatively. For example, if you enter a consumer message that doesn’t map to an intent, you should expect to receive no recommendations.